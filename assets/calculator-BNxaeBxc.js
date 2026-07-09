const m={XAUUSD:{label:"Gold (XAU/USD)",pipSize:.01,contractSize:100},EURUSD:{label:"EUR/USD",pipSize:1e-4,contractSize:1e5},GBPUSD:{label:"GBP/USD",pipSize:1e-4,contractSize:1e5},USDJPY:{label:"USD/JPY",pipSize:.01,contractSize:1e5},USDCAD:{label:"USD/CAD",pipSize:1e-4,contractSize:1e5},AUDUSD:{label:"AUD/USD",pipSize:1e-4,contractSize:1e5}};function B(t,l){const s=m[t]||m.XAUUSD;return s.contractSize*s.pipSize*l}function S({balance:t,riskPct:l,slPips:s,instrument:i="XAUUSD"}){const n=t*(l/100),d=B(i,1);return{lots:+(n/(s*d)).toFixed(2),riskUSD:+n.toFixed(2),pipVal:+d.toFixed(4)}}function x({lots:t,instrument:l="XAUUSD"}){return{pipValue:+B(l,t).toFixed(4)}}function w({price:t,lots:l,leverage:s,instrument:i="XAUUSD"}){const n=m[i]||m.XAUUSD,d=l*n.contractSize*t,p=d/s;return{notional:+d.toFixed(2),margin:+p.toFixed(2)}}function U({entry:t,exit:l,lots:s,direction:i="buy",instrument:n="XAUUSD"}){const d=m[n]||m.XAUUSD,p=i==="buy"?1:-1,o=(l-t)/d.pipSize*p,c=o*B(n,s);return{pips:+o.toFixed(1),pnl:+c.toFixed(2),isProfit:c>=0}}function D({balance:t,loss:l}){const s=l/t*100,i=t-l,n=i>0?l/i*100:1/0;return{ddPct:+s.toFixed(2),remaining:+i.toFixed(2),recoveryPct:n===1/0?null:+n.toFixed(2)}}function P({currentBalance:t,targetBalance:l}){if(t<=0)return{recoveryPct:null,diff:0};const s=l-t;return{recoveryPct:+(s/t*100).toFixed(2),diff:+s.toFixed(2)}}function z({positions:t,stopLoss:l,takeProfit:s,instrument:i="XAUUSD"}){var e;if(!t||t.length===0)return null;const n=t.reduce((a,E)=>a+E.lots,0),p=t.reduce((a,E)=>a+E.price*E.lots,0)/n,o=m[i]||m.XAUUSD;let c=null,u=null,v=null,y=null;(e=t[0])==null||e.direction,l&&(c=+Math.abs((p-l)/o.pipSize).toFixed(1),v=+(c*B(i,n)).toFixed(2)),s&&(u=+Math.abs((s-p)/o.pipSize).toFixed(1),y=+(u*B(i,n)).toFixed(2));const g=c&&u?+(u/c).toFixed(2):null;return{avgEntry:+p.toFixed(o.pipSize<.001?5:2),totalLots:+n.toFixed(2),slPips:c,slUSD:v,tpPips:u,tpUSD:y,rr:g}}function L({balance:t,returnPct:l,periods:s,compoundPct:i=100}){const n=[];let d=t;const p=l/100,o=i/100;for(let v=1;v<=s;v++){const y=d*p,g=y*o,e=y*(1-o);d+=g,n.push({period:v,balance:+d.toFixed(2),profit:+y.toFixed(2),compounded:+g.toFixed(2),withdrawn:+e.toFixed(2)})}const c=d-t,u=c/t*100;return{rows:n,finalBalance:+d.toFixed(2),totalProfit:+c.toFixed(2),totalReturn:+u.toFixed(2)}}function h({entry:t,sl:l,tp:s,direction:i="buy",lots:n=1,instrument:d="XAUUSD"}){const p=m[d]||m.XAUUSD,o=Math.abs((t-l)/p.pipSize),c=Math.abs((s-t)/p.pipSize),u=o>0?c/o:0,v=B(d,n);return{riskPips:+o.toFixed(1),rewardPips:+c.toFixed(1),rr:+u.toFixed(2),riskUSD:+(o*v).toFixed(2),rewardUSD:+(c*v).toFixed(2)}}const F=Object.keys(m),C=(t,l=2)=>new Intl.NumberFormat("en-US",{minimumFractionDigits:l,maximumFractionDigits:l}).format(t),k=()=>{var t;return!!((t=document.getElementById("centToggle"))!=null&&t.checked)},$=t=>k()?t/100:t,r=(t,l=2)=>C($(t),l),f=F.map(t=>`<option value="${t}">${m[t].label}</option>`).join("");function A(){return`
    <div class="panel" id="calcPanel">
      <div class="panel-title">🧮 ماشین حساب فارکس</div>

      <div class="cent-toggle">
        <label><input type="checkbox" id="centToggle"><span>💱 حساب سنت (Cent)</span></label>
        <small>مقادیر دلاری بر ۱۰۰ تقسیم می‌شوند</small>
      </div>

      <div class="calc-tabs">
        <button class="ctab active" data-tab="size">حجم معامله</button>
        <button class="ctab" data-tab="pip">Pip Value</button>
        <button class="ctab" data-tab="margin">مارجین</button>
        <button class="ctab" data-tab="pnl">سود/زیان</button>
        <button class="ctab" data-tab="rr">ریسک/ریوارد</button>
        <button class="ctab" data-tab="dd">Drawdown</button>
        <button class="ctab" data-tab="rec">ریکاوری</button>
        <button class="ctab" data-tab="avg">میانگین ورود</button>
        <button class="ctab" data-tab="comp">سود مرکب</button>
      </div>

      <div class="calc-pane visible" id="pane-size">
        <div class="field"><label>جفت ارز</label><select id="sz-inst">${f}</select></div>
        <div class="field"><label>موجودی (USD)</label><input id="sz-bal" type="number" value="1000" min="1"></div>
        <div class="field"><label>ریسک (%)</label><input id="sz-risk" type="number" value="2" min="0.1" max="100" step="0.1"></div>
        <div class="field"><label>حد ضرر (pip)</label><input id="sz-sl" type="number" value="50" min="1"></div>
        <button class="calc-btn" id="sz-btn">محاسبه</button>
        <div class="calc-result" id="sz-out" style="display:none">
          <div class="res-row"><span class="r-label">حجم پیشنهادی</span><span class="r-val" id="sz-lots">—</span></div>
          <div class="res-row"><span class="r-label">مقدار ریسک</span><span class="r-val" id="sz-risk-usd">—</span></div>
          <div class="res-row"><span class="r-label">ارزش هر pip</span><span class="r-val" id="sz-pipval">—</span></div>
        </div>
      </div>

      <div class="calc-pane" id="pane-pip">
        <div class="field"><label>جفت ارز</label><select id="pv-inst">${f}</select></div>
        <div class="field"><label>حجم (Lot)</label><input id="pv-lots" type="number" value="0.1" min="0.01" step="0.01"></div>
        <button class="calc-btn" id="pv-btn">محاسبه</button>
        <div class="calc-result" id="pv-out" style="display:none">
          <div class="res-row"><span class="r-label">ارزش هر pip</span><span class="r-val" id="pv-val">—</span></div>
        </div>
      </div>

      <div class="calc-pane" id="pane-margin">
        <div class="field"><label>جفت ارز</label><select id="mg-inst">${f}</select></div>
        <div class="field"><label>قیمت جاری</label><input id="mg-price" type="number" value="3300"></div>
        <div class="field"><label>حجم (Lot)</label><input id="mg-lots" type="number" value="0.1" min="0.01" step="0.01"></div>
        <div class="field"><label>اهرم</label><input id="mg-lev" type="number" value="100" min="1"></div>
        <button class="calc-btn" id="mg-btn">محاسبه</button>
        <div class="calc-result" id="mg-out" style="display:none">
          <div class="res-row"><span class="r-label">مارجین لازم</span><span class="r-val" id="mg-margin">—</span></div>
          <div class="res-row"><span class="r-label">ارزش کل پوزیشن</span><span class="r-val" id="mg-notional">—</span></div>
        </div>
      </div>

      <div class="calc-pane" id="pane-pnl">
        <div class="field"><label>جفت ارز</label><select id="pl-inst">${f}</select></div>
        <div class="field"><label>قیمت ورود</label><input id="pl-entry" type="number" value="3280"></div>
        <div class="field"><label>قیمت خروج</label><input id="pl-exit" type="number" value="3320"></div>
        <div class="field"><label>حجم (Lot)</label><input id="pl-lots" type="number" value="0.1" min="0.01" step="0.01"></div>
        <div class="field"><label>جهت</label><select id="pl-dir"><option value="buy">Buy</option><option value="sell">Sell</option></select></div>
        <button class="calc-btn" id="pl-btn">محاسبه</button>
        <div class="calc-result" id="pl-out" style="display:none">
          <div class="res-row"><span class="r-label">سود / زیان</span><span class="r-val" id="pl-pnl">—</span></div>
          <div class="res-row"><span class="r-label">تعداد pip</span><span class="r-val" id="pl-pips">—</span></div>
        </div>
      </div>

      <div class="calc-pane" id="pane-rr">
        <p class="calc-desc">نسبت ریسک به ریوارد بر اساس نقطه ورود، SL و TP</p>
        <div class="field"><label>جفت ارز</label><select id="rr-inst">${f}</select></div>
        <div class="field"><label>قیمت ورود</label><input id="rr-entry" type="number" value="3300"></div>
        <div class="field"><label>حد ضرر (SL)</label><input id="rr-sl" type="number" value="3270"></div>
        <div class="field"><label>حد سود (TP)</label><input id="rr-tp" type="number" value="3390"></div>
        <div class="field"><label>حجم (Lot)</label><input id="rr-lots" type="number" value="0.1" min="0.01" step="0.01"></div>
        <div class="field"><label>جهت</label><select id="rr-dir"><option value="buy">Buy</option><option value="sell">Sell</option></select></div>
        <button class="calc-btn" id="rr-btn">محاسبه</button>
        <div class="calc-result" id="rr-out" style="display:none">
          <div class="res-row"><span class="r-label">نسبت R:R</span><span class="r-val" id="rr-ratio">—</span></div>
          <div class="res-row"><span class="r-label">ریسک (pip)</span><span class="r-val dd-neg" id="rr-risk-pip">—</span></div>
          <div class="res-row"><span class="r-label">ریوارد (pip)</span><span class="r-val" style="color:var(--up)" id="rr-rew-pip">—</span></div>
          <div class="res-row"><span class="r-label">مبلغ ریسک</span><span class="r-val dd-neg" id="rr-risk-usd">—</span></div>
          <div class="res-row"><span class="r-label">مبلغ ریوارد</span><span class="r-val" style="color:var(--up)" id="rr-rew-usd">—</span></div>
        </div>
      </div>

      <div class="calc-pane" id="pane-dd">
        <p class="calc-desc">محاسبه درصد افت سرمایه و سود لازم برای بازگشت</p>
        <div class="field"><label>موجودی اولیه (USD)</label><input id="dd-bal" type="number" value="10000" min="1"></div>
        <div class="field"><label>مقدار ضرر (USD)</label><input id="dd-loss" type="number" value="2000" min="0"></div>
        <button class="calc-btn" id="dd-btn">محاسبه</button>
        <div class="calc-result" id="dd-out" style="display:none">
          <div class="res-row"><span class="r-label">درصد Drawdown</span><span class="r-val dd-neg" id="dd-pct">—</span></div>
          <div class="res-row"><span class="r-label">موجودی باقیمانده</span><span class="r-val" id="dd-rem">—</span></div>
          <div class="res-row"><span class="r-label">سود لازم برای بازگشت</span><span class="r-val dd-rec" id="dd-rec">—</span></div>
        </div>
      </div>

      <div class="calc-pane" id="pane-rec">
        <p class="calc-desc">چند درصد سود لازم است تا به هدف برسی؟</p>
        <div class="field"><label>موجودی فعلی (USD)</label><input id="rc-cur" type="number" value="8000" min="1"></div>
        <div class="field"><label>موجودی هدف (USD)</label><input id="rc-tgt" type="number" value="10000" min="1"></div>
        <button class="calc-btn" id="rc-btn">محاسبه</button>
        <div class="calc-result" id="rc-out" style="display:none">
          <div class="res-row"><span class="r-label">درصد ریکاوری</span><span class="r-val rc-pct" id="rc-pct">—</span></div>
          <div class="res-row"><span class="r-label">مقدار مورد نیاز</span><span class="r-val" id="rc-diff">—</span></div>
        </div>
      </div>

      <div class="calc-pane" id="pane-avg">
        <p class="calc-desc">میانگین قیمت ورود چند پوزیشن</p>
        <div class="field"><label>جفت ارز</label><select id="av-inst">${f}</select></div>
        <div id="av-positions">
          <div class="av-pos-row"><input type="number" placeholder="قیمت" class="av-price" value="3280"><input type="number" placeholder="Lot" class="av-lots" value="0.1" step="0.01"><select class="av-dir"><option value="buy">Buy</option><option value="sell">Sell</option></select><button class="av-rm" style="display:none">✕</button></div>
          <div class="av-pos-row"><input type="number" placeholder="قیمت" class="av-price" value="3300"><input type="number" placeholder="Lot" class="av-lots" value="0.2" step="0.01"><select class="av-dir"><option value="buy">Buy</option><option value="sell">Sell</option></select><button class="av-rm">✕</button></div>
        </div>
        <button class="add-pos-btn" id="av-add">+ افزودن پوزیشن</button>
        <div class="field"><label>Stop Loss (اختیاری)</label><input id="av-sl" type="number" placeholder="3250"></div>
        <div class="field"><label>Take Profit (اختیاری)</label><input id="av-tp" type="number" placeholder="3380"></div>
        <button class="calc-btn" id="av-btn">محاسبه</button>
        <div class="calc-result" id="av-out" style="display:none">
          <div class="res-row"><span class="r-label">میانگین ورود</span><span class="r-val" id="av-avg">—</span></div>
          <div class="res-row"><span class="r-label">حجم کل</span><span class="r-val" id="av-total-lots">—</span></div>
          <div class="res-row" id="av-sl-row"><span class="r-label">SL / ضرر</span><span class="r-val dd-neg" id="av-sl-val">—</span></div>
          <div class="res-row" id="av-tp-row"><span class="r-label">TP / سود</span><span class="r-val" style="color:var(--up)" id="av-tp-val">—</span></div>
          <div class="res-row" id="av-rr-row"><span class="r-label">نسبت R:R</span><span class="r-val" id="av-rr">—</span></div>
        </div>
      </div>

      <div class="calc-pane" id="pane-comp">
        <p class="calc-desc">رشد سرمایه با سود مرکب</p>
        <div class="field"><label>سرمایه اولیه (USD)</label><input id="cp-bal" type="number" value="1000" min="1"></div>
        <div class="field"><label>سود هر دوره (%)</label><input id="cp-ret" type="number" value="5" min="0.01" step="0.01"></div>
        <div class="field"><label>تعداد دوره</label><input id="cp-per" type="number" value="12" min="1" max="120"></div>
        <div class="field"><label>درصد مرکب‌سازی (%)</label><input id="cp-cpct" type="number" value="100" min="0" max="100" step="10"><small style="color:var(--muted);font-size:10px">۱۰۰% = کل سود مرکب میشه</small></div>
        <button class="calc-btn" id="cp-btn">محاسبه</button>
        <div id="cp-out" style="display:none">
          <div class="calc-result" style="margin-bottom:8px">
            <div class="res-row"><span class="r-label">موجودی نهایی</span><span class="r-val" id="cp-final">—</span></div>
            <div class="res-row"><span class="r-label">کل سود</span><span class="r-val" style="color:var(--up)" id="cp-total">—</span></div>
            <div class="res-row"><span class="r-label">بازدهی کل</span><span class="r-val" style="color:var(--up)" id="cp-totalret">—</span></div>
          </div>
          <div class="comp-table-wrap">
            <table class="comp-table"><thead><tr><th>دوره</th><th>موجودی</th><th>سود</th><th>برداشت</th></tr></thead><tbody id="cp-tbody"></tbody></table>
          </div>
        </div>
      </div>
    </div>`}function R(){var s,i,n,d,p,o,c,u,v,y,g;const t=e=>{const a=document.getElementById(e);a&&(a.style.display="")};document.querySelectorAll(".ctab").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".ctab").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".calc-pane").forEach(a=>a.classList.remove("visible")),e.classList.add("active"),document.getElementById("pane-"+e.dataset.tab).classList.add("visible")})}),(s=document.getElementById("sz-btn"))==null||s.addEventListener("click",()=>{const e=S({balance:+document.getElementById("sz-bal").value,riskPct:+document.getElementById("sz-risk").value,slPips:+document.getElementById("sz-sl").value,instrument:document.getElementById("sz-inst").value});t("sz-out"),document.getElementById("sz-lots").textContent=e.lots+" Lot",document.getElementById("sz-risk-usd").textContent="$"+r(e.riskUSD),document.getElementById("sz-pipval").textContent="$"+r(e.pipVal,4)}),(i=document.getElementById("pv-btn"))==null||i.addEventListener("click",()=>{const e=x({lots:+document.getElementById("pv-lots").value,instrument:document.getElementById("pv-inst").value});t("pv-out"),document.getElementById("pv-val").textContent="$"+r(e.pipValue,4)}),(n=document.getElementById("mg-btn"))==null||n.addEventListener("click",()=>{const e=w({price:+document.getElementById("mg-price").value,lots:+document.getElementById("mg-lots").value,leverage:+document.getElementById("mg-lev").value,instrument:document.getElementById("mg-inst").value});t("mg-out"),document.getElementById("mg-margin").textContent="$"+r(e.margin),document.getElementById("mg-notional").textContent="$"+r(e.notional)}),(d=document.getElementById("pl-btn"))==null||d.addEventListener("click",()=>{const e=U({entry:+document.getElementById("pl-entry").value,exit:+document.getElementById("pl-exit").value,lots:+document.getElementById("pl-lots").value,direction:document.getElementById("pl-dir").value,instrument:document.getElementById("pl-inst").value});t("pl-out");const a=document.getElementById("pl-pnl");a.textContent=(e.isProfit?"+":"")+"$"+r(e.pnl),a.style.color=e.isProfit?"var(--up)":"var(--down)",document.getElementById("pl-pips").textContent=e.pips+" pip"}),(p=document.getElementById("rr-btn"))==null||p.addEventListener("click",()=>{const e=h({entry:+document.getElementById("rr-entry").value,sl:+document.getElementById("rr-sl").value,tp:+document.getElementById("rr-tp").value,lots:+document.getElementById("rr-lots").value,direction:document.getElementById("rr-dir").value,instrument:document.getElementById("rr-inst").value});t("rr-out"),document.getElementById("rr-ratio").textContent="1 : "+e.rr,document.getElementById("rr-risk-pip").textContent=e.riskPips+" pip",document.getElementById("rr-rew-pip").textContent=e.rewardPips+" pip",document.getElementById("rr-risk-usd").textContent="-$"+r(e.riskUSD),document.getElementById("rr-rew-usd").textContent="+$"+r(e.rewardUSD)}),(o=document.getElementById("dd-btn"))==null||o.addEventListener("click",()=>{const e=D({balance:+document.getElementById("dd-bal").value,loss:+document.getElementById("dd-loss").value});t("dd-out"),document.getElementById("dd-pct").textContent=e.ddPct+"%",document.getElementById("dd-rem").textContent="$"+r(e.remaining),document.getElementById("dd-rec").textContent=e.recoveryPct!==null?e.recoveryPct+"%":"حساب از بین رفته"}),(c=document.getElementById("rc-btn"))==null||c.addEventListener("click",()=>{const e=P({currentBalance:+document.getElementById("rc-cur").value,targetBalance:+document.getElementById("rc-tgt").value});t("rc-out"),document.getElementById("rc-pct").textContent=e.recoveryPct+"%",document.getElementById("rc-diff").textContent="$"+r(e.diff)}),(u=document.getElementById("av-add"))==null||u.addEventListener("click",()=>{const e=document.getElementById("av-positions"),a=document.createElement("div");a.className="av-pos-row",a.innerHTML='<input type="number" placeholder="قیمت" class="av-price" value="3300"><input type="number" placeholder="Lot" class="av-lots" value="0.1" step="0.01"><select class="av-dir"><option value="buy">Buy</option><option value="sell">Sell</option></select><button class="av-rm">✕</button>',e.appendChild(a),l()}),(v=document.getElementById("av-positions"))==null||v.addEventListener("click",e=>{e.target.classList.contains("av-rm")&&(e.target.closest(".av-pos-row").remove(),l())});function l(){const e=document.querySelectorAll(".av-pos-row");e.forEach(a=>{a.querySelector(".av-rm").style.display=e.length>1?"":"none"})}(y=document.getElementById("av-btn"))==null||y.addEventListener("click",()=>{const e=[...document.querySelectorAll(".av-pos-row")].map(I=>({price:+I.querySelector(".av-price").value,lots:+I.querySelector(".av-lots").value,direction:I.querySelector(".av-dir").value})),a=document.getElementById("av-sl").value,E=document.getElementById("av-tp").value,b=z({positions:e,stopLoss:a?+a:null,takeProfit:E?+E:null,instrument:document.getElementById("av-inst").value});b&&(t("av-out"),document.getElementById("av-avg").textContent=b.avgEntry,document.getElementById("av-total-lots").textContent=b.totalLots+" Lot",b.slPips!==null?(document.getElementById("av-sl-row").style.display="",document.getElementById("av-sl-val").textContent=b.slPips+" pip | -$"+r(b.slUSD)):document.getElementById("av-sl-row").style.display="none",b.tpPips!==null?(document.getElementById("av-tp-row").style.display="",document.getElementById("av-tp-val").textContent=b.tpPips+" pip | +$"+r(b.tpUSD)):document.getElementById("av-tp-row").style.display="none",b.rr!==null?(document.getElementById("av-rr-row").style.display="",document.getElementById("av-rr").textContent="1 : "+b.rr):document.getElementById("av-rr-row").style.display="none")}),(g=document.getElementById("cp-btn"))==null||g.addEventListener("click",()=>{const e=L({balance:+document.getElementById("cp-bal").value,returnPct:+document.getElementById("cp-ret").value,periods:+document.getElementById("cp-per").value,compoundPct:+document.getElementById("cp-cpct").value});document.getElementById("cp-out").style.display="",document.getElementById("cp-final").textContent="$"+r(e.finalBalance),document.getElementById("cp-total").textContent="+$"+r(e.totalProfit),document.getElementById("cp-totalret").textContent="+"+e.totalReturn+"%",document.getElementById("cp-tbody").innerHTML=e.rows.map(a=>"<tr><td>"+a.period+"</td><td>$"+r(a.balance)+'</td><td class="up">+$'+r(a.profit)+'</td><td class="muted">$'+r(a.withdrawn)+"</td></tr>").join("")})}export{A as g,R as i};
