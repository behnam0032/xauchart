import{r as i,i as s,a as l}from"./clock-CAxH-o4s.js";document.getElementById("app").innerHTML=i("experts")+`
<main class="main">
  <div class="page-header">
    <h1>🤖 اکسپرت مدیریت سرمایه هوشمند</h1>
    <p>ربات کمکی متاتریدر ۵ برای محاسبه خودکار حجم معامله و مدیریت ریسک</p>
  </div>

  <!-- معرفی -->
  <div class="panel">
    <div class="panel-title">📖 معرفی اکسپرت</div>
    <p style="font-size:14px;line-height:1.8;margin-bottom:12px">
      این یک ربات (اکسپرت) کمکی برای متاتریدر ۵ است که وظیفه اصلی آن محاسبه خودکار و دقیق حجم معامله (Lot Size) بر اساس میزان ریسک مجاز شما و فاصله استاپ لاس است تا از ضررهای ناگهانی و محاسبات اشتباه دستی جلوگیری کند.
    </p>
  </div>

  <!-- نحوه کار -->
  <div class="panel">
    <div class="panel-title"> این ابزار چطور کار می‌کند؟</div>
    <ol class="install-steps">
      <li>به محض انداختن اکسپرت روی چارت، یک خط چین قرمز (SL) و یک پنل اطلاعات ظاهر می‌شود.</li>
      <li><strong>تشخیص هوشمند جهت:</strong> اگر خط قرمز را پایین‌تر از قیمت فعلی بکشید، سیستم حالت BUY را فعال می‌کند. اگر خط قرمز را بالاتر از قیمت بکشید، حالت SELL فعال می‌شود.</li>
      <li><strong>رسم خودکار تی‌پی (TP):</strong> به محض جابه‌جایی خط قرمز، یک خط چین سبز به‌صورت خودکار بر اساس "نسبت ریسک به ریوارد" (مثلاً ۲ برابر فاصله استاپ) رسم می‌شود. (این خط قفل است و فقط با حرکت خط قرمز تغییر می‌کند تا محاسبات به هم نریزد).</li>
      <li><strong>پنل روی چارت</strong> به‌صورت زنده نشان می‌دهد که: چند دلار ریسک می‌کنید، فاصله استاپ چند پیپ است، و حجم پیشنهادی چقدر است.</li>
      <li>با کلیک روی دکمه‌های BUY یا SELL در پنل، معامله دقیقاً با همان حجم محاسبه‌شده، استاپ و تی‌پی باز می‌شود.</li>
    </ol>
  </div>

  <!-- نکته حیاتی -->
  <div class="alert-box warning">
    <strong>⚠️ نکته بسیار مهم و حیاتی برای اجرا:</strong><br>
    برای اینکه دکمه‌های خرید و فروش این اکسپرت کار کنند، حتماً باید دو شرط زیر برقرار باشد:<br><br>
    ۱. گزینه <strong>Algo Trading</strong> (معاملات الگوریتمی) در نوار ابزار بالای متاتریدر باید فعال (سبز رنگ) باشد.<br>
    ۲. در پنجره تنظیمات اکسپرت (تب Common)، تیک گزینه <strong>Allow Algo Trading</strong> حتماً خورده باشد.
  </div>

  <!-- تنظیمات -->
  <div class="panel">
    <div class="panel-title">⚙️ توضیح تنظیمات ورودی (Inputs)</div>
    <div class="settings-table">
      <div class="setting-row">
        <div class="setting-name">RiskPercent</div>
        <div class="setting-desc">چند درصد از کل موجودی حساب حاضرید در این معامله ریسک کنید؟ (پیش‌فرض ۱٪)</div>
      </div>
      <div class="setting-row">
        <div class="setting-name">TP_RR_Ratio</div>
        <div class="setting-desc">نسبت سود به ضرر. مثلاً اگر ۲ بگذارید، فاصله تی‌پی دقیقاً ۲ برابر فاصله استاپ لاس خواهد بود.</div>
      </div>
      <div class="setting-row">
        <div class="setting-name">MagicNumber</div>
        <div class="setting-desc">یک کد شناسایی برای معاملات این ربات (برای تداخل نداشتن با سایر ربات‌ها).</div>
      </div>
      <div class="setting-row">
        <div class="setting-name">Slippage</div>
        <div class="setting-desc">حداکثر انحراف قیمت مجاز به "پوینت". (مثلاً ۵ یعنی اگر قیمت تا ۵ پوینت با قیمت درخواستی شما تفاوت داشت، معامله باز شود؛ در غیر این صورت برای محافظت از شما رد می‌شود).</div>
      </div>
    </div>
  </div>

  <!-- نکات ایمنی -->
  <div class="panel">
    <div class="panel-title">💡 نکات تکمیلی و ایمنی</div>
    <ul class="check-list">
      <li>خط سبز (TP) به‌صورت عمدی غیرقابل جابه‌جایی با ماوس قفل شده است. برای تغییر آن، فقط کافی است خط قرمز (SL) را جابه‌جا کنید؛ خط سبز خودکار آپدیت می‌شود.</li>
      <li>پیشنهاد می‌شود قبل از استفاده در حساب واقعی (Real)، حتماً یک بار عملکرد آن را در حساب دمو (Demo) تست کنید تا با نحوه تعامل خط‌ها و دکمه‌ها کاملاً آشنا شوید.</li>
      <li>این اکسپرت هیچ معامله‌ای را به‌صورت خودکار و بدون اجازه شما باز نمی‌کند و فقط پس از کلیک دستی شما روی دکمه‌های پنل، دستور ارسال می‌شود.</li>
    </ul>
  </div>

  <!-- دانلود -->
  <div class="panel download-section">
    <div class="panel-title"> دانلود اکسپرت</div>
    <div class="download-info">
      <div class="download-file-info">
        <div class="file-icon">📦</div>
        <div class="file-details">
          <div class="file-name">money-management.ex5</div>
          <div class="file-meta">نسخه .۰.۰ · متاتریدر ۵ · حجم: ~۰ کیلوبایت</div>
        </div>
      </div>
      <a href="/download.html?file=MoneyManagement_MT5.ex5" class="btn-download-large">
        ️ دانلود فایل اکسپرت
      </a>
    </div>
  </div>

  <!-- بازگشت -->
  <div style="text-align:center;margin-top:20px">
    <a href="/experts.html" class="btn-read-more">← بازگشت به لیست اکسپرت‌ها</a>
  </div>
</main>
`;s();l();
