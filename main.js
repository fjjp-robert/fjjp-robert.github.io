(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+8ow":
/*!***************************************************************!*\
  !*** ./src/app/features/lobby/pick-ban/pick-ban.component.ts ***!
  \***************************************************************/
/*! exports provided: PickBanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickBanComponent", function() { return PickBanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function PickBanComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const champion_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", champion_r2.fullArtsUrl[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", champion_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", champion_r2.region.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", champion_r2.region.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](champion_r2.name);
} }
function PickBanComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const champion_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", champion_r3.fullArtsUrl[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", champion_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", champion_r3.region.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", champion_r3.region.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](champion_r3.name);
} }
const _c0 = function (a0, a1) { return { "bandeau-gauche": a0, "bandeau-droite": a1 }; };
class PickBanComponent {
    constructor() { }
    ngOnInit() {
    }
}
PickBanComponent.ɵfac = function PickBanComponent_Factory(t) { return new (t || PickBanComponent)(); };
PickBanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PickBanComponent, selectors: [["app-pick-ban"]], inputs: { team: "team", side: "side" }, decls: 5, vars: 6, consts: [[3, "ngClass"], [1, "picks", "carbon"], ["class", "champion-card card m-1 text-white", 4, "ngFor", "ngForOf"], ["data-masonry", "{\"percentPosition\": true }", 1, "bans", "m-1", "row"], ["class", "card m-1 text-white champion-card-banned", 4, "ngFor", "ngForOf"], [1, "champion-card", "card", "m-1", "text-white"], [1, "card-img", 3, "src", "alt"], [1, "card-img-overlay-champion"], [1, ""], [1, "region-icon", 3, "src", "alt"], [2, "vertical-align", "middle"], [1, "card", "m-1", "text-white", "champion-card-banned"], [1, "name", 2, "vertical-align", "middle"]], template: function PickBanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PickBanComponent_div_2_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PickBanComponent_div_4_Template, 7, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.side === "left", ctx.side === "right"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team.picks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team.bans);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".bandeau-droite[_ngcontent-%COMP%]   .picks[_ngcontent-%COMP%] {\n  border-radius: 130px 0px 0px 130px;\n  -moz-border-radius: 130px 0px 0px 130px;\n  -webkit-border-radius: 130px 0px 0px 130px;\n  min-height: 600px;\n  overflow: hidden;\n}\n.bandeau-droite[_ngcontent-%COMP%]   .bans[_ngcontent-%COMP%] {\n  background-color: silver;\n}\n.bandeau-gauche[_ngcontent-%COMP%]   .picks[_ngcontent-%COMP%] {\n  border-radius: 0px 130px 130px 0px;\n  -moz-border-radius: 0px 130px 130px 0px;\n  -webkit-border-radius: 0px 130px 130px 0px;\n  min-height: 630px;\n  overflow: hidden;\n}\n.bandeau-gauche[_ngcontent-%COMP%]   .bans[_ngcontent-%COMP%] {\n  background-color: silver;\n}\n.carbon[_ngcontent-%COMP%] {\n  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px, linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px, linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px, linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px, linear-gradient(90deg, #1b1b1b 10px, transparent 10px), linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);\n  background-color: #131313;\n  background-size: 20px 20px;\n}\n.champion-card[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  min-height: 76px;\n  max-height: 100px;\n  overflow-y: hidden;\n}\n.champion-card[_ngcontent-%COMP%]   .region-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  margin-right: 3px;\n}\n.champion-card[_ngcontent-%COMP%]   .card-img-overlay-champion[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #0007;\n}\n.champion-card[_ngcontent-%COMP%]   .card-img-overlay-champion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 0.9rem;\n}\n.champion-card[_ngcontent-%COMP%]   .card-img-overlay-champion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .set-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 26px;\n  height: 26px;\n  position: absolute;\n  right: 0;\n  background-color: #ccc;\n}\n.champion-card-banned[_ngcontent-%COMP%] {\n  min-height: 35px;\n  max-height: 60px;\n  max-width: 96px;\n  border: none;\n  padding: 0;\n}\n.champion-card-banned[_ngcontent-%COMP%]   .region-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-right: 3px;\n}\n.champion-card-banned[_ngcontent-%COMP%]   .card-img-overlay-champion[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #0007;\n}\n.champion-card-banned[_ngcontent-%COMP%]   .card-img-overlay-champion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 7pt;\n}\n\n@keyframes slide-right {\n  0% {\n    transform: translateX(-100px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGljay1iYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFJRTtFQUNFLHdCQUFBO0FBRko7QUFPRTtFQUNFLGtDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9FO0VBQ0Usd0JBQUE7QUFMSjtBQVFBO0VBQ0UsdWFBQ0U7RUFNRix5QkFBQTtFQUNBLDBCQUFBO0FBWEY7QUFjQTtFQUVZLHFFQUFBO0VBRVYsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWkY7QUFjRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFaSjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQWJKO0FBZUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBYk47QUFlTTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQWJSO0FBbUJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQWhCRjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFoQko7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBakJKO0FBbUJJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBakJOO0FBc0JBOzs7O0VBQUE7QUFlQTtFQUNFO0lBRVUsNkJBQUE7RUFuQlY7RUFxQkE7SUFFVSx3QkFBQTtFQW5CVjtBQUNGIiwiZmlsZSI6InBpY2stYmFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYW5kZWF1LWRyb2l0ZSB7XHJcbiAgLnBpY2tze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTMwcHggMHB4IDBweCAxMzBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTMwcHggMHB4IDBweCAxMzBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTMwcHggMHB4IDBweCAxMzBweDtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5iYW5zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxuICB9XHJcbn1cclxuLmJhbmRlYXUtZ2F1Y2hlIHtcclxuXHJcbiAgLnBpY2tze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEzMHB4IDEzMHB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMHB4IDEzMHB4IDEzMHB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4IDEzMHB4IDEzMHB4IDBweDtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiA2MzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5iYW5zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxuICB9XHJcbn1cclxuLmNhcmJvbntcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCAjMTUxNTE1IDVweCwgdHJhbnNwYXJlbnQgNXB4KSAwIDVweCxcclxuICAgIGxpbmVhci1ncmFkaWVudCgyMDdkZWcsICMxNTE1MTUgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDEwcHggMHB4LFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCAjMjIyIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAwcHggMTBweCxcclxuICAgIGxpbmVhci1ncmFkaWVudCgyMDdkZWcsICMyMjIgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDEwcHggNXB4LFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWIxYjFiIDEwcHgsIHRyYW5zcGFyZW50IDEwcHgpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KCMxZDFkMWQgMjUlLCAjMWExYTFhIDI1JSwgIzFhMWExYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQgNzUlLCAjMjQyNDI0IDc1JSwgIzI0MjQyNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMztcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcclxufVxyXG5cclxuLmNoYW1waW9uLWNhcmQgeyAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgXHJcbiAgbWluLWhlaWdodDogNzZweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gIC5yZWdpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMjhweDsgXHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy1vdmVybGF5LWNoYW1waW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA3O1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgZm9udC1zaXplOjAuOTByZW07XHJcblxyXG4gICAgICAuc2V0LWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNoYW1waW9uLWNhcmQtYmFubmVkIHsgXHJcbiAgbWluLWhlaWdodDogMzVweDtcclxuICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gIG1heC13aWR0aCA6IDk2cHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgcGFkZGluZzowO1xyXG5cclxuICAucmVnaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDE1cHg7IFxyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctb3ZlcmxheS1jaGFtcGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNztcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogN3B0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIHNsaWRlLXJpZ2h0XHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "/160":
/*!*************************************!*\
  !*** ./src/app/models/set.model.ts ***!
  \*************************************/
/*! exports provided: Set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
class Set {
    constructor(ref, name, iconUrl) {
        this.ref = ref;
        this.name = name;
        this.iconUrl = iconUrl;
    }
}


/***/ }),

