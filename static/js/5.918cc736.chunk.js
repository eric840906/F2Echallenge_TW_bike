(this.webpackJsonpbike=this.webpackJsonpbike||[]).push([[5],{126:function(t,e,n){"use strict";var a=n(73);e.a=function(t){var e=Object(a.a)();return{successToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"success",duration:3e3,isClosable:!0})},warningToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"warning",duration:3e3,isClosable:!0})},infoToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"error",duration:3e3,isClosable:!0})},errorToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"error",duration:3e3,isClosable:!0})}}}},129:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxW:"100px"}},131:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(30),o=n(64),r=n(1),c=n.p+"static/media/default.ca1990dc.svg",i=n.p+"static/media/flag.a2df00b5.svg",s=n.p+"static/media/crosshair.a8fe395c.svg",l=n(135),u=n(133),b=n(6),d={width:"100%",height:"100%"},p=function(t){var e=t.lat,n=t.lng,p=t.nearbySpots,j=t.routePath,f=t.mode,O=void 0===f?"default":f,x=Object(r.useState)(null),h=Object(a.a)(x,2),g=h[0],m=h[1],v=Object(l.e)({id:"google-map-script",googleMapsApiKey:"AIzaSyDt-oZ5eKw7KUb_zG0At9Hlq82SvW_q6ZY"}).isLoaded,w=Object(r.useState)(null),y=Object(a.a)(w,2),S=y[0],k=y[1];Object(r.useEffect)((function(){j&&k(j.Geometry.replace(/[A-Z'()']{1}/gm,"").trim().split(",").reduce((function(t,e){var n=e.split(" ");return[].concat(Object(u.a)(t),[{lat:1*n[1],lng:1*n[0]}])}),[]))}),[j]),Object(r.useEffect)((function(){S&&g.panTo(S[0])}),[S]);var C;return v&&e?Object(b.jsx)(o.e,{flex:1,w:"100%",overflow:"hidden",children:Object(b.jsxs)(l.a,{mapContainerStyle:d,zoom:15,onLoad:function(t){console.log(t),m(t),t.setCenter({lat:e,lng:n})},options:{gestureHandling:"greedy",zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1},children:[p&&(C=p,C&&C.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsx)(l.c,{position:{lat:t.StationPosition.PositionLat,lng:t.StationPosition.PositionLon},options:{icon:{url:c}}})},t.StationID)}))),p&&function(t){return t&&t.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsx)(l.b,{position:{lat:t.StationPosition.PositionLat,lng:t.StationPosition.PositionLon},options:{closeBoxURL:"",alignBottom:!0,pixelOffset:new window.google.maps.Size(-14.3,-12)},children:Object(b.jsx)(o.e,{transition:"all 0.5s ease",bg:"default"===O?"brand.yellow":"black",color:"default"===O?"black":"brand.yellow",justifyContent:"center",alignItems:"center",borderRadius:"100%",w:"28px",h:"28px",children:Object(b.jsx)(o.h,{fontWeight:"700",children:"default"===O?t.AvailableRentBikes:t.AvailableReturnBikes})})})},t.StationID)}))}(p),Object(b.jsx)(l.d,{onLoad:function(t){console.log("polyline: ",t)},path:S,options:{strokeColor:"#000000",strokeOpacity:.6,strokeWeight:5,fillColor:"#000000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:3e4,zIndex:1}}),S&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.c,{position:{lat:S[0].lat,lng:S[0].lng},options:{icon:{url:s}}}),Object(b.jsx)(l.c,{position:{lat:S[S.length-1].lat,lng:S[S.length-1].lng},options:{icon:{url:i}}})]})]})}):Object(b.jsx)(b.Fragment,{})},j=Object(r.memo)(p)},132:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return x})),n.d(e,"c",(function(){return h}));var a=n(124),o=n.n(a),r=n(125),c=n(30),i=n(1),s=n(139),l=n.n(s),u=n(148),b=function(){var t=(new Date).toGMTString(),e=new u.a("SHA-1","TEXT");return e.setHMACKey("W3Xh3Nu_xQlCw7EY5CctQegleQ0","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="8d1f8b7eeb79421ba1ed2914848b717d", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}},d=l.a.create({headers:b(),baseURL:"https://ptx.transportdata.tw/MOTC/v2/Bike/"}),p=l.a.create({headers:b(),baseURL:"https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape"}),j=n(126),f=function(){var t=Object(i.useState)(null),e=Object(c.a)(t,2),n=e[0],a=e[1],s=Object(j.a)("error").errorToast,l=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,c,i,l,u,b;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.option,r=e.city,c=e.lat,i=e.lng,l="nearby"===n?"Station/NearBy?$top=30&$spatialFilter=nearby(".concat(c,", ").concat(i,", 1000)&$format=JSON"):"Station/".concat(r,"?$top=30&$format=JSON"),t.prev=2,t.next=5,d.get(l);case 5:u=t.sent,b=u.data,a(b),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),s("\u6b0a\u9650\u5230\u671f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u5f8c\u518d\u8a66\u4e00\u6b21");case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return[n,l]},O=function(){var t=Object(i.useState)([]),e=Object(c.a)(t,2),n=e[0],a=e[1],s=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,c,i,s,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.option,r=e.city,c=e.lat,i=e.lng,s="nearby"===n?"Availability/NearBy?$top=30&$spatialFilter=nearby(".concat(c,", ").concat(i,", 1000)&$format=JSON"):"Availability/".concat(r,"?$top=30&$format=JSON"),t.prev=2,t.next=5,d.get(s);case 5:l=t.sent,u=l.data,a(u),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return[n,s]},x=function(){var t=Object(i.useState)(null),e=Object(c.a)(t,2),n=e[0],a=e[1],o=Object(i.useState)(null),r=Object(c.a)(o,2),s=r[0],l=r[1],u=Object(i.useState)(null),b=Object(c.a)(u,2),d=b[0],p=b[1],j=function(t){var e=t.coords;a(e.latitude),l(e.longitude)},f=function(t){p(t.message)};return Object(i.useEffect)((function(){var t=navigator.geolocation,e=t.watchPosition(j,f);if(t)return function(){return t.clearWatch(e)};p("Geolocation is not supported")}),[]),[n,s,d]},h=function(){var t=Object(i.useState)([]),e=Object(c.a)(t,2),n=e[0],a=e[1],s=Object(j.a)("error").errorToast,l=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,c,i,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.city,r=e.skip,c=r?"$skip=".concat(r):"","$top=30&$format=JSON",i="".concat(n,"?").concat(c,"&").concat("$top=30&$format=JSON"),t.prev=4,t.next=7,p.get(i);case 7:l=t.sent,u=l.data,a(u),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),s("\u6b0a\u9650\u5230\u671f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u5f8c\u518d\u8a66\u4e00\u6b21");case 15:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return[n,l]}},134:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(44),o=n(64),r=n(66),c=n(8),i=n(130),s=n(60),l=n(129),u=n(6),b=function(t){var e=t.onHamburgerClick,n=t.children,b=t.routeName,d=Object(c.g)(),p=Object(c.f)().pathname;return Object(u.jsxs)(o.e,{position:"sticky",zIndex:"sticky",top:"0",bg:"brand.yellow",boxShadow:"sm",w:"100%",alignItems:"center",py:5,px:10,color:"white",minH:"80px",children:[Object(u.jsx)(i.a,{display:{base:"block",md:"none"},color:"brand.black",position:"absolute",left:"10px",h:10,w:10,onClick:function(){return d("/")}}),Object(u.jsx)(o.e,{alignSelf:"center",cursor:"pointer",onClick:function(){return d("/")},display:{base:"none",md:"block"},children:Object(u.jsx)(s.a,{})}),b&&Object(u.jsx)(o.g,Object(a.a)(Object(a.a)({},l.a),{},{maxW:{base:"250px",md:"500px"},size:"sm",color:"black",m:"auto",children:b})),n,"/nearbybike"!==p&&Object(u.jsx)(r.a,{variant:"default",marginLeft:"auto",boxShadow:"none",w:"40px",h:"40px",onClick:e,size:"sm",children:Object(u.jsx)(i.b,{w:5,h:5})})]})}},177:function(t,e,n){"use strict";n.r(e);var a=n(30),o=n(1),r=n(64),c=n(72),i=n(76),s=n(66),l=n(130),u=n(131),b=n(132),d=function(t,e,n){var a=t.concat(e).reduce((function(t,e){return t[e[n]]=Object.assign(t[e[n]]||{},e),t}),{});return Object.keys(a).map((function(t){return a[t]}))},p=n(134),j=n(44),f=n(31),O=n(172),x=n(149),h=n(6),g=function(t){var e=t.onClick,n=t.mapMode,a=t.rwdStyle;return Object(h.jsxs)(s.a,Object(j.a)(Object(j.a)({},a),{},{onClick:e,bg:"white",position:"relative",borderRadius:"999px",children:[Object(h.jsxs)(r.e,{letterSpacing:"15px",alignItems:"center",zIndex:3,gridGap:"10px",color:"default"===n?"brand.yellow":"brand.black",transition:"0.5s color ease",children:[Object(h.jsx)(f.a,{as:O.a,verticalAlign:"center",h:6,w:6}),Object(h.jsx)(r.h,{children:"\u79df\u8eca"})]}),Object(h.jsx)(r.b,{w:"50px",padding:"3px",h:"auto",bg:"brand.100",borderRadius:"20px",children:Object(h.jsx)(r.c,{w:"50%",h:"100%",borderRadius:"999px",bg:"brand.black",transition:"all 0.5s ease",position:"absolute",top:0,left:0,zIndex:2,transform:"default"===n?"translateX(0)":"translateX(100%)"})}),Object(h.jsxs)(r.e,{letterSpacing:"15px",alignItems:"center",transition:"0.5s color ease",color:"default"===n?"brand.black":"brand.yellow",zIndex:3,gridGap:"10px",children:[Object(h.jsx)(f.a,{as:x.b,verticalAlign:"center",h:6,w:6}),Object(h.jsx)(r.h,{children:"\u9084\u8eca"})]})]}))},m=n(126);e.default=function(){var t=Object(o.useRef)(null),e=Object(b.b)(),n=Object(a.a)(e,3),j=n[0],f=n[1],O=n[2],x=Object(b.d)(),v=Object(a.a)(x,2),w=v[0],y=v[1],S=Object(b.a)(),k=Object(a.a)(S,2),C=k[0],A=k[1],T=Object(o.useState)(""),z=Object(a.a)(T,2),$=z[0],I=z[1],L=Object(o.useState)("default"),N=Object(a.a)(L,2),R=N[0],E=N[1],P=Object(m.a)("9527").errorToast,D=function(){if("default"===R)return E("park");E("default")};Object(o.useEffect)((function(){j&&f&&(y({option:"nearby",lat:j,lng:f}),A({option:"nearby",lat:j,lng:f}))}),[j,f]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(r.e,{flexDirection:"column",h:"100vh",children:[Object(h.jsxs)(p.a,{children:[Object(h.jsx)(r.g,{color:"brand.black",size:"sm",m:"auto",children:$||"\u60a8\u9644\u8fd1\u7684\u7ad9\u9ede"}),Object(h.jsx)(g,{onClick:D,mapMode:R,rwdStyle:{display:{base:"none",md:"flex"}}})]}),Object(h.jsx)(r.b,{as:"form",display:"flex",w:"300px",position:"absolute",zIndex:10,top:"18%",left:"50%",transform:"translate(-50%, -50%)",onSubmit:function(e){e.preventDefault(),I(t.current.value),P("NOT READY YET")},children:Object(h.jsxs)(c.a,{display:"flex",gridGap:"6px",children:[Object(h.jsx)(i.a,{ref:t,placeholder:"\u641c\u5c0b\u7ad9\u9ede",bg:"brand.white"}),Object(h.jsx)(s.b,{type:"submit",color:"white",background:"brand.black","aria-label":"Search database",icon:Object(h.jsx)(l.c,{}),onFocus:function(){return document.activeElement.blur()}})]})}),O?Object(h.jsx)(r.h,{children:O}):j&&Object(h.jsx)(u.a,{mode:R,lat:j,lng:f,nearbySpots:w&&C&&d(w,C,"StationID")}),Object(h.jsx)(r.e,{bg:"brand.yellow",display:{base:"flex",md:"none"},justifyContent:"center",children:Object(h.jsx)(g,{onClick:D,mapMode:R,rwdStyle:{display:{base:"flex",md:"none"},w:"300px"}})})]})})}}}]);
//# sourceMappingURL=5.918cc736.chunk.js.map