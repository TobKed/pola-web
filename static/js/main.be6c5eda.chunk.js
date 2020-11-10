(this["webpackJsonppola-app"]=this["webpackJsonppola-app"]||[]).push([[0],{41:function(n,e,t){n.exports=t(69)},46:function(n,e,t){},69:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),o=t(32),c=t.n(o),i=(t(46),t(14)),l=t(2),u=t(3);function d(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 100%;\n    border: solid 4px #d8002f;\n    margin: 0 auto;\n    margin-bottom: 1rem;\n    position: relative;\n    padding: 5px 0;\n"]);return d=function(){return n},n}function p(){var n=Object(l.a)(["\n    width: 100%;\n    padding-left: 15px;\n    border: none;\n    color: #495057;\n    padding-right: 70px;\n    font-size: 32px;\n"]);return p=function(){return n},n}function s(){var n=Object(l.a)(["\n    color: #d8002f;\n    float: left;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    right: 20px;\n    cursor: pointer;\n    border: none;\n    background: none;\n    font-size: 32px;\n"]);return s=function(){return n},n}function f(){var n=Object(l.a)(["\n    font-size: 24px;\n    text-align: center;\n\n    a{\n        color: blue;\n        text-decoration: none;\n    }\n"]);return f=function(){return n},n}function b(){var n=Object(l.a)(["\n    max-width: 600px;\n    margin: 0 auto;\n"]);return b=function(){return n},n}var m=u.a.div(b()),h=u.a.p(f()),v=u.a.button(s()),g=u.a.input(p()),x=u.a.form(d()),k=t(36),w=t(4),E=function(){var n=Object(a.useState)(""),e=Object(i.a)(n,2),t=e[0],o=e[1],c=Object(w.g)();return r.a.createElement(m,null,r.a.createElement(h,null,"Sprawd\u017a informacje o produkcie.",r.a.createElement("br",null),"Nie wiesz, jaki kod ma Tw\xf3j produkt? ",r.a.createElement("a",{href:"https://pl.openfoodfacts.org/"},"Sprawd\u017a w bazie kod\xf3w")),r.a.createElement(x,{onSubmit:function(){c.push("/".concat(t.replace(/\s/g,"")))}},r.a.createElement(g,{type:"text",value:t,onChange:function(n){return o(n.target.value)},placeholder:"Wpisz tutaj kod kreskowy (EAN)"}),r.a.createElement(v,{type:"submit"},r.a.createElement(k.a,null))))},j=t(20),y=t.n(j),O=t(37);function z(){var n=Object(l.a)(["\n  margin-top: 10px;\n"]);return z=function(){return n},n}function S(){var n=Object(l.a)(["\n  padding: 0 45px\n"]);return S=function(){return n},n}function I(){var n=Object(l.a)(["\n  padding: 0 30px\n"]);return I=function(){return n},n}function C(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return C=function(){return n},n}var T=u.a.div(C()),F=u.a.div(I()),D=u.a.div(S()),M=u.a.div(z());function N(){var n=Object(l.a)(["\n    position: absolute;\n    background-color: #253037;\n    color: white;\n    transform: translate(50%, 100%);\n    padding: 5px 20px;\n    right: 15px;\n    z-index: 1;\n    white-space: nowrap;\n    border-radius: 10px;\n    animation: "," 1s linear;\n"]);return N=function(){return n},n}function W(){var n=Object(l.a)(["\n  0%{\n    opacity: 0;\n  }\n  50%{\n    opacity: 1;\n  }\n  100%{\n    opacity: 0;\n  }\n"]);return W=function(){return n},n}function _(){var n=Object(l.a)(["\n  width: 100%;\n  fontSize: 20px;\n  padding: 0 10px; \n  margin: 0;\n"]);return _=function(){return n},n}function B(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 10px;\n"]);return B=function(){return n},n}var U=u.a.div(B()),A=u.a.p(_()),P=Object(u.b)(W()),R=(u.a.div(N(),P),function(n){var e=n.Icon,t=n.onClick;return r.a.createElement(e,{onClick:t,style:{color:"#dc3545",fontSize:30,cursor:"pointer"}})}),J=t(38),V=t(39),G=function(n){var e=n.title,t=n.close;return r.a.createElement(U,null,r.a.createElement(R,{Icon:J.a,onClick:t}),r.a.createElement(A,null,e),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(R,{Icon:V.a,onClick:function(){navigator.clipboard.writeText(window.location)}})))};function H(){var n=Object(l.a)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n  color: white;\n"]);return H=function(){return n},n}function L(){var n=Object(l.a)(["\n    ","\n    animation: "," 0.4s linear;\n    height: 100%;\n    background-color: #d8002f;\n"]);return L=function(){return n},n}function $(){var n=Object(l.a)(["\n  from{width: 0;}\n"]);return $=function(){return n},n}function q(){var n=Object(l.a)(["\n    height: ",";\n    width: 100%;\n    background-color: #6c757d;\n"]);return q=function(){return n},n}function K(){var n=Object(l.a)(["\n  width: 100%;\n  position: relative;\n"]);return K=function(){return n},n}var Q=u.a.div(K()),X=u.a.div(q(),(function(n){return"big"===n.size?"30px":"25px"})),Y=Object(u.b)($()),Z=u.a.div(L(),(function(n){var e=n.now;return"width: ".concat(e||0,"%;")}),Y),nn=u.a.label(H()),en=function(n){var e=n.now,t=n.suffix,a=n.size;return r.a.createElement(Q,null,r.a.createElement(nn,null,"".concat(e," ").concat(t)),r.a.createElement(X,{size:a},r.a.createElement(Z,{now:e})))};function tn(){var n=Object(l.a)(['\n  [type="checkbox"]:not(:checked),\n  [type="checkbox"]:checked {\n    position: absolute;\n    left: -9999px;\n  }\n  [type="checkbox"]:not(:checked) + label,\n  [type="checkbox"]:checked + label {\n    position: relative;\n    padding-left: 1.95em;\n    cursor: pointer;\n  }\n\n  [type="checkbox"]:not(:checked) + label:before,\n  [type="checkbox"]:checked + label:before {\n    content: "";\n    position: absolute;\n    left: 0; \n    top: 0;\n    width: 1.5em; \n    height: 1.5em;\n    border: 2px solid #ccc;\n    background: #fff;\n    border-radius: 10%;\n  }\n\n  [type="checkbox"]:not(:checked) + label:after,\n  [type="checkbox"]:checked + label:after {\n    content: "\u2713";\n    position: absolute;\n    top: .15em; \n    left: .22em;\n    font-size: 1.3em;\n    line-height: 0.8;\n    color: #09ad7e;\n    transition: all .2s;\n    font-family: \'Lucida Sans Unicode\', \'Arial Unicode MS\', Arial;\n  }\n\n  [type="checkbox"]:not(:checked) + label:after {\n    opacity: 0;\n    transform: scale(0);\n  }\n  [type="checkbox"]:checked + label:after {\n    opacity: 1;\n    transform: scale(1);\n  }\n  \n  [type="checkbox"]:disabled:not(:checked) + label:before,\n  [type="checkbox"]:disabled:checked + label:before {\n    box-shadow: none;\n    border-color: #6c757d;\n    background-color: #6c757d;\n  }\n  [type="checkbox"]:disabled:checked + label:after {\n    color: white;\n  }\n  [type="checkbox"]:disabled + label {\n    color: black;\n  }\n']);return tn=function(){return n},n}var an=u.a.p(tn()),rn=function(n){var e=n.dataTestId,t=n.value,a=n.title;return r.a.createElement(an,null,r.a.createElement("input",{htmlFor:e,"data-testid":e,type:"checkbox",disabled:!0,checked:100===t}),r.a.createElement("label",{htmlFor:e},a))},on=function(n){var e=n.data,t=n.close;return r.a.createElement(T,null,r.a.createElement(G,{title:e.name,close:t}),"Nieprawid\u0142owy kod"!==e.name&&r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null,r.a.createElement(en,{now:e.plScore,suffix:"pkt",size:"big"})),r.a.createElement(D,null,r.a.createElement(M,null,r.a.createElement("p",{style:{margin:"0 0 8px 0"}},"udzia\u0142 polskiego kapita\u0142u"),r.a.createElement(en,{now:e.plCapital,suffix:"%",size:"small"})),r.a.createElement("div",{style:{marginTop:20}},r.a.createElement(M,null,r.a.createElement(rn,{dataTestId:"pl-workers",value:e.plWorkers,title:"produkuje w Polsce"})),r.a.createElement(M,null,r.a.createElement(rn,{dataTestId:"pl-rnd",value:e.plRnD,title:"prowadzi badania i rozw\xf3j w Polsce"})),r.a.createElement(M,null,r.a.createElement(rn,{dataTestId:"pl-registered",value:e.plRegistered,title:"zajerestrowana w Polsce"})),r.a.createElement(M,null,r.a.createElement(rn,{dataTestId:"pl-not-glob-ent",value:e.plNotGlobEnt,title:"nie jest cz\u0119\u015bci\u0105 zagranicznego koncernu"}))),r.a.createElement(M,null,e.description))))},cn=t(40),ln=t.n(cn),un=function(){return"WEB-".concat(function(n){for(var e="",t=0;t<n;t++){var a=Math.floor(35*Math.random());e+=a>=0&&a<=9?String.fromCharCode(a+48):String.fromCharCode(a+87)}return e}(32))},dn=function(){var n=localStorage.getItem("DEVICE_ID");return null==n&&(n=un(),localStorage.setItem("DEVICE_ID",n)),n};function pn(){var n=Object(l.a)(["\n  width: 50%;\n  padding: 16px;\n  margin: 30px auto;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);\n  animation: "," 0.3s linear;\n"]);return pn=function(){return n},n}function sn(){var n=Object(l.a)(["\n  from {\n    transform: translate(0, -40%);\n  }\n\n  to {\n    transform: translate(0, 0);\n  }\n"]);return sn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n"]);return fn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  animation: "," 0.3s linear;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);return bn=function(){return n},n}function mn(){var n=Object(l.a)(["\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n"]);return mn=function(){return n},n}var hn=Object(u.b)(mn()),vn=u.a.div(bn(),hn),gn=u.a.div(fn()),xn=Object(u.b)(sn()),kn=u.a.div(pn(),xn),wn=function(){var n=Object(a.useState)(""),e=Object(i.a)(n,2),t=e[0],o=e[1],c=Object(w.h)().ean,l=Object(a.useState)(!1),u=Object(i.a)(l,2),d=u[0],p=u[1],s=function(){p(!0)};return Object(a.useEffect)((function(){function n(){return(n=Object(O.a)(y.a.mark((function n(){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(c&&c.length>0)){n.next=11;break}return n.prev=1,n.next=4,ln.a.get("https://www.pola-app.pl/a/v3/get_by_code",{params:{code:c,device_id:dn()}});case 4:e=n.sent,o(e.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[c]),r.a.createElement(r.a.Fragment,null,d?r.a.createElement(w.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(vn,null,r.a.createElement(gn,{onClick:s}),r.a.createElement(kn,null,r.a.createElement(on,{data:t,close:s})))))},En=t(15);function jn(){var n=Object(l.a)(["\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"]);return jn=function(){return n},n}var yn=u.a.div(jn());var On=function(){return r.a.createElement(yn,null,r.a.createElement(En.a,null,r.a.createElement(E,null),r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/:ean",component:wn}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(On,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.be6c5eda.chunk.js.map