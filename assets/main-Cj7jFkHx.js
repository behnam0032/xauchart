import{r as m,i as h}from"./market-DaRiDYB7.js";/* empty css                */import{i as g}from"./clock-DmW530F7.js";import{H as t,f as w}from"./api-BzjsYfuF.js";import{g as u,i as f}from"./calculator-BNxaeBxc.js";const b=i=>new Intl.NumberFormat("fa-IR").format(Math.round(i)),y=(i,e=2)=>new Intl.NumberFormat("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}).format(i),k=(i,e)=>e==="دلار"?y(i,i<10?4:2):b(i);document.getElementById("app").innerHTML=m("home")+`
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
    ⚠️ در حال دریافت زمان‌بندی محلی...
  </div>

  <div class="error-bar" id="errorBar">
     <span id="errorMsg">خطا در دریافت قیمت</span>
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
<!-- چارت طلا TradingView -->
<section class="chart-section">
  <div class="container">
    <h2 class="chart-title"> چارت زنده طلا (XAU/USD)</h2>
    <div class="tradingview-widget-container" id="tv-chart">
      <div class="tradingview-widget-container__widget"></div>
    </div>
    <p class="chart-hint">
      تحلیل تکنیکال طلا با ابزارهای حرفه‌ای TradingView | 
      <a href="https://www.tradingview.com/symbols/XAUUSD/" target="_blank" rel="noopener">
        مشاهده چارت کامل ↗
      </a>
    </p>
  </div>
</section>
  <!-- سشن‌ها + ماشین‌حساب -->
  <div class="mid-row">
    <div class="panel">
      <div class="panel-title">🕐 سشن‌های فارکس (به وقت محلی)</div>
      <div id="sessRows"></div>
      <div class="sess-hint">بهترین زمان برای طلا: تداخل London × New York</div>
    </div>
    ${u()}
  </div>

  <!-- پیش‌نمایش مقالات آموزشی -->
  <div class="panel learn-preview" id="learnPreview">
    <div class="panel-title">📚 آموزش فارکس و معاملات طلا</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:14px;line-height:1.6">
      مجموعه مقالات آموزشی برای معامله‌گران از مبتدی تا حرفه‌ای. مفاهیم پایه، مدیریت ریسک و نکات کاربردی.
    </p>
    <div class="articles-preview-grid">
      <a href="/learn/what-is-gold-spread" class="article-preview-card">
        <div class="ap-icon">📈</div>
        <div class="ap-content">
          <h3>اسپرد طلا چیست؟</h3>
          <p>آموزش کامل Spread در معاملات XAU/USD، تفاوت اسپرد ثابت و شناور و نحوه کاهش هزینه معاملات</p>
          <span class="ap-meta">⏱ ۱۰ دقیقه · مبتدی</span>
        </div>
      </a>
      <a href="/learn/what-is-pip" class="article-preview-card">
        <div class="ap-icon">📏</div>
        <div class="ap-content">
          <h3>پیپ طلا چیست؟</h3>
          <p>محاسبه و درک مفهوم پیپ در طلا، تفاوت پیپ و پوینت، ارزش هر پیپ بر اساس حجم معامله</p>
          <span class="ap-meta">⏱ ۸ دقیقه · مبتدی</span>
        </div>
      </a>
      <a href="/learn/what-is-lot" class="article-preview-card">
        <div class="ap-icon">📦</div>
        <div class="ap-content">
          <h3>لات در طلا چیست؟</h3>
          <p>انواع لات (استاندارد، مینی، میکرو)، نحوه انتخاب حجم مناسب و تأثیر آن بر مدیریت سرمایه</p>
          <span class="ap-meta">⏱ ۰ دقیقه · مبتدی تا متوسط</span>
        </div>
      </a>
      <a href="/learn/risk-management" class="article-preview-card">
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
`;g();h();f();async function n(){document.getElementById("errorBar").classList.remove("show");try{const i=await w();$(i)}catch(i){document.getElementById("errorMsg").textContent=i.message||"خطا در دریافت قیمت",document.getElementById("errorBar").classList.add("show")}}window._loadPrices=n;function $({gold:i,currency:e,crypto:d}){const c={};[...i,...e,...d].forEach(s=>{c[s.code]=s}),[...t.gold,...t.currency,...t.crypto].forEach(s=>{const r=document.getElementById(`card-${s}`);if(!r)return;const a=c[s];if(!a){r.classList.remove("loading"),r.innerHTML=`<div class="p-label">${s}</div><div class="p-val" style="font-size:13px;color:var(--muted)">داده موجود نیست</div>`;return}r.classList.remove("loading");const o=Math.abs(a.pct).toFixed(2),l=a.isUp?"+":"−",p=a.isUp?"▲":"▼",v=a.isUp?"up":"down";r.innerHTML=`
      <div class="p-label">${a.icon} ${a.label}</div>
      <div class="p-val">${k(a.price,a.unit)}<span class="p-unit"> ${a.unit}</span></div>
      <div class="p-change ${v}">${p} ${l}${o}%</div>
      <div class="p-time">${a.time?"آپدیت: "+a.time:""}</div>
    `})}n();setInterval(n,3e4);function x(){const i=document.getElementById("tv-chart");if(!i)return;const e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",e.async=!0,e.type="text/javascript",e.textContent=JSON.stringify({autosize:!0,symbol:"OANDA:XAUUSD",interval:"60",timezone:"Asia/Tehran",theme:"dark",style:"1",locale:"fa",backgroundColor:"rgba(12, 12, 16, 1)",gridColor:"rgba(42, 46, 57, 0.3)",hide_top_toolbar:!1,hide_legend:!1,save_image:!1,calendar:!1,hide_volume:!1,support_host:"https://www.tradingview.com",width:"100%",height:"500"}),i.appendChild(e)}setTimeout(x,1500);