/***/ "/ewu":
/*!***************************************************!*\
  !*** ./src/app/features/admin/admin.component.ts ***!
  \***************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "paST");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 2, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspaces\wkspPickBanRuneterraNew\pick-ban-runeterra\src\main.ts */"zUnb");


/***/ }),

/***/ "0HvM":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bienvenue !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Creer un lobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "3OJA":
/*!**********************************************************************!*\
  !*** ./src/app/features/create-lobby/create-lobby-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CreateLobbyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLobbyRoutingModule", function() { return CreateLobbyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_lobby_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-lobby.component */ "ihw/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'create-lobby',
        component: _create_lobby_component__WEBPACK_IMPORTED_MODULE_1__["CreateLobbyComponent"]
    }
];
class CreateLobbyRoutingModule {
}
CreateLobbyRoutingModule.ɵfac = function CreateLobbyRoutingModule_Factory(t) { return new (t || CreateLobbyRoutingModule)(); };
CreateLobbyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CreateLobbyRoutingModule });
CreateLobbyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CreateLobbyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "6g/D":
/*!*****************************************!*\
  !*** ./src/app/services/set.service.ts ***!
  \*****************************************/
/*! exports provided: SetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetService", function() { return SetService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SetService {
    constructor() {
        this.noeudFireBaseSets = '/sets-list';
        this.sets = [];
        this.setsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getSets() {
        // récupération en fonction de l'évenement 'value'
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(this.noeudFireBaseSets)
            .orderByChild('ref')
            .on('value', (data) => {
            this.sets = (data && data.val()) ? data.val() : [];
            this.emitSets();
        });
    }
    importOrUpdateSets(setsToImport) {
        let newSetsArray = [...this.sets];
        setsToImport.forEach((set) => {
            let setTrouve = newSetsArray.find(reg => reg.ref === set.ref);
            // si on trouve le set déjà existant, on le remplace
            if (setTrouve) {
                newSetsArray[newSetsArray.indexOf(setTrouve)] = set;
            }
            else {
                newSetsArray.push(set);
            }
        });
        this.sets = newSetsArray;
        this.emitSets();
    }
    emitSets() {
        this.setsSubject.next(this.sets);
    }
    saveSets() {
        // sauvegarde du tableau régions dans le noeud sets de la base de données 
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(this.noeudFireBaseSets).set(this.sets);
    }
}
SetService.ɵfac = function SetService_Factory(t) { return new (t || SetService)(); };
SetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SetService, factory: SetService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Gu/d":
/*!********************************************!*\
  !*** ./src/app/services/region.service.ts ***!
  \********************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class RegionService {
    constructor() {
        this.noeudFireBaseRegions = '/regions-list';
        this.regions = [];
        this.regionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getRegions() {
        // récupération en fonction de l'évenement 'value'
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(this.noeudFireBaseRegions)
            .on('value', (data) => {
            this.regions = (data && data.val()) ? data.val() : [];
            this.emitRegions();
        });
    }
    importOrUpdateRegions(regionsToImport) {
        let newRegionsArray = [...this.regions];
        regionsToImport.forEach((region) => {
            let regionTrouvee = newRegionsArray.find(reg => reg.ref === region.ref);
            // si on trouve la région déjà existante, on la remplace
            if (regionTrouvee) {
                newRegionsArray[newRegionsArray.indexOf(regionTrouvee)] = region;
            }
            else {
                newRegionsArray.push(region);
            }
        });
        this.regions = newRegionsArray;
        this.emitRegions();
    }
    emitRegions() {
        this.regionsSubject.next(this.regions);
    }
    saveRegions() {
        // sauvegarde du tableau régions dans le noeud regions de la base de données 
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(this.noeudFireBaseRegions).set(this.regions);
    }
}
RegionService.ɵfac = function RegionService_Factory(t) { return new (t || RegionService)(); };
RegionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RegionService, factory: RegionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JPWn":
/*!************************************************!*\
  !*** ./src/app/features/lobby/lobby.module.ts ***!
  \************************************************/
/*! exports provided: LobbyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyModule", function() { return LobbyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lobby_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lobby.component */ "Xzks");
/* harmony import */ var _lobby_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lobby-routing.module */ "w0PD");
/* harmony import */ var _pick_ban_pick_ban_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pick-ban/pick-ban.component */ "+8ow");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class LobbyModule {
}
LobbyModule.ɵfac = function LobbyModule_Factory(t) { return new (t || LobbyModule)(); };
LobbyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LobbyModule });
LobbyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _lobby_routing_module__WEBPACK_IMPORTED_MODULE_2__["LobbyRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LobbyModule, { declarations: [_lobby_component__WEBPACK_IMPORTED_MODULE_1__["LobbyComponent"],
        _pick_ban_pick_ban_component__WEBPACK_IMPORTED_MODULE_3__["PickBanComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _lobby_routing_module__WEBPACK_IMPORTED_MODULE_2__["LobbyRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();


/***/ }),

