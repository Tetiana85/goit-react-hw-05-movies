"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{25:function(e,r,t){t.d(r,{Hu:function(){return p},JN:function(){return s},S:function(){return o},gH:function(){return f},mU:function(){return i}});var n=t(861),a=t(757),u=t.n(a),c=t(340);c.Z.defaults.params={api_key:"ad73138de9206474194ba2dc4b082b5e"},c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day",{});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r),{});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits"),{});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews"),{});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(r,"&include_adult=false&language=en-US&page=1"),{});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},168:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(25),i=t(791),o=t(689),p="Reviews_list__okdpy",f=t(184),v=function(){var e=(0,o.UO)().movieId,r=(0,i.useState)([]),t=(0,a.Z)(r,2),u=t[0],v=t[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Hu)(e);case 3:t=r.sent,v(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:p,children:u.length?u.map((function(e){var r=e.author,t=e.content,n=e.id;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",r]}),(0,f.jsx)("p",{children:t})]},n)})):(0,f.jsx)("p",{children:"We don`t have any reviews for this movie."})})})}}}]);
//# sourceMappingURL=168.9b0eb154.chunk.js.map