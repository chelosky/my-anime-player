function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/prD":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("pFs6"),r=function(){function t(e,n,i,r,o,a){_classCallCheck(this,t),this.id=e,this.code=n,this.name=i,this.url=r,this.thumbnail=o,this.anime=a,this.id=e,this.code=n,this.name=i,this.url=r,this.thumbnail=o,this.anime=a}return _createClass(t,[{key:"getInformation",value:function(){return"NUM: "+this.id}},{key:"getType",value:function(){return i.g.ova}}]),t}()},"6nr9":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("RXdi"),r=n("pFs6"),o=n("fXoL"),a=n("n90K"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.storageService=e,this.initCurrent()}return _createClass(t,[{key:"initCurrent",value:function(){this.currentType=this.storageService.retrieve(i.c)?this.storageService.retrieve(i.c):r.e}},{key:"setType",value:function(t){this.storageService.store(i.c,t),this.initCurrent()}},{key:"getType",value:function(){return this.currentType}},{key:"removeAllData",value:function(){this.storageService.remove(i.a),this.storageService.remove(i.d)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Zb(a.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"D+pG":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("pFs6"),r=function(){function t(e,n,i,r,o,a,c,s){_classCallCheck(this,t),this.id=e,this.code=n,this.name=i,this.url=r,this.thumbnail=o,this.season=a,this.season_name=c,this.anime=s,this.id=e,this.code=n,this.name=i,this.url=r,this.thumbnail=o,this.season=a,this.season_name=c,this.anime=s}return _createClass(t,[{key:"getInformation",value:function(){return"EP: ".concat(this.code," - TEMP: ").concat(this.season)}},{key:"getType",value:function(){return i.g.chapter}}]),t}()},RXdi:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return u}));var i=n("/prD"),r=n("D+pG"),o=n("otvB"),a="my_anime_list_chelosky_favorites",c="my_anime_list_chelosky_watched",s="my_anime_list_chelosky_view_type",u={ova:{code:"OVA",generate:function(t){return new i.a(t.id,t.code,t.name,t.url,t.thumbnail,t.anime)}},movie:{code:"MOVIE",generate:function(t){return new o.a(t.id,t.code,t.name,t.url,t.thumbnail,t.anime)}},chapter:{code:"CHAPTER",generate:function(t){return new r.a(t.id,t.code,t.name,t.url,t.thumbnail,t.season,t.season_name,t.anime)}}}},n90K:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL"),r=function(){var t=function(){function t(){_classCallCheck(this,t),this.storage=localStorage}return _createClass(t,[{key:"retrieve",value:function(t){var e=this.storage.getItem(t);if(e&&"undefined"!==e)return JSON.parse(e)}},{key:"store",value:function(t,e){this.storage.setItem(t,JSON.stringify(e))}},{key:"remove",value:function(t){this.storage.removeItem(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},otvB:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("pFs6"),r=function(){function t(e,n,i,r,o,a){_classCallCheck(this,t),this.id=e,this.code=n,this.name=i,this.url=r,this.thumbnail=o,this.anime=a,this.id=e,this.code=n,this.name=i,this.url=r,this.thumbnail=o,this.anime=a}return _createClass(t,[{key:"getInformation",value:function(){return"C\xd3DIGO: "+this.code}},{key:"getType",value:function(){return i.g.movie}}]),t}()},tGiV:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),r=n("bTqV"),o=n("NFeN"),a=function(){var t=function(){function t(){_classCallCheck(this,t),this.selectEvent=new i.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"selectButton",value:function(){this.selectEvent.emit(this.item.value)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-button-group"]],inputs:{disabled:"disabled",item:"item"},outputs:{selectEvent:"selectEvent"},decls:3,vars:4,consts:[["color","primary","mat-raised-button","",3,"disabled","click"]],template:function(t,e){1&t&&(i.Vb(0,"button",0),i.dc("click",(function(){return e.selectButton()})),i.Vb(1,"mat-icon"),i.Ec(2),i.Ub(),i.Ub()),2&t&&(i.Eb(e.item.class),i.oc("disabled",e.disabled),i.Cb(2),i.Fc(e.item.icon))},directives:[r.a,o.a],styles:[".md-left[_ngcontent-%COMP%]{border-radius:10px 0 0 10px;border-right:1px solid hsla(0,0%,90.2%,.96)}.md-middle[_ngcontent-%COMP%]{border-radius:0}.md-right[_ngcontent-%COMP%]{border-radius:0 10px 10px 0;border-left:1px solid hsla(0,0%,90.2%,.96)}"]}),t}()},yPrK:function(t,e,n){"use strict";n.r(e),n.d(e,"SettingsModule",(function(){return y}));var i,r=n("ofXK"),o=n("7G6C"),a=n("tyNb"),c=n("pFs6"),s=n("fXoL"),u=n("6nr9"),l=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=s.Jb({type:i,selectors:[["app-title"]],inputs:{title:"title"},decls:5,vars:1,consts:[[1,"row"],[1,"col-sm-12","title-content"]],template:function(t,e){1&t&&(s.Vb(0,"div",0),s.Vb(1,"div",1),s.Vb(2,"h1"),s.Ec(3),s.Ub(),s.Ub(),s.Ub(),s.Qb(4,"hr")),2&t&&(s.Cb(3),s.Gc(" ",e.title," "))},styles:[".title-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}h1[_ngcontent-%COMP%]{line-height:1.1;color:inherit}.title-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{align-self:flex-start;margin:auto 0}"]}),i),d=n("bTqV"),h=n("NFeN"),f=n("tGiV");function p(t,e){if(1&t){var n=s.Wb();s.Vb(0,"app-button-group",8),s.dc("selectEvent",(function(t){return s.xc(n),s.hc().changeType(t)})),s.Ub()}if(2&t){var i=e.$implicit,r=s.hc();s.oc("item",i)("disabled",r.isCurrent(i.value))}}var b,m,v=[{path:"",component:(b=function(){function t(e){_classCallCheck(this,t),this.settingsService=e,this.types=c.d}return _createClass(t,[{key:"ngOnInit",value:function(){this.getCurrent()}},{key:"getCurrent",value:function(){this.currentType=this.settingsService.getType()}},{key:"isCurrent",value:function(t){return t===this.currentType}},{key:"changeType",value:function(t){this.currentType=t,this.settingsService.setType(t)}},{key:"deleteAllData",value:function(){this.settingsService.removeAllData()}}]),t}(),b.\u0275fac=function(t){return new(t||b)(s.Pb(u.a))},b.\u0275cmp=s.Jb({type:b,selectors:[["app-settings"]],decls:14,vars:2,consts:[[3,"title"],[1,"main"],[1,"type-cont"],[1,"info"],[1,"btn-group"],[3,"item","disabled","selectEvent",4,"ngFor","ngForOf"],[1,"data-cont"],["mat-icon-button","","color","warn","aria-label","Delete all data",3,"click"],[3,"item","disabled","selectEvent"]],template:function(t,e){1&t&&(s.Qb(0,"app-title",0),s.Vb(1,"div",1),s.Vb(2,"div",2),s.Vb(3,"label",3),s.Ec(4," Tipo de vista "),s.Ub(),s.Vb(5,"div",4),s.Dc(6,p,1,2,"app-button-group",5),s.Ub(),s.Ub(),s.Vb(7,"div",6),s.Vb(8,"label"),s.Ec(9," Borrar data "),s.Ub(),s.Vb(10,"div"),s.Vb(11,"button",7),s.dc("click",(function(){return e.deleteAllData()})),s.Vb(12,"mat-icon"),s.Ec(13,"delete"),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.oc("title","Configuraciones"),s.Cb(6),s.oc("ngForOf",e.types))},directives:[l,r.k,d.a,h.a,f.a],styles:[".main[_ngcontent-%COMP%]{margin:1.5em auto;max-width:30em;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:3px 3px 6px #ddd,-3px 3px 6px #ddd}.data-cont[_ngcontent-%COMP%], .type-cont[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;min-width:15em;min-height:7em;background-color:#fff}label[_ngcontent-%COMP%]{text-align:center;padding:1em;display:block;color:#7a7572;font-weight:700}.type-cont[_ngcontent-%COMP%]{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:1px solid rgba(0,0,0,.25)}.data-cont[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-bottom:1px solid rgba(0,0,0,.25)}.btn-group[_ngcontent-%COMP%]{width:auto;margin-right:10px}"]}),b),data:{title:"Configuraciones"}},{path:"**",pathMatch:"full",redirectTo:""}],g=n("j1ZV"),y=((m=function t(){_classCallCheck(this,t)}).\u0275mod=s.Nb({type:m}),m.\u0275inj=s.Mb({factory:function(t){return new(t||m)},imports:[[r.c,o.a,g.a,a.c.forChild(v)]]}),m)}}]);