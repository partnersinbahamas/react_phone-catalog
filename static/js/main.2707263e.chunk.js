(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(24).concat([function(e,t,c){},,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(25),n=c.n(s),a=c(6),r=c(3),i=(c(30),c(1)),o=c(4),l=c(7),j=c(5),u=c.n(j);function d(e){return new Promise((function(t){setTimeout(t,e)}))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),d(300).then((function(){return fetch(e,s)})).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var m=function(e){return b(e)},O=function(){return m("_new/products.json")},p=function(e,t){return e.filter((function(e){return e.category===t}))},h=function(e){return m("/_new/products/".concat(e,".json"))};function x(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(r.a)(e,2),s=t[0],n=t[1];null===n?c.delete(s):Array.isArray(n)?(c.delete(s),n.forEach((function(e){c.append(s,e)}))):c.set(s,n)})),c.toString()}c(32);var _,f=c(0),g=function(e){var t=e.message,c=void 0===t?"error":t;return Object(f.jsxs)("section",{className:"error",children:[Object(f.jsx)("img",{src:"Images/warning-error.svg",alt:"",className:"error__img"}),Object(f.jsx)("p",{className:"error__message",children:c})]})},v=c(9),N=(c(34),c(35),function(e,t){var c=Object(i.useState)((function(){return null!==localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)||"[]"):t})),s=Object(r.a)(c,2),n=s[0],a=s[1];Object(i.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[n,e]);return[n,function(e){n.some((function(t){return t.id===e.id}))?a((function(t){return Object(v.a)(t.filter((function(t){return t.id!==e.id})))})):a((function(t){return[].concat(Object(v.a)(t),[e])}))}]}),y=(c(36),function(e){var t=e.product,c=N("orderedItems",[]),s=Object(r.a)(c,2),n=s[0],a=s[1],i=function(e){a(e)};return Object(f.jsx)(f.Fragment,{children:n&&!n.some((function(e){return e.id===t.id}))?Object(f.jsx)("button",{type:"button",className:"order__button order__button--add",onClick:function(){return i(t)},children:"Add to cart"}):Object(f.jsx)("button",{type:"button",className:"order__button order__button--added",onClick:function(){return i(t)},children:"Added to carta \u221a"})})}),C=(c(37),function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("button",{type:"button",className:"liked liked--add",children:Object(f.jsx)("img",{src:"/Images/Heart--001.svg",alt:"Hear\u0435",style:{width:"15px",height:"15px"}})})})}),w=function(e){var t=e.product,c=t.phoneId,s=t.image,n=t.name,o=t.fullPrice,l=t.price,j=t.screen,u=t.capacity,d=t.ram,b=Object(a.d)(),m=Object(r.a)(b,2),O=m[0],p=m[1],h=Object(i.useState)(""),_=Object(r.a)(h,2),g=_[0],v=_[1];return Object(f.jsxs)("div",{className:"productCard",children:[Object(f.jsx)("img",{src:"_new/".concat(s),className:"productCard__img",alt:"Phone"}),Object(f.jsxs)("div",{className:"productCard__info",children:[Object(f.jsx)(a.b,{to:{pathname:t.phoneId===g?"/phones":"/phones/".concat(t.phoneId)},style:{color:"#000",textDecoration:"none"},children:Object(f.jsx)("p",{className:"productCard__name",onClick:function(){return v(e=c),void p(x(O,{productParam:e||null}));var e},children:n})}),Object(f.jsxs)("div",{className:"productCard__prices",children:[Object(f.jsx)("span",{className:"productCard__prices--fullPrice",children:"$".concat(l)}),Object(f.jsx)("span",{className:"productCard__prices--sale",children:"$".concat(o)})]})]}),Object(f.jsxs)("div",{className:"productCard__about",children:[Object(f.jsxs)("ul",{className:"productCard__list",children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"productCard__list-name",children:"Screen"}),Object(f.jsx)("span",{children:j})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"productCard__list-name",children:"Capacity"}),Object(f.jsx)("span",{children:u})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"productCard__list-name",children:"RAM"}),Object(f.jsx)("span",{children:d})]})]}),Object(f.jsxs)("div",{className:"productCard__buttons",children:[Object(f.jsx)(y,{product:t}),Object(f.jsx)(C,{})]})]})]})};!function(e){e.NEWEST="year",e.ALPHABETICALLY="name",e.CHEAPEST="price"}(_||(_={}));var I=function(e){var t=e.products,c=e.perPage,s=e.total,n=e.sortBy,o=e.page,l=Object(a.d)(),j=Object(r.a)(l,2),u=j[0],d=j[1],b=+c*(+o-1)+1,m=0;m=b+ +c>s?s:+c*+o;var O=Object(v.a)(t),p=function(){return O=O.sort((function(e,t){switch(n){case _.CHEAPEST:return e[n]-t[n];case _.NEWEST:return t[n]-e[n];case _.ALPHABETICALLY:return e[n].localeCompare(t[n]);default:return!0}}))};Object(i.useEffect)((function(){p()}));var h=p(),g=Object(v.a)(h).slice(b-1,m);return Object(f.jsxs)("section",{className:"catalog",children:[Object(f.jsx)("form",{method:"post",className:"catalog__form",children:Object(f.jsxs)("div",{className:"catalog__form-wrapper",children:[Object(f.jsxs)("label",{htmlFor:"perPage",className:"catalog__form-item",children:[Object(f.jsx)("span",{className:"catalog__form-type",children:"items on page"}),Object(f.jsxs)("select",{name:"itemsPerPage",id:"perPage",className:"catalog__form-select",value:c,onChange:function(e){return function(e){var t=e.target.value;d(x(u,{perPage:t}))}(e)},children:[Object(f.jsx)("option",{value:"4",children:"4"}),Object(f.jsx)("option",{value:"8",children:"8"}),Object(f.jsx)("option",{value:"16",children:"16"}),Object(f.jsx)("option",{value:s,children:"All"})]})]}),Object(f.jsxs)("label",{htmlFor:"perPage",className:"catalog__form-item",children:[Object(f.jsx)("span",{className:"catalog__form-type",children:"Sort by"}),Object(f.jsxs)("select",{name:"itemsPerPage",id:"perPage",className:"catalog__form-select",value:n,onChange:function(e){var t=e.target.value;d(x(u,{sortBy:t}))},children:[Object(f.jsx)("option",{value:"year",children:"Newest"}),Object(f.jsx)("option",{value:"name",children:"Alphabetically"}),Object(f.jsx)("option",{value:"price",children:"Cheapest"})]})]})]})}),Object(f.jsx)("div",{className:"catalog__container",children:g.map((function(e){return Object(f.jsx)(w,{product:e},e.id)}))})]})},k=(c(38),function(){return Object(f.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(f.jsx)("div",{className:"Loader__content"})})}),S=(c(39),function(){var e,t=Object(o.l)(),c=t.pathname.split("/").join(" ").slice(0).split(" ").filter((function(e){return""!==e})),s=c[0][0].toUpperCase()+c[0].slice(1);return c.length>=2&&(e=c[1].split("-").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" ")),Object(f.jsx)("section",{className:"location",children:Object(f.jsxs)("div",{className:"location__container",children:[Object(f.jsx)(a.b,{to:"/home",className:"location__link",children:Object(f.jsx)("img",{src:"/Images/home.svg",alt:"home",className:"location__img"})}),Object(f.jsx)("img",{src:"/Images/arrow-icon--lite.svg",className:"location__img--arrow",alt:"arrow line"}),Object(f.jsx)(a.b,{to:t.pathname,className:"location__link location__link--name",children:s}),e&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:"/Images/arrow-icon--lite.svg",className:"location__img--arrow",alt:"arrow icon"}),Object(f.jsx)(a.b,{to:"/phones/".concat(c[1]),className:"location__link",children:e})]})]})})}),L=(c(40),c(8)),P=c.n(L),A=function(e){for(var t=e.total,c=e.setPage,s=e.perPage,n=e.page,o=Object(i.useState)(0),l=Object(r.a)(o,2),j=l[0],u=l[1],d=Object(i.useState)(6),b=Object(r.a)(d,2),m=b[0],O=b[1],p=Math.ceil(t/+s),h=[];1<=p;2)h.push(1);var x,_=function(e){e+5>=t/s?(u(t/s-5),O(t/s+1)):(u(e-1),O(e+5))},g=h.slice(j,m);return Object(f.jsxs)("section",{className:"pagination",children:[Object(f.jsx)(a.b,{to:{search:(x=n,c(+x-1))},onClick:function(){return function(e){e<=5?(u(0),O(6)):(u(e-6),O(e))}(+n)},className:P()("pagination__button",{"pagination__button--disabled":1===+n}),children:Object(f.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:""})}),Object(f.jsx)("ul",{className:"pagination__list",children:g.map((function(e){return Object(f.jsx)(a.b,{to:{search:c(e)},onClick:function(){return _(e)},className:P()("pagination__item",{"pagination__item--active":e===+n}),children:e},e)}))}),Object(f.jsx)(a.b,{to:{search:function(e){return c(+e+1)}(n)},onClick:function(){return _(+n)},className:P()("pagination__button",{"pagination__button--disabled":+n===Math.ceil(t/s)}),children:Object(f.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"arrow icon",style:{transform:"rotate(180deg)"}})})]})},D=(c(41),function(e){var t=e.title,c=e.productsCount;return Object(f.jsxs)("div",{className:"placeholder",children:[Object(f.jsx)("h1",{children:t}),Object(f.jsxs)("p",{children:[c," ","models"]})]})}),E=(c(42),function(){return Object(f.jsxs)("section",{className:"empty",children:[Object(f.jsx)("img",{src:"Images/empty--img.png",className:"empty__img",alt:"Empty"}),Object(f.jsx)("p",{className:"empty__message",children:"At the moment this page does not exist,\n          we will add this functionality soon"})]})}),T=(c(43),{silver:"#e9ebea",gold:"#eee1c6",midnightgreen:"#47534d",spacegray:"#696863",red:"#e03547",purple:"#e1d9ee",white:"#eae5df",yellow:"#fbe580",black:"#2b2b2b",green:"#b4e9cf"}),M=function(e){var t=e.product,c=t.name,s=t.images,n=t.colorsAvailable,o=t.color,l=t.namespaceId,j=t.capacityAvailable,u=t.capacity,d=t.priceDiscount,b=t.priceRegular,m=t.screen,O=t.ram,p=Object(i.useState)(t.images[0]),h=Object(r.a)(p,2),x=h[0],_=h[1],g=Object(i.useState)(o),v=Object(r.a)(g,1)[0],N=Object(i.useState)(u),w=Object(r.a)(N,1)[0],I={id:t.name,category:"",phoneId:t.namespaceId,itemId:t.namespaceId,name:t.name,fullPrice:t.priceRegular,price:t.priceDiscount,screen:t.screen,capacity:t.capacity,color:t.color,ram:t.ram,year:2019,image:t.images[0]};return Object(f.jsxs)("section",{className:"productDetails",children:[Object(f.jsx)(S,{}),Object(f.jsx)("h1",{className:"productDetails__name",children:c}),Object(f.jsxs)("div",{className:"productDetails__pictures",children:[Object(f.jsxs)("div",{style:{display:"flex",gap:"15px"},children:[Object(f.jsx)("ul",{className:"productDetails__list",children:s.map((function(e){return Object(f.jsx)("li",{className:P()("productDetails__list-item",{"productDetails__list-item--active":e===x}),onClick:function(){return function(e){_(e)}(e)},children:Object(f.jsx)("img",{src:"/_new/".concat(e),alt:"Phones",className:"productDetails__img"})},e)}))}),Object(f.jsx)("img",{src:"/_new/".concat(x),alt:"",className:"productDetails__img--active"})]}),Object(f.jsxs)("div",{className:"productDetails__description",children:[Object(f.jsxs)("div",{className:"productDetails__colors",children:[Object(f.jsx)("div",{className:"productDetails__description-title",children:"Avaliable colors"}),Object(f.jsx)("ul",{className:"productDetails__list-colors",children:n.map((function(e){return Object(f.jsx)(a.b,{to:{pathname:"/phones/".concat(l,"-").concat(w,"-").concat(o)},className:P()("productDetails__list--color",{"productDetails__list--color--active":v===o}),children:Object(f.jsx)("div",{style:{backgroundColor:T[o],width:"100%",height:"100%",borderRadius:"50%"}})},e)}))})]}),Object(f.jsxs)("div",{className:"productDetails__capacity",children:[Object(f.jsx)("div",{className:"productDetails__description-title",children:"Select capacity"}),Object(f.jsx)("ul",{className:"productDetails__list-capacity",children:j.map((function(e){return Object(f.jsx)(a.b,{to:{pathname:"/phones/".concat(l,"-").concat(u,"-").concat(o)},className:P()("productDetails__capacity-item",{"productDetails__capacity-item--active":u===w}),children:u},e)}))})]}),Object(f.jsxs)("div",{className:"productDetails__prices",children:[Object(f.jsx)("span",{className:"productDetails__prices--full",children:"$".concat(d)}),Object(f.jsx)("span",{className:"productDetails__prices--sale",children:"$".concat(b)})]}),Object(f.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[Object(f.jsx)(y,{product:I}),Object(f.jsx)(C,{})]}),Object(f.jsx)("div",{className:"productCard__about",children:Object(f.jsxs)("ul",{className:"productCard__list",children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"productCard__list-name",children:"Screen"}),Object(f.jsx)("span",{children:m})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"productCard__list-name",children:"Capacity"}),Object(f.jsx)("span",{children:u})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"productCard__list-name",children:"RAM"}),Object(f.jsx)("span",{children:O})]})]})})]})]})]})},F=(c(44),function(e){var t=e.isLoader,c=e.setIsLoader,s=e.category,n=e.title,j=Object(i.useState)(null),d=Object(r.a)(j,2),b=d[0],m=d[1],_=Object(i.useState)([]),v=Object(r.a)(_,2),N=v[0],y=v[1],C=Object(i.useState)(!1),w=Object(r.a)(C,2),L=w[0],P=w[1],T=Object(i.useState)(!1),F=Object(r.a)(T,2),B=F[0],U=F[1],H=Object(i.useState)(""),J=Object(r.a)(H,2),R=J[0],W=J[1],$=Object(a.d)(),G=Object(r.a)($,1)[0],q=G.get("page")||"1",X=G.get("perPage")||"".concat(N.length),Y=G.get("sortBy")||"year",z=N.length,K=G.get("query")||"",Q=Object(o.m)("/phones/:productId"),V=(null===Q||void 0===Q?void 0:Q.params.productId)||null,Z=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,O();case 4:t=e.sent,n=p(t,s),y(n.filter((function(e){return e.name.toLowerCase().includes(K.toLowerCase())}))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),U(!0),W("Unfortunately, an error occurred,\n        it is not possible to download data from the server.\n        Try again later, we will resolve this issue soon.\n        Thank you");case 13:return e.prev=13,c(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){Z()}),[K]);var ee=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,P(!0),null===V){e.next=7;break}return e.next=5,h(V);case 5:t=e.sent,m(t);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),U(!0),W("Unfortunately, an error occurred,\n        it is not possible to download data from the server.\n        Try again later, we will resolve this issue soon.\n        Thank you");case 13:return e.prev=13,P(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){ee()}),[V]),Object(f.jsx)("section",{className:"products",children:t||L?Object(f.jsx)(k,{}):Object(f.jsx)(f.Fragment,{children:b?Object(f.jsx)(M,{product:b}):Object(f.jsx)("div",{className:"products__wrapper",children:Object(f.jsx)("div",{className:"container",children:B?Object(f.jsx)(g,{message:R}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(S,{}),Object(f.jsx)(D,{title:n,productsCount:N.length}),N.length?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(I,{products:N,perPage:X,total:z,sortBy:Y,page:q}),Object(f.jsx)(A,{total:z,setPage:function(e){return x(G,{page:e.toString()})},perPage:X,page:q})]}):Object(f.jsx)(E,{})]})})})})})}),B=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(F,{isLoader:t,setIsLoader:c,category:"phones",title:"Mobile Phones"})})},U=(c(24),function(e){var t=e.to,c=e.text;return Object(f.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return P()("nav__item",{"nav__item--active":t})},children:c})}),H=function(){return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{className:"nav__list",children:[Object(f.jsx)("li",{children:Object(f.jsx)(U,{to:"home",text:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(U,{to:"phones",text:"Phones"})}),Object(f.jsx)("li",{children:Object(f.jsx)(U,{to:"tablets",text:"tablets"})}),Object(f.jsx)("li",{children:Object(f.jsx)(U,{to:"accessories",text:"accessories"})})]})})},J=(c(45),function(){var e=JSON.parse(localStorage.getItem("orderedItems")||"[]");return Object(f.jsxs)("ul",{className:"favorites",children:[Object(f.jsx)("li",{className:"favorites__card",children:Object(f.jsx)(a.c,{to:"liked",className:function(e){var t=e.isActive;return P()("favorites__item",{"favorites__item--active":t})},children:Object(f.jsx)("img",{src:"Images/Heart--001.svg",className:"favorites__img",alt:"Liked"})})}),Object(f.jsx)("li",{className:"favorites__card",children:Object(f.jsxs)(a.c,{to:"order",className:function(e){var t=e.isActive;return P()("favorites__item",{"favorites__item--active":t})},children:[Object(f.jsx)("img",{src:"Images/Order--001.svg",className:"favorites__img",alt:"Order"}),!!e.length&&Object(f.jsx)("p",{className:"favorites__item-count",children:e.length})]})})]})}),R=function(){return Object(f.jsx)(a.c,{to:"home",children:Object(f.jsx)("img",{src:"Images/LOGO.svg",alt:"LOGO"})})},W=(c(46),function(e){var t=e.setIsMenu,c=e.isMenu,s=Object(a.d)(),n=Object(r.a)(s,2),o=n[0],l=n[1],j=Object(i.useState)(""),u=Object(r.a)(j,2),d=u[0],b=u[1],m=Object(i.useState)(""),O=Object(r.a)(m,2),p=O[0],h=O[1],_=Object(i.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];c=setTimeout.apply(void 0,[e,t].concat(n))}}(h,1e3),[]);Object(i.useEffect)((function(){l(x(o,{query:p||null}))}),[p]);return Object(f.jsx)("header",{className:"header",children:Object(f.jsxs)("div",{className:"header__container",children:[Object(f.jsxs)("div",{className:"header__wrapper",children:[Object(f.jsx)("button",{type:"button",className:"header__menu",onClick:function(){return t(!c)},children:Object(f.jsx)("img",{className:"header__menu--icon",src:c?"Images/cross-icon.png":"Images/menu-icon.png",alt:"menu icon"})}),Object(f.jsx)(R,{}),Object(f.jsx)(H,{})]}),Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)("input",{type:"text",value:d,onChange:function(e){return t=e.target.value,b(t),void _(t);var t}}),Object(f.jsx)(J,{})]})]})})}),$=(c(47),[{id:0,url:"banner-phones.png"},{id:1,url:"banner-accessories.png"},{id:2,url:"banner-tablets.png"},{id:3,url:"category-accessories.png"},{id:4,url:"category-phones.png"},{id:5,url:"category-tablets.png"}]),G=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)($),a=Object(r.a)(n,1)[0],o=Object(i.useState)(0),l=Object(r.a)(o,2),j=l[0],u=l[1],d=Object(i.useState)(window.innerWidth),b=Object(r.a)(d,1)[0],m=-j*(a.length-1);Object(i.useEffect)((function(){u(b<=300?210:b<=640?310:b>=640&&b<1200?560:750)}),[b]);var O=function(){s((function(e){return Math.max(e-=j,-j*($.length-1))}))};return Object(i.useEffect)((function(){var e=setInterval(O,3e3);return function(){clearInterval(e)}}),[c]),Object(f.jsxs)("section",{className:"slider",children:[Object(f.jsxs)("div",{className:"slider__container",children:[Object(f.jsx)("button",{type:"button",onClick:function(){s((function(e){return Math.min(e+=j,0)}))},className:P()("slider__button",{"slider__button--active":0===c}),children:Object(f.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"Arrow icon left"})}),Object(f.jsx)("div",{className:"slider__wrapper",children:Object(f.jsx)("div",{className:"slider__items",style:{transform:"translateX(".concat(c,"px)"),transition:"1s"},children:a.map((function(e){return Object(f.jsx)("img",{src:"_new/img/".concat(e.url),className:"slider__img",alt:"slider Iamge ".concat(e.id)},e.id)}))})}),Object(f.jsx)("button",{type:"button",onClick:O,className:P()("slider__button",{"slider__button--active":c===m}),children:Object(f.jsx)("img",{src:"Images/arrow-icon--left.svg",style:{transform:"rotate(180deg)"},alt:"Arrow icon right"})})]}),Object(f.jsx)("div",{className:"slider__dots",children:a.map((function(e){var t=-e.id*j;return Object(f.jsx)("button",{type:"button",className:P()("slider__dot",{"slider__dot--active":t===c})},e.id)}))})]})},q=(c(48),c(49),function(e){var t=e.products,c=e.title,s=Object(i.useState)(0),n=Object(r.a)(s,2),a=n[0],o=n[1],l=Object(i.useState)(0),j=Object(r.a)(l,2),u=j[0],d=j[1],b=Object(i.useState)(window.innerWidth),m=Object(r.a)(b,1)[0],O=Object(i.useState)(1),p=Object(r.a)(O,2),h=p[0],x=p[1],_=34*a/h;Object(i.useEffect)((function(){m<420?o(205):m>=420&&m<1200?(x(2),o(410)):(o(820),x(4))}),[m]);return Object(f.jsxs)("section",{className:"carousel",children:[Object(f.jsxs)("div",{className:"carousel__top",children:[Object(f.jsx)("h1",{className:"carousel__title",children:c}),Object(f.jsxs)("div",{className:"carousel__buttons",children:[Object(f.jsx)("button",{type:"button",onClick:function(){d((function(e){return Math.max(e-=a,0)}))},className:P()("carousel__button",{"carousel__button--active":0===u}),children:Object(f.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"Arrow icon left"})}),Object(f.jsx)("button",{type:"button",onClick:function(){d((function(e){return Math.min(e+=a,_)}))},className:P()("carousel__button",{"carousel__button--active":u===_}),children:Object(f.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"Arrow icon right",style:{transform:"rotate(180deg)"}})})]})]}),Object(f.jsx)("div",{className:"carousel__container","data-cy":"cardsContainer",children:Object(f.jsx)("div",{className:"carousel__items",style:{transform:"translateX(-".concat(u,"px)"),transition:"2s"},children:t.map((function(e){return Object(f.jsx)(w,{product:e},e.id)}))})})]})}),X=(c(50),[{name:"Mobile Phones",imgUrl:"_new/img/category-phones.png",bgcColor:"#FCDBC1",linkTo:"/phones"},{name:"Tablets",imgUrl:"_new/img/category-tablets.png",bgcColor:"#ddd",linkTo:"/tablets"},{name:"Accessories",imgUrl:"Images/airpods-max-select-green-202011.png",bgcColor:"#DFEED8",linkTo:"/accessories"}]),Y=(c(51),function(e){var t=e.name,c=e.imgUrl,s=e.color,n=e.to,r=e.products;return Object(f.jsx)(a.b,{to:n,style:{textDecoration:"none",margin:"0 auto"},children:Object(f.jsxs)("div",{className:"category",children:[Object(f.jsx)("div",{className:"category__shell",style:{backgroundColor:s},children:Object(f.jsx)("img",{src:"".concat(c),alt:"phones",className:"category__img"})}),Object(f.jsx)("h4",{className:"category__title",children:t}),Object(f.jsx)("span",{className:"category__models",children:"".concat(r.length," models")})]})})}),z=function(e){var t=e.phones,c=e.tablets,s=e.accessories;return Object(f.jsxs)("section",{className:"shopByCategory",children:[Object(f.jsx)("h1",{className:"shopByCategory__title",children:"Shop by Category"}),Object(f.jsx)("div",{className:"shopByCategory__container",children:X.map((function(e){var n=e.name,a=e.imgUrl,r=e.bgcColor,i=e.linkTo,o=[];return"/phones"===i&&(o=t),"/tablets"===i&&(o=c),"/accessories"===i&&(o=s),Object(f.jsx)(Y,{name:n,imgUrl:a,color:r,to:i,products:o},i)}))})]})},K=function(e){var t=e.setIsLoader,c=e.isLoader,s=Object(i.useState)([]),n=Object(r.a)(s,2),a=n[0],o=n[1],j=Object(i.useState)([]),d=Object(r.a)(j,2),b=d[0],m=d[1],h=Object(i.useState)([]),x=Object(r.a)(h,2),_=x[0],g=x[1],v=Object(i.useState)(0),N=Object(r.a)(v,2),y=N[0],C=N[1];Object(i.useEffect)((function(){window.innerWidth>400?C(0):C(1)}),[window.innerWidth]);var w=a.sort((function(e,t){return e.fullPrice-e.price-(t.fullPrice-t.price)})).slice(y),I=a.sort((function(e,t){return t.year-e.year})).slice(y),S=function(){var e=Object(l.a)(u.a.mark((function e(){var c,s,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0),e.next=4,O();case 4:c=e.sent,s=p(c,"phones"),n=p(c,"tablets"),a=p(c,"accessories"),o(s),m(n),g(a);case 11:return e.prev=11,t(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){S()}),[]),Object(f.jsx)("section",{className:"home",children:c?Object(f.jsx)(k,{}):Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(G,{}),Object(f.jsx)(q,{products:w,title:"Hot Prices"}),Object(f.jsx)(z,{phones:a,tablets:b,accessories:_}),Object(f.jsx)(q,{products:I,title:"Brand new models"})]})})},Q=function(){return Object(f.jsx)("h1",{children:"Page not Found"})},V=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(F,{isLoader:t,setIsLoader:c,category:"tablets",title:"Tablets"})})},Z=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(F,{isLoader:t,setIsLoader:c,category:"accessories",title:"Accessories"})})},ee=function(){return Object(f.jsx)("h1",{children:"Liked"})},te=(c(52),function(e){var t=e.product,c=e.onDelete,s=e.setSum,n=Object(i.useState)(1),a=Object(r.a)(n,2),o=a[0],l=a[1];return Object(f.jsxs)("div",{className:"productCart",children:[Object(f.jsx)("button",{type:"button",className:"productCart__button--cross",onClick:function(){return c(t,o)},children:"x"}),Object(f.jsx)("img",{src:"_new/".concat(t.image),alt:"Product",className:"productCart__img"}),Object(f.jsx)("span",{className:"productCart__name",children:t.name}),Object(f.jsxs)("div",{className:"productCart__counter",children:[Object(f.jsx)("button",{type:"button",onClick:function(){return e=t.price,s((function(t){return t+e})),void l((function(e){return e+1}));var e},className:"productCart__button",children:"+"}),Object(f.jsx)("p",{children:o}),Object(f.jsx)("button",{type:"button",onClick:function(){return e=t,n=o,o>0&&(s((function(t){return t-e.price})),l((function(e){return e-1}))),void(0===o&&c(t,n));var e,n},className:"productCart__button",children:"-"})]}),Object(f.jsx)("span",{className:"productCart__price",children:"$".concat(t.price)})]})}),ce=(c(53),function(){var e=0,t=N("orderedItems",[]),c=Object(r.a)(t,2),s=c[0],n=c[1],a=Object(i.useState)(e),o=Object(r.a)(a,2),l=o[0],j=o[1],u=function(e,t){j((function(c){return c-e.price*t})),n(e)};return Object(i.useEffect)((function(){s.forEach((function(t){return e+=t.price})),j(e)}),[s]),Object(f.jsx)("section",{className:"cart",children:Object(f.jsxs)("div",{className:"cart__container",children:[Object(f.jsx)("ul",{className:"cart__list",children:s.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(te,{product:e,onDelete:u,setSum:j})},e.id)}))}),Object(f.jsxs)("div",{className:"cart__total",children:[Object(f.jsxs)("div",{className:"cart__total-wrapper",children:[Object(f.jsxs)("h1",{className:"cart__total-price",children:["$",l]}),Object(f.jsxs)("p",{children:["Total for",s.length," ","items"]})]}),Object(f.jsx)("button",{type:"button",className:"cart__button",children:"Checkout"})]})]})})}),se=(c(54),function(e){var t=e.setIsMenu,c=e.isMenu;return Object(f.jsx)("section",{className:P()("menu",{"menu--smooth":c}),style:{transition:"300ms"},children:Object(f.jsx)("div",{className:"menu__container",children:Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{className:"nav__list",style:{display:"flex",flexDirection:"column",width:"40%",height:"100vh",backgroundColor:"#fff",paddingTop:"50px"},children:[Object(f.jsx)("li",{onClick:function(){return t(!1)},children:Object(f.jsx)(U,{to:"home",text:"Home"})}),Object(f.jsx)("li",{onClick:function(){return t(!1)},children:Object(f.jsx)(U,{to:"phones",text:"Phones"})}),Object(f.jsx)("li",{onClick:function(){return t(!1)},children:Object(f.jsx)(U,{to:"tablets",text:"tablets"})}),Object(f.jsx)("li",{onClick:function(){return t(!1)},children:Object(f.jsx)(U,{to:"accessories",text:"accessories"})})]})})})})}),ne=(c(55),function(){return Object(f.jsx)("div",{className:"footer",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"footer__container",children:[Object(f.jsx)(R,{}),Object(f.jsxs)("ul",{className:"footer__list",children:[Object(f.jsx)("li",{children:Object(f.jsx)(a.b,{to:"https://github.com/partnersinbahamas",className:"footer__link",target:"_blank",children:"github"})}),Object(f.jsx)("li",{children:Object(f.jsx)(a.b,{to:"/",className:"footer__link",target:"_blank",children:"contacts"})}),Object(f.jsx)("li",{children:Object(f.jsx)(a.b,{to:"/",className:"footer__link",target:"_blank",children:"rights"})})]}),Object(f.jsxs)("div",{className:"footer__backTo",children:[Object(f.jsx)("p",{children:"Back to top"}),Object(f.jsx)("button",{type:"button",className:"footer__button",children:Object(f.jsx)("img",{src:"Images/arrow-icon--left.svg",className:"footer__button--icon",alt:"Arrow line"})})]})]})})})}),ae=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!1),l=Object(r.a)(n,2),j=l[0],u=l[1],d=Object(a.d)(),b=Object(r.a)(d,1)[0];return Object(f.jsxs)("div",{className:"App",id:"up",children:[Object(f.jsx)(W,{setIsMenu:s,isMenu:c}),c&&Object(f.jsx)(se,{setIsMenu:s,isMenu:c}),Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{path:"/home",element:Object(f.jsx)(K,{setIsLoader:u,isLoader:j,searchParams:b})}),Object(f.jsx)(o.b,{path:"/",element:Object(f.jsx)(o.a,{to:"/home"})}),Object(f.jsxs)(o.b,{path:"phones",children:[Object(f.jsx)(o.b,{index:!0,element:Object(f.jsx)(B,{isLoader:j,setIsLoader:u})}),Object(f.jsx)(o.b,{path:":productId",element:Object(f.jsx)(B,{isLoader:j,setIsLoader:u})})]}),Object(f.jsx)(o.b,{path:"tablets",element:Object(f.jsx)(V,{isLoader:j,setIsLoader:u})}),Object(f.jsx)(o.b,{path:"accessories",element:Object(f.jsx)(Z,{isLoader:j,setIsLoader:u})}),Object(f.jsx)(o.b,{path:"liked",element:Object(f.jsx)(ee,{})}),Object(f.jsx)(o.b,{path:"order",element:Object(f.jsx)(ce,{})}),Object(f.jsx)(o.b,{path:"*",element:Object(f.jsx)(Q,{})})]}),Object(f.jsx)(ne,{})]})};n.a.render(Object(f.jsx)(a.a,{children:Object(f.jsx)(ae,{})}),document.getElementById("root"))}]),[[56,1,2]]]);
//# sourceMappingURL=main.2707263e.chunk.js.map