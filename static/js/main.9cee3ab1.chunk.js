(this.webpackJsonpmeetapp=this.webpackJsonpmeetapp||[]).push([[0],{206:function(e,t,n){},209:function(e,t,n){},361:function(e,t,n){},363:function(e,t,n){},364:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(69),c=n.n(o),s=(n(206),n(28)),i=n.n(s),l=n(54),u=n(25),d=n(34),h=n(26),f=n(27),m=n(92),p=n(174),b=n.n(p),j=n(375),v=n(377),g=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],x=n(2),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).mockData=JSON.parse(JSON.stringify(g)),a.state={opened:!1,mockData:"",event:{}},a.toggleBox=a.toggleBox.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"toggleBox",value:function(){var e=this.state.opened;this.setState({opened:!e})}},{key:"render",value:function(){var e=this.props,t=e.btnText,n=e.event,a=this.state.opened,r=b()(n.start.dateTime).format("MMMM Do YYYY, h:mm a");return t=a?"Hide Details":"View Details",Object(x.jsx)(j.a,{children:Object(x.jsxs)(j.a.Body,{children:[Object(x.jsxs)(j.a.Title,{children:[n.summary," "]}),Object(x.jsx)(j.a.Subtitle,{className:"mb-2 text-muted",children:"".concat(r)}),Object(x.jsx)(j.a.Text,{children:n.location}),Object(x.jsx)("div",{className:"ToggleButtonWrapper",children:Object(x.jsx)(v.a,{variant:"link",className:"ToggleButton",onClick:this.toggleBox,children:t})}),a&&Object(x.jsx)(j.a.Text,{className:"eventDetails",children:n.description})]})})}}]),n}(a.Component),w=n(365),y=n(366),k=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(x.jsx)(w.a,{className:"mt-3",children:Object(x.jsx)(y.a,{md:12,children:Object(x.jsx)("ul",{className:"EventList",children:e&&e.map((function(e){return Object(x.jsx)("li",{className:"EventItem",children:Object(x.jsx)(O,{event:e})},e.id)}))})})})}}]),n}(a.Component),S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Alert",children:Object(x.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),T=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="goldenrod",a}return n}(S),N=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(S),E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#f8a01f",a}return n}(S),C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"There are no matches for ".concat(n,". Try again.")}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"CitySearch",children:[Object(x.jsx)("p",{children:"Search your city"}),Object(x.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(x.jsx)("div",{children:Object(x.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[Object(x.jsx)("b",{children:Object(x.jsx)(T,{className:"InfoAlert",text:this.state.infoText})}),this.state.suggestions.map((function(t){return Object(x.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(x.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(x.jsx)("b",{children:"See all cities"})})]})})]})}}]),n}(a.Component),W=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:12,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;if(n<=0||n>99)return e.setState({errorText:"Please enter a number between 0 and 99",numberOfEvents:""});e.setState({numberOfEvents:n,errorText:""}),e.props.updateEventCount(t.target.value)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"Limit search results "}),Object(x.jsx)("input",{type:"number",id:"numberInput",value:this.state.numberOfEvents,className:"numberInput",onChange:function(t){return e.handleInputChanged(t)}}),Object(x.jsx)("div",{className:"errorText",children:Object(x.jsx)(N,{text:this.state.errorText})})]})}}]),n}(a.Component);n(209);var Z=function(e){return e.showWelcomeScreen?Object(x.jsxs)("div",{className:"WelcomeScreen",children:[Object(x.jsx)("h2",{children:"Welcome to the Meet app"}),Object(x.jsx)("h5",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(x.jsx)("div",{className:"button_cont",align:"center",children:Object(x.jsxs)("div",{class:"google-btn",children:[Object(x.jsx)("div",{class:"google-icon-wrapper",children:Object(x.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(x.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"login-btn-text",children:Object(x.jsx)("b",{children:"Sign in with google"})})]})}),Object(x.jsx)("a",{href:"https://jonroel.github.io/meetapp/privacy.html",rel:"nofollow noopener",children:"Privacy policy"}),"  |  ",Object(x.jsx)("a",{href:"https://github.com/JonRoel/meetapp",children:"See on GitHub"})]}):null},I=n(19),M=n(367),A=n(376),J=n(187),L=n(97),B=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(I.a)(n,2),o=r[0],c=r[1],s=["#d0427f","#f8a01f","#528272","#f15f4b","#7dbeb8","#5c69a0"];Object(a.useEffect)((function(){c((function(){return i()}))}),[t]);var i=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(x.jsx)(M.a,{height:400,children:Object(x.jsx)(A.a,{children:Object(x.jsx)(J.a,{data:o,cx:200,cy:200,labelLine:!0,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(x.jsx)(L.a,{fill:s[t]},"cell-".concat(t))}))})})})},D=n(371),R=n(195),U=n(125),q=n.n(U),z=n(80),F=n.n(z),H=function(e){var t=e.map((function(e){return e.location}));return Object(R.a)(new Set(t))},Y=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},G=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://m6fz8imtyl.execute-api.us-east-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return F.a.done(),e.abrupt("return",g);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),F.a.done(),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=12,V();case 12:if(!(n=e.sent)){e.next=22;break}return _(),a="https://m6fz8imtyl.execute-api.us-east-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=18,q.a.get(a);case 18:return(r=e.sent).data&&(o=H(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),F.a.done(),e.abrupt("return",r.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Y(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,q.a.get("https://m6fz8imtyl.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&G(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=n(372),X=n(373),Q=n(192),$=n(193),ee=n(81),te=n(196),ne=(n(361),n(362),n(363),n.p+"static/media/logo.75c3727e.png"),ae=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:12,showWelcomeScreen:void 0},e.updateEvents=function(t){P().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r)})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,Y(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&P().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:H(e)}),navigator.onLine?o.setState({networkText:""}):(o.setState({networkText:Object(x.jsx)("div",{className:"networkNotification",children:"'Network error, the events you are viewing may be out of date. To make sure you are viewing the latest information, make sure you are connected to the internet'"})}),console.log("offline mode"))}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){if(void 0===this.state.showWelcomeScreen)return Object(x.jsx)("div",{className:"App"});var e=this.state,t=e.locations,n=e.events,a=e.numberOfEvents,r=e.networkText;return Object(x.jsxs)(D.a,{className:"App",children:[Object(x.jsx)(w.a,{className:"text-white",children:Object(x.jsxs)(y.a,{md:12,children:[Object(x.jsx)("img",{height:"60px",src:ne,alt:"Logo"}),Object(x.jsx)("h4",{children:"Your source for local events"})]})}),Object(x.jsxs)(w.a,{children:[Object(x.jsx)(y.a,{className:"CitySearchWrapper",md:6,children:Object(x.jsx)(C,{locations:t,updateEvents:this.updateEvents})}),Object(x.jsx)(y.a,{className:"NumberInputWrapper",md:6,children:Object(x.jsx)(W,{numberOfEvents:a,updateEventCount:this.updateEventCount})})]}),Object(x.jsx)(w.a,{children:Object(x.jsx)(y.a,{children:Object(x.jsx)(E,{text:r})})}),Object(x.jsx)(w.a,{children:Object(x.jsxs)(y.a,{md:12,className:"chartWrapper",children:[Object(x.jsx)("h4",{children:"Events in each city"}),Object(x.jsxs)("div",{className:"data-vis-wrapper",children:[Object(x.jsx)(B,{events:n}),Object(x.jsx)(M.a,{height:400,children:Object(x.jsxs)(K.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(x.jsx)(X.a,{}),Object(x.jsx)(Q.a,{type:"category",dataKey:"city",name:"City"}),Object(x.jsx)($.a,{type:"number",dataKey:"number",name:"Number of events"}),Object(x.jsx)(ee.a,{cursor:{strokeDasharray:"3 3"}}),Object(x.jsx)(te.a,{data:this.getData(),fill:"#8884d8"})]})})]})]})}),Object(x.jsx)(w.a,{children:Object(x.jsx)(y.a,{md:12,children:Object(x.jsx)(k,{events:n})})}),Object(x.jsx)(w.a,{children:Object(x.jsx)(y.a,{md:12,children:Object(x.jsx)(Z,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){V()}})})})]})}}]),n}(a.Component),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,378)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},se=n(126);se.config("3c7bfb6934964c28a852f9fa1dd99930").install(),c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(ae,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetapp","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):oe(t,e)}))}}(),ce(),se.config("3c7bfb6934964c28a852f9fa1dd99930").install()}},[[364,1,2]]]);
//# sourceMappingURL=main.9cee3ab1.chunk.js.map