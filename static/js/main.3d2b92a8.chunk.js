(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,n){e.exports=n(98)},58:function(e,t,n){},63:function(e,t){},65:function(e,t){},98:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"Context",function(){return s}),n.d(a,"ImagesContext",function(){return m}),n.d(a,"SizesContext",function(){return f}),n.d(a,"CanvasesContext",function(){return d}),n.d(a,"ActionsContext",function(){return v}),n.d(a,"Provider",function(){return g});var r=n(0),c=n.n(r),i=n(50),o=n.n(i),l=(n(58),n(23)),u=n(10),s=Object(r.createContext)({}),m=Object(r.createContext)([]),f=Object(r.createContext)(new Set),d=Object(r.createContext)([]),v=Object(r.createContext)({}),g=function(e){var t=e.children,n=Object(r.useState)([]),a=Object(u.a)(n,2),i=a[0],o=a[1],g=Object(r.useState)(new Set),h=Object(u.a)(g,2),C=h[0],E=h[1],b=Object(r.useState)(new Set),p=Object(u.a)(b,2),w=p[0],x=p[1],j={images:i,sizes:C,canvases:w},O={setImages:o,toggleSize:function(e){E(function(t){var n=new Set(t);return n.delete(e)||n.add(e),n})},setSizes:E,setCanvases:x,addCanvases:function(e){x(function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))})}};return c.a.createElement(s.Provider,{value:j},c.a.createElement(m.Provider,{value:i},c.a.createElement(f.Provider,{value:C},c.a.createElement(d.Provider,{value:w},c.a.createElement(v.Provider,{value:O},t)))))},h={Image:function(){var e=Object(r.useContext)(a.Context).images;return c.a.createElement("div",null,e.map(function(e){return c.a.createElement("img",{src:e.url,key:e.url,alt:""})}))}},C=function(){var e=Object(r.useContext)(a.ActionsContext).setImages;return c.a.createElement("div",null,c.a.createElement(w,{onUploadFiles:function(t){e(t.map(function(e){return{file:e,url:window.URL.createObjectURL(e)}}))}}))},E=[{height:300,width:300},{height:500,width:500},{height:1e3,width:200},{height:200,width:1e3}],b=function(){var e=Object(r.useContext)(a.ActionsContext).toggleSize;return c.a.createElement("div",null,E.map(function(t,n){return c.a.createElement("label",{key:n},c.a.createElement("input",{type:"checkbox",name:"sizes",value:n,onChange:function(t){return e(E[n])}}),c.a.createElement("span",null,t.width," x ",t.height))}))},p=Object.freeze(new Set(["image/png","image/jpeg"])),w=function(e){var t=e.onUploadFiles;return c.a.createElement("input",{type:"file",multiple:!0,accept:"image/*",onChange:function(e){var n,a,r=(n=e.target.files,a=p,Array.from(n).filter(function(e){return a.has(e.type)}));t(r)},placeholder:"load imgs"})};function x(e){return function(t,n,a,r){var c=a/r,i=t/n,o=t,l=n;return(e?c>i:c<i)?l=o/c:o=l*c,{width:o,height:l,x:(t-o)/2,y:(n-l)/2}}}x(!1);var j=x(!0),O=function(e){var t=e.image,n=e.size,a=e.onCanvasCreate,i=Object(r.useRef)(null),o=Object(r.useState)(null),l=Object(u.a)(o,2),s=l[0],m=l[1];Object(r.useEffect)(function(){i&&m(i.current.getContext("2d"))},[i]),Object(r.useEffect)(function(){t&&n&&s&&(function(e){var t=e.image,n=e.ctx,a=e.size,r=new Image;r.src=t.url,r.addEventListener("load",function(){var e=j(r.naturalWidth,r.naturalHeight,a.width,a.height),t=e.x,c=e.y,i=e.width,o=e.height;n.drawImage(r,t,c,i,o,0,0,a.width,a.height)})}({image:t,size:n,ctx:s}),a([i]))},[t,n,s]);return c.a.createElement("div",null,c.a.createElement("canvas",{ref:i,width:n.width,height:n.height}),c.a.createElement("button",{onClick:function(){var e;!function(e){var t=e.url,n=e.filename,a=void 0===n?"file":n,r=(e.onCanvasCreate,document.createElement("a"));r.href=t,r.download=a,r.click()}({url:(e=i,HTMLCanvasElement.prototype.toDataURL.call(e.current)),filename:"image"})}},c.a.createElement("span",{role:"img","aria-label":"download"},"\ud83d\udce5")))},y=function(){var e=Object(r.useContext)(a.ImagesContext),t=Object(r.useContext)(a.SizesContext),n=Object(r.useContext)(a.ActionsContext),i=n.setCanvases,o=n.addCanvases;return Object(r.useEffect)(function(){i([])},[e,i]),e.map(function(e,n){return Array.from(t).map(function(t,a){return c.a.createElement(O,{key:"".concat(n,"_").concat(a),image:e,size:t,onCanvasCreate:o})})})},S=n(51),z=n.n(S),I=n(52),k=function(){var e=Object(r.useContext)(a.CanvasesContext);return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){var t=new z.a,n=e.map(function(e,n){return new Promise(function(a){var r,c;r=e,c=function(e){t.file("image_".concat(n,".png"),e,{base64:!0}),a()},HTMLCanvasElement.prototype.toBlob.call(r.current,c)})});Promise.all(n).then(function(){t.generateAsync({type:"blob"}).then(function(e){Object(I.saveAs)(e,"example.zip")})})}},"Download"))},A=function(){return c.a.createElement(a.Provider,null,c.a.createElement("div",{className:"raw"},c.a.createElement(b,null)),c.a.createElement("div",{className:"raw"},c.a.createElement(C,null)),c.a.createElement("div",{className:"raw"},c.a.createElement(h.Image,null)),c.a.createElement("div",{className:"raw resultImages"},c.a.createElement(y,null)),c.a.createElement("div",{className:"raw"},c.a.createElement(k,null)))};var P=document.getElementById("root");o.a.render(c.a.createElement(function(){return c.a.createElement("div",{className:"App"},c.a.createElement(A,null))},null),P)}},[[53,1,2]]]);
//# sourceMappingURL=main.3d2b92a8.chunk.js.map