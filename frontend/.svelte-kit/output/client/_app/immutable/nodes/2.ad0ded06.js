import{S as yi,i as Ti,s as Ai,k as Ze,l as je,m as At,h as be,n as we,b as ke,E as ln,o as Ho,_ as uh,w as Lu,q as dn,a as _t,r as pn,c as gt,C as Qe,a2 as ns,D as Lr,a3 as fh,J as hh,K as Pu,F as Du,u as zs,a4 as Ri,U as Fn,a5 as ir,v as dh,d as vt,f as ph,g as xt,a6 as Vo,a7 as rr,$ as mh,j as _h,a8 as ko,N as js,O as Js,P as Qs,Q as ea,y as Qt,z as en,A as tn,B as nn,a9 as dr,a1 as gh,aa as vh}from"../chunks/index.958f6a32.js";import{h as xh}from"../chunks/cursorHelpers.05cb0207.js";import{t as Uu}from"../chunks/index.a9363749.js";import{n as Eh,a as Wo}from"../chunks/notificationStore.e8f881ab.js";const Sh=!0,BE=Object.freeze(Object.defineProperty({__proto__:null,prerender:Sh},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="156",Mh=0,Rc=1,yh=2,Iu=1,Th=2,Cn=3,Zn=0,It=1,Pn=2,$n=0,Ji=1,Cc=2,Lc=3,Pc=4,Ah=5,qi=100,bh=101,wh=102,Dc=103,Uc=104,Rh=200,Ch=201,Lh=202,Ph=203,Nu=204,Ou=205,Dh=206,Uh=207,Ih=208,Nh=209,Oh=210,Fh=0,Bh=1,zh=2,oo=3,Gh=4,Hh=5,Vh=6,kh=7,Fu=0,Wh=1,Xh=2,Yn=0,qh=1,$h=2,Yh=3,Kh=4,Zh=5,Bu=300,sr=301,ar=302,co=303,lo=304,ta=306,uo=1e3,an=1001,fo=1002,Lt=1003,Ic=1004,Ta=1005,Vt=1006,jh=1007,Ir=1008,Kn=1009,Jh=1010,Qh=1011,qo=1012,zu=1013,Wn=1014,Xn=1015,Nr=1016,Gu=1017,Hu=1018,hi=1020,ed=1021,on=1023,td=1024,nd=1025,di=1026,or=1027,id=1028,Vu=1029,rd=1030,ku=1031,Wu=1033,Aa=33776,ba=33777,wa=33778,Ra=33779,Nc=35840,Oc=35841,Fc=35842,Bc=35843,sd=36196,zc=37492,Gc=37496,Hc=37808,Vc=37809,kc=37810,Wc=37811,Xc=37812,qc=37813,$c=37814,Yc=37815,Kc=37816,Zc=37817,jc=37818,Jc=37819,Qc=37820,el=37821,Ca=36492,tl=36494,nl=36495,ad=36283,il=36284,rl=36285,sl=36286,Xu=3e3,pi=3001,od=3200,cd=3201,ld=0,ud=1,mi="",et="srgb",_n="srgb-linear",na="display-p3",La=7680,fd=519,hd=512,dd=513,pd=514,md=515,_d=516,gd=517,vd=518,xd=519,al=35044,ol="300 es",ho=1035,Dn=2e3,Gs=2001;class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,po=180/Math.PI;function kr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function Ed(i,e){return(i%e+e)%e}function Da(i,e,t){return(1-t)*i+t*e}function cl(i){return(i&i-1)===0&&i!==0}function mo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,r,s,o,a,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],g=r[0],m=r[3],f=r[6],x=r[1],v=r[4],M=r[7],A=r[2],w=r[5],y=r[8];return s[0]=o*g+a*x+c*A,s[3]=o*m+a*v+c*w,s[6]=o*f+a*M+c*y,s[1]=l*g+u*x+d*A,s[4]=l*m+u*v+d*w,s[7]=l*f+u*M+d*y,s[2]=h*g+p*x+_*A,s[5]=h*m+p*v+_*w,s[8]=h*f+p*M+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,_=t*d+n*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*l-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Ne;function qu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){const i=Hs("canvas");return i.style.display="block",i}const ll={};function Pr(i){i in ll||(ll[i]=!0,console.warn(i))}function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Md=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),yd=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Td(i){return i.convertSRGBToLinear().applyMatrix3(yd)}function Ad(i){return i.applyMatrix3(Md).convertLinearToSRGB()}const bd={[_n]:i=>i,[et]:i=>i.convertSRGBToLinear(),[na]:Td},wd={[_n]:i=>i,[et]:i=>i.convertLinearToSRGB(),[na]:Ad},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return _n},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=bd[e],r=wd[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Ci;class $u{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=Hs("canvas")),Ci.width=e.width,Ci.height=e.height;const n=Ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rd=0;class Yu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Na(r[o].image)):s.push(Na(r[o]))}else s=Na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class Bt extends pr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=an,r=an,s=Vt,o=Ir,a=on,c=Kn,l=Bt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=kr(),this.name="",this.source=new Yu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===pi?et:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===et?pi:Xu}set encoding(e){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pi?et:mi}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Bu;Bt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,M=(p+1)/2,A=(f+1)/2,w=(u+h)/4,y=(d+g)/4,D=(_+m)/4;return v>M&&v>A?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=y/n):M>A?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=w/r,s=D/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=y/s,r=D/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-g)/x,this.z=(h-u)/x,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends pr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pi?et:mi),this.texture=new Bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ku extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pd extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==h||l!==p||u!==_){let m=1-a;const f=c*h+l*p+u*_+d*g,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,f*x);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const M=a*x;if(c=c*m+h*M,l=l*m+p*M,u=u*m+_*M,d=d*m+g*M,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*d+c*p-l*h,e[t+1]=c*_+u*h+l*d-a*p,e[t+2]=l*_+u*p+a*h-c*d,e[t+3]=u*_-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),h=c(n/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d+h*p*_;break;case"YZX":this._x=h*u*d+l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d-h*p*_;break;case"XZY":this._x=h*u*d-l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,u=c*n+a*t-s*r,d=c*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=l*c+h*-s+u*-a-d*-o,this.y=u*c+h*-o+d*-s-l*-a,this.z=d*c+h*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new q,ul=new Wr;class Xr{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Li.copy(e.boundingBox),Li.applyMatrix4(e.matrixWorld),this.union(Li);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Tn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else r.boundingBox===null&&r.computeBoundingBox(),Li.copy(r.boundingBox),Li.applyMatrix4(e.matrixWorld),this.union(Li)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),is.subVectors(this.max,yr),Pi.subVectors(e.a,yr),Di.subVectors(e.b,yr),Ui.subVectors(e.c,yr),Gn.subVectors(Di,Pi),Hn.subVectors(Ui,Di),ri.subVectors(Pi,Ui);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!Fa(t,Pi,Di,Ui,is)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,Pi,Di,Ui,is))?!1:(rs.crossVectors(Gn,Hn),t=[rs.x,rs.y,rs.z],Fa(t,Pi,Di,Ui,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new q,new q,new q,new q,new q,new q,new q,new q],Tn=new q,Li=new Xr,Pi=new q,Di=new q,Ui=new q,Gn=new q,Hn=new q,ri=new q,yr=new q,is=new q,rs=new q,si=new q;function Fa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){si.fromArray(i,s);const a=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),u=n.dot(si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Dd=new Xr,Tr=new q,Ba=new q;class $o{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Tr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Ba)),this.expandByPoint(Tr.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new q,za=new q,ss=new q,Vn=new q,Ga=new q,as=new q,Ha=new q;class Ud{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){za.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(za);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ss),a=Vn.dot(this.direction),c=-Vn.dot(ss),l=Vn.lengthSq(),u=Math.abs(1-o*o);let d,h,p,_;if(u>0)if(d=o*c-a,h=o*a-c,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(za).addScaledVector(ss,h),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,s){Ga.subVectors(t,e),as.subVectors(n,e),Ha.crossVectors(Ga,as);let o=this.direction.dot(Ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const c=a*this.direction.dot(as.crossVectors(Vn,as));if(c<0)return null;const l=a*this.direction.dot(Ga.cross(Vn));if(l<0||c+l>o)return null;const u=-a*Vn.dot(Ha);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,n,r,s,o,a,c,l,u,d,h,p,_,g,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,d,h,p,_,g,m)}set(e,t,n,r,s,o,a,c,l,u,d,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,_=a*u,g=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+_*l,t[5]=h-g*l,t[9]=-a*c,t[2]=g-h*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,_=l*u,g=l*d;t[0]=h+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,_=l*u,g=l*d;t[0]=h-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*d,_=a*u,g=a*d;t[0]=c*u,t[4]=_*l-p,t[8]=h*l+g,t[1]=c*d,t[5]=g*l+h,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-h*d,t[8]=_*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+g,t[5]=o*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Id,e,Nd)}lookAt(e,t,n){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),kn.crossVectors(n,Ot),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),kn.crossVectors(n,Ot)),kn.normalize(),os.crossVectors(Ot,kn),r[0]=kn.x,r[4]=os.x,r[8]=Ot.x,r[1]=kn.y,r[5]=os.y,r[9]=Ot.y,r[2]=kn.z,r[6]=os.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],v=n[7],M=n[11],A=n[15],w=r[0],y=r[4],D=r[8],E=r[12],T=r[1],U=r[5],k=r[9],L=r[13],O=r[2],N=r[6],J=r[10],W=r[14],F=r[3],G=r[7],I=r[11],C=r[15];return s[0]=o*w+a*T+c*O+l*F,s[4]=o*y+a*U+c*N+l*G,s[8]=o*D+a*k+c*J+l*I,s[12]=o*E+a*L+c*W+l*C,s[1]=u*w+d*T+h*O+p*F,s[5]=u*y+d*U+h*N+p*G,s[9]=u*D+d*k+h*J+p*I,s[13]=u*E+d*L+h*W+p*C,s[2]=_*w+g*T+m*O+f*F,s[6]=_*y+g*U+m*N+f*G,s[10]=_*D+g*k+m*J+f*I,s[14]=_*E+g*L+m*W+f*C,s[3]=x*w+v*T+M*O+A*F,s[7]=x*y+v*U+M*N+A*G,s[11]=x*D+v*k+M*J+A*I,s[15]=x*E+v*L+M*W+A*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*c*d-r*l*d-s*a*h+n*l*h+r*a*p-n*c*p)+g*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+n*o*p+s*a*u-n*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=d*m*l-g*h*l+g*c*p-a*m*p-d*c*f+a*h*f,v=_*h*l-u*m*l-_*c*p+o*m*p+u*c*f-o*h*f,M=u*g*l-_*d*l+_*a*p-o*g*p-u*a*f+o*d*f,A=_*d*c-u*g*c-_*a*h+o*g*h+u*a*m-o*d*m,w=t*x+n*v+r*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return e[0]=x*y,e[1]=(g*h*s-d*m*s-g*r*p+n*m*p+d*r*f-n*h*f)*y,e[2]=(a*m*s-g*c*s+g*r*l-n*m*l-a*r*f+n*c*f)*y,e[3]=(d*c*s-a*h*s-d*r*l+n*h*l+a*r*p-n*c*p)*y,e[4]=v*y,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*f+t*h*f)*y,e[6]=(_*c*s-o*m*s-_*r*l+t*m*l+o*r*f-t*c*f)*y,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*y,e[8]=M*y,e[9]=(_*d*s-u*g*s-_*n*p+t*g*p+u*n*f-t*d*f)*y,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*f+t*a*f)*y,e[11]=(u*a*s-o*d*s-u*n*l+t*d*l+o*n*p-t*a*p)*y,e[12]=A*y,e[13]=(u*g*r-_*d*r+_*n*h-t*g*h-u*n*m+t*d*m)*y,e[14]=(_*a*r-o*g*r-_*n*c+t*g*c+o*n*m-t*a*m)*y,e[15]=(o*d*r-u*a*r+u*n*c-t*d*c-o*n*h+t*a*h)*y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,_=s*d,g=o*u,m=o*d,f=a*d,x=c*l,v=c*u,M=c*d,A=n.x,w=n.y,y=n.z;return r[0]=(1-(g+f))*A,r[1]=(p+M)*A,r[2]=(_-v)*A,r[3]=0,r[4]=(p-M)*w,r[5]=(1-(h+f))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(_+v)*y,r[9]=(m-x)*y,r[10]=(1-(h+g))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),a=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const l=1/s,u=1/o,d=1/a;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=d,Kt.elements[9]*=d,Kt.elements[10]*=d,t.setFromRotationMatrix(Kt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Dn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let p,_;if(a===Dn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Gs)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Dn){const c=this.elements,l=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*l,p=(n+r)*u;let _,g;if(a===Dn)_=(o+s)*d,g=-2*d;else if(a===Gs)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new q,Kt=new St,Id=new q(0,0,0),Nd=new q(1,1,1),kn=new q,os=new q,Ot=new q,fl=new St,hl=new Wr;class ia{constructor(e=0,t=0,n=0,r=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Od=0;const dl=new q,Ni=new Wr,bn=new St,cs=new q,Ar=new q,Fd=new q,Bd=new Wr,pl=new q(1,0,0),ml=new q(0,1,0),_l=new q(0,0,1),zd={type:"added"},Gd={type:"removed"};class zt extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new q,t=new ia,n=new Wr,r=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Ne}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(_l,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(_l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Ar,cs,this.up):bn.lookAt(cs,Ar,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(bn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}zt.DEFAULT_UP=new q(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new q,wn=new q,Va=new q,Rn=new q,Oi=new q,Fi=new q,gl=new q,ka=new q,Wa=new q,Xa=new q;let ls=!1;class rn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zt.subVectors(e,t),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Zt.subVectors(r,t),wn.subVectors(n,t),Va.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(wn),c=Zt.dot(Va),l=wn.dot(wn),u=wn.dot(Va),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(l*c-a*u)*h,_=(o*u-a*c)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,r,s,o,a,c){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Rn),c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c}static isFrontFacing(e,t,n,r){return Zt.subVectors(n,t),wn.subVectors(e,t),Zt.cross(wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Zt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Oi.subVectors(r,n),Fi.subVectors(s,n),ka.subVectors(e,n);const c=Oi.dot(ka),l=Fi.dot(ka);if(c<=0&&l<=0)return t.copy(n);Wa.subVectors(e,r);const u=Oi.dot(Wa),d=Fi.dot(Wa);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Oi,o);Xa.subVectors(e,s);const p=Oi.dot(Xa),_=Fi.dot(Xa);if(_>=0&&p<=_)return t.copy(s);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Fi,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return gl.subVectors(s,r),a=(d-u)/(d-u+(p-_)),t.copy(r).addScaledVector(gl,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(n).addScaledVector(Oi,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hd=0;class ra extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Ji,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=Ou,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},us={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=Ed(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qa(o,s,e+1/3),this.g=qa(o,s,e),this.b=qa(o,s,e-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(e,t=et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return Yt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Dt(Tt.r*255,0,255))*65536+Math.round(Dt(Tt.g*255,0,255))*256+Math.round(Dt(Tt.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=et){Yt.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,r=Tt.b;return e!==et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(us);const n=Da(jt.h,us.h,t),r=Da(jt.s,us.s,t),s=Da(jt.l,us.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Je;Je.NAMES=ju;class Yo extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new q,fs=new Xe;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this.updateRange={offset:0,count:-1},this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ju extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qu extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _i extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vd=0;const Ht=new St,$a=new zt,Bi=new q,Ft=new Xr,br=new Xr,pt=new q;class bi extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?Qu:Ju)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _i(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];br.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Ft.min,br.min),Ft.expandByPoint(pt),pt.addVectors(Ft.max,br.max),Ft.expandByPoint(pt)):(Ft.expandByPoint(br.min),Ft.expandByPoint(br.max))}Ft.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)pt.fromBufferAttribute(a,l),c&&(Bi.fromBufferAttribute(e,l),pt.add(Bi)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new q,u[T]=new q;const d=new q,h=new q,p=new q,_=new Xe,g=new Xe,m=new Xe,f=new q,x=new q;function v(T,U,k){d.fromArray(r,T*3),h.fromArray(r,U*3),p.fromArray(r,k*3),_.fromArray(o,T*2),g.fromArray(o,U*2),m.fromArray(o,k*2),h.sub(d),p.sub(d),g.sub(_),m.sub(_);const L=1/(g.x*m.y-m.x*g.y);isFinite(L)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(L),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(L),l[T].add(f),l[U].add(f),l[k].add(f),u[T].add(x),u[U].add(x),u[k].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,U=M.length;T<U;++T){const k=M[T],L=k.start,O=k.count;for(let N=L,J=L+O;N<J;N+=3)v(n[N+0],n[N+1],n[N+2])}const A=new q,w=new q,y=new q,D=new q;function E(T){y.fromArray(s,T*3),D.copy(y);const U=l[T];A.copy(U),A.sub(y.multiplyScalar(y.dot(U))).normalize(),w.crossVectors(D,U);const L=w.dot(u[T])<0?-1:1;c[T*4]=A.x,c[T*4+1]=A.y,c[T*4+2]=A.z,c[T*4+3]=L}for(let T=0,U=M.length;T<U;++T){const k=M[T],L=k.start,O=k.count;for(let N=L,J=L+O;N<J;N+=3)E(n[N+0]),E(n[N+1]),E(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,c=new q,l=new q,u=new q,d=new q;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let f=0;f<u;f++)h[_++]=l[p++]}return new mn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new St,ai=new Ud,hs=new $o,xl=new q,zi=new q,Gi=new q,Hi=new q,Ya=new q,ds=new q,ps=new Xe,ms=new Xe,_s=new Xe,El=new q,Sl=new q,Ml=new q,gs=new q,vs=new q;class Un extends zt{constructor(e=new bi,t=new Yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ds.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Ya.fromBufferAttribute(d,e),o?ds.addScaledVector(Ya,u):ds.addScaledVector(Ya.sub(t),u))}t.add(ds)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(hs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(hs,xl)===null||ai.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(vl.copy(s).invert(),ai.copy(e.ray).applyMatrix4(vl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,A=v;M<A;M+=3){const w=a.getX(M),y=a.getX(M+1),D=a.getX(M+2);r=xs(this,f,e,n,l,u,d,w,y,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=xs(this,o,e,n,l,u,d,x,v,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,A=v;M<A;M+=3){const w=M,y=M+1,D=M+2;r=xs(this,f,e,n,l,u,d,w,y,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const x=m,v=m+1,M=m+2;r=xs(this,o,e,n,l,u,d,x,v,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function kd(i,e,t,n,r,s,o,a){let c;if(e.side===It?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Zn,a),c===null)return null;vs.copy(a),vs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(vs);return l<t.near||l>t.far?null:{distance:l,point:vs.clone(),object:i}}function xs(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,zi),i.getVertexPosition(c,Gi),i.getVertexPosition(l,Hi);const u=kd(i,e,t,n,zi,Gi,Hi,gs);if(u){r&&(ps.fromBufferAttribute(r,a),ms.fromBufferAttribute(r,c),_s.fromBufferAttribute(r,l),u.uv=rn.getInterpolation(gs,zi,Gi,Hi,ps,ms,_s,new Xe)),s&&(ps.fromBufferAttribute(s,a),ms.fromBufferAttribute(s,c),_s.fromBufferAttribute(s,l),u.uv1=rn.getInterpolation(gs,zi,Gi,Hi,ps,ms,_s,new Xe),u.uv2=u.uv1),o&&(El.fromBufferAttribute(o,a),Sl.fromBufferAttribute(o,c),Ml.fromBufferAttribute(o,l),u.normal=rn.getInterpolation(gs,zi,Gi,Hi,El,Sl,Ml,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new q,materialIndex:0};rn.getNormal(zi,Gi,Hi,d.normal),u.face=d}return u}class mr extends bi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new _i(l,3)),this.setAttribute("normal",new _i(u,3)),this.setAttribute("uv",new _i(d,2));function _(g,m,f,x,v,M,A,w,y,D,E){const T=M/y,U=A/D,k=M/2,L=A/2,O=w/2,N=y+1,J=D+1;let W=0,F=0;const G=new q;for(let I=0;I<J;I++){const C=I*U-L;for(let V=0;V<N;V++){const Q=V*T-k;G[g]=Q*x,G[m]=C*v,G[f]=O,l.push(G.x,G.y,G.z),G[g]=0,G[m]=0,G[f]=w>0?1:-1,u.push(G.x,G.y,G.z),d.push(V/y),d.push(1-I/D),W+=1}}for(let I=0;I<D;I++)for(let C=0;C<y;C++){const V=h+C+N*I,Q=h+C+N*(I+1),ee=h+(C+1)+N*(I+1),ce=h+(C+1)+N*I;c.push(V,Q,ce),c.push(Q,ee,ce),F+=6}a.addGroup(p,F,E),p+=F,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=cr(i[t]);for(const r in n)e[r]=n[r]}return e}function Wd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ef(i){return i.getRenderTarget()===null?i.outputColorSpace:_n}const Xd={clone:cr,merge:Ct};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tf extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends tf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vi=-90,ki=1;class Yd extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new kt(Vi,ki,e,t);r.layers=this.layers,this.add(r);const s=new kt(Vi,ki,e,t);s.layers=this.layers,this.add(s);const o=new kt(Vi,ki,e,t);o.layers=this.layers,this.add(o);const a=new kt(Vi,ki,e,t);a.layers=this.layers,this.add(a);const c=new kt(Vi,ki,e,t);c.layers=this.layers,this.add(c);const l=new kt(Vi,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class nf extends Bt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kd extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===pi?et:mi),this.texture=new nf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mr(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:$n});s.uniforms.tEquirect.value=t;const o=new Un(r,s),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Vt),new Yd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ka=new q,Zd=new q,jd=new Ne;class li{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ka.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ka),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jd.getNormalMatrix(e),r=this.coplanarPoint(Ka).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new $o,Es=new q;class rf{constructor(e=new li,t=new li,n=new li,r=new li,s=new li,o=new li){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],p=r[8],_=r[9],g=r[10],m=r[11],f=r[12],x=r[13],v=r[14],M=r[15];if(n[0].setComponents(c-s,h-l,m-p,M-f).normalize(),n[1].setComponents(c+s,h+l,m+p,M+f).normalize(),n[2].setComponents(c+o,h+u,m+_,M+x).normalize(),n[3].setComponents(c-o,h-u,m-_,M-x).normalize(),n[4].setComponents(c-a,h-d,m-g,M-v).normalize(),t===Dn)n[5].setComponents(c+a,h+d,m+g,M+v).normalize();else if(t===Gs)n[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Jd(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const d=l.array,h=l.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,d,h),l.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){const h=u.array,p=u.updateRange;i.bindBuffer(d,l),p.count===-1?i.bufferSubData(d,0,h):(t?i.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,r(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:c}}class Ko extends bi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*h-o;for(let v=0;v<l;v++){const M=v*d-s;_.push(M,-x,0),g.push(0,0,1),m.push(v/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){const v=x+l*f,M=x+l*(f+1),A=x+1+l*(f+1),w=x+1+l*f;p.push(v,M,w),p.push(M,A,w)}this.setIndex(p),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(g,3)),this.setAttribute("uv",new _i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Zp=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
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
}`,jp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
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
}`,i_=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,r_=`#define DISTANCE
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
}`,s_=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
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
}`,l_=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`#include <common>
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
}`,f_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,h_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,p_=`#define MATCAP
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
}`,m_=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,__=`#define NORMAL
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
}`,g_=`#define NORMAL
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
}`,v_=`#define PHONG
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
}`,x_=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,E_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define TOON
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
}`,y_=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,T_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,b_=`#include <common>
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
}`,w_=`uniform vec3 color;
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
}`,R_=`uniform float rotation;
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
}`,C_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ue={alphahash_fragment:Qd,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:rp,aomap_fragment:sp,aomap_pars_fragment:ap,begin_vertex:op,beginnormal_vertex:cp,bsdfs:lp,iridescence_fragment:up,bumpmap_pars_fragment:fp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:_p,color_pars_fragment:gp,color_pars_vertex:vp,color_vertex:xp,common:Ep,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:yp,displacementmap_vertex:Tp,emissivemap_fragment:Ap,emissivemap_pars_fragment:bp,colorspace_fragment:wp,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Pp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Wp,envmap_vertex:Up,fog_vertex:Ip,fog_pars_vertex:Np,fog_fragment:Op,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_fragment:zp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Vp,lights_pars_begin:kp,lights_toon_fragment:Xp,lights_toon_pars_fragment:qp,lights_phong_fragment:$p,lights_phong_pars_fragment:Yp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Zp,lights_fragment_begin:jp,lights_fragment_maps:Jp,lights_fragment_end:Qp,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:rm,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:cm,metalnessmap_pars_fragment:lm,morphcolor_vertex:um,morphnormal_vertex:fm,morphtarget_pars_vertex:hm,morphtarget_vertex:dm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:_m,normal_pars_vertex:gm,normal_vertex:vm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:ym,opaque_fragment:Tm,packing:Am,premultiplied_alpha_fragment:bm,project_vertex:wm,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Um,shadowmap_vertex:Im,shadowmask_pars_fragment:Nm,skinbase_vertex:Om,skinning_pars_vertex:Fm,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:Gm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:km,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:$m,uv_vertex:Ym,worldpos_vertex:Km,background_vert:Zm,background_frag:jm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:e_,cube_frag:t_,depth_vert:n_,depth_frag:i_,distanceRGBA_vert:r_,distanceRGBA_frag:s_,equirect_vert:a_,equirect_frag:o_,linedashed_vert:c_,linedashed_frag:l_,meshbasic_vert:u_,meshbasic_frag:f_,meshlambert_vert:h_,meshlambert_frag:d_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:__,meshnormal_frag:g_,meshphong_vert:v_,meshphong_frag:x_,meshphysical_vert:E_,meshphysical_frag:S_,meshtoon_vert:M_,meshtoon_frag:y_,points_vert:T_,points_frag:A_,shadow_vert:b_,shadow_frag:w_,sprite_vert:R_,sprite_frag:C_},ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},hn={basic:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ct([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ct([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ct([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ct([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ct([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ct([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ct([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ct([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ct([ae.common,ae.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ct([ae.lights,ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};hn.physical={uniforms:Ct([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ss={r:0,b:0,g:0};function L_(i,e,t,n,r,s,o){const a=new Je(0);let c=s===!0?0:1,l,u,d=null,h=0,p=null;function _(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,c):v&&v.isColor&&(g(v,1),x=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ta)?(u===void 0&&(u=new Un(new mr(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:cr(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==et,(d!==v||h!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Un(new Ko(2,2),new xi({name:"BackgroundMaterial",uniforms:cr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=v.colorSpace!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){m.getRGB(Ss,ef(i)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function P_(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function d(O,N,J,W,F){let G=!1;if(o){const I=g(W,J,N);l!==I&&(l=I,p(l.object)),G=f(O,W,J,F),G&&x(O,W,J,F)}else{const I=N.wireframe===!0;(l.geometry!==W.id||l.program!==J.id||l.wireframe!==I)&&(l.geometry=W.id,l.program=J.id,l.wireframe=I,G=!0)}F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,D(O,N,J,W),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function g(O,N,J){const W=J.wireframe===!0;let F=a[O.id];F===void 0&&(F={},a[O.id]=F);let G=F[N.id];G===void 0&&(G={},F[N.id]=G);let I=G[W];return I===void 0&&(I=m(h()),G[W]=I),I}function m(O){const N=[],J=[],W=[];for(let F=0;F<r;F++)N[F]=0,J[F]=0,W[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:J,attributeDivisors:W,object:O,attributes:{},index:null}}function f(O,N,J,W){const F=l.attributes,G=N.attributes;let I=0;const C=J.getAttributes();for(const V in C)if(C[V].location>=0){const ee=F[V];let ce=G[V];if(ce===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;I++}return l.attributesNum!==I||l.index!==W}function x(O,N,J,W){const F={},G=N.attributes;let I=0;const C=J.getAttributes();for(const V in C)if(C[V].location>=0){let ee=G[V];ee===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),F[V]=ce,I++}l.attributes=F,l.attributesNum=I,l.index=W}function v(){const O=l.newAttributes;for(let N=0,J=O.length;N<J;N++)O[N]=0}function M(O){A(O,0)}function A(O,N){const J=l.newAttributes,W=l.enabledAttributes,F=l.attributeDivisors;J[O]=1,W[O]===0&&(i.enableVertexAttribArray(O),W[O]=1),F[O]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,N),F[O]=N)}function w(){const O=l.newAttributes,N=l.enabledAttributes;for(let J=0,W=N.length;J<W;J++)N[J]!==O[J]&&(i.disableVertexAttribArray(J),N[J]=0)}function y(O,N,J,W,F,G,I){I===!0?i.vertexAttribIPointer(O,N,J,F,G):i.vertexAttribPointer(O,N,J,W,F,G)}function D(O,N,J,W){if(n.isWebGL2===!1&&(O.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const F=W.attributes,G=J.getAttributes(),I=N.defaultAttributeValues;for(const C in G){const V=G[C];if(V.location>=0){let Q=F[C];if(Q===void 0&&(C==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),C==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){const ee=Q.normalized,ce=Q.itemSize,j=t.get(Q);if(j===void 0)continue;const he=j.buffer,pe=j.type,Ee=j.bytesPerElement,Ve=n.isWebGL2===!0&&(pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===zu);if(Q.isInterleavedBufferAttribute){const Pe=Q.data,B=Pe.stride,oe=Q.offset;if(Pe.isInstancedInterleavedBuffer){for(let ue=0;ue<V.locationSize;ue++)A(V.location+ue,Pe.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ue=0;ue<V.locationSize;ue++)M(V.location+ue);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ue=0;ue<V.locationSize;ue++)y(V.location+ue,ce/V.locationSize,pe,ee,B*Ee,(oe+ce/V.locationSize*ue)*Ee,Ve)}else{if(Q.isInstancedBufferAttribute){for(let Pe=0;Pe<V.locationSize;Pe++)A(V.location+Pe,Q.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)M(V.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Pe=0;Pe<V.locationSize;Pe++)y(V.location+Pe,ce/V.locationSize,pe,ee,ce*Ee,ce/V.locationSize*Pe*Ee,Ve)}}else if(I!==void 0){const ee=I[C];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(V.location,ee);break;case 3:i.vertexAttrib3fv(V.location,ee);break;case 4:i.vertexAttrib4fv(V.location,ee);break;default:i.vertexAttrib1fv(V.location,ee)}}}}w()}function E(){k();for(const O in a){const N=a[O];for(const J in N){const W=N[J];for(const F in W)_(W[F].object),delete W[F];delete N[J]}delete a[O]}}function T(O){if(a[O.id]===void 0)return;const N=a[O.id];for(const J in N){const W=N[J];for(const F in W)_(W[F].object),delete W[F];delete N[J]}delete a[O.id]}function U(O){for(const N in a){const J=a[N];if(J[O.id]===void 0)continue;const W=J[O.id];for(const F in W)_(W[F].object),delete W[F];delete J[O.id]}}function k(){L(),u=!0,l!==c&&(l=c,p(l.object))}function L(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:k,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:M,disableUnusedAttributes:w}}function D_(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,d){if(d===0)return;let h,p;if(r)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,l,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function U_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),A=v&&M,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:w}}function I_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new li,a=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const x=s?0:n,v=x*4;let M=f.clippingState||null;c.value=M,M=u(_,h,v,p);for(let A=0;A!==v;++A)M[A]=t[A];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,M=p;v!==g;++v,M+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function N_(i){let e=new WeakMap;function t(o,a){return a===co?o.mapping=sr:a===lo&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===co||a===lo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Kd(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class O_ extends tf{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,yl=[.125,.215,.35,.446,.526,.582],fi=20,Za=new O_,Tl=new Je;let ja=null;const ui=(1+Math.sqrt(5))/2,Wi=1/ui,Al=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,ui,Wi),new q(0,ui,-Wi),new q(Wi,0,ui),new q(-Wi,0,ui),new q(ui,Wi,0),new q(-ui,Wi,0)];class bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ja=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja),e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Nr,format:on,colorSpace:_n,depthBuffer:!1},r=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F_(s)),this._blurMaterial=B_(s,e,t)}return r}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,r){const a=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Tl),u.toneMapping=Yn,u.autoClear=!1;const p=new Yo({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new Un(new mr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Tl),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):x===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;Ms(r,x*v,f>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===sr||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Al[(r-1)%Al.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Un(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):fi;m>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const f=[];let x=0;for(let y=0;y<fi;++y){const D=y/g,E=Math.exp(-D*D/2);f.push(E),y===0?x+=E:y<m&&(x+=2*E)}for(let y=0;y<f.length;y++)f[y]=f[y]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const M=this._sizeLods[r],A=3*M*(r>v-Zi?r-v+Zi:0),w=4*(this._cubeSize-M);Ms(t,A,w,3*M,2*M),c.setRenderTarget(t),c.render(d,Za)}}function F_(i){const e=[],t=[],n=[];let r=i;const s=i-Zi+1+yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Zi?c=yl[o-i+Zi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*p),v=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let w=0;w<p;w++){const y=w%3*2/3-1,D=w>2?0:-1,E=[y,D,0,y+2/3,D,0,y+2/3,D+1,0,y,D,0,y+2/3,D+1,0,y,D+1,0];x.set(E,g*_*w),v.set(h,m*_*w);const T=[w,w,w,w,w,w];M.set(T,f*_*w)}const A=new bi;A.setAttribute("position",new mn(x,g)),A.setAttribute("uv",new mn(v,m)),A.setAttribute("faceIndex",new mn(M,f)),e.push(A),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function B_(i,e,t){const n=new Float32Array(fi),r=new q(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Rl(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Cl(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function z_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===co||c===lo,u=c===sr||c===ar;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new bl(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new bl(i));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function G_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function H_(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],i.ARRAY_BUFFER)}}function l(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let v=0,M=x.length;v<M;v+=3){const A=x[v+0],w=x[v+1],y=x[v+2];h.push(A,w,w,y,y,A)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const A=v+0,w=v+1,y=v+2;h.push(A,w,w,y,y,A)}}else return;const m=new(qu(h)?Qu:Ju)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function V_(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,p){i.drawElements(s,p,a,h*c),t.update(p,s,1)}function d(h,p,_){if(_===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,h*c,_),t.update(p,s,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function k_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function W_(i,e){return i[0]-e[0]}function X_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function q_(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let O=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let D=0;x===!0&&(D=1),v===!0&&(D=2),M===!0&&(D=3);let E=u.attributes.position.count*D,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*T*4*_),k=new Ku(U,E,T,_);k.type=Xn,k.needsUpdate=!0;const L=D*4;for(let N=0;N<_;N++){const J=A[N],W=w[N],F=y[N],G=E*T*4*N;for(let I=0;I<J.count;I++){const C=I*L;x===!0&&(o.fromBufferAttribute(J,I),U[G+C+0]=o.x,U[G+C+1]=o.y,U[G+C+2]=o.z,U[G+C+3]=0),v===!0&&(o.fromBufferAttribute(W,I),U[G+C+4]=o.x,U[G+C+5]=o.y,U[G+C+6]=o.z,U[G+C+7]=0),M===!0&&(o.fromBufferAttribute(F,I),U[G+C+8]=o.x,U[G+C+9]=o.y,U[G+C+10]=o.z,U[G+C+11]=F.itemSize===4?o.w:1)}}g={count:_,texture:k,size:new Xe(E,T)},s.set(u,g),u.addEventListener("dispose",O)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const f=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",h),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==p){_=[];for(let v=0;v<p;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<p;v++){const M=_[v];M[0]=v,M[1]=h[v]}_.sort(X_);for(let v=0;v<8;v++)v<p&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(W_);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const M=a[v],A=M[0],w=M[1];A!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+v)!==g[A]&&u.setAttribute("morphTarget"+v,g[A]),m&&u.getAttribute("morphNormal"+v)!==m[A]&&u.setAttribute("morphNormal"+v,m[A]),r[v]=w,f+=w):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const x=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function $_(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const af=new Bt,of=new Ku,cf=new Pd,lf=new nf,Ll=[],Pl=[],Dl=new Float32Array(16),Ul=new Float32Array(9),Il=new Float32Array(4);function _r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ll[r];if(s===void 0&&(s=new Float32Array(r),Ll[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=Pl[e];t===void 0&&(t=new Int32Array(e),Pl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Y_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function J_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),dt(t,n)}}function Q_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Ul.set(n),i.uniformMatrix3fv(this.addr,!1,Ul),dt(t,n)}}function eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),dt(t,n)}}function tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||af,r)}function ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cf,r)}function fg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||lf,r)}function hg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||of,r)}function dg(i){switch(i){case 5126:return Y_;case 35664:return K_;case 35665:return Z_;case 35666:return j_;case 35674:return J_;case 35675:return Q_;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return ag;case 36295:return og;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return hg}}function pg(i,e){i.uniform1fv(this.addr,e)}function mg(i,e){const t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function _g(i,e){const t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function gg(i,e){const t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function vg(i,e){const t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xg(i,e){const t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Eg(i,e){const t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sg(i,e){i.uniform1iv(this.addr,e)}function Mg(i,e){i.uniform2iv(this.addr,e)}function yg(i,e){i.uniform3iv(this.addr,e)}function Tg(i,e){i.uniform4iv(this.addr,e)}function Ag(i,e){i.uniform1uiv(this.addr,e)}function bg(i,e){i.uniform2uiv(this.addr,e)}function wg(i,e){i.uniform3uiv(this.addr,e)}function Rg(i,e){i.uniform4uiv(this.addr,e)}function Cg(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||af,s[o])}function Lg(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cf,s[o])}function Pg(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||lf,s[o])}function Dg(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||of,s[o])}function Ug(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return _g;case 35666:return gg;case 35674:return vg;case 35675:return xg;case 35676:return Eg;case 5124:case 35670:return Sg;case 35667:case 35671:return Mg;case 35668:case 35672:return yg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return bg;case 36295:return wg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dg(t.type)}}class Ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ug(t.type)}}class Og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function Nl(i,e){i.seq.push(e),i.map[e.id]=e}function Fg(i,e,t){const n=i.name,r=n.length;for(Ja.lastIndex=0;;){const s=Ja.exec(n),o=Ja.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Nl(t,l===void 0?new Ig(a,i,e):new Ng(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Og(a),Nl(t,d)),t=d}}}class Ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Fg(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ol(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Bg=0;function zg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gg(i){switch(i){case _n:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zg(i.getShaderSource(e),o)}else return r}function Hg(i,e){const t=Gg(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vg(i,e){let t;switch(e){case qh:t="Linear";break;case $h:t="Reinhard";break;case Yh:t="OptimizedCineon";break;case Kh:t="ACESFilmic";break;case Zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rr).join(`
`)}function Wg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Rr(i){return i!==""}function Bl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(qg,Yg)}const $g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yg(i,e){let t=Ue[e];if(t===void 0){const n=$g.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _o(t)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(Kg,Zg)}function Zg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case ar:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function ev(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Wh:e="ENVMAP_BLENDING_MIX";break;case Xh:e="ENVMAP_BLENDING_ADD";break}return e}function tv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=jg(t),l=Jg(t),u=Qg(t),d=ev(t),h=tv(t),p=t.isWebGL2?"":kg(t),_=Wg(s),g=r.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rr).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(m=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[p,Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Hg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=_o(o),o=Bl(o,t),o=zl(o,t),a=_o(a),a=Bl(a,t),a=zl(a,t),o=Gl(o),a=Gl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,M=x+f+a,A=Ol(r,r.VERTEX_SHADER,v),w=Ol(r,r.FRAGMENT_SHADER,M);if(r.attachShader(g,A),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(g).trim(),T=r.getShaderInfoLog(A).trim(),U=r.getShaderInfoLog(w).trim();let k=!0,L=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,w);else{const O=Fl(r,A,"vertex"),N=Fl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+O+`
`+N)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(T===""||U==="")&&(L=!1);L&&(this.diagnostics={runnable:k,programLog:E,vertexShader:{log:T,prefix:m},fragmentShader:{log:U,prefix:f}})}r.deleteShader(A),r.deleteShader(w);let y;this.getUniforms=function(){return y===void 0&&(y=new Ls(r,g)),y};let D;return this.getAttributes=function(){return D===void 0&&(D=Xg(r,g)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let iv=0;class rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sv(e),t.set(e,n)),n}}class sv{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}}function av(i,e,t,n,r,s,o){const a=new Zu,c=new rv,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,T,U,k,L){const O=k.fog,N=L.geometry,J=E.isMeshStandardMaterial?k.environment:null,W=(E.isMeshStandardMaterial?t:e).get(E.envMap||J),F=W&&W.mapping===ta?W.image.height:null,G=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const I=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,C=I!==void 0?I.length:0;let V=0;N.morphAttributes.position!==void 0&&(V=1),N.morphAttributes.normal!==void 0&&(V=2),N.morphAttributes.color!==void 0&&(V=3);let Q,ee,ce,j;if(G){const Ke=hn[G];Q=Ke.vertexShader,ee=Ke.fragmentShader}else Q=E.vertexShader,ee=E.fragmentShader,c.update(E),ce=c.getVertexShaderID(E),j=c.getFragmentShaderID(E);const he=i.getRenderTarget(),pe=L.isInstancedMesh===!0,Ee=!!E.map,Ve=!!E.matcap,Pe=!!W,B=!!E.aoMap,oe=!!E.lightMap,ue=!!E.bumpMap,Te=!!E.normalMap,ye=!!E.displacementMap,Ye=!!E.emissiveMap,ze=!!E.metalnessMap,Ie=!!E.roughnessMap,We=E.anisotropy>0,mt=E.clearcoat>0,Mt=E.iridescence>0,R=E.sheen>0,S=E.transmission>0,X=We&&!!E.anisotropyMap,ne=mt&&!!E.clearcoatMap,te=mt&&!!E.clearcoatNormalMap,ie=mt&&!!E.clearcoatRoughnessMap,ge=Mt&&!!E.iridescenceMap,re=Mt&&!!E.iridescenceThicknessMap,Y=R&&!!E.sheenColorMap,Se=R&&!!E.sheenRoughnessMap,ve=!!E.specularMap,xe=!!E.specularColorMap,me=!!E.specularIntensityMap,_e=S&&!!E.transmissionMap,Oe=S&&!!E.thicknessMap,qe=!!E.gradientMap,P=!!E.alphaMap,le=E.alphaTest>0,$=!!E.alphaHash,se=!!E.extensions,fe=!!N.attributes.uv1,He=!!N.attributes.uv2,tt=!!N.attributes.uv3;let st=Yn;return E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(st=i.toneMapping),{isWebGL2:u,shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:Q,fragmentShader:ee,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:pe,instancingColor:pe&&L.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:_n,map:Ee,matcap:Ve,envMap:Pe,envMapMode:Pe&&W.mapping,envMapCubeUVHeight:F,aoMap:B,lightMap:oe,bumpMap:ue,normalMap:Te,displacementMap:h&&ye,emissiveMap:Ye,normalMapObjectSpace:Te&&E.normalMapType===ud,normalMapTangentSpace:Te&&E.normalMapType===ld,metalnessMap:ze,roughnessMap:Ie,anisotropy:We,anisotropyMap:X,clearcoat:mt,clearcoatMap:ne,clearcoatNormalMap:te,clearcoatRoughnessMap:ie,iridescence:Mt,iridescenceMap:ge,iridescenceThicknessMap:re,sheen:R,sheenColorMap:Y,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:xe,specularIntensityMap:me,transmission:S,transmissionMap:_e,thicknessMap:Oe,gradientMap:qe,opaque:E.transparent===!1&&E.blending===Ji,alphaMap:P,alphaTest:le,alphaHash:$,combine:E.combine,mapUv:Ee&&g(E.map.channel),aoMapUv:B&&g(E.aoMap.channel),lightMapUv:oe&&g(E.lightMap.channel),bumpMapUv:ue&&g(E.bumpMap.channel),normalMapUv:Te&&g(E.normalMap.channel),displacementMapUv:ye&&g(E.displacementMap.channel),emissiveMapUv:Ye&&g(E.emissiveMap.channel),metalnessMapUv:ze&&g(E.metalnessMap.channel),roughnessMapUv:Ie&&g(E.roughnessMap.channel),anisotropyMapUv:X&&g(E.anisotropyMap.channel),clearcoatMapUv:ne&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(E.sheenRoughnessMap.channel),specularMapUv:ve&&g(E.specularMap.channel),specularColorMapUv:xe&&g(E.specularColorMap.channel),specularIntensityMapUv:me&&g(E.specularIntensityMap.channel),transmissionMapUv:_e&&g(E.transmissionMap.channel),thicknessMapUv:Oe&&g(E.thicknessMap.channel),alphaMapUv:P&&g(E.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Te||We),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:He,vertexUv3s:tt,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Ee||P),fog:!!O,useFog:E.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&E.map.isVideoTexture===!0&&E.map.colorSpace===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pn,flipSided:E.side===It,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:se&&E.extensions.derivatives===!0,extensionFragDepth:se&&E.extensions.fragDepth===!0,extensionDrawBuffers:se&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)T.push(U),T.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(x(T,E),v(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function x(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function M(E){const T=_[E.type];let U;if(T){const k=hn[T];U=Xd.clone(k.uniforms)}else U=E.uniforms;return U}function A(E,T){let U;for(let k=0,L=l.length;k<L;k++){const O=l[k];if(O.cacheKey===T){U=O,++U.usedTimes;break}}return U===void 0&&(U=new nv(i,T,E,s),l.push(U)),U}function w(E){if(--E.usedTimes===0){const T=l.indexOf(E);l[T]=l[l.length-1],l.pop(),E.destroy()}}function y(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:y,programs:l,dispose:D}}function ov(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,p,_,g,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||cv),n.length>1&&n.sort(h||Vl),r.length>1&&r.sort(h||Vl)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function lv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new kl,i.set(n,[o])):r>=s.length?(o=new kl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Je};break;case"SpotLight":t={position:new q,direction:new q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function fv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hv=0;function dv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i,e){const t=new uv,n=fv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,o=new St,a=new St;function c(u,d){let h=0,p=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let g=0,m=0,f=0,x=0,v=0,M=0,A=0,w=0,y=0,D=0;u.sort(dv);const E=d===!0?Math.PI:1;for(let U=0,k=u.length;U<k;U++){const L=u[U],O=L.color,N=L.intensity,J=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*N*E,p+=O.g*N*E,_+=O.b*N*E;else if(L.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],N);else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const G=L.shadow,I=n.get(L);I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,r.directionalShadow[g]=I,r.directionalShadowMap[g]=W,r.directionalShadowMatrix[g]=L.shadow.matrix,M++}r.directional[g]=F,g++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(O).multiplyScalar(N*E),F.distance=J,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[f]=F;const G=L.shadow;if(L.map&&(r.spotLightMap[y]=L.map,y++,G.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[f]=G.matrix,L.castShadow){const I=n.get(L);I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,r.spotShadow[f]=I,r.spotShadowMap[f]=W,w++}f++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(O).multiplyScalar(N),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=F,x++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),F.distance=L.distance,F.decay=L.decay,L.castShadow){const G=L.shadow,I=n.get(L);I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,I.shadowCameraNear=G.camera.near,I.shadowCameraFar=G.camera.far,r.pointShadow[m]=I,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=L.shadow.matrix,A++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(N*E),F.groundColor.copy(L.groundColor).multiplyScalar(N*E),r.hemi[v]=F,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==x||T.hemiLength!==v||T.numDirectionalShadows!==M||T.numPointShadows!==A||T.numSpotShadows!==w||T.numSpotMaps!==y)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+y-D,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=D,T.directionalLength=g,T.pointLength=m,T.spotLength=f,T.rectAreaLength=x,T.hemiLength=v,T.numDirectionalShadows=M,T.numPointShadows=A,T.numSpotShadows=w,T.numSpotMaps=y,r.version=hv++)}function l(u,d){let h=0,p=0,_=0,g=0,m=0;const f=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(M.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const A=r.rectArea[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:r}}function Wl(i,e){const t=new pv(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function mv(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Wl(i,e),t.set(s,[c])):o>=a.length?(c=new Wl(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class _v extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gv extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`;function Ev(i,e,t){let n=new rf;const r=new Xe,s=new Xe,o=new Et,a=new _v({depthPacking:cd}),c=new gv,l={},u=t.maxTextureSize,d={[Zn]:It,[It]:Zn,[Pn]:Pn},h=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:vv,fragmentShader:xv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new bi;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Un(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let f=this.type;this.render=function(A,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const D=i.getRenderTarget(),E=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),U=i.state;U.setBlending($n),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=f!==Cn&&this.type===Cn,L=f===Cn&&this.type!==Cn;for(let O=0,N=A.length;O<N;O++){const J=A[O],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const F=W.getFrameExtents();if(r.multiply(F),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,W.mapSize.y=s.y)),W.map===null||k===!0||L===!0){const I=this.type!==Cn?{minFilter:Lt,magFilter:Lt}:{};W.map!==null&&W.map.dispose(),W.map=new vi(r.x,r.y,I),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const G=W.getViewportCount();for(let I=0;I<G;I++){const C=W.getViewport(I);o.set(s.x*C.x,s.y*C.y,s.x*C.z,s.y*C.w),U.viewport(o),W.updateMatrices(J,I),n=W.getFrustum(),M(w,y,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Cn&&x(W,y),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(D,E,T)};function x(A,w){const y=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,y,h,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,y,p,g,null)}function v(A,w,y,D){let E=null;const T=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)E=T;else if(E=y.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=E.uuid,k=w.uuid;let L=l[U];L===void 0&&(L={},l[U]=L);let O=L[k];O===void 0&&(O=E.clone(),L[k]=O),E=O}if(E.visible=w.visible,E.wireframe=w.wireframe,D===Cn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=i.properties.get(E);U.light=y}return E}function M(A,w,y,D,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const k=e.update(A),L=A.material;if(Array.isArray(L)){const O=k.groups;for(let N=0,J=O.length;N<J;N++){const W=O[N],F=L[W.materialIndex];if(F&&F.visible){const G=v(A,F,D,E);i.renderBufferDirect(y,null,k,G,A,W)}}}else if(L.visible){const O=v(A,L,D,E);i.renderBufferDirect(y,null,k,O,A,null)}}const U=A.children;for(let k=0,L=U.length;k<L;k++)M(U[k],w,y,D,E)}}function Sv(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const le=new Et;let $=null;const se=new Et(0,0,0,0);return{setMask:function(fe){$!==fe&&!P&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){P=fe},setClear:function(fe,He,tt,st,zn){zn===!0&&(fe*=st,He*=st,tt*=st),le.set(fe,He,tt,st),se.equals(le)===!1&&(i.clearColor(fe,He,tt,st),se.copy(le))},reset:function(){P=!1,$=null,se.set(-1,0,0,0)}}}function s(){let P=!1,le=null,$=null,se=null;return{setTest:function(fe){fe?he(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(fe){le!==fe&&!P&&(i.depthMask(fe),le=fe)},setFunc:function(fe){if($!==fe){switch(fe){case Fh:i.depthFunc(i.NEVER);break;case Bh:i.depthFunc(i.ALWAYS);break;case zh:i.depthFunc(i.LESS);break;case oo:i.depthFunc(i.LEQUAL);break;case Gh:i.depthFunc(i.EQUAL);break;case Hh:i.depthFunc(i.GEQUAL);break;case Vh:i.depthFunc(i.GREATER);break;case kh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=fe}},setLocked:function(fe){P=fe},setClear:function(fe){se!==fe&&(i.clearDepth(fe),se=fe)},reset:function(){P=!1,le=null,$=null,se=null}}}function o(){let P=!1,le=null,$=null,se=null,fe=null,He=null,tt=null,st=null,zn=null;return{setTest:function(Ke){P||(Ke?he(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!P&&(i.stencilMask(Ke),le=Ke)},setFunc:function(Ke,fn,wt){($!==Ke||se!==fn||fe!==wt)&&(i.stencilFunc(Ke,fn,wt),$=Ke,se=fn,fe=wt)},setOp:function(Ke,fn,wt){(He!==Ke||tt!==fn||st!==wt)&&(i.stencilOp(Ke,fn,wt),He=Ke,tt=fn,st=wt)},setLocked:function(Ke){P=Ke},setClear:function(Ke){zn!==Ke&&(i.clearStencil(Ke),zn=Ke)},reset:function(){P=!1,le=null,$=null,se=null,fe=null,He=null,tt=null,st=null,zn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,f=!1,x=null,v=null,M=null,A=null,w=null,y=null,D=null,E=!1,T=null,U=null,k=null,L=null,O=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,W=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=W>=2);let G=null,I={};const C=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),Q=new Et().fromArray(C),ee=new Et().fromArray(V);function ce(P,le,$,se){const fe=new Uint8Array(4),He=i.createTexture();i.bindTexture(P,He),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<$;tt++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(le+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return He}const j={};j[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(j[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(i.DEPTH_TEST),c.setFunc(oo),ye(!1),Ye(Rc),he(i.CULL_FACE),ue($n);function he(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function pe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ee(P,le){return p[P]!==le?(i.bindFramebuffer(P,le),p[P]=le,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=le),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function Ve(P,le){let $=g,se=!1;if(P)if($=_.get(le),$===void 0&&($=[],_.set(le,$)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let He=0,tt=fe.length;He<tt;He++)$[He]=i.COLOR_ATTACHMENT0+He;$.length=fe.length,se=!0}}else $[0]!==i.COLOR_ATTACHMENT0&&($[0]=i.COLOR_ATTACHMENT0,se=!0);else $[0]!==i.BACK&&($[0]=i.BACK,se=!0);se&&(t.isWebGL2?i.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Pe(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const B={[qi]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[wh]:i.FUNC_REVERSE_SUBTRACT};if(n)B[Dc]=i.MIN,B[Uc]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(B[Dc]=P.MIN_EXT,B[Uc]=P.MAX_EXT)}const oe={[Rh]:i.ZERO,[Ch]:i.ONE,[Lh]:i.SRC_COLOR,[Nu]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Ih]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[Ou]:i.ONE_MINUS_SRC_ALPHA,[Nh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA};function ue(P,le,$,se,fe,He,tt,st){if(P===$n){f===!0&&(pe(i.BLEND),f=!1);return}if(f===!1&&(he(i.BLEND),f=!0),P!==Ah){if(P!==x||st!==E){if((v!==qi||w!==qi)&&(i.blendEquation(i.FUNC_ADD),v=qi,w=qi),st)switch(P){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,A=null,y=null,D=null,x=P,E=st}return}fe=fe||le,He=He||$,tt=tt||se,(le!==v||fe!==w)&&(i.blendEquationSeparate(B[le],B[fe]),v=le,w=fe),($!==M||se!==A||He!==y||tt!==D)&&(i.blendFuncSeparate(oe[$],oe[se],oe[He],oe[tt]),M=$,A=se,y=He,D=tt),x=P,E=!1}function Te(P,le){P.side===Pn?pe(i.CULL_FACE):he(i.CULL_FACE);let $=P.side===It;le&&($=!$),ye($),P.blending===Ji&&P.transparent===!1?ue($n):ue(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const se=P.stencilWrite;l.setTest(se),se&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(P){T!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),T=P)}function Ye(P){P!==Mh?(he(i.CULL_FACE),P!==U&&(P===Rc?i.cullFace(i.BACK):P===yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),U=P}function ze(P){P!==k&&(J&&i.lineWidth(P),k=P)}function Ie(P,le,$){P?(he(i.POLYGON_OFFSET_FILL),(L!==le||O!==$)&&(i.polygonOffset(le,$),L=le,O=$)):pe(i.POLYGON_OFFSET_FILL)}function We(P){P?he(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function mt(P){P===void 0&&(P=i.TEXTURE0+N-1),G!==P&&(i.activeTexture(P),G=P)}function Mt(P,le,$){$===void 0&&(G===null?$=i.TEXTURE0+N-1:$=G);let se=I[$];se===void 0&&(se={type:void 0,texture:void 0},I[$]=se),(se.type!==P||se.texture!==le)&&(G!==$&&(i.activeTexture($),G=$),i.bindTexture(P,le||j[P]),se.type=P,se.texture=le)}function R(){const P=I[G];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(P){Q.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function me(P){ee.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function _e(P,le){let $=d.get(le);$===void 0&&($=new WeakMap,d.set(le,$));let se=$.get(P);se===void 0&&(se=i.getUniformBlockIndex(le,P.name),$.set(P,se))}function Oe(P,le){const se=d.get(le).get(P);u.get(le)!==se&&(i.uniformBlockBinding(le,se,P.__bindingPointIndex),u.set(le,se))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,I={},p={},_=new WeakMap,g=[],m=null,f=!1,x=null,v=null,M=null,A=null,w=null,y=null,D=null,E=!1,T=null,U=null,k=null,L=null,O=null,Q.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:he,disable:pe,bindFramebuffer:Ee,drawBuffers:Ve,useProgram:Pe,setBlending:ue,setMaterial:Te,setFlipSided:ye,setCullFace:Ye,setLineWidth:ze,setPolygonOffset:Ie,setScissorTest:We,activeTexture:mt,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Se,texImage3D:ve,updateUBOMapping:_e,uniformBlockBinding:Oe,texStorage2D:re,texStorage3D:Y,texSubImage2D:ne,texSubImage3D:te,compressedTexSubImage2D:ie,compressedTexSubImage3D:ge,scissor:xe,viewport:me,reset:qe}}function Mv(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return f?new OffscreenCanvas(R,S):Hs("canvas")}function v(R,S,X,ne){let te=1;if((R.width>ne||R.height>ne)&&(te=ne/Math.max(R.width,R.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=S?mo:Math.floor,ge=ie(te*R.width),re=ie(te*R.height);g===void 0&&(g=x(ge,re));const Y=X?x(ge,re):g;return Y.width=ge,Y.height=re,Y.getContext("2d").drawImage(R,0,0,ge,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ge+"x"+re+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return cl(R.width)&&cl(R.height)}function A(R){return a?!1:R.wrapS!==an||R.wrapT!==an||R.minFilter!==Lt&&R.minFilter!==Vt}function w(R,S){return R.generateMipmaps&&S&&R.minFilter!==Lt&&R.minFilter!==Vt}function y(R){i.generateMipmap(R)}function D(R,S,X,ne,te=!1){if(a===!1)return S;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=S;return S===i.RED&&(X===i.FLOAT&&(ie=i.R32F),X===i.HALF_FLOAT&&(ie=i.R16F),X===i.UNSIGNED_BYTE&&(ie=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.R8UI),X===i.UNSIGNED_SHORT&&(ie=i.R16UI),X===i.UNSIGNED_INT&&(ie=i.R32UI),X===i.BYTE&&(ie=i.R8I),X===i.SHORT&&(ie=i.R16I),X===i.INT&&(ie=i.R32I)),S===i.RG&&(X===i.FLOAT&&(ie=i.RG32F),X===i.HALF_FLOAT&&(ie=i.RG16F),X===i.UNSIGNED_BYTE&&(ie=i.RG8)),S===i.RGBA&&(X===i.FLOAT&&(ie=i.RGBA32F),X===i.HALF_FLOAT&&(ie=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ie=ne===et&&te===!1?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)),(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(R,S,X){return w(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==Vt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){return R===Lt||R===Ic||R===Ta?i.NEAREST:i.LINEAR}function U(R){const S=R.target;S.removeEventListener("dispose",U),L(S),S.isVideoTexture&&_.delete(S)}function k(R){const S=R.target;S.removeEventListener("dispose",k),N(S)}function L(R){const S=n.get(R);if(S.__webglInit===void 0)return;const X=R.source,ne=m.get(X);if(ne){const te=ne[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&O(R),Object.keys(ne).length===0&&m.delete(X)}n.remove(R)}function O(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const X=R.source,ne=m.get(X);delete ne[S.__cacheKey],o.memory.textures--}function N(R){const S=R.texture,X=n.get(R),ne=n.get(S);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(X.__webglFramebuffer[te]))for(let ie=0;ie<X.__webglFramebuffer[te].length;ie++)i.deleteFramebuffer(X.__webglFramebuffer[te][ie]);else i.deleteFramebuffer(X.__webglFramebuffer[te]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[te])}else{if(Array.isArray(X.__webglFramebuffer))for(let te=0;te<X.__webglFramebuffer.length;te++)i.deleteFramebuffer(X.__webglFramebuffer[te]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let te=0;te<X.__webglColorRenderbuffer.length;te++)X.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[te]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,ie=S.length;te<ie;te++){const ge=n.get(S[te]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(R)}let J=0;function W(){J=0}function F(){const R=J;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),J+=1,R}function G(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function I(R,S){const X=n.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(X,R,S);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function C(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ee(X,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function V(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ee(X,R,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function Q(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ve(X,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const ee={[uo]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},ce={[Lt]:i.NEAREST,[Ic]:i.NEAREST_MIPMAP_NEAREST,[Ta]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[jh]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},j={[hd]:i.NEVER,[xd]:i.ALWAYS,[dd]:i.LESS,[md]:i.LEQUAL,[pd]:i.EQUAL,[vd]:i.GEQUAL,[_d]:i.GREATER,[gd]:i.NOTEQUAL};function he(R,S,X){if(X?(i.texParameteri(R,i.TEXTURE_WRAP_S,ee[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ee[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ee[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ce[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ce[S.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(S.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Lt&&S.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,j[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Lt||S.minFilter!==Ta&&S.minFilter!==Ir||S.type===Xn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Nr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function pe(R,S){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",U));const ne=S.source;let te=m.get(ne);te===void 0&&(te={},m.set(ne,te));const ie=G(S);if(ie!==R.__cacheKey){te[ie]===void 0&&(te[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),te[ie].usedTimes++;const ge=te[R.__cacheKey];ge!==void 0&&(te[R.__cacheKey].usedTimes--,ge.usedTimes===0&&O(S)),R.__cacheKey=ie,R.__webglTexture=te[ie].texture}return X}function Ee(R,S,X){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);const te=pe(R,S),ie=S.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+X);const ge=n.get(ie);if(ie.version!==ge.__version||te===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const re=A(S)&&M(S.image)===!1;let Y=v(S.image,re,!1,u);Y=Mt(S,Y);const Se=M(Y)||a,ve=s.convert(S.format,S.colorSpace);let xe=s.convert(S.type),me=D(S.internalFormat,ve,xe,S.colorSpace,S.isVideoTexture);he(ne,S,Se);let _e;const Oe=S.mipmaps,qe=a&&S.isVideoTexture!==!0,P=ge.__version===void 0||te===!0,le=E(S,Y,Se);if(S.isDepthTexture)me=i.DEPTH_COMPONENT,a?S.type===Xn?me=i.DEPTH_COMPONENT32F:S.type===Wn?me=i.DEPTH_COMPONENT24:S.type===hi?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:S.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===di&&me===i.DEPTH_COMPONENT&&S.type!==qo&&S.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Wn,xe=s.convert(S.type)),S.format===or&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,S.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=hi,xe=s.convert(S.type))),P&&(qe?t.texStorage2D(i.TEXTURE_2D,1,me,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,me,Y.width,Y.height,0,ve,xe,null));else if(S.isDataTexture)if(Oe.length>0&&Se){qe&&P&&t.texStorage2D(i.TEXTURE_2D,le,me,Oe[0].width,Oe[0].height);for(let $=0,se=Oe.length;$<se;$++)_e=Oe[$],qe?t.texSubImage2D(i.TEXTURE_2D,$,0,0,_e.width,_e.height,ve,xe,_e.data):t.texImage2D(i.TEXTURE_2D,$,me,_e.width,_e.height,0,ve,xe,_e.data);S.generateMipmaps=!1}else qe?(P&&t.texStorage2D(i.TEXTURE_2D,le,me,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,ve,xe,Y.data)):t.texImage2D(i.TEXTURE_2D,0,me,Y.width,Y.height,0,ve,xe,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&P&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,me,Oe[0].width,Oe[0].height,Y.depth);for(let $=0,se=Oe.length;$<se;$++)_e=Oe[$],S.format!==on?ve!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,Y.depth,ve,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,me,_e.width,_e.height,Y.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,Y.depth,ve,xe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,me,_e.width,_e.height,Y.depth,0,ve,xe,_e.data)}else{qe&&P&&t.texStorage2D(i.TEXTURE_2D,le,me,Oe[0].width,Oe[0].height);for(let $=0,se=Oe.length;$<se;$++)_e=Oe[$],S.format!==on?ve!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,$,me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,$,0,0,_e.width,_e.height,ve,xe,_e.data):t.texImage2D(i.TEXTURE_2D,$,me,_e.width,_e.height,0,ve,xe,_e.data)}else if(S.isDataArrayTexture)qe?(P&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,me,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ve,xe,Y.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,Y.width,Y.height,Y.depth,0,ve,xe,Y.data);else if(S.isData3DTexture)qe?(P&&t.texStorage3D(i.TEXTURE_3D,le,me,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ve,xe,Y.data)):t.texImage3D(i.TEXTURE_3D,0,me,Y.width,Y.height,Y.depth,0,ve,xe,Y.data);else if(S.isFramebufferTexture){if(P)if(qe)t.texStorage2D(i.TEXTURE_2D,le,me,Y.width,Y.height);else{let $=Y.width,se=Y.height;for(let fe=0;fe<le;fe++)t.texImage2D(i.TEXTURE_2D,fe,me,$,se,0,ve,xe,null),$>>=1,se>>=1}}else if(Oe.length>0&&Se){qe&&P&&t.texStorage2D(i.TEXTURE_2D,le,me,Oe[0].width,Oe[0].height);for(let $=0,se=Oe.length;$<se;$++)_e=Oe[$],qe?t.texSubImage2D(i.TEXTURE_2D,$,0,0,ve,xe,_e):t.texImage2D(i.TEXTURE_2D,$,me,ve,xe,_e);S.generateMipmaps=!1}else qe?(P&&t.texStorage2D(i.TEXTURE_2D,le,me,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,xe,Y)):t.texImage2D(i.TEXTURE_2D,0,me,ve,xe,Y);w(S,Se)&&y(ne),ge.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ve(R,S,X){if(S.image.length!==6)return;const ne=pe(R,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const ie=n.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,Y=[];for(let $=0;$<6;$++)!ge&&!re?Y[$]=v(S.image[$],!1,!0,l):Y[$]=re?S.image[$].image:S.image[$],Y[$]=Mt(S,Y[$]);const Se=Y[0],ve=M(Se)||a,xe=s.convert(S.format,S.colorSpace),me=s.convert(S.type),_e=D(S.internalFormat,xe,me,S.colorSpace),Oe=a&&S.isVideoTexture!==!0,qe=ie.__version===void 0||ne===!0;let P=E(S,Se,ve);he(i.TEXTURE_CUBE_MAP,S,ve);let le;if(ge){Oe&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,P,_e,Se.width,Se.height);for(let $=0;$<6;$++){le=Y[$].mipmaps;for(let se=0;se<le.length;se++){const fe=le[se];S.format!==on?xe!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,fe.width,fe.height,xe,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,fe.width,fe.height,xe,me,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,_e,fe.width,fe.height,0,xe,me,fe.data)}}}else{le=S.mipmaps,Oe&&qe&&(le.length>0&&P++,t.texStorage2D(i.TEXTURE_CUBE_MAP,P,_e,Y[0].width,Y[0].height));for(let $=0;$<6;$++)if(re){Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Y[$].width,Y[$].height,xe,me,Y[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,_e,Y[$].width,Y[$].height,0,xe,me,Y[$].data);for(let se=0;se<le.length;se++){const He=le[se].image[$].image;Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,He.width,He.height,xe,me,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,_e,He.width,He.height,0,xe,me,He.data)}}else{Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xe,me,Y[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,_e,xe,me,Y[$]);for(let se=0;se<le.length;se++){const fe=le[se];Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,xe,me,fe.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,_e,xe,me,fe.image[$])}}}w(S,ve)&&y(i.TEXTURE_CUBE_MAP),ie.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Pe(R,S,X,ne,te,ie){const ge=s.convert(X.format,X.colorSpace),re=s.convert(X.type),Y=D(X.internalFormat,ge,re,X.colorSpace);if(!n.get(S).__hasExternalTextures){const ve=Math.max(1,S.width>>ie),xe=Math.max(1,S.height>>ie);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,Y,ve,xe,S.depth,0,ge,re,null):t.texImage2D(te,ie,Y,ve,xe,0,ge,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),We(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,te,n.get(X).__webglTexture,0,Ie(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,te,n.get(X).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function B(R,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let ne=i.DEPTH_COMPONENT16;if(X||We(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Xn?ne=i.DEPTH_COMPONENT32F:te.type===Wn&&(ne=i.DEPTH_COMPONENT24));const ie=Ie(S);We(S)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ne,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ne,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Ie(S);X&&We(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,S.width,S.height):We(S)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],ge=s.convert(ie.format,ie.colorSpace),re=s.convert(ie.type),Y=D(ie.internalFormat,ge,re,ie.colorSpace),Se=Ie(S);X&&We(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Y,S.width,S.height):We(S)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,te=Ie(S);if(S.depthTexture.format===di)We(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(S.depthTexture.format===or)We(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ue(R){const S=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,R)}else if(X){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=i.createRenderbuffer(),B(S.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),B(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(R,S,X){const ne=n.get(R);S!==void 0&&Pe(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ue(R)}function ye(R){const S=R.texture,X=n.get(R),ne=n.get(S);R.addEventListener("dispose",k),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,o.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,ge=M(R)||a;if(te){X.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[re]=[];for(let Y=0;Y<S.mipmaps.length;Y++)X.__webglFramebuffer[re][Y]=i.createFramebuffer()}else X.__webglFramebuffer[re]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)X.__webglFramebuffer[re]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ie)if(r.drawBuffers){const re=R.texture;for(let Y=0,Se=re.length;Y<Se;Y++){const ve=n.get(re[Y]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&We(R)===!1){const re=ie?S:[S];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Y=0;Y<re.length;Y++){const Se=re[Y];X.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Y]);const ve=s.convert(Se.format,Se.colorSpace),xe=s.convert(Se.type),me=D(Se.internalFormat,ve,xe,Se.colorSpace,R.isXRRenderTarget===!0),_e=Ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,X.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),B(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),he(i.TEXTURE_CUBE_MAP,S,ge);for(let re=0;re<6;re++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)Pe(X.__webglFramebuffer[re][Y],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Y);else Pe(X.__webglFramebuffer[re],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);w(S,ge)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const re=R.texture;for(let Y=0,Se=re.length;Y<Se;Y++){const ve=re[Y],xe=n.get(ve);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),he(i.TEXTURE_2D,ve,ge),Pe(X.__webglFramebuffer,R,ve,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,0),w(ve,ge)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ne.__webglTexture),he(re,S,ge),a&&S.mipmaps&&S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)Pe(X.__webglFramebuffer[Y],R,S,i.COLOR_ATTACHMENT0,re,Y);else Pe(X.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,re,0);w(S,ge)&&y(re),t.unbindTexture()}R.depthBuffer&&ue(R)}function Ye(R){const S=M(R)||a,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,te=X.length;ne<te;ne++){const ie=X[ne];if(w(ie,S)){const ge=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(ie).__webglTexture;t.bindTexture(ge,re),y(ge),t.unbindTexture()}}}function ze(R){if(a&&R.samples>0&&We(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ne=R.height;let te=i.COLOR_BUFFER_BIT;const ie=[],ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){ie.push(i.COLOR_ATTACHMENT0+Se),R.depthBuffer&&ie.push(ge);const ve=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(ve===!1&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),Y&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[Se]),ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ge])),Y){const xe=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,X,ne,0,0,X,ne,te,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,re.__webglColorRenderbuffer[Se]);const ve=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Ie(R){return Math.min(d,R.samples)}function We(R){const S=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(R){const S=o.render.frame;_.get(R)!==S&&(_.set(R,S),R.update())}function Mt(R,S){const X=R.colorSpace,ne=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ho||X!==_n&&X!==mi&&(X===et||X===na?a===!1?e.has("EXT_sRGB")===!0&&ne===on?(R.format=ho,R.minFilter=Vt,R.generateMipmaps=!1):S=$u.sRGBToLinear(S):(ne!==on||te!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.setTexture2D=I,this.setTexture2DArray=C,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Te,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=We}const yv=0,ft=1;function Tv(i,e,t){const n=t.isWebGL2;function r(s,o=mi){let a;const c=o===et||o===na?ft:yv;if(s===Kn)return i.UNSIGNED_BYTE;if(s===Gu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Jh)return i.BYTE;if(s===Qh)return i.SHORT;if(s===qo)return i.UNSIGNED_SHORT;if(s===zu)return i.INT;if(s===Wn)return i.UNSIGNED_INT;if(s===Xn)return i.FLOAT;if(s===Nr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ed)return i.ALPHA;if(s===on)return i.RGBA;if(s===td)return i.LUMINANCE;if(s===nd)return i.LUMINANCE_ALPHA;if(s===di)return i.DEPTH_COMPONENT;if(s===or)return i.DEPTH_STENCIL;if(s===ho)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===id)return i.RED;if(s===Vu)return i.RED_INTEGER;if(s===rd)return i.RG;if(s===ku)return i.RG_INTEGER;if(s===Wu)return i.RGBA_INTEGER;if(s===Aa||s===ba||s===wa||s===Ra)if(c===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nc||s===Oc||s===Fc||s===Bc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Nc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Oc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zc||s===Gc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zc)return c===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hc||s===Vc||s===kc||s===Wc||s===Xc||s===qc||s===$c||s===Yc||s===Kc||s===Zc||s===jc||s===Jc||s===Qc||s===el)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$c)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qc)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===el)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ca||s===tl||s===nl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ca)return c===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ad||s===il||s===rl||s===sl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ca)return a.COMPRESSED_RED_RGTC1_EXT;if(s===il)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Av extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ys extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ys;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wv extends Bt{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:di,u!==di&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===di&&(n=Wn),n===void 0&&u===or&&(n=hi),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rv extends pr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const x=[],v=[],M=new kt;M.layers.enable(1),M.viewport=new Et;const A=new kt;A.layers.enable(2),A.viewport=new Et;const w=[M,A],y=new Av;y.layers.enable(1),y.layers.enable(2);let D=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let V=x[C];return V===void 0&&(V=new Qa,x[C]=V),V.getTargetRaySpace()},this.getControllerGrip=function(C){let V=x[C];return V===void 0&&(V=new Qa,x[C]=V),V.getGripSpace()},this.getHand=function(C){let V=x[C];return V===void 0&&(V=new Qa,x[C]=V),V.getHandSpace()};function T(C){const V=v.indexOf(C.inputSource);if(V===-1)return;const Q=x[V];Q!==void 0&&(Q.update(C.inputSource,C.frame,l||o),Q.dispatchEvent({type:C.type,data:C.inputSource}))}function U(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",k);for(let C=0;C<x.length;C++){const V=v[C];V!==null&&(v[C]=null,x[C].disconnect(V))}D=null,E=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,I.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",U),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:p}),f=new vi(p.framebufferWidth,p.framebufferHeight,{format:on,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let V=null,Q=null,ee=null;g.depth&&(ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=g.stencil?or:di,Q=g.stencil?hi:Wn);const ce={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),f=new vi(h.textureWidth,h.textureHeight,{format:on,type:Kn,depthTexture:new wv(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const j=e.properties.get(f);j.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(C){for(let V=0;V<C.removed.length;V++){const Q=C.removed[V],ee=v.indexOf(Q);ee>=0&&(v[ee]=null,x[ee].disconnect(Q))}for(let V=0;V<C.added.length;V++){const Q=C.added[V];let ee=v.indexOf(Q);if(ee===-1){for(let j=0;j<x.length;j++)if(j>=v.length){v.push(Q),ee=j;break}else if(v[j]===null){v[j]=Q,ee=j;break}if(ee===-1)break}const ce=x[ee];ce&&ce.connect(Q)}}const L=new q,O=new q;function N(C,V,Q){L.setFromMatrixPosition(V.matrixWorld),O.setFromMatrixPosition(Q.matrixWorld);const ee=L.distanceTo(O),ce=V.projectionMatrix.elements,j=Q.projectionMatrix.elements,he=ce[14]/(ce[10]-1),pe=ce[14]/(ce[10]+1),Ee=(ce[9]+1)/ce[5],Ve=(ce[9]-1)/ce[5],Pe=(ce[8]-1)/ce[0],B=(j[8]+1)/j[0],oe=he*Pe,ue=he*B,Te=ee/(-Pe+B),ye=Te*-Pe;V.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(ye),C.translateZ(Te),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const Ye=he+Te,ze=pe+Te,Ie=oe-ye,We=ue+(ee-ye),mt=Ee*pe/ze*Ye,Mt=Ve*pe/ze*Ye;C.projectionMatrix.makePerspective(Ie,We,mt,Mt,Ye,ze),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}function J(C,V){V===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(V.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;y.near=A.near=M.near=C.near,y.far=A.far=M.far=C.far,(D!==y.near||E!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,E=y.far);const V=C.parent,Q=y.cameras;J(y,V);for(let ee=0;ee<Q.length;ee++)J(Q[ee],V);Q.length===2?N(y,M,A):y.projectionMatrix.copy(M.projectionMatrix),W(C,y,V)};function W(C,V,Q){Q===null?C.matrix.copy(V.matrixWorld):(C.matrix.copy(Q.matrixWorld),C.matrix.invert(),C.matrix.multiply(V.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(V.projectionMatrix),C.projectionMatrixInverse.copy(V.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=po*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(C){c=C,h!==null&&(h.fixedFoveation=C),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=C)};let F=null;function G(C,V){if(u=V.getViewerPose(l||o),_=V,u!==null){const Q=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ee=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let ce=0;ce<Q.length;ce++){const j=Q[ce];let he=null;if(p!==null)he=p.getViewport(j);else{const Ee=d.getViewSubImage(h,j);he=Ee.viewport,ce===0&&(e.setRenderTargetTextures(f,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(f))}let pe=w[ce];pe===void 0&&(pe=new kt,pe.layers.enable(ce),pe.viewport=new Et,w[ce]=pe),pe.matrix.fromArray(j.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(j.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(he.x,he.y,he.width,he.height),ce===0&&(y.matrix.copy(pe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ee===!0&&y.cameras.push(pe)}}for(let Q=0;Q<x.length;Q++){const ee=v[Q],ce=x[Q];ee!==null&&ce!==void 0&&ce.update(ee,V,l||o)}F&&F(C,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),_=null}const I=new sf;I.setAnimationLoop(G),this.setAnimationLoop=function(C){F=C},this.dispose=function(){}}}function Cv(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ef(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,x,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===It&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===It&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lv(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function l(x,v){let M=r[x.id];M===void 0&&(_(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(x,A);const w=e.render.frame;s[x.id]!==w&&(h(x),s[x.id]=w)}function u(x){const v=d();x.__bindingPointIndex=v;const M=i.createBuffer(),A=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],M=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,y=M.length;w<y;w++){const D=M[w];if(p(D,w,A)===!0){const E=D.__offset,T=Array.isArray(D.value)?D.value:[D.value];let U=0;for(let k=0;k<T.length;k++){const L=T[k],O=g(L);typeof L=="number"?(D.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,E+U,D.__data)):L.isMatrix3?(D.__data[0]=L.elements[0],D.__data[1]=L.elements[1],D.__data[2]=L.elements[2],D.__data[3]=L.elements[0],D.__data[4]=L.elements[3],D.__data[5]=L.elements[4],D.__data[6]=L.elements[5],D.__data[7]=L.elements[0],D.__data[8]=L.elements[6],D.__data[9]=L.elements[7],D.__data[10]=L.elements[8],D.__data[11]=L.elements[0]):(L.toArray(D.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,D.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,M){const A=x.value;if(M[v]===void 0){if(typeof A=="number")M[v]=A;else{const w=Array.isArray(A)?A:[A],y=[];for(let D=0;D<w.length;D++)y.push(w[D].clone());M[v]=y}return!0}else if(typeof A=="number"){if(M[v]!==A)return M[v]=A,!0}else{const w=Array.isArray(M[v])?M[v]:[M[v]],y=Array.isArray(A)?A:[A];for(let D=0;D<w.length;D++){const E=w[D];if(E.equals(y[D])===!1)return E.copy(y[D]),!0}}return!1}function _(x){const v=x.uniforms;let M=0;const A=16;let w=0;for(let y=0,D=v.length;y<D;y++){const E=v[y],T={boundary:0,storage:0},U=Array.isArray(E.value)?E.value:[E.value];for(let k=0,L=U.length;k<L;k++){const O=U[k],N=g(O);T.boundary+=N.boundary,T.storage+=N.storage}if(E.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,y>0){w=M%A;const k=A-w;w!==0&&k-T.boundary<0&&(M+=A-w,E.__offset=M)}M+=T.storage}return w=M%A,w>0&&(M+=A-w),x.__size=M,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class uf{constructor(e={}){const{canvas:t=Sd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=et,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const v=this;let M=!1,A=0,w=0,y=null,D=-1,E=null;const T=new Et,U=new Et;let k=null;const L=new Je(0);let O=0,N=t.width,J=t.height,W=1,F=null,G=null;const I=new Et(0,0,N,J),C=new Et(0,0,N,J);let V=!1;const Q=new rf;let ee=!1,ce=!1,j=null;const he=new St,pe=new Xe,Ee=new q,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return y===null?W:1}let B=n;function oe(b,z){for(let K=0;K<b.length;K++){const H=b[K],Z=t.getContext(H,z);if(Z!==null)return Z}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xo}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",se,!1),B===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),B=oe(z,b),B===null)throw oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ue,Te,ye,Ye,ze,Ie,We,mt,Mt,R,S,X,ne,te,ie,ge,re,Y,Se,ve,xe,me,_e,Oe;function qe(){ue=new G_(B),Te=new U_(B,ue,e),ue.init(Te),me=new Tv(B,ue,Te),ye=new Sv(B,ue,Te),Ye=new k_(B),ze=new ov,Ie=new Mv(B,ue,ye,ze,Te,me,Ye),We=new N_(v),mt=new z_(v),Mt=new Jd(B,Te),_e=new P_(B,ue,Mt,Te),R=new H_(B,Mt,Ye,_e),S=new $_(B,R,Mt,Ye),Se=new q_(B,Te,Ie),ge=new I_(ze),X=new av(v,We,mt,ue,Te,_e,ge),ne=new Cv(v,ze),te=new lv,ie=new mv(ue,Te),Y=new L_(v,We,mt,ye,S,h,c),re=new Ev(v,S,Te),Oe=new Lv(B,Ye,Te,ye),ve=new D_(B,ue,Ye,Te),xe=new V_(B,ue,Ye,Te),Ye.programs=X.programs,v.capabilities=Te,v.extensions=ue,v.properties=ze,v.renderLists=te,v.shadowMap=re,v.state=ye,v.info=Ye}qe();const P=new Rv(v,B);this.xr=P,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(N,J,!1))},this.getSize=function(b){return b.set(N,J)},this.setSize=function(b,z,K=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,J=z,t.width=Math.floor(b*W),t.height=Math.floor(z*W),K===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(N*W,J*W).floor()},this.setDrawingBufferSize=function(b,z,K){N=b,J=z,W=K,t.width=Math.floor(b*K),t.height=Math.floor(z*K),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,z,K,H){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,z,K,H),ye.viewport(T.copy(I).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(C)},this.setScissor=function(b,z,K,H){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,z,K,H),ye.scissor(U.copy(C).multiplyScalar(W).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){ye.setScissorTest(V=b)},this.setOpaqueSort=function(b){F=b},this.setTransparentSort=function(b){G=b},this.getClearColor=function(b){return b.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(b=!0,z=!0,K=!0){let H=0;if(b){let Z=!1;if(y!==null){const de=y.texture.format;Z=de===Wu||de===ku||de===Vu}if(Z){const de=y.texture.type,Me=de===Kn||de===Wn||de===qo||de===hi||de===Gu||de===Hu,Re=Y.getClearColor(),Ce=Y.getClearAlpha(),Fe=Re.r,Ae=Re.g,De=Re.b;Me?(p[0]=Fe,p[1]=Ae,p[2]=De,p[3]=Ce,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=Fe,_[1]=Ae,_[2]=De,_[3]=Ce,B.clearBufferiv(B.COLOR,0,_))}else H|=B.COLOR_BUFFER_BIT}z&&(H|=B.DEPTH_BUFFER_BIT),K&&(H|=B.STENCIL_BUFFER_BIT),B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",se,!1),te.dispose(),ie.dispose(),ze.dispose(),We.dispose(),mt.dispose(),S.dispose(),_e.dispose(),Oe.dispose(),X.dispose(),P.dispose(),P.removeEventListener("sessionstart",Ke),P.removeEventListener("sessionend",fn),j&&(j.dispose(),j=null),wt.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Ye.autoReset,z=re.enabled,K=re.autoUpdate,H=re.needsUpdate,Z=re.type;qe(),Ye.autoReset=b,re.enabled=z,re.autoUpdate=K,re.needsUpdate=H,re.type=Z}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fe(b){const z=b.target;z.removeEventListener("dispose",fe),He(z)}function He(b){tt(b),ze.remove(b)}function tt(b){const z=ze.get(b).programs;z!==void 0&&(z.forEach(function(K){X.releaseProgram(K)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,K,H,Z,de){z===null&&(z=Ve);const Me=Z.isMesh&&Z.matrixWorld.determinant()<0,Re=ah(b,z,K,H,Z);ye.setMaterial(H,Me);let Ce=K.index,Fe=1;if(H.wireframe===!0){if(Ce=R.getWireframeAttribute(K),Ce===void 0)return;Fe=2}const Ae=K.drawRange,De=K.attributes.position;let it=Ae.start*Fe,rt=(Ae.start+Ae.count)*Fe;de!==null&&(it=Math.max(it,de.start*Fe),rt=Math.min(rt,(de.start+de.count)*Fe)),Ce!==null?(it=Math.max(it,0),rt=Math.min(rt,Ce.count)):De!=null&&(it=Math.max(it,0),rt=Math.min(rt,De.count));const Gt=rt-it;if(Gt<0||Gt===1/0)return;_e.setup(Z,H,Re,K,Ce);let Mn,at=ve;if(Ce!==null&&(Mn=Mt.get(Ce),at=xe,at.setIndex(Mn)),Z.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*Pe()),at.setMode(B.LINES)):at.setMode(B.TRIANGLES);else if(Z.isLine){let Be=H.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*Pe()),Z.isLineSegments?at.setMode(B.LINES):Z.isLineLoop?at.setMode(B.LINE_LOOP):at.setMode(B.LINE_STRIP)}else Z.isPoints?at.setMode(B.POINTS):Z.isSprite&&at.setMode(B.TRIANGLES);if(Z.isInstancedMesh)at.renderInstances(it,Gt,Z.count);else if(K.isInstancedBufferGeometry){const Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ea=Math.min(K.instanceCount,Be);at.renderInstances(it,Gt,Ea)}else at.render(it,Gt)},this.compile=function(b,z){function K(H,Z,de){H.transparent===!0&&H.side===Pn&&H.forceSinglePass===!1?(H.side=It,H.needsUpdate=!0,ts(H,Z,de),H.side=Zn,H.needsUpdate=!0,ts(H,Z,de),H.side=Pn):ts(H,Z,de)}m=ie.get(b),m.init(),x.push(m),b.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(v._useLegacyLights),b.traverse(function(H){const Z=H.material;if(Z)if(Array.isArray(Z))for(let de=0;de<Z.length;de++){const Me=Z[de];K(Me,b,H)}else K(Z,b,H)}),x.pop(),m=null};let st=null;function zn(b){st&&st(b)}function Ke(){wt.stop()}function fn(){wt.start()}const wt=new sf;wt.setAnimationLoop(zn),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(b){st=b,P.setAnimationLoop(b),b===null?wt.stop():wt.start()},P.addEventListener("sessionstart",Ke),P.addEventListener("sessionend",fn),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(z),z=P.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,y),m=ie.get(b,x.length),m.init(),x.push(m),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(he),ce=this.localClippingEnabled,ee=ge.init(this.clippingPlanes,ce),g=te.get(b,f.length),g.init(),f.push(g),Mc(b,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(F,G),this.info.render.frame++,ee===!0&&ge.beginShadows();const K=m.state.shadowsArray;if(re.render(K,b,z),ee===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(g,b),m.setupLights(v._useLegacyLights),z.isArrayCamera){const H=z.cameras;for(let Z=0,de=H.length;Z<de;Z++){const Me=H[Z];yc(g,b,Me,Me.viewport)}}else yc(g,b,z);y!==null&&(Ie.updateMultisampleRenderTarget(y),Ie.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(v,b,z),_e.resetDefaultState(),D=-1,E=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Mc(b,z,K,H){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){H&&Ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const Me=S.update(b),Re=b.material;Re.visible&&g.push(b,Me,Re,K,Ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Me=S.update(b),Re=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ee.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ee.copy(Me.boundingSphere.center)),Ee.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(Re)){const Ce=Me.groups;for(let Fe=0,Ae=Ce.length;Fe<Ae;Fe++){const De=Ce[Fe],it=Re[De.materialIndex];it&&it.visible&&g.push(b,Me,it,K,Ee.z,De)}}else Re.visible&&g.push(b,Me,Re,K,Ee.z,null)}}const de=b.children;for(let Me=0,Re=de.length;Me<Re;Me++)Mc(de[Me],z,K,H)}function yc(b,z,K,H){const Z=b.opaque,de=b.transmissive,Me=b.transparent;m.setupLightsView(K),ee===!0&&ge.setGlobalState(v.clippingPlanes,K),de.length>0&&sh(Z,de,z,K),H&&ye.viewport(T.copy(H)),Z.length>0&&es(Z,z,K),de.length>0&&es(de,z,K),Me.length>0&&es(Me,z,K),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function sh(b,z,K,H){const Z=Te.isWebGL2;j===null&&(j=new vi(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Nr:Kn,minFilter:Ir,samples:Z?4:0})),v.getDrawingBufferSize(pe),Z?j.setSize(pe.x,pe.y):j.setSize(mo(pe.x),mo(pe.y));const de=v.getRenderTarget();v.setRenderTarget(j),v.getClearColor(L),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=Yn,es(b,K,H),Ie.updateMultisampleRenderTarget(j),Ie.updateRenderTargetMipmap(j);let Re=!1;for(let Ce=0,Fe=z.length;Ce<Fe;Ce++){const Ae=z[Ce],De=Ae.object,it=Ae.geometry,rt=Ae.material,Gt=Ae.group;if(rt.side===Pn&&De.layers.test(H.layers)){const Mn=rt.side;rt.side=It,rt.needsUpdate=!0,Tc(De,K,H,it,rt,Gt),rt.side=Mn,rt.needsUpdate=!0,Re=!0}}Re===!0&&(Ie.updateMultisampleRenderTarget(j),Ie.updateRenderTargetMipmap(j)),v.setRenderTarget(de),v.setClearColor(L,O),v.toneMapping=Me}function es(b,z,K){const H=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,de=b.length;Z<de;Z++){const Me=b[Z],Re=Me.object,Ce=Me.geometry,Fe=H===null?Me.material:H,Ae=Me.group;Re.layers.test(K.layers)&&Tc(Re,z,K,Ce,Fe,Ae)}}function Tc(b,z,K,H,Z,de){b.onBeforeRender(v,z,K,H,Z,de),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(v,z,K,H,b,de),Z.transparent===!0&&Z.side===Pn&&Z.forceSinglePass===!1?(Z.side=It,Z.needsUpdate=!0,v.renderBufferDirect(K,z,H,Z,b,de),Z.side=Zn,Z.needsUpdate=!0,v.renderBufferDirect(K,z,H,Z,b,de),Z.side=Pn):v.renderBufferDirect(K,z,H,Z,b,de),b.onAfterRender(v,z,K,H,Z,de)}function ts(b,z,K){z.isScene!==!0&&(z=Ve);const H=ze.get(b),Z=m.state.lights,de=m.state.shadowsArray,Me=Z.state.version,Re=X.getParameters(b,Z.state,de,z,K),Ce=X.getProgramCacheKey(Re);let Fe=H.programs;H.environment=b.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=(b.isMeshStandardMaterial?mt:We).get(b.envMap||H.environment),Fe===void 0&&(b.addEventListener("dispose",fe),Fe=new Map,H.programs=Fe);let Ae=Fe.get(Ce);if(Ae!==void 0){if(H.currentProgram===Ae&&H.lightsStateVersion===Me)return Ac(b,Re),Ae}else Re.uniforms=X.getUniforms(b),b.onBuild(K,Re,v),b.onBeforeCompile(Re,v),Ae=X.acquireProgram(Re,Ce),Fe.set(Ce,Ae),H.uniforms=Re.uniforms;const De=H.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=ge.uniform),Ac(b,Re),H.needsLights=ch(b),H.lightsStateVersion=Me,H.needsLights&&(De.ambientLightColor.value=Z.state.ambient,De.lightProbe.value=Z.state.probe,De.directionalLights.value=Z.state.directional,De.directionalLightShadows.value=Z.state.directionalShadow,De.spotLights.value=Z.state.spot,De.spotLightShadows.value=Z.state.spotShadow,De.rectAreaLights.value=Z.state.rectArea,De.ltc_1.value=Z.state.rectAreaLTC1,De.ltc_2.value=Z.state.rectAreaLTC2,De.pointLights.value=Z.state.point,De.pointLightShadows.value=Z.state.pointShadow,De.hemisphereLights.value=Z.state.hemi,De.directionalShadowMap.value=Z.state.directionalShadowMap,De.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,De.spotShadowMap.value=Z.state.spotShadowMap,De.spotLightMatrix.value=Z.state.spotLightMatrix,De.spotLightMap.value=Z.state.spotLightMap,De.pointShadowMap.value=Z.state.pointShadowMap,De.pointShadowMatrix.value=Z.state.pointShadowMatrix);const it=Ae.getUniforms(),rt=Ls.seqWithValue(it.seq,De);return H.currentProgram=Ae,H.uniformsList=rt,Ae}function Ac(b,z){const K=ze.get(b);K.outputColorSpace=z.outputColorSpace,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function ah(b,z,K,H,Z){z.isScene!==!0&&(z=Ve),Ie.resetTextureUnits();const de=z.fog,Me=H.isMeshStandardMaterial?z.environment:null,Re=y===null?v.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:_n,Ce=(H.isMeshStandardMaterial?mt:We).get(H.envMap||Me),Fe=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ae=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!K.morphAttributes.position,it=!!K.morphAttributes.normal,rt=!!K.morphAttributes.color;let Gt=Yn;H.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Gt=v.toneMapping);const Mn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,at=Mn!==void 0?Mn.length:0,Be=ze.get(H),Ea=m.state.lights;if(ee===!0&&(ce===!0||b!==E)){const Nt=b===E&&H.id===D;ge.setState(H,b,Nt)}let ot=!1;H.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ea.state.version||Be.outputColorSpace!==Re||Z.isInstancedMesh&&Be.instancing===!1||!Z.isInstancedMesh&&Be.instancing===!0||Z.isSkinnedMesh&&Be.skinning===!1||!Z.isSkinnedMesh&&Be.skinning===!0||Z.isInstancedMesh&&Be.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Be.instancingColor===!1&&Z.instanceColor!==null||Be.envMap!==Ce||H.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ge.numPlanes||Be.numIntersection!==ge.numIntersection)||Be.vertexAlphas!==Fe||Be.vertexTangents!==Ae||Be.morphTargets!==De||Be.morphNormals!==it||Be.morphColors!==rt||Be.toneMapping!==Gt||Te.isWebGL2===!0&&Be.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Be.__version=H.version);let ni=Be.currentProgram;ot===!0&&(ni=ts(H,z,Z));let bc=!1,Sr=!1,Sa=!1;const Rt=ni.getUniforms(),ii=Be.uniforms;if(ye.useProgram(ni.program)&&(bc=!0,Sr=!0,Sa=!0),H.id!==D&&(D=H.id,Sr=!0),bc||E!==b){Rt.setValue(B,"projectionMatrix",b.projectionMatrix),Rt.setValue(B,"viewMatrix",b.matrixWorldInverse);const Nt=Rt.map.cameraPosition;Nt!==void 0&&Nt.setValue(B,Ee.setFromMatrixPosition(b.matrixWorld)),Te.logarithmicDepthBuffer&&Rt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Rt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Sr=!0,Sa=!0)}if(Z.isSkinnedMesh){Rt.setOptional(B,Z,"bindMatrix"),Rt.setOptional(B,Z,"bindMatrixInverse");const Nt=Z.skeleton;Nt&&(Te.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Rt.setValue(B,"boneTexture",Nt.boneTexture,Ie),Rt.setValue(B,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ma=K.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&Te.isWebGL2===!0)&&Se.update(Z,K,ni),(Sr||Be.receiveShadow!==Z.receiveShadow)&&(Be.receiveShadow=Z.receiveShadow,Rt.setValue(B,"receiveShadow",Z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ii.envMap.value=Ce,ii.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Sr&&(Rt.setValue(B,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&oh(ii,Sa),de&&H.fog===!0&&ne.refreshFogUniforms(ii,de),ne.refreshMaterialUniforms(ii,H,W,J,j),Ls.upload(B,Be.uniformsList,ii,Ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ls.upload(B,Be.uniformsList,ii,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Rt.setValue(B,"center",Z.center),Rt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Rt.setValue(B,"normalMatrix",Z.normalMatrix),Rt.setValue(B,"modelMatrix",Z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Nt=H.uniformsGroups;for(let ya=0,lh=Nt.length;ya<lh;ya++)if(Te.isWebGL2){const wc=Nt[ya];Oe.update(wc,ni),Oe.bind(wc,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function oh(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function ch(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,z,K){ze.get(b.texture).__webglTexture=z,ze.get(b.depthTexture).__webglTexture=K;const H=ze.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=K===void 0,H.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const K=ze.get(b);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,K=0){y=b,A=z,w=K;let H=!0,Z=null,de=!1,Me=!1;if(b){const Ce=ze.get(b);Ce.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(B.FRAMEBUFFER,null),H=!1):Ce.__webglFramebuffer===void 0?Ie.setupRenderTarget(b):Ce.__hasExternalTextures&&Ie.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Ae=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[z])?Z=Ae[z][K]:Z=Ae[z],de=!0):Te.isWebGL2&&b.samples>0&&Ie.useMultisampledRTT(b)===!1?Z=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?Z=Ae[K]:Z=Ae,T.copy(b.viewport),U.copy(b.scissor),k=b.scissorTest}else T.copy(I).multiplyScalar(W).floor(),U.copy(C).multiplyScalar(W).floor(),k=V;if(ye.bindFramebuffer(B.FRAMEBUFFER,Z)&&Te.drawBuffers&&H&&ye.drawBuffers(b,Z),ye.viewport(T),ye.scissor(U),ye.setScissorTest(k),de){const Ce=ze.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,K)}else if(Me){const Ce=ze.get(b.texture),Fe=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.__webglTexture,K||0,Fe)}D=-1},this.readRenderTargetPixels=function(b,z,K,H,Z,de,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){ye.bindFramebuffer(B.FRAMEBUFFER,Re);try{const Ce=b.texture,Fe=Ce.format,Ae=Ce.type;if(Fe!==on&&me.convert(Fe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Ae===Nr&&(ue.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ae!==Kn&&me.convert(Ae)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Xn&&(Te.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-H&&K>=0&&K<=b.height-Z&&B.readPixels(z,K,H,Z,me.convert(Fe),me.convert(Ae),de)}finally{const Ce=y!==null?ze.get(y).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(b,z,K=0){const H=Math.pow(2,-K),Z=Math.floor(z.image.width*H),de=Math.floor(z.image.height*H);Ie.setTexture2D(z,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,b.x,b.y,Z,de),ye.unbindTexture()},this.copyTextureToTexture=function(b,z,K,H=0){const Z=z.image.width,de=z.image.height,Me=me.convert(K.format),Re=me.convert(K.type);Ie.setTexture2D(K,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment),z.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,H,b.x,b.y,Z,de,Me,Re,z.image.data):z.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,H,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,H,b.x,b.y,Me,Re,z.image),H===0&&K.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(b,z,K,H,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Re=b.max.z-b.min.z+1,Ce=me.convert(H.format),Fe=me.convert(H.type);let Ae;if(H.isData3DTexture)Ie.setTexture3D(H,0),Ae=B.TEXTURE_3D;else if(H.isDataArrayTexture)Ie.setTexture2DArray(H,0),Ae=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const De=B.getParameter(B.UNPACK_ROW_LENGTH),it=B.getParameter(B.UNPACK_IMAGE_HEIGHT),rt=B.getParameter(B.UNPACK_SKIP_PIXELS),Gt=B.getParameter(B.UNPACK_SKIP_ROWS),Mn=B.getParameter(B.UNPACK_SKIP_IMAGES),at=K.isCompressedTexture?K.mipmaps[0]:K.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,at.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(Ae,Z,z.x,z.y,z.z,de,Me,Re,Ce,Fe,at.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ae,Z,z.x,z.y,z.z,de,Me,Re,Ce,at.data)):B.texSubImage3D(Ae,Z,z.x,z.y,z.z,de,Me,Re,Ce,Fe,at),B.pixelStorei(B.UNPACK_ROW_LENGTH,De),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,it),B.pixelStorei(B.UNPACK_SKIP_PIXELS,rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Gt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Mn),Z===0&&H.generateMipmaps&&B.generateMipmap(Ae),ye.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ie.setTextureCube(b,0):b.isData3DTexture?Ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ie.setTexture2DArray(b,0):Ie.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){A=0,w=0,y=null,ye.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===et?pi:Xu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pi?et:_n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Pv extends uf{}Pv.prototype.isWebGL1Renderer=!0;class Dv extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);function Uv(i){let e;return{c(){e=Ze("div"),this.h()},l(t){e=je(t,"DIV",{class:!0}),At(e).forEach(be),this.h()},h(){we(e,"class","svelte-1g8vqg2")},m(t,n){ke(t,e,n),i[1](e)},p:ln,i:ln,o:ln,d(t){t&&be(e),i[1](null)}}}function Iv(i,e,t){let n,r;Ho(()=>{const a=new Dv,c=new kt(75,1,.1,1e3),l=new uf({alpha:!0});l.setClearColor(0,0),l.setSize(400,400),n.appendChild(l.domElement);const u=new mr,d=new Yo({color:65280}),h=new Un(u,d);h.scale.set(3.5,3.5,3.5),a.add(h),c.position.z=5;const p=()=>{r=requestAnimationFrame(p),h.rotation.x+=.01,h.rotation.y+=.01,l.render(a,c)};return p(),()=>{cancelAnimationFrame(r),a.remove(h),u.dispose(),d.dispose()}}),uh(()=>{});function s(o){Lu[o?"unshift":"push"](()=>{n=o,t(0,n)})}return[n,s]}class Nv extends yi{constructor(e){super(),Ti(this,e,Iv,Uv,Ai,{})}}const gn=Object.create(null);gn.open="0";gn.close="1";gn.ping="2";gn.pong="3";gn.message="4";gn.upgrade="5";gn.noop="6";const Ps=Object.create(null);Object.keys(gn).forEach(i=>{Ps[gn[i]]=i});const go={type:"error",data:"parser error"},ff=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",hf=typeof ArrayBuffer=="function",df=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,jo=({type:i,data:e},t,n)=>ff&&e instanceof Blob?t?n(e):Xl(e,n):hf&&(e instanceof ArrayBuffer||df(e))?t?n(e):Xl(new Blob([e]),n):n(gn[i]+(e||"")),Xl=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function ql(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let eo;function Ov(i,e){if(ff&&i.data instanceof Blob)return i.data.arrayBuffer().then(ql).then(e);if(hf&&(i.data instanceof ArrayBuffer||df(i.data)))return e(ql(i.data));jo(i,!1,t=>{eo||(eo=new TextEncoder),e(eo.encode(t))})}const $l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Cr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<$l.length;i++)Cr[$l.charCodeAt(i)]=i;const Fv=i=>{let e=i.length*.75,t=i.length,n,r=0,s,o,a,c;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const l=new ArrayBuffer(e),u=new Uint8Array(l);for(n=0;n<t;n+=4)s=Cr[i.charCodeAt(n)],o=Cr[i.charCodeAt(n+1)],a=Cr[i.charCodeAt(n+2)],c=Cr[i.charCodeAt(n+3)],u[r++]=s<<2|o>>4,u[r++]=(o&15)<<4|a>>2,u[r++]=(a&3)<<6|c&63;return l},Bv=typeof ArrayBuffer=="function",Jo=(i,e)=>{if(typeof i!="string")return{type:"message",data:pf(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:zv(i.substring(1),e)}:Ps[t]?i.length>1?{type:Ps[t],data:i.substring(1)}:{type:Ps[t]}:go},zv=(i,e)=>{if(Bv){const t=Fv(i);return pf(t,e)}else return{base64:!0,data:i}},pf=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},mf=String.fromCharCode(30),Gv=(i,e)=>{const t=i.length,n=new Array(t);let r=0;i.forEach((s,o)=>{jo(s,!1,a=>{n[o]=a,++r===t&&e(n.join(mf))})})},Hv=(i,e)=>{const t=i.split(mf),n=[];for(let r=0;r<t.length;r++){const s=Jo(t[r],e);if(n.push(s),s.type==="error")break}return n};function Vv(){return new TransformStream({transform(i,e){Ov(i,t=>{const n=t.length;let r;if(n<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,n);else if(n<65536){r=new Uint8Array(3);const s=new DataView(r.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{r=new Uint8Array(9);const s=new DataView(r.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(t)})}})}let to;function Ts(i){return i.reduce((e,t)=>e+t.length,0)}function As(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let r=0;r<e;r++)t[r]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function kv(i,e){to||(to=new TextDecoder);const t=[];let n=0,r=-1,s=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(Ts(t)<1)break;const c=As(t,1);s=(c[0]&128)===128,r=c[0]&127,r<126?n=3:r===126?n=1:n=2}else if(n===1){if(Ts(t)<2)break;const c=As(t,2);r=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(Ts(t)<8)break;const c=As(t,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,53-32)-1){a.enqueue(go);break}r=u*Math.pow(2,32)+l.getUint32(4),n=3}else{if(Ts(t)<r)break;const c=As(t,r);a.enqueue(Jo(s?c:to.decode(c),e)),n=0}if(r===0||r>i){a.enqueue(go);break}}}})}const _f=4;function lt(i){if(i)return Wv(i)}function Wv(i){for(var e in lt.prototype)i[e]=lt.prototype[e];return i}lt.prototype.on=lt.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};lt.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};lt.prototype.off=lt.prototype.removeListener=lt.prototype.removeAllListeners=lt.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,r=0;r<t.length;r++)if(n=t[r],n===e||n.fn===e){t.splice(r,1);break}return t.length===0&&delete this._callbacks["$"+i],this};lt.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,r=t.length;n<r;++n)t[n].apply(this,e)}return this};lt.prototype.emitReserved=lt.prototype.emit;lt.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};lt.prototype.hasListeners=function(i){return!!this.listeners(i).length};const Wt=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function gf(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const Xv=Wt.setTimeout,qv=Wt.clearTimeout;function aa(i,e){e.useNativeTimers?(i.setTimeoutFn=Xv.bind(Wt),i.clearTimeoutFn=qv.bind(Wt)):(i.setTimeoutFn=Wt.setTimeout.bind(Wt),i.clearTimeoutFn=Wt.clearTimeout.bind(Wt))}const $v=1.33;function Yv(i){return typeof i=="string"?Kv(i):Math.ceil((i.byteLength||i.size)*$v)}function Kv(i){let e=0,t=0;for(let n=0,r=i.length;n<r;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function Zv(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function jv(i){let e={},t=i.split("&");for(let n=0,r=t.length;n<r;n++){let s=t[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Jv extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Qo extends lt{constructor(e){super(),this.writable=!1,aa(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new Jv(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Jo(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Zv(e);return t.length?"?"+t:""}}const vf="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),vo=64,Qv={};let Yl=0,bs=0,Kl;function Zl(i){let e="";do e=vf[i%vo]+e,i=Math.floor(i/vo);while(i>0);return e}function xf(){const i=Zl(+new Date);return i!==Kl?(Yl=0,Kl=i):i+"."+Zl(Yl++)}for(;bs<vo;bs++)Qv[vf[bs]]=bs;let Ef=!1;try{Ef=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const e0=Ef;function Sf(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||e0))return new XMLHttpRequest}catch{}if(!e)try{return new Wt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function t0(){}const n0=function(){return new Sf({xdomain:!1}).responseType!=null}();class i0 extends Qo{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}const t=e&&e.forceBase64;this.supportsBinary=n0&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Hv(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Gv(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=xf()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new er(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}let er=class Ds extends lt{constructor(e,t){super(),aa(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=gf(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new Sf(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var r;n.readyState===3&&((r=this.opts.cookieJar)===null||r===void 0||r.parseCookies(n)),n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document<"u"&&(this.index=Ds.requestsCount++,Ds.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=t0,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Ds.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}};er.requestsCount=0;er.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",jl);else if(typeof addEventListener=="function"){const i="onpagehide"in Wt?"pagehide":"unload";addEventListener(i,jl,!1)}}function jl(){for(let i in er.requests)er.requests.hasOwnProperty(i)&&er.requests[i].abort()}const ec=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),ws=Wt.WebSocket||Wt.MozWebSocket,Jl=!0,r0="arraybuffer",Ql=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class s0 extends Qo{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=Ql?{}:gf(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=Jl&&!Ql?t?new ws(e,t):new ws(e):new ws(e,t,n)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;jo(n,this.supportsBinary,s=>{const o={};try{Jl&&this.ws.send(s)}catch{}r&&ec(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=xf()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!ws}}class a0 extends Qo{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=kv(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=Vv();r.readable.pipeTo(e.writable),this.writer=r.writable.getWriter();const s=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;this.writer.write(n).then(()=>{r&&ec(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const o0={websocket:s0,webtransport:a0,polling:i0},c0=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,l0=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function xo(i){const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let r=c0.exec(i||""),s={},o=14;for(;o--;)s[l0[o]]=r[o]||"";return t!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=u0(s,s.path),s.queryKey=f0(s,s.query),s}function u0(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function f0(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,r,s){r&&(t[r]=s)}),t}let Mf=class $i extends lt{constructor(e,t={}){super(),this.binaryType=r0,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=xo(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=xo(t.host).host),aa(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=jv(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=_f,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new o0[e](n)}open(){let e;if(this.opts.rememberUpgrade&&$i.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;$i.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;$i.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=t.name,this.emitReserved("upgradeError",h)}}))};function s(){n||(n=!0,u(),t.close(),t=null)}const o=d=>{const h=new Error("probe error: "+d);h.transport=t.name,s(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){t&&d.name!==t.name&&s()}const u=()=>{t.removeListener("open",r),t.removeListener("error",o),t.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};t.once("open",r),t.once("error",o),t.once("close",a),this.once("close",c),this.once("upgrading",l),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",$i.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const r=this.writeBuffer[n].data;if(r&&(t+=Yv(r)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,r){if(typeof t=="function"&&(r=t,t=void 0),typeof n=="function"&&(r=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:t,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){$i.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const r=e.length;for(;n<r;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};Mf.protocol=_f;function h0(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=xo(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(t&&t.port===n.port?"":":"+n.port),n}const d0=typeof ArrayBuffer=="function",p0=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,yf=Object.prototype.toString,m0=typeof Blob=="function"||typeof Blob<"u"&&yf.call(Blob)==="[object BlobConstructor]",_0=typeof File=="function"||typeof File<"u"&&yf.call(File)==="[object FileConstructor]";function tc(i){return d0&&(i instanceof ArrayBuffer||p0(i))||m0&&i instanceof Blob||_0&&i instanceof File}function Us(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(Us(i[t]))return!0;return!1}if(tc(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Us(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&Us(i[t]))return!0;return!1}function g0(i){const e=[],t=i.data,n=i;return n.data=Eo(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Eo(i,e){if(!i)return i;if(tc(i)){const t={_placeholder:!0,num:e.length};return e.push(i),t}else if(Array.isArray(i)){const t=new Array(i.length);for(let n=0;n<i.length;n++)t[n]=Eo(i[n],e);return t}else if(typeof i=="object"&&!(i instanceof Date)){const t={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=Eo(i[n],e));return t}return i}function v0(i,e){return i.data=So(i.data,e),delete i.attachments,i}function So(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=So(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=So(i[t],e));return i}const x0=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],E0=5;var Ge;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(Ge||(Ge={}));class S0{constructor(e){this.replacer=e}encode(e){return(e.type===Ge.EVENT||e.type===Ge.ACK)&&Us(e)?this.encodeAsBinary({type:e.type===Ge.EVENT?Ge.BINARY_EVENT:Ge.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Ge.BINARY_EVENT||e.type===Ge.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=g0(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}}function eu(i){return Object.prototype.toString.call(i)==="[object Object]"}class nc extends lt{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Ge.BINARY_EVENT;n||t.type===Ge.BINARY_ACK?(t.type=n?Ge.EVENT:Ge.ACK,this.reconstructor=new M0(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(tc(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(Ge[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Ge.BINARY_EVENT||n.type===Ge.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(s,t)}else n.nsp="/";const r=e.charAt(t+1);if(r!==""&&Number(r)==r){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(nc.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Ge.CONNECT:return eu(t);case Ge.DISCONNECT:return t===void 0;case Ge.CONNECT_ERROR:return typeof t=="string"||eu(t);case Ge.EVENT:case Ge.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&x0.indexOf(t[0])===-1);case Ge.ACK:case Ge.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class M0{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=v0(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const y0=Object.freeze(Object.defineProperty({__proto__:null,Decoder:nc,Encoder:S0,get PacketType(){return Ge},protocol:E0},Symbol.toStringTag,{value:"Module"}));function Jt(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const T0=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Tf extends lt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Jt(e,"open",this.onopen.bind(this)),Jt(e,"packet",this.onpacket.bind(this)),Jt(e,"error",this.onerror.bind(this)),Jt(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(T0.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:Ge.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),n.id=o}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const r=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(r===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},r);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(s),t.apply(this,[null,...o])}}emitWithAck(e,...t){const n=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((r,s)=>{t.push((o,a)=>n?o?s(o):r(a):r(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...s)=>n!==this._queue[0]?void 0:(r!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(r)):(this._queue.shift(),t&&t(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ge.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ge.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ge.EVENT:case Ge.BINARY_EVENT:this.onevent(e);break;case Ge.ACK:case Ge.BINARY_ACK:this.onack(e);break;case Ge.DISCONNECT:this.ondisconnect();break;case Ge.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...r){n||(n=!0,t.packet({type:Ge.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ge.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function gr(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}gr.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=Math.floor(e*10)&1?i+t:i-t}return Math.min(i,this.max)|0};gr.prototype.reset=function(){this.attempts=0};gr.prototype.setMin=function(i){this.ms=i};gr.prototype.setMax=function(i){this.max=i};gr.prototype.setJitter=function(i){this.jitter=i};class Mo extends lt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,aa(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new gr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||y0;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Mf(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=Jt(t,"open",function(){n.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Jt(t,"error",s);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{r(),s(new Error("timeout")),t.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Jt(e,"ping",this.onping.bind(this)),Jt(e,"data",this.ondata.bind(this)),Jt(e,"error",this.onerror.bind(this)),Jt(e,"close",this.onclose.bind(this)),Jt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){ec(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Tf(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const wr={};function Is(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=h0(i,e.path||"/socket.io"),n=t.source,r=t.id,s=t.path,o=wr[r]&&s in wr[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new Mo(n,e):(wr[r]||(wr[r]=new Mo(n,e)),c=wr[r]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(Is,{Manager:Mo,Socket:Tf,io:Is,connect:Is});const no=Is("http://localhost:2000"),A0=(i,e)=>{let t=[];typeof i=="string"?t=i.split(","):i&&i.message?t=i.message.split(","):t=["Une erreur inconnue s'est produite."],t.forEach(n=>{let r;switch(n.trim()){case"NAME_REQUIRED":r=e("validation.NAME_REQUIRED");break;case"NAME_MIN_MAX_CARAC":r=e("validation.NAME_MIN_MAX_CARAC");break;case"MESSAGE_REQUIRED":r=e("validation.MESSAGE_REQUIRED");break;case"MESSAGE_MIN_MAX_CARAC":r=e("validation.MESSAGE_MIN_MAX_CARAC");break;case"RATE_LIMIT":r=e("validation.RATE_LIMIT");break;default:r="Une erreur inconnue s'est produite."}Eh.addNotification(r,"error")})};async function b0(i,e,t=null,n){try{const r=t?`http://localhost:2000/api/updateGreeting/${t}`:"http://localhost:2000/api/saveGreeting";return await Wo({url:r,method:t?"PUT":"POST",body:{name:i,message:e}})!==null}catch(r){throw A0(r,n),r}}async function Rs(){return await Wo({url:"http://localhost:2000/api/getGreetings",method:"GET"})}async function w0(i){return await Wo({url:`http://localhost:2000/api/deleteGreeting/${i}`,method:"DELETE"})!==null}function tu(i,e,t){const n=i.slice();return n[12]=e[t],n}function nu(i){let e,t=i[12].name+"",n,r,s=i[12].message+"",o,a,c,l,u,d,h,p,_,g;function m(){return i[8](i[12])}function f(){return i[9](i[12])}return{c(){e=Ze("li"),n=dn(t),r=dn(": "),o=dn(s),a=_t(),c=Ze("button"),l=dn("Modifier"),u=_t(),d=Ze("button"),h=dn("Supprimer"),p=_t()},l(x){e=je(x,"LI",{});var v=At(e);n=pn(v,t),r=pn(v,": "),o=pn(v,s),a=gt(v),c=je(v,"BUTTON",{});var M=At(c);l=pn(M,"Modifier"),M.forEach(be),u=gt(v),d=je(v,"BUTTON",{});var A=At(d);h=pn(A,"Supprimer"),A.forEach(be),p=gt(v),v.forEach(be)},m(x,v){ke(x,e,v),Qe(e,n),Qe(e,r),Qe(e,o),Qe(e,a),Qe(e,c),Qe(c,l),Qe(e,u),Qe(e,d),Qe(d,h),Qe(e,p),_||(g=[Lr(c,"click",m),Lr(d,"click",f)],_=!0)},p(x,v){i=x,v&32&&t!==(t=i[12].name+"")&&zs(n,t),v&32&&s!==(s=i[12].message+"")&&zs(o,s)},d(x){x&&be(e),_=!1,Pu(g)}}}function R0(i){let e,t,n,r,s,o,a,c,l,u,d,h,p,_,g,m=i[5],f=[];for(let x=0;x<m.length;x+=1)f[x]=nu(tu(i,m,x));return{c(){e=Ze("form"),t=Ze("label"),n=dn(`Nom :
		`),r=Ze("input"),s=_t(),o=Ze("label"),a=dn(`Message :
		`),c=Ze("input"),l=_t(),u=Ze("button"),d=dn("Envoyer"),h=_t(),p=Ze("ul");for(let x=0;x<f.length;x+=1)f[x].c();this.h()},l(x){e=je(x,"FORM",{});var v=At(e);t=je(v,"LABEL",{for:!0});var M=At(t);n=pn(M,`Nom :
		`),r=je(M,"INPUT",{id:!0,name:!0,type:!0,autocomplete:!0}),M.forEach(be),s=gt(v),o=je(v,"LABEL",{for:!0});var A=At(o);a=pn(A,`Message :
		`),c=je(A,"INPUT",{id:!0,name:!0,type:!0,autocomplete:!0}),A.forEach(be),l=gt(v),u=je(v,"BUTTON",{type:!0});var w=At(u);d=pn(w,"Envoyer"),w.forEach(be),v.forEach(be),h=gt(x),p=je(x,"UL",{});var y=At(p);for(let D=0;D<f.length;D+=1)f[D].l(y);y.forEach(be),this.h()},h(){we(r,"id","nameInput"),we(r,"name","name"),we(r,"type","text"),we(r,"autocomplete","name"),we(t,"for","nameInput"),we(c,"id","messageInput"),we(c,"name","message"),we(c,"type","text"),we(c,"autocomplete","on"),we(o,"for","messageInput"),we(u,"type","submit")},m(x,v){ke(x,e,v),Qe(e,t),Qe(t,n),Qe(t,r),ns(r,i[3]),Qe(e,s),Qe(e,o),Qe(o,a),Qe(o,c),ns(c,i[4]),Qe(e,l),Qe(e,u),Qe(u,d),ke(x,h,v),ke(x,p,v);for(let M=0;M<f.length;M+=1)f[M]&&f[M].m(p,null);_||(g=[Lr(r,"input",i[6]),Lr(c,"input",i[7]),Lr(e,"submit",fh(i[1]))],_=!0)},p(x,[v]){if(v&8&&r.value!==x[3]&&ns(r,x[3]),v&16&&c.value!==x[4]&&ns(c,x[4]),v&37){m=x[5];let M;for(M=0;M<m.length;M+=1){const A=tu(x,m,M);f[M]?f[M].p(A,v):(f[M]=nu(A),f[M].c(),f[M].m(p,null))}for(;M<f.length;M+=1)f[M].d(1);f.length=m.length}},i:ln,o:ln,d(x){x&&be(e),x&&be(h),x&&be(p),hh(f,x),_=!1,Pu(g)}}}function C0(i,e,t){let n;Du(i,Uu,g=>t(11,n=g));let r=null,s="",o="",a=[];Ho(async()=>{t(5,a=await Rs()),no.on("updateGreetings",async()=>{console.log("Received updateGreetings event from server"),t(5,a=await Rs())})});function c(g){t(3,s=g.name),t(4,o=g.message),r=g._id}async function l(){console.log("Sending greeting"),await b0(s,o,r,n)&&(t(3,s=""),t(4,o=""),r=null,no.emit("greetingSent"),t(5,a=await Rs()))}async function u(g){console.log(`Deleting greeting with id ${g}`),await w0(g)&&(no.emit("greetingDeleted"),t(5,a=await Rs()))}function d(){s=this.value,t(3,s)}function h(){o=this.value,t(4,o)}return[c,l,u,s,o,a,d,h,g=>c(g),g=>u(g._id)]}class L0 extends yi{constructor(e){super(),Ti(this,e,C0,R0,Ai,{prepareUpdate:0,handleSendGreeting:1,handleDeleteGreeting:2})}get prepareUpdate(){return this.$$.ctx[0]}get handleSendGreeting(){return this.$$.ctx[1]}get handleDeleteGreeting(){return this.$$.ctx[2]}}/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function P0(i){i.length=0}function ic(i,e,t){return Array.prototype.slice.call(i,e,t)}function oa(i){return i.bind.apply(i,[null].concat(ic(arguments,1)))}function iu(i){return requestAnimationFrame(i)}function rc(i,e){return typeof e===i}var Af=Array.isArray;oa(rc,"function");oa(rc,"string");oa(rc,"undefined");function bf(i){return Af(i)?i:[i]}function ru(i,e){bf(i).forEach(e)}var D0=Object.keys;function U0(i,e,t){if(i){var n=D0(i);n=t?n.reverse():n;for(var r=0;r<n.length;r++){var s=n[r];if(s!=="__proto__"&&e(i[s],s)===!1)break}}return i}function I0(i){return ic(arguments,1).forEach(function(e){U0(e,function(t,n){i[n]=e[n]})}),i}var N0=Math.min;function O0(){var i=[];function e(o,a,c,l){r(o,a,function(u,d,h){var p="addEventListener"in u,_=p?u.removeEventListener.bind(u,d,c,l):u.removeListener.bind(u,c);p?u.addEventListener(d,c,l):u.addListener(c),i.push([u,d,h,c,_])})}function t(o,a,c){r(o,a,function(l,u,d){i=i.filter(function(h){return h[0]===l&&h[1]===u&&h[2]===d&&(!c||h[3]===c)?(h[4](),!1):!0})})}function n(o,a,c){var l,u=!0;return typeof CustomEvent=="function"?l=new CustomEvent(a,{bubbles:u,detail:c}):(l=document.createEvent("CustomEvent"),l.initCustomEvent(a,u,!1,c)),o.dispatchEvent(l),l}function r(o,a,c){ru(o,function(l){l&&ru(a,function(u){u.split(" ").forEach(function(d){var h=d.split(".");c(l,h[0],h[1])})})})}function s(){i.forEach(function(o){o[4]()}),P0(i)}return{bind:e,unbind:t,dispatch:n,destroy:s}}var su="move",au="moved",F0="updated",ou="drag",B0="dragged",cu="scroll",lu="scrolled",z0="destroy";function G0(i){var e=i?i.event.bus:document.createDocumentFragment(),t=O0();function n(s,o){t.bind(e,bf(s).join(" "),function(a){o.apply(o,Af(a.detail)?a.detail:[])})}function r(s){t.dispatch(e,s,ic(arguments,1))}return i&&i.event.on(z0,t.destroy),I0(t,{bus:e,on:n,off:oa(t.unbind,e),emit:r})}function wf(i,e,t,n){var r=Date.now,s,o=0,a,c=!0,l=0;function u(){if(!c){if(o=i?N0((r()-s)/i,1):1,t&&t(o),o>=1&&(e(),s=r(),n&&++l>=n))return h();iu(u)}}function d(f){!f&&_(),s=r()-(f?o*i:0),c=!1,iu(u)}function h(){c=!0}function p(){s=r(),o=0,t&&t(o)}function _(){a&&cancelAnimationFrame(a),o=0,a=0,c=!0}function g(f){i=f}function m(){return c}return{start:d,rewind:p,pause:h,cancel:_,set:g,isPaused:m}}function H0(i,e){var t;function n(){t||(t=wf(e||0,function(){i(),t=null},null,1),t.start())}return n}var V0="is-active",k0="slide",W0="fade";function Rf(i,e,t){return Array.prototype.slice.call(i,e,t)}function sc(i){return i.bind(null,...Rf(arguments,1))}function ca(i,e){return typeof e===i}function yo(i){return!Cf(i)&&ca("object",i)}const X0=Array.isArray;sc(ca,"function");sc(ca,"string");const q0=sc(ca,"undefined");function Cf(i){return i===null}function $0(i){return X0(i)?i:[i]}function Vs(i,e){$0(i).forEach(e)}function Y0(i,e,t){i&&Vs(e,n=>{n&&i.classList[t?"add":"remove"](n)})}const K0=Object.keys;function Lf(i,e,t){if(i){let n=K0(i);n=t?n.reverse():n;for(let r=0;r<n.length;r++){const s=n[r];if(s!=="__proto__"&&e(i[s],s)===!1)break}}return i}function uu(i){return Rf(arguments,1).forEach(e=>{Lf(e,(t,n)=>{i[n]=e[n]})}),i}function Z0(i,e){Vs(i,t=>{Vs(e,n=>{t&&t.removeAttribute(n)})})}function Pf(i,e,t){yo(e)?Lf(e,(n,r)=>{Pf(i,r,n)}):Vs(i,n=>{Cf(t)||t===""?Z0(n,e):n.setAttribute(e,String(t))})}const{min:fu,max:hu,floor:zE,ceil:GE,abs:HE}=Math;function j0(i,e,t){const n=fu(e,t),r=hu(e,t);return fu(hu(n,i),r)}const J0={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},Q0={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function ex(i,e,t){const{on:n,off:r,bind:s,unbind:o}=G0(i),{translate:a,getPosition:c,toIndex:l,getLimit:u}=e.Move,{setIndex:d,getIndex:h}=e.Controller,{orient:p}=e.Direction,{toggle:_}=e.Elements,{Live:g}=e,{root:m}=i,f=H0(e.Arrows.update,500);let x={},v,M,A,w,y,D;function E(){const{autoScroll:Q}=t;x=uu({},J0,yo(Q)?Q:{})}function T(){i.is(W0)||!v&&t.autoScroll!==!1&&(v=wf(0,F),k(),O())}function U(){v&&(v.cancel(),v=null,D=void 0,r([su,ou,cu,au,lu]),o(m,"mouseenter mouseleave focusin focusout"),o(_,"click"))}function k(){x.pauseOnHover&&s(m,"mouseenter mouseleave",Q=>{A=Q.type==="mouseenter",W()}),x.pauseOnFocus&&s(m,"focusin focusout",Q=>{w=Q.type==="focusin",W()}),x.useToggleButton&&s(_,"click",()=>{M?N():J()}),n(F0,L),n([su,ou,cu],()=>{y=!0,J(!1)}),n([au,B0,lu],()=>{y=!1,W()})}function L(){const{autoScroll:Q}=t;Q!==!1?(x=uu({},x,yo(Q)?Q:{}),T()):U(),v&&!q0(D)&&a(D)}function O(){x.autoStart&&(document.readyState==="complete"?N():s(window,"load",N))}function N(){V()&&(v.start(!0),g.disable(!0),w=A=M=!1,C())}function J(Q=!0){M||(M=Q,C(),V()||(v.pause(),g.disable(!1)))}function W(){M||(A||w||y?J(!1):N())}function F(){const Q=c(),ee=G(Q);Q!==ee?(a(ee),I(D=c())):(J(!1),x.rewind&&i.go(x.speed>0?0:e.Controller.getEnd())),f()}function G(Q){const ee=x.speed||1;return Q+=p(ee),i.is(k0)&&(Q=j0(Q,u(!1),u(!0))),Q}function I(Q){const{length:ee}=i,ce=(l(Q)+ee)%ee;ce!==h()&&(d(ce),e.Slides.update(),e.Pagination.update(),t.lazyLoad==="nearby"&&e.LazyLoad.check())}function C(){if(_){const Q=M?"startScroll":"pauseScroll";Y0(_,V0,!M),Pf(_,"aria-label",t.i18n[Q]||Q0[Q])}}function V(){return!v||v.isPaused()}return{setup:E,mount:T,destroy:U,play:N,pause:J,isPaused:V}}function lr(...i){return i.filter(Boolean).join(" ")}function tx(i,e){if(i){const t=Object.keys(i);for(let n=0;n<t.length;n++){const r=t[n];if(r!=="__proto__"&&e(i[r],r)===!1)break}}return i}function du(i){var t;const e=(t=i.Components.Elements)==null?void 0:t.list.children;return e&&Array.prototype.slice.call(e)||[]}function ks(i){return i!==null&&typeof i=="object"}function To(i,e){if(Array.isArray(i)&&Array.isArray(e))return i.length===e.length&&!i.some((t,n)=>!To(t,e[n]));if(ks(i)&&ks(e)){const t=Object.keys(i),n=Object.keys(e);return t.length===n.length&&!t.some(r=>!Object.prototype.hasOwnProperty.call(e,r)||!To(i[r],e[r]))}return i===e}function nx(i,e){return i.length===e.length&&!i.some((t,n)=>t!==e[n])}function Ao(i,e){const t=i;return tx(e,(n,r)=>{Array.isArray(n)?t[r]=n.slice():ks(n)?t[r]=Ao(ks(t[r])?t[r]:{},n):t[r]=n}),t}function pu(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function ix(i,e,t){return e&&pu(i.prototype,e),t&&pu(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var mu="(prefers-reduced-motion: reduce)",ji=1,rx=2,ur=3,vr=4,qr=5,Ns=6,Ws=7,sx={CREATED:ji,MOUNTED:rx,IDLE:ur,MOVING:vr,SCROLLING:qr,DRAGGING:Ns,DESTROYED:Ws};function Bn(i){i.length=0}function Qn(i,e,t){return Array.prototype.slice.call(i,e,t)}function $e(i){return i.bind.apply(i,[null].concat(Qn(arguments,1)))}var Df=setTimeout,bo=function(){};function _u(i){return requestAnimationFrame(i)}function la(i,e){return typeof e===i}function Or(i){return!oc(i)&&la("object",i)}var ac=Array.isArray,Uf=$e(la,"function"),jn=$e(la,"string"),$r=$e(la,"undefined");function oc(i){return i===null}function If(i){try{return i instanceof(i.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Yr(i){return ac(i)?i:[i]}function $t(i,e){Yr(i).forEach(e)}function cc(i,e){return i.indexOf(e)>-1}function Os(i,e){return i.push.apply(i,Yr(e)),i}function In(i,e,t){i&&$t(e,function(n){n&&i.classList[t?"add":"remove"](n)})}function vn(i,e){In(i,jn(e)?e.split(" "):e,!0)}function Kr(i,e){$t(e,i.appendChild.bind(i))}function lc(i,e){$t(i,function(t){var n=(e||t).parentNode;n&&n.insertBefore(t,e)})}function Fr(i,e){return If(i)&&(i.msMatchesSelector||i.matches).call(i,e)}function Nf(i,e){var t=i?Qn(i.children):[];return e?t.filter(function(n){return Fr(n,e)}):t}function Zr(i,e){return e?Nf(i,e)[0]:i.firstElementChild}var Br=Object.keys;function gi(i,e,t){return i&&(t?Br(i).reverse():Br(i)).forEach(function(n){n!=="__proto__"&&e(i[n],n)}),i}function zr(i){return Qn(arguments,1).forEach(function(e){gi(e,function(t,n){i[n]=e[n]})}),i}function qn(i){return Qn(arguments,1).forEach(function(e){gi(e,function(t,n){ac(t)?i[n]=t.slice():Or(t)?i[n]=qn({},Or(i[n])?i[n]:{},t):i[n]=t})}),i}function gu(i,e){$t(e||Br(i),function(t){delete i[t]})}function xn(i,e){$t(i,function(t){$t(e,function(n){t&&t.removeAttribute(n)})})}function Le(i,e,t){Or(e)?gi(e,function(n,r){Le(i,r,n)}):$t(i,function(n){oc(t)||t===""?xn(n,e):n.setAttribute(e,String(t))})}function tr(i,e,t){var n=document.createElement(i);return e&&(jn(e)?vn(n,e):Le(n,e)),t&&Kr(t,n),n}function sn(i,e,t){if($r(t))return getComputedStyle(i)[e];oc(t)||(i.style[e]=""+t)}function Gr(i,e){sn(i,"display",e)}function Of(i){i.setActive&&i.setActive()||i.focus({preventScroll:!0})}function cn(i,e){return i.getAttribute(e)}function vu(i,e){return i&&i.classList.contains(e)}function Xt(i){return i.getBoundingClientRect()}function Ei(i){$t(i,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function Ff(i){return Zr(new DOMParser().parseFromString(i,"text/html").body)}function Ln(i,e){i.preventDefault(),e&&(i.stopPropagation(),i.stopImmediatePropagation())}function Bf(i,e){return i&&i.querySelector(e)}function uc(i,e){return e?Qn(i.querySelectorAll(e)):[]}function Nn(i,e){In(i,e,!1)}function wo(i){return i.timeStamp}function ci(i){return jn(i)?i:i?i+"px":""}var jr="splide",fc="data-"+jr;function Dr(i,e){if(!i)throw new Error("["+jr+"] "+(e||""))}var Jn=Math.min,Xs=Math.max,qs=Math.floor,Hr=Math.ceil,Ut=Math.abs;function zf(i,e,t){return Ut(i-e)<t}function Fs(i,e,t,n){var r=Jn(e,t),s=Xs(e,t);return n?r<i&&i<s:r<=i&&i<=s}function Yi(i,e,t){var n=Jn(e,t),r=Xs(e,t);return Jn(Xs(n,i),r)}function Ro(i){return+(i>0)-+(i<0)}function Co(i,e){return $t(e,function(t){i=i.replace("%s",""+t)}),i}function hc(i){return i<10?"0"+i:""+i}var xu={};function ax(i){return""+i+hc(xu[i]=(xu[i]||0)+1)}function Gf(){var i=[];function e(o,a,c,l){r(o,a,function(u,d,h){var p="addEventListener"in u,_=p?u.removeEventListener.bind(u,d,c,l):u.removeListener.bind(u,c);p?u.addEventListener(d,c,l):u.addListener(c),i.push([u,d,h,c,_])})}function t(o,a,c){r(o,a,function(l,u,d){i=i.filter(function(h){return h[0]===l&&h[1]===u&&h[2]===d&&(!c||h[3]===c)?(h[4](),!1):!0})})}function n(o,a,c){var l,u=!0;return typeof CustomEvent=="function"?l=new CustomEvent(a,{bubbles:u,detail:c}):(l=document.createEvent("CustomEvent"),l.initCustomEvent(a,u,!1,c)),o.dispatchEvent(l),l}function r(o,a,c){$t(o,function(l){l&&$t(a,function(u){u.split(" ").forEach(function(d){var h=d.split(".");c(l,h[0],h[1])})})})}function s(){i.forEach(function(o){o[4]()}),Bn(i)}return{bind:e,unbind:t,dispatch:n,destroy:s}}var ei="mounted",Eu="ready",En="move",Si="moved",$s="click",Lo="active",Po="inactive",Do="visible",Uo="hidden",ut="refresh",bt="updated",fr="resize",ua="resized",Hf="drag",Vf="dragging",kf="dragged",fa="scroll",wi="scrolled",ox="overflow",dc="destroy",Io="arrows:mounted",No="arrows:updated",Oo="pagination:mounted",Fo="pagination:updated",Ys="navigation:mounted",pc="autoplay:play",Bo="autoplay:playing",mc="autoplay:pause",Ks="lazyload:loaded",Wf="sk",Xf="sh",Zs="ei";function nt(i){var e=i?i.event.bus:document.createDocumentFragment(),t=Gf();function n(s,o){t.bind(e,Yr(s).join(" "),function(a){o.apply(o,ac(a.detail)?a.detail:[])})}function r(s){t.dispatch(e,s,Qn(arguments,1))}return i&&i.event.on(dc,t.destroy),zr(t,{bus:e,on:n,off:$e(t.unbind,e),emit:r})}function ha(i,e,t,n){var r=Date.now,s,o=0,a,c=!0,l=0;function u(){if(!c){if(o=i?Jn((r()-s)/i,1):1,t&&t(o),o>=1&&(e(),s=r(),n&&++l>=n))return h();a=_u(u)}}function d(f){f||_(),s=r()-(f?o*i:0),c=!1,a=_u(u)}function h(){c=!0}function p(){s=r(),o=0,t&&t(o)}function _(){a&&cancelAnimationFrame(a),o=0,a=0,c=!0}function g(f){i=f}function m(){return c}return{start:d,rewind:p,pause:h,cancel:_,set:g,isPaused:m}}function cx(i){var e=i;function t(r){e=r}function n(r){return cc(Yr(r),e)}return{set:t,is:n}}function lx(i,e){var t=ha(e||0,i,null,1);return function(){t.isPaused()&&t.start()}}function ux(i,e,t){var n=i.state,r=t.breakpoints||{},s=t.reducedMotion||{},o=Gf(),a=[];function c(){var _=t.mediaQuery==="min";Br(r).sort(function(g,m){return _?+g-+m:+m-+g}).forEach(function(g){u(r[g],"("+(_?"min":"max")+"-width:"+g+"px)")}),u(s,mu),d()}function l(_){_&&o.destroy()}function u(_,g){var m=matchMedia(g);o.bind(m,"change",d),a.push([_,m])}function d(){var _=n.is(Ws),g=t.direction,m=a.reduce(function(f,x){return qn(f,x[1].matches?x[0]:{})},{});gu(t),p(m),t.destroy?i.destroy(t.destroy==="completely"):_?(l(!0),i.mount()):g!==t.direction&&i.refresh()}function h(_){matchMedia(mu).matches&&(_?qn(t,s):gu(t,Br(s)))}function p(_,g,m){qn(t,_),g&&qn(Object.getPrototypeOf(t),_),(m||!n.is(ji))&&i.emit(bt,t)}return{setup:c,destroy:l,reduce:h,set:p}}var da="Arrow",pa=da+"Left",ma=da+"Right",qf=da+"Up",$f=da+"Down",Su="rtl",_a="ttb",io={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[qf,ma],ArrowRight:[$f,pa]};function fx(i,e,t){function n(s,o,a){a=a||t.direction;var c=a===Su&&!o?1:a===_a?0:-1;return io[s]&&io[s][c]||s.replace(/width|left|right/i,function(l,u){var d=io[l.toLowerCase()][c]||l;return u>0?d.charAt(0).toUpperCase()+d.slice(1):d})}function r(s){return s*(t.direction===Su?1:-1)}return{resolve:n,orient:r}}var On="role",nr="tabindex",hx="disabled",un="aria-",Jr=un+"controls",Yf=un+"current",Mu=un+"selected",qt=un+"label",_c=un+"labelledby",Kf=un+"hidden",gc=un+"orientation",Vr=un+"roledescription",yu=un+"live",Tu=un+"busy",Au=un+"atomic",vc=[On,nr,hx,Jr,Yf,qt,_c,Kf,gc,Vr],Sn=jr+"__",ti="is-",ro=jr,bu=Sn+"track",dx=Sn+"list",ga=Sn+"slide",Zf=ga+"--clone",px=ga+"__container",xc=Sn+"arrows",va=Sn+"arrow",jf=va+"--prev",Jf=va+"--next",xa=Sn+"pagination",Qf=xa+"__page",mx=Sn+"progress",_x=mx+"__bar",gx=Sn+"toggle",vx=Sn+"spinner",xx=Sn+"sr",Ex=ti+"initialized",Mi=ti+"active",eh=ti+"prev",th=ti+"next",zo=ti+"visible",Go=ti+"loading",nh=ti+"focus-in",ih=ti+"overflow",Sx=[Mi,zo,eh,th,Go,nh,ih],Mx={slide:ga,clone:Zf,arrows:xc,arrow:va,prev:jf,next:Jf,pagination:xa,page:Qf,spinner:vx};function yx(i,e){if(Uf(i.closest))return i.closest(e);for(var t=i;t&&t.nodeType===1&&!Fr(t,e);)t=t.parentElement;return t}var Tx=5,wu=200,rh="touchstart mousedown",so="touchmove mousemove",ao="touchend touchcancel mouseup click";function Ax(i,e,t){var n=nt(i),r=n.on,s=n.bind,o=i.root,a=t.i18n,c={},l=[],u=[],d=[],h,p,_;function g(){v(),M(),x()}function m(){r(ut,f),r(ut,g),r(bt,x),s(document,rh+" keydown",function(y){_=y.type==="keydown"},{capture:!0}),s(o,"focusin",function(){In(o,nh,!!_)})}function f(y){var D=vc.concat("style");Bn(l),Nn(o,u),Nn(h,d),xn([h,p],D),xn(o,y?D:["style",Vr])}function x(){Nn(o,u),Nn(h,d),u=w(ro),d=w(bu),vn(o,u),vn(h,d),Le(o,qt,t.label),Le(o,_c,t.labelledby)}function v(){h=A("."+bu),p=Zr(h,"."+dx),Dr(h&&p,"A track/list element is missing."),Os(l,Nf(p,"."+ga+":not(."+Zf+")")),gi({arrows:xc,pagination:xa,prev:jf,next:Jf,bar:_x,toggle:gx},function(y,D){c[D]=A("."+y)}),zr(c,{root:o,track:h,list:p,slides:l})}function M(){var y=o.id||ax(jr),D=t.role;o.id=y,h.id=h.id||y+"-track",p.id=p.id||y+"-list",!cn(o,On)&&o.tagName!=="SECTION"&&D&&Le(o,On,D),Le(o,Vr,a.carousel),Le(p,On,"presentation")}function A(y){var D=Bf(o,y);return D&&yx(D,"."+ro)===o?D:void 0}function w(y){return[y+"--"+t.type,y+"--"+t.direction,t.drag&&y+"--draggable",t.isNavigation&&y+"--nav",y===ro&&Mi]}return zr(c,{setup:g,mount:m,destroy:f})}var hr="slide",xr="loop",Qr="fade";function bx(i,e,t,n){var r=nt(i),s=r.on,o=r.emit,a=r.bind,c=i.Components,l=i.root,u=i.options,d=u.isNavigation,h=u.updateOnMove,p=u.i18n,_=u.pagination,g=u.slideFocus,m=c.Direction.resolve,f=cn(n,"style"),x=cn(n,qt),v=t>-1,M=Zr(n,"."+px),A;function w(){v||(n.id=l.id+"-slide"+hc(e+1),Le(n,On,_?"tabpanel":"group"),Le(n,Vr,p.slide),Le(n,qt,x||Co(p.slideLabel,[e+1,i.length]))),y()}function y(){a(n,"click",$e(o,$s,F)),a(n,"keydown",$e(o,Wf,F)),s([Si,Xf,wi],U),s(Ys,E),h&&s(En,T)}function D(){A=!0,r.destroy(),Nn(n,Sx),xn(n,vc),Le(n,"style",f),Le(n,qt,x||"")}function E(){var G=i.splides.map(function(I){var C=I.splide.Components.Slides.getAt(e);return C?C.slide.id:""}).join(" ");Le(n,qt,Co(p.slideX,(v?t:e)+1)),Le(n,Jr,G),Le(n,On,g?"button":""),g&&xn(n,Vr)}function T(){A||U()}function U(){if(!A){var G=i.index;k(),L(),In(n,eh,e===G-1),In(n,th,e===G+1)}}function k(){var G=N();G!==vu(n,Mi)&&(In(n,Mi,G),Le(n,Yf,d&&G||""),o(G?Lo:Po,F))}function L(){var G=J(),I=!G&&(!N()||v);if(i.state.is([vr,qr])||Le(n,Kf,I||""),Le(uc(n,u.focusableNodes||""),nr,I?-1:""),g&&Le(n,nr,I?-1:0),G!==vu(n,zo)&&(In(n,zo,G),o(G?Do:Uo,F)),!G&&document.activeElement===n){var C=c.Slides.getAt(i.index);C&&Of(C.slide)}}function O(G,I,C){sn(C&&M||n,G,I)}function N(){var G=i.index;return G===e||u.cloneStatus&&G===t}function J(){if(i.is(Qr))return N();var G=Xt(c.Elements.track),I=Xt(n),C=m("left",!0),V=m("right",!0);return qs(G[C])<=Hr(I[C])&&qs(I[V])<=Hr(G[V])}function W(G,I){var C=Ut(G-e);return!v&&(u.rewind||i.is(xr))&&(C=Jn(C,i.length-C)),C<=I}var F={index:e,slideIndex:t,slide:n,container:M,isClone:v,mount:w,destroy:D,update:U,style:O,isWithin:W};return F}function wx(i,e,t){var n=nt(i),r=n.on,s=n.emit,o=n.bind,a=e.Elements,c=a.slides,l=a.list,u=[];function d(){h(),r(ut,p),r(ut,h)}function h(){c.forEach(function(U,k){g(U,k,-1)})}function p(){A(function(U){U.destroy()}),Bn(u)}function _(){A(function(U){U.update()})}function g(U,k,L){var O=bx(i,k,L,U);O.mount(),u.push(O),u.sort(function(N,J){return N.index-J.index})}function m(U){return U?w(function(k){return!k.isClone}):u}function f(U){var k=e.Controller,L=k.toIndex(U),O=k.hasFocus()?1:t.perPage;return w(function(N){return Fs(N.index,L,L+O-1)})}function x(U){return w(U)[0]}function v(U,k){$t(U,function(L){if(jn(L)&&(L=Ff(L)),If(L)){var O=c[k];O?lc(L,O):Kr(l,L),vn(L,t.classes.slide),D(L,$e(s,fr))}}),s(ut)}function M(U){Ei(w(U).map(function(k){return k.slide})),s(ut)}function A(U,k){m(k).forEach(U)}function w(U){return u.filter(Uf(U)?U:function(k){return jn(U)?Fr(k.slide,U):cc(Yr(U),k.index)})}function y(U,k,L){A(function(O){O.style(U,k,L)})}function D(U,k){var L=uc(U,"img"),O=L.length;O?L.forEach(function(N){o(N,"load error",function(){--O||k()})}):k()}function E(U){return U?c.length:u.length}function T(){return u.length>t.perPage}return{mount:d,destroy:p,update:_,register:g,get:m,getIn:f,getAt:x,add:v,remove:M,forEach:A,filter:w,style:y,getLength:E,isEnough:T}}function Rx(i,e,t){var n=nt(i),r=n.on,s=n.bind,o=n.emit,a=e.Slides,c=e.Direction.resolve,l=e.Elements,u=l.root,d=l.track,h=l.list,p=a.getAt,_=a.style,g,m,f;function x(){v(),s(window,"resize load",lx($e(o,fr))),r([bt,ut],v),r(fr,M)}function v(){g=t.direction===_a,sn(u,"maxWidth",ci(t.width)),sn(d,c("paddingLeft"),A(!1)),sn(d,c("paddingRight"),A(!0)),M(!0)}function M(F){var G=Xt(u);(F||m.width!==G.width||m.height!==G.height)&&(sn(d,"height",w()),_(c("marginRight"),ci(t.gap)),_("width",D()),_("height",E(),!0),m=G,o(ua),f!==(f=W())&&(In(u,ih,f),o(ox,f)))}function A(F){var G=t.padding,I=c(F?"right":"left");return G&&ci(G[I]||(Or(G)?0:G))||"0px"}function w(){var F="";return g&&(F=y(),Dr(F,"height or heightRatio is missing."),F="calc("+F+" - "+A(!1)+" - "+A(!0)+")"),F}function y(){return ci(t.height||Xt(h).width*t.heightRatio)}function D(){return t.autoWidth?null:ci(t.fixedWidth)||(g?"":T())}function E(){return ci(t.fixedHeight)||(g?t.autoHeight?null:T():y())}function T(){var F=ci(t.gap);return"calc((100%"+(F&&" + "+F)+")/"+(t.perPage||1)+(F&&" - "+F)+")"}function U(){return Xt(h)[c("width")]}function k(F,G){var I=p(F||0);return I?Xt(I.slide)[c("width")]+(G?0:N()):0}function L(F,G){var I=p(F);if(I){var C=Xt(I.slide)[c("right")],V=Xt(h)[c("left")];return Ut(C-V)+(G?0:N())}return 0}function O(F){return L(i.length-1)-L(0)+k(0,F)}function N(){var F=p(0);return F&&parseFloat(sn(F.slide,c("marginRight")))||0}function J(F){return parseFloat(sn(d,c("padding"+(F?"Right":"Left"))))||0}function W(){return i.is(Qr)||O(!0)>U()}return{mount:x,resize:M,listSize:U,slideSize:k,sliderSize:O,totalSize:L,getPadding:J,isOverflow:W}}var Cx=2;function Lx(i,e,t){var n=nt(i),r=n.on,s=e.Elements,o=e.Slides,a=e.Direction.resolve,c=[],l;function u(){r(ut,d),r([bt,fr],p),(l=m())&&(_(l),e.Layout.resize(!0))}function d(){h(),u()}function h(){Ei(c),Bn(c),n.destroy()}function p(){var f=m();l!==f&&(l<f||!f)&&n.emit(ut)}function _(f){var x=o.get().slice(),v=x.length;if(v){for(;x.length<f;)Os(x,x);Os(x.slice(-f),x.slice(0,f)).forEach(function(M,A){var w=A<f,y=g(M.slide,A);w?lc(y,x[0].slide):Kr(s.list,y),Os(c,y),o.register(y,A-f+(w?0:v),M.index)})}}function g(f,x){var v=f.cloneNode(!0);return vn(v,t.classes.clone),v.id=i.root.id+"-clone"+hc(x+1),v}function m(){var f=t.clones;if(!i.is(xr))f=0;else if($r(f)){var x=t[a("fixedWidth")]&&e.Layout.slideSize(0),v=x&&Hr(Xt(s.track)[a("width")]/x);f=v||t[a("autoWidth")]&&i.length||t.perPage*Cx}return f}return{mount:u,destroy:h}}function Px(i,e,t){var n=nt(i),r=n.on,s=n.emit,o=i.state.set,a=e.Layout,c=a.slideSize,l=a.getPadding,u=a.totalSize,d=a.listSize,h=a.sliderSize,p=e.Direction,_=p.resolve,g=p.orient,m=e.Elements,f=m.list,x=m.track,v;function M(){v=e.Transition,r([ei,ua,bt,ut],A)}function A(){e.Controller.isBusy()||(e.Scroll.cancel(),y(i.index),e.Slides.update())}function w(I,C,V,Q){I!==C&&F(I>V)&&(U(),D(T(O(),I>V),!0)),o(vr),s(En,C,V,I),v.start(C,function(){o(ur),s(Si,C,V,I),Q&&Q()})}function y(I){D(L(I,!0))}function D(I,C){if(!i.is(Qr)){var V=C?I:E(I);sn(f,"transform","translate"+_("X")+"("+V+"px)"),I!==V&&s(Xf)}}function E(I){if(i.is(xr)){var C=k(I),V=C>e.Controller.getEnd(),Q=C<0;(Q||V)&&(I=T(I,V))}return I}function T(I,C){var V=I-W(C),Q=h();return I-=g(Q*(Hr(Ut(V)/Q)||1))*(C?1:-1),I}function U(){D(O(),!0),v.cancel()}function k(I){for(var C=e.Slides.get(),V=0,Q=1/0,ee=0;ee<C.length;ee++){var ce=C[ee].index,j=Ut(L(ce,!0)-I);if(j<=Q)Q=j,V=ce;else break}return V}function L(I,C){var V=g(u(I-1)-J(I));return C?N(V):V}function O(){var I=_("left");return Xt(f)[I]-Xt(x)[I]+g(l(!1))}function N(I){return t.trimSpace&&i.is(hr)&&(I=Yi(I,0,g(h(!0)-d()))),I}function J(I){var C=t.focus;return C==="center"?(d()-c(I,!0))/2:+C*c(I)||0}function W(I){return L(I?e.Controller.getEnd():0,!!t.trimSpace)}function F(I){var C=g(T(O(),I));return I?C>=0:C<=f[_("scrollWidth")]-Xt(x)[_("width")]}function G(I,C){C=$r(C)?O():C;var V=I!==!0&&g(C)<g(W(!1)),Q=I!==!1&&g(C)>g(W(!0));return V||Q}return{mount:M,move:w,jump:y,translate:D,shift:T,cancel:U,toIndex:k,toPosition:L,getPosition:O,getLimit:W,exceededLimit:G,reposition:A}}function Dx(i,e,t){var n=nt(i),r=n.on,s=n.emit,o=e.Move,a=o.getPosition,c=o.getLimit,l=o.toPosition,u=e.Slides,d=u.isEnough,h=u.getLength,p=t.omitEnd,_=i.is(xr),g=i.is(hr),m=$e(O,!1),f=$e(O,!0),x=t.start||0,v,M=x,A,w,y;function D(){E(),r([bt,ut,Zs],E),r(ua,T)}function E(){A=h(!0),w=t.perMove,y=t.perPage,v=F();var j=Yi(x,0,p?v:A-1);j!==x&&(x=j,o.reposition())}function T(){v!==F()&&s(Zs)}function U(j,he,pe){if(!ce()){var Ee=L(j),Ve=W(Ee);Ve>-1&&(he||Ve!==x)&&(V(Ve),o.move(Ee,Ve,M,pe))}}function k(j,he,pe,Ee){e.Scroll.scroll(j,he,pe,function(){var Ve=W(o.toIndex(a()));V(p?Jn(Ve,v):Ve),Ee&&Ee()})}function L(j){var he=x;if(jn(j)){var pe=j.match(/([+\-<>])(\d+)?/)||[],Ee=pe[1],Ve=pe[2];Ee==="+"||Ee==="-"?he=N(x+ +(""+Ee+(+Ve||1)),x):Ee===">"?he=Ve?G(+Ve):m(!0):Ee==="<"&&(he=f(!0))}else he=_?j:Yi(j,0,v);return he}function O(j,he){var pe=w||(ee()?1:y),Ee=N(x+pe*(j?-1:1),x,!(w||ee()));return Ee===-1&&g&&!zf(a(),c(!j),1)?j?0:v:he?Ee:W(Ee)}function N(j,he,pe){if(d()||ee()){var Ee=J(j);Ee!==j&&(he=j,j=Ee,pe=!1),j<0||j>v?!w&&(Fs(0,j,he,!0)||Fs(v,he,j,!0))?j=G(I(j)):_?j=pe?j<0?-(A%y||y):A:j:t.rewind?j=j<0?v:0:j=-1:pe&&j!==he&&(j=G(I(he)+(j<he?-1:1)))}else j=-1;return j}function J(j){if(g&&t.trimSpace==="move"&&j!==x)for(var he=a();he===l(j,!0)&&Fs(j,0,i.length-1,!t.rewind);)j<x?--j:++j;return j}function W(j){return _?(j+A)%A||0:j}function F(){for(var j=A-(ee()||_&&w?1:y);p&&j-- >0;)if(l(A-1,!0)!==l(j,!0)){j++;break}return Yi(j,0,A-1)}function G(j){return Yi(ee()?j:y*j,0,v)}function I(j){return ee()?Jn(j,v):qs((j>=v?A-1:j)/y)}function C(j){var he=o.toIndex(j);return g?Yi(he,0,v):he}function V(j){j!==x&&(M=x,x=j)}function Q(j){return j?M:x}function ee(){return!$r(t.focus)||t.isNavigation}function ce(){return i.state.is([vr,qr])&&!!t.waitForTransition}return{mount:D,go:U,scroll:k,getNext:m,getPrev:f,getAdjacent:O,getEnd:F,setIndex:V,getIndex:Q,toIndex:G,toPage:I,toDest:C,hasFocus:ee,isBusy:ce}}var Ux="http://www.w3.org/2000/svg",Ix="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Cs=40;function Nx(i,e,t){var n=nt(i),r=n.on,s=n.bind,o=n.emit,a=t.classes,c=t.i18n,l=e.Elements,u=e.Controller,d=l.arrows,h=l.track,p=d,_=l.prev,g=l.next,m,f,x={};function v(){A(),r(bt,M)}function M(){w(),v()}function A(){var k=t.arrows;k&&!(_&&g)&&E(),_&&g&&(zr(x,{prev:_,next:g}),Gr(p,k?"":"none"),vn(p,f=xc+"--"+t.direction),k&&(y(),U(),Le([_,g],Jr,h.id),o(Io,_,g)))}function w(){n.destroy(),Nn(p,f),m?(Ei(d?[_,g]:p),_=g=null):xn([_,g],vc)}function y(){r([ei,Si,ut,wi,Zs],U),s(g,"click",$e(D,">")),s(_,"click",$e(D,"<"))}function D(k){u.go(k,!0)}function E(){p=d||tr("div",a.arrows),_=T(!0),g=T(!1),m=!0,Kr(p,[_,g]),!d&&lc(p,h)}function T(k){var L='<button class="'+a.arrow+" "+(k?a.prev:a.next)+'" type="button"><svg xmlns="'+Ux+'" viewBox="0 0 '+Cs+" "+Cs+'" width="'+Cs+'" height="'+Cs+'" focusable="false"><path d="'+(t.arrowPath||Ix)+'" />';return Ff(L)}function U(){if(_&&g){var k=i.index,L=u.getPrev(),O=u.getNext(),N=L>-1&&k<L?c.last:c.prev,J=O>-1&&k>O?c.first:c.next;_.disabled=L<0,g.disabled=O<0,Le(_,qt,N),Le(g,qt,J),o(No,_,g,L,O)}}return{arrows:x,mount:v,destroy:w,update:U}}var Ox=fc+"-interval";function Fx(i,e,t){var n=nt(i),r=n.on,s=n.bind,o=n.emit,a=ha(t.interval,i.go.bind(i,">"),y),c=a.isPaused,l=e.Elements,u=e.Elements,d=u.root,h=u.toggle,p=t.autoplay,_,g,m=p==="pause";function f(){p&&(x(),h&&Le(h,Jr,l.track.id),m||v(),w())}function x(){t.pauseOnHover&&s(d,"mouseenter mouseleave",function(E){_=E.type==="mouseenter",A()}),t.pauseOnFocus&&s(d,"focusin focusout",function(E){g=E.type==="focusin",A()}),h&&s(h,"click",function(){m?v():M(!0)}),r([En,fa,ut],a.rewind),r(En,D)}function v(){c()&&e.Slides.isEnough()&&(a.start(!t.resetProgress),g=_=m=!1,w(),o(pc))}function M(E){E===void 0&&(E=!0),m=!!E,w(),c()||(a.pause(),o(mc))}function A(){m||(_||g?M(!1):v())}function w(){h&&(In(h,Mi,!m),Le(h,qt,t.i18n[m?"play":"pause"]))}function y(E){var T=l.bar;T&&sn(T,"width",E*100+"%"),o(Bo,E)}function D(E){var T=e.Slides.getAt(E);a.set(T&&+cn(T.slide,Ox)||t.interval)}return{mount:f,destroy:a.cancel,play:v,pause:M,isPaused:c}}function Bx(i,e,t){var n=nt(i),r=n.on;function s(){t.cover&&(r(Ks,$e(a,!0)),r([ei,bt,ut],$e(o,!0)))}function o(c){e.Slides.forEach(function(l){var u=Zr(l.container||l.slide,"img");u&&u.src&&a(c,u,l)})}function a(c,l,u){u.style("background",c?'center/cover no-repeat url("'+l.src+'")':"",!0),Gr(l,c?"none":"")}return{mount:s,destroy:$e(o,!1)}}var zx=10,Gx=600,Hx=.6,Vx=1.5,kx=800;function Wx(i,e,t){var n=nt(i),r=n.on,s=n.emit,o=i.state.set,a=e.Move,c=a.getPosition,l=a.getLimit,u=a.exceededLimit,d=a.translate,h=i.is(hr),p,_,g=1;function m(){r(En,M),r([bt,ut],A)}function f(y,D,E,T,U){var k=c();if(M(),E&&(!h||!u())){var L=e.Layout.sliderSize(),O=Ro(y)*L*qs(Ut(y)/L)||0;y=a.toPosition(e.Controller.toDest(y%L))+O}var N=zf(k,y,1);g=1,D=N?0:D||Xs(Ut(y-k)/Vx,kx),_=T,p=ha(D,x,$e(v,k,y,U),1),o(qr),s(fa),p.start()}function x(){o(ur),_&&_(),s(wi)}function v(y,D,E,T){var U=c(),k=y+(D-y)*w(T),L=(k-U)*g;d(U+L),h&&!E&&u()&&(g*=Hx,Ut(L)<zx&&f(l(u(!0)),Gx,!1,_,!0))}function M(){p&&p.cancel()}function A(){p&&!p.isPaused()&&(M(),x())}function w(y){var D=t.easingFunc;return D?D(y):1-Math.pow(1-y,4)}return{mount:m,destroy:M,scroll:f,cancel:A}}var Ki={passive:!1,capture:!0};function Xx(i,e,t){var n=nt(i),r=n.on,s=n.emit,o=n.bind,a=n.unbind,c=i.state,l=e.Move,u=e.Scroll,d=e.Controller,h=e.Elements.track,p=e.Media.reduce,_=e.Direction,g=_.resolve,m=_.orient,f=l.getPosition,x=l.exceededLimit,v,M,A,w,y,D=!1,E,T,U;function k(){o(h,so,bo,Ki),o(h,ao,bo,Ki),o(h,rh,O,Ki),o(h,"click",W,{capture:!0}),o(h,"dragstart",Ln),r([ei,bt],L)}function L(){var oe=t.drag;B(!oe),w=oe==="free"}function O(oe){if(E=!1,!T){var ue=Ve(oe);Ee(oe.target)&&(ue||!oe.button)&&(d.isBusy()?Ln(oe,!0):(U=ue?h:window,y=c.is([vr,qr]),A=null,o(U,so,N,Ki),o(U,ao,J,Ki),l.cancel(),u.cancel(),F(oe)))}}function N(oe){if(c.is(Ns)||(c.set(Ns),s(Hf)),oe.cancelable)if(y){l.translate(v+pe(ee(oe)));var ue=ce(oe)>wu,Te=D!==(D=x());(ue||Te)&&F(oe),E=!0,s(Vf),Ln(oe)}else C(oe)&&(y=I(oe),Ln(oe))}function J(oe){c.is(Ns)&&(c.set(ur),s(kf)),y&&(G(oe),Ln(oe)),a(U,so,N),a(U,ao,J),y=!1}function W(oe){!T&&E&&Ln(oe,!0)}function F(oe){A=M,M=oe,v=f()}function G(oe){var ue=V(oe),Te=Q(ue),ye=t.rewind&&t.rewindByDrag;p(!1),w?d.scroll(Te,0,t.snap):i.is(Qr)?d.go(m(Ro(ue))<0?ye?"<":"-":ye?">":"+"):i.is(hr)&&D&&ye?d.go(x(!0)?">":"<"):d.go(d.toDest(Te),!0),p(!0)}function I(oe){var ue=t.dragMinThreshold,Te=Or(ue),ye=Te&&ue.mouse||0,Ye=(Te?ue.touch:+ue)||10;return Ut(ee(oe))>(Ve(oe)?Ye:ye)}function C(oe){return Ut(ee(oe))>Ut(ee(oe,!0))}function V(oe){if(i.is(xr)||!D){var ue=ce(oe);if(ue&&ue<wu)return ee(oe)/ue}return 0}function Q(oe){return f()+Ro(oe)*Jn(Ut(oe)*(t.flickPower||600),w?1/0:e.Layout.listSize()*(t.flickMaxPages||1))}function ee(oe,ue){return he(oe,ue)-he(j(oe),ue)}function ce(oe){return wo(oe)-wo(j(oe))}function j(oe){return M===oe&&A||M}function he(oe,ue){return(Ve(oe)?oe.changedTouches[0]:oe)["page"+g(ue?"Y":"X")]}function pe(oe){return oe/(D&&i.is(hr)?Tx:1)}function Ee(oe){var ue=t.noDrag;return!Fr(oe,"."+Qf+", ."+va)&&(!ue||!Fr(oe,ue))}function Ve(oe){return typeof TouchEvent<"u"&&oe instanceof TouchEvent}function Pe(){return y}function B(oe){T=oe}return{mount:k,disable:B,isDragging:Pe}}var qx={Spacebar:" ",Right:ma,Left:pa,Up:qf,Down:$f};function Ec(i){return i=jn(i)?i:i.key,qx[i]||i}var Ru="keydown";function $x(i,e,t){var n=nt(i),r=n.on,s=n.bind,o=n.unbind,a=i.root,c=e.Direction.resolve,l,u;function d(){h(),r(bt,p),r(bt,h),r(En,g)}function h(){var f=t.keyboard;f&&(l=f==="global"?window:a,s(l,Ru,m))}function p(){o(l,Ru)}function _(f){u=f}function g(){var f=u;u=!0,Df(function(){u=f})}function m(f){if(!u){var x=Ec(f);x===c(pa)?i.go("<"):x===c(ma)&&i.go(">")}}return{mount:d,destroy:p,disable:_}}var Ur=fc+"-lazy",Bs=Ur+"-srcset",Yx="["+Ur+"], ["+Bs+"]";function Kx(i,e,t){var n=nt(i),r=n.on,s=n.off,o=n.bind,a=n.emit,c=t.lazyLoad==="sequential",l=[Si,wi],u=[];function d(){t.lazyLoad&&(h(),r(ut,h))}function h(){Bn(u),p(),c?f():(s(l),r(l,_),_())}function p(){e.Slides.forEach(function(x){uc(x.slide,Yx).forEach(function(v){var M=cn(v,Ur),A=cn(v,Bs);if(M!==v.src||A!==v.srcset){var w=t.classes.spinner,y=v.parentElement,D=Zr(y,"."+w)||tr("span",w,y);u.push([v,x,D]),v.src||Gr(v,"none")}})})}function _(){u=u.filter(function(x){var v=t.perPage*((t.preloadPages||1)+1)-1;return x[1].isWithin(i.index,v)?g(x):!0}),u.length||s(l)}function g(x){var v=x[0];vn(x[1].slide,Go),o(v,"load error",$e(m,x)),Le(v,"src",cn(v,Ur)),Le(v,"srcset",cn(v,Bs)),xn(v,Ur),xn(v,Bs)}function m(x,v){var M=x[0],A=x[1];Nn(A.slide,Go),v.type!=="error"&&(Ei(x[2]),Gr(M,""),a(Ks,M,A),a(fr)),c&&f()}function f(){u.length&&g(u.shift())}return{mount:d,destroy:$e(Bn,u),check:_}}function Zx(i,e,t){var n=nt(i),r=n.on,s=n.emit,o=n.bind,a=e.Slides,c=e.Elements,l=e.Controller,u=l.hasFocus,d=l.getIndex,h=l.go,p=e.Direction.resolve,_=c.pagination,g=[],m,f;function x(){v(),r([bt,ut,Zs],x);var T=t.pagination;_&&Gr(_,T?"":"none"),T&&(r([En,fa,wi],E),M(),E(),s(Oo,{list:m,items:g},D(i.index)))}function v(){m&&(Ei(_?Qn(m.children):m),Nn(m,f),Bn(g),m=null),n.destroy()}function M(){var T=i.length,U=t.classes,k=t.i18n,L=t.perPage,O=u()?l.getEnd()+1:Hr(T/L);m=_||tr("ul",U.pagination,c.track.parentElement),vn(m,f=xa+"--"+y()),Le(m,On,"tablist"),Le(m,qt,k.select),Le(m,gc,y()===_a?"vertical":"");for(var N=0;N<O;N++){var J=tr("li",null,m),W=tr("button",{class:U.page,type:"button"},J),F=a.getIn(N).map(function(I){return I.slide.id}),G=!u()&&L>1?k.pageX:k.slideX;o(W,"click",$e(A,N)),t.paginationKeyboard&&o(W,"keydown",$e(w,N)),Le(J,On,"presentation"),Le(W,On,"tab"),Le(W,Jr,F.join(" ")),Le(W,qt,Co(G,N+1)),Le(W,nr,-1),g.push({li:J,button:W,page:N})}}function A(T){h(">"+T,!0)}function w(T,U){var k=g.length,L=Ec(U),O=y(),N=-1;L===p(ma,!1,O)?N=++T%k:L===p(pa,!1,O)?N=(--T+k)%k:L==="Home"?N=0:L==="End"&&(N=k-1);var J=g[N];J&&(Of(J.button),h(">"+N),Ln(U,!0))}function y(){return t.paginationDirection||t.direction}function D(T){return g[l.toPage(T)]}function E(){var T=D(d(!0)),U=D(d());if(T){var k=T.button;Nn(k,Mi),xn(k,Mu),Le(k,nr,-1)}if(U){var L=U.button;vn(L,Mi),Le(L,Mu,!0),Le(L,nr,"")}s(Fo,{list:m,items:g},T,U)}return{items:g,mount:x,destroy:v,getAt:D,update:E}}var jx=[" ","Enter"];function Jx(i,e,t){var n=t.isNavigation,r=t.slideFocus,s=[];function o(){i.splides.forEach(function(_){_.isParent||(l(i,_.splide),l(_.splide,i))}),n&&u()}function a(){s.forEach(function(_){_.destroy()}),Bn(s)}function c(){a(),o()}function l(_,g){var m=nt(_);m.on(En,function(f,x,v){g.go(g.is(xr)?v:f)}),s.push(m)}function u(){var _=nt(i),g=_.on;g($s,h),g(Wf,p),g([ei,bt],d),s.push(_),_.emit(Ys,i.splides)}function d(){Le(e.Elements.list,gc,t.direction===_a?"vertical":"")}function h(_){i.go(_.index)}function p(_,g){cc(jx,Ec(g))&&(h(_),Ln(g))}return{setup:$e(e.Media.set,{slideFocus:$r(r)?n:r},!0),mount:o,destroy:a,remount:c}}function Qx(i,e,t){var n=nt(i),r=n.bind,s=0;function o(){t.wheel&&r(e.Elements.track,"wheel",a,Ki)}function a(l){if(l.cancelable){var u=l.deltaY,d=u<0,h=wo(l),p=t.wheelMinThreshold||0,_=t.wheelSleep||0;Ut(u)>p&&h-s>_&&(i.go(d?"<":">"),s=h),c(d)&&Ln(l)}}function c(l){return!t.releaseWheel||i.state.is(vr)||e.Controller.getAdjacent(l)!==-1}return{mount:o}}var eE=90;function tE(i,e,t){var n=nt(i),r=n.on,s=e.Elements.track,o=t.live&&!t.isNavigation,a=tr("span",xx),c=ha(eE,$e(u,!1));function l(){o&&(h(!e.Autoplay.isPaused()),Le(s,Au,!0),a.textContent="…",r(pc,$e(h,!0)),r(mc,$e(h,!1)),r([Si,wi],$e(u,!0)))}function u(p){Le(s,Tu,p),p?(Kr(s,a),c.start()):(Ei(a),c.cancel())}function d(){xn(s,[yu,Au,Tu]),Ei(a)}function h(p){o&&Le(s,yu,p?"off":"polite")}return{mount:l,disable:h,destroy:d}}var nE=Object.freeze({__proto__:null,Media:ux,Direction:fx,Elements:Ax,Slides:wx,Layout:Rx,Clones:Lx,Move:Px,Controller:Dx,Arrows:Nx,Autoplay:Fx,Cover:Bx,Scroll:Wx,Drag:Xx,Keyboard:$x,LazyLoad:Kx,Pagination:Zx,Sync:Jx,Wheel:Qx,Live:tE}),iE={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},rE={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Mx,i18n:iE,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function sE(i,e,t){var n=e.Slides;function r(){nt(i).on([ei,ut],s)}function s(){n.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,c){n.style("transition","opacity "+t.speed+"ms "+t.easing),Df(c)}return{mount:r,start:o,cancel:bo}}function aE(i,e,t){var n=e.Move,r=e.Controller,s=e.Scroll,o=e.Elements.list,a=$e(sn,o,"transition"),c;function l(){nt(i).bind(o,"transitionend",function(p){p.target===o&&c&&(d(),c())})}function u(p,_){var g=n.toPosition(p,!0),m=n.getPosition(),f=h(p);Ut(g-m)>=1&&f>=1?t.useScroll?s.scroll(g,f,!1,_):(a("transform "+f+"ms "+t.easing),n.translate(g,!0),c=_):(n.jump(p),_())}function d(){a(""),s.cancel()}function h(p){var _=t.rewindSpeed;if(i.is(hr)&&_){var g=r.getIndex(!0),m=r.getEnd();if(g===0&&p>=m||g>=m&&p===0)return _}return t.speed}return{mount:l,start:u,cancel:d}}var oE=function(){function i(t,n){this.event=nt(),this.Components={},this.state=cx(ji),this.splides=[],this._o={},this._E={};var r=jn(t)?Bf(document,t):t;Dr(r,r+" is invalid."),this.root=r,n=qn({label:cn(r,qt)||"",labelledby:cn(r,_c)||""},rE,i.defaults,n||{});try{qn(n,JSON.parse(cn(r,fc)))}catch{Dr(!1,"Invalid JSON")}this._o=Object.create(qn({},n))}var e=i.prototype;return e.mount=function(n,r){var s=this,o=this.state,a=this.Components;Dr(o.is([ji,Ws]),"Already mounted!"),o.set(ji),this._C=a,this._T=r||this._T||(this.is(Qr)?sE:aE),this._E=n||this._E;var c=zr({},nE,this._E,{Transition:this._T});return gi(c,function(l,u){var d=l(s,a,s._o);a[u]=d,d.setup&&d.setup()}),gi(a,function(l){l.mount&&l.mount()}),this.emit(ei),vn(this.root,Ex),o.set(ur),this.emit(Eu),this},e.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(ur)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},e.go=function(n){return this._C.Controller.go(n),this},e.on=function(n,r){return this.event.on(n,r),this},e.off=function(n){return this.event.off(n),this},e.emit=function(n){var r;return(r=this.event).emit.apply(r,[n].concat(Qn(arguments,1))),this},e.add=function(n,r){return this._C.Slides.add(n,r),this},e.remove=function(n){return this._C.Slides.remove(n),this},e.is=function(n){return this._o.type===n},e.refresh=function(){return this.emit(ut),this},e.destroy=function(n){n===void 0&&(n=!0);var r=this.event,s=this.state;return s.is(ji)?nt(this).on(Eu,this.destroy.bind(this,n)):(gi(this._C,function(o){o.destroy&&o.destroy(n)},!0),r.emit(dc),r.destroy(),n&&Bn(this.splides),s.set(Ws)),this},ix(i,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),i}(),Sc=oE;Sc.defaults={};Sc.STATES=sx;const cE=[ei,ut,fr,ua,Hf,Vf,kf,fa,wi,dc,pc,mc];function lE(i,e){const t=(n,r={})=>{e(uE(n),{splide:i,...r})};i.on($s,(n,r)=>{t($s,{Slide:n,e:r})}),i.on(En,(n,r,s)=>{t(En,{index:n,prev:r,dest:s})}),i.on(Si,(n,r,s)=>{t(Si,{index:n,prev:r,dest:s})}),i.on(Lo,n=>{t(Lo,{Slide:n})}),i.on(Po,n=>{t(Po,{Slide:n})}),i.on(Do,n=>{t(Do,{Slide:n})}),i.on(Uo,n=>{t(Uo,{Slide:n})}),i.on(bt,n=>{t(bt,n)}),i.on(Io,(n,r)=>{t(Io,{prev:n,next:r})}),i.on(No,(n,r)=>{t(No,{prev:n,next:r})}),i.on(Oo,(n,r)=>{t(Oo,{data:n,item:r})}),i.on(Fo,(n,r,s)=>{t(Fo,{data:n,prev:r,curr:s})}),i.on(Ys,n=>{t(Ys,{splides:n})}),i.on(Bo,n=>{t(Bo,{rate:n})}),i.on(Ks,(n,r)=>{t(Ks,{img:n,Slide:r})}),cE.forEach(n=>{i.on(n,()=>{t(n)})})}function uE(i){return i.split(":").map((e,t)=>t>0?e.charAt(0).toUpperCase()+e.slice(1):e).join("").replace("Lazyload","LazyLoad")}function fE(i){let e;const t=i[11].default,n=js(t,i,i[13],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8192)&&Js(n,t,r,r[13],e?ea(t,r[13],s,null):Qs(r[13]),null)},i(r){e||(xt(n,r),e=!0)},o(r){vt(n,r),e=!1},d(r){n&&n.d(r)}}}function hE(i){let e,t;return e=new xE({props:{$$slots:{default:[dE]},$$scope:{ctx:i}}}),{c(){Qt(e.$$.fragment)},l(n){en(e.$$.fragment,n)},m(n,r){tn(e,n,r),t=!0},p(n,r){const s={};r&8192&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(xt(e.$$.fragment,n),t=!0)},o(n){vt(e.$$.fragment,n),t=!1},d(n){nn(e,n)}}}function dE(i){let e;const t=i[11].default,n=js(t,i,i[13],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8192)&&Js(n,t,r,r[13],e?ea(t,r[13],s,null):Qs(r[13]),null)},i(r){e||(xt(n,r),e=!0)},o(r){vt(n,r),e=!1},d(r){n&&n.d(r)}}}function pE(i){let e,t,n,r,s;const o=[hE,fE],a=[];function c(d,h){return d[1]?0:1}t=c(i),n=a[t]=o[t](i);let l=[{class:r=lr("splide",i[0])},i[3]],u={};for(let d=0;d<l.length;d+=1)u=Fn(u,l[d]);return{c(){e=Ze("div"),n.c(),this.h()},l(d){e=je(d,"DIV",{class:!0});var h=At(e);n.l(h),h.forEach(be),this.h()},h(){ir(e,u)},m(d,h){ke(d,e,h),a[t].m(e,null),i[12](e),s=!0},p(d,[h]){let p=t;t=c(d),t===p?a[t].p(d,h):(dh(),vt(a[p],1,1,()=>{a[p]=null}),ph(),n=a[t],n?n.p(d,h):(n=a[t]=o[t](d),n.c()),xt(n,1),n.m(e,null)),ir(e,u=Vo(l,[(!s||h&1&&r!==(r=lr("splide",d[0])))&&{class:r},h&8&&d[3]]))},i(d){s||(xt(n),s=!0)},o(d){vt(n),s=!1},d(d){d&&be(e),a[t].d(),i[12](null)}}}function mE(i,e,t){const n=["class","options","splide","extensions","transition","hasTrack","go","sync"];let r=rr(e,n),{$$slots:s={},$$scope:o}=e,{class:a=void 0}=e,{options:c={}}=e,{splide:l=void 0}=e,{extensions:u=void 0}=e,{transition:d=void 0}=e,{hasTrack:h=!0}=e;const p=mh();let _,g,m=Ao({},c);Ho(()=>(t(4,l=new Sc(_,c)),lE(l,p),l.mount(u,d),g=du(l),()=>l.destroy())),_h(()=>{if(l){const M=du(l);nx(g,M)||(l.refresh(),g=M.slice())}});function f(M){l==null||l.go(M)}function x(M){l==null||l.sync(M)}function v(M){Lu[M?"unshift":"push"](()=>{_=M,t(2,_)})}return i.$$set=M=>{e=Fn(Fn({},e),ko(M)),t(3,r=rr(e,n)),"class"in M&&t(0,a=M.class),"options"in M&&t(5,c=M.options),"splide"in M&&t(4,l=M.splide),"extensions"in M&&t(6,u=M.extensions),"transition"in M&&t(7,d=M.transition),"hasTrack"in M&&t(1,h=M.hasTrack),"$$scope"in M&&t(13,o=M.$$scope)},i.$$.update=()=>{i.$$.dirty&1072&&l&&!To(m,c)&&(t(4,l.options=c,l),t(10,m=Ao({},m)))},[a,h,_,r,l,c,u,d,f,x,m,s,v,o]}class _E extends yi{constructor(e){super(),Ti(this,e,mE,pE,Ai,{class:0,options:5,splide:4,extensions:6,transition:7,hasTrack:1,go:8,sync:9})}get class(){return this.$$.ctx[0]}set class(e){this.$$set({class:e}),Ri()}get options(){return this.$$.ctx[5]}set options(e){this.$$set({options:e}),Ri()}get splide(){return this.$$.ctx[4]}set splide(e){this.$$set({splide:e}),Ri()}get extensions(){return this.$$.ctx[6]}set extensions(e){this.$$set({extensions:e}),Ri()}get transition(){return this.$$.ctx[7]}set transition(e){this.$$set({transition:e}),Ri()}get hasTrack(){return this.$$.ctx[1]}set hasTrack(e){this.$$set({hasTrack:e}),Ri()}get go(){return this.$$.ctx[8]}get sync(){return this.$$.ctx[9]}}function gE(i){let e,t,n,r;const s=i[3].default,o=js(s,i,i[2],null);let a=[{class:n=lr("splide__track",i[0])},i[1]],c={};for(let l=0;l<a.length;l+=1)c=Fn(c,a[l]);return{c(){e=Ze("div"),t=Ze("ul"),o&&o.c(),this.h()},l(l){e=je(l,"DIV",{class:!0});var u=At(e);t=je(u,"UL",{class:!0});var d=At(t);o&&o.l(d),d.forEach(be),u.forEach(be),this.h()},h(){we(t,"class","splide__list"),ir(e,c)},m(l,u){ke(l,e,u),Qe(e,t),o&&o.m(t,null),r=!0},p(l,[u]){o&&o.p&&(!r||u&4)&&Js(o,s,l,l[2],r?ea(s,l[2],u,null):Qs(l[2]),null),ir(e,c=Vo(a,[(!r||u&1&&n!==(n=lr("splide__track",l[0])))&&{class:n},u&2&&l[1]]))},i(l){r||(xt(o,l),r=!0)},o(l){vt(o,l),r=!1},d(l){l&&be(e),o&&o.d(l)}}}function vE(i,e,t){const n=["class"];let r=rr(e,n),{$$slots:s={},$$scope:o}=e,{class:a=void 0}=e;return i.$$set=c=>{e=Fn(Fn({},e),ko(c)),t(1,r=rr(e,n)),"class"in c&&t(0,a=c.class),"$$scope"in c&&t(2,o=c.$$scope)},[a,r,o,s]}class xE extends yi{constructor(e){super(),Ti(this,e,vE,gE,Ai,{class:0})}}function EE(i){let e,t,n;const r=i[3].default,s=js(r,i,i[2],null);let o=[{class:t=lr("splide__slide",i[0])},i[1]],a={};for(let c=0;c<o.length;c+=1)a=Fn(a,o[c]);return{c(){e=Ze("li"),s&&s.c(),this.h()},l(c){e=je(c,"LI",{class:!0});var l=At(e);s&&s.l(l),l.forEach(be),this.h()},h(){ir(e,a)},m(c,l){ke(c,e,l),s&&s.m(e,null),n=!0},p(c,[l]){s&&s.p&&(!n||l&4)&&Js(s,r,c,c[2],n?ea(r,c[2],l,null):Qs(c[2]),null),ir(e,a=Vo(o,[(!n||l&1&&t!==(t=lr("splide__slide",c[0])))&&{class:t},l&2&&c[1]]))},i(c){n||(xt(s,c),n=!0)},o(c){vt(s,c),n=!1},d(c){c&&be(e),s&&s.d(c)}}}function SE(i,e,t){const n=["class"];let r=rr(e,n),{$$slots:s={},$$scope:o}=e,{class:a=void 0}=e;return i.$$set=c=>{e=Fn(Fn({},e),ko(c)),t(1,r=rr(e,n)),"class"in c&&t(0,a=c.class),"$$scope"in c&&t(2,o=c.$$scope)},[a,r,o,s]}class Xi extends yi{constructor(e){super(),Ti(this,e,SE,EE,Ai,{class:0})}}const Er=""+new URL("../assets/github.1ea8d62e.svg",import.meta.url).href;function ME(i){let e,t;return{c(){e=Ze("img"),this.h()},l(n){e=je(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){dr(e.src,t=Er)||we(e,"src",t),we(e,"alt","Logo GitHub"),we(e,"class","imgcarousel"),we(e,"width","50"),we(e,"height","50")},m(n,r){ke(n,e,r)},p:ln,d(n){n&&be(e)}}}function yE(i){let e,t;return{c(){e=Ze("img"),this.h()},l(n){e=je(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){dr(e.src,t=Er)||we(e,"src",t),we(e,"alt","Logo GitHub"),we(e,"class","imgcarousel"),we(e,"width","50"),we(e,"height","50")},m(n,r){ke(n,e,r)},p:ln,d(n){n&&be(e)}}}function TE(i){let e,t;return{c(){e=Ze("img"),this.h()},l(n){e=je(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){dr(e.src,t=Er)||we(e,"src",t),we(e,"alt","Logo GitHub"),we(e,"class","imgcarousel"),we(e,"width","50"),we(e,"height","50")},m(n,r){ke(n,e,r)},p:ln,d(n){n&&be(e)}}}function AE(i){let e,t;return{c(){e=Ze("img"),this.h()},l(n){e=je(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){dr(e.src,t=Er)||we(e,"src",t),we(e,"alt","Logo GitHub"),we(e,"class","imgcarousel"),we(e,"width","50"),we(e,"height","50")},m(n,r){ke(n,e,r)},p:ln,d(n){n&&be(e)}}}function bE(i){let e,t;return{c(){e=Ze("img"),this.h()},l(n){e=je(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){dr(e.src,t=Er)||we(e,"src",t),we(e,"alt","Logo GitHub"),we(e,"class","imgcarousel"),we(e,"width","50"),we(e,"height","50")},m(n,r){ke(n,e,r)},p:ln,d(n){n&&be(e)}}}function wE(i){let e,t;return{c(){e=Ze("img"),this.h()},l(n){e=je(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){dr(e.src,t=Er)||we(e,"src",t),we(e,"alt","Logo GitHub"),we(e,"class","imgcarousel"),we(e,"width","50"),we(e,"height","50")},m(n,r){ke(n,e,r)},p:ln,d(n){n&&be(e)}}}function RE(i){let e,t,n,r,s,o,a,c,l,u,d,h;return e=new Xi({props:{$$slots:{default:[ME]},$$scope:{ctx:i}}}),n=new Xi({props:{$$slots:{default:[yE]},$$scope:{ctx:i}}}),s=new Xi({props:{$$slots:{default:[TE]},$$scope:{ctx:i}}}),a=new Xi({props:{$$slots:{default:[AE]},$$scope:{ctx:i}}}),l=new Xi({props:{$$slots:{default:[bE]},$$scope:{ctx:i}}}),d=new Xi({props:{$$slots:{default:[wE]},$$scope:{ctx:i}}}),{c(){Qt(e.$$.fragment),t=_t(),Qt(n.$$.fragment),r=_t(),Qt(s.$$.fragment),o=_t(),Qt(a.$$.fragment),c=_t(),Qt(l.$$.fragment),u=_t(),Qt(d.$$.fragment)},l(p){en(e.$$.fragment,p),t=gt(p),en(n.$$.fragment,p),r=gt(p),en(s.$$.fragment,p),o=gt(p),en(a.$$.fragment,p),c=gt(p),en(l.$$.fragment,p),u=gt(p),en(d.$$.fragment,p)},m(p,_){tn(e,p,_),ke(p,t,_),tn(n,p,_),ke(p,r,_),tn(s,p,_),ke(p,o,_),tn(a,p,_),ke(p,c,_),tn(l,p,_),ke(p,u,_),tn(d,p,_),h=!0},p(p,_){const g={};_&2&&(g.$$scope={dirty:_,ctx:p}),e.$set(g);const m={};_&2&&(m.$$scope={dirty:_,ctx:p}),n.$set(m);const f={};_&2&&(f.$$scope={dirty:_,ctx:p}),s.$set(f);const x={};_&2&&(x.$$scope={dirty:_,ctx:p}),a.$set(x);const v={};_&2&&(v.$$scope={dirty:_,ctx:p}),l.$set(v);const M={};_&2&&(M.$$scope={dirty:_,ctx:p}),d.$set(M)},i(p){h||(xt(e.$$.fragment,p),xt(n.$$.fragment,p),xt(s.$$.fragment,p),xt(a.$$.fragment,p),xt(l.$$.fragment,p),xt(d.$$.fragment,p),h=!0)},o(p){vt(e.$$.fragment,p),vt(n.$$.fragment,p),vt(s.$$.fragment,p),vt(a.$$.fragment,p),vt(l.$$.fragment,p),vt(d.$$.fragment,p),h=!1},d(p){nn(e,p),p&&be(t),nn(n,p),p&&be(r),nn(s,p),p&&be(o),nn(a,p),p&&be(c),nn(l,p),p&&be(u),nn(d,p)}}}function CE(i){let e,t;return e=new _E({props:{options:i[0],extensions:{AutoScroll:ex},"aria-label":"My Favorite Images",$$slots:{default:[RE]},$$scope:{ctx:i}}}),{c(){Qt(e.$$.fragment)},l(n){en(e.$$.fragment,n)},m(n,r){tn(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(xt(e.$$.fragment,n),t=!0)},o(n){vt(e.$$.fragment,n),t=!1},d(n){nn(e,n)}}}function LE(i){return[{type:"loop",gap:"10px",drag:"free",arrows:!1,pagination:!1,perPage:3,autoScroll:{pauseOnHover:!0,pauseOnFocus:!0,rewind:!1,speed:1}}]}class PE extends yi{constructor(e){super(),Ti(this,e,LE,CE,Ai,{})}}function DE(i){let e,t,n,r=i[0]("home.title")+"",s,o,a,c=i[0]("home.text",{link:Cu})+"",l,u,d=i[0]("home.link")+"",h,p,_,g,m,f,x,v,M,A;return _=new Nv({}),m=new L0({}),x=new PE({}),{c(){e=Ze("meta"),t=_t(),n=Ze("h1"),s=dn(r),o=_t(),a=Ze("p"),l=_t(),u=Ze("a"),h=dn(d),p=_t(),Qt(_.$$.fragment),g=_t(),Qt(m.$$.fragment),f=_t(),Qt(x.$$.fragment),this.h()},l(w){const y=gh("svelte-1nt1ujr",document.head);e=je(y,"META",{name:!0,content:!0}),y.forEach(be),t=gt(w),n=je(w,"H1",{});var D=At(n);s=pn(D,r),D.forEach(be),o=gt(w),a=je(w,"P",{});var E=At(a);E.forEach(be),l=gt(w),u=je(w,"A",{href:!0});var T=At(u);h=pn(T,d),T.forEach(be),p=gt(w),en(_.$$.fragment,w),g=gt(w),en(m.$$.fragment,w),f=gt(w),en(x.$$.fragment,w),this.h()},h(){document.title="Page d'exemple",we(e,"name","description"),we(e,"content","Ceci est une description de la page d'exemple."),we(u,"href","/about")},m(w,y){Qe(document.head,e),ke(w,t,y),ke(w,n,y),Qe(n,s),ke(w,o,y),ke(w,a,y),a.innerHTML=c,ke(w,l,y),ke(w,u,y),Qe(u,h),ke(w,p,y),tn(_,w,y),ke(w,g,y),tn(m,w,y),ke(w,f,y),tn(x,w,y),v=!0,M||(A=vh(xh.call(null,u,"first")),M=!0)},p(w,[y]){(!v||y&1)&&r!==(r=w[0]("home.title")+"")&&zs(s,r),(!v||y&1)&&c!==(c=w[0]("home.text",{link:Cu})+"")&&(a.innerHTML=c),(!v||y&1)&&d!==(d=w[0]("home.link")+"")&&zs(h,d)},i(w){v||(xt(_.$$.fragment,w),xt(m.$$.fragment,w),xt(x.$$.fragment,w),v=!0)},o(w){vt(_.$$.fragment,w),vt(m.$$.fragment,w),vt(x.$$.fragment,w),v=!1},d(w){be(e),w&&be(t),w&&be(n),w&&be(o),w&&be(a),w&&be(l),w&&be(u),w&&be(p),nn(_,w),w&&be(g),nn(m,w),w&&be(f),nn(x,w),M=!1,A()}}}const Cu="https://kit.svelte.dev";function UE(i,e,t){let n;return Du(i,Uu,r=>t(0,n=r)),[n]}class VE extends yi{constructor(e){super(),Ti(this,e,UE,DE,Ai,{})}}export{VE as component,BE as universal};
