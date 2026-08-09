(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function $(o="home"){return`
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
      ${[{href:"/",label:"خانه",key:"home"},{href:"/prices",label:"همه قیمت‌ها",key:"prices"},{href:"/calc",label:"ماشین حساب",key:"calc"},{href:"/experts",label:"اکسپرت‌ها",key:"experts"},{href:"/learn/",label:"آموزش",key:"learn"},{href:"/about",label:"درباره ما",key:"about"}].map(t=>`<a href="${t.href}" class="nav-btn ${o===t.key?"active":""}">${t.label}</a>`).join("")}
    </div>
    <div class="market-badge open" id="mkBadge">
      <div class="badge-dot"></div>
      <span id="mkText">بازار باز است</span>
    </div>
  </nav>
  <div class="nav-overlay" id="navOverlay"></div>
`}function U(){const o=document.getElementById("menuToggle"),e=document.getElementById("navMenu"),t=document.getElementById("navOverlay");if(!o||!e)return;function s(){e.classList.add("open"),t.classList.add("show"),o.classList.add("active"),document.body.style.overflow="hidden"}function n(){e.classList.remove("open"),t.classList.remove("show"),o.classList.remove("active"),document.body.style.overflow=""}o.addEventListener("click",()=>{e.classList.contains("open")?n():s()}),t.addEventListener("click",n),e.querySelectorAll(".nav-btn").forEach(i=>{i.addEventListener("click",()=>{window.innerWidth<=768&&n()})}),window.addEventListener("resize",()=>{window.innerWidth>768&&n()})}const w=[{id:"sydney",label:"Sydney",open:22,close:7,color:"#22c55e",pairs:["AUD","NZD"]},{id:"tokyo",label:"Tokyo",open:0,close:9,color:"#3b82f6",pairs:["JPY","AUD"]},{id:"london",label:"London",open:8,close:17,color:"#f97316",pairs:["GBP","EUR"]},{id:"newyork",label:"New York",open:13,close:22,color:"#ef4444",pairs:["USD","CAD"]}];function p(o,e){if(!L())return!1;const{open:t,close:s}=o;return t<s?e>=t&&e<s:e>=t||e<s}function D(o,e,t){if(!p(o,e))return 0;const{open:s,close:n}=o,i=s<n?(n-s)*60:(24-s+n)*60;let r=s<n||e>=s?(e-s)*60+t:(24-s+e)*60+t;return Math.min(100,Math.round(r/i*100))}function k(o,e,t){const{close:s}=o;let n=s*60,i=e*60+t,r=n-i;return r<=0&&(r+=24*60),r}function T(o){const e=Math.floor(o/60),t=o%60;return e===0?`${t} دقیقه`:`${e} ساعت و ${t} دقیقه`}function L(o=new Date){const e=o.getUTCDay(),t=o.getUTCHours();return!(e===6||e===0&&t<22||e===5&&t>=22)}function u(o){const e=new Date;return e.setUTCHours(o,0,0,0),e.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}function E(){function o(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=document.getElementById("clock");n&&(n.textContent=e.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}));const i=document.getElementById("clockDate");if(i){const a=e.toLocaleDateString("fa-IR",{weekday:"long",year:"numeric",month:"long",day:"numeric"});i.textContent=`${a} — به وقت محلی`}const r=L(e),y=document.getElementById("mkBadge");y&&(y.className="market-badge "+(r?"open":"closed"));const v=document.getElementById("mkText");v&&(v.textContent=r?"بازار باز است":"بازار بسته است");const g=document.getElementById("weekendBanner");if(g){g.classList.toggle("show",!r);const a=new Date;a.setUTCHours(22,0,0,0),a.setUTCDate(a.getUTCDate()+(5-a.getUTCDay()+7)%7);const l=new Date;l.setUTCHours(22,0,0,0),l.setUTCDate(l.getUTCDate()+(7-l.getUTCDay()+7)%7);const c=a.toLocaleDateString("fa-IR",{weekday:"long"}),d=a.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1}),f=l.toLocaleDateString("fa-IR",{weekday:"long"}),m=l.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1});g.innerHTML=`⚠️ بازار فارکس آخر هفته (${c} ساعت ${d} تا ${f} ساعت ${m} به وقت محلی) تعطیل است.`}const h=document.getElementById("sessionPills");h&&(h.innerHTML=w.map(a=>{const l=p(a,t),c=l?T(k(a,t,s)):"",d=u(a.open),f=u(a.close);return`<div class="session-pill ${l?"on":"off"}">
          <span class="sname">${a.label}</span>
          <span class="shours">${d}–${f}</span>
          ${l?`<span class="sleft">${c} مانده</span>`:""}
        </div>`}).join(""));const b=document.getElementById("sessRows");b&&(b.innerHTML=w.map(a=>{const l=p(a,t),c=D(a,t,s),d=l?T(k(a,t,s)):"",f=l?"var(--up)":"var(--down)",m=u(a.open),C=u(a.close);return`<div class="sess-row">
          <span class="sess-name">${a.label}</span>
          <div class="sess-track">
            <div class="sess-fill" style="width:${l?c:0}%;background:${f}"></div>
          </div>
          <span class="sess-time">${m}–${C}</span>
          <span class="sess-tag ${l?"on":"off"}">${l?`باز · ${d}`:"بسته"}</span>
        </div>`}).join(""))}setInterval(o,1e3),o()}export{U as a,E as i,$ as r};
