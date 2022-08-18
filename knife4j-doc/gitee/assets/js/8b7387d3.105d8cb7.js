"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4547],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),o=t(86010),i=t(72389),l=t(67392),c=t(7094),u=t(12466);const s="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,i=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(y,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,c.U)(),T=x.tabGroupChoices,w=x.setTabGroupChoices,O=(0,r.useState)(h),I=O[0],j=O[1],S=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=T[g];null!=P&&P!==I&&y.some((function(e){return e.value===P}))&&j(P)}var E=function(e){var n=e.currentTarget,t=S.indexOf(n),a=y[t].value;a!==I&&(C(n),j(a),null!=g&&w(g,String(a)))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;t=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var o,i=S.indexOf(e.currentTarget)-1;t=null!=(o=S[i])?o:S[S.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return S.push(e)},onKeyDown:Z,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function m(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},14959:(e,n,t)=>{t(67294),t(39960),t(52263);var a="4.0.0".split(".");[a[0],a[1]].join(".")},8979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>f});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=(t(14959),t(65488)),l=t(85162),c=t(90814);var u=["components"],s={id:"quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5feb\u901f\u5f00\u59cbKnife4j"},p=void 0,d={unversionedId:"quick-start/quick-start",id:"quick-start/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5feb\u901f\u5f00\u59cbKnife4j",source:"@site/docs/quick-start/index.mdx",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/quick-start/",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660471539,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{id:"quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5feb\u901f\u5f00\u59cbKnife4j"},sidebar:"docs",next:{title:"Knife4j 4.0\u8fed\u4ee3\u8ba1\u5212",permalink:"/docs/v4/"}},m={},f=[],g={toc:f};function v(e){var n=e.components,t=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1a",(0,o.kt)("a",{href:"https://spring.io/guides/gs/spring-boot/"},"\u521b\u5efaSpring Boot\u9879\u76ee"),"\u5e76\u4e14\u5728pom.xml\u4e2d\u5f15\u5165",(0,o.kt)("a",{href:"https://search.maven.org/search?q=a:knife4j"},"Knife4j\u7684\u4f9d\u8d56\u5305"),"\uff0cMaven\u5750\u6807\u5982\u4e0b\uff1a"),(0,o.kt)(i.Z,{groupId:"quick_start1",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cheerio",label:"Swagger2",default:!0,mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-xml",mdxType:"CodeBlock"},"\x3c!--\u5f15\u5165Knife4j\u7684\u5b98\u65b9start\u5305,Swagger2\u57fa\u4e8eSpringfox2.10.5\u9879\u76ee--\x3e\n<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    \x3c!--\u4f7f\u7528Swagger2--\x3e\n    <artifactId>knife4j-spring-boot-starter</artifactId>\n    <version>2.0.9</version>\n</dependency>")),(0,o.kt)(l.Z,{value:"openapi3",label:"OpenAPI3",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-xml",mdxType:"CodeBlock"},"\x3c!--\u5f15\u5165Knife4j\u7684\u5b98\u65b9ui\u5305,OpenAPI3\u5efa\u8bae\u4f7f\u7528springdoc-openapi\u9879\u76ee--\x3e\n<dependency>\n  <groupId>com.github.xiaoymin</groupId>\n  <artifactId>knife4j-springdoc-ui</artifactId>\n  <version>3.0.3</version>\n</dependency>"))),(0,o.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efaSwagger\u914d\u7f6e\u4f9d\u8d56\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a\uff1a"),(0,o.kt)(i.Z,{groupId:"quick_start2",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cheerio2",label:"Swagger2",default:!0,mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-javascript",mdxType:"CodeBlock"},'@Configuration\n@EnableSwagger2WebMvc\npublic class Knife4jConfiguration {\n\n    @Bean(value = "dockerBean")\n    public Docket dockerBean() {\n        //\u6307\u5b9a\u4f7f\u7528Swagger2\u89c4\u8303\n        Docket docket=new Docket(DocumentationType.SWAGGER_2)\n                .apiInfo(new ApiInfoBuilder()\n                //\u63cf\u8ff0\u5b57\u6bb5\u652f\u6301Markdown\u8bed\u6cd5\n                .description("# Knife4j RESTful APIs")\n                .termsOfServiceUrl("https://doc.xiaominfo.com/")\n                .contact("xiaoymin@foxmail.com")\n                .version("1.0")\n                .build())\n                //\u5206\u7ec4\u540d\u79f0\n                .groupName("\u7528\u6237\u670d\u52a1")\n                .select()\n                //\u8fd9\u91cc\u6307\u5b9aController\u626b\u63cf\u5305\u8def\u5f84\n                .apis(RequestHandlerSelectors.basePackage("com.github.xiaoymin.knife4j.controller"))\n                .paths(PathSelectors.any())\n                .build();\n        return docket;\n    }\n}')),(0,o.kt)(l.Z,{value:"openapi32",label:"OpenAPI3",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-javascript",mdxType:"CodeBlock"},'@Configuration\npublic class SwaggerConfig {\n\n\n    @Bean\n    public GroupedOpenApi userApi(){\n        String[] paths = { "/**" };\n        String[] packagedToMatch = { "com.xiaominfo.knife4j.demo.web" };\n        return GroupedOpenApi.builder().group("\u7528\u6237\u6a21\u5757")\n                .pathsToMatch(paths)\n                .addOperationCustomizer((operation, handlerMethod) -> {\n                    return operation.addParametersItem(new HeaderParameter().name("groupCode").example("\u6d4b\u8bd5").description("\u96c6\u56e2code").schema(new StringSchema()._default("BR").name("groupCode").description("\u96c6\u56e2code")));\n                })\n                .packagesToScan(packagedToMatch).build();\n    }\n    @Bean\n    public OpenAPI customOpenAPI() {\n        return new OpenAPI()\n                .info(new Info()\n                        .title("XXX\u7528\u6237\u7cfb\u7edfAPI")\n                        .version("1.0")\n                        .description( "Knife4j\u96c6\u6210springdoc-openapi\u793a\u4f8b")\n                        .termsOfService("http://doc.xiaominfo.com")\n                        .license(new License().name("Apache 2.0")\n                                .url("http://doc.xiaominfo.com")));\n    }\n\n\n}\n'))),(0,o.kt)("admonition",{title:"\u63d0\u793a\u4fe1\u606f",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u662fKnife4j 2.x\u7248\u672c\uff0c\u5e76\u4e14Spring Boot\u7248\u672c\u9ad8\u4e8e2.4,\u90a3\u4e48\u9700\u8981\u5728Spring Boot\u7684yml\u6587\u4ef6\u4e2d\u505a\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n    mvc:\n        pathmatch:\n            # \u914d\u7f6e\u7b56\u7565\n            matching-strategy: ant-path-matcher\n"))),(0,o.kt)("p",null,"\u7b2c\u4e09\u6b65:\u65b0\u5efa\u4e00\u4e2a\u63a5\u53e3Controller\u7c7b\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)(i.Z,{groupId:"quick_start3",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cheerio1",label:"Swagger2",default:!0,mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-javascript",mdxType:"CodeBlock"},'@Api(tags = "\u9996\u9875\u6a21\u5757")\n@RestController\npublic class IndexController {\n\n    @ApiImplicitParam(name = "name",value = "\u59d3\u540d",required = true)\n    @ApiOperation(value = "\u5411\u5ba2\u4eba\u95ee\u597d")\n    @GetMapping("/sayHi")\n    public ResponseEntity<String> sayHi(@RequestParam(value = "name")String name){\n        return ResponseEntity.ok("Hi:"+name);\n    }\n}')),(0,o.kt)(l.Z,{value:"openapi31",label:"OpenAPI3",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-javascript",mdxType:"CodeBlock"},'@Tag(name = "\u9996\u9875\u6a21\u5757")\n@RestController\npublic class IndexController {\n\n    @Parameter(name = "name",description = "\u59d3\u540d",required = true)\n    @Operation(summary = "\u5411\u5ba2\u4eba\u95ee\u597d")\n    @GetMapping("/sayHi")\n    public ResponseEntity<String> sayHi(@RequestParam(value = "name")String name){\n        return ResponseEntity.ok("Hi:"+name);\n    }\n}'))),(0,o.kt)("p",null,"\u4e07\u4e8b\u4ff1\u5907\uff0c\u542f\u52a8Spring Boot\u9879\u76ee\uff0c\u6d4f\u89c8\u5668\u8bbf\u95eeKnife4j\u7684\u6587\u6863\u5730\u5740\u5373\u53ef\u67e5\u770b\u6548\u679c"),(0,o.kt)(c.Z,{className:"language-bash",mdxType:"CodeBlock"},"http://localhost:8080/doc.html"))}v.isMDXComponent=!0}}]);