(function(e){function t(t){for(var n,s,c=t[0],a=t[1],l=t[2],d=0,f=[];d<c.length;d++)s=c[d],o[s]&&f.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,c=1;c<i.length;c++){var a=i[c];0!==o[a]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0017":function(e,t,i){},"034f":function(e,t,i){"use strict";var n=i("64a9"),o=i.n(n);o.a},"3eb5":function(e,t,i){"use strict";var n=i("8452"),o=i.n(n);o.a},4749:function(e,t,i){"use strict";var n=i("0017"),o=i.n(n);o.a},"56d7":function(e,t,i){"use strict";i.r(t);var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("GenViz")},r=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"genviz"},[i("GridViz",{attrs:{traces:e.traces,info:e.info}})],1)},c=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Traces (Grid View)")]),i("div",{attrs:{id:"traces"}},e._l(e.traces,function(t,n){return i("div",{key:n},[i("Trace",{attrs:{trace:t,info:e.info,size:e.traceSize,tId:n}})],1)}),0)])},l=[],u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{attrs:{height:e.size.w,width:e.size.w}},[e._l(e.info.num,function(t){return i("circle",{key:t,attrs:{cx:e.xLogicalToPixel(e.info.xs[t-1]),cy:e.yLogicalToPixel(e.info.ys[t-1]),r:"3"}})}),i("line",{staticStyle:{stroke:"rgba(0,0,0,0.7)","stroke-width":"2"},attrs:{x1:0,y1:e.yLogicalToPixel(e.xPixelToLogical(0)*e.trace.slope+e.trace.intercept),x2:e.size.w,y2:e.yLogicalToPixel(e.xPixelToLogical(e.size.w)*e.trace.slope+e.trace.intercept)}})],2)},d=[],f={name:"Trace",props:["info","trace","size","tId"],methods:{xLogicalToPixel(e){return(e-this.info.xlim[0])/(this.info.xlim[1]-this.info.xlim[0])*this.size.w},yLogicalToPixel(e){return this.size.w-(e-this.info.ylim[0])/(this.info.ylim[1]-this.info.ylim[0])*this.size.w},xPixelToLogical(e){return e/this.size.w*(this.info.xlim[1]-this.info.xlim[0])+this.info.xlim[0]}}},w=f,h=i("2877"),p=Object(h["a"])(w,u,d,!1,null,null,null);p.options.__file="Trace.vue";var v=p.exports,g={name:"GridViz",components:{Trace:v},data(){return{windowSize:{height:window.innerHeight,width:window.innerWidth}}},props:["traces","info"],computed:{traceSize(){return{h:this.windowSize.height/5,w:this.windowSize.width/5}}},mounted(){this.$nextTick(()=>{window.addEventListener("resize",()=>{this.windowSize={height:window.innerHeight,width:window.innerWidth}})})}},m=g,x=(i("3eb5"),i("4749"),Object(h["a"])(m,a,l,!1,null,"74a9bc7e",null));x.options.__file="GridViz.vue";var y=x.exports;function z(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}window.clientId=z(),window.vizId=window.location.pathname.replace(/\//g,""),window.socket=new WebSocket("ws://"+window.location.hostname+":"+window.location.port),window.onbeforeunload=function(){window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"disconnect"})),window.socket.close()},window.getCSS=function(){for(var e=[],t=0;t<document.styleSheets.length;t++)for(var i=document.styleSheets[t],n=("cssRules"in i?i.cssRules:i.rules),o=0;o<n.length;o++){var r=n[o];"cssText"in r?e.push(r.cssText):e.push(r.selectorText+" {\n"+r.style.cssText+"\n}\n")}return e.join("\n")};var b={name:"GenViz",components:{GridViz:y},data(){return{traces:{},info:{}}},methods:{initialize(e,t){this.info=e,this.traces=t},putTrace(e,t){this.$set(this.traces,e,t)},removeTrace(e){this.$delete(this.traces,e)},sendHTML(){let e=this.$refs["genviz"].innerHTML+`<style>${window.getCSS()}</style>`;window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"save",content:e}))}},mounted(){window.socket.onopen=(()=>{window.socket.onmessage=(({data:e})=>{let t=JSON.parse(e);switch(t.action){case"initialize":this.initialize(t.info,t.traces);break;case"putTrace":this.putTrace(t.tId,t.t);break;case"removeTrace":this.removeTrace(t.tId);break;case"saveHTML":this.sendHTML();break}}),window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"connect"}))})}},T=b,_=Object(h["a"])(T,s,c,!1,null,null,null);_.options.__file="GenViz.vue";var S=_.exports,k={components:{GenViz:S}},I=k,O=(i("034f"),Object(h["a"])(I,o,r,!1,null,null,null));O.options.__file="App.vue";var P=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(P)}).$mount("#app")},"64a9":function(e,t,i){},8452:function(e,t,i){}});
//# sourceMappingURL=app.7adfd6c2.js.map