(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/prD":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("pFs6");class r{constructor(t,e,n,i,r,o){this.id=t,this.code=e,this.name=n,this.url=i,this.thumbnail=r,this.anime=o,this.id=t,this.code=e,this.name=n,this.url=i,this.thumbnail=r,this.anime=o}getInformation(){return"NUM: "+this.id}getType(){return i.g.ova}}},"6nr9":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("RXdi"),r=n("pFs6"),o=n("fXoL"),a=n("n90K");let s=(()=>{class t{constructor(t){this.storageService=t,this.initCurrent()}initCurrent(){this.currentType=this.storageService.retrieve(i.c)?this.storageService.retrieve(i.c):r.e}setType(t){this.storageService.store(i.c,t),this.initCurrent()}getType(){return this.currentType}removeAllData(){this.storageService.remove(i.a),this.storageService.remove(i.d)}}return t.\u0275fac=function(e){return new(e||t)(o.Zb(a.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"D+pG":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("pFs6");class r{constructor(t,e,n,i,r,o,a,s){this.id=t,this.code=e,this.name=n,this.url=i,this.thumbnail=r,this.season=o,this.season_name=a,this.anime=s,this.id=t,this.code=e,this.name=n,this.url=i,this.thumbnail=r,this.season=o,this.season_name=a,this.anime=s}getInformation(){return`EP: ${this.code} - TEMP: ${this.season}`}getType(){return i.g.chapter}}},RBLp:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class t{transform(t,e,n){return e&&""!==e?t.filter(t=>{for(const i of n)if(t[i]&&t[i].toString().toLowerCase().includes(e))return!0;return!1}):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Ob({name:"filterChapters",type:t,pure:!0}),t})()},RXdi:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d}));var i=n("/prD"),r=n("D+pG"),o=n("otvB");const a="my_anime_list_chelosky_favorites",s="my_anime_list_chelosky_watched",c="my_anime_list_chelosky_view_type",d={ova:{code:"OVA",generate:t=>new i.a(t.id,t.code,t.name,t.url,t.thumbnail,t.anime)},movie:{code:"MOVIE",generate:t=>new o.a(t.id,t.code,t.name,t.url,t.thumbnail,t.anime)},chapter:{code:"CHAPTER",generate:t=>new r.a(t.id,t.code,t.name,t.url,t.thumbnail,t.season,t.season_name,t.anime)}}},RZmA:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("fXoL"),r=n("XNiG"),o=n("Kj3r"),a=n("/uUt"),s=n("pFs6"),c=n("3Pt+");let d=(()=>{class t{constructor(){this.valueForm="",this.valueModelChanged=new r.a,this.placeHolder="Buscar...",this.valueChange=new i.o}ngOnInit(){this.valueSub$=this.valueModelChanged.pipe(Object(o.a)(s.h),Object(a.a)()).subscribe(t=>{this.valueForm=t,this.valueChange.emit(this.valueForm)})}ngOnDestroy(){this.valueSub$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-search"]],inputs:{placeHolder:"placeHolder"},outputs:{valueChange:"valueChange"},decls:8,vars:2,consts:[[1,"row"],[1,"col-sm-12","mb-3"],[1,"input-group"],[1,"input-group-prepend"],["id","basic-addon1",1,"input-group-text"],[1,"material-icons"],["name","search-inp","type","text","aria-label","Search",1,"form-control",3,"placeholder","ngModel","ngModelChange"]],template:function(t,e){1&t&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"form",2),i.Vb(3,"div",3),i.Vb(4,"span",4),i.Vb(5,"span",5),i.Ec(6," search "),i.Ub(),i.Ub(),i.Ub(),i.Vb(7,"input",6),i.dc("ngModelChange",(function(t){return e.valueModelChanged.next(t)})),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Cb(7),i.oc("placeholder",e.placeHolder)("ngModel",e.valueForm))},directives:[c.n,c.j,c.k,c.c,c.i,c.l],styles:[""]}),t})()},UX7N:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("lJxs"),r=n("pFs6"),o=n("/prD"),a=n("otvB"),s=n("D+pG"),c=n("fXoL"),d=n("tk/3");let h=(()=>{class t{constructor(t){this.http=t}get(t,e){const n=this.getHeaders();return this.http.get(t,{headers:n,params:e,observe:"response"})}post(t,e){const n=this.getHeaders();return this.http.post(t,e,{headers:n,observe:"response"})}put(t,e){const n=this.getHeaders();return this.http.put(t,e,{headers:n,observe:"response"})}getHeaders(){return new d.c}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(d.a))},t.\u0275prov=c.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),l=(()=>{class t{constructor(t){this.dataService=t,this.animeList=[],this.generateObject={chapters:(t,e)=>new s.a(t.id,t.code,t.name,t.url,t.thumbnail,t.season,t.season_name,e),movies:(t,e)=>new a.a(t.id,t.code,t.name,t.url,t.thumbnail,e),ovas:(t,e)=>new o.a(t.id,t.code,t.name,t.url,t.thumbnail,e)}}getAnimeData(t,e){return this.dataService.get(`${r.b}${r.a[t].endpoint}`).pipe(Object(i.a)(n=>{const i=r.a[t].get(n)[e].map(n=>this.generateObject[e](n,t));return this.animeList=i,i}))}generateDirectDownloadLink(t){return this.dataService.post(r.b+"download",{url:t.url}).pipe(Object(i.a)(t=>t.body))}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(h))},t.\u0275prov=c.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},azFQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("fXoL"),r=n("pFs6"),o=n("ofXK"),a=n("tGiV");function s(t,e){if(1&t){const t=i.Wb();i.Vb(0,"app-button-group",4),i.dc("selectEvent",(function(e){return i.xc(t),i.hc().changeType(e)})),i.Ub()}if(2&t){const t=e.$implicit,n=i.hc();i.oc("item",t)("disabled",n.isCurrent(t.value))}}let c=(()=>{class t{constructor(){this.types=r.d,this.currentType=r.e,this.typeListChange=new i.o}ngOnInit(){}isCurrent(t){return t===this.currentType}changeType(t){this.currentType=t,this.typeListChange.emit(this.currentType)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-title-chapters"]],inputs:{currentType:"currentType",title:"title"},outputs:{typeListChange:"typeListChange"},decls:7,vars:2,consts:[[1,"row"],[1,"col-sm-12","title-content"],[1,"btn-group"],[3,"item","disabled","selectEvent",4,"ngFor","ngForOf"],[3,"item","disabled","selectEvent"]],template:function(t,e){1&t&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"h1"),i.Ec(3),i.Ub(),i.Vb(4,"div",2),i.Dc(5,s,1,2,"app-button-group",3),i.Ub(),i.Ub(),i.Ub(),i.Qb(6,"hr")),2&t&&(i.Cb(3),i.Fc(e.title),i.Cb(2),i.oc("ngForOf",e.types))},directives:[o.k,a.a],styles:[".title-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}h1[_ngcontent-%COMP%]{line-height:1.1;color:inherit}.title-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{align-self:flex-start;margin:auto 0}.title-content[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{margin-left:auto}"]}),t})()},gZnd:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class t{constructor(){this.videoList=[]}getCurrentIndex(t){return this.videoList.findIndex(e=>t.code==e.code&&t.anime==e.anime)}getNext(t){const e=this.getCurrentIndex(t);return-1!=e&&e+1<this.videoList.length?this.videoList[e+1]:null}getPrevious(t){const e=this.getCurrentIndex(t);return-1!=e&&e-1>=0?this.videoList[e-1]:null}setVideoList(t){this.videoList=t}getVideoList(){return this.videoList}getNextPrevious(t){return{previous:this.getPrevious(t),next:this.getNext(t)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},iGEw:function(t,e,n){"use strict";n.d(e,"a",(function(){return $}));var i=n("pFs6"),r=n("fXoL"),o=n("ofXK"),a=n("mrSG"),s=n("0IaG"),c=n("UX7N"),d=n("kUbd"),h=n("RXdi"),l=n("XNiG"),u=n("n90K");let p=(()=>{class t{constructor(t){this.storageService=t,this.handleWatched$=new l.a,this.getLocalInformation()}getLocalInformation(){this.watchedChapters=this.storageService.retrieve(h.d)||[]}setInformation(){this.storageService.store(h.d,this.watchedChapters),this.handleWatched$.next()}isDuplicated(t){return-1!=this.watchedChapters.findIndex(e=>e.code==t.code&&e.anime==t.anime)}getWatched(){return this.watchedChapters}getSubject(){return this.handleWatched$}getHandle(){return this.handleWatched$.asObservable()}isWatched(t){return-1!=this.watchedChapters.findIndex(e=>e.code==t.code&&e.anime==t.anime)}setWatched(t){const e={code:t.code,anime:t.anime};this.isDuplicated(e)||(this.watchedChapters.push(e),this.setInformation())}removeWatched(t){const e=this.watchedChapters.findIndex(e=>e.code==t.code&&e.anime==t.anime);-1!=e&&(this.watchedChapters.splice(e,1),this.setInformation())}clearWatched(){this.watchedChapters=[],this.setInformation()}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(u.a))},t.\u0275prov=r.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=n("gZnd"),g=n("bTqV"),f=n("NFeN"),v=n("Xa2L"),m=n("4w57"),y=n("cqME"),C=n("VKRg"),w=n("v2j/");let x=(()=>{class t{transform(t,e){return i.a[e].validName(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Ob({name:"cleanChapterName",type:t,pure:!0}),t})();function O(t,e){1&t&&r.Qb(0,"mat-spinner")}function _(t,e){if(1&t){const t=r.Wb();r.Vb(0,"vg-player",8),r.dc("onPlayerReady",(function(e){return r.xc(t),r.hc().onPlayerReady(e)})),r.Qb(1,"vg-overlay-play"),r.Qb(2,"vg-buffering"),r.Vb(3,"vg-controls",9),r.Qb(4,"vg-play-pause"),r.Qb(5,"vg-playback-button"),r.Qb(6,"vg-time-display",10),r.Vb(7,"vg-scrub-bar"),r.Qb(8,"vg-scrub-bar-current-time"),r.Qb(9,"vg-scrub-bar-buffering-time"),r.Ub(),r.Qb(10,"vg-time-display",11),r.Qb(11,"vg-mute"),r.Qb(12,"vg-volume"),r.Qb(13,"vg-fullscreen"),r.Ub(),r.Vb(14,"video",12,13),r.Qb(16,"source",14),r.Ub(),r.Ub()}if(2&t){const t=r.tc(15),e=r.hc();r.Cb(3),r.oc("vgAutohide",!0)("vgAutohideTime",1.5),r.Cb(11),r.oc("vgMedia",t),r.Cb(2),r.oc("src",e.urlVideo,r.yc)}}let P=(()=>{class t{constructor(t,e,n,i,r,o){this.animeService=t,this.dialogRef=e,this.favoriteService=n,this.watchedService=i,this.videoPlayerService=r,this.data=o,this.urlVideo="",this.loaded=!1,this.favorite=!1}ngOnInit(){this.getInformation()}getInformation(){return Object(a.a)(this,void 0,void 0,(function*(){this.loaded=!1,this.getCurrentState(),this.getNextPreviousData();const t=yield this.animeService.generateDirectDownloadLink(this.data.item).toPromise();this.urlVideo=t.direct_link,this.loaded=!0}))}onPlayerReady(t){this.api=t,this.playSub$=this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this))}playVideo(){this.api&&(this.api.play(),this.watchedService.setWatched(this.data.item))}getCurrentState(){this.favorite=this.favoriteService.isFavorite(this.data.item)}handleFavorite(){this.favorite=!this.favorite,this.favorite?this.favoriteService.setFavorite(this.data.item):this.favoriteService.removeFavorite(this.data.item)}getNextPreviousData(){const{previous:t,next:e}=this.videoPlayerService.getNextPrevious(this.data.item);this.previous=t,this.next=e,console.log(this.previous),console.log(this.next)}goNext(){console.log("NEXT"),this.data.item=this.next,this.getInformation()}goPrevious(){console.log("PREVIOUS"),this.data.item=this.previous,this.getInformation()}ngOnDestroy(){this.playSub$&&this.playSub$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(c.a),r.Pb(s.g),r.Pb(d.a),r.Pb(p),r.Pb(b.a),r.Pb(s.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-video-player"]],decls:20,vars:12,consts:[["mat-dialog-title",""],["mat-icon-button","","aria-label","close dialog","mat-dialog-close","",1,"close-button"],["mat-dialog-content","",1,"container-block"],[4,"ngIf"],[3,"onPlayerReady",4,"ngIf"],["mat-dialog-actions","",1,"btn-final"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"color","click"],[3,"onPlayerReady"],[3,"vgAutohide","vgAutohideTime"],["vgProperty","current","vgFormat","mm:ss"],["vgProperty","total","vgFormat","mm:ss"],["id","singleVideo","preload","auto","crossorigin","",3,"vgMedia"],["media",""],["type","video/mp4",3,"src"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Vb(1,"h2"),r.Ec(2),r.ic(3,"cleanChapterName"),r.Ub(),r.Vb(4,"button",1),r.Vb(5,"mat-icon"),r.Ec(6,"close"),r.Ub(),r.Ub(),r.Ub(),r.Vb(7,"div",2),r.Dc(8,O,1,0,"mat-spinner",3),r.Dc(9,_,17,4,"vg-player",4),r.Ub(),r.Vb(10,"div",5),r.Vb(11,"button",6),r.dc("click",(function(){return e.goPrevious()})),r.Vb(12,"mat-icon"),r.Ec(13,"keyboard_arrow_left"),r.Ub(),r.Ub(),r.Vb(14,"button",7),r.dc("click",(function(){return e.handleFavorite()})),r.Vb(15,"mat-icon"),r.Ec(16),r.Ub(),r.Ub(),r.Vb(17,"button",6),r.dc("click",(function(){return e.goNext()})),r.Vb(18,"mat-icon"),r.Ec(19,"keyboard_arrow_right"),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.Cb(2),r.Fc(r.kc(3,9,e.data.item.name,e.data.item.anime)),r.Cb(6),r.oc("ngIf",!e.loaded),r.Cb(1),r.oc("ngIf",e.loaded),r.Cb(2),r.Gb("hide-btn",!e.previous),r.Cb(3),r.oc("color",e.favorite?"warn":""),r.Cb(2),r.Fc(e.favorite?"favorite":"favorite_outline"),r.Cb(1),r.Gb("hide-btn",!e.next))},directives:[s.h,g.a,s.d,f.a,s.e,o.l,s.c,v.b,m.f,y.a,C.a,w.a,w.e,w.f,w.j,w.h,w.i,w.g,w.d,w.k,w.c,m.e],pipes:[x],styles:[".hide-btn[_ngcontent-%COMP%]{visibility:hidden}"]}),t})();var M=n("3Pt+");let V=(()=>{class t{constructor(){this.statusChange=new r.o}ngOnInit(){}changeStatus(){this.statusChange.emit(this.status)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-switch"]],inputs:{status:"status"},outputs:{statusChange:"statusChange"},decls:3,vars:2,consts:[[1,"switch"],["type","checkbox",3,"checked","ngModel","ngModelChange"],[1,"slider","round"]],template:function(t,e){1&t&&(r.Vb(0,"label",0),r.Vb(1,"input",1),r.dc("ngModelChange",(function(t){return e.status=t}))("ngModelChange",(function(){return e.changeStatus()})),r.Ub(),r.Qb(2,"span",2),r.Ub()),2&t&&(r.Cb(1),r.oc("checked",e.status)("ngModel",e.status))},directives:[M.a,M.i,M.l],styles:['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:54px;height:28px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:before{position:absolute;transition:.4s}.slider[_ngcontent-%COMP%]:before{content:"";height:20px;width:20px;left:4px;bottom:4px;background-color:#fff}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#17d66d}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #17d66d}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']}),t})(),S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-ribbon-corner"]],inputs:{title:"title"},decls:3,vars:1,consts:[[1,"container__wrapper"],[1,"container__ribbon"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Ec(2),r.Ub(),r.Ub()),2&t&&(r.Cb(2),r.Gc(" ",e.title," "))},styles:[".container__wrapper[_ngcontent-%COMP%]{left:0;position:absolute;top:0;height:100px;width:100px;overflow:hidden}.container__ribbon[_ngcontent-%COMP%]{z-index:999;left:-64px;position:absolute;top:32px;height:24px;width:206px;transform:rotate(-45deg);background-color:rgba(23,214,109,.7686274509803922);text-align:center;color:#fff}"]}),t})();function U(t,e){1&t&&r.Qb(0,"app-ribbon-corner",14),2&t&&r.oc("title","VISTO")}let E=(()=>{class t{constructor(){this.favorite=!1,this.watched=!1,this.playEvent=new r.o,this.favoriteEvent=new r.o,this.watchedEvent=new r.o}ngOnInit(){}setFavorite(){this.favorite=!this.favorite,this.favoriteEvent.emit(this.favorite)}setWatched(){this.watched=!this.watched,this.watchedEvent.emit(this.watched)}play(){this.playEvent.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-chapter-item-list"]],inputs:{item:"item",favorite:"favorite",watched:"watched"},outputs:{playEvent:"playEvent",favoriteEvent:"favoriteEvent",watchedEvent:"watchedEvent"},decls:19,vars:13,consts:[[1,"list-group-item"],[1,"list-item",3,"id"],[1,"metadata"],[1,"image"],[3,"title",4,"ngIf"],[1,"img-item",3,"src","alt"],[1,"information"],[1,"text-post"],[1,"text-muted","text-xs"],[1,"control"],[1,"btns"],[1,"material-icons","play",3,"click"],[1,"material-icons","favorite",3,"click"],[3,"status","statusChange"],[3,"title"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Dc(4,U,1,1,"app-ribbon-corner",4),r.Qb(5,"img",5),r.Ub(),r.Vb(6,"div",6),r.Vb(7,"span",7),r.Ec(8),r.ic(9,"cleanChapterName"),r.Ub(),r.Vb(10,"span",8),r.Ec(11),r.Ub(),r.Ub(),r.Ub(),r.Vb(12,"div",9),r.Vb(13,"div",10),r.Vb(14,"span",11),r.dc("click",(function(){return e.play()})),r.Ec(15," play_arrow "),r.Ub(),r.Vb(16,"span",12),r.dc("click",(function(){return e.setFavorite()})),r.Ec(17),r.Ub(),r.Ub(),r.Vb(18,"app-switch",13),r.dc("statusChange",(function(){return e.setWatched()})),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.Cb(1),r.oc("id",e.item.id),r.Cb(3),r.oc("ngIf",e.watched),r.Cb(1),r.oc("src",e.item.thumbnail,r.yc)("alt",e.item.name),r.Cb(3),r.Fc(r.kc(9,10,e.item.name,e.item.anime)),r.Cb(3),r.Fc(e.item.getInformation()),r.Cb(5),r.Gb("heart",e.favorite),r.Cb(1),r.Gc(" ",e.favorite?"favorite":"favorite_outline"," "),r.Cb(1),r.oc("status",e.watched))},directives:[o.l,V,S],pipes:[x],styles:[".list-group-item[_ngcontent-%COMP%]{position:relative;display:block;margin-bottom:-1px;background-color:#fff;border:1px solid #eaeef1;padding:15px;overflow-x:auto}.list-group-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.list-item[_ngcontent-%COMP%]{justify-content:space-between}.list-item[_ngcontent-%COMP%], .metadata[_ngcontent-%COMP%]{display:flex;flex-direction:row}.information[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin-left:10px}.text-post[_ngcontent-%COMP%]{display:block;text-overflow:ellipsis;color:#000;font-style:bold;font-size:15px;min-width:100px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-muted[_ngcontent-%COMP%]{color:#939aa0}.image[_ngcontent-%COMP%]{min-width:100px;max-width:100px;min-height:100px;max-height:100px;display:flex;flex-direction:row;justify-content:center;align-items:center}img[_ngcontent-%COMP%]{width:100%;height:100%}.img-item[_ngcontent-%COMP%]{border:0;border-radius:20%;margin:auto}.control[_ngcontent-%COMP%]{flex-direction:column}.btns[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around}.btns[_ngcontent-%COMP%]{width:100px;flex-direction:row}.btns[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;margin:0;font-size:2rem}span[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]{margin-right:20px}span[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]{margin-left:20px}"]}),t})();function I(t,e){1&t&&r.Qb(0,"app-ribbon-corner",12),2&t&&r.oc("title","VISTO")}let k=(()=>{class t{constructor(){this.favorite=!1,this.watched=!1,this.playEvent=new r.o,this.favoriteEvent=new r.o,this.watchedEvent=new r.o}ngOnInit(){}setFavorite(){this.favorite=!this.favorite,this.favoriteEvent.emit(this.favorite)}setWatched(){this.watched=!this.watched,this.watchedEvent.emit(this.watched)}play(){this.playEvent.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-chapter-item-grid"]],inputs:{item:"item",favorite:"favorite",watched:"watched"},outputs:{playEvent:"playEvent",favoriteEvent:"favoriteEvent",watchedEvent:"watchedEvent"},decls:17,vars:13,consts:[[1,"item-post",3,"id"],[1,"cover"],[3,"title",4,"ngIf"],[1,"overlay","overlay-blur"],[1,"material-icons","play",3,"click"],[1,"material-icons","favorite",3,"click"],["width","150","height","150",1,"img-border",3,"src","alt"],[1,"info"],[1,"text-post"],[1,"info-post"],[1,"text-muted","text-xs","text-post"],[3,"status","statusChange"],[3,"title"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Dc(2,I,1,1,"app-ribbon-corner",2),r.Vb(3,"div",3),r.Vb(4,"span",4),r.dc("click",(function(){return e.play()})),r.Ec(5," play_arrow "),r.Ub(),r.Vb(6,"span",5),r.dc("click",(function(){return e.setFavorite()})),r.Ec(7),r.Ub(),r.Ub(),r.Qb(8,"img",6),r.Ub(),r.Vb(9,"div",7),r.Vb(10,"div",8),r.Ec(11),r.ic(12,"cleanChapterName"),r.Ub(),r.Vb(13,"div",9),r.Vb(14,"div",10),r.Ec(15),r.Ub(),r.Vb(16,"app-switch",11),r.dc("statusChange",(function(){return e.setWatched()})),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.oc("id",e.item.id),r.Cb(2),r.oc("ngIf",e.watched),r.Cb(4),r.Gb("heart",e.favorite),r.Cb(1),r.Gc(" ",e.favorite?"favorite":"favorite_outline"," "),r.Cb(1),r.oc("src",e.item.thumbnail,r.yc)("alt",e.item.name),r.Cb(3),r.Gc(" ",r.kc(12,10,e.item.name,e.item.anime)," "),r.Cb(4),r.Gc(" ",e.item.getInformation()," "),r.Cb(1),r.oc("status",e.watched))},directives:[o.l,V,S],pipes:[x],styles:[".item-post[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cover[_ngcontent-%COMP%]{position:relative}.img-border[_ngcontent-%COMP%]{border-radius:2px 2px 2px 2px}img[_ngcontent-%COMP%]{border:0;width:100%;height:auto}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);color:#fff;display:flex;flex-direction:row;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.overlay[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]{margin-right:10px}.overlay[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]{margin-left:10px}.overlay-blur[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.overlay[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{transform:translateY(20px);transition:transform .3s}.overlay[_ngcontent-%COMP%]:hover{opacity:1}.overlay[_ngcontent-%COMP%]:hover > *[_ngcontent-%COMP%]{transform:translateY(0)}.overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0;font-size:3rem}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:10px;margin-bottom:30px;min-height:38px}.text-post[_ngcontent-%COMP%]{display:block;text-overflow:ellipsis;color:#545a5f;text-decoration:none}.info-post[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:10px;align-items:center;justify-content:space-between}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-muted[_ngcontent-%COMP%]{color:#939aa0}"]}),t})();function F(t,e){if(1&t){const t=r.Wb();r.Vb(0,"app-chapter-item-list",2),r.dc("playEvent",(function(){return r.xc(t),r.hc().play()}))("favoriteEvent",(function(e){return r.xc(t),r.hc().handleFavorite(e)}))("watchedEvent",(function(e){return r.xc(t),r.hc().handleWatched(e)})),r.Ub()}if(2&t){const t=r.hc();r.oc("item",t.item)("favorite",t.favorite)("watched",t.watched)}}function L(t,e){if(1&t){const t=r.Wb();r.Vb(0,"app-chapter-item-grid",2),r.dc("playEvent",(function(){return r.xc(t),r.hc().play()}))("favoriteEvent",(function(e){return r.xc(t),r.hc().handleFavorite(e)}))("watchedEvent",(function(e){return r.xc(t),r.hc().handleWatched(e)})),r.Ub()}if(2&t){const t=r.hc();r.oc("item",t.item)("favorite",t.favorite)("watched",t.watched)}}let D=(()=>{class t{constructor(t,e,n){this.dialog=t,this.favoriteService=e,this.watchedService=n,this.type=i.e}ngOnInit(){this.subFavorite$=this.favoriteService.getHandle().subscribe(t=>this.getCurrentState()),this.subWatched$=this.watchedService.getHandle().subscribe(t=>this.getCurrentState()),this.getCurrentState()}getCurrentState(){this.favorite=this.favoriteService.isFavorite(this.item),this.watched=this.watchedService.isWatched(this.item)}play(){this.dialog.open(P,{panelClass:"my-class",disableClose:!0,data:{item:this.item,favorite:this.favorite}}).afterClosed().subscribe(t=>{this.getCurrentState()})}handleFavorite(t){t?this.favoriteService.setFavorite(this.item):this.favoriteService.removeFavorite(this.item),this.getCurrentState()}handleWatched(t){t?this.watchedService.setWatched(this.item):this.watchedService.removeWatched(this.item),this.getCurrentState()}getGrid(){return i.e}getList(){return i.f}ngOnDestroy(){this.subFavorite$&&this.subFavorite$.unsubscribe(),this.subWatched$&&this.subWatched$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(s.b),r.Pb(d.a),r.Pb(p))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-chapter-item"]],inputs:{item:"item",type:"type"},decls:3,vars:3,consts:[[1,"item-cont",3,"ngSwitch"],[3,"item","favorite","watched","playEvent","favoriteEvent","watchedEvent",4,"ngSwitchCase"],[3,"item","favorite","watched","playEvent","favoriteEvent","watchedEvent"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Dc(1,F,1,3,"app-chapter-item-list",1),r.Dc(2,L,1,3,"app-chapter-item-grid",1),r.Ub()),2&t&&(r.oc("ngSwitch",e.type),r.Cb(1),r.oc("ngSwitchCase",e.getList()),r.Cb(1),r.oc("ngSwitchCase",e.getGrid()))},directives:[o.n,o.o,E,k],styles:[".item-cont[_ngcontent-%COMP%]{position:relative}"]}),t})();function T(t,e){if(1&t&&(r.Vb(0,"div"),r.Qb(1,"app-chapter-item",2),r.Ub()),2&t){const t=e.$implicit,n=r.hc();r.Cb(1),r.oc("item",t)("type",n.getType())}}let Q=(()=>{class t{constructor(){this.data=[]}ngOnInit(){}getType(){return i.f}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-chapter-list"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"row","list-group","list-group-lg"],[4,"ngFor","ngForOf"],[3,"item","type"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Dc(1,T,2,2,"div",1),r.Ub()),2&t&&(r.Cb(1),r.oc("ngForOf",e.data))},directives:[o.k,D],styles:[".list-group[_ngcontent-%COMP%]{border-radius:2px;padding-left:0;margin-bottom:20px;min-width:300px}"]}),t})();function W(t,e){if(1&t&&r.Qb(0,"app-chapter-item",2),2&t){const t=e.$implicit,n=r.hc();r.oc("item",t)("type",n.getType())}}let X=(()=>{class t{constructor(){this.data=[]}ngOnInit(){}getType(){return i.e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-chapter-grid"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"row"],["class","col-xs-12 col-sm-6 col-md-4 col-lg-3",3,"item","type",4,"ngFor","ngForOf"],[1,"col-xs-12","col-sm-6","col-md-4","col-lg-3",3,"item","type"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Dc(1,W,1,2,"app-chapter-item",1),r.Ub()),2&t&&(r.Cb(1),r.oc("ngForOf",e.data))},directives:[o.k,D],styles:[""]}),t})();function G(t,e){if(1&t&&r.Qb(0,"app-chapter-list",2),2&t){const t=r.hc();r.oc("data",t.data)}}function N(t,e){if(1&t&&r.Qb(0,"app-chapter-grid",2),2&t){const t=r.hc();r.oc("data",t.data)}}let $=(()=>{class t{constructor(){this.typeList=i.f,this.data=[]}ngOnInit(){}getGrid(){return i.e}getList(){return i.f}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-chapters-container"]],inputs:{typeList:"typeList",data:"data"},decls:3,vars:3,consts:[[3,"ngSwitch"],[3,"data",4,"ngSwitchCase"],[3,"data"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Dc(1,G,1,1,"app-chapter-list",1),r.Dc(2,N,1,1,"app-chapter-grid",1),r.Ub()),2&t&&(r.oc("ngSwitch",e.typeList),r.Cb(1),r.oc("ngSwitchCase",e.getList()),r.Cb(1),r.oc("ngSwitchCase",e.getGrid()))},directives:[o.n,o.o,Q,X],styles:[""]}),t})()},kUbd:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("RXdi"),r=n("XNiG"),o=n("fXoL"),a=n("n90K"),s=n("ofXK");let c=(()=>{class t{constructor(t,e){this.storageService=t,this.datePipe=e,this.handleFavorite$=new r.a,this.getLocalInformation()}getLocalInformation(){this.favorites=this.storageService.retrieve(i.a)||[]}getCurrentDate(t="dd/MM/yyyy, h:mm:ss a"){return this.datePipe.transform(new Date,t)}setInformation(){this.storageService.store(i.a,this.favorites),this.handleFavorite$.next()}isDuplicated(t){return-1!=this.favorites.findIndex(e=>e.code==t.code&&e.anime==t.anime)}updateFavorites(t){this.favorites=t.map(t=>Object.assign(Object.assign({},t),{create_at:this.getCurrentDate(),type:t.getType()})),this.setInformation()}getFavorites(){return this.favorites.map(t=>i.b[t.type].generate(t))}getSubject(){return this.handleFavorite$}getHandle(){return this.handleFavorite$.asObservable()}isFavorite(t){return-1!=this.favorites.findIndex(e=>e.code==t.code&&e.anime==t.anime)}setFavorite(t){const e=Object.assign(Object.assign({},t),{create_at:this.getCurrentDate(),type:t.getType()});this.isDuplicated(e)||(this.favorites.push(e),this.setInformation())}removeFavorite(t){const e=this.favorites.findIndex(e=>e.code==t.code&&e.anime==t.anime);-1!=e&&(this.favorites.splice(e,1),this.setInformation())}clearFavorites(){this.favorites=[],this.setInformation()}}return t.\u0275fac=function(e){return new(e||t)(o.Zb(a.a),o.Zb(s.e))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},mrSG:function(t,e,n){"use strict";function i(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{c(i.next(t))}catch(e){o(e)}}function s(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return i}))},n90K:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class t{constructor(){this.storage=localStorage}retrieve(t){const e=this.storage.getItem(t);if(e&&"undefined"!==e)return JSON.parse(e)}store(t,e){this.storage.setItem(t,JSON.stringify(e))}remove(t){this.storage.removeItem(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},otvB:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("pFs6");class r{constructor(t,e,n,i,r,o){this.id=t,this.code=e,this.name=n,this.url=i,this.thumbnail=r,this.anime=o,this.id=t,this.code=e,this.name=n,this.url=i,this.thumbnail=r,this.anime=o}getInformation(){return"C\xd3DIGO: "+this.code}getType(){return i.g.movie}}},qQYQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fXoL"),r=n("Xa2L");let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"wrapper"]],template:function(t,e){1&t&&(i.Vb(0,"div",0),i.Qb(1,"mat-spinner"),i.Ub())},directives:[r.b],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100vh - 20px)}"]}),t})()},tGiV:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),r=n("bTqV"),o=n("NFeN");let a=(()=>{class t{constructor(){this.selectEvent=new i.o}ngOnInit(){}selectButton(){this.selectEvent.emit(this.item.value)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-button-group"]],inputs:{disabled:"disabled",item:"item"},outputs:{selectEvent:"selectEvent"},decls:3,vars:4,consts:[["color","primary","mat-raised-button","",3,"disabled","click"]],template:function(t,e){1&t&&(i.Vb(0,"button",0),i.dc("click",(function(){return e.selectButton()})),i.Vb(1,"mat-icon"),i.Ec(2),i.Ub(),i.Ub()),2&t&&(i.Eb(e.item.class),i.oc("disabled",e.disabled),i.Cb(2),i.Fc(e.item.icon))},directives:[r.a,o.a],styles:[".md-left[_ngcontent-%COMP%]{border-radius:10px 0 0 10px;border-right:1px solid hsla(0,0%,90.2%,.96)}.md-middle[_ngcontent-%COMP%]{border-radius:0}.md-right[_ngcontent-%COMP%]{border-radius:0 10px 10px 0;border-left:1px solid hsla(0,0%,90.2%,.96)}"]}),t})()}}]);