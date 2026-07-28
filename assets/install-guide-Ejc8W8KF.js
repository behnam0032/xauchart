import{r as s,i as o,a as t}from"./clock-BeWxoAVR.js";document.getElementById("app").innerHTML=s("experts")+`
<main class="main">
  <div class="page-header">
    <h1>📚 آموزش نصب اکسپرت در متاتریدر</h1>
    <p>راهنمای کامل نصب اکسپرت‌های متاتریدر ۴ و ۵ — مرحله به مرحله</p>
  </div>

  <!-- مقدمه -->
  <div class="panel">
    <div class="panel-title">🎯 درباره این راهنما</div>
    <p style="font-size:14px;line-height:1.8;margin-bottom:12px">
      این راهنما برای نصب <strong>اکسپرت مدیریت سرمایه XAUChart</strong> نوشته شده، اما برای نصب هر اکسپرت دیگری در متاتریدر ۴ و ۵ هم کاربرد داره. مراحل برای هر دو نسخه تقریباً یکسانه و فقط پسوند فایل متفاوته (<code>.ex5</code> برای MT5 و <code>.ex4</code> برای MT4).
    </p>
  </div>

  <!-- مراحل نصب -->
  <div class="panel">
    <div class="panel-title">🛠 مراحل نصب اکسپرت</div>
    <ol class="install-steps">
      <li>
        <strong>دانلود فایل اکسپرت</strong><br>
        فایل اکسپرت را از صفحه جزئیات دانلود کنید. پسوند فایل <code>.ex5</code> برای متاتریدر ۵ و <code>.ex4</code> برای متاتریدر ۴ است.
      </li>
      <li>
        <strong>باز کردن پوشه داده‌های متاتریدر</strong><br>
        متاتریدر را باز کنید و از منوی بالا <strong>File → Open Data Folder</strong> را بزنید.
      </li>
      <li>
        <strong>رفتن به پوشه Experts</strong><br>
        در پنجره‌ی باز شده، به مسیر زیر بروید:<br>
        • برای MT5: <code>MQL5 → Experts</code><br>
        • برای MT4: <code>MQL4 → Experts</code>
      </li>
      <li>
        <strong>کپی کردن فایل اکسپرت</strong><br>
        فایل دانلود شده را در این پوشه کپی کنید.
      </li>
      <li>
        <strong>بازنشانی متاتریدر</strong><br>
        متاتریدر را ببندید و دوباره باز کنید. یا در پنل <strong>Navigator</strong> راست‌کلیک کرده و <strong>Refresh</strong> بزنید.
      </li>
      <li>
        <strong>پیدا کردن اکسپرت</strong><br>
        در پنل <strong>Navigator</strong> (معمولاً سمت چپ)، بخش <strong>Expert Advisors</strong> را باز کنید.
      </li>
      <li>
        <strong>نصب روی چارت</strong><br>
        اکسپرت <strong>MoneyManagement</strong> را پیدا کرده و با ماوس روی چارت مورد نظر بکشید (Drag & Drop).
      </li>
      <li>
        <strong>تنظیمات Common</strong><br>
        در پنجره‌ی تنظیمات، تب <strong>Common</strong> را انتخاب و تیک <strong>Allow Algo Trading</strong> را بزنید.
      </li>
      <li>
        <strong>تنظیمات Inputs</strong><br>
        در تب <strong>Inputs</strong>، تنظیمات دلخواه (درصد ریسک، R:R و...) را وارد کنید و OK بزنید.
      </li>
      <li>
        <strong>فعال‌سازی Algo Trading</strong><br>
        در نوار ابزار بالای متاتریدر، دکمه‌ی <strong>Algo Trading</strong> را فعال کنید تا سبز شود.
      </li>
    </ol>
  </div>

  <!-- نکته حیاتی -->
  <div class="alert-box warning">
    <strong>⚠️ نکته بسیار مهم و حیاتی:</strong><br>
    برای اینکه دکمه‌های خرید و فروش اکسپرت کار کنند، حتماً باید <strong>هر دو شرط</strong> زیر برقرار باشد:<br><br>
    ۱. دکمه <strong>Algo Trading</strong> در نوار ابزار بالای متاتریدر <strong>سبز</strong> باشد.<br>
    ۲. در تنظیمات اکسپرت (تب Common)، تیک <strong>Allow Algo Trading</strong> خورده باشد.
  </div>

  <!-- نکات مهم -->
  <div class="panel">
    <div class="panel-title">💡 نکات مهم قبل از استفاده</div>
    <ul class="check-list">
      <li>قبل از استفاده در حساب واقعی (Real)، حتماً یک بار در حساب دمو (Demo) تست کنید.</li>
      <li>این اکسپرت هیچ معامله‌ای را خودکار باز نمی‌کند — فقط پس از کلیک دستی شما روی دکمه‌های پنل، دستور ارسال می‌شود.</li>
      <li>اکسپرت روی همه‌ی نمادها (فارکس، طلا، کریپتو) و همه‌ی تایم‌فریم‌ها کار می‌کند.</li>
      <li>برای جابه‌جایی پنل روی چارت، از تنظیمات <code>PanelX</code> استفاده کنید.</li>
      <li>اگر اکسپرت روی چارت کار نکرد، مطمئن شوید که <strong>AutoTrading</strong> در متاتریدر فعال است.</li>
      <li>برای مشاهده لاگ‌های اکسپرت، پنل <strong>Toolbox</strong> (پایین متاتریدر) و تب <strong>Experts</strong> را باز کنید.</li>
    </ul>
  </div>

  <!-- مشکلات رایج -->
  <div class="panel">
    <div class="panel-title"> مشکلات رایج و راه‌حل</div>
    <div class="faq-list">
      <div class="faq-item">
        <h3>اکسپرت در لیست Navigator نمایش داده نمی‌شود</h3>
        <p>متاتریدر را کامل ببندید و دوباره باز کنید. اگر باز هم نمایش داده نشد، فایل را در مسیر درست کپی کرده‌اید؟</p>
      </div>
      <div class="faq-item">
        <h3>دکمه Algo Trading سبز نمی‌شود</h3>
        <p>در تنظیمات متاتریدر (Tools → Options → Expert Advisors)، تیک "Allow automated trading" را بزنید.</p>
      </div>
      <div class="faq-item">
        <h3>اکسپرت روی چارت نمایش داده می‌شود اما کار نمی‌کند</h3>
        <p>مطمئن شوید که هر دو شرط Algo Trading (در نوار ابزار و در تنظیمات اکسپرت) فعال هستند.</p>
      </div>
      <div class="faq-item">
        <h3>خطای "Trading is disabled" می‌گیرم</h3>
        <p>این خطا یعنی حساب شما اجازه معامله ندارد. با بروکر خود تماس بگیرید یا حساب Demo بسازید.</p>
      </div>
      <div class="faq-item">
        <h3>آیا می‌توانم اکسپرت را روی چند چارت همزمان نصب کنم؟</h3>
        <p>بله، اما هر چارت باید Magic Number متفاوتی داشته باشد تا معاملات تداخل پیدا نکنند.</p>
      </div>
    </div>
  </div>

  <!-- لینک‌های مفید -->
  <div class="panel">
    <div class="panel-title">🔗 لینک‌های مفید</div>
    <div class="tools-grid">
      <a href="/experts" class="tool-card">
        <span class="tool-icon">🤖</span>
        <span class="tool-title">صفحه اکسپرت‌ها</span>
        <span class="tool-desc">مشاهده و دانلود اکسپرت مدیریت سرمایه</span>
      </a>
      <a href="/money-management" class="tool-card">
        <span class="tool-icon">📊</span>
        <span class="tool-title">جزئیات اکسپرت</span>
        <span class="tool-desc">ویژگی‌ها، تنظیمات و دانلود</span>
      </a>
      <a href="/calc" class="tool-card">
        <span class="tool-icon">🧮</span>
        <span class="tool-title">ماشین حساب فارکس</span>
        <span class="tool-desc">محاسبه حجم، مارجین و ریسک</span>
      </a>
    </div>
  </div>

  <!-- بازگشت -->
  <div style="text-align:center;margin-top:10px">
    <a href="/experts" class="btn-read-more">← بازگشت به صفحه اکسپرت‌ها</a>
  </div>
</main>
`;o();t();
