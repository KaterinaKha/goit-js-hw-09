var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const l={form:document.querySelector(".form"),buttonEl:document.querySelector("button")};function i(e,o,t){const n=Math.random()>.3,r=o+(e-1)*t;return new Promise(((o,t)=>{setTimeout((()=>{n?o(`✅ Fulfilled promise ${e} in ${r}ms`):t(`❌ Rejected promise ${e} in ${r}ms`)}),r)}))}l.form.addEventListener("submit",(function(e){e.preventDefault();const o=Number(l.form.elements.delay.value),t=Number(l.form.elements.step.value),n=Number(l.form.elements.amount.value);for(let e=1;e<=n;e+=1)i(e,o,t).then((e=>{r.Notify.success(e),console.log(e)})).catch((e=>{r.Notify.failure(e),console.log(e)}))}));
//# sourceMappingURL=03-promises.f3b391cc.js.map