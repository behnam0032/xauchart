const API_URL =
"https://Api.BrsApi.ir/Market/Gold_Currency.php?key=BSzSYFaRH8NcdMi7YpLdmmHYbmRjdlx7";

function numberFormat(num){

return Number(num).toLocaleString('fa-IR');

}

function setStatus(id, open){

const el = document.getElementById(id);

if(open){

el.className="status open";
el.innerText="باز";

}else{

el.className="status closed";
el.innerText="بسته";

}

}

function isOpen(start,end,hour){

if(start < end){

return hour >= start && hour < end;

}

return hour >= start || hour < end;

}

function updateSessions(){

const now = new Date();

const h = now.getUTCHours();
const m = now.getUTCMinutes();
const s = now.getUTCSeconds();

document.getElementById("utc-clock").innerText =
`UTC : ${h}:${m}:${s}`;

setStatus("london",isOpen(8,17,h));
setStatus("newyork",isOpen(13,22,h));
setStatus("tokyo",isOpen(0,9,h));
setStatus("sydney",isOpen(22,7,h));

}

async function getMarketData(){

try{

const response = await fetch(API_URL);

const data = await response.json();

const xau =
data.gold.find(x=>x.symbol==="XAUUSD");

const gold18 =
data.gold.find(x=>x.symbol==="IR_GOLD_18K");

const melted =
data.gold.find(x=>x.symbol==="IR_GOLD_MELTED");

const usd =
data.currency.find(x=>x.symbol==="USD");

const usdt =
data.currency.find(x=>x.symbol==="USDT_IRT");

document.getElementById("xau").innerText =
numberFormat(xau.price);

document.getElementById("gold18").innerText =
numberFormat(gold18.price);

document.getElementById("melted").innerText =
numberFormat(melted.price);

document.getElementById("usd").innerText =
numberFormat(usd.price);

document.getElementById("usdt").innerText =
numberFormat(usdt.price);

document.getElementById("last-update").innerText =
new Date().toLocaleTimeString('fa-IR');

}
catch(error){

console.log(error);

}

}

updateSessions();
getMarketData();

setInterval(updateSessions,1000);

setInterval(getMarketData,60000);