/***/ "JiEi":
/*!****************************************!*\
  !*** ./src/app/models/region.model.ts ***!
  \****************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
class Region {
    constructor(ref, name, iconUrl) {
        this.ref = ref;
        this.name = name;
        this.iconUrl = iconUrl;
    }
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./champions-list/champions-list.component */ "pnhM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_1__["ChampionsListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]], exports: [_champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_1__["ChampionsListComponent"]] }); })();


/***/ }),

/***/ "RxMv":
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "0HvM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    // redirection auto si le chemin est la racine. /!\ il faut spécifier le pathMatch si c'est la route vide pour un redirect
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "SgHw":
/*!********************************************************!*\
  !*** ./src/app/features/admin/admin-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lobby/lobby.component */ "Xzks");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "/ewu");
/* harmony import */ var _import_data_import_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-data/import-data.component */ "Xsa4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: 'test',
                pathMatch: 'full'
            },
            {
                path: 'import-data',
                component: _import_data_import_data_component__WEBPACK_IMPORTED_MODULE_3__["ImportDataComponent"]
            },
            {
                path: 'test',
                component: _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_1__["LobbyComponent"]
            }
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'pick-ban-runeterra';
        var firebaseConfig = {
            apiKey: "AIzaSyDXu1zNfTqti1GNrnfNYyeVThaxTztnLQY",
            authDomain: "pick-ban-lor.firebaseapp.com",
            projectId: "pick-ban-lor",
            storageBucket: "pick-ban-lor.appspot.com",
            messagingSenderId: "203495297536",
            appId: "1:203495297536:web:0954202c103656bac87ee5"
        };
        // Initialize Firebase
        firebase__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W3qf":
/*!******************************************!*\
  !*** ./src/app/models/champion.model.ts ***!
  \******************************************/
/*! exports provided: Champion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Champion", function() { return Champion; });
class Champion {
    constructor(cardRef, name, region, set, fullArtsUrl, cardsRefLvlSup) {
        this.cardRef = cardRef;
        this.name = name;
        this.region = region;
        this.set = set;
        this.fullArtsUrl = fullArtsUrl;
        this.cardsRefLvlSup = cardsRefLvlSup;
        this.isActive = true;
    }
}


/***/ }),

