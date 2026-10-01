import {sqliteTable,text,integer,index} from 'drizzle-orm/sqlite-core';
export const carts=sqliteTable('carts',{owner:text('owner').primaryKey(),items:text('items').notNull(),updated:integer('updated').notNull()});
export const orders=sqliteTable('orders',{id:text('id').primaryKey(),owner:text('owner').notNull(),payload:text('payload').notNull(),created:integer('created').notNull()},t=>[index('orders_owner').on(t.owner)]);
export const enquiries=sqliteTable('enquiries',{id:text('id').primaryKey(),owner:text('owner').notNull(),payload:text('payload').notNull(),created:integer('created').notNull()});
