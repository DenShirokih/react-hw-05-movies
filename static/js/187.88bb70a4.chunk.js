"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[187],{8183:function(n,t,e){e.d(t,{Hg:function(){return f},Jh:function(){return g},V0:function(){return w},bV:function(){return s},jf:function(){return v},u:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),u=e(4569),i=e.n(u),s="https://image.tmdb.org/t/p/w500";i().defaults.baseURL="https://api.themoviedb.org/3";var o="bc1d8643395b3b7e7b983675d8b7669b",p="&language=uk";function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/week?api_key=".concat(o,"&").concat(p));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(o,"&").concat(p));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/credits?api_key=").concat(o,"&").concat(p));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},1187:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,u,i=e(5861),s=e(885),o=e(4687),p=e.n(o),f=e(8183),h=e(2791),l=e(6871),d=e(168),v=e(2499),m=v.Z.img(r||(r=(0,d.Z)(["\n  width: 120px;\n  margin: 0 auto;\n"]))),g=v.Z.h3(a||(a=(0,d.Z)(["\n  text-align: center;\n"]))),x=v.Z.div(c||(c=(0,d.Z)(["\n  width: 150px;\n  display: block;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),w=e(184),b=function(n){var t=n.profile_path,e=n.name,r=n.character;return(0,w.jsxs)(x,{children:[(0,w.jsx)(m,{src:t?"".concat(f.bV+t):"https://img.icons8.com/ios/452/user-not-found.png",alt:e}),(0,w.jsx)(g,{children:e}),(0,w.jsx)("p",{children:r})]})},k=v.Z.div(u||(u=(0,d.Z)(["\n  max-width: 1300px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),y=function(n){var t=n.cast;n.isLoading;return(0,w.jsx)(k,{children:t.map((function(n){var t=n.cast_id,e=n.profile_path,r=n.name,a=n.character;return(0,w.jsx)(b,{profile_path:e,name:r,character:a},t)}))})},Z=function(){var n=function(){var n=(0,h.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,h.useState)(!1),c=(0,s.Z)(a,2),u=c[0],o=c[1],d=(0,l.UO)().movieId;return(0,h.useEffect)((function(){function n(){return(n=(0,i.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,(0,f.jf)(d);case 4:t=n.sent,r(t.cast),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,o(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[d]),{cast:e,isLoading:u}}(),t=n.cast,e=n.isLoading;return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(y,{cast:t,isLoading:e})})}}}]);
//# sourceMappingURL=187.88bb70a4.chunk.js.map