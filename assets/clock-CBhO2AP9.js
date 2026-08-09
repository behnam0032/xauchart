(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function L(t="home"){return`
  <nav class="topbar">
    <a href="/" class="logo-link" aria-label="XAUChart - صفحه اصلی">
      <!-- لوگوی عریض (فقط دسکتاپ) -->
      <img 
        src="/images/logo-wide.svg" 
        alt="لوگوی XAUChart" 
        class="logo-img logo-wide"
        width="140" 
        height="42"
      >
      <!-- لوگوی مربعی (فقط موبایل) -->
      <img 
        src="/images/logo.svg" 
        alt="لوگوی XAUChart" 
        class="logo-img logo-square"
        width="40" 
        height="40"
      >
    </a>
    <button class="menu-toggle" id="menuToggle" aria-label="منو">
      <span></span><span></span><span></span>
    </button>
    <div class="nav" id="navMenu">
      ${[{href:"/",label:"خانه",key:"home"},{href:"/prices",label:"همه قیمت‌ها",key:"prices"},{href:"/calc",label:"ماشین حساب",key:"calc"},{href:"/experts",label:"اکسپرت‌ها",key:"experts"},{href:"/learn/",label:"آموزش",key:"learn"},{href:"/about",label:"درباره ما",key:"about"}].map(n=>`<a href="${n.href}" class="nav-btn ${t===n.key?"active":""}">${n.label}</a>`).join("")}
    </div>
    <div class="market-badge open" id="mkBadge">
      <div class="badge-dot"></div>
      <span id="mkText">بازار باز است</span>
    </div>
  </nav>
  <div class="nav-overlay" id="navOverlay"></div>
`}function U(){const t=document.getElementById("menuToggle"),e=document.getElementById("navMenu"),n=document.getElementById("navOverlay");if(!t||!e)return;function o(){e.classList.add("open"),n.classList.add("show"),t.classList.add("active"),document.body.style.overflow="hidden"}function s(){e.classList.remove("open"),n.classList.remove("show"),t.classList.remove("active"),document.body.style.overflow=""}t.addEventListener("click",()=>{e.classList.contains("open")?s():o()}),n.addEventListener("click",s),e.querySelectorAll(".nav-btn").forEach(a=>{a.addEventListener("click",()=>{window.innerWidth<=768&&s()})}),window.addEventListener("resize",()=>{window.innerWidth>768&&s()})}const v=[{id:"sydney",label:"Sydney",open:22,close:7,color:"#22c55e",pairs:["AUD","NZD"]},{id:"tokyo",label:"Tokyo",open:0,close:9,color:"#3b82f6",pairs:["JPY","AUD"]},{id:"london",label:"London",open:8,close:17,color:"#f97316",pairs:["GBP","EUR"]},{id:"newyork",label:"New York",open:13,close:22,color:"#ef4444",pairs:["USD","CAD"]}];function d(t,e){if(!b())return!1;const{open:n,close:o}=t;return n<o?e>=n&&e<o:e>=n||e<o}function w(t,e,n){if(!d(t,e))return 0;const{open:o,close:s}=t,a=o<s?(s-o)*60:(24-o+s)*60;let l=o<s||e>=o?(e-o)*60+n:(24-o+e)*60+n;return Math.min(100,Math.round(l/a*100))}function y(t,e,n){const{close:o}=t;let s=o*60,a=e*60+n,l=s-a;return l<=0&&(l+=24*60),l}function h(t){const e=Math.floor(t/60),n=t%60;return e===0?`${n}m`:`${e}h ${n}m`}function b(t=new Date){const e=t.getUTCDay(),n=t.getUTCHours();return!(e===6||e===0&&n<22||e===5&&n>=22)}function E(t=new Date){const e=n=>String(n).padStart(2,"0");return{h:e(t.getUTCHours()),m:e(t.getUTCMinutes()),s:e(t.getUTCSeconds()),day:t.getUTCDay(),date:t.getUTCDate(),month:t.getUTCMonth(),year:t.getUTCFullYear(),raw:t}}const T=["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],C=["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"];function M(){function t(){const e=E(),n=parseInt(e.h),o=parseInt(e.m),s=document.getElementById("clock"),a=document.getElementById("clockDate");s&&(s.textContent=`${e.h}:${e.m}:${e.s}`),a&&(a.textContent=`${T[e.day]} ${e.date} ${C[e.month]} ${e.year} — UTC`);const l=b(e.raw),f=document.getElementById("mkBadge");f&&(f.className="market-badge "+(l?"open":"closed"));const u=document.getElementById("mkText");u&&(u.textContent=l?"بازار باز است":"بازار بسته است");const m=document.getElementById("weekendBanner");m&&m.classList.toggle("show",!l);const p=document.getElementById("sessionPills");p&&(p.innerHTML=v.map(i=>{const r=d(i,n),c=r?h(y(i,n,o)):"";return`<div class="session-pill ${r?"on":"off"}">
          <span class="sname">${i.label}</span>
          <span class="shours">${i.open}:00–${i.close}:00</span>
          ${r?`<span class="sleft">${c} مانده</span>`:""}
        </div>`}).join(""));const g=document.getElementById("sessRows");g&&(g.innerHTML=v.map(i=>{const r=d(i,n),c=w(i,n,o),k=r?h(y(i,n,o)):"",$=r?"var(--up)":"var(--down)";return`<div class="sess-row">
          <span class="sess-name">${i.label}</span>
          <div class="sess-track">
            <div class="sess-fill" style="width:${r?c:0}%;background:${$}"></div>
          </div>
          <span class="sess-time">${i.open}:00–${i.close}:00</span>
          <span class="sess-tag ${r?"on":"off"}">${r?`باز · ${k}`:"بسته"}</span>
        </div>`}).join(""))}setInterval(t,1e3),t()}export{U as a,M as i,L as r};
