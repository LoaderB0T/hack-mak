"use strict";(self.webpackChunkmodule1=self.webpackChunkmodule1||[]).push([[560],{9075:(Z,y,f)=>{f.d(y,{b2:()=>He,q6:()=>ke});var l=f(4428),o=f(1969);class u extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class m extends u{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new m)}onAndCancel(t,e,r){return t.addEventListener(e,r,!1),()=>{t.removeEventListener(e,r,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getBaseHref(t){const e=(p=p||document.querySelector("base"),p?p.getAttribute("href"):null);return null==e?null:function(n){S=S||document.createElement("a"),S.setAttribute("href",n);const t=S.pathname;return"/"===t.charAt(0)?t:`/${t}`}(e)}resetBaseElement(){p=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return(0,l.\u0275parseCookieValue)(document.cookie,t)}}let S,p=null;const L=new o.InjectionToken("TRANSITION_ID"),q=[{provide:o.APP_INITIALIZER,useFactory:function(n,t,e){return()=>{e.get(o.ApplicationInitStatus).donePromise.then(()=>{const r=(0,l.\u0275getDOM)(),s=t.querySelectorAll(`style[ng-transition="${n}"]`);for(let i=0;i<s.length;i++)r.remove(s[i])})}},deps:[L,l.DOCUMENT,o.Injector],multi:!0}];class v{static init(){(0,o.setTestabilityGetter)(new v)}addToWindow(t){o.\u0275global.getAngularTestability=(r,s=!0)=>{const i=t.findTestabilityInTree(r,s);if(null==i)throw new Error("Could not find testability for element.");return i},o.\u0275global.getAllAngularTestabilities=()=>t.getAllTestabilities(),o.\u0275global.getAllAngularRootElements=()=>t.getAllRootElements(),o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(r=>{const s=o.\u0275global.getAllAngularTestabilities();let i=s.length,a=!1;const c=function(d){a=a||d,i--,0==i&&r(a)};s.forEach(function(d){d.whenStable(c)})})}findTestabilityInTree(t,e,r){if(null==e)return null;const s=t.getTestability(e);return null!=s?s:r?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}let Q=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const g=new o.InjectionToken("EventManagerPlugins");let T=(()=>{class n{constructor(e,r){this._zone=r,this._eventNameToPlugin=new Map,e.forEach(s=>s.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,r,s){return this._findPluginFor(r).addEventListener(e,r,s)}addGlobalEventListener(e,r,s){return this._findPluginFor(r).addGlobalEventListener(e,r,s)}getZone(){return this._zone}_findPluginFor(e){const r=this._eventNameToPlugin.get(e);if(r)return r;const s=this._plugins;for(let i=0;i<s.length;i++){const a=s[i];if(a.supports(e))return this._eventNameToPlugin.set(e,a),a}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(g),o.\u0275\u0275inject(o.NgZone))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class D{constructor(t){this._doc=t}addGlobalEventListener(t,e,r){const s=(0,l.\u0275getDOM)().getGlobalEventTarget(this._doc,t);if(!s)throw new Error(`Unsupported event target ${s} for event ${e}`);return this.addEventListener(s,e,r)}}let B=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const r=new Set;e.forEach(s=>{this._stylesSet.has(s)||(this._stylesSet.add(s),r.add(s))}),this.onStylesAdded(r)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),E=(()=>{class n extends B{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,r,s){e.forEach(i=>{const a=this._doc.createElement("style");a.textContent=i,s.push(r.appendChild(a))})}addHost(e){const r=[];this._addStylesToHost(this._stylesSet,e,r),this._hostNodes.set(e,r)}removeHost(e){const r=this._hostNodes.get(e);r&&r.forEach(F),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((r,s)=>{this._addStylesToHost(e,s,r)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(F))}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function F(n){(0,l.\u0275getDOM)().remove(n)}const R={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},C=/%COMP%/g,x="%COMP%",ce=`_nghost-${x}`,ue=`_ngcontent-${x}`;function w(n,t,e){for(let r=0;r<t.length;r++){let s=t[r];Array.isArray(s)?w(n,s,e):(s=s.replace(C,n),e.push(s))}return e}function U(n){return t=>{if("__ngUnwrap__"===t)return n;!1===n(t)&&(t.preventDefault(),t.returnValue=!1)}}let A=(()=>{class n{constructor(e,r,s){this.eventManager=e,this.sharedStylesHost=r,this.appId=s,this.rendererByCompId=new Map,this.defaultRenderer=new O(e)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;switch(r.encapsulation){case o.ViewEncapsulation.Emulated:{let s=this.rendererByCompId.get(r.id);return s||(s=new he(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,s)),s.applyToHost(e),s}case 1:case o.ViewEncapsulation.ShadowDom:return new me(this.eventManager,this.sharedStylesHost,e,r);default:if(!this.rendererByCompId.has(r.id)){const s=w(r.id,r.styles,[]);this.sharedStylesHost.addStyles(s),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(T),o.\u0275\u0275inject(E),o.\u0275\u0275inject(o.APP_ID))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class O{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(R[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,r){t&&t.insertBefore(e,r)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,s){if(s){e=s+":"+e;const i=R[s];i?t.setAttributeNS(i,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){const s=R[r];s?t.removeAttributeNS(s,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,s){s&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?t.style.setProperty(e,r,s&o.RendererStyleFlags2.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&o.RendererStyleFlags2.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t[e]=r}setValue(t,e){t.nodeValue=e}listen(t,e,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,U(r)):this.eventManager.addEventListener(t,e,U(r))}}class he extends O{constructor(t,e,r,s){super(t),this.component=r;const i=w(s+"-"+r.id,r.styles,[]);e.addStyles(i),this.contentAttr=ue.replace(C,s+"-"+r.id),this.hostAttr=ce.replace(C,s+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}}class me extends O{constructor(t,e,r,s){super(t),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=w(s.id,s.styles,[]);for(let a=0;a<i.length;a++){const c=document.createElement("style");c.textContent=i[a],this.shadowRoot.appendChild(c)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let ge=(()=>{class n extends D{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,s){return e.addEventListener(r,s,!1),()=>this.removeEventListener(e,r,s)}removeEventListener(e,r,s){return e.removeEventListener(r,s)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const G=["alt","control","meta","shift"],we={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},K={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},ve={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let De=(()=>{class n extends D{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,r,s){const i=n.parseEventName(r),a=n.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const r=e.toLowerCase().split("."),s=r.shift();if(0===r.length||"keydown"!==s&&"keyup"!==s)return null;const i=n._normalizeKey(r.pop());let a="";if(G.forEach(d=>{const W=r.indexOf(d);W>-1&&(r.splice(W,1),a+=d+".")}),a+=i,0!=r.length||0===i.length)return null;const c={};return c.domEventName=s,c.fullKey=a,c}static getEventFullKey(e){let r="",s=function(n){let t=n.key;if(null==t){if(t=n.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===n.location&&K.hasOwnProperty(t)&&(t=K[t]))}return we[t]||t}(e);return s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),G.forEach(i=>{i!=s&&ve[i](e)&&(r+=i+".")}),r+=s,r}static eventCallback(e,r,s){return i=>{n.getEventFullKey(i)===e&&s.runGuarded(()=>r(i))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const ke=179==f.j?(0,o.createPlatformFactory)(o.platformCore,"browser",[{provide:o.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:function(){m.makeCurrent(),v.init()},multi:!0},{provide:l.DOCUMENT,useFactory:function(){return(0,o.\u0275setDocument)(document),document},deps:[]}]):null,Le=[[],{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function(){return new o.ErrorHandler},deps:[]},{provide:g,useClass:ge,multi:!0,deps:[l.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:g,useClass:De,multi:!0,deps:[l.DOCUMENT]},[],{provide:A,useClass:A,deps:[T,E,o.APP_ID]},{provide:o.RendererFactory2,useExisting:A},{provide:B,useExisting:E},{provide:E,useClass:E,deps:[l.DOCUMENT]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone]},{provide:T,useClass:T,deps:[g,o.NgZone]},{provide:l.XhrFactory,useClass:Q,deps:[]},[]];let He=(()=>{class n{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:n,providers:[{provide:o.APP_ID,useValue:e.appId},{provide:L,useExisting:o.APP_ID},q]}}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(n,12))},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({providers:Le,imports:[l.CommonModule,o.ApplicationModule]}),n})();"undefined"!=typeof window&&window},8560:(Z,y,f)=>{f.r(y),f.d(y,{AppModule:()=>o,SharedService:()=>k});var l=f(9075),_=f(1969);let o=(()=>{class u{}return u.\u0275fac=function(p){return new(p||u)},u.\u0275mod=_.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=_.\u0275\u0275defineInjector({imports:[[l.b2]]}),u})(),k=(()=>{class u{constructor(){this._menuItems=[{icon:"home",title:"Home",route:"/"}]}addMenuItem(p){this._menuItems.push(p)}getMenuItems(){return this._menuItems}}return u.\u0275fac=function(p){return new(p||u)},u.\u0275prov=_.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);