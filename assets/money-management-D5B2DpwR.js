import{r as s,i as a,a as i}from"./clock-KWoeytII.js";/* empty css                */import{s as e}from"./anchor-copy-JqxzkbF8.js";document.getElementById("app").innerHTML=s("experts")+`
<main class="main">
  <!-- Hero Section -->
  <div class="ea-hero">
    <div class="ea-hero-badge">XAUUSD MONEY MANAGEMENT EA — LIVE ON MT5</div>
    <div class="ea-hero-subbadge">RISK-BASED LOT SIZING · TRAILING (PIPS/%) · SPREAD LOCK · POSITION CAP</div>
    <h1 class="ea-hero-title">معامله با ریسک کنترل‌شده،<br>نه با حدس و گمان</h1>
    <p class="ea-hero-subtitle">
      اکثر ضررهای بزرگ از تحلیل غلط نمی‌آیند؛ از <strong>حجم غلط</strong> می‌آیند.
      اکسپرت مدیریت سرمایه XAUChart یک خط SL قابل‌درگ روی چارت می‌ذاره و به‌ازای هر جابه‌جایی،
      حجم معامله، حد سود، مارجین لازم و حتی امکان‌پذیر بودن ریسکتون رو لحظه‌ای براتون محاسبه می‌کنه.
    </p>
    <div class="ea-hero-actions">
      <a href="/download.html?file=XAUChart_MM_V2_MT5.ex5" class="btn-download-large">️ دانلود نسخه MT5</a>
      <a href="/download.html?file=XAUChart_MM_V2_MT4.ex4" class="btn-download-large btn-secondary">⬇️ دانلود نسخه MT4</a>
    </div>
    <a href="#how" class="ea-scroll-link">ببین چطور کار می‌کنه ↓</a>
  </div>

  <!-- Preview Image -->
  <div class="ea-preview">
    <img src="/images/money-management-preview.png" alt="پیش‌نمایش اکسپرت مدیریت سرمایه XAUChart روی چارت XAUUSD" class="ea-preview-img">
    <div class="ea-preview-caption">
      پیش‌نمایش اکسپرت روی چارت XAUUSD — خط قرمز SL قابل جابه‌جایی، خط سبز TP خودکار، و پنل اطلاعات زنده
    </div>
  </div>

  <!-- فهرست مطالب -->
  <div class="toc-box">
    <h3> فهرست مطالب</h3>
    <ul>
      <li><a href="#how">این ابزار چطور کار می‌کند؟</a></li>
      <li><a href="#core-engine">هسته اصلی — ورود امن به معامله</a></li>
      <li><a href="#risk-protection">سیستم پنج‌لایه‌ی محافظت از ریسک</a></li>
      <li><a href="#after-entry">مدیریت خودکار معامله و کنترل پوزیشن‌ها</a></li>
      <li><a href="#execution-accuracy">دقت اجرا و قفل اسپرد</a></li>
      <li><a href="#settings">تنظیمات کامل (Inputs)</a></li>
      <li><a href="#download">دانلود اکسپرت</a></li>
    </ul>
  </div>

  <!-- How it works -->
  <div class="page-header">
    <h1 id="how">
      🛠 این ابزار چطور کار می‌کند؟
      <a href="#how" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h1>
    <p>۵ مرحله ساده از نصب تا معامله</p>
  </div>

  <div class="ea-steps">
    <div class="ea-step">
      <div class="ea-step-num">۱</div>
      <div class="ea-step-content">
        <h3>ظاهر شدن خط SL و پنل</h3>
        <p>به محض انداختن اکسپرت روی چارت، یک خط چین قرمز (SL) و یک پنل اطلاعات ظاهر می‌شود.</p>
      </div>
    </div>
    <div class="ea-step">
      <div class="ea-step-num">۲</div>
      <div class="ea-step-content">
        <h3>تشخیص هوشمند جهت</h3>
        <p>اگر خط قرمز را پایین‌تر از قیمت فعلی بکشید، سیستم حالت <strong>BUY</strong> را فعال می‌کند. اگر بالاتر بکشید، حالت <strong>SELL</strong> فعال می‌شود.</p>
      </div>
    </div>
    <div class="ea-step">
      <div class="ea-step-num">۳</div>
      <div class="ea-step-content">
        <h3>رسم خودکار TP</h3>
        <p>به محض جابه‌جایی خط قرمز، یک خط چین سبز بر اساس نسبت ریسک به ریوارد (مثلاً  برابر فاصله استاپ) رسم می‌شود. این خط قفل است و فقط با حرکت SL تغییر می‌کند.</p>
      </div>
    </div>
    <div class="ea-step">
      <div class="ea-step-num">۴</div>
      <div class="ea-step-content">
        <h3>پنل اطلاعات زنده</h3>
        <p>پنل روی چارت به‌صورت زنده نشان می‌دهد: چند دلار ریسک می‌کنید، فاصله استاپ چند پیپ است، و حجم پیشنهادی چقدر است.</p>
      </div>
    </div>
    <div class="ea-step">
      <div class="ea-step-num">۵</div>
      <div class="ea-step-content">
        <h3>باز کردن معامله با یک کلیک</h3>
        <p>با کلیک روی دکمه‌های BUY یا SELL در پنل، معامله دقیقاً با همان حجم محاسبه‌شده، استاپ و تی‌پی باز می‌شود.</p>
      </div>
    </div>
  </div>

  <!-- Core Engine -->
  <div class="page-header">
    <h1 id="core-engine">
      ⚙️ هسته اصلی — هر چیزی که برای ورود امن لازم دارید
      <a href="#core-engine" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h1>
    <p>شما فقط درصد ریسک و نسبت ریسک‌به‌ریوارد رو تعیین می‌کنید. بقیه‌ی محاسبات، پیش‌نمایش و اجرا با اکسپرته.</p>
  </div>

  <div class="ea-features-grid">
    <div class="ea-feature-card">
      <div class="ea-feature-badge">01</div>
      <h3>AUTO LOT SIZING</h3>
      <h4>محاسبه‌ی خودکار حجم بر اساس درصد ریسک</h4>
      <p>یک خط افقی قابل‌درگ (SL) روی چارت دارید. هر بار که با ماوس جابه‌جاش می‌کنید، حجم معامله بر اساس همون درصد ریسکی که در تنظیمات مشخص کردید، لحظه‌ای بازمحاسبه می‌شه — دقیق، بدون اکسل و بدون محاسبه‌ی دستی.</p>
    </div>
    <div class="ea-feature-card">
      <div class="ea-feature-badge">02</div>
      <h3>AUTO TAKE PROFIT</h3>
      <h4>حد سود با نسبت ریسک‌به‌ریوارد دلخواه</h4>
      <p>خط TP همزمان با SL و بر اساس نسبت RR انتخابی شما (مثلاً ۱ به ۲) ترسیم می‌شه. اگر ۱ دلار ریسک می‌کنید، هدف سود خودش رو با ۲۰ دلار تنظیم می‌کنه.</p>
    </div>
    <div class="ea-feature-card">
      <div class="ea-feature-badge">03</div>
      <h3>LIVE TOOLTIP</h3>
      <h4>پیش‌نمایش دقیق سود و زیان روی خود خط‌ها</h4>
      <p>نگه‌داشتن ماوس روی خط SL یا TP، تولتیپی باز می‌کنه که فاصله به pip، حجم دقیق محاسبه‌شده و مبلغ واقعی سود/ضرر به دلار رو نشون می‌ده — قبل از این‌که وارد معامله بشید.</p>
    </div>
    <div class="ea-feature-card">
      <div class="ea-feature-badge">04</div>
      <h3>ONE-CLICK ENTRY</h3>
      <h4>باز کردن معامله با یک کلیک</h4>
      <p>دکمه‌ی بزرگ خرید/فروش، جهتش رو خودکار از روی محل خط SL تشخیص می‌ده. با یک کلیک، پوزیشن دقیقاً با همون حجم، SL و TP پیش‌نمایش‌شده باز می‌شه.</p>
    </div>
    <div class="ea-feature-card">
      <div class="ea-feature-badge">05</div>
      <h3>SAFETY LOCK</h3>
      <h4>دکمه‌ی قفل امنیتی — جلوی کلیک‌های اشتباه رو می‌گیره</h4>
      <p>یه دکمه‌ی کوچیک بالای پنل (گوشه‌ی نوار عنوان) کل معامله‌گری رو با یک کلیک قفل می‌کنه. تا وقتی قفله، دکمه‌ی خرید/فروش کاملاً خاکستری و غیرقابل‌کلیکه — مناسب وقتی می‌خواید فقط چارت رو تحلیل کنید بدون ریسک کلیک اشتباه، یا وقتی چند نفر به یک سیستم دسترسی دارن.</p>
    </div>
  </div>

  <!-- Risk Protection -->
  <div class="page-header">
    <h1 id="risk-protection">
      🛡️ سیستم پنج‌لایه‌ی محافظت از ریسک
      <a href="#risk-protection" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h1>
    <p>خیلی از ابزارهای مشابه فقط لات حساب می‌کنن. این اکسپرت جلوی معاملاتی رو هم می‌گیره که اصلاً نباید باز بشن.</p>
  </div>

  <div class="ea-risk-grid">
    <div class="ea-risk-card">
      <div class="ea-risk-icon">🔴</div>
      <h3>حد ضرر بیش‌ازحد دور</h3>
      <p>وقتی حتی با کمترین حجم قابل‌معامله هم ریسک واقعی از سقف مجاز بیشتر بشه.</p>
      <div class="ea-risk-tag">SL LINE → RED</div>
    </div>
    <div class="ea-risk-card">
      <div class="ea-risk-icon">⚠️</div>
      <h3>حد ضرر بیش‌ازحد نزدیک</h3>
      <p>وقتی حجم لازم برای رعایت دقیق ریسک، از حداکثر حجم مجاز نماد بیشتر بشه.</p>
      <div class="ea-risk-tag">TRADE BTN → HIDDEN</div>
    </div>
    <div class="ea-risk-card">
      <div class="ea-risk-icon">🚫</div>
      <h3>ریسک اصلاً ممکن نیست</h3>
      <p>در نمادهایی مثل بیت‌کوین، حتی کمترین حجم در نزدیک‌ترین فاصله‌ی مجاز بروکر هم ریسک شما رو رد می‌کنه.</p>
      <div class="ea-risk-tag">HONEST WARNING</div>
    </div>
    <div class="ea-risk-card">
      <div class="ea-risk-icon"></div>
      <h3>مارجین آزاد کافی نیست</h3>
      <p>حتی اگه ریسک درست باشه، ممکنه موجودی حساب برای باز کردن اون حجم کافی نباشه — دقیقاً محاسبه و اعلام می‌شه.</p>
      <div class="ea-risk-tag">MARGIN CHECK</div>
    </div>
    <div class="ea-risk-card">
      <div class="ea-risk-icon"></div>
      <h3>اسپرد غیرعادی زیاد</h3>
      <p>در ساعات کم‌معامله یا نزدیک اخبار مهم، اسپرد می‌تونه ناگهان چند برابر بشه. با آستانه‌ی جداگانه برای طلا، فارکس و کریپتو، اکسپرت این لحظه‌ها رو تشخیص و معامله رو بلاک می‌کنه.</p>
      <div class="ea-risk-tag">SPREAD LOCK</div>
    </div>
  </div>

  <!-- After Entry -->
  <div class="page-header">
    <h1 id="after-entry">
      🔄 مدیریت خودکار معامله و کنترل تعداد پوزیشن‌ها
      <a href="#after-entry" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h1>
    <p>کار اکسپرت با باز شدن معامله تموم نمی‌شه؛ سود شما رو هم مدیریت می‌کنه و مراقبه از حد مجازتون خارج نشید.</p>
  </div>

  <div class="ea-after-entry">
    <div class="ea-ae-card">
      <div class="ea-ae-icon">📈</div>
      <h3>تریلینگ استاپ — با قفل تضمینی حداقل سود</h3>
      <p>وقتی معامله وارد سود می‌شه، حد ضرر به‌صورت خودکار پشت قیمت کشیده می‌شه تا سود شناور شما قفل بشه. <strong>نکته‌ی مهم:</strong> حداقل سود (MinProfit) یک آستانه‌ی ساده برای روشن‌کردن تریلینگ نیست — اکسپرت طوری حساب می‌کنه که اولین جابه‌جایی SL دقیقاً همون مقدار حداقل سود رو قفل کنه، نه کمتر. مثلاً با ورود ۳۰۰۰، حداقل سود ۲۰۰ پیپ و فاصله‌ی تریلینگ ۵۰ پیپ: تا قیمت به ۰۰۲.۵۰ نرسه هیچ اتفاقی نمی‌افته؛ دقیقاً همون‌جا SL برای اولین بار به ۳۰۰۲.۰۰ منتقل می‌شه (یعنی ۲۰۰ پیپ سود تضمینی) و از اون به بعد طبق فاصله و گام عادی ادامه پیدا می‌کنه. همچنین چون این اکسپرت روی همه‌ی نمادها کار می‌کنه، واحد اندازه‌گیری همه‌ی این فاصله‌ها بین پیپ ثابت یا درصدی از قیمت ورود قابل‌انتخابه.</p>
      <div class="ea-ae-params">
        <div class="param"><span class="param-name">TrailingUnit</span><span class="param-desc">پیپ / درصد</span></div>
        <div class="param"><span class="param-name">TrailingDistance</span><span class="param-desc">فاصله‌ی تریلینگ از قیمت</span></div>
        <div class="param"><span class="param-name">TrailingStep</span><span class="param-desc">حداقل گام حرکت</span></div>
        <div class="param"><span class="param-name">TrailingMinProfit</span><span class="param-desc">حداقل سود تضمینی قفل‌شده</span></div>
      </div>
    </div>
    <div class="ea-ae-card">
      <div class="ea-ae-icon">🎯</div>
      <h3>محدودیت تعداد پوزیشن باز</h3>
      <p>یه سقف برای تعداد پوزیشن‌های همزمان باز (در همه‌ی نمادها) تعیین کنید. به محض رسیدن به این سقف، دکمه‌ی معامله ناپدید می‌شه و باکس هشدار جایگزینش می‌شه تا از باز شدن پوزیشن‌های بیش‌ازحد و ریسک انباشته جلوگیری بشه.</p>
      <div class="ea-ae-params">
        <div class="param"><span class="param-name">MaxOpenPositions</span><span class="param-desc">حداکثر پوزیشن هم‌زمان</span></div>
        <div class="param"><span class="param-name">Default</span><span class="param-desc">۰ = نامحدود</span></div>
      </div>
    </div>
  </div>

  <!-- Execution Accuracy -->
  <div class="page-header">
    <h1 id="execution-accuracy">
      🔍 اسپرد رو هم می‌بینه، نه فقط قیمت رو
      <a href="#execution-accuracy" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h1>
    <p>خیلی از ابزارها موقع محاسبه‌ی ریسک و پیش‌نمایش، اسپرد رو کاملاً نادیده می‌گیرن. این اکسپرت هم توی محاسبات، هم توی امنیت معامله، اسپرد رو جدی می‌گیره.</p>
  </div>

  <div class="ea-exec-grid">
    <div class="ea-exec-card">
      <div class="ea-exec-icon">B/A</div>
      <h3>پیش‌نمایش دقیق و هم‌راستا با اجرای واقعی</h3>
      <p>خط SL/TP و محاسبه‌ی حجم، به‌جای یک قیمت ثابت، بر مبنای <strong>Ask برای خرید</strong> و <strong>Bid برای فروش</strong> ساخته می‌شن — دقیقاً همون قیمتی که واقعاً هنگام باز شدن معامله ثبت می‌شه. یعنی چیزی که در پیش‌نمایش (حجم، فاصله، تولتیپ) می‌بینید، صد‌درصد با چیزی که بعد از کلیک باز می‌شه یکیه؛ نه یک تخمین تقریبی.</p>
    </div>
    <div class="ea-exec-card">
      <div class="ea-exec-icon">SPR</div>
      <h3>قفل محافظتی اسپرد — جداگانه برای هر بازار</h3>
      <p>چون اسپرد طبیعی طلا، فارکس و کریپتو زمین تا آسمون فرق داره، یک عدد ثابت برای همه‌ی نمادها معنی نداره. برای همین سه آستانه‌ی جداگانه تعریف می‌شه؛ اکسپرت خودش نوع نماد رو تشخیص می‌ده و آستانه‌ی درست رو اعمال می‌کنه. یه ردیف زنده هم زیر دکمه‌ی معامله اسپرد فعلی رو نشون می‌ده و از ۸۰٪ آستانه به بعد، زودتر از قفل کامل، قرمز می‌شه.</p>
      <div class="ea-ae-params">
        <div class="param"><span class="param-name">MaxSpreadGold_Pips</span><span class="param-desc">سقف اسپرد طلا</span></div>
        <div class="param"><span class="param-name">MaxSpreadForex_Pips</span><span class="param-desc">سقف اسپرد فارکس</span></div>
        <div class="param"><span class="param-name">MaxSpreadCrypto_Pips</span><span class="param-desc">سقف اسپرد کریپتو</span></div>
      </div>
    </div>
  </div>

  <!-- Settings Table -->
  <div class="page-header">
    <h1 id="settings">
      ⚙️ تنظیمات کامل (Inputs)
      <a href="#settings" class="anchor-link" aria-label="لینک به این بخش">#</a>
    </h1>
    <p>هیچ‌چیز قفل نیست — همه‌چیز قابل‌تنظیم از پنجره‌ی Inputs متاتریدر</p>
  </div>

  <div class="ea-settings">
    <div class="ea-settings-group">
      <h3>RISK & ENTRY</h3>
      <div class="setting-row"><div class="setting-name">RiskPercent</div><div class="setting-desc">درصد ریسک مجاز در هر معامله نسبت به موجودی حساب</div></div>
      <div class="setting-row"><div class="setting-name">TP_RR_Ratio</div><div class="setting-desc">نسبت ریسک‌به‌ریوارد برای محاسبه‌ی خودکار حد سود</div></div>
      <div class="setting-row"><div class="setting-name">MagicNumber</div><div class="setting-desc">شناسه‌ی اختصاصی معاملات این اکسپرت</div></div>
      <div class="setting-row"><div class="setting-name">Slippage</div><div class="setting-desc">حداکثر لغزش قیمتی مجاز هنگام ورود</div></div>
      <div class="setting-row"><div class="setting-name">MaxOpenPositions</div><div class="setting-desc">حداکثر تعداد پوزیشن باز مجاز (۰ = نامحدود) — با رسیدن به این عدد، دکمه‌ی معامله مخفی و هشدار نشون داده می‌شه</div></div>
    </div>

    <div class="ea-settings-group">
      <h3>TRAILING STOP</h3>
      <div class="setting-row"><div class="setting-name">EnableTrailing</div><div class="setting-desc">فعال یا غیرفعال کردن تریلینگ استاپ</div></div>
      <div class="setting-row"><div class="setting-name">TrailingUnit</div><div class="setting-desc">واحد اندازه‌گیری فاصله‌های تریلینگ: پیپ یا درصد از قیمت ورود</div></div>
      <div class="setting-row"><div class="setting-name">TrailingDistance_Pips / _Percent</div><div class="setting-desc">فاصله‌ی تریلینگ از قیمت جاری (بر حسب واحد انتخابی)</div></div>
      <div class="setting-row"><div class="setting-name">TrailingStep_Pips / _Percent</div><div class="setting-desc">حداقل گام حرکت مجاز تریلینگ (بر حسب واحد انتخابی)</div></div>
      <div class="setting-row"><div class="setting-name">TrailingMinProfit_Pips / _Percent</div><div class="setting-desc">حداقل سودی که تضمین می‌شه اولین بار SL جابه‌جا بشه (نه فقط یه آستانه‌ی روشن/خاموش)</div></div>
    </div>

    <div class="ea-settings-group">
      <h3>SPREAD PROTECTION</h3>
      <div class="setting-row"><div class="setting-name">EnableSpreadProtection</div><div class="setting-desc">فعال یا غیرفعال کردن قفل محافظتی اسپرد</div></div>
      <div class="setting-row"><div class="setting-name">MaxSpreadGold_Pips</div><div class="setting-desc">حداکثر اسپرد مجاز برای نمادهای طلا (پیپ)</div></div>
      <div class="setting-row"><div class="setting-name">MaxSpreadForex_Pips</div><div class="setting-desc">حداکثر اسپرد مجاز برای جفت‌ارزهای فارکس (پیپ)</div></div>
      <div class="setting-row"><div class="setting-name">MaxSpreadCrypto_Pips</div><div class="setting-desc">حداکثر اسپرد مجاز برای نمادهای کریپتو (پیپ)</div></div>
    </div>

    <div class="ea-settings-group">
      <h3>PANEL & APPEARANCE</h3>
      <div class="setting-row"><div class="setting-name">PanelX</div><div class="setting-desc">فاصله‌ی پنل از سمت چپ چارت — برای جابه‌جایی روی هر رزولوشن</div></div>
      <div class="setting-row"><div class="setting-name">PanelBGColor</div><div class="setting-desc">رنگ پس‌زمینه‌ی بدنه‌ی پنل</div></div>
      <div class="setting-row"><div class="setting-name">PanelTitleBGColor</div><div class="setting-desc">رنگ پس‌زمینه‌ی نوار عنوان پنل</div></div>
      <div class="setting-row"><div class="setting-name">PanelTextColor</div><div class="setting-desc">رنگ متن اصلی پنل</div></div>
      <div class="setting-row"><div class="setting-name">PanelAccentColor</div><div class="setting-desc">رنگ تأکیدی (ریسک/حجم/مارجین)</div></div>
      <div class="setting-row"><div class="setting-name">BuyColor / SellColor</div><div class="setting-desc">رنگ دکمه‌ی معامله در حالت خرید و فروش</div></div>
      <div class="setting-row"><div class="setting-name">SLLineColor / TPLineColor</div><div class="setting-desc">رنگ خط حد ضرر و حد سود روی چارت</div></div>
    </div>
  </div>

  <!-- Warning -->
  <div class="alert-box warning">
    <strong>⚠️ نکته بسیار مهم و حیاتی برای اجرا:</strong><br>
    برای اینکه دکمه‌های خرید و فروش این اکسپرت کار کنند، حتماً باید دو شرط زیر برقرار باشد:<br><br>
    ۱. گزینه <strong>Algo Trading</strong> (معاملات الگوریتمی) در نوار ابزار بالای متاتریدر باید فعال (سبز رنگ) باشد.<br>
    ۲. در پنجره تنظیمات اکسپرت (تب Common)، تیک گزینه <strong>Allow Algo Trading</strong> حتماً خورده باشد.
  </div>

  <!-- Safety Tips -->
  <div class="panel">
    <div class="panel-title">💡 نکات تکمیلی و ایمنی</div>
    <ul class="check-list">
      <li>خط سبز (TP) به‌صورت عمدی غیرقابل جابه‌جایی با ماوس قفل شده است. برای تغییر آن، فقط کافی است خط قرمز (SL) را جابه‌جا کنید؛ خط سبز خودکار آپدیت می‌شود.</li>
      <li>پیشنهاد می‌شود قبل از استفاده در حساب واقعی (Real)، حتماً یک بار عملکرد آن را در حساب دمو (Demo) تست کنید تا با نحوه تعامل خط‌ها و دکمه‌ها کاملاً آشنا شوید.</li>
      <li>این اکسپرت هیچ معامله‌ای را به‌صورت خودکار و بدون اجازه شما باز نمی‌کند و فقط پس از کلیک دستی شما روی دکمه‌های پنل، دستور ارسال می‌شود.</li>
    </ul>
  </div>

  <!-- Download Section -->
  <div class="panel download-section" id="download">
    <div class="panel-title">⬇️ دانلود اکسپرت</div>
    <div class="download-info">
      <div class="download-files">
        <div class="download-file-info">
          <div class="file-icon">📦</div>
          <div class="file-details">
            <div class="file-name">XAUChart_MM_V2_MT5.ex5</div>
            <div class="file-meta">متاتریدر ۵ · نسخه ۲.۰.۰</div>
          </div>
          <a href="/download.html?file=XAUChart_MM_V2_MT5.ex5" class="btn-download-large">⬇️ دانلود MT5</a>
        </div>
        <div class="download-file-info">
          <div class="file-icon"></div>
          <div class="file-details">
            <div class="file-name">XAUChart_MM_V2_MT4.ex4</div>
            <div class="file-meta">متاتریدر ۴ · نسخه ۲..۰</div>
          </div>
          <a href="/download.html?file=XAUChart_MM_V2_MT4.ex4" class="btn-download-large btn-secondary">⬇️ دانلود MT4</a>
        </div>
      </div>
      <div class="alert-box tip" style="margin-top:14px">
        💡 <strong>نکته امنیتی:</strong> لینک دانلود مستقیم غیرفعال است. برای دانلود حتماً باید از این صفحه استفاده کنید.
      </div>
    </div>
  </div>

  <!-- Back -->
  <div style="text-align:center;margin-top:20px">
    <a href="/experts" class="btn-read-more">← بازگشت به لیست اکسپرت‌ها</a>
  </div>
</main>
`;a();i();e();
