"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{2661:function(n,t,e){e.d(t,{B:function(){return c}});var r,a=e(168),i=e(6444).ZP.p(r||(r=(0,a.Z)(["\n  margin-top: 100px;\n  text-align: center;\n  color: red;\n  font-size: 26px;\n  font-weight: 500;\n\n  span{\ncolor: #010101;\nfont-size: 20px;\n  }\n"]))),s=e(184),c=function(n){var t=n.message;return(0,s.jsxs)(i,{children:["Oops! Something does wrong! ",(0,s.jsx)("br",{})," ",(0,s.jsxs)("span",{children:["(",t,")"]})]})}},3174:function(n,t,e){e.d(t,{O:function(){return u}});var r,a=e(7689),i=e(1087),s=e(168),c=e(6444).ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 1280px;\n  padding-right: 24px;\n  padding-left: 24px;\n  margin: 0 auto;\n  list-style: none;\n\n  .movie-item {\n    width: calc((100% - 80px) / 5);\n    border-radius: 4px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    > a {\n      text-decoration: none;\n    }\n  }\n  .movie-item:hover {\n    scale: 1.03;\n  }\n\n  .movie-img {\n    width: 100%;\n    height: auto;\n    object-fit: cover;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .title {\n    padding: 0 5px;\n    font-weight: 500;\n    color: #010101;\n  }\n"]))),o=e(184),u=function(n){var t=n.movies,e=Array.isArray(t)&&t.length,r=(0,a.TH)();return(0,o.jsx)(c,{children:e&&t.map((function(n){var t=n.id,e=n.title,a=n.poster_path;return(0,o.jsx)("li",{className:"movie-item",children:(0,o.jsxs)(i.rU,{className:"movie-link",state:{from:r},to:"/movies/".concat(t),children:[(0,o.jsx)("img",{className:"movie-img",src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,o.jsx)("p",{className:"title",children:e})]})},t)}))})}},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),i=e(7757),s=e.n(i),c=e(2791),o=e(409),u=e(3174),p=e(9053),f=e(2661),l=e(184);t.default=function(){var n=(0,c.useState)(null),t=(0,a.Z)(n,2),e=t[0],i=t[1],d=(0,c.useState)(!1),x=(0,a.Z)(d,2),m=x[0],h=x[1],v=(0,c.useState)(null),g=(0,a.Z)(v,2),w=g[0],b=g[1];return(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var t,e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,o.cu)();case 4:t=n.sent,e=t.results,i(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),b(n.t0.message);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)("div",{className:"home-page",children:[(0,l.jsx)("h1",{className:"main-title",children:"Trending today"}),m&&(0,l.jsx)(p.Z,{}),w&&(0,l.jsx)(f.B,{message:w}),e&&(0,l.jsx)(u.O,{movies:e})]})}},409:function(n,t,e){e.d(t,{Bt:function(){return f},DD:function(){return u},Ny:function(){return o},cu:function(){return c},y:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),s=e(5294);s.Z.defaults.params={api_key:"91faadec5932527447e5330550c607bc"};var c=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.8bec4e4a.chunk.js.map