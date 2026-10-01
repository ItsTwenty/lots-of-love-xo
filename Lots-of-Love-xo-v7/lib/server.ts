import {env} from 'cloudflare:workers';
let schemaReady = false;
export async function ensureDb(){
  if(!env.DB) throw Error('Storage is temporarily unavailable. Please try again.');
  if(!schemaReady){
    if(typeof env.DB.exec === 'function'){
      try {
        await env.DB.exec(`
          CREATE TABLE IF NOT EXISTS carts (owner text PRIMARY KEY NOT NULL, items text NOT NULL, updated integer NOT NULL);
          CREATE TABLE IF NOT EXISTS enquiries (id text PRIMARY KEY NOT NULL, owner text NOT NULL, payload text NOT NULL, created integer NOT NULL);
          CREATE TABLE IF NOT EXISTS orders (id text PRIMARY KEY NOT NULL, owner text NOT NULL, payload text NOT NULL, created integer NOT NULL);
          CREATE INDEX IF NOT EXISTS orders_owner ON orders (owner);
        `);
        schemaReady = true;
      } catch (err) {
        console.error('D1 schema exec notice:', err);
      }
    } else if(typeof env.DB.prepare === 'function'){
      try {
        await env.DB.prepare('CREATE TABLE IF NOT EXISTS carts (owner text PRIMARY KEY NOT NULL, items text NOT NULL, updated integer NOT NULL)').run();
        await env.DB.prepare('CREATE TABLE IF NOT EXISTS enquiries (id text PRIMARY KEY NOT NULL, owner text NOT NULL, payload text NOT NULL, created integer NOT NULL)').run();
        await env.DB.prepare('CREATE TABLE IF NOT EXISTS orders (id text PRIMARY KEY NOT NULL, owner text NOT NULL, payload text NOT NULL, created integer NOT NULL)').run();
        await env.DB.prepare('CREATE INDEX IF NOT EXISTS orders_owner ON orders (owner)').run();
        schemaReady = true;
      } catch (err) {
        // Ignored or already existing
      }
    }
  }
  return env.DB;
}
export function db(){if(!env.DB)throw Error('Storage is temporarily unavailable. Please try again.');return env.DB;}
export function identity(req:Request){const user=req.headers.get('oai-authenticated-user-id');if(user)return {owner:'user:'+user,cookie:''};const cookie=req.headers.get('cookie')?.match(/(?:^|; )love_session=([a-f0-9-]{36})(?:;|$)/)?.[1];const id=cookie||crypto.randomUUID();return {owner:'guest:'+id,cookie:cookie?'':`love_session=${id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000${new URL(req.url).protocol==='https:'?'; Secure':''}`};}
export function respond(data:unknown,cookie='',status=200){return Response.json(data,{status,headers:{'Cache-Control':'no-store',...(cookie?{'Set-Cookie':cookie}:{})}});}
export function checkOrigin(req:Request){const origin=req.headers.get('origin');if(origin&&origin!==new URL(req.url).origin)throw Error('Request origin is not allowed.');}

