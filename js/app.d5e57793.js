(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d6cf7":"927367b3","chunk-2d222708":"3cfacf62","chunk-2d22d746":"a61a14bf"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Hanger/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"app"}},[r("v-navigation-drawer",{staticClass:"orange lighten-4",attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(" Dzour ")]),r("v-list-item-subtitle",[t._v(" Best Drinks Ever ")])],1)],1),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return r("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),r("v-navigation-drawer",{staticClass:"orange lighten-4",attrs:{app:"",temporary:"",right:"",width:300},model:{value:t.cart,callback:function(e){t.cart=e},expression:"cart"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(" Shopping Cart ")])],1)],1),r("v-divider"),r("cart-items")],1),r("v-app-bar",{staticClass:"p-5",attrs:{app:"",color:"orange",height:100}},[r("v-app-bar-nav-icon",{staticClass:"d-md-none",on:{click:function(e){t.drawer=!0}}}),r("v-toolbar-title",{staticClass:"display-1 font-weight-bold",attrs:{to:"/"}},[r("router-link",{staticClass:"text-decoration-none black--text",attrs:{to:"/"}},[t._v("Dzour")])],1),r("v-spacer"),r("div",{staticClass:"d-none d-md-flex",attrs:{id:"nav"}},[r("router-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[t._v("Home")]),r("router-link",{staticClass:"text-decoration-none",attrs:{to:"/drinks"}},[t._v("Drinks")]),r("router-link",{staticClass:"text-decoration-none",attrs:{to:"/about"}},[t._v("About")])],1),r("v-btn",{staticClass:"mr-1",attrs:{icon:""},on:{click:function(e){t.cart=!0}}},[t.totalItems>0?r("v-badge",{attrs:{color:"red",content:t.totalItems}},[r("v-icon",[t._v("mdi-cart")])],1):r("v-icon",[t._v("mdi-cart")])],1)],1),r("v-main",[r("div",{attrs:{id:"app"}},[r("router-view")],1)])],1)},i=[],o=r("5530"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column align-center"},[t._l(t.cartItems,(function(e,a){return r("v-card",{key:a,staticClass:"mt-7",attrs:{"max-width":250}},[r("v-btn",{staticClass:"close-button",attrs:{icon:""},on:{click:function(r){return t.removeDrink(e)}}},[r("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-close-circle-outline")])],1),r("v-img",{attrs:{height:"150",src:e.image}}),r("v-card-title",[t._v(t._s(e.title+" "+e.price+"$"))]),r("v-card-text",[r("div",{staticClass:"d-flex align-center justify-space-between"},[r("v-btn",{attrs:{icon:""},on:{click:function(r){return t.removeSingleDrink(e)}}},[r("v-icon",{attrs:{large:"",color:"orange"}},[t._v("mdi-minus-circle-outline")])],1),r("span",{staticClass:"font-weight-bold single-drink-number"},[t._v(t._s(e.number))]),r("v-btn",{attrs:{icon:""},on:{click:function(r){return t.addDrink(e)}}},[r("v-icon",{attrs:{large:"",color:"orange"}},[t._v("mdi-plus-circle-outline")])],1),r("div",{staticClass:"text-subtitle-1 font-weight-bold single-drink-total"},[t._v(" "+t._s("Total: "+e.price*e.number)+"$ ")])],1)])],1)})),r("div",{staticClass:"d-flex mt-5 justify-space-between total-price align-center"},[r("span",{staticClass:"display-1 font-weight-bold"},[t._v("Total:")]),r("span",{staticClass:"display-1 font-weight-bold"},[t._v(t._s(t.totalPrice)+"$")])]),r("v-btn",{staticClass:"my-5",attrs:{to:"/order",disabled:0===t.totalItems}},[t._v(" Order ")])],2)},c=[],l=(r("a4d3"),r("e01a"),r("2f62")),u={computed:Object(o["a"])({},Object(l["c"])({cartItems:"getCartItems",totalItems:"getTotalItems",totalPrice:"getTotalPrice"})),methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])({addCartItem:"addCartItem",removeCartItem:"removeCartItem",removeSingleCartItem:"removeSingleCartItem"})),{},{addDrink:function(t){var e=t.id,r=t.title,a=t.image,n=t.price,i=t.description;this.addCartItem({id:e,title:r,image:a,price:n,description:i})},removeSingleDrink:function(t){var e=t.id,r=t.title,a=t.image,n=t.price,i=t.description;this.removeSingleCartItem({id:e,title:r,image:a,price:n,description:i})},removeDrink:function(t){var e=t.id,r=t.title,a=t.image,n=t.price,i=t.description;this.removeCartItem({id:e,title:r,image:a,price:n,description:i})}})},d=u,m=r("2877"),v=r("6544"),p=r.n(v),f=r("8336"),g=r("b0af"),b=r("99d9"),h=r("132d"),C=r("adda"),I=Object(m["a"])(d,s,c,!1,null,null,null),k=I.exports;p()(I,{VBtn:f["a"],VCard:g["a"],VCardText:b["b"],VCardTitle:b["c"],VIcon:h["a"],VImg:C["a"]});var w={name:"App",components:{CartItems:k},data:function(){return{drawer:!1,cart:!1,items:[{title:"Home",icon:"mdi-home",to:"/"},{title:"Drinks",icon:"mdi-glass-cocktail",to:"/drinks"},{title:"About",icon:"mdi-information",to:"/about"}]}},computed:Object(o["a"])({},Object(l["c"])({cartItems:"getCartItems",totalItems:"getTotalItems"}))},_=w,y=(r("5c0b"),r("7496")),x=r("40dc"),V=r("5bc1"),j=r("4ca6"),O=r("ce7e"),T=r("8860"),P=r("da13"),S=r("5d23"),D=r("34c3"),A=r("f6c4"),L=r("f774"),B=r("2fa4"),E=r("2a7f"),H=Object(m["a"])(_,n,i,!1,null,null,null),M=H.exports;p()(H,{VApp:y["a"],VAppBar:x["a"],VAppBarNavIcon:V["a"],VBadge:j["a"],VBtn:f["a"],VDivider:O["a"],VIcon:h["a"],VList:T["a"],VListItem:P["a"],VListItemContent:S["a"],VListItemIcon:D["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:A["a"],VNavigationDrawer:L["a"],VSpacer:B["a"],VToolbarTitle:E["a"]});var $=r("9483");Object($["a"])("".concat("/Hanger/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7"),r("3ca3"),r("ddb0");var q=r("8c4f"),F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column"},[r("v-carousel",{attrs:{cycle:"",height:"700","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,a){return r("v-carousel-item",{key:a},[r("v-sheet",{attrs:{color:t.colors[a],height:"100%"}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"text-h2"},[t._v(" "+t._s(e)+" Slide ")])])],1)],1)})),1),r("v-card",{staticClass:"px-5 mx-auto py-16",attrs:{elevation:0,width:"600"}},[r("v-row",[r("v-col",{attrs:{"align-self":"center",cols:"12",lg:"6"}},[r("v-img",{staticClass:"mx-auto",attrs:{src:"https://5.imimg.com/data5/CR/UY/MY-11302762/glass-tomato-ketchup-bottle-500x500.jpg","max-width":200,"max-height":300}})],1),r("v-col",{attrs:{cols:"12",lg:"6"}},[r("v-card-title",[t._v("About Us")]),r("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptatibus accusamus modi alias vero provident quaerat et incidunt voluptatum, quo autem nulla unde ipsa amet molestias quos minus debitis laudantium.")]),r("v-btn",{attrs:{to:"/about"}},[t._v(" More ")])],1)],1)],1),r("div",{staticClass:"black white--text footer"},[r("span",[t._v("Copyright © 2021 Dzour")]),r("v-btn",{staticClass:"ml-5",attrs:{icon:"",target:"_blank",href:"https://www.instagram.com"}},[r("v-icon",{attrs:{large:"",color:"orange"}},[t._v("mdi-instagram")])],1),r("v-btn",{staticClass:"ml-5",attrs:{icon:"",target:"_blank",href:"https://www.facebook.com"}},[r("v-icon",{attrs:{large:"",color:"orange"}},[t._v("mdi-facebook")])],1)],1)],1)},N=[],z={name:"Home",components:{},data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]}}},J=z,R=r("5e66"),U=r("3e35"),Y=r("62ad"),G=r("0fd9"),K=r("8dd9"),Q=Object(m["a"])(J,F,N,!1,null,null,null),W=Q.exports;p()(Q,{VBtn:f["a"],VCard:g["a"],VCardTitle:b["c"],VCarousel:R["a"],VCarouselItem:U["a"],VCol:Y["a"],VIcon:h["a"],VImg:C["a"],VRow:G["a"],VSheet:K["a"]}),a["a"].use(q["a"]);var X=[{path:"/",name:"Home",component:W},{path:"/drinks",name:"Drinks",component:function(){return r.e("chunk-2d0d6cf7").then(r.bind(null,"73af"))}},{path:"/about",name:"About",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/order",name:"Order",component:function(){return r.e("chunk-2d222708").then(r.bind(null,"cf2a"))}}],Z=new q["a"]({mode:"history",base:"/Hanger/",routes:X}),tt=Z,et=r("2909");r("7db0"),r("4de4");a["a"].use(l["a"]);var rt=new l["a"].Store({state:{cartItems:[],totalItems:0,totalPrice:0},getters:{getCartItems:function(t){return t.cartItems},getTotalItems:function(t){return t.totalItems},getTotalPrice:function(t){return t.totalPrice}},mutations:{setCartItems:function(t,e){t.cartItems=e},setTotalItems:function(t,e){t.totalItems=e},setTotalPrice:function(t,e){t.totalPrice=e}},actions:{addCartItem:function(t,e){var r=t.commit,a=t.state,n=Object(et["a"])(a.cartItems),i=n.find((function(t){return t.id===e.id}));i?i.number+=1:n.push(Object(o["a"])(Object(o["a"])({},e),{},{number:1})),r("setCartItems",n),r("setTotalItems",a.totalItems+1),r("setTotalPrice",a.totalPrice+e.price)},removeCartItem:function(t,e){var r=t.commit,a=t.state,n=Object(et["a"])(a.cartItems),i=n.find((function(t){return t.id===e.id}));n=n.filter((function(t){return t.id!==e.id})),r("setCartItems",n),r("setTotalItems",a.totalItems-i.number),r("setTotalPrice",a.totalPrice-e.price*i.number)},removeSingleCartItem:function(t,e){var r=t.commit,a=t.state,n=Object(et["a"])(a.cartItems),i=n.find((function(t){return t.id===e.id}));1===i.number?n=n.filter((function(t){return t.id!==e.id})):i.number-=1,r("setCartItems",n),r("setTotalItems",a.totalItems-1),r("setTotalPrice",a.totalPrice-e.price)}}}),at=r("f309");a["a"].use(at["a"]);var nt=new at["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:tt,store:rt,vuetify:nt,render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.d5e57793.js.map