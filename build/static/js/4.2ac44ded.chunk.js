(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[4],{59:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(c=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);c=!0);}catch(s){r=!0,o=s}finally{try{c||null==a.return||a.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},61:function(e,t,n){e.exports={container:"MovieCard_container__30ukc",img:"MovieCard_img__1hQiG",description:"MovieCard_description__38hMU"}},62:function(e,t,n){},63:function(e,t,n){e.exports={container:"MovieDetailsPage_container__2RTKY"}},65:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var c=n(59),r=n(0),o=n(3),i=n(17),a=n(61),s=n.n(a),l=n.p+"static/media/default_movie_img.e4529e8b.jpg",j=n(1);var u=function(e){var t=e.movie,n=t.poster_path,c=t.title,r=t.release_date,o=t.vote_average,i=t.overview,a=t.genres;console.log("".concat(n));var u="https://image.tmdb.org/t/p/w500".concat(n);return Object(j.jsxs)("div",{className:s.a.container,children:[n?Object(j.jsx)("img",{className:s.a.img,src:u,alt:c,height:"400",width:"300"}):Object(j.jsx)("img",{className:s.a.img,src:l,alt:c,height:"400",width:"300"}),Object(j.jsxs)("div",{className:s.a.description,children:[Object(j.jsxs)("h2",{children:[c,"(",r?r.split("-")[0]:"",")"]}),Object(j.jsxs)("p",{children:["User Score: ",10*o,"%"]}),Object(j.jsx)("h3",{children:"Overview"}),Object(j.jsx)("p",{children:i}),Object(j.jsx)("h3",{children:"Genres"}),Object(j.jsx)("ul",{children:a&&a.map((function(e){var t=e.id,n=e.name;return Object(j.jsx)("li",{children:n},t)}))})]})]})},b=n(10),h=n(16),d=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,71))})),v=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,73))}));var O=function(e){var t=e.path,n=e.url;return console.log(n),console.log(t),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Additional information"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"".concat(n,"/cast"),children:"Cast"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"".concat(n,"/reviews"),children:"Reviews"})})]}),Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(h.a,{}),children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"".concat(t,"/cast"),children:Object(j.jsx)(d,{})}),Object(j.jsx)(o.a,{path:"".concat(t,"/reviews"),children:Object(j.jsx)(v,{})})]})})]})};n(62);function f(e){var t=e.title,n=e.onGoDack;return Object(j.jsx)("button",{type:"button",onClick:n,children:t})}var p=n(63),g=n.n(p);var m=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),l=Object(c.a)(s,2),b=l[0],d=l[1],v=Object(r.useState)(!1),p=Object(c.a)(v,2),m=p[0],x=p[1],y=Object(o.f)();console.log(y);var _=Object(o.g)(),w=Object(o.h)().movieId;console.log(w);var S=Object(o.i)(),k=S.url,A=S.path;return console.log(k),console.log(A),console.log(Object(o.i)()),Object(r.useEffect)((function(){x(!0),i.a.fetchMovieDetails(w).then((function(e){return a(e)})).catch((function(e){return d(e)})).finally((function(){return x(!1)}))}),[w]),console.log(n),console.log(b),console.log("/movies/".concat(w,"/cast")==="".concat(k,"/cast")),console.log("".concat(A,"/cast")),console.log("".concat(k,"/cast")),!1===n.success&&a(""),Object(j.jsxs)(j.Fragment,{children:[m&&Object(j.jsx)(h.a,{}),n&&Object(j.jsxs)("div",{className:g.a.container,children:[Object(j.jsx)(f,{title:"Go back",onGoDack:function(){var e,t;y.push(null!==(e=null===_||void 0===_||null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")}}),Object(j.jsx)(u,{movie:n}),Object(j.jsx)(O,{path:A,url:k})]}),!n&&!m&&"No movie description.",Object(j.jsx)("hr",{})]})}}}]);
//# sourceMappingURL=4.2ac44ded.chunk.js.map