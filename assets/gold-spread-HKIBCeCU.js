import{r as c,i as d,a as n}from"./clock-xh04v_bv.js";import{a as h,b as p}from"./seo-BHAbaErS.js";let i=!1;function f(){if(i)return;i=!0;const s=document.querySelectorAll(".anchor-link");s.length!==0&&s.forEach(a=>{a.addEventListener("click",async t=>{t.preventDefault();const e=a.getAttribute("href");if(!e)return;const o=window.location.origin+window.location.pathname+e;await u(o)?r("لینک بخش کپی شد ✓"):r("خطا در کپی لینک","error");const l=document.querySelector(e);l&&setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}async function u(s){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(s),!0}catch(a){console.warn("Clipboard API failed, using fallback:",a)}try{const a=document.createElement("textarea");a.value=s,a.style.cssText="position:fixed;opacity:0;left:-9999px",document.body.appendChild(a),a.focus(),a.select();const t=document.execCommand("copy");return document.body.removeChild(a),t}catch(a){return console.error("Fallback copy failed:",a),!1}}function r(s,a="success"){const t=document.querySelector(".toast-notification");t&&t.remove();const e=document.createElement("div");e.className=`toast-notification toast-${a}`,e.innerHTML=`
    <span class="toast-icon">${a==="success"?"✓":"✕"}</span>
    <span class="toast-message">${s}</span>
  `,document.body.appendChild(e),requestAnimationFrame(()=>{e.classList.add("toast-show")}),setTimeout(()=>{e.classList.remove("toast-show"),setTimeout(()=>e.remove(),300)},2500)}document.getElementById("app").innerHTML=c("learn")+`
<main class="main">
  <article class="article-content">
    <header class="article-header">
      <h1>اسپرد طلا چیست؟ آموزش کامل Spread در معاملات XAU/USD</h1>
      <p class="article-intro"><strong>اسپرد طلا (Gold Spread)</strong> یکی از مهم‌ترین مفاهیمی است که هر معامله‌گر بازار فارکس باید قبل از معامله XAU/USD با آن آشنا باشد. اسپرد در واقع هزینه اولیه ورود به معامله است و مستقیماً روی میزان سود و زیان شما تأثیر می‌گذارد.</p>
      <div class="article-meta"><span>⏱ زمان مطالعه: ۱۰ دقیقه</span><span>📊 سطح: مبتدی تا پیشرفته</span></div>
    </header>

    <!-- فهرست مطالب (جدید) -->
    <div class="toc-box">
      <h3>📑 فهرست مطالب</h3>
      <ul>
        <li><a href="#what-is-spread">اسپرد (Spread) چیست؟</a></li>
        <li><a href="#spread-example">مثال ساده از اسپرد طلا</a></li>
        <li><a href="#why-broker-charges">چرا بروکر اسپرد دریافت می‌کند؟</a></li>
        <li><a href="#factors-increasing-spread">چه عواملی باعث افزایش اسپرد طلا می‌شوند؟</a></li>
        <li><a href="#ideal-gold-spread">اسپرد مناسب برای طلا چقدر است؟</a></li>
        <li><a href="#fixed-vs-floating">تفاوت اسپرد ثابت و شناور</a></li>
        <li><a href="#how-to-reduce-spread">چگونه اسپرد کمتری پرداخت کنیم؟</a></li>
        <li><a href="#faq">سوالات متداول</a></li>
      </ul>
    </div>

    <div class="alert-box info">💡 اگر تا به حال برایتان سؤال شده که چرا بلافاصله بعد از باز کردن معامله وارد ضرر می‌شوید، پاسخ آن در بیشتر مواقع اسپرد است.</div>

    <h2 id="what-is-spread">
      اسپرد (Spread) چیست؟
      <a href="#what-is-spread" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h2>
    <p>اسپرد به اختلاف بین <strong>قیمت خرید (Ask)</strong> و <strong>قیمت فروش (Bid)</strong> گفته می‌شود. زمانی که قصد خرید طلا را دارید، سفارش شما با قیمت Ask اجرا می‌شود و زمانی که قصد فروش دارید، معامله با قیمت Bid انجام می‌شود.</p>
    <div class="code-block"><code>Spread = Ask - Bid</code></div>
    <p>هرچه این اختلاف کمتر باشد، هزینه ورود به معامله نیز کمتر خواهد بود.</p>

    <h2 id="spread-example">
      مثال ساده از اسپرد طلا
      <a href="#spread-example" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h2>
    <p>فرض کنید قیمت لحظه‌ای طلا به شکل زیر باشد:</p>
    <table class="data-table">
      <thead><tr><th>نوع قیمت</th><th>مقدار</th></tr></thead>
      <tbody>
        <tr><td>Bid</td><td>3345.20</td></tr>
        <tr><td>Ask</td><td>3345.50</td></tr>
      </tbody>
    </table>
    <div class="code-block"><code>3345.50 - 3345.20 = 0.30 دلار</code></div>
    <div class="alert-box warning">⚠️ اگر در همین لحظه معامله خرید باز کنید، معامله شما از همان ابتدا به اندازه اسپرد وارد ضرر خواهد شد.</div>

    <h2 id="why-broker-charges">
      چرا بروکر اسپرد دریافت می‌کند؟
      <a href="#why-broker-charges" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h2>
    <p>اسپرد یکی از منابع درآمد بروکرهاست. بسته به نوع حساب معاملاتی، بروکر ممکن است فقط اسپرد دریافت کند، اسپرد کم + کمیسیون دریافت کند، اسپرد شناور داشته باشد یا اسپرد ثابت ارائه دهد.</p>

    <h2 id="factors-increasing-spread">
      چه عواملی باعث افزایش اسپرد طلا می‌شوند؟
      <a href="#factors-increasing-spread" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h2>
    
    <h3>۱. انتشار اخبار مهم اقتصادی</h3>
    <p>اخباری مانند CPI آمریکا، NFP، تصمیم نرخ بهره فدرال رزرو و نشست FOMC باعث افزایش شدید نوسانات و اسپرد می‌شوند.</p>
    
    <h3>۲. ساعات کم‌حجم بازار</h3>
    <p>در پایان روز معاملاتی یا هنگام باز شدن بازار پس از تعطیلات، نقدینگی کاهش و اسپرد افزایش می‌یابد.</p>
    
    <h3>۳. نوسانات شدید قیمت</h3>
    <p>هرچه بازار سریع‌تر حرکت کند، اختلاف بین قیمت خرید و فروش بیشتر خواهد شد.</p>

    <h2 id="ideal-gold-spread">
      اسپرد مناسب برای طلا چقدر است؟
      <a href="#ideal-gold-spread" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h2>
    <table class="data-table">
      <thead><tr><th>اسپرد</th><th>وضعیت</th></tr></thead>
      <tbody>
        <tr><td>کمتر از 20 پوینت</td><td class="status-good">عالی</td></tr>
        <tr><td>20 تا 35 پوینت</td><td class="status-ok">مناسب</td></tr>
        <tr><td>35 تا 50 پوینت</td><td class="status-average">متوسط</td></tr>
        <tr><td>بیشتر از 50 پوینت</td><td class="status-bad">زیاد</td></tr>
      </tbody>
    </table>

    <h2 id="fixed-vs-floating">
      تفاوت اسپرد ثابت و شناور
      <a href="#fixed-vs-floating" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h2>
    <div class="pros-cons">
      <div class="pros">
        <h4>✅ اسپرد ثابت</h4>
        <ul><li>قابل پیش‌بینی</li><li>مناسب مبتدی‌ها</li></ul>
      </div>
      <div class="cons">
        <h4>❌ اسپرد شناور</h4>
        <ul><li>هنگام اخبار چند برابر می‌شود</li><li>غیرقابل پیش‌بینی</li></ul>
      </div>
    </div>

    <h2 id="how-to-reduce-spread">
      چگونه اسپرد کمتری پرداخت کنیم؟
      <a href="#how-to-reduce-spread" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h2>
    <ul class="check-list">
      <li>از بروکرهای معتبر استفاده کنید</li>
      <li>هنگام انتشار اخبار معامله نکنید</li>
      <li>در ساعات هم‌پوشانی <a href="/" class="internal-link">سشن لندن و نیویورک</a> معامله کنید</li>
      <li>حساب ECN یا Raw Spread بررسی کنید</li>
      <li>قبل از معامله، اسپرد را با <a href="/calc" class="internal-link">ماشین حساب فارکس</a> محاسبه کنید</li>
    </ul>

    <h2 id="faq">
      سوالات متداول
      <a href="#faq" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h2>
    <div class="faq-item">
      <h3>آیا اسپرد همیشه ثابت است؟</h3>
      <p>خیر، در بیشتر بروکرها اسپرد شناور است و با شرایط بازار تغییر می‌کند.</p>
    </div>
    <div class="faq-item">
      <h3>آیا اسپرد روی حد سود تأثیر دارد؟</h3>
      <p>بله، معامله ابتدا باید هزینه اسپرد را جبران کند.</p>
    </div>
    <div class="faq-item">
      <h3>بهترین زمان برای اسپرد پایین؟</h3>
      <p>ساعات هم‌پوشانی سشن لندن و نیویورک.</p>
    </div>

    <div class="article-tools">
      <h3>🛠 ابزارهای مرتبط</h3>
      <div class="tools-grid">
        <a href="/calc" class="tool-card">
          <span class="tool-icon">🧮</span>
          <span class="tool-title">ماشین حساب فارکس</span>
          <span class="tool-desc">محاسبه حجم، مارجین، سود/زیان</span>
        </a>
        <a href="/" class="tool-card">
          <span class="tool-icon">📊</span>
          <span class="tool-title">قیمت لحظه‌ای طلا</span>
          <span class="tool-desc">مشاهده قیمت XAU/USD</span>
        </a>
      </div>
    </div>

    <div class="related-articles">
      <h3>📚 پیشنهاد مطالعه</h3>
      <ul class="article-list">
        <li><a href="/learn/what-is-pip">پیپ طلا چیست؟</a></li>
        <li><a href="/learn/what-is-lot">لات در طلا چیست؟</a></li>
        <li><a href="/learn/risk-management">مدیریت سرمایه در فارکس</a></li>
        <li><a href="/calc">ماشین حساب ریسک به ریوارد</a></li>
      </ul>
    </div>
  </article>
</main>
`;d();n();f();h({headline:"اسپرد طلا چیست؟ آموزش کامل Spread در معاملات XAU/USD",description:"آموزش کامل اسپرد طلا، تفاوت اسپرد ثابت و شناور و نحوه کاهش هزینه معاملات",datePublished:"2026-07-29"});p([{q:"آیا اسپرد همیشه ثابت است؟",a:"خیر، در بیشتر بروکرها اسپرد شناور است و با شرایط بازار تغییر می‌کند."},{q:"آیا اسپرد روی حد سود تأثیر دارد؟",a:"بله، معامله ابتدا باید هزینه اسپرد را جبران کند."},{q:"بهترین زمان برای اسپرد پایین؟",a:"ساعات هم‌پوشانی سشن لندن و نیویورک."}]);
