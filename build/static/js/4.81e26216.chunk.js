(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[4],{60:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},61:function(t,e,n){t.exports={listItem:"MoviesList_listItem__3YwUE"}},64:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(3),o=n(10),i=n(2),a=n.n(i),c=n(61),s=n.n(c),l=n(1);function u(t){var e=t.movies;console.log(e);var n=Object(r.g)();return console.log(n),console.log(e.length),Object(l.jsx)(l.Fragment,{children:e&&Object(l.jsx)("ul",{className:s.a.list,children:e.map((function(t){return Object(l.jsx)("li",{className:s.a.listItem,children:Object(l.jsx)(o.b,{to:{pathname:"/movies/".concat(t.id),state:{from:n}},className:s.a.listItem,children:t.title?t.title:t.name})},t.id)}))})})}var f=u;u.prototype={movies:a.a.array.isRequired}},67:function(t,e,n){t.exports={title:"HomePage_title__SSVdJ"}},74:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var r=n(60),o=n(0),i=n(64),a=n(18),c=n(67),s=n.n(c),l=n(17),u=n(1);var f=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1],f=Object(o.useState)(""),b=Object(r.a)(f,2),m=b[0],j=b[1],d=Object(o.useState)(!1),h=Object(r.a)(d,2),v=h[0],g=h[1];return console.log(m.message),Object(o.useEffect)((function(){g(!0),a.a.fetchTrending().then((function(t){var e=t.results;return c(e)})).catch((function(t){return j(t)})).finally((function(){return g(!1)}))}),[]),console.log(n),Object(u.jsxs)("div",{children:[m&&m.message,n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:s.a.title,children:"Trending today"}),v&&Object(u.jsx)(l.a,{}),Object(u.jsx)(i.a,{movies:n})]})]})}}}]);
//# sourceMappingURL=4.81e26216.chunk.js.map