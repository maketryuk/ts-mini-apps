var p = Object.defineProperty;
var n = (i, t, a) => t in i ? p(i, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : i[t] = a;
var e = (i, t, a) => n(i, typeof t != "symbol" ? t + "" : t, a);
class s {
  constructor() {
    e(this, "_webApp", Telegram.WebApp);
    e(this, "_initData");
    this._initData = this._webApp.initData, this._webApp.themeParams = {
      header_bg_color: "#000000"
    };
  }
  get initData() {
    return this._initData;
  }
  set initData(t) {
    if (typeof t != "string") {
      this._initData = this._webApp.initData;
      return;
    }
    this._initData = t;
  }
}
const _ = new s();
export {
  _ as WebApp
};
