function _createForOfIteratorHelper(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/prD":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("pFs6"),a=function(){function t(e,n,i,a,r,o){_classCallCheck(this,t),this.id=e,this.code=n,this.name=i,this.url=a,this.thumbnail=r,this.anime=o,this.id=e,this.code=n,this.name=i,this.url=a,this.thumbnail=r,this.anime=o}return _createClass(t,[{key:"getInformation",value:function(){return"NUM: "+this.id}},{key:"getType",value:function(){return i.g.ova}}]),t}()},"6nr9":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("RXdi"),a=n("pFs6"),r=n("fXoL"),o=n("n90K"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.storageService=e,this.initCurrent()}return _createClass(t,[{key:"initCurrent",value:function(){this.currentType=this.storageService.retrieve(i.c)||a.e,console.log("XE",this.currentType)}},{key:"setType",value:function(t){this.storageService.store(i.c,t),this.initCurrent()}},{key:"getType",value:function(){return this.currentType}},{key:"removeAllData",value:function(){this.storageService.remove(i.a),this.storageService.remove(i.d)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Zb(o.a))},t.\u0275prov=r.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"D+pG":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("pFs6"),a=function(){function t(e,n,i,a,r,o,c,s){_classCallCheck(this,t),this.id=e,this.code=n,this.name=i,this.url=a,this.thumbnail=r,this.season=o,this.season_name=c,this.anime=s,this.id=e,this.code=n,this.name=i,this.url=a,this.thumbnail=r,this.season=o,this.season_name=c,this.anime=s}return _createClass(t,[{key:"getInformation",value:function(){return"EP: ".concat(this.code," - TEMP: ").concat(this.season)}},{key:"getType",value:function(){return i.g.chapter}}]),t}()},RBLp:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),a=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e,n){return e&&""!==e?t.filter((function(t){var i,a=_createForOfIteratorHelper(n);try{for(a.s();!(i=a.n()).done;){var r=i.value;if(t[r]&&t[r].toString().toLowerCase().includes(e))return!0}}catch(o){a.e(o)}finally{a.f()}return!1})):t}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Ob({name:"filterChapters",type:t,pure:!0}),t}()},RXdi:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return u}));var i=n("/prD"),a=n("D+pG"),r=n("otvB"),o="my_anime_list_chelosky_favorites",c="my_anime_list_chelosky_watched",s="my_anime_list_chelosky_view_type",u={ova:{code:"OVA",generate:function(t){return new i.a(t.id,t.code,t.name,t.url,t.thumbnail,t.anime)}},movie:{code:"MOVIE",generate:function(t){return new r.a(t.id,t.code,t.name,t.url,t.thumbnail,t.anime)}},chapter:{code:"CHAPTER",generate:function(t){return new a.a(t.id,t.code,t.name,t.url,t.thumbnail,t.season,t.season_name,t.anime)}}}},RZmA:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("fXoL"),a=n("XNiG"),r=n("Kj3r"),o=n("/uUt"),c=n("pFs6"),s=n("3Pt+"),u=function(){var t=function(){function t(){_classCallCheck(this,t),this.valueForm="",this.valueModelChanged=new a.a,this.placeHolder="Buscar...",this.valueChange=new i.o}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.valueSub$=this.valueModelChanged.pipe(Object(r.a)(c.h),Object(o.a)()).subscribe((function(e){t.valueForm=e,t.valueChange.emit(t.valueForm)}))}},{key:"ngOnDestroy",value:function(){this.valueSub$.unsubscribe()}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-search"]],inputs:{placeHolder:"placeHolder"},outputs:{valueChange:"valueChange"},decls:8,vars:2,consts:[[1,"row"],[1,"col-sm-12","mb-3"],[1,"input-group"],[1,"input-group-prepend"],["id","basic-addon1",1,"input-group-text"],[1,"material-icons"],["name","search-inp","type","text","aria-label","Search",1,"form-control",3,"placeholder","ngModel","ngModelChange"]],template:function(t,e){1&t&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"form",2),i.Vb(3,"div",3),i.Vb(4,"span",4),i.Vb(5,"span",5),i.Ec(6," search "),i.Ub(),i.Ub(),i.Ub(),i.Vb(7,"input",6),i.dc("ngModelChange",(function(t){return e.valueModelChanged.next(t)})),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Cb(7),i.oc("placeholder",e.placeHolder)("ngModel",e.valueForm))},directives:[s.n,s.j,s.k,s.c,s.i,s.l],styles:[""]}),t}()},UX7N:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,a,r=n("lJxs"),o=n("pFs6"),c=n("/prD"),s=n("otvB"),u=n("D+pG"),l=n("fXoL"),h=n("tk/3"),f=((a=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"get",value:function(t,e){var n=this.getHeaders();return this.http.get(t,{headers:n,params:e,observe:"response"})}},{key:"post",value:function(t,e){var n=this.getHeaders();return this.http.post(t,e,{headers:n,observe:"response"})}},{key:"put",value:function(t,e){var n=this.getHeaders();return this.http.put(t,e,{headers:n,observe:"response"})}},{key:"getHeaders",value:function(){return new h.c}}]),t}()).\u0275fac=function(t){return new(t||a)(l.Zb(h.a))},a.\u0275prov=l.Lb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),d=((i=function(){function t(e){_classCallCheck(this,t),this.dataService=e,this.animeList=[],this.generateObject={chapters:function(t,e){return new u.a(t.id,t.code,t.name,t.url,t.thumbnail,t.season,t.season_name,e)},movies:function(t,e){return new s.a(t.id,t.code,t.name,t.url,t.thumbnail,e)},ovas:function(t,e){return new c.a(t.id,t.code,t.name,t.url,t.thumbnail,e)}}}return _createClass(t,[{key:"getAnimeData",value:function(t,e){var n=this;return this.dataService.get("".concat(o.b).concat(o.a[t].endpoint)).pipe(Object(r.a)((function(i){var a=o.a[t].get(i)[e].map((function(i){return n.generateObject[e](i,t)}));return n.animeList=a,a})))}},{key:"generateDirectDownloadLink",value:function(t){return this.dataService.post(o.b+"download",{url:t.url}).pipe(Object(r.a)((function(t){return t.body})))}}]),t}()).\u0275fac=function(t){return new(t||i)(l.Zb(f))},i.\u0275prov=l.Lb({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},azFQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("fXoL"),a=n("pFs6"),r=n("ofXK"),o=n("tGiV");function c(t,e){if(1&t){var n=i.Wb();i.Vb(0,"app-button-group",4),i.dc("selectEvent",(function(t){return i.xc(n),i.hc().changeType(t)})),i.Ub()}if(2&t){var a=e.$implicit,r=i.hc();i.oc("item",a)("disabled",r.isCurrent(a.value))}}var s=function(){var t=function(){function t(){_classCallCheck(this,t),this.types=a.d,this.currentType=a.e,this.typeListChange=new i.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"isCurrent",value:function(t){return t===this.currentType}},{key:"changeType",value:function(t){this.currentType=t,this.typeListChange.emit(this.currentType)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-title-chapters"]],inputs:{currentType:"currentType",title:"title"},outputs:{typeListChange:"typeListChange"},decls:7,vars:2,consts:[[1,"row"],[1,"col-sm-12","title-content"],[1,"btn-group"],[3,"item","disabled","selectEvent",4,"ngFor","ngForOf"],[3,"item","disabled","selectEvent"]],template:function(t,e){1&t&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"h1"),i.Ec(3),i.Ub(),i.Vb(4,"div",2),i.Dc(5,c,1,2,"app-button-group",3),i.Ub(),i.Ub(),i.Ub(),i.Qb(6,"hr")),2&t&&(i.Cb(3),i.Fc(e.title),i.Cb(2),i.oc("ngForOf",e.types))},directives:[r.k,o.a],styles:[".title-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}h1[_ngcontent-%COMP%]{line-height:1.1;color:inherit}.title-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{align-self:flex-start;margin:auto 0}.title-content[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{margin-left:auto}"]}),t}()},gZnd:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),a=function(){var t=function(){function t(){_classCallCheck(this,t),this.videoList=[]}return _createClass(t,[{key:"getCurrentIndex",value:function(t){return this.videoList.findIndex((function(e){return t.code==e.code&&t.anime==e.anime}))}},{key:"getNext",value:function(t){var e=this.getCurrentIndex(t);return-1!=e&&e<this.videoList.length?this.videoList[e+1]:null}},{key:"getPrevious",value:function(t){var e=this.getCurrentIndex(t);return-1!=e&&e>0?this.videoList[e-1]:null}},{key:"setVideoList",value:function(t){this.videoList=t}},{key:"getNextPrevious",value:function(t){return{previous:this.getPrevious(t),next:this.getNext(t)}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},iGEw:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y}));var i,a,r=n("pFs6"),o=n("fXoL"),c=n("ofXK"),s=n("mrSG"),u=n("0IaG"),l=n("UX7N"),h=n("kUbd"),f=n("RXdi"),d=n("XNiG"),p=n("n90K"),v=((i=function(){function t(e){_classCallCheck(this,t),this.storageService=e,this.handleWatched$=new d.a,this.getLocalInformation()}return _createClass(t,[{key:"getLocalInformation",value:function(){this.watchedChapters=this.storageService.retrieve(f.d)||[]}},{key:"setInformation",value:function(){this.storageService.store(f.d,this.watchedChapters),this.handleWatched$.next()}},{key:"isDuplicated",value:function(t){return-1!=this.watchedChapters.findIndex((function(e){return e.code==t.code&&e.anime==t.anime}))}},{key:"getHandle",value:function(){return this.handleWatched$.asObservable()}},{key:"isWatched",value:function(t){return-1!=this.watchedChapters.findIndex((function(e){return e.code==t.code&&e.anime==t.anime}))}},{key:"setWatched",value:function(t){var e={code:t.code,anime:t.anime};this.isDuplicated(e)||(this.watchedChapters.push(e),this.setInformation())}},{key:"removeWatched",value:function(t){var e=this.watchedChapters.findIndex((function(e){return e.code==t.code&&e.anime==t.anime}));-1!=e&&(this.watchedChapters.splice(e,1),this.setInformation())}}]),t}()).\u0275fac=function(t){return new(t||i)(o.Zb(p.a))},i.\u0275prov=o.Lb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),b=n("gZnd"),g=n("bTqV"),m=n("NFeN"),y=n("Xa2L"),C=n("4w57"),k=n("cqME"),w=n("VKRg"),_=n("v2j/"),x=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e){return r.a[e].validName(t)}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275pipe=o.Ob({name:"cleanChapterName",type:a,pure:!0}),a);function O(t,e){1&t&&o.Qb(0,"mat-spinner")}function P(t,e){if(1&t){var n=o.Wb();o.Vb(0,"vg-player",7),o.dc("onPlayerReady",(function(t){return o.xc(n),o.hc().onPlayerReady(t)})),o.Qb(1,"vg-overlay-play"),o.Qb(2,"vg-buffering"),o.Vb(3,"vg-controls",8),o.Qb(4,"vg-play-pause"),o.Qb(5,"vg-playback-button"),o.Qb(6,"vg-time-display",9),o.Vb(7,"vg-scrub-bar"),o.Qb(8,"vg-scrub-bar-current-time"),o.Qb(9,"vg-scrub-bar-buffering-time"),o.Ub(),o.Qb(10,"vg-time-display",10),o.Qb(11,"vg-mute"),o.Qb(12,"vg-volume"),o.Qb(13,"vg-fullscreen"),o.Ub(),o.Vb(14,"video",11,12),o.Qb(16,"source",13),o.Ub(),o.Ub()}if(2&t){var i=o.tc(15),a=o.hc();o.Cb(3),o.oc("vgAutohide",!0)("vgAutohideTime",1.5),o.Cb(11),o.oc("vgMedia",i),o.Cb(2),o.oc("src",a.urlVideo,o.yc)}}var M,V,S,I=((M=function(){function t(e,n,i,a,r,o){_classCallCheck(this,t),this.animeService=e,this.dialogRef=n,this.favoriteService=i,this.watchedService=a,this.videoPlayerService=r,this.data=o,this.urlVideo="",this.loaded=!1,this.favorite=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.getInformation()}},{key:"getInformation",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaded=!1,this.getCurrentState(),this.getNextPreviousData(),t.next=3,this.animeService.generateDirectDownloadLink(this.data.item).toPromise();case 3:e=t.sent,this.urlVideo=e.direct_link,this.loaded=!0;case 5:case"end":return t.stop()}}),t,this)})))}},{key:"onPlayerReady",value:function(t){this.api=t,this.playSub$=this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this))}},{key:"playVideo",value:function(){this.api&&(this.api.play(),this.watchedService.setWatched(this.data.item))}},{key:"getCurrentState",value:function(){this.favorite=this.favoriteService.isFavorite(this.data.item)}},{key:"handleFavorite",value:function(){this.favorite=!this.favorite,this.favorite?this.favoriteService.setFavorite(this.data.item):this.favoriteService.removeFavorite(this.data.item)}},{key:"getNextPreviousData",value:function(){var t=this.videoPlayerService.getNextPrevious(this.data.item),e=t.previous,n=t.next;this.previous=e,this.next=n,console.log(this.previous),console.log(this.next)}},{key:"goNext",value:function(){console.log("NEXT"),this.data.item=this.next,this.getInformation()}},{key:"goPrevious",value:function(){console.log("PREVIOUS"),this.data.item=this.previous,this.getInformation()}},{key:"ngOnDestroy",value:function(){this.playSub$&&this.playSub$.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||M)(o.Pb(l.a),o.Pb(u.f),o.Pb(h.a),o.Pb(v),o.Pb(b.a),o.Pb(u.a))},M.\u0275cmp=o.Jb({type:M,selectors:[["app-video-player"]],decls:16,vars:12,consts:[["mat-dialog-title","",1,"text-center"],["mat-dialog-content","",1,"container-block"],[4,"ngIf"],[3,"onPlayerReady",4,"ngIf"],["mat-dialog-actions","",1,"btn-final"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"color","click"],[3,"onPlayerReady"],[3,"vgAutohide","vgAutohideTime"],["vgProperty","current","vgFormat","mm:ss"],["vgProperty","total","vgFormat","mm:ss"],["id","singleVideo","preload","auto","crossorigin","",3,"vgMedia"],["media",""],["type","video/mp4",3,"src"]],template:function(t,e){1&t&&(o.Vb(0,"h2",0),o.Ec(1),o.ic(2,"cleanChapterName"),o.Ub(),o.Vb(3,"div",1),o.Dc(4,O,1,0,"mat-spinner",2),o.Dc(5,P,17,4,"vg-player",3),o.Ub(),o.Vb(6,"div",4),o.Vb(7,"button",5),o.dc("click",(function(){return e.goPrevious()})),o.Vb(8,"mat-icon"),o.Ec(9,"keyboard_arrow_left"),o.Ub(),o.Ub(),o.Vb(10,"button",6),o.dc("click",(function(){return e.handleFavorite()})),o.Vb(11,"mat-icon"),o.Ec(12),o.Ub(),o.Ub(),o.Vb(13,"button",5),o.dc("click",(function(){return e.goNext()})),o.Vb(14,"mat-icon"),o.Ec(15,"keyboard_arrow_right"),o.Ub(),o.Ub(),o.Ub()),2&t&&(o.Cb(1),o.Fc(o.kc(2,9,e.data.item.name,e.data.item.anime)),o.Cb(3),o.oc("ngIf",!e.loaded),o.Cb(1),o.oc("ngIf",e.loaded),o.Cb(2),o.Gb("hide-btn",!e.previous),o.Cb(3),o.oc("color",e.favorite?"warn":""),o.Cb(2),o.Fc(e.favorite?"favorite":"favorite_outline"),o.Cb(1),o.Gb("hide-btn",!e.next))},directives:[u.g,u.d,c.l,u.c,g.a,m.a,y.b,C.f,k.a,w.a,_.a,_.e,_.f,_.j,_.h,_.i,_.g,_.d,_.k,_.c,C.e],pipes:[x],styles:[".hide-btn[_ngcontent-%COMP%]{visibility:hidden}"]}),M),E=n("3Pt+"),U=((S=function(){function t(){_classCallCheck(this,t),this.statusChange=new o.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"changeStatus",value:function(){this.statusChange.emit(this.status)}}]),t}()).\u0275fac=function(t){return new(t||S)},S.\u0275cmp=o.Jb({type:S,selectors:[["app-switch"]],inputs:{status:"status"},outputs:{statusChange:"statusChange"},decls:3,vars:2,consts:[[1,"switch"],["type","checkbox",3,"checked","ngModel","ngModelChange"],[1,"slider","round"]],template:function(t,e){1&t&&(o.Vb(0,"label",0),o.Vb(1,"input",1),o.dc("ngModelChange",(function(t){return e.status=t}))("ngModelChange",(function(){return e.changeStatus()})),o.Ub(),o.Qb(2,"span",2),o.Ub()),2&t&&(o.Cb(1),o.oc("checked",e.status)("ngModel",e.status))},directives:[E.a,E.i,E.l],styles:['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:54px;height:28px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:before{position:absolute;transition:.4s}.slider[_ngcontent-%COMP%]:before{content:"";height:20px;width:20px;left:4px;bottom:4px;background-color:#fff}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#17d66d}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #17d66d}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']}),S),F=((V=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||V)},V.\u0275cmp=o.Jb({type:V,selectors:[["app-ribbon-corner"]],inputs:{title:"title"},decls:3,vars:1,consts:[[1,"container__wrapper"],[1,"container__ribbon"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.Ec(2),o.Ub(),o.Ub()),2&t&&(o.Cb(2),o.Gc(" ",e.title," "))},styles:[".container__wrapper[_ngcontent-%COMP%]{left:0;position:absolute;top:0;height:100px;width:100px;overflow:hidden}.container__ribbon[_ngcontent-%COMP%]{z-index:999;left:-64px;position:absolute;top:32px;height:24px;width:206px;transform:rotate(-45deg);background-color:rgba(23,214,109,.7686274509803922);text-align:center;color:#fff}"]}),V);function L(t,e){1&t&&o.Qb(0,"app-ribbon-corner",14),2&t&&o.oc("title","VISTO")}var D,T=((D=function(){function t(){_classCallCheck(this,t),this.favorite=!1,this.watched=!1,this.playEvent=new o.o,this.favoriteEvent=new o.o,this.watchedEvent=new o.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"setFavorite",value:function(){this.favorite=!this.favorite,this.favoriteEvent.emit(this.favorite)}},{key:"setWatched",value:function(){this.watched=!this.watched,this.watchedEvent.emit(this.watched)}},{key:"play",value:function(){this.playEvent.emit()}}]),t}()).\u0275fac=function(t){return new(t||D)},D.\u0275cmp=o.Jb({type:D,selectors:[["app-chapter-item-list"]],inputs:{item:"item",favorite:"favorite",watched:"watched"},outputs:{playEvent:"playEvent",favoriteEvent:"favoriteEvent",watchedEvent:"watchedEvent"},decls:19,vars:13,consts:[[1,"list-group-item"],[1,"list-item",3,"id"],[1,"metadata"],[1,"image"],[3,"title",4,"ngIf"],[1,"img-item",3,"src","alt"],[1,"information"],[1,"text-post"],[1,"text-muted","text-xs"],[1,"control"],[1,"btns"],[1,"material-icons","play",3,"click"],[1,"material-icons","favorite",3,"click"],[3,"status","statusChange"],[3,"title"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.Vb(2,"div",2),o.Vb(3,"div",3),o.Dc(4,L,1,1,"app-ribbon-corner",4),o.Qb(5,"img",5),o.Ub(),o.Vb(6,"div",6),o.Vb(7,"span",7),o.Ec(8),o.ic(9,"cleanChapterName"),o.Ub(),o.Vb(10,"span",8),o.Ec(11),o.Ub(),o.Ub(),o.Ub(),o.Vb(12,"div",9),o.Vb(13,"div",10),o.Vb(14,"span",11),o.dc("click",(function(){return e.play()})),o.Ec(15," play_arrow "),o.Ub(),o.Vb(16,"span",12),o.dc("click",(function(){return e.setFavorite()})),o.Ec(17),o.Ub(),o.Ub(),o.Vb(18,"app-switch",13),o.dc("statusChange",(function(){return e.setWatched()})),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&t&&(o.Cb(1),o.oc("id",e.item.id),o.Cb(3),o.oc("ngIf",e.watched),o.Cb(1),o.oc("src",e.item.thumbnail,o.yc)("alt",e.item.name),o.Cb(3),o.Fc(o.kc(9,10,e.item.name,e.item.anime)),o.Cb(3),o.Fc(e.item.getInformation()),o.Cb(5),o.Gb("heart",e.favorite),o.Cb(1),o.Gc(" ",e.favorite?"favorite":"favorite_outline"," "),o.Cb(1),o.oc("status",e.watched))},directives:[c.l,U,F],pipes:[x],styles:[".list-group-item[_ngcontent-%COMP%]{position:relative;display:block;margin-bottom:-1px;background-color:#fff;border:1px solid #eaeef1;padding:15px;overflow-x:auto}.list-group-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.list-item[_ngcontent-%COMP%]{justify-content:space-between}.list-item[_ngcontent-%COMP%], .metadata[_ngcontent-%COMP%]{display:flex;flex-direction:row}.information[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin-left:10px}.text-post[_ngcontent-%COMP%]{display:block;text-overflow:ellipsis;color:#000;font-style:bold;font-size:15px;min-width:100px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-muted[_ngcontent-%COMP%]{color:#939aa0}.image[_ngcontent-%COMP%]{min-width:100px;max-width:100px;min-height:100px;max-height:100px;display:flex;flex-direction:row;justify-content:center;align-items:center}img[_ngcontent-%COMP%]{width:100%;height:100%}.img-item[_ngcontent-%COMP%]{border:0;border-radius:20%;margin:auto}.control[_ngcontent-%COMP%]{flex-direction:column}.btns[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around}.btns[_ngcontent-%COMP%]{width:100px;flex-direction:row}.btns[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;margin:0;font-size:2rem}span[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]{margin-right:20px}span[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]{margin-left:20px}"]}),D);function X(t,e){1&t&&o.Qb(0,"app-ribbon-corner",12),2&t&&o.oc("title","VISTO")}var Q,j=((Q=function(){function t(){_classCallCheck(this,t),this.favorite=!1,this.watched=!1,this.playEvent=new o.o,this.favoriteEvent=new o.o,this.watchedEvent=new o.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"setFavorite",value:function(){this.favorite=!this.favorite,this.favoriteEvent.emit(this.favorite)}},{key:"setWatched",value:function(){this.watched=!this.watched,this.watchedEvent.emit(this.watched)}},{key:"play",value:function(){this.playEvent.emit()}}]),t}()).\u0275fac=function(t){return new(t||Q)},Q.\u0275cmp=o.Jb({type:Q,selectors:[["app-chapter-item-grid"]],inputs:{item:"item",favorite:"favorite",watched:"watched"},outputs:{playEvent:"playEvent",favoriteEvent:"favoriteEvent",watchedEvent:"watchedEvent"},decls:17,vars:13,consts:[[1,"item-post",3,"id"],[1,"cover"],[3,"title",4,"ngIf"],[1,"overlay","overlay-blur"],[1,"material-icons","play",3,"click"],[1,"material-icons","favorite",3,"click"],["width","150","height","150",1,"img-border",3,"src","alt"],[1,"info"],[1,"text-post"],[1,"info-post"],[1,"text-muted","text-xs","text-post"],[3,"status","statusChange"],[3,"title"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.Dc(2,X,1,1,"app-ribbon-corner",2),o.Vb(3,"div",3),o.Vb(4,"span",4),o.dc("click",(function(){return e.play()})),o.Ec(5," play_arrow "),o.Ub(),o.Vb(6,"span",5),o.dc("click",(function(){return e.setFavorite()})),o.Ec(7),o.Ub(),o.Ub(),o.Qb(8,"img",6),o.Ub(),o.Vb(9,"div",7),o.Vb(10,"div",8),o.Ec(11),o.ic(12,"cleanChapterName"),o.Ub(),o.Vb(13,"div",9),o.Vb(14,"div",10),o.Ec(15),o.Ub(),o.Vb(16,"app-switch",11),o.dc("statusChange",(function(){return e.setWatched()})),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&t&&(o.oc("id",e.item.id),o.Cb(2),o.oc("ngIf",e.watched),o.Cb(4),o.Gb("heart",e.favorite),o.Cb(1),o.Gc(" ",e.favorite?"favorite":"favorite_outline"," "),o.Cb(1),o.oc("src",e.item.thumbnail,o.yc)("alt",e.item.name),o.Cb(3),o.Gc(" ",o.kc(12,10,e.item.name,e.item.anime)," "),o.Cb(4),o.Gc(" ",e.item.getInformation()," "),o.Cb(1),o.oc("status",e.watched))},directives:[c.l,U,F],pipes:[x],styles:[".item-post[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cover[_ngcontent-%COMP%]{position:relative}.img-border[_ngcontent-%COMP%]{border-radius:2px 2px 2px 2px}img[_ngcontent-%COMP%]{border:0;width:100%;height:auto}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);color:#fff;display:flex;flex-direction:row;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.overlay[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]{margin-right:10px}.overlay[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]{margin-left:10px}.overlay-blur[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.overlay[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{transform:translateY(20px);transition:transform .3s}.overlay[_ngcontent-%COMP%]:hover{opacity:1}.overlay[_ngcontent-%COMP%]:hover > *[_ngcontent-%COMP%]{transform:translateY(0)}.overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0;font-size:3rem}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:10px;margin-bottom:30px;min-height:38px}.text-post[_ngcontent-%COMP%]{display:block;text-overflow:ellipsis;color:#545a5f;text-decoration:none}.info-post[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:10px;align-items:center;justify-content:space-between}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-muted[_ngcontent-%COMP%]{color:#939aa0}"]}),Q);function G(t,e){if(1&t){var n=o.Wb();o.Vb(0,"app-chapter-item-list",2),o.dc("playEvent",(function(){return o.xc(n),o.hc().play()}))("favoriteEvent",(function(t){return o.xc(n),o.hc().handleFavorite(t)}))("watchedEvent",(function(t){return o.xc(n),o.hc().handleWatched(t)})),o.Ub()}if(2&t){var i=o.hc();o.oc("item",i.item)("favorite",i.favorite)("watched",i.watched)}}function N(t,e){if(1&t){var n=o.Wb();o.Vb(0,"app-chapter-item-grid",2),o.dc("playEvent",(function(){return o.xc(n),o.hc().play()}))("favoriteEvent",(function(t){return o.xc(n),o.hc().handleFavorite(t)}))("watchedEvent",(function(t){return o.xc(n),o.hc().handleWatched(t)})),o.Ub()}if(2&t){var i=o.hc();o.oc("item",i.item)("favorite",i.favorite)("watched",i.watched)}}var W,$=((W=function(){function t(e,n,i){_classCallCheck(this,t),this.dialog=e,this.favoriteService=n,this.watchedService=i,this.type=r.e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.subFavorite$=this.favoriteService.getHandle().subscribe((function(e){return t.getCurrentState()})),this.subWatched$=this.watchedService.getHandle().subscribe((function(e){return t.getCurrentState()})),this.getCurrentState()}},{key:"getCurrentState",value:function(){this.favorite=this.favoriteService.isFavorite(this.item),this.watched=this.watchedService.isWatched(this.item)}},{key:"play",value:function(){var t=this;this.dialog.open(I,{panelClass:"my-class",data:{item:this.item,favorite:this.favorite}}).afterClosed().subscribe((function(e){t.getCurrentState()}))}},{key:"handleFavorite",value:function(t){t?this.favoriteService.setFavorite(this.item):this.favoriteService.removeFavorite(this.item),this.getCurrentState()}},{key:"handleWatched",value:function(t){t?this.watchedService.setWatched(this.item):this.watchedService.removeWatched(this.item),this.getCurrentState()}},{key:"getGrid",value:function(){return r.e}},{key:"getList",value:function(){return r.f}},{key:"ngOnDestroy",value:function(){this.subFavorite$&&this.subFavorite$.unsubscribe(),this.subWatched$&&this.subWatched$.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||W)(o.Pb(u.b),o.Pb(h.a),o.Pb(v))},W.\u0275cmp=o.Jb({type:W,selectors:[["app-chapter-item"]],inputs:{item:"item",type:"type"},decls:3,vars:3,consts:[[1,"item-cont",3,"ngSwitch"],[3,"item","favorite","watched","playEvent","favoriteEvent","watchedEvent",4,"ngSwitchCase"],[3,"item","favorite","watched","playEvent","favoriteEvent","watchedEvent"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Dc(1,G,1,3,"app-chapter-item-list",1),o.Dc(2,N,1,3,"app-chapter-item-grid",1),o.Ub()),2&t&&(o.oc("ngSwitch",e.type),o.Cb(1),o.oc("ngSwitchCase",e.getList()),o.Cb(1),o.oc("ngSwitchCase",e.getGrid()))},directives:[c.n,c.o,T,j],styles:[".item-cont[_ngcontent-%COMP%]{position:relative}"]}),W);function A(t,e){if(1&t&&(o.Vb(0,"div"),o.Qb(1,"app-chapter-item",2),o.Ub()),2&t){var n=e.$implicit,i=o.hc();o.Cb(1),o.oc("item",n)("type",i.getType())}}var J,R=((J=function(){function t(){_classCallCheck(this,t),this.data=[]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getType",value:function(){return r.f}}]),t}()).\u0275fac=function(t){return new(t||J)},J.\u0275cmp=o.Jb({type:J,selectors:[["app-chapter-list"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"row","list-group","list-group-lg"],[4,"ngFor","ngForOf"],[3,"item","type"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Dc(1,A,2,2,"div",1),o.Ub()),2&t&&(o.Cb(1),o.oc("ngForOf",e.data))},directives:[c.k,$],styles:[".list-group[_ngcontent-%COMP%]{border-radius:2px;padding-left:0;margin-bottom:20px;min-width:300px}"]}),J);function H(t,e){if(1&t&&o.Qb(0,"app-chapter-item",2),2&t){var n=e.$implicit,i=o.hc();o.oc("item",n)("type",i.getType())}}var K,Z=((K=function(){function t(){_classCallCheck(this,t),this.data=[]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getType",value:function(){return r.e}}]),t}()).\u0275fac=function(t){return new(t||K)},K.\u0275cmp=o.Jb({type:K,selectors:[["app-chapter-grid"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"row"],["class","col-xs-12 col-sm-6 col-md-4 col-lg-3",3,"item","type",4,"ngFor","ngForOf"],[1,"col-xs-12","col-sm-6","col-md-4","col-lg-3",3,"item","type"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Dc(1,H,1,2,"app-chapter-item",1),o.Ub()),2&t&&(o.Cb(1),o.oc("ngForOf",e.data))},directives:[c.k,$],styles:[""]}),K);function z(t,e){if(1&t&&o.Qb(0,"app-chapter-list",2),2&t){var n=o.hc();o.oc("data",n.data)}}function B(t,e){if(1&t&&o.Qb(0,"app-chapter-grid",2),2&t){var n=o.hc();o.oc("data",n.data)}}var q,Y=((q=function(){function t(){_classCallCheck(this,t),this.typeList=r.f,this.data=[]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getGrid",value:function(){return r.e}},{key:"getList",value:function(){return r.f}}]),t}()).\u0275fac=function(t){return new(t||q)},q.\u0275cmp=o.Jb({type:q,selectors:[["app-chapters-container"]],inputs:{typeList:"typeList",data:"data"},decls:3,vars:3,consts:[[3,"ngSwitch"],[3,"data",4,"ngSwitchCase"],[3,"data"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Dc(1,z,1,1,"app-chapter-list",1),o.Dc(2,B,1,1,"app-chapter-grid",1),o.Ub()),2&t&&(o.oc("ngSwitch",e.typeList),o.Cb(1),o.oc("ngSwitchCase",e.getList()),o.Cb(1),o.oc("ngSwitchCase",e.getGrid()))},directives:[c.n,c.o,R,Z],styles:[""]}),q)},kUbd:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("RXdi"),a=n("XNiG"),r=n("fXoL"),o=n("n90K"),c=n("ofXK"),s=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.storageService=e,this.datePipe=n,this.handleFavorite$=new a.a,this.getLocalInformation()}return _createClass(t,[{key:"getLocalInformation",value:function(){this.favorites=this.storageService.retrieve(i.a)||[]}},{key:"getCurrentDate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dd/MM/yyyy, h:mm:ss a";return this.datePipe.transform(new Date,t)}},{key:"setInformation",value:function(){this.storageService.store(i.a,this.favorites),this.handleFavorite$.next()}},{key:"isDuplicated",value:function(t){return-1!=this.favorites.findIndex((function(e){return e.code==t.code&&e.anime==t.anime}))}},{key:"updateFavorites",value:function(t){var e=this;this.favorites=t.map((function(t){return Object.assign(Object.assign({},t),{create_at:e.getCurrentDate(),type:t.getType()})})),this.setInformation()}},{key:"getFavorites",value:function(){return this.favorites.map((function(t){return i.b[t.type].generate(t)}))}},{key:"getHandle",value:function(){return this.handleFavorite$.asObservable()}},{key:"isFavorite",value:function(t){return-1!=this.favorites.findIndex((function(e){return e.code==t.code&&e.anime==t.anime}))}},{key:"setFavorite",value:function(t){var e=Object.assign(Object.assign({},t),{create_at:this.getCurrentDate(),type:t.getType()});this.isDuplicated(e)||(this.favorites.push(e),this.setInformation())}},{key:"removeFavorite",value:function(t){var e=this.favorites.findIndex((function(e){return e.code==t.code&&e.anime==t.anime}));-1!=e&&(this.favorites.splice(e,1),this.setInformation())}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Zb(o.a),r.Zb(c.e))},t.\u0275prov=r.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},mrSG:function(t,e,n){"use strict";function i(t,e,n,i){return new(n||(n=Promise))((function(a,r){function o(t){try{s(i.next(t))}catch(e){r(e)}}function c(t){try{s(i.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,c)}s((i=i.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return i}))},n90K:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),a=function(){var t=function(){function t(){_classCallCheck(this,t),this.storage=localStorage}return _createClass(t,[{key:"retrieve",value:function(t){var e=this.storage.getItem(t);if(e&&"undefined"!==e)return JSON.parse(e)}},{key:"store",value:function(t,e){this.storage.setItem(t,JSON.stringify(e))}},{key:"remove",value:function(t){this.storage.removeItem(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},otvB:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("pFs6"),a=function(){function t(e,n,i,a,r,o){_classCallCheck(this,t),this.id=e,this.code=n,this.name=i,this.url=a,this.thumbnail=r,this.anime=o,this.id=e,this.code=n,this.name=i,this.url=a,this.thumbnail=r,this.anime=o}return _createClass(t,[{key:"getInformation",value:function(){return"C\xd3DIGO: "+this.code}},{key:"getType",value:function(){return i.g.movie}}]),t}()},qQYQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL"),a=n("Xa2L"),r=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-loading"]],decls:2,vars:0,consts:[[1,"wrapper"]],template:function(t,e){1&t&&(i.Vb(0,"div",0),i.Qb(1,"mat-spinner"),i.Ub())},directives:[a.b],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100vh - 20px)}"]}),t}()},tGiV:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fXoL"),a=n("bTqV"),r=n("NFeN"),o=function(){var t=function(){function t(){_classCallCheck(this,t),this.selectEvent=new i.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"selectButton",value:function(){this.selectEvent.emit(this.item.value)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-button-group"]],inputs:{disabled:"disabled",item:"item"},outputs:{selectEvent:"selectEvent"},decls:3,vars:4,consts:[["color","primary","mat-raised-button","",3,"disabled","click"]],template:function(t,e){1&t&&(i.Vb(0,"button",0),i.dc("click",(function(){return e.selectButton()})),i.Vb(1,"mat-icon"),i.Ec(2),i.Ub(),i.Ub()),2&t&&(i.Eb(e.item.class),i.oc("disabled",e.disabled),i.Cb(2),i.Fc(e.item.icon))},directives:[a.a,r.a],styles:[".md-left[_ngcontent-%COMP%]{border-radius:10px 0 0 10px;border-right:1px solid hsla(0,0%,90.2%,.96)}.md-middle[_ngcontent-%COMP%]{border-radius:0}.md-right[_ngcontent-%COMP%]{border-radius:0 10px 10px 0;border-left:1px solid hsla(0,0%,90.2%,.96)}"]}),t}()}}]);