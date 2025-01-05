import{y as L,z as x,r as O,A as N,B as T,C as j,l as V,k as $,D as R,E as q,h as A,G as I,H as J,I as W,J as G,K as Q,L as v}from"./BbfTi5ix.js";const k=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function X(s,a){a?a={...k,...a}:a=k;const r=H(a);return r.dispatch(s),r.toString()}const Y=Object.freeze(["prototype","__proto__","constructor"]);function H(s){let a="",r=new Map;const e=t=>{a+=t};return{toString(){return a},getContext(){return r},dispatch(t){return s.replacer&&(t=s.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let i="";const d=n.length;d<10?i="unknown:["+n+"]":i=n.slice(8,d-1),i=i.toLowerCase();let l=null;if((l=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):s.ignoreUnknown||this.unkown(t,i);else{let f=Object.keys(t);s.unorderedObjects&&(f=f.sort());let y=[];s.respectType!==!1&&!U(t)&&(y=Y),s.excludeKeys&&(f=f.filter(c=>!s.excludeKeys(c)),y=y.filter(c=>!s.excludeKeys(c))),e("object:"+(f.length+y.length)+":");const o=c=>{this.dispatch(c),e(":"),s.excludeValues||this.dispatch(t[c]),e(",")};for(const c of f)o(c);for(const c of y)o(c)}},array(t,n){if(n=n===void 0?s.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const l of t)this.dispatch(l);return}const i=new Map,d=t.map(l=>{const f=H(s);f.dispatch(l);for(const[y,o]of f.getContext())i.set(y,o);return f.toString()});return r=i,d.sort(),this.array(d,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),U(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,s.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,s.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const K="[native code] }",Z=K.length;function U(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-Z)===K}var tt=Object.defineProperty,et=(s,a,r)=>a in s?tt(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,P=(s,a,r)=>(et(s,typeof a!="symbol"?a+"":a,r),r);class _{constructor(a,r){P(this,"words"),P(this,"sigBytes"),a=this.words=a||[],this.sigBytes=r===void 0?a.length*4:r}toString(a){return(a||rt).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let r=0;r<a.sigBytes;r++){const e=a.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<a.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=a.words[r>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const rt={stringify(s){const a=[];for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},st={stringify(s){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,n=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,d=t<<16|n<<8|i;for(let l=0;l<4&&e*8+l*6<s.sigBytes*8;l++)r.push(a.charAt(d>>>6*(3-l)&63))}return r.join("")}},at={parse(s){const a=s.length,r=[];for(let e=0;e<a;e++)r[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new _(r,a)}},nt={parse(s){return at.parse(unescape(encodeURIComponent(s)))}};class it{constructor(){P(this,"_data",new _),P(this,"_nDataBytes",0),P(this,"_minBufferSize",0),P(this,"blockSize",512/32)}reset(){this._data=new _,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=nt.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,r){}_process(a){let r,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);r=this._data.words.splice(0,t),this._data.sigBytes-=n}return new _(r,n)}}class ot extends it{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}var ct=Object.defineProperty,lt=(s,a,r)=>a in s?ct(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,ut=(s,a,r)=>(lt(s,a+"",r),r);const E=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ft=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],D=[];class ht extends ot{constructor(){super(...arguments),ut(this,"_hash",new _([...E]))}reset(){super.reset(),this._hash=new _([...E])}_doProcessBlock(a,r){const e=this._hash.words;let t=e[0],n=e[1],i=e[2],d=e[3],l=e[4],f=e[5],y=e[6],o=e[7];for(let c=0;c<64;c++){if(c<16)D[c]=a[r+c]|0;else{const u=D[c-15],w=(u<<25|u>>>7)^(u<<14|u>>>18)^u>>>3,g=D[c-2],z=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;D[c]=w+D[c-7]+z+D[c-16]}const b=l&f^~l&y,B=t&n^t&i^n&i,S=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),h=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),m=o+h+b+ft[c]+D[c],p=S+B;o=y,y=f,f=l,l=d+m|0,d=i,i=n,n=t,t=m+p|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+i|0,e[3]=e[3]+d|0,e[4]=e[4]+l|0,e[5]=e[5]+f|0,e[6]=e[6]+y|0,e[7]=e[7]+o|0}finalize(a){super.finalize(a);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function dt(s){return new ht().finalize(s).toString(st)}function yt(s,a={}){const r=typeof s=="string"?s:X(s,a);return dt(r).slice(0,10)}const pt=s=>s==="defer"||s===!1;function gt(...s){var S;const a=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(a);let[r,e,t={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=L(),i=e,d=()=>x.value,l=()=>n.isHydrating?n.payload.data[r]:n.static.data[r];t.server=t.server??!0,t.default=t.default??d,t.getCachedData=t.getCachedData??l,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??x.deep,t.dedupe=t.dedupe??"cancel";const f=t.getCachedData(r,n),y=f!=null;if(!n._asyncData[r]||!t.immediate){(S=n.payload._errors)[r]??(S[r]=x.errorValue);const h=t.deep?O:N;n._asyncData[r]={data:h(y?f:t.default()),pending:O(!y),error:T(n.payload._errors,r),status:O("idle"),_default:t.default}}const o={...n._asyncData[r]};delete o._default,o.refresh=o.execute=(h={})=>{if(n._asyncDataPromises[r]){if(pt(h.dedupe??t.dedupe))return n._asyncDataPromises[r];n._asyncDataPromises[r].cancelled=!0}if(h._initial||n.isHydrating&&h._initial!==!1){const p=h._initial?f:t.getCachedData(r,n);if(p!=null)return Promise.resolve(p)}o.pending.value=!0,o.status.value="pending";const m=new Promise((p,u)=>{try{p(i(n))}catch(w){u(w)}}).then(async p=>{if(m.cancelled)return n._asyncDataPromises[r];let u=p;t.transform&&(u=await t.transform(p)),t.pick&&(u=_t(u,t.pick)),n.payload.data[r]=u,o.data.value=u,o.error.value=x.errorValue,o.status.value="success"}).catch(p=>{if(m.cancelled)return n._asyncDataPromises[r];o.error.value=q(p),o.data.value=A(t.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[r])});return n._asyncDataPromises[r]=m,n._asyncDataPromises[r]},o.clear=()=>mt(n,r);const c=()=>o.refresh({_initial:!0}),b=t.server!==!1&&n.payload.serverRendered;{const h=I();if(h&&b&&t.immediate&&!h.sp&&(h.sp=[]),h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const u=h._nuxtOnBeforeMountCbs;j(()=>{u.forEach(w=>{w()}),u.splice(0,u.length)}),V(()=>u.splice(0,u.length))}b&&n.isHydrating&&(o.error.value||f!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):h&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(c):t.immediate&&c();const m=J();if(t.watch){const u=$(t.watch,()=>o.refresh());m&&R(u)}const p=n.hook("app:data:refresh",async u=>{(!u||u.includes(r))&&await o.refresh()});m&&R(p)}const B=Promise.resolve(n._asyncDataPromises[r]).then(()=>o);return Object.assign(B,o),B}function mt(s,a){a in s.payload.data&&(s.payload.data[a]=void 0),a in s.payload._errors&&(s.payload._errors[a]=x.errorValue),s._asyncData[a]&&(s._asyncData[a].data.value=void 0,s._asyncData[a].error.value=x.errorValue,s._asyncData[a].pending.value=!1,s._asyncData[a].status.value="idle"),a in s._asyncDataPromises&&(s._asyncDataPromises[a]&&(s._asyncDataPromises[a].cancelled=!0),s._asyncDataPromises[a]=void 0)}function _t(s,a){const r={};for(const e of a)r[e]=s[e];return r}function vt(s,a,r){const[e={},t]=typeof a=="string"?[{},a]:[a,r],n=W(()=>v(s)),i=e.key||yt([t,typeof n.value=="string"?n.value:"",...bt(e)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);const d=i===t?"$f"+i:i;if(!e.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:f,default:y,transform:o,pick:c,watch:b,immediate:B,getCachedData:S,deep:h,dedupe:m,...p}=e,u=G({...Q,...p,cache:typeof e.cache=="boolean"?void 0:e.cache}),w={server:l,lazy:f,default:y,transform:o,pick:c,immediate:B,getCachedData:S,deep:h,dedupe:m,watch:b===!1?[]:[u,n,...b||[]]};let g;return gt(d,()=>{var M;(M=g==null?void 0:g.abort)==null||M.call(g,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),g=typeof AbortController<"u"?new AbortController:{};const F=v(e.timeout);let C;return F&&(C=setTimeout(()=>g.abort(new DOMException("Request aborted due to timeout.","AbortError")),F),g.signal.onabort=()=>clearTimeout(C)),(e.$fetch||globalThis.$fetch)(n.value,{signal:g.signal,...u}).finally(()=>{clearTimeout(C)})},w)}function bt(s){var r;const a=[((r=v(s.method))==null?void 0:r.toUpperCase())||"GET",v(s.baseURL)];for(const e of[s.params||s.query]){const t=v(e);if(!t)continue;const n={};for(const[i,d]of Object.entries(t))n[v(i)]=v(d);a.push(n)}return a}export{vt as a,gt as u};
