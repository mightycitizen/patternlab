(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[8346],{"./src/stories/components/forms/checkbox/checkbox.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checkbox:function(){return Checkbox},__namedExportsOrder:function(){return __namedExportsOrder}});var _checkbox_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/forms/checkbox/checkbox.twig"),_checkbox_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_checkbox_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Forms/Checkbox",argTypes:{required:{control:{type:"boolean"}}}};const Checkbox=(_ref=>{let{label:label,...args}=_ref;return _checkbox_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Checkbox.args={field_id:"field",id:0,value:"",label:"Label"},Checkbox.parameters={...Checkbox.parameters,docs:{...Checkbox.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Checkbox.parameters?.docs?.source}}};const __namedExportsOrder=["Checkbox"]},"./src/stories/components/forms/checkbox/checkbox.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<span>\n  <input class="custom" id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"field_id",match:["field_id"]}]},{type:"raw",value:"_"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" name="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"field_name",match:["field_name"]}]},{type:"raw",value:'" value="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]},{type:"raw",value:'" type="checkbox" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"required",match:["required"]}],output:[{type:"raw",value:"required "}]}},{type:"raw",value:'>\n  <label for="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"field_id",match:["field_id"]}]},{type:"raw",value:"_"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'"> '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]}]},{type:"raw",value:"</label>\n</span>\n"}],id:"src/stories/components/forms/checkbox/checkbox.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/forms/checkbox/checkbox.twig",module.exports.default=module.exports}}]);