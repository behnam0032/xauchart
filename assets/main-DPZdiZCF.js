import{r as p,i as u,a as g}from"./clock-BtNpzf7s.js";import{H as t,f}from"./api-BF5_4Y-g.js";import{g as w,i as b}from"./calculator-BNxaeBxc.js";const y=i=>new Intl.NumberFormat("fa-IR").format(Math.round(i)),$=(i,e=2)=>new Intl.NumberFormat("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}).format(i),h=(i,e)=>e==="دلار"?$(i,i<10?4:2):y(i);document.getElementById("app").innerHTML=p("home")+`
<main class="main">
  <!-- ساعت + سشن‌ها -->
  <div class="clock-bar">
    <div class="clock-wrap">
      <div class="clock-time" id="clock">--:--:--</div>
      <div class="clock-date" id="clockDate"></div>
    </div>
    <div class="sessions-wrap" id="sessionPills"></div>
  </div>

  <div class="weekend-banner" id="weekendBanner">
    ⚠️ بازار فارکس آخر هفته (جمعه ۲۲:۰۰ تا یکشنبه ۲۲:۰۰ UTC) تعطیل است.
  </div>

  <div class="error-bar" id="errorBar">
    ❌ <span id="errorMsg">خطا در دریافت قیمت</span>
    <button onclick="window._loadPrices()" style="margin-right:auto;background:none;border:none;color:inherit;cursor:pointer;font-size:12px;text-decoration:underline">تلاش مجدد</button>
  </div>

  <!-- قیمت‌ها -->
  <div class="prices-grid" id="pricesGrid">
    ${[...t.gold,...t.currency,...t.crypto].map(i=>`
      <div class="price-card loading" id="card-${i}">
        <div class="p-label">در حال بارگذاری...</div>
        <div class="p-val">—</div>
      </div>
    `).join("")}
  </div>

  <!-- سشن‌ها + ماشین‌حساب -->
  <div class="mid-row">
    <div class="panel">
      <div class="panel-title">🕐 سشن‌های فارکس — UTC</div>
      <div id="sessRows"></div>
      <div class="sess-hint">بهترین زمان برای طلا: تداخل London × New York</div>
    </div>
    ${w()}
  </div>
</main>
`;u();g();b();async function n(){document.getElementById("errorBar").classList.remove("show");try{const i=await f();k(i)}catch(i){document.getElementById("errorMsg").textContent=i.message||"خطا در دریافت قیمت",document.getElementById("errorBar").classList.add("show")}}window._loadPrices=n;function k({gold:i,currency:e,crypto:c}){const o={};[...i,...e,...c].forEach(a=>{o[a.code]=a}),[...t.gold,...t.currency,...t.crypto].forEach(a=>{const r=document.getElementById(`card-${a}`);if(!r)return;const s=o[a];if(!s){r.classList.remove("loading"),r.innerHTML=`<div class="p-label">${a}</div><div class="p-val" style="font-size:13px;color:var(--muted)">داده موجود نیست</div>`;return}r.classList.remove("loading");const d=Math.abs(s.pct).toFixed(2),l=s.isUp?"+":"−",v=s.isUp?"▲":"▼",m=s.isUp?"up":"down";r.innerHTML=`
      <div class="p-label">${s.icon} ${s.label}</div>
      <div class="p-val">${h(s.price,s.unit)}<span class="p-unit"> ${s.unit}</span></div>
      <div class="p-change ${m}">${v} ${l}${d}%</div>
      <div class="p-time">${s.time?"آپدیت: "+s.time:""}</div>
    `})}n();setInterval(n,3e4);
