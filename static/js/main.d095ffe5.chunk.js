(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(25).concat([function(e,t,c){},,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(26),n=c.n(s),a=c(6),r=c(2),i=(c(31),c(1)),o=c(4),l=c(8),j=c(5),u=c.n(j),d=c(7);function b(e){return new Promise((function(t){setTimeout(t,e)}))}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),b(300).then((function(){return fetch("".concat(e),s)})).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var O=function(e){return m(e)},p=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},h=function(){return O("./new/products.json")},x=function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,c=Object(d.a)(t.sort((function(){return Math.random()-.5}))),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e,t){return e.filter((function(e){return e.category===t}))},f=function(e){return O("./new/products/".concat(e,".json"))};function g(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(r.a)(e,2),s=t[0],n=t[1];null===n?c.delete(s):Array.isArray(n)?(c.delete(s),n.forEach((function(e){c.append(s,e)}))):c.set(s,n)})),c.toString()}c(33);var v=c(0),N=function(e){var t=e.message,c=void 0===t?"error":t;return Object(v.jsxs)("section",{className:"error",children:[Object(v.jsx)("img",{src:"Images/warning-error.svg",alt:"Error/Waring",className:"error__img"}),Object(v.jsx)("p",{className:"error__message",children:c})]})},y=(c(35),c(36),c(23));function w(e,t){var c=Object(i.useCallback)((function(){if("undefined"===typeof window)return t;try{var c=window.localStorage.getItem(e);return c?function(e){try{return"undefined"===e?void 0:JSON.parse(null!==e&&void 0!==e?e:"")}catch(t){throw Error("parsing error on ".concat(e))}}(c):t}catch(s){throw Error("Error reading localStorage key \u201c".concat(e,"\u201d: ").concat(s))}}),[t,e]),s=Object(i.useState)(c),n=Object(r.a)(s,2),a=n[0],o=n[1],l=Object(y.c)((function(t){if("undefined"===typeof window)throw Error("Tried setting localStorage key \u201c".concat(e,"\u201d even though environment is not a client"));try{var c=t instanceof Function?t(a):t;window.localStorage.setItem(e,JSON.stringify(c)),o(c),window.dispatchEvent(new Event("local-storage"))}catch(s){throw Error("Error setting localStorage key \u201c".concat(e,"\u201d: ").concat(s))}}));Object(i.useEffect)((function(){o(c())}),[]);var j=Object(i.useCallback)((function(t){null!==t&&void 0!==t&&t.key&&t.key!==e||o(c())}),[e,c]);return Object(y.d)("storage",j),Object(y.d)("local-storage",j),[a,l]}c(37);var C,k=function(e){var t=e.product,c=w("orderedItems",[]),s=Object(r.a)(c,2),n=s[0],a=s[1],i=function(e){n.some((function(t){return t.id===e.id}))?a(Object(d.a)(n.filter((function(t){return t.id!==e.id})))):a([].concat(Object(d.a)(n),[e]))};return Object(v.jsx)(v.Fragment,{children:n&&!n.some((function(e){return e.id===t.id}))?Object(v.jsx)("button",{type:"button",className:"order__button order__button--add",onClick:function(){return i(t)},children:"Add to cart"}):Object(v.jsx)("button",{type:"button",className:"order__button order__button--added",onClick:function(){return i(t)},children:"Added to cart"})})},I=(c(38),function(e){var t=e.product,c=w("favoritesItems",[]),s=Object(r.a)(c,2),n=s[0],a=s[1];return Object(v.jsx)("button",{type:"button",className:"liked liked--add",onClick:function(){return e=t,void(n.some((function(t){return t.id===e.id}))?a(Object(d.a)(n.filter((function(t){return t.id!==e.id})))):a([].concat(Object(d.a)(n),[e])));var e},children:Object(v.jsx)("img",{src:n.some((function(e){return e.id===t.id}))?"Images/Heart--002.svg":"Images/Heart--001.svg",alt:"Hear\u0435",style:{width:"11px",height:"11px"}})})}),S=function(e){var t=e.product,c=t.phoneId,s=t.image,n=t.name,o=t.fullPrice,l=t.price,j=t.screen,u=t.capacity,d=t.ram,b=Object(a.d)(),m=Object(r.a)(b,2),O=m[0],p=m[1],h=Object(i.useState)(""),x=Object(r.a)(h,2),_=x[0],f=x[1];return Object(v.jsx)(a.b,{to:{pathname:t.phoneId===_?"/phones":"/phones/".concat(t.phoneId)},style:{textDecoration:"none"},onClick:function(){return f(e=c),void p(g(O,{productParam:e||null}));var e},children:Object(v.jsxs)("div",{className:"productCard",children:[Object(v.jsx)("img",{src:"new/".concat(s),className:"productCard__img",alt:"Phone"}),Object(v.jsxs)("div",{className:"productCard__info",children:[Object(v.jsx)("p",{className:"productCard__name",style:{color:"#000"},children:n}),Object(v.jsxs)("div",{className:"productCard__prices",children:[Object(v.jsx)("span",{className:"productCard__prices--fullPrice",children:"$".concat(l)}),Object(v.jsx)("span",{className:"productCard__prices--sale",children:"$".concat(o)})]})]}),Object(v.jsxs)("div",{className:"productCard__about",children:[Object(v.jsxs)("ul",{className:"productCard__list",children:[Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Screen"}),Object(v.jsx)("span",{children:j})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Capacity"}),Object(v.jsx)("span",{children:u})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"RAM"}),Object(v.jsx)("span",{children:d})]})]}),Object(v.jsxs)("div",{className:"productCard__buttons",children:[Object(v.jsx)(k,{product:t}),Object(v.jsx)(I,{product:t})]})]})]})})};!function(e){e.NEWEST="year",e.ALPHABETICALLY="name",e.CHEAPEST="price"}(C||(C={}));var D=function(e){var t=e.products,c=e.perPage,s=e.total,n=e.sortBy,o=e.page,l=Object(a.d)(),j=Object(r.a)(l,2),u=j[0],b=j[1],m=+c*(+o-1)+1,O=0;O=m+ +c>s?s:+c*+o;var p=Object(d.a)(t),h=function(){return p=p.sort((function(e,t){switch(n){case C.CHEAPEST:return e[n]-t[n];case C.NEWEST:return t[n]-e[n];case C.ALPHABETICALLY:return e[n].localeCompare(t[n]);default:return!0}}))};Object(i.useEffect)((function(){h()}));var x=h(),_=Object(d.a)(x).slice(m-1,O);return Object(v.jsxs)("section",{className:"catalog",children:[Object(v.jsx)("form",{method:"post",className:"catalog__form",children:Object(v.jsxs)("div",{className:"catalog__form-wrapper",children:[Object(v.jsxs)("label",{htmlFor:"perPage",className:"catalog__form-item",children:[Object(v.jsx)("span",{className:"catalog__form-type",children:"items on page"}),Object(v.jsxs)("select",{name:"itemsPerPage",id:"perPage",className:"catalog__form-select",value:c,onChange:function(e){return function(e){var t=e.target.value;b(g(u,{perPage:t}))}(e)},children:[Object(v.jsx)("option",{value:"4",children:"4"}),Object(v.jsx)("option",{value:"8",children:"8"}),Object(v.jsx)("option",{value:"16",children:"16"}),Object(v.jsx)("option",{value:s,children:"All"})]})]}),Object(v.jsxs)("label",{htmlFor:"perPage",className:"catalog__form-item",children:[Object(v.jsx)("span",{className:"catalog__form-type",children:"Sort by"}),Object(v.jsxs)("select",{name:"itemsPerPage",id:"perPage",className:"catalog__form-select",value:n,onChange:function(e){var t=e.target.value;b(g(u,{sortBy:t}))},children:[Object(v.jsx)("option",{value:"year",children:"Newest"}),Object(v.jsx)("option",{value:"name",children:"Alphabetically"}),Object(v.jsx)("option",{value:"price",children:"Cheapest"})]})]})]})}),Object(v.jsx)("div",{className:"catalog__container","data-cy":"productList",children:_.map((function(e){return Object(v.jsx)(S,{product:e},e.id)}))})]})},L=(c(39),function(){return Object(v.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(v.jsx)("div",{className:"Loader__content"})})}),E=(c(40),function(){var e,t=Object(o.l)(),c=t.pathname.split("/").join(" ").slice(0).split(" ").filter((function(e){return""!==e})),s=c[0][0].toUpperCase()+c[0].slice(1);return c.length>=2&&(e=c[1].split("-").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" ")),Object(v.jsx)("section",{className:"location",children:Object(v.jsxs)("div",{className:"location__container",children:[Object(v.jsx)(a.b,{to:"/home",className:"location__link",children:Object(v.jsx)("img",{src:"Images/home.svg",alt:"home",className:"location__img"})}),Object(v.jsx)("img",{src:"Images/arrow-icon--lite.svg",className:"location__img--arrow",alt:"arrow line"}),Object(v.jsx)(a.b,{to:t.pathname,className:"location__link location__link--name",children:s}),e&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("img",{src:"Images/arrow-icon--lite.svg",className:"location__img--arrow",alt:"arrow icon"}),Object(v.jsx)(a.b,{to:"/phones/".concat(c[1]),className:"location__link",children:e})]})]})})}),P=(c(41),c(9)),A=c.n(P),T=function(e){for(var t=e.total,c=e.setPage,s=e.perPage,n=e.page,o=Object(i.useState)(0),l=Object(r.a)(o,2),j=l[0],u=l[1],d=Object(i.useState)(6),b=Object(r.a)(d,2),m=b[0],O=b[1],p=Math.ceil(t/+s),h=[],x=1;x<=p;x+=1)h.push(x);var _,f=function(e){e+5>=t/s?(u(t/s-5),O(t/s+1)):(u(e-1),O(e+5))},g=h.slice(j,m);return Object(v.jsxs)("section",{className:"pagination","data-cy":"pagination",children:[Object(v.jsx)(a.b,{to:{search:(_=n,c(+_-1))},onClick:function(){return function(e){e<=5?(u(0),O(6)):(u(e-6),O(e))}(+n)},className:A()("pagination__button",{"pagination__button--disabled":1===+n}),"data-cy":"paginationLeft",children:Object(v.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:""})}),Object(v.jsx)("ul",{className:"pagination__list",children:g.map((function(e){return Object(v.jsx)(a.b,{to:{search:c(e)},onClick:function(){return f(e)},className:A()("pagination__item",{"pagination__item--active":e===+n}),children:e},e)}))}),Object(v.jsx)(a.b,{to:{search:function(e){return c(+e+1)}(n)},onClick:function(){return f(+n)},className:A()("pagination__button",{"pagination__button--disabled":+n===Math.ceil(t/s)}),"data-cy":"paginationRight",children:Object(v.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"arrow icon",style:{transform:"rotate(180deg)"}})})]})},F=(c(42),function(e){var t=e.title,c=e.productsCount;return Object(v.jsxs)("div",{className:"placeholder",children:[Object(v.jsx)("h1",{children:t}),Object(v.jsx)("p",{children:"".concat(c," models")})]})}),M=(c(43),function(){return Object(v.jsxs)("section",{className:"empty",children:[Object(v.jsx)("img",{src:"Images/empty--img.png",className:"empty__img",alt:"Empty"}),Object(v.jsx)("p",{className:"empty__message",children:"At the moment this page is empty,\n          you can back when it will be some here"})]})}),U=(c(44),{silver:"#e9ebea",gold:"#eee1c6",midnightgreen:"#47534d",spacegray:"#696863",red:"#e03547",purple:"#e1d9ee",white:"#eae5df",yellow:"#fbe580",black:"#2b2b2b",green:"#b4e9cf"}),B=[{id:1,url:"https://www.instagram.com/partnersinbahamas/",img:"Images/instagram.png"},{id:2,url:"https://github.com/partnersinbahamas",img:"Images/gh.svg"},{id:2,url:"mailto:denisbokov1703@gmail.com",img:"Images/email.png"}],H=[{id:0,url:"banner-phones.png"},{id:1,url:"banner-accessories.png"},{id:2,url:"banner-tablets.png"},{id:3,url:"category-accessories.png"},{id:4,url:"category-phones.png"},{id:5,url:"category-tablets.png"}],q=[{name:"Mobile Phones",imgUrl:"new/img/category-phones.png",bgcColor:"#FCDBC1",linkTo:"/phones"},{name:"Tablets",imgUrl:"new/img/category-tablets.png",bgcColor:"#ddd",linkTo:"/tablets"},{name:"Accessories",imgUrl:"Images/airpods-max-select-green-202011.png",bgcColor:"#DFEED8",linkTo:"/accessories"}],R=(c(45),function(e){var t=e.products,c=e.title,s=Object(i.useState)(0),n=Object(r.a)(s,2),a=n[0],o=n[1],l=Object(i.useState)(0),j=Object(r.a)(l,2),u=j[0],d=j[1],b=Object(i.useState)(window.innerWidth),m=Object(r.a)(b,1)[0],O=Object(i.useState)(1),p=Object(r.a)(O,2),h=p[0],x=p[1],_=Object(i.useState)(0),f=Object(r.a)(_,2),g=f[0],N=f[1];Object(i.useEffect)((function(){window.innerWidth>420?N(0):N(1)}),[window.innerWidth]);var y=34*a/h;Object(i.useEffect)((function(){m<420?o(205):m>=420&&m<1200?(x(2),o(410)):(o(820),x(4))}),[m]);return Object(v.jsxs)("section",{className:"carousel",children:[Object(v.jsxs)("div",{className:"carousel__top",children:[Object(v.jsx)("h1",{className:"carousel__title",children:c}),Object(v.jsxs)("div",{className:"carousel__buttons",children:[Object(v.jsx)("button",{type:"button",onClick:function(){d((function(e){return Math.max(e-=a,0)}))},className:A()("carousel__button",{"carousel__button--active":0===u}),children:Object(v.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"Arrow icon left"})}),Object(v.jsx)("button",{type:"button",onClick:function(){d((function(e){return Math.min(e+=a,y)}))},className:A()("carousel__button",{"carousel__button--active":u===y}),children:Object(v.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"Arrow icon right",style:{transform:"rotate(180deg)"}})})]})]}),Object(v.jsx)("div",{className:"carousel__container","data-cy":"cardsContainer",children:t.length?Object(v.jsx)("div",{className:"carousel__items",style:{transform:"translateX(-".concat(u,"px)"),transition:"2s"},children:t.slice(g).map((function(e){return Object(v.jsx)(S,{product:e},e.id)}))}):Object(v.jsx)("div",{className:"carousel__failed",children:"Failed data"})})]})}),W=function(e){var t=e.product,c=t.name,s=t.images,n=t.colorsAvailable,o=t.color,j=t.namespaceId,d=t.capacityAvailable,b=t.capacity,m=t.priceDiscount,O=t.priceRegular,p=t.screen,h=t.ram,_=t.description,f=t.cell,g=t.zoom,N=t.processor,y=t.resolution,w=t.camera,C=Object(i.useState)(t.images[0]),S=Object(r.a)(C,2),D=S[0],L=S[1],P=Object(i.useState)(o),T=Object(r.a)(P,1)[0],F=Object(i.useState)(b),M=Object(r.a)(F,1)[0],B=Object(i.useState)([]),H=Object(r.a)(B,2),q=H[0],W=H[1],$=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,W(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){$()}),[]);var J={id:t.name,category:"",phoneId:t.namespaceId,itemId:t.namespaceId,name:t.name,fullPrice:t.priceRegular,price:t.priceDiscount,screen:t.screen,capacity:t.capacity,color:t.color,ram:t.ram,year:2019,image:t.images[0]};return Object(v.jsxs)("section",{className:"productDetails",children:[Object(v.jsx)(E,{}),Object(v.jsx)("h1",{className:"productDetails__name",children:c}),Object(v.jsxs)("div",{className:"productDetails__pictures",children:[Object(v.jsxs)("div",{className:"productDetails__shell",children:[Object(v.jsx)("ul",{className:"productDetails__list",children:s.map((function(e){return Object(v.jsx)("li",{className:A()("productDetails__list-item",{"productDetails__list-item--active":e===D}),onClick:function(){return function(e){L(e)}(e)},children:Object(v.jsx)("img",{src:"./new/".concat(e),alt:"Phones",className:"productDetails__img"})},e)}))}),Object(v.jsx)("img",{src:"./new/".concat(D),alt:"product",className:"productDetails__img--active"})]}),Object(v.jsxs)("div",{className:"productDetails__description","data-cy":"productDescription",children:[Object(v.jsxs)("div",{className:"productDetails__colors",children:[Object(v.jsx)("div",{className:"productDetails__description-title",children:"Avaliable colors"}),Object(v.jsx)("ul",{className:"productDetails__list-colors",children:n.map((function(e){return Object(v.jsx)(a.b,{to:{pathname:"/phones/".concat(j,"-").concat(M.toLowerCase(),"-").concat(e)},className:A()("productDetails__list--color",{"productDetails__list--color--active":T===o}),children:Object(v.jsx)("div",{style:{backgroundColor:U[e],width:"100%",height:"100%",borderRadius:"50%"}})},e)}))})]}),Object(v.jsxs)("div",{className:"productDetails__capacity",children:[Object(v.jsx)("div",{className:"productDetails__description-title",children:"Select capacity"}),Object(v.jsx)("ul",{className:"productDetails__list-capacity",children:d.map((function(e){return Object(v.jsx)(a.b,{to:{pathname:"../".concat(j,"-").concat(e.toLowerCase(),"-").concat(o)},className:A()("productDetails__capacity-item",{"productDetails__capacity-item--active":e===M}),children:e},e)}))})]}),Object(v.jsxs)("div",{className:"productDetails__prices",children:[Object(v.jsx)("span",{className:"productDetails__prices--full",children:"$".concat(m)}),Object(v.jsx)("span",{className:"productDetails__prices--sale",children:"$".concat(O)})]}),Object(v.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[Object(v.jsx)(k,{product:J}),Object(v.jsx)(I,{product:J})]}),Object(v.jsx)("div",{className:"productCard__about",children:Object(v.jsxs)("ul",{className:"productCard__list",children:[Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Screen"}),Object(v.jsx)("span",{children:p})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Capacity"}),Object(v.jsx)("span",{children:b})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"RAM"}),Object(v.jsx)("span",{children:h})]})]})})]}),Object(v.jsx)("span",{className:"productDetails__id",children:"ID:802390"})]}),Object(v.jsxs)("div",{className:"productDetails__wrapper",children:[Object(v.jsxs)("div",{className:"productDetails__details",children:[Object(v.jsx)("h1",{className:"productDetails__details-title",children:"About"}),_.map((function(e){return Object(v.jsxs)("div",{className:"productDetails__detail",children:[Object(v.jsx)("h3",{children:e.title}),Object(v.jsx)("p",{children:e.text})]},e.title)}))]}),Object(v.jsxs)("div",{className:"productDetails__details",children:[Object(v.jsx)("h1",{className:"productDetails__details-title",children:"Tech specs"}),Object(v.jsx)("div",{className:"productCard__about productDetails__about",children:Object(v.jsxs)("ul",{className:"productCard__list",children:[Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Screen"}),Object(v.jsx)("span",{children:p})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Capacity"}),Object(v.jsx)("span",{children:b})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"RAM"}),Object(v.jsx)("span",{children:h})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Resolution"}),Object(v.jsx)("span",{children:y})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Processor"}),Object(v.jsx)("span",{children:N})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Camera"}),Object(v.jsx)("span",{children:w})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Zoom"}),Object(v.jsx)("span",{children:g})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{className:"productCard__list-name",children:"Cell"}),Object(v.jsx)("span",{children:f.join(", ")})]})]})})]})]}),Object(v.jsx)(R,{products:q,title:"You may alse like"})]})},$=(c(46),function(e){var t=e.isLoader,c=e.setIsLoader,s=e.category,n=e.title,j=Object(i.useState)(null),d=Object(r.a)(j,2),b=d[0],m=d[1],O=Object(i.useState)([]),x=Object(r.a)(O,2),y=x[0],w=x[1],C=Object(i.useState)(!1),k=Object(r.a)(C,2),I=k[0],S=k[1],P=Object(i.useState)(!1),A=Object(r.a)(P,2),U=A[0],B=A[1],H=Object(i.useState)(""),q=Object(r.a)(H,2),R=q[0],$=q[1],J=Object(a.d)(),G=Object(r.a)(J,1)[0],Y=G.get("page")||"1",X=G.get("perPage")||"".concat(y.length),z=G.get("sortBy")||"year",Z=y.length,K=G.get("query")||"",Q=Object(o.m)("phones/:productId"),V=(null===Q||void 0===Q?void 0:Q.params.productId)||null,ee=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,h();case 4:t=e.sent,n=_(t,s),a=p(n,K),w(a),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),B(!0),$("Unfortunately, an error occurred,\n        it is not possible to download data from the server.\n        Try again later, we will resolve this issue soon.\n        Thank you ;)");case 14:return e.prev=14,c(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){ee()}),[K]);var te=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,S(!0),null===V){e.next=7;break}return e.next=5,f(V);case 5:t=e.sent,m(t);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),B(!0),$("Unfortunately, an error occurred,\n        it is not possible to download data from the server.\n        Try again later, we will resolve this issue soon.\n        Thank you ;)");case 13:return e.prev=13,S(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){te()}),[V]),Object(v.jsx)("section",{className:"products",children:t||I?Object(v.jsx)(L,{}):Object(v.jsx)(v.Fragment,{children:b?Object(v.jsx)(W,{product:b}):Object(v.jsx)("div",{className:"products__wrapper",children:Object(v.jsx)("div",{className:"container",children:U?Object(v.jsx)(N,{message:R}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(E,{}),Object(v.jsx)(F,{title:n,productsCount:y.length}),y.length?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(D,{products:y,perPage:X,total:Z,sortBy:z,page:Y}),Object(v.jsx)(T,{total:Z,setPage:function(e){return g(G,{page:e.toString()})},perPage:+X,page:Y})]}):Object(v.jsx)(M,{})]})})})})})}),J=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)($,{isLoader:t,setIsLoader:c,category:"phones",title:"Mobile Phones"})})},G=(c(25),function(e){var t=e.to,c=e.text;return Object(v.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return A()("nav__item",{"nav__item--active":t})},children:c})}),Y=function(){return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"nav__list",children:[Object(v.jsx)("li",{children:Object(v.jsx)(G,{to:"home",text:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(G,{to:"phones",text:"Phones"})}),Object(v.jsx)("li",{children:Object(v.jsx)(G,{to:"tablets",text:"tablets"})}),Object(v.jsx)("li",{children:Object(v.jsx)(G,{to:"accessories",text:"accessories"})})]})})},X=(c(47),function(){var e=w("orderedItems",[]),t=Object(r.a)(e,1)[0],c=w("favoritesItems",[]),s=Object(r.a)(c,1)[0];return Object(v.jsxs)("ul",{className:"favorites",children:[Object(v.jsx)("li",{className:"favorites__card",children:Object(v.jsxs)(a.c,{to:"favorites",className:function(e){var t=e.isActive;return A()("favorites__item",{"favorites__item--active":t})},children:[Object(v.jsx)("img",{src:"Images/Heart--001.svg",className:"favorites__img",alt:"Liked"}),!!s.length&&Object(v.jsx)("p",{className:"favorites__item-count",children:s.length})]})}),Object(v.jsx)("li",{className:"favorites__card",children:Object(v.jsxs)(a.c,{to:"cart",className:function(e){var t=e.isActive;return A()("favorites__item",{"favorites__item--active":t})},children:[Object(v.jsx)("img",{src:"Images/Order--001.svg",className:"favorites__img",alt:"Order"}),!!t.length&&Object(v.jsx)("p",{className:"favorites__item-count",children:t.length})]})})]})}),z=function(){return Object(v.jsx)(a.c,{to:"home",children:Object(v.jsx)("img",{src:"Images/LOGO.svg",alt:"LOGO"})})},Z=(c(48),function(){var e=Object(a.d)(),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(""),l=Object(r.a)(n,2),j=l[0],u=l[1],d=Object(i.useState)(""),b=Object(r.a)(d,2),m=b[0],O=b[1],p=function(){var e=Object(o.l)().pathname.split("/").join(" "),t=e.slice(0).split(" ").filter((function(e){return""!==e}));return""!==e.trim()?t[0][0].toUpperCase()+t[0].slice(1):"Home"}(),h=Object(i.useState)(!1),x=Object(r.a)(h,2),_=x[0],f=x[1];Object(i.useEffect)((function(){["Phones","Tablets","Accessories","Favorites","Cart"].includes(p)?f(!0):f(!1)}),[p]);var N=Object(i.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];c=setTimeout.apply(void 0,[e,t].concat(n))}}(O,1e3),[]);Object(i.useEffect)((function(){s(g(c,{query:m||null}))}),[m]);return Object(v.jsx)(v.Fragment,{children:_&&Object(v.jsxs)("div",{className:"query",children:[Object(v.jsx)("input",{type:"text",value:j,className:"query__input",onChange:function(e){return t=e.target.value,u(t),void N(t);var t},placeholder:"Search in ".concat(p,"...")}),j.length?Object(v.jsx)("button",{type:"button",className:"query__button",onClick:function(){s(g(c,{query:null})),u("")},"data-cy":"searchDelete",children:Object(v.jsx)("img",{src:"Images/cross-icon--grey.png",alt:"Cross",className:"query__img--cross"})}):Object(v.jsx)("img",{src:"Images/Search.svg",className:"query__img",alt:"Search"})]})})}),K=(c(49),function(e){var t=e.setIsMenu,c=e.isMenu;return Object(v.jsx)("header",{className:"header",children:Object(v.jsxs)("div",{className:"header__container",children:[Object(v.jsxs)("div",{className:"header__wrapper",children:[Object(v.jsx)("button",{type:"button",className:"header__menu",onClick:function(){return t(!c)},children:Object(v.jsx)("img",{className:"header__menu--icon",src:c?"Images/cross-icon.png":"Images/menu-icon.png",alt:"menu icon"})}),Object(v.jsx)(z,{}),Object(v.jsx)(Y,{})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)(Z,{}),Object(v.jsx)(X,{})]})]})})}),Q=(c(50),function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(H),a=Object(r.a)(n,1)[0],o=Object(i.useState)(0),l=Object(r.a)(o,2),j=l[0],u=l[1],d=Object(i.useState)(window.innerWidth),b=Object(r.a)(d,1)[0],m=-j*(a.length-1);Object(i.useEffect)((function(){u(b<=380?210:b<=640?310:b>=640&&b<1200?560:750)}),[b]);var O=function(){s((function(e){return Math.max(e-=j,-j*(H.length-1))}))};return Object(i.useEffect)((function(){var e=setInterval(O,3e3);return function(){clearInterval(e)}}),[c]),Object(v.jsxs)("section",{className:"slider",children:[Object(v.jsxs)("div",{className:"slider__container",children:[Object(v.jsx)("button",{type:"button",onClick:function(){s((function(e){return Math.min(e+=j,0)}))},className:A()("slider__button",{"slider__button--active":0===c}),children:Object(v.jsx)("img",{src:"Images/arrow-icon--left.svg",alt:"Arrow icon left"})}),Object(v.jsx)("div",{className:"slider__wrapper",children:Object(v.jsx)("div",{className:"slider__items",style:{transform:"translateX(".concat(c,"px)"),transition:"1s"},children:a.map((function(e){return Object(v.jsx)("img",{src:"./new/img/".concat(e.url),className:"slider__img",alt:"slider Iamge ".concat(e.id)},e.id)}))})}),Object(v.jsx)("button",{type:"button",onClick:O,className:A()("slider__button",{"slider__button--active":c===m}),children:Object(v.jsx)("img",{src:"Images/arrow-icon--left.svg",style:{transform:"rotate(180deg)"},alt:"Arrow icon right"})})]}),Object(v.jsx)("div",{className:"slider__dots",children:a.map((function(e){var t=-e.id*j;return Object(v.jsx)("button",{type:"button",className:A()("slider__dot",{"slider__dot--active":t===c})},e.id)}))})]})}),V=(c(51),c(52),c(53),function(e){var t=e.name,c=e.imgUrl,s=e.color,n=e.to,r=e.products;return Object(v.jsx)(a.b,{to:n,style:{textDecoration:"none",margin:"0 auto"},children:Object(v.jsxs)("div",{className:"category",children:[Object(v.jsx)("div",{className:"category__shell",style:{backgroundColor:s},children:Object(v.jsx)("img",{src:"".concat(c),alt:"phones",className:"category__img"})}),Object(v.jsx)("h4",{className:"category__title",children:t}),Object(v.jsx)("span",{className:"category__models",children:"".concat(r.length," models")})]})})}),ee=function(e){var t=e.phones,c=e.tablets,s=e.accessories;return Object(v.jsxs)("section",{className:"shopByCategory",children:[Object(v.jsx)("h1",{className:"shopByCategory__title",children:"Shop by category"}),Object(v.jsx)("div",{className:"shopByCategory__container",children:q.map((function(e){var n=e.name,a=e.imgUrl,r=e.bgcColor,i=e.linkTo,o=[];return"/phones"===i&&(o=t),"/tablets"===i&&(o=c),"/accessories"===i&&(o=s),Object(v.jsx)(V,{name:n,imgUrl:a,color:r,to:i,products:o},i)}))})]})},te=function(e){var t=e.setIsLoader,c=e.isLoader,s=Object(i.useState)([]),n=Object(r.a)(s,2),a=n[0],o=n[1],j=Object(i.useState)([]),b=Object(r.a)(j,2),m=b[0],O=b[1],p=Object(i.useState)([]),x=Object(r.a)(p,2),f=x[0],g=x[1],N=Object(d.a)(a).sort((function(e,t){return e.fullPrice-e.price-(t.fullPrice-t.price)})).slice(),y=Object(d.a)(a).sort((function(e,t){return e.year-t.year})).slice(),w=function(){var e=Object(l.a)(u.a.mark((function e(){var c,s,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0),e.next=4,h();case 4:c=e.sent,s=_(c,"phones"),n=_(c,"tablets"),a=_(c,"accessories"),o(s),O(n),g(a);case 11:return e.prev=11,t(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){w()}),[]),Object(v.jsx)("section",{className:"home",children:c?Object(v.jsx)(L,{}):Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(Q,{}),Object(v.jsx)(R,{products:N,title:"Hot prices"}),Object(v.jsx)(ee,{phones:a,tablets:m,accessories:f}),Object(v.jsx)(R,{products:y,title:"Brand new models"})]})})},ce=(c(54),function(){return Object(v.jsxs)("section",{className:"notFound",children:[Object(v.jsx)("img",{src:"Images/404-page-not-found.png",alt:"not-found",className:"notFound__img"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{className:"notFound__error",children:"404"}),Object(v.jsx)("p",{className:"notFound__message",children:"Unfortunately, this page address was not found. Page does not exist"})]})]})}),se=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)($,{isLoader:t,setIsLoader:c,category:"tablets",title:"Tablets"})})},ne=function(e){var t=e.isLoader,c=e.setIsLoader;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)($,{isLoader:t,setIsLoader:c,category:"accessories",title:"Accessories"})})},ae=(c(55),function(){var e=w("favoritesItems",[]),t=Object(r.a)(e,1)[0],c=Object(a.d)(),s=Object(r.a)(c,1)[0].get("query")||"",n=p(t,s);return Object(v.jsx)("div",{className:"favorite",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"favorite__container",children:[Object(v.jsx)(E,{}),Object(v.jsx)("h1",{children:"Favorites"}),Object(v.jsx)("p",{children:"".concat(n.length," items")})]}),Object(v.jsx)("div",{className:"favorite__wrapper",children:n.length?Object(v.jsx)(v.Fragment,{children:n.map((function(e){return Object(v.jsx)(S,{product:e})}))}):Object(v.jsx)(M,{})})]})})}),re=(c(56),function(e){var t=e.product,c=e.onDelete,s=e.setSum,n=Object(i.useState)(1),a=Object(r.a)(n,2),o=a[0],l=a[1];return Object(v.jsxs)("div",{className:"productCart",children:[Object(v.jsx)("button",{type:"button",className:"productCart__button--cross",onClick:function(){return c(t,o)},children:"x"}),Object(v.jsx)("img",{src:"./new/".concat(t.image),alt:"Product",className:"productCart__img"}),Object(v.jsx)("span",{className:"productCart__name",children:t.name}),Object(v.jsxs)("div",{className:"productCart__counter",children:[Object(v.jsx)("button",{type:"button",onClick:function(){return e=t.price,s((function(t){return t+e})),void l((function(e){return e+1}));var e},className:"productCart__button",children:"+"}),Object(v.jsx)("p",{children:o}),Object(v.jsx)("button",{type:"button",onClick:function(){return e=t,n=o,o>0&&(s((function(t){return t-e.price})),l((function(e){return e-1}))),void(1===o&&c(t,n));var e,n},className:"productCart__button",children:"-"})]}),Object(v.jsx)("span",{className:"productCart__price",children:"$".concat(t.price)})]})}),ie=(c(57),function(){var e=0,t=w("orderedItems",[]),c=Object(r.a)(t,2),s=c[0],n=c[1],o=Object(a.d)(),l=Object(r.a)(o,1)[0],j=Object(i.useState)(e),u=Object(r.a)(j,2),b=u[0],m=u[1],O=l.get("query")||"",h=p(s,O),x=function(e,t){m((function(c){return c-e.price*t})),n(Object(d.a)(s.filter((function(t){return t.id!==e.id}))))};return Object(i.useEffect)((function(){h.forEach((function(t){return e+=t.price})),m(e)}),[O,s]),Object(v.jsx)("section",{className:"cart",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(E,{}),Object(v.jsx)("div",{className:"cart__container",children:h.length?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("ul",{className:"cart__list",children:h.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(re,{product:e,onDelete:x,setSum:m})},e.id)}))}),Object(v.jsxs)("div",{className:"cart__total",children:[Object(v.jsxs)("div",{className:"cart__total-wrapper",children:[Object(v.jsxs)("h1",{className:"cart__total-price",children:["$",b]}),Object(v.jsx)("p",{children:"Total for ".concat(h.length," items")})]}),Object(v.jsx)("button",{type:"button",className:"cart__button",children:"Checkout"})]})]}):Object(v.jsx)(M,{})})]})})}),oe=(c(58),function(e){var t=e.setIsMenu,c=e.isMenu;return Object(v.jsx)("section",{className:A()("menu",{"menu--smooth":c}),style:{transition:"300ms"},children:Object(v.jsx)("div",{className:"menu__container",children:Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"nav__list",style:{display:"flex",flexDirection:"column",width:"40%",height:"100vh",backgroundColor:"#fff",paddingTop:"50px"},children:[Object(v.jsx)("li",{onClick:function(){return t(!1)},children:Object(v.jsx)(G,{to:"home",text:"Home"})}),Object(v.jsx)("li",{onClick:function(){return t(!1)},children:Object(v.jsx)(G,{to:"phones",text:"Phones"})}),Object(v.jsx)("li",{onClick:function(){return t(!1)},children:Object(v.jsx)(G,{to:"tablets",text:"tablets"})}),Object(v.jsx)("li",{onClick:function(){return t(!1)},children:Object(v.jsx)(G,{to:"accessories",text:"accessories"})})]})})})})}),le=(c(59),function(){return Object(v.jsx)("div",{className:"footer",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"footer__container",children:[Object(v.jsx)(z,{}),Object(v.jsxs)("ul",{className:"footer__list",children:[Object(v.jsx)("li",{children:Object(v.jsx)(a.b,{to:"https://github.com/partnersinbahamas",className:"footer__link",target:"_blank",children:"github"})}),Object(v.jsx)("li",{children:Object(v.jsx)(a.b,{to:"/contacts",className:"footer__link",children:"contacts"})}),Object(v.jsx)("li",{children:Object(v.jsx)(a.b,{to:"/",className:"footer__link",target:"_blank",children:"rights"})})]}),Object(v.jsxs)("div",{className:"footer__backTo",children:[Object(v.jsx)("p",{children:"Back to top"}),Object(v.jsx)("button",{type:"button",className:"footer__button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(v.jsx)("img",{src:"Images/arrow-icon--left.svg",className:"footer__button--icon",alt:"Arrow line"})})]})]})})})}),je=(c(60),function(){return Object(v.jsx)("section",{className:"contact",children:Object(v.jsx)("div",{className:"contact__wrapper",children:B.map((function(e){return Object(v.jsx)(a.b,{to:e.url,target:"_blank",className:"contact__link",children:Object(v.jsx)("img",{src:e.img,alt:"contact",className:"contact__img"})},e.id)}))})})}),ue=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!1),l=Object(r.a)(n,2),j=l[0],u=l[1],d=Object(a.d)(),b=Object(r.a)(d,1)[0];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(K,{setIsMenu:s,isMenu:c}),c&&Object(v.jsx)(oe,{setIsMenu:s,isMenu:c}),Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{path:"/home",element:Object(v.jsx)(te,{setIsLoader:u,isLoader:j,searchParams:b})}),Object(v.jsx)(o.b,{path:"/",element:Object(v.jsx)(o.a,{to:"/home"})}),Object(v.jsxs)(o.b,{path:"phones",children:[Object(v.jsx)(o.b,{index:!0,element:Object(v.jsx)(J,{isLoader:j,setIsLoader:u})}),Object(v.jsx)(o.b,{path:":productId",element:Object(v.jsx)(J,{isLoader:j,setIsLoader:u})})]}),Object(v.jsx)(o.b,{path:"tablets",element:Object(v.jsx)(se,{isLoader:j,setIsLoader:u})}),Object(v.jsx)(o.b,{path:"accessories",element:Object(v.jsx)(ne,{isLoader:j,setIsLoader:u})}),Object(v.jsx)(o.b,{path:"favorites",element:Object(v.jsx)(ae,{})}),Object(v.jsx)(o.b,{path:"cart",element:Object(v.jsx)(ie,{})}),Object(v.jsx)(o.b,{path:"contacts",element:Object(v.jsx)(je,{})}),Object(v.jsx)(o.b,{path:"*",element:Object(v.jsx)(ce,{})})]}),Object(v.jsx)(le,{})]})};n.a.render(Object(v.jsx)(a.a,{children:Object(v.jsx)(ue,{})}),document.getElementById("root"))}]),[[61,1,2]]]);
//# sourceMappingURL=main.d095ffe5.chunk.js.map