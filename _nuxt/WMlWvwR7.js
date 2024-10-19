var qf=Object.defineProperty;var Yf=(r,e,t)=>e in r?qf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var et=(r,e,t)=>Yf(r,typeof e!="symbol"?e+"":e,t);import{_ as Zf}from"./iJLqsxH0.js";import{u as Kf,a as jf}from"./Dnme89vz.js";import{e as Jf,g as Qf,r as Bn,i as $f,j as ed,k as td,l as nd,m as id,c as Ci,a as Sn,t as Is,h as Mn,n as rd,b as yc,w as Dc,p as sd,F as ad,q as od,o as wi,d as Ac}from"./D10W_LUq.js";const Tc=r=>["webm","mp4"].some(e=>r.image_src.split(".").at(-1)===e),ld=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function Xn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ur={duration:.5,overwrite:!1,delay:0},Vl,It,at,dn=1e8,it=1/dn,No=Math.PI*2,cd=No/4,ud=0,Yu=Math.sqrt,hd=Math.cos,fd=Math.sin,At=function(e){return typeof e=="string"},dt=function(e){return typeof e=="function"},$n=function(e){return typeof e=="number"},Hl=function(e){return typeof e>"u"},On=function(e){return typeof e=="object"},Vt=function(e){return e!==!1},Wl=function(){return typeof window<"u"},Fs=function(e){return dt(e)||At(e)},Zu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ft=Array.isArray,Oo=/(?:-?\.?\d|\.)+/gi,Ku=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ju=/[+-]=-?[.\d]+/,Ju=/[^,'"\[\]\s]+/gi,dd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,Pn,Bo,Xl,an={},va={},Qu,$u=function(e){return(va=Ji(e,an))&&Yt},ql=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gs=function(e,t){return!t&&console.warn(e)},eh=function(e,t){return e&&(an[e]=t)&&va&&(va[e]=t)||an},vs=function(){return 0},pd={suppressEvents:!0,isStart:!0,kill:!1},oa={suppressEvents:!0,kill:!1},md={suppressEvents:!0},Yl={},Si=[],zo={},th,Qt={},Ya={},bc=30,la=[],Zl="",Kl=function(e){var t=e[0],n,i;if(On(t)||dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=la.length;i--&&!la[i].targetTest(t););n=la[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ah(e[i],n)))||e.splice(i,1);return e},qi=function(e){return e._gsap||Kl(pn(e))[0]._gsap},nh=function(e,t,n){return(n=e[t])&&dt(n)?e[t]():Hl(n)&&e.getAttribute&&e.getAttribute(t)||n},Ht=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},Cr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_d=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},xa=function(){var e=Si.length,t=Si.slice(0),n,i;for(zo={},Si.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ih=function(e,t,n,i){Si.length&&!It&&xa(),e.render(t,n,It&&t<0&&(e._initted||e._startAt)),Si.length&&!It&&xa()},rh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ju).length<2?t:At(e)?e.trim():e},sh=function(e){return e},gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gd=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ji=function(e,t){for(var n in t)e[n]=t[n];return e},Cc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=On(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Sa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},us=function(e){var t=e.parent||lt,n=e.keyframes?gd(Ft(e.keyframes)):gn;if(Vt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vd=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ah=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ia=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Di=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xd=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ko=function(e,t,n,i){return e._startAt&&(It?e._startAt.revert(oa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Sd=function r(e){return!e||e._ts&&r(e.parent)},wc=function(e){return e._repeat?Nr(e._tTime,e=e.duration()+e._rDelay)*e:0},Nr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ma=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fa=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},Ua=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fa(e),n._dirty||Yi(n,e)),e},oh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ma(e.rawTime(),t),(!t._dur||Ts(0,t.totalDuration(),n)-t._tTime>it)&&t.render(n,!0)),Yi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-it}},In=function(e,t,n,i){return t.parent&&Di(t),t._start=yt(($n(n)?n:n||e!==lt?un(e,n,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ah(e,t,"_first","_last",e._sort?"_start":0),Go(t)||(e._recent=t),i||oh(e,t),e._ts<0&&Ua(e,e._tTime),e},lh=function(e,t){return(an.ScrollTrigger||ql("scrollTrigger",t))&&an.ScrollTrigger.create(t,e)},ch=function(e,t,n,i,s){if(Jl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&th!==en.frame)return Si.push(e),e._lazy=[s,i],1},Md=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Go=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ed=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Md(e)&&!(!e._initted&&Go(e))||(e._ts<0||e._dp._ts<0)&&!Go(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ts(0,e._tDur,t),u=Nr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Nr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||It||i||e._zTime===it||!t&&e._zTime){if(!e._initted&&ch(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?it:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ko(e,t,n,!0),e._onUpdate&&!n&&rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Di(e,1),!n&&!It&&(rn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yd=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Or=function(e,t,n,i){var s=e._repeat,a=yt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:yt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Ua(e,e._tTime=e._tDur*o),e.parent&&Fa(e),n||Yi(e.parent,e),e},Rc=function(e){return e instanceof zt?Yi(e):Or(e,e._dur)},Dd={_start:0,endTime:vs,totalDuration:vs},un=function r(e,t,n){var i=e.labels,s=e._recent||Dd,a=e.duration()>=dn?s.endTime(!1):e._dur,o,l,c;return At(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ft(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},hs=function(e,t,n){var i=$n(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Vt(l.vars.inherit)&&l.parent;a.immediateRender=Vt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new xt(t[0],a,t[s+1])},Ti=function(e,t){return e||e===0?t(e):t},Ts=function(e,t,n){return n<e?e:n>t?t:n},Lt=function(e,t){return!At(e)||!(t=dd.exec(e))?"":t[1]},Ad=function(e,t,n){return Ti(n,function(i){return Ts(e,t,i)})},Vo=[].slice,uh=function(e,t){return e&&On(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&On(e[0]))&&!e.nodeType&&e!==Pn},Td=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return At(i)&&!t||uh(i,1)?(s=n).push.apply(s,pn(i)):n.push(i)})||n},pn=function(e,t,n){return at&&!t&&at.selector?at.selector(e):At(e)&&!n&&(Bo||!Br())?Vo.call((t||Xl).querySelectorAll(e),0):Ft(e)?Td(e,n):uh(e)?Vo.call(e,0):e?[e]:[]},Ho=function(e){return e=pn(e)[0]||gs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pn(t,n.querySelectorAll?n:n===e?gs("Invalid scope")||Xl.createElement("div"):e)}},hh=function(e){return e.sort(function(){return .5-Math.random()})},fh=function(e){if(dt(e))return e;var t=On(e)?e:{each:e},n=Zi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return At(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,m,g){var _=(g||t).length,d=a[_],p,y,x,E,C,T,A,w,R;if(!d){if(R=t.grid==="auto"?0:(t.grid||[1,dn])[1],!R){for(A=-dn;A<(A=g[R++].getBoundingClientRect().left)&&R<_;);R<_&&R--}for(d=a[_]=[],p=l?Math.min(R,_)*u-.5:i%R,y=R===dn?0:l?_*h/R-.5:i/R|0,A=0,w=dn,T=0;T<_;T++)x=T%R-p,E=y-(T/R|0),d[T]=C=c?Math.abs(c==="y"?E:x):Yu(x*x+E*E),C>A&&(A=C),C<w&&(w=C);i==="random"&&hh(d),d.max=A-w,d.min=w,d.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(R>_?_-1:c?c==="y"?_/R:R:Math.max(R,_/R))||0)*(i==="edges"?-1:1),d.b=_<0?s-_:s,d.u=Lt(t.amount||t.each)||0,n=n&&_<0?Eh(n):n}return _=(d[f]-d.min)/d.max||0,yt(d.b+(n?n(_):_)*d.v)+d.u}},Wo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+($n(n)?0:Lt(n))}},dh=function(e,t){var n=Ft(e),i,s;return!n&&On(e)&&(i=n=e.radius||dn,e.values?(e=pn(e.values),(s=!$n(e[0]))&&(i*=i)):e=Wo(e.increment)),Ti(t,n?dt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=dn,u=0,h=e.length,f,m;h--;)s?(f=e[h].x-o,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||$n(a)?u:u+Lt(a)}:Wo(e))},ph=function(e,t,n,i){return Ti(Ft(e)?!t:n===!0?!!(n=0):!i,function(){return Ft(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},bd=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Cd=function(e,t){return function(n){return e(parseFloat(n))+(t||Lt(n))}},wd=function(e,t,n){return _h(e,t,0,1,n)},mh=function(e,t,n){return Ti(n,function(i){return e[~~t(i)]})},Rd=function r(e,t,n){var i=t-e;return Ft(e)?mh(e,r(0,e.length),t):Ti(n,function(s){return(i+(s-e)%i)%i+e})},Pd=function r(e,t,n){var i=t-e,s=i*2;return Ft(e)?mh(e,r(0,e.length-1),t):Ti(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},xs=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Ju:Oo),n+=e.substr(t,i-t)+ph(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},_h=function(e,t,n,i,s){var a=t-e,o=i-n;return Ti(s,function(l){return n+((l-e)/a*o||0)})},Ld=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=At(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ft(e)&&!Ft(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Ji(Ft(e)?[]:{},e));if(!u){for(l in t)jl.call(o,e,l,"get",t[l]);s=function(g){return ec(g,o)||(a?e.p:e)}}}return Ti(n,s)},Pc=function(e,t,n){var i=e.labels,s=dn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},rn=function(e,t,n){var i=e.vars,s=i[t],a=at,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Si.length&&xa(),o&&(at=o),u=l?s.apply(c,l):s.call(c),at=a,u},as=function(e){return Di(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&rn(e,"onInterrupt"),e},Dr,gh=[],vh=function(e){if(e)if(e=!e.name&&e.default||e,Wl()||e.headless){var t=e.name,n=dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:vs,render:ec,add:jl,kill:Zd,modifier:Yd,rawVars:0},a={targetTest:0,get:0,getSetter:$l,aliases:{},register:0};if(Br(),e!==i){if(Qt[t])return;gn(i,gn(Sa(e,s),a)),Ji(i.prototype,Ji(s,Sa(e,a))),Qt[i.prop=t]=i,e.targetTest&&(la.push(i),Yl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}eh(t,i),e.register&&e.register(Yt,i,Wt)}else gh.push(e)},nt=255,os={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},Za=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*nt+.5|0},xh=function(e,t,n){var i=e?$n(e)?[e>>16,e>>8&nt,e&nt]:0:os.black,s,a,o,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),os[e])i=os[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&nt,i&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Oo),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Za(l+1/3,s,a),i[1]=Za(l,s,a),i[2]=Za(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Ku),n&&i.length<4&&(i[3]=1),i}else i=e.match(Oo)||os.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/nt,a=i[1]/nt,o=i[2]/nt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Sh=function(e){var t=[],n=[],i=-1;return e.split(Mi).forEach(function(s){var a=s.match(yr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Lc=function(e,t,n){var i="",s=(e+i).match(Mi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=xh(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Sh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Mi,"1").split(yr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Mi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Mi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in os)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Id=/hsl[a]?\(/,Mh=function(e){var t=e.join(" "),n;if(Mi.lastIndex=0,Mi.test(t))return n=Id.test(t),e[1]=Lc(e[1],n),e[0]=Lc(e[0],n,Sh(e[1])),!0},Ss,en=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,m,g=function _(d){var p=r()-i,y=d===!0,x,E,C,T;if((p>e||p<0)&&(n+=p-t),i+=p,C=i-n,x=C-a,(x>0||y)&&(T=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,a+=x+(x>=s?4:s-x),E=1),y||(l=c(_)),E)for(m=0;m<o.length;m++)o[m](C,f,T,d)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){Qu&&(!Bo&&Wl()&&(Pn=Bo=window,Xl=Pn.document||{},an.gsap=Yt,(Pn.gsapVersions||(Pn.gsapVersions=[])).push(Yt.version),$u(va||Pn.GreenSockGlobals||!Pn.gsap&&Pn||{}),gh.forEach(vh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(d){return setTimeout(d,a-h.time*1e3+1|0)},Ss=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ss=0,c=vs},lagSmoothing:function(d,p){e=d||1/0,t=Math.min(p||33,e)},fps:function(d){s=1e3/(d||240),a=h.time*1e3+s},add:function(d,p,y){var x=p?function(E,C,T,A){d(E,C,T,A),h.remove(x)}:d;return h.remove(d),o[y?"unshift":"push"](x),Br(),x},remove:function(d,p){~(p=o.indexOf(d))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},h}(),Br=function(){return!Ss&&en.wake()},We={},Fd=/^[\d.\-M][\d.\-,\s]/,Ud=/["']/g,Nd=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Ud,"").trim():+c,i=l.substr(o+1).trim();return t},Od=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Bd=function(e){var t=(e+"").split("("),n=We[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Nd(t[1])]:Od(e).split(",").map(rh)):We._CE&&Fd.test(e)?We._CE("",e):n},Eh=function(e){return function(t){return 1-e(1-t)}},yh=function r(e,t){for(var n=e._first,i;n;)n instanceof zt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Zi=function(e,t){return e&&(dt(e)?e:We[e]||Bd(e))||t},er=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Ht(e,function(o){We[o]=an[o]=s,We[a=o.toLowerCase()]=n;for(var l in s)We[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[o+"."+l]=s[l]}),s},Dh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ka=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/No*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*fd((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Dh(o);return s=No/s,l.config=function(c,u){return r(e,c,u)},l},ja=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Dh(n);return i.config=function(s){return r(e,s)},i};Ht("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;er(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;er("Elastic",Ka("in"),Ka("out"),Ka());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};er("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);er("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});er("Circ",function(r){return-(Yu(1-r*r)-1)});er("Sine",function(r){return r===1?1:-hd(r*cd)+1});er("Back",ja("in"),ja("out"),ja());We.SteppedEase=We.steps=an.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-it;return function(o){return((i*Ts(0,a,o)|0)+s)*n}}};Ur.ease=We["quad.out"];Ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zl+=r+","+r+"Params,"});var Ah=function(e,t){this.id=ud++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nh,this.set=t?t.getSetter:$l},Ms=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Or(this,+t.duration,1,1),this.data=t.data,at&&(this._ctx=at,at.data.push(this)),Ss||en.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Or(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Br(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ua(this,n),!s._dp||s.parent||oh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===it||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ih(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Nr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-it?0:this._rts,this.totalTime(Ts(-Math.abs(this._delay),this._tDur,s),i!==!1),Fa(this),xd(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Br(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ma(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=md);var i=It;return It=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),It=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(un(this,n),Vt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-it)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=dt(n)?n:sh,o=function(){var c=i.then;i.then=null,dt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){as(this)},r}();gn(Ms.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var zt=function(r){qu(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Vt(n.sortChildren),lt&&In(n.parent||lt,Xn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&lh(Xn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return hs(0,arguments,this),this},t.from=function(i,s,a){return hs(1,arguments,this),this},t.fromTo=function(i,s,a,o){return hs(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,us(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xt(i,s,un(this,a),1),this},t.call=function(i,s,a){return In(this,xt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new xt(i,a,un(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,us(a).immediateRender=Vt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,us(o).immediateRender=Vt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:yt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,d,p,y,x,E,C,T,A;if(this!==lt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,E=this._start,x=this._ts,p=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,a);if(f=yt(u%d),u===l?(_=this._repeat,f=c):(_=~~(u/d),_&&_===u/d&&(f=c,_--),f>c&&(f=c)),C=Nr(this._tTime,d),!o&&this._tTime&&C!==_&&this._tTime-C*d-this._dur<=0&&(C=_),T&&_&1&&(f=c-f,A=1),_!==C&&!this._lock){var w=T&&C&1,R=w===(T&&_&1);if(_<C&&(w=!w),o=w?0:u%c?c:u,this._lock=1,this.render(o||(A?0:yt(_*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,o=w?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;yh(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=yd(this,yt(o),yt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(rn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-it);break}}m=g}else{m=this._last;for(var v=i<0?i:f;m;){if(g=m._prev,(m._act||v<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(v-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(v-m._start)*m._ts,s,a||It&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=v?-it:it);break}}m=g}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-it)._zTime=f>=o?1:-1,this._ts))return this._start=E,Fa(this),this.render(i,s,a);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Di(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(rn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if($n(s)||(s=un(this,s,i)),!(i instanceof Ms)){if(Ft(i))return i.forEach(function(o){return a.add(o,s)}),this;if(At(i))return this.addLabel(i,s);if(dt(i))i=xt.delayedCall(0,i);else return this}return this!==i?In(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-dn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return At(i)?this.removeLabel(i):dt(i)?this.killTweensOf(i):(Ia(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(en.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=un(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=xt.delayedCall(0,s||vs,a);return o.data="isPause",this._hasPause=1,In(this,o,un(this,i))},t.removePause=function(i){var s=this._first;for(i=un(this,i);s;)s._start===i&&s.data==="isPause"&&Di(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)mi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=pn(i),l=this._first,c=$n(s),u;l;)l instanceof xt?_d(l._targets,o)&&(c?(!mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=un(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=xt.to(a,gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||it,onStart:function(){if(a.pause(),!m){var d=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==d&&Or(g,d,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,gn({startAt:{time:un(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Pc(this,un(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Pc(this,un(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Yi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=dn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,In(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Or(a,a===lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(lt._ts&&(ih(lt,Ma(i,lt)),th=en.frame),en.frame>=bc){bc+=sn.autoSleep||120;var s=lt._first;if((!s||!s._ts)&&sn.autoSleep&&en._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||en.sleep()}}},e}(Ms);gn(zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var zd=function(e,t,n,i,s,a,o){var l=new Wt(this._pt,e,t,0,1,Ph,null,s),c=0,u=0,h,f,m,g,_,d,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=xs(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(qa)||[];h=qa.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(d=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:d,c:g.charAt(1)==="="?Cr(d,g)-d:parseFloat(g)-d,m:m&&m<4?Math.round:0},c=qa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ju.test(i)||p)&&(l.e=0),this._pt=l,l},jl=function(e,t,n,i,s,a,o,l,c,u){dt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:dt(h)?c?e[t.indexOf("set")||!dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=dt(h)?c?Wd:wh:Ql,g;if(At(i)&&(~i.indexOf("random(")&&(i=xs(i)),i.charAt(1)==="="&&(g=Cr(f,i)+(Lt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Xo)return!isNaN(f*i)&&i!==""?(g=new Wt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?qd:Rh,0,m),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&ql(t,i),zd.call(this,e,t,f,i,m,l||sn.stringFilter,c))},kd=function(e,t,n,i,s){if(dt(e)&&(e=fs(e,s,t,n,i)),!On(e)||e.style&&e.nodeType||Ft(e)||Zu(e))return At(e)?fs(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=fs(e[o],s,t,n,i);return a},Th=function(e,t,n,i,s,a){var o,l,c,u;if(Qt[e]&&(o=new Qt[e]).init(s,o.rawVars?t[e]:kd(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Wt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Dr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},mi,Xo,Jl=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=e._dur,_=e._startAt,d=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:d,x=e._overwrite==="auto"&&!Vl,E=e.timeline,C,T,A,w,R,v,M,O,N,X,j,I,Z;if(E&&(!f||!s)&&(s="none"),e._ease=Zi(s,Ur.ease),e._yEase=h?Eh(Zi(h===!0?s:h,Ur.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!E&&!!i.runBackwards,!E||f&&!i.stagger){if(O=d[0]?qi(d[0]).harness:0,I=O&&i[O.prop],C=Sa(i,Yl),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&g?oa:pd),_._lazy=0),a){if(Di(e._startAt=xt.set(d,gn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Vt(l),startAt:null,delay:0,onUpdate:c&&function(){return rn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!o&&!m)&&e._startAt.revert(oa),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),A=gn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Vt(l),immediateRender:o,stagger:0,parent:p},C),I&&(A[O.prop]=I),Di(e._startAt=xt.set(d,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert(oa):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Vt(l)||l&&!g,T=0;T<d.length;T++){if(R=d[T],M=R._gsap||Kl(d)[T]._gsap,e._ptLookup[T]=X={},zo[M.id]&&Si.length&&xa(),j=y===d?T:y.indexOf(R),O&&(N=new O).init(R,I||C,e,j,y)!==!1&&(e._pt=w=new Wt(e._pt,R,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(G){X[G]=w}),N.priority&&(v=1)),!O||I)for(A in C)Qt[A]&&(N=Th(A,C,e,j,R,y))?N.priority&&(v=1):X[A]=w=jl.call(e,R,A,"get",C[A],j,y,0,i.stringFilter);e._op&&e._op[T]&&e.kill(R,e._op[T]),x&&e._pt&&(mi=e,lt.killTweensOf(R,X,e.globalTime(t)),Z=!e.parent,mi=0),e._pt&&l&&(zo[M.id]=1)}v&&Lh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,f&&t<=0&&E.render(dn,!0,!0)},Gd=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Xo=1,e.vars[t]="+=0",Jl(e,o),Xo=0,l?gs(t+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=_t(n)+Lt(h.e)),h.b&&(h.b=u.s+Lt(h.b))},Vd=function(e,t){var n=e[0]?qi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ji({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Hd=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Ft(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},fs=function(e,t,n,i,s){return dt(e)?e.call(t,n,i,s):At(e)&&~e.indexOf("random(")?xs(e):e},bh=Zl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ch={};Ht(bh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ch[r]=1});var xt=function(r){qu(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:us(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,d=l.scrollTrigger,p=l.yoyoEase,y=i.parent||lt,x=(Ft(n)||Zu(n)?$n(n[0]):"length"in i)?[n]:pn(n),E,C,T,A,w,R,v,M;if(o._targets=x.length?Kl(x):gs("GSAP target "+n+" not found. https://gsap.com",!sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||Fs(c)||Fs(u)){if(i=o.vars,E=o.timeline=new zt({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),E.kill(),E.parent=E._dp=Xn(o),E._start=0,f||Fs(c)||Fs(u)){if(A=x.length,v=f&&fh(f),On(f))for(w in f)~bh.indexOf(w)&&(M||(M={}),M[w]=f[w]);for(C=0;C<A;C++)T=Sa(i,Ch),T.stagger=0,p&&(T.yoyoEase=p),M&&Ji(T,M),R=x[C],T.duration=+fs(c,Xn(o),C,R,x),T.delay=(+fs(u,Xn(o),C,R,x)||0)-o._delay,!f&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),E.to(R,T,v?v(C,R,x):0),E._ease=We.none;E.duration()?c=u=0:o.timeline=0}else if(g){us(gn(E.vars.defaults,{ease:"none"})),E._ease=Zi(g.ease||i.ease||"none");var O=0,N,X,j;if(Ft(g))g.forEach(function(I){return E.to(x,I,">")}),E.duration();else{T={};for(w in g)w==="ease"||w==="easeEach"||Hd(w,g[w],T,g.easeEach);for(w in T)for(N=T[w].sort(function(I,Z){return I.t-Z.t}),O=0,C=0;C<N.length;C++)X=N[C],j={ease:X.e,duration:(X.t-(C?N[C-1].t:0))/100*c},j[w]=X.v,E.to(x,j,O),O+=j.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return m===!0&&!Vl&&(mi=Xn(o),lt.killTweensOf(x),mi=0),In(y,Xn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===yt(y._time)&&Vt(h)&&Sd(Xn(o))&&y.data!=="nested")&&(o._tTime=-it,o.render(Math.max(0,-u)||0)),d&&lh(Xn(o),d),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-it&&!u?l:i<it?0:i,f,m,g,_,d,p,y,x,E;if(!c)Ed(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=yt(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===yt(h/_)&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(E=this._yEase,f=c-f),d=Nr(this._tTime,_),f===o&&!a&&this._initted&&g===d)return this._tTime=h,this;g!==d&&(x&&this._yEase&&yh(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(yt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(ch(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==d))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!s&&!g&&(rn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ko(this,i,s,a),rn(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ko(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Di(this,1),!s&&!(u&&!o)&&(h||o||p)&&(rn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ss||en.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Jl(this,c),u=this._ease(c/this._dur),Gd(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Ua(this,0),this.parent||ah(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?as(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mi&&mi.vars.overwrite!==!0)._first||as(this),this.parent&&a!==this.timeline.totalDuration()&&Or(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?pn(i):o,c=this._ptLookup,u=this._pt,h,f,m,g,_,d,p;if((!s||s==="all")&&vd(o,l))return s==="all"&&(this._pt=0),as(this);for(h=this._op=this._op||[],s!=="all"&&(At(s)&&(_={},Ht(s,function(y){return _[y]=1}),s=_),s=Vd(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,g=f,m={}):(m=h[p]=h[p]||{},g=s);for(_ in g)d=f&&f[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&Ia(this,d,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&as(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return hs(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return hs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return lt.killTweensOf(i,s,a)},e}(Ms);gn(xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ht("staggerTo,staggerFrom,staggerFromTo",function(r){xt[r]=function(){var e=new zt,t=Vo.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ql=function(e,t,n){return e[t]=n},wh=function(e,t,n){return e[t](n)},Wd=function(e,t,n,i){return e[t](i.fp,n)},Xd=function(e,t,n){return e.setAttribute(t,n)},$l=function(e,t){return dt(e[t])?wh:Hl(e[t])&&e.setAttribute?Xd:Ql},Rh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qd=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ph=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ec=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Yd=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Zd=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ia(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Kd=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Lh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Wt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Rh,this.d=l||this,this.set=c||Ql,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Kd,this.m=n,this.mt=s,this.tween=i},r}();Ht(Zl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Yl[r]=1});an.TweenMax=an.TweenLite=xt;an.TimelineLite=an.TimelineMax=zt;lt=new zt({sortChildren:!1,defaults:Ur,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=Mh;var Ki=[],ca={},jd=[],Ic=0,Jd=0,Ja=function(e){return(ca[e]||jd).map(function(t){return t()})},qo=function(){var e=Date.now(),t=[];e-Ic>2&&(Ja("matchMediaInit"),Ki.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Pn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ja("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ic=e,Ja("matchMedia"))},Ih=function(){function r(t,n){this.selector=n&&Ho(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Jd++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){dt(n)&&(s=i,i=n,n=dt);var a=this,o=function(){var c=at,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ho(s)),at=a,h=i.apply(a,arguments),dt(h)&&a._r.push(h),at=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===dt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=at;at=null,n(this),at=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ki.length;a--;)Ki[a].id===this.id&&Ki.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),Qd=function(){function r(t){this.contexts=[],this.scope=t,at&&at.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){On(n)||(n={matches:n});var a=new Ih(0,s||this.scope),o=a.conditions={},l,c,u;at&&!a.selector&&(a.selector=at.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Pn.matchMedia(n[c]),l&&(Ki.indexOf(a)<0&&Ki.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(qo):l.addEventListener("change",qo)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ea={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return vh(i)})},timeline:function(e){return new zt(e)},getTweensOf:function(e,t){return lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){At(e)&&(e=pn(e)[0]);var s=qi(e||{}).get,a=n?sh:rh;return n==="native"&&(n=""),e&&(t?a((Qt[t]&&Qt[t].get||s)(e,t,n,i)):function(o,l,c){return a((Qt[o]&&Qt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=pn(e),e.length>1){var i=e.map(function(u){return Yt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Qt[t],o=qi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Dr._pt=0,h.init(e,n?u+n:u,Dr,0,[e]),h.render(1,h),Dr._pt&&ec(1,Dr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Yt.to(e,Ji((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zi(e.ease,Ur.ease)),Cc(Ur,e||{})},config:function(e){return Cc(sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qt[o]&&!an[o]&&gs(t+" effect requires "+o+" plugin.")}),Ya[t]=function(o,l,c){return n(pn(o),gn(l||{},s),c)},a&&(zt.prototype[t]=function(o,l,c){return this.add(Ya[t](o,On(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){We[e]=Zi(t)},parseEase:function(e,t){return arguments.length?Zi(e,t):We},getById:function(e){return lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zt(e),i,s;for(n.smoothChildTiming=Vt(e.smoothChildTiming),lt.remove(n),n._dp=0,n._time=n._tTime=lt._time,i=lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof xt&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=s;return In(lt,n,0),n},context:function(e,t){return e?new Ih(e,t):at},matchMedia:function(e){return new Qd(e)},matchMediaRefresh:function(){return Ki.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qo()},addEventListener:function(e,t){var n=ca[e]||(ca[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ca[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Rd,wrapYoyo:Pd,distribute:fh,random:ph,snap:dh,normalize:wd,getUnit:Lt,clamp:Ad,splitColor:xh,toArray:pn,selector:Ho,mapRange:_h,pipe:bd,unitize:Cd,interpolate:Ld,shuffle:hh},install:$u,effects:Ya,ticker:en,updateRoot:zt.updateRoot,plugins:Qt,globalTimeline:lt,core:{PropTween:Wt,globals:eh,Tween:xt,Timeline:zt,Animation:Ms,getCache:qi,_removeLinkedListItem:Ia,reverting:function(){return It},context:function(e){return e&&at&&(at.data.push(e),e._ctx=at),at},suppressOverwrites:function(e){return Vl=e}}};Ht("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ea[r]=xt[r]});en.add(zt.updateRoot);Dr=Ea.to({},{duration:0});var $d=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ep=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=$d(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Qa=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(At(s)&&(l={},Ht(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ep(o,s)}}}},Yt=Ea.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)It?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qa("roundProps",Wo),Qa("modifiers"),Qa("snap",dh))||Ea;xt.version=zt.version=Yt.version="3.12.5";Qu=1;Wl()&&Br();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fc,_i,wr,tc,Hi,Uc,nc,tp=function(){return typeof window<"u"},ei={},Bi=180/Math.PI,Rr=Math.PI/180,rr=Math.atan2,Nc=1e8,ic=/([A-Z])/g,np=/(left|right|width|margin|padding|x)/i,ip=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ap=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Fh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Uh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},op=function(e,t,n){return e.style[t]=n},lp=function(e,t,n){return e.style.setProperty(t,n)},cp=function(e,t,n){return e._gsap[t]=n},up=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hp=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},fp=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},ct="transform",Xt=ct+"Origin",dp=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ei&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Un[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=qn(i,o)}):this.tfm[e]=a.x?a[e]:qn(i,e),e===Xt&&(this.tfm.zOrigin=a.zOrigin);else return Un.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(ct)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xt,t,"")),e=ct}(s||t)&&this.props.push(e,t,s[e])},Nh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pp=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ic,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=nc(),(!s||!s.isStart)&&!n[ct]&&(Nh(n),i.zOrigin&&n[Xt]&&(n[Xt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Oh=function(e,t){var n={target:e,props:[],revert:pp,save:dp};return e._gsap||Yt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Bh,Zo=function(e,t){var n=_i.createElementNS?_i.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_i.createElement(e);return n&&n.style?n:_i.createElement(e)},Nn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ic,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,zr(t)||t,1)||""},Oc="O,Moz,ms,Ms,Webkit".split(","),zr=function(e,t,n){var i=t||Hi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Oc[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Oc[a]:"")+e},Ko=function(){tp()&&window.document&&(Fc=window,_i=Fc.document,wr=_i.documentElement,Hi=Zo("div")||{style:{}},Zo("div"),ct=zr(ct),Xt=ct+"Origin",Hi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bh=!!zr("perspective"),nc=Yt.core.reverting,tc=1)},$a=function r(e){var t=Zo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(wr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),wr.removeChild(t),this.style.cssText=s,a},Bc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zh=function(e){var t;try{t=e.getBBox()}catch{t=$a.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===$a||(t=$a.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Bc(e,["x","cx","x1"])||0,y:+Bc(e,["y","cy","y1"])||0,width:0,height:0}:t},kh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zh(e))},Qi=function(e,t){if(t){var n=e.style,i;t in ei&&t!==Xt&&(t=ct),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ic,"-$1").toLowerCase())):n.removeAttribute(t)}},gi=function(e,t,n,i,s,a){var o=new Wt(e._pt,t,n,0,1,a?Uh:Fh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},zc={deg:1,rad:1,turn:1},mp={grid:1,flex:1},Ai=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Hi.style,l=np.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,_,d,p;if(i===a||!s||zc[i]||zc[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&kh(e),(m||a==="%")&&(ei[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],_t(m?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_i||!_.appendChild)&&(_=_i.body),d=_._gsap,d&&m&&d.width&&l&&d.time===en.time&&!d.uncache)return _t(s/d.width*h);if(m&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,g=e[u],y?e.style[t]=y:Qi(e,t)}else(m||a==="%")&&!mp[Nn(_,"display")]&&(o.position=Nn(e,"position")),_===e&&(o.position="static"),_.appendChild(Hi),g=Hi[u],_.removeChild(Hi),o.position="absolute";return l&&m&&(d=qi(_),d.time=en.time,d.width=_[u]),_t(f?g*s/h:g&&s?h/g*s:0)},qn=function(e,t,n,i){var s;return tc||Ko(),t in Un&&t!=="transform"&&(t=Un[t],~t.indexOf(",")&&(t=t.split(",")[0])),ei[t]&&t!=="transform"?(s=ys(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Da(Nn(e,Xt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ya[t]&&ya[t](e,t,n)||Nn(e,t)||nh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ai(e,t,s,n)+n:s},_p=function(e,t,n,i){if(!n||n==="none"){var s=zr(t,e,1),a=s&&Nn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Nn(e,"borderTopColor"))}var o=new Wt(this._pt,e.style,t,0,1,Ph),l=0,c=0,u,h,f,m,g,_,d,p,y,x,E,C;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Nn(e,t)||i,_?e.style[t]=_:Qi(e,t)),u=[n,i],Mh(u),n=u[0],i=u[1],f=n.match(yr)||[],C=i.match(yr)||[],C.length){for(;h=yr.exec(i);)d=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),d!==(_=f[c++]||"")&&(m=parseFloat(_)||0,E=_.substr((m+"").length),d.charAt(1)==="="&&(d=Cr(m,d)+E),p=parseFloat(d),x=d.substr((p+"").length),l=yr.lastIndex-x.length,x||(x=x||sn.units[t]||E,l===i.length&&(i+=x,o.e+=x)),E!==x&&(m=Ai(e,t,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:p-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Uh:Fh;return ju.test(i)&&(o.e=0),this._pt=o,o},kc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gp=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kc[n]||n,t[1]=kc[i]||i,t.join(" ")},vp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ei[o]&&(l=1,o=o==="transformOrigin"?Xt:ct),Qi(n,o);l&&(Qi(n,ct),a&&(a.svg&&n.removeAttribute("transform"),ys(n,1),a.uncache=1,Nh(i)))}},ya={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Wt(e._pt,t,n,0,0,vp);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Es=[1,0,0,1,0,0],Gh={},Vh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gc=function(e){var t=Nn(e,ct);return Vh(t)?Es:t.substr(7).match(Ku).map(_t)},rc=function(e,t){var n=e._gsap||qi(e),i=e.style,s=Gc(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Es:s):(s===Es&&!e.offsetParent&&e!==wr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,wr.appendChild(e)),s=Gc(e),l?i.display=l:Qi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):wr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},jo=function(e,t,n,i,s,a){var o=e._gsap,l=s||rc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],_=l[2],d=l[3],p=l[4],y=l[5],x=t.split(" "),E=parseFloat(x[0])||0,C=parseFloat(x[1])||0,T,A,w,R;n?l!==Es&&(A=m*d-g*_)&&(w=E*(d/A)+C*(-_/A)+(_*y-d*p)/A,R=E*(-g/A)+C*(m/A)-(m*y-g*p)/A,E=w,C=R):(T=zh(e),E=T.x+(~x[0].indexOf("%")?E/100*T.width:E),C=T.y+(~(x[1]||x[0]).indexOf("%")?C/100*T.height:C)),i||i!==!1&&o.smooth?(p=E-c,y=C-u,o.xOffset=h+(p*m+y*_)-p,o.yOffset=f+(p*g+y*d)-y):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=C,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Xt]="0px 0px",a&&(gi(a,o,"xOrigin",c,E),gi(a,o,"yOrigin",u,C),gi(a,o,"xOffset",h,o.xOffset),gi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},ys=function(e,t){var n=e._gsap||new Ah(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Nn(e,Xt)||"0",u,h,f,m,g,_,d,p,y,x,E,C,T,A,w,R,v,M,O,N,X,j,I,Z,G,z,re,ae,De,Ne,q,K;return u=h=f=_=d=p=y=x=E=0,m=g=1,n.svg=!!(e.getCTM&&kh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ct]!=="none"?l[ct]:"")),i.scale=i.rotate=i.translate="none"),A=rc(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),jo(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,T=n.yOrigin||0,A!==Es&&(M=A[0],O=A[1],N=A[2],X=A[3],u=j=A[4],h=I=A[5],A.length===6?(m=Math.sqrt(M*M+O*O),g=Math.sqrt(X*X+N*N),_=M||O?rr(O,M)*Bi:0,y=N||X?rr(N,X)*Bi+_:0,y&&(g*=Math.abs(Math.cos(y*Rr))),n.svg&&(u-=C-(C*M+T*N),h-=T-(C*O+T*X))):(K=A[6],Ne=A[7],re=A[8],ae=A[9],De=A[10],q=A[11],u=A[12],h=A[13],f=A[14],w=rr(K,De),d=w*Bi,w&&(R=Math.cos(-w),v=Math.sin(-w),Z=j*R+re*v,G=I*R+ae*v,z=K*R+De*v,re=j*-v+re*R,ae=I*-v+ae*R,De=K*-v+De*R,q=Ne*-v+q*R,j=Z,I=G,K=z),w=rr(-N,De),p=w*Bi,w&&(R=Math.cos(-w),v=Math.sin(-w),Z=M*R-re*v,G=O*R-ae*v,z=N*R-De*v,q=X*v+q*R,M=Z,O=G,N=z),w=rr(O,M),_=w*Bi,w&&(R=Math.cos(w),v=Math.sin(w),Z=M*R+O*v,G=j*R+I*v,O=O*R-M*v,I=I*R-j*v,M=Z,j=G),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,p=180-p),m=_t(Math.sqrt(M*M+O*O+N*N)),g=_t(Math.sqrt(I*I+K*K)),w=rr(j,I),y=Math.abs(w)>2e-4?w*Bi:0,E=q?1/(q<0?-q:q):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Vh(Nn(e,ct)),Z&&e.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=_t(m),n.scaleY=_t(g),n.rotation=_t(_)+o,n.rotationX=_t(d)+o,n.rotationY=_t(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xt]=Da(c)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?Sp:Bh?Hh:xp,n.uncache=0,n},Da=function(e){return(e=e.split(" "))[0]+" "+e[1]},eo=function(e,t,n){var i=Lt(t);return _t(parseFloat(t)+parseFloat(Ai(e,"x",n+"px",i)))+i},xp=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Hh(e,t)},Ri="0deg",Kr="0px",Pi=") ",Hh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,d=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,E="",C=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Ri||u!==Ri)){var T=parseFloat(u)*Rr,A=Math.sin(T),w=Math.cos(T),R;T=parseFloat(h)*Rr,R=Math.cos(T),a=eo(y,a,A*R*-x),o=eo(y,o,-Math.sin(T)*-x),l=eo(y,l,w*R*-x+x)}d!==Kr&&(E+="perspective("+d+Pi),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(C||a!==Kr||o!==Kr||l!==Kr)&&(E+=l!==Kr||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Pi),c!==Ri&&(E+="rotate("+c+Pi),u!==Ri&&(E+="rotateY("+u+Pi),h!==Ri&&(E+="rotateX("+h+Pi),(f!==Ri||m!==Ri)&&(E+="skew("+f+", "+m+Pi),(g!==1||_!==1)&&(E+="scale("+g+", "+_+Pi),y.style[ct]=E||"translate(0, 0)"},Sp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,d=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),E=parseFloat(o),C,T,A,w,R;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Rr,c*=Rr,C=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-f,w=Math.cos(l-c)*f,c&&(u*=Rr,R=Math.tan(c-u),R=Math.sqrt(1+R*R),A*=R,w*=R,u&&(R=Math.tan(u),R=Math.sqrt(1+R*R),C*=R,T*=R)),C=_t(C),T=_t(T),A=_t(A),w=_t(w)):(C=h,w=f,T=A=0),(x&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(x=Ai(m,"x",a,"px"),E=Ai(m,"y",o,"px")),(g||_||d||p)&&(x=_t(x+g-(g*C+_*A)+d),E=_t(E+_-(g*T+_*w)+p)),(i||s)&&(R=m.getBBox(),x=_t(x+i/100*R.width),E=_t(E+s/100*R.height)),R="matrix("+C+","+T+","+A+","+w+","+x+","+E+")",m.setAttribute("transform",R),y&&(m.style[ct]=R)},Mp=function(e,t,n,i,s){var a=360,o=At(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Bi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Nc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Nc)%a-~~(c/a)*a)),e._pt=f=new Wt(e._pt,t,n,i,c,rp),f.e=u,f.u="deg",e._props.push(n),f},Vc=function(e,t){for(var n in t)e[n]=t[n];return e},Ep=function(e,t,n){var i=Vc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ct]=t,o=ys(n,1),Qi(n,ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ct],a[ct]=t,o=ys(n,1),a[ct]=c);for(l in ei)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Lt(c),g=Lt(u),h=m!==g?Ai(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Wt(e._pt,o,l,h,f-h,Yo),e._pt.u=g||0,e._props.push(l));Vc(o,i)};Ht("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ya[e>1?"border"+r:r]=function(o,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return qn(o,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,m,h)}});var Wh={name:"css",register:Ko,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,m,g,_,d,p,y,x,E,C,T,A,w;tc||Ko(),this.styles=this.styles||Oh(e),w=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Qt[_]&&Th(_,t,n,i,e,s)))){if(m=typeof u,g=ya[_],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=xs(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Mi.lastIndex=0,Mi.test(c)||(d=Lt(c),p=Lt(u)),p?d!==p&&(c=Ai(e,_,c,p)+p):d&&(u+=d),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),w.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],At(c)&&~c.indexOf("random(")&&(c=xs(c)),Lt(c+"")||c==="auto"||(c+=sn.units[_]||Lt(qn(e,_))||""),(c+"").charAt(1)==="="&&(c=qn(e,_))):c=qn(e,_),f=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Un&&(_==="autoAlpha"&&(f===1&&qn(e,"visibility")==="hidden"&&h&&(f=0),w.push("visibility",0,o.visibility),gi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Un[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in ei,x){if(this.styles.save(_),E||(C=e._gsap,C.renderTransform&&!t.parseTransform||ys(e,t.parseTransform),T=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new Wt(this._pt,o,ct,0,1,C.renderTransform,C,0,-1),E.dep=1),_==="scale")this._pt=new Wt(this._pt,C,"scaleY",C.scaleY,(y?Cr(C.scaleY,y+h):h)-C.scaleY||0,Yo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){w.push(Xt,0,o[Xt]),u=gp(u),C.svg?jo(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&gi(this,C,"zOrigin",C.zOrigin,p),gi(this,o,_,Da(c),Da(u)));continue}else if(_==="svgOrigin"){jo(e,u,1,T,0,this);continue}else if(_ in Gh){Mp(this,C,_,f,y?Cr(f,y+u):u);continue}else if(_==="smoothOrigin"){gi(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){Ep(this,u,e);continue}}else _ in o||(_=zr(_)||_);if(x||(h||h===0)&&(f||f===0)&&!ip.test(u)&&_ in o)d=(c+"").substr((f+"").length),h||(h=0),p=Lt(u)||(_ in sn.units?sn.units[_]:d),d!==p&&(f=Ai(e,_,c,p)),this._pt=new Wt(this._pt,x?C:o,_,f,(y?Cr(f,y+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?ap:Yo),this._pt.u=p||0,d!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=sp);else if(_ in o)_p.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){ql(_,u);continue}x||(_ in o?w.push(_,0,o[_]):w.push(_,1,c||e[_])),a.push(_)}}A&&Lh(this)},render:function(e,t){if(t.tween._time||!nc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qn,aliases:Un,getSetter:function(e,t,n){var i=Un[t];return i&&i.indexOf(",")<0&&(t=i),t in ei&&t!==Xt&&(e._gsap.x||qn(e,"x"))?n&&Uc===n?t==="scale"?up:cp:(Uc=n||{})&&(t==="scale"?hp:fp):e.style&&!Hl(e.style[t])?op:~t.indexOf("-")?lp:$l(e,t)},core:{_removeProperty:Qi,_getMatrix:rc}};Yt.utils.checkPrefix=zr;Yt.core.getStyleSaver=Oh;(function(r,e,t,n){var i=Ht(r+","+e+","+t,function(s){ei[s]=1});Ht(e,function(s){sn.units[s]="deg",Gh[s]=1}),Un[i[13]]=r+","+e,Ht(n,function(s){var a=s.split(":");Un[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){sn.units[r]="px"});Yt.registerPlugin(Wh);var ji=Yt.registerPlugin(Wh)||Yt;ji.core.Tween;/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yp=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Xh(r){var e=r.nodeType,t="";if(e===1||e===9||e===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)t+=Xh(r)}else if(e===3||e===4)return r.nodeValue;return t}/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ar,Jo,qh,jr,Yh,Na,Dp=/(?:\r|\n|\t\t)/g,Ap=/(?:\s\s+)/g,Tp=" ",Zh=function(e){Ar=document,Jo=window,jr=jr||e||Jo.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),jr&&(Na=jr.utils.toArray,Yh=jr.core.context||function(){},qh=1)},Kh=function(e){return Jo.getComputedStyle(e)},sc=function(e){return e.position==="absolute"||e.absolute===!0},bp=function(e,t){for(var n=t.length,i;--n>-1;)if(i=t[n],e.substr(0,i.length)===i)return i.length},Cp=" style='position:relative;display:inline-block;'",Hc=function(e,t){e===void 0&&(e="");var n=~e.indexOf("++"),i=1;return n&&(e=e.split("++").join("")),function(){return"<"+t+Cp+(e?" class='"+e+(n?i++:"")+"'>":">")}},jh=function r(e,t,n){var i=e.nodeType;if(i===1||i===9||i===11)for(e=e.firstChild;e;e=e.nextSibling)r(e,t,n);else(i===3||i===4)&&(e.nodeValue=e.nodeValue.split(t).join(n))},to=function(e,t){for(var n=t.length;--n>-1;)e.push(t[n])},Wc=function(e,t,n){for(var i;e&&e!==t;){if(i=e._next||e.nextSibling,i)return i.textContent.charAt(0)===n;e=e.parentNode||e._parent}},wp=function r(e){var t=Na(e.childNodes),n=t.length,i,s;for(i=0;i<n;i++)s=t[i],s._isSplit?r(s):i&&s.previousSibling&&s.previousSibling.nodeType===3?(s.previousSibling.nodeValue+=s.nodeType===3?s.nodeValue:s.firstChild.nodeValue,e.removeChild(s)):s.nodeType!==3&&(e.insertBefore(s.firstChild,s),e.removeChild(s))},Rn=function(e,t){return parseFloat(t[e])||0},Rp=function(e,t,n,i,s,a,o){var l=Kh(e),c=Rn("paddingLeft",l),u=-999,h=Rn("borderBottomWidth",l)+Rn("borderTopWidth",l),f=Rn("borderLeftWidth",l)+Rn("borderRightWidth",l),m=Rn("paddingTop",l)+Rn("paddingBottom",l),g=Rn("paddingLeft",l)+Rn("paddingRight",l),_=Rn("fontSize",l)*(t.lineThreshold||.2),d=l.textAlign,p=[],y=[],x=[],E=t.wordDelimiter||" ",C=t.tag?t.tag:t.span?"span":"div",T=t.type||t.split||"chars,words,lines",A=s&&~T.indexOf("lines")?[]:null,w=~T.indexOf("words"),R=~T.indexOf("chars"),v=sc(t),M=t.linesClass,O=~(M||"").indexOf("++"),N=[],X=l.display==="flex",j=e.style.display,I,Z,G,z,re,ae,De,Ne,q,K,he,se;for(O&&(M=M.split("++").join("")),X&&(e.style.display="block"),Z=e.getElementsByTagName("*"),G=Z.length,re=[],I=0;I<G;I++)re[I]=Z[I];if(A||v)for(I=0;I<G;I++)z=re[I],ae=z.parentNode===e,(ae||v||R&&!w)&&(se=z.offsetTop,A&&ae&&Math.abs(se-u)>_&&(z.nodeName!=="BR"||I===0)&&(De=[],A.push(De),u=se),v&&(z._x=z.offsetLeft,z._y=se,z._w=z.offsetWidth,z._h=z.offsetHeight),A&&((z._isSplit&&ae||!R&&ae||w&&ae||!w&&z.parentNode.parentNode===e&&!z.parentNode._isSplit)&&(De.push(z),z._x-=c,Wc(z,e,E)&&(z._wordEnd=!0)),z.nodeName==="BR"&&(z.nextSibling&&z.nextSibling.nodeName==="BR"||I===0)&&A.push([])));for(I=0;I<G;I++){if(z=re[I],ae=z.parentNode===e,z.nodeName==="BR"){A||v?(z.parentNode&&z.parentNode.removeChild(z),re.splice(I--,1),G--):w||e.appendChild(z);continue}if(v&&(q=z.style,!w&&!ae&&(z._x+=z.parentNode._x,z._y+=z.parentNode._y),q.left=z._x+"px",q.top=z._y+"px",q.position="absolute",q.display="block",q.width=z._w+1+"px",q.height=z._h+"px"),!w&&R)if(z._isSplit)for(z._next=Z=z.nextSibling,z.parentNode.appendChild(z);Z&&Z.nodeType===3&&Z.textContent===" ";)z._next=Z.nextSibling,z.parentNode.appendChild(Z),Z=Z.nextSibling;else z.parentNode._isSplit?(z._parent=z.parentNode,!z.previousSibling&&z.firstChild&&(z.firstChild._isFirst=!0),z.nextSibling&&z.nextSibling.textContent===" "&&!z.nextSibling.nextSibling&&N.push(z.nextSibling),z._next=z.nextSibling&&z.nextSibling._isFirst?null:z.nextSibling,z.parentNode.removeChild(z),re.splice(I--,1),G--):ae||(se=!z.nextSibling&&Wc(z.parentNode,e,E),z.parentNode._parent&&z.parentNode._parent.appendChild(z),se&&z.parentNode.appendChild(Ar.createTextNode(" ")),C==="span"&&(z.style.display="inline"),p.push(z));else z.parentNode._isSplit&&!z._isSplit&&z.innerHTML!==""?y.push(z):R&&!z._isSplit&&(C==="span"&&(z.style.display="inline"),p.push(z))}for(I=N.length;--I>-1;)N[I].parentNode.removeChild(N[I]);if(A){for(v&&(K=Ar.createElement(C),e.appendChild(K),he=K.offsetWidth+"px",se=K.offsetParent===e?0:e.offsetLeft,e.removeChild(K)),q=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(Ne=E===" "&&(!v||!w&&!R),I=0;I<A.length;I++){for(De=A[I],K=Ar.createElement(C),K.style.cssText="display:block;text-align:"+d+";position:"+(v?"absolute;":"relative;"),M&&(K.className=M+(O?I+1:"")),x.push(K),G=De.length,Z=0;Z<G;Z++)De[Z].nodeName!=="BR"&&(z=De[Z],K.appendChild(z),Ne&&z._wordEnd&&K.appendChild(Ar.createTextNode(" ")),v&&(Z===0&&(K.style.top=z._y+"px",K.style.left=c+se+"px"),z.style.top="0px",se&&(z.style.left=z._x-se+"px")));G===0?K.innerHTML="&nbsp;":!w&&!R&&(wp(K),jh(K," "," ")),v&&(K.style.width=he,K.style.height=z._h+"px"),e.appendChild(K)}e.style.cssText=q}v&&(o>e.clientHeight&&(e.style.height=o-m+"px",e.clientHeight<o&&(e.style.height=o+h+"px")),a>e.clientWidth&&(e.style.width=a-g+"px",e.clientWidth<a&&(e.style.width=a+f+"px"))),X&&(j?e.style.display=j:e.style.removeProperty("display")),to(n,p),w&&to(i,y),to(s,x)},Pp=function(e,t,n,i){var s=t.tag?t.tag:t.span?"span":"div",a=t.type||t.split||"chars,words,lines",o=~a.indexOf("chars"),l=sc(t),c=t.wordDelimiter||" ",u=function(v){return v===c||v===Tp&&c===" "},h=c!==" "?"":l?"&#173; ":" ",f="</"+s+">",m=1,g=t.specialChars?typeof t.specialChars=="function"?t.specialChars:bp:null,_,d,p,y,x,E,C,T,A=Ar.createElement("div"),w=e.parentNode;for(w.insertBefore(A,e),A.textContent=e.nodeValue,w.removeChild(e),e=A,_=Xh(e),C=_.indexOf("<")!==-1,t.reduceWhiteSpace!==!1&&(_=_.replace(Ap," ").replace(Dp,"")),C&&(_=_.split("<").join("{{LT}}")),x=_.length,d=(_.charAt(0)===" "?h:"")+n(),p=0;p<x;p++)if(E=_.charAt(p),g&&(T=g(_.substr(p),t.specialChars)))E=_.substr(p,T||1),d+=o&&E!==" "?i()+E+"</"+s+">":E,p+=T-1;else if(u(E)&&!u(_.charAt(p-1))&&p){for(d+=m?f:"",m=0;u(_.charAt(p+1));)d+=h,p++;p===x-1?d+=h:_.charAt(p+1)!==")"&&(d+=h+n(),m=1)}else E==="{"&&_.substr(p,6)==="{{LT}}"?(d+=o?i()+"{{LT}}</"+s+">":"{{LT}}",p+=5):E.charCodeAt(0)>=55296&&E.charCodeAt(0)<=56319||_.charCodeAt(p+1)>=65024&&_.charCodeAt(p+1)<=65039?(y=((_.substr(p,12).split(yp)||[])[1]||"").length||2,d+=o&&E!==" "?i()+_.substr(p,y)+"</"+s+">":_.substr(p,y),p+=y-1):d+=o&&E!==" "?i()+E+"</"+s+">":E;e.outerHTML=d+(m?f:""),C&&jh(w,"{{LT}}","<")},Lp=function r(e,t,n,i){var s=Na(e.childNodes),a=s.length,o=sc(t),l,c;if(e.nodeType!==3||a>1){for(t.absolute=!1,l=0;l<a;l++)c=s[l],c._next=c._isFirst=c._parent=c._wordEnd=null,(c.nodeType!==3||/\S+/.test(c.nodeValue))&&(o&&c.nodeType!==3&&Kh(c).display==="inline"&&(c.style.display="inline-block",c.style.position="relative"),c._isSplit=!0,r(c,t,n,i));t.absolute=o,e._isSplit=!0;return}Pp(e,t,n,i)},Aa=function(){function r(t,n){qh||Zh(),this.elements=Na(t),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=n||{},Yh(this),this.split(n)}var e=r.prototype;return e.split=function(n){this.isSplit&&this.revert(),this.vars=n=n||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var i=this.elements.length,s=n.tag?n.tag:n.span?"span":"div",a=Hc(n.wordsClass,s),o=Hc(n.charsClass,s),l,c,u;--i>-1;)u=this.elements[i],this._originals[i]={html:u.innerHTML,style:u.getAttribute("style")},l=u.clientHeight,c=u.clientWidth,Lp(u,n,a,o),Rp(u,n,this.chars,this.words,this.lines,c,l);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},e.revert=function(){var n=this._originals;if(!n)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(i,s){i.innerHTML=n[s].html,i.setAttribute("style",n[s].style)}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},r.create=function(n,i){return new r(n,i)},r}();Aa.version="3.12.5";Aa.register=Zh;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="169",Ip=0,Xc=1,Fp=2,Jh=1,Up=2,Wn=3,ti=0,kt=1,Yn=2,Jn=0,Pr=1,qc=2,Yc=3,Zc=4,Np=5,Gi=100,Op=101,Bp=102,zp=103,kp=104,Gp=200,Vp=201,Hp=202,Wp=203,Qo=204,$o=205,Xp=206,qp=207,Yp=208,Zp=209,Kp=210,jp=211,Jp=212,Qp=213,$p=214,el=0,tl=1,nl=2,kr=3,il=4,rl=5,sl=6,al=7,Qh=0,em=1,tm=2,Ei=0,nm=1,im=2,rm=3,sm=4,am=5,om=6,lm=7,$h=300,Gr=301,Vr=302,ol=303,ll=304,Oa=306,cl=1e3,Wi=1001,ul=1002,mn=1003,cm=1004,Us=1005,tn=1006,no=1007,Xi=1008,ni=1009,ef=1010,tf=1011,Ds=1012,oc=1013,$i=1014,Zn=1015,tr=1016,lc=1017,cc=1018,Hr=1020,nf=35902,rf=1021,sf=1022,bn=1023,af=1024,of=1025,Lr=1026,Wr=1027,lf=1028,uc=1029,cf=1030,hc=1031,fc=1033,ua=33776,ha=33777,fa=33778,da=33779,hl=35840,fl=35841,dl=35842,pl=35843,ml=36196,_l=37492,gl=37496,vl=37808,xl=37809,Sl=37810,Ml=37811,El=37812,yl=37813,Dl=37814,Al=37815,Tl=37816,bl=37817,Cl=37818,wl=37819,Rl=37820,Pl=37821,pa=36492,Ll=36494,Il=36495,uf=36283,Fl=36284,Ul=36285,Nl=36286,um=3200,hm=3201,fm=0,dm=1,pi="",Tn="srgb",bi="srgb-linear",dc="display-p3",Ba="display-p3-linear",Ta="linear",st="srgb",ba="rec709",Ca="p3",sr=7680,Kc=519,pm=512,mm=513,_m=514,hf=515,gm=516,vm=517,xm=518,Sm=519,Ol=35044,jc="300 es",Kn=2e3,wa=2001;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=Math.PI/180,Bl=180/Math.PI;function yi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Gt(r,e,t){return Math.max(e,Math.min(t,r))}function Mm(r,e){return(r%e+e)%e}function ro(r,e,t){return(1-t)*r+t*e}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=i[0],d=i[3],p=i[6],y=i[1],x=i[4],E=i[7],C=i[2],T=i[5],A=i[8];return s[0]=a*_+o*y+l*C,s[3]=a*d+o*x+l*T,s[6]=a*p+o*E+l*A,s[1]=c*_+u*y+h*C,s[4]=c*d+u*x+h*T,s[7]=c*p+u*E+h*A,s[2]=f*_+m*y+g*C,s[5]=f*d+m*x+g*T,s[8]=f*p+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new Fe;function ff(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function As(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Em(){const r=As("canvas");return r.style.display="block",r}const Jc={};function ma(r){r in Jc||(Jc[r]=!0,console.warn(r))}function ym(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Dm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Am(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qc=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[bi]:{transfer:Ta,primaries:ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Tn]:{transfer:st,primaries:ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ba]:{transfer:Ta,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3($c),fromReference:r=>r.applyMatrix3(Qc)},[dc]:{transfer:st,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3($c),fromReference:r=>r.applyMatrix3(Qc).convertLinearToSRGB()}},Tm=new Set([bi,Ba]),Je={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Tm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Jr[e].toReference,i=Jr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Jr[r].primaries},getTransfer:function(r){return r===pi?Ta:Jr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Jr[e].luminanceCoefficients)}};function Ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ar;class bm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=As("canvas")),ar.width=e.width,ar.height=e.height;const n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ir(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cm=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(oo(i[a].image)):s.push(oo(i[a]))}else s=oo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wm=0;class Dt extends Yr{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Wi,i=Wi,s=tn,a=Xi,o=bn,l=ni,c=Dt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=yi(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cl:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cl:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=$h;Dt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(m+1)/2,C=(p+1)/2,T=(u+f)/4,A=(h+_)/4,w=(g+d)/4;return x>E&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=A/n):E>C?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=T/i,s=w/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=w/s),this.set(n,i,s,t),this}let y=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rm extends Yr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Rm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pf extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let d=1-o;const p=l*f+c*m+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,p*y);d=Math.sin(d*T)/C,o=Math.sin(o*T)/C}const E=o*y;if(l=l*d+f*E,c=c*d+m*E,u=u*d+g*E,h=h*d+_*E,d===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-o*m,e[t+2]=c*g+u*m+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new V,eu=new bs;class Cs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Os.subVectors(this.max,Qr),or.subVectors(e.a,Qr),lr.subVectors(e.b,Qr),cr.subVectors(e.c,Qr),oi.subVectors(lr,or),li.subVectors(cr,lr),Li.subVectors(or,cr);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Li.z,Li.y,oi.z,0,-oi.x,li.z,0,-li.x,Li.z,0,-Li.x,-oi.y,oi.x,0,-li.y,li.x,0,-Li.y,Li.x,0];return!co(t,or,lr,cr,Os)||(t=[1,0,0,0,1,0,0,0,1],!co(t,or,lr,cr,Os))?!1:(Bs.crossVectors(oi,li),t=[Bs.x,Bs.y,Bs.z],co(t,or,lr,cr,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new V,new V,new V,new V,new V,new V,new V,new V],En=new V,Ns=new Cs,or=new V,lr=new V,cr=new V,oi=new V,li=new V,Li=new V,Qr=new V,Os=new V,Bs=new V,Ii=new V;function co(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ii.fromArray(r,s);const o=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lm=new Cs,$r=new V,uo=new V;class pc{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(uo)),this.expandByPoint($r.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new V,ho=new V,zs=new V,ci=new V,fo=new V,ks=new V,po=new V;class Im{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ho.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ho);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zs),o=ci.dot(this.direction),l=-ci.dot(zs),c=ci.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ho).addScaledVector(zs,f),m}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){fo.subVectors(t,e),ks.subVectors(n,e),po.crossVectors(fo,ks);let a=this.direction.dot(po),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(ks.crossVectors(ci,ks));if(l<0)return null;const c=o*this.direction.dot(fo.cross(ci));if(c<0||l+c>a)return null;const u=-o*ci.dot(po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,i,s,a,o,l,c,u,h,f,m,g,_,d){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,m,g,_,d)}set(e,t,n,i,s,a,o,l,c,u,h,f,m,g,_,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),a=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fm,e,Um)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ui.crossVectors(n,jt),ui.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ui.crossVectors(n,jt)),ui.normalize(),Gs.crossVectors(jt,ui),i[0]=ui.x,i[4]=Gs.x,i[8]=jt.x,i[1]=ui.y,i[5]=Gs.y,i[9]=jt.y,i[2]=ui.z,i[6]=Gs.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],y=n[3],x=n[7],E=n[11],C=n[15],T=i[0],A=i[4],w=i[8],R=i[12],v=i[1],M=i[5],O=i[9],N=i[13],X=i[2],j=i[6],I=i[10],Z=i[14],G=i[3],z=i[7],re=i[11],ae=i[15];return s[0]=a*T+o*v+l*X+c*G,s[4]=a*A+o*M+l*j+c*z,s[8]=a*w+o*O+l*I+c*re,s[12]=a*R+o*N+l*Z+c*ae,s[1]=u*T+h*v+f*X+m*G,s[5]=u*A+h*M+f*j+m*z,s[9]=u*w+h*O+f*I+m*re,s[13]=u*R+h*N+f*Z+m*ae,s[2]=g*T+_*v+d*X+p*G,s[6]=g*A+_*M+d*j+p*z,s[10]=g*w+_*O+d*I+p*re,s[14]=g*R+_*N+d*Z+p*ae,s[3]=y*T+x*v+E*X+C*G,s[7]=y*A+x*M+E*j+C*z,s[11]=y*w+x*O+E*I+C*re,s[15]=y*R+x*N+E*Z+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],d=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*m-n*l*m)+_*(+t*l*m-t*c*f+s*a*f-i*a*m+i*c*u-s*l*u)+d*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],d=e[14],p=e[15],y=h*d*c-_*f*c+_*l*m-o*d*m-h*l*p+o*f*p,x=g*f*c-u*d*c-g*l*m+a*d*m+u*l*p-a*f*p,E=u*_*c-g*h*c+g*o*m-a*_*m-u*o*p+a*h*p,C=g*h*l-u*_*l-g*o*f+a*_*f+u*o*d-a*h*d,T=t*y+n*x+i*E+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(_*f*s-h*d*s-_*i*m+n*d*m+h*i*p-n*f*p)*A,e[2]=(o*d*s-_*l*s+_*i*c-n*d*c-o*i*p+n*l*p)*A,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*m-n*l*m)*A,e[4]=x*A,e[5]=(u*d*s-g*f*s+g*i*m-t*d*m-u*i*p+t*f*p)*A,e[6]=(g*l*s-a*d*s-g*i*c+t*d*c+a*i*p-t*l*p)*A,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*m+t*l*m)*A,e[8]=E*A,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*p-t*h*p)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*A,e[12]=C*A,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*d+t*h*d)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*d-t*o*d)*A,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,_=a*u,d=a*h,p=o*h,y=l*c,x=l*u,E=l*h,C=n.x,T=n.y,A=n.z;return i[0]=(1-(_+p))*C,i[1]=(m+E)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(m-E)*T,i[5]=(1-(f+p))*T,i[6]=(d+y)*T,i[7]=0,i[8]=(g+x)*A,i[9]=(d-y)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ur.set(i[0],i[1],i[2]).length();const a=ur.set(i[4],i[5],i[6]).length(),o=ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/s,u=1/a,h=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Kn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(o===Kn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===wa)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Kn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,m=(n+i)*u;let g,_;if(o===Kn)g=(a+s)*h,_=-2*h;else if(o===wa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ur=new V,yn=new ht,Fm=new V(0,0,0),Um=new V(1,1,1),ui=new V,Gs=new V,jt=new V,tu=new ht,nu=new bs;class ri{constructor(e=0,t=0,n=0,i=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const iu=new V,hr=new bs,Gn=new ht,Vs=new V,es=new V,Om=new V,Bm=new bs,ru=new V(1,0,0),su=new V(0,1,0),au=new V(0,0,1),ou={type:"added"},zm={type:"removed"},fr={type:"childadded",child:null},mo={type:"childremoved",child:null};class qt extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new V,t=new ri,n=new bs,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Fe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(es,Vs,this.up):Gn.lookAt(Vs,es,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Gn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zm),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new V(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new V,Vn=new V,_o=new V,Hn=new V,dr=new V,pr=new V,lu=new V,go=new V,vo=new V,xo=new V,So=new ut,Mo=new ut,Eo=new ut;class hn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Dn.subVectors(i,t),Vn.subVectors(n,t),_o.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(Vn),l=Dn.dot(_o),c=Vn.dot(Vn),u=Vn.dot(_o),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return So.setScalar(0),Mo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(e,t),Mo.fromBufferAttribute(e,n),Eo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(So,s.x),a.addScaledVector(Mo,s.y),a.addScaledVector(Eo,s.z),a}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),Vn.subVectors(e,t),Dn.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Dn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;dr.subVectors(i,n),pr.subVectors(s,n),go.subVectors(e,n);const l=dr.dot(go),c=pr.dot(go);if(l<=0&&c<=0)return t.copy(n);vo.subVectors(e,i);const u=dr.dot(vo),h=pr.dot(vo);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(dr,a);xo.subVectors(e,s);const m=dr.dot(xo),g=pr.dot(xo);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(pr,o);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return lu.subVectors(s,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(lu,o);const p=1/(d+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(dr,a).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function yo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Mm(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=yo(a,s,e+1/3),this.g=yo(a,s,e),this.b=yo(a,s,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Je.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Gt(Pt.r*255,0,255))*65536+Math.round(Gt(Pt.g*255,0,255))*256+Math.round(Gt(Pt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Tn){Je.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Hs);const n=ro(hi.h,Hs.h,t),i=ro(hi.s,Hs.s,t),s=ro(hi.l,Hs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new qe;qe.NAMES=_f;let km=0;class ws extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Pr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=$o,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gf extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new V,Ws=new ke;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}}class vf extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xf extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qn extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gm=0;const cn=new ht,Do=new qt,mr=new V,Jt=new Cs,ts=new Cs,Et=new V;class si extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?xf:vf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Jt.min,ts.min),Jt.expandByPoint(Et),Et.addVectors(Jt.max,ts.max),Jt.expandByPoint(Et)):(Jt.expandByPoint(ts.min),Jt.expandByPoint(ts.max))}Jt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(mr.fromBufferAttribute(e,c),Et.add(mr)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new V,l[w]=new V;const c=new V,u=new V,h=new V,f=new ke,m=new ke,g=new ke,_=new V,d=new V;function p(w,R,v){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,R),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const M=1/(m.x*g.y-g.x*m.y);isFinite(M)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(M),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(M),o[w].add(_),o[R].add(_),o[v].add(_),l[w].add(d),l[R].add(d),l[v].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let w=0,R=y.length;w<R;++w){const v=y[w],M=v.start,O=v.count;for(let N=M,X=M+O;N<X;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new V,E=new V,C=new V,T=new V;function A(w){C.fromBufferAttribute(i,w),T.copy(C);const R=o[w];x.copy(R),x.sub(C.multiplyScalar(C.dot(R))).normalize(),E.crossVectors(T,R);const M=E.dot(l[w])<0?-1:1;a.setXYZW(w,x.x,x.y,x.z,M)}for(let w=0,R=y.length;w<R;++w){const v=y[w],M=v.start,O=v.count;for(let N=M,X=M+O;N<X;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,d),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new Cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new ht,Fi=new Im,Xs=new pc,uu=new V,qs=new V,Ys=new V,Zs=new V,Ao=new V,Ks=new V,hu=new V,js=new V;class _n extends qt{constructor(e=new si,t=new gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ks.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ao.fromBufferAttribute(h,e),a?Ks.addScaledVector(Ao,u):Ks.addScaledVector(Ao.sub(t),u))}t.add(Ks)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Fi.copy(e.ray).recast(e.near),!(Xs.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Xs,uu)===null||Fi.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(cu),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],y=Math.max(d.start,m.start),x=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let E=y,C=x;E<C;E+=3){const T=o.getX(E),A=o.getX(E+1),w=o.getX(E+2);i=Js(this,p,e,n,c,u,h,T,A,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=o.getX(d),x=o.getX(d+1),E=o.getX(d+2);i=Js(this,a,e,n,c,u,h,y,x,E),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],y=Math.max(d.start,m.start),x=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let E=y,C=x;E<C;E+=3){const T=E,A=E+1,w=E+2;i=Js(this,p,e,n,c,u,h,T,A,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=d,x=d+1,E=d+2;i=Js(this,a,e,n,c,u,h,y,x,E),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}}}function Vm(r,e,t,n,i,s,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ti,o),l===null)return null;js.copy(o),js.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:r}}function Js(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,qs),r.getVertexPosition(l,Ys),r.getVertexPosition(c,Zs);const u=Vm(r,e,t,n,qs,Ys,Zs,hu);if(u){const h=new V;hn.getBarycoord(hu,qs,Ys,Zs,h),i&&(u.uv=hn.getInterpolatedAttribute(i,o,l,c,h,new ke)),s&&(u.uv1=hn.getInterpolatedAttribute(s,o,l,c,h,new ke)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};hn.getNormal(qs,Ys,Zs,f.normal),u.face=f,u.barycoord=h}return u}class Rs extends si{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qn(c,3)),this.setAttribute("normal",new Qn(u,3)),this.setAttribute("uv",new Qn(h,2));function g(_,d,p,y,x,E,C,T,A,w,R){const v=E/A,M=C/w,O=E/2,N=C/2,X=T/2,j=A+1,I=w+1;let Z=0,G=0;const z=new V;for(let re=0;re<I;re++){const ae=re*M-N;for(let De=0;De<j;De++){const Ne=De*v-O;z[_]=Ne*y,z[d]=ae*x,z[p]=X,c.push(z.x,z.y,z.z),z[_]=0,z[d]=0,z[p]=T>0?1:-1,u.push(z.x,z.y,z.z),h.push(De/A),h.push(1-re/w),Z+=1}}for(let re=0;re<w;re++)for(let ae=0;ae<A;ae++){const De=f+ae+j*re,Ne=f+ae+j*(re+1),q=f+(ae+1)+j*(re+1),K=f+(ae+1)+j*re;l.push(De,Ne,K),l.push(Ne,q,K),G+=6}o.addGroup(m,G,R),m+=G,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const n=Xr(r[t]);for(const i in n)e[i]=n[i]}return e}function Hm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Sf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const mc={clone:Xr,merge:Bt};var Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=Hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mf extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new V,fu=new ke,du=new ke;class $t extends Mf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,fu,du),t.subVectors(du,fu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,gr=1;class qm extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(_r,gr,e,t);i.layers=this.layers,this.add(i);const s=new $t(_r,gr,e,t);s.layers=this.layers,this.add(s);const a=new $t(_r,gr,e,t);a.layers=this.layers,this.add(a);const o=new $t(_r,gr,e,t);o.layers=this.layers,this.add(o);const l=new $t(_r,gr,e,t);l.layers=this.layers,this.add(l);const c=new $t(_r,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ef extends Dt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ym extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ef(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rs(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Jn});s.uniforms.tEquirect.value=t;const a=new _n(i,s),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=tn),new qm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const To=new V,Zm=new V,Km=new Fe;class di{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=To.subVectors(n,t).cross(Zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Km.getNormalMatrix(e),i=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new pc,Qs=new V;class yf{constructor(e=new di,t=new di,n=new di,i=new di,s=new di,a=new di){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],g=i[9],_=i[10],d=i[11],p=i[12],y=i[13],x=i[14],E=i[15];if(n[0].setComponents(l-s,f-c,d-m,E-p).normalize(),n[1].setComponents(l+s,f+c,d+m,E+p).normalize(),n[2].setComponents(l+a,f+u,d+g,E+y).normalize(),n[3].setComponents(l-a,f-u,d-g,E-y).normalize(),n[4].setComponents(l-o,f-h,d-_,E-x).normalize(),t===Kn)n[5].setComponents(l+o,f+h,d+_,E+x).normalize();else if(t===wa)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qs.x=i.normal.x>0?e.max.x:e.min.x,Qs.y=i.normal.y>0?e.max.y:e.min.y,Qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Df(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function jm(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class qr extends si{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const y=p*f-a;for(let x=0;x<c;x++){const E=x*h-s;g.push(E,-y,0),_.push(0,0,1),d.push(x/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,E=y+c*(p+1),C=y+1+c*(p+1),T=y+1+c*p;m.push(x,E,T),m.push(E,C,T)}this.setIndex(m),this.setAttribute("position",new Qn(g,3)),this.setAttribute("normal",new Qn(_,3)),this.setAttribute("uv",new Qn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i_=`#ifdef USE_AOMAP
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
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_=`#ifdef USE_BATCHING
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
#endif`,a_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u_=`#ifdef USE_IRIDESCENCE
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
#endif`,h_=`#ifdef USE_BUMPMAP
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,S_=`#define PI 3.141592653589793
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
} // validated`,M_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E_=`vec3 transformedNormal = objectNormal;
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
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",C_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
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
#endif`,F_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B_=`#ifdef USE_GRADIENTMAP
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
}`,z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
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
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,W_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
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
#endif`,K_=`struct PhysicalMaterial {
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
}`,j_=`
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ug=`float getShadowMask() {
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
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
}`,i0=`#if DEPTH_PACKING == 3200
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
}`,r0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
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
}`,c0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
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
}`,p0=`#define MATCAP
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
}`,m0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,v0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,y0=`#define TOON
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
}`,D0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,w0=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:Jm,alphahash_pars_fragment:Qm,alphamap_fragment:$m,alphamap_pars_fragment:e_,alphatest_fragment:t_,alphatest_pars_fragment:n_,aomap_fragment:i_,aomap_pars_fragment:r_,batching_pars_vertex:s_,batching_vertex:a_,begin_vertex:o_,beginnormal_vertex:l_,bsdfs:c_,iridescence_fragment:u_,bumpmap_pars_fragment:h_,clipping_planes_fragment:f_,clipping_planes_pars_fragment:d_,clipping_planes_pars_vertex:p_,clipping_planes_vertex:m_,color_fragment:__,color_pars_fragment:g_,color_pars_vertex:v_,color_vertex:x_,common:S_,cube_uv_reflection_fragment:M_,defaultnormal_vertex:E_,displacementmap_pars_vertex:y_,displacementmap_vertex:D_,emissivemap_fragment:A_,emissivemap_pars_fragment:T_,colorspace_fragment:b_,colorspace_pars_fragment:C_,envmap_fragment:w_,envmap_common_pars_fragment:R_,envmap_pars_fragment:P_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:H_,envmap_vertex:I_,fog_vertex:F_,fog_pars_vertex:U_,fog_fragment:N_,fog_pars_fragment:O_,gradientmap_pars_fragment:B_,lightmap_pars_fragment:z_,lights_lambert_fragment:k_,lights_lambert_pars_fragment:G_,lights_pars_begin:V_,lights_toon_fragment:W_,lights_toon_pars_fragment:X_,lights_phong_fragment:q_,lights_phong_pars_fragment:Y_,lights_physical_fragment:Z_,lights_physical_pars_fragment:K_,lights_fragment_begin:j_,lights_fragment_maps:J_,lights_fragment_end:Q_,logdepthbuf_fragment:$_,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:rg,map_particle_fragment:sg,map_particle_pars_fragment:ag,metalnessmap_fragment:og,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:ug,morphnormal_vertex:hg,morphtarget_pars_vertex:fg,morphtarget_vertex:dg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:_g,normal_pars_vertex:gg,normal_vertex:vg,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:yg,opaque_fragment:Dg,packing:Ag,premultiplied_alpha_fragment:Tg,project_vertex:bg,dithering_fragment:Cg,dithering_pars_fragment:wg,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Fg,shadowmask_pars_fragment:Ug,skinbase_vertex:Ng,skinning_pars_vertex:Og,skinning_vertex:Bg,skinnormal_vertex:zg,specularmap_fragment:kg,specularmap_pars_fragment:Gg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Hg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:qg,uv_pars_vertex:Yg,uv_vertex:Zg,worldpos_vertex:Kg,background_vert:jg,background_frag:Jg,backgroundCube_vert:Qg,backgroundCube_frag:$g,cube_vert:e0,cube_frag:t0,depth_vert:n0,depth_frag:i0,distanceRGBA_vert:r0,distanceRGBA_frag:s0,equirect_vert:a0,equirect_frag:o0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:u0,meshbasic_frag:h0,meshlambert_vert:f0,meshlambert_frag:d0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:_0,meshnormal_frag:g0,meshphong_vert:v0,meshphong_frag:x0,meshphysical_vert:S0,meshphysical_frag:M0,meshtoon_vert:E0,meshtoon_frag:y0,points_vert:D0,points_frag:A0,shadow_vert:T0,shadow_frag:b0,sprite_vert:C0,sprite_frag:w0},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ln={basic:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Bt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Bt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Bt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Bt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Bt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Bt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Bt([oe.common,oe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Bt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Ln.physical={uniforms:Bt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const $s={r:0,b:0,g:0},Ni=new ri,R0=new ht;function P0(r,e,t,n,i,s,a){const o=new qe(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const E=g(y);E===null?p(o,l):E&&E.isColor&&(p(E,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(y,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Oa)?(u===void 0&&(u=new _n(new Rs(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Xr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ni.copy(x.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(R0.makeRotationFromEuler(Ni)),u.material.toneMapped=Je.getTransfer(E.colorSpace)!==st,(h!==E||f!==E.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,m=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new _n(new qr(2,2),new on({name:"BackgroundMaterial",uniforms:Xr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,m=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB($s,Sf(r)),n.buffers.color.setClear($s.r,$s.g,$s.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:d}}function L0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(v,M,O,N,X){let j=!1;const I=h(N,O,M);s!==I&&(s=I,c(s.object)),j=m(v,N,O,X),j&&g(v,N,O,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(v,M,O,N),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,M,O){const N=O.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let j=X[M.id];j===void 0&&(j={},X[M.id]=j);let I=j[N];return I===void 0&&(I=f(l()),j[N]=I),I}function f(v){const M=[],O=[],N=[];for(let X=0;X<t;X++)M[X]=0,O[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:O,attributeDivisors:N,object:v,attributes:{},index:null}}function m(v,M,O,N){const X=s.attributes,j=M.attributes;let I=0;const Z=O.getAttributes();for(const G in Z)if(Z[G].location>=0){const re=X[G];let ae=j[G];if(ae===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;I++}return s.attributesNum!==I||s.index!==N}function g(v,M,O,N){const X={},j=M.attributes;let I=0;const Z=O.getAttributes();for(const G in Z)if(Z[G].location>=0){let re=j[G];re===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),X[G]=ae,I++}s.attributes=X,s.attributesNum=I,s.index=N}function _(){const v=s.newAttributes;for(let M=0,O=v.length;M<O;M++)v[M]=0}function d(v){p(v,0)}function p(v,M){const O=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;O[v]=1,N[v]===0&&(r.enableVertexAttribArray(v),N[v]=1),X[v]!==M&&(r.vertexAttribDivisor(v,M),X[v]=M)}function y(){const v=s.newAttributes,M=s.enabledAttributes;for(let O=0,N=M.length;O<N;O++)M[O]!==v[O]&&(r.disableVertexAttribArray(O),M[O]=0)}function x(v,M,O,N,X,j,I){I===!0?r.vertexAttribIPointer(v,M,O,X,j):r.vertexAttribPointer(v,M,O,N,X,j)}function E(v,M,O,N){_();const X=N.attributes,j=O.getAttributes(),I=M.defaultAttributeValues;for(const Z in j){const G=j[Z];if(G.location>=0){let z=X[Z];if(z===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(z=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(z=v.instanceColor)),z!==void 0){const re=z.normalized,ae=z.itemSize,De=e.get(z);if(De===void 0)continue;const Ne=De.buffer,q=De.type,K=De.bytesPerElement,he=q===r.INT||q===r.UNSIGNED_INT||z.gpuType===oc;if(z.isInterleavedBufferAttribute){const se=z.data,Pe=se.stride,Ae=z.offset;if(se.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)p(G.location+Ue,se.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)d(G.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let Ue=0;Ue<G.locationSize;Ue++)x(G.location+Ue,ae/G.locationSize,q,re,Pe*K,(Ae+ae/G.locationSize*Ue)*K,he)}else{if(z.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)p(G.location+se,z.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let se=0;se<G.locationSize;se++)d(G.location+se);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let se=0;se<G.locationSize;se++)x(G.location+se,ae/G.locationSize,q,re,ae*K,ae/G.locationSize*se*K,he)}}else if(I!==void 0){const re=I[Z];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(G.location,re);break;case 3:r.vertexAttrib3fv(G.location,re);break;case 4:r.vertexAttrib4fv(G.location,re);break;default:r.vertexAttrib1fv(G.location,re)}}}}y()}function C(){w();for(const v in n){const M=n[v];for(const O in M){const N=M[O];for(const X in N)u(N[X].object),delete N[X];delete M[O]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const M=n[v.id];for(const O in M){const N=M[O];for(const X in N)u(N[X].object),delete N[X];delete M[O]}delete n[v.id]}function A(v){for(const M in n){const O=n[M];if(O[v.id]===void 0)continue;const N=O[v.id];for(const X in N)u(N[X].object),delete N[X];delete O[v.id]}}function w(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function I0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function F0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==bn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!w)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:C,maxSamples:T}}function U0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new di,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!d)s?u(null):c();else{const y=s?0:n,x=y*4;let E=p.clippingState||null;l.value=E,E=u(g,f,x,m);for(let C=0;C!==x;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,E=m;x!==_;++x,E+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(d,E),d[E+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function N0(r){let e=new WeakMap;function t(a,o){return o===ol?a.mapping=Gr:o===ll&&(a.mapping=Vr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ol||o===ll)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ym(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Af extends Mf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,pu=[.125,.215,.35,.446,.526,.582],Vi=20,bo=new Af,mu=new qe;let Co=null,wo=0,Ro=0,Po=!1;const zi=(1+Math.sqrt(5))/2,vr=1/zi,_u=[new V(-zi,vr,0),new V(zi,vr,0),new V(-vr,0,zi),new V(vr,0,zi),new V(0,zi,-vr),new V(0,zi,vr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Co=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,wo,Ro),this._renderer.xr.enabled=Po,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:tr,format:bn,colorSpace:bi,depthBuffer:!1},i=vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O0(s)),this._blurMaterial=B0(s,e,t)}return i}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,i){const o=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(mu),u.toneMapping=Ei,u.autoClear=!1;const m=new gf({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new _n(new Rs,m);let _=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,_=!0):(m.color.copy(mu),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ea(i,y*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gr||e.mapping===Vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_u[(i-s-1)%_u.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _n(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):Vi;d>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Vi}`);const p=[];let y=0;for(let A=0;A<Vi;++A){const w=A/_,R=Math.exp(-w*w/2);p.push(R),A===0?y+=R:A<d&&(y+=2*R)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const E=this._sizeLods[i],C=3*E*(i>x-Tr?i-x+Tr:0),T=4*(this._cubeSize-E);ea(t,C,T,3*E,2*E),l.setRenderTarget(t),l.render(h,bo)}}function O0(r){const e=[],t=[],n=[];let i=r;const s=r-Tr+1+pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Tr?l=pu[a-r+Tr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,d=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(d*g*m),E=new Float32Array(p*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,w=T>2?0:-1,R=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];y.set(R,_*g*T),x.set(f,d*g*T);const v=[T,T,T,T,T,T];E.set(v,p*g*T)}const C=new si;C.setAttribute("position",new Cn(y,_)),C.setAttribute("uv",new Cn(x,d)),C.setAttribute("faceIndex",new Cn(E,p)),e.push(C),i>Tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vu(r,e,t){const n=new ii(r,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function B0(r,e,t){const n=new Float32Array(Vi),i=new V(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function xu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Su(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function z0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ol||l===ll,u=l===Gr||l===Vr;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new gu(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&i(m)?(t===null&&(t=new gu(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function k0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ma("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function G0(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)e.remove(_[d])}f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)e.update(_[d],r.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let x=0,E=y.length;x<E;x+=3){const C=y[x+0],T=y[x+1],A=y[x+2];f.push(C,T,T,A,A,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,E=y.length/3-1;x<E;x+=3){const C=x+0,T=x+1,A=x+2;f.push(C,T,T,A,A,C)}}else return;const d=new(ff(f)?xf:vf)(f,1);d.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function V0(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){r.drawElements(n,m,s,f*a),t.update(m,n,1)}function c(f,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,f*a,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];t.update(d,n,1)}function h(f,m,g,_){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<_.length;y++)t.update(p,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function H0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function W0(r,e,t){const n=new WeakMap,i=new ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let R=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let E=o.attributes.position.count*x,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*C*4*h),A=new pf(T,E,C,h);A.type=Zn,A.needsUpdate=!0;const w=x*4;for(let v=0;v<h;v++){const M=d[v],O=p[v],N=y[v],X=E*C*4*v;for(let j=0;j<M.count;j++){const I=j*w;m===!0&&(i.fromBufferAttribute(M,j),T[X+I+0]=i.x,T[X+I+1]=i.y,T[X+I+2]=i.z,T[X+I+3]=0),g===!0&&(i.fromBufferAttribute(O,j),T[X+I+4]=i.x,T[X+I+5]=i.y,T[X+I+6]=i.z,T[X+I+7]=0),_===!0&&(i.fromBufferAttribute(N,j),T[X+I+8]=i.x,T[X+I+9]=i.y,T[X+I+10]=i.z,T[X+I+11]=N.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new ke(E,C)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function X0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Tf extends Dt{constructor(e,t,n,i,s,a,o,l,c,u=Lr){if(u!==Lr&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Lr&&(n=$i),n===void 0&&u===Wr&&(n=Hr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bf=new Dt,Mu=new Tf(1,1),Cf=new pf,wf=new Pm,Rf=new Ef,Eu=[],yu=[],Du=new Float32Array(16),Au=new Float32Array(9),Tu=new Float32Array(4);function Zr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Eu[i];if(s===void 0&&(s=new Float32Array(i),Eu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function za(r,e){let t=yu[e];t===void 0&&(t=new Int32Array(e),yu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function q0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function Z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function K0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function j0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Tu.set(n),r.uniformMatrix2fv(this.addr,!1,Tu),Mt(t,n)}}function J0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Au.set(n),r.uniformMatrix3fv(this.addr,!1,Au),Mt(t,n)}}function Q0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Du.set(n),r.uniformMatrix4fv(this.addr,!1,Du),Mt(t,n)}}function $0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function iv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function ov(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Mu.compareFunction=hf,s=Mu):s=bf,t.setTexture2D(e||s,i)}function lv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wf,i)}function cv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rf,i)}function uv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cf,i)}function hv(r){switch(r){case 5126:return q0;case 35664:return Y0;case 35665:return Z0;case 35666:return K0;case 35674:return j0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return $0;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return uv}}function fv(r,e){r.uniform1fv(this.addr,e)}function dv(r,e){const t=Zr(e,this.size,2);r.uniform2fv(this.addr,t)}function pv(r,e){const t=Zr(e,this.size,3);r.uniform3fv(this.addr,t)}function mv(r,e){const t=Zr(e,this.size,4);r.uniform4fv(this.addr,t)}function _v(r,e){const t=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gv(r,e){const t=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vv(r,e){const t=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xv(r,e){r.uniform1iv(this.addr,e)}function Sv(r,e){r.uniform2iv(this.addr,e)}function Mv(r,e){r.uniform3iv(this.addr,e)}function Ev(r,e){r.uniform4iv(this.addr,e)}function yv(r,e){r.uniform1uiv(this.addr,e)}function Dv(r,e){r.uniform2uiv(this.addr,e)}function Av(r,e){r.uniform3uiv(this.addr,e)}function Tv(r,e){r.uniform4uiv(this.addr,e)}function bv(r,e,t){const n=this.cache,i=e.length,s=za(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||bf,s[a])}function Cv(r,e,t){const n=this.cache,i=e.length,s=za(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wf,s[a])}function wv(r,e,t){const n=this.cache,i=e.length,s=za(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Rf,s[a])}function Rv(r,e,t){const n=this.cache,i=e.length,s=za(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cf,s[a])}function Pv(r){switch(r){case 5126:return fv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return _v;case 35675:return gv;case 35676:return vv;case 5124:case 35670:return xv;case 35667:case 35671:return Sv;case 35668:case 35672:return Mv;case 35669:case 35673:return Ev;case 5125:return yv;case 36294:return Dv;case 36295:return Av;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Rv}}class Lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hv(t.type)}}class Iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pv(t.type)}}class Fv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function bu(r,e){r.seq.push(e),r.map[e.id]=e}function Uv(r,e,t){const n=r.name,i=n.length;for(Lo.lastIndex=0;;){const s=Lo.exec(n),a=Lo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bu(t,c===void 0?new Lv(o,r,e):new Iv(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Fv(o),bu(t,h)),t=h}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Uv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Cu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Nv=37297;let Ov=0;function Bv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zv(r){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(r);let n;switch(e===t?n="":e===Ca&&t===ba?n="LinearDisplayP3ToLinearSRGB":e===ba&&t===Ca&&(n="LinearSRGBToLinearDisplayP3"),r){case bi:case Ba:return[n,"LinearTransferOETF"];case Tn:case dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function wu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Bv(r.getShaderSource(e),a)}else return i}function kv(r,e){const t=zv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gv(r,e){let t;switch(e){case nm:t="Linear";break;case im:t="Reinhard";break;case rm:t="Cineon";break;case sm:t="ACESFilmic";break;case om:t="AgX";break;case lm:t="Neutral";break;case am:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new V;function Vv(){Je.getLuminanceCoefficients(ta);const r=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function Wv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ls(r){return r!==""}function Ru(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(r){return r.replace(qv,Zv)}const Yv=new Map;function Zv(r,e){let t=Ie[e];if(t===void 0){const n=Yv.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(r){return r.replace(Kv,jv)}function jv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Iu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Jv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gr:case Vr:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vr:e="ENVMAP_MODE_REFRACTION";break}return e}function ex(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case em:e="ENVMAP_BLENDING_MIX";break;case tm:e="ENVMAP_BLENDING_ADD";break}return e}function tx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jv(t),c=Qv(t),u=$v(t),h=ex(t),f=tx(t),m=Hv(t),g=Wv(s),_=i.createProgram();let d,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(d=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=zl(a),a=Ru(a,t),a=Pu(a,t),o=zl(o),o=Ru(o,t),o=Pu(o,t),a=Lu(a),o=Lu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+d+a,E=y+p+o,C=Cu(i,i.VERTEX_SHADER,x),T=Cu(i,i.FRAGMENT_SHADER,E);i.attachShader(_,C),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(M){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(T).trim();let j=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,T);else{const Z=wu(i,C,"vertex"),G=wu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+O+`
`+Z+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||X==="")&&(I=!1);I&&(M.diagnostics={runnable:j,programLog:O,vertexShader:{log:N,prefix:d},fragmentShader:{log:X,prefix:p}})}i.deleteShader(C),i.deleteShader(T),w=new _a(i,_),R=Xv(i,_)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Nv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ov++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let ix=0;class rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sx(e),t.set(e,n)),n}}class sx{constructor(e){this.id=ix++,this.code=e,this.usedTimes=0}}function ax(r,e,t,n,i,s,a){const o=new mf,l=new rx,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,M,O,N,X){const j=N.fog,I=X.geometry,Z=v.isMeshStandardMaterial?N.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),z=G&&G.mapping===Oa?G.image.height:null,re=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,De=ae!==void 0?ae.length:0;let Ne=0;I.morphAttributes.position!==void 0&&(Ne=1),I.morphAttributes.normal!==void 0&&(Ne=2),I.morphAttributes.color!==void 0&&(Ne=3);let q,K,he,se;if(re){const Ee=Ln[re];q=Ee.vertexShader,K=Ee.fragmentShader}else q=v.vertexShader,K=v.fragmentShader,l.update(v),he=l.getVertexShaderID(v),se=l.getFragmentShaderID(v);const Pe=r.getRenderTarget(),Ae=X.isInstancedMesh===!0,Ue=X.isBatchedMesh===!0,Ve=!!v.map,Oe=!!v.matcap,P=!!G,Tt=!!v.aoMap,Be=!!v.lightMap,ze=!!v.bumpMap,B=!!v.normalMap,Qe=!!v.displacementMap,Te=!!v.emissiveMap,b=!!v.metalnessMap,S=!!v.roughnessMap,k=v.anisotropy>0,J=v.clearcoat>0,ee=v.dispersion>0,Q=v.iridescence>0,_e=v.sheen>0,te=v.transmission>0,le=k&&!!v.anisotropyMap,Le=J&&!!v.clearcoatMap,ne=J&&!!v.clearcoatNormalMap,me=J&&!!v.clearcoatRoughnessMap,ye=Q&&!!v.iridescenceMap,be=Q&&!!v.iridescenceThicknessMap,pe=_e&&!!v.sheenColorMap,Ge=_e&&!!v.sheenRoughnessMap,Re=!!v.specularMap,Ze=!!v.specularColorMap,L=!!v.specularIntensityMap,ce=te&&!!v.transmissionMap,Y=te&&!!v.thicknessMap,$=!!v.gradientMap,ue=!!v.alphaMap,fe=v.alphaTest>0,He=!!v.alphaHash,ot=!!v.extensions;let bt=Ei;v.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(bt=r.toneMapping);const Xe={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:K,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ue,batchingColor:Ue&&X._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&X.instanceColor!==null,instancingMorph:Ae&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Pe===null?r.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:bi,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:Oe,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:z,aoMap:Tt,lightMap:Be,bumpMap:ze,normalMap:B,displacementMap:m&&Qe,emissiveMap:Te,normalMapObjectSpace:B&&v.normalMapType===dm,normalMapTangentSpace:B&&v.normalMapType===fm,metalnessMap:b,roughnessMap:S,anisotropy:k,anisotropyMap:le,clearcoat:J,clearcoatMap:Le,clearcoatNormalMap:ne,clearcoatRoughnessMap:me,dispersion:ee,iridescence:Q,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:_e,sheenColorMap:pe,sheenRoughnessMap:Ge,specularMap:Re,specularColorMap:Ze,specularIntensityMap:L,transmission:te,transmissionMap:ce,thicknessMap:Y,gradientMap:$,opaque:v.transparent===!1&&v.blending===Pr&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:He,combine:v.combine,mapUv:Ve&&d(v.map.channel),aoMapUv:Tt&&d(v.aoMap.channel),lightMapUv:Be&&d(v.lightMap.channel),bumpMapUv:ze&&d(v.bumpMap.channel),normalMapUv:B&&d(v.normalMap.channel),displacementMapUv:Qe&&d(v.displacementMap.channel),emissiveMapUv:Te&&d(v.emissiveMap.channel),metalnessMapUv:b&&d(v.metalnessMap.channel),roughnessMapUv:S&&d(v.roughnessMap.channel),anisotropyMapUv:le&&d(v.anisotropyMap.channel),clearcoatMapUv:Le&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:be&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&d(v.sheenRoughnessMap.channel),specularMapUv:Re&&d(v.specularMap.channel),specularColorMapUv:Ze&&d(v.specularColorMap.channel),specularIntensityMapUv:L&&d(v.specularIntensityMap.channel),transmissionMapUv:ce&&d(v.transmissionMap.channel),thicknessMapUv:Y&&d(v.thicknessMap.channel),alphaMapUv:ue&&d(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(B||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!I.attributes.uv&&(Ve||ue),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:bt,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yn,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ot&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&v.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function y(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)M.push(O),M.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(x(M,v),E(M,v),M.push(r.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function x(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){const M=_[v.type];let O;if(M){const N=Ln[M];O=mc.clone(N.uniforms)}else O=v.uniforms;return O}function T(v,M){let O;for(let N=0,X=u.length;N<X;N++){const j=u[N];if(j.cacheKey===M){O=j,++O.usedTimes;break}}return O===void 0&&(O=new nx(r,M,v,s),u.push(O)),O}function A(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function w(v){l.remove(v)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:R}}function ox(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function lx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Fu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Uu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,_,d){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=d),e++,p}function o(h,f,m,g,_,d){const p=a(h,f,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,f,m,g,_,d){const p=a(h,f,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||lx),n.length>1&&n.sort(f||Fu),i.length>1&&i.sort(f||Fu)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function cx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Uu,r.set(n,[a])):i>=s.length?(a=new Uu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ux(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new qe};break;case"SpotLight":t={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function hx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fx=0;function dx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function px(r){const e=new ux,t=hx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const i=new V,s=new ht,a=new ht;function o(c){let u=0,h=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,y=0,x=0,E=0,C=0,T=0,A=0;c.sort(dx);for(let R=0,v=c.length;R<v;R++){const M=c[R],O=M.color,N=M.intensity,X=M.distance,j=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=O.r*N,h+=O.g*N,f+=O.b*N;else if(M.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(M.sh.coefficients[I],N);A++}else if(M.isDirectionalLight){const I=e.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Z=M.shadow,G=t.get(M);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=M.shadow.matrix,y++}n.directional[m]=I,m++}else if(M.isSpotLight){const I=e.get(M);I.position.setFromMatrixPosition(M.matrixWorld),I.color.copy(O).multiplyScalar(N),I.distance=X,I.coneCos=Math.cos(M.angle),I.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),I.decay=M.decay,n.spot[_]=I;const Z=M.shadow;if(M.map&&(n.spotLightMap[C]=M.map,C++,Z.updateMatrices(M),M.castShadow&&T++),n.spotLightMatrix[_]=Z.matrix,M.castShadow){const G=t.get(M);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=j,E++}_++}else if(M.isRectAreaLight){const I=e.get(M);I.color.copy(O).multiplyScalar(N),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),n.rectArea[d]=I,d++}else if(M.isPointLight){const I=e.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),I.distance=M.distance,I.decay=M.decay,M.castShadow){const Z=M.shadow,G=t.get(M);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=M.shadow.matrix,x++}n.point[g]=I,g++}else if(M.isHemisphereLight){const I=e.get(M);I.skyColor.copy(M.color).multiplyScalar(N),I.groundColor.copy(M.groundColor).multiplyScalar(N),n.hemi[p]=I,p++}}d>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==m||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==d||w.hemiLength!==p||w.numDirectionalShadows!==y||w.numPointShadows!==x||w.numSpotShadows!==E||w.numSpotMaps!==C||w.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,w.directionalLength=m,w.pointLength=g,w.spotLength=_,w.rectAreaLength=d,w.hemiLength=p,w.numDirectionalShadows=y,w.numPointShadows=x,w.numSpotShadows=E,w.numSpotMaps=C,w.numLightProbes=A,n.version=fx++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const d=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(d),h++}else if(x.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(d),m++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),a.identity(),s.copy(x.matrixWorld),s.premultiply(d),a.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function Nu(r){const e=new px(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function mx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Nu(r),e.set(i,[o])):s>=a.length?(o=new Nu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class _x extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gx extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
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
}`;function Sx(r,e,t){let n=new yf;const i=new ke,s=new ke,a=new ut,o=new _x({depthPacking:hm}),l=new gx,c={},u=t.maxTextureSize,h={[ti]:kt,[kt]:ti,[Yn]:Yn},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:vx,fragmentShader:xx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new si;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(T,A,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const R=r.getRenderTarget(),v=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Jn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==Wn&&this.type===Wn,X=p===Wn&&this.type!==Wn;for(let j=0,I=T.length;j<I;j++){const Z=T[j],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const z=G.getFrameExtents();if(i.multiply(z),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/z.x),i.x=s.x*z.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/z.y),i.y=s.y*z.y,G.mapSize.y=s.y)),G.map===null||N===!0||X===!0){const ae=this.type!==Wn?{minFilter:mn,magFilter:mn}:{};G.map!==null&&G.map.dispose(),G.map=new ii(i.x,i.y,ae),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const re=G.getViewportCount();for(let ae=0;ae<re;ae++){const De=G.getViewport(ae);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),O.viewport(a),G.updateMatrices(Z,ae),n=G.getFrustum(),E(A,w,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Wn&&y(G,w),G.needsUpdate=!1}p=this.type,d.needsUpdate=!1,r.setRenderTarget(R,v,M)};function y(T,A){const w=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ii(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,w,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,w,m,_,null)}function x(T,A,w,R){let v=null;const M=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)v=M;else if(v=w.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=v.uuid,N=A.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let j=X[N];j===void 0&&(j=v.clone(),X[N]=j,A.addEventListener("dispose",C)),v=j}if(v.visible=A.visible,v.wireframe=A.wireframe,R===Wn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=r.properties.get(v);O.light=w}return v}function E(T,A,w,R,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const N=e.update(T),X=T.material;if(Array.isArray(X)){const j=N.groups;for(let I=0,Z=j.length;I<Z;I++){const G=j[I],z=X[G.materialIndex];if(z&&z.visible){const re=x(T,z,R,v);T.onBeforeShadow(r,T,A,w,N,re,G),r.renderBufferDirect(w,null,N,re,T,G),T.onAfterShadow(r,T,A,w,N,re,G)}}}else if(X.visible){const j=x(T,X,R,v);T.onBeforeShadow(r,T,A,w,N,j,null),r.renderBufferDirect(w,null,N,j,T,null),T.onAfterShadow(r,T,A,w,N,j,null)}}const O=T.children;for(let N=0,X=O.length;N<X;N++)E(O[N],A,w,R,v)}function C(T){T.target.removeEventListener("dispose",C);for(const w in c){const R=c[w],v=T.target.uuid;v in R&&(R[v].dispose(),delete R[v])}}}const Mx={[el]:tl,[nl]:sl,[il]:al,[kr]:rl,[tl]:el,[sl]:nl,[al]:il,[rl]:kr};function Ex(r){function e(){let L=!1;const ce=new ut;let Y=null;const $=new ut(0,0,0,0);return{setMask:function(ue){Y!==ue&&!L&&(r.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){L=ue},setClear:function(ue,fe,He,ot,bt){bt===!0&&(ue*=ot,fe*=ot,He*=ot),ce.set(ue,fe,He,ot),$.equals(ce)===!1&&(r.clearColor(ue,fe,He,ot),$.copy(ce))},reset:function(){L=!1,Y=null,$.set(-1,0,0,0)}}}function t(){let L=!1,ce=!1,Y=null,$=null,ue=null;return{setReversed:function(fe){ce=fe},setTest:function(fe){fe?he(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!L&&(r.depthMask(fe),Y=fe)},setFunc:function(fe){if(ce&&(fe=Mx[fe]),$!==fe){switch(fe){case el:r.depthFunc(r.NEVER);break;case tl:r.depthFunc(r.ALWAYS);break;case nl:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case il:r.depthFunc(r.EQUAL);break;case rl:r.depthFunc(r.GEQUAL);break;case sl:r.depthFunc(r.GREATER);break;case al:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=fe}},setLocked:function(fe){L=fe},setClear:function(fe){ue!==fe&&(r.clearDepth(fe),ue=fe)},reset:function(){L=!1,Y=null,$=null,ue=null}}}function n(){let L=!1,ce=null,Y=null,$=null,ue=null,fe=null,He=null,ot=null,bt=null;return{setTest:function(Xe){L||(Xe?he(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(Xe){ce!==Xe&&!L&&(r.stencilMask(Xe),ce=Xe)},setFunc:function(Xe,Ee,xe){(Y!==Xe||$!==Ee||ue!==xe)&&(r.stencilFunc(Xe,Ee,xe),Y=Xe,$=Ee,ue=xe)},setOp:function(Xe,Ee,xe){(fe!==Xe||He!==Ee||ot!==xe)&&(r.stencilOp(Xe,Ee,xe),fe=Xe,He=Ee,ot=xe)},setLocked:function(Xe){L=Xe},setClear:function(Xe){bt!==Xe&&(r.clearStencil(Xe),bt=Xe)},reset:function(){L=!1,ce=null,Y=null,$=null,ue=null,fe=null,He=null,ot=null,bt=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,d=null,p=null,y=null,x=null,E=null,C=null,T=new qe(0,0,0),A=0,w=!1,R=null,v=null,M=null,O=null,N=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,I=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=I>=1):Z.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=I>=2);let G=null,z={};const re=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),De=new ut().fromArray(re),Ne=new ut().fromArray(ae);function q(L,ce,Y,$){const ue=new Uint8Array(4),fe=r.createTexture();r.bindTexture(L,fe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Y;He++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(ce+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return fe}const K={};K[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),he(r.DEPTH_TEST),s.setFunc(kr),Be(!1),ze(Xc),he(r.CULL_FACE),P(Jn);function he(L){c[L]!==!0&&(r.enable(L),c[L]=!0)}function se(L){c[L]!==!1&&(r.disable(L),c[L]=!1)}function Pe(L,ce){return u[L]!==ce?(r.bindFramebuffer(L,ce),u[L]=ce,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ce),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ae(L,ce){let Y=f,$=!1;if(L){Y=h.get(ce),Y===void 0&&(Y=[],h.set(ce,Y));const ue=L.textures;if(Y.length!==ue.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,He=ue.length;fe<He;fe++)Y[fe]=r.COLOR_ATTACHMENT0+fe;Y.length=ue.length,$=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,$=!0);$&&r.drawBuffers(Y)}function Ue(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const Ve={[Gi]:r.FUNC_ADD,[Op]:r.FUNC_SUBTRACT,[Bp]:r.FUNC_REVERSE_SUBTRACT};Ve[zp]=r.MIN,Ve[kp]=r.MAX;const Oe={[Gp]:r.ZERO,[Vp]:r.ONE,[Hp]:r.SRC_COLOR,[Qo]:r.SRC_ALPHA,[Kp]:r.SRC_ALPHA_SATURATE,[Yp]:r.DST_COLOR,[Xp]:r.DST_ALPHA,[Wp]:r.ONE_MINUS_SRC_COLOR,[$o]:r.ONE_MINUS_SRC_ALPHA,[Zp]:r.ONE_MINUS_DST_COLOR,[qp]:r.ONE_MINUS_DST_ALPHA,[jp]:r.CONSTANT_COLOR,[Jp]:r.ONE_MINUS_CONSTANT_COLOR,[Qp]:r.CONSTANT_ALPHA,[$p]:r.ONE_MINUS_CONSTANT_ALPHA};function P(L,ce,Y,$,ue,fe,He,ot,bt,Xe){if(L===Jn){g===!0&&(se(r.BLEND),g=!1);return}if(g===!1&&(he(r.BLEND),g=!0),L!==Np){if(L!==_||Xe!==w){if((d!==Gi||x!==Gi)&&(r.blendEquation(r.FUNC_ADD),d=Gi,x=Gi),Xe)switch(L){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qc:r.blendFunc(r.ONE,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,y=null,E=null,C=null,T.set(0,0,0),A=0,_=L,w=Xe}return}ue=ue||ce,fe=fe||Y,He=He||$,(ce!==d||ue!==x)&&(r.blendEquationSeparate(Ve[ce],Ve[ue]),d=ce,x=ue),(Y!==p||$!==y||fe!==E||He!==C)&&(r.blendFuncSeparate(Oe[Y],Oe[$],Oe[fe],Oe[He]),p=Y,y=$,E=fe,C=He),(ot.equals(T)===!1||bt!==A)&&(r.blendColor(ot.r,ot.g,ot.b,bt),T.copy(ot),A=bt),_=L,w=!1}function Tt(L,ce){L.side===Yn?se(r.CULL_FACE):he(r.CULL_FACE);let Y=L.side===kt;ce&&(Y=!Y),Be(Y),L.blending===Pr&&L.transparent===!1?P(Jn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const $=L.stencilWrite;a.setTest($),$&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Qe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){R!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),R=L)}function ze(L){L!==Ip?(he(r.CULL_FACE),L!==v&&(L===Xc?r.cullFace(r.BACK):L===Fp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),v=L}function B(L){L!==M&&(j&&r.lineWidth(L),M=L)}function Qe(L,ce,Y){L?(he(r.POLYGON_OFFSET_FILL),(O!==ce||N!==Y)&&(r.polygonOffset(ce,Y),O=ce,N=Y)):se(r.POLYGON_OFFSET_FILL)}function Te(L){L?he(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function b(L){L===void 0&&(L=r.TEXTURE0+X-1),G!==L&&(r.activeTexture(L),G=L)}function S(L,ce,Y){Y===void 0&&(G===null?Y=r.TEXTURE0+X-1:Y=G);let $=z[Y];$===void 0&&($={type:void 0,texture:void 0},z[Y]=$),($.type!==L||$.texture!==ce)&&(G!==Y&&(r.activeTexture(Y),G=Y),r.bindTexture(L,ce||K[L]),$.type=L,$.texture=ce)}function k(){const L=z[G];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){De.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function pe(L){Ne.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Ne.copy(L))}function Ge(L,ce){let Y=l.get(ce);Y===void 0&&(Y=new WeakMap,l.set(ce,Y));let $=Y.get(L);$===void 0&&($=r.getUniformBlockIndex(ce,L.name),Y.set(L,$))}function Re(L,ce){const $=l.get(ce).get(L);o.get(ce)!==$&&(r.uniformBlockBinding(ce,$,L.__bindingPointIndex),o.set(ce,$))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,z={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,d=null,p=null,y=null,x=null,E=null,C=null,T=new qe(0,0,0),A=0,w=!1,R=null,v=null,M=null,O=null,N=null,De.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:he,disable:se,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:Ue,setBlending:P,setMaterial:Tt,setFlipSided:Be,setCullFace:ze,setLineWidth:B,setPolygonOffset:Qe,setScissorTest:Te,activeTexture:b,bindTexture:S,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:me,texImage3D:ye,updateUBOMapping:Ge,uniformBlockBinding:Re,texStorage2D:Le,texStorage3D:ne,texSubImage2D:Q,texSubImage3D:_e,compressedTexSubImage2D:te,compressedTexSubImage3D:le,scissor:be,viewport:pe,reset:Ze}}function Ou(r,e,t,n){const i=yx(n);switch(t){case rf:return r*e;case af:return r*e;case of:return r*e*2;case lf:return r*e/i.components*i.byteLength;case uc:return r*e/i.components*i.byteLength;case cf:return r*e*2/i.components*i.byteLength;case hc:return r*e*2/i.components*i.byteLength;case sf:return r*e*3/i.components*i.byteLength;case bn:return r*e*4/i.components*i.byteLength;case fc:return r*e*4/i.components*i.byteLength;case ua:case ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fa:case da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fl:case pl:return Math.max(r,16)*Math.max(e,8)/4;case hl:case dl:return Math.max(r,8)*Math.max(e,8)/2;case ml:case _l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case pa:case Ll:case Il:return Math.ceil(r/4)*Math.ceil(e/4)*16;case uf:case Fl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ul:case Nl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yx(r){switch(r){case ni:case ef:return{byteLength:1,components:1};case Ds:case tf:case tr:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case $i:case oc:case Zn:return{byteLength:4,components:1};case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Dx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return m?new OffscreenCanvas(b,S):As("canvas")}function _(b,S,k){let J=1;const ee=Te(b);if((ee.width>k||ee.height>k)&&(J=k/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(J*ee.width),_e=Math.floor(J*ee.height);h===void 0&&(h=g(Q,_e));const te=S?g(Q,_e):h;return te.width=Q,te.height=_e,te.getContext("2d").drawImage(b,0,0,Q,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Q+"x"+_e+")."),te}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function d(b){return b.generateMipmaps&&b.minFilter!==mn&&b.minFilter!==tn}function p(b){r.generateMipmap(b)}function y(b,S,k,J,ee=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=S;if(S===r.RED&&(k===r.FLOAT&&(Q=r.R32F),k===r.HALF_FLOAT&&(Q=r.R16F),k===r.UNSIGNED_BYTE&&(Q=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.R8UI),k===r.UNSIGNED_SHORT&&(Q=r.R16UI),k===r.UNSIGNED_INT&&(Q=r.R32UI),k===r.BYTE&&(Q=r.R8I),k===r.SHORT&&(Q=r.R16I),k===r.INT&&(Q=r.R32I)),S===r.RG&&(k===r.FLOAT&&(Q=r.RG32F),k===r.HALF_FLOAT&&(Q=r.RG16F),k===r.UNSIGNED_BYTE&&(Q=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RG8UI),k===r.UNSIGNED_SHORT&&(Q=r.RG16UI),k===r.UNSIGNED_INT&&(Q=r.RG32UI),k===r.BYTE&&(Q=r.RG8I),k===r.SHORT&&(Q=r.RG16I),k===r.INT&&(Q=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),k===r.UNSIGNED_INT&&(Q=r.RGB32UI),k===r.BYTE&&(Q=r.RGB8I),k===r.SHORT&&(Q=r.RGB16I),k===r.INT&&(Q=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),k===r.UNSIGNED_INT&&(Q=r.RGBA32UI),k===r.BYTE&&(Q=r.RGBA8I),k===r.SHORT&&(Q=r.RGBA16I),k===r.INT&&(Q=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),S===r.RGBA){const _e=ee?Ta:Je.getTransfer(J);k===r.FLOAT&&(Q=r.RGBA32F),k===r.HALF_FLOAT&&(Q=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Q=_e===st?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(b,S){let k;return b?S===null||S===$i||S===Hr?k=r.DEPTH24_STENCIL8:S===Zn?k=r.DEPTH32F_STENCIL8:S===Ds&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$i||S===Hr?k=r.DEPTH_COMPONENT24:S===Zn?k=r.DEPTH_COMPONENT32F:S===Ds&&(k=r.DEPTH_COMPONENT16),k}function E(b,S){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==mn&&b.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function C(b){const S=b.target;S.removeEventListener("dispose",C),A(S),S.isVideoTexture&&u.delete(S)}function T(b){const S=b.target;S.removeEventListener("dispose",T),R(S)}function A(b){const S=n.get(b);if(S.__webglInit===void 0)return;const k=b.source,J=f.get(k);if(J){const ee=J[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(b),Object.keys(J).length===0&&f.delete(k)}n.remove(b)}function w(b){const S=n.get(b);r.deleteTexture(S.__webglTexture);const k=b.source,J=f.get(k);delete J[S.__cacheKey],a.memory.textures--}function R(b){const S=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ee=0;ee<S.__webglFramebuffer[J].length;ee++)r.deleteFramebuffer(S.__webglFramebuffer[J][ee]);else r.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)r.deleteFramebuffer(S.__webglFramebuffer[J]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=b.textures;for(let J=0,ee=k.length;J<ee;J++){const Q=n.get(k[J]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(b)}let v=0;function M(){v=0}function O(){const b=v;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),v+=1,b}function N(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function X(b,S){const k=n.get(b);if(b.isVideoTexture&&B(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(k,b,S);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function j(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Ne(k,b,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function I(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Ne(k,b,S);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function Z(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){q(k,b,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const G={[cl]:r.REPEAT,[Wi]:r.CLAMP_TO_EDGE,[ul]:r.MIRRORED_REPEAT},z={[mn]:r.NEAREST,[cm]:r.NEAREST_MIPMAP_NEAREST,[Us]:r.NEAREST_MIPMAP_LINEAR,[tn]:r.LINEAR,[no]:r.LINEAR_MIPMAP_NEAREST,[Xi]:r.LINEAR_MIPMAP_LINEAR},re={[pm]:r.NEVER,[Sm]:r.ALWAYS,[mm]:r.LESS,[hf]:r.LEQUAL,[_m]:r.EQUAL,[xm]:r.GEQUAL,[gm]:r.GREATER,[vm]:r.NOTEQUAL};function ae(b,S){if(S.type===Zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===no||S.magFilter===Us||S.magFilter===Xi||S.minFilter===tn||S.minFilter===no||S.minFilter===Us||S.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,G[S.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,G[S.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,G[S.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,z[S.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,z[S.minFilter]),S.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===mn||S.minFilter!==Us&&S.minFilter!==Xi||S.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function De(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",C));const J=S.source;let ee=f.get(J);ee===void 0&&(ee={},f.set(J,ee));const Q=N(S);if(Q!==b.__cacheKey){ee[Q]===void 0&&(ee[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[Q].usedTimes++;const _e=ee[b.__cacheKey];_e!==void 0&&(ee[b.__cacheKey].usedTimes--,_e.usedTimes===0&&w(S)),b.__cacheKey=Q,b.__webglTexture=ee[Q].texture}return k}function Ne(b,S,k){let J=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=r.TEXTURE_3D);const ee=De(b,S),Q=S.source;t.bindTexture(J,b.__webglTexture,r.TEXTURE0+k);const _e=n.get(Q);if(Q.version!==_e.__version||ee===!0){t.activeTexture(r.TEXTURE0+k);const te=Je.getPrimaries(Je.workingColorSpace),le=S.colorSpace===pi?null:Je.getPrimaries(S.colorSpace),Le=S.colorSpace===pi||te===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ne=_(S.image,!1,i.maxTextureSize);ne=Qe(S,ne);const me=s.convert(S.format,S.colorSpace),ye=s.convert(S.type);let be=y(S.internalFormat,me,ye,S.colorSpace,S.isVideoTexture);ae(J,S);let pe;const Ge=S.mipmaps,Re=S.isVideoTexture!==!0,Ze=_e.__version===void 0||ee===!0,L=Q.dataReady,ce=E(S,ne);if(S.isDepthTexture)be=x(S.format===Wr,S.type),Ze&&(Re?t.texStorage2D(r.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,be,ne.width,ne.height,0,me,ye,null));else if(S.isDataTexture)if(Ge.length>0){Re&&Ze&&t.texStorage2D(r.TEXTURE_2D,ce,be,Ge[0].width,Ge[0].height);for(let Y=0,$=Ge.length;Y<$;Y++)pe=Ge[Y],Re?L&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,pe.width,pe.height,me,ye,pe.data):t.texImage2D(r.TEXTURE_2D,Y,be,pe.width,pe.height,0,me,ye,pe.data);S.generateMipmaps=!1}else Re?(Ze&&t.texStorage2D(r.TEXTURE_2D,ce,be,ne.width,ne.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,me,ye,ne.data)):t.texImage2D(r.TEXTURE_2D,0,be,ne.width,ne.height,0,me,ye,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Re&&Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,be,Ge[0].width,Ge[0].height,ne.depth);for(let Y=0,$=Ge.length;Y<$;Y++)if(pe=Ge[Y],S.format!==bn)if(me!==null)if(Re){if(L)if(S.layerUpdates.size>0){const ue=Ou(pe.width,pe.height,S.format,S.type);for(const fe of S.layerUpdates){const He=pe.data.subarray(fe*ue/pe.data.BYTES_PER_ELEMENT,(fe+1)*ue/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,fe,pe.width,pe.height,1,me,He,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,pe.width,pe.height,ne.depth,me,pe.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,be,pe.width,pe.height,ne.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,pe.width,pe.height,ne.depth,me,ye,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,be,pe.width,pe.height,ne.depth,0,me,ye,pe.data)}else{Re&&Ze&&t.texStorage2D(r.TEXTURE_2D,ce,be,Ge[0].width,Ge[0].height);for(let Y=0,$=Ge.length;Y<$;Y++)pe=Ge[Y],S.format!==bn?me!==null?Re?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,pe.width,pe.height,me,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,be,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?L&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,pe.width,pe.height,me,ye,pe.data):t.texImage2D(r.TEXTURE_2D,Y,be,pe.width,pe.height,0,me,ye,pe.data)}else if(S.isDataArrayTexture)if(Re){if(Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,be,ne.width,ne.height,ne.depth),L)if(S.layerUpdates.size>0){const Y=Ou(ne.width,ne.height,S.format,S.type);for(const $ of S.layerUpdates){const ue=ne.data.subarray($*Y/ne.data.BYTES_PER_ELEMENT,($+1)*Y/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,me,ye,ue)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,ye,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,me,ye,ne.data);else if(S.isData3DTexture)Re?(Ze&&t.texStorage3D(r.TEXTURE_3D,ce,be,ne.width,ne.height,ne.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,ye,ne.data)):t.texImage3D(r.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,me,ye,ne.data);else if(S.isFramebufferTexture){if(Ze)if(Re)t.texStorage2D(r.TEXTURE_2D,ce,be,ne.width,ne.height);else{let Y=ne.width,$=ne.height;for(let ue=0;ue<ce;ue++)t.texImage2D(r.TEXTURE_2D,ue,be,Y,$,0,me,ye,null),Y>>=1,$>>=1}}else if(Ge.length>0){if(Re&&Ze){const Y=Te(Ge[0]);t.texStorage2D(r.TEXTURE_2D,ce,be,Y.width,Y.height)}for(let Y=0,$=Ge.length;Y<$;Y++)pe=Ge[Y],Re?L&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,me,ye,pe):t.texImage2D(r.TEXTURE_2D,Y,be,me,ye,pe);S.generateMipmaps=!1}else if(Re){if(Ze){const Y=Te(ne);t.texStorage2D(r.TEXTURE_2D,ce,be,Y.width,Y.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,ye,ne)}else t.texImage2D(r.TEXTURE_2D,0,be,me,ye,ne);d(S)&&p(J),_e.__version=Q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function q(b,S,k){if(S.image.length!==6)return;const J=De(b,S),ee=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+k);const Q=n.get(ee);if(ee.version!==Q.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const _e=Je.getPrimaries(Je.workingColorSpace),te=S.colorSpace===pi?null:Je.getPrimaries(S.colorSpace),le=S.colorSpace===pi||_e===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let $=0;$<6;$++)!Le&&!ne?me[$]=_(S.image[$],!0,i.maxCubemapSize):me[$]=ne?S.image[$].image:S.image[$],me[$]=Qe(S,me[$]);const ye=me[0],be=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),Ge=y(S.internalFormat,be,pe,S.colorSpace),Re=S.isVideoTexture!==!0,Ze=Q.__version===void 0||J===!0,L=ee.dataReady;let ce=E(S,ye);ae(r.TEXTURE_CUBE_MAP,S);let Y;if(Le){Re&&Ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Ge,ye.width,ye.height);for(let $=0;$<6;$++){Y=me[$].mipmaps;for(let ue=0;ue<Y.length;ue++){const fe=Y[ue];S.format!==bn?be!==null?Re?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,fe.width,fe.height,be,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,Ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,fe.width,fe.height,be,pe,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,Ge,fe.width,fe.height,0,be,pe,fe.data)}}}else{if(Y=S.mipmaps,Re&&Ze){Y.length>0&&ce++;const $=Te(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(ne){Re?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,me[$].width,me[$].height,be,pe,me[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,me[$].width,me[$].height,0,be,pe,me[$].data);for(let ue=0;ue<Y.length;ue++){const He=Y[ue].image[$].image;Re?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,He.width,He.height,be,pe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,Ge,He.width,He.height,0,be,pe,He.data)}}else{Re?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,pe,me[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,be,pe,me[$]);for(let ue=0;ue<Y.length;ue++){const fe=Y[ue];Re?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,be,pe,fe.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,Ge,be,pe,fe.image[$])}}}d(S)&&p(r.TEXTURE_CUBE_MAP),Q.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function K(b,S,k,J,ee,Q){const _e=s.convert(k.format,k.colorSpace),te=s.convert(k.type),le=y(k.internalFormat,_e,te,k.colorSpace);if(!n.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>Q),me=Math.max(1,S.height>>Q);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,Q,le,ne,me,S.depth,0,_e,te,null):t.texImage2D(ee,Q,le,ne,me,0,_e,te,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ee,n.get(k).__webglTexture,0,Be(S)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ee,n.get(k).__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(b,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,b),S.depthBuffer){const J=S.depthTexture,ee=J&&J.isDepthTexture?J.type:null,Q=x(S.stencilBuffer,ee),_e=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=Be(S);ze(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,Q,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,Q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Q,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,b)}else{const J=S.textures;for(let ee=0;ee<J.length;ee++){const Q=J[ee],_e=s.convert(Q.format,Q.colorSpace),te=s.convert(Q.type),le=y(Q.internalFormat,_e,te,Q.colorSpace),Le=Be(S);k&&ze(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,le,S.width,S.height):ze(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,le,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,le,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,ee=Be(S);if(S.depthTexture.format===Lr)ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===Wr)ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const S=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=J}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=r.createRenderbuffer(),he(S.__webglDepthbuffer[J],b,!1);else{const ee=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),he(S.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ee)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(b,S,k){const J=n.get(b);S!==void 0&&K(J.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Pe(b)}function Ue(b){const S=b.texture,k=n.get(b),J=n.get(S);b.addEventListener("dispose",T);const ee=b.textures,Q=b.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,a.memory.textures++),Q){k.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[te]=[];for(let le=0;le<S.mipmaps.length;le++)k.__webglFramebuffer[te][le]=r.createFramebuffer()}else k.__webglFramebuffer[te]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)k.__webglFramebuffer[te]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(_e)for(let te=0,le=ee.length;te<le;te++){const Le=n.get(ee[te]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&ze(b)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){const le=ee[te];k.__webglColorRenderbuffer[te]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[te]);const Le=s.convert(le.format,le.colorSpace),ne=s.convert(le.type),me=y(le.internalFormat,Le,ne,le.colorSpace,b.isXRRenderTarget===!0),ye=Be(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,me,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,k.__webglColorRenderbuffer[te])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),he(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ae(r.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)K(k.__webglFramebuffer[te][le],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te,le);else K(k.__webglFramebuffer[te],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);d(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let te=0,le=ee.length;te<le;te++){const Le=ee[te],ne=n.get(Le);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),ae(r.TEXTURE_2D,Le),K(k.__webglFramebuffer,b,Le,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,0),d(Le)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let te=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(te=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),ae(te,S),S.mipmaps&&S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)K(k.__webglFramebuffer[le],b,S,r.COLOR_ATTACHMENT0,te,le);else K(k.__webglFramebuffer,b,S,r.COLOR_ATTACHMENT0,te,0);d(S)&&p(te),t.unbindTexture()}b.depthBuffer&&Pe(b)}function Ve(b){const S=b.textures;for(let k=0,J=S.length;k<J;k++){const ee=S[k];if(d(ee)){const Q=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,_e=n.get(ee).__webglTexture;t.bindTexture(Q,_e),p(Q),t.unbindTexture()}}}const Oe=[],P=[];function Tt(b){if(b.samples>0){if(ze(b)===!1){const S=b.textures,k=b.width,J=b.height;let ee=r.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(b),te=S.length>1;if(te)for(let le=0;le<S.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let le=0;le<S.length;le++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),te){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[le]);const Le=n.get(S[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Le,0)}r.blitFramebuffer(0,0,k,J,0,0,k,J,ee,r.NEAREST),l===!0&&(Oe.length=0,P.length=0,Oe.push(r.COLOR_ATTACHMENT0+le),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Oe.push(Q),P.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),te)for(let le=0;le<S.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,_e.__webglColorRenderbuffer[le]);const Le=n.get(S[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,Le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Be(b){return Math.min(i.maxSamples,b.samples)}function ze(b){const S=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(b){const S=a.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function Qe(b,S){const k=b.colorSpace,J=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==bi&&k!==pi&&(Je.getTransfer(k)===st?(J!==bn||ee!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Te(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=M,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=I,this.setTextureCube=Z,this.rebindTextures=Ae,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ze}function Ax(r,e){function t(n,i=pi){let s;const a=Je.getTransfer(i);if(n===ni)return r.UNSIGNED_BYTE;if(n===lc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return r.BYTE;if(n===tf)return r.SHORT;if(n===Ds)return r.UNSIGNED_SHORT;if(n===oc)return r.INT;if(n===$i)return r.UNSIGNED_INT;if(n===Zn)return r.FLOAT;if(n===tr)return r.HALF_FLOAT;if(n===rf)return r.ALPHA;if(n===sf)return r.RGB;if(n===bn)return r.RGBA;if(n===af)return r.LUMINANCE;if(n===of)return r.LUMINANCE_ALPHA;if(n===Lr)return r.DEPTH_COMPONENT;if(n===Wr)return r.DEPTH_STENCIL;if(n===lf)return r.RED;if(n===uc)return r.RED_INTEGER;if(n===cf)return r.RG;if(n===hc)return r.RG_INTEGER;if(n===fc)return r.RGBA_INTEGER;if(n===ua||n===ha||n===fa||n===da)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===fl||n===dl||n===pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===_l||n===gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ml||n===_l)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===xl||n===Sl||n===Ml||n===El||n===yl||n===Dl||n===Al||n===Tl||n===bl||n===Cl||n===wl||n===Rl||n===Pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ml)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===Ll||n===Il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pa)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uf||n===Fl||n===Ul||n===Nl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Tx extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cs extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bx={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,n),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`;class Rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new on({vertexShader:Cx,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Px extends Yr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new Rx,d=t.getContextAttributes();let p=null,y=null;const x=[],E=[],C=new ke;let T=null;const A=new $t;A.layers.enable(1),A.viewport=new ut;const w=new $t;w.layers.enable(2),w.viewport=new ut;const R=[A,w],v=new Tx;v.layers.enable(1),v.layers.enable(2);let M=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=x[q];return K===void 0&&(K=new Io,x[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=x[q];return K===void 0&&(K=new Io,x[q]=K),K.getGripSpace()},this.getHand=function(q){let K=x[q];return K===void 0&&(K=new Io,x[q]=K),K.getHandSpace()};function N(q){const K=E.indexOf(q.inputSource);if(K===-1)return;const he=x[K];he!==void 0&&(he.update(q.inputSource,q.frame,c||a),he.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",j);for(let q=0;q<x.length;q++){const K=E[q];K!==null&&(E[q]=null,x[q].disconnect(K))}M=null,O=null,_.reset(),e.setRenderTarget(p),m=null,f=null,h=null,i=null,y=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",X),i.addEventListener("inputsourceschange",j),d.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const K={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new ii(m.framebufferWidth,m.framebufferHeight,{format:bn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let K=null,he=null,se=null;d.depth&&(se=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=d.stencil?Wr:Lr,he=d.stencil?Hr:$i);const Pe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Pe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ii(f.textureWidth,f.textureHeight,{format:bn,type:ni,depthTexture:new Tf(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let K=0;K<q.removed.length;K++){const he=q.removed[K],se=E.indexOf(he);se>=0&&(E[se]=null,x[se].disconnect(he))}for(let K=0;K<q.added.length;K++){const he=q.added[K];let se=E.indexOf(he);if(se===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=E.length){E.push(he),se=Ae;break}else if(E[Ae]===null){E[Ae]=he,se=Ae;break}if(se===-1)break}const Pe=x[se];Pe&&Pe.connect(he)}}const I=new V,Z=new V;function G(q,K,he){I.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(he.matrixWorld);const se=I.distanceTo(Z),Pe=K.projectionMatrix.elements,Ae=he.projectionMatrix.elements,Ue=Pe[14]/(Pe[10]-1),Ve=Pe[14]/(Pe[10]+1),Oe=(Pe[9]+1)/Pe[5],P=(Pe[9]-1)/Pe[5],Tt=(Pe[8]-1)/Pe[0],Be=(Ae[8]+1)/Ae[0],ze=Ue*Tt,B=Ue*Be,Qe=se/(-Tt+Be),Te=Qe*-Tt;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Te),q.translateZ(Qe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const b=Ue+Qe,S=Ve+Qe,k=ze-Te,J=B+(se-Te),ee=Oe*Ve/S*b,Q=P*Ve/S*b;q.projectionMatrix.makePerspective(k,J,ee,Q,b,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function z(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let K=q.near,he=q.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(he=_.depthFar)),v.near=w.near=A.near=K,v.far=w.far=A.far=he,(M!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,O=v.far);const se=q.parent,Pe=v.cameras;z(v,se);for(let Ae=0;Ae<Pe.length;Ae++)z(Pe[Ae],se);Pe.length===2?G(v,A,w):v.projectionMatrix.copy(A.projectionMatrix),re(q,v,se)};function re(q,K,he){he===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ae=null;function De(q,K){if(u=K.getViewerPose(c||a),g=K,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let se=!1;he.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Ae=0;Ae<he.length;Ae++){const Ue=he[Ae];let Ve=null;if(m!==null)Ve=m.getViewport(Ue);else{const P=h.getViewSubImage(f,Ue);Ve=P.viewport,Ae===0&&(e.setRenderTargetTextures(y,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(y))}let Oe=R[Ae];Oe===void 0&&(Oe=new $t,Oe.layers.enable(Ae),Oe.viewport=new ut,R[Ae]=Oe),Oe.matrix.fromArray(Ue.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ue.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ae===0&&(v.matrix.copy(Oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(Oe)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ae=h.getDepthInformation(he[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,i.renderState)}}for(let he=0;he<x.length;he++){const se=E[he],Pe=x[he];se!==null&&Pe!==void 0&&Pe.update(se,K,c||a)}ae&&ae(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ne=new Df;Ne.setAnimationLoop(De),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const Oi=new ri,Lx=new ht;function Ix(r,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Sf(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,y,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,E)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,y,x):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===kt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===kt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,E=y.envMapRotation;x&&(d.envMap.value=x,Oi.copy(E),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),d.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Oi)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=x*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const y=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const E=x.program;n.uniformBlockBinding(y,E)}function c(y,x){let E=i[y.id];E===void 0&&(g(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",d));const C=x.program;n.updateUBOMapping(y,C);const T=e.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){const x=h();y.__bindingPointIndex=x;const E=r.createBuffer(),C=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],E=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,A=E.length;T<A;T++){const w=Array.isArray(E[T])?E[T]:[E[T]];for(let R=0,v=w.length;R<v;R++){const M=w[R];if(m(M,T,R,C)===!0){const O=M.__offset,N=Array.isArray(M.value)?M.value:[M.value];let X=0;for(let j=0;j<N.length;j++){const I=N[j],Z=_(I);typeof I=="number"||typeof I=="boolean"?(M.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,O+X,M.__data)):I.isMatrix3?(M.__data[0]=I.elements[0],M.__data[1]=I.elements[1],M.__data[2]=I.elements[2],M.__data[3]=0,M.__data[4]=I.elements[3],M.__data[5]=I.elements[4],M.__data[6]=I.elements[5],M.__data[7]=0,M.__data[8]=I.elements[6],M.__data[9]=I.elements[7],M.__data[10]=I.elements[8],M.__data[11]=0):(I.toArray(M.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(y,x,E,C){const T=y.value,A=x+"_"+E;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const w=C[A];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return C[A]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(y){const x=y.uniforms;let E=0;const C=16;for(let A=0,w=x.length;A<w;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,M=R.length;v<M;v++){const O=R[v],N=Array.isArray(O.value)?O.value:[O.value];for(let X=0,j=N.length;X<j;X++){const I=N[X],Z=_(I),G=E%C,z=G%Z.boundary,re=G+z;E+=z,re!==0&&C-re<Z.storage&&(E+=C-re),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Z.storage}}}const T=E%C;return T>0&&(E+=C-T),y.__size=E,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(y){const x=y.target;x.removeEventListener("dispose",d);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ux{constructor(e={}){const{canvas:t=Em(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Ei,this.toneMappingExposure=1;const x=this;let E=!1,C=0,T=0,A=null,w=-1,R=null;const v=new ut,M=new ut;let O=null;const N=new qe(0);let X=0,j=t.width,I=t.height,Z=1,G=null,z=null;const re=new ut(0,0,j,I),ae=new ut(0,0,j,I);let De=!1;const Ne=new yf;let q=!1,K=!1;const he=new ht,se=new ht,Pe=new V,Ae=new ut,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Oe(){return A===null?Z:1}let P=n;function Tt(D,F){return t.getContext(D,F)}try{const D={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ac}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",fe,!1),P===null){const F="webgl2";if(P=Tt(F,D),P===null)throw Tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Be,ze,B,Qe,Te,b,S,k,J,ee,Q,_e,te,le,Le,ne,me,ye,be,pe,Ge,Re,Ze,L;function ce(){Be=new k0(P),Be.init(),Re=new Ax(P,Be),ze=new F0(P,Be,e,Re),B=new Ex(P),ze.reverseDepthBuffer&&B.buffers.depth.setReversed(!0),Qe=new H0(P),Te=new ox,b=new Dx(P,Be,B,Te,ze,Re,Qe),S=new N0(x),k=new z0(x),J=new jm(P),Ze=new L0(P,J),ee=new G0(P,J,Qe,Ze),Q=new X0(P,ee,J,Qe),be=new W0(P,ze,b),ne=new U0(Te),_e=new ax(x,S,k,Be,ze,Ze,ne),te=new Ix(x,Te),le=new cx,Le=new mx(Be),ye=new P0(x,S,k,B,Q,f,l),me=new Sx(x,Q,ze),L=new Fx(P,Qe,ze,B),pe=new I0(P,Be,Qe),Ge=new V0(P,Be,Qe),Qe.programs=_e.programs,x.capabilities=ze,x.extensions=Be,x.properties=Te,x.renderLists=le,x.shadowMap=me,x.state=B,x.info=Qe}ce();const Y=new Px(x,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const D=Be.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Be.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(D){D!==void 0&&(Z=D,this.setSize(j,I,!1))},this.getSize=function(D){return D.set(j,I)},this.setSize=function(D,F,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=D,I=F,t.width=Math.floor(D*Z),t.height=Math.floor(F*Z),H===!0&&(t.style.width=D+"px",t.style.height=F+"px"),this.setViewport(0,0,D,F)},this.getDrawingBufferSize=function(D){return D.set(j*Z,I*Z).floor()},this.setDrawingBufferSize=function(D,F,H){j=D,I=F,Z=H,t.width=Math.floor(D*H),t.height=Math.floor(F*H),this.setViewport(0,0,D,F)},this.getCurrentViewport=function(D){return D.copy(v)},this.getViewport=function(D){return D.copy(re)},this.setViewport=function(D,F,H,W){D.isVector4?re.set(D.x,D.y,D.z,D.w):re.set(D,F,H,W),B.viewport(v.copy(re).multiplyScalar(Z).round())},this.getScissor=function(D){return D.copy(ae)},this.setScissor=function(D,F,H,W){D.isVector4?ae.set(D.x,D.y,D.z,D.w):ae.set(D,F,H,W),B.scissor(M.copy(ae).multiplyScalar(Z).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(D){B.setScissorTest(De=D)},this.setOpaqueSort=function(D){G=D},this.setTransparentSort=function(D){z=D},this.getClearColor=function(D){return D.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(D=!0,F=!0,H=!0){let W=0;if(D){let U=!1;if(A!==null){const ie=A.texture.format;U=ie===fc||ie===hc||ie===uc}if(U){const ie=A.texture.type,de=ie===ni||ie===$i||ie===Ds||ie===Hr||ie===lc||ie===cc,ge=ye.getClearColor(),ve=ye.getClearAlpha(),Ce=ge.r,we=ge.g,Se=ge.b;de?(m[0]=Ce,m[1]=we,m[2]=Se,m[3]=ve,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Ce,g[1]=we,g[2]=Se,g[3]=ve,P.clearBufferiv(P.COLOR,0,g))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),le.dispose(),Le.dispose(),Te.dispose(),S.dispose(),k.dispose(),Q.dispose(),Ze.dispose(),L.dispose(),_e.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ye),Y.removeEventListener("sessionend",pt),gt.stop()};function $(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const D=Qe.autoReset,F=me.enabled,H=me.autoUpdate,W=me.needsUpdate,U=me.type;ce(),Qe.autoReset=D,me.enabled=F,me.autoUpdate=H,me.needsUpdate=W,me.type=U}function fe(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function He(D){const F=D.target;F.removeEventListener("dispose",He),ot(F)}function ot(D){bt(D),Te.remove(D)}function bt(D){const F=Te.get(D).programs;F!==void 0&&(F.forEach(function(H){_e.releaseProgram(H)}),D.isShaderMaterial&&_e.releaseShaderCache(D))}this.renderBufferDirect=function(D,F,H,W,U,ie){F===null&&(F=Ue);const de=U.isMesh&&U.matrixWorld.determinant()<0,ge=Vf(D,F,H,W,U);B.setMaterial(W,de);let ve=H.index,Ce=1;if(W.wireframe===!0){if(ve=ee.getWireframeAttribute(H),ve===void 0)return;Ce=2}const we=H.drawRange,Se=H.attributes.position;let $e=we.start*Ce,rt=(we.start+we.count)*Ce;ie!==null&&($e=Math.max($e,ie.start*Ce),rt=Math.min(rt,(ie.start+ie.count)*Ce)),ve!==null?($e=Math.max($e,0),rt=Math.min(rt,ve.count)):Se!=null&&($e=Math.max($e,0),rt=Math.min(rt,Se.count));const ft=rt-$e;if(ft<0||ft===1/0)return;Ze.setup(U,W,ge,H,ve);let Zt,Ke=pe;if(ve!==null&&(Zt=J.get(ve),Ke=Ge,Ke.setIndex(Zt)),U.isMesh)W.wireframe===!0?(B.setLineWidth(W.wireframeLinewidth*Oe()),Ke.setMode(P.LINES)):Ke.setMode(P.TRIANGLES);else if(U.isLine){let Me=W.linewidth;Me===void 0&&(Me=1),B.setLineWidth(Me*Oe()),U.isLineSegments?Ke.setMode(P.LINES):U.isLineLoop?Ke.setMode(P.LINE_LOOP):Ke.setMode(P.LINE_STRIP)}else U.isPoints?Ke.setMode(P.POINTS):U.isSprite&&Ke.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,Ct=U._multiDrawCounts,je=U._multiDrawCount,xn=ve?J.get(ve).bytesPerElement:1,ir=Te.get(W).currentProgram.getUniforms();for(let Kt=0;Kt<je;Kt++)ir.setValue(P,"_gl_DrawID",Kt),Ke.render(Me[Kt]/xn,Ct[Kt])}else if(U.isInstancedMesh)Ke.renderInstances($e,ft,U.count);else if(H.isInstancedBufferGeometry){const Me=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ct=Math.min(H.instanceCount,Me);Ke.renderInstances($e,ft,Ct)}else Ke.render($e,ft)};function Xe(D,F,H){D.transparent===!0&&D.side===Yn&&D.forceSinglePass===!1?(D.side=kt,D.needsUpdate=!0,Ls(D,F,H),D.side=ti,D.needsUpdate=!0,Ls(D,F,H),D.side=Yn):Ls(D,F,H)}this.compile=function(D,F,H=null){H===null&&(H=D),d=Le.get(H),d.init(F),y.push(d),H.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),D!==H&&D.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const W=new Set;return D.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const ge=ie[de];Xe(ge,H,U),W.add(ge)}else Xe(ie,H,U),W.add(ie)}),y.pop(),d=null,W},this.compileAsync=function(D,F,H=null){const W=this.compile(D,F,H);return new Promise(U=>{function ie(){if(W.forEach(function(de){Te.get(de).currentProgram.isReady()&&W.delete(de)}),W.size===0){U(D);return}setTimeout(ie,10)}Be.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ee=null;function xe(D){Ee&&Ee(D)}function Ye(){gt.stop()}function pt(){gt.start()}const gt=new Df;gt.setAnimationLoop(xe),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(D){Ee=D,Y.setAnimationLoop(D),D===null?gt.stop():gt.start()},Y.addEventListener("sessionstart",Ye),Y.addEventListener("sessionend",pt),this.render=function(D,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,F,A),d=Le.get(D,y.length),d.init(F),y.push(d),se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ne.setFromProjectionMatrix(se),K=this.localClippingEnabled,q=ne.init(this.clippingPlanes,K),_=le.get(D,p.length),_.init(),p.push(_),Y.enabled===!0&&Y.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&vn(ie,F,-1/0,x.sortObjects)}vn(D,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,z),Ve=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ve&&ye.addToRenderList(_,D),this.info.render.frame++,q===!0&&ne.beginShadows();const H=d.state.shadowsArray;me.render(H,D,F),q===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,U=_.transmissive;if(d.setupLights(),F.isArrayCamera){const ie=F.cameras;if(U.length>0)for(let de=0,ge=ie.length;de<ge;de++){const ve=ie[de];vc(W,U,D,ve)}Ve&&ye.render(D);for(let de=0,ge=ie.length;de<ge;de++){const ve=ie[de];nr(_,D,ve,ve.viewport)}}else U.length>0&&vc(W,U,D,F),Ve&&ye.render(D),nr(_,D,F);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(x,D,F),Ze.resetDefaultState(),w=-1,R=null,y.pop(),y.length>0?(d=y[y.length-1],q===!0&&ne.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function vn(D,F,H,W){if(D.visible===!1)return;if(D.layers.test(F.layers)){if(D.isGroup)H=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(F);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Ne.intersectsSprite(D)){W&&Ae.setFromMatrixPosition(D.matrixWorld).applyMatrix4(se);const de=Q.update(D),ge=D.material;ge.visible&&_.push(D,de,ge,H,Ae.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Ne.intersectsObject(D))){const de=Q.update(D),ge=D.material;if(W&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ae.copy(D.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ae.copy(de.boundingSphere.center)),Ae.applyMatrix4(D.matrixWorld).applyMatrix4(se)),Array.isArray(ge)){const ve=de.groups;for(let Ce=0,we=ve.length;Ce<we;Ce++){const Se=ve[Ce],$e=ge[Se.materialIndex];$e&&$e.visible&&_.push(D,de,$e,H,Ae.z,Se)}}else ge.visible&&_.push(D,de,ge,H,Ae.z,null)}}const ie=D.children;for(let de=0,ge=ie.length;de<ge;de++)vn(ie[de],F,H,W)}function nr(D,F,H,W){const U=D.opaque,ie=D.transmissive,de=D.transparent;d.setupLightsView(H),q===!0&&ne.setGlobalState(x.clippingPlanes,H),W&&B.viewport(v.copy(W)),U.length>0&&Ps(U,F,H),ie.length>0&&Ps(ie,F,H),de.length>0&&Ps(de,F,H),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function vc(D,F,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new ii(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?tr:ni,minFilter:Xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ie=d.state.transmissionRenderTarget[W.id],de=W.viewport||v;ie.setSize(de.z,de.w);const ge=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(N),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&ye.render(H);const ve=x.toneMapping;x.toneMapping=Ei;const Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),q===!0&&ne.setGlobalState(x.clippingPlanes,W),Ps(D,H,W),b.updateMultisampleRenderTarget(ie),b.updateRenderTargetMipmap(ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Se=0,$e=F.length;Se<$e;Se++){const rt=F[Se],ft=rt.object,Zt=rt.geometry,Ke=rt.material,Me=rt.group;if(Ke.side===Yn&&ft.layers.test(W.layers)){const Ct=Ke.side;Ke.side=kt,Ke.needsUpdate=!0,xc(ft,H,W,Zt,Ke,Me),Ke.side=Ct,Ke.needsUpdate=!0,we=!0}}we===!0&&(b.updateMultisampleRenderTarget(ie),b.updateRenderTargetMipmap(ie))}x.setRenderTarget(ge),x.setClearColor(N,X),Ce!==void 0&&(W.viewport=Ce),x.toneMapping=ve}function Ps(D,F,H){const W=F.isScene===!0?F.overrideMaterial:null;for(let U=0,ie=D.length;U<ie;U++){const de=D[U],ge=de.object,ve=de.geometry,Ce=W===null?de.material:W,we=de.group;ge.layers.test(H.layers)&&xc(ge,F,H,ve,Ce,we)}}function xc(D,F,H,W,U,ie){D.onBeforeRender(x,F,H,W,U,ie),D.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),U.onBeforeRender(x,F,H,W,D,ie),U.transparent===!0&&U.side===Yn&&U.forceSinglePass===!1?(U.side=kt,U.needsUpdate=!0,x.renderBufferDirect(H,F,W,U,D,ie),U.side=ti,U.needsUpdate=!0,x.renderBufferDirect(H,F,W,U,D,ie),U.side=Yn):x.renderBufferDirect(H,F,W,U,D,ie),D.onAfterRender(x,F,H,W,U,ie)}function Ls(D,F,H){F.isScene!==!0&&(F=Ue);const W=Te.get(D),U=d.state.lights,ie=d.state.shadowsArray,de=U.state.version,ge=_e.getParameters(D,U.state,ie,F,H),ve=_e.getProgramCacheKey(ge);let Ce=W.programs;W.environment=D.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(D.isMeshStandardMaterial?k:S).get(D.envMap||W.environment),W.envMapRotation=W.environment!==null&&D.envMap===null?F.environmentRotation:D.envMapRotation,Ce===void 0&&(D.addEventListener("dispose",He),Ce=new Map,W.programs=Ce);let we=Ce.get(ve);if(we!==void 0){if(W.currentProgram===we&&W.lightsStateVersion===de)return Mc(D,ge),we}else ge.uniforms=_e.getUniforms(D),D.onBeforeCompile(ge,x),we=_e.acquireProgram(ge,ve),Ce.set(ve,we),W.uniforms=ge.uniforms;const Se=W.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Se.clippingPlanes=ne.uniform),Mc(D,ge),W.needsLights=Wf(D),W.lightsStateVersion=de,W.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=we,W.uniformsList=null,we}function Sc(D){if(D.uniformsList===null){const F=D.currentProgram.getUniforms();D.uniformsList=_a.seqWithValue(F.seq,D.uniforms)}return D.uniformsList}function Mc(D,F){const H=Te.get(D);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Vf(D,F,H,W,U){F.isScene!==!0&&(F=Ue),b.resetTextureUnits();const ie=F.fog,de=W.isMeshStandardMaterial?F.environment:null,ge=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bi,ve=(W.isMeshStandardMaterial?k:S).get(W.envMap||de),Ce=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,we=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Se=!!H.morphAttributes.position,$e=!!H.morphAttributes.normal,rt=!!H.morphAttributes.color;let ft=Ei;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Zt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=Zt!==void 0?Zt.length:0,Me=Te.get(W),Ct=d.state.lights;if(q===!0&&(K===!0||D!==R)){const ln=D===R&&W.id===w;ne.setState(W,D,ln)}let je=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ct.state.version||Me.outputColorSpace!==ge||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==ve||W.fog===!0&&Me.fog!==ie||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ne.numPlanes||Me.numIntersection!==ne.numIntersection)||Me.vertexAlphas!==Ce||Me.vertexTangents!==we||Me.morphTargets!==Se||Me.morphNormals!==$e||Me.morphColors!==rt||Me.toneMapping!==ft||Me.morphTargetsCount!==Ke)&&(je=!0):(je=!0,Me.__version=W.version);let xn=Me.currentProgram;je===!0&&(xn=Ls(W,F,U));let ir=!1,Kt=!1,Ha=!1;const mt=xn.getUniforms(),ai=Me.uniforms;if(B.useProgram(xn.program)&&(ir=!0,Kt=!0,Ha=!0),W.id!==w&&(w=W.id,Kt=!0),ir||R!==D){ze.reverseDepthBuffer?(he.copy(D.projectionMatrix),Dm(he),Am(he),mt.setValue(P,"projectionMatrix",he)):mt.setValue(P,"projectionMatrix",D.projectionMatrix),mt.setValue(P,"viewMatrix",D.matrixWorldInverse);const ln=mt.map.cameraPosition;ln!==void 0&&ln.setValue(P,Pe.setFromMatrixPosition(D.matrixWorld)),ze.logarithmicDepthBuffer&&mt.setValue(P,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(P,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,Kt=!0,Ha=!0)}if(U.isSkinnedMesh){mt.setOptional(P,U,"bindMatrix"),mt.setOptional(P,U,"bindMatrixInverse");const ln=U.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),mt.setValue(P,"boneTexture",ln.boneTexture,b))}U.isBatchedMesh&&(mt.setOptional(P,U,"batchingTexture"),mt.setValue(P,"batchingTexture",U._matricesTexture,b),mt.setOptional(P,U,"batchingIdTexture"),mt.setValue(P,"batchingIdTexture",U._indirectTexture,b),mt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(P,"batchingColorTexture",U._colorsTexture,b));const Wa=H.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0)&&be.update(U,H,xn),(Kt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,mt.setValue(P,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ai.envMap.value=ve,ai.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(ai.envMapIntensity.value=F.environmentIntensity),Kt&&(mt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Hf(ai,Ha),ie&&W.fog===!0&&te.refreshFogUniforms(ai,ie),te.refreshMaterialUniforms(ai,W,Z,I,d.state.transmissionRenderTarget[D.id]),_a.upload(P,Sc(Me),ai,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_a.upload(P,Sc(Me),ai,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(P,"center",U.center),mt.setValue(P,"modelViewMatrix",U.modelViewMatrix),mt.setValue(P,"normalMatrix",U.normalMatrix),mt.setValue(P,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ln=W.uniformsGroups;for(let Xa=0,Xf=ln.length;Xa<Xf;Xa++){const Ec=ln[Xa];L.update(Ec,xn),L.bind(Ec,xn)}}return xn}function Hf(D,F){D.ambientLightColor.needsUpdate=F,D.lightProbe.needsUpdate=F,D.directionalLights.needsUpdate=F,D.directionalLightShadows.needsUpdate=F,D.pointLights.needsUpdate=F,D.pointLightShadows.needsUpdate=F,D.spotLights.needsUpdate=F,D.spotLightShadows.needsUpdate=F,D.rectAreaLights.needsUpdate=F,D.hemisphereLights.needsUpdate=F}function Wf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,F,H){Te.get(D.texture).__webglTexture=F,Te.get(D.depthTexture).__webglTexture=H;const W=Te.get(D);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,F){const H=Te.get(D);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(D,F=0,H=0){A=D,C=F,T=H;let W=!0,U=null,ie=!1,de=!1;if(D){const ve=Te.get(D);if(ve.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(ve.__webglFramebuffer===void 0)b.setupRenderTarget(D);else if(ve.__hasExternalTextures)b.rebindTextures(D,Te.get(D.texture).__webglTexture,Te.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Se=D.depthTexture;if(ve.__boundDepthTexture!==Se){if(Se!==null&&Te.has(Se)&&(D.width!==Se.image.width||D.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(D)}}const Ce=D.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const we=Te.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(we[F])?U=we[F][H]:U=we[F],ie=!0):D.samples>0&&b.useMultisampledRTT(D)===!1?U=Te.get(D).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[H]:U=we,v.copy(D.viewport),M.copy(D.scissor),O=D.scissorTest}else v.copy(re).multiplyScalar(Z).floor(),M.copy(ae).multiplyScalar(Z).floor(),O=De;if(B.bindFramebuffer(P.FRAMEBUFFER,U)&&W&&B.drawBuffers(D,U),B.viewport(v),B.scissor(M),B.setScissorTest(O),ie){const ve=Te.get(D.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,H)}else if(de){const ve=Te.get(D.texture),Ce=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.__webglTexture,H||0,Ce)}w=-1},this.readRenderTargetPixels=function(D,F,H,W,U,ie,de){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){B.bindFramebuffer(P.FRAMEBUFFER,ge);try{const ve=D.texture,Ce=ve.format,we=ve.type;if(!ze.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=D.width-W&&H>=0&&H<=D.height-U&&P.readPixels(F,H,W,U,Re.convert(Ce),Re.convert(we),ie)}finally{const ve=A!==null?Te.get(A).__webglFramebuffer:null;B.bindFramebuffer(P.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(D,F,H,W,U,ie,de){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){const ve=D.texture,Ce=ve.format,we=ve.type;if(!ze.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=D.width-W&&H>=0&&H<=D.height-U){B.bindFramebuffer(P.FRAMEBUFFER,ge);const Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(F,H,W,U,Re.convert(Ce),Re.convert(we),0);const $e=A!==null?Te.get(A).__webglFramebuffer:null;B.bindFramebuffer(P.FRAMEBUFFER,$e);const rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ym(P,rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Se),P.deleteSync(rt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,F=null,H=0){D.isTexture!==!0&&(ma("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,D=arguments[1]);const W=Math.pow(2,-H),U=Math.floor(D.image.width*W),ie=Math.floor(D.image.height*W),de=F!==null?F.x:0,ge=F!==null?F.y:0;b.setTexture2D(D,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,de,ge,U,ie),B.unbindTexture()},this.copyTextureToTexture=function(D,F,H=null,W=null,U=0){D.isTexture!==!0&&(ma("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,D=arguments[1],F=arguments[2],U=arguments[3]||0,H=null);let ie,de,ge,ve,Ce,we;H!==null?(ie=H.max.x-H.min.x,de=H.max.y-H.min.y,ge=H.min.x,ve=H.min.y):(ie=D.image.width,de=D.image.height,ge=0,ve=0),W!==null?(Ce=W.x,we=W.y):(Ce=0,we=0);const Se=Re.convert(F.format),$e=Re.convert(F.type);b.setTexture2D(F,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const rt=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zt=P.getParameter(P.UNPACK_SKIP_PIXELS),Ke=P.getParameter(P.UNPACK_SKIP_ROWS),Me=P.getParameter(P.UNPACK_SKIP_IMAGES),Ct=D.isCompressedTexture?D.mipmaps[U]:D.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,ve),D.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ce,we,ie,de,Se,$e,Ct.data):D.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ce,we,Ct.width,Ct.height,Se,Ct.data):P.texSubImage2D(P.TEXTURE_2D,U,Ce,we,ie,de,Se,$e,Ct),P.pixelStorei(P.UNPACK_ROW_LENGTH,rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Me),U===0&&F.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(D,F,H=null,W=null,U=0){D.isTexture!==!0&&(ma("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,D=arguments[2],F=arguments[3],U=arguments[4]||0);let ie,de,ge,ve,Ce,we,Se,$e,rt;const ft=D.isCompressedTexture?D.mipmaps[U]:D.image;H!==null?(ie=H.max.x-H.min.x,de=H.max.y-H.min.y,ge=H.max.z-H.min.z,ve=H.min.x,Ce=H.min.y,we=H.min.z):(ie=ft.width,de=ft.height,ge=ft.depth,ve=0,Ce=0,we=0),W!==null?(Se=W.x,$e=W.y,rt=W.z):(Se=0,$e=0,rt=0);const Zt=Re.convert(F.format),Ke=Re.convert(F.type);let Me;if(F.isData3DTexture)b.setTexture3D(F,0),Me=P.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)b.setTexture2DArray(F,0),Me=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ct=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xn=P.getParameter(P.UNPACK_SKIP_PIXELS),ir=P.getParameter(P.UNPACK_SKIP_ROWS),Kt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we),D.isDataTexture||D.isData3DTexture?P.texSubImage3D(Me,U,Se,$e,rt,ie,de,ge,Zt,Ke,ft.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,U,Se,$e,rt,ie,de,ge,Zt,ft.data):P.texSubImage3D(Me,U,Se,$e,rt,ie,de,ge,Zt,Ke,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ir),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt),U===0&&F.generateMipmaps&&P.generateMipmap(Me),B.unbindTexture()},this.initRenderTarget=function(D){Te.get(D).__webglFramebuffer===void 0&&b.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?b.setTextureCube(D,0):D.isData3DTexture?b.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?b.setTexture2DArray(D,0):b.setTexture2D(D,0),B.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,B.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Ba?"display-p3":"srgb"}}class Nx extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ox{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new V;class Ra{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pf extends ws{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xr;const ns=new V,Sr=new V,Mr=new V,Er=new ke,is=new ke,Lf=new ht,na=new V,rs=new V,ia=new V,Bu=new ke,Fo=new ke,zu=new ke;class Bx extends qt{constructor(e=new Pf){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new si;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ox(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Ra(n,3,0,!1)),xr.setAttribute("uv",new Ra(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Mr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ra(na.set(-.5,-.5,0),Mr,a,Sr,i,s),ra(rs.set(.5,-.5,0),Mr,a,Sr,i,s),ra(ia.set(.5,.5,0),Mr,a,Sr,i,s),Bu.set(0,0),Fo.set(1,0),zu.set(1,1);let o=e.ray.intersectTriangle(na,rs,ia,!1,ns);if(o===null&&(ra(rs.set(-.5,.5,0),Mr,a,Sr,i,s),Fo.set(0,1),o=e.ray.intersectTriangle(na,ia,rs,!1,ns),o===null))return;const l=e.ray.origin.distanceTo(ns);l<e.near||l>e.far||t.push({distance:l,point:ns.clone(),uv:hn.getInterpolation(ns,na,rs,ia,Bu,Fo,zu,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ra(r,e,t,n,i,s){Er.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(is.x=s*Er.x-i*Er.y,is.y=i*Er.x+s*Er.y):is.copy(Er),r.copy(e),r.x+=is.x,r.y+=is.y,r.applyMatrix4(Lf)}class Uo extends Dt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:tn,this.magFilter=s!==void 0?s:tn,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const ku={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zx{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const kx=new zx;class gc{constructor(e){this.manager=e!==void 0?e:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gx extends gc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ku.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=As("img");function l(){u(),ku.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Vx extends gc{constructor(e){super(e)}load(e,t,n,i){const s=new Dt,a=new Gx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class If{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);class ka{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hx=new Af(-1,1,1,-1,0,1);class Wx extends si{constructor(){super(),this.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qn([0,2,0,0,2,0],2))}}const Xx=new Wx;class qx{constructor(e){this._mesh=new _n(Xx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ga extends _n{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new $t;const n=this,i=t.color!==void 0?new qe(t.color):new qe(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||Ga.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new di,h=new V,f=new V,m=new V,g=new ht,_=new V(0,0,-1),d=new ut,p=new V,y=new V,x=new ut,E=new ht,C=this.camera,T=new ii(s,a,{samples:c,type:tr}),A=new on({name:l.name!==void 0?l.name:"unspecified",uniforms:mc.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=T.texture,A.uniforms.color.value=i,A.uniforms.textureMatrix.value=E,this.material=A,this.onBeforeRender=function(w,R,v){if(f.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(v.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(f,m),p.dot(h)>0)return;p.reflect(h).negate(),p.add(f),g.extractRotation(v.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(m),y.subVectors(f,_),y.reflect(h).negate(),y.add(f),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(h),C.lookAt(y),C.far=v.far,C.updateMatrixWorld(),C.projectionMatrix.copy(v.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(C.projectionMatrix),E.multiply(C.matrixWorldInverse),E.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(C.matrixWorldInverse),d.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const M=C.projectionMatrix;x.x=(Math.sign(d.x)+M.elements[8])/M.elements[0],x.y=(Math.sign(d.y)+M.elements[9])/M.elements[5],x.z=-1,x.w=(1+M.elements[10])/M.elements[14],d.multiplyScalar(2/d.dot(x)),M.elements[2]=d.x,M.elements[6]=d.y,M.elements[10]=d.z+1-o,M.elements[14]=d.w,n.visible=!1;const O=w.getRenderTarget(),N=w.xr.enabled,X=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(T),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(R,C),w.xr.enabled=N,w.shadowMap.autoUpdate=X,w.setRenderTarget(O);const j=v.viewport;j!==void 0&&w.state.viewport(j),n.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}}Ga.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const Yx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ff extends ka{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mc.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qx(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vu extends ka{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Zx extends ka{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Kx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ff(Yx),this.copyPass.material.blending=Jn,this.clock=new If}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vu!==void 0&&(a instanceof Vu?n=!0:a instanceof Zx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jx extends ka{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Jx=`#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vUv;
uniform sampler2D uImage;
uniform float uTime;
uniform float uImageAspect;

void main() {
  vec2 uv = vUv;
  uv.x = (uv.x * 1.14285714 * uImageAspect) + (1.0 - 1.14285714 * uImageAspect) / 2.0;
  gl_FragColor = texture2D(uImage, vec2(1.0 - uv.x, uv.y));
}`,Qx=`#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vUv;

void main() {
    vec3 newPosition = position;
    newPosition.z += abs(position.x * position.x) * 0.2;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    vUv = uv;
}`,$x=`#ifdef GL_ES
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
}`,eS=`#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`;class tS{constructor(e){et(this,"scene",new Nx);et(this,"renderer");et(this,"camera");et(this,"effectComposer");et(this,"oldCameraEffect");et(this,"mm",ji.matchMedia());et(this,"svgCanvas",null);et(this,"projects",[]);et(this,"meshes",[]);et(this,"sharedUniforms",{uTime:{value:0},uResolution:{value:new ke(window.innerWidth,window.innerHeight)}});et(this,"titleMaterial",null);et(this,"titleSprite",null);et(this,"reflection",null);et(this,"spriteFrustrum",.002);et(this,"scaleFactor",1);et(this,"isFirefox",navigator.userAgent.toLowerCase().indexOf("firefox")>-1);et(this,"activeMesh",-1);et(this,"group",new cs);et(this,"svgToUrl",e=>{const t=new XMLSerializer().serializeToString(e),n="data:image/svg+xml;base64,"+btoa(t),i=new Image;i.width=window.innerWidth,i.height=window.innerHeight,i.classList.add("titleImage"),i.crossOrigin="anonymous",i.onload=()=>{var o;(o=this.svgCanvas)==null||o.remove(),this.svgCanvas=null,this.svgCanvas=document.createElement("canvas"),this.svgCanvas.width=window.innerWidth,this.svgCanvas.height=window.innerHeight;const s=this.svgCanvas.getContext("2d");s==null||s.clearRect(0,0,this.svgCanvas.width,this.svgCanvas.height),s==null||s.drawImage(i,0,-window.innerHeight/2,window.innerWidth,window.innerHeight*2);const a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!1?new Dt(this.svgCanvas):new Dt(null);a.needsUpdate=!0,window.innerWidth>768&&this.titleMaterial&&(this.titleMaterial.map=a,this.titleMaterial.needsUpdate=!0),URL.revokeObjectURL(i.src)},i.src=n});et(this,"resizeScene",(e,t)=>{var n;(n=this.titleSprite)==null||n.scale.set(window.innerWidth*this.spriteFrustrum,window.innerHeight*this.spriteFrustrum,0),this.sharedUniforms.uResolution.value=new ke(window.innerWidth,window.innerHeight),this.camera.aspect=e/t,this.scaleFactor=Math.min(window.innerWidth*.0018,1),this.group.scale.set(this.scaleFactor,this.scaleFactor,this.scaleFactor),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)});et(this,"angleStep",2*Math.PI/8);et(this,"degPositions",[]);et(this,"toggleProjetcs",(e,t,n)=>{this.activeMesh+=t,this.activeMesh=(this.activeMesh+8)%8,this.meshes[(this.activeMesh-3*t+8)%8].visible=!1,this.meshes[(this.activeMesh+t+8)%8].visible=!0,console.log(this.projects[(e+t*3+this.projects.length)%this.projects.length].element),this.meshes[(this.activeMesh+t*3+8)%8].material.uniforms.uImage.value=this.projects[(e+t*3+this.projects.length)%this.projects.length].texture;const i=n[(e+t*3+this.projects.length)%this.projects.length].querySelector(".asset");this.meshes[(this.activeMesh+t*3+8)%8].material.uniforms.uImageAspect.value=i.clientHeight/i.clientWidth});et(this,"placeImages",()=>{for(let e=0;e<8;e++){const t=new qr(2,1.75,8,1),n=new on({vertexShader:Qx,fragmentShader:Jx,uniforms:{uImage:{value:this.projects[e].texture},uImageAspect:{value:this.projects[e].element.clientHeight/this.projects[e].element.clientWidth},...this.sharedUniforms},side:kt}),i=new _n(t,n);this.meshes.push(i);const s=e*this.angleStep,a=2.62,o=a*Math.cos(s),l=a*Math.sin(s),u=Math.atan2(l+a,o-0)*(180/Math.PI);this.degPositions.push(u),this.meshes[e].position.set(o,0,l),this.meshes[e].lookAt(0,0,0),this.group.add(this.meshes[e]),this.group.rotation.y=2*Math.PI/8*-2}this.meshes[7].material.uniforms.uImage.value=this.projects[this.projects.length-1].texture,this.meshes[6].material.uniforms.uImage.value=this.projects[this.projects.length-2].texture,this.meshes[5].material.uniforms.uImage.value=this.projects[this.projects.length-3].texture});et(this,"rotateGroup",e=>{this.group.rotation.y=e+2*Math.PI/8*-2});et(this,"clock",new If);et(this,"renderRenderer",()=>{this.effectComposer.render(),this.sharedUniforms.uTime.value=this.clock.getElapsedTime(),window.requestAnimationFrame(this.renderRenderer)});this.canvas=e,this.scene.background=new qe(16777215),this.renderer=new Ux({canvas:this.canvas,antialias:!1,alpha:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Tn,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.camera=new $t(60,window.innerWidth/window.innerHeight,1.4,3.2*((1-this.scaleFactor)*1.5)),this.camera.position.set(0,0,4.6),this.scene.add(this.camera),this.effectComposer=new Kx(this.renderer),this.effectComposer.setSize(window.innerWidth,window.innerHeight),this.effectComposer.addPass(new jx(this.scene,this.camera));const t=new on({vertexShader:eS,fragmentShader:$x,uniforms:{tDiffuse:{value:null},...this.sharedUniforms}});this.oldCameraEffect=new Ff(t),this.effectComposer.addPass(this.oldCameraEffect);const n=ji.quickTo(this.group.position,"x",{duration:2,ease:"power3.out"}),i=ji.quickTo(this.group.position,"y",{duration:2,ease:"power3.out"});if(window.addEventListener("mousemove",s=>{n((s.clientX-window.innerWidth/2)*-13e-5),i((s.clientY-window.innerWidth/2)*13e-5-.2)}),window.innerWidth>768){if(!this.isFirefox){const s=new qr(6.4,6.4,1,1);this.reflection=new Ga(s,{textureWidth:window.innerWidth/3,textureHeight:window.innerHeight/3,clipBias:.003,color:7697781}),this.reflection.position.y=-.75,this.reflection.rotation.x=-Math.PI/2,this.group.add(this.reflection)}this.titleMaterial=new Pf({map:null,transparent:!0,side:ti}),this.titleSprite=new Bx(this.titleMaterial),this.titleSprite.scale.set(window.innerWidth*this.spriteFrustrum,window.innerHeight*this.spriteFrustrum,0),this.titleSprite.position.z=3.1,this.scene.add(this.titleSprite)}this.group.position.set(0,-.2,0),this.scene.add(this.group),this.mm.add("(max-width: 768px)",()=>{this.titleSprite&&(this.titleSprite.visible=!1,this.reflection&&(this.reflection.visible=!1),this.oldCameraEffect.enabled=!1)}),this.mm.add("(min-width: 769px)",()=>{this.titleSprite&&(this.titleSprite.visible=!0,this.reflection&&(this.reflection.visible=!0),this.oldCameraEffect.enabled=!0)})}}function nS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function iS(r,e,t){return e&&nS(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wt,ga,nn,vi,xi,Fr,Uf,ki,ds,Nf,jn,An,Of,Bf=function(){return wt||typeof window<"u"&&(wt=window.gsap)&&wt.registerPlugin&&wt},zf=1,br=[],fn=[],ps=[],ms=Date.now,kl=function(e,t){return t},rS=function(){var e=ds.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,fn),i.push.apply(i,ps),fn=n,ps=i,kl=function(a,o){return t[a](o)}},sS=function(e,t){return~ps.indexOf(e)&&ps[ps.indexOf(e)+1][t]},_s=function(e){return!!~Nf.indexOf(e)},Ot=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Nt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sa="scrollLeft",aa="scrollTop",Gl=function(){return jn&&jn.isPressed||fn.cache++},Pa=function(e,t){var n=function i(s){if(s||s===0){zf&&(nn.history.scrollRestoration="manual");var a=jn&&jn.isPressed;s=i.v=Math.round(s)||(jn&&jn.iOS?1:0),e(s),i.cacheID=fn.cache,a&&kl("ss",s)}else(t||fn.cache!==i.cacheID||kl("ref"))&&(i.cacheID=fn.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},La={s:sa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pa(function(r){return arguments.length?nn.scrollTo(r,Va.sc()):nn.pageXOffset||vi[sa]||xi[sa]||Fr[sa]||0})},Va={s:aa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:La,sc:Pa(function(r){return arguments.length?nn.scrollTo(La.sc(),r):nn.pageYOffset||vi[aa]||xi[aa]||Fr[aa]||0})},aS=function(e,t){return(t&&t._ctx&&t._ctx.selector||wt.utils.toArray)(e)[0]||(typeof e=="string"&&wt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hu=function(e,t){var n=t.s,i=t.sc;_s(e)&&(e=vi.scrollingElement||xi);var s=fn.indexOf(e),a=i===Va.sc?1:2;!~s&&(s=fn.push(e)-1),fn[s+a]||Ot(e,"scroll",Gl);var o=fn[s+a],l=o||(fn[s+a]=Pa(sS(e,n),!0)||(_s(e)?i:Pa(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=wt.getProperty(e,"scrollBehavior")==="smooth"),l},Wu=function(e,t,n){var i=e,s=e,a=ms(),o=a,l=t,c=Math.max(500,l*3),u=function(g,_){var d=ms();_||d-a>l?(s=i,i=g,o=a,a=d):i+=g},h=function(){s=i=0,o=a=0},f=function(g){var _=o,d=s,p=ms();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+d)/(p-_)*1e3};return{update:u,reset:h,getVelocity:f}},ss=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Xu=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},kf=function(){ds=wt.core.globals().ScrollTrigger,ds&&ds.core&&rS()},Gf=function(e){return wt=e||Bf(),!ga&&wt&&typeof document<"u"&&document.body&&(nn=window,vi=document,xi=vi.documentElement,Fr=vi.body,Nf=[nn,vi,xi,Fr],wt.utils.clamp,Of=wt.core.context||function(){},ki="onpointerenter"in Fr?"pointer":"mouse",Uf=wn.isTouch=nn.matchMedia&&nn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in nn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,An=wn.eventTypes=("ontouchstart"in xi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zf=0},500),kf(),ga=1),ga};La.op=Va;fn.cache=0;var wn=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ga||Gf(wt)||console.warn("Please gsap.registerPlugin(Observer)"),ds||kf();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,_=n.event,d=n.onDragStart,p=n.onDragEnd,y=n.onDrag,x=n.onPress,E=n.onRelease,C=n.onRight,T=n.onLeft,A=n.onUp,w=n.onDown,R=n.onChangeX,v=n.onChangeY,M=n.onChange,O=n.onToggleX,N=n.onToggleY,X=n.onHover,j=n.onHoverEnd,I=n.onMove,Z=n.ignoreCheck,G=n.isNormalizer,z=n.onGestureStart,re=n.onGestureEnd,ae=n.onWheel,De=n.onEnable,Ne=n.onDisable,q=n.onClick,K=n.scrollSpeed,he=n.capture,se=n.allowClicks,Pe=n.lockAxis,Ae=n.onLockAxis;this.target=o=aS(o)||xi,this.vars=n,m&&(m=wt.utils.toArray(m)),i=i||1e-9,s=s||0,g=g||1,K=K||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(nn.getComputedStyle(Fr).lineHeight)||22);var Ue,Ve,Oe,P,Tt,Be,ze,B=this,Qe=0,Te=0,b=n.passive||!u,S=Hu(o,La),k=Hu(o,Va),J=S(),ee=k(),Q=~a.indexOf("touch")&&!~a.indexOf("pointer")&&An[0]==="pointerdown",_e=_s(o),te=o.ownerDocument||vi,le=[0,0,0],Le=[0,0,0],ne=0,me=function(){return ne=ms()},ye=function(xe,Ye){return(B.event=xe)&&m&&~m.indexOf(xe.target)||Ye&&Q&&xe.pointerType!=="touch"||Z&&Z(xe,Ye)},be=function(){B._vx.reset(),B._vy.reset(),Ve.pause(),h&&h(B)},pe=function(){var xe=B.deltaX=Xu(le),Ye=B.deltaY=Xu(Le),pt=Math.abs(xe)>=i,gt=Math.abs(Ye)>=i;M&&(pt||gt)&&M(B,xe,Ye,le,Le),pt&&(C&&B.deltaX>0&&C(B),T&&B.deltaX<0&&T(B),R&&R(B),O&&B.deltaX<0!=Qe<0&&O(B),Qe=B.deltaX,le[0]=le[1]=le[2]=0),gt&&(w&&B.deltaY>0&&w(B),A&&B.deltaY<0&&A(B),v&&v(B),N&&B.deltaY<0!=Te<0&&N(B),Te=B.deltaY,Le[0]=Le[1]=Le[2]=0),(P||Oe)&&(I&&I(B),Oe&&(y(B),Oe=!1),P=!1),Be&&!(Be=!1)&&Ae&&Ae(B),Tt&&(ae(B),Tt=!1),Ue=0},Ge=function(xe,Ye,pt){le[pt]+=xe,Le[pt]+=Ye,B._vx.update(xe),B._vy.update(Ye),c?Ue||(Ue=requestAnimationFrame(pe)):pe()},Re=function(xe,Ye){Pe&&!ze&&(B.axis=ze=Math.abs(xe)>Math.abs(Ye)?"x":"y",Be=!0),ze!=="y"&&(le[2]+=xe,B._vx.update(xe,!0)),ze!=="x"&&(Le[2]+=Ye,B._vy.update(Ye,!0)),c?Ue||(Ue=requestAnimationFrame(pe)):pe()},Ze=function(xe){if(!ye(xe,1)){xe=ss(xe,u);var Ye=xe.clientX,pt=xe.clientY,gt=Ye-B.x,vn=pt-B.y,nr=B.isDragging;B.x=Ye,B.y=pt,(nr||Math.abs(B.startX-Ye)>=s||Math.abs(B.startY-pt)>=s)&&(y&&(Oe=!0),nr||(B.isDragging=!0),Re(gt,vn),nr||d&&d(B))}},L=B.onPress=function(Ee){ye(Ee,1)||Ee&&Ee.button||(B.axis=ze=null,Ve.pause(),B.isPressed=!0,Ee=ss(Ee),Qe=Te=0,B.startX=B.x=Ee.clientX,B.startY=B.y=Ee.clientY,B._vx.reset(),B._vy.reset(),Ot(G?o:te,An[1],Ze,b,!0),B.deltaX=B.deltaY=0,x&&x(B))},ce=B.onRelease=function(Ee){if(!ye(Ee,1)){Nt(G?o:te,An[1],Ze,!0);var xe=!isNaN(B.y-B.startY),Ye=B.isDragging,pt=Ye&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),gt=ss(Ee);!pt&&xe&&(B._vx.reset(),B._vy.reset(),u&&se&&wt.delayedCall(.08,function(){if(ms()-ne>300&&!Ee.defaultPrevented){if(Ee.target.click)Ee.target.click();else if(te.createEvent){var vn=te.createEvent("MouseEvents");vn.initMouseEvent("click",!0,!0,nn,1,gt.screenX,gt.screenY,gt.clientX,gt.clientY,!1,!1,!1,!1,0,null),Ee.target.dispatchEvent(vn)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,h&&Ye&&!G&&Ve.restart(!0),p&&Ye&&p(B),E&&E(B,pt)}},Y=function(xe){return xe.touches&&xe.touches.length>1&&(B.isGesturing=!0)&&z(xe,B.isDragging)},$=function(){return(B.isGesturing=!1)||re(B)},ue=function(xe){if(!ye(xe)){var Ye=S(),pt=k();Ge((Ye-J)*K,(pt-ee)*K,1),J=Ye,ee=pt,h&&Ve.restart(!0)}},fe=function(xe){if(!ye(xe)){xe=ss(xe,u),ae&&(Tt=!0);var Ye=(xe.deltaMode===1?l:xe.deltaMode===2?nn.innerHeight:1)*g;Ge(xe.deltaX*Ye,xe.deltaY*Ye,0),h&&!G&&Ve.restart(!0)}},He=function(xe){if(!ye(xe)){var Ye=xe.clientX,pt=xe.clientY,gt=Ye-B.x,vn=pt-B.y;B.x=Ye,B.y=pt,P=!0,h&&Ve.restart(!0),(gt||vn)&&Re(gt,vn)}},ot=function(xe){B.event=xe,X(B)},bt=function(xe){B.event=xe,j(B)},Xe=function(xe){return ye(xe)||ss(xe,u)&&q(B)};Ve=B._dc=wt.delayedCall(f||.25,be).pause(),B.deltaX=B.deltaY=0,B._vx=Wu(0,50),B._vy=Wu(0,50),B.scrollX=S,B.scrollY=k,B.isDragging=B.isGesturing=B.isPressed=!1,Of(this),B.enable=function(Ee){return B.isEnabled||(Ot(_e?te:o,"scroll",Gl),a.indexOf("scroll")>=0&&Ot(_e?te:o,"scroll",ue,b,he),a.indexOf("wheel")>=0&&Ot(o,"wheel",fe,b,he),(a.indexOf("touch")>=0&&Uf||a.indexOf("pointer")>=0)&&(Ot(o,An[0],L,b,he),Ot(te,An[2],ce),Ot(te,An[3],ce),se&&Ot(o,"click",me,!0,!0),q&&Ot(o,"click",Xe),z&&Ot(te,"gesturestart",Y),re&&Ot(te,"gestureend",$),X&&Ot(o,ki+"enter",ot),j&&Ot(o,ki+"leave",bt),I&&Ot(o,ki+"move",He)),B.isEnabled=!0,Ee&&Ee.type&&L(Ee),De&&De(B)),B},B.disable=function(){B.isEnabled&&(br.filter(function(Ee){return Ee!==B&&_s(Ee.target)}).length||Nt(_e?te:o,"scroll",Gl),B.isPressed&&(B._vx.reset(),B._vy.reset(),Nt(G?o:te,An[1],Ze,!0)),Nt(_e?te:o,"scroll",ue,he),Nt(o,"wheel",fe,he),Nt(o,An[0],L,he),Nt(te,An[2],ce),Nt(te,An[3],ce),Nt(o,"click",me,!0),Nt(o,"click",Xe),Nt(te,"gesturestart",Y),Nt(te,"gestureend",$),Nt(o,ki+"enter",ot),Nt(o,ki+"leave",bt),Nt(o,ki+"move",He),B.isEnabled=B.isPressed=B.isDragging=!1,Ne&&Ne(B))},B.kill=B.revert=function(){B.disable();var Ee=br.indexOf(B);Ee>=0&&br.splice(Ee,1),jn===B&&(jn=0)},br.push(B),G&&_s(o)&&(jn=B),B.enable(_)},iS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();wn.version="3.12.5";wn.create=function(r){return new wn(r)};wn.register=Gf;wn.getAll=function(){return br.slice()};wn.getById=function(r){return br.filter(function(e){return e.vars.id===r})[0]};Bf()&&wt.registerPlugin(wn);const oS={class:"relative flex flex-col overflow-hidden w-full h-screen isolate pb-[20px] bg-white"},lS={class:"absolute pointer-events-none font-vcr top-1/2 text-[1.3em] text-stroke left-0 px-[15px] translate-y-1/2 w-full flex justify-between z-[9999]"},cS={class:"absolute top-1/4 font-vcr -translate-y-1/4 left-0 text-[1.3em] w-full text-center text-stroke"},uS={class:"w-full h-full",filter:"url(#balloonText)"},hS={class:"flex w-full h-full px-[10vw]"},fS={class:"m-auto font-mayego min-[768px]:hidden w-full text-[#77e777] text-center leading-[90%] scale-y-[2] select-none whitespace-pre-line",filter:"url(#balloonText)",style:{"font-size":"clamp(2em, 11vw, 8em)"}},dS={class:"absolute top-0 left-0 w-full h-full"},pS={class:"relative w-full h-full px-[5vw]"},mS=["src"],_S=["src","alt"],MS=Jf({__name:"index",async setup(r){var T;let e,t;const{data:n}=([e,t]=Qf(async()=>Kf("project",async()=>{const{data:A}=await jf("https://alexlenart.com/projects.json",{mode:"no-cors"},"$pqtWcjQkdb");return A})),e=await e,t(),e),i=Bn((T=n.value)==null?void 0:T.value);ji.registerPlugin(Aa,wn);let s;const a=Bn();let o,l;const c=new Vx;let u=!1,h=!1;const f=Bn([]),m=Bn(0),g=Bn(0),_=Bn(),d=Bn(),p=Bn(),y=Bn(0),x=()=>i.value[g.value].title.toLocaleLowerCase().replace(/ /g,"-"),E=()=>{s&&(s==null||s.kill()),window.innerWidth>768&&(s=ji.context(()=>{d.value.innerHTML="",new Aa(p.value,{type:"lines"}).lines.forEach((w,R)=>{const v=document.createElementNS("http://www.w3.org/2000/svg","tspan"),M=R==0?0:Math.max(Math.min(window.innerWidth*.09,100),40);v.setAttribute("x","50%"),v.setAttribute("dy",M+"px"),v.textContent=w.textContent,d.value.appendChild(v)})}))},C=A=>{!u&&h&&(u=!0,g.value=(g.value+A+i.value.length)%i.value.length,m.value=m.value+A,o.toggleProjetcs(g.value,A,f.value),ji.to(y,{onStart:()=>{E(),o.svgToUrl(_.value)},value:2*Math.PI/8*m.value,duration:1.2,ease:"power3.inOut",onComplete:()=>{u=!1},onUpdate:()=>{o.rotateGroup(y.value)}}))};return $f(async()=>{o=new tS(a.value);const A=(R,v)=>{o.projects[v]={element:R,isVideo:Tc(i.value[v]),texture:R instanceof HTMLImageElement?c.load(R.src):new Uo(R)}},w=(R,v)=>new Promise((M,O)=>{R instanceof HTMLImageElement?R.complete?(A(R,v),M(c.load(R.src))):(R.onload=()=>{A(R,v),M(c.load(R.src))},R.onerror=N=>O(N)):R instanceof HTMLVideoElement&&(R.readyState>=3?(A(R,v),M(new Uo(R))):(R.onloadeddata=()=>{A(R,v),M(new Uo(R))},R.onerror=()=>O("Error loading video")))});Promise.all(f.value.map((R,v)=>w(R.querySelector(".asset"),v).then(M=>console.log(M)))).then(()=>{h=!0,o.svgToUrl(_.value),o.placeImages(),o.renderRenderer(),l=wn.create({target:window,type:"touch,pointer",tolerance:10,onLeft:()=>C(-1),onRight:()=>C(1)}),o.toggleProjetcs(0,1,f.value),ed(td("use-screen"),R=>{o.resizeScene(window.innerWidth,window.innerHeight),E(),o.svgToUrl(_.value)},{immediate:!0})})}),nd(()=>{l.kill()}),(A,w)=>{var M;const R=id("svg:style"),v=Zf;return wi(),Ci("div",oS,[Sn("canvas",{ref_key:"mainCanvas",ref:a,class:"absolute top-0 left-0 w-full h-full overflow-hidden blur-[1px] z-[-1] pointer-events-none"},null,512),Sn("div",lS,[Sn("button",{class:"pointer-events-auto font-light uppercase select-none",onClick:w[0]||(w[0]=O=>C(1))},"prev"),Sn("button",{class:"pointer-events-auto font-light uppercase select-none",onClick:w[1]||(w[1]=O=>C(-1))},"next")]),Sn("p",cS,Is((M=Mn(i)[Mn(g)])==null?void 0:M.year),1),(wi(),Ci("svg",{ref_key:"svgTitle",ref:_,class:"absolute pointer-events-none bottom-0 left-0 w-full h-full z-[9998]",xmlns:"http://www.w3.org/2000/svg",style:{"font-family":"'mayego'","white-space":"normal"}},[w[3]||(w[3]=rd('<defs><filter id="balloonText"><feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"></feGaussianBlur><feSpecularLighting in="blur" surfaceScale="10" specularConstant="1" specularExponent="50" result="highlight" lighting-color="#ffffff   "><fePointLight x="10000" y="-10000" z="18000" result="abe558cf-872f-4f11-8282-b21e1f1b92d9"></fePointLight></feSpecularLighting><feComposite in="highlight" in2="SourceAlpha" operator="in" result="highlightApplied"></feComposite><feComposite in="SourceGraphic" in2="highlightApplied" operator="arithmetic" k2="1" k3="1" result="highlightText"></feComposite><feMerge result="d9fa500e-41a0-44ec-989c-43caddee35f5"><feMergeNode in="highlightText"></feMergeNode></feMerge></filter></defs>',1)),yc(R,null,{default:Dc(()=>w[2]||(w[2]=[Ac(" @font-face { font-family: 'mayego'; font-style: normal; font-weight: 400; src: url(data:application/octet-stream;base64,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); font-display: swap; vertical-align: baseline; } .font-mayego { fill: limegreen; font-family: 'mayego'; } ")])),_:1}),Sn("text",{ref_key:"svgTextElement",ref:d,x:"50%",y:"54%","text-anchor":"middle",class:"font-mayego hidden text-center scale-y-[2] select-none whitespace-pre-line",filter:"url(#balloonText)",style:{"font-size":"clamp(3em, 10vw, 7em)"}},Is(Mn(i)[Mn(g)].title),513),(wi(),Ci("foreignObject",uS,[Sn("div",hS,[Sn("p",fS,Is(Mn(i)[Mn(g)].title),1)])]))],512)),Sn("h1",{ref_key:"headingElement",ref:p,id:"heading",class:sd(["absolute text-[#77e777] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-mayego w-full max-w-[1000px] whitespace-pre-line text-center leading-[90%] scale-y-[2] tracking-[-2px] select-none",{invisible:!("isSafari"in A?A.isSafari:Mn(ld))()}]),style:{"font-size":"clamp(2em, 10vw, 7em)"}},Is(Mn(i)[Mn(g)].title),3),yc(v,{to:"/"+x(),class:"absolute bottom-1/4 font-vcr -translate-y-1/4 left-0 z-[9999] text-[1.3em] w-full text-center text-stroke"},{default:Dc(()=>w[4]||(w[4]=[Ac("Explore")])),_:1},8,["to"]),Sn("div",dS,[Sn("ul",pS,[(wi(!0),Ci(ad,null,od(Mn(i),(O,N)=>(wi(),Ci("li",{ref_for:!0,ref_key:"projectRef",ref:f,key:N,class:"absolute top-0 left-0 flex"},[("isVideo"in A?A.isVideo:Mn(Tc))(O)?(wi(),Ci("video",{key:0,src:O==null?void 0:O.image_src,autoplay:"",muted:"",loop:"",playsinline:"",class:"object-contain invisible asset"},null,8,mS)):(wi(),Ci("img",{key:1,src:O==null?void 0:O.image_src,alt:O==null?void 0:O.image_description,class:"object-contain invisible asset"},null,8,_S))]))),128))])])])}}});export{MS as default};
