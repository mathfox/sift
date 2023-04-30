"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_position:3},o=void 0,i={unversionedId:"Examples",id:"Examples",title:"Examples",description:"Sift contains a number of useful functions for working with data structures. These functions are available as static methods on the Sift module (refer to the API documentation for more details).",source:"@site/docs/Examples.md",sourceDirName:".",slug:"/Examples",permalink:"/sift/docs/Examples",draft:!1,editUrl:"https://github.com/csqrl/sift/edit/main/docs/Examples.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/sift/docs/Installation"}},c={},u=[{value:"Combining Data",id:"combining-data",level:3},{value:"Filtering Data",id:"filtering-data",level:3},{value:"Removing Duplicates",id:"removing-duplicates",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sift contains a number of useful functions for working with data structures. These functions are available as static methods on the Sift module (refer to the ",(0,n.kt)("a",{parentName:"p",href:"/api"},"API documentation")," for more details)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local Sift = require(path.to.Sift)\n")),(0,n.kt)("p",null,"Sift also exports Luau types, which can be accessed from the Sift module itself, or via the dedicated Types module, which is exported as ",(0,n.kt)("inlineCode",{parentName:"p"},"Sift.Types"),"."),(0,n.kt)("h3",{id:"combining-data"},"Combining Data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local dictionary1 = { a = 1, b = 2 }\nlocal dictionary2 = { c = 3, d = 4 }\n\nlocal result = Sift.Dictionary.merge(dictionary1, dictionary2) -- { a = 1, b = 2, c = 3, d = 4 }\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local array1 = { 1, 2, 3 }\nlocal array2 = { 4, 5, 6 }\n\nlocal result = Sift.Array.concat(array1, array2) -- { 1, 2, 3, 4, 5, 6 }\n")),(0,n.kt)("h3",{id:"filtering-data"},"Filtering Data"),(0,n.kt)("p",null,"The following example filters out all uneven numbers from an array of numbers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local array = { 1, 2, 3, 4, 5, 6 }\n\nlocal result = Sift.Array.filter(array, function(value)\n  return value % 2 == 0\nend) -- { 2, 4, 6 }\n")),(0,n.kt)("p",null,"Dictionaries can also be filtered in Sift!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local dictionary = { a = 1, b = 2, c = 3, d = 4 }\n\nlocal result = Sift.Dictionary.filter(dictionary, function(value)\n  return value % 2 == 0\nend) -- { b = 2, d = 4 }\n")),(0,n.kt)("h3",{id:"removing-duplicates"},"Removing Duplicates"),(0,n.kt)("p",null,"There's a few different methods for removing duplicates from an array or dictionary."),(0,n.kt)("p",null,"The following example removes all duplicate values from an array using sets."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local array = { "hello", "world", "world", "cat", "dog" }\n\nlocal set = Sift.Set.fromArray(array) -- { "hello" = true, "world" = true, "cat" = true, "dog" = true }\n\nlocal result = Sift.Set.toArray(set) -- { "hello", "world", "cat", "dog" }\n')),(0,n.kt)("p",null,"The same could also be accomplished using a reducer."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local array = { "hello", "world", "world", "cat", "dog" }\n\nlocal result = Sift.Array.reduce(array, function(accumulator, value)\n  if not Sift.Array.includes(accumulator, value) then\n    return Sift.Array.push(accumulator, value)\n  end\n\n  return accumulator\nend, {}) -- { "hello", "world", "cat", "dog" }\n')))}d.isMDXComponent=!0}}]);