/***/ "Xsa4":
/*!*********************************************************************!*\
  !*** ./src/app/features/admin/import-data/import-data.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImportDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportDataComponent", function() { return ImportDataComponent; });
/* harmony import */ var src_app_models_champion_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/champion.model */ "W3qf");
/* harmony import */ var src_app_models_region_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/region.model */ "JiEi");
/* harmony import */ var src_app_models_set_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/set.model */ "/160");
/* harmony import */ var src_app_utils_constantes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/constantes.utils */ "v/x+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_champion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/champion.service */ "evUj");
/* harmony import */ var src_app_services_region_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/region.service */ "Gu/d");
/* harmony import */ var src_app_services_set_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/set.service */ "6g/D");
/* harmony import */ var _shared_champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/champions-list/champions-list.component */ "pnhM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ImportDataComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("succ\u00E8s : ", entry_r4.key, " --> ", entry_r4.value.length, " champions extraits");
} }
function ImportDataComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Erreur : ", entry_r5.key, " --> ", entry_r5.value, "");
} }
function ImportDataComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("succ\u00E8s : ", ctx_r2.regionExtraites.length, " r\u00E9gions extraites");
} }
function ImportDataComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("succ\u00E8s : ", ctx_r3.setsExtraits.length, " sets extraits");
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
class ImportDataComponent {
    constructor(championService, regionService, setService) {
        this.championService = championService;
        this.regionService = regionService;
        this.setService = setService;
        this.mapChampionsByFiles = new Map();
        this.mapErrorsByFiles = new Map();
        this.mapErrorsByFilesRegion = new Map();
    }
    ngOnInit() {
    }
    onSaveChampions() {
        this.championService.saveChampions();
    }
    onSaveRegionsSets() {
        this.regionService.saveRegions();
        this.setService.saveSets();
    }
    readSetJson(event) {
        const target = event.target;
        const files = target.files;
        // pour chaque fichiers insérés
        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            if (file) {
                // vérifier le pattern du nom ?
                if (file.name.startsWith('set')) {
                    var reader = new FileReader();
                    reader.readAsText(file, "UTF-8");
                    // au chargement du fichier on appelle la conversion en champions et on met à jour la liste.
                    reader.onload = (evt) => {
                        let setJson = evt.target.result.toString();
                        const cartes = JSON.parse(setJson);
                        this.contenuFichier = setJson;
                        let extractedChampions = this.extractAndConvertCardInfosForChampions(cartes);
                        console.log(files);
                        this.mapChampionsByFiles.set(file.name, [...extractedChampions.values()]);
                        console.log(this.mapChampionsByFiles);
                        this.championService.importOrUpdateChampions(extractedChampions);
                    };
                    reader.onerror = (evt) => {
                        console.log('error reading file');
                        this.mapErrorsByFiles.set(file.name, "erreur à la lecture du fichier");
                    };
                }
            }
        }
    }
    // lecture du core.json
    readCoreJson(event) {
        const target = event.target;
        const files = target.files;
        let file = files[0];
        if (file) {
            // vérifier le pattern du nom ?
            if (file.name.startsWith('globals')) {
                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                // au chargement du fichier on appelle l'extraction des régions et on met à jour la liste.
                reader.onload = (evt) => {
                    let coreJson = evt.target.result.toString();
                    this.extractRegions(coreJson);
                    this.extractSets(coreJson);
                };
                reader.onerror = (evt) => {
                    console.log('error reading file');
                    this.mapErrorsByFiles.set(file.name, "erreur à la lecture du fichier");
                };
            }
        }
    }
    extractRegions(coreJson) {
        //let coreJson: string = evt.target.result.toString();
        const regionsInput = JSON.parse(coreJson).regions;
        //console.log(regionsInput);
        let regions = regionsInput.map(input => {
            return new src_app_models_region_model__WEBPACK_IMPORTED_MODULE_1__["Region"](input.nameRef, input.name, this.buildRegionAssetUrl(input.nameRef));
        });
        //console.log(regions);
        this.regionService.importOrUpdateRegions(regions);
        this.regionExtraites = regions;
        //console.log(regions);
    }
    extractSets(coreJson) {
        //let coreJson: string = evt.target.result.toString();
        const setsInput = JSON.parse(coreJson).sets;
        //console.log(regionsInput);
        let sets = setsInput.map(input => {
            return new src_app_models_set_model__WEBPACK_IMPORTED_MODULE_2__["Set"](input.nameRef, input.name, this.buildSetAssetUrl(input.nameRef));
        });
        const comparatorBySetRef = (set1, set2) => (set1.ref > set2.ref) ? 1 : ((set2.ref > set1.ref) ? -1 : 0);
        //console.log(sets);
        sets = sets.sort(comparatorBySetRef);
        //console.log(sets);
        this.setService.importOrUpdateSets(sets);
        this.setsExtraits = sets;
    }
    extractAndConvertCardInfosForChampions(cards) {
        // pour trouver les champions on prend les cartes collectionnables de supertype champion qui n'ont pas de spellSpeedRef ~ pas un sort 
        // on fait ça car le type dépend de la langue du fichier ("Unit" en en_us et "Unité" en fr_fr)
        const isCarteChampionLvl1 = card => card.supertype === 'Champion' && card.spellSpeedRef === '' && card.collectible;
        // pour les lvls supp même condition hors collectionnable
        const isCarteChampionLvlSup = card => card.supertype === 'Champion' && card.spellSpeedRef === '' && !card.collectible;
        let regions = [];
        let mapChampions = new Map();
        cards
            .filter(isCarteChampionLvl1)
            .map(championCard => {
            // on filtre les cartes associées au champion et on vérifie qu'elles sont de niveau supp
            const lvlUpCardCodes = cards
                .filter(card2 => championCard.associatedCardRefs.includes(card2.cardCode) && isCarteChampionLvlSup(card2))
                .map(lvlUpCard => lvlUpCard.cardCode);
            const cardCodesForAssets = [championCard.cardCode, ...lvlUpCardCodes];
            const set = championCard.set.toLowerCase();
            const assetsUrl = cardCodesForAssets.map(code => this.buildCardAssetUrl(set, code));
            let regionTrouvee = regions.find(region => region.ref === championCard.regionRef);
            if (!regionTrouvee) {
                regionTrouvee = new src_app_models_region_model__WEBPACK_IMPORTED_MODULE_1__["Region"](championCard.regionRef, championCard.region, this.buildRegionAssetUrl(championCard.regionRef));
                regions.push(regionTrouvee);
            }
            mapChampions.set(championCard.cardCode, new src_app_models_champion_model__WEBPACK_IMPORTED_MODULE_0__["Champion"](championCard.cardCode, championCard.name, regionTrouvee, championCard.set, assetsUrl, lvlUpCardCodes));
        });
        console.log(mapChampions);
        return mapChampions;
    }
    /**
     * Construction de l'url de la carte (full illustration par défaut)
     */
    buildCardAssetUrl(set, cardCode, full = true) {
        let fullStr = full ? '-full' : '';
        return `${src_app_utils_constantes_utils__WEBPACK_IMPORTED_MODULE_3__["Constantes"].urlDataDragon}${set}/fr_fr/img/cards/${cardCode}${fullStr}.png`;
    }
    buildRegionAssetUrl(regionRef) {
        return `${src_app_utils_constantes_utils__WEBPACK_IMPORTED_MODULE_3__["Constantes"].urlDataDragon}core/fr_fr/img/regions/icon-${regionRef.toLowerCase()}.png`;
    }
    buildSetAssetUrl(setRef) {
        return `${src_app_utils_constantes_utils__WEBPACK_IMPORTED_MODULE_3__["Constantes"].urlDataDragon}core/fr_fr/img/sets/${setRef.toLowerCase()}.png`;
    }
}
ImportDataComponent.ɵfac = function ImportDataComponent_Factory(t) { return new (t || ImportDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_champion_service__WEBPACK_IMPORTED_MODULE_5__["ChampionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_region_service__WEBPACK_IMPORTED_MODULE_6__["RegionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_set_service__WEBPACK_IMPORTED_MODULE_7__["SetService"])); };
ImportDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ImportDataComponent, selectors: [["app-import-data"]], decls: 33, vars: 14, consts: [[1, "row", "justify-content-center"], [1, "col", "col-7"], [1, "col", "col-4"], [1, "fieldset-import", "rounded"], [1, "legend-import"], [1, "form-group"], ["type", "file", "accept", "application/JSON", "multiple", "", 1, "form-control-file", 3, "change"], ["class", "text-success", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "ngClass", "click"], ["type", "file", "accept", "application/JSON", 1, "form-control-file", 3, "change"], ["class", "text-success", 4, "ngIf"], [1, "text-success"], [1, "text-danger"]], template: function ImportDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-champions-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "legend", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Importer les champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Choisissez les fichiers \u00E0 importer (exemple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "set1-fr_fr.json");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ImportDataComponent_Template_input_change_12_listener($event) { return ctx.readSetJson($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ImportDataComponent_p_13_Template, 2, 2, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ImportDataComponent_p_15_Template, 2, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ImportDataComponent_Template_button_click_17_listener() { return ctx.onSaveChampions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Sauvegarder les champions extraits");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "legend", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Importer les r\u00E9gions/sets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Choisissez le fichier \u00E0 importer (exemple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "globals-fr_fr.json");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ImportDataComponent_Template_input_change_28_listener($event) { return ctx.readCoreJson($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ImportDataComponent_p_29_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ImportDataComponent_p_30_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ImportDataComponent_Template_button_click_31_listener() { return ctx.onSaveRegionsSets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Sauvegarder les r\u00E9gions/sets extraits");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 6, ctx.mapChampionsByFiles));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 8, ctx.mapErrorsByFiles));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, !ctx.mapChampionsByFiles));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.regionExtraites);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.setsExtraits);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, !ctx.regionExtraites));
    } }, directives: [_shared_champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_8__["ChampionsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["KeyValuePipe"]], styles: [".fieldset-import[_ngcontent-%COMP%] {\n  \n  margin-bottom: 1rem;\n  padding: 5px 10px 10px 10px;\n  border: 1px solid #DDD;\n}\n\n.legend-import[_ngcontent-%COMP%] {\n  width: auto;\n  padding-right: 5px;\n  padding-left: 5px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1wb3J0LWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQUNGIiwiZmlsZSI6ImltcG9ydC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkc2V0LWltcG9ydCB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFOyovXHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcclxufVxyXG5cclxuLmxlZ2VuZC1pbXBvcnQge1xyXG4gIHdpZHRoOmF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7Ki9cclxufSJdfQ== */"] });


/***/ }),

/***/ "Xzks":
/*!***************************************************!*\
  !*** ./src/app/features/lobby/lobby.component.ts ***!
  \***************************************************/
/*! exports provided: LobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyComponent", function() { return LobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_lobby_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/lobby.service */ "znGk");
/* harmony import */ var src_app_services_champion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/champion.service */ "evUj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pick_ban_pick_ban_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pick-ban/pick-ban.component */ "+8ow");
/* harmony import */ var _shared_champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/champions-list/champions-list.component */ "pnhM");






