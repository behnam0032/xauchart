import{r as s,i as a,a as l}from"./clock-Y_QwIpLD.js";const n=[{id:"money-management",title:"مدیریت سرمایه هوشمند",titleEn:"Smart Money Management",description:"محاسبه خودکار حجم معامله بر اساس ریسک درصد و فاصله استاپ لاس، با تشخیص هوشمند جهت معامله و رسم خودکار TP",version:"1.0.0",mtVersion:"MT5",page:"/money-management.html",features:["محاسبه خودکار Lot Size بر اساس ریسک %","تشخیص هوشمند BUY/SELL بر اساس موقعیت SL","رسم خودکار TP بر اساس R:R Ratio","پنل اطلاعات زنده روی چارت","دکمه‌های خرید و فروش مستقیم","محافظت در برابر لغزش قیمت (Slippage)"]}];document.getElementById("app").innerHTML=s("experts")+`
<main class="main">
  <div class="page-header">
    <h1>🎯 اکسپرت‌های معاملاتی</h1>
    <p>ابزارهای حرفه‌ای مدیریت ریسک و اتوماسیون معاملات</p>
  </div>

  <!-- لیست اکسپرت‌ها -->
  <div class="experts-list">
    ${n.map(i=>`
      <div class="expert-card">
        <div class="expert-header">
          <div class="expert-icon">🤖</div>
          <div class="expert-info">
            <h3>${i.title}</h3>
            <span class="expert-en">${i.titleEn}</span>
          </div>
          <div class="expert-badges">
            <span class="badge badge-mt">${i.mtVersion}</span>
            <span class="badge badge-ver">v${i.version}</span>
          </div>
        </div>
        <p class="expert-desc">${i.description}</p>
        <div class="expert-features">
          ${i.features.map(e=>`<div class="feature-item">✓ ${e}</div>`).join("")}
        </div>
        <div class="expert-actions">
          <a href="${i.page}" class="btn-primary">
            مشاهده جزئیات و دانلود ←
          </a>
        </div>
      </div>
    `).join("")}
  </div>

  <!-- آموزش نصب -->
  <div class="panel">
    <div class="panel-title">📚 آموزش نصب اکسپرت در متاتریدر ۵</div>
    <ol class="install-steps">
      <li>فایل <code>.ex5</code> رو دانلود کن</li>
      <li>متاتریدر  رو باز کن و <strong>File → Open Data Folder</strong> بزن</li>
      <li>برو به پوشه <code>MQL5 → Experts</code></li>
      <li>فایل رو در این پوشه کپی کن</li>
      <li>متاتریدر رو ببند و دوباره باز کن (یا در Navigator راست‌کلیک → Refresh)</li>
      <li>در پنل Navigator، بخش Expert Advisors، اکسپرت رو پیدا کن و روی چارت بکش</li>
      <li>در تنظیمات اکسپرت، تیک <strong>Allow Algo Trading</strong> رو بزن</li>
      <li>دکمه <strong>Algo Trading</strong> در نوار ابزار بالای متاتریدر رو فعال کن (سبز بشه)</li>
    </ol>
    <div class="alert-box warning">
      ⚠️ <strong>نکته حیاتی:</strong> برای کار کردن دکمه‌های خرید و فروش، حتماً باید هر دو شرط بالا برقرار باشه!
    </div>
  </div>
</main>
`;a();l();
