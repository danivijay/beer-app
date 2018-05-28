webpackJsonp([1],{139:function(t,e){},34:function(t,e,a){"use strict";var r=a(61),s=a.n(r);e.a={data:function(){return{title:"Beer App",cartPopup:!1,aboutPopup:!1,checkoutPop:!1}},name:"App",methods:{onCartSubmit:function(){this.checkoutPop=!0},toggleCart:function(t){this.$store.dispatch("toggleCart",{id:t})}},computed:{cartCount:function(){return this.$store.getters.getCart.length},cartItems:function(){var t=this.$store.getters.getCart,e=this.$store.getters.getAllBeers,a=[],r=!0,n=!1,i=void 0;try{for(var o,l=s()(t);!(r=(o=l.next()).done);r=!0){var c=o.value;!function(t){var r=e.filter(function(e){return e.id===t});a.push(r[0])}(c)}}catch(t){n=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw i}}return a}}}},45:function(t,e,a){"use strict";var r=a(83),s=a.n(r);e.a={name:"AppHome",data:function(){return{showBeers:[],filter:{beerName:"",beerStyle:"All styles"},tillItem:6,searchFlag:!1,showSearchedBeers:[],sortbyFlag:{abv:0}}},computed:{allBeerStyles:function(){return["All styles"].concat(s()(this.$store.getters.getAllBeerStyles))},allBeers:function(){return this.$store.getters.getAllBeers},noResults:function(){return this.showBeers.length<=0},allCart:function(){return this.$store.getters.getCart}},methods:{onSearch:function(){this.tillItem=6;var t=this.filter.beerName.toLowerCase().trim(),e=this.filter.beerStyle.trim(),a=this.allBeers,r=[];""!=t&&(r=a=a.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t)})),"All styles"!=e&&(r=a.filter(function(t){return t.style.trim()===e})),""==t&&"All styles"==e?(r=a,this.searchFlag=!1):(this.searchFlag=!0,this.showSearchedBeers=this.sortByAbv(r)),this.showBeers=r.slice(0,this.tillItem)},onLoadMore:function(){this.tillItem*=2,this.searchFlag?this.showBeers=this.showSearchedBeers.slice(0,this.tillItem):this.showBeers=this.allBeers.slice(0,this.tillItem)},onSortByAbv:function(){var t=[];this.sortbyFlag.abv+=1,t=this.searchFlag?this.showSearchedBeers:this.allBeers,t=this.sortByAbv(t),this.showBeers=t.slice(0,this.tillItem)},sortByAbv:function(t){var e=parseInt(this.sortbyFlag.abv);return e%3==1?t.sort(function(t,e){return t.abv==e.abv?0:+(t.abv>e.abv)||-1}):e%3==2?t.sort(function(t,e){return t.abv==e.abv?0:+(t.abv<e.abv)||-1}):t.sort(function(t,e){return t.id==e.id?0:+(t.id<e.id)||-1})},dynamicSort:function(t){var e=1;return"-"===t[0]&&(e=-1,t=t.substr(1)),function(a,r){return(a[t]<r[t]?-1:a[t]>r[t]?1:0)*e}},toggleCart:function(t){this.$store.dispatch("toggleCart",{id:t})}},mounted:function(){this.showBeers=this.allBeers.slice(0,this.tillItem)}}},57:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(17),s=a(60),n=a(78),i=a(90),o=a(138),l=a.n(o),c=a(139);a.n(c);r.a.use(l.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:n.a,store:i.a,components:{App:s.a},template:"<App/>",mounted:function(){this.$store.dispatch("initBeers")}})},60:function(t,e,a){"use strict";var r=a(34),s=a(77),n=a(33),i=n(r.a,s.a,!1,null,null,null);e.a=i.exports},77:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{app:""}},[a("v-btn",{attrs:{flat:"",fab:""},on:{click:function(e){e.preventDefault(),t.aboutPopup=!t.aboutPopup}}},[a("v-icon",[t._v("info")])],1),t._v(" "),a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"v-toolbar-title"}},[t._v(t._s(t.title))]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:""},on:{click:function(e){e.preventDefault(),t.cartPopup=!t.cartPopup}}},[a("v-badge",{attrs:{right:""}},[t.cartCount?a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.cartCount))]):t._e(),t._v(" "),a("v-icon",[t._v("shopping_cart")])],1)],1)],1),t._v(" "),a("v-content",[a("router-view"),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.cartPopup,callback:function(e){t.cartPopup=e},expression:"cartPopup"}},[a("v-card",[a("v-card-title",[a("div",{staticClass:"headline"},[t._v("Your cart")])]),t._v(" "),a("v-card-text",[t._l(t.cartItems,function(e){return a("div",{key:e.id,staticClass:"subheading"},[a("v-btn",{attrs:{flat:"",fab:"",small:"",color:"error"},on:{click:function(a){a.preventDefault(),t.toggleCart(e.id)}}},[a("v-icon",[t._v("clear")])],1),t._v("\n            "+t._s(e.name)+"\n          ")],1)}),t._v(" "),t.cartItems.length?t._e():a("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\n            No items\n          ")])],2),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:""},on:{click:function(e){e.preventDefault(),t.cartPopup=!t.cartPopup}}},[t._v("Close")]),t._v(" "),a("v-btn",{staticClass:"success",attrs:{flat:""},on:{click:function(e){return e.preventDefault(),t.onCartSubmit(e)}}},[t._v("Checkout")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.aboutPopup,callback:function(e){t.aboutPopup=e},expression:"aboutPopup"}},[a("v-card",[a("v-card-title",[a("div",{staticClass:"headline"},[t._v(t._s(t.title))])]),t._v(" "),a("v-card-text",{staticClass:"text-xs-center"},[a("div",{staticClass:"subheading"},[t._v("Made with <code /> by "),a("b",[t._v("Dani M Vijay")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"body-2"},[t._v("View my code on "),a("a",{attrs:{href:"https://github.com/danivijay",target:"_blank"}},[t._v("GitHub (@danivijay)")])]),t._v(" "),a("div",{staticClass:"body-2"},[t._v("Read my blog on "),a("a",{attrs:{href:"https://medium.com/@danivijay",target:"_blank"}},[t._v("Medium (@danivijay)")])])]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:""},on:{click:function(e){e.preventDefault(),t.aboutPopup=!t.aboutPopup}}},[t._v("Close")])],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{timeout:6e3},model:{value:t.checkoutPop,callback:function(e){t.checkoutPop=e},expression:"checkoutPop"}},[t._v("\n      Oops! Seems like a dead end!!\n      "),a("v-btn",{attrs:{flat:"",color:"pink"},nativeOn:{click:function(e){t.checkoutPop=!1}}},[t._v("Close")])],1)],1)],1)},s=[],n={render:r,staticRenderFns:s};e.a=n},78:function(t,e,a){"use strict";var r=a(17),s=a(79),n=a(80);r.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"AppHome",component:n.a}]})},80:function(t,e,a){"use strict";function r(t){a(81)}var s=a(45),n=a(89),i=a(33),o=r,l=i(s.a,n.a,!1,o,"data-v-3e0f9866",null);e.a=l.exports},81:function(t,e){},89:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"px-2",attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Search by name"},model:{value:t.filter.beerName,callback:function(e){t.$set(t.filter,"beerName",e)},expression:"filter.beerName"}})],1),t._v(" "),a("v-flex",{staticClass:"px-2",attrs:{xs12:"",md3:"",lg4:""}},[a("v-select",{attrs:{items:t.allBeerStyles,label:"Select","single-line":"",autocomplete:""},model:{value:t.filter.beerStyle,callback:function(e){t.$set(t.filter,"beerStyle",e)},expression:"filter.beerStyle"}})],1),t._v(" "),a("v-flex",{staticClass:"px-2",attrs:{xs12:"",md3:"",lg2:""}},[a("v-btn",{attrs:{block:"",color:"info"},on:{click:function(e){return e.preventDefault(),t.onSearch(e)}}},[a("v-icon",{attrs:{left:""}},[t._v("search")]),t._v("Search\n      ")],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[a("v-btn",{attrs:{flat:""},on:{click:function(e){return e.preventDefault(),t.onSortByAbv(e)}}},[t._v("Sort by Alcohol content\n        "),t.sortbyFlag.abv%3==1?a("v-icon",{attrs:{right:""}},[t._v("arrow_downward")]):t._e(),t._v(" "),t.sortbyFlag.abv%3==2?a("v-icon",{attrs:{right:""}},[t._v("arrow_upward")]):t._e()],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.showBeers,function(e){return a("v-flex",{key:e.id,staticClass:"pa-2",attrs:{xs12:"",sm6:"",md4:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"light-blue darken-3"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"title"},[t._v(t._s(e.name))])]),t._v(" "),a("v-card-text",[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm8:""}},[e.ounces?a("div",{staticClass:"subheading"},[t._v(t._s(e.ounces)+" Ounces")]):t._e(),t._v(" "),a("div",{staticClass:"subheading"},[t._v(t._s(e.style))])]),t._v(" "),a("v-flex",{staticClass:"text-xs-left text-sm-right",attrs:{xs12:"",sm4:""}},[e.abv?a("div",{staticClass:"subheading"},[t._v(t._s(e.abv)+" ABV")]):t._e(),t._v(" "),e.ibu?a("div",{staticClass:"subheading"},[t._v(t._s(e.ibu)+" IBU")]):t._e()])],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),t.allCart.includes(e.id)?a("v-btn",{staticClass:"light-green darken-1",attrs:{flat:"",dark:""},on:{click:function(a){a.preventDefault(),t.toggleCart(e.id)}}},[a("v-icon",{attrs:{left:""}},[t._v("remove")]),t._v("Remove from cart\n          ")],1):a("v-btn",{staticClass:"light-blue darken-1",attrs:{flat:"",dark:""},on:{click:function(a){a.preventDefault(),t.toggleCart(e.id)}}},[a("v-icon",{attrs:{left:""}},[t._v("add")]),t._v("Add to cart\n          ")],1)],1)],1)],1)}),t._v(" "),t.noResults?a("v-flex",{staticClass:"px-2",attrs:{xs12:""}},[a("v-alert",{attrs:{value:!0,type:"error"}},[t._v("\n        No results found\n      ")])],1):t._e()],2),t._v(" "),a("v-layout",[a("v-flex",{staticClass:"px-2",attrs:{xs12:""}},[a("v-btn",{staticClass:"success",attrs:{block:""},on:{click:function(e){return e.preventDefault(),t.onLoadMore(e)}}},[t._v("\n        Load more\n      ")])],1)],1)],1)},s=[],n={render:r,staticRenderFns:s};e.a=n},90:function(t,e,a){"use strict";var r=a(91),s=a.n(r),n=a(109),i=a.n(n),o=a(17),l=a(115),c=a(116),u=a(119),v=a.n(u);o.a.use(l.a),e.a=new l.a.Store({plugins:[Object(c.a)()],state:{beers:[],cart:[]},mutations:{initBeers:function(t,e){this.state.beers=[];var a=e;this.state.beers=a.map(function(t){var e=i()({},t);return e.inCart=!1,e})},toggleCart:function(t,e){var a=e.id;if(t.cart.includes(a)){var r=t.cart.indexOf(a);r>-1&&t.cart.splice(r,1)}else t.cart.push(a)}},actions:{initBeers:function(t){var e=t.commit;return v.a.get("http://starlord.hackerearth.com/beercraft").then(function(t){e("initBeers",t.data)}).catch(function(t){throw t})},toggleCart:function(t,e){(0,t.commit)("toggleCart",e)}},getters:{getAllBeers:function(t){return t.beers.sort(function(t,e){return t.id==e.id?0:+(t.id<e.id)||-1})},getAllBeerStyles:function(t){return new s.a(t.beers.map(function(t){return t.style}))},getCart:function(t){return t.cart}}})}},[57]);
//# sourceMappingURL=app.c8db850e0634d3175fa5.js.map