class LobbyComponent {
    //getCurrent
    constructor(lobbyService, championService, route) {
        this.lobbyService = lobbyService;
        this.championService = championService;
        this.route = route;
    }
    ngOnInit() {
        const refLobby = this.route.snapshot.params['lobbyId'];
        this.lobbySubscription = this.lobbyService.lobbyCourantSubject.subscribe((lobby) => {
            this.lobby = lobby;
            console.log("lobby chargé ");
            console.log(this.lobby.teamA);
            if (!this.lobby.teamA.bans) {
                this.lobby.teamA.bans = [];
            }
            if (!this.lobby.teamA.picks) {
                this.lobby.teamA.picks = [];
            }
        });
        this.selectedChampionSubscription = this.championService.selectedChampionSubject.subscribe((champion) => {
            console.log("subscription selected");
            if (champion) {
                console.log("selected champion : " + champion.name);
                if (this.lobby.teamA.picks.length < 6) {
                    // TODO : get current step
                    this.lobby.teamA.picks.push(champion);
                }
                else {
                    this.lobby.teamA.bans.push(champion);
                }
            }
        });
        this.lobbyService.getLobbyCourantByRef(refLobby);
    }
    onClickChampion(champion) {
        console.log(champion.name);
        let choixConfirme = confirm(`Do you confirm your choice : ${champion.name} ?`).valueOf();
        if (choixConfirme) {
            console.log('confirmé');
            console.log(this.lobby);
            this.championService.selectChampion(champion);
        }
    }
}
LobbyComponent.ɵfac = function LobbyComponent_Factory(t) { return new (t || LobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_lobby_service__WEBPACK_IMPORTED_MODULE_1__["LobbyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_champion_service__WEBPACK_IMPORTED_MODULE_2__["ChampionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LobbyComponent, selectors: [["app-lobby"]], decls: 8, vars: 3, consts: [[1, "col"], [1, "row"], ["side", "left", 3, "team"], [2, "max-width", "70%", 3, "onClickChampion"], ["side", "right", 3, "team"]], template: function LobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ici, mettre les noms des joueurs etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-pick-ban", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-champions-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-pick-ban", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("team", ctx.lobby.teamA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("onClickChampion", ctx.onClickChampion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("team", ctx.lobby.teamB);
    } }, directives: [_pick_ban_pick_ban_component__WEBPACK_IMPORTED_MODULE_4__["PickBanComponent"], _shared_champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_5__["ChampionsListComponent"]], styles: ["app-pick-ban[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\napp-champions-list[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2JieS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJsb2JieS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1waWNrLWJhbiB7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuYXBwLWNoYW1waW9ucy1saXN0IHtcclxuICBtYXgtd2lkdGg6NzAlXHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_champion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/champion.service */ "evUj");
/* harmony import */ var _services_lobby_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/lobby.service */ "znGk");
/* harmony import */ var _services_region_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/region.service */ "Gu/d");
/* harmony import */ var _services_set_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/set.service */ "6g/D");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _features_home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/home/home.module */ "fOOd");
/* harmony import */ var _features_home_home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/home/home-routing.module */ "RxMv");
/* harmony import */ var _features_lobby_lobby_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/lobby/lobby-routing.module */ "w0PD");
/* harmony import */ var _features_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/admin/admin-routing.module */ "SgHw");
/* harmony import */ var _features_admin_admin_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/admin/admin.module */ "xDfr");
/* harmony import */ var _features_lobby_lobby_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/lobby/lobby.module */ "JPWn");
/* harmony import */ var _features_create_lobby_create_lobby_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/create-lobby/create-lobby.module */ "eTae");
/* harmony import */ var _features_create_lobby_create_lobby_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/create-lobby/create-lobby-routing.module */ "3OJA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        _services_champion_service__WEBPACK_IMPORTED_MODULE_4__["ChampionService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_region_service__WEBPACK_IMPORTED_MODULE_6__["RegionService"],
        _services_set_service__WEBPACK_IMPORTED_MODULE_7__["SetService"],
        _services_lobby_service__WEBPACK_IMPORTED_MODULE_5__["LobbyService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _features_home_home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
            _features_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_12__["AdminRoutingModule"],
            _features_lobby_lobby_routing_module__WEBPACK_IMPORTED_MODULE_11__["LobbyRoutingModule"],
            _features_create_lobby_create_lobby_routing_module__WEBPACK_IMPORTED_MODULE_16__["CreateLobbyRoutingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _features_home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
            _features_admin_admin_module__WEBPACK_IMPORTED_MODULE_13__["AdminModule"],
            _features_lobby_lobby_module__WEBPACK_IMPORTED_MODULE_14__["LobbyModule"],
            _features_create_lobby_create_lobby_module__WEBPACK_IMPORTED_MODULE_15__["CreateLobbyModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _features_home_home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
        _features_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_12__["AdminRoutingModule"],
        _features_lobby_lobby_routing_module__WEBPACK_IMPORTED_MODULE_11__["LobbyRoutingModule"],
        _features_create_lobby_create_lobby_routing_module__WEBPACK_IMPORTED_MODULE_16__["CreateLobbyRoutingModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _features_home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
        _features_admin_admin_module__WEBPACK_IMPORTED_MODULE_13__["AdminModule"],
        _features_lobby_lobby_module__WEBPACK_IMPORTED_MODULE_14__["LobbyModule"],
        _features_create_lobby_create_lobby_module__WEBPACK_IMPORTED_MODULE_15__["CreateLobbyModule"]] }); })();


