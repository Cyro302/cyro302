(window.webpackJsonp=window.webpackJsonp||[]).push([[52,4,5,6],{413:function(t,e,r){"use strict";r.r(e);var n=r(3),c=r(17);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={props:["title","introduction","current","hideMenu","showLinks"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)(["studio"]))},d=o,m=r(2),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"top-0 flex-col justify-center hidden w-full py-20 pt-64 mb-auto text-center md:w-1/3 md:pr-20 md:sticky md:flex",class:t.hideMenu?"":"md:h-screen"},[e("header",{staticClass:"flex w-full"},[e("AsideIntroduction",{staticClass:"flex items-center w-full",attrs:{title:t.title,links:t.studio.links,showLinks:t.showLinks,introduction:t.introduction}})],1),t._v(" "),e("footer",{staticClass:"flex-col hidden mt-auto text-center md:flex caps"},[t.hideMenu?t._e():e("AsideMenu",{attrs:{current:t.current}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideIntroduction:r(415).default,AsideMenu:r(416).default,Aside:r(413).default})},415:function(t,e,r){"use strict";r.r(e);var n={props:["hideMenu","introduction","links","title","showLinks"]},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.showLinks?e("div",{staticClass:"flex flex-col flex-1 space-y-4"},t._l(t.links,(function(menu){return e("nav",{key:menu._key,staticClass:"flex flex-col w-full col-span-5 text-center"},t._l(menu.links,(function(link){return e("span",{key:link._key},[link.header?e("span",{staticClass:"block caps"},[t._v(t._s(link.header))]):t._e(),t._v(" "),link.link?e("a",{staticClass:"block transition-opacity duration-300 hover:opacity-50",attrs:{href:link.link}},[t._v(t._s(link.title))]):e("Content",{attrs:{blocks:link.text}})],1)})),0)})),0):e("div",{staticClass:"flex flex-col items-center justify-center flex-1"},[e("div",{staticClass:"w-1/2 space-y-5"},[e("h1",{staticClass:"caps"},[t._v(t._s(t.title))]),t._v(" "),t.introduction?e("div",[e("Content",{attrs:{blocks:t.introduction}})],1):t._e()])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Content:r(121).default})},416:function(t,e,r){"use strict";r.r(e);var n={props:["current"]},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"flex flex-col"},["press"!=t.current?e("NuxtLink",{staticClass:"transition-opacity duration-300 hover:opacity-25",attrs:{to:"/press"}},[t._v("Press "),e("br")]):t._e(),t._v(" "),"services"!=t.current?e("NuxtLink",{staticClass:"transition-opacity duration-300 hover:opacity-25",attrs:{to:"/services"}},[t._v("Services "),e("br")]):t._e(),t._v(" "),"team"!=t.current?e("NuxtLink",{staticClass:"transition-opacity duration-300 hover:opacity-25",attrs:{to:"/team"}},[t._v("Team "),e("br")]):t._e(),t._v(" "),"careers"!=t.current?e("NuxtLink",{staticClass:"transition-opacity duration-300 hover:opacity-25",attrs:{to:"/careers"}},[t._v("Careers "),e("br")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},474:function(t,e,r){"use strict";r.r(e);var n,c,l=r(3),o=r(32),d=r(4),m=(r(222),r(33)),f=r(17);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={asyncData:t=>Object(d.a)((function*(){var{params:e,$sanity:r}=t,l=Object(m.a)(n||(n=Object(o.a)(['*[_type == "team"] {..., "directors" : {"image" : { "alt" : directors.alt, "image" : directors.image.asset._ref, "size" : {"width" :  directors.image.asset->metadata.dimensions.width, "height" :  directors.image.asset->metadata.dimensions.height}, "caption" : directors.caption}}} | order(_updatedAt desc)[0] ']))),d=yield r.fetch(l);return l=Object(m.a)(c||(c=Object(o.a)(['*[_type == "member"] {..., "image" : {"image" : image.image.asset._ref, "alt" : image.alt, "size" : {"width" :  image.image.asset->metadata.dimensions.width, "height" :  image.image.asset->metadata.dimensions.height}}} | order(order asc) ']))),{team:d,members:yield r.fetch(l)}}))(),methods:v(v({},Object(f.c)(["SHOW_STUDIO","SHOW_MODAL"])),{},{getMargin:t=>"Large"==t?"mt-144":"Medium"==t?"mt-96":"Small"==t?"mt-32":void 0}),mounted(){this.SHOW_STUDIO(!0),this.SHOW_MODAL(!0)},head(){var t={};return this.team.seo&&(this.team.seo.title&&(t.title=this.team.seo.title),this.team.seo.description&&(t.description=this.team.seo.description)),this.$seo(t)}},x=r(2),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex px-6 md:pl-0 md:pr-8"},[e("Aside",{attrs:{title:"Team",current:"team",introduction:t.team.introduction}}),t._v(" "),e("div",{staticClass:"flex-1 pt-40 pb-32"},[t.team.mobileIntroduction?e("div",{staticClass:"space-y-4 md:hidden"},[e("header",{staticClass:"text-center caps md:hidden"},[t._v("Team")]),t._v(" "),e("Content",{staticClass:"mx-auto max-w-ch",attrs:{blocks:t.team.mobileIntroduction}})],1):t._e(),t._v(" "),e("figure",{staticClass:"w-full py-12 pb-20"},[e("div",{staticClass:"flex items-center justify-center text-4.5xl uppercase font-display md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-6xl md:my-12"},[t._v("\n        "+t._s(t.team.directors.image.caption)+"\n      ")])]),t._v(" "),e("div",[e("article",{staticClass:"flex justify-center col-span-3"},[e("div",{staticClass:"relative w-full"},[e("figure",{staticClass:"w-full"},[e("nuxt-picture",{staticClass:"w-full h-auto",style:t.team.directors.image.aspect?"aspect-ratio: ".concat(t.team.directors.image.aspect):"",attrs:{src:t.team.directors.image.image,provider:"sanity",loading:"lazy",width:t.team.directors.image.size.width?t.team.directors.image.size.width:"",height:t.team.directors.image.size.height?t.team.directors.image.size.height:"",sizes:"sm:125vw md:150vw lg:125vw",alt:t.team.directors.image.alt}})],1)])]),t._v(" "),e("div",{staticClass:"w-full mt-4 mb-20"},[e("Content",{attrs:{blocks:t.team.content}})],1),t._v(" "),e("div",{staticClass:"flex flex-col space-y-12"},t._l(t.members,(function(r){return e("article",{key:r._key,staticClass:"relative grid gap-12 md:grid-cols-2",class:t.getMargin(r.margin)},[e("a",{staticClass:"absolute inset-0 z-10 w-full h-full",attrs:{href:r.link,target:"_blank"}}),t._v(" "),e("div",{staticClass:"space-y-8 text-center caps md:hidden"},[e("h3",{staticClass:"text-4.5xl uppercase font-display md:text-5xl lg:text-6xl"},[r.formattedName?e("span",[e("Content",{attrs:{blocks:r.formattedName}})],1):e("span",[t._v(t._s(r.name))])]),t._v(" "),r.position?e("span",{staticClass:"block"},[t._v(t._s(r.position)+" "),e("br")]):t._e()]),t._v(" "),e("figure",{staticClass:"w-10/12 mx-auto md:w-full aspect-w-3 aspect-h-4"},[e("nuxt-picture",{staticClass:"absolute object-cover object-center w-full h-full",style:r.image.aspect?"aspect-ratio: ".concat(r.image.aspect):"",attrs:{src:r.image.image,provider:"sanity",loading:"lazy",width:r.image.size.width?r.image.size.width:"",height:r.image.size.height?r.image.size.height:"",sizes:"sm:125vw md:100vw lg:100vw",alt:r.image.alt}})],1),t._v(" "),e("figcaption",{staticClass:"flex flex-col md:mt-8"},[e("div",{staticClass:"hidden space-y-8 text-center caps md:block"},[e("h3",{staticClass:"text-4.5xl uppercase font-display md:text-5xl lg:text-6xl"},[r.formattedName?e("span",[e("Content",{attrs:{blocks:r.formattedName}})],1):e("span",[t._v(t._s(r.name))])]),t._v(" "),r.position?e("span",{staticClass:"block"},[t._v(t._s(r.position)+" "),e("br")]):t._e()]),t._v(" "),r.bio?e("div",{staticClass:"md:mt-12"},[e("Content",{staticClass:"text-xl leading-tight",attrs:{blocks:r.bio}})],1):t._e()])])})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Aside:r(413).default,Content:r(121).default})}}]);