(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[9213],{"./src/stories/components/inline-text/label/label.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Label:function(){return Label},__namedExportsOrder:function(){return __namedExportsOrder}});var _label_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/inline-text/label/label.twig"),_label_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_label_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Inline Text/Label",argTypes:{class:{control:{type:"text"}},text:{control:{type:"text"}}}};const Label=(_ref=>{let{label:label,...args}=_ref;return _label_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Label.args={text:"Label"},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Label.parameters?.docs?.source}}};const __namedExportsOrder=["Label"]},"./src/stories/components/inline-text/label/label.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<span class="text-uppercase ls-1 fw-bold">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"\n    "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content",output:[]}},{type:"raw",value:"</span>\n"}],id:"src/stories/components/inline-text/label/label.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/inline-text/label/label.twig",module.exports.default=module.exports}}]);