(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(1),o=n(9),a=(n(0),n(305)),r={id:"migrating-existing-spas",title:"Migrating existing SPAs",sidebar_label:"Migrating existing code"},c=[{value:"Converting SPAs into registered applications",id:"converting-spas-into-registered-applications",children:[{value:"(1) Implementing lifecycle functions",id:"1-implementing-lifecycle-functions",children:[]},{value:"(2) Getting the CSS, fonts, <code>&lt;script&gt;</code> dependencies to work",id:"2-getting-the-css-fonts-script-dependencies-to-work",children:[]}]}],s={rightToc:c},l="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you're interested in migrating existing SPAs into a single-spa, you'll\nneed to do three things:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/configuration"}),"single spa config")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"#converting-spas-into-registered-applications"}),"Convert your SPA or SPAs to be registered applications")),Object(a.b)("li",{parentName:"ol"},"Adjust your HTML file so that your single spa config is the new boss in town.\nSee ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/configuration#indexhtml-file"}),"docs"),".")),Object(a.b)("h2",{id:"converting-spas-into-registered-applications"},"Converting SPAs into registered applications"),Object(a.b)("p",null,"Your existing SPAs, whether they be Angular, React, or something else, probably are\nnot used to unmounting themselves from the DOM. Also, they probably have had the luxury\nof controlling the entire HTML page themselves, instead of being purely JavaScript applications\nthat don't have sole control over ",Object(a.b)("inlineCode",{parentName:"p"},"<script>")," tags and ",Object(a.b)("inlineCode",{parentName:"p"},"<link>")," tags. So in order to convert them\ninto single-spa registered applications, they will need to overcome those obstacles while implementing\nlifecycle functions."),Object(a.b)("h3",{id:"1-implementing-lifecycle-functions"},"(1) Implementing lifecycle functions"),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"registered application lifecycle")," docs to see what you need to do.\nThe hardest part will almost certainly be the ",Object(a.b)("inlineCode",{parentName:"p"},"unmount")," lifecycle, since most SPAs aren't accustomed\nto going dormant and unmounting themselves from the DOM. When implementing your lifecycle functions, first check out the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/ecosystem"}),"ecosystem"),"\ndocs before reinventing the wheel yourself. If that doesn't have everything you need, you'll have to make sure that your\nSPA can clean up its DOM, DOM event listeners (all of them, but ",Object(a.b)("em",{parentName:"p"},"especially")," hashchange and popstate),\nand memory."),Object(a.b)("h3",{id:"2-getting-the-css-fonts-script-dependencies-to-work"},"(2) Getting the CSS, fonts, ",Object(a.b)("inlineCode",{parentName:"h3"},"<script>")," dependencies to work"),Object(a.b)("p",null,"Since existing SPAs are used to having an index.html file for their css, fonts,\nthird party script-tags, etc., it's likely that you'll have to do some work\nto make sure all of those keep on working when your SPA becomes an html-less ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/building-applications"}),"\napplication"),". It is best to try to put all that\nyou can into the JavaScript bundle, but your escape hatch is to put the things\nyou need into your ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"configuration"}),"single spa config"),"."))}p.isMDXComponent=!0},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var i=n(0),o=n.n(i),a=o.a.createContext({}),r=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=r(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),p=r(n),u=i,d=p[c+"."+u]||p[u]||l[u]||a;return n?o.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(d,Object.assign({},{ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,r[1]=c;for(var u=2;u<a;u++)r[u]=n[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);