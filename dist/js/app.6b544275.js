(function(e){function t(t){for(var n,o,u=t[0],i=t[1],l=t[2],c=0,d=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==s[u]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},s={app:0},r=[];function u(e){return i.p+"js/"+({fail:"fail",test:"test",user:"user"}[e]||e)+"."+{fail:"aba7e002",test:"8059bb29",user:"4ecef7f7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={test:1,user:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({fail:"fail",test:"test",user:"user"}[e]||e)+"."+{fail:"31d6cfe0",test:"d8942eb9",user:"d0e2ebc9"}[e]+".css",s=i.p+n,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var l=r[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===s))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===n||c===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete o[e],f.parentNode.removeChild(f),a(r)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=r);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}s[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/fixed-asset/",i.oe=function(e){throw e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0376":function(e,t,a){"use strict";a("4acd")},"0f9a":function(e,t,a){"use strict";a.r(t);a("14d9");var n=a("0fea"),o=a("fcaf"),s=a("ca00");const r={roles:[],token:"",userInfo:{},menuList:[],indexRoute:""},u={SET_ROLES:(e,t)=>{e.roles=t},SET_USER_INFO:(e,t)=>{e.userInfo=t},SET_MENU:(e,t)=>{e.menuList=t},SET_INDEX_ROUTE:(e,t)=>{e.indexRoute=t}},i={Login({commit:e,state:t,dispatch:a},o){return new Promise((t,s)=>{Object(n["b"])("/admin/user/login",o).then(r=>{200===r.code?(localStorage.setItem("token",r.result),Object(n["a"])("/admin/user/accountInforQuery",{username:o.username}).then(n=>{200===n.code?(e("SET_USER_INFO",n.result),localStorage.setItem("user",JSON.stringify(n.result)),localStorage.setItem("demo",0===n.result.isDemo),a("getRoles",o),t()):t(n)})):s(r)}).catch(e=>{s(e)})})},getUserInfo({commit:e,state:t,dispatch:a},n){return new Promise((e,t)=>{})},getRoles({commit:e,state:t,dispatch:a},o){return new Promise((t,s)=>{Object(n["a"])("/admin/user/roleInQueryByAccount",o).then(n=>{200===n.code?(e("SET_ROLES",n.result),a("getMenu",n.result),t()):t(n)})})},remove({commit:e}){e("SET_ROLES",""),e("SET_USER_INFO",""),localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("demo")},Logout({commit:e,state:t}){return new Promise((t,a)=>{Object(n["a"])("/admin/logout").then(n=>{200===n.code?(e("SET_ROLES",""),e("SET_USER_INFO",""),localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("demo"),t()):a(n)}).catch(e=>{a(e)})})},getMenu({commit:e,state:t},a){let n=[];a&&a.length&&a.forEach(e=>{o["a"].forEach(t=>{Object(s["a"])(e.codename,t.meta.roles)&&!t.hidden&&n.push(t)})}),e("SET_INDEX_ROUTE",n[0].path),e("SET_MENU",n)}};t["default"]={namespaced:!0,state:r,mutations:u,actions:i}},"0fea":function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return m}));var n=a("2b0e"),o=a("cee4"),s=a("4360");const{MOCK_LOCAL_STORAGE_KEY:r,MOCK_LOCAL_STORAGE_VALUE:u,MOCK_HEADER_KEY:i,MOCK_HEADER_VALUE:l}=a("12bc");let c=window._CONFIG["apiURL"];const d=o["a"].create({baseURL:c,timeout:3e4}),f=e=>{if(e.response){let t=e.response.data;const a=localStorage.getItem("token");switch(e.response.status){case 403:n["default"].$notify({title:"系统提示",message:"拒绝访问",duration:4e3});break;case 500:n["default"].$notify({title:"系统提示",message:"Token失效，请重新登录",duration:4e3}),a&&200===t.code?n["default"].$confirm("很抱歉，登录已过期，请重新登录","登录已过期",{confirmButtonText:"重新登录",type:"warning"}).then(()=>{s["a"].dispatch("user/Logout").then(()=>{localStorage.setItem("token",null);try{let e=window.document.location.pathname;"/"!=e&&-1==e.indexOf("/user/login")&&window.location.reload()}catch(e){window.location.reload()}})}).catch(e=>{}):n["default"].$notify({title:"系统提示",message:"服务错误",duration:4e3});break;case 404:n["default"].$notify({title:"系统提示",message:"很抱歉，资源未找到",duration:4e3});break;case 504:n["default"].$notify({title:"系统提示",message:"网络超时",duration:4e3});break;case 401:n["default"].$notify({title:"系统提示",message:"未授权，请重新登录",duration:4e3}),a&&s["a"].dispatch("user/Logout").then(()=>{setTimeout(()=>{window.location.reload()},1500)});break;default:n["default"].$notify({title:"系统提示",message:t.message,duration:4e3});break}}return Promise.reject(e)};d.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers["X-Access-Token"]=t),e},e=>Promise.reject(e)),d.interceptors.response.use(e=>e.data,f);function p(e,t){return d({url:e,method:"post",data:t})}function m(e,t){return d({url:e,method:"get",params:t})}},"12bc":function(e,t){var a="enable_mock",n="1",o="x-mock-enable",s="1",r=["get","post","put","delete"];e.exports={MOCK_LOCAL_STORAGE_KEY:a,MOCK_LOCAL_STORAGE_VALUE:n,MOCK_HEADER_KEY:o,MOCK_HEADER_VALUE:s,MOCK_METHODS:r}},1478:function(e,t,a){"use strict";a("277e")},"277e":function(e,t,a){},4360:function(e,t,a){"use strict";a("13d5");var n=a("2b0e"),o=a("2f62");const s={user:e=>e.user,token:e=>e.user.token,userInfo:e=>e.user.userInfo,roles:e=>e.user.roles,menuList:e=>e.user.menuList,indexRoute:e=>e.user.indexRoute};var r=s,u=a("b054"),i=a.n(u);const l=!1;let c=l?[i()()]:[];n["default"].use(o["a"]);const d=a("c653"),f=d.keys().reduce((e,t)=>{const a=t.replace(/^\.\/(.*)\.\w+$/,"$1"),n=d(t);return e[a]=n.default,e},{}),p=new o["a"].Store({plugins:c,modules:f,getters:r});t["a"]=p},"46f2":function(e,t,a){"use strict";a("f869")},"4acd":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t(e.layout,{tag:"component"},[t("router-view")],1)],1)},s=[],r=function(){var e=this,t=e._self._c;return t("el-container",{staticClass:"system-layout"},[t("el-header",{staticClass:"navigation"},[t("div",{staticClass:"logo"},[e._v(" 系统简称 "),t("div",{staticClass:"sys-title"},[e._v("欢迎系统名称")])]),t("div",{staticClass:"user-wrapper"},[t("div",{staticClass:"hospital-wrapper"},[e._v(e._s(e.userInfo.orgName))]),t("div",{staticClass:"user-img"}),t("div",{staticClass:"user"},[t("div",{staticStyle:{"margin-right":"8px"}},[e._v(e._s(e.userInfo.nickname))]),t("i",{staticClass:"el-icon-arrow-down"})]),t("div",{staticClass:"pop-wrapper"},[t("div",{staticClass:"user-info"},[t("div",{staticClass:"user-img"}),t("div",{staticStyle:{width:"calc(100% - 44px)",color:"#333","line-height":"24px"}},[t("div",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.userInfo.nickname))]),t("div",[e._v(e._s())])])]),t("div",{staticClass:"pop-group",on:{click:e.logout}},[t("div",{staticClass:"pop-btn"},[e._v("退出登录")]),t("i",{staticClass:"el-icon-arrow-right"})])])])]),t("el-container",[t("el-aside",{attrs:{width:"200px"}},[t("menu-list",{on:{changemenu:e.changeMenu}})],1),t("el-main",{staticClass:"main-wrapper"},[t("div",{staticClass:"main"},[e._t("default")],2)])],1)],1)},u=[],i=function(){var e=this,t=e._self._c;return t("el-menu",{attrs:{router:"",collapse:e.isCollapse,"default-active":e.$route.path}},e._l(e.$store.getters.menuList,(function(a){return t("div",{key:a.path},[a.children&&a.children.length?t("el-submenu",{attrs:{index:a.path}},[t("template",{slot:"title"},[t("i",{class:"el-icon-"+a.meta.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.meta.title))])]),e._l(a.children,(function(a){return t("el-menu-item",{key:a.path,attrs:{index:a.path},on:{click:function(t){return e.selectMenu(a)}}},[t("span",{staticStyle:{"margin-left":"10px"}}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.meta.title))])])}))],2):t("el-menu-item",{attrs:{index:a.path},on:{click:function(t){return e.selectMenu(a)}}},[t("template",{slot:"title"},[t("i",{class:"el-icon-"+a.meta.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.meta.title))])])],2)],1)})),0)},l=[],c=a("2f62"),d={props:{isCollapse:{type:Boolean,default:!1}},data(){return{current:"",selectedKeys:[]}},created(){this.menuData=this.$store.getters.menuList,this.current=this.$store.getters.indexRoute;let e=location.pathname.substring(location.pathname.indexOf("screening-web")+13);this.current="/"!=e?e:this.$store.getters.indexRoute?this.$store.getters.indexRoute:""},computed:{...Object(c["b"])(["indexRoute"])},watch:{indexRoute:{handler(e){this.current=e}},$route(e){e&&(this.selectedKeys=[e.path])}},methods:{handleClick(e){},selectMenu(e){this.$emit("changemenu",e)}}},f=d,p=(a("46f2"),a("2877")),m=Object(p["a"])(f,i,l,!1,null,"6fd7f444",null),h=m.exports,g=a("fcaf"),b={components:{MenuList:h},data(){return{userInfo:{}}},watch:{$route(e){g["a"].forEach(t=>{t.path===e.path&&(this.selectMenuName=t.meta.title)})}},mounted(){let e=location.pathname.substring(location.pathname.indexOf("/fixed-asset")+11);g["a"].forEach(t=>{t.path===e&&(this.selectMenuName=t.meta.title)}),this.userInfo=JSON.parse(localStorage.getItem("user")||"{}")||{}},methods:{logout(){},changeMenu(e){this.selectMenuName=e.meta.title}}},v=b,_=(a("1478"),Object(p["a"])(v,r,u,!1,null,"2cac823e",null)),y=_.exports,E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"system-layout"},[e._t("default")],2)},O=[],S={},w=Object(p["a"])(S,E,O,!1,null,null,null),C=w.exports,x={name:"App",components:{BaseLayout:y,BlankLayout:C},computed:{layout(){return this.$route.meta.layout||"baseLayout"}}},k=x,L=(a("0376"),Object(p["a"])(k,o,s,!1,null,null,null)),I=L.exports,R=a("8c4f");const M=[{path:"/test",name:"test",component:()=>a.e("test").then(a.bind(null,"aa2e"))},{path:"/base",name:"base"},{path:"/base/deparment",name:"test-deparment",component:()=>a.e("test").then(a.bind(null,"ded5"))},{path:"/login",name:"login",meta:{layout:"blankLayout"},component:()=>a.e("user").then(a.bind(null,"ede4"))},{path:"/404",component:()=>a.e("fail").then(a.bind(null,"cc89"))}];try{const e=R["a"].prototype.push;R["a"].prototype.push=function(t){return e.call(this,t).catch(e=>e)}}catch(D){}n["default"].use(R["a"]);var T=new R["a"]({mode:"history",base:"/fixed-asset/",scrollBehavior:()=>({y:0}),routes:M}),j=a("4360"),A=a("ca00"),N=a("323e"),$=a.n(N);a("a5d8");$.a.configure({showSpinner:!1});const U=["/login"];T.beforeEach((e,t,a)=>{$.a.start();const n=localStorage.getItem("token");if(n)if("/login"===e.path)a({name:"home"}),$.a.done();else if(0===j["a"].getters.user.roles.length){let n=JSON.parse(localStorage.getItem("user")||"")||{};j["a"].dispatch("user/getRoles",{username:n.name}).then(n=>{const o=decodeURIComponent(t.query.redirect||e.path);e.path===o?"blankLayout"!=e.meta.layout?"/"!==e.path&&Object(A["a"])(o,j["a"].getters.menuList,"path")?a({...e,replace:!0}):a({path:j["a"].getters.indexRoute}):a({...e,replace:!0}):Object(A["a"])(o,j["a"].getters.menuList,"path")?a({path:o}):a({path:j["a"].getters.indexRoute})})}else"/"==e.path?a({...j["a"].getters.indexRoute}):a();else-1!==U.indexOf(e.path)?a():(a({path:"/login",query:{redirect:e.fullPath}}),$.a.done())}),T.afterEach(()=>{$.a.done()});a("0fae");var P=a("5c96");n["default"].use(P["Container"]),n["default"].use(P["Header"]),n["default"].use(P["Aside"]),n["default"].use(P["Main"]),n["default"].use(P["Menu"]),n["default"].use(P["Submenu"]),n["default"].use(P["MenuItem"]),n["default"].use(P["MenuItemGroup"]),n["default"].use(P["Row"]),n["default"].use(P["Col"]),n["default"].use(P["Input"]),n["default"].use(P["InputNumber"]),n["default"].use(P["Radio"]),n["default"].use(P["RadioGroup"]),n["default"].use(P["RadioButton"]),n["default"].use(P["Checkbox"]),n["default"].use(P["CheckboxButton"]),n["default"].use(P["CheckboxGroup"]),n["default"].use(P["Switch"]),n["default"].use(P["Select"]),n["default"].use(P["Option"]),n["default"].use(P["OptionGroup"]),n["default"].use(P["Button"]),n["default"].use(P["ButtonGroup"]),n["default"].use(P["Table"]),n["default"].use(P["TableColumn"]),n["default"].use(P["TableColumn"]),n["default"].use(P["Pagination"]),n["default"].use(P["Upload"]),n["default"].use(P["Tree"]),n["default"].use(P["Dropdown"]),n["default"].use(P["DropdownMenu"]),n["default"].use(P["DropdownItem"]),n["default"].prototype.$message=P["Message"],n["default"].prototype.$alert=P["MessageBox"].alert,n["default"].prototype.$confirm=P["MessageBox"].confirm,n["default"].prototype.$notify=P["Notification"],n["default"].config.productionTip=!1,new n["default"]({router:T,store:j["a"],render:e=>e(I)}).$mount("#app")},c653:function(e,t,a){var n={"./user.js":"0f9a"};function o(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id="c653"},ca00:function(e,t,a){"use strict";function n(e,t,a){let n=!1;return a?t.forEach(t=>{t[a]!==e||(n=!0)}):t.forEach(t=>{t!==e||(n=!0)}),n}a.d(t,"a",(function(){return n}))},f869:function(e,t,a){},fcaf:function(e,t,a){"use strict";t["a"]=[{id:"1",name:"test",path:"/test",hidden:!1,meta:{title:"测试",icon:"s-home",roles:["admin"]}},{id:"2",name:"base",path:"/base",hidden:!1,meta:{title:"基础管理",icon:"s-tools",roles:["admin"]},children:[{id:"2-1",name:"base-deparment",path:"/base/deparment",hidden:!1,meta:{title:"机构管理",roles:["admin"]}}]}]}});