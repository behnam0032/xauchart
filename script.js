const API_URL =
"https://Api.BrsApi.ir/Market/Gold_Currency.php?key=BSzSYFaRH8NcdMi7YpLdmmHYbmRjdlx7";





function formatNumber(num) {

    if (num === undefined || num === null)
        return "---";

    return Number(num).toLocaleString("fa-IR");
}

function setValue(id, value) {

    const el = document.getElementById(id);

    if (!el) return;

    el.innerText = formatNumber(value);
}

function findSymbol(arr, symbol) {

    if (!Array.isArray(arr))
        return null;

    return arr.find(item => item.symbol === symbol);
}

function setStatus(id, isOpen) {

    const el = document.getElementById(id);

    if (!el) return;

    if (isOpen) {

        el.className = "status open";
        el.innerText = "باز";

    } else {

        el.className = "status closed";
        el.innerText = "بسته";
    }
}

function checkOpen(start, end, hour) {

    if (start < end)
        return hour >= start && hour < end;

    return hour >= start || hour < end;
}

function updateSessions(){

const now=new Date();

const day=now.getUTCDay();

const hour=now.getUTCHours()+now.getUTCMinutes()/60;

let marketClosed=false;



if(day===6){

marketClosed=true;

}

if(day===0 && hour<21){

marketClosed=true;

}

if(day===5 && hour>=22){

marketClosed=true;

}



if(marketClosed){

document.getElementById("marketStatus").innerHTML="🔴 بازار فارکس تعطیل است";

document.getElementById("marketStatus").className="market-status market-close";

closeAll();

nextOpenCountdown();

return;

}



document.getElementById("marketStatus").innerHTML="🟢 بازار باز است";

document.getElementById("marketStatus").className="market-status market-open";



updateSession("sydney",hour>=21||hour<6);

updateSession("tokyo",hour>=23||hour<8);

updateSession("london",hour>=7&&hour<16);

updateSession("newYork",hour>=12&&hour<21);

}

function closeAll(){

["sydney","tokyo","london","newYork"].forEach(name=>{

document.getElementById(name+"Status").innerHTML="بسته";

document.getElementById(name+"Card").className="session-card closed";

});

}

function updateSession(name,isOpen){

const card=document.getElementById(name+"Card");

const status=document.getElementById(name+"Status");

if(isOpen){

status.innerHTML="🟢 باز";

card.className="session-card active";

}else{

status.innerHTML="🔴 بسته";

card.className="session-card";

}

}
function nextOpenCountdown(){

const now=new Date();

let target=new Date(now);

target.setUTCHours(21,0,0,0);

// اگر شنبه است، بازگشایی یکشنبه
if(now.getUTCDay()===6){

target.setUTCDate(now.getUTCDate()+1);

}

// اگر یکشنبه قبل از 21 است
else if(now.getUTCDay()===0 && now.getUTCHours()<21){

}

// اگر جمعه بعد از بسته شدن
else{

let days=(7-now.getUTCDay())%7;

if(days===0) days=7;

target.setUTCDate(now.getUTCDate()+days);

}

const diff=target-now;

const h=Math.floor(diff/1000/60/60);

const m=Math.floor(diff/1000/60)%60;

const s=Math.floor(diff/1000)%60;

document.getElementById("nextOpenTime").innerHTML="یکشنبه 21:00 UTC";

document.getElementById("countdown").innerHTML=`${h}h ${m}m ${s}s`;

}
async function loadMarket() {

    try {

        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(data);

        const gold = data.gold || [];
        const currency = data.currency || [];
        const crypto = data.cryptocurrency || [];

        // GOLD

        const xau =
            findSymbol(gold, "XAUUSD");

        const gold18 =
            findSymbol(gold, "IR_GOLD_18K");

        const melted =
            findSymbol(gold, "IR_GOLD_MELTED");

        const emami =
            findSymbol(gold, "IR_COIN_EMAMI");

        const half =
            findSymbol(gold, "IR_COIN_HALF");

        const quarter =
            findSymbol(gold, "IR_COIN_QUARTER");

        // CURRENCY

        const usd =
            findSymbol(currency, "USD");

        // CRYPTO

        const usdt =
            findSymbol(currency, "USDT_IRT");

        // نمایش

        setValue("xau", xau?.price);

        setValue("gold18", gold18?.price);

        setValue("melted", melted?.price);

        setValue("usd", usd?.price);

        setValue("usdt", usdt?.price);

        setValue("emami", emami?.price);

        setValue("half", half?.price);

        setValue("quarter", quarter?.price);

        document.getElementById("last-update").innerText =
            new Date().toLocaleTimeString("fa-IR");

    }
    catch (error) {

        console.error(error);

    }
}

updateSessions();
loadMarket();

setInterval(updateSessions, 1000);

setInterval(loadMarket, 60000);
