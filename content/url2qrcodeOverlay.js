var url2qrcode = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
  },

  send: function() {
    var _url;
    var browser = window.getBrowser();
    var webNavigation = browser.webNavigation;
    
    _url = (webNavigation.currentURI) ? webNavigation.currentURI.spec : gURLBar.value;
       
    url2qrcodePop = window.open("https://chart.googleapis.com/chart?chs=300x300&cht=qr&choe=UTF-8&chl="+encodeURIComponent(_url),"url2qrcodePop","width=310,height=330,location=no,status=no,scrollbars=no,resizable=no,dependent=no");
    
    var url2qrcodePopFocus = {notify: function(timer){ url2qrcodePop.focus(); }}
    var timer = Components.classes["@mozilla.org/timer;1"].createInstance(Components.interfaces.nsITimer);
    timer.initWithCallback(
      url2qrcodePopFocus,
      100,
      Components.interfaces.nsITimer.TYPE_ONE_SHOT
    );
  }
};

window.addEventListener("load", function(e) { url2qrcode.onLoad(e); }, false);