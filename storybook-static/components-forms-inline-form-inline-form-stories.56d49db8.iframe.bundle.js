(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[392],{"./src/stories/components/forms/inline-form/inline-form.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InlineForm:function(){return InlineForm},__namedExportsOrder:function(){return __namedExportsOrder}});var _inline_form_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/forms/inline-form/inline-form.twig"),_inline_form_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_inline_form_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Forms/Inline Form"};const InlineForm=(_ref=>{let{label:label,...args}=_ref;return _inline_form_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});InlineForm.parameters={...InlineForm.parameters,docs:{...InlineForm.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...InlineForm.parameters?.docs?.source}}};const __namedExportsOrder=["InlineForm"]},"./src/stories/components/forms/inline-form/inline-form.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<label for="inline">Inline</label>\n<div class="input-group">\n  <span class="input-group-label">$</span>\n  <input id="inline" class="input-group-field" type="number">\n  <div class="input-group-button">\n    <input type="submit" class="button" value="Submit">\n  </div>\n</div>\n\n\n'}],id:"src/stories/components/forms/inline-form/inline-form.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/forms/inline-form/inline-form.twig",module.exports.default=module.exports}}]);