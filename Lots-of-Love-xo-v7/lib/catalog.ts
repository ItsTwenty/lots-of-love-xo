export const categories = [
 {id:'birthday',name:'Birthday Cards',short:'Birthdays',note:'Another year, all the love.'},
 {id:'wedding',name:'Wedding Cards',short:'Weddings',note:'For their forever kind of love.'},
 {id:'invitations',name:'Invitations',short:'Invitations',note:'Good things start with an invite.'},
 {id:'thanks',name:'Thank You Cards',short:'Thank you',note:'A little note. A lot of gratitude.'},
 {id:'business-thanks',name:'Small Business Thank You Cards',short:'Business thank you',note:'Make every parcel personal.'},
 {id:'menus',name:'Menus',short:'Menus',note:'A beautiful seat at the table.'},
 {id:'business',name:'Business Cards',short:'Business cards',note:'A memorable first hello.'},
];
export type Design = {id:string;category:string;name:string;price:number;style:string;headline:string;nameDefault:string;message:string;color:string;bg:string;photo?:boolean;logo?:boolean;date?:boolean;tag?:string};
export const products:Design[]=[
 {id:'birthday-love',category:'birthday',name:'A little birthday love',price:4.5,style:'birthday',headline:'happy\nbirthday',nameDefault:'Amelia',message:'to someone very special',color:'#9b454a',bg:'#fcf4e9',tag:'A favourite'},
 {id:'forever',category:'wedding',name:'Your forever starts here',price:4.5,style:'wedding',headline:'to a lifetime\nof love',nameDefault:'Emma & James',message:'and all the little moments in between',color:'#555c43',bg:'#f9f6ed',date:true},
 {id:'all-my-love',category:'birthday',name:'You, me & a memory',price:5,style:'photo',headline:'all my love',nameDefault:'Sophie',message:'my favourite person, always',color:'#873f45',bg:'#f3dfdc',photo:true,tag:'Make it personal'},
 {id:'little-thanks',category:'thanks',name:'A very big little thank you',price:4,style:'thanks',headline:'thank\nyou',nameDefault:'so, so much',message:'you made my day a little brighter',color:'#a54e4f',bg:'#f0dfda'},
 {id:'save-the-date',category:'invitations',name:'The beginning of forever',price:2.5,style:'invite',headline:'save\nthe date',nameDefault:'Olivia & Oliver',message:'join us for our next chapter',color:'#715446',bg:'#f7efe0',date:true},
 {id:'packed-with-love',category:'business-thanks',name:'Packed with a little love',price:0.8,style:'business',headline:'a little parcel.\na lot of love.',nameDefault:'The Sunday Studio',message:'thank you for supporting my small business',color:'#814a49',bg:'#f2ddd7',logo:true},
 {id:'at-the-table',category:'menus',name:'A place at our table',price:1.8,style:'menu',headline:'the\nmenu',nameDefault:'Emma & James',message:'TO BEGIN\nBurrata, ripe tomatoes & basil\n\nTHE MAIN EVENT\nRoast chicken, garden vegetables\n\nSOMETHING SWEET\nLemon tart & summer berries',color:'#4b594e',bg:'#f5f0df',date:true},
 {id:'hello-studio',category:'business',name:'Your next lovely introduction',price:0.6,style:'businesscard',headline:'hello,\nlet’s connect.',nameDefault:'The Sunday Studio',message:'thoughtful things, made by hand',color:'#674a42',bg:'#eee3d6',logo:true}
];
export type Personalization={name:string;headline:string;message:string;date:string;handle:string;color:string;bg:string;font:string;image:string;inside:string};
export type CartItem={id:string;productId:string;personal:Personalization;format:string;size:string;quantity:number;unitPrice:number};
export function defaults(p:Design):Personalization{return {name:p.nameDefault,headline:p.headline,message:p.message,date:'12 September 2027',handle:'@thesundaystudio',color:p.color,bg:p.bg,font:'handwritten',image:'',inside:'',};}
export const money=(n:number)=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(n);
export function price(p:Design,format:string,size:string){return format==='digital'?3.5:Math.round((p.price+(size==='A5'?1:0))*100)/100;}
