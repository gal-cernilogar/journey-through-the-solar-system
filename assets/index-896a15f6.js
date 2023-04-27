var na=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var ke=(s,e,t)=>(na(s,e,"read from private field"),t?t.call(s):e.get(s)),$e=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},Je=(s,e,t,n)=>(na(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qs="151",cl=0,ia=1,ul=2,Co=1,hl=2,bi=3,xn=0,Pt=1,Ht=2,_n=0,ii=1,Ar=2,ra=3,sa=4,dl=5,ti=100,fl=101,pl=102,aa=103,oa=104,ml=200,gl=201,_l=202,vl=203,Lo=204,Ro=205,xl=206,Ml=207,Sl=208,yl=209,bl=210,wl=0,El=1,Tl=2,Fs=3,Al=4,Pl=5,Cl=6,Ll=7,Xs=0,Rl=1,Dl=2,hn=0,Il=1,Ul=2,Fl=3,Nl=4,zl=5,Do=300,li=301,ci=302,Ns=303,zs=304,Pr=306,Os=1e3,Zt=1001,Bs=1002,Et=1003,la=1004,Nr=1005,Vt=1006,Ol=1007,ui=1008,Nn=1009,Bl=1010,Gl=1011,Io=1012,Vl=1013,Ln=1014,Rn=1015,Ti=1016,Hl=1017,kl=1018,ri=1020,Wl=1021,kt=1023,ql=1024,Xl=1025,Fn=1026,hi=1027,jl=1028,Yl=1029,Zl=1030,$l=1031,Jl=1033,zr=33776,Or=33777,Br=33778,Gr=33779,ca=35840,ua=35841,ha=35842,da=35843,Kl=36196,fa=37492,pa=37496,ma=37808,ga=37809,_a=37810,va=37811,xa=37812,Ma=37813,Sa=37814,ya=37815,ba=37816,wa=37817,Ea=37818,Ta=37819,Aa=37820,Pa=37821,Vr=36492,Ql=36283,Ca=36284,La=36285,Ra=36286,zn=3e3,Ke=3001,ec=3200,tc=3201,Uo=0,nc=1,en="srgb",Ai="srgb-linear",Fo="display-p3",Hr=7680,ic=519,Da=35044,Ia="300 es",Gs=1035;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,Vs=180/Math.PI;function Ji(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function rc(s,e){return(s%e+e)%e}function Wr(s,e,t){return(1-t)*s+t*e}function Ua(s){return(s&s-1)===0&&s!==0}function sc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nr(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,h,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=h,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],h=n[6],c=n[1],d=n[4],p=n[7],m=n[2],g=n[5],v=n[8],f=i[0],u=i[3],l=i[6],_=i[1],w=i[4],y=i[7],T=i[2],C=i[5],D=i[8];return r[0]=o*f+a*_+h*T,r[3]=o*u+a*w+h*C,r[6]=o*l+a*y+h*D,r[1]=c*f+d*_+p*T,r[4]=c*u+d*w+p*C,r[7]=c*l+d*y+p*D,r[2]=m*f+g*_+v*T,r[5]=m*u+g*w+v*C,r[8]=m*l+g*y+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*h+i*r*c-i*o*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],d=e[8],p=d*o-a*c,m=a*h-d*r,g=c*r-o*h,v=t*p+n*m+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/v;return e[0]=p*f,e[1]=(i*c-d*n)*f,e[2]=(a*n-i*o)*f,e[3]=m*f,e[4]=(d*t-i*h)*f,e[5]=(i*r-a*t)*f,e[6]=g*f,e[7]=(n*h-c*t)*f,e[8]=(o*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*o+c*a)+o+e,-i*c,i*h,-i*(-c*o+h*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Ge;function No(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ac=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),oc=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function lc(s){return s.convertSRGBToLinear().applyMatrix3(oc)}function cc(s){return s.applyMatrix3(ac).convertLinearToSRGB()}const uc={[Ai]:s=>s,[en]:s=>s.convertSRGBToLinear(),[Fo]:lc},hc={[Ai]:s=>s,[en]:s=>s.convertLinearToSRGB(),[Fo]:cc},Ft={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Ai},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=uc[e],i=hc[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Bn;class zo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=Pi("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Oo{constructor(e=null){this.isSource=!0,this.uuid=Ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(jr(i[o].image)):r.push(jr(i[o]))}else r=jr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dc=0;class Lt extends pi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Zt,i=Zt,r=Vt,o=ui,a=kt,h=Nn,c=Lt.DEFAULT_ANISOTROPY,d=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=Ji(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Do)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Do;Lt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const h=e.elements,c=h[0],d=h[4],p=h[8],m=h[1],g=h[5],v=h[9],f=h[2],u=h[6],l=h[10];if(Math.abs(d-m)<.01&&Math.abs(p-f)<.01&&Math.abs(v-u)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+f)<.1&&Math.abs(v+u)<.1&&Math.abs(c+g+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(g+1)/2,T=(l+1)/2,C=(d+m)/4,D=(p+f)/4,F=(v+u)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=C/n,r=D/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=F/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=D/r,i=F/r),this.set(n,i,r,t),this}let _=Math.sqrt((u-v)*(u-v)+(p-f)*(p-f)+(m-d)*(m-d));return Math.abs(_)<.001&&(_=1),this.x=(u-v)/_,this.y=(p-f)/_,this.z=(m-d)/_,this.w=Math.acos((c+g+l-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class On extends pi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bo extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let h=n[i+0],c=n[i+1],d=n[i+2],p=n[i+3];const m=r[o+0],g=r[o+1],v=r[o+2],f=r[o+3];if(a===0){e[t+0]=h,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=m,e[t+1]=g,e[t+2]=v,e[t+3]=f;return}if(p!==f||h!==m||c!==g||d!==v){let u=1-a;const l=h*m+c*g+d*v+p*f,_=l>=0?1:-1,w=1-l*l;if(w>Number.EPSILON){const T=Math.sqrt(w),C=Math.atan2(T,l*_);u=Math.sin(u*C)/T,a=Math.sin(a*C)/T}const y=a*_;if(h=h*u+m*y,c=c*u+g*y,d=d*u+v*y,p=p*u+f*y,u===1-a){const T=1/Math.sqrt(h*h+c*c+d*d+p*p);h*=T,c*=T,d*=T,p*=T}}e[t]=h,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],h=n[i+1],c=n[i+2],d=n[i+3],p=r[o],m=r[o+1],g=r[o+2],v=r[o+3];return e[t]=a*v+d*p+h*g-c*m,e[t+1]=h*v+d*m+c*p-a*g,e[t+2]=c*v+d*g+a*m-h*p,e[t+3]=d*v-a*p-h*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,h=Math.sin,c=a(n/2),d=a(i/2),p=a(r/2),m=h(n/2),g=h(i/2),v=h(r/2);switch(o){case"XYZ":this._x=m*d*p+c*g*v,this._y=c*g*p-m*d*v,this._z=c*d*v+m*g*p,this._w=c*d*p-m*g*v;break;case"YXZ":this._x=m*d*p+c*g*v,this._y=c*g*p-m*d*v,this._z=c*d*v-m*g*p,this._w=c*d*p+m*g*v;break;case"ZXY":this._x=m*d*p-c*g*v,this._y=c*g*p+m*d*v,this._z=c*d*v+m*g*p,this._w=c*d*p-m*g*v;break;case"ZYX":this._x=m*d*p-c*g*v,this._y=c*g*p+m*d*v,this._z=c*d*v-m*g*p,this._w=c*d*p+m*g*v;break;case"YZX":this._x=m*d*p+c*g*v,this._y=c*g*p+m*d*v,this._z=c*d*v-m*g*p,this._w=c*d*p-m*g*v;break;case"XZY":this._x=m*d*p-c*g*v,this._y=c*g*p-m*d*v,this._z=c*d*v+m*g*p,this._w=c*d*p+m*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],h=t[9],c=t[2],d=t[6],p=t[10],m=n+a+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-h)*g,this._y=(r-c)*g,this._z=(o-i)*g}else if(n>a&&n>p){const g=2*Math.sqrt(1+n-a-p);this._w=(d-h)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(r+c)/g}else if(a>p){const g=2*Math.sqrt(1+a-n-p);this._w=(r-c)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(h+d)/g}else{const g=2*Math.sqrt(1+p-n-a);this._w=(o-i)/g,this._x=(r+c)/g,this._y=(h+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,h=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*h,this._y=i*d+o*h+r*a-n*c,this._z=r*d+o*c+n*h-i*a,this._w=o*d-n*a-i*h-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(h),d=Math.atan2(c,a),p=Math.sin((1-t)*d)/c,m=Math.sin(t*d)/c;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,h=e.w,c=h*t+o*i-a*n,d=h*n+a*t-r*i,p=h*i+r*n-o*t,m=-r*t-o*n-a*i;return this.x=c*h+m*-r+d*-a-p*-o,this.y=d*h+m*-o+p*-r-c*-a,this.z=p*h+m*-a+c*-o-d*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,h=t.z;return this.x=i*h-r*a,this.y=r*o-n*h,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new P,Fa=new Ki;class Qi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Gn.copy(e.boundingBox),Gn.applyMatrix4(e.matrixWorld),this.union(Gn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)an.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(an)}else i.boundingBox===null&&i.computeBoundingBox(),Gn.copy(i.boundingBox),Gn.applyMatrix4(e.matrixWorld),this.union(Gn)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),ir.subVectors(this.max,vi),Vn.subVectors(e.a,vi),Hn.subVectors(e.b,vi),kn.subVectors(e.c,vi),fn.subVectors(Hn,Vn),pn.subVectors(kn,Hn),wn.subVectors(Vn,kn);let t=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-wn.z,wn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,wn.z,0,-wn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-wn.y,wn.x,0];return!Zr(t,Vn,Hn,kn,ir)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,Vn,Hn,kn,ir))?!1:(rr.crossVectors(fn,pn),t=[rr.x,rr.y,rr.z],Zr(t,Vn,Hn,kn,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new P,new P,new P,new P,new P,new P,new P,new P],an=new P,Gn=new Qi,Vn=new P,Hn=new P,kn=new P,fn=new P,pn=new P,wn=new P,vi=new P,ir=new P,rr=new P,En=new P;function Zr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){En.fromArray(s,r);const a=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),h=e.dot(En),c=t.dot(En),d=n.dot(En);if(Math.max(-Math.max(h,c,d),Math.min(h,c,d))>a)return!1}return!0}const pc=new Qi,xi=new P,$r=new P;class Cr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add($r)),this.expandByPoint(xi.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new P,Jr=new P,sr=new P,mn=new P,Kr=new P,ar=new P,Qr=new P;class Go{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jr.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(Jr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sr),a=mn.dot(this.direction),h=-mn.dot(sr),c=mn.lengthSq(),d=Math.abs(1-o*o);let p,m,g,v;if(d>0)if(p=o*h-a,m=o*a-h,v=r*d,p>=0)if(m>=-v)if(m<=v){const f=1/d;p*=f,m*=f,g=p*(p+o*m+2*a)+m*(o*p+m+2*h)+c}else m=r,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*h)+c;else m=-r,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*h)+c;else m<=-v?(p=Math.max(0,-(-o*r+a)),m=p>0?-r:Math.min(Math.max(-r,-h),r),g=-p*p+m*(m+2*h)+c):m<=v?(p=0,m=Math.min(Math.max(-r,-h),r),g=m*(m+2*h)+c):(p=Math.max(0,-(o*r+a)),m=p>0?r:Math.min(Math.max(-r,-h),r),g=-p*p+m*(m+2*h)+c);else m=o>0?-r:r,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Jr).addScaledVector(sr,m),g}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,h;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,i=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,i=(e.min.x-m.x)*c),d>=0?(r=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),p>=0?(a=(e.min.z-m.z)*p,h=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,h=(e.min.z-m.z)*p),n>h||a>i)||((a>n||n!==n)&&(n=a),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){Kr.subVectors(t,e),ar.subVectors(n,e),Qr.crossVectors(Kr,ar);let o=this.direction.dot(Qr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mn.subVectors(this.origin,e);const h=a*this.direction.dot(ar.crossVectors(mn,ar));if(h<0)return null;const c=a*this.direction.dot(Kr.cross(mn));if(c<0||h+c>o)return null;const d=-a*mn.dot(Qr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,h,c,d,p,m,g,v,f,u){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=i,l[1]=r,l[5]=o,l[9]=a,l[13]=h,l[2]=c,l[6]=d,l[10]=p,l[14]=m,l[3]=g,l[7]=v,l[11]=f,l[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wn.setFromMatrixColumn(e,0).length(),r=1/Wn.setFromMatrixColumn(e,1).length(),o=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(i),c=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const m=o*d,g=o*p,v=a*d,f=a*p;t[0]=h*d,t[4]=-h*p,t[8]=c,t[1]=g+v*c,t[5]=m-f*c,t[9]=-a*h,t[2]=f-m*c,t[6]=v+g*c,t[10]=o*h}else if(e.order==="YXZ"){const m=h*d,g=h*p,v=c*d,f=c*p;t[0]=m+f*a,t[4]=v*a-g,t[8]=o*c,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=g*a-v,t[6]=f+m*a,t[10]=o*h}else if(e.order==="ZXY"){const m=h*d,g=h*p,v=c*d,f=c*p;t[0]=m-f*a,t[4]=-o*p,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*d,t[9]=f-m*a,t[2]=-o*c,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){const m=o*d,g=o*p,v=a*d,f=a*p;t[0]=h*d,t[4]=v*c-g,t[8]=m*c+f,t[1]=h*p,t[5]=f*c+m,t[9]=g*c-v,t[2]=-c,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){const m=o*h,g=o*c,v=a*h,f=a*c;t[0]=h*d,t[4]=f-m*p,t[8]=v*p+g,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=g*p+v,t[10]=m-f*p}else if(e.order==="XZY"){const m=o*h,g=o*c,v=a*h,f=a*c;t[0]=h*d,t[4]=-p,t[8]=c*d,t[1]=m*p+f,t[5]=o*d,t[9]=g*p-v,t[2]=v*p-g,t[6]=a*d,t[10]=f*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mc,e,gc)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),gn.crossVectors(n,Nt),gn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),gn.crossVectors(n,Nt)),gn.normalize(),or.crossVectors(Nt,gn),i[0]=gn.x,i[4]=or.x,i[8]=Nt.x,i[1]=gn.y,i[5]=or.y,i[9]=Nt.y,i[2]=gn.z,i[6]=or.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],h=n[8],c=n[12],d=n[1],p=n[5],m=n[9],g=n[13],v=n[2],f=n[6],u=n[10],l=n[14],_=n[3],w=n[7],y=n[11],T=n[15],C=i[0],D=i[4],F=i[8],S=i[12],E=i[1],j=i[5],q=i[9],I=i[13],U=i[2],k=i[6],Q=i[10],J=i[14],W=i[3],ee=i[7],$=i[11],be=i[15];return r[0]=o*C+a*E+h*U+c*W,r[4]=o*D+a*j+h*k+c*ee,r[8]=o*F+a*q+h*Q+c*$,r[12]=o*S+a*I+h*J+c*be,r[1]=d*C+p*E+m*U+g*W,r[5]=d*D+p*j+m*k+g*ee,r[9]=d*F+p*q+m*Q+g*$,r[13]=d*S+p*I+m*J+g*be,r[2]=v*C+f*E+u*U+l*W,r[6]=v*D+f*j+u*k+l*ee,r[10]=v*F+f*q+u*Q+l*$,r[14]=v*S+f*I+u*J+l*be,r[3]=_*C+w*E+y*U+T*W,r[7]=_*D+w*j+y*k+T*ee,r[11]=_*F+w*q+y*Q+T*$,r[15]=_*S+w*I+y*J+T*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],h=e[9],c=e[13],d=e[2],p=e[6],m=e[10],g=e[14],v=e[3],f=e[7],u=e[11],l=e[15];return v*(+r*h*p-i*c*p-r*a*m+n*c*m+i*a*g-n*h*g)+f*(+t*h*g-t*c*m+r*o*m-i*o*g+i*c*d-r*h*d)+u*(+t*c*p-t*a*g-r*o*p+n*o*g+r*a*d-n*c*d)+l*(-i*a*d-t*h*p+t*a*m+i*o*p-n*o*m+n*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],h=e[6],c=e[7],d=e[8],p=e[9],m=e[10],g=e[11],v=e[12],f=e[13],u=e[14],l=e[15],_=p*u*c-f*m*c+f*h*g-a*u*g-p*h*l+a*m*l,w=v*m*c-d*u*c-v*h*g+o*u*g+d*h*l-o*m*l,y=d*f*c-v*p*c+v*a*g-o*f*g-d*a*l+o*p*l,T=v*p*h-d*f*h-v*a*m+o*f*m+d*a*u-o*p*u,C=t*_+n*w+i*y+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=_*D,e[1]=(f*m*r-p*u*r-f*i*g+n*u*g+p*i*l-n*m*l)*D,e[2]=(a*u*r-f*h*r+f*i*c-n*u*c-a*i*l+n*h*l)*D,e[3]=(p*h*r-a*m*r-p*i*c+n*m*c+a*i*g-n*h*g)*D,e[4]=w*D,e[5]=(d*u*r-v*m*r+v*i*g-t*u*g-d*i*l+t*m*l)*D,e[6]=(v*h*r-o*u*r-v*i*c+t*u*c+o*i*l-t*h*l)*D,e[7]=(o*m*r-d*h*r+d*i*c-t*m*c-o*i*g+t*h*g)*D,e[8]=y*D,e[9]=(v*p*r-d*f*r-v*n*g+t*f*g+d*n*l-t*p*l)*D,e[10]=(o*f*r-v*a*r+v*n*c-t*f*c-o*n*l+t*a*l)*D,e[11]=(d*a*r-o*p*r-d*n*c+t*p*c+o*n*g-t*a*g)*D,e[12]=T*D,e[13]=(d*f*i-v*p*i+v*n*m-t*f*m-d*n*u+t*p*u)*D,e[14]=(v*a*i-o*f*i-v*n*h+t*f*h+o*n*u-t*a*u)*D,e[15]=(o*p*i-d*a*i+d*n*h-t*p*h-o*n*m+t*a*m)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,h=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*h,c*h+i*a,0,c*a+i*h,d*a+n,d*h-i*o,0,c*h-i*a,d*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,h=t._w,c=r+r,d=o+o,p=a+a,m=r*c,g=r*d,v=r*p,f=o*d,u=o*p,l=a*p,_=h*c,w=h*d,y=h*p,T=n.x,C=n.y,D=n.z;return i[0]=(1-(f+l))*T,i[1]=(g+y)*T,i[2]=(v-w)*T,i[3]=0,i[4]=(g-y)*C,i[5]=(1-(m+l))*C,i[6]=(u+_)*C,i[7]=0,i[8]=(v+w)*D,i[9]=(u-_)*D,i[10]=(1-(m+f))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Wn.set(i[0],i[1],i[2]).length();const o=Wn.set(i[4],i[5],i[6]).length(),a=Wn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const c=1/r,d=1/o,p=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=p,qt.elements[9]*=p,qt.elements[10]*=p,t.setFromRotationMatrix(qt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,h=2*r/(t-e),c=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),m=-(o+r)/(o-r),g=-2*o*r/(o-r);return a[0]=h,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=m,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,h=1/(t-e),c=1/(n-i),d=1/(o-r),p=(t+e)*h,m=(n+i)*c,g=(o+r)*d;return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-m,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wn=new P,qt=new at,mc=new P(0,0,0),gc=new P(1,1,1),gn=new P,or=new P,Nt=new P,Na=new at,za=new Ki;class Lr{constructor(e=0,t=0,n=0,i=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],h=i[1],c=i[5],d=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Na.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Na,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return za.setFromEuler(this),this.setFromQuaternion(za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _c=0;const Oa=new P,qn=new Ki,ln=new at,lr=new P,Mi=new P,vc=new P,xc=new Ki,Ba=new P(1,0,0),Ga=new P(0,1,0),Va=new P(0,0,1),Mc={type:"added"},Ha={type:"removed"};class ut extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new P,t=new Lr,n=new Ki,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(Ba,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Va,e)}translateOnAxis(e,t){return Oa.copy(e).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ba,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Mi,lr,this.up):ln.lookAt(lr,Mi,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),qn.setFromRotationMatrix(ln),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ha)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ha)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,vc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,xc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let c=0,d=h.length;c<d;c++){const p=h[c];r(e.shapes,p)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(r(e.materials,this.material[h]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];i.animations.push(r(e.animations,h))}}if(t){const a=o(e.geometries),h=o(e.materials),c=o(e.textures),d=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const h=[];for(const c in a){const d=a[c];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new P(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new P,cn=new P,es=new P,un=new P,Xn=new P,jn=new P,ka=new P,ts=new P,ns=new P,is=new P;let cr=!1;class Yt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),cn.subVectors(n,t),es.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(cn),h=Xt.dot(es),c=cn.dot(cn),d=cn.dot(es),p=o*c-a*a;if(p===0)return r.set(-2,-1,-1);const m=1/p,g=(c*h-a*d)*m,v=(o*d-a*h)*m;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,n,i,r,o,a,h){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),this.getInterpolation(e,t,n,i,r,o,a,h)}static getInterpolation(e,t,n,i,r,o,a,h){return this.getBarycoord(e,t,n,i,un),h.setScalar(0),h.addScaledVector(r,un.x),h.addScaledVector(o,un.y),h.addScaledVector(a,un.z),h}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),cn.subVectors(e,t),Xt.cross(cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Xt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Xn.subVectors(i,n),jn.subVectors(r,n),ts.subVectors(e,n);const h=Xn.dot(ts),c=jn.dot(ts);if(h<=0&&c<=0)return t.copy(n);ns.subVectors(e,i);const d=Xn.dot(ns),p=jn.dot(ns);if(d>=0&&p<=d)return t.copy(i);const m=h*p-d*c;if(m<=0&&h>=0&&d<=0)return o=h/(h-d),t.copy(n).addScaledVector(Xn,o);is.subVectors(e,r);const g=Xn.dot(is),v=jn.dot(is);if(v>=0&&g<=v)return t.copy(r);const f=g*c-h*v;if(f<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(jn,a);const u=d*v-g*p;if(u<=0&&p-d>=0&&g-v>=0)return ka.subVectors(r,i),a=(p-d)/(p-d+(g-v)),t.copy(i).addScaledVector(ka,a);const l=1/(u+f+m);return o=f*l,a=m*l,t.copy(n).addScaledVector(Xn,o).addScaledVector(jn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sc=0;class mi extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=ii,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lo,this.blendDst=Ro,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ho={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},ur={h:0,s:0,l:0};function rs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ft.workingColorSpace){if(e=rc(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rs(o,r,e+1/3),this.g=rs(o,r,e),this.b=rs(o,r,e-1/3)}return Ft.toWorkingColorSpace(this,i),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ft.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ft.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const h=parseFloat(r[1])/360,c=parseFloat(r[2])/100,d=parseFloat(r[3])/100;return n(r[4]),this.setHSL(h,c,d,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=Ho[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ft.fromWorkingColorSpace(St.copy(this),e),Tt(St.r*255,0,255)<<16^Tt(St.g*255,0,255)<<8^Tt(St.b*255,0,255)<<0}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(St.copy(this),t);const n=St.r,i=St.g,r=St.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let h,c;const d=(a+o)/2;if(a===o)h=0,c=0;else{const p=o-a;switch(c=d<=.5?p/(o+a):p/(2-o-a),o){case n:h=(i-r)/p+(i<r?6:0);break;case i:h=(r-n)/p+2;break;case r:h=(n-i)/p+4;break}h/=6}return e.h=h,e.s=c,e.l=d,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=en){Ft.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,i=St.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(ur);const n=Wr(jt.h,ur.h,t),i=Wr(jt.s,ur.s,t),r=Wr(jt.l,ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new je;je.NAMES=Ho;class js extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new P,hr=new We;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ko extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wo extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yc=0;const Gt=new at,ss=new ut,Yn=new P,zt=new Qi,Si=new Qi,gt=new P;class Jt extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(No(e)?Wo:ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return ss.lookAt(e),ss.updateMatrix(),this.applyMatrix4(ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(zt.min,Si.min),zt.expandByPoint(gt),gt.addVectors(zt.max,Si.max),zt.expandByPoint(gt)):(zt.expandByPoint(Si.min),zt.expandByPoint(Si.max))}zt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],h=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)gt.fromBufferAttribute(a,c),h&&(Yn.fromBufferAttribute(e,c),gt.add(Yn)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const h=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<a;E++)c[E]=new P,d[E]=new P;const p=new P,m=new P,g=new P,v=new We,f=new We,u=new We,l=new P,_=new P;function w(E,j,q){p.fromArray(i,E*3),m.fromArray(i,j*3),g.fromArray(i,q*3),v.fromArray(o,E*2),f.fromArray(o,j*2),u.fromArray(o,q*2),m.sub(p),g.sub(p),f.sub(v),u.sub(v);const I=1/(f.x*u.y-u.x*f.y);isFinite(I)&&(l.copy(m).multiplyScalar(u.y).addScaledVector(g,-f.y).multiplyScalar(I),_.copy(g).multiplyScalar(f.x).addScaledVector(m,-u.x).multiplyScalar(I),c[E].add(l),c[j].add(l),c[q].add(l),d[E].add(_),d[j].add(_),d[q].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,j=y.length;E<j;++E){const q=y[E],I=q.start,U=q.count;for(let k=I,Q=I+U;k<Q;k+=3)w(n[k+0],n[k+1],n[k+2])}const T=new P,C=new P,D=new P,F=new P;function S(E){D.fromArray(r,E*3),F.copy(D);const j=c[E];T.copy(j),T.sub(D.multiplyScalar(D.dot(j))).normalize(),C.crossVectors(F,j);const I=C.dot(d[E])<0?-1:1;h[E*4]=T.x,h[E*4+1]=T.y,h[E*4+2]=T.z,h[E*4+3]=I}for(let E=0,j=y.length;E<j;++E){const q=y[E],I=q.start,U=q.count;for(let k=I,Q=I+U;k<Q;k+=3)S(n[k+0]),S(n[k+1]),S(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new P,r=new P,o=new P,a=new P,h=new P,c=new P,d=new P,p=new P;if(e)for(let m=0,g=e.count;m<g;m+=3){const v=e.getX(m+0),f=e.getX(m+1),u=e.getX(m+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,f),o.fromBufferAttribute(t,u),d.subVectors(o,r),p.subVectors(i,r),d.cross(p),a.fromBufferAttribute(n,v),h.fromBufferAttribute(n,f),c.fromBufferAttribute(n,u),a.add(d),h.add(d),c.add(d),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(f,h.x,h.y,h.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,r),p.subVectors(i,r),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,h){const c=a.array,d=a.itemSize,p=a.normalized,m=new c.constructor(h.length*d);let g=0,v=0;for(let f=0,u=h.length;f<u;f++){a.isInterleavedBufferAttribute?g=h[f]*a.data.stride+a.offset:g=h[f]*d;for(let l=0;l<d;l++)m[v++]=c[g++]}return new nn(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,n=this.index.array,i=this.attributes;for(const a in i){const h=i[a],c=e(h,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const h=[],c=r[a];for(let d=0,p=c.length;d<p;d++){const m=c[d],g=e(m,n);h.push(g)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const c=n[h];e.data.attributes[h]=c.toJSON(e.data)}const i={};let r=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],d=[];for(let p=0,m=c.length;p<m;p++){const g=c[p];d.push(g.toJSON(e.data))}d.length>0&&(i[h]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let m=0,g=p.length;m<g;m++)d.push(p[m].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new at,Qt=new Go,dr=new Cr,qa=new P,Zn=new P,$n=new P,Jn=new P,as=new P,fr=new P,pr=new We,mr=new We,gr=new We,Xa=new P,ja=new P,Ya=new P,_r=new P,vr=new P;class At extends ut{constructor(e=new Jt,t=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){fr.set(0,0,0);for(let h=0,c=r.length;h<c;h++){const d=a[h],p=r[h];d!==0&&(as.fromBufferAttribute(p,e),o?fr.addScaledVector(as,d):fr.addScaledVector(as.sub(t),d))}t.add(fr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),Qt.copy(e.ray).recast(e.near),dr.containsPoint(Qt.origin)===!1&&(Qt.intersectSphere(dr,qa)===null||Qt.origin.distanceToSquared(qa)>(e.far-e.near)**2))||(Wa.copy(r).invert(),Qt.copy(e.ray).applyMatrix4(Wa),n.boundingBox!==null&&Qt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,h=n.attributes.position,c=n.attributes.uv,d=n.attributes.uv2,p=n.attributes.normal,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let v=0,f=m.length;v<f;v++){const u=m[v],l=i[u.materialIndex],_=Math.max(u.start,g.start),w=Math.min(a.count,Math.min(u.start+u.count,g.start+g.count));for(let y=_,T=w;y<T;y+=3){const C=a.getX(y),D=a.getX(y+1),F=a.getX(y+2);o=xr(this,l,e,Qt,c,d,p,C,D,F),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=u.materialIndex,t.push(o))}}else{const v=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let u=v,l=f;u<l;u+=3){const _=a.getX(u),w=a.getX(u+1),y=a.getX(u+2);o=xr(this,i,e,Qt,c,d,p,_,w,y),o&&(o.faceIndex=Math.floor(u/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(i))for(let v=0,f=m.length;v<f;v++){const u=m[v],l=i[u.materialIndex],_=Math.max(u.start,g.start),w=Math.min(h.count,Math.min(u.start+u.count,g.start+g.count));for(let y=_,T=w;y<T;y+=3){const C=y,D=y+1,F=y+2;o=xr(this,l,e,Qt,c,d,p,C,D,F),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=u.materialIndex,t.push(o))}}else{const v=Math.max(0,g.start),f=Math.min(h.count,g.start+g.count);for(let u=v,l=f;u<l;u+=3){const _=u,w=u+1,y=u+2;o=xr(this,i,e,Qt,c,d,p,_,w,y),o&&(o.faceIndex=Math.floor(u/3),t.push(o))}}}}function bc(s,e,t,n,i,r,o,a){let h;if(e.side===Pt?h=n.intersectTriangle(o,r,i,!0,a):h=n.intersectTriangle(i,r,o,e.side===xn,a),h===null)return null;vr.copy(a),vr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:s}}function xr(s,e,t,n,i,r,o,a,h,c){s.getVertexPosition(a,Zn),s.getVertexPosition(h,$n),s.getVertexPosition(c,Jn);const d=bc(s,e,t,n,Zn,$n,Jn,_r);if(d){i&&(pr.fromBufferAttribute(i,a),mr.fromBufferAttribute(i,h),gr.fromBufferAttribute(i,c),d.uv=Yt.getInterpolation(_r,Zn,$n,Jn,pr,mr,gr,new We)),r&&(pr.fromBufferAttribute(r,a),mr.fromBufferAttribute(r,h),gr.fromBufferAttribute(r,c),d.uv2=Yt.getInterpolation(_r,Zn,$n,Jn,pr,mr,gr,new We)),o&&(Xa.fromBufferAttribute(o,a),ja.fromBufferAttribute(o,h),Ya.fromBufferAttribute(o,c),d.normal=Yt.getInterpolation(_r,Zn,$n,Jn,Xa,ja,Ya,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:h,c,normal:new P,materialIndex:0};Yt.getNormal(Zn,$n,Jn,p.normal),d.face=p}return d}class er extends Jt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const h=[],c=[],d=[],p=[];let m=0,g=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(p,2));function v(f,u,l,_,w,y,T,C,D,F,S){const E=y/D,j=T/F,q=y/2,I=T/2,U=C/2,k=D+1,Q=F+1;let J=0,W=0;const ee=new P;for(let $=0;$<Q;$++){const be=$*j-I;for(let te=0;te<k;te++){const G=te*E-q;ee[f]=G*_,ee[u]=be*w,ee[l]=U,c.push(ee.x,ee.y,ee.z),ee[f]=0,ee[u]=0,ee[l]=C>0?1:-1,d.push(ee.x,ee.y,ee.z),p.push(te/D),p.push(1-$/F),J+=1}}for(let $=0;$<F;$++)for(let be=0;be<D;be++){const te=m+be+k*$,G=m+be+k*($+1),X=m+(be+1)+k*($+1),ae=m+(be+1)+k*$;h.push(te,G,ae),h.push(G,X,ae),W+=6}a.addGroup(g,W,S),g+=W,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(s){const e={};for(let t=0;t<s.length;t++){const n=di(s[t]);for(const i in n)e[i]=n[i]}return e}function wc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qo(s){return s.getRenderTarget()===null&&s.outputEncoding===Ke?en:Ai}const Ec={clone:di,merge:wt};var Tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ac=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tc,this.fragmentShader=Ac,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=wc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xo extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends Xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/h,t-=o.offsetY*n/c,i*=o.width/h,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,Qn=1;class jo extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ot(Kn,Qn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ot(Kn,Qn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Ot(Kn,Qn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ot(Kn,Qn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const h=new Ot(Kn,Qn,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const c=new Ot(Kn,Qn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,h,c]=this.children,d=e.getRenderTarget(),p=e.toneMapping,m=e.xr.enabled;e.toneMapping=hn,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.toneMapping=p,e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Yo extends Lt{constructor(e,t,n,i,r,o,a,h,c,d){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,i,r,o,a,h,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new er(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:_n});r.uniforms.tEquirect.value=t;const o=new At(i,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Vt),new jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const os=new P,Pc=new P,Cc=new Ge;class An{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=os.subVectors(n,t).cross(Pc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(os),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cc.getNormalMatrix(e),i=this.coplanarPoint(os).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new Cr,Mr=new P;class Ys{constructor(e=new An,t=new An,n=new An,i=new An,r=new An,o=new An){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],h=n[4],c=n[5],d=n[6],p=n[7],m=n[8],g=n[9],v=n[10],f=n[11],u=n[12],l=n[13],_=n[14],w=n[15];return t[0].setComponents(a-i,p-h,f-m,w-u).normalize(),t[1].setComponents(a+i,p+h,f+m,w+u).normalize(),t[2].setComponents(a+r,p+c,f+g,w+l).normalize(),t[3].setComponents(a-r,p-c,f-g,w-l).normalize(),t[4].setComponents(a-o,p-d,f-v,w-_).normalize(),t[5].setComponents(a+o,p+d,f+v,w+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mr.x=i.normal.x>0?e.max.x:e.min.x,Mr.y=i.normal.y>0?e.max.y:e.min.y,Mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $o(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lc(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const p=c.array,m=c.usage,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,p,m),c.onUploadCallback();let v;if(p instanceof Float32Array)v=5126;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(p instanceof Int16Array)v=5122;else if(p instanceof Uint32Array)v=5125;else if(p instanceof Int32Array)v=5124;else if(p instanceof Int8Array)v=5120;else if(p instanceof Uint8Array)v=5121;else if(p instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function r(c,d,p){const m=d.array,g=d.updateRange;s.bindBuffer(p,c),g.count===-1?s.bufferSubData(p,0,m):(t?s.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):s.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(s.deleteBuffer(d.buffer),n.delete(c))}function h(c,d){if(c.isGLBufferAttribute){const m=n.get(c);(!m||m.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);p===void 0?n.set(c,i(c,d)):p.version<c.version&&(r(p.buffer,c,d),p.version=c.version)}return{get:o,remove:a,update:h}}class Zs extends Jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),h=Math.floor(i),c=a+1,d=h+1,p=e/a,m=t/h,g=[],v=[],f=[],u=[];for(let l=0;l<d;l++){const _=l*m-o;for(let w=0;w<c;w++){const y=w*p-r;v.push(y,-_,0),f.push(0,0,1),u.push(w/a),u.push(1-l/h)}}for(let l=0;l<h;l++)for(let _=0;_<a;_++){const w=_+c*l,y=_+c*(l+1),T=_+1+c*(l+1),C=_+1+c*l;g.push(w,y,C),g.push(y,T,C)}this.setIndex(g),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ic=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zc="vec3 transformed = vec3( position );",Oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gc=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Vc=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$c=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Jc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Kc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,su=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
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
}`,mu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Mu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,Tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Au=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zu=`#if defined( USE_POINTS_UV )
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
#endif`,Ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,$u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,th=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,nh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ih=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ah=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ch=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ph=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mh=`#ifdef USE_SKINNING
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
#endif`,gh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_h=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mh=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Sh=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yh=`#ifdef USE_UV
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
#endif`,bh=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,wh=`#ifdef USE_UV
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
#endif`,Eh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Th=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ah=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ch=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ih=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Fh=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Oh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gh=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Vh=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,kh=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,qh=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jh=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Zh=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$h=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Jh=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Qh=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`uniform float size;
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
}`,td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,id=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,rd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:Rc,alphamap_pars_fragment:Dc,alphatest_fragment:Ic,alphatest_pars_fragment:Uc,aomap_fragment:Fc,aomap_pars_fragment:Nc,begin_vertex:zc,beginnormal_vertex:Oc,bsdfs:Bc,iridescence_fragment:Gc,bumpmap_pars_fragment:Vc,clipping_planes_fragment:Hc,clipping_planes_pars_fragment:kc,clipping_planes_pars_vertex:Wc,clipping_planes_vertex:qc,color_fragment:Xc,color_pars_fragment:jc,color_pars_vertex:Yc,color_vertex:Zc,common:$c,cube_uv_reflection_fragment:Jc,defaultnormal_vertex:Kc,displacementmap_pars_vertex:Qc,displacementmap_vertex:eu,emissivemap_fragment:tu,emissivemap_pars_fragment:nu,encodings_fragment:iu,encodings_pars_fragment:ru,envmap_fragment:su,envmap_common_pars_fragment:au,envmap_pars_fragment:ou,envmap_pars_vertex:lu,envmap_physical_pars_fragment:Mu,envmap_vertex:cu,fog_vertex:uu,fog_pars_vertex:hu,fog_fragment:du,fog_pars_fragment:fu,gradientmap_pars_fragment:pu,lightmap_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:_u,lights_lambert_pars_fragment:vu,lights_pars_begin:xu,lights_toon_fragment:Su,lights_toon_pars_fragment:yu,lights_phong_fragment:bu,lights_phong_pars_fragment:wu,lights_physical_fragment:Eu,lights_physical_pars_fragment:Tu,lights_fragment_begin:Au,lights_fragment_maps:Pu,lights_fragment_end:Cu,logdepthbuf_fragment:Lu,logdepthbuf_pars_fragment:Ru,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Iu,map_fragment:Uu,map_pars_fragment:Fu,map_particle_fragment:Nu,map_particle_pars_fragment:zu,metalnessmap_fragment:Ou,metalnessmap_pars_fragment:Bu,morphcolor_vertex:Gu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Hu,morphtarget_vertex:ku,normal_fragment_begin:Wu,normal_fragment_maps:qu,normal_pars_fragment:Xu,normal_pars_vertex:ju,normal_vertex:Yu,normalmap_pars_fragment:Zu,clearcoat_normal_fragment_begin:$u,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:Ku,iridescence_pars_fragment:Qu,output_fragment:eh,packing:th,premultiplied_alpha_fragment:nh,project_vertex:ih,dithering_fragment:rh,dithering_pars_fragment:sh,roughnessmap_fragment:ah,roughnessmap_pars_fragment:oh,shadowmap_pars_fragment:lh,shadowmap_pars_vertex:ch,shadowmap_vertex:uh,shadowmask_pars_fragment:hh,skinbase_vertex:dh,skinning_pars_vertex:fh,skinning_vertex:ph,skinnormal_vertex:mh,specularmap_fragment:gh,specularmap_pars_fragment:_h,tonemapping_fragment:vh,tonemapping_pars_fragment:xh,transmission_fragment:Mh,transmission_pars_fragment:Sh,uv_pars_fragment:yh,uv_pars_vertex:bh,uv_vertex:wh,worldpos_vertex:Eh,background_vert:Th,background_frag:Ah,backgroundCube_vert:Ph,backgroundCube_frag:Ch,cube_vert:Lh,cube_frag:Rh,depth_vert:Dh,depth_frag:Ih,distanceRGBA_vert:Uh,distanceRGBA_frag:Fh,equirect_vert:Nh,equirect_frag:zh,linedashed_vert:Oh,linedashed_frag:Bh,meshbasic_vert:Gh,meshbasic_frag:Vh,meshlambert_vert:Hh,meshlambert_frag:kh,meshmatcap_vert:Wh,meshmatcap_frag:qh,meshnormal_vert:Xh,meshnormal_frag:jh,meshphong_vert:Yh,meshphong_frag:Zh,meshphysical_vert:$h,meshphysical_frag:Jh,meshtoon_vert:Kh,meshtoon_frag:Qh,points_vert:ed,points_frag:td,shadow_vert:nd,shadow_frag:id,sprite_vert:rd,sprite_frag:sd},re={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}}},tn={basic:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new je(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new je(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:wt([re.points,re.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:wt([re.common,re.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:wt([re.sprite,re.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:wt([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:wt([re.lights,re.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};tn.physical={uniforms:wt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Sr={r:0,b:0,g:0};function ad(s,e,t,n,i,r,o){const a=new je(0);let h=r===!0?0:1,c,d,p=null,m=0,g=null;function v(u,l){let _=!1,w=l.isScene===!0?l.background:null;w&&w.isTexture&&(w=(l.backgroundBlurriness>0?t:e).get(w));const y=s.xr,T=y.getSession&&y.getSession();T&&T.environmentBlendMode==="additive"&&(w=null),w===null?f(a,h):w&&w.isColor&&(f(w,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Pr)?(d===void 0&&(d=new At(new er(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:di(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=l.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,d.material.toneMapped=w.encoding!==Ke,(p!==w||m!==w.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,p=w,m=w.version,g=s.toneMapping),d.layers.enableAll(),u.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new At(new Zs(2,2),new rn({name:"BackgroundMaterial",uniforms:di(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,c.material.toneMapped=w.encoding!==Ke,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(p!==w||m!==w.version||g!==s.toneMapping)&&(c.material.needsUpdate=!0,p=w,m=w.version,g=s.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null))}function f(u,l){u.getRGB(Sr,qo(s)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,l,o)}return{getClearColor:function(){return a},setClearColor:function(u,l=1){a.set(u),h=l,f(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(u){h=u,f(a,h)},render:v}}function od(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},h=u(null);let c=h,d=!1;function p(U,k,Q,J,W){let ee=!1;if(o){const $=f(J,Q,k);c!==$&&(c=$,g(c.object)),ee=l(U,J,Q,W),ee&&_(U,J,Q,W)}else{const $=k.wireframe===!0;(c.geometry!==J.id||c.program!==Q.id||c.wireframe!==$)&&(c.geometry=J.id,c.program=Q.id,c.wireframe=$,ee=!0)}W!==null&&t.update(W,34963),(ee||d)&&(d=!1,F(U,k,Q,J),W!==null&&s.bindBuffer(34963,t.get(W).buffer))}function m(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function g(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function f(U,k,Q){const J=Q.wireframe===!0;let W=a[U.id];W===void 0&&(W={},a[U.id]=W);let ee=W[k.id];ee===void 0&&(ee={},W[k.id]=ee);let $=ee[J];return $===void 0&&($=u(m()),ee[J]=$),$}function u(U){const k=[],Q=[],J=[];for(let W=0;W<i;W++)k[W]=0,Q[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:J,object:U,attributes:{},index:null}}function l(U,k,Q,J){const W=c.attributes,ee=k.attributes;let $=0;const be=Q.getAttributes();for(const te in be)if(be[te].location>=0){const X=W[te];let ae=ee[te];if(ae===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),X===void 0||X.attribute!==ae||ae&&X.data!==ae.data)return!0;$++}return c.attributesNum!==$||c.index!==J}function _(U,k,Q,J){const W={},ee=k.attributes;let $=0;const be=Q.getAttributes();for(const te in be)if(be[te].location>=0){let X=ee[te];X===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));const ae={};ae.attribute=X,X&&X.data&&(ae.data=X.data),W[te]=ae,$++}c.attributes=W,c.attributesNum=$,c.index=J}function w(){const U=c.newAttributes;for(let k=0,Q=U.length;k<Q;k++)U[k]=0}function y(U){T(U,0)}function T(U,k){const Q=c.newAttributes,J=c.enabledAttributes,W=c.attributeDivisors;Q[U]=1,J[U]===0&&(s.enableVertexAttribArray(U),J[U]=1),W[U]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,k),W[U]=k)}function C(){const U=c.newAttributes,k=c.enabledAttributes;for(let Q=0,J=k.length;Q<J;Q++)k[Q]!==U[Q]&&(s.disableVertexAttribArray(Q),k[Q]=0)}function D(U,k,Q,J,W,ee){n.isWebGL2===!0&&(Q===5124||Q===5125)?s.vertexAttribIPointer(U,k,Q,W,ee):s.vertexAttribPointer(U,k,Q,J,W,ee)}function F(U,k,Q,J){if(n.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const W=J.attributes,ee=Q.getAttributes(),$=k.defaultAttributeValues;for(const be in ee){const te=ee[be];if(te.location>=0){let G=W[be];if(G===void 0&&(be==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),be==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),G!==void 0){const X=G.normalized,ae=G.itemSize,ce=t.get(G);if(ce===void 0)continue;const N=ce.buffer,Te=ce.type,ye=ce.bytesPerElement;if(G.isInterleavedBufferAttribute){const se=G.data,xe=se.stride,qe=G.offset;if(se.isInstancedInterleavedBuffer){for(let me=0;me<te.locationSize;me++)T(te.location+me,se.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<te.locationSize;me++)y(te.location+me);s.bindBuffer(34962,N);for(let me=0;me<te.locationSize;me++)D(te.location+me,ae/te.locationSize,Te,X,xe*ye,(qe+ae/te.locationSize*me)*ye)}else{if(G.isInstancedBufferAttribute){for(let se=0;se<te.locationSize;se++)T(te.location+se,G.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let se=0;se<te.locationSize;se++)y(te.location+se);s.bindBuffer(34962,N);for(let se=0;se<te.locationSize;se++)D(te.location+se,ae/te.locationSize,Te,X,ae*ye,ae/te.locationSize*se*ye)}}else if($!==void 0){const X=$[be];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(te.location,X);break;case 3:s.vertexAttrib3fv(te.location,X);break;case 4:s.vertexAttrib4fv(te.location,X);break;default:s.vertexAttrib1fv(te.location,X)}}}}C()}function S(){q();for(const U in a){const k=a[U];for(const Q in k){const J=k[Q];for(const W in J)v(J[W].object),delete J[W];delete k[Q]}delete a[U]}}function E(U){if(a[U.id]===void 0)return;const k=a[U.id];for(const Q in k){const J=k[Q];for(const W in J)v(J[W].object),delete J[W];delete k[Q]}delete a[U.id]}function j(U){for(const k in a){const Q=a[k];if(Q[U.id]===void 0)continue;const J=Q[U.id];for(const W in J)v(J[W].object),delete J[W];delete Q[U.id]}}function q(){I(),d=!0,c!==h&&(c=h,g(c.object))}function I(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:q,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:j,initAttributes:w,enableAttribute:y,disableUnusedAttributes:C}}function ld(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,d){s.drawArrays(r,c,d),t.update(d,r,1)}function h(c,d,p){if(p===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,c,d,p),t.update(d,r,p)}this.setMode=o,this.render=a,this.renderInstances=h}function cd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const h=r(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=s.getParameter(34930),m=s.getParameter(35660),g=s.getParameter(3379),v=s.getParameter(34076),f=s.getParameter(34921),u=s.getParameter(36347),l=s.getParameter(36348),_=s.getParameter(36349),w=m>0,y=o||e.has("OES_texture_float"),T=w&&y,C=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:u,maxVaryings:l,maxFragmentUniforms:_,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:C}}function ud(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new An,a=new Ge,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,g){const v=p.clippingPlanes,f=p.clipIntersection,u=p.clipShadows,l=s.get(p);if(!i||v===null||v.length===0||r&&!u)r?d(null):c();else{const _=r?0:n,w=_*4;let y=l.clippingState||null;h.value=y,y=d(v,m,w,g);for(let T=0;T!==w;++T)y[T]=t[T];l.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,g,v){const f=p!==null?p.length:0;let u=null;if(f!==0){if(u=h.value,v!==!0||u===null){const l=g+f*4,_=m.matrixWorldInverse;a.getNormalMatrix(_),(u===null||u.length<l)&&(u=new Float32Array(l));for(let w=0,y=g;w!==f;++w,y+=4)o.copy(p[w]).applyMatrix4(_,a),o.normal.toArray(u,y),u[y+3]=o.constant}h.value=u,h.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,u}}function hd(s){let e=new WeakMap;function t(o,a){return a===Ns?o.mapping=li:a===zs&&(o.mapping=ci),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ns||a===zs)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const c=new Zo(h.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class dd extends Xo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,h=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Za=[.125,.215,.35,.446,.526,.582],Cn=20,ls=new dd,$a=new je;let cs=null;const Pn=(1+Math.sqrt(5))/2,ei=1/Pn,Ja=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Pn,ei),new P(0,Pn,-ei),new P(ei,0,Pn),new P(-ei,0,Pn),new P(Pn,ei,0),new P(-Pn,ei,0)];class Ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){cs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=to(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cs),e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Ti,format:kt,encoding:zn,depthBuffer:!1},i=Qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fd(r)),this._blurMaterial=pd(r,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor($a),d.toneMapping=hn,d.autoClear=!1;const g=new js({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),v=new At(new er,g);let f=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,f=!0):(g.color.copy($a),f=!0);for(let l=0;l<6;l++){const _=l%3;_===0?(a.up.set(0,h[l],0),a.lookAt(c[l],0,0)):_===1?(a.up.set(0,0,h[l]),a.lookAt(0,c[l],0)):(a.up.set(0,h[l],0),a.lookAt(0,0,c[l]));const w=this._cubeSize;yr(i,_*w,l>2?w:0,w,w),d.setRenderTarget(i),f&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===li||e.mapping===ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=to()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const h=this._cubeSize;yr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ja[(i-1)%Ja.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const h=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new At(this._lodPlanes[i],c),m=c.uniforms,g=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Cn-1),f=r/v,u=isFinite(r)?1+Math.floor(d*f):Cn;u>Cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Cn}`);const l=[];let _=0;for(let D=0;D<Cn;++D){const F=D/f,S=Math.exp(-F*F/2);l.push(S),D===0?_+=S:D<u&&(_+=2*S)}for(let D=0;D<l.length;D++)l[D]=l[D]/_;m.envMap.value=e.texture,m.samples.value=u,m.weights.value=l,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:w}=this;m.dTheta.value=v,m.mipInt.value=w-n;const y=this._sizeLods[i],T=3*y*(i>w-ni?i-w+ni:0),C=4*(this._cubeSize-y);yr(t,T,C,3*y,2*y),h.setRenderTarget(t),h.render(p,ls)}}function fd(s){const e=[],t=[],n=[];let i=s;const r=s-ni+1+Za.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let h=1/a;o>s-ni?h=Za[o-s+ni-1]:o===0&&(h=0),n.push(h);const c=1/(a-2),d=-c,p=1+c,m=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,v=6,f=3,u=2,l=1,_=new Float32Array(f*v*g),w=new Float32Array(u*v*g),y=new Float32Array(l*v*g);for(let C=0;C<g;C++){const D=C%3*2/3-1,F=C>2?0:-1,S=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];_.set(S,f*v*C),w.set(m,u*v*C);const E=[C,C,C,C,C,C];y.set(E,l*v*C)}const T=new Jt;T.setAttribute("position",new nn(_,f)),T.setAttribute("uv",new nn(w,u)),T.setAttribute("faceIndex",new nn(y,l)),e.push(T),i>ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qa(s,e,t){const n=new On(s,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function pd(s,e,t){const n=new Float32Array(Cn),i=new P(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$s(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function eo(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function to(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function $s(){return`

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
	`}function md(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const h=a.mapping,c=h===Ns||h===zs,d=h===li||h===ci;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Ka(s)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||d&&p&&i(p)){t===null&&(t=new Ka(s));const m=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",r),m.texture}else return null}}}return a}function i(a){let h=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&h++;return h===c}function r(a){const h=a.target;h.removeEventListener("dispose",r);const c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _d(s,e,t,n){const i={},r=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",o),delete i[m.id];const g=r.get(m);g&&(e.remove(g),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(p,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,t.memory.geometries++),m}function h(p){const m=p.attributes;for(const v in m)e.update(m[v],34962);const g=p.morphAttributes;for(const v in g){const f=g[v];for(let u=0,l=f.length;u<l;u++)e.update(f[u],34962)}}function c(p){const m=[],g=p.index,v=p.attributes.position;let f=0;if(g!==null){const _=g.array;f=g.version;for(let w=0,y=_.length;w<y;w+=3){const T=_[w+0],C=_[w+1],D=_[w+2];m.push(T,C,C,D,D,T)}}else{const _=v.array;f=v.version;for(let w=0,y=_.length/3-1;w<y;w+=3){const T=w+0,C=w+1,D=w+2;m.push(T,C,C,D,D,T)}}const u=new(No(m)?Wo:ko)(m,1);u.version=f;const l=r.get(p);l&&e.remove(l),r.set(p,u)}function d(p){const m=r.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:h,getWireframeAttribute:d}}function vd(s,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,h;function c(m){a=m.type,h=m.bytesPerElement}function d(m,g){s.drawElements(r,g,a,m*h),t.update(g,r,1)}function p(m,g,v){if(v===0)return;let f,u;if(i)f=s,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](r,g,a,m*h,v),t.update(g,r,v)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=p}function xd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Md(s,e){return s[0]-e[0]}function Sd(s,e){return Math.abs(e[1])-Math.abs(s[1])}function yd(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function h(c,d,p){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,f=v!==void 0?v.length:0;let u=r.get(d);if(u===void 0||u.count!==f){let k=function(){I.dispose(),r.delete(d),d.removeEventListener("dispose",k)};var g=k;u!==void 0&&u.texture.dispose();const w=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let S=0;w===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let E=d.attributes.position.count*S,j=1;E>e.maxTextureSize&&(j=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const q=new Float32Array(E*j*4*f),I=new Bo(q,E,j,f);I.type=Rn,I.needsUpdate=!0;const U=S*4;for(let Q=0;Q<f;Q++){const J=C[Q],W=D[Q],ee=F[Q],$=E*j*4*Q;for(let be=0;be<J.count;be++){const te=be*U;w===!0&&(o.fromBufferAttribute(J,be),q[$+te+0]=o.x,q[$+te+1]=o.y,q[$+te+2]=o.z,q[$+te+3]=0),y===!0&&(o.fromBufferAttribute(W,be),q[$+te+4]=o.x,q[$+te+5]=o.y,q[$+te+6]=o.z,q[$+te+7]=0),T===!0&&(o.fromBufferAttribute(ee,be),q[$+te+8]=o.x,q[$+te+9]=o.y,q[$+te+10]=o.z,q[$+te+11]=ee.itemSize===4?o.w:1)}}u={count:f,texture:I,size:new We(E,j)},r.set(d,u),d.addEventListener("dispose",k)}let l=0;for(let w=0;w<m.length;w++)l+=m[w];const _=d.morphTargetsRelative?1:1-l;p.getUniforms().setValue(s,"morphTargetBaseInfluence",_),p.getUniforms().setValue(s,"morphTargetInfluences",m),p.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}else{const v=m===void 0?0:m.length;let f=n[d.id];if(f===void 0||f.length!==v){f=[];for(let y=0;y<v;y++)f[y]=[y,0];n[d.id]=f}for(let y=0;y<v;y++){const T=f[y];T[0]=y,T[1]=m[y]}f.sort(Sd);for(let y=0;y<8;y++)y<v&&f[y][1]?(a[y][0]=f[y][0],a[y][1]=f[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Md);const u=d.morphAttributes.position,l=d.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const T=a[y],C=T[0],D=T[1];C!==Number.MAX_SAFE_INTEGER&&D?(u&&d.getAttribute("morphTarget"+y)!==u[C]&&d.setAttribute("morphTarget"+y,u[C]),l&&d.getAttribute("morphNormal"+y)!==l[C]&&d.setAttribute("morphNormal"+y,l[C]),i[y]=D,_+=D):(u&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),l&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const w=d.morphTargetsRelative?1:1-_;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:h}}function bd(s,e,t,n){let i=new WeakMap;function r(h){const c=n.render.frame,d=h.geometry,p=e.get(h,d);return i.get(p)!==c&&(e.update(p),i.set(p,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),p}function o(){i=new WeakMap}function a(h){const c=h.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Jo=new Lt,Ko=new Bo,Qo=new fc,el=new Yo,no=[],io=[],ro=new Float32Array(16),so=new Float32Array(9),ao=new Float32Array(4);function gi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=no[i];if(r===void 0&&(r=new Float32Array(i),no[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Rr(s,e){let t=io[e];t===void 0&&(t=new Int32Array(e),io[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function wd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ed(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2fv(this.addr,e),dt(t,e)}}function Td(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;s.uniform3fv(this.addr,e),dt(t,e)}}function Ad(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4fv(this.addr,e),dt(t,e)}}function Pd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;ao.set(n),s.uniformMatrix2fv(this.addr,!1,ao),dt(t,n)}}function Cd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;so.set(n),s.uniformMatrix3fv(this.addr,!1,so),dt(t,n)}}function Ld(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;ro.set(n),s.uniformMatrix4fv(this.addr,!1,ro),dt(t,n)}}function Rd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Dd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2iv(this.addr,e),dt(t,e)}}function Id(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3iv(this.addr,e),dt(t,e)}}function Ud(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4iv(this.addr,e),dt(t,e)}}function Fd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2uiv(this.addr,e),dt(t,e)}}function zd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3uiv(this.addr,e),dt(t,e)}}function Od(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4uiv(this.addr,e),dt(t,e)}}function Bd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Jo,i)}function Gd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qo,i)}function Vd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||el,i)}function Hd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ko,i)}function kd(s){switch(s){case 5126:return wd;case 35664:return Ed;case 35665:return Td;case 35666:return Ad;case 35674:return Pd;case 35675:return Cd;case 35676:return Ld;case 5124:case 35670:return Rd;case 35667:case 35671:return Dd;case 35668:case 35672:return Id;case 35669:case 35673:return Ud;case 5125:return Fd;case 36294:return Nd;case 36295:return zd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return Gd;case 35680:case 36300:case 36308:case 36293:return Vd;case 36289:case 36303:case 36311:case 36292:return Hd}}function Wd(s,e){s.uniform1fv(this.addr,e)}function qd(s,e){const t=gi(e,this.size,2);s.uniform2fv(this.addr,t)}function Xd(s,e){const t=gi(e,this.size,3);s.uniform3fv(this.addr,t)}function jd(s,e){const t=gi(e,this.size,4);s.uniform4fv(this.addr,t)}function Yd(s,e){const t=gi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zd(s,e){const t=gi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $d(s,e){const t=gi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Jd(s,e){s.uniform1iv(this.addr,e)}function Kd(s,e){s.uniform2iv(this.addr,e)}function Qd(s,e){s.uniform3iv(this.addr,e)}function ef(s,e){s.uniform4iv(this.addr,e)}function tf(s,e){s.uniform1uiv(this.addr,e)}function nf(s,e){s.uniform2uiv(this.addr,e)}function rf(s,e){s.uniform3uiv(this.addr,e)}function sf(s,e){s.uniform4uiv(this.addr,e)}function af(s,e,t){const n=this.cache,i=e.length,r=Rr(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Jo,r[o])}function of(s,e,t){const n=this.cache,i=e.length,r=Rr(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qo,r[o])}function lf(s,e,t){const n=this.cache,i=e.length,r=Rr(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||el,r[o])}function cf(s,e,t){const n=this.cache,i=e.length,r=Rr(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ko,r[o])}function uf(s){switch(s){case 5126:return Wd;case 35664:return qd;case 35665:return Xd;case 35666:return jd;case 35674:return Yd;case 35675:return Zd;case 35676:return $d;case 5124:case 35670:return Jd;case 35667:case 35671:return Kd;case 35668:case 35672:return Qd;case 35669:case 35673:return ef;case 5125:return tf;case 36294:return nf;case 36295:return rf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}class hf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=kd(t.type)}}class df{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=uf(t.type)}}class ff{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const us=/(\w+)(\])?(\[|\.)?/g;function oo(s,e){s.seq.push(e),s.map[e.id]=e}function pf(s,e,t){const n=s.name,i=n.length;for(us.lastIndex=0;;){const r=us.exec(n),o=us.lastIndex;let a=r[1];const h=r[2]==="]",c=r[3];if(h&&(a=a|0),c===void 0||c==="["&&o+2===i){oo(t,c===void 0?new hf(a,s,e):new df(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new ff(a),oo(t,p)),t=p}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);pf(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function lo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let mf=0;function gf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function _f(s){switch(s){case zn:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function co(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+gf(s.getShaderSource(e),o)}else return i}function vf(s,e){const t=_f(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xf(s,e){let t;switch(e){case Il:t="Linear";break;case Ul:t="Reinhard";break;case Fl:t="OptimizedCineon";break;case Nl:t="ACESFilmic";break;case zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Sf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yf(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wi(s){return s!==""}function uo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ho(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(s){return s.replace(bf,wf)}function wf(s,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hs(t)}const Ef=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(s){return s.replace(Ef,Tf)}function Tf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function po(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Af(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Co?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Pf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Lf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xs:e="ENVMAP_BLENDING_MULTIPLY";break;case Rl:e="ENVMAP_BLENDING_MIX";break;case Dl:e="ENVMAP_BLENDING_ADD";break}return e}function Rf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Df(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const h=Af(t),c=Pf(t),d=Cf(t),p=Lf(t),m=Rf(t),g=t.isWebGL2?"":Mf(t),v=Sf(r),f=i.createProgram();let u,l,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[v].filter(wi).join(`
`),u.length>0&&(u+=`
`),l=[g,v].filter(wi).join(`
`),l.length>0&&(l+=`
`)):(u=[po(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),l=[g,po(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==hn?xf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,vf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=Hs(o),o=uo(o,t),o=ho(o,t),a=Hs(a),a=uo(a,t),a=ho(a,t),o=fo(o),a=fo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,l=["#define varying in",t.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const w=_+u+o,y=_+l+a,T=lo(i,35633,w),C=lo(i,35632,y);if(i.attachShader(f,T),i.attachShader(f,C),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(f).trim(),E=i.getShaderInfoLog(T).trim(),j=i.getShaderInfoLog(C).trim();let q=!0,I=!0;if(i.getProgramParameter(f,35714)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,T,C);else{const U=co(i,T,"vertex"),k=co(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+S+`
`+U+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(E===""||j==="")&&(I=!1);I&&(this.diagnostics={runnable:q,programLog:S,vertexShader:{log:E,prefix:u},fragmentShader:{log:j,prefix:l}})}i.deleteShader(T),i.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new Tr(i,f)),D};let F;return this.getAttributes=function(){return F===void 0&&(F=yf(i,f)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=mf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=C,this}let If=0;class Uf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ff(e),t.set(e,n)),n}}class Ff{constructor(e){this.id=If++,this.code=e,this.usedTimes=0}}function Nf(s,e,t,n,i,r,o){const a=new Vo,h=new Uf,c=[],d=i.isWebGL2,p=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(S){return S===1?"uv2":"uv"}function u(S,E,j,q,I){const U=q.fog,k=I.geometry,Q=S.isMeshStandardMaterial?q.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||Q),W=J&&J.mapping===Pr?J.image.height:null,ee=v[S.type];S.precision!==null&&(g=i.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,be=$!==void 0?$.length:0;let te=0;k.morphAttributes.position!==void 0&&(te=1),k.morphAttributes.normal!==void 0&&(te=2),k.morphAttributes.color!==void 0&&(te=3);let G,X,ae,ce;if(ee){const le=tn[ee];G=le.vertexShader,X=le.fragmentShader}else G=S.vertexShader,X=S.fragmentShader,h.update(S),ae=h.getVertexShaderID(S),ce=h.getFragmentShaderID(S);const N=s.getRenderTarget(),Te=I.isInstancedMesh===!0,ye=!!S.map,se=!!S.matcap,xe=!!J,qe=!!S.aoMap,me=!!S.lightMap,Oe=!!S.bumpMap,ft=!!S.normalMap,_t=!!S.displacementMap,pt=!!S.emissiveMap,ct=!!S.metalnessMap,Xe=!!S.roughnessMap,it=S.clearcoat>0,Ct=S.iridescence>0,b=S.sheen>0,x=S.transmission>0,z=it&&!!S.clearcoatMap,Z=it&&!!S.clearcoatNormalMap,K=it&&!!S.clearcoatRoughnessMap,oe=Ct&&!!S.iridescenceMap,Me=Ct&&!!S.iridescenceThicknessMap,he=b&&!!S.sheenColorMap,V=b&&!!S.sheenRoughnessMap,de=!!S.specularMap,ge=!!S.specularColorMap,ve=!!S.specularIntensityMap,ue=x&&!!S.transmissionMap,fe=x&&!!S.thicknessMap,Ve=!!S.gradientMap,Ye=!!S.alphaMap,rt=S.alphaTest>0,A=!!S.extensions,B=!!k.attributes.uv2;return{isWebGL2:d,shaderID:ee,shaderName:S.type,vertexShader:G,fragmentShader:X,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:Te,instancingColor:Te&&I.instanceColor!==null,supportsVertexTextures:m,outputEncoding:N===null?s.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:zn,map:ye,matcap:se,envMap:xe,envMapMode:xe&&J.mapping,envMapCubeUVHeight:W,aoMap:qe,lightMap:me,bumpMap:Oe,normalMap:ft,displacementMap:m&&_t,emissiveMap:pt,normalMapObjectSpace:ft&&S.normalMapType===nc,normalMapTangentSpace:ft&&S.normalMapType===Uo,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&S.map.encoding===Ke,metalnessMap:ct,roughnessMap:Xe,clearcoat:it,clearcoatMap:z,clearcoatNormalMap:Z,clearcoatRoughnessMap:K,iridescence:Ct,iridescenceMap:oe,iridescenceThicknessMap:Me,sheen:b,sheenColorMap:he,sheenRoughnessMap:V,specularMap:de,specularColorMap:ge,specularIntensityMap:ve,transmission:x,transmissionMap:ue,thicknessMap:fe,gradientMap:Ve,opaque:S.transparent===!1&&S.blending===ii,alphaMap:Ye,alphaTest:rt,combine:S.combine,mapUv:ye&&f(S.map.channel),aoMapUv:qe&&f(S.aoMap.channel),lightMapUv:me&&f(S.lightMap.channel),bumpMapUv:Oe&&f(S.bumpMap.channel),normalMapUv:ft&&f(S.normalMap.channel),displacementMapUv:_t&&f(S.displacementMap.channel),emissiveMapUv:pt&&f(S.emissiveMap.channel),metalnessMapUv:ct&&f(S.metalnessMap.channel),roughnessMapUv:Xe&&f(S.roughnessMap.channel),clearcoatMapUv:z&&f(S.clearcoatMap.channel),clearcoatNormalMapUv:Z&&f(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&f(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&f(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(S.sheenColorMap.channel),sheenRoughnessMapUv:V&&f(S.sheenRoughnessMap.channel),specularMapUv:de&&f(S.specularMap.channel),specularColorMapUv:ge&&f(S.specularColorMap.channel),specularIntensityMapUv:ve&&f(S.specularIntensityMap.channel),transmissionMapUv:ue&&f(S.transmissionMap.channel),thicknessMapUv:fe&&f(S.thicknessMap.channel),alphaMapUv:Ye&&f(S.alphaMap.channel),vertexTangents:ft&&!!k.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs2:B,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(ye||Ye),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:S.toneMapped?s.toneMapping:hn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===Pt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:A&&S.extensions.derivatives===!0,extensionFragDepth:A&&S.extensions.fragDepth===!0,extensionDrawBuffers:A&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:A&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function l(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)E.push(j),E.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(_(E,S),w(E,S),E.push(s.outputEncoding)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputEncoding),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function w(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUvs2&&a.enable(13),E.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.decodeVideoTexture&&a.enable(17),E.opaque&&a.enable(18),E.pointsUvs&&a.enable(19),S.push(a.mask)}function y(S){const E=v[S.type];let j;if(E){const q=tn[E];j=Ec.clone(q.uniforms)}else j=S.uniforms;return j}function T(S,E){let j;for(let q=0,I=c.length;q<I;q++){const U=c[q];if(U.cacheKey===E){j=U,++j.usedTimes;break}}return j===void 0&&(j=new Df(s,E,S,r),c.push(j)),j}function C(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function D(S){h.remove(S)}function F(){h.dispose()}return{getParameters:u,getProgramCacheKey:l,getUniforms:y,acquireProgram:T,releaseProgram:C,releaseShaderCache:D,programs:c,dispose:F}}function zf(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Of(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function go(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(p,m,g,v,f,u){let l=s[e];return l===void 0?(l={id:p.id,object:p,geometry:m,material:g,groupOrder:v,renderOrder:p.renderOrder,z:f,group:u},s[e]=l):(l.id=p.id,l.object=p,l.geometry=m,l.material=g,l.groupOrder=v,l.renderOrder=p.renderOrder,l.z=f,l.group=u),e++,l}function a(p,m,g,v,f,u){const l=o(p,m,g,v,f,u);g.transmission>0?n.push(l):g.transparent===!0?i.push(l):t.push(l)}function h(p,m,g,v,f,u){const l=o(p,m,g,v,f,u);g.transmission>0?n.unshift(l):g.transparent===!0?i.unshift(l):t.unshift(l)}function c(p,m){t.length>1&&t.sort(p||Of),n.length>1&&n.sort(m||mo),i.length>1&&i.sort(m||mo)}function d(){for(let p=e,m=s.length;p<m;p++){const g=s[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:h,finish:d,sort:c}}function Bf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new go,s.set(n,[o])):i>=r.length?(o=new go,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new je};break;case"SpotLight":t={position:new P,direction:new P,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Vf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hf=0;function kf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Wf(s,e){const t=new Gf,n=Vf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)i.probe.push(new P);const r=new P,o=new at,a=new at;function h(d,p){let m=0,g=0,v=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let f=0,u=0,l=0,_=0,w=0,y=0,T=0,C=0,D=0,F=0;d.sort(kf);const S=p===!0?Math.PI:1;for(let j=0,q=d.length;j<q;j++){const I=d[j],U=I.color,k=I.intensity,Q=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)m+=U.r*k*S,g+=U.g*k*S,v+=U.b*k*S;else if(I.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],k);else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const ee=I.shadow,$=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=I.shadow.matrix,y++}i.directional[f]=W,f++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(k*S),W.distance=Q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[l]=W;const ee=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,ee.updateMatrices(I),I.castShadow&&F++),i.spotLightMatrix[l]=ee.matrix,I.castShadow){const $=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.spotShadow[l]=$,i.spotShadowMap[l]=J,C++}l++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(U).multiplyScalar(k),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[_]=W,_++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*S),W.distance=I.distance,W.decay=I.decay,I.castShadow){const ee=I.shadow,$=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,i.pointShadow[u]=$,i.pointShadowMap[u]=J,i.pointShadowMatrix[u]=I.shadow.matrix,T++}i.point[u]=W,u++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(k*S),W.groundColor.copy(I.groundColor).multiplyScalar(k*S),i.hemi[w]=W,w++}}_>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const E=i.hash;(E.directionalLength!==f||E.pointLength!==u||E.spotLength!==l||E.rectAreaLength!==_||E.hemiLength!==w||E.numDirectionalShadows!==y||E.numPointShadows!==T||E.numSpotShadows!==C||E.numSpotMaps!==D)&&(i.directional.length=f,i.spot.length=l,i.rectArea.length=_,i.point.length=u,i.hemi.length=w,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=C+D-F,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=F,E.directionalLength=f,E.pointLength=u,E.spotLength=l,E.rectAreaLength=_,E.hemiLength=w,E.numDirectionalShadows=y,E.numPointShadows=T,E.numSpotShadows=C,E.numSpotMaps=D,i.version=Hf++)}function c(d,p){let m=0,g=0,v=0,f=0,u=0;const l=p.matrixWorldInverse;for(let _=0,w=d.length;_<w;_++){const y=d[_];if(y.isDirectionalLight){const T=i.directional[m];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(l),m++}else if(y.isSpotLight){const T=i.spot[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(l),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(l),v++}else if(y.isRectAreaLight){const T=i.rectArea[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(l),a.identity(),o.copy(y.matrixWorld),o.premultiply(l),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),f++}else if(y.isPointLight){const T=i.point[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(l),g++}else if(y.isHemisphereLight){const T=i.hemi[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(l),u++}}}return{setup:h,setupView:c,state:i}}function _o(s,e){const t=new Wf(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(p){n.push(p)}function a(p){i.push(p)}function h(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:h,setupLightsView:c,pushLight:o,pushShadow:a}}function qf(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let h;return a===void 0?(h=new _o(s,e),t.set(r,[h])):o>=a.length?(h=new _o(s,e),a.push(h)):h=a[o],h}function i(){t=new WeakMap}return{get:n,dispose:i}}class Xf extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jf extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zf=`uniform sampler2D shadow_pass;
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
}`;function $f(s,e,t){let n=new Ys;const i=new We,r=new We,o=new tt,a=new Xf({depthPacking:tc}),h=new jf,c={},d=t.maxTextureSize,p={[xn]:Pt,[Pt]:xn,[Ht]:Ht},m=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Yf,fragmentShader:Zf}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const v=new Jt;v.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new At(v,m),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co,this.render=function(y,T,C){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||y.length===0)return;const D=s.getRenderTarget(),F=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),E=s.state;E.setBlending(_n),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let j=0,q=y.length;j<q;j++){const I=y[j],U=I.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const k=U.getFrameExtents();if(i.multiply(k),r.copy(U.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/k.x),i.x=r.x*k.x,U.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/k.y),i.y=r.y*k.y,U.mapSize.y=r.y)),U.map===null){const J=this.type!==bi?{minFilter:Et,magFilter:Et}:{};U.map=new On(i.x,i.y,J),U.map.texture.name=I.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const Q=U.getViewportCount();for(let J=0;J<Q;J++){const W=U.getViewport(J);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),E.viewport(o),U.updateMatrices(I,J),n=U.getFrustum(),w(T,C,U.camera,I,this.type)}U.isPointLightShadow!==!0&&this.type===bi&&l(U,C),U.needsUpdate=!1}u.needsUpdate=!1,s.setRenderTarget(D,F,S)};function l(y,T){const C=e.update(f);m.defines.VSM_SAMPLES!==y.blurSamples&&(m.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new On(i.x,i.y)),m.uniforms.shadow_pass.value=y.map.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(T,null,C,m,f,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(T,null,C,g,f,null)}function _(y,T,C,D){let F=null;const S=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(S!==void 0)F=S;else if(F=C.isPointLight===!0?h:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const E=F.uuid,j=T.uuid;let q=c[E];q===void 0&&(q={},c[E]=q);let I=q[j];I===void 0&&(I=F.clone(),q[j]=I),F=I}if(F.visible=T.visible,F.wireframe=T.wireframe,D===bi?F.side=T.shadowSide!==null?T.shadowSide:T.side:F.side=T.shadowSide!==null?T.shadowSide:p[T.side],F.alphaMap=T.alphaMap,F.alphaTest=T.alphaTest,F.map=T.map,F.clipShadows=T.clipShadows,F.clippingPlanes=T.clippingPlanes,F.clipIntersection=T.clipIntersection,F.displacementMap=T.displacementMap,F.displacementScale=T.displacementScale,F.displacementBias=T.displacementBias,F.wireframeLinewidth=T.wireframeLinewidth,F.linewidth=T.linewidth,C.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const E=s.properties.get(F);E.light=C}return F}function w(y,T,C,D,F){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&F===bi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const j=e.update(y),q=y.material;if(Array.isArray(q)){const I=j.groups;for(let U=0,k=I.length;U<k;U++){const Q=I[U],J=q[Q.materialIndex];if(J&&J.visible){const W=_(y,J,D,F);s.renderBufferDirect(C,null,j,W,y,Q)}}}else if(q.visible){const I=_(y,q,D,F);s.renderBufferDirect(C,null,j,I,y,null)}}const E=y.children;for(let j=0,q=E.length;j<q;j++)w(E[j],T,C,D,F)}}function Jf(s,e,t){const n=t.isWebGL2;function i(){let A=!1;const B=new tt;let Y=null;const le=new tt(0,0,0,0);return{setMask:function(pe){Y!==pe&&!A&&(s.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){A=pe},setClear:function(pe,Qe,nt,xt,dn){dn===!0&&(pe*=xt,Qe*=xt,nt*=xt),B.set(pe,Qe,nt,xt),le.equals(B)===!1&&(s.clearColor(pe,Qe,nt,xt),le.copy(B))},reset:function(){A=!1,Y=null,le.set(-1,0,0,0)}}}function r(){let A=!1,B=null,Y=null,le=null;return{setTest:function(pe){pe?N(2929):Te(2929)},setMask:function(pe){B!==pe&&!A&&(s.depthMask(pe),B=pe)},setFunc:function(pe){if(Y!==pe){switch(pe){case wl:s.depthFunc(512);break;case El:s.depthFunc(519);break;case Tl:s.depthFunc(513);break;case Fs:s.depthFunc(515);break;case Al:s.depthFunc(514);break;case Pl:s.depthFunc(518);break;case Cl:s.depthFunc(516);break;case Ll:s.depthFunc(517);break;default:s.depthFunc(515)}Y=pe}},setLocked:function(pe){A=pe},setClear:function(pe){le!==pe&&(s.clearDepth(pe),le=pe)},reset:function(){A=!1,B=null,Y=null,le=null}}}function o(){let A=!1,B=null,Y=null,le=null,pe=null,Qe=null,nt=null,xt=null,dn=null;return{setTest:function(st){A||(st?N(2960):Te(2960))},setMask:function(st){B!==st&&!A&&(s.stencilMask(st),B=st)},setFunc:function(st,Bt,Kt){(Y!==st||le!==Bt||pe!==Kt)&&(s.stencilFunc(st,Bt,Kt),Y=st,le=Bt,pe=Kt)},setOp:function(st,Bt,Kt){(Qe!==st||nt!==Bt||xt!==Kt)&&(s.stencilOp(st,Bt,Kt),Qe=st,nt=Bt,xt=Kt)},setLocked:function(st){A=st},setClear:function(st){dn!==st&&(s.clearStencil(st),dn=st)},reset:function(){A=!1,B=null,Y=null,le=null,pe=null,Qe=null,nt=null,xt=null,dn=null}}}const a=new i,h=new r,c=new o,d=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,f=[],u=null,l=!1,_=null,w=null,y=null,T=null,C=null,D=null,F=null,S=!1,E=null,j=null,q=null,I=null,U=null;const k=s.getParameter(35661);let Q=!1,J=0;const W=s.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),Q=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Q=J>=2);let ee=null,$={};const be=s.getParameter(3088),te=s.getParameter(2978),G=new tt().fromArray(be),X=new tt().fromArray(te);function ae(A,B,Y){const le=new Uint8Array(4),pe=s.createTexture();s.bindTexture(A,pe),s.texParameteri(A,10241,9728),s.texParameteri(A,10240,9728);for(let Qe=0;Qe<Y;Qe++)s.texImage2D(B+Qe,0,6408,1,1,0,6408,5121,le);return pe}const ce={};ce[3553]=ae(3553,3553,1),ce[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),h.setClear(1),c.setClear(0),N(2929),h.setFunc(Fs),_t(!1),pt(ia),N(2884),Oe(_n);function N(A){m[A]!==!0&&(s.enable(A),m[A]=!0)}function Te(A){m[A]!==!1&&(s.disable(A),m[A]=!1)}function ye(A,B){return g[A]!==B?(s.bindFramebuffer(A,B),g[A]=B,n&&(A===36009&&(g[36160]=B),A===36160&&(g[36009]=B)),!0):!1}function se(A,B){let Y=f,le=!1;if(A)if(Y=v.get(B),Y===void 0&&(Y=[],v.set(B,Y)),A.isWebGLMultipleRenderTargets){const pe=A.texture;if(Y.length!==pe.length||Y[0]!==36064){for(let Qe=0,nt=pe.length;Qe<nt;Qe++)Y[Qe]=36064+Qe;Y.length=pe.length,le=!0}}else Y[0]!==36064&&(Y[0]=36064,le=!0);else Y[0]!==1029&&(Y[0]=1029,le=!0);le&&(t.isWebGL2?s.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function xe(A){return u!==A?(s.useProgram(A),u=A,!0):!1}const qe={[ti]:32774,[fl]:32778,[pl]:32779};if(n)qe[aa]=32775,qe[oa]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(qe[aa]=A.MIN_EXT,qe[oa]=A.MAX_EXT)}const me={[ml]:0,[gl]:1,[_l]:768,[Lo]:770,[bl]:776,[Sl]:774,[xl]:772,[vl]:769,[Ro]:771,[yl]:775,[Ml]:773};function Oe(A,B,Y,le,pe,Qe,nt,xt){if(A===_n){l===!0&&(Te(3042),l=!1);return}if(l===!1&&(N(3042),l=!0),A!==dl){if(A!==_||xt!==S){if((w!==ti||C!==ti)&&(s.blendEquation(32774),w=ti,C=ti),xt)switch(A){case ii:s.blendFuncSeparate(1,771,1,771);break;case Ar:s.blendFunc(1,1);break;case ra:s.blendFuncSeparate(0,769,0,1);break;case sa:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ii:s.blendFuncSeparate(770,771,1,771);break;case Ar:s.blendFunc(770,1);break;case ra:s.blendFuncSeparate(0,769,0,1);break;case sa:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}y=null,T=null,D=null,F=null,_=A,S=xt}return}pe=pe||B,Qe=Qe||Y,nt=nt||le,(B!==w||pe!==C)&&(s.blendEquationSeparate(qe[B],qe[pe]),w=B,C=pe),(Y!==y||le!==T||Qe!==D||nt!==F)&&(s.blendFuncSeparate(me[Y],me[le],me[Qe],me[nt]),y=Y,T=le,D=Qe,F=nt),_=A,S=!1}function ft(A,B){A.side===Ht?Te(2884):N(2884);let Y=A.side===Pt;B&&(Y=!Y),_t(Y),A.blending===ii&&A.transparent===!1?Oe(_n):Oe(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),h.setFunc(A.depthFunc),h.setTest(A.depthTest),h.setMask(A.depthWrite),a.setMask(A.colorWrite);const le=A.stencilWrite;c.setTest(le),le&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Xe(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?N(32926):Te(32926)}function _t(A){E!==A&&(A?s.frontFace(2304):s.frontFace(2305),E=A)}function pt(A){A!==cl?(N(2884),A!==j&&(A===ia?s.cullFace(1029):A===ul?s.cullFace(1028):s.cullFace(1032))):Te(2884),j=A}function ct(A){A!==q&&(Q&&s.lineWidth(A),q=A)}function Xe(A,B,Y){A?(N(32823),(I!==B||U!==Y)&&(s.polygonOffset(B,Y),I=B,U=Y)):Te(32823)}function it(A){A?N(3089):Te(3089)}function Ct(A){A===void 0&&(A=33984+k-1),ee!==A&&(s.activeTexture(A),ee=A)}function b(A,B,Y){Y===void 0&&(ee===null?Y=33984+k-1:Y=ee);let le=$[Y];le===void 0&&(le={type:void 0,texture:void 0},$[Y]=le),(le.type!==A||le.texture!==B)&&(ee!==Y&&(s.activeTexture(Y),ee=Y),s.bindTexture(A,B||ce[A]),le.type=A,le.texture=B)}function x(){const A=$[ee];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function de(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(A){G.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),G.copy(A))}function fe(A){X.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),X.copy(A))}function Ve(A,B){let Y=p.get(B);Y===void 0&&(Y=new WeakMap,p.set(B,Y));let le=Y.get(A);le===void 0&&(le=s.getUniformBlockIndex(B,A.name),Y.set(A,le))}function Ye(A,B){const le=p.get(B).get(A);d.get(B)!==le&&(s.uniformBlockBinding(B,le,A.__bindingPointIndex),d.set(B,le))}function rt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ee=null,$={},g={},v=new WeakMap,f=[],u=null,l=!1,_=null,w=null,y=null,T=null,C=null,D=null,F=null,S=!1,E=null,j=null,q=null,I=null,U=null,G.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),h.reset(),c.reset()}return{buffers:{color:a,depth:h,stencil:c},enable:N,disable:Te,bindFramebuffer:ye,drawBuffers:se,useProgram:xe,setBlending:Oe,setMaterial:ft,setFlipSided:_t,setCullFace:pt,setLineWidth:ct,setPolygonOffset:Xe,setScissorTest:it,activeTexture:Ct,bindTexture:b,unbindTexture:x,compressedTexImage2D:z,compressedTexImage3D:Z,texImage2D:ge,texImage3D:ve,updateUBOMapping:Ve,uniformBlockBinding:Ye,texStorage2D:V,texStorage3D:de,texSubImage2D:K,texSubImage3D:oe,compressedTexSubImage2D:Me,compressedTexSubImage3D:he,scissor:ue,viewport:fe,reset:rt}}function Kf(s,e,t,n,i,r,o){const a=i.isWebGL2,h=i.maxTextures,c=i.maxCubemapSize,d=i.maxTextureSize,p=i.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let f;const u=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return l?new OffscreenCanvas(b,x):Pi("canvas")}function w(b,x,z,Z){let K=1;if((b.width>Z||b.height>Z)&&(K=Z/Math.max(b.width,b.height)),K<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const oe=x?sc:Math.floor,Me=oe(K*b.width),he=oe(K*b.height);f===void 0&&(f=_(Me,he));const V=z?_(Me,he):f;return V.width=Me,V.height=he,V.getContext("2d").drawImage(b,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+he+")."),V}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return Ua(b.width)&&Ua(b.height)}function T(b){return a?!1:b.wrapS!==Zt||b.wrapT!==Zt||b.minFilter!==Et&&b.minFilter!==Vt}function C(b,x){return b.generateMipmaps&&x&&b.minFilter!==Et&&b.minFilter!==Vt}function D(b){s.generateMipmap(b)}function F(b,x,z,Z,K=!1){if(a===!1)return x;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=x;return x===6403&&(z===5126&&(oe=33326),z===5131&&(oe=33325),z===5121&&(oe=33321)),x===33319&&(z===5126&&(oe=33328),z===5131&&(oe=33327),z===5121&&(oe=33323)),x===6408&&(z===5126&&(oe=34836),z===5131&&(oe=34842),z===5121&&(oe=Z===Ke&&K===!1?35907:32856),z===32819&&(oe=32854),z===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function S(b,x,z){return C(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Et&&b.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function E(b){return b===Et||b===la||b===Nr?9728:9729}function j(b){const x=b.target;x.removeEventListener("dispose",j),I(x),x.isVideoTexture&&v.delete(x)}function q(b){const x=b.target;x.removeEventListener("dispose",q),k(x)}function I(b){const x=n.get(b);if(x.__webglInit===void 0)return;const z=b.source,Z=u.get(z);if(Z){const K=Z[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(b),Object.keys(Z).length===0&&u.delete(z)}n.remove(b)}function U(b){const x=n.get(b);s.deleteTexture(x.__webglTexture);const z=b.source,Z=u.get(z);delete Z[x.__cacheKey],o.memory.textures--}function k(b){const x=b.texture,z=n.get(b),Z=n.get(x);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)s.deleteFramebuffer(z.__webglFramebuffer[K]),z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[K]);else{if(s.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let K=0;K<z.__webglColorRenderbuffer.length;K++)z.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[K]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let K=0,oe=x.length;K<oe;K++){const Me=n.get(x[K]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(x[K])}n.remove(x),n.remove(b)}let Q=0;function J(){Q=0}function W(){const b=Q;return b>=h&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+h),Q+=1,b}function ee(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function $(b,x){const z=n.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(z,b,x);return}}t.bindTexture(3553,z.__webglTexture,33984+x)}function be(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Te(z,b,x);return}t.bindTexture(35866,z.__webglTexture,33984+x)}function te(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Te(z,b,x);return}t.bindTexture(32879,z.__webglTexture,33984+x)}function G(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ye(z,b,x);return}t.bindTexture(34067,z.__webglTexture,33984+x)}const X={[Os]:10497,[Zt]:33071,[Bs]:33648},ae={[Et]:9728,[la]:9984,[Nr]:9986,[Vt]:9729,[Ol]:9985,[ui]:9987};function ce(b,x,z){if(z?(s.texParameteri(b,10242,X[x.wrapS]),s.texParameteri(b,10243,X[x.wrapT]),(b===32879||b===35866)&&s.texParameteri(b,32882,X[x.wrapR]),s.texParameteri(b,10240,ae[x.magFilter]),s.texParameteri(b,10241,ae[x.minFilter])):(s.texParameteri(b,10242,33071),s.texParameteri(b,10243,33071),(b===32879||b===35866)&&s.texParameteri(b,32882,33071),(x.wrapS!==Zt||x.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,10240,E(x.magFilter)),s.texParameteri(b,10241,E(x.minFilter)),x.minFilter!==Et&&x.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Et||x.minFilter!==Nr&&x.minFilter!==ui||x.type===Rn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function N(b,x){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",j));const Z=x.source;let K=u.get(Z);K===void 0&&(K={},u.set(Z,K));const oe=ee(x);if(oe!==b.__cacheKey){K[oe]===void 0&&(K[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[oe].usedTimes++;const Me=K[b.__cacheKey];Me!==void 0&&(K[b.__cacheKey].usedTimes--,Me.usedTimes===0&&U(x)),b.__cacheKey=oe,b.__webglTexture=K[oe].texture}return z}function Te(b,x,z){let Z=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=35866),x.isData3DTexture&&(Z=32879);const K=N(b,x),oe=x.source;t.bindTexture(Z,b.__webglTexture,33984+z);const Me=n.get(oe);if(oe.version!==Me.__version||K===!0){t.activeTexture(33984+z),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const he=T(x)&&y(x.image)===!1;let V=w(x.image,he,!1,d);V=Ct(x,V);const de=y(V)||a,ge=r.convert(x.format,x.encoding);let ve=r.convert(x.type),ue=F(x.internalFormat,ge,ve,x.encoding,x.isVideoTexture);ce(Z,x,de);let fe;const Ve=x.mipmaps,Ye=a&&x.isVideoTexture!==!0,rt=Me.__version===void 0||K===!0,A=S(x,V,de);if(x.isDepthTexture)ue=6402,a?x.type===Rn?ue=36012:x.type===Ln?ue=33190:x.type===ri?ue=35056:ue=33189:x.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Fn&&ue===6402&&x.type!==Io&&x.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ln,ve=r.convert(x.type)),x.format===hi&&ue===6402&&(ue=34041,x.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ri,ve=r.convert(x.type))),rt&&(Ye?t.texStorage2D(3553,1,ue,V.width,V.height):t.texImage2D(3553,0,ue,V.width,V.height,0,ge,ve,null));else if(x.isDataTexture)if(Ve.length>0&&de){Ye&&rt&&t.texStorage2D(3553,A,ue,Ve[0].width,Ve[0].height);for(let B=0,Y=Ve.length;B<Y;B++)fe=Ve[B],Ye?t.texSubImage2D(3553,B,0,0,fe.width,fe.height,ge,ve,fe.data):t.texImage2D(3553,B,ue,fe.width,fe.height,0,ge,ve,fe.data);x.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(3553,A,ue,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ge,ve,V.data)):t.texImage2D(3553,0,ue,V.width,V.height,0,ge,ve,V.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(35866,A,ue,Ve[0].width,Ve[0].height,V.depth);for(let B=0,Y=Ve.length;B<Y;B++)fe=Ve[B],x.format!==kt?ge!==null?Ye?t.compressedTexSubImage3D(35866,B,0,0,0,fe.width,fe.height,V.depth,ge,fe.data,0,0):t.compressedTexImage3D(35866,B,ue,fe.width,fe.height,V.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(35866,B,0,0,0,fe.width,fe.height,V.depth,ge,ve,fe.data):t.texImage3D(35866,B,ue,fe.width,fe.height,V.depth,0,ge,ve,fe.data)}else{Ye&&rt&&t.texStorage2D(3553,A,ue,Ve[0].width,Ve[0].height);for(let B=0,Y=Ve.length;B<Y;B++)fe=Ve[B],x.format!==kt?ge!==null?Ye?t.compressedTexSubImage2D(3553,B,0,0,fe.width,fe.height,ge,fe.data):t.compressedTexImage2D(3553,B,ue,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(3553,B,0,0,fe.width,fe.height,ge,ve,fe.data):t.texImage2D(3553,B,ue,fe.width,fe.height,0,ge,ve,fe.data)}else if(x.isDataArrayTexture)Ye?(rt&&t.texStorage3D(35866,A,ue,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ge,ve,V.data)):t.texImage3D(35866,0,ue,V.width,V.height,V.depth,0,ge,ve,V.data);else if(x.isData3DTexture)Ye?(rt&&t.texStorage3D(32879,A,ue,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ge,ve,V.data)):t.texImage3D(32879,0,ue,V.width,V.height,V.depth,0,ge,ve,V.data);else if(x.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(3553,A,ue,V.width,V.height);else{let B=V.width,Y=V.height;for(let le=0;le<A;le++)t.texImage2D(3553,le,ue,B,Y,0,ge,ve,null),B>>=1,Y>>=1}}else if(Ve.length>0&&de){Ye&&rt&&t.texStorage2D(3553,A,ue,Ve[0].width,Ve[0].height);for(let B=0,Y=Ve.length;B<Y;B++)fe=Ve[B],Ye?t.texSubImage2D(3553,B,0,0,ge,ve,fe):t.texImage2D(3553,B,ue,ge,ve,fe);x.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(3553,A,ue,V.width,V.height),t.texSubImage2D(3553,0,0,0,ge,ve,V)):t.texImage2D(3553,0,ue,ge,ve,V);C(x,de)&&D(Z),Me.__version=oe.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ye(b,x,z){if(x.image.length!==6)return;const Z=N(b,x),K=x.source;t.bindTexture(34067,b.__webglTexture,33984+z);const oe=n.get(K);if(K.version!==oe.__version||Z===!0){t.activeTexture(33984+z),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const Me=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,V=[];for(let B=0;B<6;B++)!Me&&!he?V[B]=w(x.image[B],!1,!0,c):V[B]=he?x.image[B].image:x.image[B],V[B]=Ct(x,V[B]);const de=V[0],ge=y(de)||a,ve=r.convert(x.format,x.encoding),ue=r.convert(x.type),fe=F(x.internalFormat,ve,ue,x.encoding),Ve=a&&x.isVideoTexture!==!0,Ye=oe.__version===void 0||Z===!0;let rt=S(x,de,ge);ce(34067,x,ge);let A;if(Me){Ve&&Ye&&t.texStorage2D(34067,rt,fe,de.width,de.height);for(let B=0;B<6;B++){A=V[B].mipmaps;for(let Y=0;Y<A.length;Y++){const le=A[Y];x.format!==kt?ve!==null?Ve?t.compressedTexSubImage2D(34069+B,Y,0,0,le.width,le.height,ve,le.data):t.compressedTexImage2D(34069+B,Y,fe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+B,Y,0,0,le.width,le.height,ve,ue,le.data):t.texImage2D(34069+B,Y,fe,le.width,le.height,0,ve,ue,le.data)}}}else{A=x.mipmaps,Ve&&Ye&&(A.length>0&&rt++,t.texStorage2D(34067,rt,fe,V[0].width,V[0].height));for(let B=0;B<6;B++)if(he){Ve?t.texSubImage2D(34069+B,0,0,0,V[B].width,V[B].height,ve,ue,V[B].data):t.texImage2D(34069+B,0,fe,V[B].width,V[B].height,0,ve,ue,V[B].data);for(let Y=0;Y<A.length;Y++){const pe=A[Y].image[B].image;Ve?t.texSubImage2D(34069+B,Y+1,0,0,pe.width,pe.height,ve,ue,pe.data):t.texImage2D(34069+B,Y+1,fe,pe.width,pe.height,0,ve,ue,pe.data)}}else{Ve?t.texSubImage2D(34069+B,0,0,0,ve,ue,V[B]):t.texImage2D(34069+B,0,fe,ve,ue,V[B]);for(let Y=0;Y<A.length;Y++){const le=A[Y];Ve?t.texSubImage2D(34069+B,Y+1,0,0,ve,ue,le.image[B]):t.texImage2D(34069+B,Y+1,fe,ve,ue,le.image[B])}}}C(x,ge)&&D(34067),oe.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function se(b,x,z,Z,K){const oe=r.convert(z.format,z.encoding),Me=r.convert(z.type),he=F(z.internalFormat,oe,Me,z.encoding);n.get(x).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,he,x.width,x.height,x.depth,0,oe,Me,null):t.texImage2D(K,0,he,x.width,x.height,0,oe,Me,null)),t.bindFramebuffer(36160,b),Xe(x)?m.framebufferTexture2DMultisampleEXT(36160,Z,K,n.get(z).__webglTexture,0,ct(x)):(K===3553||K>=34069&&K<=34074)&&s.framebufferTexture2D(36160,Z,K,n.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function xe(b,x,z){if(s.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let Z=33189;if(z||Xe(x)){const K=x.depthTexture;K&&K.isDepthTexture&&(K.type===Rn?Z=36012:K.type===Ln&&(Z=33190));const oe=ct(x);Xe(x)?m.renderbufferStorageMultisampleEXT(36161,oe,Z,x.width,x.height):s.renderbufferStorageMultisample(36161,oe,Z,x.width,x.height)}else s.renderbufferStorage(36161,Z,x.width,x.height);s.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){const Z=ct(x);z&&Xe(x)===!1?s.renderbufferStorageMultisample(36161,Z,35056,x.width,x.height):Xe(x)?m.renderbufferStorageMultisampleEXT(36161,Z,35056,x.width,x.height):s.renderbufferStorage(36161,34041,x.width,x.height),s.framebufferRenderbuffer(36160,33306,36161,b)}else{const Z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<Z.length;K++){const oe=Z[K],Me=r.convert(oe.format,oe.encoding),he=r.convert(oe.type),V=F(oe.internalFormat,Me,he,oe.encoding),de=ct(x);z&&Xe(x)===!1?s.renderbufferStorageMultisample(36161,de,V,x.width,x.height):Xe(x)?m.renderbufferStorageMultisampleEXT(36161,de,V,x.width,x.height):s.renderbufferStorage(36161,V,x.width,x.height)}}s.bindRenderbuffer(36161,null)}function qe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,K=ct(x);if(x.depthTexture.format===Fn)Xe(x)?m.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,K):s.framebufferTexture2D(36160,36096,3553,Z,0);else if(x.depthTexture.format===hi)Xe(x)?m.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,K):s.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function me(b){const x=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");qe(x.__webglFramebuffer,b)}else if(z){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]=s.createRenderbuffer(),xe(x.__webglDepthbuffer[Z],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),xe(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function Oe(b,x,z){const Z=n.get(b);x!==void 0&&se(Z.__webglFramebuffer,b,b.texture,36064,3553),z!==void 0&&me(b)}function ft(b){const x=b.texture,z=n.get(b),Z=n.get(x);b.addEventListener("dispose",q),b.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=x.version,o.memory.textures++);const K=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,Me=y(b)||a;if(K){z.__webglFramebuffer=[];for(let he=0;he<6;he++)z.__webglFramebuffer[he]=s.createFramebuffer()}else{if(z.__webglFramebuffer=s.createFramebuffer(),oe)if(i.drawBuffers){const he=b.texture;for(let V=0,de=he.length;V<de;V++){const ge=n.get(he[V]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Xe(b)===!1){const he=oe?x:[x];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let V=0;V<he.length;V++){const de=he[V];z.__webglColorRenderbuffer[V]=s.createRenderbuffer(),s.bindRenderbuffer(36161,z.__webglColorRenderbuffer[V]);const ge=r.convert(de.format,de.encoding),ve=r.convert(de.type),ue=F(de.internalFormat,ge,ve,de.encoding,b.isXRRenderTarget===!0),fe=ct(b);s.renderbufferStorageMultisample(36161,fe,ue,b.width,b.height),s.framebufferRenderbuffer(36160,36064+V,36161,z.__webglColorRenderbuffer[V])}s.bindRenderbuffer(36161,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,Z.__webglTexture),ce(34067,x,Me);for(let he=0;he<6;he++)se(z.__webglFramebuffer[he],b,x,36064,34069+he);C(x,Me)&&D(34067),t.unbindTexture()}else if(oe){const he=b.texture;for(let V=0,de=he.length;V<de;V++){const ge=he[V],ve=n.get(ge);t.bindTexture(3553,ve.__webglTexture),ce(3553,ge,Me),se(z.__webglFramebuffer,b,ge,36064+V,3553),C(ge,Me)&&D(3553)}t.unbindTexture()}else{let he=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,Z.__webglTexture),ce(he,x,Me),se(z.__webglFramebuffer,b,x,36064,he),C(x,Me)&&D(he),t.unbindTexture()}b.depthBuffer&&me(b)}function _t(b){const x=y(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0,K=z.length;Z<K;Z++){const oe=z[Z];if(C(oe,x)){const Me=b.isWebGLCubeRenderTarget?34067:3553,he=n.get(oe).__webglTexture;t.bindTexture(Me,he),D(Me),t.unbindTexture()}}}function pt(b){if(a&&b.samples>0&&Xe(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,Z=b.height;let K=16384;const oe=[],Me=b.stencilBuffer?33306:36096,he=n.get(b),V=b.isWebGLMultipleRenderTargets===!0;if(V)for(let de=0;de<x.length;de++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let de=0;de<x.length;de++){oe.push(36064+de),b.depthBuffer&&oe.push(Me);const ge=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ge===!1&&(b.depthBuffer&&(K|=256),b.stencilBuffer&&(K|=1024)),V&&s.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[de]),ge===!0&&(s.invalidateFramebuffer(36008,[Me]),s.invalidateFramebuffer(36009,[Me])),V){const ve=n.get(x[de]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ve,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,K,9728),g&&s.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let de=0;de<x.length;de++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,he.__webglColorRenderbuffer[de]);const ge=n.get(x[de]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,ge,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function ct(b){return Math.min(p,b.samples)}function Xe(b){const x=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function it(b){const x=o.render.frame;v.get(b)!==x&&(v.set(b,x),b.update())}function Ct(b,x){const z=b.encoding,Z=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Gs||z!==zn&&(z===Ke?a===!1?e.has("EXT_sRGB")===!0&&Z===kt?(b.format=Gs,b.minFilter=Vt,b.generateMipmaps=!1):x=zo.sRGBToLinear(x):(Z!==kt||K!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),x}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=$,this.setTexture2DArray=be,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=Oe,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Xe}function Qf(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Nn)return 5121;if(r===Hl)return 32819;if(r===kl)return 32820;if(r===Bl)return 5120;if(r===Gl)return 5122;if(r===Io)return 5123;if(r===Vl)return 5124;if(r===Ln)return 5125;if(r===Rn)return 5126;if(r===Ti)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Wl)return 6406;if(r===kt)return 6408;if(r===ql)return 6409;if(r===Xl)return 6410;if(r===Fn)return 6402;if(r===hi)return 34041;if(r===Gs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jl)return 6403;if(r===Yl)return 36244;if(r===Zl)return 33319;if(r===$l)return 33320;if(r===Jl)return 36249;if(r===zr||r===Or||r===Br||r===Gr)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Br)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ca||r===ua||r===ha||r===da)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ca)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ua)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ha)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fa||r===pa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fa)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ma||r===ga||r===_a||r===va||r===xa||r===Ma||r===Sa||r===ya||r===ba||r===wa||r===Ea||r===Ta||r===Aa||r===Pa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ma)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ga)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_a)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===va)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ma)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ya)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ba)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ea)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ta)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Aa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vr)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ql||r===Ca||r===La||r===Ra)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ca)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===La)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ra)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ri?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class ep extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class br extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tp={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const f of e.hand.values()){const u=t.getJointPose(f,n),l=this._getHandJoint(c,f);u!==null&&(l.matrix.fromArray(u.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.jointRadius=u.radius),l.visible=u!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=d.position.distanceTo(p.position),g=.02,v=.005;c.inputState.pinching&&m>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tp)))}return a!==null&&(a.visible=i!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class np extends Lt{constructor(e,t,n,i,r,o,a,h,c,d){if(d=d!==void 0?d:Fn,d!==Fn&&d!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Fn&&(n=Ln),n===void 0&&d===hi&&(n=ri),super(null,i,r,o,a,h,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=h!==void 0?h:Et,this.flipY=!1,this.generateMipmaps=!1}}class ip extends pi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",h=1,c=null,d=null,p=null,m=null,g=null,v=null;const f=t.getContextAttributes();let u=null,l=null;const _=[],w=[],y=new Set,T=new Map,C=new Ot;C.layers.enable(1),C.viewport=new tt;const D=new Ot;D.layers.enable(2),D.viewport=new tt;const F=[C,D],S=new ep;S.layers.enable(1),S.layers.enable(2);let E=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=_[G];return X===void 0&&(X=new hs,_[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=_[G];return X===void 0&&(X=new hs,_[G]=X),X.getGripSpace()},this.getHand=function(G){let X=_[G];return X===void 0&&(X=new hs,_[G]=X),X.getHandSpace()};function q(G){const X=w.indexOf(G.inputSource);if(X===-1)return;const ae=_[X];ae!==void 0&&ae.dispatchEvent({type:G.type,data:G.inputSource})}function I(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",U);for(let G=0;G<_.length;G++){const X=w[G];X!==null&&(w[G]=null,_[G].disconnect(X))}E=null,j=null,e.setRenderTarget(u),g=null,m=null,p=null,i=null,l=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",I),i.addEventListener("inputsourceschange",U),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:g}),l=new On(g.framebufferWidth,g.framebufferHeight,{format:kt,type:Nn,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let X=null,ae=null,ce=null;f.depth&&(ce=f.stencil?35056:33190,X=f.stencil?hi:Fn,ae=f.stencil?ri:Ln);const N={colorFormat:32856,depthFormat:ce,scaleFactor:r};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(N),i.updateRenderState({layers:[m]}),l=new On(m.textureWidth,m.textureHeight,{format:kt,type:Nn,depthTexture:new np(m.textureWidth,m.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const Te=e.properties.get(l);Te.__ignoreDepthValues=m.ignoreDepthValues}l.isXRRenderTarget=!0,this.setFoveation(h),c=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(G){for(let X=0;X<G.removed.length;X++){const ae=G.removed[X],ce=w.indexOf(ae);ce>=0&&(w[ce]=null,_[ce].disconnect(ae))}for(let X=0;X<G.added.length;X++){const ae=G.added[X];let ce=w.indexOf(ae);if(ce===-1){for(let Te=0;Te<_.length;Te++)if(Te>=w.length){w.push(ae),ce=Te;break}else if(w[Te]===null){w[Te]=ae,ce=Te;break}if(ce===-1)break}const N=_[ce];N&&N.connect(ae)}}const k=new P,Q=new P;function J(G,X,ae){k.setFromMatrixPosition(X.matrixWorld),Q.setFromMatrixPosition(ae.matrixWorld);const ce=k.distanceTo(Q),N=X.projectionMatrix.elements,Te=ae.projectionMatrix.elements,ye=N[14]/(N[10]-1),se=N[14]/(N[10]+1),xe=(N[9]+1)/N[5],qe=(N[9]-1)/N[5],me=(N[8]-1)/N[0],Oe=(Te[8]+1)/Te[0],ft=ye*me,_t=ye*Oe,pt=ce/(-me+Oe),ct=pt*-me;X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ct),G.translateZ(pt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Xe=ye+pt,it=se+pt,Ct=ft-ct,b=_t+(ce-ct),x=xe*se/it*Xe,z=qe*se/it*Xe;G.projectionMatrix.makePerspective(Ct,b,x,z,Xe,it),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;S.near=D.near=C.near=G.near,S.far=D.far=C.far=G.far,(E!==S.near||j!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,j=S.far);const X=G.parent,ae=S.cameras;W(S,X);for(let ce=0;ce<ae.length;ce++)W(ae[ce],X);ae.length===2?J(S,C,D):S.projectionMatrix.copy(C.projectionMatrix),ee(G,S,X)};function ee(G,X,ae){ae===null?G.matrix.copy(X.matrixWorld):(G.matrix.copy(ae.matrixWorld),G.matrix.invert(),G.matrix.multiply(X.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const ce=G.children;for(let N=0,Te=ce.length;N<Te;N++)ce[N].updateMatrixWorld(!0);G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Vs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(m===null&&g===null))return h},this.setFoveation=function(G){h=G,m!==null&&(m.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.getPlanes=function(){return y};let $=null;function be(G,X){if(d=X.getViewerPose(c||o),v=X,d!==null){const ae=d.views;g!==null&&(e.setRenderTargetFramebuffer(l,g.framebuffer),e.setRenderTarget(l));let ce=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let N=0;N<ae.length;N++){const Te=ae[N];let ye=null;if(g!==null)ye=g.getViewport(Te);else{const xe=p.getViewSubImage(m,Te);ye=xe.viewport,N===0&&(e.setRenderTargetTextures(l,xe.colorTexture,m.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(l))}let se=F[N];se===void 0&&(se=new Ot,se.layers.enable(N),se.viewport=new tt,F[N]=se),se.matrix.fromArray(Te.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Te.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ye.x,ye.y,ye.width,ye.height),N===0&&(S.matrix.copy(se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(se)}}for(let ae=0;ae<_.length;ae++){const ce=w[ae],N=_[ae];ce!==null&&N!==void 0&&N.update(ce,X,c||o)}if($&&$(G,X),X.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let ae=null;for(const ce of y)X.detectedPlanes.has(ce)||(ae===null&&(ae=[]),ae.push(ce));if(ae!==null)for(const ce of ae)y.delete(ce),T.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of X.detectedPlanes)if(!y.has(ce))y.add(ce),T.set(ce,X.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const N=T.get(ce);ce.lastChangedTime>N&&(T.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}v=null}const te=new $o;te.setAnimationLoop(be),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}}function rp(s,e){function t(u,l){u.matrixAutoUpdate===!0&&u.updateMatrix(),l.value.copy(u.matrix)}function n(u,l){l.color.getRGB(u.fogColor.value,qo(s)),l.isFog?(u.fogNear.value=l.near,u.fogFar.value=l.far):l.isFogExp2&&(u.fogDensity.value=l.density)}function i(u,l,_,w,y){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(u,l):l.isMeshToonMaterial?(r(u,l),p(u,l)):l.isMeshPhongMaterial?(r(u,l),d(u,l)):l.isMeshStandardMaterial?(r(u,l),m(u,l),l.isMeshPhysicalMaterial&&g(u,l,y)):l.isMeshMatcapMaterial?(r(u,l),v(u,l)):l.isMeshDepthMaterial?r(u,l):l.isMeshDistanceMaterial?(r(u,l),f(u,l)):l.isMeshNormalMaterial?r(u,l):l.isLineBasicMaterial?(o(u,l),l.isLineDashedMaterial&&a(u,l)):l.isPointsMaterial?h(u,l,_,w):l.isSpriteMaterial?c(u,l):l.isShadowMaterial?(u.color.value.copy(l.color),u.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(u,l){u.opacity.value=l.opacity,l.color&&u.diffuse.value.copy(l.color),l.emissive&&u.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(u.map.value=l.map,t(l.map,u.mapTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap,t(l.alphaMap,u.alphaMapTransform)),l.bumpMap&&(u.bumpMap.value=l.bumpMap,t(l.bumpMap,u.bumpMapTransform),u.bumpScale.value=l.bumpScale,l.side===Pt&&(u.bumpScale.value*=-1)),l.normalMap&&(u.normalMap.value=l.normalMap,t(l.normalMap,u.normalMapTransform),u.normalScale.value.copy(l.normalScale),l.side===Pt&&u.normalScale.value.negate()),l.displacementMap&&(u.displacementMap.value=l.displacementMap,t(l.displacementMap,u.displacementMapTransform),u.displacementScale.value=l.displacementScale,u.displacementBias.value=l.displacementBias),l.emissiveMap&&(u.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,u.emissiveMapTransform)),l.specularMap&&(u.specularMap.value=l.specularMap,t(l.specularMap,u.specularMapTransform)),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest);const _=e.get(l).envMap;if(_&&(u.envMap.value=_,u.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=l.reflectivity,u.ior.value=l.ior,u.refractionRatio.value=l.refractionRatio),l.lightMap){u.lightMap.value=l.lightMap;const w=s.useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=l.lightMapIntensity*w,t(l.lightMap,u.lightMapTransform)}l.aoMap&&(u.aoMap.value=l.aoMap,u.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,u.aoMapTransform))}function o(u,l){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,l.map&&(u.map.value=l.map,t(l.map,u.mapTransform))}function a(u,l){u.dashSize.value=l.dashSize,u.totalSize.value=l.dashSize+l.gapSize,u.scale.value=l.scale}function h(u,l,_,w){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,u.size.value=l.size*_,u.scale.value=w*.5,l.map&&(u.map.value=l.map,t(l.map,u.uvTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest)}function c(u,l){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,u.rotation.value=l.rotation,l.map&&(u.map.value=l.map,t(l.map,u.mapTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest)}function d(u,l){u.specular.value.copy(l.specular),u.shininess.value=Math.max(l.shininess,1e-4)}function p(u,l){l.gradientMap&&(u.gradientMap.value=l.gradientMap)}function m(u,l){u.metalness.value=l.metalness,l.metalnessMap&&(u.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,u.metalnessMapTransform)),u.roughness.value=l.roughness,l.roughnessMap&&(u.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,u.roughnessMapTransform)),e.get(l).envMap&&(u.envMapIntensity.value=l.envMapIntensity)}function g(u,l,_){u.ior.value=l.ior,l.sheen>0&&(u.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),u.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(u.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,u.sheenColorMapTransform)),l.sheenRoughnessMap&&(u.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,u.sheenRoughnessMapTransform))),l.clearcoat>0&&(u.clearcoat.value=l.clearcoat,u.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(u.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,u.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(u.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Pt&&u.clearcoatNormalScale.value.negate())),l.iridescence>0&&(u.iridescence.value=l.iridescence,u.iridescenceIOR.value=l.iridescenceIOR,u.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(u.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,u.iridescenceMapTransform)),l.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),l.transmission>0&&(u.transmission.value=l.transmission,u.transmissionSamplerMap.value=_.texture,u.transmissionSamplerSize.value.set(_.width,_.height),l.transmissionMap&&(u.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,u.transmissionMapTransform)),u.thickness.value=l.thickness,l.thicknessMap&&(u.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=l.attenuationDistance,u.attenuationColor.value.copy(l.attenuationColor)),u.specularIntensity.value=l.specularIntensity,u.specularColor.value.copy(l.specularColor),l.specularColorMap&&(u.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,u.specularColorMapTransform)),l.specularIntensityMap&&(u.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,l){l.matcap&&(u.matcap.value=l.matcap)}function f(u,l){const _=e.get(l).light;u.referencePosition.value.setFromMatrixPosition(_.matrixWorld),u.nearDistance.value=_.shadow.camera.near,u.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sp(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function h(_,w){const y=w.program;n.uniformBlockBinding(_,y)}function c(_,w){let y=i[_.id];y===void 0&&(v(_),y=d(_),i[_.id]=y,_.addEventListener("dispose",u));const T=w.program;n.updateUBOMapping(_,T);const C=e.render.frame;r[_.id]!==C&&(m(_),r[_.id]=C)}function d(_){const w=p();_.__bindingPointIndex=w;const y=s.createBuffer(),T=_.__size,C=_.usage;return s.bindBuffer(35345,y),s.bufferData(35345,T,C),s.bindBuffer(35345,null),s.bindBufferBase(35345,w,y),y}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(_){const w=i[_.id],y=_.uniforms,T=_.__cache;s.bindBuffer(35345,w);for(let C=0,D=y.length;C<D;C++){const F=y[C];if(g(F,C,T)===!0){const S=F.__offset,E=Array.isArray(F.value)?F.value:[F.value];let j=0;for(let q=0;q<E.length;q++){const I=E[q],U=f(I);typeof I=="number"?(F.__data[0]=I,s.bufferSubData(35345,S+j,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=I.elements[0],F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=I.elements[0],F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=I.elements[0]):(I.toArray(F.__data,j),j+=U.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,S,F.__data)}}s.bindBuffer(35345,null)}function g(_,w,y){const T=_.value;if(y[w]===void 0){if(typeof T=="number")y[w]=T;else{const C=Array.isArray(T)?T:[T],D=[];for(let F=0;F<C.length;F++)D.push(C[F].clone());y[w]=D}return!0}else if(typeof T=="number"){if(y[w]!==T)return y[w]=T,!0}else{const C=Array.isArray(y[w])?y[w]:[y[w]],D=Array.isArray(T)?T:[T];for(let F=0;F<C.length;F++){const S=C[F];if(S.equals(D[F])===!1)return S.copy(D[F]),!0}}return!1}function v(_){const w=_.uniforms;let y=0;const T=16;let C=0;for(let D=0,F=w.length;D<F;D++){const S=w[D],E={boundary:0,storage:0},j=Array.isArray(S.value)?S.value:[S.value];for(let q=0,I=j.length;q<I;q++){const U=j[q],k=f(U);E.boundary+=k.boundary,E.storage+=k.storage}if(S.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,D>0){C=y%T;const q=T-C;C!==0&&q-E.boundary<0&&(y+=T-C,S.__offset=y)}y+=E.storage}return C=y%T,C>0&&(y+=T-C),_.__size=y,_.__cache={},this}function f(_){const w={boundary:0,storage:0};return typeof _=="number"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function u(_){const w=_.target;w.removeEventListener("dispose",u);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function l(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:h,update:c,dispose:l}}function ap(){const s=Pi("canvas");return s.style.display="block",s}class tl{constructor(e={}){const{canvas:t=ap(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;let g=null,v=null;const f=[],u=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=zn,this.useLegacyLights=!0,this.toneMapping=hn,this.toneMappingExposure=1;const l=this;let _=!1,w=0,y=0,T=null,C=-1,D=null;const F=new tt,S=new tt;let E=null,j=t.width,q=t.height,I=1,U=null,k=null;const Q=new tt(0,0,j,q),J=new tt(0,0,j,q);let W=!1;const ee=new Ys;let $=!1,be=!1,te=null;const G=new at,X=new P,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return T===null?I:1}let N=n;function Te(M,R){for(let O=0;O<M.length;O++){const L=M[O],H=t.getContext(L,R);if(H!==null)return H}return null}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qs}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),N===null){const R=["webgl2","webgl","experimental-webgl"];if(l.isWebGL1Renderer===!0&&R.shift(),N=Te(R,M),N===null)throw Te(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ye,se,xe,qe,me,Oe,ft,_t,pt,ct,Xe,it,Ct,b,x,z,Z,K,oe,Me,he,V,de,ge;function ve(){ye=new gd(N),se=new cd(N,ye,e),ye.init(se),V=new Qf(N,ye,se),xe=new Jf(N,ye,se),qe=new xd,me=new zf,Oe=new Kf(N,ye,xe,me,se,V,qe),ft=new hd(l),_t=new md(l),pt=new Lc(N,se),de=new od(N,ye,pt,se),ct=new _d(N,pt,qe,de),Xe=new bd(N,ct,pt,qe),oe=new yd(N,se,Oe),z=new ud(me),it=new Nf(l,ft,_t,ye,se,de,z),Ct=new rp(l,me),b=new Bf,x=new qf(ye,se),K=new ad(l,ft,_t,xe,Xe,m,h),Z=new $f(l,Xe,se),ge=new sp(N,qe,se,xe),Me=new ld(N,ye,qe,se),he=new vd(N,ye,qe,se),qe.programs=it.programs,l.capabilities=se,l.extensions=ye,l.properties=me,l.renderLists=b,l.shadowMap=Z,l.state=xe,l.info=qe}ve();const ue=new ip(l,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(j,q,!1))},this.getSize=function(M){return M.set(j,q)},this.setSize=function(M,R,O=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,q=R,t.width=Math.floor(M*I),t.height=Math.floor(R*I),O===!0&&(t.style.width=M+"px",t.style.height=R+"px"),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(j*I,q*I).floor()},this.setDrawingBufferSize=function(M,R,O){j=M,q=R,I=O,t.width=Math.floor(M*O),t.height=Math.floor(R*O),this.setViewport(0,0,M,R)},this.getCurrentViewport=function(M){return M.copy(F)},this.getViewport=function(M){return M.copy(Q)},this.setViewport=function(M,R,O,L){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,R,O,L),xe.viewport(F.copy(Q).multiplyScalar(I).floor())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,R,O,L){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,R,O,L),xe.scissor(S.copy(J).multiplyScalar(I).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(M){xe.setScissorTest(W=M)},this.setOpaqueSort=function(M){U=M},this.setTransparentSort=function(M){k=M},this.getClearColor=function(M){return M.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(M=!0,R=!0,O=!0){let L=0;M&&(L|=16384),R&&(L|=256),O&&(L|=1024),N.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),b.dispose(),x.dispose(),me.dispose(),ft.dispose(),_t.dispose(),Xe.dispose(),de.dispose(),ge.dispose(),it.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",pe),ue.removeEventListener("sessionend",Qe),te&&(te.dispose(),te=null),nt.stop()};function fe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const M=qe.autoReset,R=Z.enabled,O=Z.autoUpdate,L=Z.needsUpdate,H=Z.type;ve(),qe.autoReset=M,Z.enabled=R,Z.autoUpdate=O,Z.needsUpdate=L,Z.type=H}function Ye(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){const R=M.target;R.removeEventListener("dispose",rt),A(R)}function A(M){B(M),me.remove(M)}function B(M){const R=me.get(M).programs;R!==void 0&&(R.forEach(function(O){it.releaseProgram(O)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,O,L,H,_e){R===null&&(R=ae);const Se=H.isMesh&&H.matrixWorld.determinant()<0,we=sl(M,R,O,L,H);xe.setMaterial(L,Se);let De=O.index,Ne=1;L.wireframe===!0&&(De=ct.getWireframeAttribute(O),Ne=2);const ze=O.drawRange,Be=O.attributes.position;let Ze=ze.start*Ne,yt=(ze.start+ze.count)*Ne;_e!==null&&(Ze=Math.max(Ze,_e.start*Ne),yt=Math.min(yt,(_e.start+_e.count)*Ne)),De!==null?(Ze=Math.max(Ze,0),yt=Math.min(yt,De.count)):Be!=null&&(Ze=Math.max(Ze,0),yt=Math.min(yt,Be.count));const Wt=yt-Ze;if(Wt<0||Wt===1/0)return;de.setup(H,L,we,O,De);let Sn,ot=Me;if(De!==null&&(Sn=pt.get(De),ot=he,ot.setIndex(Sn)),H.isMesh)L.wireframe===!0?(xe.setLineWidth(L.wireframeLinewidth*ce()),ot.setMode(1)):ot.setMode(4);else if(H.isLine){let He=L.linewidth;He===void 0&&(He=1),xe.setLineWidth(He*ce()),H.isLineSegments?ot.setMode(1):H.isLineLoop?ot.setMode(2):ot.setMode(3)}else H.isPoints?ot.setMode(0):H.isSprite&&ot.setMode(4);if(H.isInstancedMesh)ot.renderInstances(Ze,Wt,H.count);else if(O.isInstancedBufferGeometry){const He=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Dr=Math.min(O.instanceCount,He);ot.renderInstances(Ze,Wt,Dr)}else ot.render(Ze,Wt)},this.compile=function(M,R){function O(L,H,_e){L.transparent===!0&&L.side===Ht&&L.forceSinglePass===!1?(L.side=Pt,L.needsUpdate=!0,tr(L,H,_e),L.side=xn,L.needsUpdate=!0,tr(L,H,_e),L.side=Ht):tr(L,H,_e)}v=x.get(M),v.init(),u.push(v),M.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(v.pushLight(L),L.castShadow&&v.pushShadow(L))}),v.setupLights(l.useLegacyLights),M.traverse(function(L){const H=L.material;if(H)if(Array.isArray(H))for(let _e=0;_e<H.length;_e++){const Se=H[_e];O(Se,M,L)}else O(H,M,L)}),u.pop(),v=null};let Y=null;function le(M){Y&&Y(M)}function pe(){nt.stop()}function Qe(){nt.start()}const nt=new $o;nt.setAnimationLoop(le),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(M){Y=M,ue.setAnimationLoop(M),M===null?nt.stop():nt.start()},ue.addEventListener("sessionstart",pe),ue.addEventListener("sessionend",Qe),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(R),R=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(l,M,R,T),v=x.get(M,u.length),v.init(),u.push(v),G.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ee.setFromProjectionMatrix(G),be=this.localClippingEnabled,$=z.init(this.clippingPlanes,be),g=b.get(M,f.length),g.init(),f.push(g),xt(M,R,0,l.sortObjects),g.finish(),l.sortObjects===!0&&g.sort(U,k),$===!0&&z.beginShadows();const O=v.state.shadowsArray;if(Z.render(O,M,R),$===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(g,M),v.setupLights(l.useLegacyLights),R.isArrayCamera){const L=R.cameras;for(let H=0,_e=L.length;H<_e;H++){const Se=L[H];dn(g,M,Se,Se.viewport)}}else dn(g,M,R);T!==null&&(Oe.updateMultisampleRenderTarget(T),Oe.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(l,M,R),de.resetDefaultState(),C=-1,D=null,u.pop(),u.length>0?v=u[u.length-1]:v=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function xt(M,R,O,L){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){L&&X.setFromMatrixPosition(M.matrixWorld).applyMatrix4(G);const Se=Xe.update(M),we=M.material;we.visible&&g.push(M,Se,we,O,X.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==qe.render.frame&&(M.skeleton.update(),M.skeleton.frame=qe.render.frame),!M.frustumCulled||ee.intersectsObject(M))){L&&X.setFromMatrixPosition(M.matrixWorld).applyMatrix4(G);const Se=Xe.update(M),we=M.material;if(Array.isArray(we)){const De=Se.groups;for(let Ne=0,ze=De.length;Ne<ze;Ne++){const Be=De[Ne],Ze=we[Be.materialIndex];Ze&&Ze.visible&&g.push(M,Se,Ze,O,X.z,Be)}}else we.visible&&g.push(M,Se,we,O,X.z,null)}}const _e=M.children;for(let Se=0,we=_e.length;Se<we;Se++)xt(_e[Se],R,O,L)}function dn(M,R,O,L){const H=M.opaque,_e=M.transmissive,Se=M.transparent;v.setupLightsView(O),$===!0&&z.setGlobalState(l.clippingPlanes,O),_e.length>0&&st(H,_e,R,O),L&&xe.viewport(F.copy(L)),H.length>0&&Bt(H,R,O),_e.length>0&&Bt(_e,R,O),Se.length>0&&Bt(Se,R,O),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function st(M,R,O,L){if(te===null){const we=se.isWebGL2;te=new On(1024,1024,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ti:Nn,minFilter:ui,samples:we&&a===!0?4:0})}const H=l.getRenderTarget();l.setRenderTarget(te),l.clear();const _e=l.toneMapping;l.toneMapping=hn,Bt(M,O,L),Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te);let Se=!1;for(let we=0,De=R.length;we<De;we++){const Ne=R[we],ze=Ne.object,Be=Ne.geometry,Ze=Ne.material,yt=Ne.group;if(Ze.side===Ht&&ze.layers.test(L.layers)){const Wt=Ze.side;Ze.side=Pt,Ze.needsUpdate=!0,Kt(ze,O,L,Be,Ze,yt),Ze.side=Wt,Ze.needsUpdate=!0,Se=!0}}Se===!0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te)),l.setRenderTarget(H),l.toneMapping=_e}function Bt(M,R,O){const L=R.isScene===!0?R.overrideMaterial:null;for(let H=0,_e=M.length;H<_e;H++){const Se=M[H],we=Se.object,De=Se.geometry,Ne=L===null?Se.material:L,ze=Se.group;we.layers.test(O.layers)&&Kt(we,R,O,De,Ne,ze)}}function Kt(M,R,O,L,H,_e){M.onBeforeRender(l,R,O,L,H,_e),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(l,R,O,L,M,_e),H.transparent===!0&&H.side===Ht&&H.forceSinglePass===!1?(H.side=Pt,H.needsUpdate=!0,l.renderBufferDirect(O,R,L,H,M,_e),H.side=xn,H.needsUpdate=!0,l.renderBufferDirect(O,R,L,H,M,_e),H.side=Ht):l.renderBufferDirect(O,R,L,H,M,_e),M.onAfterRender(l,R,O,L,H,_e)}function tr(M,R,O){R.isScene!==!0&&(R=ae);const L=me.get(M),H=v.state.lights,_e=v.state.shadowsArray,Se=H.state.version,we=it.getParameters(M,H.state,_e,R,O),De=it.getProgramCacheKey(we);let Ne=L.programs;L.environment=M.isMeshStandardMaterial?R.environment:null,L.fog=R.fog,L.envMap=(M.isMeshStandardMaterial?_t:ft).get(M.envMap||L.environment),Ne===void 0&&(M.addEventListener("dispose",rt),Ne=new Map,L.programs=Ne);let ze=Ne.get(De);if(ze!==void 0){if(L.currentProgram===ze&&L.lightsStateVersion===Se)return Qs(M,we),ze}else we.uniforms=it.getUniforms(M),M.onBuild(O,we,l),M.onBeforeCompile(we,l),ze=it.acquireProgram(we,De),Ne.set(De,ze),L.uniforms=we.uniforms;const Be=L.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=z.uniform),Qs(M,we),L.needsLights=ol(M),L.lightsStateVersion=Se,L.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.directionalShadowMap.value=H.state.directionalShadowMap,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotShadowMap.value=H.state.spotShadowMap,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMap.value=H.state.pointShadowMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ze=ze.getUniforms(),yt=Tr.seqWithValue(Ze.seq,Be);return L.currentProgram=ze,L.uniformsList=yt,ze}function Qs(M,R){const O=me.get(M);O.outputEncoding=R.outputEncoding,O.instancing=R.instancing,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function sl(M,R,O,L,H){R.isScene!==!0&&(R=ae),Oe.resetTextureUnits();const _e=R.fog,Se=L.isMeshStandardMaterial?R.environment:null,we=T===null?l.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:zn,De=(L.isMeshStandardMaterial?_t:ft).get(L.envMap||Se),Ne=L.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ze=!!L.normalMap&&!!O.attributes.tangent,Be=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,yt=!!O.morphAttributes.color,Wt=L.toneMapped?l.toneMapping:hn,Sn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ot=Sn!==void 0?Sn.length:0,He=me.get(L),Dr=v.state.lights;if($===!0&&(be===!0||M!==D)){const It=M===D&&L.id===C;z.setState(L,M,It)}let mt=!1;L.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Dr.state.version||He.outputEncoding!==we||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||He.envMap!==De||L.fog===!0&&He.fog!==_e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==z.numPlanes||He.numIntersection!==z.numIntersection)||He.vertexAlphas!==Ne||He.vertexTangents!==ze||He.morphTargets!==Be||He.morphNormals!==Ze||He.morphColors!==yt||He.toneMapping!==Wt||se.isWebGL2===!0&&He.morphTargetsCount!==ot)&&(mt=!0):(mt=!0,He.__version=L.version);let yn=He.currentProgram;mt===!0&&(yn=tr(L,R,H));let ea=!1,_i=!1,Ir=!1;const bt=yn.getUniforms(),bn=He.uniforms;if(xe.useProgram(yn.program)&&(ea=!0,_i=!0,Ir=!0),L.id!==C&&(C=L.id,_i=!0),ea||D!==M){if(bt.setValue(N,"projectionMatrix",M.projectionMatrix),se.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),D!==M&&(D=M,_i=!0,Ir=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const It=bt.map.cameraPosition;It!==void 0&&It.setValue(N,X.setFromMatrixPosition(M.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&bt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||H.isSkinnedMesh)&&bt.setValue(N,"viewMatrix",M.matrixWorldInverse)}if(H.isSkinnedMesh){bt.setOptional(N,H,"bindMatrix"),bt.setOptional(N,H,"bindMatrixInverse");const It=H.skeleton;It&&(se.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),bt.setValue(N,"boneTexture",It.boneTexture,Oe),bt.setValue(N,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ur=O.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0&&se.isWebGL2===!0)&&oe.update(H,O,yn),(_i||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,bt.setValue(N,"receiveShadow",H.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(bn.envMap.value=De,bn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),_i&&(bt.setValue(N,"toneMappingExposure",l.toneMappingExposure),He.needsLights&&al(bn,Ir),_e&&L.fog===!0&&Ct.refreshFogUniforms(bn,_e),Ct.refreshMaterialUniforms(bn,L,I,q,te),Tr.upload(N,He.uniformsList,bn,Oe)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Tr.upload(N,He.uniformsList,bn,Oe),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&bt.setValue(N,"center",H.center),bt.setValue(N,"modelViewMatrix",H.modelViewMatrix),bt.setValue(N,"normalMatrix",H.normalMatrix),bt.setValue(N,"modelMatrix",H.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const It=L.uniformsGroups;for(let Fr=0,ll=It.length;Fr<ll;Fr++)if(se.isWebGL2){const ta=It[Fr];ge.update(ta,yn),ge.bind(ta,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function al(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function ol(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,R,O){me.get(M.texture).__webglTexture=R,me.get(M.depthTexture).__webglTexture=O;const L=me.get(M);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=O===void 0,L.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,R){const O=me.get(M);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,O=0){T=M,w=R,y=O;let L=!0,H=null,_e=!1,Se=!1;if(M){const De=me.get(M);De.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),L=!1):De.__webglFramebuffer===void 0?Oe.setupRenderTarget(M):De.__hasExternalTextures&&Oe.rebindTextures(M,me.get(M.texture).__webglTexture,me.get(M.depthTexture).__webglTexture);const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);const ze=me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(H=ze[R],_e=!0):se.isWebGL2&&M.samples>0&&Oe.useMultisampledRTT(M)===!1?H=me.get(M).__webglMultisampledFramebuffer:H=ze,F.copy(M.viewport),S.copy(M.scissor),E=M.scissorTest}else F.copy(Q).multiplyScalar(I).floor(),S.copy(J).multiplyScalar(I).floor(),E=W;if(xe.bindFramebuffer(36160,H)&&se.drawBuffers&&L&&xe.drawBuffers(M,H),xe.viewport(F),xe.scissor(S),xe.setScissorTest(E),_e){const De=me.get(M.texture);N.framebufferTexture2D(36160,36064,34069+R,De.__webglTexture,O)}else if(Se){const De=me.get(M.texture),Ne=R||0;N.framebufferTextureLayer(36160,36064,De.__webglTexture,O||0,Ne)}C=-1},this.readRenderTargetPixels=function(M,R,O,L,H,_e,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){xe.bindFramebuffer(36160,we);try{const De=M.texture,Ne=De.format,ze=De.type;if(Ne!==kt&&V.convert(Ne)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===Ti&&(ye.has("EXT_color_buffer_half_float")||se.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ze!==Nn&&V.convert(ze)!==N.getParameter(35738)&&!(ze===Rn&&(se.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-L&&O>=0&&O<=M.height-H&&N.readPixels(R,O,L,H,V.convert(Ne),V.convert(ze),_e)}finally{const De=T!==null?me.get(T).__webglFramebuffer:null;xe.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(M,R,O=0){const L=Math.pow(2,-O),H=Math.floor(R.image.width*L),_e=Math.floor(R.image.height*L);Oe.setTexture2D(R,0),N.copyTexSubImage2D(3553,O,0,0,M.x,M.y,H,_e),xe.unbindTexture()},this.copyTextureToTexture=function(M,R,O,L=0){const H=R.image.width,_e=R.image.height,Se=V.convert(O.format),we=V.convert(O.type);Oe.setTexture2D(O,0),N.pixelStorei(37440,O.flipY),N.pixelStorei(37441,O.premultiplyAlpha),N.pixelStorei(3317,O.unpackAlignment),R.isDataTexture?N.texSubImage2D(3553,L,M.x,M.y,H,_e,Se,we,R.image.data):R.isCompressedTexture?N.compressedTexSubImage2D(3553,L,M.x,M.y,R.mipmaps[0].width,R.mipmaps[0].height,Se,R.mipmaps[0].data):N.texSubImage2D(3553,L,M.x,M.y,Se,we,R.image),L===0&&O.generateMipmaps&&N.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,R,O,L,H=0){if(l.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=M.max.x-M.min.x+1,Se=M.max.y-M.min.y+1,we=M.max.z-M.min.z+1,De=V.convert(L.format),Ne=V.convert(L.type);let ze;if(L.isData3DTexture)Oe.setTexture3D(L,0),ze=32879;else if(L.isDataArrayTexture)Oe.setTexture2DArray(L,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,L.flipY),N.pixelStorei(37441,L.premultiplyAlpha),N.pixelStorei(3317,L.unpackAlignment);const Be=N.getParameter(3314),Ze=N.getParameter(32878),yt=N.getParameter(3316),Wt=N.getParameter(3315),Sn=N.getParameter(32877),ot=O.isCompressedTexture?O.mipmaps[0]:O.image;N.pixelStorei(3314,ot.width),N.pixelStorei(32878,ot.height),N.pixelStorei(3316,M.min.x),N.pixelStorei(3315,M.min.y),N.pixelStorei(32877,M.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(ze,H,R.x,R.y,R.z,_e,Se,we,De,Ne,ot.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ze,H,R.x,R.y,R.z,_e,Se,we,De,ot.data)):N.texSubImage3D(ze,H,R.x,R.y,R.z,_e,Se,we,De,Ne,ot),N.pixelStorei(3314,Be),N.pixelStorei(32878,Ze),N.pixelStorei(3316,yt),N.pixelStorei(3315,Wt),N.pixelStorei(32877,Sn),H===0&&L.generateMipmaps&&N.generateMipmap(ze),xe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){w=0,y=0,T=null,xe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class op extends tl{}op.prototype.isWebGL1Renderer=!0;class nl extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class il extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vo=new at,ks=new Go,wr=new Cr,Er=new P;class lp extends ut{constructor(e=new Jt,t=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=r,e.ray.intersectsSphere(wr)===!1)return;vo.copy(i).invert(),ks.copy(e.ray).applyMatrix4(vo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=n.index,p=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=m,f=g;v<f;v++){const u=c.getX(v);Er.fromBufferAttribute(p,u),xo(Er,u,h,i,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=m,f=g;v<f;v++)Er.fromBufferAttribute(p,v),xo(Er,v,h,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xo(s,e,t,n,i,r,o){const a=ks.distanceSqToPoint(s);if(a<t){const h=new P;ks.closestPointToPoint(s,h),h.applyMatrix4(n);const c=i.ray.origin.distanceTo(h);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:h,index:e,face:null,object:o})}}class Js extends Jt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],h=[],c=[],d=[];let p=e;const m=(t-e)/i,g=new P,v=new We;for(let f=0;f<=i;f++){for(let u=0;u<=n;u++){const l=r+u/n*o;g.x=p*Math.cos(l),g.y=p*Math.sin(l),h.push(g.x,g.y,g.z),c.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,d.push(v.x,v.y)}p+=m}for(let f=0;f<i;f++){const u=f*(n+1);for(let l=0;l<n;l++){const _=l+u,w=_,y=_+n+1,T=_+n+2,C=_+1;a.push(w,y,C),a.push(y,T,C)}}this.setIndex(a),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vn extends Jt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(o+a,Math.PI);let c=0;const d=[],p=new P,m=new P,g=[],v=[],f=[],u=[];for(let l=0;l<=n;l++){const _=[],w=l/n;let y=0;l===0&&o===0?y=.5/t:l===n&&h===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const C=T/t;p.x=-e*Math.cos(i+C*r)*Math.sin(o+w*a),p.y=e*Math.cos(o+w*a),p.z=e*Math.sin(i+C*r)*Math.sin(o+w*a),v.push(p.x,p.y,p.z),m.copy(p).normalize(),f.push(m.x,m.y,m.z),u.push(C+y,1-w),_.push(c++)}d.push(_)}for(let l=0;l<n;l++)for(let _=0;_<t;_++){const w=d[l][_+1],y=d[l][_],T=d[l+1][_],C=d[l+1][_+1];(l!==0||o>0)&&g.push(w,y,C),(l!==n-1||h<Math.PI)&&g.push(y,T,C)}this.setIndex(g),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ks extends mi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Mo={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class cp{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,h;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){const p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=c.length;p<m;p+=2){const g=c[p],v=c[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return v}return null}}}const up=new cp;class rl{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class hp extends rl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Mo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Pi("img");function h(){d(),Mo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(p){d(),i&&i(p),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",h,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",h,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class fi extends rl{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,o=new hp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class dp extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ds=new at,So=new P,yo=new P;class fp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;So.setFromMatrixPosition(e.matrixWorld),t.position.copy(So),yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yo),t.updateMatrixWorld(),ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bo=new at,yi=new P,fs=new P;class pp extends fp{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(yi),fs.copy(n.position),fs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fs),n.updateMatrixWorld(),i.makeTranslation(-yi.x,-yi.y,-yi.z),bo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo)}}class mp extends dp{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wo(){return(typeof performance>"u"?Date:performance).now()}class Dt{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qs);const ne=Math.PI,_p=Math.acos,ps=Math.random;function ie(s){return s<.5?16*s*s*s*s*s:1-Math.pow(-2*s+2,5)/2}const vp=new il({color:16777215}),Eo=new Jt;function xp({fromDistance:s=100,forDistance:e=100,amount:t=100}){const n=new Dt,i=new P,r=[];for(let o=0;o<t;o++)n.set(ps()*e+s,_p(ps()*2-1),ps()*2*ne),i.setFromSpherical(n),r.push(...i);return Eo.setAttribute("position",new Rt(r,3)),new lp(Eo,vp)}const Mp=`uniform float time;varying vec3 vPosition;vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}float mod289(float x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}float permute(float x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float taylorInvSqrt(float r){return 1.79284291400159-0.85373472095314*r;}vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}
#define F4 0.309016994374947451
float snoise(vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(F4)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}float fbm(vec4 p){float sum=0.;float amp=1.;float scale=1.;for(int i=0;i<8;i++){sum+=snoise(p*scale)*amp;p.w+=100.;amp*=0.9;scale*=2.;}return(sum);}void main(){vec4 p=vec4(vPosition*4.,time*0.02);float noisy=fbm(p);vec4 p1=vec4(vPosition*2.,time*0.05);float spots=max(snoise(p1),0.);gl_FragColor=vec4(noisy);gl_FragColor*=mix(1.,spots,0.6);}`,Sp="uniform float time;varying vec3 vPosition;void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",yp="uniform float time;varying vec2 vUv;varying vec3 vPosition;varying vec3 vLayer0;varying vec3 vLayer1;varying vec3 vLayer2;varying vec3 eyeVector;varying vec3 vNormal;mat2 rotate(float a){float s=sin(a);float c=cos(a);return mat2(c,-s,s,c);}void main(){vNormal=normal;vec4 worldPosition=modelMatrix*vec4(position,1.0);eyeVector=normalize(worldPosition.xyz-cameraPosition);float t=time*0.002;mat2 rot=rotate(t);vec3 p0=position;p0.yz=rot*p0.yz;vLayer0=p0;mat2 rot1=rotate(t*1.5+10.);vec3 p1=position;p1.xz=rot1*p1.xz;vLayer1=p1;mat2 rot2=rotate(t*2.+30.);vec3 p2=position;p2.xy=rot2*p2.xy;vLayer2=p2;vUv=uv;vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",bp="uniform samplerCube uPerlin;varying vec3 vNormal;varying vec3 eyeVector;varying vec3 vLayer0;varying vec3 vLayer1;varying vec3 vLayer2;float Fresnel(vec3 eyeVector,vec3 worldNromal){return pow(1.0+dot(eyeVector,worldNromal),3.0);}vec3 brightnessToColor(float b){b*=0.25;return(vec3(b,b*b,b*b*b*b)/0.25)*0.8;}float supersun(){float sum=0.;sum+=textureCube(uPerlin,vLayer0).r;sum+=textureCube(uPerlin,vLayer1).r;sum+=textureCube(uPerlin,vLayer2).r;sum*=0.3;return sum;}void main(){float brightness=supersun();brightness=brightness*4.+1.;float fres=Fresnel(eyeVector,vNormal);brightness+=pow(fres,0.8);vec3 col=brightnessToColor(brightness);gl_FragColor=vec4(col,1.);}",wp="uniform samplerCube uPerlin;varying vec3 vPosition;varying vec3 vNormal;varying vec3 eyeVector;varying vec3 vLayer0;varying vec3 vLayer1;varying vec3 vLayer2;float Fresnel(vec3 eyeVector,vec3 worldNormal){return pow(1.0+dot(eyeVector,worldNormal),3.0);}vec3 brightnessToColor(float b){b*=0.25;return(vec3(b,b*b,b*b*b*b)/0.25)*0.1;}void main(){float radial=1.-vPosition.z;radial*=radial*radial;float brightness=1.+radial*0.83;gl_FragColor.rgb=brightnessToColor(brightness)*radial;gl_FragColor.a=radial;}",Ep="varying vec3 vPosition;varying vec3 vNormal;void main(){vNormal=normal;vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}";var ai,Ci,oi,Li,Ri,Di,Ii,Ui,Fi,Ni,In,zi;class Tp{constructor(e=1,t=32){$e(this,ai,void 0);$e(this,Ci,void 0);$e(this,oi,void 0);$e(this,Li,void 0);$e(this,Ri,void 0);$e(this,Di,void 0);$e(this,Ii,void 0);$e(this,Ui,void 0);$e(this,Fi,void 0);$e(this,Ni,void 0);$e(this,In,void 0);$e(this,zi,void 0);this.radius=e,this.sphereSegments=t,this.cameraFocusPoint=new P,this.cameraPosition=new Dt,Je(this,ai,new Zo(256,{format:kt,generateMipmaps:!0,minFilter:ui,encoding:Ke})),Je(this,Ci,new jo(this.radius-this.radius/2,this.radius+this.radius/2,ke(this,ai))),Je(this,oi,new rn({side:Ht,uniforms:{time:{value:0}},vertexShader:Sp,fragmentShader:Mp})),Je(this,Li,new vn(this.radius,this.sphereSegments,this.sphereSegments/2)),Je(this,Ri,new At(ke(this,Li),ke(this,oi))),Je(this,Di,new nl().add(ke(this,Ri))),Je(this,Ii,new mp(16777215,1)),Je(this,Ui,new rn({side:Pt,blending:Ar,vertexShader:Ep,fragmentShader:wp})),Je(this,Fi,new vn(this.radius*1.2,this.sphereSegments,this.sphereSegments/2)),Je(this,Ni,new At(ke(this,Fi),ke(this,Ui))),this.corona=new ut().add(ke(this,Ni)),Je(this,In,new rn({side:Ht,uniforms:{time:{value:0},uPerlin:{value:null}},vertexShader:yp,fragmentShader:bp})),Je(this,zi,new vn(this.radius,this.sphereSegments,this.sphereSegments/2)),this.mesh=new At(ke(this,zi),ke(this,In)),this.object=new ut().add(this.mesh,ke(this,Ii))}update(e,t){ke(this,Ci).update(e,ke(this,Di)),ke(this,oi).uniforms.time.value=t,ke(this,In).uniforms.time.value=t,ke(this,In).uniforms.uPerlin.value=ke(this,ai).texture}}ai=new WeakMap,Ci=new WeakMap,oi=new WeakMap,Li=new WeakMap,Ri=new WeakMap,Di=new WeakMap,Ii=new WeakMap,Ui=new WeakMap,Fi=new WeakMap,Ni=new WeakMap,In=new WeakMap,zi=new WeakMap;var Oi,Bi,Gi,Vi;class Mn{constructor({radius:e=1,sphereSegments:t=32,sphericalPosition:n,textureURL:i,specularMapURL:r,shininess:o=30}){$e(this,Oi,void 0);$e(this,Bi,void 0);$e(this,Gi,void 0);$e(this,Vi,void 0);this.radius=e,this.sphericalPosition=n,this.cameraFocusPoint=new P,this.cameraPosition=new Dt,Je(this,Oi,new fi().load(i)),Je(this,Bi,new fi().load(r)),Je(this,Gi,new Ks({map:ke(this,Oi),specularMap:ke(this,Bi),shininess:o})),Je(this,Vi,new vn(e,t,t/2)),this.mesh=new At(ke(this,Vi),ke(this,Gi)),this.object=new ut,this.object.add(this.mesh),this.object.position.setFromSpherical(this.sphericalPosition)}}Oi=new WeakMap,Bi=new WeakMap,Gi=new WeakMap,Vi=new WeakMap;var Hi,ki,Wi,Po;let Ap=(Po=class extends Mn{constructor({radius:t=1,sphereSegments:n=32,sphericalPosition:i,textureURL:r,specularMapURL:o,shininess:a=30,cloudsTextureURL:h,cloudsOpacity:c=1}){super({radius:t,sphereSegments:n,sphericalPosition:i,textureURL:r,specularMapURL:o,shininess:a});$e(this,Hi,void 0);$e(this,ki,void 0);$e(this,Wi,void 0);Je(this,Hi,new fi().load(h)),Je(this,ki,new Ks({map:ke(this,Hi),opacity:c,transparent:!0,blending:Ar,shininess:null})),Je(this,Wi,new vn(t*1.01,n,n/2)),this.cloudsMesh=new At(ke(this,Wi),ke(this,ki)),this.mesh.add(this.cloudsMesh)}},Hi=new WeakMap,ki=new WeakMap,Wi=new WeakMap,Po);var qi,Xi,Un;class Pp extends Mn{constructor({radius:t=1,sphereSegments:n=32,sphericalPosition:i,textureURL:r,specularMapURL:o,shininess:a=30,ringTextureURL:h}){super({radius:t,sphereSegments:n,sphericalPosition:i,textureURL:r,specularMapURL:o,shininess:a});$e(this,qi,void 0);$e(this,Xi,void 0);$e(this,Un,void 0);Je(this,qi,new fi().load(h)),Je(this,Xi,new js({map:ke(this,qi),color:16777215,side:Ht,transparent:!0})),Je(this,Un,new Js(t*1.3062,t*2.2859,n));const c=ke(this,Un).attributes.position,d=new P;for(let p=0;p<c.count;p++)d.fromBufferAttribute(c,p),ke(this,Un).attributes.uv.setXY(p,d.length()<t*1.79605?0:1,1);this.ringMesh=new At(ke(this,Un),ke(this,Xi)),this.mesh.add(this.ringMesh)}}qi=new WeakMap,Xi=new WeakMap,Un=new WeakMap;var ji,Yi,Zi,$i;class Cp{constructor({radius:e=1,sphereSegments:t=32,orbitCenter:n,sphericalPosition:i,textureURL:r,specularMapURL:o,shininess:a=30}){$e(this,ji,void 0);$e(this,Yi,void 0);$e(this,Zi,void 0);$e(this,$i,void 0);this.radius=e,this.orbitCenter=n,this.sphericalPosition=i,this.cameraFocusPoint=new P,this.cameraPosition=new Dt,Je(this,ji,new fi().load(r)),Je(this,Yi,new fi().load(o)),Je(this,Zi,new Ks({map:ke(this,ji),specularMap:ke(this,Yi),shininess:a})),Je(this,$i,new vn(e,t,t/2)),this.mesh=new At(ke(this,$i),ke(this,Zi)),this.mesh.position.setFromSpherical(this.sphericalPosition),this.object=new ut,this.object.add(this.mesh),this.object.position.setFromSpherical(this.orbitCenter)}}ji=new WeakMap,Yi=new WeakMap,Zi=new WeakMap,$i=new WeakMap;const Lp="/journey-through-the-solar-system/assets/2k_mercury-optimized-1bb951d6.jpg",Rp="/journey-through-the-solar-system/assets/2k_venus_surface-optimized-eb30ff94.jpg",Dp="/journey-through-the-solar-system/assets/2k_earth_daymap-optimized-378a3eb7.jpg",Ip="/journey-through-the-solar-system/assets/2k_earth_specular_map-optimized-70ee39ac.jpg",Up="/journey-through-the-solar-system/assets/2k_earth_clouds-optimized-c08bf882.jpg",Fp="/journey-through-the-solar-system/assets/2k_moon-optimized-90fbd521.jpg",Np="/journey-through-the-solar-system/assets/2k_mars-optimized-7da91f64.jpg",zp="/journey-through-the-solar-system/assets/2k_jupiter-optimized-ca3320f2.jpg",Op="/journey-through-the-solar-system/assets/2k_saturn-optimized-cbf6b717.jpg",Bp="/journey-through-the-solar-system/assets/2k_saturn_ring_alpha-4b0644b2.png",Gp="/journey-through-the-solar-system/assets/2k_uranus-optimized-1f3b54a1.jpg",Vp="/journey-through-the-solar-system/assets/2k_neptune-optimized-caecef7b.jpg",vt=10,Hp=window.matchMedia("(max-width: 1023px)");let $t;Hp.matches?$t=32:$t=64;const To=xp({fromDistance:500,forDistance:500,amount:1e5}),et=new Tp(1,64),Ue=new Mn({radius:.0035*vt,sphereSegments:$t,sphericalPosition:new Dt(49/vt,ne/2,-ne/300),textureURL:Lp}),Ce=new Mn({radius:.0087*vt,sphereSegments:$t,sphericalPosition:new Dt(80/vt,ne/2,ne/4),textureURL:Rp,shininess:null}),Pe=new Ap({radius:.0091*vt,sphereSegments:$t,sphericalPosition:new Dt(110/vt,ne/2,0),textureURL:Dp,specularMapURL:Ip,cloudsTextureURL:Up,cloudsOpacity:.5}),Ws=new Cp({radius:.0025*vt,sphereSegments:$t,sphericalPosition:new Dt(.5637,ne/2,0),orbitCenter:Pe.sphericalPosition,textureURL:Fp,shininess:null});Ws.mesh.rotation.y=ne/2;const Le=new Mn({radius:.0049*vt,sphereSegments:$t,sphericalPosition:new Dt(150/vt,ne/2,ne/2),textureURL:Np}),Re=new Mn({radius:.1004*vt,sphereSegments:$t,sphericalPosition:new Dt(535/vt,ne/2,-ne/2),textureURL:zp,shininess:null}),Ee=new Pp({radius:.0836*vt,sphereSegments:$t,sphericalPosition:new Dt(1060/vt,ne/2,-ne/4),textureURL:Op,shininess:null,ringTextureURL:Bp});Ee.mesh.rotation.z=ne*.1485;Ee.mesh.rotation.y=-ne*.1485;Ee.ringMesh.rotation.x=ne/2;const Ae=new Mn({radius:.0364*vt,sphereSegments:$t,sphericalPosition:new Dt(2115/vt,ne/2,ne),textureURL:Gp,shininess:null});Ae.mesh.rotation.z=-ne/2;Ae.mesh.rotation.y=-ne/4;const Fe=new Mn({radius:.0354*vt,sphereSegments:$t,sphericalPosition:new Dt(3215/vt,ne/2,-3*ne/4),textureURL:Vp,shininess:null});function kp(s,e){const t=new Ot(45,s.clientWidth/s.clientHeight,.001,2e3);t.focusPoint=new P,t.currentFocusPoint=new P(0,0,0),t.localPosition=new P;const n=new Dt,i=new nl;i.add(To,et.corona,et.object,Ue.object,Ce.object,Pe.object,Ws.object,Le.object,Re.object,Ee.object,Ae.object,Fe.object);const r=new tl({antialias:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(s.clientWidth,s.clientHeight),r.outputEncoding=Ke,r.setAnimationLoop(c),s.appendChild(r.domElement);const o=new gp,a={x:0,y:0},h={welcome(){t.focusPoint.copy(et.cameraFocusPoint),t.localPosition.setFromSpherical(n)},toMercury(f){const _=e.toMercury.offset-0;t.focusPoint.set(Ue.cameraFocusPoint.x*ie((f-0)/_),Ue.cameraFocusPoint.y*ie((f-0)/_),Ue.cameraFocusPoint.z*ie((f-0)/_)),t.localPosition.setFromSphericalCoords(n.radius+(Ue.cameraPosition.radius-n.radius)*ie((f-0)/_),n.phi+(Ue.cameraPosition.phi-n.phi)*ie((f-0)/_),n.theta+(Ue.cameraPosition.theta-n.theta)*ie((f-0)/_))},mercury(){t.focusPoint.copy(Ue.cameraFocusPoint),t.localPosition.setFromSpherical(Ue.cameraPosition)},toVenus(f){const u=e.mercury.offset,l=e.toVenus.offset,_=l-u;t.focusPoint.set(Ue.cameraFocusPoint.x+(Ce.cameraFocusPoint.x-Ue.cameraFocusPoint.x)*ie((f-u)/_),Ue.cameraFocusPoint.y+(Ce.cameraFocusPoint.y-Ue.cameraFocusPoint.y)*ie((f-u)/_),Ue.cameraFocusPoint.z+(Ce.cameraFocusPoint.z-Ue.cameraFocusPoint.z)*ie((f-u)/_)),u<f&&f<=u+_/2?t.localPosition.setFromSphericalCoords(Ue.cameraPosition.radius+10*ie((f-u)/_),Ue.cameraPosition.phi+(Ce.cameraPosition.phi-Ue.cameraPosition.phi)*ie((f-u)/_),Ue.cameraPosition.theta+(Ce.cameraPosition.theta-Ue.cameraPosition.theta)*ie((f-u)/_)):u+_/2<f&&f<=l&&t.localPosition.setFromSphericalCoords(Ue.cameraPosition.radius+10+Ce.cameraPosition.radius-(Ue.cameraPosition.radius+10)*ie((f-u)/_),Ue.cameraPosition.phi+(Ce.cameraPosition.phi-Ue.cameraPosition.phi)*ie((f-u)/_),Ue.cameraPosition.theta+(Ce.cameraPosition.theta-Ue.cameraPosition.theta)*ie((f-u)/_))},venus(){t.focusPoint.copy(Ce.cameraFocusPoint),t.localPosition.setFromSpherical(Ce.cameraPosition)},toEarth(f){const u=e.venus.offset,l=e.toEarth.offset,_=l-u;t.focusPoint.set(Ce.cameraFocusPoint.x+(Pe.cameraFocusPoint.x-Ce.cameraFocusPoint.x)*ie((f-u)/_),Ce.cameraFocusPoint.y+(Pe.cameraFocusPoint.y-Ce.cameraFocusPoint.y)*ie((f-u)/_),Ce.cameraFocusPoint.z+(Pe.cameraFocusPoint.z-Ce.cameraFocusPoint.z)*ie((f-u)/_)),u<f&&f<=u+_/2?t.localPosition.setFromSphericalCoords(Ce.cameraPosition.radius+10*ie((f-u)/_),Ce.cameraPosition.phi+(Pe.cameraPosition.phi-Ce.cameraPosition.phi)*ie((f-u)/_),Ce.cameraPosition.theta+(Pe.cameraPosition.theta-Ce.cameraPosition.theta)*ie((f-u)/_)):u+_/2<f&&f<=l&&t.localPosition.setFromSphericalCoords(Ce.cameraPosition.radius+10+Pe.cameraPosition.radius-(Ce.cameraPosition.radius+10)*ie((f-u)/_),Ce.cameraPosition.phi+(Pe.cameraPosition.phi-Ce.cameraPosition.phi)*ie((f-u)/_),Ce.cameraPosition.theta+(Pe.cameraPosition.theta-Ce.cameraPosition.theta)*ie((f-u)/_))},earth(){t.focusPoint.copy(Pe.cameraFocusPoint),t.localPosition.setFromSpherical(Pe.cameraPosition)},toMars(f){const u=e.earth.offset,l=e.toMars.offset,_=l-u;t.focusPoint.set(Pe.cameraFocusPoint.x+(Le.cameraFocusPoint.x-Pe.cameraFocusPoint.x)*ie((f-u)/_),Pe.cameraFocusPoint.y+(Le.cameraFocusPoint.y-Pe.cameraFocusPoint.y)*ie((f-u)/_),Pe.cameraFocusPoint.z+(Le.cameraFocusPoint.z-Pe.cameraFocusPoint.z)*ie((f-u)/_)),u<f&&f<=u+_/2?t.localPosition.setFromSphericalCoords(Pe.cameraPosition.radius+10*ie((f-u)/_),Pe.cameraPosition.phi+(Le.cameraPosition.phi-Pe.cameraPosition.phi)*ie((f-u)/_),Pe.cameraPosition.theta+(Le.cameraPosition.theta-Pe.cameraPosition.theta)*ie((f-u)/_)):u+_/2<f&&f<=l&&t.localPosition.setFromSphericalCoords(Pe.cameraPosition.radius+10+Le.cameraPosition.radius-(Pe.cameraPosition.radius+10)*ie((f-u)/_),Pe.cameraPosition.phi+(Le.cameraPosition.phi-Pe.cameraPosition.phi)*ie((f-u)/_),Pe.cameraPosition.theta+(Le.cameraPosition.theta-Pe.cameraPosition.theta)*ie((f-u)/_))},mars(){t.focusPoint.copy(Le.cameraFocusPoint),t.localPosition.setFromSpherical(Le.cameraPosition)},toJupiter(f){const u=e.mars.offset,l=e.toJupiter.offset,_=l-u;t.focusPoint.set(Le.cameraFocusPoint.x+(Re.cameraFocusPoint.x-Le.cameraFocusPoint.x)*ie((f-u)/_),Le.cameraFocusPoint.y+(Re.cameraFocusPoint.y-Le.cameraFocusPoint.y)*ie((f-u)/_),Le.cameraFocusPoint.z+(Re.cameraFocusPoint.z-Le.cameraFocusPoint.z)*ie((f-u)/_)),u<f&&f<=u+_/2?t.localPosition.setFromSphericalCoords(Le.cameraPosition.radius+100*ie((f-u)/_),Le.cameraPosition.phi+(Re.cameraPosition.phi-Le.cameraPosition.phi)*ie((f-u)/_),Le.cameraPosition.theta+(Re.cameraPosition.theta-Le.cameraPosition.theta)*ie((f-u)/_)):u+_/2<f&&f<=l&&t.localPosition.setFromSphericalCoords(Le.cameraPosition.radius+100+Re.cameraPosition.radius-(Le.cameraPosition.radius+100)*ie((f-u)/_),Le.cameraPosition.phi+(Re.cameraPosition.phi-Le.cameraPosition.phi)*ie((f-u)/_),Le.cameraPosition.theta+(Re.cameraPosition.theta-Le.cameraPosition.theta)*ie((f-u)/_))},jupiter(){t.focusPoint.copy(Re.cameraFocusPoint),t.localPosition.setFromSpherical(Re.cameraPosition)},toSaturn(f){const u=e.jupiter.offset,l=e.toSaturn.offset,_=l-u;t.focusPoint.set(Re.cameraFocusPoint.x+(Ee.cameraFocusPoint.x-Re.cameraFocusPoint.x)*ie((f-u)/_),Re.cameraFocusPoint.y+(Ee.cameraFocusPoint.y-Re.cameraFocusPoint.y)*ie((f-u)/_),Re.cameraFocusPoint.z+(Ee.cameraFocusPoint.z-Re.cameraFocusPoint.z)*ie((f-u)/_)),u<f&&f<=u+_/2?t.localPosition.setFromSphericalCoords(Re.cameraPosition.radius+100*ie((f-u)/_),Re.cameraPosition.phi+(Ee.cameraPosition.phi-Re.cameraPosition.phi)*ie((f-u)/_),Re.cameraPosition.theta+(Ee.cameraPosition.theta-Re.cameraPosition.theta)*ie((f-u)/_)):u+_/2<f&&f<=l&&t.localPosition.setFromSphericalCoords(Re.cameraPosition.radius+100+Ee.cameraPosition.radius-(Re.cameraPosition.radius+100)*ie((f-u)/_),Re.cameraPosition.phi+(Ee.cameraPosition.phi-Re.cameraPosition.phi)*ie((f-u)/_),Re.cameraPosition.theta+(Ee.cameraPosition.theta-Re.cameraPosition.theta)*ie((f-u)/_))},saturn(){t.focusPoint.copy(Ee.cameraFocusPoint),t.localPosition.setFromSpherical(Ee.cameraPosition)},toUranus(f){const u=e.saturn.offset,l=e.toUranus.offset,_=l-u;t.focusPoint.set(Ee.cameraFocusPoint.x+(Ae.cameraFocusPoint.x-Ee.cameraFocusPoint.x)*ie((f-u)/_),Ee.cameraFocusPoint.y+(Ae.cameraFocusPoint.y-Ee.cameraFocusPoint.y)*ie((f-u)/_),Ee.cameraFocusPoint.z+(Ae.cameraFocusPoint.z-Ee.cameraFocusPoint.z)*ie((f-u)/_)),u<f&&f<=u+_/2?t.localPosition.setFromSphericalCoords(Ee.cameraPosition.radius+100*ie((f-u)/_),Ee.cameraPosition.phi+(Ae.cameraPosition.phi-Ee.cameraPosition.phi)*ie((f-u)/_),Ee.cameraPosition.theta+(Ae.cameraPosition.theta-Ee.cameraPosition.theta)*ie((f-u)/_)):u+_/2<f&&f<=l&&t.localPosition.setFromSphericalCoords(Ee.cameraPosition.radius+100+Ae.cameraPosition.radius-(Ee.cameraPosition.radius+100)*ie((f-u)/_),Ee.cameraPosition.phi+(Ae.cameraPosition.phi-Ee.cameraPosition.phi)*ie((f-u)/_),Ee.cameraPosition.theta+(Ae.cameraPosition.theta-Ee.cameraPosition.theta)*ie((f-u)/_))},uranus(){t.focusPoint.copy(Ae.cameraFocusPoint),t.localPosition.setFromSpherical(Ae.cameraPosition)},toNeptune(f){const u=e.uranus.offset,l=e.toNeptune.offset,_=l-u;t.focusPoint.set(Ae.cameraFocusPoint.x+(Fe.cameraFocusPoint.x-Ae.cameraFocusPoint.x)*ie((f-u)/_),Ae.cameraFocusPoint.y+(Fe.cameraFocusPoint.y-Ae.cameraFocusPoint.y)*ie((f-u)/_),Ae.cameraFocusPoint.z+(Fe.cameraFocusPoint.z-Ae.cameraFocusPoint.z)*ie((f-u)/_)),u<f&&f<=u+_/2?t.localPosition.setFromSphericalCoords(Ae.cameraPosition.radius+200*ie((f-u)/_),Ae.cameraPosition.phi+(Fe.cameraPosition.phi-Ae.cameraPosition.phi)*ie((f-u)/_),Ae.cameraPosition.theta+(Fe.cameraPosition.theta-Ae.cameraPosition.theta)*ie((f-u)/_)):u+_/2<f&&f<=l&&t.localPosition.setFromSphericalCoords(Ae.cameraPosition.radius+200+Fe.cameraPosition.radius-(Ae.cameraPosition.radius+200)*ie((f-u)/_),Ae.cameraPosition.phi+(Fe.cameraPosition.phi-Ae.cameraPosition.phi)*ie((f-u)/_),Ae.cameraPosition.theta+(Fe.cameraPosition.theta-Ae.cameraPosition.theta)*ie((f-u)/_))},neptune(){t.focusPoint.copy(Fe.cameraFocusPoint),t.localPosition.setFromSpherical(Fe.cameraPosition)},toSun(f){const u=e.neptune.offset,l=e.toSun.offset,_=l-u;t.focusPoint.set(Fe.cameraFocusPoint.x+(et.cameraFocusPoint.x-Fe.cameraFocusPoint.x)*ie((f-u)/_),Fe.cameraFocusPoint.y+(et.cameraFocusPoint.y-Fe.cameraFocusPoint.y)*ie((f-u)/_),Fe.cameraFocusPoint.z+(et.cameraFocusPoint.z-Fe.cameraFocusPoint.z)*ie((f-u)/_)),u<f&&f<=u+_/2?t.localPosition.setFromSphericalCoords(Fe.cameraPosition.radius+0*ie((f-u)/_),Fe.cameraPosition.phi+(et.cameraPosition.phi-Fe.cameraPosition.phi)*ie((f-u)/_),Fe.cameraPosition.theta+(et.cameraPosition.theta-Fe.cameraPosition.theta)*ie((f-u)/_*2)):u+_/2<f&&f<=l&&t.localPosition.setFromSphericalCoords(Fe.cameraPosition.radius+0+et.cameraPosition.radius-(Fe.cameraPosition.radius+0)*ie((f-u)/_),Fe.cameraPosition.phi+(et.cameraPosition.phi-Fe.cameraPosition.phi)*ie((f-u)/_),et.cameraPosition.theta)},sun(){t.focusPoint.copy(et.cameraFocusPoint),t.localPosition.setFromSpherical(et.cameraPosition)}};function c(){const f=o.getDelta();To.rotateY(-f*.02),et.update(r,o.elapsedTime),et.corona.lookAt(t.position),Ue.mesh.rotateY(f*.1),Ce.mesh.rotateY(f*.1),Pe.mesh.rotateY(f*.1),Ws.object.rotateY(f*.1/27),Le.mesh.rotateY(f*.1),Re.mesh.rotateY(f*.1),Ee.mesh.rotateY(f*.1),Ae.mesh.rotateY(f*-.1),Fe.mesh.rotateY(f*.1),Ue.object.rotation.y=a.x/2,Ce.object.rotation.y=a.x/2,Pe.object.rotation.y=a.x/2,Le.object.rotation.y=a.x/2,Re.object.rotation.y=a.x/2,Ee.object.rotation.y=a.x/2,Ae.object.rotation.y=a.x/2,Fe.object.rotation.y=a.x/2,t.position.lerp(new P(...t.focusPoint).add(t.localPosition),2*f),t.lookAt(t.currentFocusPoint.lerp(t.focusPoint,2*f)),r.render(i,t)}function d(f){a.x=f.clientX/innerWidth*2-1}function p(f){window.innerWidth<window.innerHeight?a.x=f.gamma/90:a.x=f.beta*2/180}function m(f){Object.keys(e).forEach(u=>{u.startsWith("to")?e[u].offset=e[u].domElement.offsetTop+e[u].domElement.offsetHeight-window.innerHeight:e[u].offset=e[u].domElement.offsetTop+e[u].domElement.offsetHeight}),f.matches?(Ue.cameraFocusPoint.set(...Ue.object.position),Ce.cameraFocusPoint.set(...Ce.object.position),Pe.cameraFocusPoint.set(...Pe.object.position),Le.cameraFocusPoint.set(...Le.object.position),Re.cameraFocusPoint.set(...Re.object.position),Ee.cameraFocusPoint.set(...Ee.object.position),Ae.cameraFocusPoint.set(...Ae.object.position),Fe.cameraFocusPoint.set(...Fe.object.position),et.cameraFocusPoint.set(...et.object.position),n.set(et.radius*6,ne/2.05,ne/100),Ue.cameraPosition.set(Ue.radius*6,ne/2.1,ne*.8),Ce.cameraPosition.set(Ce.radius*6,ne/2.1,ne*1.4),Pe.cameraPosition.set(Pe.radius*6,ne/2.1,ne*.8),Le.cameraPosition.set(Le.radius*6,ne/2.1,ne*1.7),Re.cameraPosition.set(Re.radius*6,ne/2.1,ne*.3),Ee.cameraPosition.set(Ee.radius*6,ne/2.1,ne*1),Ae.cameraPosition.set(Ae.radius*6,ne/2.1,ne*-.2),Fe.cameraPosition.set(Fe.radius*6,ne/2.1,ne*.5),et.cameraPosition.set(et.radius*6,ne/2,5*ne/4),g()):(Ue.cameraFocusPoint.set(...new P(...Ue.object.position).add(new P().setFromSphericalCoords(Ue.radius,ne/2,Ue.sphericalPosition.theta+ne/2))),Ce.cameraFocusPoint.set(...new P(...Ce.object.position).add(new P().setFromSphericalCoords(Ce.radius,ne/2,Ce.sphericalPosition.theta-ne/2))),Pe.cameraFocusPoint.set(...new P(...Pe.object.position).add(new P().setFromSphericalCoords(Pe.radius,ne/2,Pe.sphericalPosition.theta+ne/2))),Le.cameraFocusPoint.set(...new P(...Le.object.position).add(new P().setFromSphericalCoords(Le.radius,ne/2,Le.sphericalPosition.theta-ne/2))),Re.cameraFocusPoint.set(...new P(...Re.object.position).add(new P().setFromSphericalCoords(Re.radius,ne/2,Re.sphericalPosition.theta+ne/2))),Ee.cameraFocusPoint.set(...new P(...Ee.object.position).add(new P().setFromSphericalCoords(Ee.radius,ne/2,Ee.sphericalPosition.theta-ne/2))),Ae.cameraFocusPoint.set(...new P(...Ae.object.position).add(new P().setFromSphericalCoords(Ae.radius,ne/2,Ae.sphericalPosition.theta+ne/2))),Fe.cameraFocusPoint.set(...new P(...Fe.object.position).add(new P().setFromSphericalCoords(Fe.radius,ne/2,Fe.sphericalPosition.theta-ne/2))),et.cameraFocusPoint.set(...et.object.position),n.set(et.radius*5,ne/2.005,ne/1e3),Ue.cameraPosition.set(Ue.radius*3,ne/2.1,ne*.8),Ce.cameraPosition.set(Ce.radius*3,ne/2.1,ne*1.4),Pe.cameraPosition.set(Pe.radius*3,ne/2.1,ne*.8),Le.cameraPosition.set(Le.radius*3,ne/2.1,ne*1.7),Re.cameraPosition.set(Re.radius*3,ne/2.1,ne*.3),Ee.cameraPosition.set(Ee.radius*3,ne/2.1,ne*1),Ae.cameraPosition.set(Ae.radius*3,ne/2.1,ne*-.2),Fe.cameraPosition.set(Fe.radius*3,ne/2.1,ne*.5),et.cameraPosition.set(et.radius*3,ne/2,5*ne/4),g())}function g(){const f=window.pageYOffset;f===0?h.welcome():0<f&&f<=e.toMercury.offset?h.toMercury(f):e.toMercury.offset<f&&f<=e.mercury.offset?h.mercury():e.mercury.offset<f&&f<=e.toVenus.offset?h.toVenus(f):e.toVenus.offset<f&&f<=e.venus.offset?h.venus():e.venus.offset<f&&f<=e.toEarth.offset?h.toEarth(f):e.toEarth.offset<f&&f<=e.earth.offset?h.earth():e.earth.offset<f&&f<=e.toMars.offset?h.toMars(f):e.toMars.offset<f&&f<=e.mars.offset?h.mars():e.mars.offset<f&&f<=e.toJupiter.offset?h.toJupiter(f):e.toJupiter.offset<f&&f<=e.jupiter.offset?h.jupiter():e.jupiter.offset<f&&f<=e.toSaturn.offset?h.toSaturn(f):e.toSaturn.offset<f&&f<=e.saturn.offset?h.saturn():e.saturn.offset<f&&f<=e.toUranus.offset?h.toUranus(f):e.toUranus.offset<f&&f<=e.uranus.offset?h.uranus():e.uranus.offset<f&&f<=e.toNeptune.offset?h.toNeptune(f):e.toNeptune.offset<f&&f<=e.neptune.offset?h.neptune():e.neptune.offsetart<f&&f<=e.toSun.offset?h.toSun(f):e.toSun.offset<f&&f<=e.sun.offset&&h.sun()}function v(f,u){t.aspect=f.clientWidth/f.clientHeight,t.updateProjectionMatrix(),r.setSize(f.clientWidth,f.clientHeight),m(u),r.render(i,t)}return{update:c,handleMouseMove:d,handleDeviceOrientation:p,handleMediaChange:m,handleScroll:g,handleAppResize:v}}const Wp=window.matchMedia("(max-width: 1023px)"),ms=document.getElementById("app"),Ei=document.getElementById("orientation-permission-button"),gs=document.getElementById("welcome"),_s=document.getElementById("mercury"),vs=document.getElementById("venus"),xs=document.getElementById("earth"),Ms=document.getElementById("mars"),Ss=document.getElementById("jupiter"),ys=document.getElementById("saturn"),bs=document.getElementById("uranus"),ws=document.getElementById("neptune"),Es=document.getElementById("sun"),Ts=document.getElementById("toMercury"),As=document.getElementById("toVenus"),Ps=document.getElementById("toEarth"),Cs=document.getElementById("toMars"),Ls=document.getElementById("toJupiter"),Rs=document.getElementById("toSaturn"),Ds=document.getElementById("toUranus"),Is=document.getElementById("toNeptune"),Us=document.getElementById("toSun"),Ao={welcome:{domElement:gs,offset:gs.offsetTop+gs.offsetHeight},mercury:{domElement:_s,offset:_s.offsetTop+_s.offsetHeight},venus:{domElement:vs,offset:vs.offsetTop+vs.offsetHeight},earth:{domElement:xs,offset:xs.offsetTop+xs.offsetHeight},mars:{domElement:Ms,offset:Ms.offsetTop+Ms.offsetHeight},jupiter:{domElement:Ss,offset:Ss.offsetTop+Ss.offsetHeight},saturn:{domElement:ys,offset:ys.offsetTop+ys.offsetHeight},uranus:{domElement:bs,offset:bs.offsetTop+bs.offsetHeight},neptune:{domElement:ws,offset:ws.offsetTop+ws.offsetHeight},sun:{domElement:Es,offset:Es.offsetTop+Es.offsetHeight},toMercury:{domElement:Ts,offset:Ts.offsetTop+Ts.offsetHeight-window.innerHeight},toVenus:{domElement:As,offset:As.offsetTop+As.offsetHeight-window.innerHeight},toEarth:{domElement:Ps,offset:Ps.offsetTop+Ps.offsetHeight-window.innerHeight},toMars:{domElement:Cs,offset:Cs.offsetTop+Cs.offsetHeight-window.innerHeight},toJupiter:{domElement:Ls,offset:Ls.offsetTop+Ls.offsetHeight-window.innerHeight},toSaturn:{domElement:Rs,offset:Rs.offsetTop+Rs.offsetHeight-window.innerHeight},toUranus:{domElement:Ds,offset:Ds.offsetTop+Ds.offsetHeight-window.innerHeight},toNeptune:{domElement:Is,offset:Is.offsetTop+Is.offsetHeight-window.innerHeight},toSun:{domElement:Us,offset:Us.offsetTop+Us.offsetHeight-window.innerHeight}};let Dn;ms&&Ei&&Ao&&(Dn=kp(ms,Ao),window.addEventListener("mousemove",Dn.handleMouseMove),window.addEventListener("scroll",Dn.handleScroll),Ei.addEventListener("click",qp),new ResizeObserver(e=>{e.forEach(t=>Dn.handleAppResize(t.target,Wp))}).observe(ms));function qp(){!Dn||!Ei||(typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(s=>{s==="granted"?(window.addEventListener("deviceorientation",Dn.handleDeviceOrientation),Ei.remove()):console.error("Request to access the orientation was rejected")}).catch(console.error):(window.addEventListener("deviceorientation",Dn.handleDeviceOrientation),Ei.remove()))}
