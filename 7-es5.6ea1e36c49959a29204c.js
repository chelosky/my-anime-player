function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JSWD:function(e,t,i){"use strict";i.r(t),i.d(t,"FavoritesModule",(function(){return k}));var a=i("ofXK"),n=i("iTUp"),s=i("j1ZV"),r=i("tyNb"),o=i("pFs6"),c=i("fXoL"),l=i("kUbd"),p=i("gZnd"),f=i("6nr9"),h=i("qQYQ"),u=i("azFQ"),d=i("RZmA"),v=i("iGEw"),y=i("RBLp");function b(e,t){1&e&&c.Qb(0,"app-loading")}function g(e,t){if(1&e){var i=c.Wb();c.Vb(0,"div"),c.Vb(1,"app-title-chapters",1),c.dc("typeListChange",(function(e){return c.xc(i),c.hc().changeTypeList(e)})),c.Ub(),c.Vb(2,"app-search",2),c.dc("valueChange",(function(e){return c.xc(i),c.hc().filterText=e})),c.Ub(),c.Qb(3,"app-chapters-container",3),c.ic(4,"filterChapters"),c.Ub()}if(2&e){var a=c.hc();c.Cb(1),c.oc("title",a.title)("currentType",a.typeList),c.Cb(2),c.oc("data",c.lc(4,4,a.data,a.filterText,a.filterProps))("typeList",a.typeList)}}var C,T,L=[{path:"",component:(C=function(){function e(t,i,a){_classCallCheck(this,e),this.favoriteService=t,this.videoPlayerService=i,this.settingsService=a,this.title="Favoritos",this.filterText="",this.filterProps=["id","code","name","season","season_name"],this.typeList=o.e,this.data=[],this.loaded=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.getCurrentType(),this.getFavorites()}},{key:"getFavorites",value:function(){this.loaded=!1,this.data=this.favoriteService.getFavorites(),this.videoPlayerService.setVideoList(this.data),console.log(this.data),this.loaded=!0}},{key:"getCurrentType",value:function(){this.typeList=this.settingsService.getType()}},{key:"changeTypeList",value:function(e){this.typeList=e}},{key:"changeFilterText",value:function(e){this.filterText=e}}]),e}(),C.\u0275fac=function(e){return new(e||C)(c.Pb(l.a),c.Pb(p.a),c.Pb(f.a))},C.\u0275cmp=c.Jb({type:C,selectors:[["app-favorites"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"title","currentType","typeListChange"],[3,"valueChange"],[3,"data","typeList"]],template:function(e,t){1&e&&(c.Dc(0,b,1,0,"app-loading",0),c.Dc(1,g,5,8,"div",0)),2&e&&(c.oc("ngIf",!t.loaded),c.Cb(1),c.oc("ngIf",t.loaded))},directives:[a.l,h.a,u.a,d.a,v.a],pipes:[y.a],styles:[""]}),C),data:{title:"Favoritos"}},{path:"**",pathMatch:"full",redirectTo:""}],k=((T=function e(){_classCallCheck(this,e)}).\u0275mod=c.Nb({type:T}),T.\u0275inj=c.Mb({factory:function(e){return new(e||T)},imports:[[a.c,n.a,s.a,r.c.forChild(L)]]}),T)}}]);