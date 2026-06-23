function isOpen(start, end, h){
  if(start < end){
    return h >= start && h < end;
  }
  return h >= start || h < end;
}

/* آپدیت سشن‌ها + ساعت */
function updateSessions(){
  const now = new Date();
  const h = now.getUTCHours();
  const m = now.getUTCMinutes();
  const s = now.getUTCSeconds();

  document.getElementById("time").innerText =
    `UTC: ${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;

  setBadge("london", isOpen(8,17,h));
  setBadge("newyork", isOpen(13,22,h));
  setBadge("tokyo", isOpen(0,9,h));
  setBadge("sydney", isOpen(22,7,h));
}

function setBadge(id, open){
  const el = document.getElementById(id);
  el.className = open ? "badge open" : "badge closed";
  el.innerText = open ? "باز" : "بسته";
}

/* گرفتن قیمت طلا از API */
async function getGoldPrice(){
  try {
    const res = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": "goldapi-d13adb24a64de6a8e35438642e102382-io"
      }
    });

    const data = await res.json();

    document.getElementById("gold").innerText =
      "طلا: " + data.price + " دلار";

  } catch (e) {
    document.getElementById("gold").innerText =
      "خطا در دریافت قیمت";
  }
}

/* اجرا */
updateSessions();
setInterval(updateSessions, 1000);

getGoldPrice();
setInterval(getGoldPrice, 10000);
