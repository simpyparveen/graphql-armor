"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[173],{8503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7896),a=(n(2784),n(876));const o={},l="Cost limit",i={unversionedId:"plugins/cost-limit",id:"plugins/cost-limit",title:"Cost limit",description:"Limit the complexity of a GraphQL document.",source:"@site/docs/plugins/cost-limit.md",sourceDirName:"plugins",slug:"/plugins/cost-limit",permalink:"/graphql-armor/docs/plugins/cost-limit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/cost-limit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Character Limit",permalink:"/graphql-armor/docs/plugins/character-limit"},next:{title:"Max Aliases",permalink:"/graphql-armor/docs/plugins/max-aliases"}},p={},c=[{value:"Configuring for GraphQL Armor",id:"configuring-for-graphql-armor",level:2},{value:"Standalone usage",id:"standalone-usage",level:2},{value:"Installation",id:"installation",level:3},{value:"With <code>@graphql/graphql-js</code>",id:"with-graphqlgraphql-js",level:3},{value:"With <code>@envelop/core</code> from <code>@the-guild-org</code>",id:"with-envelopcore-from-the-guild-org",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cost-limit"},"Cost limit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Limit")," the ",(0,a.kt)("strong",{parentName:"p"},"complexity")," of a GraphQL document."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuring-for-graphql-armor"},"Configurating through GraphQL Armor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#standalone-usage"},"Standalone usage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#with-graphqlgraphql-js"},"With ",(0,a.kt)("inlineCode",{parentName:"a"},"@graphql/graphql-js"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#with-envelopcore-from-the-guild-org"},"With ",(0,a.kt)("inlineCode",{parentName:"a"},"@envelop/core")," from ",(0,a.kt)("inlineCode",{parentName:"a"},"@the-guild-org")))))),(0,a.kt)("h2",{id:"configuring-for-graphql-armor"},"Configuring for GraphQL Armor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"GraphQLArmor({\n  costLimit: {\n    // Toogle the plugin | default: true\n    enabled?: boolean,\n    \n    // Cost allowed | default: 5000\n    maxCost?: int,\n\n    // Static cost of an object | default: 2\n    objectCost?: int,\n\n    // Static cost of a field | default: 1\n    scalarCost?: int,\n\n    // Factorial applied to nested operator | default: 1.5\n    depthCostFactor?: int,\n\n    // Ignore the cost of introspection queries | default: true\n    ignoreIntrospection?: boolean,\n\n    // Callbacks that are ran whenever a Query is accepted\n    onAccept?: GraphQLArmorAcceptCallback[],\n\n    // Callbacks that are ran whenever a Query is rejected\n    onReject?: GraphQLArmorRejectCallback[],\n\n    // Do you want to propagate the rejection to the client? | default: true\n    propagateOnRejection?: boolean,\n  }\n})\n")),(0,a.kt)("h2",{id:"standalone-usage"},"Standalone usage"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"costLimit")," plugin out of GraphQL Armor, you can install it from npm:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @escape.tech/graphql-armor-cost-limit\n\n# yarn\nyarn add @escape.tech/graphql-armor-cost-limit\n")),(0,a.kt)("h3",{id:"with-graphqlgraphql-js"},"With ",(0,a.kt)("inlineCode",{parentName:"h3"},"@graphql/graphql-js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { costLimitRule } from '@escape.tech/graphql-armor-cost-limit';\n")),(0,a.kt)("h3",{id:"with-envelopcore-from-the-guild-org"},"With ",(0,a.kt)("inlineCode",{parentName:"h3"},"@envelop/core")," from ",(0,a.kt)("inlineCode",{parentName:"h3"},"@the-guild-org")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { envelop } from '@envelop/core';\nimport { costLimitPlugin } from '@escape.tech/graphql-armor-cost-limit';\n\nconst getEnveloped = envelop({\n  plugins: [\n    // ... other plugins ...\n    costLimitPlugin({\n        maxCost: 5000,              // Default: 5000\n        objectCost: 2,              // Default: 2\n        scalarCost: 1,              // Default: 1\n        depthCostFactor: 1.5,       // Default: 1.5\n        ignoreIntrospection: true,  // Default: true\n    }),\n  ]\n});\n")))}m.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);