(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[3739],{"./src/stories/components/informational/countdown/countdown.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Countdown:function(){return Countdown},__namedExportsOrder:function(){return __namedExportsOrder}});var _countdown_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/informational/countdown/countdown.twig"),_countdown_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_countdown_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Informational/Countdown"};const Countdown=(_ref=>{let{label:label,...args}=_ref;return _countdown_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Countdown.args={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",label:"Alert"},Countdown.parameters={...Countdown.parameters,docs:{...Countdown.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Countdown.parameters?.docs?.source}}};const __namedExportsOrder=["Countdown"]},"./src/stories/components/informational/countdown/countdown-item.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="countdown_item">\n  <span class="countdown_item_number" data-countdown-property="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"property",match:["property"]}]},{type:"raw",value:'"></span>\n  <span class="countdown_item_label">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"property",match:["property"]}]},{type:"raw",value:"</span>\n</div>\n"}],id:"src/stories/components/informational/countdown/countdown-item.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/informational/countdown/countdown-item.twig",module.exports.default=module.exports},"./src/stories/components/informational/countdown/countdown.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/informational/countdown/countdown-item.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="countdown d-flex" data-countdown="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"date",match:["date"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"1678991854"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'">\n  '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/informational/countdown/countdown-item.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"property"},{type:"Twig.expression.type.string",value:"days"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/informational/countdown/countdown-item.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"property"},{type:"Twig.expression.type.string",value:"hours"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/informational/countdown/countdown-item.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"property"},{type:"Twig.expression.type.string",value:"min"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/informational/countdown/countdown-item.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"property"},{type:"Twig.expression.type.string",value:"sec"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/components/informational/countdown/countdown.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/informational/countdown/countdown.twig",module.exports.default=module.exports}}]);