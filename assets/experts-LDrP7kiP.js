import{r as s,i,a as d}from"./clock-CBhO2AP9.js";/* empty css                */const t=[{id:"money-management",title:"مدیریت سرمایه هوشمند",titleEn:"Smart Money Management",badge:"RISK-BASED LOT SIZING · TRAILING (PIPS/%) · SPREAD LOCK · POSITION CAP",description:"محاسبه خودکار حجم معامله بر اساس ریسک درصد، تشخیص هوشمند جهت، رسم خودکار TP، تریلینگ با قفل تضمینی سود، محدودیت پوزیشن و قفل محافظتی اسپرد — همه در یک اکسپرت.",version:"1.0.0",mtVersion:"MT5 / MT4",page:"/money-management",features:["محاسبه Lot Size بر اساس ریسک %","تشخیص هوشمند BUY/SELL بر اساس موقعیت SL","رسم خودکار TP بر اساس R:R Ratio","پنل اطلاعات زنده روی چارت","دکمه‌های خرید و فروش مستقیم","تریلینگ استاپ با قفل تضمینی حداقل سود","محدودیت تعداد پوزیشن باز","قفل محافظتی اسپرد (طلا/فارکس/کریپتو)","پشتیبانی از واحد پیپ و درصد"]}];document.getElementById("app").innerHTML=s("experts")+`
<main class="main">
  <div class="page-header">
    <h1>🤖 اکسپرت‌های معاملاتی</h1>
    <p>ابزارهای حرفه‌ای مدیریت ریسک و اتوماسیون معاملات برای متاتریدر ۴ و ۵</p>
  </div>

  <!-- لیست اکسپرت‌ها -->
  <div class="experts-list">
    ${t.map(e=>`
      <div class="expert-card">
        <div class="expert-header">
          <div class="expert-icon">🤖</div>
          <div class="expert-info">
            <h3>${e.title}</h3>
            <span class="expert-en">${e.titleEn}</span>
            <div class="expert-subbadge">${e.badge}</div>
          </div>
          <div class="expert-badges">
            <span class="badge badge-mt">${e.mtVersion}</span>
            <span class="badge badge-ver">v${e.version}</span>
          </div>
        </div>
        <p class="expert-desc">${e.description}</p>
        <div class="expert-features">
          ${e.features.map(a=>`<div class="feature-item">✓ ${a}</div>`).join("")}
        </div>
        <div class="expert-actions">
          <a href="${e.page}" class="btn-primary">
            مشاهده جزئیات و دانلود ←
          </a>
        </div>
      </div>
    `).join("")}
  </div>

  <!-- آموزش نصب -->
  <div class="panel">
    <div class="panel-title">📚 آموزش نصب اکسپرت در متاتریدر</div>
    <p class="calc-desc">
      برای مشاهده راهنمای کامل نصب اکسپرت در متاتریدر ۴ و ۵، به صفحه آموزش نصب مراجعه کنید.
    </p>
    <div style="text-align:center;margin-top:14px">
      <a href="/install-guide" class="btn-read-more">
        مشاهده راهنمای نصب ←
      </a>
    </div>
  </div>

  <!-- ماشین‌حساب‌های کمکی -->
  <div class="panel">
    <div class="panel-title">🧮 ماشین‌حساب‌های کمکی</div>
    <p class="calc-desc">
      برای محاسبه حجم، مارجین، ریسک به ریوارد و سایر محاسبات قبل از معامله، از 
      <a href="/calc" style="color:var(--gold);text-decoration:underline">ماشین حساب فارکس</a> 
      سایت استفاده کنید.
    </p>
  </div>

  <!-- بازگشت -->
  <div style="text-align:center;margin-top:10px">
    <a href="/" class="btn-read-more">← بازگشت به صفحه اصلی</a>
  </div>
</main>
`;i();d();
