(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(196)),p={id:"ref-type",title:"Ref"},c={id:"api/types/ref-type",isDocsHomePage:!1,title:"Ref",description:"The Type Ref is the type used for References.",source:"@site/../docs/api/types/ref.md",permalink:"/typegoose/docs/api/types/ref-type",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/types/ref.md",sidebar:"docs",previous:{title:"Return Model Type",permalink:"/typegoose/docs/api/types/return-model-type"},next:{title:"Additional Types",permalink:"/typegoose/docs/api/types/additional-types"}},i=[{value:"Example",id:"example",children:[]}],s={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Type ",Object(o.b)("inlineCode",{parentName:"p"},"Ref<T>")," is the type used for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/populate.html"}),"References"),"."),Object(o.b)("p",null,"There are ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/typegoose/docs/api/functions/typeguards/is-document"}),"typeguards")," to check if a Reference is populated."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"class Kitten {\n  @prop()\n  public name: string;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"class Cat {\n  @prop()\n  public name: string;\n\n  // Use `ref` for arrays too\n  @prop({ ref: 'Kitten' })\n  public babies?: Ref<Kitten>[];\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"class Person {\n  @prop()\n  public name: string;\n\n  // Use `ref` for single items\n  @prop({ ref: 'Cat' })\n  public pet?: Ref<Cat>;\n}\n")))}l.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(p,".").concat(b)]||u[b]||f[b]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);