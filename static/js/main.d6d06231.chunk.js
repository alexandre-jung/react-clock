(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(3),o=n.n(r),s=(n(12),n(13),n(4)),a=n(5),u=n(7),l=n(6),d=(n(14),n(0)),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).tick=function(){var t=new Date;c.setState({hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()})},c.state={},c.timerId=null,c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.tick(),this.timerId=setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,e=t.hours,c=t.minutes,i=t.seconds;return Object(d.jsxs)("div",{className:"Clock",children:[n.padZero(e),":",n.padZero(c),":",n.padZero(i)]})}}],[{key:"padZero",value:function(t){return Number.isNaN(t=parseInt(t,10))?"--":t.toString().padStart(2,"0")}}]),n}(i.a.Component);var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.d6d06231.chunk.js.map