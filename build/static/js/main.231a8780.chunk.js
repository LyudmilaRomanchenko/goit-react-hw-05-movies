(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,n,t){e.exports={link:"Navigation_link__2rvYr",activeLink:"Navigation_activeLink__1h_CJ",nav:"Navigation_nav__2rMWv"}},16:function(e,n,t){"use strict";var a=t(8),c=t.n(a),r=t(12),i="cdc3559cea174c9b75b98956c9a389b5",s="https://api.themoviedb.org",o="".concat(s,"/3/trending/all/day?api_key=").concat(i);function u(){return(u=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(r.a)(c.a.mark((function e(n){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"/3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(r.a)(c.a.mark((function e(n){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"/3/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(r.a)(c.a.mark((function e(n){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"/3/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(r.a)(c.a.mark((function e(n){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"/3/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j={fetchTrending:function(){return u.apply(this,arguments)},fetchMovies:function(e){return h.apply(this,arguments)},fetchMovieDetails:function(e){return p.apply(this,arguments)},fetchMovieCredits:function(e){return f.apply(this,arguments)},fetchMovieReviews:function(e){return l.apply(this,arguments)}};n.a=j},17:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(0);var a=t(24),c=t.n(a),r=(t(39),t(25)),i=t.n(r),s=t(1);var o=function(){return Object(s.jsx)(i.a,{className:c.a.Loader,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}},20:function(e,n,t){e.exports={container:"Container_container__ienhj"}},23:function(e,n,t){},24:function(e,n,t){e.exports={Loader:"Spinner_Loader__o9fHL"}},30:function(e,n,t){},38:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(19),i=t.n(r),s=t(10),o=(t(30),t(3)),u=t(20),h=t.n(u),p=t(1);function f(e){var n=e.children;return Object(p.jsx)("div",{className:h.a.container,children:n})}var l=t(11),j=t.n(l),v=function(){return Object(p.jsxs)("nav",{className:j.a.nav,children:[Object(p.jsx)(s.b,{exact:!0,to:"/",className:j.a.link,activeClassName:j.a.activeLink,children:"Home"}),Object(p.jsx)(s.b,{to:"/movies",className:j.a.link,activeClassName:j.a.activeLink,children:"Movies"})]})},b=t(23),d=t.n(b);function x(){return Object(p.jsx)("header",{className:d.a.header,children:Object(p.jsx)(v,{})})}var O=t(16),m=(t(38),t(17)),k=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,73))})),g=Object(a.lazy)((function(){return t.e(3).then(t.bind(null,72))})),y=Object(a.lazy)((function(){return t.e(4).then(t.bind(null,66))}));var _=function(){return console.log(O.a.fetchTrending().then((function(e){return e})).then((function(e){return e}))),Object(p.jsxs)(f,{children:[Object(p.jsx)(x,{}),Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)(m.a,{}),children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,children:Object(p.jsx)(k,{})}),Object(p.jsx)(o.a,{path:"/movies",exact:!0,children:Object(p.jsx)(g,{})}),Object(p.jsx)(o.a,{path:"/movies/:movieId",exact:!0,children:Object(p.jsx)(y,{})})]})})]})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(s.a,{children:Object(p.jsx)(_,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.231a8780.chunk.js.map