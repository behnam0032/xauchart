import{r as $,i as U}from"./header-dgUtNWkJ.js";import{H as r,f as C}from"./api-BF5_4Y-g.js";import{g as E,i as I}from"./calculator-BNxaeBxc.js";const y=[{id:"sydney",label:"Sydney",open:22,close:7,color:"#22c55e",pairs:["AUD","NZD"]},{id:"tokyo",label:"Tokyo",open:0,close:9,color:"#3b82f6",pairs:["JPY","AUD"]},{id:"london",label:"London",open:8,close:17,color:"#f97316",pairs:["GBP","EUR"]},{id:"newyork",label:"New York",open:13,close:22,color:"#ef4444",pairs:["USD","CAD"]}];function v(s,e){const{open:n,close:a}=s;return n<a?e>=n&&e<a:e>=n||e<a}function M(s,e,n){if(!v(s,e))return 0;const{open:a,close:i}=s,o=a<i?(i-a)*60:(24-a+i)*60;let t=a<i||e>=a?(e-a)*60+n:(24-a+e)*60+n;return Math.min(100,Math.round(t/o*100))}function w(s,e,n){const{close:a}=s;let i=a*60,o=e*60+n,t=i-o;return t<=0&&(t+=24*60),t}function b(s){const e=Math.floor(s/60),n=s%60;return e===0?`${n}m`:`${e}h ${n}m`}function B(s=new Date){const e=s.getUTCDay(),n=s.getUTCHours();return!(e===6||e===0&&n<22||e===5&&n>=22)}function x(s=new Date){const e=n=>String(n).padStart(2,"0");return{h:e(s.getUTCHours()),m:e(s.getUTCMinutes()),s:e(s.getUTCSeconds()),day:s.getUTCDay(),date:s.getUTCDate(),month:s.getUTCMonth(),year:s.getUTCFullYear(),raw:s}}const D=["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],S=["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"];function L(){function s(){const e=x(),n=parseInt(e.h),a=parseInt(e.m),i=document.getElementById("clock"),o=document.getElementById("clockDate");i&&(i.textContent=`${e.h}:${e.m}:${e.s}`),o&&(o.textContent=`${D[e.day]} ${e.date} ${S[e.month]} ${e.year} — UTC`);const t=B(e.raw),d=document.getElementById("mkBadge");d&&(d.className="market-badge "+(t?"open":"closed"));const p=document.getElementById("mkText");p&&(p.textContent=t?"بازار باز است":"بازار بسته است");const g=document.getElementById("weekendBanner");g&&g.classList.toggle("show",!t);const u=document.getElementById("sessionPills");u&&(u.innerHTML=y.map(l=>{const c=v(l,n),m=c?b(w(l,n,a)):"";return`<div class="session-pill ${c?"on":"off"}">
          <span class="sname">${l.label}</span>
          <span class="shours">${l.open}:00–${l.close}:00</span>
          ${c?`<span class="sleft">${m} مانده</span>`:""}
        </div>`}).join(""));const h=document.getElementById("sessRows");h&&(h.innerHTML=y.map(l=>{const c=v(l,n),m=M(l,n,a),k=c?b(w(l,n,a)):"",T=c?"var(--up)":"var(--down)";return`<div class="sess-row">
          <span class="sess-name">${l.label}</span>
          <div class="sess-track"><div class="sess-fill" style="width:${c?m:0}%;background:${T}"></div></div>
          <span class="sess-time">${l.open}:00–${l.close}:00</span>
          <span class="sess-tag ${c?"on":"off"}">${c?"باز · "+k:"بسته"}</span>
        </div>`}).join(""))}setInterval(s,1e3),s()}const P=s=>new Intl.NumberFormat("fa-IR").format(Math.round(s)),N=(s,e=2)=>new Intl.NumberFormat("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}).format(s),F=(s,e)=>e==="دلار"?N(s,s<10?4:2):P(s);document.getElementById("app").innerHTML=$("home")+`
<main class="main">
  <div class="clock-bar">
    <div class="clock-wrap"><div class="clock-time" id="clock">--:--:--</div><div class="clock-date" id="clockDate"></div></div>
    <div class="sessions-wrap" id="sessionPills"></div>
  </div>
  <div class="weekend-banner" id="weekendBanner">⚠️ بازار فارکس آخر هفته (جمعه ۲۲:۰۰ تا یکشنبه ۲۲:۰۰ UTC) تعطیل است.</div>
  <div class="error-bar" id="errorBar">❌ <span id="errorMsg">خطا در دریافت قیمت</span><button onclick="window._loadPrices()" style="margin-right:auto;background:none;border:none;color:inherit;cursor:pointer;font-size:12px;text-decoration:underline">تلاش مجدد</button></div>
  <div class="prices-grid" id="pricesGrid">
    ${[...r.gold,...r.currency,...r.crypto].map(s=>'<div class="price-card loading" id="card-'+s+'"><div class="p-label">در حال بارگذاری...</div><div class="p-val">—</div></div>').join("")}
  </div>
  <div class="mid-row">
    <div class="panel"><div class="panel-title">🕐 سشن‌های فارکس — UTC</div><div id="sessRows"></div><div class="sess-hint">بهترین زمان برای طلا: تداخل London × New York</div></div>
    ${E()}
  </div>
<div class="panel learn-preview" id="learnPreview">
  <div class="panel-title"> آموزش فارکس و معاملات طلا</div>
  <p style="font-size:13px;color:var(--muted);margin-bottom:14px;line-height:1.6">
    مجموعه مقالات آموزشی برای معامله‌گران از مبتدی تا حرفه‌ای. مفاهیم پایه، مدیریت ریسک و نکات کاربردی.
  </p>
  <div class="articles-preview-grid">
    <a href="/learn/what-is-gold-spread.html" class="article-preview-card">
      <div class="ap-icon">📈</div>
      <div class="ap-content">
        <h3>اسپرد طلا چیست؟</h3>
        <p>آموزش کامل Spread در معاملات XAU/USD، تفاوت اسپرد ثابت و شناور و نحوه کاهش هزینه معاملات</p>
        <span class="ap-meta">⏱ ۱۰ دقیقه · مبتدی</span>
      </div>
    </a>
    <a href="/learn/what-is-pip.html" class="article-preview-card">
      <div class="ap-icon">📏</div>
      <div class="ap-content">
        <h3>پیپ طلا چیست؟</h3>
        <p>محاسبه و درک مفهوم پیپ در طلا، تفاوت پیپ و پوینت، ارزش هر پیپ بر اساس حجم معامله</p>
        <span class="ap-meta"> ۸ دقیقه · مبتدی</span>
      </div>
    </a>
    <a href="/learn/what-is-lot.html" class="article-preview-card">
      <div class="ap-icon">📦</div>
      <div class="ap-content">
        <h3>لات در طلا چیست؟</h3>
        <p>انواع لات (استاندارد، مینی، میکرو)، نحوه انتخاب حجم مناسب و تأثیر آن بر مدیریت سرمایه</p>
        <span class="ap-meta">⏱ ۱۰ دقیقه · مبتدی تا متوسط</span>
      </div>
    </a>
    <a href="/learn/risk-management.html" class="article-preview-card">
      <div class="ap-icon">🛡️</div>
      <div class="ap-content">
        <h3>مدیریت سرمایه</h3>
        <p>اصول مدیریت ریسک، تعیین حد ضرر، نسبت ریسک به ریوارد و حفظ سرمایه در معاملات طلا</p>
        <span class="ap-meta">⏱ ۱۲ دقیقه · همه سطوح</span>
      </div>
    </a>
  </div>
  <div style="text-align:center;margin-top:14px">
    <a href="/learn/" class="btn-read-more">مشاهده همه مقالات ←</a>
  </div>
</div>
</main>`;U();L();I();async function f(){document.getElementById("errorBar").classList.remove("show");try{A(await C())}catch(s){document.getElementById("errorMsg").textContent=s.message||"خطا در دریافت قیمت",document.getElementById("errorBar").classList.add("show")}}window._loadPrices=f;function A({gold:s,currency:e,crypto:n}){const a={};[...s,...e,...n].forEach(i=>{a[i.code]=i}),[...r.gold,...r.currency,...r.crypto].forEach(i=>{const o=document.getElementById("card-"+i);if(!o)return;const t=a[i];if(!t){o.classList.remove("loading"),o.innerHTML='<div class="p-label">'+i+'</div><div class="p-val" style="font-size:13px;color:var(--muted)">داده موجود نیست</div>';return}o.classList.remove("loading");const d=t.isUp?"up":"down",p=t.isUp?"▲":"▼";o.innerHTML='<div class="p-label">'+t.icon+" "+t.label+'</div><div class="p-val">'+F(t.price,t.unit)+'<span class="p-unit"> '+t.unit+'</span></div><div class="p-change '+d+'">'+p+" "+(t.isUp?"+":"−")+Math.abs(t.pct).toFixed(2)+'%</div><div class="p-time">'+(t.time?"آپدیت: "+t.time:"")+"</div>"})}f();setInterval(f,3e4);
