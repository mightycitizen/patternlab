import{T as s,t as e}from"./twig-DGqAAA8S.js";import{a as p,D as n}from"./twig-xRDxs_F9.js";import"./section-CtV-pKbR.js";import"./accordion-xc0Y-QlE.js";p(s);s.cache(!1);e.twig({id:"@components/containers/accordion/accordion.twig",data:[{type:"raw",value:`

<ul id="`,position:{start:0,end:10}},{type:"output",position:{start:10,end:38},stack:[{type:"Twig.expression.type.variable",value:"accordion_id",match:["accordion_id"],position:{start:10,end:38}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:10,end:38}}]},{type:"raw",value:'" class="list-none space-y-4 accordion ',position:{start:38,end:77}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:77,end:105},output:[{type:"raw",value:"accordion--",position:{start:105,end:116}},{type:"output",position:{start:116,end:140},stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"],position:{start:116,end:140}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:116,end:140}}]}]},position:{open:{start:77,end:105},close:{start:140,end:151}}},{type:"raw",value:'" x-data="',position:{start:151,end:161}},{type:"output",position:{start:161,end:170},stack:[{type:"Twig.expression.type.string",value:"{",position:{start:161,end:170}}]},{type:"raw",value:"expanded: null ",position:{start:170,end:185}},{type:"output",position:{start:185,end:194},stack:[{type:"Twig.expression.type.string",value:"}",position:{start:185,end:194}}]},{type:"raw",value:`">

  `,position:{start:194,end:200}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"items",match:["items"]}],position:{start:200,end:223},output:[{type:"raw",value:"    ",position:{start:224,end:228}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/containers/accordion/accordion-item.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"item"},{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:228,end:334}},position:{start:228,end:334}},{type:"raw",value:"  ",position:{start:335,end:337}}]},position:{open:{start:200,end:223},close:{start:337,end:349}}},{type:"raw",value:`</ul>
`,position:{start:350,end:350}}],precompiled:!0});e.twig({id:"@components/sections/section.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:0,end:26}},position:{start:0,end:26}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:27,end:72},output:[{type:"raw",value:"  ",position:{start:73,end:75}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-lg"}],position:{start:75,end:119}},position:{start:75,end:119}}]},position:{open:{start:27,end:72},close:{start:120,end:168}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:120,end:168},output:[{type:"raw",value:`  
  `,position:{start:168,end:173}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-xl"}],position:{start:173,end:217}},position:{start:173,end:217}}]},position:{open:{start:120,end:168},close:{start:218,end:229}}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:230,end:265},output:[{type:"raw",value:`  
  `,position:{start:265,end:270}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"background_style",match:["background_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"gradient"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:270,end:319},output:[{type:"raw",value:"    ",position:{start:320,end:324}},{type:"logic",token:{type:"Twig.logic.type.set",key:"background_color",expression:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-200"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:324,end:378}},position:{start:324,end:378}},{type:"raw",value:`    
    `,position:{start:378,end:387}},{type:"logic",token:{type:"Twig.logic.type.set",key:"section_class",expression:[{type:"Twig.expression.type.string",value:"bg-gradient-to-b lg:bg-gradient-to-r from-"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:" to-white"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:387,end:490}},position:{start:387,end:490}},{type:"raw",value:"  ",position:{start:491,end:493}}]},position:{open:{start:270,end:319},close:{start:493,end:503}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:493,end:503},output:[{type:"raw",value:"    ",position:{start:504,end:508}},{type:"logic",token:{type:"Twig.logic.type.set",key:"background_color",expression:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"primary"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-100"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-200"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:508,end:622}},position:{start:508,end:622}},{type:"raw",value:"    ",position:{start:623,end:627}},{type:"logic",token:{type:"Twig.logic.type.set",key:"section_class",expression:[{type:"Twig.expression.type.string",value:"bg-"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:627,end:677}},position:{start:627,end:677}},{type:"raw",value:"  ",position:{start:678,end:680}}]},position:{open:{start:493,end:503},close:{start:680,end:691}}}]},position:{open:{start:230,end:265},close:{start:692,end:703}}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:704,end:743},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"intro_class",expression:[{type:"Twig.expression.type.string",value:"text-center"}],position:{start:743,end:780}},position:{start:743,end:780}}]},position:{open:{start:704,end:743},close:{start:780,end:791}}},{type:"raw",value:`
`,position:{start:792,end:793}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"intro",position:{start:793,end:808},output:[{type:"raw",value:"  ",position:{start:809,end:811}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:811,end:845},output:[{type:"raw",value:'      <div class="section_intro ',position:{start:846,end:878}},{type:"output",position:{start:878,end:895},stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"],position:{start:878,end:895}}]},{type:"raw",value:` ">
        <div class="grid `,position:{start:895,end:924}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:924,end:956},output:[{type:"raw",value:"grid-cols-12",position:{start:956,end:968}}]},position:{open:{start:924,end:956},close:{start:968,end:979}}},{type:"raw",value:` gap-y-6 gap-x-10 items-center justify-center">
          `,position:{start:979,end:1037}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1037,end:1069},output:[{type:"raw",value:`            <div class="col-span-12 md:col-span-5 lg:col-span-6" >
              <div class="image-size--landscapeCroppedMedium">
                <img loading="lazy" src="`,position:{start:1070,end:1241}},{type:"output",position:{start:1241,end:1264},stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"],position:{start:1241,end:1264}},{type:"Twig.expression.type.key.period",position:{start:1241,end:1264},key:"src"}]},{type:"raw",value:'" alt="',position:{start:1264,end:1271}},{type:"output",position:{start:1271,end:1294},stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"],position:{start:1271,end:1294}},{type:"Twig.expression.type.key.period",position:{start:1271,end:1294},key:"alt"}]},{type:"raw",value:`" class="w-full">
              </div>
            </div>
          `,position:{start:1294,end:1362}}]},position:{open:{start:1037,end:1069},close:{start:1362,end:1373}}},{type:"raw",value:'          <div class="col-span-12 ',position:{start:1374,end:1408}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1408,end:1440},output:[{type:"raw",value:"md:col-span-7 lg:col-span-6",position:{start:1440,end:1467}}]},position:{open:{start:1408,end:1440},close:{start:1467,end:1512}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:1467,end:1512},output:[{type:"raw",value:"md:col-span-8",position:{start:1512,end:1525}}]},position:{open:{start:1467,end:1512},close:{start:1525,end:1536}}},{type:"raw",value:`">
            <h2 class="section_heading">`,position:{start:1536,end:1579}},{type:"output",position:{start:1579,end:1600},stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"],position:{start:1579,end:1600}}]},{type:"raw",value:`</h2>
            `,position:{start:1600,end:1618}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1618,end:1655},output:[{type:"raw",value:'              <h3 class="section_subheading">',position:{start:1656,end:1701}},{type:"output",position:{start:1701,end:1725},stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"],position:{start:1701,end:1725}}]},{type:"raw",value:`</h3>
            `,position:{start:1725,end:1743}}]},position:{open:{start:1618,end:1655},close:{start:1743,end:1754}}},{type:"raw",value:"            ",position:{start:1755,end:1767}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1767,end:1805},output:[{type:"raw",value:'              <p class="lead ',position:{start:1806,end:1835}},{type:"output",position:{start:1835,end:1886},stack:[{type:"Twig.expression.type.variable",value:"section_description_size",match:["section_description_size"],position:{start:1835,end:1886}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:1835,end:1886},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:1835,end:1886}},{type:"Twig.expression.type.string",value:"text-xl",position:{start:1835,end:1886}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:1835,end:1886},expression:!1}]}]},{type:"raw",value:'">',position:{start:1886,end:1888}},{type:"output",position:{start:1888,end:1913},stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"],position:{start:1888,end:1913}}]},{type:"raw",value:`</p>
            `,position:{start:1913,end:1930}}]},position:{open:{start:1767,end:1805},close:{start:1930,end:1941}}},{type:"raw",value:"            ",position:{start:1942,end:1954}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1954,end:1987},output:[{type:"raw",value:"              ",position:{start:1988,end:2002}},{type:"logic",token:{type:"Twig.logic.type.include",only:4,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/links/button/button.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"color"},{type:"Twig.expression.type.string",value:"secondary"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:2002,end:2141}},position:{start:2002,end:2141}},{type:"raw",value:"            ",position:{start:2142,end:2154}}]},position:{open:{start:1954,end:1987},close:{start:2154,end:2165}}},{type:"raw",value:`          </div>
        </div>
      </div>
    `,position:{start:2166,end:2215}}]},position:{open:{start:811,end:845},close:{start:2215,end:2226}}}]},position:{open:{start:793,end:808},close:{start:2227,end:2239}}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"content",position:{start:2240,end:2257},output:[{type:"raw",value:"  ",position:{start:2258,end:2260}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type._function",fn:"block",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"section_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["| trim","trim"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:2260,end:2312},output:[{type:"raw",value:`    <div class="section_content" >
      `,position:{start:2313,end:2354}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:2354,end:2381},output:[{type:"raw",value:"      ",position:{start:2382,end:2388}}]},position:{open:{start:2354,end:2381},close:{start:2388,end:2402}}},{type:"raw",value:`    </div>
  `,position:{start:2403,end:2416}}]},position:{open:{start:2260,end:2312},close:{start:2416,end:2427}}}]},position:{open:{start:2240,end:2257},close:{start:2428,end:2440}}},{type:"raw",value:"<section ",position:{start:2441,end:2450}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2450,end:2479},output:[{type:"raw",value:'id="',position:{start:2479,end:2483}},{type:"output",position:{start:2483,end:2499},stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"],position:{start:2483,end:2499}}]},{type:"raw",value:'"',position:{start:2499,end:2500}}]},position:{open:{start:2450,end:2479},close:{start:2500,end:2511}}},{type:"raw",value:` 
  class="relative section 
  `,position:{start:2511,end:2542}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:2542,end:2579},output:[{type:"raw",value:`    py-5 lg:py-10
  `,position:{start:2580,end:2600}}]},position:{open:{start:2542,end:2579},close:{start:2600,end:2610}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:2600,end:2610},output:[{type:"raw",value:`    py-10 lg:py-16
  `,position:{start:2611,end:2632}}]},position:{open:{start:2600,end:2610},close:{start:2632,end:2643}}},{type:"raw",value:`  

  `,position:{start:2643,end:2649}},{type:"output",position:{start:2649,end:2678},stack:[{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"],position:{start:2649,end:2678}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:2649,end:2678}}]},{type:"raw",value:` 
  transition-opacity duration-1000 ease-in-out  
  `,position:{start:2678,end:2731}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"collapse",match:["collapse"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2731,end:2758},output:[{type:"raw",value:" section--collapse",position:{start:2758,end:2776}}]},position:{open:{start:2731,end:2758},close:{start:2776,end:2787}}},{type:"raw",value:`" 
    :class="show ? 'opacity-100' : 'opacity-0'"    
    x-data="`,position:{start:2787,end:2854}},{type:"output",position:{start:2854,end:2861},stack:[{type:"Twig.expression.type.string",value:"{",position:{start:2854,end:2861}}]},{type:"raw",value:" show: false ",position:{start:2861,end:2874}},{type:"output",position:{start:2874,end:2881},stack:[{type:"Twig.expression.type.string",value:"}",position:{start:2874,end:2881}}]},{type:"raw",value:`"  x-intersect="show = true" >
  `,position:{start:2881,end:2914}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2914,end:2951},output:[{type:"raw",value:`    <div class="position-unset">
      `,position:{start:2952,end:2991}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2991,end:3028},output:[{type:"raw",value:'<img class=" section_background absolute object-cover left-0 h-full w-full top-0 opacity-30" src="',position:{start:3028,end:3126}},{type:"output",position:{start:3126,end:3154},stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"],position:{start:3126,end:3154}},{type:"Twig.expression.type.key.period",position:{start:3126,end:3154},key:"src"}]},{type:"raw",value:'" alt="" loading="lazy"/>',position:{start:3154,end:3179}}]},position:{open:{start:2991,end:3028},close:{start:3179,end:3190}}},{type:"raw",value:"      ",position:{start:3191,end:3197}},{type:"raw",value:`
    </div>
  `,position:{start:3345,end:3359}}]},position:{open:{start:2914,end:2951},close:{start:3359,end:3370}}},{type:"raw",value:'  <div class="',position:{start:3371,end:3385}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"exclude_container",match:["exclude_container"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3385,end:3421},output:[{type:"raw",value:"max-w-full lg:px-0",position:{start:3421,end:3439}}]},position:{open:{start:3385,end:3421},close:{start:3439,end:3450}}},{type:"raw",value:" ",position:{start:3450,end:3451}},{type:"output",position:{start:3451,end:3478},stack:[{type:"Twig.expression.type.variable",value:"width_class",match:["width_class"],position:{start:3451,end:3478}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3451,end:3478}}]},{type:"raw",value:" container ",position:{start:3478,end:3489}},{type:"output",position:{start:3489,end:3515},stack:[{type:"Twig.expression.type.variable",value:"grid_class",match:["grid_class"],position:{start:3489,end:3515}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3489,end:3515}}]},{type:"raw",value:` relative z-10" >
    `,position:{start:3515,end:3537}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"side"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:3537,end:3599},output:[{type:"raw",value:`      <div class="grid grid-cols-12 items-center justify-center gap-y-8">
        <div class="col-span-12 lg:col-span-8">
          `,position:{start:3600,end:3732}},{type:"output",position:{start:3732,end:3743},stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"],position:{start:3732,end:3743}}]},{type:"raw",value:`
        </div>
        <div class="col-span-12 lg:col-span-4">
          `,position:{start:3743,end:3817}},{type:"output",position:{start:3817,end:3830},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:3817,end:3830}}]},{type:"raw",value:`
        </div>
      </div>
    `,position:{start:3830,end:3863}}]},position:{open:{start:3537,end:3599},close:{start:3863,end:3873}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:3863,end:3873},output:[{type:"raw",value:`      <div class="flex flex-col gap-y-8">
        `,position:{start:3874,end:3924}},{type:"output",position:{start:3924,end:3935},stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"],position:{start:3924,end:3935}}]},{type:"raw",value:`
        `,position:{start:3935,end:3944}},{type:"output",position:{start:3944,end:3957},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:3944,end:3957}}]},{type:"raw",value:`
      </div>


    `,position:{start:3957,end:3977}}]},position:{open:{start:3863,end:3873},close:{start:3977,end:3988}}},{type:"raw",value:`
  </div>
</section>
`,position:{start:3989,end:3989}}],precompiled:!0});const o=t=>t,d=(t={})=>{const i=e.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/modules/accordion/accordion.twig",data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:0,end:156},output:[{type:"raw",value:"  ",position:{start:157,end:159}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:159,end:186},output:[{type:"raw",value:"    ",position:{start:187,end:191}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/containers/accordion/accordion.twig"}],position:{start:191,end:254}},position:{start:191,end:254}},{type:"raw",value:"  ",position:{start:255,end:257}}]},position:{open:{start:159,end:186},close:{start:257,end:271}}}]},position:{open:{start:0,end:156},close:{start:272,end:286}}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{return o(i.render({attributes:new n,...t}))}catch(a){return o("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/modules/accordion/accordion.twig: "+a.toString())}};export{d as t};
