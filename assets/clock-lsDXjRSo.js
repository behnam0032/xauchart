(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();function L(s="home"){return`
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
      ${[{href:"/",label:"خانه",key:"home"},{href:"/prices",label:"همه قیمت‌ها",key:"prices"},{href:"/calc",label:"ماشین حساب",key:"calc"},{href:"/experts",label:"اکسپرت‌ها",key:"experts"},{href:"/learn/",label:"آموزش",key:"learn"},{href:"/about",label:"درباره ما",key:"about"}].map(n=>`<a href="${n.href}" class="nav-btn ${s===n.key?"active":""}">${n.label}</a>`).join("")}
    </div>
    <div class="market-badge open" id="mkBadge">
      <div class="badge-dot"></div>
      <span id="mkText">بازار باز است</span>
    </div>
  </nav>
  <div class="nav-overlay" id="navOverlay"></div>
`}function S(){const s=document.getElementById("menuToggle"),e=document.getElementById("navMenu"),n=document.getElementById("navOverlay");if(!s||!e)return;function o(){e.classList.add("open"),n.classList.add("show"),s.classList.add("active"),document.body.style.overflow="hidden"}function t(){e.classList.remove("open"),n.classList.remove("show"),s.classList.remove("active"),document.body.style.overflow=""}s.addEventListener("click",()=>{e.classList.contains("open")?t():o()}),n.addEventListener("click",t),e.querySelectorAll(".nav-btn").forEach(a=>{a.addEventListener("click",()=>{window.innerWidth<=768&&t()})}),window.addEventListener("resize",()=>{window.innerWidth>768&&t()})}const T=[{id:"sydney",label:"Sydney",open:22,close:7,color:"#22c55e",pairs:["AUD","NZD"]},{id:"tokyo",label:"Tokyo",open:0,close:9,color:"#3b82f6",pairs:["JPY","AUD"]},{id:"london",label:"London",open:8,close:17,color:"#f97316",pairs:["GBP","EUR"]},{id:"newyork",label:"New York",open:13,close:22,color:"#ef4444",pairs:["USD","CAD"]}];function y(s,e){if(!U())return!1;const{open:n,close:o}=s;return n<o?e>=n&&e<o:e>=n||e<o}function D(s,e,n){if(!y(s,e))return 0;const{open:o,close:t}=s,a=o<t?(t-o)*60:(24-o+t)*60;let r=o<t||e>=o?(e-o)*60+n:(24-o+e)*60+n;return Math.min(100,Math.round(r/a*100))}function b(s,e,n){const{close:o}=s;let t=o*60,a=e*60+n,r=t-a;return r<=0&&(r+=24*60),r}function k(s){const e=Math.floor(s/60),n=s%60;return e===0?`${n} دقیقه`:`${e} ساعت و ${n} دقیقه`}function U(s=new Date){const e=s.getUTCDay(),n=s.getUTCHours();return!(e===6||e===0&&n<22||e===5&&n>=22)}function M(){function s(){const e=new Date,n=document.getElementById("clock");n&&(n.textContent=e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}));const o=document.getElementById("clockDate");if(o){const l=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{weekday:"long"}).format(e),d=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{day:"numeric",month:"long",year:"numeric"}).format(e);o.textContent=`${l} ${d}`}const t=U(e),a=document.getElementById("mkBadge");a&&(a.className="market-badge "+(t?"open":"closed"));const r=document.getElementById("mkText");r&&(r.textContent=t?"بازار باز است":"بازار بسته است");const h=document.getElementById("weekendBanner");if(h)if(t)h.classList.remove("show");else{const l=new Date(e),d=(7-e.getUTCDay())%7||7;l.setUTCDate(e.getUTCDate()+d),l.setUTCHours(22,0,0,0),e.getUTCDay()===0&&e.getUTCHours()<22&&l.setUTCDate(e.getUTCDate());const i=Math.max(0,l-e),c=Math.floor(i/(1e3*60*60*24)),f=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),m=Math.floor(i%(1e3*60*60)/(1e3*60)),u=g=>g.toString().replace(/\d/g,p=>"۰۱۲۳۴۶۷۸۹"[p]);h.innerHTML=`⚠️ بازار فارکس تعطیل است — ${c>0?`${u(c)} روز و `:""} ${f>0?`${u(f)} ساعت و `:""} ${u(m)} دقیقه تا بازگشایی`,h.classList.add("show")}const v=document.getElementById("sessionPills");if(v){const l=e.getUTCHours(),d=e.getUTCMinutes();v.innerHTML=T.map(i=>{const c=y(i,l),f=c?k(b(i,l,d)):"",m=new Date().setUTCHours(i.open,0,0,0),u=new Date().setUTCHours(i.close,0,0,0),g=new Date(m).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),p=new Date(u).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return`<div class="session-pill ${c?"on":"off"}">
          <span class="sname">${i.label}</span>
          <span class="shours">${g}–${p}</span>
          ${c?`<span class="sleft">${f} مانده</span>`:""}
        </div>`}).join("")}const w=document.getElementById("sessRows");if(w){const l=e.getUTCHours(),d=e.getUTCMinutes();w.innerHTML=T.map(i=>{const c=y(i,l),f=D(i,l,d),m=c?k(b(i,l,d)):"",u=c?"var(--up)":"var(--down)",g=new Date().setUTCHours(i.open,0,0,0),p=new Date().setUTCHours(i.close,0,0,0),C=new Date(g).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),$=new Date(p).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return`<div class="sess-row">
          <span class="sess-name">${i.label}</span>
          <div class="sess-track">
            <div class="sess-fill" style="width:${c?f:0}%;background:${u}"></div>
          </div>
          <span class="sess-time">${C}–${$}</span>
          <span class="sess-tag ${c?"on":"off"}">${c?`باز · ${m}`:"بسته"}</span>
        </div>`}).join("")}}setInterval(s,1e3),s()}export{S as a,M as i,L as r};