/***/ }),

/***/ "eTae":
/*!**************************************************************!*\
  !*** ./src/app/features/create-lobby/create-lobby.module.ts ***!
  \**************************************************************/
/*! exports provided: CreateLobbyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLobbyModule", function() { return CreateLobbyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _create_lobby_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-lobby-routing.module */ "3OJA");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CreateLobbyModule {
}
CreateLobbyModule.ɵfac = function CreateLobbyModule_Factory(t) { return new (t || CreateLobbyModule)(); };
CreateLobbyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CreateLobbyModule });
CreateLobbyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _create_lobby_routing_module__WEBPACK_IMPORTED_MODULE_1__["CreateLobbyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CreateLobbyModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _create_lobby_routing_module__WEBPACK_IMPORTED_MODULE_1__["CreateLobbyRoutingModule"]] }); })();


/***/ }),

/***/ "evUj":
/*!**********************************************!*\
  !*** ./src/app/services/champion.service.ts ***!
  \**********************************************/
/*! exports provided: ChampionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionService", function() { return ChampionService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ChampionService {
    constructor() {
        this.noeudFireBaseChampions = '/map-champions';
        this.champions = new Map();
        this.championsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedChampionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getChampions() {
        firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].database().ref(this.noeudFireBaseChampions)
            .orderByKey()
            .on('value', (data) => {
            this.champions = (data && data.val()) ? new Map(Object.entries(data.val())) : new Map();
            console.log('chargement champions');
            console.log(this.champions);
            this.emitChampions();
        });
    }
    getChampionByCardRef(cardRef) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].database().ref(`${this.noeudFireBaseChampions}/${cardRef}`).once('value').then((data) => {
                resolve(data.val());
            }, (error) => {
                reject(error);
            });
        });
    }
    emitChampions() {
        this.championsSubject.next(this.champions);
    }
    emitSelectedChampion() {
        this.selectedChampionSubject.next(this.selectedChampion);
    }
    saveChampions() {
        // sauvegarde du tableau champions dans le noeud champions de la base de données 
        // (connexion directe contrairement à 
        // l'autre projet où l'on appelait des requêtes http)
        firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].database().ref(this.noeudFireBaseChampions).set(Object.fromEntries(this.champions));
    }
    updateOneChampion(champion) {
        if (champion) {
            // sauvegarde du champion dans le noeud correspondant
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].database().ref(`${this.noeudFireBaseChampions}/${champion.cardRef}`).set(champion);
        }
    }
    /**
     * ajout/mise à jour de la map des champions.
     * ne met pas à jour la base de données, mais remplace les champions dans la map champions
     */
    importOrUpdateChampions(mapChampionsToImport) {
        mapChampionsToImport.forEach((val, key) => {
            this.champions.set(key, val);
        });
        console.log('testtest : ' + this.champions);
        this.emitChampions();
    }
    selectChampion(champion) {
        this.selectedChampion = champion;
        this.emitSelectedChampion();
    }
}
ChampionService.ɵfac = function ChampionService_Factory(t) { return new (t || ChampionService)(); };
ChampionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ChampionService, factory: ChampionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fOOd":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "0HvM");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "RxMv");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "ihw/":
/*!*****************************************************************!*\
  !*** ./src/app/features/create-lobby/create-lobby.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateLobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLobbyComponent", function() { return CreateLobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CreateLobbyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateLobbyComponent.ɵfac = function CreateLobbyComponent_Factory(t) { return new (t || CreateLobbyComponent)(); };
CreateLobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateLobbyComponent, selectors: [["app-create-lobby"]], decls: 2, vars: 0, template: function CreateLobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create-lobby works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.red[_ngcontent-%COMP%] {\n  background: #ffc8c8;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: #c8ffc8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGUtbG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFDRjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLHNEQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxzREFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFHQTtFQUNFLHlCQUFBO0FBQUYiLCJmaWxlIjoiY3JlYXRlLWxvYmJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGlzdCB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMDAsIDIwMCk7XHJcbn1cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyNTUsIDIwMCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AuthService {
  constructor() {} // création d'un nouvel utilisateur avec email password


  createNewUser(email, password) {
    // promise car l'appel à firebase prend du temps => méthode asynchrone
    return new Promise((resolve, reject) => {
      firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then(userCredential => {
        resolve(userCredential);
      }, error => {
        reject(error);
      });
    });
  }

  signInUserWithEmailAndPassword(email, password) {
    // promise car l'appel à firebase prend du temps => méthode asynchrone
    return new Promise((resolve, reject) => {
      firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then(userCredential => {
        resolve(userCredential);
      }, error => {
        reject(error);
      });
    });
  }

  signInUserAnonymously() {
    // promise car l'appel à firebase prend du temps => méthode asynchrone
    return new Promise((resolve, reject) => {
      firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInAnonymously().then(userCredential => {
        resolve(userCredential);
      }, error => {
        reject(error);
      });
    });
  }

  signOutUser() {
    firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut();
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)();
};

AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ "paST":
/*!***********************************************************!*\
  !*** ./src/app/features/admin/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onSignInAnonymously(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onSignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Se d\u00E9connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged((user) => {
            if (user) {
                this.isAuth = true;
                this.userConnecte = user.uid;
            }
            else {
                this.isAuth = false;
                this.userConnecte = undefined;
            }
        });
    }
    onSignInAnonymously() {
        this.authService.signInUserAnonymously();
    }
    onSignOut() {
        this.authService.signOutUser();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], [1, "nav", "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/admin/import-data", 1, "nav-link"], [1, "nav", "navbar-nav"], ["class", "nav-item", 4, "ngIf"], [1, "nav-link", 3, "click"], [1, "glyphicon", "glyphicon-log-in"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Importer ou Mettre \u00E0 jour les donn\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 4, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 4, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "pnhM":
/*!*******************************************************************!*\
  !*** ./src/app/shared/champions-list/champions-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChampionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionsListComponent", function() { return ChampionsListComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_champion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/champion.service */ "evUj");
