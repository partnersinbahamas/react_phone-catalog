(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(24).concat([function(e,t,c){},,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(25),n=c.n(s),a=c(6),r=c(2),i=(c(30),c(1)),o=c(4),l=c(7),j=c(5),u=c.n(j),d=c(9);function b(e){return new Promise((function(t){setTimeout(t,e)}))}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),b(300).then((function(){return fetch(e,s)})).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var O=function(e){return m(e)},p=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},h=function(){return O("https://mate-academy.github.io/react_phone-catalog/_new/products.json")},x=function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,c=Object(d.a)(t.sort((function(){return Math.random()-.5}))),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e,t){return e.filter((function(e){return e.category===t}))},f=function(e){return O("/_new/products/".concat(e,".json"))};function g(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(r.a)(e,2),s=t[0],n=t[1];null===n?c.delete(s):Array.isArray(n)?(c.delete(s),n.forEach((function(e){c.append(s,e)}))):c.set(s,n)})),c.toString()}c(32);var v,N=c(0),y=function(e){var t=e.message,c=void 0===t?"error":t;return Object(N.jsxs)("section",{className:"error",children:[Object(N.jsx)("img",{src:"/Images/warning-error.svg",alt:"",className:"error__img"}),Object(N.jsx)("p",{className:"error__message",children:c})]})},C=(c(34),c(35),function(e,t){var c=Object(i.useState)((function(){return null!==localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)||"[]"):t})),s=Object(r.a)(c,2),n=s[0],a=s[1];Object(i.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[n,e]);return[n,function(e){n.some((function(t){return t.id===e.id}))?a((function(t){return Object(d.a)(t.filter((function(t){return t.id!==e.id})))})):a((function(t){return[].concat(Object(d.a)(t),[e])}))}]}),w=(c(36),function(e){var t=e.product,c=C("orderedItems",[]),s=Object(r.a)(c,2),n=s[0],a=s[1],i=function(e){a(e)};return Object(N.jsx)(N.Fragment,{children:n&&!n.some((function(e){return e.id===t.id}))?Object(N.jsx)("button",{type:"button",className:"order__button order__button--add",onClick:function(){return i(t)},children:"Add to cart"}):Object(N.jsx)("button",{type:"button",className:"order__button order__button--added",onClick:function(){return i(t)},children:"Added to carta \u221a"})})}),I=(c(37),function(e){var t=e.product,c=C("favoritesItems",[]),s=Object(r.a)(c,2),n=s[0],a=s[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("button",{type:"button",className:"liked liked--add",onClick:function(){a(t)},children:Object(N.jsx)("img",{src:n.some((function(e){return e.id===t.id}))?"/Images/Heart--002.svg":"/Images/Heart--001.svg",alt:"Hear\u0435",style:{width:"15px",height:"15px"}})})})}),k=function(e){var t=e.product,c=t.phoneId,s=t.image,n=t.name,o=t.fullPrice,l=t.price,j=t.screen,u=t.capacity,d=t.ram,b=Object(a.d)(),m=Object(r.a)(b,2),O=m[0],p=m[1],h=Object(i.useState)(""),x=Object(r.a)(h,2),_=x[0],f=x[1];return Object(N.jsxs)("div",{className:"productCard",children:[Object(N.jsx)("img",{src:"/_new/".concat(s),className:"productCard__img",alt:"Phone"}),Object(N.jsxs)("div",{className:"productCard__info",children:[Object(N.jsx)(a.b,{to:{pathname:t.phoneId===_?"/phones":"/phones/".concat(t.phoneId)},style:{color:"#000",textDecoration:"none"},children:Object(N.jsx)("p",{className:"productCard__name",onClick:function(){return f(e=c),void p(g(O,{productParam:e||null}));var e},children:n})}),Object(N.jsxs)("div",{className:"productCard__prices",children:[Object(N.jsx)("span",{className:"productCard__prices--fullPrice",children:"$".concat(l)}),Object(N.jsx)("span",{className:"productCard__prices--sale",children:"$".concat(o)})]})]}),Object(N.jsxs)("div",{className:"productCard__about",children:[Object(N.jsxs)("ul",{className:"productCard__list",children:[Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Screen"}),Object(N.jsx)("span",{children:j})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Capacity"}),Object(N.jsx)("span",{children:u})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"RAM"}),Object(N.jsx)("span",{children:d})]})]}),Object(N.jsxs)("div",{className:"productCard__buttons",children:[Object(N.jsx)(w,{product:t}),Object(N.jsx)(I,{product:t})]})]})]})};!function(e){e.NEWEST="year",e.ALPHABETICALLY="name",e.CHEAPEST="price"}(v||(v={}));var S=function(e){var t=e.products,c=e.perPage,s=e.total,n=e.sortBy,o=e.page,l=Object(a.d)(),j=Object(r.a)(l,2),u=j[0],b=j[1],m=+c*(+o-1)+1,O=0;O=m+ +c>s?s:+c*+o;var p=Object(d.a)(t),h=function(){return p=p.sort((function(e,t){switch(n){case v.CHEAPEST:return e[n]-t[n];case v.NEWEST:return t[n]-e[n];case v.ALPHABETICALLY:return e[n].localeCompare(t[n]);default:return!0}}))};Object(i.useEffect)((function(){h()}));var x=h(),_=Object(d.a)(x).slice(m-1,O);return Object(N.jsxs)("section",{className:"catalog",children:[Object(N.jsx)("form",{method:"post",className:"catalog__form",children:Object(N.jsxs)("div",{className:"catalog__form-wrapper",children:[Object(N.jsxs)("label",{htmlFor:"perPage",className:"catalog__form-item",children:[Object(N.jsx)("span",{className:"catalog__form-type",children:"items on page"}),Object(N.jsxs)("select",{name:"itemsPerPage",id:"perPage",className:"catalog__form-select",value:c,onChange:function(e){return function(e){var t=e.target.value;b(g(u,{perPage:t}))}(e)},children:[Object(N.jsx)("option",{value:"4",children:"4"}),Object(N.jsx)("option",{value:"8",children:"8"}),Object(N.jsx)("option",{value:"16",children:"16"}),Object(N.jsx)("option",{value:s,children:"All"})]})]}),Object(N.jsxs)("label",{htmlFor:"perPage",className:"catalog__form-item",children:[Object(N.jsx)("span",{className:"catalog__form-type",children:"Sort by"}),Object(N.jsxs)("select",{name:"itemsPerPage",id:"perPage",className:"catalog__form-select",value:n,onChange:function(e){var t=e.target.value;b(g(u,{sortBy:t}))},children:[Object(N.jsx)("option",{value:"year",children:"Newest"}),Object(N.jsx)("option",{value:"name",children:"Alphabetically"}),Object(N.jsx)("option",{value:"price",children:"Cheapest"})]})]})]})}),Object(N.jsx)("div",{className:"catalog__container","data-cy":"productList",children:_.map((function(e){return Object(N.jsx)(k,{product:e},e.id)}))})]})},D=(c(38),function(){return Object(N.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(N.jsx)("div",{className:"Loader__content"})})}),L=(c(39),function(){var e,t=Object(o.l)(),c=t.pathname.split("/").join(" ").slice(0).split(" ").filter((function(e){return""!==e})),s=c[0][0].toUpperCase()+c[0].slice(1);return c.length>=2&&(e=c[1].split("-").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" ")),Object(N.jsx)("section",{className:"location",children:Object(N.jsxs)("div",{className:"location__container",children:[Object(N.jsx)(a.b,{to:"/home",className:"location__link",children:Object(N.jsx)("img",{src:"Images/home.svg",alt:"home",className:"location__img"})}),Object(N.jsx)("img",{src:"Images/arrow-icon--lite.svg",className:"location__img--arrow",alt:"arrow line"}),Object(N.jsx)(a.b,{to:t.pathname,className:"location__link location__link--name",children:s}),e&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("img",{src:"Images/arrow-icon--lite.svg",className:"location__img--arrow",alt:"arrow icon"}),Object(N.jsx)(a.b,{to:"/phones/".concat(c[1]),className:"location__link",children:e})]})]})})}),P=(c(40),c(8)),A=c.n(P),E=function(e){for(var t=e.total,c=e.setPage,s=e.perPage,n=e.page,o=Object(i.useState)(0),l=Object(r.a)(o,2),j=l[0],u=l[1],d=Object(i.useState)(6),b=Object(r.a)(d,2),m=b[0],O=b[1],p=Math.ceil(t/+s),h=[],x=1;x<=p;x+=1)h.push(x);var _,f=function(e){e+5>=t/s?(u(t/s-5),O(t/s+1)):(u(e-1),O(e+5))},g=h.slice(j,m);return Object(N.jsxs)("section",{className:"pagination","data-cy":"pagination",children:[Object(N.jsx)(a.b,{to:{search:(_=n,c(+_-1))},onClick:function(){return function(e){e<=5?(u(0),O(6)):(u(e-6),O(e))}(+n)},className:A()("pagination__button",{"pagination__button--disabled":1===+n}),"data-cy":"paginationLeft",children:Object(N.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:""})}),Object(N.jsx)("ul",{className:"pagination__list",children:g.map((function(e){return Object(N.jsx)(a.b,{to:{search:c(e)},onClick:function(){return f(e)},className:A()("pagination__item",{"pagination__item--active":e===+n}),children:e},e)}))}),Object(N.jsx)(a.b,{to:{search:function(e){return c(+e+1)}(n)},onClick:function(){return f(+n)},className:A()("pagination__button",{"pagination__button--disabled":+n===Math.ceil(t/s)}),"data-cy":"paginationRight",children:Object(N.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"arrow icon",style:{transform:"rotate(180deg)"}})})]})},T=(c(41),function(e){var t=e.title,c=e.productsCount;return Object(N.jsxs)("div",{className:"placeholder",children:[Object(N.jsx)("h1",{children:t}),Object(N.jsxs)("p",{children:[c," ","models"]})]})}),F=(c(42),function(){return Object(N.jsxs)("section",{className:"empty",children:[Object(N.jsx)("img",{src:"../Images/empty--img.png",className:"empty__img",alt:"Empty"}),Object(N.jsx)("p",{className:"empty__message",children:"At the moment this page is empty,\n          you can back when it will be some here"})]})}),M=(c(43),{silver:"#e9ebea",gold:"#eee1c6",midnightgreen:"#47534d",spacegray:"#696863",red:"#e03547",purple:"#e1d9ee",white:"#eae5df",yellow:"#fbe580",black:"#2b2b2b",green:"#b4e9cf"}),U=(c(44),function(e){var t=e.products,c=e.title,s=Object(i.useState)(0),n=Object(r.a)(s,2),a=n[0],o=n[1],l=Object(i.useState)(0),j=Object(r.a)(l,2),u=j[0],d=j[1],b=Object(i.useState)(window.innerWidth),m=Object(r.a)(b,1)[0],O=Object(i.useState)(1),p=Object(r.a)(O,2),h=p[0],x=p[1],_=34*a/h;Object(i.useEffect)((function(){m<420?o(205):m>=420&&m<1200?(x(2),o(410)):(o(820),x(4))}),[m]);return Object(N.jsxs)("section",{className:"carousel",children:[Object(N.jsxs)("div",{className:"carousel__top",children:[Object(N.jsx)("h1",{className:"carousel__title",children:c}),Object(N.jsxs)("div",{className:"carousel__buttons",children:[Object(N.jsx)("button",{type:"button",onClick:function(){d((function(e){return Math.max(e-=a,0)}))},className:A()("carousel__button",{"carousel__button--active":0===u}),children:Object(N.jsx)("img",{src:"/Images/arrow-icon--left.svg",alt:"Arrow icon left"})}),Object(N.jsx)("button",{type:"button",onClick:function(){d((function(e){return Math.min(e+=a,_)}))},className:A()("carousel__button",{"carousel__button--active":u===_}),children:Object(N.jsx)("img",{src:"/Images/arrow-icon--left.svg",alt:"Arrow icon right",style:{transform:"rotate(180deg)"}})})]})]}),Object(N.jsx)("div",{className:"carousel__container","data-cy":"cardsContainer",children:Object(N.jsx)("div",{className:"carousel__items",style:{transform:"translateX(-".concat(u,"px)"),transition:"2s"},children:t.map((function(e){return Object(N.jsx)(k,{product:e},e.id)}))})})]})}),B=function(e){var t=e.product,c=t.name,s=t.images,n=t.colorsAvailable,o=t.color,j=t.namespaceId,d=t.capacityAvailable,b=t.capacity,m=t.priceDiscount,O=t.priceRegular,p=t.screen,h=t.ram,_=t.description,f=t.cell,g=t.zoom,v=t.processor,y=t.resolution,C=t.camera,k=Object(i.useState)(t.images[0]),S=Object(r.a)(k,2),D=S[0],P=S[1],E=Object(i.useState)(o),T=Object(r.a)(E,1)[0],F=Object(i.useState)(b),B=Object(r.a)(F,1)[0],H=Object(i.useState)([]),R=Object(r.a)(H,2),q=R[0],W=R[1],$=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,W(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){$()}),[]);var J={id:t.name,category:"",phoneId:t.namespaceId,itemId:t.namespaceId,name:t.name,fullPrice:t.priceRegular,price:t.priceDiscount,screen:t.screen,capacity:t.capacity,color:t.color,ram:t.ram,year:2019,image:t.images[0]};return Object(N.jsxs)("section",{className:"productDetails",children:[Object(N.jsx)(L,{}),Object(N.jsx)("h1",{className:"productDetails__name",children:c}),Object(N.jsxs)("div",{className:"productDetails__pictures",children:[Object(N.jsxs)("div",{className:"productDetails__shell",children:[Object(N.jsx)("ul",{className:"productDetails__list",children:s.map((function(e){return Object(N.jsx)("li",{className:A()("productDetails__list-item",{"productDetails__list-item--active":e===D}),onClick:function(){return function(e){P(e)}(e)},children:Object(N.jsx)("img",{src:"/_new/".concat(e),alt:"Phones",className:"productDetails__img"})},e)}))}),Object(N.jsx)("img",{src:"/_new/".concat(D),alt:"",className:"productDetails__img--active"})]}),Object(N.jsxs)("div",{className:"productDetails__description","data-cy":"productDescription",children:[Object(N.jsxs)("div",{className:"productDetails__colors",children:[Object(N.jsx)("div",{className:"productDetails__description-title",children:"Avaliable colors"}),Object(N.jsx)("ul",{className:"productDetails__list-colors",children:n.map((function(e){return Object(N.jsx)(a.b,{to:{pathname:"/phones/".concat(j,"-").concat(B,"-").concat(e)},className:A()("productDetails__list--color",{"productDetails__list--color--active":T===o}),children:Object(N.jsx)("div",{style:{backgroundColor:M[e],width:"100%",height:"100%",borderRadius:"50%"}})},e)}))})]}),Object(N.jsxs)("div",{className:"productDetails__capacity",children:[Object(N.jsx)("div",{className:"productDetails__description-title",children:"Select capacity"}),Object(N.jsx)("ul",{className:"productDetails__list-capacity",children:d.map((function(e){return Object(N.jsx)(a.b,{to:{pathname:"/phones/".concat(j,"-").concat(e,"-").concat(o)},className:A()("productDetails__capacity-item",{"productDetails__capacity-item--active":e===B}),children:e},e)}))})]}),Object(N.jsxs)("div",{className:"productDetails__prices",children:[Object(N.jsx)("span",{className:"productDetails__prices--full",children:"$".concat(m)}),Object(N.jsx)("span",{className:"productDetails__prices--sale",children:"$".concat(O)})]}),Object(N.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[Object(N.jsx)(w,{product:J}),Object(N.jsx)(I,{product:J})]}),Object(N.jsx)("div",{className:"productCard__about",children:Object(N.jsxs)("ul",{className:"productCard__list",children:[Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Screen"}),Object(N.jsx)("span",{children:p})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Capacity"}),Object(N.jsx)("span",{children:b})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"RAM"}),Object(N.jsx)("span",{children:h})]})]})})]}),Object(N.jsx)("span",{className:"productDetails__id",children:"ID:802390"})]}),Object(N.jsxs)("div",{className:"productDetails__wrapper",children:[Object(N.jsxs)("div",{className:"productDetails__details",children:[Object(N.jsx)("h1",{className:"productDetails__details-title",children:"About"}),_.map((function(e){return Object(N.jsxs)("div",{className:"productDetails__detail",children:[Object(N.jsx)("h3",{children:e.title}),Object(N.jsx)("p",{children:e.text})]},e.title)}))]}),Object(N.jsxs)("div",{className:"productDetails__details",children:[Object(N.jsx)("h1",{className:"productDetails__details-title",children:"Tech specs"}),Object(N.jsx)("div",{className:"productCard__about productDetails__about",children:Object(N.jsxs)("ul",{className:"productCard__list",children:[Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Screen"}),Object(N.jsx)("span",{children:p})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Capacity"}),Object(N.jsx)("span",{children:b})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"RAM"}),Object(N.jsx)("span",{children:h})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Resolution"}),Object(N.jsx)("span",{children:y})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Processor"}),Object(N.jsx)("span",{children:v})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Camera"}),Object(N.jsx)("span",{children:C})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Zoom"}),Object(N.jsx)("span",{children:g})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{className:"productCard__list-name",children:"Cell"}),Object(N.jsx)("span",{children:f.join(", ")})]})]})})]})]}),Object(N.jsx)(U,{products:q,title:"You may alse like"})]})},H=(c(45),function(e){var t=e.isLoader,c=e.setIsLoader,s=e.category,n=e.title,j=Object(i.useState)(null),d=Object(r.a)(j,2),b=d[0],m=d[1],O=Object(i.useState)([]),x=Object(r.a)(O,2),v=x[0],C=x[1],w=Object(i.useState)(!1),I=Object(r.a)(w,2),k=I[0],P=I[1],A=Object(i.useState)(!1),M=Object(r.a)(A,2),U=M[0],H=M[1],R=Object(i.useState)(""),q=Object(r.a)(R,2),W=q[0],$=q[1],J=Object(a.d)(),G=Object(r.a)(J,1)[0],Y=G.get("page")||"1",X=G.get("perPage")||"".concat(v.length),z=G.get("sortBy")||"year",Z=v.length,K=G.get("query")||"",Q=Object(o.m)("/phones/:productId"),V=(null===Q||void 0===Q?void 0:Q.params.productId)||null,ee=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,h();case 4:t=e.sent,n=_(t,s),a=p(n,K),C(a),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),H(!0),$("Unfortunately, an error occurred,\n        it is not possible to download data from the server.\n        Try again later, we will resolve this issue soon.\n        Thank you ;)");case 14:return e.prev=14,c(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){ee()}),[K]);var te=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,P(!0),null===V){e.next=7;break}return e.next=5,f(V);case 5:t=e.sent,m(t);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),H(!0),$("Unfortunately, an error occurred,\n        it is not possible to download data from the server.\n        Try again later, we will resolve this issue soon.\n        Thank you ;)");case 13:return e.prev=13,P(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){te()}),[V]),Object(N.jsx)("section",{className:"products",children:t||k?Object(N.jsx)(D,{}):Object(N.jsx)(N.Fragment,{children:b?Object(N.jsx)(B,{product:b}):Object(N.jsx)("div",{className:"products__wrapper",children:Object(N.jsx)("div",{className:"container",children:U?Object(N.jsx)(y,{message:W}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(L,{}),Object(N.jsx)(T,{title:n,productsCount:v.length}),v.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(S,{products:v,perPage:X,total:Z,sortBy:z,page:Y}),Object(N.jsx)(E,{total:Z,setPage:function(e){return g(G,{page:e.toString()})},perPage:X,page:Y})]}):Object(N.jsx)(F,{})]})})})})})}),R=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(H,{isLoader:t,setIsLoader:c,category:"phones",title:"Mobile Phones"})})},q=(c(24),function(e){var t=e.to,c=e.text;return Object(N.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return A()("nav__item",{"nav__item--active":t})},children:c})}),W=function(){return Object(N.jsx)("nav",{children:Object(N.jsxs)("ul",{className:"nav__list",children:[Object(N.jsx)("li",{children:Object(N.jsx)(q,{to:"home",text:"Home"})}),Object(N.jsx)("li",{children:Object(N.jsx)(q,{to:"phones",text:"Phones"})}),Object(N.jsx)("li",{children:Object(N.jsx)(q,{to:"tablets",text:"tablets"})}),Object(N.jsx)("li",{children:Object(N.jsx)(q,{to:"accessories",text:"accessories"})})]})})},$=(c(46),function(){var e=C("orderedItems",[]),t=Object(r.a)(e,1)[0],c=C("favoritesItems",[]),s=Object(r.a)(c,1)[0];return Object(N.jsxs)("ul",{className:"favorites",children:[Object(N.jsx)("li",{className:"favorites__card",children:Object(N.jsxs)(a.c,{to:"favorites",className:function(e){var t=e.isActive;return A()("favorites__item",{"favorites__item--active":t})},children:[Object(N.jsx)("img",{src:"Images/Heart--001.svg",className:"favorites__img",alt:"Liked"}),!!s.length&&Object(N.jsx)("p",{className:"favorites__item-count",children:s.length})]})}),Object(N.jsx)("li",{className:"favorites__card",children:Object(N.jsxs)(a.c,{to:"cart",className:function(e){var t=e.isActive;return A()("favorites__item",{"favorites__item--active":t})},children:[Object(N.jsx)("img",{src:"Images/Order--001.svg",className:"favorites__img",alt:"Order"}),!!t.length&&Object(N.jsx)("p",{className:"favorites__item-count",children:t.length})]})})]})}),J=function(){return Object(N.jsx)(a.c,{to:"home",children:Object(N.jsx)("img",{src:"Images/LOGO.svg",alt:"LOGO"})})},G=(c(47),function(){var e=Object(a.d)(),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(""),l=Object(r.a)(n,2),j=l[0],u=l[1],d=Object(i.useState)(""),b=Object(r.a)(d,2),m=b[0],O=b[1],p=function(){var e=Object(o.l)().pathname.split("/").join(" "),t=e.slice(0).split(" ").filter((function(e){return""!==e}));return""!==e.trim()?t[0][0].toUpperCase()+t[0].slice(1):"Home"}(),h=Object(i.useState)(!1),x=Object(r.a)(h,2),_=x[0],f=x[1];Object(i.useEffect)((function(){["Phones","Tablets","Accessories","Favorites","Cart"].includes(p)?f(!0):f(!1)}),[p]);var v=Object(i.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];c=setTimeout.apply(void 0,[e,t].concat(n))}}(O,1e3),[]);Object(i.useEffect)((function(){s(g(c,{query:m||null}))}),[m]);return Object(N.jsx)(N.Fragment,{children:_&&Object(N.jsxs)("div",{className:"query",children:[Object(N.jsx)("input",{type:"text",value:j,className:"query__input",onChange:function(e){return t=e.target.value,u(t),void v(t);var t},placeholder:"Search in ".concat(p,"...")}),Object(N.jsx)("img",{src:"/Images/Search.svg",className:"query__img",alt:"Search"})]})})}),Y=(c(48),function(e){var t=e.setIsMenu,c=e.isMenu;return Object(N.jsx)("header",{className:"header",children:Object(N.jsxs)("div",{className:"header__container",children:[Object(N.jsxs)("div",{className:"header__wrapper",children:[Object(N.jsx)("button",{type:"button",className:"header__menu",onClick:function(){return t(!c)},children:Object(N.jsx)("img",{className:"header__menu--icon",src:c?"Images/cross-icon.png":"Images/menu-icon.png",alt:"menu icon"})}),Object(N.jsx)(J,{}),Object(N.jsx)(W,{})]}),Object(N.jsxs)("div",{style:{display:"flex"},children:[Object(N.jsx)(G,{}),Object(N.jsx)($,{})]})]})})}),X=(c(49),[{id:0,url:"banner-phones.png"},{id:1,url:"banner-accessories.png"},{id:2,url:"banner-tablets.png"},{id:3,url:"category-accessories.png"},{id:4,url:"category-phones.png"},{id:5,url:"category-tablets.png"}]),z=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(X),a=Object(r.a)(n,1)[0],o=Object(i.useState)(0),l=Object(r.a)(o,2),j=l[0],u=l[1],d=Object(i.useState)(window.innerWidth),b=Object(r.a)(d,1)[0],m=-j*(a.length-1);Object(i.useEffect)((function(){u(b<=300?210:b<=640?310:b>=640&&b<1200?560:750)}),[b]);var O=function(){s((function(e){return Math.max(e-=j,-j*(X.length-1))}))};return Object(i.useEffect)((function(){var e=setInterval(O,3e3);return function(){clearInterval(e)}}),[c]),Object(N.jsxs)("section",{className:"slider",children:[Object(N.jsxs)("div",{className:"slider__container",children:[Object(N.jsx)("button",{type:"button",onClick:function(){s((function(e){return Math.min(e+=j,0)}))},className:A()("slider__button",{"slider__button--active":0===c}),children:Object(N.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"Arrow icon left"})}),Object(N.jsx)("div",{className:"slider__wrapper",children:Object(N.jsx)("div",{className:"slider__items",style:{transform:"translateX(".concat(c,"px)"),transition:"1s"},children:a.map((function(e){return Object(N.jsx)("img",{src:"_new/img/".concat(e.url),className:"slider__img",alt:"slider Iamge ".concat(e.id)},e.id)}))})}),Object(N.jsx)("button",{type:"button",onClick:O,className:A()("slider__button",{"slider__button--active":c===m}),children:Object(N.jsx)("img",{src:"Images/arrow-icon--left.svg",style:{transform:"rotate(180deg)"},alt:"Arrow icon right"})})]}),Object(N.jsx)("div",{className:"slider__dots",children:a.map((function(e){var t=-e.id*j;return Object(N.jsx)("button",{type:"button",className:A()("slider__dot",{"slider__dot--active":t===c})},e.id)}))})]})},Z=(c(50),c(51),[{name:"Mobile Phones",imgUrl:"_new/img/category-phones.png",bgcColor:"#FCDBC1",linkTo:"/phones"},{name:"Tablets",imgUrl:"_new/img/category-tablets.png",bgcColor:"#ddd",linkTo:"/tablets"},{name:"Accessories",imgUrl:"Images/airpods-max-select-green-202011.png",bgcColor:"#DFEED8",linkTo:"/accessories"}]),K=(c(52),function(e){var t=e.name,c=e.imgUrl,s=e.color,n=e.to,r=e.products;return Object(N.jsx)(a.b,{to:n,style:{textDecoration:"none",margin:"0 auto"},children:Object(N.jsxs)("div",{className:"category",children:[Object(N.jsx)("div",{className:"category__shell",style:{backgroundColor:s},children:Object(N.jsx)("img",{src:"".concat(c),alt:"phones",className:"category__img"})}),Object(N.jsx)("h4",{className:"category__title",children:t}),Object(N.jsx)("span",{className:"category__models",children:"".concat(r.length," models")})]})})}),Q=function(e){var t=e.phones,c=e.tablets,s=e.accessories;return Object(N.jsxs)("section",{className:"shopByCategory",children:[Object(N.jsx)("h1",{className:"shopByCategory__title",children:"Shop by Category"}),Object(N.jsx)("div",{className:"shopByCategory__container",children:Z.map((function(e){var n=e.name,a=e.imgUrl,r=e.bgcColor,i=e.linkTo,o=[];return"/phones"===i&&(o=t),"/tablets"===i&&(o=c),"/accessories"===i&&(o=s),Object(N.jsx)(K,{name:n,imgUrl:a,color:r,to:i,products:o},i)}))})]})},V=function(e){var t=e.setIsLoader,c=e.isLoader,s=Object(i.useState)([]),n=Object(r.a)(s,2),a=n[0],o=n[1],j=Object(i.useState)([]),d=Object(r.a)(j,2),b=d[0],m=d[1],O=Object(i.useState)([]),p=Object(r.a)(O,2),x=p[0],f=p[1],g=Object(i.useState)(0),v=Object(r.a)(g,2),y=v[0],C=v[1];Object(i.useEffect)((function(){window.innerWidth>400?C(0):C(1)}),[window.innerWidth]);var w=a.sort((function(e,t){return e.fullPrice-e.price-(t.fullPrice-t.price)})).slice(y),I=a.sort((function(e,t){return t.year-e.year})).slice(y),k=function(){var e=Object(l.a)(u.a.mark((function e(){var c,s,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0),e.next=4,h();case 4:c=e.sent,s=_(c,"phones"),n=_(c,"tablets"),a=_(c,"accessories"),o(s),m(n),f(a);case 11:return e.prev=11,t(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){k()}),[]),Object(N.jsx)("section",{className:"home",children:c?Object(N.jsx)(D,{}):Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(z,{}),Object(N.jsx)(U,{products:w,title:"Hot Prices"}),Object(N.jsx)(Q,{phones:a,tablets:b,accessories:x}),Object(N.jsx)(U,{products:I,title:"Brand new models"})]})})},ee=(c(53),function(){return Object(N.jsxs)("section",{className:"notFound",children:[Object(N.jsx)("img",{src:"Images/404-page-not-found.png",alt:"",className:"notFound__img"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{className:"notFound__error",children:"404"}),Object(N.jsx)("p",{className:"notFound__message",children:"Unfortunately, this page address was not found. Page does not exist"})]})]})}),te=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(H,{isLoader:t,setIsLoader:c,category:"tablets",title:"Tablets"})})},ce=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(H,{isLoader:t,setIsLoader:c,category:"accessories",title:"Accessories"})})},se=(c(54),function(){var e=C("favoritesItems",[]),t=Object(r.a)(e,1)[0],c=Object(a.d)(),s=Object(r.a)(c,1)[0].get("query")||"",n=p(t,s);return Object(N.jsx)("div",{className:"favorite",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("div",{className:"favorite__container",children:[Object(N.jsx)(L,{}),Object(N.jsx)("h1",{children:"Favorites"}),Object(N.jsx)("p",{children:"".concat(n.length," items")})]}),Object(N.jsx)("div",{className:"favorite__wrapper",children:n.length?Object(N.jsx)(N.Fragment,{children:n.map((function(e){return Object(N.jsx)(k,{product:e})}))}):Object(N.jsx)(F,{})})]})})}),ne=(c(55),function(e){var t=e.product,c=e.onDelete,s=e.setSum,n=Object(i.useState)(1),a=Object(r.a)(n,2),o=a[0],l=a[1];return Object(N.jsxs)("div",{className:"productCart",children:[Object(N.jsx)("button",{type:"button",className:"productCart__button--cross",onClick:function(){return c(t,o)},children:"x"}),Object(N.jsx)("img",{src:"_new/".concat(t.image),alt:"Product",className:"productCart__img"}),Object(N.jsx)("span",{className:"productCart__name",children:t.name}),Object(N.jsxs)("div",{className:"productCart__counter",children:[Object(N.jsx)("button",{type:"button",onClick:function(){return e=t.price,s((function(t){return t+e})),void l((function(e){return e+1}));var e},className:"productCart__button",children:"+"}),Object(N.jsx)("p",{children:o}),Object(N.jsx)("button",{type:"button",onClick:function(){return e=t,n=o,o>0&&(s((function(t){return t-e.price})),l((function(e){return e-1}))),void(0===o&&c(t,n));var e,n},className:"productCart__button",children:"-"})]}),Object(N.jsx)("span",{className:"productCart__price",children:"$".concat(t.price)})]})}),ae=(c(56),function(){var e=0,t=C("orderedItems",[]),c=Object(r.a)(t,2),s=c[0],n=c[1],o=Object(a.d)(),l=Object(r.a)(o,1)[0],j=Object(i.useState)(e),u=Object(r.a)(j,2),d=u[0],b=u[1],m=l.get("query")||"",O=p(s,m),h=function(e,t){b((function(c){return c-e.price*t})),n(e)};return Object(i.useEffect)((function(){O.forEach((function(t){return e+=t.price})),b(e)}),[m,s]),Object(N.jsx)("section",{className:"cart",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(L,{}),Object(N.jsx)("div",{className:"cart__container",children:s.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("ul",{className:"cart__list",children:O.map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(ne,{product:e,onDelete:h,setSum:b})},e.id)}))}),Object(N.jsxs)("div",{className:"cart__total",children:[Object(N.jsxs)("div",{className:"cart__total-wrapper",children:[Object(N.jsxs)("h1",{className:"cart__total-price",children:["$",d]}),Object(N.jsx)("p",{children:"Total for ".concat(O.length," items")})]}),Object(N.jsx)("button",{type:"button",className:"cart__button",children:"Checkout"})]})]}):Object(N.jsx)(F,{})})]})})}),re=(c(57),function(e){var t=e.setIsMenu,c=e.isMenu;return Object(N.jsx)("section",{className:A()("menu",{"menu--smooth":c}),style:{transition:"300ms"},children:Object(N.jsx)("div",{className:"menu__container",children:Object(N.jsx)("nav",{children:Object(N.jsxs)("ul",{className:"nav__list",style:{display:"flex",flexDirection:"column",width:"40%",height:"100vh",backgroundColor:"#fff",paddingTop:"50px"},children:[Object(N.jsx)("li",{onClick:function(){return t(!1)},children:Object(N.jsx)(q,{to:"home",text:"Home"})}),Object(N.jsx)("li",{onClick:function(){return t(!1)},children:Object(N.jsx)(q,{to:"phones",text:"Phones"})}),Object(N.jsx)("li",{onClick:function(){return t(!1)},children:Object(N.jsx)(q,{to:"tablets",text:"tablets"})}),Object(N.jsx)("li",{onClick:function(){return t(!1)},children:Object(N.jsx)(q,{to:"accessories",text:"accessories"})})]})})})})}),ie=(c(58),function(){return Object(N.jsx)("div",{className:"footer",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"footer__container",children:[Object(N.jsx)(J,{}),Object(N.jsxs)("ul",{className:"footer__list",children:[Object(N.jsx)("li",{children:Object(N.jsx)(a.b,{to:"https://github.com/partnersinbahamas",className:"footer__link",target:"_blank",children:"github"})}),Object(N.jsx)("li",{children:Object(N.jsx)(a.b,{to:"/contacts",className:"footer__link",children:"contacts"})}),Object(N.jsx)("li",{children:Object(N.jsx)(a.b,{to:"/",className:"footer__link",target:"_blank",children:"rights"})})]}),Object(N.jsxs)("div",{className:"footer__backTo",children:[Object(N.jsx)("p",{children:"Back to top"}),Object(N.jsx)("button",{type:"button",className:"footer__button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(N.jsx)("img",{src:"Images/arrow-icon--left.svg",className:"footer__button--icon",alt:"Arrow line"})})]})]})})})}),oe=function(){return Object(N.jsx)("h1",{children:"Contact"})},le=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!1),l=Object(r.a)(n,2),j=l[0],u=l[1],d=Object(a.d)(),b=Object(r.a)(d,1)[0];return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(Y,{setIsMenu:s,isMenu:c}),c&&Object(N.jsx)(re,{setIsMenu:s,isMenu:c}),Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{path:"/home",element:Object(N.jsx)(V,{setIsLoader:u,isLoader:j,searchParams:b})}),Object(N.jsx)(o.b,{path:"/",element:Object(N.jsx)(o.a,{to:"/home"})}),Object(N.jsxs)(o.b,{path:"phones",children:[Object(N.jsx)(o.b,{index:!0,element:Object(N.jsx)(R,{isLoader:j,setIsLoader:u})}),Object(N.jsx)(o.b,{path:":productId",element:Object(N.jsx)(R,{isLoader:j,setIsLoader:u})})]}),Object(N.jsx)(o.b,{path:"tablets",element:Object(N.jsx)(te,{isLoader:j,setIsLoader:u})}),Object(N.jsx)(o.b,{path:"accessories",element:Object(N.jsx)(ce,{isLoader:j,setIsLoader:u})}),Object(N.jsx)(o.b,{path:"favorites",element:Object(N.jsx)(se,{})}),Object(N.jsx)(o.b,{path:"cart",element:Object(N.jsx)(ae,{})}),Object(N.jsx)(o.b,{path:"contacts",element:Object(N.jsx)(oe,{})}),Object(N.jsx)(o.b,{path:"*",element:Object(N.jsx)(ee,{})})]}),Object(N.jsx)(ie,{})]})};n.a.render(Object(N.jsx)(a.a,{children:Object(N.jsx)(le,{})}),document.getElementById("root"))}]),[[59,1,2]]]);
//# sourceMappingURL=main.2ef45400.chunk.js.map