function isOpen(start, end, hour) {
    if (start < end) {
        return hour >= start && hour < end;
    }
    return hour >= start || hour < end;
}

function setStatus(id, open) {

    const el = document.getElementById(id);

    if (open) {
        el.className = "status open";
        el.innerText = "باز";
    } else {
        el.className = "status closed";
        el.innerText = "بسته";
    }
}

function updateSessions() {

    const now = new Date();

    const h = now.getUTCHours();
    const m = now.getUTCMinutes();
    const s = now.getUTCSeconds();

    document.getElementById("utc-clock").innerText =
        `UTC : ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    setStatus("london", isOpen(8, 17, h));
    setStatus("newyork", isOpen(13, 22, h));
    setStatus("tokyo", isOpen(0, 9, h));
    setStatus("sydney", isOpen(22, 7, h));
}

async function getGoldPrice() {

    try {
        console.log("start")
        var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-d13adb24a64de6a8e35438642e102382-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    } catch (e) {
        console.error(e);
    }
}

/* اجرای اولیه */

updateSessions();
getGoldPrice();

/* بروزرسانی‌ها */

setInterval(updateSessions, 1000);
setInterval(getGoldPrice, 10000);
