(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BUsP:function(t,e,i){"use strict";i.r(e),i.d(e,"LibraryModule",(function(){return P}));var a=i("ofXK"),s=i("iTUp"),n=i("j1ZV"),r=i("mrSG"),c=i("pFs6"),o=i("quSY"),p=i("fXoL"),h=i("tyNb"),d=i("UX7N"),l=i("gZnd"),u=i("6nr9"),b=i("qQYQ"),f=i("azFQ"),g=i("RZmA"),m=i("iGEw"),y=i("RBLp");function v(t,e){1&t&&p.Qb(0,"app-loading")}function C(t,e){if(1&t){const t=p.Wb();p.Vb(0,"div"),p.Vb(1,"app-title-chapters",1),p.dc("typeListChange",(function(e){return p.xc(t),p.hc().changeTypeList(e)})),p.Ub(),p.Vb(2,"app-search",2),p.dc("valueChange",(function(e){return p.xc(t),p.hc().filterText=e})),p.Ub(),p.Qb(3,"app-chapters-container",3),p.ic(4,"filterChapters"),p.Ub()}if(2&t){const t=p.hc();p.Cb(1),p.oc("title",t.title)("currentType",t.typeList),p.Cb(2),p.oc("data",p.lc(4,4,t.data,t.filterText,t.filterProps))("typeList",t.typeList)}}let L=(()=>{class t{constructor(t,e,i,a){this.activatedRoute=t,this.animeService=e,this.videoPlayerService=i,this.settingsService=a,this.title="",this.filterText="",this.filterProps=["id","code","name","season","season_name"],this.typeList=c.e,this.data=[],this.loaded=!1,this.paramsChangedSub$=new o.a}ngOnInit(){this.getCurrentType(),this.paramsChangedSub$=this.activatedRoute.params.subscribe(t=>{this.getInformation()})}getInformation(){return Object(r.a)(this,void 0,void 0,(function*(){this.loaded=!1,this.filterText="";let t=this.activatedRoute.snapshot.routeConfig.path,e=this.activatedRoute.snapshot.params;this.title=`${this.activatedRoute.snapshot.data.title} ${c.a[e.anime].name}`,this.data=yield this.animeService.getAnimeData(e.anime,t).toPromise().catch(t=>console.log(t)),this.videoPlayerService.setVideoList(this.data),this.loaded=!0}))}changeTypeList(t){this.typeList=t}getCurrentType(){this.typeList=this.settingsService.getType()}changeFilterText(t){this.filterText=t}ngOnDestroy(){this.paramsChangedSub$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Pb(h.a),p.Pb(d.a),p.Pb(l.a),p.Pb(u.a))},t.\u0275cmp=p.Jb({type:t,selectors:[["app-library"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"title","currentType","typeListChange"],[3,"valueChange"],[3,"data","typeList"]],template:function(t,e){1&t&&(p.Dc(0,v,1,0,"app-loading",0),p.Dc(1,C,5,8,"div",0)),2&t&&(p.oc("ngIf",!e.loaded),p.Cb(1),p.oc("ngIf",e.loaded))},directives:[a.l,b.a,f.a,g.a,m.a],pipes:[y.a],styles:[""]}),t})();const T=[{path:":anime",children:[{path:"chapters",component:L,data:{title:"Cap\xedtulos"}},{path:"ovas",component:L,data:{title:"Ovas"}},{path:"movies",component:L,data:{title:"Pel\xedculas"}}]},{path:"**",pathMatch:"full",redirectTo:"/"}];let P=(()=>{class t{}return t.\u0275mod=p.Nb({type:t}),t.\u0275inj=p.Mb({factory:function(e){return new(e||t)},imports:[[a.c,a.c,s.a,n.a,h.c.forChild(T)]]}),t})()}}]);