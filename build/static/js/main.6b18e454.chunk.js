(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return App}));var C_Users_AISHAT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),b="",dotPresent=!1;function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(C_Users_AISHAT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),_useState4=Object(C_Users_AISHAT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),themeOne=_useState4[0],setThemeOne=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState6=Object(C_Users_AISHAT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),themeTwo=_useState6[0],setThemeTwo=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState8=Object(C_Users_AISHAT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),themeThree=_useState8[0],setThemeThree=_useState8[1],handleClick=function(e){if("."!==e.target.name||dotPresent){if("."===e.target.name&&dotPresent)return}else dotPresent=!0;b+=e.target.name,setResult(b)},handleOperations=function(e){dotPresent=!1,b+=e.target.name,setResult(b)},clear=function(){setResult("0"),b="",dotPresent=!1,Element.current="0"},del=function(){b="",dotPresent=!1,setResult(result.slice(0,-1))},calc=function calc(){b="",dotPresent=!1;try{setResult(eval(result).toString())}catch(err){setResult("error")}};function ThemeOne(){setThemeOne(!0),setThemeTwo(!1),setThemeThree(!1)}function ThemeTwo(){setThemeOne(!1),setThemeTwo(!0),setThemeThree(!1)}function ThemeThree(){setThemeOne(!1),setThemeTwo(!1),setThemeThree(!0)}var changeDifferent=function(){return themeOne?"different-color different-color:hover":themeTwo?"different-color themetwo different-color:hover themetwo":themeThree?"different-color different-color:hover themethree":"different-color different-color:hover"},changeContainer=function(){return themeOne?"container":themeTwo?"container themetwo":themeThree?"container themethree":"container"},changeMain=function(){return themeOne?"main":themeTwo?"main themetwo":themeThree?"main themethree":void 0},changeRed=function(){return themeOne?"equal equal:hover":themeTwo?"equal themetwo equal:hover themetwo":themeThree?"equal themethree equal:hover themethree":"equal equal:hover"},changeToggle=function(){return themeOne?"toggle":themeTwo?"toggle themetwo":themeThree?"toggle themethree":"toggle"},changeKeys=function(){return themeOne?"keys":themeTwo?"keys themetwo":themeThree?"keys themethree":"keys"};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:changeContainer(),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"heading",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"calc"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"lab",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{style:{marginTop:"40px"},children:"THEME"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"numtog",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"number",style:{marginBottom:"15px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"\xa0 1 \xa0 2 \xa0 3 "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:changeToggle(),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{className:"switch-1",name:"toggle",type:"radio",value:"1",id:"switch-1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label",{"data-theme":"dark-blue",for:"switch-1",id:"label-1",onClick:ThemeOne,children:"\xa0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{className:"switch-2",name:"toggle",type:"radio",value:"2",id:"switch-2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label",{"data-theme":"light",for:"switch-2",id:"label-2",onClick:ThemeTwo,children:"\xa0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{className:"switch-3",name:"toggle",type:"radio",value:"3",id:"switch-3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label",{"data-theme":"purple",for:"switch-3",id:"label-3",onClick:ThemeThree,children:"\xa0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"selector",children:"\xa0"})]})]})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:changeMain(),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"main-display",style:{textAlign:"right",marginTop:"30px",fontSize:"18px"},children:result})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:changeKeys(),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"parent",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"7",onClick:handleClick,children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"8",onClick:handleClick,children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"9",onClick:handleClick,children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"delete",className:changeDifferent(),onClick:del,children:"Del"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"parent",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"4",onClick:handleClick,children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"5",onClick:handleClick,children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"6",onClick:handleClick,children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"+",onClick:handleOperations,children:"+"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"parent",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"1",onClick:handleClick,children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"2",onClick:handleClick,children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"3",onClick:handleClick,children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"-",onClick:handleOperations,children:"-"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"parent",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:".",onClick:handleClick,children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"0",onClick:handleClick,children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"/",onClick:handleOperations,children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"*",onClick:handleOperations,children:"x"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"parent-1",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"",id:"clear",className:changeDifferent(),onClick:clear,children:"Reset"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"=",className:changeRed(),onClick:calc,children:"="})]})]})]})}},function(e,_,t){"use strict";t.r(_);t(1);var r=t(4),n=t.n(r),c=(t(11),t(5)),a=t(0);n.a.render(Object(a.jsx)(c.a,{}),document.getElementById("root"))},,,,,function(e,_,t){},function(e,_,t){}],[[6,1,2]]]);
//# sourceMappingURL=main.6b18e454.chunk.js.map