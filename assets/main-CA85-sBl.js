import{r as m,i as h,a as u}from"./clock-CAxH-o4s.js";import{H as t,f as g}from"./api-BF5_4Y-g.js";import{g as w,i as f}from"./calculator-BNxaeBxc.js";const b=a=>new Intl.NumberFormat("fa-IR").format(Math.round(a)),y=(a,s=2)=>new Intl.NumberFormat("en-US",{minimumFractionDigits:s,maximumFractionDigits:s}).format(a),$=(a,s)=>s==="دلار"?y(a,a<10?4:2):b(a);document.getElementById("app").innerHTML=m("home")+`
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
    ⚠️ بازار فارکس آخر هفته (جمعه ۲۲:۰۰ تا یکشنبه ۲:۰۰ UTC) تعطیل است.
  </div>

  <div class="error-bar" id="errorBar">
     <span id="errorMsg">خطا در دریافت قیمت</span>
    <button onclick="window._loadPrices()" style="margin-right:auto;background:none;border:none;color:inherit;cursor:pointer;font-size:12px;text-decoration:underline">تلاش مجدد</button>
  </div>

  <!-- قیمت‌ها -->
  <div class="prices-grid" id="pricesGrid">
    ${[...t.gold,...t.currency,...t.crypto].map(a=>`
      <div class="price-card loading" id="card-${a}">
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

  <!-- پیش‌نمایش مقالات آموزشی -->
  <div class="panel learn-preview" id="learnPreview">
    <div class="panel-title">📚 آموزش فارکس و معاملات طلا</div>
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
          <span class="ap-meta">⏱ ۸ دقیقه · مبتدی</span>
        </div>
      </a>
      <a href="/learn/what-is-lot.html" class="article-preview-card">
        <div class="ap-icon">📦</div>
        <div class="ap-content">
          <h3>لات در طلا چیست؟</h3>
          <p>انواع لات (استاندارد، مینی، میکرو)، نحوه انتخاب حجم مناسب و تأثیر آن بر مدیریت سرمایه</p>
          <span class="ap-meta">⏱ ۰ دقیقه · مبتدی تا متوسط</span>
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
</main>
`;h();u();f();async function n(){document.getElementById("errorBar").classList.remove("show");try{const a=await g();k(a)}catch(a){document.getElementById("errorMsg").textContent=a.message||"خطا در دریافت قیمت",document.getElementById("errorBar").classList.add("show")}}window._loadPrices=n;function k({gold:a,currency:s,crypto:d}){const c={};[...a,...s,...d].forEach(e=>{c[e.code]=e}),[...t.gold,...t.currency,...t.crypto].forEach(e=>{const r=document.getElementById(`card-${e}`);if(!r)return;const i=c[e];if(!i){r.classList.remove("loading"),r.innerHTML=`<div class="p-label">${e}</div><div class="p-val" style="font-size:13px;color:var(--muted)">داده موجود نیست</div>`;return}r.classList.remove("loading");const l=Math.abs(i.pct).toFixed(2),o=i.isUp?"+":"−",p=i.isUp?"▲":"▼",v=i.isUp?"up":"down";r.innerHTML=`
      <div class="p-label">${i.icon} ${i.label}</div>
      <div class="p-val">${$(i.price,i.unit)}<span class="p-unit"> ${i.unit}</span></div>
      <div class="p-change ${v}">${p} ${o}${l}%</div>
      <div class="p-time">${i.time?"آپدیت: "+i.time:""}</div>
    `})}n();setInterval(n,3e4);
