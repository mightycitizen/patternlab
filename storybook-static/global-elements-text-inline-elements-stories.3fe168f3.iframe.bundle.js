(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[3853],{"./src/stories/global/elements/text/inline-elements.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InlineElements:function(){return InlineElements},__namedExportsOrder:function(){return __namedExportsOrder}});var _inline_elements_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/global/elements/text/inline-elements.twig"),_inline_elements_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_inline_elements_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Global/Elements/Inline Elements"};const InlineElements=(_ref=>{let{label:label,...args}=_ref;return _inline_elements_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});InlineElements.parameters={...InlineElements.parameters,docs:{...InlineElements.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...InlineElements.parameters?.docs?.source}}};const __namedExportsOrder=["InlineElements"]},"./src/stories/global/elements/text/inline-elements.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="text">\n\n\t<p>\n\t\t<a href="#">This is a text link</a>.<br/>\n\t\t<strong>Strong is used to indicate strong importance</strong>.<br/>\n\n\t\t<em>This text has added emphasis</em>.<br/>\n\n\t\t<s>This text has a strikethrough</s>.<br/>\n\n\t\tSuperscript<sup>®</sup>.<br/>\n\n\t\tSubscript for things like H<sub>2</sub>O.<br/>\n\n\t\t<small>This small text is small for for fine print, etc.</small>.<br/>\n\n\t\tAbbreviation: <abbr title="HyperText Markup Language">HTML</abbr>.\n\t</p>\n\n\n\n</div>\x3c!--end .text--\x3e\n'}],id:"src/stories/global/elements/text/inline-elements.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/global/elements/text/inline-elements.twig",module.exports.default=module.exports}}]);