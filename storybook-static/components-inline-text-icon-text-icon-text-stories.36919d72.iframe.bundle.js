(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[7445],{"./src/stories/components/inline-text/icon-text/icon-text.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconText:function(){return IconText},__namedExportsOrder:function(){return __namedExportsOrder}});var _icon_text_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/inline-text/icon-text/icon-text.twig"),_icon_text_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_icon_text_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Inline Text/Icon Text"};const IconText=(_ref=>{let{label:label,...args}=_ref;return _icon_text_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});IconText.parameters={...IconText.parameters,docs:{...IconText.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...IconText.parameters?.docs?.source}}};const __namedExportsOrder=["IconText"]},"./src/stories/components/inline-text/icon-text/icon-text.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<span class="d-inline-flex g-1 lh-1">\n  <span class="icon-email icon icon--tiny"></span>\n  Text with icon, vertically align top\n</span>\n<br />\n<span class="d-inline-flex g-1 align-items-center lh-1">\n  <span class="icon-email icon  icon--tiny"></span>\n  Text with icon, vertically align middle (uses align-items-center)\n</span>\n<br />\n<h2 class="d-inline-flex g-1 align-items-center lh-1">\n  <span class="icon-email icon"></span>\n  Heading with icon\n</h2>\n'}],id:"src/stories/components/inline-text/icon-text/icon-text.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/inline-text/icon-text/icon-text.twig",module.exports.default=module.exports}}]);