/* harmony import */ var src_app_services_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/region.service */ "Gu/d");
/* harmony import */ var src_app_services_set_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/set.service */ "6g/D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ChampionsListComponent_span_15_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const region_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", region_r3.name)("src", region_r3.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChampionsListComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChampionsListComponent_span_15_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const region_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onFilterByRegion(region_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChampionsListComponent_span_15_img_1_Template, 1, 2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", region_r3);
} }
function ChampionsListComponent_span_19_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const set_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", set_r8.name)("src", set_r8.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChampionsListComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChampionsListComponent_span_19_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const set_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onFilterBySet(set_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChampionsListComponent_span_19_img_1_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", set_r8);
} }
function ChampionsListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChampionsListComponent_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const entryChampion_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onClickChampion(entryChampion_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entryChampion_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", entryChampion_r13.value.fullArtsUrl[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", entryChampion_r13.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", entryChampion_r13.value.region.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", entryChampion_r13.value.region.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entryChampion_r13.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://dd.b.pvp.net/latest/core/en_us/img/sets/", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, entryChampion_r13.value.set), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", entryChampion_r13.value.set);
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
const _c1 = function (a1) { return { "col-xs-12": true, "hidden": a1 }; };
class ChampionsListComponent {
    constructor(championService, regionService, setService, router) {
        this.championService = championService;
        this.regionService = regionService;
        this.setService = setService;
        this.router = router;
        this.loading = true;
        this.champions = new Map();
        this.filteredChampions = new Map();
        this.championsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.regions = [];
        this.regionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.sets = [];
        this.setsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        // default fonction : console log du nom
        this.onClickChampion = this.onDetailsChampion;
    }
    ngOnInit() {
        this.championsSubscription = this.championService.championsSubject.subscribe((champions) => {
            this.champions = champions;
            this.filteredChampions = champions;
            console.log('juste avant de faire true');
            this.loading = false;
        });
        this.regionsSubscription = this.regionService.regionsSubject.subscribe((regions) => {
            this.regions = regions;
        });
        this.setsSubscription = this.setService.setsSubject.subscribe((sets) => {
            this.sets = sets;
        });
        // récupération des champions en base
        this.championService.getChampions();
        this.regionService.getRegions();
        this.setService.getSets();
    }
    ngOnDestroy() {
        this.regionsSubscription.unsubscribe();
        this.setsSubscription.unsubscribe();
        this.championsSubscription.unsubscribe();
    }
    onDetailsChampion(champion) {
        //this.router.navigate(['/champion', champion.cardRef]);
        //this.onClickChampion(champion);
        console.log(champion.name);
    }
    /** mécanique de filtre par une région, possibilité de stocker la région dans une liste pour filtrer par plusieurs régions */
    onFilterByRegion(region) {
        // on utilise la technique sioux consistant à transformer la map 
        // en array [K,V] avec [... map] en retransformant en map après
        this.filteredChampions = new Map([...this.champions]
            .filter(([cardRef, champion]) => champion.region.ref === region.ref));
    }
    /** mécanique de filtre par une région, possibilité de stocker la région dans une liste pour filtrer par plusieurs régions */
    onFilterBySet(set) {
        // on utilise la technique sioux consistant à transformer la map 
        // en array [K,V] avec [... map] en retransformant en map après
        this.filteredChampions = new Map([...this.champions]
            .filter(([cardRef, champion]) => champion.set === set.ref));
    }
}
ChampionsListComponent.ɵfac = function ChampionsListComponent_Factory(t) { return new (t || ChampionsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_champion_service__WEBPACK_IMPORTED_MODULE_2__["ChampionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_set_service__WEBPACK_IMPORTED_MODULE_4__["SetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ChampionsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChampionsListComponent, selectors: [["app-champions-list"]], inputs: { onClickChampion: "onClickChampion" }, decls: 23, vars: 13, consts: [[1, "row"], [1, "loader", "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "border", "rounded", "mb-3", "p-3", "bloc-filtres"], [1, "d-flex", "justify-content-start"], [1, "mr-2"], [3, "click", 4, "ngFor", "ngForOf"], ["data-masonry", "{\"percentPosition\": true }", 1, "bloc-champions", "overflow-auto", "p-2", "m-1", "row", 2, "max-height", "500px"], ["class", "card m-2 champion-card text-white", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "region-icon border rounded-circle", 3, "alt", "src", 4, "ngIf"], [1, "region-icon", "border", "rounded-circle", 3, "alt", "src"], ["class", "set-icon border rounded-circle", 3, "alt", "src", 4, "ngIf"], [1, "set-icon", "border", "rounded-circle", 3, "alt", "src"], [1, "card", "m-2", "champion-card", "text-white", 2, "cursor", "pointer", 3, "click"], [1, "text-white"], [1, "card-img", 3, "src", "alt"], [1, "card-img-overlay-champion"], [1, ""], [1, "region-icon", 3, "src", "alt"], [2, "vertical-align", "middle"], [1, "set-icon", "border", "rounded-circle", 3, "src", "alt"]], template: function ChampionsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Champions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Filtrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Filtrer par r\u00E9gion : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ChampionsListComponent_span_15_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Filtrer par set : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ChampionsListComponent_span_19_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ChampionsListComponent_div_21_Template, 10, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, !ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.regions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 7, ctx.filteredChampions));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LowerCasePipe"]], styles: ["@charset \"UTF-8\";\n\n.champion-card[_ngcontent-%COMP%] {\n  min-width: 160px;\n  max-width: 160px;\n  border: none;\n  padding: 0;\n  min-height: 76px;\n}\n.champion-card[_ngcontent-%COMP%]   .region-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  margin-right: 3px;\n}\n.champion-card[_ngcontent-%COMP%]   .card-img-overlay-champion[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #0007;\n}\n.champion-card[_ngcontent-%COMP%]   .card-img-overlay-champion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 0.9rem;\n}\n.champion-card[_ngcontent-%COMP%]   .card-img-overlay-champion[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .set-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 26px;\n  height: 26px;\n  position: absolute;\n  right: 0;\n  background-color: #ccc;\n}\n.bloc-filtres[_ngcontent-%COMP%]   .region-icon[_ngcontent-%COMP%], .bloc-filtres[_ngcontent-%COMP%]   .set-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-right: 3px;\n  cursor: pointer;\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFtcGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFHaEI7O0NBQUE7QUFHQTtFQUNFLGdCQVBtQjtFQVFuQixnQkFSbUI7RUFTbkIsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUZOO0FBSU07RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQU5KIiwiZmlsZSI6ImNoYW1waW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gIE5vdGF0aW9ucyBzY3NzIGltYnJpcXXDqWVzIGF2ZWMgdXRpbGlzYXRpb24gZCd1bmUgdmFyaWFibGVcbiovXG4uY2hhbXBpb24tY2FyZCB7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogNzZweDtcbn1cbi5jaGFtcGlvbi1jYXJkIC5yZWdpb24taWNvbiB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLmNoYW1waW9uLWNhcmQgLmNhcmQtaW1nLW92ZXJsYXktY2hhbXBpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA3O1xufVxuLmNoYW1waW9uLWNhcmQgLmNhcmQtaW1nLW92ZXJsYXktY2hhbXBpb24gaDUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5jaGFtcGlvbi1jYXJkIC5jYXJkLWltZy1vdmVybGF5LWNoYW1waW9uIGg1IC5zZXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5ibG9jLWZpbHRyZXMgLnJlZ2lvbi1pY29uLCAuYmxvYy1maWx0cmVzIC5zZXQtaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59Il19 */"] });


