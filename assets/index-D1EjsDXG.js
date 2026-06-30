(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=l(n);fetch(n.href,a)}})();const k="BSzSYFaRH8NcdMi7YpLdmmHYbmRjdlx7",P=`/api/Market/Gold_Currency.php?key=${k}`,C={ons:"انس جهانی",geram18:"طلای ۱۸ عیار",geram24:"طلای ۲۴ عیار",tala_mesghal:"مثقال طلا",abshode:"طلای آبشده",seke_emami:"سکه امامی",seke_bahar:"سکه بهار آزادی",nim_seke:"نیم سکه",rob_seke:"ربع سکه",seke_gerami:"سکه گرمی",usd:"دلار آمریکا",eur:"یورو",gbp:"پوند",aed:"درهم",try:"لیر ترکیه",usdt:"تتر (USDT)",btc:"بیت‌کوین",eth:"اتریوم"},_={gold:"🥇",currency:"💵",crypto:"🪙"},T={XAUUSD:"ons",IR_GOLD_18K:"geram18",IR_GOLD_24K:"geram24",IR_GOLD_MESGHAL:"tala_mesghal",IR_GOLD_MELTED:"abshode",IR_COIN_EMAMI:"seke_emami",IR_COIN_BAHAR:"seke_bahar",IR_COIN_HALF:"nim_seke",IR_COIN_QUARTER:"rob_seke",IR_COIN_1G:"seke_gerami",USD:"usd",USD_IRT:"usd",EUR:"eur",GBP:"gbp",AED:"aed",TRY:"try",USDT_IRT:"usdt",USDT:"usdt",BTC:"btc",ETH:"eth"};function z(e,t){return t||(e==="crypto"?"دلار":"تومان")}async function A(){const e=await fetch(P,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return R(t)}function R(e){let t=[],l=[],s=[];return e.gold||e.currency?(t=e.gold||[],l=e.currency||[],s=e.cryptocurrency||[]):Array.isArray(e)&&(t=e),{gold:B(t,"gold"),currency:B(l,"currency"),crypto:B(s,"crypto"),updatedAt:new Date}}function B(e,t){return e.map(l=>{const s=l.symbol||l.key||l.code||"",n=T[s]||s,a=Number(String(l.price??0).replace(/,/g,"")),i=l.change_value!==void 0&&l.change_value!==null,c=Number(String(l.change_value??0).replace(/,/g,"")),d=Number(l.change_percent??0);return{code:n,apiSymbol:s,category:t,label:C[n]||l.name||s,nameEn:l.name_en||"",icon:_[t],price:a,change:c,pct:d,isUp:i?c>=0:d>=0,unit:z(t,l.unit),date:l.date,time:l.time,raw:l}}).filter(l=>l.price>0)}const b={gold:["ons","geram18","nim_seke","rob_seke"],currency:["usd","eur"],crypto:["usdt","btc","eth"]},U=[{id:"sydney",label:"Sydney",open:22,close:7,color:"#22c55e",pairs:["AUD","NZD"]},{id:"tokyo",label:"Tokyo",open:0,close:9,color:"#3b82f6",pairs:["JPY","AUD"]},{id:"london",label:"London",open:8,close:17,color:"#f97316",pairs:["GBP","EUR"]},{id:"newyork",label:"New York",open:13,close:22,color:"#ef4444",pairs:["USD","CAD"]}];function h(e,t){const{open:l,close:s}=e;return l<s?t>=l&&t<s:t>=l||t<s}function F(e,t,l){if(!h(e,t))return 0;const{open:s,close:n}=e,a=s<n?(n-s)*60:(24-s+n)*60;let i=s<n||t>=s?(t-s)*60+l:(24-s+t)*60+l;return Math.min(100,Math.round(i/a*100))}function w(e,t,l){const{close:s}=e;let n=s*60,a=t*60+l,i=n-a;return i<=0&&(i+=24*60),i}function D(e){const t=Math.floor(e/60),l=e%60;return t===0?`${l}m`:`${t}h ${l}m`}function M(e=new Date){const t=e.getUTCDay(),l=e.getUTCHours();return!(t===6||t===0&&l<22||t===5&&l>=22)}function N(e=new Date){const t=l=>String(l).padStart(2,"0");return{h:t(e.getUTCHours()),m:t(e.getUTCMinutes()),s:t(e.getUTCSeconds()),day:e.getUTCDay(),date:e.getUTCDate(),month:e.getUTCMonth(),year:e.getUTCFullYear(),raw:e}}const O=["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],G=["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],r={XAUUSD:{label:"Gold (XAU/USD)",pipSize:.01,contractSize:100},EURUSD:{label:"EUR/USD",pipSize:1e-4,contractSize:1e5},GBPUSD:{label:"GBP/USD",pipSize:1e-4,contractSize:1e5},USDJPY:{label:"USD/JPY",pipSize:.01,contractSize:1e5},USDCAD:{label:"USD/CAD",pipSize:1e-4,contractSize:1e5},AUDUSD:{label:"AUD/USD",pipSize:1e-4,contractSize:1e5}};function g(e,t){const l=r[e]||r.XAUUSD;return l.contractSize*l.pipSize*t}function X({balance:e,riskPct:t,slPips:l,instrument:s="XAUUSD"}){const n=e*(t/100),a=g(s,1);return{lots:+(n/(l*a)).toFixed(2),riskUSD:+n.toFixed(2),pipVal:+a.toFixed(4)}}function Y({lots:e,instrument:t="XAUUSD"}){return{pipValue:+g(t,e).toFixed(4)}}function H({price:e,lots:t,leverage:l,instrument:s="XAUUSD"}){const n=r[s]||r.XAUUSD,a=t*n.contractSize*e,i=a/l;return{notional:+a.toFixed(2),margin:+i.toFixed(2)}}function V({entry:e,exit:t,lots:l,direction:s="buy",instrument:n="XAUUSD"}){const a=r[n]||r.XAUUSD,i=s==="buy"?1:-1,c=(t-e)/a.pipSize*i,d=c*g(n,l);return{pips:+c.toFixed(1),pnl:+d.toFixed(2),isProfit:d>=0}}function q({balance:e,loss:t}){const l=t/e*100,s=e-t,n=s>0?t/s*100:1/0;return{ddPct:+l.toFixed(2),remaining:+s.toFixed(2),recoveryPct:n===1/0?null:+n.toFixed(2)}}function j({currentBalance:e,targetBalance:t}){if(e<=0)return{recoveryPct:null,diff:0};const l=t-e;return{recoveryPct:+(l/e*100).toFixed(2),diff:+l.toFixed(2)}}function K({positions:e,stopLoss:t,takeProfit:l,instrument:s="XAUUSD"}){var E;if(!e||e.length===0)return null;const n=e.reduce((S,I)=>S+I.lots,0),i=e.reduce((S,I)=>S+I.price*I.lots,0)/n,c=r[s]||r.XAUUSD;let d=null,p=null,u=null,m=null;(E=e[0])==null||E.direction,t&&(d=+Math.abs((i-t)/c.pipSize).toFixed(1),u=+(d*g(s,n)).toFixed(2)),l&&(p=+Math.abs((l-i)/c.pipSize).toFixed(1),m=+(p*g(s,n)).toFixed(2));const f=d&&p?+(p/d).toFixed(2):null;return{avgEntry:+i.toFixed(c.pipSize<.001?5:2),totalLots:+n.toFixed(2),slPips:d,slUSD:u,tpPips:p,tpUSD:m,rr:f}}function J({balance:e,returnPct:t,periods:l,compoundPct:s=100}){const n=[];let a=e;const i=t/100,c=s/100;for(let u=1;u<=l;u++){const m=a*i,f=m*c,E=m*(1-c);a+=f,n.push({period:u,balance:+a.toFixed(2),profit:+m.toFixed(2),compounded:+f.toFixed(2),withdrawn:+E.toFixed(2)})}const d=a-e,p=d/e*100;return{rows:n,finalBalance:+a.toFixed(2),totalProfit:+d.toFixed(2),totalReturn:+p.toFixed(2)}}const Q=Object.keys(r),W=e=>new Intl.NumberFormat("fa-IR").format(Math.round(e)),o=(e,t=2)=>new Intl.NumberFormat("en-US",{minimumFractionDigits:t,maximumFractionDigits:t}).format(e),Z=(e,t)=>t==="دلار"?o(e,e<10?4:2):W(e),y=Q.map(e=>`<option value="${e}">${r[e].label}</option>`).join("");document.getElementById("app").innerHTML=`
<nav class="topbar">
  <div class="logo">XAU<span>/USD</span></div>
  <div class="nav">
    <button class="nav-btn active" data-page="home">خانه</button>
    <button class="nav-btn" data-page="prices">همه قیمت‌ها</button>
    <button class="nav-btn" data-page="calc">ماشین حساب</button>
  </div>
  <div class="market-badge open" id="mkBadge">
    <div class="badge-dot"></div>
    <span id="mkText">بازار باز است</span>
  </div>
</nav>

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
    ${[...b.gold,...b.currency,...b.crypto].map(e=>`
      <div class="price-card loading" id="card-${e}">
        <div class="p-label">در حال بارگذاری...</div>
        <div class="p-val">—</div>
      </div>`).join("")}
  </div>

  <!-- سشن‌ها + ماشین‌حساب -->
  <div class="mid-row">

    <div class="panel">
      <div class="panel-title">🕐 سشن‌های فارکس — UTC</div>
      <div id="sessRows"></div>
      <div class="sess-hint">بهترین زمان برای طلا: تداخل London × New York</div>
    </div>

    <!-- ماشین حساب -->
    <div class="panel" id="calcPanel">
      <div class="panel-title">🧮 ماشین حساب فارکس</div>

      <div class="calc-tabs">
        <button class="ctab active" data-tab="size">حجم معامله</button>
        <button class="ctab" data-tab="pip">Pip Value</button>
        <button class="ctab" data-tab="margin">مارجین</button>
        <button class="ctab" data-tab="pnl">سود/زیان</button>
        <button class="ctab" data-tab="dd">Drawdown</button>
        <button class="ctab" data-tab="rec">ریکاوری</button>
        <button class="ctab" data-tab="avg">میانگین ورود</button>
        <button class="ctab" data-tab="comp">سود مرکب</button>
      </div>

      <!-- 1: حجم معامله -->
      <div class="calc-pane visible" id="pane-size">
        <div class="field"><label>جفت ارز</label><select id="sz-inst">${y}</select></div>
        <div class="field"><label>موجودی حساب (USD)</label><input id="sz-bal" type="number" value="1000" min="1"></div>
        <div class="field"><label>ریسک (%)</label><input id="sz-risk" type="number" value="2" min="0.1" max="100" step="0.1"></div>
        <div class="field"><label>حد ضرر (pip)</label><input id="sz-sl" type="number" value="50" min="1"></div>
        <button class="calc-btn" id="sz-btn">محاسبه</button>
        <div class="calc-result" id="sz-out" style="display:none">
          <div class="res-row"><span class="r-label">حجم پیشنهادی</span><span class="r-val" id="sz-lots">—</span></div>
          <div class="res-row"><span class="r-label">مقدار ریسک</span><span class="r-val" id="sz-risk-usd">—</span></div>
          <div class="res-row"><span class="r-label">ارزش هر pip</span><span class="r-val" id="sz-pipval">—</span></div>
        </div>
      </div>

      <!-- 2: Pip Value -->
      <div class="calc-pane" id="pane-pip">
        <div class="field"><label>جفت ارز</label><select id="pv-inst">${y}</select></div>
        <div class="field"><label>حجم (Lot)</label><input id="pv-lots" type="number" value="0.1" min="0.01" step="0.01"></div>
        <button class="calc-btn" id="pv-btn">محاسبه</button>
        <div class="calc-result" id="pv-out" style="display:none">
          <div class="res-row"><span class="r-label">ارزش هر pip</span><span class="r-val" id="pv-val">—</span></div>
        </div>
      </div>

      <!-- 3: مارجین -->
      <div class="calc-pane" id="pane-margin">
        <div class="field"><label>جفت ارز</label><select id="mg-inst">${y}</select></div>
        <div class="field"><label>قیمت جاری</label><input id="mg-price" type="number" value="3300"></div>
        <div class="field"><label>حجم (Lot)</label><input id="mg-lots" type="number" value="0.1" min="0.01" step="0.01"></div>
        <div class="field"><label>اهرم (Leverage)</label><input id="mg-lev" type="number" value="100" min="1"></div>
        <button class="calc-btn" id="mg-btn">محاسبه</button>
        <div class="calc-result" id="mg-out" style="display:none">
          <div class="res-row"><span class="r-label">مارجین لازم</span><span class="r-val" id="mg-margin">—</span></div>
          <div class="res-row"><span class="r-label">ارزش کل پوزیشن</span><span class="r-val" id="mg-notional">—</span></div>
        </div>
      </div>

      <!-- 4: سود/زیان -->
      <div class="calc-pane" id="pane-pnl">
        <div class="field"><label>جفت ارز</label><select id="pl-inst">${y}</select></div>
        <div class="field"><label>قیمت ورود</label><input id="pl-entry" type="number" value="3280"></div>
        <div class="field"><label>قیمت خروج</label><input id="pl-exit" type="number" value="3320"></div>
        <div class="field"><label>حجم (Lot)</label><input id="pl-lots" type="number" value="0.1" min="0.01" step="0.01"></div>
        <div class="field"><label>جهت</label>
          <select id="pl-dir"><option value="buy">Buy (خرید)</option><option value="sell">Sell (فروش)</option></select></div>
        <button class="calc-btn" id="pl-btn">محاسبه</button>
        <div class="calc-result" id="pl-out" style="display:none">
          <div class="res-row"><span class="r-label">سود / زیان</span><span class="r-val" id="pl-pnl">—</span></div>
          <div class="res-row"><span class="r-label">تعداد pip</span><span class="r-val" id="pl-pips">—</span></div>
        </div>
      </div>

      <!-- 5: Drawdown -->
      <div class="calc-pane" id="pane-dd">
        <p class="calc-desc">محاسبه درصد افت سرمایه و مقدار سود لازم برای بازگشت</p>
        <div class="field"><label>موجودی اولیه (USD)</label><input id="dd-bal" type="number" value="10000" min="1"></div>
        <div class="field"><label>مقدار ضرر (USD)</label><input id="dd-loss" type="number" value="2000" min="0"></div>
        <button class="calc-btn" id="dd-btn">محاسبه</button>
        <div class="calc-result" id="dd-out" style="display:none">
          <div class="res-row"><span class="r-label">درصد Drawdown</span><span class="r-val dd-neg" id="dd-pct">—</span></div>
          <div class="res-row"><span class="r-label">موجودی باقیمانده</span><span class="r-val" id="dd-rem">—</span></div>
          <div class="res-row"><span class="r-label">سود لازم برای بازگشت</span><span class="r-val dd-rec" id="dd-rec">—</span></div>
        </div>
      </div>

      <!-- 6: ریکاوری -->
      <div class="calc-pane" id="pane-rec">
        <p class="calc-desc">چند درصد سود لازم است تا از موجودی فعلی به هدف برسی؟</p>
        <div class="field"><label>موجودی فعلی (USD)</label><input id="rc-cur" type="number" value="8000" min="1"></div>
        <div class="field"><label>موجودی هدف (USD)</label><input id="rc-tgt" type="number" value="10000" min="1"></div>
        <button class="calc-btn" id="rc-btn">محاسبه</button>
        <div class="calc-result" id="rc-out" style="display:none">
          <div class="res-row"><span class="r-label">درصد ریکاوری لازم</span><span class="r-val rc-pct" id="rc-pct">—</span></div>
          <div class="res-row"><span class="r-label">مقدار مورد نیاز</span><span class="r-val" id="rc-diff">—</span></div>
        </div>
      </div>

      <!-- 7: میانگین ورود -->
      <div class="calc-pane" id="pane-avg">
        <p class="calc-desc">میانگین قیمت ورود چند پوزیشن + محاسبه SL و TP</p>
        <div class="field"><label>جفت ارز</label><select id="av-inst">${y}</select></div>
        <div id="av-positions">
          <div class="av-pos-row">
            <input type="number" placeholder="قیمت" class="av-price" value="3280">
            <input type="number" placeholder="Lot" class="av-lots" value="0.1" step="0.01">
            <select class="av-dir"><option value="buy">Buy</option><option value="sell">Sell</option></select>
            <button class="av-rm" style="display:none">✕</button>
          </div>
          <div class="av-pos-row">
            <input type="number" placeholder="قیمت" class="av-price" value="3300">
            <input type="number" placeholder="Lot" class="av-lots" value="0.2" step="0.01">
            <select class="av-dir"><option value="buy">Buy</option><option value="sell">Sell</option></select>
            <button class="av-rm">✕</button>
          </div>
        </div>
        <button class="add-pos-btn" id="av-add">+ افزودن پوزیشن</button>
        <div class="field"><label>Stop Loss (قیمت، اختیاری)</label><input id="av-sl" type="number" placeholder="مثلاً 3250"></div>
        <div class="field"><label>Take Profit (قیمت، اختیاری)</label><input id="av-tp" type="number" placeholder="مثلاً 3380"></div>
        <button class="calc-btn" id="av-btn">محاسبه</button>
        <div class="calc-result" id="av-out" style="display:none">
          <div class="res-row"><span class="r-label">میانگین ورود</span><span class="r-val" id="av-avg">—</span></div>
          <div class="res-row"><span class="r-label">حجم کل</span><span class="r-val" id="av-total-lots">—</span></div>
          <div class="res-row" id="av-sl-row"><span class="r-label">SL فاصله / ضرر</span><span class="r-val dd-neg" id="av-sl-val">—</span></div>
          <div class="res-row" id="av-tp-row"><span class="r-label">TP فاصله / سود</span><span class="r-val" style="color:var(--up)" id="av-tp-val">—</span></div>
          <div class="res-row" id="av-rr-row"><span class="r-label">نسبت R:R</span><span class="r-val" id="av-rr">—</span></div>
        </div>
      </div>

      <!-- 8: سود مرکب -->
      <div class="calc-pane" id="pane-comp">
        <p class="calc-desc">رشد سرمایه با سود مرکب در طول چند دوره</p>
        <div class="field"><label>سرمایه اولیه (USD)</label><input id="cp-bal" type="number" value="1000" min="1"></div>
        <div class="field"><label>سود هر دوره (%)</label><input id="cp-ret" type="number" value="5" min="0.01" step="0.01"></div>
        <div class="field"><label>تعداد دوره</label><input id="cp-per" type="number" value="12" min="1" max="120"></div>
        <div class="field"><label>درصد مرکب‌سازی (%)</label><input id="cp-cpct" type="number" value="100" min="0" max="100" step="10">
          <small style="color:var(--muted);font-size:10px;margin-top:2px">۱۰۰% = کل سود مرکب میشه</small>
        </div>
        <button class="calc-btn" id="cp-btn">محاسبه</button>
        <div id="cp-out" style="display:none">
          <div class="calc-result" style="margin-bottom:8px">
            <div class="res-row"><span class="r-label">موجودی نهایی</span><span class="r-val" id="cp-final">—</span></div>
            <div class="res-row"><span class="r-label">کل سود</span><span class="r-val" style="color:var(--up)" id="cp-total">—</span></div>
            <div class="res-row"><span class="r-label">بازدهی کل</span><span class="r-val" style="color:var(--up)" id="cp-totalret">—</span></div>
          </div>
          <div class="comp-table-wrap">
            <table class="comp-table">
              <thead><tr><th>دوره</th><th>موجودی</th><th>سود</th><th>برداشت</th></tr></thead>
              <tbody id="cp-tbody"></tbody>
            </table>
          </div>
        </div>
      </div>

    </div><!-- /calcPanel -->
  </div><!-- /mid-row -->
</main>
`;function x(){const e=N(),t=parseInt(e.h),l=parseInt(e.m);document.getElementById("clock").textContent=`${e.h}:${e.m}:${e.s}`,document.getElementById("clockDate").textContent=`${O[e.day]} ${e.date} ${G[e.month]} ${e.year} — UTC`;const s=M(e.raw),n=document.getElementById("mkBadge");n.className="market-badge "+(s?"open":"closed"),document.getElementById("mkText").textContent=s?"بازار باز است":"بازار بسته است",document.getElementById("weekendBanner").classList.toggle("show",!s),document.getElementById("sessionPills").innerHTML=U.map(a=>{const i=h(a,t),c=i?D(w(a,t,l)):"";return`<div class="session-pill ${i?"on":""}">
      <span class="sname">${a.label}</span>
      <span class="shours">${a.open}:00–${a.close}:00</span>
      ${i?`<span class="sleft">${c} مانده</span>`:""}
    </div>`}).join(""),document.getElementById("sessRows").innerHTML=U.map(a=>{const i=h(a,t),c=F(a,t,l),d=i?D(w(a,t,l)):"";return`<div class="sess-row">
      <span class="sess-name">${a.label}</span>
      <div class="sess-track"><div class="sess-fill" style="width:${c}%;background:${a.color}"></div></div>
      <span class="sess-time">${a.open}:00–${a.close}:00</span>
      <span class="sess-tag ${i?"on":"off"}">${i?`باز · ${d}`:"بسته"}</span>
    </div>`}).join("")}setInterval(x,1e3);x();async function $(){document.getElementById("errorBar").classList.remove("show");try{const e=await A();ee(e)}catch(e){document.getElementById("errorMsg").textContent=e.message||"خطا در دریافت قیمت",document.getElementById("errorBar").classList.add("show")}}window._loadPrices=$;function ee({gold:e,currency:t,crypto:l}){const s={};[...e,...t,...l].forEach(n=>{s[n.code]=n}),[...b.gold,...b.currency,...b.crypto].forEach(n=>{const a=document.getElementById(`card-${n}`);if(!a)return;const i=s[n];if(!i){a.classList.remove("loading"),a.innerHTML=`<div class="p-label">${n}</div><div class="p-val" style="font-size:13px;color:var(--muted)">داده موجود نیست</div>`;return}a.classList.remove("loading");const c=Math.abs(i.pct).toFixed(2),d=i.isUp?"+":"−",p=i.isUp?"▲":"▼",u=i.isUp?"up":"down";a.innerHTML=`
      <div class="p-label">${i.icon} ${i.label}</div>
      <div class="p-val">${Z(i.price,i.unit)}<span class="p-unit"> ${i.unit}</span></div>
      <div class="p-change ${u}">${p} ${d}${c}%</div>
      <div class="p-time">${i.time?"آپدیت: "+i.time:""}</div>
    `})}$();setInterval($,3e4);document.querySelectorAll(".ctab").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".ctab").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".calc-pane").forEach(t=>t.classList.remove("visible")),e.classList.add("active"),document.getElementById(`pane-${e.dataset.tab}`).classList.add("visible")})});document.getElementById("sz-btn").addEventListener("click",()=>{const e=X({balance:+document.getElementById("sz-bal").value,riskPct:+document.getElementById("sz-risk").value,slPips:+document.getElementById("sz-sl").value,instrument:document.getElementById("sz-inst").value});v("sz-out"),document.getElementById("sz-lots").textContent=`${e.lots} Lot`,document.getElementById("sz-risk-usd").textContent=`$${o(e.riskUSD)}`,document.getElementById("sz-pipval").textContent=`$${e.pipVal}`});document.getElementById("pv-btn").addEventListener("click",()=>{const e=Y({lots:+document.getElementById("pv-lots").value,instrument:document.getElementById("pv-inst").value});v("pv-out"),document.getElementById("pv-val").textContent=`$${e.pipValue}`});document.getElementById("mg-btn").addEventListener("click",()=>{const e=H({price:+document.getElementById("mg-price").value,lots:+document.getElementById("mg-lots").value,leverage:+document.getElementById("mg-lev").value,instrument:document.getElementById("mg-inst").value});v("mg-out"),document.getElementById("mg-margin").textContent=`$${o(e.margin)}`,document.getElementById("mg-notional").textContent=`$${o(e.notional)}`});document.getElementById("pl-btn").addEventListener("click",()=>{const e=V({entry:+document.getElementById("pl-entry").value,exit:+document.getElementById("pl-exit").value,lots:+document.getElementById("pl-lots").value,direction:document.getElementById("pl-dir").value,instrument:document.getElementById("pl-inst").value});v("pl-out");const t=document.getElementById("pl-pnl");t.textContent=`${e.isProfit?"+":""}$${o(e.pnl)}`,t.style.color=e.isProfit?"var(--up)":"var(--down)",document.getElementById("pl-pips").textContent=`${e.pips} pip`});document.getElementById("dd-btn").addEventListener("click",()=>{const e=q({balance:+document.getElementById("dd-bal").value,loss:+document.getElementById("dd-loss").value});v("dd-out"),document.getElementById("dd-pct").textContent=`${e.ddPct}%`,document.getElementById("dd-rem").textContent=`$${o(e.remaining)}`,document.getElementById("dd-rec").textContent=e.recoveryPct!==null?`${e.recoveryPct}%`:"حساب از بین رفته"});document.getElementById("rc-btn").addEventListener("click",()=>{const e=j({currentBalance:+document.getElementById("rc-cur").value,targetBalance:+document.getElementById("rc-tgt").value});v("rc-out"),document.getElementById("rc-pct").textContent=`${e.recoveryPct}%`,document.getElementById("rc-diff").textContent=`$${o(e.diff)}`});document.getElementById("av-add").addEventListener("click",()=>{const e=document.getElementById("av-positions"),t=document.createElement("div");t.className="av-pos-row",t.innerHTML=`
    <input type="number" placeholder="قیمت" class="av-price" value="3300">
    <input type="number" placeholder="Lot" class="av-lots" value="0.1" step="0.01">
    <select class="av-dir"><option value="buy">Buy</option><option value="sell">Sell</option></select>
    <button class="av-rm">✕</button>`,e.appendChild(t),L()});document.getElementById("av-positions").addEventListener("click",e=>{e.target.classList.contains("av-rm")&&(e.target.closest(".av-pos-row").remove(),L())});function L(){const e=document.querySelectorAll(".av-pos-row");e.forEach((t,l)=>{const s=t.querySelector(".av-rm");s.style.display=e.length>1?"":"none"})}document.getElementById("av-btn").addEventListener("click",()=>{const e=[...document.querySelectorAll(".av-pos-row")].map(n=>({price:+n.querySelector(".av-price").value,lots:+n.querySelector(".av-lots").value,direction:n.querySelector(".av-dir").value})),t=document.getElementById("av-sl").value,l=document.getElementById("av-tp").value,s=K({positions:e,stopLoss:t?+t:null,takeProfit:l?+l:null,instrument:document.getElementById("av-inst").value});s&&(v("av-out"),document.getElementById("av-avg").textContent=s.avgEntry,document.getElementById("av-total-lots").textContent=`${s.totalLots} Lot`,s.slPips!==null?(document.getElementById("av-sl-row").style.display="",document.getElementById("av-sl-val").textContent=`${s.slPips} pip  |  −$${o(s.slUSD)}`):document.getElementById("av-sl-row").style.display="none",s.tpPips!==null?(document.getElementById("av-tp-row").style.display="",document.getElementById("av-tp-val").textContent=`${s.tpPips} pip  |  +$${o(s.tpUSD)}`):document.getElementById("av-tp-row").style.display="none",s.rr!==null?(document.getElementById("av-rr-row").style.display="",document.getElementById("av-rr").textContent=`1 : ${s.rr}`):document.getElementById("av-rr-row").style.display="none")});document.getElementById("cp-btn").addEventListener("click",()=>{const e=J({balance:+document.getElementById("cp-bal").value,returnPct:+document.getElementById("cp-ret").value,periods:+document.getElementById("cp-per").value,compoundPct:+document.getElementById("cp-cpct").value});document.getElementById("cp-out").style.display="",document.getElementById("cp-final").textContent=`$${o(e.finalBalance)}`,document.getElementById("cp-total").textContent=`+$${o(e.totalProfit)}`,document.getElementById("cp-totalret").textContent=`+${e.totalReturn}%`,document.getElementById("cp-tbody").innerHTML=e.rows.map(t=>`
    <tr>
      <td>${t.period}</td>
      <td>$${o(t.balance)}</td>
      <td class="up">+$${o(t.profit)}</td>
      <td class="muted">$${o(t.withdrawn)}</td>
    </tr>`).join("")});function v(e){const t=document.getElementById(e);t&&(t.style.display="")}
