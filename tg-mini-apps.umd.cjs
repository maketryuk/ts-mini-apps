(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e["tg-mini-apps"]={}))})(this,function(e){"use strict";var a=Object.defineProperty;var s=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var n=(e,t,i)=>s(e,typeof t!="symbol"?t+"":t,i);class t{constructor(){n(this,"_webApp",Telegram.WebApp);n(this,"_initData");this._initData=this._webApp.initData,this._webApp.themeParams={header_bg_color:"#000000"}}get initData(){return this._initData}set initData(p){if(typeof p!="string"){this._initData=this._webApp.initData;return}this._initData=p}}const i=new t;e.WebApp=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
