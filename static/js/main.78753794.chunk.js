(this.webpackJsonpplpreact=this.webpackJsonpplpreact||[]).push([[0],{100:function(t,e,n){},102:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),c=n(8),s=n.n(c),r=n(28),o=n(10),l=n.n(o),d=n(26),u=n(2),j=n(27),m=n.n(j),b=n(104),p=n(6),h=n(16),g=n.n(h),O=n.p+"static/media/cart.bf47b947.svg",f=(n(42),n(1)),x=function(t){var e=t.prod,n=t.addtocart,a=t.disposition,c=t.middlS,s=(t.isScrolling,t.id),r=t.title,o=t.price,l=(t.description,t.category,t.image),d=(t.rating,Object(i.useState)(0)),j=Object(u.a)(d,2),m=j[0],p=j[1],h=Object(i.useState)(0),g=Object(u.a)(h,2),x=g[0],y=g[1],v=Object(i.useState)(!0),w=Object(u.a)(v,2),N=w[0],k=w[1],S={static:{top:c+window.scrollY-x},none:{}};return Object(i.useEffect)((function(){var t=function(t){var e=document.getElementById("card"+s).getBoundingClientRect();y(e.height/2)};return window.addEventListener("wheel",t),function(){window.removeEventListener("wheel",t,!1)}}),[s]),Object(i.useEffect)((function(){if(N){var t=document.getElementById("card"+s).getBoundingClientRect();y(t.height/2),k(!1)}}),[N,s]),Object(f.jsxs)(b.a.div,{id:"card"+s,className:"card",onMouseEnter:function(){p(1)},onMouseLeave:function(){p(0)},initial:{position:"absolute",top:s%2===0?window.innerHeight+window.scrollY:-window.innerHeight+window.scrollY-2*x,left:1===a&&s%2===0?window.innerWidth/2-600:window.innerWidth/2+300},variants:S,animate:N?"none":"static",transition:{type:"spring",delay:.01,duration:1},children:[Object(f.jsx)(b.a.div,{className:"img-container",initial:{top:200},variants:{static:{opacity:1,rotateY:0,transition:{type:"spring",duration:1}},hover:{opacity:.3,rotateY:180,transition:{type:"spring",duration:1}}},animate:1===m?"hover":"static",children:Object(f.jsx)(b.a.img,{src:l,className:"card-img-top img-fluid",alt:r})}),Object(f.jsxs)(b.a.div,{className:"card-body text-center w-100",initial:{position:"absolute",bottom:0},variants:{hide:{opacity:0,transition:{type:"spring",duration:.7}},show:{opacity:1,transition:{type:"spring",duration:.7}}},animate:1===m?"show":"hide",children:[Object(f.jsx)("h6",{class:"card-title",children:r}),Object(f.jsxs)("h6",{class:"card-title",children:["$",o]}),Object(f.jsx)("div",{className:"btn btn-outline-dark cart",onClick:function(){n(e)},children:Object(f.jsx)("img",{src:O,alt:"cart"})})]})]})},y=function(t){var e=t.prod,n=t.addtocart,a=(t.middlS,t.isScrolling,t.id),c=t.title,s=t.price,r=(t.description,t.category,t.image),o=(t.rating,Object(i.useState)(0)),l=Object(u.a)(o,2),d=l[0],j=l[1],m={static:{opacity:1,top:0,transition:{type:"spring",duration:.7,delay:.04*a}},none:{opacity:.3},show:{opacity:1}};return Object(f.jsxs)(b.a.div,{id:"card"+a,className:"card",onMouseEnter:function(){j(1)},onMouseLeave:function(){j(0)},initial:{top:300},variants:m,animate:"static",children:[Object(f.jsx)(b.a.div,{className:"img-container",variants:m,animate:0===d?"show":"none",children:Object(f.jsx)(b.a.img,{src:r,className:"card-img-top img-fluid",alt:c})}),Object(f.jsxs)(b.a.div,{className:"card-body text-center w-100",initial:{position:"absolute",bottom:0},variants:{hide:{opacity:0,transition:{type:"spring",duration:.7}},show:{opacity:1,transition:{type:"spring",duration:.7}}},animate:1===d?"show":"hide",children:[Object(f.jsx)("h6",{class:"card-title",children:c}),Object(f.jsxs)("h6",{class:"card-title",children:["$",s]}),Object(f.jsx)("div",{className:"btn btn-outline-dark cart",onClick:function(){n(e)},children:Object(f.jsx)("img",{src:O,alt:"cart"})})]})]})},v=n(17),w=n.n(v);n(99);w.a.setAppElement("#root"),w.a.defaultStyles.overlay.backgroundColor="rgba(0,0,0,.5)";var N=function(t){var e=t.isOpen,n=t.setIsOpen,i=t.cart,a=t.setCart,c=0;i.map((function(t){return c+=t.cant*t.price,""}));var s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(f.jsx)(w.a,{className:"Modal bg-light",isOpen:e,onRequestClose:function(){return n(!1)},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",position:"absolute",width:"720px",overflowY:"auto",maxHeight:"95vh"},overlay:{zIndex:9999}},contentLabel:"Invitados",children:Object(f.jsx)(b.a.div,{children:0===i.length?Object(f.jsxs)(b.a.div,{className:"d-flex flex-column",initial:{scale:0},animate:{scale:.95,transition:{type:"spring",duration:.7}},children:[Object(f.jsx)("h1",{className:"text-center mt-4 text-capitalize",children:"Add products to your Cart"}),Object(f.jsx)("div",{className:"btn mt-5 mb-4 btn-outline-danger",onClick:function(){return n(!1)},children:"Close"})]}):Object(f.jsxs)("div",{children:[i.map((function(t,e){return Object(f.jsxs)(b.a.div,{initial:{scale:0},animate:{scale:.95,transition:{type:"spring",duration:.7,delay:.15*e}},className:"row modalcontainer",children:[Object(f.jsx)("img",{src:t.image,alt:t.title,className:"modalimg col-5 img-fluid"}),Object(f.jsx)("h4",{className:"title col-7 text-lowercase",children:t.title}),Object(f.jsxs)("h5",{className:"col-4 text-center pt-3 d-flex justify-content-center",children:["Price: $",t.price]}),Object(f.jsxs)("h5",{className:"col-3 text-center pt-3 d-flex justify-content-center",children:["Amount: ",t.cant]}),Object(f.jsxs)("h5",{className:"col-5 text-center pt-3 d-flex justify-content-center",children:["Total: $",t.cant*t.price]})]})})),Object(f.jsx)("div",{className:"mb-4 mt-3 checkout mx-auto d-block col-12 d-flex justify-content-center",children:Object(f.jsxs)("h5",{children:[" Grand Total: ",s.format(c)]})}),Object(f.jsx)("div",{className:"btn btn-outline-dark mb-5 mt-3 checkout mx-auto d-block w-25",onClick:function(){g.a.fire("Thanks for your purchase","","success"),a([]),n(!1)},children:"Checkout"})]})})})},k=(n(100),n(101),function(){var t=Object(i.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],c=Object(i.useState)("electronics"),s=Object(u.a)(c,2),o=s[0],j=s[1],h=Object(i.useState)([]),O=Object(u.a)(h,2),v=O[0],w=O[1],k=Object(i.useState)([]),S=Object(u.a)(k,2),C=S[0],E=S[1],I=Object(i.useState)(!0),B=Object(u.a)(I,2),M=B[0],R=B[1],T=Object(i.useState)(!1),L=Object(u.a)(T,2),A=L[0],H=L[1],Q=Object(i.useState)(window.innerHeight/2),Y=Object(u.a)(Q,2),U=Y[0],W=Y[1],$=Object(i.useState)([]),F=Object(u.a)($,2),z=F[0],D=F[1],J=Object(i.useState)(!1),q=Object(u.a)(J,2),G=q[0],P=q[1],K=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://fakestoreapi.com/products").then((function(t){t.data&&E(t.data)})).catch((function(t){}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://fakestoreapi.com/products/categories").then((function(t){t.data&&(w(t.data),p.animateScroll.scrollTo(window.innerHeight/3,{duration:1,delay:50,smooth:"easeInOutQuint"}))})).catch((function(t){}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(i.useEffect)((function(){M&&0===C.length&&0===v.length&&(K(),V(),R(!1))}),[C,M,v]),Object(i.useEffect)((function(){var t=function(){var t=document.getElementById("electronics"),e=document.getElementById("jewelery"),n=document.getElementById("men's clothing"),i=document.getElementById("women's clothing");if(null!==t){var a=t.getBoundingClientRect(),c=e.getBoundingClientRect(),s=n.getBoundingClientRect(),r=i.getBoundingClientRect(),o=window.innerHeight/2;W(o),o>a.y&&o<a.bottom&&j("electronics"),o>c.y&&o<c.bottom&&j("jewelery"),o>s.y&&o<s.bottom&&j("men's clothing"),o>r.y&&o<r.bottom&&j("women's clothing")}H(!0)};return window.addEventListener("scroll",t),function(){H(!1),window.removeEventListener("scroll",t,!1)}}),[]);var X=function(t){var e=Object(r.a)(z),n=e.findIndex((function(e){return e.id===t.id}));-1!==n?(t.cant=e[n].cant+1,e.splice(n,1)):t.cant=1,e.push(t),D(Object(r.a)(e)),g.a.fire("Added to your cart","","success")};return Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)(N,{isOpen:G,setIsOpen:P,cart:z,setCart:D}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("nav",{className:"navbar navbar-light bg-light sticky-top",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)("span",{className:"navbar-brand mb-0 tit",children:"MENU"}),Object(f.jsx)("span",{className:"navbar-brand mb-0 tit",onClick:function(){p.animateScroll.scrollTo(window.innerHeight/3,{duration:1,delay:50,smooth:"easeInOutQuint"}),a("")},children:"WEARE\xae"}),Object(f.jsx)("span",{className:"navbar-brand mb-0 tit",onClick:function(){P(!0)},children:"CART"})]})}),""===n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"line container",style:{top:U,position:"fixed"}}),Object(f.jsx)("div",{className:"list-cont",id:"inicio",children:Object(f.jsx)(b.a.ul,{className:"list-group",children:v.map((function(t,e){return Object(f.jsx)(b.a.li,{initial:{y:window.innerHeight},animate:{y:0,transition:{type:"spring",duration:.7,delay:.2*e}},id:t,className:"list-group-item border-0 list text-break bg-transparent",children:Object(f.jsx)(b.a.p,{onClick:function(){p.animateScroll.scrollTo(0,{duration:0,delay:0,smooth:"easeInOutQuint"}),a(t)},className:"text-center pt-4 pb-4",children:t})},t)}))})}),Object(f.jsx)("div",{className:"cards",children:C.map((function(t){return""!==n||""===o||t.category!==o||2!==t.id&&3!==t.id&&5!==t.id&&8!==t.id&&9!==t.id&&12!==t.id&&17!==t.id&&18!==t.id?"":Object(f.jsx)(x,{prod:t,addtocart:X,disposition:1,middlS:U,isScrolling:A,id:t.id,title:t.title,price:t.price,description:t.description,category:t.category,image:t.image,rating:t.rating})}))})]}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"cards d-flex flex-wrap align-items-center justify-content-evenly mb-5 mt-2",children:C.map((function(t,e){return t.category===n||"all"===n?Object(f.jsx)(y,{prod:t,addtocart:X,disposition:2,middlS:U,isScrolling:A,id:t.id,title:t.title,price:t.price,description:t.description,category:t.category,image:t.image,rating:t.rating}):""}))})}),Object(f.jsx)("nav",{className:"navbar navbar-light bg-light fixed-bottom",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("span",{className:"navbar-brand tit",onClick:function(){p.animateScroll.scrollTo(0,{duration:0,delay:0,smooth:"easeInOutQuint"}),a("women's clothing")},children:"WOMAN"}),Object(f.jsx)("span",{className:"navbar-brand tit border border-dark rounded-pill all",onClick:function(){p.animateScroll.scrollTo(0,{duration:0,delay:0,smooth:"easeInOutQuint"}),j(""),a("all")},children:"ALL"}),Object(f.jsx)("span",{className:"navbar-brand tit",onClick:function(){p.animateScroll.scrollTo(0,{duration:0,delay:0,smooth:"easeInOutQuint"}),a("men's clothing")},children:"MEN"})]})})]})]})});s.a.render(Object(f.jsxs)(a.a.StrictMode,{children:[Object(f.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(f.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Ubuntu+Mono:wght@400;700&display=swap",rel:"stylesheet"}),Object(f.jsx)(k,{})]}),document.getElementById("root"))},42:function(t,e,n){},99:function(t,e,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.78753794.chunk.js.map