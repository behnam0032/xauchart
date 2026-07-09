(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function i(a="home"){return`
    <nav class="topbar">
      <a href="/" class="logo">XAU<span>Chart</span></a>
      <div class="nav">
        ${[{href:"/",label:"خانه",key:"home"},{href:"/prices.html",label:"همه قیمت‌ها",key:"prices"},{href:"/calc.html",label:"ماشین حساب",key:"calc"},{href:"/learn/",label:"آموزش",key:"learn"}].map(t=>`<a href="${t.href}" class="nav-btn ${a===t.key?"active":""}">${t.label}</a>`).join("")}
      </div>
      <div class="market-badge open" id="mkBadge">
        <div class="badge-dot"></div>
        <span id="mkText">بازار باز است</span>
      </div>
    </nav>`}export{i as r};
