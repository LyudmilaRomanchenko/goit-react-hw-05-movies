(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[7],{64:function(t,e,c){t.exports={img:"Cast_img__P5C6O",item:"Cast_item__720iQ",description:"Cast_description__3i4PU"}},70:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return h}));var n=c(59),i=c(0),a=c(3),s=c(16),o=c(64),r=c.n(o),l=c(1);var h=function(){var t=Object(a.h)().movieId;console.log(t),console.log(t);var e=Object(i.useState)(""),c=Object(n.a)(e,2),o=c[0],h=c[1],j=Object(i.useState)(""),u=Object(n.a)(j,2),p=(u[0],u[1]);Object(i.useEffect)((function(){s.a.fetchMovieCredits(t).then((function(t){return h(t)})).catch((function(t){return p(t)}))}),[t]),console.log(o);var b=o.cast;return console.log(b),Object(l.jsx)("div",{children:b&&Object(l.jsx)("ul",{children:b.map((function(t){var e=t.id,c=t.name,n=t.character,i=t.profile_path;return Object(l.jsxs)("li",{className:r.a.item,children:[Object(l.jsx)("img",{className:r.a.img,src:"".concat("https://image.tmdb.org/t/p/w500").concat(i),alt:c}),Object(l.jsxs)("p",{className:r.a.description,children:[Object(l.jsx)("p",{children:c}),Object(l.jsxs)("p",{children:["Character: ",n]})]})]},e)}))})})}}}]);
//# sourceMappingURL=7.3404d5dd.chunk.js.map