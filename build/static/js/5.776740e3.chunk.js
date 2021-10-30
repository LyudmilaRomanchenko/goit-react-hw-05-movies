(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[5],{60:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(c=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);c=!0);}catch(s){r=!0,o=s}finally{try{c||null==a.return||a.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},62:function(e,t,n){e.exports={container:"MovieCard_container__30ukc",img:"MovieCard_img__1hQiG",description:"MovieCard_description__38hMU"}},63:function(e,t,n){e.exports={container:"MovieDetailsPage_container__2RTKY"}},65:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var c=n(60),r=n(0),o=n(3),i=n(18),a=n(2),s=n.n(a),l=n(62),u=n.n(l),j=n.p+"static/media/default_movie_img.e4529e8b.jpg",b=n(1);function d(e){var t=e.movie,n=t.poster_path,c=t.title,r=t.release_date,o=t.vote_average,i=t.overview,a=t.genres;console.log("".concat(n));var s="https://image.tmdb.org/t/p/w500".concat(n);return Object(b.jsxs)("div",{className:u.a.container,children:[n?Object(b.jsx)("img",{className:u.a.img,src:s,alt:c,height:"400",width:"300"}):Object(b.jsx)("img",{className:u.a.img,src:j,alt:c,height:"400",width:"300"}),Object(b.jsxs)("div",{className:u.a.description,children:[Object(b.jsxs)("h2",{children:[c,"(",r?r.split("-")[0]:"",")"]}),Object(b.jsxs)("p",{children:["User Score: ",10*o,"%"]}),Object(b.jsx)("h3",{children:"Overview"}),Object(b.jsx)("p",{children:i}),Object(b.jsx)("h3",{children:"Genres"}),Object(b.jsx)("ul",{children:a&&a.map((function(e){var t=e.id,n=e.name;return Object(b.jsx)("li",{children:n},t)}))})]})]})}var h=d;d.prototype={movies:s.a.object.isRequired};var v=n(10),O=n(17),f=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,71))})),p=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,73))}));function g(e){var t=e.path,n=e.url;return console.log(n),console.log(t),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Additional information"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(v.b,{to:"".concat(n,"/cast"),children:"Cast"})}),Object(b.jsx)("li",{children:Object(b.jsx)(v.b,{to:"".concat(n,"/reviews"),children:"Reviews"})})]}),Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)(O.a,{}),children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"".concat(t,"/cast"),children:Object(b.jsx)(f,{})}),Object(b.jsx)(o.a,{path:"".concat(t,"/reviews"),children:Object(b.jsx)(p,{})})]})})]})}var m=g;function x(e){var t=e.title,n=e.onGoDack;return Object(b.jsx)("button",{type:"button",onClick:n,children:t})}g.prototype={path:s.a.string.isRequired,url:s.a.string.isRequired},x.prototype={title:s.a.string.isRequired,onGoDack:s.a.func.isRequired};var y=n(63),_=n.n(y);var w=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),l=Object(c.a)(s,2),u=l[0],j=l[1],d=Object(r.useState)(!1),v=Object(c.a)(d,2),f=v[0],p=v[1],g=Object(o.f)();console.log(g);var y=Object(o.g)(),w=Object(o.h)().movieId;console.log(w);var k=Object(o.i)(),S=k.url,A=k.path;return console.log(S),console.log(A),console.log(Object(o.i)()),Object(r.useEffect)((function(){p(!0),i.a.fetchMovieDetails(w).then((function(e){return a(e)})).catch((function(e){return j(e)})).finally((function(){return p(!1)}))}),[w]),console.log(n),console.log(u),console.log("/movies/".concat(w,"/cast")==="".concat(S,"/cast")),console.log("".concat(A,"/cast")),console.log("".concat(S,"/cast")),!1===n.success&&a(""),Object(b.jsxs)(b.Fragment,{children:[f&&Object(b.jsx)(O.a,{}),n&&Object(b.jsxs)("div",{className:_.a.container,children:[Object(b.jsx)(x,{title:"Go back",onGoDack:function(){var e,t;g.push(null!==(e=null===y||void 0===y||null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")}}),Object(b.jsx)(h,{movie:n}),Object(b.jsx)(m,{path:A,url:S})]}),!n&&!f&&"No movie description.",Object(b.jsx)("hr",{})]})}}}]);
//# sourceMappingURL=5.776740e3.chunk.js.map