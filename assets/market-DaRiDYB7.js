(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function c(o="home"){return`
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
      ${[{href:"/",label:"خانه",key:"home"},{href:"/prices",label:"همه قیمت‌ها",key:"prices"},{href:"/calc",label:"ماشین حساب",key:"calc"},{key:"forex-sessions",label:"سشن‌های فارکس",href:"/forex-sessions"},{href:"/experts",label:"اکسپرت‌ها",key:"experts"},{href:"/learn/",label:"آموزش",key:"learn"},{href:"/about",label:"درباره ما",key:"about"}].map(s=>`<a href="${s.href}" class="nav-btn ${o===s.key?"active":""}">${s.label}</a>`).join("")}
    </div>
    <div class="market-badge open" id="mkBadge">
      <div class="badge-dot"></div>
      <span id="mkText">بازار باز است</span>
    </div>
  </nav>
  <div class="nav-overlay" id="navOverlay"></div>
`}function d(){const o=document.getElementById("menuToggle"),e=document.getElementById("navMenu"),s=document.getElementById("navOverlay");if(!o||!e)return;function t(){e.classList.add("open"),s.classList.add("show"),o.classList.add("active"),document.body.style.overflow="hidden"}function n(){e.classList.remove("open"),s.classList.remove("show"),o.classList.remove("active"),document.body.style.overflow=""}o.addEventListener("click",()=>{e.classList.contains("open")?n():t()}),s.addEventListener("click",n),e.querySelectorAll(".nav-btn").forEach(r=>{r.addEventListener("click",()=>{window.innerWidth<=768&&n()})}),window.addEventListener("resize",()=>{window.innerWidth>768&&n()})}const f=[{id:"sydney",label:"Sydney",open:22,close:7,color:"#22c55e",pairs:["AUD","NZD"]},{id:"tokyo",label:"Tokyo",open:0,close:9,color:"#3b82f6",pairs:["JPY","AUD"]},{id:"london",label:"London",open:8,close:17,color:"#f97316",pairs:["GBP","EUR"]},{id:"newyork",label:"New York",open:13,close:22,color:"#ef4444",pairs:["USD","CAD"]}];function a(o,e){if(!l())return!1;const{open:s,close:t}=o;return s<t?e>=s&&e<t:e>=s||e<t}function u(o,e,s){if(!a(o,e))return 0;const{open:t,close:n}=o,r=t<n?(n-t)*60:(24-t+n)*60;let i=t<n||e>=t?(e-t)*60+s:(24-t+e)*60+s;return Math.min(100,Math.round(i/r*100))}function p(o,e,s){const{close:t}=o;let n=t*60,r=e*60+s,i=n-r;return i<=0&&(i+=24*60),i}function m(o){const e=Math.floor(o/60),s=o%60;return e===0?`${s} دقیقه`:`${e} ساعت و ${s} دقیقه`}function l(o=new Date){const e=o.getUTCDay(),s=o.getUTCHours();return!(e===6||e===0&&s<22||e===5&&s>=22)}export{f as S,a,l as b,m as f,d as i,p as m,c as r,u as s};
