(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[1836],{"./src/stories/components/inline-text/flag/flag.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Flag:function(){return Flag},__namedExportsOrder:function(){return __namedExportsOrder}});var _flag_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/inline-text/flag/flag.twig"),_flag_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_flag_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Inline Text/Flag",argTypes:{class:{control:{type:"text"}},text:{control:{type:"text"}}}};const Flag=(_ref=>{let{label:label,...args}=_ref;return _flag_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Flag.args={text:"Flag"},Flag.parameters={...Flag.parameters,docs:{...Flag.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Flag.parameters?.docs?.source}}};const __namedExportsOrder=["Flag"]},"./src/stories/components/inline-text/flag/flag.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<span class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:' flag bg-white border-1 px-1 py-1 color-gray">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</span>\n"}],id:"src/stories/components/inline-text/flag/flag.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/inline-text/flag/flag.twig",module.exports.default=module.exports}}]);