/***/ }),

/***/ "v/x+":
/*!*******************************************!*\
  !*** ./src/app/utils/constantes.utils.ts ***!
  \*******************************************/
/*! exports provided: Constantes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constantes", function() { return Constantes; });
const Constantes = {
    urlDataDragon: 'https://dd.b.pvp.net/latest/',
    routeChampionsList: 'champions-list'
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/home/home.component */ "0HvM");
/* harmony import */ var _shared_champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/champions-list/champions-list.component */ "pnhM");
/* harmony import */ var _utils_constantes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/constantes.utils */ "v/x+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: _utils_constantes_utils__WEBPACK_IMPORTED_MODULE_3__["Constantes"].routeChampionsList, component: _shared_champions_list_champions_list_component__WEBPACK_IMPORTED_MODULE_2__["ChampionsListComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _features_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w0PD":
/*!********************************************************!*\
  !*** ./src/app/features/lobby/lobby-routing.module.ts ***!
  \********************************************************/
/*! exports provided: LobbyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyRoutingModule", function() { return LobbyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lobby_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lobby.component */ "Xzks");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'lobby/:lobbyId', component: _lobby_component__WEBPACK_IMPORTED_MODULE_1__["LobbyComponent"] }
];
class LobbyRoutingModule {
}
LobbyRoutingModule.ɵfac = function LobbyRoutingModule_Factory(t) { return new (t || LobbyRoutingModule)(); };
LobbyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LobbyRoutingModule });
LobbyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LobbyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xDfr":
/*!************************************************!*\
  !*** ./src/app/features/admin/admin.module.ts ***!
  \************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "/ewu");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ "SgHw");
/* harmony import */ var _import_data_import_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-data/import-data.component */ "Xsa4");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "paST");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"],
        _import_data_import_data_component__WEBPACK_IMPORTED_MODULE_2__["ImportDataComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "znGk":
/*!*******************************************!*\
  !*** ./src/app/services/lobby.service.ts ***!
  \*******************************************/
/*! exports provided: LobbyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyService", function() { return LobbyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class LobbyService {
    constructor() {
        this.noeudFireBaseLobbies = '/map-lobbies';
        this.lobbies = new Map();
        this.lobbiesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.lobbyCourantSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getLobbies() {
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(this.noeudFireBaseLobbies)
            .orderByKey()
            .on('value', (data) => {
            this.lobbies = (data && data.val()) ? new Map(Object.entries(data.val())) : new Map();
            console.log('chargement lobbies');
            console.log(this.lobbies);
            this.emitLobbies();
        });
    }
    getLobbyCourantByRef(refLobby) {
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(`${this.noeudFireBaseLobbies}/${refLobby}`)
            .on('value', (data) => {
            this.lobbyCourant = (data && data.val()) ? data.val() : {};
            console.log('chargement lobby courant');
            console.log(this.lobbyCourant);
            this.emitLobbyCourant();
        });
    }
    getLobbyByRef(refLobby) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(`${this.noeudFireBaseLobbies}/${refLobby}`)
                .once('value').then((data) => {
                resolve(data.val());
            }, (error) => {
                reject(error);
            });
        });
    }
    emitLobbies() {
        this.lobbiesSubject.next(this.lobbies);
    }
    emitLobbyCourant() {
        this.lobbyCourantSubject.next(this.lobbyCourant);
    }
    saveLobbies() {
        // (connexion directe contrairement à 
        // l'autre projet où l'on appelait des requêtes http)
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(this.noeudFireBaseLobbies).set(Object.fromEntries(this.lobbies));
    }
    saveOrUpdateLobby(lobby) {
        if (!lobby.refLobby) {
            lobby.refLobby = this.genererNewCleLobby();
            // alimentation de l'ordre des étapes
            for (let i = 0; i < lobby.pickBanSteps.length; i++) {
                const step = lobby.pickBanSteps[i];
                step.order = i;
            }
            lobby.teamA.picks = [];
            lobby.teamA.bans = [];
            lobby.teamB.picks = [];
            lobby.teamB.bans = [];
        }
        // sauvegarde du lobby dans le noeud correspondant
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref(`${this.noeudFireBaseLobbies}/${lobby.refLobby}`).set(lobby);
    }
    genererNewCleLobby() {
        let now = new Date();
        let timeStampNow = Date.now();
        const random = Math.floor(Math.random() * 255);
        // on additionne le nombre entre 0 et 255 généré avec le timestamp pour avoir un nombre unique
        let newKey = `Lobby${now.getFullYear()}${now.getMonth()}${now.getDate()}${timeStampNow + random}`;
        return newKey;
    }
}
LobbyService.ɵfac = function LobbyService_Factory(t) { return new (t || LobbyService)(); };
LobbyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LobbyService, factory: LobbyService.ɵfac, providedIn: 'root' });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map