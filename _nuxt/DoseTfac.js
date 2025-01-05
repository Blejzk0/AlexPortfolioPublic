var Zf=Object.defineProperty;var Kf=(r,e,t)=>e in r?Zf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var tt=(r,e,t)=>Kf(r,typeof e!="symbol"?e+"":e,t);import{e as jf,g as Jf,r as Vn,i as Mu,j as Qf,n as $f,k as yu,l as ed,m as td,o as _i,c as Ii,a as yn,t as Bs,h as Dn,p as nd,b as Lo,w as Uo,d as Du,q as id,F as rd,s as sd,v as ad,_ as od,x as ld}from"./BbfTi5ix.js";import{_ as ud}from"./CfL3mUoV.js";import{a as cd}from"./C5MmYmqK.js";import{_ as hd}from"./DlAUqK2U.js";const Tu=r=>["webm","mp4"].some(e=>r.image_src.split(".").at(-1)===e),fd=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function Zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zr={duration:.5,overwrite:!1,delay:0},Gl,Lt,ut,gn=1e8,st=1/gn,No=Math.PI*2,dd=No/4,pd=0,Yc=Math.sqrt,md=Math.cos,_d=Math.sin,bt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},ii=function(e){return typeof e=="number"},Hl=function(e){return typeof e>"u"},kn=function(e){return typeof e=="object"},qt=function(e){return e!==!1},Wl=function(){return typeof window<"u"},zs=function(e){return mt(e)||bt(e)},Zc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ut=Array.isArray,Oo=/(?:-?\.?\d|\.)+/gi,Kc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jc=/[+-]=-?[.\d]+/,Jc=/[^,'"\[\]\s]+/gi,gd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,Ln,Bo,Xl,un={},Ma={},Qc,$c=function(e){return(Ma=tr(e,un))&&Jt},ql=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ms=function(e,t){return!t&&console.warn(e)},eh=function(e,t){return e&&(un[e]=t)&&Ma&&(Ma[e]=t)||un},ys=function(){return 0},vd={suppressEvents:!0,isStart:!0,kill:!1},fa={suppressEvents:!0,kill:!1},xd={suppressEvents:!0},Yl={},Di=[],zo={},th,tn={},qa={},Au=30,da=[],Zl="",Kl=function(e){var t=e[0],n,i;if(kn(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=da.length;i--&&!da[i].targetTest(t););n=da[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Th(e[i],n)))||e.splice(i,1);return e},ji=function(e){return e._gsap||Kl(vn(e))[0]._gsap},nh=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():Hl(n)&&e.getAttribute&&e.getAttribute(t)||n},Yt=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},Fr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Sd=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ya=function(){var e=Di.length,t=Di.slice(0),n,i;for(zo={},Di.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ih=function(e,t,n,i){Di.length&&!Lt&&ya(),e.render(t,n,Lt&&t<0&&(e._initted||e._startAt)),Di.length&&!Lt&&ya()},rh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jc).length<2?t:bt(e)?e.trim():e},sh=function(e){return e},En=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ed=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},tr=function(e,t){for(var n in t)e[n]=t[n];return e},bu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=kn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Da=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ms=function(e){var t=e.parent||ct,n=e.keyframes?Ed(Ut(e.keyframes)):En;if(qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Md=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ah=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ua=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ci=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ji=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yd=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ko=function(e,t,n,i){return e._startAt&&(Lt?e._startAt.revert(fa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Dd=function r(e){return!e||e._ts&&r(e.parent)},Cu=function(e){return e._repeat?kr(e._tTime,e=e.duration()+e._rDelay)*e:0},kr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ta=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Na=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},Oa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Na(e),n._dirty||Ji(n,e)),e},oh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ta(e.rawTime(),t),(!t._dur||Ps(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),Ji(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Nn=function(e,t,n,i){return t.parent&&Ci(t),t._start=Tt((ii(n)?n:n||e!==ct?pn(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ah(e,t,"_first","_last",e._sort?"_start":0),Vo(t)||(e._recent=t),i||oh(e,t),e._ts<0&&Oa(e,e._tTime),e},lh=function(e,t){return(un.ScrollTrigger||ql("scrollTrigger",t))&&un.ScrollTrigger.create(t,e)},uh=function(e,t,n,i,s){if(Jl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&th!==sn.frame)return Di.push(e),e._lazy=[s,i],1},Td=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Vo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ad=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Td(e)&&!(!e._initted&&Vo(e))||(e._ts<0||e._dp._ts<0)&&!Vo(e))?0:1,o=e._rDelay,l=0,u,c,h;if(o&&e._repeat&&(l=Ps(0,e._tDur,t),c=kr(l,o),e._yoyo&&c&1&&(a=1-a),c!==kr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Lt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&uh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&ko(e,t,n,!0),e._onUpdate&&!n&&on(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&on(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ci(e,1),!n&&!Lt&&(on(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bd=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vr=function(e,t,n,i){var s=e._repeat,a=Tt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Tt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Oa(e,e._tTime=e._tDur*o),e.parent&&Na(e),n||Ji(e.parent,e),e},wu=function(e){return e instanceof Ht?Ji(e):Vr(e,e._dur)},Cd={_start:0,endTime:ys,totalDuration:ys},pn=function r(e,t,n){var i=e.labels,s=e._recent||Cd,a=e.duration()>=gn?s.endTime(!1):e._dur,o,l,u;return bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&n&&(l=l/100*(Ut(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},_s=function(e,t,n){var i=ii(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qt(l.vars.inherit)&&l.parent;a.immediateRender=qt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new St(t[0],a,t[s+1])},Ri=function(e,t){return e||e===0?t(e):t},Ps=function(e,t,n){return n<e?e:n>t?t:n},It=function(e,t){return!bt(e)||!(t=gd.exec(e))?"":t[1]},wd=function(e,t,n){return Ri(n,function(i){return Ps(e,t,i)})},Go=[].slice,ch=function(e,t){return e&&kn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&kn(e[0]))&&!e.nodeType&&e!==Ln},Rd=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return bt(i)&&!t||ch(i,1)?(s=n).push.apply(s,vn(i)):n.push(i)})||n},vn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):bt(e)&&!n&&(Bo||!Gr())?Go.call((t||Xl).querySelectorAll(e),0):Ut(e)?Rd(e,n):ch(e)?Go.call(e,0):e?[e]:[]},Ho=function(e){return e=vn(e)[0]||Ms("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vn(t,n.querySelectorAll?n:n===e?Ms("Invalid scope")||Xl.createElement("div"):e)}},hh=function(e){return e.sort(function(){return .5-Math.random()})},fh=function(e){if(mt(e))return e;var t=kn(e)?e:{each:e},n=Qi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,u=t.axis,c=i,h=i;return bt(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(c=i[0],h=i[1]),function(d,p,g){var _=(g||t).length,m=a[_],f,D,y,S,A,b,T,C,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,gn])[1],!v){for(T=-gn;T<(T=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],f=l?Math.min(v,_)*c-.5:i%v,D=v===gn?0:l?_*h/v-.5:i/v|0,T=0,C=gn,b=0;b<_;b++)y=b%v-f,S=D-(b/v|0),m[b]=A=u?Math.abs(u==="y"?S:y):Yc(y*y+S*S),A>T&&(T=A),A<C&&(C=A);i==="random"&&hh(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:u?u==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=It(t.amount||t.each)||0,n=n&&_<0?Mh(n):n}return _=(m[d]-m.min)/m.max||0,Tt(m.b+(n?n(_):_)*m.v)+m.u}},Wo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Tt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ii(n)?0:It(n))}},dh=function(e,t){var n=Ut(e),i,s;return!n&&kn(e)&&(i=n=e.radius||gn,e.values?(e=vn(e.values),(s=!ii(e[0]))&&(i*=i)):e=Wo(e.increment)),Ri(t,n?mt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=gn,c=0,h=e.length,d,p;h--;)s?(d=e[h].x-o,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-o),d<u&&(u=d,c=h);return c=!i||u<=i?e[c]:a,s||c===a||ii(a)?c:c+It(a)}:Wo(e))},ph=function(e,t,n,i){return Ri(Ut(e)?!t:n===!0?!!(n=0):!i,function(){return Ut(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Pd=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Fd=function(e,t){return function(n){return e(parseFloat(n))+(t||It(n))}},Id=function(e,t,n){return _h(e,t,0,1,n)},mh=function(e,t,n){return Ri(n,function(i){return e[~~t(i)]})},Ld=function r(e,t,n){var i=t-e;return Ut(e)?mh(e,r(0,e.length),t):Ri(n,function(s){return(i+(s-e)%i)%i+e})},Ud=function r(e,t,n){var i=t-e,s=i*2;return Ut(e)?mh(e,r(0,e.length-1),t):Ri(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ds=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Jc:Oo),n+=e.substr(t,i-t)+ph(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},_h=function(e,t,n,i,s){var a=t-e,o=i-n;return Ri(s,function(l){return n+((l-e)/a*o||0)})},Nd=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=bt(e),o={},l,u,c,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ut(e)&&!Ut(t)){for(c=[],h=e.length,d=h-2,u=1;u<h;u++)c.push(r(e[u-1],e[u]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return c[_](g-_)},n=t}else i||(e=tr(Ut(e)?[]:{},e));if(!c){for(l in t)jl.call(o,e,l,"get",t[l]);s=function(g){return eu(g,o)||(a?e.p:e)}}}return Ri(n,s)},Ru=function(e,t,n){var i=e.labels,s=gn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},on=function(e,t,n){var i=e.vars,s=i[t],a=ut,o=e._ctx,l,u,c;if(s)return l=i[t+"Params"],u=i.callbackScope||e,n&&Di.length&&ya(),o&&(ut=o),c=l?s.apply(u,l):s.call(u),ut=a,c},hs=function(e){return Ci(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&on(e,"onInterrupt"),e},Cr,gh=[],vh=function(e){if(e)if(e=!e.name&&e.default||e,Wl()||e.headless){var t=e.name,n=mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ys,render:eu,add:jl,kill:Qd,modifier:Jd,rawVars:0},a={targetTest:0,get:0,getSetter:$l,aliases:{},register:0};if(Gr(),e!==i){if(tn[t])return;En(i,En(Da(e,s),a)),tr(i.prototype,tr(s,Da(e,a))),tn[i.prop=t]=i,e.targetTest&&(da.push(i),Yl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}eh(t,i),e.register&&e.register(Jt,i,Zt)}else gh.push(e)},rt=255,fs={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Ya=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},xh=function(e,t,n){var i=e?ii(e)?[e>>16,e>>8&rt,e&rt]:0:fs.black,s,a,o,l,u,c,h,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fs[e])i=fs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Oo),!t)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,i.length>3&&(i[3]*=1),i[0]=Ya(l+1/3,s,a),i[1]=Ya(l,s,a),i[2]=Ya(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Kc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Oo)||fs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/rt,a=i[1]/rt,o=i[2]/rt,h=Math.max(s,a,o),d=Math.min(s,a,o),c=(h+d)/2,h===d?l=u=0:(p=h-d,u=c>.5?p/(2-h-d):p/(h+d),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},Sh=function(e){var t=[],n=[],i=-1;return e.split(Ti).forEach(function(s){var a=s.match(br)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Pu=function(e,t,n){var i="",s=(e+i).match(Ti),a=t?"hsla(":"rgba(",o=0,l,u,c,h;if(!s)return e;if(s=s.map(function(d){return(d=xh(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(c=Sh(e),l=n.c,l.join(i)!==c.c.join(i)))for(u=e.replace(Ti,"1").split(br),h=u.length-1;o<h;o++)i+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!u)for(u=e.split(Ti),h=u.length-1;o<h;o++)i+=u[o]+s[o];return i+u[h]},Ti=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Od=/hsl[a]?\(/,Eh=function(e){var t=e.join(" "),n;if(Ti.lastIndex=0,Ti.test(t))return n=Od.test(t),e[1]=Pu(e[1],n),e[0]=Pu(e[0],n,Sh(e[1])),!0},Ts,sn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,u,c,h,d,p,g=function _(m){var f=r()-i,D=m===!0,y,S,A,b;if((f>e||f<0)&&(n+=f-t),i+=f,A=i-n,y=A-a,(y>0||D)&&(b=++h.frame,d=A-h.time*1e3,h.time=A=A/1e3,a+=y+(y>=s?4:s-y),S=1),D||(l=u(_)),S)for(p=0;p<o.length;p++)o[p](A,d,b,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Qc&&(!Bo&&Wl()&&(Ln=Bo=window,Xl=Ln.document||{},un.gsap=Jt,(Ln.gsapVersions||(Ln.gsapVersions=[])).push(Jt.version),$c(Ma||Ln.GreenSockGlobals||!Ln.gsap&&Ln||{}),gh.forEach(vh)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Ts=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ts=0,u=ys},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,f,D){var y=f?function(S,A,b,T){m(S,A,b,T),h.remove(y)}:m;return h.remove(m),o[D?"unshift":"push"](y),Gr(),y},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},h}(),Gr=function(){return!Ts&&sn.wake()},Xe={},Bd=/^[\d.\-M][\d.\-,\s]/,zd=/["']/g,kd=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,u;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[i]=isNaN(u)?u.replace(zd,"").trim():+u,i=l.substr(o+1).trim();return t},Vd=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Gd=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kd(t[1])]:Vd(e).split(",").map(rh)):Xe._CE&&Bd.test(e)?Xe._CE("",e):n},Mh=function(e){return function(t){return 1-e(1-t)}},yh=function r(e,t){for(var n=e._first,i;n;)n instanceof Ht?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Qi=function(e,t){return e&&(mt(e)?e:Xe[e]||Gd(e))||t},rr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Yt(e,function(o){Xe[o]=un[o]=s,Xe[a=o.toLowerCase()]=n;for(var l in s)Xe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[o+"."+l]=s[l]}),s},Dh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Za=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/No*(Math.asin(1/i)||0),o=function(c){return c===1?1:i*Math.pow(2,-10*c)*_d((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:Dh(o);return s=No/s,l.config=function(u,c){return r(e,u,c)},l},Ka=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Dh(n);return i.config=function(s){return r(e,s)},i};Yt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;rr("Elastic",Za("in"),Za("out"),Za());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};rr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);rr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});rr("Circ",function(r){return-(Yc(1-r*r)-1)});rr("Sine",function(r){return r===1?1:-md(r*dd)+1});rr("Back",Ka("in"),Ka("out"),Ka());Xe.SteppedEase=Xe.steps=un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-st;return function(o){return((i*Ps(0,a,o)|0)+s)*n}}};zr.ease=Xe["quad.out"];Yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zl+=r+","+r+"Params,"});var Th=function(e,t){this.id=pd++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nh,this.set=t?t.getSetter:$l},As=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vr(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Ts||sn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Gr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oa(this,n),!s._dp||s.parent||oh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ih(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?kr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ta(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(Ps(-Math.abs(this._delay),this._tDur,s),i!==!1),Na(this),yd(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ta(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=xd);var i=Lt;return Lt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Lt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pn(this,n),qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-st)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=mt(n)?n:sh,o=function(){var u=i.then;i.then=null,mt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),s(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){hs(this)},r}();En(As.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Ht=function(r){qc(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qt(n.sortChildren),ct&&Nn(n.parent||ct,Zn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&lh(Zn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return _s(0,arguments,this),this},t.from=function(i,s,a){return _s(1,arguments,this),this},t.fromTo=function(i,s,a,o){return _s(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ms(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new St(i,s,pn(this,a),1),this},t.call=function(i,s,a){return Nn(this,St.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new St(i,a,pn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,u,c){return a.runBackwards=1,ms(a).immediateRender=qt(a.immediateRender),this.staggerTo(i,s,a,o,l,u,c)},t.staggerFromTo=function(i,s,a,o,l,u,c,h){return o.startAt=a,ms(o).immediateRender=qt(o.immediateRender),this.staggerTo(i,s,o,l,u,c,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:Tt(i),h=this._zTime<0!=i<0&&(this._initted||!u),d,p,g,_,m,f,D,y,S,A,b,T;if(this!==ct&&c>l&&i>=0&&(c=l),c!==this._tTime||a||h){if(o!==this._time&&u&&(c+=this._time-o,i+=this._time-o),d=c,S=this._start,y=this._ts,f=!y,h&&(u||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Tt(c%m),c===l?(_=this._repeat,d=u):(_=~~(c/m),_&&_===c/m&&(d=u,_--),d>u&&(d=u)),A=kr(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),b&&_&1&&(d=u-d,T=1),_!==A&&!this._lock){var C=b&&A&1,v=C===(b&&_&1);if(_<A&&(C=!C),o=C?0:c%u?u:c,this._lock=1,this.render(o||(T?0:Tt(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,v&&(this._lock=2,o=C?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;yh(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=bd(this,Tt(o),Tt(d)),D&&(c-=d-(d=D._start))),this._tTime=c,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!_&&(on(this,"onStart"),this._tTime!==c))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&D!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!f){D=0,g&&(c+=this._zTime=-st);break}}p=g}else{p=this._last;for(var x=i<0?i:d;p;){if(g=p._prev,(p._act||x<=p._end)&&p._ts&&D!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(x-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(x-p._start)*p._ts,s,a||Lt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){D=0,g&&(c+=this._zTime=x?-st:st);break}}p=g}}if(D&&!s&&(this.pause(),D.render(d>=o?0:-st)._zTime=d>=o?1:-1,this._ts))return this._start=S,Na(this),this.render(i,s,a);this._onUpdate&&!s&&on(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ci(this,1),!s&&!(i<0&&!o)&&(c||o||!l)&&(on(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ii(s)||(s=pn(this,s,i)),!(i instanceof As)){if(Ut(i))return i.forEach(function(o){return a.add(o,s)}),this;if(bt(i))return this.addLabel(i,s);if(mt(i))i=St.delayedCall(0,i);else return this}return this!==i?Nn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gn);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof St?s&&l.push(u):(a&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return bt(i)?this.removeLabel(i):mt(i)?this.killTweensOf(i):(Ua(this,i),i===this._recent&&(this._recent=this._last),Ji(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=St.delayedCall(0,s||ys,a);return o.data="isPause",this._hasPause=1,Nn(this,o,pn(this,i))},t.removePause=function(i){var s=this._first;for(i=pn(this,i);s;)s._start===i&&s.data==="isPause"&&Ci(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)xi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=vn(i),l=this._first,u=ii(s),c;l;)l instanceof St?Sd(l._targets,o)&&(u?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=pn(a,i),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=St.to(a,En({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==m&&Vr(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,En({startAt:{time:pn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ru(this,pn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ru(this,pn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,u;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=i);return Ji(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ji(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=gn,u,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Nn(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;Vr(a,a===ct&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ct._ts&&(ih(ct,Ta(i,ct)),th=sn.frame),sn.frame>=Au){Au+=ln.autoSleep||120;var s=ct._first;if((!s||!s._ts)&&ln.autoSleep&&sn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||sn.sleep()}}},e}(As);En(Ht.prototype,{_lock:0,_hasPause:0,_forcing:0});var Hd=function(e,t,n,i,s,a,o){var l=new Zt(this._pt,e,t,0,1,Ph,null,s),u=0,c=0,h,d,p,g,_,m,f,D;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=Ds(i)),a&&(D=[n,i],a(D,e,t),n=D[0],i=D[1]),d=n.match(Xa)||[];h=Xa.exec(i);)g=h[0],_=i.substring(u,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Fr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=Xa.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=o,(jc.test(i)||f)&&(l.e=0),this._pt=l,l},jl=function(e,t,n,i,s,a,o,l,u,c){mt(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:mt(h)?u?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=mt(h)?u?Zd:wh:Ql,g;if(bt(i)&&(~i.indexOf("random(")&&(i=Ds(i)),i.charAt(1)==="="&&(g=Fr(d,i)+(It(d)||0),(g||g===0)&&(i=g))),!c||d!==i||Xo)return!isNaN(d*i)&&i!==""?(g=new Zt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?jd:Rh,0,p),u&&(g.fp=u),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&ql(t,i),Hd.call(this,e,t,d,i,p,l||ln.stringFilter,u))},Wd=function(e,t,n,i,s){if(mt(e)&&(e=gs(e,s,t,n,i)),!kn(e)||e.style&&e.nodeType||Ut(e)||Zc(e))return bt(e)?gs(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=gs(e[o],s,t,n,i);return a},Ah=function(e,t,n,i,s,a){var o,l,u,c;if(tn[e]&&(o=new tn[e]).init(s,o.rawVars?t[e]:Wd(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Zt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Cr))for(u=n._ptLookup[n._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},xi,Xo,Jl=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.runBackwards,h=i.yoyoEase,d=i.keyframes,p=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,f=e.parent,D=f&&f.data==="nested"?f.vars.targets:m,y=e._overwrite==="auto"&&!Gl,S=e.timeline,A,b,T,C,v,x,R,B,L,X,K,N,Z;if(S&&(!d||!s)&&(s="none"),e._ease=Qi(s,zr.ease),e._yEase=h?Mh(Qi(h===!0?s:h,zr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(B=m[0]?ji(m[0]).harness:0,N=B&&i[B.prop],A=Da(i,Yl),_&&(_._zTime<0&&_.progress(1),t<0&&c&&o&&!p?_.render(-1,!0):_.revert(c&&g?fa:vd),_._lazy=0),a){if(Ci(e._startAt=St.set(m,En({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&qt(l),startAt:null,delay:0,onUpdate:u&&function(){return on(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt||!o&&!p)&&e._startAt.revert(fa),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(o=!1),T=En({overwrite:!1,data:"isFromStart",lazy:o&&!_&&qt(l),immediateRender:o,stagger:0,parent:f},A),N&&(T[B.prop]=N),Ci(e._startAt=St.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt?e._startAt.revert(fa):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&qt(l)||l&&!g,b=0;b<m.length;b++){if(v=m[b],R=v._gsap||Kl(m)[b]._gsap,e._ptLookup[b]=X={},zo[R.id]&&Di.length&&ya(),K=D===m?b:D.indexOf(v),B&&(L=new B).init(v,N||A,e,K,D)!==!1&&(e._pt=C=new Zt(e._pt,v,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(z){X[z]=C}),L.priority&&(x=1)),!B||N)for(T in A)tn[T]&&(L=Ah(T,A,e,K,v,D))?L.priority&&(x=1):X[T]=C=jl.call(e,v,T,"get",A[T],K,D,0,i.stringFilter);e._op&&e._op[b]&&e.kill(v,e._op[b]),y&&e._pt&&(xi=e,ct.killTweensOf(v,X,e.globalTime(t)),Z=!e.parent,xi=0),e._pt&&l&&(zo[R.id]=1)}x&&Fh(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&S.render(gn,!0,!0)},Xd=function(e,t,n,i,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Xo=1,e.vars[t]="+=0",Jl(e,o),Xo=0,l?Ms(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=gt(n)+It(h.e)),h.b&&(h.b=c.s+It(h.b))},qd=function(e,t){var n=e[0]?ji(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=tr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Yd=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Ut(t))o=n[e]||(n[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},gs=function(e,t,n,i,s){return mt(e)?e.call(t,n,i,s):bt(e)&&~e.indexOf("random(")?Ds(e):e},bh=Zl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ch={};Yt(bh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ch[r]=1});var St=function(r){qc(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ms(i))||this;var l=o.vars,u=l.duration,c=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,D=i.parent||ct,y=(Ut(n)||Zc(n)?ii(n[0]):"length"in i)?[n]:vn(n),S,A,b,T,C,v,x,R;if(o._targets=y.length?Kl(y):Ms("GSAP target "+n+" not found. https://gsap.com",!ln.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||d||zs(u)||zs(c)){if(i=o.vars,S=o.timeline=new Ht({data:"nested",defaults:_||{},targets:D&&D.data==="nested"?D.vars.targets:y}),S.kill(),S.parent=S._dp=Zn(o),S._start=0,d||zs(u)||zs(c)){if(T=y.length,x=d&&fh(d),kn(d))for(C in d)~bh.indexOf(C)&&(R||(R={}),R[C]=d[C]);for(A=0;A<T;A++)b=Da(i,Ch),b.stagger=0,f&&(b.yoyoEase=f),R&&tr(b,R),v=y[A],b.duration=+gs(u,Zn(o),A,v,y),b.delay=(+gs(c,Zn(o),A,v,y)||0)-o._delay,!d&&T===1&&b.delay&&(o._delay=c=b.delay,o._start+=c,b.delay=0),S.to(v,b,x?x(A,v,y):0),S._ease=Xe.none;S.duration()?u=c=0:o.timeline=0}else if(g){ms(En(S.vars.defaults,{ease:"none"})),S._ease=Qi(g.ease||i.ease||"none");var B=0,L,X,K;if(Ut(g))g.forEach(function(N){return S.to(y,N,">")}),S.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||Yd(C,g[C],b,g.easeEach);for(C in b)for(L=b[C].sort(function(N,Z){return N.t-Z.t}),B=0,A=0;A<L.length;A++)X=L[A],K={ease:X.e,duration:(X.t-(A?L[A-1].t:0))/100*u},K[C]=X.v,S.to(y,K,B),B+=K.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||o.duration(u=S.duration())}else o.timeline=0;return p===!0&&!Gl&&(xi=Zn(o),ct.killTweensOf(y),xi=0),Nn(D,Zn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!u&&!g&&o._start===Tt(D._time)&&qt(h)&&Dd(Zn(o))&&D.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-c)||0)),m&&lh(Zn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,u=this._dur,c=i<0,h=i>l-st&&!c?l:i<st?0:i,d,p,g,_,m,f,D,y,S;if(!u)Ad(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=h,y=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+i,s,a);if(d=Tt(h%_),h===l?(g=this._repeat,d=u):(g=~~(h/_),g&&g===Tt(h/_)&&(d=u,g--),d>u&&(d=u)),f=this._yoyo&&g&1,f&&(S=this._yEase,d=u-d),m=kr(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(y&&this._yEase&&yh(y,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Tt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(uh(this,c?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=D=(S||this._ease)(d/u),this._from&&(this.ratio=D=1-D),d&&!o&&!s&&!g&&(on(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(D,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(c&&ko(this,i,s,a),on(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&on(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&ko(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ci(this,1),!s&&!(c&&!o)&&(h||o||f)&&(on(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ts||sn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Jl(this,u),c=this._ease(u/this._dur),Xd(this,i,s,a,o,c,u,l)?this.resetTo(i,s,a,o,1):(Oa(this,0),this.parent||ah(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?hs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,xi&&xi.vars.overwrite!==!0)._first||hs(this),this.parent&&a!==this.timeline.totalDuration()&&Vr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?vn(i):o,u=this._ptLookup,c=this._pt,h,d,p,g,_,m,f;if((!s||s==="all")&&Md(o,l))return s==="all"&&(this._pt=0),hs(this);for(h=this._op=this._op||[],s!=="all"&&(bt(s)&&(_={},Yt(s,function(D){return _[D]=1}),s=_),s=qd(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=u[f],s==="all"?(h[f]=s,g=d,p={}):(p=h[f]=h[f]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ua(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&hs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return _s(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return _s(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ct.killTweensOf(i,s,a)},e}(As);En(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yt("staggerTo,staggerFrom,staggerFromTo",function(r){St[r]=function(){var e=new Ht,t=Go.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ql=function(e,t,n){return e[t]=n},wh=function(e,t,n){return e[t](n)},Zd=function(e,t,n,i){return e[t](i.fp,n)},Kd=function(e,t,n){return e.setAttribute(t,n)},$l=function(e,t){return mt(e[t])?wh:Hl(e[t])&&e.setAttribute?Kd:Ql},Rh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jd=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ph=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},eu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Jd=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Qd=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ua(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$d=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Fh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Zt=function(){function r(t,n,i,s,a,o,l,u,c){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Rh,this.d=l||this,this.set=u||Ql,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=$d,this.m=n,this.mt=s,this.tween=i},r}();Yt(Zl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Yl[r]=1});un.TweenMax=un.TweenLite=St;un.TimelineLite=un.TimelineMax=Ht;ct=new Ht({sortChildren:!1,defaults:zr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ln.stringFilter=Eh;var $i=[],pa={},ep=[],Fu=0,tp=0,ja=function(e){return(pa[e]||ep).map(function(t){return t()})},qo=function(){var e=Date.now(),t=[];e-Fu>2&&(ja("matchMediaInit"),$i.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,u;for(o in i)a=Ln.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(n.revert(),l&&t.push(n))}),ja("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Fu=e,ja("matchMedia"))},Ih=function(){function r(t,n){this.selector=n&&Ho(n),this.data=[],this._r=[],this.isReverted=!1,this.id=tp++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){mt(n)&&(s=i,i=n,n=mt);var a=this,o=function(){var u=ut,c=a.selector,h;return u&&u!==a&&u.data.push(a),s&&(a.selector=Ho(s)),ut=a,h=i.apply(a,arguments),mt(h)&&a._r.push(h),ut=u,a.selector=c,a.isReverted=!1,h};return a.last=o,n===mt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ut;ut=null,n(this),ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof St&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=s.data.length;l--;)u=s.data[l],u instanceof Ht?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof St)&&u.revert&&u.revert(n);s._r.forEach(function(c){return c(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=$i.length;a--;)$i[a].id===this.id&&$i.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),np=function(){function r(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){kn(n)||(n={matches:n});var a=new Ih(0,s||this.scope),o=a.conditions={},l,u,c;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?c=1:(l=Ln.matchMedia(n[u]),l&&($i.indexOf(a)<0&&$i.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(qo):l.addEventListener("change",qo)));return c&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Aa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return vh(i)})},timeline:function(e){return new Ht(e)},getTweensOf:function(e,t){return ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){bt(e)&&(e=vn(e)[0]);var s=ji(e||{}).get,a=n?sh:rh;return n==="native"&&(n=""),e&&(t?a((tn[t]&&tn[t].get||s)(e,t,n,i)):function(o,l,u){return a((tn[o]&&tn[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,n){if(e=vn(e),e.length>1){var i=e.map(function(c){return Jt.quickSetter(c,t,n)}),s=i.length;return function(c){for(var h=s;h--;)i[h](c)}}e=e[0]||{};var a=tn[t],o=ji(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var h=new a;Cr._pt=0,h.init(e,n?c+n:c,Cr,0,[e]),h.render(1,h),Cr._pt&&eu(1,Cr)}:o.set(e,l);return a?u:function(c){return u(e,l,n?c+n:c,o,1)}},quickTo:function(e,t,n){var i,s=Jt.to(e,tr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qi(e.ease,zr.ease)),bu(zr,e||{})},config:function(e){return bu(ln,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!un[o]&&Ms(t+" effect requires "+o+" plugin.")}),qa[t]=function(o,l,u){return n(vn(o),En(l||{},s),u)},a&&(Ht.prototype[t]=function(o,l,u){return this.add(qa[t](o,kn(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Xe[e]=Qi(t)},parseEase:function(e,t){return arguments.length?Qi(e,t):Xe},getById:function(e){return ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ht(e),i,s;for(n.smoothChildTiming=qt(e.smoothChildTiming),ct.remove(n),n._dp=0,n._time=n._tTime=ct._time,i=ct._first;i;)s=i._next,(t||!(!i._dur&&i instanceof St&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=s;return Nn(ct,n,0),n},context:function(e,t){return e?new Ih(e,t):ut},matchMedia:function(e){return new np(e)},matchMediaRefresh:function(){return $i.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qo()},addEventListener:function(e,t){var n=pa[e]||(pa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=pa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ld,wrapYoyo:Ud,distribute:fh,random:ph,snap:dh,normalize:Id,getUnit:It,clamp:wd,splitColor:xh,toArray:vn,selector:Ho,mapRange:_h,pipe:Pd,unitize:Fd,interpolate:Nd,shuffle:hh},install:$c,effects:qa,ticker:sn,updateRoot:Ht.updateRoot,plugins:tn,globalTimeline:ct,core:{PropTween:Zt,globals:eh,Tween:St,Timeline:Ht,Animation:As,getCache:ji,_removeLinkedListItem:Ua,reverting:function(){return Lt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Gl=e}}};Yt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Aa[r]=St[r]});sn.add(Ht.updateRoot);Cr=Aa.to({},{duration:0});var ip=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},rp=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ip(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ja=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,u;if(bt(s)&&(l={},Yt(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}rp(o,s)}}}},Jt=Aa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Lt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ja("roundProps",Wo),Ja("modifiers"),Ja("snap",dh))||Aa;St.version=Ht.version=Jt.version="3.12.5";Qc=1;Wl()&&Gr();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Iu,Si,Ir,tu,Yi,Lu,nu,sp=function(){return typeof window<"u"},ri={},Gi=180/Math.PI,Lr=Math.PI/180,or=Math.atan2,Uu=1e8,iu=/([A-Z])/g,ap=/(left|right|width|margin|padding|x)/i,op=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},up=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cp=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Lh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Uh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},hp=function(e,t,n){return e.style[t]=n},fp=function(e,t,n){return e.style.setProperty(t,n)},dp=function(e,t,n){return e._gsap[t]=n},pp=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},mp=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},_p=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},ht="transform",Kt=ht+"Origin",gp=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ri&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Kn(i,o)}):this.tfm[e]=a.x?a[e]:Kn(i,e),e===Kt&&(this.tfm.zOrigin=a.zOrigin);else return Bn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(ht)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kt,t,"")),e=ht}(s||t)&&this.props.push(e,t,s[e])},Nh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vp=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(iu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=nu(),(!s||!s.isStart)&&!n[ht]&&(Nh(n),i.zOrigin&&n[Kt]&&(n[Kt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Oh=function(e,t){var n={target:e,props:[],revert:vp,save:gp};return e._gsap||Jt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Bh,Zo=function(e,t){var n=Si.createElementNS?Si.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Si.createElement(e);return n&&n.style?n:Si.createElement(e)},zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(iu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Hr(t)||t,1)||""},Nu="O,Moz,ms,Ms,Webkit".split(","),Hr=function(e,t,n){var i=t||Yi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Nu[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Nu[a]:"")+e},Ko=function(){sp()&&window.document&&(Iu=window,Si=Iu.document,Ir=Si.documentElement,Yi=Zo("div")||{style:{}},Zo("div"),ht=Hr(ht),Kt=ht+"Origin",Yi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bh=!!Hr("perspective"),nu=Jt.core.reverting,tu=1)},Qa=function r(e){var t=Zo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Ir.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ir.removeChild(t),this.style.cssText=s,a},Ou=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zh=function(e){var t;try{t=e.getBBox()}catch{t=Qa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Qa||(t=Qa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ou(e,["x","cx","x1"])||0,y:+Ou(e,["y","cy","y1"])||0,width:0,height:0}:t},kh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zh(e))},nr=function(e,t){if(t){var n=e.style,i;t in ri&&t!==Kt&&(t=ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(iu,"-$1").toLowerCase())):n.removeAttribute(t)}},Ei=function(e,t,n,i,s,a){var o=new Zt(e._pt,t,n,0,1,a?Uh:Lh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Bu={deg:1,rad:1,turn:1},xp={grid:1,flex:1},wi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Yi.style,l=ap.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",g,_,m,f;if(i===a||!s||Bu[i]||Bu[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),f=e.getCTM&&kh(e),(p||a==="%")&&(ri[t]||~t.indexOf("adius")))return g=f?e.getBBox()[l?"width":"height"]:e[c],gt(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Si||!_.appendChild)&&(_=Si.body),m=_._gsap,m&&p&&m.width&&l&&m.time===sn.time&&!m.uncache)return gt(s/m.width*h);if(p&&(t==="height"||t==="width")){var D=e.style[t];e.style[t]=h+i,g=e[c],D?e.style[t]=D:nr(e,t)}else(p||a==="%")&&!xp[zn(_,"display")]&&(o.position=zn(e,"position")),_===e&&(o.position="static"),_.appendChild(Yi),g=Yi[c],_.removeChild(Yi),o.position="absolute";return l&&p&&(m=ji(_),m.time=sn.time,m.width=_[c]),gt(d?g*s/h:g&&s?h/g*s:0)},Kn=function(e,t,n,i){var s;return tu||Ko(),t in Bn&&t!=="transform"&&(t=Bn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ri[t]&&t!=="transform"?(s=Cs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ca(zn(e,Kt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ba[t]&&ba[t](e,t,n)||zn(e,t)||nh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wi(e,t,s,n)+n:s},Sp=function(e,t,n,i){if(!n||n==="none"){var s=Hr(t,e,1),a=s&&zn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var o=new Zt(this._pt,e.style,t,0,1,Ph),l=0,u=0,c,h,d,p,g,_,m,f,D,y,S,A;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=zn(e,t)||i,_?e.style[t]=_:nr(e,t)),c=[n,i],Eh(c),n=c[0],i=c[1],d=n.match(br)||[],A=i.match(br)||[],A.length){for(;h=br.exec(i);)m=h[0],D=i.substring(l,h.index),g?g=(g+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(g=1),m!==(_=d[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=Fr(p,m)+S),f=parseFloat(m),y=m.substr((f+"").length),l=br.lastIndex-y.length,y||(y=y||ln.units[t]||S,l===i.length&&(i+=y,o.e+=y)),S!==y&&(p=wi(e,t,_,y)||0),o._pt={_next:o._pt,p:D||u===1?D:",",s:p,c:f-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Uh:Lh;return jc.test(i)&&(o.e=0),this._pt=o,o},zu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ep=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=zu[n]||n,t[1]=zu[i]||i,t.join(" ")},Mp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],ri[o]&&(l=1,o=o==="transformOrigin"?Kt:ht),nr(n,o);l&&(nr(n,ht),a&&(a.svg&&n.removeAttribute("transform"),Cs(n,1),a.uncache=1,Nh(i)))}},ba={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Zt(e._pt,t,n,0,0,Mp);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},bs=[1,0,0,1,0,0],Vh={},Gh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ku=function(e){var t=zn(e,ht);return Gh(t)?bs:t.substr(7).match(Kc).map(gt)},ru=function(e,t){var n=e._gsap||ji(e),i=e.style,s=ku(e),a,o,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?bs:s):(s===bs&&!e.offsetParent&&e!==Ir&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(u=1,o=e.nextElementSibling,Ir.appendChild(e)),s=ku(e),l?i.display=l:nr(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ir.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},jo=function(e,t,n,i,s,a){var o=e._gsap,l=s||ru(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],f=l[4],D=l[5],y=t.split(" "),S=parseFloat(y[0])||0,A=parseFloat(y[1])||0,b,T,C,v;n?l!==bs&&(T=p*m-g*_)&&(C=S*(m/T)+A*(-_/T)+(_*D-m*f)/T,v=S*(-g/T)+A*(p/T)-(p*D-g*f)/T,S=C,A=v):(b=zh(e),S=b.x+(~y[0].indexOf("%")?S/100*b.width:S),A=b.y+(~(y[1]||y[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&o.smooth?(f=S-u,D=A-c,o.xOffset=h+(f*p+D*_)-f,o.yOffset=d+(f*g+D*m)-D):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Kt]="0px 0px",a&&(Ei(a,o,"xOrigin",u,S),Ei(a,o,"yOrigin",c,A),Ei(a,o,"xOffset",h,o.xOffset),Ei(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+A)},Cs=function(e,t){var n=e._gsap||new Th(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=zn(e,Kt)||"0",c,h,d,p,g,_,m,f,D,y,S,A,b,T,C,v,x,R,B,L,X,K,N,Z,z,O,re,ce,ye,Ge,q,J;return c=h=d=_=m=f=D=y=S=0,p=g=1,n.svg=!!(e.getCTM&&kh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),i.scale=i.rotate=i.translate="none"),T=ru(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),u=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),jo(e,Z||u,!!Z||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,b=n.yOrigin||0,T!==bs&&(R=T[0],B=T[1],L=T[2],X=T[3],c=K=T[4],h=N=T[5],T.length===6?(p=Math.sqrt(R*R+B*B),g=Math.sqrt(X*X+L*L),_=R||B?or(B,R)*Gi:0,D=L||X?or(L,X)*Gi+_:0,D&&(g*=Math.abs(Math.cos(D*Lr))),n.svg&&(c-=A-(A*R+b*L),h-=b-(A*B+b*X))):(J=T[6],Ge=T[7],re=T[8],ce=T[9],ye=T[10],q=T[11],c=T[12],h=T[13],d=T[14],C=or(J,ye),m=C*Gi,C&&(v=Math.cos(-C),x=Math.sin(-C),Z=K*v+re*x,z=N*v+ce*x,O=J*v+ye*x,re=K*-x+re*v,ce=N*-x+ce*v,ye=J*-x+ye*v,q=Ge*-x+q*v,K=Z,N=z,J=O),C=or(-L,ye),f=C*Gi,C&&(v=Math.cos(-C),x=Math.sin(-C),Z=R*v-re*x,z=B*v-ce*x,O=L*v-ye*x,q=X*x+q*v,R=Z,B=z,L=O),C=or(B,R),_=C*Gi,C&&(v=Math.cos(C),x=Math.sin(C),Z=R*v+B*x,z=K*v+N*x,B=B*v-R*x,N=N*v-K*x,R=Z,K=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=gt(Math.sqrt(R*R+B*B+L*L)),g=gt(Math.sqrt(N*N+J*J)),C=or(K,N),D=Math.abs(C)>2e-4?C*Gi:0,S=q?1/(q<0?-q:q):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gh(zn(e,ht)),Z&&e.setAttribute("transform",Z))),Math.abs(D)>90&&Math.abs(D)<270&&(s?(p*=-1,D+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,D+=D<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=gt(p),n.scaleY=gt(g),n.rotation=gt(_)+o,n.rotationX=gt(m)+o,n.rotationY=gt(f)+o,n.skewX=D+o,n.skewY=y+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Kt]=Ca(u)),n.xOffset=n.yOffset=0,n.force3D=ln.force3D,n.renderTransform=n.svg?Dp:Bh?Hh:yp,n.uncache=0,n},Ca=function(e){return(e=e.split(" "))[0]+" "+e[1]},$a=function(e,t,n){var i=It(t);return gt(parseFloat(t)+parseFloat(wi(e,"x",n+"px",i)))+i},yp=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Hh(e,t)},Li="0deg",ts="0px",Ui=") ",Hh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,u=n.rotation,c=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,f=n.force3D,D=n.target,y=n.zOrigin,S="",A=f==="auto"&&e&&e!==1||f===!0;if(y&&(h!==Li||c!==Li)){var b=parseFloat(c)*Lr,T=Math.sin(b),C=Math.cos(b),v;b=parseFloat(h)*Lr,v=Math.cos(b),a=$a(D,a,T*v*-y),o=$a(D,o,-Math.sin(b)*-y),l=$a(D,l,C*v*-y+y)}m!==ts&&(S+="perspective("+m+Ui),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||a!==ts||o!==ts||l!==ts)&&(S+=l!==ts||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ui),u!==Li&&(S+="rotate("+u+Ui),c!==Li&&(S+="rotateY("+c+Ui),h!==Li&&(S+="rotateX("+h+Ui),(d!==Li||p!==Li)&&(S+="skew("+d+", "+p+Ui),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Ui),D.style[ht]=S||"translate(0, 0)"},Dp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,u=n.skewX,c=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,f=n.yOffset,D=n.forceCSS,y=parseFloat(a),S=parseFloat(o),A,b,T,C,v;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Lr,u*=Lr,A=Math.cos(l)*h,b=Math.sin(l)*h,T=Math.sin(l-u)*-d,C=Math.cos(l-u)*d,u&&(c*=Lr,v=Math.tan(u-c),v=Math.sqrt(1+v*v),T*=v,C*=v,c&&(v=Math.tan(c),v=Math.sqrt(1+v*v),A*=v,b*=v)),A=gt(A),b=gt(b),T=gt(T),C=gt(C)):(A=h,C=d,b=T=0),(y&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(y=wi(p,"x",a,"px"),S=wi(p,"y",o,"px")),(g||_||m||f)&&(y=gt(y+g-(g*A+_*T)+m),S=gt(S+_-(g*b+_*C)+f)),(i||s)&&(v=p.getBBox(),y=gt(y+i/100*v.width),S=gt(S+s/100*v.height)),v="matrix("+A+","+b+","+T+","+C+","+y+","+S+")",p.setAttribute("transform",v),D&&(p.style[ht]=v)},Tp=function(e,t,n,i,s){var a=360,o=bt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Gi:1),u=l-i,c=i+u+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),h==="cw"&&u<0?u=(u+a*Uu)%a-~~(u/a)*a:h==="ccw"&&u>0&&(u=(u-a*Uu)%a-~~(u/a)*a)),e._pt=d=new Zt(e._pt,t,n,i,u,lp),d.e=c,d.u="deg",e._props.push(n),d},Vu=function(e,t){for(var n in t)e[n]=t[n];return e},Ap=function(e,t,n){var i=Vu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,u,c,h,d,p,g;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[ht]=t,o=Cs(n,1),nr(n,ht),n.setAttribute("transform",u)):(u=getComputedStyle(n)[ht],a[ht]=t,o=Cs(n,1),a[ht]=u);for(l in ri)u=i[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=It(u),g=It(c),h=p!==g?wi(n,l,u,g):parseFloat(u),d=parseFloat(c),e._pt=new Zt(e._pt,o,l,h,d-h,Yo),e._pt.u=g||0,e._props.push(l));Vu(o,i)};Yt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ba[e>1?"border"+r:r]=function(o,l,u,c,h){var d,p;if(arguments.length<4)return d=a.map(function(g){return Kn(o,g,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},a.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,p,h)}});var Wh={name:"css",register:Ko,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,u,c,h,d,p,g,_,m,f,D,y,S,A,b,T,C;tu||Ko(),this.styles=this.styles||Oh(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(tn[_]&&Ah(_,t,n,i,e,s)))){if(p=typeof c,g=ba[_],p==="function"&&(c=c.call(n,i,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ds(c)),g)g(this,e,_,c,n)&&(T=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Ti.lastIndex=0,Ti.test(u)||(m=It(u),f=It(c)),f?m!==f&&(u=wi(e,_,u,f)+f):m&&(c+=m),this.add(o,"setProperty",u,c,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],bt(u)&&~u.indexOf("random(")&&(u=Ds(u)),It(u+"")||u==="auto"||(u+=ln.units[_]||It(Kn(e,_))||""),(u+"").charAt(1)==="="&&(u=Kn(e,_))):u=Kn(e,_),d=parseFloat(u),D=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),D&&(c=c.substr(2)),h=parseFloat(c),_ in Bn&&(_==="autoAlpha"&&(d===1&&Kn(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),Ei(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Bn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in ri,y){if(this.styles.save(_),S||(A=e._gsap,A.renderTransform&&!t.parseTransform||Cs(e,t.parseTransform),b=t.smoothOrigin!==!1&&A.smooth,S=this._pt=new Zt(this._pt,o,ht,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new Zt(this._pt,A,"scaleY",A.scaleY,(D?Fr(A.scaleY,D+h):h)-A.scaleY||0,Yo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Kt,0,o[Kt]),c=Ep(c),A.svg?jo(e,c,0,b,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==A.zOrigin&&Ei(this,A,"zOrigin",A.zOrigin,f),Ei(this,o,_,Ca(u),Ca(c)));continue}else if(_==="svgOrigin"){jo(e,c,1,b,0,this);continue}else if(_ in Vh){Tp(this,A,_,d,D?Fr(d,D+c):c);continue}else if(_==="smoothOrigin"){Ei(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){Ap(this,c,e);continue}}else _ in o||(_=Hr(_)||_);if(y||(h||h===0)&&(d||d===0)&&!op.test(c)&&_ in o)m=(u+"").substr((d+"").length),h||(h=0),f=It(c)||(_ in ln.units?ln.units[_]:m),m!==f&&(d=wi(e,_,u,f)),this._pt=new Zt(this._pt,y?A:o,_,d,(D?Fr(d,D+h):h)-d,!y&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?cp:Yo),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=up);else if(_ in o)Sp.call(this,e,_,u,D?D+c:c);else if(_ in e)this.add(e,_,u||e[_],D?D+c:c,i,s);else if(_!=="parseTransform"){ql(_,c);continue}y||(_ in o?C.push(_,0,o[_]):C.push(_,1,u||e[_])),a.push(_)}}T&&Fh(this)},render:function(e,t){if(t.tween._time||!nu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Kn,aliases:Bn,getSetter:function(e,t,n){var i=Bn[t];return i&&i.indexOf(",")<0&&(t=i),t in ri&&t!==Kt&&(e._gsap.x||Kn(e,"x"))?n&&Lu===n?t==="scale"?pp:dp:(Lu=n||{})&&(t==="scale"?mp:_p):e.style&&!Hl(e.style[t])?hp:~t.indexOf("-")?fp:$l(e,t)},core:{_removeProperty:nr,_getMatrix:ru}};Jt.utils.checkPrefix=Hr;Jt.core.getStyleSaver=Oh;(function(r,e,t,n){var i=Yt(r+","+e+","+t,function(s){ri[s]=1});Yt(e,function(s){ln.units[s]="deg",Vh[s]=1}),Bn[i[13]]=r+","+e,Yt(n,function(s){var a=s.split(":");Bn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ln.units[r]="px"});Jt.registerPlugin(Wh);var er=Jt.registerPlugin(Wh)||Jt;er.core.Tween;/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bp=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Xh(r){var e=r.nodeType,t="";if(e===1||e===9||e===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)t+=Xh(r)}else if(e===3||e===4)return r.nodeValue;return t}/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wr,Jo,qh,ns,Yh,Ba,Cp=/(?:\r|\n|\t\t)/g,wp=/(?:\s\s+)/g,Rp=" ",Zh=function(e){wr=document,Jo=window,ns=ns||e||Jo.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),ns&&(Ba=ns.utils.toArray,Yh=ns.core.context||function(){},qh=1)},Kh=function(e){return Jo.getComputedStyle(e)},su=function(e){return e.position==="absolute"||e.absolute===!0},Pp=function(e,t){for(var n=t.length,i;--n>-1;)if(i=t[n],e.substr(0,i.length)===i)return i.length},Fp=" style='position:relative;display:inline-block;'",Gu=function(e,t){e===void 0&&(e="");var n=~e.indexOf("++"),i=1;return n&&(e=e.split("++").join("")),function(){return"<"+t+Fp+(e?" class='"+e+(n?i++:"")+"'>":">")}},jh=function r(e,t,n){var i=e.nodeType;if(i===1||i===9||i===11)for(e=e.firstChild;e;e=e.nextSibling)r(e,t,n);else(i===3||i===4)&&(e.nodeValue=e.nodeValue.split(t).join(n))},eo=function(e,t){for(var n=t.length;--n>-1;)e.push(t[n])},Hu=function(e,t,n){for(var i;e&&e!==t;){if(i=e._next||e.nextSibling,i)return i.textContent.charAt(0)===n;e=e.parentNode||e._parent}},Ip=function r(e){var t=Ba(e.childNodes),n=t.length,i,s;for(i=0;i<n;i++)s=t[i],s._isSplit?r(s):i&&s.previousSibling&&s.previousSibling.nodeType===3?(s.previousSibling.nodeValue+=s.nodeType===3?s.nodeValue:s.firstChild.nodeValue,e.removeChild(s)):s.nodeType!==3&&(e.insertBefore(s.firstChild,s),e.removeChild(s))},In=function(e,t){return parseFloat(t[e])||0},Lp=function(e,t,n,i,s,a,o){var l=Kh(e),u=In("paddingLeft",l),c=-999,h=In("borderBottomWidth",l)+In("borderTopWidth",l),d=In("borderLeftWidth",l)+In("borderRightWidth",l),p=In("paddingTop",l)+In("paddingBottom",l),g=In("paddingLeft",l)+In("paddingRight",l),_=In("fontSize",l)*(t.lineThreshold||.2),m=l.textAlign,f=[],D=[],y=[],S=t.wordDelimiter||" ",A=t.tag?t.tag:t.span?"span":"div",b=t.type||t.split||"chars,words,lines",T=s&&~b.indexOf("lines")?[]:null,C=~b.indexOf("words"),v=~b.indexOf("chars"),x=su(t),R=t.linesClass,B=~(R||"").indexOf("++"),L=[],X=l.display==="flex",K=e.style.display,N,Z,z,O,re,ce,ye,Ge,q,J,me,ie;for(B&&(R=R.split("++").join("")),X&&(e.style.display="block"),Z=e.getElementsByTagName("*"),z=Z.length,re=[],N=0;N<z;N++)re[N]=Z[N];if(T||x)for(N=0;N<z;N++)O=re[N],ce=O.parentNode===e,(ce||x||v&&!C)&&(ie=O.offsetTop,T&&ce&&Math.abs(ie-c)>_&&(O.nodeName!=="BR"||N===0)&&(ye=[],T.push(ye),c=ie),x&&(O._x=O.offsetLeft,O._y=ie,O._w=O.offsetWidth,O._h=O.offsetHeight),T&&((O._isSplit&&ce||!v&&ce||C&&ce||!C&&O.parentNode.parentNode===e&&!O.parentNode._isSplit)&&(ye.push(O),O._x-=u,Hu(O,e,S)&&(O._wordEnd=!0)),O.nodeName==="BR"&&(O.nextSibling&&O.nextSibling.nodeName==="BR"||N===0)&&T.push([])));for(N=0;N<z;N++){if(O=re[N],ce=O.parentNode===e,O.nodeName==="BR"){T||x?(O.parentNode&&O.parentNode.removeChild(O),re.splice(N--,1),z--):C||e.appendChild(O);continue}if(x&&(q=O.style,!C&&!ce&&(O._x+=O.parentNode._x,O._y+=O.parentNode._y),q.left=O._x+"px",q.top=O._y+"px",q.position="absolute",q.display="block",q.width=O._w+1+"px",q.height=O._h+"px"),!C&&v)if(O._isSplit)for(O._next=Z=O.nextSibling,O.parentNode.appendChild(O);Z&&Z.nodeType===3&&Z.textContent===" ";)O._next=Z.nextSibling,O.parentNode.appendChild(Z),Z=Z.nextSibling;else O.parentNode._isSplit?(O._parent=O.parentNode,!O.previousSibling&&O.firstChild&&(O.firstChild._isFirst=!0),O.nextSibling&&O.nextSibling.textContent===" "&&!O.nextSibling.nextSibling&&L.push(O.nextSibling),O._next=O.nextSibling&&O.nextSibling._isFirst?null:O.nextSibling,O.parentNode.removeChild(O),re.splice(N--,1),z--):ce||(ie=!O.nextSibling&&Hu(O.parentNode,e,S),O.parentNode._parent&&O.parentNode._parent.appendChild(O),ie&&O.parentNode.appendChild(wr.createTextNode(" ")),A==="span"&&(O.style.display="inline"),f.push(O));else O.parentNode._isSplit&&!O._isSplit&&O.innerHTML!==""?D.push(O):v&&!O._isSplit&&(A==="span"&&(O.style.display="inline"),f.push(O))}for(N=L.length;--N>-1;)L[N].parentNode.removeChild(L[N]);if(T){for(x&&(J=wr.createElement(A),e.appendChild(J),me=J.offsetWidth+"px",ie=J.offsetParent===e?0:e.offsetLeft,e.removeChild(J)),q=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(Ge=S===" "&&(!x||!C&&!v),N=0;N<T.length;N++){for(ye=T[N],J=wr.createElement(A),J.style.cssText="display:block;text-align:"+m+";position:"+(x?"absolute;":"relative;"),R&&(J.className=R+(B?N+1:"")),y.push(J),z=ye.length,Z=0;Z<z;Z++)ye[Z].nodeName!=="BR"&&(O=ye[Z],J.appendChild(O),Ge&&O._wordEnd&&J.appendChild(wr.createTextNode(" ")),x&&(Z===0&&(J.style.top=O._y+"px",J.style.left=u+ie+"px"),O.style.top="0px",ie&&(O.style.left=O._x-ie+"px")));z===0?J.innerHTML="&nbsp;":!C&&!v&&(Ip(J),jh(J," "," ")),x&&(J.style.width=me,J.style.height=O._h+"px"),e.appendChild(J)}e.style.cssText=q}x&&(o>e.clientHeight&&(e.style.height=o-p+"px",e.clientHeight<o&&(e.style.height=o+h+"px")),a>e.clientWidth&&(e.style.width=a-g+"px",e.clientWidth<a&&(e.style.width=a+d+"px"))),X&&(K?e.style.display=K:e.style.removeProperty("display")),eo(n,f),C&&eo(i,D),eo(s,y)},Up=function(e,t,n,i){var s=t.tag?t.tag:t.span?"span":"div",a=t.type||t.split||"chars,words,lines",o=~a.indexOf("chars"),l=su(t),u=t.wordDelimiter||" ",c=function(x){return x===u||x===Rp&&u===" "},h=u!==" "?"":l?"&#173; ":" ",d="</"+s+">",p=1,g=t.specialChars?typeof t.specialChars=="function"?t.specialChars:Pp:null,_,m,f,D,y,S,A,b,T=wr.createElement("div"),C=e.parentNode;for(C.insertBefore(T,e),T.textContent=e.nodeValue,C.removeChild(e),e=T,_=Xh(e),A=_.indexOf("<")!==-1,t.reduceWhiteSpace!==!1&&(_=_.replace(wp," ").replace(Cp,"")),A&&(_=_.split("<").join("{{LT}}")),y=_.length,m=(_.charAt(0)===" "?h:"")+n(),f=0;f<y;f++)if(S=_.charAt(f),g&&(b=g(_.substr(f),t.specialChars)))S=_.substr(f,b||1),m+=o&&S!==" "?i()+S+"</"+s+">":S,f+=b-1;else if(c(S)&&!c(_.charAt(f-1))&&f){for(m+=p?d:"",p=0;c(_.charAt(f+1));)m+=h,f++;f===y-1?m+=h:_.charAt(f+1)!==")"&&(m+=h+n(),p=1)}else S==="{"&&_.substr(f,6)==="{{LT}}"?(m+=o?i()+"{{LT}}</"+s+">":"{{LT}}",f+=5):S.charCodeAt(0)>=55296&&S.charCodeAt(0)<=56319||_.charCodeAt(f+1)>=65024&&_.charCodeAt(f+1)<=65039?(D=((_.substr(f,12).split(bp)||[])[1]||"").length||2,m+=o&&S!==" "?i()+_.substr(f,D)+"</"+s+">":_.substr(f,D),f+=D-1):m+=o&&S!==" "?i()+S+"</"+s+">":S;e.outerHTML=m+(p?d:""),A&&jh(C,"{{LT}}","<")},Np=function r(e,t,n,i){var s=Ba(e.childNodes),a=s.length,o=su(t),l,u;if(e.nodeType!==3||a>1){for(t.absolute=!1,l=0;l<a;l++)u=s[l],u._next=u._isFirst=u._parent=u._wordEnd=null,(u.nodeType!==3||/\S+/.test(u.nodeValue))&&(o&&u.nodeType!==3&&Kh(u).display==="inline"&&(u.style.display="inline-block",u.style.position="relative"),u._isSplit=!0,r(u,t,n,i));t.absolute=o,e._isSplit=!0;return}Up(e,t,n,i)},wa=function(){function r(t,n){qh||Zh(),this.elements=Ba(t),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=n||{},Yh(this),this.split(n)}var e=r.prototype;return e.split=function(n){this.isSplit&&this.revert(),this.vars=n=n||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var i=this.elements.length,s=n.tag?n.tag:n.span?"span":"div",a=Gu(n.wordsClass,s),o=Gu(n.charsClass,s),l,u,c;--i>-1;)c=this.elements[i],this._originals[i]={html:c.innerHTML,style:c.getAttribute("style")},l=c.clientHeight,u=c.clientWidth,Np(c,n,a,o),Lp(c,n,this.chars,this.words,this.lines,u,l);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},e.revert=function(){var n=this._originals;if(!n)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(i,s){i.innerHTML=n[s].html,i.setAttribute("style",n[s].style)}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},r.create=function(n,i){return new r(n,i)},r}();wa.version="3.12.5";wa.register=Zh;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const au="172",Op=0,Wu=1,Bp=2,Jh=1,zp=2,Yn=3,si=0,Wt=1,jn=2,ei=0,Ur=1,Xu=2,qu=3,Yu=4,kp=5,Xi=100,Vp=101,Gp=102,Hp=103,Wp=104,Xp=200,qp=201,Yp=202,Zp=203,Qo=204,$o=205,Kp=206,jp=207,Jp=208,Qp=209,$p=210,em=211,tm=212,nm=213,im=214,el=0,tl=1,nl=2,Wr=3,il=4,rl=5,sl=6,al=7,Qh=0,rm=1,sm=2,Ai=0,am=1,om=2,lm=3,um=4,cm=5,hm=6,fm=7,$h=300,Xr=301,qr=302,ol=303,ll=304,za=306,ul=1e3,Zi=1001,cl=1002,Rn=1003,dm=1004,ks=1005,xn=1006,to=1007,Ki=1008,ai=1009,ef=1010,tf=1011,ws=1012,ou=1013,ir=1014,Jn=1015,sr=1016,lu=1017,uu=1018,Yr=1020,nf=35902,rf=1021,sf=1022,wn=1023,af=1024,of=1025,Nr=1026,Zr=1027,lf=1028,cu=1029,uf=1030,hu=1031,fu=1033,ma=33776,_a=33777,ga=33778,va=33779,hl=35840,fl=35841,dl=35842,pl=35843,ml=36196,_l=37492,gl=37496,vl=37808,xl=37809,Sl=37810,El=37811,Ml=37812,yl=37813,Dl=37814,Tl=37815,Al=37816,bl=37817,Cl=37818,wl=37819,Rl=37820,Pl=37821,xa=36492,Fl=36494,Il=36495,cf=36283,Ll=36284,Ul=36285,Nl=36286,pm=3200,mm=3201,_m=0,gm=1,vi="",nn="srgb",Kr="srgb-linear",Ra="linear",nt="srgb",lr=7680,Zu=519,vm=512,xm=513,Sm=514,hf=515,Em=516,Mm=517,ym=518,Dm=519,Ol=35044,Ku="300 es",Qn=2e3,Pa=2001;class Qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Bl=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function We(r,e,t){return Math.max(e,Math.min(t,r))}function Tm(r,e){return(r%e+e)%e}function io(r,e,t){return(1-t)*r+t*e}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,s,a,o,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,u)}set(e,t,n,i,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],c=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],D=i[1],y=i[4],S=i[7],A=i[2],b=i[5],T=i[8];return s[0]=a*_+o*D+l*A,s[3]=a*m+o*y+l*b,s[6]=a*f+o*S+l*T,s[1]=u*_+c*D+h*A,s[4]=u*m+c*y+h*b,s[7]=u*f+c*S+h*T,s[2]=d*_+p*D+g*A,s[5]=d*m+p*y+g*b,s[8]=d*f+p*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-n*s*c+n*o*l+i*s*u-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,d=o*l-c*s,p=u*s-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*u-c*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(c*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-u*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-i*u,i*l,-i*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new Ue;function ff(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Rs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Am(){const r=Rs("canvas");return r.style.display="block",r}const ju={};function Ar(r){r in ju||(ju[r]=!0,console.warn(r))}function bm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Cm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ju=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rm(){const r={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Or(i.r),i.g=Or(i.g),i.b=Or(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Kr]:{primaries:e,whitePoint:n,transfer:Ra,toXYZ:Ju,fromXYZ:Qu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Ju,fromXYZ:Qu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),r}const Ke=Rm();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ur;class Pm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=Rs("canvas")),ur.width=e.width,ur.height=e.height;const n=ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ti(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fm=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(so(i[a].image)):s.push(so(i[a]))}else s=so(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Pm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Im=0;class At extends Qr{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Zi,i=Zi,s=xn,a=Ki,o=wn,l=ai,u=At.DEFAULT_ANISOTROPY,c=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=bi(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ul:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ul:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=$h;At.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,S=(p+1)/2,A=(f+1)/2,b=(c+d)/4,T=(h+_)/4,C=(g+m)/4;return y>S&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=T/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=C/s),this.set(n,i,s,t),this}let D=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(D)<.001&&(D=1),this.x=(m-g)/D,this.y=(h-_)/D,this.z=(d-c)/D,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lm extends Qr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Lm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pf extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Um extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],u=n[i+1],c=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||u!==p||c!==g){let m=1-o;const f=l*d+u*p+c*g+h*_,D=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const A=Math.sqrt(y),b=Math.atan2(A,f*D);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A}const S=o*D;if(l=l*m+d*S,u=u*m+p*S,c=c*m+g*S,h=h*m+_*S,m===1-o){const A=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=A,u*=A,c*=A,h*=A}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],u=n[i+2],c=n[i+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+c*h+l*p-u*d,e[t+1]=l*g+c*d+u*h-o*p,e[t+2]=u*g+c*p+o*d-l*h,e[t+3]=c*g-o*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"YXZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"ZXY":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"ZYX":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"YZX":this._x=d*c*h+u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h-d*p*g;break;case"XZY":this._x=d*c*h-u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+u)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-u)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+a*o+i*u-s*l,this._y=i*c+a*l+s*o-n*u,this._z=s*c+a*u+n*l-i*o,this._w=a*c-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*i-o*n),c=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*u+a*h-o*c,this.y=n+l*c+o*u-s*h,this.z=i+l*h+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new V,$u=new Fs;class Is{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Gs.subVectors(this.max,is),cr.subVectors(e.a,is),hr.subVectors(e.b,is),fr.subVectors(e.c,is),ci.subVectors(hr,cr),hi.subVectors(fr,hr),Ni.subVectors(cr,fr);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ni.z,Ni.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ni.z,0,-Ni.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ni.y,Ni.x,0];return!oo(t,cr,hr,fr,Gs)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,cr,hr,fr,Gs))?!1:(Hs.crossVectors(ci,hi),t=[Hs.x,Hs.y,Hs.z],oo(t,cr,hr,fr,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new V,new V,new V,new V,new V,new V,new V,new V],Tn=new V,Vs=new Is,cr=new V,hr=new V,fr=new V,ci=new V,hi=new V,Ni=new V,is=new V,Gs=new V,Hs=new V,Oi=new V;function oo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Oi.fromArray(r,s);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),u=t.dot(Oi),c=n.dot(Oi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Nm=new Is,rs=new V,lo=new V;class du{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const t=rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(lo)),this.expandByPoint(rs.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new V,uo=new V,Ws=new V,fi=new V,co=new V,Xs=new V,ho=new V;class Om{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uo.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),o=fi.dot(this.direction),l=-fi.dot(Ws),u=fi.lengthSq(),c=Math.abs(1-a*a);let h,d,p,g;if(c>0)if(h=a*l-o,d=a*o-l,g=s*c,h>=0)if(d>=-g)if(d<=g){const _=1/c;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+u}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(uo).addScaledVector(Ws,d),p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,s){co.subVectors(t,e),Xs.subVectors(n,e),ho.crossVectors(co,Xs);let a=this.direction.dot(ho),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(Xs.crossVectors(fi,Xs));if(l<0)return null;const u=o*this.direction.dot(co.cross(fi));if(u<0||l+u>a)return null;const c=-o*fi.dot(ho);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,i,s,a,o,l,u,c,h,d,p,g,_,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,u,c,h,d,p,g,_,m)}set(e,t,n,i,s,a,o,l,u,c,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/dr.setFromMatrixColumn(e,0).length(),s=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*c,p=a*h,g=o*c,_=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=d-_*u,t[9]=-o*l,t[2]=_-d*u,t[6]=g+p*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,g=u*c,_=u*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,g=u*c,_=u*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*c,t[9]=_-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,p=a*h,g=o*c,_=o*h;t[0]=l*c,t[4]=g*u-p,t[8]=d*u+_,t[1]=l*h,t[5]=_*u+d,t[9]=p*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*u,g=o*l,_=o*u;t[0]=l*c,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,p=a*u,g=o*l,_=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+_,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*c,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bm,e,zm)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),di.crossVectors(n,$t),di.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),di.crossVectors(n,$t)),di.normalize(),qs.crossVectors($t,di),i[0]=di.x,i[4]=qs.x,i[8]=$t.x,i[1]=di.y,i[5]=qs.y,i[9]=$t.y,i[2]=di.z,i[6]=qs.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],c=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],D=n[3],y=n[7],S=n[11],A=n[15],b=i[0],T=i[4],C=i[8],v=i[12],x=i[1],R=i[5],B=i[9],L=i[13],X=i[2],K=i[6],N=i[10],Z=i[14],z=i[3],O=i[7],re=i[11],ce=i[15];return s[0]=a*b+o*x+l*X+u*z,s[4]=a*T+o*R+l*K+u*O,s[8]=a*C+o*B+l*N+u*re,s[12]=a*v+o*L+l*Z+u*ce,s[1]=c*b+h*x+d*X+p*z,s[5]=c*T+h*R+d*K+p*O,s[9]=c*C+h*B+d*N+p*re,s[13]=c*v+h*L+d*Z+p*ce,s[2]=g*b+_*x+m*X+f*z,s[6]=g*T+_*R+m*K+f*O,s[10]=g*C+_*B+m*N+f*re,s[14]=g*v+_*L+m*Z+f*ce,s[3]=D*b+y*x+S*X+A*z,s[7]=D*T+y*R+S*K+A*O,s[11]=D*C+y*B+S*N+A*re,s[15]=D*v+y*L+S*Z+A*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*h-i*u*h-s*o*d+n*u*d+i*o*p-n*l*p)+_*(+t*l*p-t*u*d+s*a*d-i*a*p+i*u*c-s*l*c)+m*(+t*u*h-t*o*p-s*a*h+n*a*p+s*o*c-n*u*c)+f*(-i*o*c-t*l*h+t*o*d+i*a*h-n*a*d+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],D=h*m*u-_*d*u+_*l*p-o*m*p-h*l*f+o*d*f,y=g*d*u-c*m*u-g*l*p+a*m*p+c*l*f-a*d*f,S=c*_*u-g*h*u+g*o*p-a*_*p-c*o*f+a*h*f,A=g*h*l-c*_*l-g*o*d+a*_*d+c*o*m-a*h*m,b=t*D+n*y+i*S+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=D*T,e[1]=(_*d*s-h*m*s-_*i*p+n*m*p+h*i*f-n*d*f)*T,e[2]=(o*m*s-_*l*s+_*i*u-n*m*u-o*i*f+n*l*f)*T,e[3]=(h*l*s-o*d*s-h*i*u+n*d*u+o*i*p-n*l*p)*T,e[4]=y*T,e[5]=(c*m*s-g*d*s+g*i*p-t*m*p-c*i*f+t*d*f)*T,e[6]=(g*l*s-a*m*s-g*i*u+t*m*u+a*i*f-t*l*f)*T,e[7]=(a*d*s-c*l*s+c*i*u-t*d*u-a*i*p+t*l*p)*T,e[8]=S*T,e[9]=(g*h*s-c*_*s-g*n*p+t*_*p+c*n*f-t*h*f)*T,e[10]=(a*_*s-g*o*s+g*n*u-t*_*u-a*n*f+t*o*f)*T,e[11]=(c*o*s-a*h*s-c*n*u+t*h*u+a*n*p-t*o*p)*T,e[12]=A*T,e[13]=(c*_*i-g*h*i+g*n*d-t*_*d-c*n*m+t*h*m)*T,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*T,e[15]=(a*h*i-c*o*i+c*n*l-t*h*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+n,u*o-i*l,u*l+i*o,0,u*o+i*l,c*o+n,c*l-i*a,0,u*l-i*o,c*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,h=o+o,d=s*u,p=s*c,g=s*h,_=a*c,m=a*h,f=o*h,D=l*u,y=l*c,S=l*h,A=n.x,b=n.y,T=n.z;return i[0]=(1-(_+f))*A,i[1]=(p+S)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(p-S)*b,i[5]=(1-(d+f))*b,i[6]=(m+D)*b,i[7]=0,i[8]=(g+y)*T,i[9]=(m-D)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=dr.set(i[0],i[1],i[2]).length();const a=dr.set(i[4],i[5],i[6]).length(),o=dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const u=1/s,c=1/a,h=1/o;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=c,An.elements[5]*=c,An.elements[6]*=c,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Qn){const l=this.elements,u=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===Qn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Pa)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Qn){const l=this.elements,u=1/(t-e),c=1/(n-i),h=1/(a-s),d=(t+e)*u,p=(n+i)*c;let g,_;if(o===Qn)g=(a+s)*h,_=-2*h;else if(o===Pa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const dr=new V,An=new dt,Bm=new V(0,0,0),zm=new V(1,1,1),di=new V,qs=new V,$t=new V,ec=new dt,tc=new Fs;class li{constructor(e=0,t=0,n=0,i=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],u=i[5],c=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let km=0;const nc=new V,pr=new Fs,Wn=new dt,Ys=new V,ss=new V,Vm=new V,Gm=new Fs,ic=new V(1,0,0),rc=new V(0,1,0),sc=new V(0,0,1),ac={type:"added"},Hm={type:"removed"},mr={type:"childadded",child:null},fo={type:"childremoved",child:null};class jt extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new V,t=new li,n=new Fs,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ue}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(ss,Ys,this.up):Wn.lookAt(Ys,ss,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),pr.setFromRotationMatrix(Wn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ac),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hm),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ac),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}jt.DEFAULT_UP=new V(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new V,Xn=new V,po=new V,qn=new V,_r=new V,gr=new V,oc=new V,mo=new V,_o=new V,go=new V,vo=new ft,xo=new ft,So=new ft;class mn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),Xn.subVectors(n,t),po.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Xn),l=bn.dot(po),u=Xn.dot(Xn),c=Xn.dot(po),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-o*c)*d,g=(a*c-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return vo.setScalar(0),xo.setScalar(0),So.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),So.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vo,s.x),a.addScaledVector(xo,s.y),a.addScaledVector(So,s.z),a}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Xn.subVectors(e,t),bn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),bn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_r.subVectors(i,n),gr.subVectors(s,n),mo.subVectors(e,n);const l=_r.dot(mo),u=gr.dot(mo);if(l<=0&&u<=0)return t.copy(n);_o.subVectors(e,i);const c=_r.dot(_o),h=gr.dot(_o);if(c>=0&&h<=c)return t.copy(i);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(_r,a);go.subVectors(e,s);const p=_r.dot(go),g=gr.dot(go);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(gr,o);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return oc.subVectors(s,i),o=(h-c)/(h-c+(p-g)),t.copy(i).addScaledVector(oc,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(_r,a).addScaledVector(gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function Eo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Tm(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Eo(a,s,e+1/3),this.g=Eo(a,s,e),this.b=Eo(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Ke.fromWorkingColorSpace(Ft.copy(this),e),Math.round(We(Ft.r*255,0,255))*65536+Math.round(We(Ft.g*255,0,255))*256+Math.round(We(Ft.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,s=Ft.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=nn){Ke.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Zs);const n=io(pi.h,Zs.h,t),i=io(pi.s,Zs.s,t),s=io(pi.l,Zs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ye;Ye.NAMES=_f;let Wm=0;class Ls extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Ur,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=$o,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gf extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new V,Ks=new ke;class Pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}}class vf extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xf extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ni extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xm=0;const dn=new dt,Mo=new jt,vr=new V,en=new Is,as=new Is,Dt=new V;class ui extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?xf:vf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ni(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(en.min,as.min),en.expandByPoint(Dt),Dt.addVectors(en.max,as.max),en.expandByPoint(Dt)):(en.expandByPoint(as.min),en.expandByPoint(as.max))}en.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Dt.fromBufferAttribute(o,u),l&&(vr.fromBufferAttribute(e,u),Dt.add(vr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new V,l[C]=new V;const u=new V,c=new V,h=new V,d=new ke,p=new ke,g=new ke,_=new V,m=new V;function f(C,v,x){u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,x),c.sub(u),h.sub(u),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(R),o[C].add(_),o[v].add(_),o[x].add(_),l[C].add(m),l[v].add(m),l[x].add(m))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let C=0,v=D.length;C<v;++C){const x=D[C],R=x.start,B=x.count;for(let L=R,X=R+B;L<X;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new V,S=new V,A=new V,b=new V;function T(C){A.fromBufferAttribute(i,C),b.copy(A);const v=o[C];y.copy(v),y.sub(A.multiplyScalar(A.dot(v))).normalize(),S.crossVectors(b,v);const R=S.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,v=D.length;C<v;++C){const x=D[C],R=x.start,B=x.count;for(let L=R,X=R+B;L<X;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new V,s=new V,a=new V,o=new V,l=new V,u=new V,c=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),o.add(c),l.add(c),u.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let f=0;f<c;f++)d[g++]=u[p++]}return new Pn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],u=e(l,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new dt,Bi=new Om,js=new du,uc=new V,Js=new V,Qs=new V,$s=new V,yo=new V,ea=new V,cc=new V,ta=new V;class Sn extends jt{constructor(e=new ui,t=new gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ea.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],h=s[l];c!==0&&(yo.fromBufferAttribute(h,e),a?ea.addScaledVector(yo,c):ea.addScaledVector(yo.sub(t),c))}t.add(ea)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(js.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(js,uc)===null||Bi.origin.distanceToSquared(uc)>(e.far-e.near)**2))&&(lc.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(lc),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],D=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=D,A=y;S<A;S+=3){const b=o.getX(S),T=o.getX(S+1),C=o.getX(S+2);i=na(this,f,e,n,u,c,h,b,T,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const D=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);i=na(this,a,e,n,u,c,h,D,y,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],D=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=D,A=y;S<A;S+=3){const b=S,T=S+1,C=S+2;i=na(this,f,e,n,u,c,h,b,T,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const D=m,y=m+1,S=m+2;i=na(this,a,e,n,u,c,h,D,y,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function qm(r,e,t,n,i,s,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===si,o),l===null)return null;ta.copy(o),ta.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(ta);return u<t.near||u>t.far?null:{distance:u,point:ta.clone(),object:r}}function na(r,e,t,n,i,s,a,o,l,u){r.getVertexPosition(o,Js),r.getVertexPosition(l,Qs),r.getVertexPosition(u,$s);const c=qm(r,e,t,n,Js,Qs,$s,cc);if(c){const h=new V;mn.getBarycoord(cc,Js,Qs,$s,h),i&&(c.uv=mn.getInterpolatedAttribute(i,o,l,u,h,new ke)),s&&(c.uv1=mn.getInterpolatedAttribute(s,o,l,u,h,new ke)),a&&(c.normal=mn.getInterpolatedAttribute(a,o,l,u,h,new V),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new V,materialIndex:0};mn.getNormal(Js,Qs,$s,d.normal),c.face=d,c.barycoord=h}return c}class Us extends ui{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ni(u,3)),this.setAttribute("normal",new ni(c,3)),this.setAttribute("uv",new ni(h,2));function g(_,m,f,D,y,S,A,b,T,C,v){const x=S/T,R=A/C,B=S/2,L=A/2,X=b/2,K=T+1,N=C+1;let Z=0,z=0;const O=new V;for(let re=0;re<N;re++){const ce=re*R-L;for(let ye=0;ye<K;ye++){const Ge=ye*x-B;O[_]=Ge*D,O[m]=ce*y,O[f]=X,u.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[f]=b>0?1:-1,c.push(O.x,O.y,O.z),h.push(ye/T),h.push(1-re/C),Z+=1}}for(let re=0;re<C;re++)for(let ce=0;ce<T;ce++){const ye=d+ce+K*re,Ge=d+ce+K*(re+1),q=d+(ce+1)+K*(re+1),J=d+(ce+1)+K*re;l.push(ye,Ge,J),l.push(Ge,q,J),z+=6}o.addGroup(p,z,v),p+=z,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=jr(r[t]);for(const i in n)e[i]=n[i]}return e}function Ym(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Sf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const pu={clone:jr,merge:Gt};var Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=Ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ef extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new V,hc=new ke,fc=new ke;class rn extends Ef{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,hc,fc),t.subVectors(fc,hc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/u,i*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,Sr=1;class jm extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(xr,Sr,e,t);i.layers=this.layers,this.add(i);const s=new rn(xr,Sr,e,t);s.layers=this.layers,this.add(s);const a=new rn(xr,Sr,e,t);a.layers=this.layers,this.add(a);const o=new rn(xr,Sr,e,t);o.layers=this.layers,this.add(o);const l=new rn(xr,Sr,e,t);l.layers=this.layers,this.add(l);const u=new rn(xr,Sr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mf extends At{constructor(e,t,n,i,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Xr,super(e,t,n,i,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jm extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Us(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:ei});s.uniforms.tEquirect.value=t;const a=new Sn(i,s),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=xn),new jm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Qm extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $m{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new V;class Fa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yf extends Ls{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Er;const os=new V,Mr=new V,yr=new V,Dr=new ke,ls=new ke,Df=new dt,ia=new V,us=new V,ra=new V,dc=new ke,Do=new ke,pc=new ke;class e_ extends jt{constructor(e=new yf){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new ui;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $m(t,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new Fa(n,3,0,!1)),Er.setAttribute("uv",new Fa(n,2,3,!1))}this.geometry=Er,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),Df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-yr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;sa(ia.set(-.5,-.5,0),yr,a,Mr,i,s),sa(us.set(.5,-.5,0),yr,a,Mr,i,s),sa(ra.set(.5,.5,0),yr,a,Mr,i,s),dc.set(0,0),Do.set(1,0),pc.set(1,1);let o=e.ray.intersectTriangle(ia,us,ra,!1,os);if(o===null&&(sa(us.set(-.5,.5,0),yr,a,Mr,i,s),Do.set(0,1),o=e.ray.intersectTriangle(ia,ra,us,!1,os),o===null))return;const l=e.ray.origin.distanceTo(os);l<e.near||l>e.far||t.push({distance:l,point:os.clone(),uv:mn.getInterpolation(os,ia,us,ra,dc,Do,pc,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sa(r,e,t,n,i,s){Dr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ls.x=s*Dr.x-i*Dr.y,ls.y=i*Dr.x+s*Dr.y):ls.copy(Dr),r.copy(e),r.x+=ls.x,r.y+=ls.y,r.applyMatrix4(Df)}const To=new V,t_=new V,n_=new Ue;class gi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=To.subVectors(n,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||n_.getNormalMatrix(e),i=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new du,aa=new V;class Tf{constructor(e=new gi,t=new gi,n=new gi,i=new gi,s=new gi,a=new gi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],u=i[4],c=i[5],h=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],D=i[13],y=i[14],S=i[15];if(n[0].setComponents(l-s,d-u,m-p,S-f).normalize(),n[1].setComponents(l+s,d+u,m+p,S+f).normalize(),n[2].setComponents(l+a,d+c,m+g,S+D).normalize(),n[3].setComponents(l-a,d-c,m-g,S-D).normalize(),n[4].setComponents(l-o,d-h,m-_,S-y).normalize(),t===Qn)n[5].setComponents(l+o,d+h,m+_,S+y).normalize();else if(t===Pa)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(aa.x=i.normal.x>0?e.max.x:e.min.x,aa.y=i.normal.y>0?e.max.y:e.min.y,aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ds extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ao extends At{constructor(e,t,n,i,s,a,o,l,u){super(e,t,n,i,s,a,o,l,u),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:xn,this.magFilter=s!==void 0?s:xn,this.generateMipmaps=!1;const c=this;function h(){c.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Af extends At{constructor(e,t,n,i,s,a,o,l,u,c=Nr){if(c!==Nr&&c!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Nr&&(n=ir),n===void 0&&c===Zr&&(n=Yr),super(null,i,s,a,o,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jr extends ui{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),u=o+1,c=l+1,h=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<c;f++){const D=f*d-a;for(let y=0;y<u;y++){const S=y*h-s;g.push(S,-D,0),_.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let D=0;D<o;D++){const y=D+u*f,S=D+u*(f+1),A=D+1+u*(f+1),b=D+1+u*f;p.push(y,S,b),p.push(S,A,b)}this.setIndex(p),this.setAttribute("position",new ni(g,3)),this.setAttribute("normal",new ni(_,3)),this.setAttribute("uv",new ni(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class i_ extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r_ extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class s_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,s===!1&&i.onStart!==void 0&&i.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const a_=new s_;class mu{constructor(e){this.manager=e!==void 0?e:a_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mu.DEFAULT_MATERIAL_NAME="__DEFAULT";class o_ extends mu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Rs("img");function l(){c(),mc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){c(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class l_ extends mu{constructor(e){super(e)}load(e,t,n,i){const s=new At,a=new o_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class bf extends Ef{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class u_ extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_c();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _c(){return performance.now()}function gc(r,e,t,n){const i=c_(n);switch(t){case rf:return r*e;case af:return r*e;case of:return r*e*2;case lf:return r*e/i.components*i.byteLength;case cu:return r*e/i.components*i.byteLength;case uf:return r*e*2/i.components*i.byteLength;case hu:return r*e*2/i.components*i.byteLength;case sf:return r*e*3/i.components*i.byteLength;case wn:return r*e*4/i.components*i.byteLength;case fu:return r*e*4/i.components*i.byteLength;case ma:case _a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ga:case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fl:case pl:return Math.max(r,16)*Math.max(e,8)/4;case hl:case dl:return Math.max(r,8)*Math.max(e,8)/2;case ml:case _l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xa:case Fl:case Il:return Math.ceil(r/4)*Math.ceil(e/4)*16;case cf:case Ll:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ul:case Nl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c_(r){switch(r){case ai:case ef:return{byteLength:1,components:1};case ws:case tf:case sr:return{byteLength:2,components:1};case lu:case uu:return{byteLength:2,components:4};case ir:case ou:case Jn:return{byteLength:4,components:1};case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=au);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function h_(r){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,h=u.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=r.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=r.SHORT;else if(u instanceof Uint32Array)p=r.UNSIGNED_INT;else if(u instanceof Int32Array)p=r.INT;else if(u instanceof Int8Array)p=r.BYTE;else if(u instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,u){const c=l.array,h=l.updateRanges;if(r.bindBuffer(u,o),h.length===0)r.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];r.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:a}}var f_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,U_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ug=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:f_,alphahash_pars_fragment:d_,alphamap_fragment:p_,alphamap_pars_fragment:m_,alphatest_fragment:__,alphatest_pars_fragment:g_,aomap_fragment:v_,aomap_pars_fragment:x_,batching_pars_vertex:S_,batching_vertex:E_,begin_vertex:M_,beginnormal_vertex:y_,bsdfs:D_,iridescence_fragment:T_,bumpmap_pars_fragment:A_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:R_,color_fragment:P_,color_pars_fragment:F_,color_pars_vertex:I_,color_vertex:L_,common:U_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:O_,displacementmap_pars_vertex:B_,displacementmap_vertex:z_,emissivemap_fragment:k_,emissivemap_pars_fragment:V_,colorspace_fragment:G_,colorspace_pars_fragment:H_,envmap_fragment:W_,envmap_common_pars_fragment:X_,envmap_pars_fragment:q_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:rg,envmap_vertex:Z_,fog_vertex:K_,fog_pars_vertex:j_,fog_fragment:J_,fog_pars_fragment:Q_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:sg,lights_toon_pars_fragment:ag,lights_phong_fragment:og,lights_phong_pars_fragment:lg,lights_physical_fragment:ug,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:fg,lights_fragment_end:dg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:gg,map_fragment:vg,map_pars_fragment:xg,map_particle_fragment:Sg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Dg,morphcolor_vertex:Tg,morphnormal_vertex:Ag,morphtarget_pars_vertex:bg,morphtarget_vertex:Cg,normal_fragment_begin:wg,normal_fragment_maps:Rg,normal_pars_fragment:Pg,normal_pars_vertex:Fg,normal_vertex:Ig,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Bg,opaque_fragment:zg,packing:kg,premultiplied_alpha_fragment:Vg,project_vertex:Gg,dithering_fragment:Hg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Kg,shadowmask_pars_fragment:jg,skinbase_vertex:Jg,skinning_pars_vertex:Qg,skinning_vertex:$g,skinnormal_vertex:e0,specularmap_fragment:t0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:r0,transmission_fragment:s0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:l0,uv_vertex:u0,worldpos_vertex:c0,background_vert:h0,background_frag:f0,backgroundCube_vert:d0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:_0,depth_vert:g0,depth_frag:v0,distanceRGBA_vert:x0,distanceRGBA_frag:S0,equirect_vert:E0,equirect_frag:M0,linedashed_vert:y0,linedashed_frag:D0,meshbasic_vert:T0,meshbasic_frag:A0,meshlambert_vert:b0,meshlambert_frag:C0,meshmatcap_vert:w0,meshmatcap_frag:R0,meshnormal_vert:P0,meshnormal_frag:F0,meshphong_vert:I0,meshphong_frag:L0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:O0,meshtoon_frag:B0,points_vert:z0,points_frag:k0,shadow_vert:V0,shadow_frag:G0,sprite_vert:H0,sprite_frag:W0},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Un={basic:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([oe.common,oe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Un.physical={uniforms:Gt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const oa={r:0,b:0,g:0},ki=new li,X0=new dt;function q0(r,e,t,n,i,s,a){const o=new Ye(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const A=g(y);A===null?f(o,l):A&&A.isColor&&(f(A,1),S=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===za)?(c===void 0&&(c=new Sn(new Us(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:jr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ki.copy(S.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(ki)),c.material.toneMapped=Ke.getTransfer(A.colorSpace)!==nt,(h!==A||d!==A.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,p=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Sn(new Jr(2,2),new cn({name:"BackgroundMaterial",uniforms:jr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function f(y,S){y.getRGB(oa,Sf(r)),n.buffers.color.setClear(oa.r,oa.g,oa.b,S,a)}function D(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m,dispose:D}}function Y0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(x,R,B,L,X){let K=!1;const N=h(L,B,R);s!==N&&(s=N,u(s.object)),K=p(x,L,B,X),K&&g(x,L,B,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(x,R,B,L),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return r.createVertexArray()}function u(x){return r.bindVertexArray(x)}function c(x){return r.deleteVertexArray(x)}function h(x,R,B){const L=B.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let K=X[R.id];K===void 0&&(K={},X[R.id]=K);let N=K[L];return N===void 0&&(N=d(l()),K[L]=N),N}function d(x){const R=[],B=[],L=[];for(let X=0;X<t;X++)R[X]=0,B[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:L,object:x,attributes:{},index:null}}function p(x,R,B,L){const X=s.attributes,K=R.attributes;let N=0;const Z=B.getAttributes();for(const z in Z)if(Z[z].location>=0){const re=X[z];let ce=K[z];if(ce===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;N++}return s.attributesNum!==N||s.index!==L}function g(x,R,B,L){const X={},K=R.attributes;let N=0;const Z=B.getAttributes();for(const z in Z)if(Z[z].location>=0){let re=K[z];re===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(re=x.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),X[z]=ce,N++}s.attributes=X,s.attributesNum=N,s.index=L}function _(){const x=s.newAttributes;for(let R=0,B=x.length;R<B;R++)x[R]=0}function m(x){f(x,0)}function f(x,R){const B=s.newAttributes,L=s.enabledAttributes,X=s.attributeDivisors;B[x]=1,L[x]===0&&(r.enableVertexAttribArray(x),L[x]=1),X[x]!==R&&(r.vertexAttribDivisor(x,R),X[x]=R)}function D(){const x=s.newAttributes,R=s.enabledAttributes;for(let B=0,L=R.length;B<L;B++)R[B]!==x[B]&&(r.disableVertexAttribArray(B),R[B]=0)}function y(x,R,B,L,X,K,N){N===!0?r.vertexAttribIPointer(x,R,B,X,K):r.vertexAttribPointer(x,R,B,L,X,K)}function S(x,R,B,L){_();const X=L.attributes,K=B.getAttributes(),N=R.defaultAttributeValues;for(const Z in K){const z=K[Z];if(z.location>=0){let O=X[Z];if(O===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(O=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(O=x.instanceColor)),O!==void 0){const re=O.normalized,ce=O.itemSize,ye=e.get(O);if(ye===void 0)continue;const Ge=ye.buffer,q=ye.type,J=ye.bytesPerElement,me=q===r.INT||q===r.UNSIGNED_INT||O.gpuType===ou;if(O.isInterleavedBufferAttribute){const ie=O.data,be=ie.stride,we=O.offset;if(ie.isInstancedInterleavedBuffer){for(let Le=0;Le<z.locationSize;Le++)f(z.location+Le,ie.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Le=0;Le<z.locationSize;Le++)m(z.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let Le=0;Le<z.locationSize;Le++)y(z.location+Le,ce/z.locationSize,q,re,be*J,(we+ce/z.locationSize*Le)*J,me)}else{if(O.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)f(z.location+ie,O.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ie=0;ie<z.locationSize;ie++)m(z.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ie=0;ie<z.locationSize;ie++)y(z.location+ie,ce/z.locationSize,q,re,ce*J,ce/z.locationSize*ie*J,me)}}else if(N!==void 0){const re=N[Z];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(z.location,re);break;case 3:r.vertexAttrib3fv(z.location,re);break;case 4:r.vertexAttrib4fv(z.location,re);break;default:r.vertexAttrib1fv(z.location,re)}}}}D()}function A(){C();for(const x in n){const R=n[x];for(const B in R){const L=R[B];for(const X in L)c(L[X].object),delete L[X];delete R[B]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const B in R){const L=R[B];for(const X in L)c(L[X].object),delete L[X];delete R[B]}delete n[x.id]}function T(x){for(const R in n){const B=n[R];if(B[x.id]===void 0)continue;const L=B[x.id];for(const X in L)c(L[X].object),delete L[X];delete B[x.id]}}function C(){v(),a=!0,s!==i&&(s=i,u(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:D}}function Z0(r,e,t){let n;function i(u){n=u}function s(u,c){r.drawArrays(n,u,c),t.update(c,n,1)}function a(u,c,h){h!==0&&(r.drawArraysInstanced(n,u,c,h),t.update(c,n,h))}function o(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];t.update(p,n,1)}function l(u,c,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)a(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,c,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function K0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==wn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ai&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Jn&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:D,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:A,maxSamples:b}}function j0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new gi,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?c(null):u();else{const D=s?0:n,y=D*4;let S=f.clippingState||null;l.value=S,S=c(g,d,y,p);for(let A=0;A!==y;++A)S[A]=t[A];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=D}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,D=d.matrixWorldInverse;o.getNormalMatrix(D),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,S=p;y!==_;++y,S+=4)a.copy(h[y]).applyMatrix4(D,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function J0(r){let e=new WeakMap;function t(a,o){return o===ol?a.mapping=Xr:o===ll&&(a.mapping=qr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ol||o===ll)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Jm(l.height);return u.fromEquirectangularTexture(r,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Rr=4,vc=[.125,.215,.35,.446,.526,.582],qi=20,bo=new bf,xc=new Ye;let Co=null,wo=0,Ro=0,Po=!1;const Hi=(1+Math.sqrt(5))/2,Tr=1/Hi,Sc=[new V(-Hi,Tr,0),new V(Hi,Tr,0),new V(-Tr,0,Hi),new V(Tr,0,Hi),new V(0,Hi,-Tr),new V(0,Hi,Tr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Co=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,wo,Ro),this._renderer.xr.enabled=Po,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:sr,format:wn,colorSpace:Kr,depthBuffer:!1},i=Mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q0(s)),this._blurMaterial=$0(s,e,t)}return i}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,i){const o=new rn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(xc),c.toneMapping=Ai,c.autoClear=!1;const p=new gf({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Sn(new Us,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(xc),_=!0);for(let f=0;f<6;f++){const D=f%3;D===0?(o.up.set(0,l[f],0),o.lookAt(u[f],0,0)):D===1?(o.up.set(0,0,l[f]),o.lookAt(0,u[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,u[f]));const y=this._cubeSize;la(i,D*y,f>2?y:0,y,y),c.setRenderTarget(i),_&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xr||e.mapping===qr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sc[(i-s-1)%Sc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Sn(this._lodPlanes[i],u),d=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qi-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const f=[];let D=0;for(let T=0;T<qi;++T){const C=T/_,v=Math.exp(-C*C/2);f.push(v),T===0?D+=v:T<m&&(D+=2*v)}for(let T=0;T<f.length;T++)f[T]=f[T]/D;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const S=this._sizeLods[i],A=3*S*(i>y-Rr?i-y+Rr:0),b=4*(this._cubeSize-S);la(t,A,b,3*S,2*S),l.setRenderTarget(t),l.render(h,bo)}}function Q0(r){const e=[],t=[],n=[];let i=r;const s=r-Rr+1+vc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Rr?l=vc[a-r+Rr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,f=1,D=new Float32Array(_*g*p),y=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,C=b>2?0:-1,v=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];D.set(v,_*g*b),y.set(d,m*g*b);const x=[b,b,b,b,b,b];S.set(x,f*g*b)}const A=new ui;A.setAttribute("position",new Pn(D,_)),A.setAttribute("uv",new Pn(y,m)),A.setAttribute("faceIndex",new Pn(S,f)),e.push(A),i>Rr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mc(r,e,t){const n=new oi(r,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $0(r,e,t){const n=new Float32Array(qi),i=new V(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function yc(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Dc(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ev(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===ol||l===ll,c=l===Xr||l===qr;if(u||c){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ec(r)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&i(p)?(t===null&&(t=new Ec(r)),h=u?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function tv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nv(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER)}function u(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const D=p.array;_=p.version;for(let y=0,S=D.length;y<S;y+=3){const A=D[y+0],b=D[y+1],T=D[y+2];d.push(A,b,b,T,T,A)}}else if(g!==void 0){const D=g.array;_=g.version;for(let y=0,S=D.length/3-1;y<S;y+=3){const A=y+0,b=y+1,T=y+2;d.push(A,b,b,T,T,A)}}else return;const m=new(ff(d)?xf:vf)(d,1);m.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function iv(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*a),t.update(p,n,1)}function u(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*a,g),t.update(p,n,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let D=0;D<g;D++)f+=p[D]*_[D];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function rv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sv(r,e,t){const n=new WeakMap,i=new ft;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],D=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let S=o.attributes.position.count*y,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*A*4*h),T=new pf(b,S,A,h);T.type=Jn,T.needsUpdate=!0;const C=y*4;for(let x=0;x<h;x++){const R=m[x],B=f[x],L=D[x],X=S*A*4*x;for(let K=0;K<R.count;K++){const N=K*C;p===!0&&(i.fromBufferAttribute(R,K),b[X+N+0]=i.x,b[X+N+1]=i.y,b[X+N+2]=i.z,b[X+N+3]=0),g===!0&&(i.fromBufferAttribute(B,K),b[X+N+4]=i.x,b[X+N+5]=i.y,b[X+N+6]=i.z,b[X+N+7]=0),_===!0&&(i.fromBufferAttribute(L,K),b[X+N+8]=i.x,b[X+N+9]=i.y,b[X+N+10]=i.z,b[X+N+11]=L.itemSize===4?i.w:1)}}d={count:h,texture:T,size:new ke(S,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",u)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function av(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);if(i.get(h)!==u&&(e.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return h}function a(){i=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const Rf=new At,Tc=new Af(1,1),Pf=new pf,Ff=new Um,If=new Mf,Ac=[],bc=[],Cc=new Float32Array(16),wc=new Float32Array(9),Rc=new Float32Array(4);function $r(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ac[i];if(s===void 0&&(s=new Float32Array(i),Ac[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ka(r,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ov(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function hv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Rc.set(n),r.uniformMatrix2fv(this.addr,!1,Rc),yt(t,n)}}function fv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;wc.set(n),r.uniformMatrix3fv(this.addr,!1,wc),yt(t,n)}}function dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Cc.set(n),r.uniformMatrix4fv(this.addr,!1,Cc),yt(t,n)}}function pv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function vv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function Mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Tc.compareFunction=hf,s=Tc):s=Rf,t.setTexture2D(e||s,i)}function yv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ff,i)}function Dv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||If,i)}function Tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pf,i)}function Av(r){switch(r){case 5126:return ov;case 35664:return lv;case 35665:return uv;case 35666:return cv;case 35674:return hv;case 35675:return fv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return _v;case 35669:case 35673:return gv;case 5125:return vv;case 36294:return xv;case 36295:return Sv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Tv}}function bv(r,e){r.uniform1fv(this.addr,e)}function Cv(r,e){const t=$r(e,this.size,2);r.uniform2fv(this.addr,t)}function wv(r,e){const t=$r(e,this.size,3);r.uniform3fv(this.addr,t)}function Rv(r,e){const t=$r(e,this.size,4);r.uniform4fv(this.addr,t)}function Pv(r,e){const t=$r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fv(r,e){const t=$r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Iv(r,e){const t=$r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Lv(r,e){r.uniform1iv(this.addr,e)}function Uv(r,e){r.uniform2iv(this.addr,e)}function Nv(r,e){r.uniform3iv(this.addr,e)}function Ov(r,e){r.uniform4iv(this.addr,e)}function Bv(r,e){r.uniform1uiv(this.addr,e)}function zv(r,e){r.uniform2uiv(this.addr,e)}function kv(r,e){r.uniform3uiv(this.addr,e)}function Vv(r,e){r.uniform4uiv(this.addr,e)}function Gv(r,e,t){const n=this.cache,i=e.length,s=ka(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Rf,s[a])}function Hv(r,e,t){const n=this.cache,i=e.length,s=ka(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ff,s[a])}function Wv(r,e,t){const n=this.cache,i=e.length,s=ka(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||If,s[a])}function Xv(r,e,t){const n=this.cache,i=e.length,s=ka(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Pf,s[a])}function qv(r){switch(r){case 5126:return bv;case 35664:return Cv;case 35665:return wv;case 35666:return Rv;case 35674:return Pv;case 35675:return Fv;case 35676:return Iv;case 5124:case 35670:return Lv;case 35667:case 35671:return Uv;case 35668:case 35672:return Nv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return zv;case 36295:return kv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}class Yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Av(t.type)}}class Zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qv(t.type)}}class Kv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function Pc(r,e){r.seq.push(e),r.map[e.id]=e}function jv(r,e,t){const n=r.name,i=n.length;for(Fo.lastIndex=0;;){const s=Fo.exec(n),a=Fo.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===i){Pc(t,u===void 0?new Yv(o,r,e):new Zv(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Kv(o),Pc(t,h)),t=h}}}class Sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);jv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Jv=37297;let Qv=0;function $v(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ic=new Ue;function ex(r){Ke._getMatrix(Ic,Ke.workingColorSpace,r);const e=`mat3( ${Ic.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case Ra:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Lc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+$v(r.getShaderSource(e),a)}else return i}function tx(r,e){const t=ex(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nx(r,e){let t;switch(e){case am:t="Linear";break;case om:t="Reinhard";break;case lm:t="Cineon";break;case um:t="ACESFilmic";break;case hm:t="AgX";break;case fm:t="Neutral";break;case cm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ua=new V;function ix(){Ke.getLuminanceCoefficients(ua);const r=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function sx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ps(r){return r!==""}function Uc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(r){return r.replace(ox,ux)}const lx=new Map;function ux(r,e){let t=Oe[e];if(t===void 0){const n=lx.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(r){return r.replace(cx,hx)}function hx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xr:case qr:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function mx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case rm:e="ENVMAP_BLENDING_MIX";break;case sm:e="ENVMAP_BLENDING_ADD";break}return e}function _x(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fx(t),u=dx(t),c=px(t),h=mx(t),d=_x(t),p=rx(t),g=sx(s),_=i.createProgram();let m,f,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),f.length>0&&(f+=`
`)):(m=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),f=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Ai?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),ix(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),a=zl(a),a=Uc(a,t),a=Nc(a,t),o=zl(o),o=Uc(o,t),o=Nc(o,t),a=Oc(a),o=Oc(o),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=D+m+a,S=D+f+o,A=Fc(i,i.VERTEX_SHADER,y),b=Fc(i,i.FRAGMENT_SHADER,S);i.attachShader(_,A),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(A).trim(),X=i.getShaderInfoLog(b).trim();let K=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,b);else{const Z=Lc(i,A,"vertex"),z=Lc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+Z+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||X==="")&&(N=!1);N&&(R.diagnostics={runnable:K,programLog:B,vertexShader:{log:L,prefix:m},fragmentShader:{log:X,prefix:f}})}i.deleteShader(A),i.deleteShader(b),C=new Sa(i,_),v=ax(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Jv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let vx=0;class xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sx(e),t.set(e,n)),n}}class Sx{constructor(e){this.id=vx++,this.code=e,this.usedTimes=0}}function Ex(r,e,t,n,i,s,a){const o=new mf,l=new xx,u=new Set,c=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return u.add(v),v===0?"uv":`uv${v}`}function m(v,x,R,B,L){const X=B.fog,K=L.geometry,N=v.isMeshStandardMaterial?B.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||N),z=Z&&Z.mapping===za?Z.image.height:null,O=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ce=re!==void 0?re.length:0;let ye=0;K.morphAttributes.position!==void 0&&(ye=1),K.morphAttributes.normal!==void 0&&(ye=2),K.morphAttributes.color!==void 0&&(ye=3);let Ge,q,J,me;if(O){const _e=Un[O];Ge=_e.vertexShader,q=_e.fragmentShader}else Ge=v.vertexShader,q=v.fragmentShader,l.update(v),J=l.getVertexShaderID(v),me=l.getFragmentShaderID(v);const ie=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),we=L.isInstancedMesh===!0,Le=L.isBatchedMesh===!0,je=!!v.map,ze=!!v.matcap,at=!!Z,P=!!v.aoMap,Rt=!!v.lightMap,Ne=!!v.bumpMap,G=!!v.normalMap,Me=!!v.displacementMap,et=!!v.emissiveMap,Se=!!v.metalnessMap,w=!!v.roughnessMap,E=v.anisotropy>0,k=v.clearcoat>0,Q=v.dispersion>0,ee=v.iridescence>0,j=v.sheen>0,le=v.transmission>0,se=E&&!!v.anisotropyMap,he=k&&!!v.clearcoatMap,He=k&&!!v.clearcoatNormalMap,ne=k&&!!v.clearcoatRoughnessMap,pe=ee&&!!v.iridescenceMap,Te=ee&&!!v.iridescenceThicknessMap,Ce=j&&!!v.sheenColorMap,ge=j&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,Pe=!!v.specularColorMap,Je=!!v.specularIntensityMap,F=le&&!!v.transmissionMap,ae=le&&!!v.thicknessMap,Y=!!v.gradientMap,$=!!v.alphaMap,fe=v.alphaTest>0,ue=!!v.alphaHash,Fe=!!v.extensions;let ot=Ai;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ot=r.toneMapping);const Et={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:q,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Le,batchingColor:Le&&L._colorsTexture!==null,instancing:we,instancingColor:we&&L.instanceColor!==null,instancingMorph:we&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Kr,alphaToCoverage:!!v.alphaToCoverage,map:je,matcap:ze,envMap:at,envMapMode:at&&Z.mapping,envMapCubeUVHeight:z,aoMap:P,lightMap:Rt,bumpMap:Ne,normalMap:G,displacementMap:d&&Me,emissiveMap:et,normalMapObjectSpace:G&&v.normalMapType===gm,normalMapTangentSpace:G&&v.normalMapType===_m,metalnessMap:Se,roughnessMap:w,anisotropy:E,anisotropyMap:se,clearcoat:k,clearcoatMap:he,clearcoatNormalMap:He,clearcoatRoughnessMap:ne,dispersion:Q,iridescence:ee,iridescenceMap:pe,iridescenceThicknessMap:Te,sheen:j,sheenColorMap:Ce,sheenRoughnessMap:ge,specularMap:Ve,specularColorMap:Pe,specularIntensityMap:Je,transmission:le,transmissionMap:F,thicknessMap:ae,gradientMap:Y,opaque:v.transparent===!1&&v.blending===Ur&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:fe,alphaHash:ue,combine:v.combine,mapUv:je&&_(v.map.channel),aoMapUv:P&&_(v.aoMap.channel),lightMapUv:Rt&&_(v.lightMap.channel),bumpMapUv:Ne&&_(v.bumpMap.channel),normalMapUv:G&&_(v.normalMap.channel),displacementMapUv:Me&&_(v.displacementMap.channel),emissiveMapUv:et&&_(v.emissiveMap.channel),metalnessMapUv:Se&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:se&&_(v.anisotropyMap.channel),clearcoatMapUv:he&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(v.sheenRoughnessMap.channel),specularMapUv:Ve&&_(v.specularMap.channel),specularColorMapUv:Pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Je&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:ae&&_(v.thicknessMap.channel),alphaMapUv:$&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(G||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!K.attributes.uv&&(je||$),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:L.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ye,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:je&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:et&&v.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jn,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Fe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&v.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function f(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)x.push(R),x.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(D(x,v),y(x,v),x.push(r.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function D(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function y(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){const x=g[v.type];let R;if(x){const B=Un[x];R=pu.clone(B.uniforms)}else R=v.uniforms;return R}function A(v,x){let R;for(let B=0,L=c.length;B<L;B++){const X=c[B];if(X.cacheKey===x){R=X,++R.usedTimes;break}}return R===void 0&&(R=new gx(r,x,v,s),c.push(R)),R}function b(v){if(--v.usedTimes===0){const x=c.indexOf(v);c[x]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:A,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function Mx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function yx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function u(h,d){t.length>1&&t.sort(h||yx),n.length>1&&n.sort(d||zc),i.length>1&&i.sort(d||zc)}function c(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:c,sort:u}}function Dx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new kc,r.set(n,[a])):i>=s.length?(a=new kc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Tx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ye};break;case"SpotLight":t={position:new V,direction:new V,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function Ax(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bx=0;function Cx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wx(r){const e=new Tx,t=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new V);const i=new V,s=new dt,a=new dt;function o(u){let c=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,D=0,y=0,S=0,A=0,b=0,T=0;u.sort(Cx);for(let v=0,x=u.length;v<x;v++){const R=u[v],B=R.color,L=R.intensity,X=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=B.r*L,h+=B.g*L,d+=B.b*L;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],L);T++}else if(R.isDirectionalLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=R.shadow.matrix,D++}n.directional[p]=N,p++}else if(R.isSpotLight){const N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(B).multiplyScalar(L),N.distance=X,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[_]=N;const Z=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=K,S++}_++}else if(R.isRectAreaLight){const N=e.get(R);N.color.copy(B).multiplyScalar(L),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=N,m++}else if(R.isPointLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const Z=R.shadow,z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=N,g++}else if(R.isHemisphereLight){const N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(L),N.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[f]=N,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==D||C.numPointShadows!==y||C.numSpotShadows!==S||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=D,C.numPointShadows=y,C.numSpotShadows=S,C.numSpotMaps=A,C.numLightProbes=T,n.version=bx++)}function l(u,c){let h=0,d=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let f=0,D=u.length;f<D;f++){const y=u[f];if(y.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(y.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Vc(r){const e=new wx(r),t=[],n=[];function i(c){u.camera=c,t.length=0,n.length=0}function s(c){t.push(c)}function a(c){n.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Rx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Vc(r),e.set(i,[o])):s>=a.length?(o=new Vc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ix(r,e,t){let n=new Tf;const i=new ke,s=new ke,a=new ft,o=new i_({depthPacking:mm}),l=new r_,u={},c=t.maxTextureSize,h={[si]:Wt,[Wt]:si,[jn]:jn},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Px,fragmentShader:Fx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ui;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Sn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let f=this.type;this.render=function(b,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const v=r.getRenderTarget(),x=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),B=r.state;B.setBlending(ei),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const L=f!==Yn&&this.type===Yn,X=f===Yn&&this.type!==Yn;for(let K=0,N=b.length;K<N;K++){const Z=b[K],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const O=z.getFrameExtents();if(i.multiply(O),s.copy(z.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/O.x),i.x=s.x*O.x,z.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/O.y),i.y=s.y*O.y,z.mapSize.y=s.y)),z.map===null||L===!0||X===!0){const ce=this.type!==Yn?{minFilter:Rn,magFilter:Rn}:{};z.map!==null&&z.map.dispose(),z.map=new oi(i.x,i.y,ce),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const re=z.getViewportCount();for(let ce=0;ce<re;ce++){const ye=z.getViewport(ce);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),B.viewport(a),z.updateMatrices(Z,ce),n=z.getFrustum(),S(T,C,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Yn&&D(z,C),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(v,x,R)};function D(b,T){const C=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new oi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,C,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,C,p,_,null)}function y(b,T,C,v){let x=null;const R=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=x.uuid,L=T.uuid;let X=u[B];X===void 0&&(X={},u[B]=X);let K=X[L];K===void 0&&(K=x.clone(),X[L]=K,T.addEventListener("dispose",A)),x=K}if(x.visible=T.visible,x.wireframe=T.wireframe,v===Yn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=r.properties.get(x);B.light=C}return x}function S(b,T,C,v,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Yn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const L=e.update(b),X=b.material;if(Array.isArray(X)){const K=L.groups;for(let N=0,Z=K.length;N<Z;N++){const z=K[N],O=X[z.materialIndex];if(O&&O.visible){const re=y(b,O,v,x);b.onBeforeShadow(r,b,T,C,L,re,z),r.renderBufferDirect(C,null,L,re,b,z),b.onAfterShadow(r,b,T,C,L,re,z)}}}else if(X.visible){const K=y(b,X,v,x);b.onBeforeShadow(r,b,T,C,L,K,null),r.renderBufferDirect(C,null,L,K,b,null),b.onAfterShadow(r,b,T,C,L,K,null)}}const B=b.children;for(let L=0,X=B.length;L<X;L++)S(B[L],T,C,v,x)}function A(b){b.target.removeEventListener("dispose",A);for(const C in u){const v=u[C],x=b.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const Lx={[el]:tl,[nl]:sl,[il]:al,[Wr]:rl,[tl]:el,[sl]:nl,[al]:il,[rl]:Wr};function Ux(r,e){function t(){let F=!1;const ae=new ft;let Y=null;const $=new ft(0,0,0,0);return{setMask:function(fe){Y!==fe&&!F&&(r.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){F=fe},setClear:function(fe,ue,Fe,ot,Et){Et===!0&&(fe*=ot,ue*=ot,Fe*=ot),ae.set(fe,ue,Fe,ot),$.equals(ae)===!1&&(r.clearColor(fe,ue,Fe,ot),$.copy(ae))},reset:function(){F=!1,Y=null,$.set(-1,0,0,0)}}}function n(){let F=!1,ae=!1,Y=null,$=null,fe=null;return{setReversed:function(ue){if(ae!==ue){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const ot=fe;fe=null,this.setClear(ot)}ae=ue},getReversed:function(){return ae},setTest:function(ue){ue?ie(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(ue){Y!==ue&&!F&&(r.depthMask(ue),Y=ue)},setFunc:function(ue){if(ae&&(ue=Lx[ue]),$!==ue){switch(ue){case el:r.depthFunc(r.NEVER);break;case tl:r.depthFunc(r.ALWAYS);break;case nl:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case il:r.depthFunc(r.EQUAL);break;case rl:r.depthFunc(r.GEQUAL);break;case sl:r.depthFunc(r.GREATER);break;case al:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=ue}},setLocked:function(ue){F=ue},setClear:function(ue){fe!==ue&&(ae&&(ue=1-ue),r.clearDepth(ue),fe=ue)},reset:function(){F=!1,Y=null,$=null,fe=null,ae=!1}}}function i(){let F=!1,ae=null,Y=null,$=null,fe=null,ue=null,Fe=null,ot=null,Et=null;return{setTest:function(_e){F||(_e?ie(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(_e){ae!==_e&&!F&&(r.stencilMask(_e),ae=_e)},setFunc:function(_e,Ee,Be){(Y!==_e||$!==Ee||fe!==Be)&&(r.stencilFunc(_e,Ee,Be),Y=_e,$=Ee,fe=Be)},setOp:function(_e,Ee,Be){(ue!==_e||Fe!==Ee||ot!==Be)&&(r.stencilOp(_e,Ee,Be),ue=_e,Fe=Ee,ot=Be)},setLocked:function(_e){F=_e},setClear:function(_e){Et!==_e&&(r.clearStencil(_e),Et=_e)},reset:function(){F=!1,ae=null,Y=null,$=null,fe=null,ue=null,Fe=null,ot=null,Et=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,D=null,y=null,S=null,A=null,b=null,T=new Ye(0,0,0),C=0,v=!1,x=null,R=null,B=null,L=null,X=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Z=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=Z>=2);let O=null,re={};const ce=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),Ge=new ft().fromArray(ce),q=new ft().fromArray(ye);function J(F,ae,Y,$){const fe=new Uint8Array(4),ue=r.createTexture();r.bindTexture(F,ue),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<Y;Fe++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(ae+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return ue}const me={};me[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(r.DEPTH_TEST),a.setFunc(Wr),Ne(!1),G(Wu),ie(r.CULL_FACE),P(ei);function ie(F){c[F]!==!0&&(r.enable(F),c[F]=!0)}function be(F){c[F]!==!1&&(r.disable(F),c[F]=!1)}function we(F,ae){return h[F]!==ae?(r.bindFramebuffer(F,ae),h[F]=ae,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ae),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(F,ae){let Y=p,$=!1;if(F){Y=d.get(ae),Y===void 0&&(Y=[],d.set(ae,Y));const fe=F.textures;if(Y.length!==fe.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,Fe=fe.length;ue<Fe;ue++)Y[ue]=r.COLOR_ATTACHMENT0+ue;Y.length=fe.length,$=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,$=!0);$&&r.drawBuffers(Y)}function je(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const ze={[Xi]:r.FUNC_ADD,[Vp]:r.FUNC_SUBTRACT,[Gp]:r.FUNC_REVERSE_SUBTRACT};ze[Hp]=r.MIN,ze[Wp]=r.MAX;const at={[Xp]:r.ZERO,[qp]:r.ONE,[Yp]:r.SRC_COLOR,[Qo]:r.SRC_ALPHA,[$p]:r.SRC_ALPHA_SATURATE,[Jp]:r.DST_COLOR,[Kp]:r.DST_ALPHA,[Zp]:r.ONE_MINUS_SRC_COLOR,[$o]:r.ONE_MINUS_SRC_ALPHA,[Qp]:r.ONE_MINUS_DST_COLOR,[jp]:r.ONE_MINUS_DST_ALPHA,[em]:r.CONSTANT_COLOR,[tm]:r.ONE_MINUS_CONSTANT_COLOR,[nm]:r.CONSTANT_ALPHA,[im]:r.ONE_MINUS_CONSTANT_ALPHA};function P(F,ae,Y,$,fe,ue,Fe,ot,Et,_e){if(F===ei){_===!0&&(be(r.BLEND),_=!1);return}if(_===!1&&(ie(r.BLEND),_=!0),F!==kp){if(F!==m||_e!==v){if((f!==Xi||S!==Xi)&&(r.blendEquation(r.FUNC_ADD),f=Xi,S=Xi),_e)switch(F){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xu:r.blendFunc(r.ONE,r.ONE);break;case qu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}D=null,y=null,A=null,b=null,T.set(0,0,0),C=0,m=F,v=_e}return}fe=fe||ae,ue=ue||Y,Fe=Fe||$,(ae!==f||fe!==S)&&(r.blendEquationSeparate(ze[ae],ze[fe]),f=ae,S=fe),(Y!==D||$!==y||ue!==A||Fe!==b)&&(r.blendFuncSeparate(at[Y],at[$],at[ue],at[Fe]),D=Y,y=$,A=ue,b=Fe),(ot.equals(T)===!1||Et!==C)&&(r.blendColor(ot.r,ot.g,ot.b,Et),T.copy(ot),C=Et),m=F,v=!1}function Rt(F,ae){F.side===jn?be(r.CULL_FACE):ie(r.CULL_FACE);let Y=F.side===Wt;ae&&(Y=!Y),Ne(Y),F.blending===Ur&&F.transparent===!1?P(ei):P(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const $=F.stencilWrite;o.setTest($),$&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),et(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(F){x!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),x=F)}function G(F){F!==Op?(ie(r.CULL_FACE),F!==R&&(F===Wu?r.cullFace(r.BACK):F===Bp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),R=F}function Me(F){F!==B&&(N&&r.lineWidth(F),B=F)}function et(F,ae,Y){F?(ie(r.POLYGON_OFFSET_FILL),(L!==ae||X!==Y)&&(r.polygonOffset(ae,Y),L=ae,X=Y)):be(r.POLYGON_OFFSET_FILL)}function Se(F){F?ie(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function w(F){F===void 0&&(F=r.TEXTURE0+K-1),O!==F&&(r.activeTexture(F),O=F)}function E(F,ae,Y){Y===void 0&&(O===null?Y=r.TEXTURE0+K-1:Y=O);let $=re[Y];$===void 0&&($={type:void 0,texture:void 0},re[Y]=$),($.type!==F||$.texture!==ae)&&(O!==Y&&(r.activeTexture(Y),O=Y),r.bindTexture(F,ae||me[F]),$.type=F,$.texture=ae)}function k(){const F=re[O];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(F){Ge.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ge.copy(F))}function ge(F){q.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function Ve(F,ae){let Y=u.get(ae);Y===void 0&&(Y=new WeakMap,u.set(ae,Y));let $=Y.get(F);$===void 0&&($=r.getUniformBlockIndex(ae,F.name),Y.set(F,$))}function Pe(F,ae){const $=u.get(ae).get(F);l.get(ae)!==$&&(r.uniformBlockBinding(ae,$,F.__bindingPointIndex),l.set(ae,$))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},O=null,re={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,D=null,y=null,S=null,A=null,b=null,T=new Ye(0,0,0),C=0,v=!1,x=null,R=null,B=null,L=null,X=null,Ge.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:be,bindFramebuffer:we,drawBuffers:Le,useProgram:je,setBlending:P,setMaterial:Rt,setFlipSided:Ne,setCullFace:G,setLineWidth:Me,setPolygonOffset:et,setScissorTest:Se,activeTexture:w,bindTexture:E,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:pe,texImage3D:Te,updateUBOMapping:Ve,uniformBlockBinding:Pe,texStorage2D:He,texStorage3D:ne,texSubImage2D:j,texSubImage3D:le,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:Ce,viewport:ge,reset:Je}}function Nx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return p?new OffscreenCanvas(w,E):Rs("canvas")}function _(w,E,k){let Q=1;const ee=Se(w);if((ee.width>k||ee.height>k)&&(Q=k/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(Q*ee.width),le=Math.floor(Q*ee.height);h===void 0&&(h=g(j,le));const se=E?g(j,le):h;return se.width=j,se.height=le,se.getContext("2d").drawImage(w,0,0,j,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+le+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){r.generateMipmap(w)}function D(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(w,E,k,Q,ee=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=E;if(E===r.RED&&(k===r.FLOAT&&(j=r.R32F),k===r.HALF_FLOAT&&(j=r.R16F),k===r.UNSIGNED_BYTE&&(j=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.R8UI),k===r.UNSIGNED_SHORT&&(j=r.R16UI),k===r.UNSIGNED_INT&&(j=r.R32UI),k===r.BYTE&&(j=r.R8I),k===r.SHORT&&(j=r.R16I),k===r.INT&&(j=r.R32I)),E===r.RG&&(k===r.FLOAT&&(j=r.RG32F),k===r.HALF_FLOAT&&(j=r.RG16F),k===r.UNSIGNED_BYTE&&(j=r.RG8)),E===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RG8UI),k===r.UNSIGNED_SHORT&&(j=r.RG16UI),k===r.UNSIGNED_INT&&(j=r.RG32UI),k===r.BYTE&&(j=r.RG8I),k===r.SHORT&&(j=r.RG16I),k===r.INT&&(j=r.RG32I)),E===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RGB8UI),k===r.UNSIGNED_SHORT&&(j=r.RGB16UI),k===r.UNSIGNED_INT&&(j=r.RGB32UI),k===r.BYTE&&(j=r.RGB8I),k===r.SHORT&&(j=r.RGB16I),k===r.INT&&(j=r.RGB32I)),E===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),k===r.UNSIGNED_INT&&(j=r.RGBA32UI),k===r.BYTE&&(j=r.RGBA8I),k===r.SHORT&&(j=r.RGBA16I),k===r.INT&&(j=r.RGBA32I)),E===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),E===r.RGBA){const le=ee?Ra:Ke.getTransfer(Q);k===r.FLOAT&&(j=r.RGBA32F),k===r.HALF_FLOAT&&(j=r.RGBA16F),k===r.UNSIGNED_BYTE&&(j=le===nt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(w,E){let k;return w?E===null||E===ir||E===Yr?k=r.DEPTH24_STENCIL8:E===Jn?k=r.DEPTH32F_STENCIL8:E===ws&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ir||E===Yr?k=r.DEPTH_COMPONENT24:E===Jn?k=r.DEPTH_COMPONENT32F:E===ws&&(k=r.DEPTH_COMPONENT16),k}function A(w,E){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rn&&w.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function b(w){const E=w.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&c.delete(E)}function T(w){const E=w.target;E.removeEventListener("dispose",T),x(E)}function C(w){const E=n.get(w);if(E.__webglInit===void 0)return;const k=w.source,Q=d.get(k);if(Q){const ee=Q[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(w),Object.keys(Q).length===0&&d.delete(k)}n.remove(w)}function v(w){const E=n.get(w);r.deleteTexture(E.__webglTexture);const k=w.source,Q=d.get(k);delete Q[E.__cacheKey],a.memory.textures--}function x(w){const E=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ee=0;ee<E.__webglFramebuffer[Q].length;ee++)r.deleteFramebuffer(E.__webglFramebuffer[Q][ee]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=w.textures;for(let Q=0,ee=k.length;Q<ee;Q++){const j=n.get(k[Q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(k[Q])}n.remove(w)}let R=0;function B(){R=0}function L(){const w=R;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),R+=1,w}function X(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function K(w,E){const k=n.get(w);if(w.isVideoTexture&&Me(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,w,E);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function N(w,E){const k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function Z(w,E){const k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function z(w,E){const k=n.get(w);if(w.version>0&&k.__version!==w.version){J(k,w,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const O={[ul]:r.REPEAT,[Zi]:r.CLAMP_TO_EDGE,[cl]:r.MIRRORED_REPEAT},re={[Rn]:r.NEAREST,[dm]:r.NEAREST_MIPMAP_NEAREST,[ks]:r.NEAREST_MIPMAP_LINEAR,[xn]:r.LINEAR,[to]:r.LINEAR_MIPMAP_NEAREST,[Ki]:r.LINEAR_MIPMAP_LINEAR},ce={[vm]:r.NEVER,[Dm]:r.ALWAYS,[xm]:r.LESS,[hf]:r.LEQUAL,[Sm]:r.EQUAL,[ym]:r.GEQUAL,[Em]:r.GREATER,[Mm]:r.NOTEQUAL};function ye(w,E){if(E.type===Jn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xn||E.magFilter===to||E.magFilter===ks||E.magFilter===Ki||E.minFilter===xn||E.minFilter===to||E.minFilter===ks||E.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,O[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,O[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,O[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,re[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rn||E.minFilter!==ks&&E.minFilter!==Ki||E.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ge(w,E){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",b));const Q=E.source;let ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));const j=X(E);if(j!==w.__cacheKey){ee[j]===void 0&&(ee[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[j].usedTimes++;const le=ee[w.__cacheKey];le!==void 0&&(ee[w.__cacheKey].usedTimes--,le.usedTimes===0&&v(E)),w.__cacheKey=j,w.__webglTexture=ee[j].texture}return k}function q(w,E,k){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const ee=Ge(w,E),j=E.source;t.bindTexture(Q,w.__webglTexture,r.TEXTURE0+k);const le=n.get(j);if(j.version!==le.__version||ee===!0){t.activeTexture(r.TEXTURE0+k);const se=Ke.getPrimaries(Ke.workingColorSpace),he=E.colorSpace===vi?null:Ke.getPrimaries(E.colorSpace),He=E.colorSpace===vi||se===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ne=_(E.image,!1,i.maxTextureSize);ne=et(E,ne);const pe=s.convert(E.format,E.colorSpace),Te=s.convert(E.type);let Ce=y(E.internalFormat,pe,Te,E.colorSpace,E.isVideoTexture);ye(Q,E);let ge;const Ve=E.mipmaps,Pe=E.isVideoTexture!==!0,Je=le.__version===void 0||ee===!0,F=j.dataReady,ae=A(E,ne);if(E.isDepthTexture)Ce=S(E.format===Zr,E.type),Je&&(Pe?t.texStorage2D(r.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Ce,ne.width,ne.height,0,pe,Te,null));else if(E.isDataTexture)if(Ve.length>0){Pe&&Je&&t.texStorage2D(r.TEXTURE_2D,ae,Ce,Ve[0].width,Ve[0].height);for(let Y=0,$=Ve.length;Y<$;Y++)ge=Ve[Y],Pe?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ge.width,ge.height,pe,Te,ge.data):t.texImage2D(r.TEXTURE_2D,Y,Ce,ge.width,ge.height,0,pe,Te,ge.data);E.generateMipmaps=!1}else Pe?(Je&&t.texStorage2D(r.TEXTURE_2D,ae,Ce,ne.width,ne.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,Te,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Ce,ne.width,ne.height,0,pe,Te,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Ce,Ve[0].width,Ve[0].height,ne.depth);for(let Y=0,$=Ve.length;Y<$;Y++)if(ge=Ve[Y],E.format!==wn)if(pe!==null)if(Pe){if(F)if(E.layerUpdates.size>0){const fe=gc(ge.width,ge.height,E.format,E.type);for(const ue of E.layerUpdates){const Fe=ge.data.subarray(ue*fe/ge.data.BYTES_PER_ELEMENT,(ue+1)*fe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,ue,ge.width,ge.height,1,pe,Fe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,ne.depth,pe,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Ce,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,ne.depth,pe,Te,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Ce,ge.width,ge.height,ne.depth,0,pe,Te,ge.data)}else{Pe&&Je&&t.texStorage2D(r.TEXTURE_2D,ae,Ce,Ve[0].width,Ve[0].height);for(let Y=0,$=Ve.length;Y<$;Y++)ge=Ve[Y],E.format!==wn?pe!==null?Pe?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,ge.width,ge.height,pe,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ge.width,ge.height,pe,Te,ge.data):t.texImage2D(r.TEXTURE_2D,Y,Ce,ge.width,ge.height,0,pe,Te,ge.data)}else if(E.isDataArrayTexture)if(Pe){if(Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Ce,ne.width,ne.height,ne.depth),F)if(E.layerUpdates.size>0){const Y=gc(ne.width,ne.height,E.format,E.type);for(const $ of E.layerUpdates){const fe=ne.data.subarray($*Y/ne.data.BYTES_PER_ELEMENT,($+1)*Y/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,pe,Te,fe)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,Te,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,pe,Te,ne.data);else if(E.isData3DTexture)Pe?(Je&&t.texStorage3D(r.TEXTURE_3D,ae,Ce,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,Te,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,pe,Te,ne.data);else if(E.isFramebufferTexture){if(Je)if(Pe)t.texStorage2D(r.TEXTURE_2D,ae,Ce,ne.width,ne.height);else{let Y=ne.width,$=ne.height;for(let fe=0;fe<ae;fe++)t.texImage2D(r.TEXTURE_2D,fe,Ce,Y,$,0,pe,Te,null),Y>>=1,$>>=1}}else if(Ve.length>0){if(Pe&&Je){const Y=Se(Ve[0]);t.texStorage2D(r.TEXTURE_2D,ae,Ce,Y.width,Y.height)}for(let Y=0,$=Ve.length;Y<$;Y++)ge=Ve[Y],Pe?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,pe,Te,ge):t.texImage2D(r.TEXTURE_2D,Y,Ce,pe,Te,ge);E.generateMipmaps=!1}else if(Pe){if(Je){const Y=Se(ne);t.texStorage2D(r.TEXTURE_2D,ae,Ce,Y.width,Y.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Te,ne)}else t.texImage2D(r.TEXTURE_2D,0,Ce,pe,Te,ne);m(E)&&f(Q),le.__version=j.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function J(w,E,k){if(E.image.length!==6)return;const Q=Ge(w,E),ee=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+k);const j=n.get(ee);if(ee.version!==j.__version||Q===!0){t.activeTexture(r.TEXTURE0+k);const le=Ke.getPrimaries(Ke.workingColorSpace),se=E.colorSpace===vi?null:Ke.getPrimaries(E.colorSpace),he=E.colorSpace===vi||le===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const He=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!He&&!ne?pe[$]=_(E.image[$],!0,i.maxCubemapSize):pe[$]=ne?E.image[$].image:E.image[$],pe[$]=et(E,pe[$]);const Te=pe[0],Ce=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),Ve=y(E.internalFormat,Ce,ge,E.colorSpace),Pe=E.isVideoTexture!==!0,Je=j.__version===void 0||Q===!0,F=ee.dataReady;let ae=A(E,Te);ye(r.TEXTURE_CUBE_MAP,E);let Y;if(He){Pe&&Je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Ve,Te.width,Te.height);for(let $=0;$<6;$++){Y=pe[$].mipmaps;for(let fe=0;fe<Y.length;fe++){const ue=Y[fe];E.format!==wn?Ce!==null?Pe?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,ue.width,ue.height,Ce,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,ue.width,ue.height,Ce,ge,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Ve,ue.width,ue.height,0,Ce,ge,ue.data)}}}else{if(Y=E.mipmaps,Pe&&Je){Y.length>0&&ae++;const $=Se(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Ve,$.width,$.height)}for(let $=0;$<6;$++)if(ne){Pe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ce,ge,pe[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,pe[$].width,pe[$].height,0,Ce,ge,pe[$].data);for(let fe=0;fe<Y.length;fe++){const Fe=Y[fe].image[$].image;Pe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Fe.width,Fe.height,Ce,ge,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Ve,Fe.width,Fe.height,0,Ce,ge,Fe.data)}}else{Pe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,ge,pe[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,Ce,ge,pe[$]);for(let fe=0;fe<Y.length;fe++){const ue=Y[fe];Pe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Ce,ge,ue.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Ve,Ce,ge,ue.image[$])}}}m(E)&&f(r.TEXTURE_CUBE_MAP),j.__version=ee.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function me(w,E,k,Q,ee,j){const le=s.convert(k.format,k.colorSpace),se=s.convert(k.type),he=y(k.internalFormat,le,se,k.colorSpace),He=n.get(E),ne=n.get(k);if(ne.__renderTarget=E,!He.__hasExternalTextures){const pe=Math.max(1,E.width>>j),Te=Math.max(1,E.height>>j);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,he,pe,Te,E.depth,0,le,se,null):t.texImage2D(ee,j,he,pe,Te,0,le,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),G(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,ee,ne.__webglTexture,0,Ne(E)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,ee,ne.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(w,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer){const Q=E.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,j=S(E.stencilBuffer,ee),le=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=Ne(E);G(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,j,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,j,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,j,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,w)}else{const Q=E.textures;for(let ee=0;ee<Q.length;ee++){const j=Q[ee],le=s.convert(j.format,j.colorSpace),se=s.convert(j.type),he=y(j.internalFormat,le,se,j.colorSpace),He=Ne(E);k&&G(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,he,E.width,E.height):G(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,he,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const ee=Q.__webglTexture,j=Ne(E);if(E.depthTexture.format===Nr)G(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Zr)G(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function we(w){const E=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=Q}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(E.__webglFramebuffer,w)}else if(k){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),ie(E.__webglDepthbuffer[Q],w,!1);else{const ee=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ie(E.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ee)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(w,E,k){const Q=n.get(w);E!==void 0&&me(Q.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&we(w)}function je(w){const E=w.texture,k=n.get(w),Q=n.get(E);w.addEventListener("dispose",T);const ee=w.textures,j=w.isWebGLCubeRenderTarget===!0,le=ee.length>1;if(le||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let he=0;he<E.mipmaps.length;he++)k.__webglFramebuffer[se][he]=r.createFramebuffer()}else k.__webglFramebuffer[se]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)k.__webglFramebuffer[se]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(le)for(let se=0,he=ee.length;se<he;se++){const He=n.get(ee[se]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&G(w)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let se=0;se<ee.length;se++){const he=ee[se];k.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[se]);const He=s.convert(he.format,he.colorSpace),ne=s.convert(he.type),pe=y(he.internalFormat,He,ne,he.colorSpace,w.isXRRenderTarget===!0),Te=Ne(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,pe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,k.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ye(r.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)me(k.__webglFramebuffer[se][he],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,he);else me(k.__webglFramebuffer[se],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(E)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let se=0,he=ee.length;se<he;se++){const He=ee[se],ne=n.get(He);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),ye(r.TEXTURE_2D,He),me(k.__webglFramebuffer,w,He,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),m(He)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),ye(se,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)me(k.__webglFramebuffer[he],w,E,r.COLOR_ATTACHMENT0,se,he);else me(k.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,se,0);m(E)&&f(se),t.unbindTexture()}w.depthBuffer&&we(w)}function ze(w){const E=w.textures;for(let k=0,Q=E.length;k<Q;k++){const ee=E[k];if(m(ee)){const j=D(w),le=n.get(ee).__webglTexture;t.bindTexture(j,le),f(j),t.unbindTexture()}}}const at=[],P=[];function Rt(w){if(w.samples>0){if(G(w)===!1){const E=w.textures,k=w.width,Q=w.height;let ee=r.COLOR_BUFFER_BIT;const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=n.get(w),se=E.length>1;if(se)for(let he=0;he<E.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let he=0;he<E.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[he]);const He=n.get(E[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,k,Q,0,0,k,Q,ee,r.NEAREST),l===!0&&(at.length=0,P.length=0,at.push(r.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(at.push(j),P.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<E.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,le.__webglColorRenderbuffer[he]);const He=n.get(E[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const E=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ne(w){return Math.min(i.maxSamples,w.samples)}function G(w){const E=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(w){const E=a.render.frame;c.get(w)!==E&&(c.set(w,E),w.update())}function et(w,E){const k=w.colorSpace,Q=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Kr&&k!==vi&&(Ke.getTransfer(k)===nt?(Q!==wn||ee!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=Le,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=G}function Ox(r,e){function t(n,i=vi){let s;const a=Ke.getTransfer(i);if(n===ai)return r.UNSIGNED_BYTE;if(n===lu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return r.BYTE;if(n===tf)return r.SHORT;if(n===ws)return r.UNSIGNED_SHORT;if(n===ou)return r.INT;if(n===ir)return r.UNSIGNED_INT;if(n===Jn)return r.FLOAT;if(n===sr)return r.HALF_FLOAT;if(n===rf)return r.ALPHA;if(n===sf)return r.RGB;if(n===wn)return r.RGBA;if(n===af)return r.LUMINANCE;if(n===of)return r.LUMINANCE_ALPHA;if(n===Nr)return r.DEPTH_COMPONENT;if(n===Zr)return r.DEPTH_STENCIL;if(n===lf)return r.RED;if(n===cu)return r.RED_INTEGER;if(n===uf)return r.RG;if(n===hu)return r.RG_INTEGER;if(n===fu)return r.RGBA_INTEGER;if(n===ma||n===_a||n===ga||n===va)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===fl||n===dl||n===pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===_l||n===gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ml||n===_l)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===xl||n===Sl||n===El||n===Ml||n===yl||n===Dl||n===Tl||n===Al||n===bl||n===Cl||n===wl||n===Rl||n===Pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===Fl||n===Il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cf||n===Ll||n===Ul||n===Nl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Bx={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new At,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:zx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends Qr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,g=null;const _=new Vx,m=t.getContextAttributes();let f=null,D=null;const y=[],S=[],A=new ke;let b=null;const T=new rn;T.viewport=new ft;const C=new rn;C.viewport=new ft;const v=[T,C],x=new u_;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=y[q];return J===void 0&&(J=new Io,y[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=y[q];return J===void 0&&(J=new Io,y[q]=J),J.getGripSpace()},this.getHand=function(q){let J=y[q];return J===void 0&&(J=new Io,y[q]=J),J.getHandSpace()};function L(q){const J=S.indexOf(q.inputSource);if(J===-1)return;const me=y[J];me!==void 0&&(me.update(q.inputSource,q.frame,u||a),me.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let q=0;q<y.length;q++){const J=S[q];J!==null&&(S[q]=null,y[q].disconnect(J))}R=null,B=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,i=null,D=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let me=null,ie=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Zr:Nr,ie=m.stencil?Yr:ir);const we={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(we),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),D=new oi(d.textureWidth,d.textureHeight,{format:wn,type:ai,depthTexture:new Af(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),D=new oi(p.framebufferWidth,p.framebufferHeight,{format:wn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}D.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let J=0;J<q.removed.length;J++){const me=q.removed[J],ie=S.indexOf(me);ie>=0&&(S[ie]=null,y[ie].disconnect(me))}for(let J=0;J<q.added.length;J++){const me=q.added[J];let ie=S.indexOf(me);if(ie===-1){for(let we=0;we<y.length;we++)if(we>=S.length){S.push(me),ie=we;break}else if(S[we]===null){S[we]=me,ie=we;break}if(ie===-1)break}const be=y[ie];be&&be.connect(me)}}const N=new V,Z=new V;function z(q,J,me){N.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const ie=N.distanceTo(Z),be=J.projectionMatrix.elements,we=me.projectionMatrix.elements,Le=be[14]/(be[10]-1),je=be[14]/(be[10]+1),ze=(be[9]+1)/be[5],at=(be[9]-1)/be[5],P=(be[8]-1)/be[0],Rt=(we[8]+1)/we[0],Ne=Le*P,G=Le*Rt,Me=ie/(-P+Rt),et=Me*-P;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(et),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Se=Le+Me,w=je+Me,E=Ne-et,k=G+(ie-et),Q=ze*je/w*Se,ee=at*je/w*Se;q.projectionMatrix.makePerspective(E,k,Q,ee,Se,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function O(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let J=q.near,me=q.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(me=_.depthFar)),x.near=C.near=T.near=J,x.far=C.far=T.far=me,(R!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,B=x.far),T.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,x.layers.mask=T.layers.mask|C.layers.mask;const ie=q.parent,be=x.cameras;O(x,ie);for(let we=0;we<be.length;we++)O(be[we],ie);be.length===2?z(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),re(q,x,ie)};function re(q,J,me){me===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ce=null;function ye(q,J){if(c=J.getViewerPose(u||a),g=J,c!==null){const me=c.views;p!==null&&(e.setRenderTargetFramebuffer(D,p.framebuffer),e.setRenderTarget(D));let ie=!1;me.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let we=0;we<me.length;we++){const Le=me[we];let je=null;if(p!==null)je=p.getViewport(Le);else{const at=h.getViewSubImage(d,Le);je=at.viewport,we===0&&(e.setRenderTargetTextures(D,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(D))}let ze=v[we];ze===void 0&&(ze=new rn,ze.layers.enable(we),ze.viewport=new ft,v[we]=ze),ze.matrix.fromArray(Le.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Le.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(je.x,je.y,je.width,je.height),we===0&&(x.matrix.copy(ze.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(ze)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const we=h.getDepthInformation(me[0]);we&&we.isValid&&we.texture&&_.init(e,we,i.renderState)}}for(let me=0;me<y.length;me++){const ie=S[me],be=y[me];ie!==null&&be!==void 0&&be.update(ie,J,u||a)}ce&&ce(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ge=new wf;Ge.setAnimationLoop(ye),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}}const Vi=new li,Hx=new dt;function Wx(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Sf(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,D,y,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,D,y):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const D=e.get(f),y=D.envMap,S=D.envMapRotation;y&&(m.envMap.value=y,Vi.copy(S),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,D,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*D,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,D){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=D.texture,m.transmissionSamplerSize.value.set(D.width,D.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const D=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(D.matrixWorld),m.nearDistance.value=D.shadow.camera.near,m.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,y){const S=y.program;n.uniformBlockBinding(D,S)}function u(D,y){let S=i[D.id];S===void 0&&(g(D),S=c(D),i[D.id]=S,D.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(D,A);const b=e.render.frame;s[D.id]!==b&&(d(D),s[D.id]=b)}function c(D){const y=h();D.__bindingPointIndex=y;const S=r.createBuffer(),A=D.__size,b=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function h(){for(let D=0;D<o;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(D){const y=i[D.id],S=D.uniforms,A=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,T=S.length;b<T;b++){const C=Array.isArray(S[b])?S[b]:[S[b]];for(let v=0,x=C.length;v<x;v++){const R=C[v];if(p(R,b,v,A)===!0){const B=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let K=0;K<L.length;K++){const N=L[K],Z=_(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,B+X,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(D,y,S,A){const b=D.value,T=y+"_"+S;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:A[T]=b.clone(),!0;{const C=A[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(D){const y=D.uniforms;let S=0;const A=16;for(let T=0,C=y.length;T<C;T++){const v=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,R=v.length;x<R;x++){const B=v[x],L=Array.isArray(B.value)?B.value:[B.value];for(let X=0,K=L.length;X<K;X++){const N=L[X],Z=_(N),z=S%A,O=z%Z.boundary,re=z+O;S+=O,re!==0&&A-re<Z.storage&&(S+=A-re),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=Z.storage}}}const b=S%A;return b>0&&(S+=A-b),D.__size=S,D.__cache={},this}function _(D){const y={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(y.boundary=4,y.storage=4):D.isVector2?(y.boundary=8,y.storage=8):D.isVector3||D.isColor?(y.boundary=16,y.storage=12):D.isVector4?(y.boundary=16,y.storage=16):D.isMatrix3?(y.boundary=48,y.storage=48):D.isMatrix4?(y.boundary=64,y.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),y}function m(D){const y=D.target;y.removeEventListener("dispose",m);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const D in i)r.deleteBuffer(i[D]);a=[],i={},s={}}return{bind:l,update:u,dispose:f}}class qx{constructor(e={}){const{canvas:t=Am(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const D=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Ai,this.toneMappingExposure=1;const S=this;let A=!1,b=0,T=0,C=null,v=-1,x=null;const R=new ft,B=new ft;let L=null;const X=new Ye(0);let K=0,N=t.width,Z=t.height,z=1,O=null,re=null;const ce=new ft(0,0,N,Z),ye=new ft(0,0,N,Z);let Ge=!1;const q=new Tf;let J=!1,me=!1;this.transmissionResolutionScale=1;const ie=new dt,be=new dt,we=new V,Le=new ft,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function at(){return C===null?z:1}let P=n;function Rt(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${au}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),P===null){const I="webgl2";if(P=Rt(I,M),P===null)throw Rt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ne,G,Me,et,Se,w,E,k,Q,ee,j,le,se,he,He,ne,pe,Te,Ce,ge,Ve,Pe,Je,F;function ae(){Ne=new tv(P),Ne.init(),Pe=new Ox(P,Ne),G=new K0(P,Ne,e,Pe),Me=new Ux(P,Ne),G.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),et=new rv(P),Se=new Mx,w=new Nx(P,Ne,Me,Se,G,Pe,et),E=new J0(S),k=new ev(S),Q=new h_(P),Je=new Y0(P,Q),ee=new nv(P,Q,et,Je),j=new av(P,ee,Q,et),Ce=new sv(P,G,w),ne=new j0(Se),le=new Ex(S,E,k,Ne,G,Je,ne),se=new Wx(S,Se),he=new Dx,He=new Rx(Ne),Te=new q0(S,E,k,Me,j,p,l),pe=new Ix(S,j,G),F=new Xx(P,et,G,Me),ge=new Z0(P,Ne,et),Ve=new iv(P,Ne,et),et.programs=le.programs,S.capabilities=G,S.extensions=Ne,S.properties=Se,S.renderLists=he,S.shadowMap=pe,S.state=Me,S.info=et}ae();const Y=new Gx(S,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(N,Z,!1))},this.getSize=function(M){return M.set(N,Z)},this.setSize=function(M,I,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=M,Z=I,t.width=Math.floor(M*z),t.height=Math.floor(I*z),H===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(N*z,Z*z).floor()},this.setDrawingBufferSize=function(M,I,H){N=M,Z=I,z=H,t.width=Math.floor(M*H),t.height=Math.floor(I*H),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(ce)},this.setViewport=function(M,I,H,W){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,I,H,W),Me.viewport(R.copy(ce).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(ye)},this.setScissor=function(M,I,H,W){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,I,H,W),Me.scissor(B.copy(ye).multiplyScalar(z).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(M){Me.setScissorTest(Ge=M)},this.setOpaqueSort=function(M){O=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(M=!0,I=!0,H=!0){let W=0;if(M){let U=!1;if(C!==null){const te=C.texture.format;U=te===fu||te===hu||te===cu}if(U){const te=C.texture.type,de=te===ai||te===ir||te===ws||te===Yr||te===lu||te===uu,ve=Te.getClearColor(),xe=Te.getClearAlpha(),Re=ve.r,Ie=ve.g,De=ve.b;de?(g[0]=Re,g[1]=Ie,g[2]=De,g[3]=xe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Re,_[1]=Ie,_[2]=De,_[3]=xe,P.clearBufferiv(P.COLOR,0,_))}else W|=P.COLOR_BUFFER_BIT}I&&(W|=P.DEPTH_BUFFER_BIT),H&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Te.dispose(),he.dispose(),He.dispose(),Se.dispose(),E.dispose(),k.dispose(),j.dispose(),Je.dispose(),F.dispose(),le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",_t),Y.removeEventListener("sessionend",Nt),Ot.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=et.autoReset,I=pe.enabled,H=pe.autoUpdate,W=pe.needsUpdate,U=pe.type;ae(),et.autoReset=M,pe.enabled=I,pe.autoUpdate=H,pe.needsUpdate=W,pe.type=U}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Fe(M){const I=M.target;I.removeEventListener("dispose",Fe),ot(I)}function ot(M){Et(M),Se.remove(M)}function Et(M){const I=Se.get(M).programs;I!==void 0&&(I.forEach(function(H){le.releaseProgram(H)}),M.isShaderMaterial&&le.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,H,W,U,te){I===null&&(I=je);const de=U.isMesh&&U.matrixWorld.determinant()<0,ve=Gf(M,I,H,W,U);Me.setMaterial(W,de);let xe=H.index,Re=1;if(W.wireframe===!0){if(xe=ee.getWireframeAttribute(H),xe===void 0)return;Re=2}const Ie=H.drawRange,De=H.attributes.position;let qe=Ie.start*Re,Qe=(Ie.start+Ie.count)*Re;te!==null&&(qe=Math.max(qe,te.start*Re),Qe=Math.min(Qe,(te.start+te.count)*Re)),xe!==null?(qe=Math.max(qe,0),Qe=Math.min(Qe,xe.count)):De!=null&&(qe=Math.max(qe,0),Qe=Math.min(Qe,De.count));const vt=Qe-qe;if(vt<0||vt===1/0)return;Je.setup(U,W,ve,H,xe);let pt,Ze=ge;if(xe!==null&&(pt=Q.get(xe),Ze=Ve,Ze.setIndex(pt)),U.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*at()),Ze.setMode(P.LINES)):Ze.setMode(P.TRIANGLES);else if(U.isLine){let Ae=W.linewidth;Ae===void 0&&(Ae=1),Me.setLineWidth(Ae*at()),U.isLineSegments?Ze.setMode(P.LINES):U.isLineLoop?Ze.setMode(P.LINE_LOOP):Ze.setMode(P.LINE_STRIP)}else U.isPoints?Ze.setMode(P.POINTS):U.isSprite&&Ze.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,Ct=U._multiDrawCounts,$e=U._multiDrawCount,Mn=xe?Q.get(xe).bytesPerElement:1,ar=Se.get(W).currentProgram.getUniforms();for(let Qt=0;Qt<$e;Qt++)ar.setValue(P,"_gl_DrawID",Qt),Ze.render(Ae[Qt]/Mn,Ct[Qt])}else if(U.isInstancedMesh)Ze.renderInstances(qe,vt,U.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ct=Math.min(H.instanceCount,Ae);Ze.renderInstances(qe,vt,Ct)}else Ze.render(qe,vt)};function _e(M,I,H){M.transparent===!0&&M.side===jn&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,Os(M,I,H),M.side=si,M.needsUpdate=!0,Os(M,I,H),M.side=jn):Os(M,I,H)}this.compile=function(M,I,H=null){H===null&&(H=M),f=He.get(H),f.init(I),y.push(f),H.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==H&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const W=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const ve=te[de];_e(ve,H,U),W.add(ve)}else _e(te,H,U),W.add(te)}),y.pop(),f=null,W},this.compileAsync=function(M,I,H=null){const W=this.compile(M,I,H);return new Promise(U=>{function te(){if(W.forEach(function(de){Se.get(de).currentProgram.isReady()&&W.delete(de)}),W.size===0){U(M);return}setTimeout(te,10)}Ne.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ee=null;function Be(M){Ee&&Ee(M)}function _t(){Ot.stop()}function Nt(){Ot.start()}const Ot=new wf;Ot.setAnimationLoop(Be),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(M){Ee=M,Y.setAnimationLoop(M),M===null?Ot.stop():Ot.start()},Y.addEventListener("sessionstart",_t),Y.addEventListener("sessionend",Nt),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,C),f=He.get(M,y.length),f.init(I),y.push(f),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(be),me=this.localClippingEnabled,J=ne.init(this.clippingPlanes,me),m=he.get(M,D.length),m.init(),D.push(m),Y.enabled===!0&&Y.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&Pi(te,I,-1/0,S.sortObjects)}Pi(M,I,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(O,re),ze=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ze&&Te.addToRenderList(m,M),this.info.render.frame++,J===!0&&ne.beginShadows();const H=f.state.shadowsArray;pe.render(H,M,I),J===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const te=I.cameras;if(U.length>0)for(let de=0,ve=te.length;de<ve;de++){const xe=te[de];vu(W,U,M,xe)}ze&&Te.render(M);for(let de=0,ve=te.length;de<ve;de++){const xe=te[de];gu(m,M,xe,xe.viewport)}}else U.length>0&&vu(W,U,M,I),ze&&Te.render(M),gu(m,M,I);C!==null&&T===0&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(S,M,I),Je.resetDefaultState(),v=-1,x=null,y.pop(),y.length>0?(f=y[y.length-1],J===!0&&ne.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,D.pop(),D.length>0?m=D[D.length-1]:m=null};function Pi(M,I,H,W){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){W&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(be);const de=j.update(M),ve=M.material;ve.visible&&m.push(M,de,ve,H,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const de=j.update(M),ve=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Le.copy(de.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(be)),Array.isArray(ve)){const xe=de.groups;for(let Re=0,Ie=xe.length;Re<Ie;Re++){const De=xe[Re],qe=ve[De.materialIndex];qe&&qe.visible&&m.push(M,de,qe,H,Le.z,De)}}else ve.visible&&m.push(M,de,ve,H,Le.z,null)}}const te=M.children;for(let de=0,ve=te.length;de<ve;de++)Pi(te[de],I,H,W)}function gu(M,I,H,W){const U=M.opaque,te=M.transmissive,de=M.transparent;f.setupLightsView(H),J===!0&&ne.setGlobalState(S.clippingPlanes,H),W&&Me.viewport(R.copy(W)),U.length>0&&Ns(U,I,H),te.length>0&&Ns(te,I,H),de.length>0&&Ns(de,I,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function vu(M,I,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new oi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?sr:ai,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const te=f.state.transmissionRenderTarget[W.id],de=W.viewport||R;te.setSize(de.z*S.transmissionResolutionScale,de.w*S.transmissionResolutionScale);const ve=S.getRenderTarget();S.setRenderTarget(te),S.getClearColor(X),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),ze&&Te.render(H);const xe=S.toneMapping;S.toneMapping=Ai;const Re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),J===!0&&ne.setGlobalState(S.clippingPlanes,W),Ns(M,H,W),w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let De=0,qe=I.length;De<qe;De++){const Qe=I[De],vt=Qe.object,pt=Qe.geometry,Ze=Qe.material,Ae=Qe.group;if(Ze.side===jn&&vt.layers.test(W.layers)){const Ct=Ze.side;Ze.side=Wt,Ze.needsUpdate=!0,xu(vt,H,W,pt,Ze,Ae),Ze.side=Ct,Ze.needsUpdate=!0,Ie=!0}}Ie===!0&&(w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te))}S.setRenderTarget(ve),S.setClearColor(X,K),Re!==void 0&&(W.viewport=Re),S.toneMapping=xe}function Ns(M,I,H){const W=I.isScene===!0?I.overrideMaterial:null;for(let U=0,te=M.length;U<te;U++){const de=M[U],ve=de.object,xe=de.geometry,Re=W===null?de.material:W,Ie=de.group;ve.layers.test(H.layers)&&xu(ve,I,H,xe,Re,Ie)}}function xu(M,I,H,W,U,te){M.onBeforeRender(S,I,H,W,U,te),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(S,I,H,W,M,te),U.transparent===!0&&U.side===jn&&U.forceSinglePass===!1?(U.side=Wt,U.needsUpdate=!0,S.renderBufferDirect(H,I,W,U,M,te),U.side=si,U.needsUpdate=!0,S.renderBufferDirect(H,I,W,U,M,te),U.side=jn):S.renderBufferDirect(H,I,W,U,M,te),M.onAfterRender(S,I,H,W,U,te)}function Os(M,I,H){I.isScene!==!0&&(I=je);const W=Se.get(M),U=f.state.lights,te=f.state.shadowsArray,de=U.state.version,ve=le.getParameters(M,U.state,te,I,H),xe=le.getProgramCacheKey(ve);let Re=W.programs;W.environment=M.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(M.isMeshStandardMaterial?k:E).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",Fe),Re=new Map,W.programs=Re);let Ie=Re.get(xe);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===de)return Eu(M,ve),Ie}else ve.uniforms=le.getUniforms(M),M.onBeforeCompile(ve,S),Ie=le.acquireProgram(ve,xe),Re.set(xe,Ie),W.uniforms=ve.uniforms;const De=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=ne.uniform),Eu(M,ve),W.needsLights=Wf(M),W.lightsStateVersion=de,W.needsLights&&(De.ambientLightColor.value=U.state.ambient,De.lightProbe.value=U.state.probe,De.directionalLights.value=U.state.directional,De.directionalLightShadows.value=U.state.directionalShadow,De.spotLights.value=U.state.spot,De.spotLightShadows.value=U.state.spotShadow,De.rectAreaLights.value=U.state.rectArea,De.ltc_1.value=U.state.rectAreaLTC1,De.ltc_2.value=U.state.rectAreaLTC2,De.pointLights.value=U.state.point,De.pointLightShadows.value=U.state.pointShadow,De.hemisphereLights.value=U.state.hemi,De.directionalShadowMap.value=U.state.directionalShadowMap,De.directionalShadowMatrix.value=U.state.directionalShadowMatrix,De.spotShadowMap.value=U.state.spotShadowMap,De.spotLightMatrix.value=U.state.spotLightMatrix,De.spotLightMap.value=U.state.spotLightMap,De.pointShadowMap.value=U.state.pointShadowMap,De.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=Ie,W.uniformsList=null,Ie}function Su(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Sa.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Eu(M,I){const H=Se.get(M);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Gf(M,I,H,W,U){I.isScene!==!0&&(I=je),w.resetTextureUnits();const te=I.fog,de=W.isMeshStandardMaterial?I.environment:null,ve=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Kr,xe=(W.isMeshStandardMaterial?k:E).get(W.envMap||de),Re=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,Qe=!!H.morphAttributes.color;let vt=Ai;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(vt=S.toneMapping);const pt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ze=pt!==void 0?pt.length:0,Ae=Se.get(W),Ct=f.state.lights;if(J===!0&&(me===!0||M!==x)){const Bt=M===x&&W.id===v;ne.setState(W,M,Bt)}let $e=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ct.state.version||Ae.outputColorSpace!==ve||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==xe||W.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Ie||Ae.morphTargets!==De||Ae.morphNormals!==qe||Ae.morphColors!==Qe||Ae.toneMapping!==vt||Ae.morphTargetsCount!==Ze)&&($e=!0):($e=!0,Ae.__version=W.version);let Mn=Ae.currentProgram;$e===!0&&(Mn=Os(W,I,U));let ar=!1,Qt=!1,es=!1;const lt=Mn.getUniforms(),hn=Ae.uniforms;if(Me.useProgram(Mn.program)&&(ar=!0,Qt=!0,es=!0),W.id!==v&&(v=W.id,Qt=!0),ar||x!==M){Me.buffers.depth.getReversed()?(ie.copy(M.projectionMatrix),Cm(ie),wm(ie),lt.setValue(P,"projectionMatrix",ie)):lt.setValue(P,"projectionMatrix",M.projectionMatrix),lt.setValue(P,"viewMatrix",M.matrixWorldInverse);const Xt=lt.map.cameraPosition;Xt!==void 0&&Xt.setValue(P,we.setFromMatrixPosition(M.matrixWorld)),G.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Qt=!0,es=!0)}if(U.isSkinnedMesh){lt.setOptional(P,U,"bindMatrix"),lt.setOptional(P,U,"bindMatrixInverse");const Bt=U.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),lt.setValue(P,"boneTexture",Bt.boneTexture,w))}U.isBatchedMesh&&(lt.setOptional(P,U,"batchingTexture"),lt.setValue(P,"batchingTexture",U._matricesTexture,w),lt.setOptional(P,U,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",U._indirectTexture,w),lt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",U._colorsTexture,w));const fn=H.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Ce.update(U,H,Mn),(Qt||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,lt.setValue(P,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(hn.envMap.value=xe,hn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(hn.envMapIntensity.value=I.environmentIntensity),Qt&&(lt.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&Hf(hn,es),te&&W.fog===!0&&se.refreshFogUniforms(hn,te),se.refreshMaterialUniforms(hn,W,z,Z,f.state.transmissionRenderTarget[M.id]),Sa.upload(P,Su(Ae),hn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Sa.upload(P,Su(Ae),hn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(P,"center",U.center),lt.setValue(P,"modelViewMatrix",U.modelViewMatrix),lt.setValue(P,"normalMatrix",U.normalMatrix),lt.setValue(P,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Bt=W.uniformsGroups;for(let Xt=0,Wa=Bt.length;Xt<Wa;Xt++){const Fi=Bt[Xt];F.update(Fi,Mn),F.bind(Fi,Mn)}}return Mn}function Hf(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Wf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,I,H){Se.get(M.texture).__webglTexture=I,Se.get(M.depthTexture).__webglTexture=H;const W=Se.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const H=Se.get(M);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const Xf=P.createFramebuffer();this.setRenderTarget=function(M,I=0,H=0){C=M,b=I,T=H;let W=!0,U=null,te=!1,de=!1;if(M){const xe=Se.get(M);if(xe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(xe.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(xe.__hasExternalTextures)w.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const De=M.depthTexture;if(xe.__boundDepthTexture!==De){if(De!==null&&Se.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(de=!0);const Ie=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?U=Ie[I][H]:U=Ie[I],te=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?U=Se.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[H]:U=Ie,R.copy(M.viewport),B.copy(M.scissor),L=M.scissorTest}else R.copy(ce).multiplyScalar(z).floor(),B.copy(ye).multiplyScalar(z).floor(),L=Ge;if(H!==0&&(U=Xf),Me.bindFramebuffer(P.FRAMEBUFFER,U)&&W&&Me.drawBuffers(M,U),Me.viewport(R),Me.scissor(B),Me.setScissorTest(L),te){const xe=Se.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,H)}else if(de){const xe=Se.get(M.texture),Re=I;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,H,Re)}else if(M!==null&&H!==0){const xe=Se.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,H)}v=-1},this.readRenderTargetPixels=function(M,I,H,W,U,te,de){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Me.bindFramebuffer(P.FRAMEBUFFER,ve);try{const xe=M.texture,Re=xe.format,Ie=xe.type;if(!G.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-W&&H>=0&&H<=M.height-U&&P.readPixels(I,H,W,U,Pe.convert(Re),Pe.convert(Ie),te)}finally{const xe=C!==null?Se.get(C).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(M,I,H,W,U,te,de){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){const xe=M.texture,Re=xe.format,Ie=xe.type;if(!G.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-W&&H>=0&&H<=M.height-U){Me.bindFramebuffer(P.FRAMEBUFFER,ve);const De=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,De),P.bufferData(P.PIXEL_PACK_BUFFER,te.byteLength,P.STREAM_READ),P.readPixels(I,H,W,U,Pe.convert(Re),Pe.convert(Ie),0);const qe=C!==null?Se.get(C).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,qe);const Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bm(P,Qe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,De),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,te),P.deleteBuffer(De),P.deleteSync(Qe),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,H=0){M.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-H),U=Math.floor(M.image.width*W),te=Math.floor(M.image.height*W),de=I!==null?I.x:0,ve=I!==null?I.y:0;w.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,de,ve,U,te),Me.unbindTexture()};const qf=P.createFramebuffer(),Yf=P.createFramebuffer();this.copyTextureToTexture=function(M,I,H=null,W=null,U=0,te=null){M.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],I=arguments[2],te=arguments[3]||0,H=null),te===null&&(U!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=U,U=0):te=0);let de,ve,xe,Re,Ie,De,qe,Qe,vt;const pt=M.isCompressedTexture?M.mipmaps[te]:M.image;if(H!==null)de=H.max.x-H.min.x,ve=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Re=H.min.x,Ie=H.min.y,De=H.isBox3?H.min.z:0;else{const fn=Math.pow(2,-U);de=Math.floor(pt.width*fn),ve=Math.floor(pt.height*fn),M.isDataArrayTexture?xe=pt.depth:M.isData3DTexture?xe=Math.floor(pt.depth*fn):xe=1,Re=0,Ie=0,De=0}W!==null?(qe=W.x,Qe=W.y,vt=W.z):(qe=0,Qe=0,vt=0);const Ze=Pe.convert(I.format),Ae=Pe.convert(I.type);let Ct;I.isData3DTexture?(w.setTexture3D(I,0),Ct=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),Ct=P.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),Ct=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const $e=P.getParameter(P.UNPACK_ROW_LENGTH),Mn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ar=P.getParameter(P.UNPACK_SKIP_PIXELS),Qt=P.getParameter(P.UNPACK_SKIP_ROWS),es=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,De);const lt=M.isDataArrayTexture||M.isData3DTexture,hn=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const fn=Se.get(M),Bt=Se.get(I),Xt=Se.get(fn.__renderTarget),Wa=Se.get(Bt.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wa.__webglFramebuffer);for(let Fi=0;Fi<xe;Fi++)lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(M).__webglTexture,U,De+Fi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(I).__webglTexture,te,vt+Fi)),P.blitFramebuffer(Re,Ie,de,ve,qe,Qe,de,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||Se.has(M)){const fn=Se.get(M),Bt=Se.get(I);Me.bindFramebuffer(P.READ_FRAMEBUFFER,qf),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Yf);for(let Xt=0;Xt<xe;Xt++)lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fn.__webglTexture,U,De+Xt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fn.__webglTexture,U),hn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bt.__webglTexture,te,vt+Xt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Bt.__webglTexture,te),U!==0?P.blitFramebuffer(Re,Ie,de,ve,qe,Qe,de,ve,P.COLOR_BUFFER_BIT,P.NEAREST):hn?P.copyTexSubImage3D(Ct,te,qe,Qe,vt+Xt,Re,Ie,de,ve):P.copyTexSubImage2D(Ct,te,qe,Qe,Re,Ie,de,ve);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else hn?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Ct,te,qe,Qe,vt,de,ve,xe,Ze,Ae,pt.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Ct,te,qe,Qe,vt,de,ve,xe,Ze,pt.data):P.texSubImage3D(Ct,te,qe,Qe,vt,de,ve,xe,Ze,Ae,pt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,te,qe,Qe,de,ve,Ze,Ae,pt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,te,qe,Qe,pt.width,pt.height,Ze,pt.data):P.texSubImage2D(P.TEXTURE_2D,te,qe,Qe,de,ve,Ze,Ae,pt);P.pixelStorei(P.UNPACK_ROW_LENGTH,$e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ar),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,es),te===0&&I.generateMipmaps&&P.generateMipmap(Ct),Me.unbindTexture()},this.copyTextureToTexture3D=function(M,I,H=null,W=null,U=0){return M.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,H,W,U)},this.initRenderTarget=function(M){Se.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,Me.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Va{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yx=new bf(-1,1,1,-1,0,1);class Zx extends ui{constructor(){super(),this.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ni([0,2,0,0,2,0],2))}}const Kx=new Zx;class jx{constructor(e){this._mesh=new Sn(Kx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ga extends Sn{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new rn;const n=this,i=t.color!==void 0?new Ye(t.color):new Ye(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||Ga.ReflectorShader,u=t.multisample!==void 0?t.multisample:4,c=new gi,h=new V,d=new V,p=new V,g=new dt,_=new V(0,0,-1),m=new ft,f=new V,D=new V,y=new ft,S=new dt,A=this.camera,b=new oi(s,a,{samples:u,type:sr}),T=new cn({name:l.name!==void 0?l.name:"unspecified",uniforms:pu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=b.texture,T.uniforms.color.value=i,T.uniforms.textureMatrix.value=S,this.material=T,this.onBeforeRender=function(C,v,x){if(d.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(x.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),f.subVectors(d,p),f.dot(h)>0)return;f.reflect(h).negate(),f.add(d),g.extractRotation(x.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(p),D.subVectors(d,_),D.reflect(h).negate(),D.add(d),A.position.copy(f),A.up.set(0,1,0),A.up.applyMatrix4(g),A.up.reflect(h),A.lookAt(D),A.far=x.far,A.updateMatrixWorld(),A.projectionMatrix.copy(x.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(A.projectionMatrix),S.multiply(A.matrixWorldInverse),S.multiply(n.matrixWorld),c.setFromNormalAndCoplanarPoint(h,d),c.applyMatrix4(A.matrixWorldInverse),m.set(c.normal.x,c.normal.y,c.normal.z,c.constant);const R=A.projectionMatrix;y.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],y.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],y.z=-1,y.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(y)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-o,R.elements[14]=m.w,n.visible=!1;const B=C.getRenderTarget(),L=C.xr.enabled,X=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(b),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(v,A),C.xr.enabled=L,C.shadowMap.autoUpdate=X,C.setRenderTarget(B);const K=x.viewport;K!==void 0&&C.state.viewport(K),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}}Ga.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Jx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Lf extends Va{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pu.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jx(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gc extends Va{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Qx extends Va{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $x{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lf(Jx),this.copyPass.material.blending=ei,this.clock=new Cf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gc!==void 0&&(a instanceof Gc?n=!0:a instanceof Qx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eS extends Va{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ye}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class tS{constructor(e){tt(this,"scene",new Qm);tt(this,"renderer");tt(this,"camera");tt(this,"effectComposer");tt(this,"oldCameraEffect");tt(this,"mm",er.matchMedia());tt(this,"svgCanvas",null);tt(this,"projects",[]);tt(this,"meshes",[]);tt(this,"sharedUniforms",{uTime:{value:0},uResolution:{value:new ke(window.innerWidth,window.innerHeight)}});tt(this,"titleMaterial",null);tt(this,"titleSprite",null);tt(this,"reflection",null);tt(this,"spriteFrustrum",.002);tt(this,"scaleFactor",1);tt(this,"isFirefox",navigator.userAgent.toLowerCase().indexOf("firefox")>-1);tt(this,"activeMesh",-1);tt(this,"group",new ds);tt(this,"svgToUrl",e=>{const t=new XMLSerializer().serializeToString(e),n="data:image/svg+xml;base64,"+btoa(t),i=new Image;i.width=window.innerWidth,i.height=window.innerHeight,i.classList.add("titleImage"),i.crossOrigin="anonymous",i.onload=()=>{var o;(o=this.svgCanvas)==null||o.remove(),this.svgCanvas=null,this.svgCanvas=document.createElement("canvas"),this.svgCanvas.width=window.innerWidth,this.svgCanvas.height=window.innerHeight;const s=this.svgCanvas.getContext("2d");s==null||s.clearRect(0,0,this.svgCanvas.width,this.svgCanvas.height),s==null||s.drawImage(i,0,-window.innerHeight/2,window.innerWidth,window.innerHeight*2);const a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!1?new At(this.svgCanvas):new At(void 0);a.needsUpdate=!0,window.innerWidth>768&&this.titleMaterial&&(this.titleMaterial.map=a,this.titleMaterial.needsUpdate=!0),URL.revokeObjectURL(i.src)},i.src=n});tt(this,"resizeScene",(e,t)=>{var n;(n=this.titleSprite)==null||n.scale.set(window.innerWidth*this.spriteFrustrum,window.innerHeight*this.spriteFrustrum,0),this.sharedUniforms.uResolution.value=new ke(window.innerWidth,window.innerHeight),this.camera.aspect=e/t,this.scaleFactor=Math.min(window.innerWidth*.0018,1),this.group.scale.set(this.scaleFactor,this.scaleFactor,this.scaleFactor),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)});tt(this,"angleStep",2*Math.PI/8);tt(this,"degPositions",[]);tt(this,"toggleProjetcs",(e,t,n)=>{this.activeMesh+=t,this.activeMesh=(this.activeMesh+8)%8,this.meshes[(this.activeMesh-3*t+8)%8].visible=!1,this.meshes[(this.activeMesh+t+8)%8].visible=!0,this.meshes[(this.activeMesh+t*3+8)%8].material.uniforms.uImage.value=this.projects[(e+t*3+this.projects.length)%this.projects.length].texture;const i=n[(e+t*3+this.projects.length)%this.projects.length].querySelector(".asset");this.meshes[(this.activeMesh+t*3+8)%8].material.uniforms.uImageAspect.value=i.clientHeight/i.clientWidth});tt(this,"placeImages",()=>{const e=this.projects.slice(0,7);e.push(this.projects[this.projects.length-1]);for(let t=0;t<e.length;t++){const n=new Jr(2,1.75,8,1),i=new cn({vertexShader:`#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vUv;

void main() {
    vec3 newPosition = position;
    newPosition.z += abs(position.x * position.x) * 0.2;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    vUv = uv;
}`,fragmentShader:`#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vUv;
uniform sampler2D uImage;
uniform float uTime;
uniform float uImageAspect;

void main() {
    vec2 uv = vUv;
    if(uImageAspect < 1.0) {
        uv.x = (uv.x * 1.14285714 * uImageAspect) + (1.0 - 1.14285714 * uImageAspect) / 2.0;
    }else {
        uv.y = (uv.y * 0.267 * uImageAspect) + (1.0 - 0.267 * uImageAspect) / 2.0;
    }
    gl_FragColor = texture2D(uImage, vec2(1.0 - uv.x, uv.y));
}`,uniforms:{uImage:{value:e[t].texture},uImageAspect:{value:e[t].element.clientHeight/e[t].element.clientWidth},...this.sharedUniforms},side:Wt}),s=new Sn(n,i);this.meshes.push(s);const a=t*this.angleStep,o=2.62,l=o*Math.cos(a),u=o*Math.sin(a),h=Math.atan2(u+o,l-0)*(180/Math.PI);this.degPositions.push(h),this.meshes[t].position.set(l,0,u),this.meshes[t].lookAt(0,0,0),this.group.add(this.meshes[t]),this.group.rotation.y=2*Math.PI/8*-2}this.meshes[7].material.uniforms.uImage.value=this.projects[this.projects.length-1].texture,this.meshes[6].material.uniforms.uImage.value=this.projects[this.projects.length-2].texture,this.meshes[5].material.uniforms.uImage.value=this.projects[this.projects.length-3].texture});tt(this,"rotateGroup",e=>{this.group.rotation.y=e+2*Math.PI/8*-2});tt(this,"clock",new Cf);tt(this,"renderRenderer",()=>{this.effectComposer.render(),this.sharedUniforms.uTime.value=this.clock.getElapsedTime(),window.requestAnimationFrame(this.renderRenderer)});this.canvas=e,this.scene.background=new Ye(16777215),this.renderer=new qx({canvas:this.canvas,antialias:!1,alpha:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=nn,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.camera=new rn(60,window.innerWidth/window.innerHeight,1.4,3.2*((1-this.scaleFactor)*1.5)),this.camera.position.set(0,0,4.6),this.scene.add(this.camera),this.effectComposer=new $x(this.renderer),this.effectComposer.setSize(window.innerWidth,window.innerHeight),this.effectComposer.addPass(new eS(this.scene,this.camera));const t=new cn({vertexShader:`#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`,fragmentShader:`#ifdef GL_ES
precision lowp float;
#endif

uniform sampler2D tDiffuse;
uniform float uTime;
uniform vec2 uResolution;

varying vec2 vUv;

#define PI 3.1415926

float GoldNoise(const in vec2 xy, const in float seed)
{
    return fract(sin(dot(xy * seed, vec2(12.9898, 78.233))) * 43758.5453);
}

vec4 WhiteNoise(const in float lineThickness, const in float opacity, const in vec4 pixel, const in vec2 fragCoord) {
    float lineStart = floor(GoldNoise(vec2(50.0, 50.0), fract(uTime)) * uResolution.y);
    float lineEnd = floor(lineStart + lineThickness);
    
    if (floor(fragCoord.y) >= lineStart && floor(fragCoord.y) < lineEnd) {
        float frequency = GoldNoise(vec2(50.0, 50.0), fract(uTime)) * 1.0;
        float offset = GoldNoise(vec2(50.0, 51.0), fract(uTime));            
        float x = floor(fragCoord.x) / floor(uResolution.x) + offset;
        float white = pow(cos(PI * fract(x * frequency) / 2.0), 10.0) * opacity;
        float grit = GoldNoise(vec2(floor(fragCoord.x /3.0), 50.0), fract(uTime));
        white = max(white - grit * 0.3, 0.0);
        
        return pixel + white;
    }
    
    return pixel;
}

void main()
{  
    vec4 screen = texture2D(tDiffuse, vec2(vUv.x, vUv.y));
    vec2 aberrated = 0.02 * pow(vUv - 0.5, vec2(2.0, 2.0));
    
    float r = texture2D(tDiffuse, vUv - aberrated).r;
    float g = texture2D(tDiffuse, vUv).g;
    float b = texture2D(tDiffuse, vUv + aberrated).b;

    vec4 screenColors = vec4(r,g,b, screen.a);

    screenColors.rgb += (vec3(GoldNoise(vUv, uTime)) * 0.3) - 0.2;
    screenColors = WhiteNoise(3.0, 0.4, screenColors, gl_FragCoord.xy);
    
    gl_FragColor = mix(screenColors, vec4(vec3(screenColors.r+screenColors.g+screenColors.r / 10.0), screenColors.a), 0.4);
}`,uniforms:{tDiffuse:{value:null},...this.sharedUniforms}});this.oldCameraEffect=new Lf(t),this.effectComposer.addPass(this.oldCameraEffect);const n=er.quickTo(this.group.position,"x",{duration:2,ease:"power3.out"}),i=er.quickTo(this.group.position,"y",{duration:2,ease:"power3.out"});if(window.addEventListener("mousemove",s=>{n((s.clientX-window.innerWidth/2)*-13e-5),i((s.clientY-window.innerWidth/2)*13e-5-.2)}),window.innerWidth>768){if(!this.isFirefox){const s=new Jr(6.4,6.4,1,1);this.reflection=new Ga(s,{textureWidth:window.innerWidth/3,textureHeight:window.innerHeight/3,clipBias:.003,color:7697781}),this.reflection.position.y=-.75,this.reflection.rotation.x=-Math.PI/2,this.group.add(this.reflection)}this.titleMaterial=new yf({map:null,transparent:!0,side:si}),this.titleSprite=new e_(this.titleMaterial),this.titleSprite.scale.set(window.innerWidth*this.spriteFrustrum,window.innerHeight*this.spriteFrustrum,0),this.titleSprite.position.z=3.1,this.scene.add(this.titleSprite)}this.group.position.set(0,-.2,0),this.scene.add(this.group),this.mm.add("(max-width: 768px)",()=>{this.titleSprite&&(this.titleSprite.visible=!1,this.reflection&&(this.reflection.visible=!1),this.oldCameraEffect.enabled=!1)}),this.mm.add("(min-width: 769px)",()=>{this.titleSprite&&(this.titleSprite.visible=!0,this.reflection&&(this.reflection.visible=!0),this.oldCameraEffect.enabled=!0)})}}function nS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function iS(r,e,t){return nS(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wt,Ea,an,Mi,yi,Br,Uf,Wi,vs,Nf,$n,Cn,Of,Bf=function(){return wt||typeof window<"u"&&(wt=window.gsap)&&wt.registerPlugin&&wt},zf=1,Pr=[],_n=[],xs=[],Ss=Date.now,kl=function(e,t){return t},rS=function(){var e=vs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,_n),i.push.apply(i,xs),_n=n,xs=i,kl=function(a,o){return t[a](o)}},sS=function(e,t){return~xs.indexOf(e)&&xs[xs.indexOf(e)+1][t]},Es=function(e){return!!~Nf.indexOf(e)},Vt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ca="scrollLeft",ha="scrollTop",Vl=function(){return $n&&$n.isPressed||_n.cache++},Ia=function(e,t){var n=function i(s){if(s||s===0){zf&&(an.history.scrollRestoration="manual");var a=$n&&$n.isPressed;s=i.v=Math.round(s)||($n&&$n.iOS?1:0),e(s),i.cacheID=_n.cache,a&&kl("ss",s)}else(t||_n.cache!==i.cacheID||kl("ref"))&&(i.cacheID=_n.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},La={s:ca,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ia(function(r){return arguments.length?an.scrollTo(r,Ha.sc()):an.pageXOffset||Mi[ca]||yi[ca]||Br[ca]||0})},Ha={s:ha,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:La,sc:Ia(function(r){return arguments.length?an.scrollTo(La.sc(),r):an.pageYOffset||Mi[ha]||yi[ha]||Br[ha]||0})},aS=function(e,t){return(t&&t._ctx&&t._ctx.selector||wt.utils.toArray)(e)[0]||(typeof e=="string"&&wt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hc=function(e,t){var n=t.s,i=t.sc;Es(e)&&(e=Mi.scrollingElement||yi);var s=_n.indexOf(e),a=i===Ha.sc?1:2;!~s&&(s=_n.push(e)-1),_n[s+a]||Vt(e,"scroll",Vl);var o=_n[s+a],l=o||(_n[s+a]=Ia(sS(e,n),!0)||(Es(e)?i:Ia(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,o||(l.smooth=wt.getProperty(e,"scrollBehavior")==="smooth"),l},Wc=function(e,t,n){var i=e,s=e,a=Ss(),o=a,l=t,u=Math.max(500,l*3),c=function(g,_){var m=Ss();_||m-a>l?(s=i,i=g,o=a,a=m):i+=g},h=function(){s=i=0,o=a=0},d=function(g){var _=o,m=s,f=Ss();return(g||g===0)&&g!==i&&c(g),a===o||f-o>u?0:(i+m)/(f-_)*1e3};return{update:c,reset:h,getVelocity:d}},cs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Xc=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},kf=function(){vs=wt.core.globals().ScrollTrigger,vs&&vs.core&&rS()},Vf=function(e){return wt=e||Bf(),!Ea&&wt&&typeof document<"u"&&document.body&&(an=window,Mi=document,yi=Mi.documentElement,Br=Mi.body,Nf=[an,Mi,yi,Br],wt.utils.clamp,Of=wt.core.context||function(){},Wi="onpointerenter"in Br?"pointer":"mouse",Uf=Fn.isTouch=an.matchMedia&&an.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in an||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Cn=Fn.eventTypes=("ontouchstart"in yi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in yi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zf=0},500),kf(),Ea=1),Ea};La.op=Ha;_n.cache=0;var Fn=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ea||Vf(wt)||console.warn("Please gsap.registerPlugin(Observer)"),vs||kf();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,u=n.debounce,c=n.preventDefault,h=n.onStop,d=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,f=n.onDragEnd,D=n.onDrag,y=n.onPress,S=n.onRelease,A=n.onRight,b=n.onLeft,T=n.onUp,C=n.onDown,v=n.onChangeX,x=n.onChangeY,R=n.onChange,B=n.onToggleX,L=n.onToggleY,X=n.onHover,K=n.onHoverEnd,N=n.onMove,Z=n.ignoreCheck,z=n.isNormalizer,O=n.onGestureStart,re=n.onGestureEnd,ce=n.onWheel,ye=n.onEnable,Ge=n.onDisable,q=n.onClick,J=n.scrollSpeed,me=n.capture,ie=n.allowClicks,be=n.lockAxis,we=n.onLockAxis;this.target=o=aS(o)||yi,this.vars=n,p&&(p=wt.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,J=J||1,a=a||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(an.getComputedStyle(Br).lineHeight)||22);var Le,je,ze,at,P,Rt,Ne,G=this,Me=0,et=0,Se=n.passive||!c,w=Hc(o,La),E=Hc(o,Ha),k=w(),Q=E(),ee=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Cn[0]==="pointerdown",j=Es(o),le=o.ownerDocument||Mi,se=[0,0,0],he=[0,0,0],He=0,ne=function(){return He=Ss()},pe=function(Ee,Be){return(G.event=Ee)&&p&&~p.indexOf(Ee.target)||Be&&ee&&Ee.pointerType!=="touch"||Z&&Z(Ee,Be)},Te=function(){G._vx.reset(),G._vy.reset(),je.pause(),h&&h(G)},Ce=function(){var Ee=G.deltaX=Xc(se),Be=G.deltaY=Xc(he),_t=Math.abs(Ee)>=i,Nt=Math.abs(Be)>=i;R&&(_t||Nt)&&R(G,Ee,Be,se,he),_t&&(A&&G.deltaX>0&&A(G),b&&G.deltaX<0&&b(G),v&&v(G),B&&G.deltaX<0!=Me<0&&B(G),Me=G.deltaX,se[0]=se[1]=se[2]=0),Nt&&(C&&G.deltaY>0&&C(G),T&&G.deltaY<0&&T(G),x&&x(G),L&&G.deltaY<0!=et<0&&L(G),et=G.deltaY,he[0]=he[1]=he[2]=0),(at||ze)&&(N&&N(G),ze&&(D(G),ze=!1),at=!1),Rt&&!(Rt=!1)&&we&&we(G),P&&(ce(G),P=!1),Le=0},ge=function(Ee,Be,_t){se[_t]+=Ee,he[_t]+=Be,G._vx.update(Ee),G._vy.update(Be),u?Le||(Le=requestAnimationFrame(Ce)):Ce()},Ve=function(Ee,Be){be&&!Ne&&(G.axis=Ne=Math.abs(Ee)>Math.abs(Be)?"x":"y",Rt=!0),Ne!=="y"&&(se[2]+=Ee,G._vx.update(Ee,!0)),Ne!=="x"&&(he[2]+=Be,G._vy.update(Be,!0)),u?Le||(Le=requestAnimationFrame(Ce)):Ce()},Pe=function(Ee){if(!pe(Ee,1)){Ee=cs(Ee,c);var Be=Ee.clientX,_t=Ee.clientY,Nt=Be-G.x,Ot=_t-G.y,Pi=G.isDragging;G.x=Be,G.y=_t,(Pi||Math.abs(G.startX-Be)>=s||Math.abs(G.startY-_t)>=s)&&(D&&(ze=!0),Pi||(G.isDragging=!0),Ve(Nt,Ot),Pi||m&&m(G))}},Je=G.onPress=function(_e){pe(_e,1)||_e&&_e.button||(G.axis=Ne=null,je.pause(),G.isPressed=!0,_e=cs(_e),Me=et=0,G.startX=G.x=_e.clientX,G.startY=G.y=_e.clientY,G._vx.reset(),G._vy.reset(),Vt(z?o:le,Cn[1],Pe,Se,!0),G.deltaX=G.deltaY=0,y&&y(G))},F=G.onRelease=function(_e){if(!pe(_e,1)){kt(z?o:le,Cn[1],Pe,!0);var Ee=!isNaN(G.y-G.startY),Be=G.isDragging,_t=Be&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Nt=cs(_e);!_t&&Ee&&(G._vx.reset(),G._vy.reset(),c&&ie&&wt.delayedCall(.08,function(){if(Ss()-He>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(le.createEvent){var Ot=le.createEvent("MouseEvents");Ot.initMouseEvent("click",!0,!0,an,1,Nt.screenX,Nt.screenY,Nt.clientX,Nt.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Ot)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&Be&&!z&&je.restart(!0),f&&Be&&f(G),S&&S(G,_t)}},ae=function(Ee){return Ee.touches&&Ee.touches.length>1&&(G.isGesturing=!0)&&O(Ee,G.isDragging)},Y=function(){return(G.isGesturing=!1)||re(G)},$=function(Ee){if(!pe(Ee)){var Be=w(),_t=E();ge((Be-k)*J,(_t-Q)*J,1),k=Be,Q=_t,h&&je.restart(!0)}},fe=function(Ee){if(!pe(Ee)){Ee=cs(Ee,c),ce&&(P=!0);var Be=(Ee.deltaMode===1?l:Ee.deltaMode===2?an.innerHeight:1)*g;ge(Ee.deltaX*Be,Ee.deltaY*Be,0),h&&!z&&je.restart(!0)}},ue=function(Ee){if(!pe(Ee)){var Be=Ee.clientX,_t=Ee.clientY,Nt=Be-G.x,Ot=_t-G.y;G.x=Be,G.y=_t,at=!0,h&&je.restart(!0),(Nt||Ot)&&Ve(Nt,Ot)}},Fe=function(Ee){G.event=Ee,X(G)},ot=function(Ee){G.event=Ee,K(G)},Et=function(Ee){return pe(Ee)||cs(Ee,c)&&q(G)};je=G._dc=wt.delayedCall(d||.25,Te).pause(),G.deltaX=G.deltaY=0,G._vx=Wc(0,50),G._vy=Wc(0,50),G.scrollX=w,G.scrollY=E,G.isDragging=G.isGesturing=G.isPressed=!1,Of(this),G.enable=function(_e){return G.isEnabled||(Vt(j?le:o,"scroll",Vl),a.indexOf("scroll")>=0&&Vt(j?le:o,"scroll",$,Se,me),a.indexOf("wheel")>=0&&Vt(o,"wheel",fe,Se,me),(a.indexOf("touch")>=0&&Uf||a.indexOf("pointer")>=0)&&(Vt(o,Cn[0],Je,Se,me),Vt(le,Cn[2],F),Vt(le,Cn[3],F),ie&&Vt(o,"click",ne,!0,!0),q&&Vt(o,"click",Et),O&&Vt(le,"gesturestart",ae),re&&Vt(le,"gestureend",Y),X&&Vt(o,Wi+"enter",Fe),K&&Vt(o,Wi+"leave",ot),N&&Vt(o,Wi+"move",ue)),G.isEnabled=!0,_e&&_e.type&&Je(_e),ye&&ye(G)),G},G.disable=function(){G.isEnabled&&(Pr.filter(function(_e){return _e!==G&&Es(_e.target)}).length||kt(j?le:o,"scroll",Vl),G.isPressed&&(G._vx.reset(),G._vy.reset(),kt(z?o:le,Cn[1],Pe,!0)),kt(j?le:o,"scroll",$,me),kt(o,"wheel",fe,me),kt(o,Cn[0],Je,me),kt(le,Cn[2],F),kt(le,Cn[3],F),kt(o,"click",ne,!0),kt(o,"click",Et),kt(le,"gesturestart",ae),kt(le,"gestureend",Y),kt(o,Wi+"enter",Fe),kt(o,Wi+"leave",ot),kt(o,Wi+"move",ue),G.isEnabled=G.isPressed=G.isDragging=!1,Ge&&Ge(G))},G.kill=G.revert=function(){G.disable();var _e=Pr.indexOf(G);_e>=0&&Pr.splice(_e,1),$n===G&&($n=0)},Pr.push(G),z&&Es(o)&&($n=G),G.enable(_)},iS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fn.version="3.12.5";Fn.create=function(r){return new Fn(r)};Fn.register=Vf;Fn.getAll=function(){return Pr.slice()};Fn.getById=function(r){return Pr.filter(function(e){return e.vars.id===r})[0]};Bf()&&wt.registerPlugin(Fn);const oS={class:"relative flex flex-col overflow-hidden w-full h-screen isolate pb-[20px] bg-white"},lS={class:"absolute pointer-events-none font-vcr top-1/2 text-[1.3em] text-stroke left-0 px-[15px] translate-y-1/2 w-full flex justify-between z-[9999]"},uS={class:"absolute top-1/4 font-vcr -translate-y-1/4 left-0 text-[1.3em] w-full text-center text-stroke"},cS={class:"w-full h-full",filter:"url(#balloonText)"},hS={class:"flex w-full h-full px-[10vw]"},fS={class:"m-auto font-mayego min-[768px]:hidden w-full text-[#77e777] text-center leading-[90%] scale-y-[2] select-none whitespace-pre-line",filter:"url(#balloonText)",style:{"font-size":"clamp(2em, 11vw, 8em)"}},dS={class:"absolute top-0 left-0 w-full h-full"},pS={class:"relative w-full h-full px-[5vw]"},mS=["id"],_S=["src"],gS=["src","alt"],vS=jf({__name:"Renderer.client",async setup(r){let e,t;const{data:n}=([e,t]=Jf(()=>cd("https://alexlenart.com/projects.json",{},"$YyWfV8OpjL")),e=await e,t(),e),i=Vn(n.value);er.registerPlugin(wa,Fn);let s;const a=Vn();let o,l;const u=new l_,c=Mu("muted");let h=!1,d=!1;const p=Vn([]),g=Vn(0),_=Vn(0),m=Vn(),f=Vn(),D=Vn(),y=Vn(0),S=()=>i.value[_.value].title.toLocaleLowerCase().replace(/ /g,"-"),A=()=>{s&&(s==null||s.kill()),window.innerWidth>768&&(s=er.context(()=>{f.value.innerHTML="",new wa(D.value,{type:"lines"}).lines.forEach((C,v)=>{const x=document.createElementNS("http://www.w3.org/2000/svg","tspan"),R=v==0?0:Math.max(Math.min(window.innerWidth*.09,100),40);x.setAttribute("x","50%"),x.setAttribute("dy",R+"px"),x.textContent=C.textContent,f.value.appendChild(x)})}))},b=T=>{var C,v;if(!h&&d){h=!0;let x=_.value;_.value=(_.value+T+i.value.length)%i.value.length,g.value=g.value+T,((C=document.getElementById(String(x)))==null?void 0:C.firstChild).muted=!0,((v=document.getElementById(String(_.value)))==null?void 0:v.firstChild).muted=c.value,o.toggleProjetcs(_.value,T,p.value),er.to(y,{onStart:()=>{A(),o.svgToUrl(m.value)},value:2*Math.PI/8*g.value,duration:1.2,ease:"power3.inOut",onComplete:()=>{h=!1},onUpdate:()=>{o.rotateGroup(y.value)}})}};return Qf(async()=>{await $f(),o=new tS(a.value);const T=(v,x)=>{o.projects[x]={element:v,isVideo:Tu(i.value[x]),texture:v instanceof HTMLImageElement?u.load(v.src):new Ao(v)}},C=(v,x)=>new Promise((R,B)=>{v instanceof HTMLImageElement?v.complete?(T(v,x),R(u.load(v.src))):(v.onload=()=>{T(v,x),R(u.load(v.src))},v.onerror=L=>B(L)):v instanceof HTMLVideoElement&&(v.readyState>=3?(T(v,x),R(new Ao(v))):(v.onloadeddata=()=>{T(v,x),R(new Ao(v))},v.onerror=()=>B("Error loading video")))});Promise.all(p.value.map((v,x)=>C(v.querySelector(".asset"),x))).then(()=>{d=!0,o.svgToUrl(m.value),o.placeImages(),o.renderRenderer(),l=Fn.create({target:window,type:"touch,pointer",tolerance:10,onLeft:()=>b(-1),onRight:()=>b(1)}),o.toggleProjetcs(0,1,p.value),yu(Mu("use-screen"),v=>{o.resizeScene(window.innerWidth,window.innerHeight),A(),o.svgToUrl(m.value)},{immediate:!0}),yu(c,v=>{var x;((x=document.getElementById(String(_.value)))==null?void 0:x.firstChild).muted=v})})}),ed(()=>{l==null||l.kill()}),(T,C)=>{var R;const v=td("svg:style"),x=ud;return _i(),Ii("div",oS,[yn("canvas",{ref_key:"mainCanvas",ref:a,class:"absolute top-0 left-0 w-full h-full overflow-hidden blur-[1px] z-[-1] pointer-events-none"},null,512),yn("div",lS,[yn("button",{class:"pointer-events-auto font-light uppercase select-none",onClick:C[0]||(C[0]=B=>b(1))},"prev"),yn("button",{class:"pointer-events-auto font-light uppercase select-none",onClick:C[1]||(C[1]=B=>b(-1))},"next")]),yn("p",uS,Bs((R=Dn(i)[Dn(_)])==null?void 0:R.year),1),(_i(),Ii("svg",{ref_key:"svgTitle",ref:m,class:"absolute pointer-events-none bottom-0 left-0 w-full h-full z-[9998]",xmlns:"http://www.w3.org/2000/svg",style:{"font-family":"'mayego'","white-space":"normal"}},[C[3]||(C[3]=nd('<defs><filter id="balloonText"><feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"></feGaussianBlur><feSpecularLighting in="blur" surfaceScale="10" specularConstant="1" specularExponent="50" result="highlight" lighting-color="#ffffff   "><fePointLight x="10000" y="-10000" z="18000" result="abe558cf-872f-4f11-8282-b21e1f1b92d9"></fePointLight></feSpecularLighting><feComposite in="highlight" in2="SourceAlpha" operator="in" result="highlightApplied"></feComposite><feComposite in="SourceGraphic" in2="highlightApplied" operator="arithmetic" k2="1" k3="1" result="highlightText"></feComposite><feMerge result="d9fa500e-41a0-44ec-989c-43caddee35f5"><feMergeNode in="highlightText"></feMergeNode></feMerge></filter></defs>',1)),Lo(v,null,{default:Uo(()=>C[2]||(C[2]=[Du(" @font-face { font-family: 'mayego'; font-style: normal; font-weight: 400; src: url(data:application/octet-stream;base64,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); font-display: swap; vertical-align: baseline; } .font-mayego { fill: limegreen; font-family: 'mayego'; } ")])),_:1}),yn("text",{ref_key:"svgTextElement",ref:f,x:"50%",y:"54%","text-anchor":"middle",class:"font-mayego hidden text-center scale-y-[2] select-none whitespace-pre-line",filter:"url(#balloonText)",style:{"font-size":"clamp(3em, 10vw, 7em)"}},Bs(Dn(i)[Dn(_)].title),513),(_i(),Ii("foreignObject",cS,[yn("div",hS,[yn("p",fS,Bs(Dn(i)[Dn(_)].title),1)])]))],512)),yn("h1",{ref_key:"headingElement",ref:D,id:"heading",class:id(["absolute text-[#77e777] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-mayego w-full max-w-[1000px] whitespace-pre-line text-center leading-[90%] scale-y-[2] tracking-[-2px] select-none",{invisible:!("isSafari"in T?T.isSafari:Dn(fd))()}]),style:{"font-size":"clamp(2em, 10vw, 7em)"}},Bs(Dn(i)[Dn(_)].title),3),Lo(x,{to:"/"+S(),class:"absolute bottom-1/4 font-vcr -translate-y-1/4 left-0 z-[9999] text-[1.3em] w-full text-center text-stroke"},{default:Uo(()=>C[4]||(C[4]=[Du("Explore")])),_:1},8,["to"]),yn("div",dS,[yn("ul",pS,[(_i(!0),Ii(rd,null,sd(Dn(i),(B,L)=>(_i(),Ii("li",{id:`${L}`,ref_for:!0,ref_key:"projectRef",ref:p,key:L,class:"absolute top-0 left-0 flex"},[("isVideo"in T?T.isVideo:Dn(Tu))(B)?(_i(),Ii("video",{key:0,src:B==null?void 0:B.image_src,autoplay:"",muted:!0,loop:"",playsinline:"",class:"object-contain invisible asset"},null,8,_S)):(_i(),Ii("img",{key:1,src:B==null?void 0:B.image_src,alt:B==null?void 0:B.image_description,class:"object-contain invisible asset"},null,8,gS))],8,mS))),128))])])])}}}),xS=ld(vS),SS={};function ES(r,e){const t=xS,n=od;return _i(),ad(n,null,{default:Uo(()=>[Lo(t)]),_:1})}const bS=hd(SS,[["render",ES]]);export{bS as default};
