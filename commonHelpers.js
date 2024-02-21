import{S as u,i as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const c=document.querySelector("#form"),s=document.querySelector(".loader"),a=document.querySelector(".gallery"),m="Sorry, there are no images matching your search query. Please try again!",p={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0};s.style.display="none";document.addEventListener("DOMContentLoaded",()=>{c.addEventListener("submit",d)});function d(e){e.preventDefault();const r=document.getElementById("search").value.trim();r&&(s.style.display="inline-block",a.innerHTML="",fetch(`https://pixabay.com/api/?key=42026920-e619b387ca2127f1aff40b8e2&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(n=>n.json()).then(y).catch(b).finally(()=>{s.style.display="none"}))}function y(e){e.hits.length===0?L(m):h(e.hits)}function h(e){const r=e.map(g).join("");a.insertAdjacentHTML("afterbegin",r),new u(".gallery a",p).refresh(),c.reset()}function g(e){return`<li class="gallery-item">
            <a href="${e.webformatURL}">
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
            </a>
            <div class='comments'>
              <p><b>Likes: </b>${e.likes}</p>
              <p><b>Views: </b>${e.views}</p>
              <p><b>Comments: </b>${e.comments}</p>
              <p><b>Downloads: </b>${e.downloads}</p>
            </div>
          </li>`}function b(e){console.error("Error fetching data:",e)}function L(e){f.error({title:"",backgroundColor:"#EF4040",message:e,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
