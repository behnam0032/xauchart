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

function updateSessions() {

    const now = new Date();

    const h = now.getUTCHours();
    const m = now.getUTCMinutes();
    const s = now.getUTCSeconds();

    document.getElementById("utc-clock").innerText =
        `UTC ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    setStatus("london", checkOpen(8, 17, h));
    setStatus("newyork", checkOpen(13, 22, h));
    setStatus("tokyo", checkOpen(0, 9, h));
    setStatus("sydney", checkOpen(22, 7, h));
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
