var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector("form");function l(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:`${e}`,delay:`${t}`}):o({position:`${e}`,delay:`${t}`})}),t)}))}r.addEventListener("submit",(function(e){e.preventDefault();let t=Number(r.elements.delay.value);const n=Number(r.elements.step.value),o=r.elements.amount.value;r.reset();for(let e=1;e<=o;e++)l(e,t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.ea2ae100.js.map