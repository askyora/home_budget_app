"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9398],{9398:(v,g,s)=>{s.r(g),s.d(g,{Tab1PageModule:()=>C});var t=s(4556),c=s(6895),a=s(433),_=s(581),u=s(1407),e=s(8256),d=s(162),f=s(5830);function m(i,l){if(1&i&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.qZA(),e.TgZ(3,"ion-badge"),e._uU(4,"1"),e.qZA()()),2&i){const n=e.oxw();e.xp6(2),e.Oqu(null==n.alertMessage?null:n.alertMessage.alertMessage)}}function Z(i,l){if(1&i&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.qZA(),e.TgZ(3,"ion-badge"),e._uU(4,"1"),e.qZA()()),2&i){const n=e.oxw();e.xp6(2),e.Oqu(null==n.alertMessage?null:n.alertMessage.alertMessage)}}let h=(()=>{class i{constructor(n){this.fileUploadService=n,this.alertMessage={alertMessage:"Loading ...",showAlert:!1,showError:!1},this.title="{Home Wallet}",this.selectedLine=void 0}showAlertMsg(n){this.alertMessage=n}onSelect(n){this.selectedLine=n}setResponse(n){this.receiptResponse=n}setImageUrl(n){this.url=n}onResend(){var n;null!=(null===(n=this.receiptResponse)||void 0===n?void 0:n.text)&&this.fileUploadService.resend(this.receiptResponse.text).subscribe(o=>{let r=JSON.parse(JSON.stringify(o));this.receiptResponse=r,this.selectedLine=void 0})}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(d.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-explore-container"]],inputs:{name:"name",url:"url",alertMessage:"alertMessage",receiptResponse:"receiptResponse"},decls:6,vars:3,consts:[["id","container"],[4,"ngIf"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"strong"),e._uU(2),e.qZA()(),e.TgZ(3,"ion-list"),e.YNc(4,m,5,1,"ion-item",1),e.YNc(5,Z,5,1,"ion-item",1),e.qZA()),2&n&&(e.xp6(2),e.Oqu(o.name),e.xp6(2),e.Q6J("ngIf",null==o.alertMessage?null:o.alertMessage.showAlert),e.xp6(1),e.Q6J("ngIf",null==o.alertMessage?null:o.alertMessage.showError))},dependencies:[c.O5,t.yp,t.Ie,t.Q$,t.q_],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),i})();function x(i,l){if(1&i){const n=e.EpF();e.TgZ(0,"ion-chip")(1,"ion-label",9),e._uU(2),e.qZA(),e.TgZ(3,"ion-icon",10),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.clear())}),e.qZA()()}if(2&i){const n=e.oxw();e.xp6(2),e.AsE("",null==n.msg||null==n.msg.error?null:n.msg.error.title," | ",null==n.msg||null==n.msg.error?null:n.msg.error.detail,"")}}function T(i,l){if(1&i){const n=e.EpF();e.TgZ(0,"ion-chip")(1,"ion-label",11),e._uU(2),e.qZA(),e.TgZ(3,"ion-icon",10),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.clear())}),e.qZA()()}if(2&i){const n=e.oxw();e.xp6(2),e.AsE("",null==n.msg?null:n.msg.title," | ",null==n.msg?null:n.msg.message,"")}}function U(i,l){if(1&i&&(e.TgZ(0,"ion-card")(1,"ion-label",12),e._UZ(2,"ion-spinner",13),e._uU(3),e.qZA()()),2&i){const n=e.oxw();e.xp6(3),e.hij(" Loading.. [",null==n.file?null:n.file.name,"]")}}function A(i,l){if(1&i){const n=e.EpF();e.TgZ(0,"ion-col",17)(1,"ion-textarea",18),e.NdJ("ngModelChange",function(r){e.CHM(n);const p=e.oxw(2);return e.KtG(p.textResponse=r)}),e.qZA(),e._UZ(2,"ion-item-divider"),e.TgZ(3,"ion-button",8),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(r.onResend())}),e._uU(4,"Resubmit"),e.qZA()()}if(2&i){const n=e.oxw(2);e.xp6(1),e.Q6J("ngModel",n.textResponse)}}function q(i,l){if(1&i&&(e.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col",14),e._UZ(3,"ion-img",15),e.qZA(),e.YNc(4,A,5,1,"ion-col",16),e.qZA()()),2&i){const n=e.oxw();e.xp6(3),e.Q6J("src",n.url),e.xp6(1),e.Q6J("ngIf",null==n.receipt?null:n.receipt.text)}}function M(i,l){if(1&i&&(e.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col",19),e._UZ(3,"ion-img",20),e.qZA(),e.TgZ(4,"ion-col",21)(5,"p",22),e._uU(6),e.qZA()()()()),2&i){const n=e.oxw();e.xp6(3),e.Q6J("src",null==n.receipt?null:n.receipt.image),e.xp6(3),e.hij("Provider : ",null==n.receipt?null:n.receipt.provider,"")}}function P(i,l){if(1&i&&(e.TgZ(0,"ion-row")(1,"ion-col"),e._uU(2),e.qZA(),e.TgZ(3,"ion-col"),e._uU(4),e.qZA(),e.TgZ(5,"ion-col"),e._uU(6),e.qZA(),e.TgZ(7,"ion-col"),e._uU(8),e.qZA(),e.TgZ(9,"ion-col"),e._uU(10),e.qZA(),e.TgZ(11,"ion-col"),e._uU(12),e.qZA(),e.TgZ(13,"ion-col"),e._uU(14),e.qZA(),e.TgZ(15,"ion-col"),e._uU(16),e.qZA()()),2&i){const n=l.$implicit;e.Tol(n.validationError?"row-custom-bg-red":"row-custom-bg-green"),e.xp6(2),e.Oqu(n.index),e.xp6(2),e.Oqu(n.description),e.xp6(2),e.Oqu(n.itemCode),e.xp6(2),e.Oqu(n.quantity),e.xp6(2),e.Oqu(n.rate),e.xp6(2),e.Oqu(n.grossPrice),e.xp6(2),e.Oqu(n.discount),e.xp6(2),e.Oqu(n.netAmount)}}function b(i,l){if(1&i){const n=e.EpF();e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e._uU(3,"Receipt Lines"),e.qZA()(),e.TgZ(4,"ion-card-content")(5,"ion-grid")(6,"ion-row",23)(7,"ion-col"),e._uU(8," # "),e.qZA(),e.TgZ(9,"ion-col"),e._uU(10," Description "),e.qZA(),e.TgZ(11,"ion-col"),e._uU(12," Item code "),e.qZA(),e.TgZ(13,"ion-col"),e._uU(14," Quantity "),e.qZA(),e.TgZ(15,"ion-col"),e._uU(16," Rate "),e.qZA(),e.TgZ(17,"ion-col"),e._uU(18," Gross Price "),e.qZA(),e.TgZ(19,"ion-col"),e._uU(20," Discount "),e.qZA(),e.TgZ(21,"ion-col"),e._uU(22," Net Amount "),e.qZA()(),e.YNc(23,P,17,11,"ion-row",24),e.qZA(),e.TgZ(24,"ion-grid")(25,"ion-row")(26,"ion-col",19)(27,"ion-button",25),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.save())}),e._uU(28,"Save"),e.qZA()(),e._UZ(29,"ion-col",21),e.qZA()()()()}if(2&i){const n=e.oxw();e.xp6(23),e.Q6J("ngForOf",null==n.receipt?null:n.receipt.receiptLines),e.xp6(4),e.Q6J("disabled",null==n.receipt?null:n.receipt.lineErrors)}}function F(i,l){if(1&i&&(e.TgZ(0,"ion-row")(1,"ion-col"),e._uU(2),e.qZA(),e.TgZ(3,"ion-col"),e._uU(4),e.qZA()()),2&i){const n=l.$implicit;e.xp6(2),e.Oqu(n.key),e.xp6(2),e.Oqu(n.value)}}function J(i,l){if(1&i&&(e.TgZ(0,"ion-card")(1,"ion-card-title"),e._uU(2,"Field Values"),e.qZA(),e.TgZ(3,"ion-card-content")(4,"ion-grid")(5,"ion-row")(6,"ion-col"),e._uU(7,"Field Name"),e.qZA(),e.TgZ(8,"ion-col"),e._uU(9,"Value"),e.qZA()(),e.YNc(10,F,5,2,"ion-row",26),e.ALo(11,"keyvalue"),e.qZA()()()),2&i){const n=e.oxw();e.xp6(10),e.Q6J("ngForOf",e.lcZ(11,1,null==n.receipt?null:n.receipt.fields))}}const w=[{path:"",component:(()=>{class i{constructor(n,o,r){this.fileUploadService=n,this.navCtrl=o,this.api=r,this.file=void 0,this.progress=!1,this.selectedLine=void 0,this.textResponse=""}onSelect(n){this.selectedLine=n}setResponse(n){this.receipt=n}setImageUrl(n){this.url=n}onResend(){null!=this.textResponse&&(this.progress=!0,this.fileUploadService.resend(this.textResponse).subscribe(n=>{this.receipt=void 0;let o=JSON.parse(JSON.stringify(n));this.receipt=o,this.textResponse=o.text,this.progress=!1,this.selectedLine=void 0}))}clear(){this.msg=void 0}save(){(null!=this.receipt||null!=this.receipt)&&(this.progress=!0,this.msg=void 0,this.api.saveReceipt(this.receipt).subscribe(n=>{201==n.status&&(this.msg={message:"Receipt successfully saved.",title:"Save Action",success:"true"}),this.progress=!1},n=>{this.msg=JSON.parse(JSON.stringify(n)),this.progress=!1}))}onChange(n){this.file=n.target.files[0];var o=new FileReader;o.onload=r=>{this.url=r.target.result},o.readAsDataURL(n.target.files[0])}onUpload(){this.progress=!0,this.fileUploadService.upload(this.file).subscribe(n=>{let o=JSON.parse(JSON.stringify(n));this.receipt=o,this.textResponse=o.text,this.progress=!1},n=>{console.log(n)})}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(d.J),e.Y36(t.SH),e.Y36(f.s))},i.\u0275cmp=e.Xpm({type:i,selectors:[["file-uploader"]],decls:29,vars:10,consts:[[3,"translucent"],["slot","secondary"],[4,"ngIf"],["slot","icon-only","name","person-circle"],["slot","icon-only","name","search"],["slot","icon-only","ios","ellipsis-horizontal","md","ellipsis-vertical"],[3,"fullscreen","scrollTop"],["type","file","accept","image/png,image/jpg,image/jpeg",3,"change"],[3,"click"],["color","danger"],["name","close-circle",3,"click"],["color","success"],["size","large","color","secondary",1,"ion-padding"],["name","crescent"],["size","3"],[3,"src"],["size","9",4,"ngIf"],["size","9"],["name","textResponse","autocomplete","on","autocorrect","on","rows","10",3,"ngModel","ngModelChange"],["size","2"],["height","20%","width","20%",1,"card-img-top",3,"src"],["size","10"],[1,"card-text"],["color","primary"],[3,"class",4,"ngFor","ngForOf"],[3,"disabled","click"],[4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.YNc(3,x,4,2,"ion-chip",2),e.YNc(4,T,4,2,"ion-chip",2),e.TgZ(5,"ion-button"),e._UZ(6,"ion-icon",3),e.qZA(),e.TgZ(7,"ion-button"),e._UZ(8,"ion-icon",4),e.qZA()(),e.TgZ(9,"ion-buttons",1)(10,"ion-button"),e._UZ(11,"ion-icon",5),e.qZA()(),e.TgZ(12,"ion-title"),e._uU(13,"Upload"),e.qZA()()(),e.TgZ(14,"ion-content",6),e.YNc(15,U,4,1,"ion-card",2),e.TgZ(16,"ion-card")(17,"ion-card-header")(18,"ion-card-title"),e._uU(19,"Upload a file"),e.qZA()(),e.TgZ(20,"ion-card-content")(21,"ion-input",7),e.NdJ("change",function(p){return o.onChange(p)}),e.qZA(),e.TgZ(22,"ion-button",8),e.NdJ("click",function(){return o.onUpload()}),e._uU(23,"Go"),e.qZA()()(),e._UZ(24,"app-explore-container"),e.YNc(25,q,5,2,"ion-grid",2),e.YNc(26,M,7,2,"ion-grid",2),e.YNc(27,b,30,2,"ion-card",2),e.YNc(28,J,12,3,"ion-card",2),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(3),e.Q6J("ngIf",null==o.msg||null==o.msg.error?null:o.msg.error.title),e.xp6(1),e.Q6J("ngIf",null==o.msg?null:o.msg.success),e.xp6(10),e.Q6J("fullscreen",!0)("scrollTop",!0),e.xp6(1),e.Q6J("ngIf",o.progress),e.xp6(10),e.Q6J("ngIf",null==o.receipt?null:o.receipt.receiptLines),e.xp6(1),e.Q6J("ngIf",null==o.receipt?null:o.receipt.image),e.xp6(1),e.Q6J("ngIf",null==o.receipt?null:o.receipt.receiptLines),e.xp6(1),e.Q6J("ngIf",null==o.receipt?null:o.receipt.fields))},dependencies:[t.YG,t.Sm,t.PM,t.FN,t.Zi,t.Dq,t.hM,t.wI,t.W2,t.jY,t.Gu,t.gu,t.Xz,t.pK,t.rH,t.Q$,t.Nd,t.PQ,t.g2,t.wd,t.sr,t.j9,c.sg,c.O5,a.JJ,a.On,h,c.Nd],styles:["ion-img[_ngcontent-%COMP%]::part(image){width:90%;height:90%}.row-custom-bg-green[_ngcontent-%COMP%]{background:rgb(216,246,252)}.row-custom-bg-red[_ngcontent-%COMP%]{background:rgb(252,215,244)}"]}),i})()}];let O=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.Bz.forChild(w),u.Bz]}),i})(),C=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[t.Pc,c.ez,a.u5,_.e,O]}),i})()}}]);