(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),i=n(9),r=(n(0),n(196)),s={id:"quick-start-guide",title:"Quick Start Guide"},a={id:"guides/quick-start-guide",isDocsHomePage:!1,title:"Quick Start Guide",description:"Quick Overview of Typegoose",source:"@site/../docs/guides/quick-start-guide.md",permalink:"/typegoose/docs/guides/quick-start-guide",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/quick-start-guide.md",sidebar:"guides",next:{title:"Migrate to 6.0.0",permalink:"/typegoose/docs/guides/migrate-6"}},c=[{value:"Quick Overview of Typegoose",id:"quick-overview-of-typegoose",children:[]},{value:"How to Start using it",id:"how-to-start-using-it",children:[{value:"Requirements",id:"requirements",children:[]}]},{value:"Install",id:"install",children:[{value:"How to Use",id:"how-to-use",children:[]}]},{value:"Do&#39;s and Don&#39;ts of Typegoose",id:"dos-and-donts-of-typegoose",children:[]},{value:"Extra Examples",id:"extra-examples",children:[{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Methods",id:"instance-methods",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"quick-overview-of-typegoose"},"Quick Overview of Typegoose"),Object(r.b)("p",null,'Typegoose is a "wrapper" for easily writing Mongoose models with TypeScript.'),Object(r.b)("p",null,"Instead of writing this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"interface Car {\n  model?: string;\n}\n\ninterface Job {\n  title?: string;\n  position?: string;\n}\n\ninterface User {\n  name?: string;\n  age!: number;\n  job?: Job;\n  car?: Car | string;\n  preferences?: string[];\n}\n\nconst CarModel = mongoose.model('Car', {\n  model: string,\n});\n\nconst UserModel = mongoose.model('User', {\n  name: String,\n  age: { type: Number, required: true },\n  job: {\n    title: String;\n    position: String;\n  },\n  car: { type: Schema.Types.ObjectId, ref: 'Car' },\n  preferences: [{ type: String }]\n});\n")),Object(r.b)("p",null,"You can just write this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"class Job {\n  @prop()\n  public title?: string;\n\n  @prop()\n  public position?: string;\n}\n\nclass Car {\n  @prop()\n  public model?: string;\n}\n\nclass User {\n  @prop()\n  public name?: string;\n\n  @prop({ required: true })\n  public age!: number;\n\n  @prop()\n  public job?: Job;\n\n  @prop({ ref: Car })\n  public car?: Ref<Car>;\n\n  @prop({ type: String })\n  public preferences?: string[];\n}\n")),Object(r.b)("h2",{id:"how-to-start-using-it"},"How to Start using it"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Please note that this guide is for Typegoose 7.0+")),Object(r.b)("h3",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"TypeScript ^3.9 (since 7.1)"),Object(r.b)("li",{parentName:"ul"},"NodeJS ^10.15.0"),Object(r.b)("li",{parentName:"ul"},"Mongoose ^5.9.22"),Object(r.b)("li",{parentName:"ul"},"An IDE that supports TypeScript linting (VSCode is recommended)"),Object(r.b)("li",{parentName:"ul"},"This Guide expects you to know how Mongoose (or at least its models) works"),Object(r.b)("li",{parentName:"ul"},"tsconfig option ",Object(r.b)("inlineCode",{parentName:"li"},"target")," being ",Object(r.b)("inlineCode",{parentName:"li"},"ES6"))),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm i -s @typegoose/typegoose # install typegoose itself\n\nnpm i -s mongoose # install peer-dependency mongoose\nnpm i -D @types/mongoose # install all types for mongoose - this is required for typegoose to work in TypeScript\n")),Object(r.b)("h3",{id:"how-to-use"},"How to Use"),Object(r.b)("p",null,"Let's say you have a Mongoose model like this one:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"const kittenSchema = new mongoose.Schema({\n  name: String\n});\n\nconst Kitten = mongoose.model('Kitten', kittenSchema);\n\nlet document = await Kitten.create({ name: 'Kitty' });\n// \"document\" has no types\n")),Object(r.b)("p",null,"With Typegoose, it can be converted to something like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"class KittenClass {\n  @prop()\n  public name?: string;\n}\n\nconst Kitten = getModelForClass(KittenClass);\n\nlet document = await Kitten.create({ name: 'Kitty' });\n// \"document\" has proper types of KittenClass\n")),Object(r.b)("p",null,"Please note that ",Object(r.b)("inlineCode",{parentName:"p"},"new Kitten({})")," & ",Object(r.b)("inlineCode",{parentName:"p"},"Kitten.create({})")," has no types of KittenClass, because Typegoose doesn't modify functions of Mongoose."),Object(r.b)("h2",{id:"dos-and-donts-of-typegoose"},"Do's and Don'ts of Typegoose"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Typegoose is a wrapper for Mongoose's models"),Object(r.b)("li",{parentName:"ul"},"Typegoose aims to not modify any functions of Mongoose"),Object(r.b)("li",{parentName:"ul"},"Typegoose aims to get Mongoose's models to be stable through type-information"),Object(r.b)("li",{parentName:"ul"},"Typegoose aims to make Mongoose more usable by making the models more type-rich with TypeScript"),Object(r.b)("li",{parentName:"ul"},"Decorated schema configuration classes (like KittenClass above) must use explicit type declarations")),Object(r.b)("h2",{id:"extra-examples"},"Extra Examples"),Object(r.b)("h3",{id:"static-methods"},"Static Methods"),Object(r.b)("p",null,"Sometimes extra functions for model creation or pre-written querys are needed, they can be done as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'class KittenClass {\n  @prop()\n  public name?: string;\n\n  @prop()\n  public species?: string;\n\n  public static async findBySpecies(this: ReturnModelType<typeof KittenClass>, species: string) {\n    return this.find({ species }).exec();\n  }\n}\nconst KittenModel = getModelForClass(KittenClass);\n\nconst docs = await KittenModel.findBySpecies("SomeSpecies");\n')),Object(r.b)("p",null,"Note: pre-6.0 static functions needed ",Object(r.b)("inlineCode",{parentName:"p"},"@staticMethod"),", but this is not needed anymore"),Object(r.b)("h3",{id:"instance-methods"},"Instance Methods"),Object(r.b)("p",null,"Sometimes extra functions for manipulating data on an instance is needed, they can be done as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'class KittenClass {\n  @prop()\n  public name?: string;\n\n  @prop()\n  public species?: string;\n\n  public async setSpeciesAndSave(this: DocumentType<KittenClass>, species: string) {\n    this.species = species;\n    return await this.save();\n  }\n}\nconst KittenModel = getModelForClass(KittenClass);\n\nconst doc = new KittenModel({ name: "SomeCat", species: "SomeSpecies" });\nawait doc.setSpeciesAndSave("SomeOtherSpecies");\n')),Object(r.b)("p",null,"Note: pre-6.0 instance functions needed ",Object(r.b)("inlineCode",{parentName:"p"},"@instanceMethod"),", but this is not needed anymore"))}p.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,a(a({ref:t},l),{},{components:n})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);