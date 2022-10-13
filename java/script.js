
//SHARTI
//Talaba to'plagan balini kiritadi va natijada u kirgan yoki kirmaganligi yoki grant asosida o'qishga qabul qilinganligi aniqlanadi.

//1. O'quvchi 80 dan past ball to'plasa - o'qishga kira olmadingiz (degan yozuv chiqsin)
//2. O'quvchi 80 dan yuqori va 100 dan past ball to'plagan bo'lsa siz super-kontrakt asosida o'qishga tavsiya //qilindingiz (degan yozuv chiqsin) va  kontrakt miqdori yiliga 3000$ qancha pulingiz bor deb so'rasin, mablag'i //yetsa o'qishga qabul qilinadi.
//3. O'quvchi 100 dan yuqori va 150 dan past to'plagan bo'lsa - siz kontrakt asosida qabul qilindizngiz, kontrakt //miqdori yiliga 2000$ qancha pulingiz bor deb so'rasin, mablag'i yetsa o'qishga qabul qilinadi.
//4. O'quvchi 150 dan yuqori va 180 ga tenga ball to'plagan bo'lsa grant asosida o'qishga qabul qilinsin.

const name1 = Number(prompt("necha bal to`pladingiz:"));

let summa;
let kontirakt;

if(name1 <= 80){
   alert('o`qishga kira olmadingiz');
}else if(name1 >= 80 && name1 <= 100){
   alert('siz supper kontirakt asosida o`qishga kirdingiz.');
   summa = Number(prompt("supper kontrakt miqdori yiliga 3000$ qancha bulingiz bor:"));
}else if(name1 >= 100 && name1 <= 150){
   alert('siz kontirakt asosida o`qishga kirdingiz.');
   kontirakt = Number(prompt("kontrakt miqdori yiliga 2000$ qancha bulingiz bor:"));
}else if(name1 >= 150 && name1 <= 180){
   alert('tabriklayman siz Grand asosida o`qishga kirdingiz.');
}else{
   alert('bunday bal mavjut emas.');
}
 
if(summa <= 3000){
   alert('supper kontraktga pulingiz yetmas ekan');
}else if(summa >= 3000){
   alert('sida o`qishga mablag` yetarli.');
}else if(kontirakt >= 2000){
   alert('sida o`qishga mablag` yetarli.');
}else if(kontirakt <= 2000){
   alert('kontraktga pulingiz yetmas ekan');
}
