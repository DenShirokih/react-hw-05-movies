"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[133],{8183:function(t,n,e){e.d(n,{Hg:function(){return f},Jh:function(){return w},V0:function(){return x},bV:function(){return o},jf:function(){return l},u:function(){return v}});var r=e(5861),a=e(4687),u=e.n(a),c=e(4569),i=e.n(c),o="https://image.tmdb.org/t/p/w500";i().defaults.baseURL="https://api.themoviedb.org/3";var s="bc1d8643395b3b7e7b983675d8b7669b",p="&language=uk";function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/week?api_key=".concat(s,"&").concat(p));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=").concat(s,"&").concat(p));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(n,"/credits?api_key=").concat(s,"&").concat(p));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},8133:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,u,c,i=e(5861),o=e(885),s=e(4687),p=e.n(s),f=e(2791),h=e(6871),v=e(8183),d=e(168),l=e(2499),m=l.Z.div(r||(r=(0,d.Z)(["\n  max-width: 1300px;\n  margin: 0 auto;\n"]))),w=l.Z.div(a||(a=(0,d.Z)(["\n  margin-bottom: 15px;\n"]))),g=l.Z.h4(u||(u=(0,d.Z)(["\n  margin-bottom: 5px;\n"]))),x=l.Z.p(c||(c=(0,d.Z)([""]))),b=e(184),k=function(t){var n=t.author,e=t.content;return(0,b.jsxs)(w,{children:[(0,b.jsx)(g,{children:n}),(0,b.jsx)(x,{children:e})]})},y=function(){var t=function(){var t=(0,f.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],a=(0,f.useState)(!1),u=(0,o.Z)(a,2),c=u[0],s=u[1],d=(0,h.UO)().movieId;return(0,f.useEffect)((function(){function t(){return(t=(0,i.Z)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,(0,v.Jh)(d);case 4:n=t.sent,r(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message,"ERROR by useFatchReviewsOfTheFilm");case 11:return t.prev=11,s(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[d]),{reviews:e,isLoading:c}}(),n=t.reviews;return(0,b.jsx)(m,{children:n.map((function(t){var n=t.author,e=t.id,r=t.content;return(0,b.jsx)(k,{author:n,content:r},e)}))})}}}]);
//# sourceMappingURL=133.04ab02da.chunk.js.map