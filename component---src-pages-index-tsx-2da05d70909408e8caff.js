(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(e,a,n){"use strict";n.r(a);var o=n(0),t=n.n(o),r=n(185),i=n(183),c=n(196),s=n(179);n(60),n(123),n(59),n(12),n(46),n(34),n(28),n(23),n(125),n(85),n(33);function l(e,a,n){void 0===a&&(a="#fff"),void 0===n&&(n="#000");var o="#"===e.charAt(0)?e.substring(1,7):e,t=[parseInt(o.substring(0,2),16)/255,parseInt(o.substring(2,4),16)/255,parseInt(o.substring(4,6),16)/255].map(function(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)});return.2126*t[0]+.7152*t[1]+.0722*t[2]>.179?n:a}n(197);var p=function(e,a){return"repo-card__language "+(a.find(function(a){return a.name===e.name})?"repo-card__language--active":"")},u=function(e){var a=e.repo,n=e.toggleLanguage,o=e.size,r=e.currentLanguages;return t.a.createElement("section",{className:"repo-card "+("sm"===o?"repo-card--small":"")},t.a.createElement("div",{className:"repo-card__language-wrapper"},a.languages.edges.map(function(e){return t.a.createElement("span",{className:p(e.node,r),style:{backgroundColor:e.node.color,color:l(e.node.color)},onClick:function(){return n(e.node)},key:e.node.name},t.a.createElement("span",{className:"repo-card__language-text"},e.node.name))})),t.a.createElement("h2",{className:"repo-card__header"},("jackkoppa"!==a.owner.login?"@"+a.owner.login+"/":"")+a.name),t.a.createElement("h4",{className:"repo-card__description"},a.description),t.a.createElement("a",{href:a.url,className:"repo-card__link"},t.a.createElement("span",{className:"repo-card__link-text"},"GitHub"),t.a.createElement("i",{className:"fab fa-github"})),a.homepageUrl?t.a.createElement("a",{href:a.homepageUrl,className:"repo-card__link"},t.a.createElement("span",{className:"repo-card__link-text"},"View Project"),t.a.createElement("i",{className:"far fa-external-link"})):null)};n(198);function d(e){return function(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(e){var a,n;function o(a){var n;return(n=e.call(this,a)||this).render=function(){return t.a.createElement("div",{className:"repo-list"},n.getLanguageFilters().map(function(e){return t.a.createElement("span",{className:"repo-list__language-filter "+(e.active?"repo-list__language-filter--active":""),style:{backgroundColor:e.color,color:l(e.color)},onClick:function(){return n.handleLanguageToggled(e)},key:e.name},t.a.createElement("span",{className:"repo-list__language-filter-text"},e.name),t.a.createElement("i",{className:"fal fa-times"}))}),t.a.createElement("h3",{className:"repo-list__header"},"Pinned Projects"),n.getPinnedRepositories().map(function(e){return t.a.createElement(u,{repo:e,toggleLanguage:n.handleLanguageToggled,currentLanguages:n.state.currentLanguages,key:e.id})}),t.a.createElement("h3",{className:"repo-list__header"},"Other Projects"),n.getOtherRepositories().map(function(e){return t.a.createElement(u,{repo:e,toggleLanguage:n.handleLanguageToggled,size:"sm",currentLanguages:n.state.currentLanguages,key:e.id})}))},n.handleLanguageToggled=function(e){n.state.currentLanguages.find(function(a){return a.name===e.name})?n.setState({currentLanguages:n.state.currentLanguages.filter(function(a){return a.name!=e.name})}):n.setState({currentLanguages:[].concat(d(n.state.currentLanguages),[e])})},n.state={currentLanguages:[]},n}n=e,(a=o).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var r=o.prototype;return r.getLanguageFilters=function(){var e=this,a=[];return this.props.pinnedRepositories.concat(this.props.allRepositories).forEach(function(e){(e.node&&e.node.languages&&e.node.languages.edges||[]).forEach(function(e){a.find(function(a){return a.name===e.node.name})||a.push(e.node)})}),a.map(function(a){var n=Boolean(e.state.currentLanguages.find(function(e){return e.name===a.name}));return Object.assign({},a,{active:n})}).sort(function(e,a){return e.active?-1:a.active?1:e.name>a.name?1:a.name>e.name?-1:0})},r.getPinnedRepositories=function(){return this.filterReposByLanguage(this.props.pinnedRepositories)},r.getOtherRepositories=function(){var e=this;return this.filterReposByLanguage(this.props.allRepositories).filter(function(a){return e.getPinnedRepositories().every(function(e){return e.id!==a.id})})},r.filterReposByLanguage=function(e){var a=this;return(this.state.currentLanguages.length>0?e.filter(function(e){return e.node.languages.edges.some(function(e){return a.state.currentLanguages.some(function(a){return a.name===e.node.name})})}):e).map(function(e){return e.node})},o}(t.a.Component),g=function(){return t.a.createElement(s.b,{query:"3305757413",render:function(e){return t.a.createElement(m,{pinnedRepositories:e.github.repositoryOwner.pinnedRepositories.edges,allRepositories:e.github.repositoryOwner.repositories.edges})},data:c})};a.default=function(){return t.a.createElement(r.a,null,t.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react"]}),t.a.createElement(g,null))}},179:function(e,a,n){"use strict";n.d(a,"b",function(){return l});var o=n(0),t=n.n(o),r=n(58),i=n.n(r);n.d(a,"a",function(){return i.a});n(180);var c=t.a.createContext({});function s(e){var a=e.staticQueryData,n=e.data,o=e.query,r=e.render,i=n?n.data:a[o]&&a[o].data;return t.a.createElement(t.a.Fragment,null,i&&r(i),!i&&t.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var a=e.data,n=e.query,o=e.render,r=e.children;return t.a.createElement(c.Consumer,null,function(e){return t.a.createElement(s,{data:a,query:n,render:o||r,staticQueryData:e})})}},180:function(e,a,n){var o;e.exports=(o=n(182))&&o.default||o},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Jack Koppa"}}}}},182:function(e,a,n){"use strict";n.r(a);n(23);var o=n(0),t=n.n(o),r=n(84);a.default=function(e){var a=e.location,n=e.pageResources;return n?t.a.createElement(r.a,Object.assign({location:a,pageResources:n},n.json)):null}},183:function(e,a,n){"use strict";var o=n(184),t=n(0),r=n.n(t),i=n(188),c=n.n(i),s=n(179);function l(e){var a=e.title,n=e.description,t=e.lang,i=e.meta,l=e.keywords;return r.a.createElement(s.b,{query:p,render:function(e){var o=n||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:t},title:a,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:a},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:o}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(i)})},data:o})}l.defaultProps={lang:"en",meta:[],keywords:[]},a.a=l;var p="1025518380"},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Jack Koppa",description:"I make things with a purpose",author:"@jackkoppa"}}}}},185:function(e,a,n){"use strict";var o=n(181),t=n(0),r=n.n(t),i=n(179),c=(n(186),function(e){var a=e.siteTitle;return r.a.createElement("header",{style:{background:"rgb(43, 116, 137)",marginBottom:"1.45rem"}},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},a))))});c.defaultProps={siteTitle:""};var s=c;n(187),a.a=function(e){var a=e.children;return r.a.createElement(i.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"layout-wrapper"},r.a.createElement("main",null,a),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Jack Koppa")))},data:o})}},196:function(e){e.exports={data:{github:{repositoryOwner:{__typename:"GitHub_User",pinnedRepositories:{edges:[{node:{name:"typesafe-vuex",id:"MDEwOlJlcG9zaXRvcnkxNTYxMzkxOTA=",url:"https://github.com/jackkoppa/typesafe-vuex",description:"A simple way to get static typing, static code analysis and intellisense with Vuex library - maintained fork of vuex-typescript",homepageUrl:"",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:41055,node:{color:"#2b7489",name:"TypeScript"}},{size:123,node:{color:"#f1e05a",name:"JavaScript"}}]}}},{node:{name:"add-typescript-to-vue",id:"MDEwOlJlcG9zaXRvcnkxNjEwODU0MzQ=",url:"https://github.com/jackkoppa/add-typescript-to-vue",description:"Simple Vue app (greenhouse gas tracking), for practice & experimentation adding TypeScript to Vue",homepageUrl:"https://jackkoppa.github.io/add-typescript-to-vue/",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:7990,node:{color:"#f1e05a",name:"JavaScript"}},{size:579,node:{color:"#e34c26",name:"HTML"}},{size:11314,node:{color:"#2c3e50",name:"Vue"}},{size:608,node:{color:"#563d7c",name:"CSS"}}]}}},{node:{name:"cityaq",id:"MDEwOlJlcG9zaXRvcnkxMDc3OTA2Mzg=",url:"https://github.com/jackkoppa/cityaq",description:"Angular PWA to compare simple air quality data for different cities, using the OpenAQ API",homepageUrl:"http://cityaq.com",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:154066,node:{color:"#2b7489",name:"TypeScript"}},{size:5875,node:{color:"#f1e05a",name:"JavaScript"}},{size:11436,node:{color:"#e34c26",name:"HTML"}},{size:22942,node:{color:"#563d7c",name:"CSS"}}]}}},{node:{name:"go-for-launch",id:"MDEwOlJlcG9zaXRvcnkxMjA0OTA5MTQ=",url:"https://github.com/jackkoppa/go-for-launch",description:"Map visualization of viewers for the maiden Falcon Heavy launch, pulled from /r/spacex",homepageUrl:"https://jackkoppa.github.io/go-for-launch/",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:1943,node:{color:"#e34c26",name:"HTML"}},{size:10427,node:{color:"#f1e05a",name:"JavaScript"}},{size:1625,node:{color:"#563d7c",name:"CSS"}}]}}},{node:{name:"feedbot",id:"MDEwOlJlcG9zaXRvcnkxMjk1MzI0NTY=",url:"https://github.com/SafeNet-Consulting/feedbot",description:"Slack app, run on Azure Functions, for giving & requesting informal feedback",homepageUrl:"",owner:{__typename:"GitHub_Organization",login:"SafeNet-Consulting"},languages:{edges:[{size:433,node:{color:"#f1e05a",name:"JavaScript"}},{size:9326,node:{color:"#2b7489",name:"TypeScript"}}]}}},{node:{name:"typesafe-api-clients-demo",id:"MDEwOlJlcG9zaXRvcnkyMjA2OTE0Mzg=",url:"https://github.com/jackkoppa/typesafe-api-clients-demo",description:'Demo for 11.13.19 talk, "Syncing Back & Front End Types w/ Code Generation"',homepageUrl:"http://typesafe-api-clients-demo.jackkoppa.com",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:1700,node:{color:"#f1e05a",name:"JavaScript"}},{size:587,node:{color:"#e34c26",name:"HTML"}},{size:11239,node:{color:"#2c3e50",name:"Vue"}},{size:78012,node:{color:"#2b7489",name:"TypeScript"}},{size:3654,node:{color:"#89e051",name:"Shell"}}]}}}]},repositories:{edges:[{node:{name:"Font-Awesome-Pro",id:"MDEwOlJlcG9zaXRvcnk3OTU3MTMwMw==",url:"https://github.com/FortAwesome/Font-Awesome-Pro",description:"The internet's most popular icon has been redesigned and built from scratch.",homepageUrl:"http://fontawesome.com/",owner:{__typename:"GitHub_Organization",login:"FortAwesome"},languages:{edges:[{size:2356613,node:{color:"#563d7c",name:"CSS"}},{size:9696316,node:{color:"#f1e05a",name:"JavaScript"}}]}}},{node:{name:"zeplin-cli-connect-plugin-vue",id:"MDEwOlJlcG9zaXRvcnkyMjYzNzEzMjU=",url:"https://github.com/jackkoppa/zeplin-cli-connect-plugin-vue",description:"Initial attempt at a Vue plugin for the @zeplin/cli tool, to push code snippets from shared component libraries to Zeplin",homepageUrl:null,owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:399,node:{color:"#f1e05a",name:"JavaScript"}},{size:2223,node:{color:"#2b7489",name:"TypeScript"}},{size:6883,node:{color:"#2c3e50",name:"Vue"}}]}}},{node:{name:"Advent",id:"MDEwOlJlcG9zaXRvcnk5NDM0OTcz",url:"https://github.com/teebes/Advent",description:null,homepageUrl:null,owner:{__typename:"GitHub_User",login:"teebes"},languages:{edges:[{size:2286993,node:{color:"#3572A5",name:"Python"}},{size:234748,node:{color:"#e34c26",name:"HTML"}},{size:500032,node:{color:"#f1e05a",name:"JavaScript"}},{size:224,node:{color:"#89e051",name:"Shell"}},{size:271920,node:{color:"#563d7c",name:"CSS"}},{size:913,node:{color:"#701516",name:"Ruby"}}]}}},{node:{name:"typesafe-api-clients-demo",id:"MDEwOlJlcG9zaXRvcnkyMjA2OTE0Mzg=",url:"https://github.com/jackkoppa/typesafe-api-clients-demo",description:'Demo for 11.13.19 talk, "Syncing Back & Front End Types w/ Code Generation"',homepageUrl:"http://typesafe-api-clients-demo.jackkoppa.com",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:1700,node:{color:"#f1e05a",name:"JavaScript"}},{size:587,node:{color:"#e34c26",name:"HTML"}},{size:11239,node:{color:"#2c3e50",name:"Vue"}},{size:78012,node:{color:"#2b7489",name:"TypeScript"}},{size:3654,node:{color:"#89e051",name:"Shell"}}]}}},{node:{name:"typesafe-vuex",id:"MDEwOlJlcG9zaXRvcnkxNTYxMzkxOTA=",url:"https://github.com/jackkoppa/typesafe-vuex",description:"A simple way to get static typing, static code analysis and intellisense with Vuex library - maintained fork of vuex-typescript",homepageUrl:"",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:41055,node:{color:"#2b7489",name:"TypeScript"}},{size:123,node:{color:"#f1e05a",name:"JavaScript"}}]}}},{node:{name:"gs-spring-boot",id:"MDEwOlJlcG9zaXRvcnkyMjA3MDEyNTQ=",url:"https://github.com/jackkoppa/gs-spring-boot",description:"Building an Application with Spring Boot :: Learn how to build an application with minimal configuration.",homepageUrl:"https://typesafe-api-demo-java.herokuapp.com/",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:7544,node:{color:"#b07219",name:"Java"}}]}}},{node:{name:"add-typescript-to-vue",id:"MDEwOlJlcG9zaXRvcnkxNjEwODU0MzQ=",url:"https://github.com/jackkoppa/add-typescript-to-vue",description:"Simple Vue app (greenhouse gas tracking), for practice & experimentation adding TypeScript to Vue",homepageUrl:"https://jackkoppa.github.io/add-typescript-to-vue/",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:7990,node:{color:"#f1e05a",name:"JavaScript"}},{size:579,node:{color:"#e34c26",name:"HTML"}},{size:11314,node:{color:"#2c3e50",name:"Vue"}},{size:608,node:{color:"#563d7c",name:"CSS"}}]}}},{node:{name:"vetur",id:"MDEwOlJlcG9zaXRvcnkyMDc2NjM5OTE=",url:"https://github.com/jackkoppa/vetur",description:"Vue tooling for VS Code.",homepageUrl:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:557762,node:{color:"#2b7489",name:"TypeScript"}},{size:594,node:{color:"#89e051",name:"Shell"}},{size:22210,node:{color:"#f1e05a",name:"JavaScript"}},{size:36055,node:{color:"#2c3e50",name:"Vue"}},{size:448,node:{color:"#e34c26",name:"HTML"}}]}}},{node:{name:"eslint-plugin-sort-imports-es6-autofix",id:"MDEwOlJlcG9zaXRvcnkyMDY2NDc4MjU=",url:"https://github.com/jackkoppa/eslint-plugin-sort-imports-es6-autofix",description:null,homepageUrl:null,owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:34543,node:{color:"#f1e05a",name:"JavaScript"}}]}}},{node:{name:"gatsby-portfolio",id:"MDEwOlJlcG9zaXRvcnkxNzIyNzM4NDM=",url:"https://github.com/jackkoppa/gatsby-portfolio",description:"Portfolio site created w/ GatsbyJS",homepageUrl:"https://jackkoppa.github.io/gatsby-portfolio/",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:3e3,node:{color:"#f1e05a",name:"JavaScript"}},{size:13900,node:{color:"#563d7c",name:"CSS"}},{size:16809,node:{color:"#2b7489",name:"TypeScript"}}]}}},{node:{name:"cityaq",id:"MDEwOlJlcG9zaXRvcnkxMDc3OTA2Mzg=",url:"https://github.com/jackkoppa/cityaq",description:"Angular PWA to compare simple air quality data for different cities, using the OpenAQ API",homepageUrl:"http://cityaq.com",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:154066,node:{color:"#2b7489",name:"TypeScript"}},{size:5875,node:{color:"#f1e05a",name:"JavaScript"}},{size:11436,node:{color:"#e34c26",name:"HTML"}},{size:22942,node:{color:"#563d7c",name:"CSS"}}]}}},{node:{name:"base-vue-ts-app",id:"MDEwOlJlcG9zaXRvcnkxNzE5MjQ4OTc=",url:"https://github.com/jackkoppa/base-vue-ts-app",description:"Freshly initialized Vue CLI 3 project, to demo consumption of Vue shared components",homepageUrl:null,owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:707,node:{color:"#f1e05a",name:"JavaScript"}},{size:567,node:{color:"#e34c26",name:"HTML"}},{size:3264,node:{color:"#2c3e50",name:"Vue"}},{size:1267,node:{color:"#2b7489",name:"TypeScript"}}]}}},{node:{name:"vue",id:"MDEwOlJlcG9zaXRvcnkxNzczMjQyMzY=",url:"https://github.com/jackkoppa/vue",description:"🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",homepageUrl:"http://vuejs.org",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:2796427,node:{color:"#f1e05a",name:"JavaScript"}},{size:11301,node:{color:"#563d7c",name:"CSS"}},{size:17839,node:{color:"#e34c26",name:"HTML"}},{size:20619,node:{color:"#2b7489",name:"TypeScript"}},{size:3351,node:{color:"#89e051",name:"Shell"}},{size:13258,node:{color:"#2c3e50",name:"Vue"}}]}}},{node:{name:"storybook-addon-vue-info",id:"MDEwOlJlcG9zaXRvcnkxNzI3Mzk5NjA=",url:"https://github.com/jackkoppa/storybook-addon-vue-info",description:"Info addon for Vue components",homepageUrl:"https://storybook-addon-vue-info.netlify.com/",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:18262,node:{color:"#f1e05a",name:"JavaScript"}},{size:12904,node:{color:"#2c3e50",name:"Vue"}},{size:4082,node:{color:"#563d7c",name:"CSS"}},{size:24624,node:{color:"#2b7489",name:"TypeScript"}}]}}},{node:{name:"sample-ts-react-app",id:"MDEwOlJlcG9zaXRvcnkxNzExODAyMzc=",url:"https://github.com/jackkoppa/sample-ts-react-app",description:"For testing typed usage of Shopify Polaris library",homepageUrl:null,owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:1598,node:{color:"#e34c26",name:"HTML"}},{size:913,node:{color:"#563d7c",name:"CSS"}},{size:6956,node:{color:"#2b7489",name:"TypeScript"}}]}}},{node:{name:"polaris-react",id:"MDEwOlJlcG9zaXRvcnkxNzExNzg0MzU=",url:"https://github.com/jackkoppa/polaris-react",description:"Shopify’s product component library",homepageUrl:"https://polaris.shopify.com",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:311,node:{color:"#89e051",name:"Shell"}},{size:67857,node:{color:"#f1e05a",name:"JavaScript"}},{size:1161309,node:{color:"#2b7489",name:"TypeScript"}},{size:715,node:{color:"#701516",name:"Ruby"}},{size:183679,node:{color:"#563d7c",name:"CSS"}}]}}},{node:{name:"solid",id:"MDEwOlJlcG9zaXRvcnkxNzExNzc1Nzg=",url:"https://github.com/jackkoppa/solid",description:"This repo will collect all basic BuzzFeed styling CSS. ",homepageUrl:null,owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:1870,node:{color:"#f1e05a",name:"JavaScript"}},{size:84111,node:{color:"#563d7c",name:"CSS"}},{size:22093,node:{color:"#e34c26",name:"HTML"}}]}}},{node:{name:"photon",id:"MDEwOlJlcG9zaXRvcnkxNzExNzU2Njg=",url:"https://github.com/jackkoppa/photon",description:"Firefox’s Photon Design System.",homepageUrl:"https://design.firefox.com/photon/",owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:334496,node:{color:"#e34c26",name:"HTML"}},{size:43,node:{color:"#701516",name:"Ruby"}},{size:1217,node:{color:"#89e051",name:"Shell"}},{size:87169,node:{color:"#563d7c",name:"CSS"}},{size:33440,node:{color:"#f1e05a",name:"JavaScript"}}]}}},{node:{name:"shared-component-library",id:"MDEwOlJlcG9zaXRvcnkxNzAwNDQwOTE=",url:"https://github.com/jackkoppa/shared-component-library",description:"Challenges, Tips, Storybook - example repo for shared component libraries",homepageUrl:null,owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[{size:53,node:{color:"#f1e05a",name:"JavaScript"}},{size:585,node:{color:"#e34c26",name:"HTML"}},{size:2828,node:{color:"#2c3e50",name:"Vue"}},{size:489,node:{color:"#2b7489",name:"TypeScript"}}]}}},{node:{name:"speaking",id:"MDEwOlJlcG9zaXRvcnkxNjk0NjA0Mzg=",url:"https://github.com/jackkoppa/speaking",description:"Do you want to speak at a DC meetup? How about find a speaker for your meetup? You're in the right place!",homepageUrl:null,owner:{__typename:"GitHub_User",login:"jackkoppa"},languages:{edges:[]}}}]}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2da05d70909408e8caff.js.map