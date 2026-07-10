(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();function a(r="home"){return`
    <nav class="topbar">
      <a href="/" class="logo">XAUChart</span></a>
      <button class="menu-toggle" id="menuToggle" aria-label="منو">
        <span></span><span></span><span></span>
      </button>
      <div class="nav" id="navMenu">
        ${[{href:"/",label:"خانه",key:"home"},{href:"/prices.html",label:"همه قیمت‌ها",key:"prices"},{href:"/calc.html",label:"ماشین حساب",key:"calc"},{href:"/learn/",label:"آموزش",key:"learn"}].map(s=>`<a href="${s.href}" class="nav-btn ${r===s.key?"active":""}">${s.label}</a>`).join("")}
      </div>
      <div class="market-badge open" id="mkBadge">
        <div class="badge-dot"></div>
        <span id="mkText">بازار باز است</span>
      </div>
    </nav>
    <div class="nav-overlay" id="navOverlay"></div>
  `}function l(){const r=document.getElementById("menuToggle"),t=document.getElementById("navMenu"),s=document.getElementById("navOverlay");if(!r||!t)return;function o(){t.classList.add("open"),s.classList.add("show"),r.classList.add("active"),document.body.style.overflow="hidden"}function e(){t.classList.remove("open"),s.classList.remove("show"),r.classList.remove("active"),document.body.style.overflow=""}r.addEventListener("click",()=>{t.classList.contains("open")?e():o()}),s.addEventListener("click",e),t.querySelectorAll(".nav-btn").forEach(n=>{n.addEventListener("click",()=>{window.innerWidth<=768&&e()})}),window.addEventListener("resize",()=>{window.innerWidth>768&&e()})}export{l as i,a as r};
