(this.webpackJsonpmeetapp=this.webpackJsonpmeetapp||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),s=n.n(o),c=(n(33),n(7)),i=n(8),u=n(10),l=n(9),d=(n(34),n(13)),h=n(62),m=n(63),p=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],f=n(27),v=n.n(f),b=n(1),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).mockData=JSON.parse(JSON.stringify(p)),a.state={opened:!1,mockData:"",event:{}},a.toggleBox=a.toggleBox.bind(Object(d.a)(a)),a}return Object(i.a)(n,[{key:"toggleBox",value:function(){var e=this.state.opened;this.setState({opened:!e})}},{key:"render",value:function(){var e=this.props,t=e.btnText,n=e.event,a=this.state.opened,r=v()(n.start.dateTime).format("MMMM Do YYYY, h:mm a");return t=a?"Hide Details":"View Details",Object(b.jsx)(h.a,{children:Object(b.jsxs)(h.a.Body,{children:[Object(b.jsxs)(h.a.Title,{children:[n.summary," "]}),Object(b.jsx)(h.a.Subtitle,{className:"mb-2 text-muted",children:"".concat(r)}),Object(b.jsx)(h.a.Text,{children:n.location}),Object(b.jsx)("div",{className:"ToggleButtonWrapper",children:Object(b.jsx)(m.a,{variant:"link",className:"ToggleButton",onClick:this.toggleBox,children:t})}),a&&Object(b.jsx)(h.a.Text,{className:"eventDetails",children:n.description})]})})}}]),n}(a.Component),j=n(59),w=n(60),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)(j.a,{className:"mt-3",children:Object(b.jsx)(w.a,{md:12,children:Object(b.jsx)("ul",{className:"EventList",children:e&&e.map((function(e){return Object(b.jsx)("li",{className:"EventItem",children:Object(b.jsx)(g,{event:e})},e.id)}))})})})}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)("p",{children:"Search your city"}),Object(b.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})})]})})]})}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:12},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),e.props.updateEventCount(t.target.value)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Limit search results "}),Object(b.jsx)("input",{type:"number",id:"numberInput",value:this.state.numberOfEvents,className:"numberInput",onChange:function(t){return e.handleInputChanged(t)}})]})}}]),n}(a.Component),k=n(61),T=(n(37),n(11)),S=n.n(T),Z=n(12),C=n(28),E=n(16),M=n.n(E),B=n(14),I=n.n(B),N=function(e){var t=e.map((function(e){return e.location}));return Object(C.a)(new Set(t))},J=function(){var e=Object(Z.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(Z.a)(S.a.mark((function e(t){var n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://m6fz8imtyl.execute-api.us-east-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(Z.a)(S.a.mark((function e(){var t,n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return I.a.done(),e.abrupt("return",p);case 4:return e.next=6,A();case 6:if(!(t=e.sent)){e.next=16;break}return W(),n="https://m6fz8imtyl.execute-api.us-east-2.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,M.a.get(n);case 12:return(a=e.sent).data&&(r=N(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),I.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(Z.a)(S.a.mark((function e(){var t,n,a,r,o,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,J(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,M.a.get("https://m6fz8imtyl.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&D(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=(n(57),n.p+"static/media/logo.0aafcb03.png"),R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:12},e.updateEvents=function(t){L().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r)})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,L().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:N(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.events,a=e.numberOfEvents;return Object(b.jsxs)(k.a,{className:"App",children:[Object(b.jsx)(j.a,{className:"text-white",children:Object(b.jsxs)(w.a,{md:12,children:[Object(b.jsx)("img",{height:"60px",src:q,alt:"Logo"}),Object(b.jsx)("h4",{children:"Your source for local events"})]})}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(w.a,{className:"CitySearchWrapper",md:6,children:Object(b.jsx)(O,{locations:t,updateEvents:this.updateEvents})}),Object(b.jsx)(w.a,{className:"NumberInputWrapper",md:6,children:Object(b.jsx)(x,{numberOfEvents:a,updateEventCount:this.updateEventCount})})]}),Object(b.jsx)(j.a,{children:Object(b.jsx)(w.a,{md:12,children:Object(b.jsx)(y,{events:n})})})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),U()}},[[58,1,2]]]);
//# sourceMappingURL=main.79204d91.chunk.js.map