(this.webpackJsonpmeetapp=this.webpackJsonpmeetapp||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),s=(n(22),n(5)),o=n(6),l=n(9),u=n(8),j=(n(23),n(32)),h=n(33),d=n(31),b=n(1),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={showText:!1},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"EventWrapper",children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(j.a.Body,{children:[Object(b.jsx)(j.a.Title,{children:"Event Title"}),Object(b.jsx)(j.a.Subtitle,{className:"mb-2 text-muted",children:"Event Location"}),Object(b.jsx)(j.a.Text,{children:"Event date and Time"}),Object(b.jsx)(h.a,{variant:"link",className:"displayMore",children:"Show Details"}),Object(b.jsx)(d.a,{className:"extraDetails",in:this.state.showText,children:Object(b.jsx)("div",{children:Object(b.jsx)(j.a.Text,{children:"Event Description"})})})]})})})}}]),n}(a.Component),O=n(30),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsxs)(O.a,{children:[Object(b.jsx)("div",{children:"Current Events"}),Object(b.jsx)("ul",{className:"EventList",children:e&&e.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(p,{event:e})},e.id)}))})]})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)("input",{type:"text",id:"citySearch",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(b.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{children:Object(b.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={query:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"CitySearch",children:Object(b.jsx)("input",{type:"text",id:"numberInput",className:"numberInput",value:this.state.query,onChange:this.handleInputChanged})})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"This meetup app should render"}),Object(b.jsx)(x,{}),Object(b.jsx)(m,{}),Object(b.jsx)(v,{})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),g()}},[[28,1,2]]]);
//# sourceMappingURL=main.3cb297d0.chunk.js.map