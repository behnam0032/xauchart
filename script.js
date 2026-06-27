const API_URL =
"https://Api.BrsApi.ir/Market/Gold_Currency.php?key=BSzSYFaRH8NcdMi7YpLdmmHYbmRjdlx7";

/* ===========================
   ابزارها
=========================== */

function formatNumber(num) {

    if (num === undefined || num === null || isNaN(num))
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

    return arr.find(item => item.symbol === symbol) || null;
}

function setText(id, text) {

    const el = document.getElementById(id);

    if (el)
        el.innerHTML = text;
}

function showNextOpen(show) {

    const box = document.querySelector(".next-open");

    if (box)
        box.style.display = show ? "block" : "none";
}

/* ===========================
   سشن های فارکس
=========================== */

function updateSessions() {

    const now = new Date();

    const day = now.getUTCDay();

    const hour =
        now.getUTCHours() +
        now.getUTCMinutes() / 60;

    const marketStatus =
        document.getElementById("marketStatus");

    let marketClosed = false;

    // شنبه

    if (day === 6)
        marketClosed = true;

    // یکشنبه قبل از 21

    if (day === 0 && hour < 21)
        marketClosed = true;

    // جمعه بعد از 22

    if (day === 5 && hour >= 22)
        marketClosed = true;

    if (marketClosed) {

        marketStatus.innerHTML =
            "🔴 بازار فارکس تعطیل است";

        marketStatus.classList.remove("open");

        marketStatus.classList.add("closed");

        closeAll();

        showNextOpen(true);

        nextOpenCountdown();

        return;
    }

    marketStatus.innerHTML =
        "🟢 بازار فارکس باز است";

    marketStatus.classList.remove("closed");

    marketStatus.classList.add("open");

    showNextOpen(false);

    updateSession("sydney", hour >= 21 || hour < 6);

    updateSession("tokyo", hour >= 23 || hour < 8);

    updateSession("london", hour >= 7 && hour < 16);

    updateSession("newYork", hour >= 12 && hour < 21);

}

/* ===========================
   بستن همه سشن ها
=========================== */

function closeAll() {

    [
        "sydney",
        "tokyo",
        "london",
        "newYork"
    ].forEach(name => {

        const card =
            document.getElementById(name + "Card");

        const status =
            document.getElementById(name + "Status");

        if (!card || !status)
            return;

        status.innerHTML =
            "🔴 بسته";

        card.classList.remove("active");

        card.classList.add("closed");

    });

}

/* ===========================
   بروزرسانی هر سشن
=========================== */

function updateSession(name, isOpen) {

    const card =
        document.getElementById(name + "Card");

    const status =
        document.getElementById(name + "Status");

    if (!card || !status)
        return;

    card.classList.remove("active");

    card.classList.remove("closed");

    if (isOpen) {

        status.innerHTML =
            "🟢 باز";

        card.classList.add("active");

    } else {

        status.innerHTML =
            "🔴 بسته";

        card.classList.add("closed");

    }

}

/* ===========================
   شمارش معکوس بازگشایی
=========================== */

function nextOpenCountdown() {

    const now = new Date();

    const target = new Date(now);

    target.setUTCHours(21, 0, 0, 0);

    if (now.getUTCDay() === 6) {

        target.setUTCDate(
            target.getUTCDate() + 1
        );

    } else if (
        now.getUTCDay() === 0 &&
        now.getUTCHours() < 21
    ) {

    } else {

        let days =
            (7 - now.getUTCDay()) % 7;

        if (days === 0)
            days = 7;

        target.setUTCDate(
            target.getUTCDate() + days
        );

    }

    const diff =
        Math.max(0, target - now);

    const h =
        Math.floor(diff / 3600000);

    const m =
        Math.floor(diff / 60000) % 60;

    const s =
        Math.floor(diff / 1000) % 60;

    setText(
        "nextOpenTime",
        "یکشنبه 21:00 UTC"
    );

    setText(
        "countdown",
        `${h}h ${m}m ${s}s`
    );

}
/* ===========================
   دریافت اطلاعات بازار
=========================== */

async function loadMarket() {

    try {

        const response = await fetch(API_URL, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("API Error : " + response.status);
        }

        const data = await response.json();

        console.log(data);

        /* -------------------------
           تشخیص ساختار API
        -------------------------- */

        let gold = [];
        let currency = [];
        let crypto = [];

        // ساختار جدید
        if (data.gold || data.currency) {

            gold = data.gold || [];
            currency = data.currency || [];
            crypto = data.cryptocurrency || [];

        }

        // ساختار قدیمی (آرایه مستقیم)
        else if (Array.isArray(data)) {

            gold = data;

        }

        /* -------------------------
           GOLD
        -------------------------- */

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

        /* -------------------------
           Currency
        -------------------------- */

        const usd =
            findSymbol(currency, "USD") ||
            findSymbol(currency, "USD_IRT");

        /* -------------------------
           USDT
        -------------------------- */

        let usdt =
            findSymbol(currency, "USDT_IRT");

        if (!usdt) {

            usdt =
                findSymbol(crypto, "USDT_IRT");

        }

        if (!usdt) {

            usdt =
                findSymbol(crypto, "USDT");

        }

        /* -------------------------
           نمایش
        -------------------------- */

        setValue("xau", xau?.price);

        setValue("gold18", gold18?.price);

        setValue("melted", melted?.price);

        setValue("usd", usd?.price);

        setValue("usdt", usdt?.price);

        setValue("emami", emami?.price);

        setValue("half", half?.price);

        setValue("quarter", quarter?.price);

        /* -------------------------
           آخرین بروزرسانی
        -------------------------- */

        const lastUpdate =
            document.getElementById("last-update");

        if (lastUpdate) {

            lastUpdate.innerHTML =
                new Date().toLocaleTimeString(
                    "fa-IR"
                );

        }

    }

    catch (error) {

        console.error(error);

        const lastUpdate =
            document.getElementById("last-update");

        if (lastUpdate) {

            lastUpdate.innerHTML =
                "خطا در دریافت اطلاعات";

        }

    }

}
function updateUTCClock(){

    const clock=document.getElementById("utc-clock");

    if(!clock) return;

    const now=new Date();

    const h=String(now.getUTCHours()).padStart(2,"0");

    const m=String(now.getUTCMinutes()).padStart(2,"0");

    const s=String(now.getUTCSeconds()).padStart(2,"0");

    clock.innerHTML=`${h}:${m}:${s} UTC`;

}

/* ===========================
   شروع برنامه
=========================== */

updateSessions();

loadMarket();

updateUTCClock();


/* ===========================
   تایمرها
=========================== */

// شمارش معکوس هر ثانیه
setInterval(() => {updateSessions();}, 1000);

// دریافت قیمت هر دقیقه
setInterval(() => {loadMarket();}, 60000);

setInterval(updateUTCClock,1000);
