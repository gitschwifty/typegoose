(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(9),l=(n(0),n(196)),a={id:"delete-model",title:"Delete Models"},c={id:"api/functions/delete-model",isDocsHomePage:!1,title:"Delete Models",description:"deleteModel",source:"@site/../docs/api/functions/deleteModel.md",permalink:"/typegoose/docs/api/functions/delete-model",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/deleteModel.md",sidebar:"docs",previous:{title:"Add Model To Typegoose",permalink:"/typegoose/docs/api/functions/add-model-to-typegoose"},next:{title:"Set Global Options",permalink:"/typegoose/docs/api/functions/set-global-options"}},i=[{value:"deleteModel",id:"deletemodel",children:[]},{value:"deleteModelWithClass",id:"deletemodelwithclass",children:[]}],d={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"deletemodel"},"deleteModel"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"deleteModel(name: string)"),": Delete models from the typegoose cache & call ",Object(l.b)("inlineCode",{parentName:"p"},"mongoose.connection.deleteModel"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'class SomeUser {}\n\nconst SomeUserModel = getModelForClass(SomeUser);\ndeleteModel("SomeUser");\n')),Object(l.b)("h2",{id:"deletemodelwithclass"},"deleteModelWithClass"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"deleteModelWithClass(cl: NewableFunction)"),": Find the name of the model and call ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"#deletemodel"}),Object(l.b)("inlineCode",{parentName:"a"},"deleteModel"))),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"class SomeUser {}\n\nconst SomeUserModel = getModelForClass(SomeUser);\ndeleteModelWithClass(SomeUser);\n")))}s.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(a,".").concat(m)]||p[m]||u[m]||l;return n?r.a.createElement(b,c(c({ref:t},d),{},{components:n})):r.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<l;d++)a[d]=n[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);