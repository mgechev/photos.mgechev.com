"use strict";(self.webpackChunkphoto_mgechev_com=self.webpackChunkphoto_mgechev_com||[]).push([[859],{859:(O,d,e)=>{e.r(d),e.d(d,{PhotosModule:()=>j});var c=e(583),g=e(353),i=e(639),m=e(4);function f(t,n){if(1&t&&i._UZ(0,"app-photo",3),2&t){const o=n.$implicit,s=i.oxw(2);i.Udp("margin",s.margin,"px"),i.Q6J("alt",o.alt)("width",o.width)("height",o.height)("src",o.src)}}function w(t,n){if(1&t&&(i.TgZ(0,"div",1),i.YNc(1,f,1,6,"app-photo",2),i.qZA()),2&t){const o=n.$implicit;i.xp6(1),i.Q6J("ngForOf",o)}}let C=(()=>{class t{constructor(){this._columnWidth=0,this.margin=0,this.grid=[]}set config(o){const{columns:s,photos:l,margin:r}=o;this._columnWidth=o.columnWidth,this.margin=r;let h=0;this.grid=[];for(let a=0;a<s;a++)this.grid.push([]);l.forEach(a=>{h%=s,this.grid[h]=this.grid[h]||[];const G=P(this.grid);this.grid[G].push(this._createGridPhoto(a))}),console.log(this.grid)}_createGridPhoto(o){const s={alt:o.alt,src:o.src,width:o.width,height:o.height};return s.width>this._columnWidth&&(s.height=s.height*(this._columnWidth/s.width),s.width=this._columnWidth),s}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-photo-grid"]],inputs:{config:"config"},decls:1,vars:1,consts:[["class","column",4,"ngFor","ngForOf"],[1,"column"],[3,"alt","width","height","src","margin",4,"ngFor","ngForOf"],[3,"alt","width","height","src"]],template:function(o,s){1&o&&i.YNc(0,w,2,1,"div",0),2&o&&i.Q6J("ngForOf",s.grid)},directives:[c.sg,m.m],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;margin:auto}.column[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})();const P=t=>{let n=0,o=1/0;return t.forEach((s,l)=>{let r=0;s.forEach(h=>{r+=h.height}),r<o&&(n=l,o=r)}),n};let y=(()=>{class t{constructor(o){this._cdr=o,this.config=p}ngOnInit(){window.onresize=()=>{this.config=JSON.parse(JSON.stringify(p)),this.config.columnWidth=u(25),this._cdr.detectChanges()}}ngOnDestroy(){window.onresize=null}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(i.sBO))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-photos"]],decls:1,vars:1,consts:[[3,"config"]],template:function(o,s){1&o&&i._UZ(0,"app-photo-grid",0),2&o&&i.Q6J("config",s.config)},directives:[C],styles:["[_nghost-%COMP%]{display:flex}"]}),t})();const u=t=>t*Math.max(document.documentElement.clientWidth,window.innerWidth||0)/100,p={columnWidth:u(25),columns:3,margin:10,photos:[{alt:"Painted ladies in San Francisco, California",height:923,width:1500,src:"/assets/painted-ladies.jpg"},{alt:"Sunset over the Financial District in San Francisco, California",height:1033,width:1500,src:"/assets/fidi-sunset.jpg"},{alt:"View from Russian Hill in San Francisco, California",height:1500,width:1e3,src:"/assets/russian.jpg"},{alt:"Nob Hill in San Francisco, California",height:1e3,width:1500,src:"/assets/nob-hill.jpg"},{alt:"Butterfly beach in Santa Barbara, California",height:1e3,width:1500,src:"/assets/butterfly.jpg"},{alt:"Fireworks over the Painted ladies in San Francisco, California",height:1e3,width:1500,src:"/assets/painted-ladies-fireworks.jpg"},{alt:"Palace of Fine Arts in San Francisco, California",height:1e3,width:1500,src:"/assets/palace.jpg"},{alt:"Ferry building in San Francisco, California",height:1e3,width:1500,src:"/assets/ferry.jpg"},{alt:"Golden Gate Bridge in San Francisco, California",height:1e3,width:1500,src:"/assets/golden.jpg"},{alt:"The top of the Broadway tunnel in San Francisco, California",height:1e3,width:1500,src:"/assets/broadway.jpg"}]},F=[{path:"",component:y}];let v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[g.Bz.forChild(F)],g.Bz]}),t})();var S=e(727);let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[S.K,c.ez]]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[c.ez,M,v]]}),t})()}}]);