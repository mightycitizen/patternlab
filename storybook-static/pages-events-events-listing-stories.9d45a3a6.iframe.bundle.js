(self.webpackChunkmc_foundation_build=self.webpackChunkmc_foundation_build||[]).push([[7717],{"./src/stories/pages/events/events-listing.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EventsListing:function(){return EventsListing},__namedExportsOrder:function(){return __namedExportsOrder}});var _events_listing_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/pages/events/events-listing.twig"),_events_listing_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_events_listing_twig__WEBPACK_IMPORTED_MODULE_0__),_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/global/placeholders/images.json"),_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/global/placeholders/components.json"),_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/global/placeholders/global.json");__webpack_exports__.default={title:"Pages/Events/Events Listing"};const EventsListing=(_ref=>{let{label:label,...args}=_ref;return _events_listing_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({}),type={label:"Event",handle:"events"},items=[{image:{src:_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_1__.W+_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_1__.J.landscapeCroppedMedium.width+"x"+_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_1__.J.landscapeCroppedMedium.height,alt:"Alt Text"},type:type,heading:"Item Title",summary:"Lorem ipsum dolor sit amet consectetur adipiscing.",start_date:{month_short:"Dec",day:20,unformatted:"2020-12-20",full:"December 20, 2020"},categories:[{url:"#",title:"Category"}]},{type:type,heading:"Item Title",summary:"Lorem ipsum dolor sit amet consectetur adipiscing.",start_date:{month_short:"Dec",day:20,unformatted:"2020-12-20",full:"December 20, 2020"},categories:[{url:"#",title:"Category"}]},{type:type,heading:"Item Title",summary:"Lorem ipsum dolor sit amet consectetur adipiscing.",start_date:{month_short:"Dec",day:20,unformatted:"2020-12-20",full:"December 20, 2020"},categories:[{url:"#",title:"Category"}]},{type:type,heading:"Item Title",summary:"Lorem ipsum dolor sit amet consectetur adipiscing.",start_date:{month_short:"Dec",day:20,unformatted:"2020-12-20",full:"December 20, 2020"},categories:[{url:"#",title:"Category"}]}];EventsListing.args={breadcrumbs:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_2__.Kb,logo:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_3__.jY,pagination:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_2__.oA,menu:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_3__.GI,social:_global_placeholders_global_json__WEBPACK_IMPORTED_MODULE_3__.xs,items:items},EventsListing.parameters={layout:"fullscreen"},EventsListing.parameters={...EventsListing.parameters,docs:{...EventsListing.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...EventsListing.parameters?.docs?.source}}};const __namedExportsOrder=["EventsListing"]},"./src/stories/pages/events/events-listing.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/hero/hero.twig"),__webpack_require__("./src/stories/components/listing/filter/filter.twig"),__webpack_require__("./src/stories/components/listing/list/list.twig"),__webpack_require__("./src/stories/components/listing/pagination/pagination.twig"),__webpack_require__("./src/stories/components/sections/section.twig"),__webpack_require__("./src/stories/wrappers/default.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.extends",stack:[{type:"Twig.expression.type.string",value:"src/stories/wrappers/default.twig"}]}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"top",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/hero/hero.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"heading"},{type:"Twig.expression.type.string",value:"Events Listing"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}]}},{type:"logic",token:{type:"Twig.logic.type.set",key:"listing_image_transform",expression:[{type:"Twig.expression.type.variable",value:"image_sizes",match:["image_sizes"]},{type:"Twig.expression.type.key.period",key:"landscapeCroppedMedium"}]}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"main",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"style"},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/listing/filter/filter.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"ajax"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/listing/list/list.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"list"},{type:"Twig.expression.type.variable",value:"items",match:["items"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/listing/pagination/pagination.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"pagination",match:["pagination"]}]}},{type:"raw",value:"    "}]}},{type:"raw",value:"  "}]}}]}}],id:"src/stories/pages/events/events-listing.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/pages/events/events-listing.twig",module.exports.default=module.exports}}]);