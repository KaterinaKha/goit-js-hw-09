!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},n=null;function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log(document.body.style.backgroundColor)}t.startBtn.style.fontSize="25px",t.stopBtn.style.fontSize="25px",t.startBtn.addEventListener("click",(function(){n=setInterval(o,1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(){clearTimeout(n),t.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.035d9431.js.map