const API_URL =
"https://Api.BrsApi.ir/Market/Gold_Currency.php?key=BSzSYFaRH8NcdMi7YpLdmmHYbmRjdlx7";



function format(num){
    return Number(num).toLocaleString('fa-IR');
}

function setStatus(id,isOpen){

    const el=document.getElementById(id);

    if(isOpen){
        el.className="status open";
        el.innerText="باز";
    }else{
        el.className="status closed";
        el.innerText="بسته";
    }
}

function checkOpen(start,end,h){

    if(start<end){
        return h>=start && h<end;
    }

    return h>=start || h<end;
}

function updateSessions(){

    const now=new Date();

    const h=now.getUTCHours();
    const m=now.getUTCMinutes();
    const s=now.getUTCSeconds();

    document.getElementById("utc-clock").innerText=
    `UTC ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    setStatus("london",checkOpen(8,17,h));
    setStatus("newyork",checkOpen(13,22,h));
    setStatus("tokyo",checkOpen(0,9,h));
    setStatus("sydney",checkOpen(22,7,h));
}

async function loadMarket(){

    try{

        const response=await fetch(API_URL);

        const data=await response.json();

        const xau=data.gold.find(i=>i.symbol==="XAUUSD");
        const gold18=data.gold.find(i=>i.symbol==="IR_GOLD_18K");
        const melted=data.gold.find(i=>i.symbol==="IR_GOLD_MELTED");

        const usd=data.currency.find(i=>i.symbol==="USD");
        const usdt=data.currency.find(i=>i.symbol==="USDT_IRT");

        const emami=data.coin.find(i=>i.symbol==="EMAMI");
        const nim=data.coin.find(i=>i.symbol==="NIM");

        if(xau) document.getElementById("xau").innerText=format(xau.price);
        if(usd) document.getElementById("usd").innerText=format(usd.price);
        if(usdt) document.getElementById("usdt").innerText=format(usdt.price);

        if(gold18) document.getElementById("gold18").innerText=format(gold18.price);
        if(melted) document.getElementById("melted").innerText=format(melted.price);

        if(emami) document.getElementById("emami").innerText=format(emami.price);
        if(nim) document.getElementById("nim").innerText=format(nim.price);

        document.getElementById("last-update").innerText =
        new Date().toLocaleTimeString('fa-IR');

    }catch(error){

        console.log(error);

    }
}

updateSessions();
loadMarket();

setInterval(updateSessions,1000);
setInterval(loadMarket,60000);
