(this.webpackJsonpbike=this.webpackJsonpbike||[]).push([[5],{128:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxW:"100px"}},130:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n(30),o=n(64),r=n(1),i=n.p+"static/media/default.d8e6aa9f.svg",c=n.p+"static/media/marker2.4fa01efe.svg",s=n.p+"static/media/flag.a2df00b5.svg",l=n.p+"static/media/crosshair.a8fe395c.svg",u=n(8),b=n(134),d=n(132),p=n(6),j={width:"100%",height:"100%"},f=function(t){var e=t.lat,n=t.lng,f=t.nearbySpots,O=t.routePath,x=t.mode,h=void 0===x?"default":x,g=Object(u.f)().pathname,m=Object(r.useState)(null),v=Object(a.a)(m,2),y=v[0],k=v[1],w=Object(r.useState)(null),S=Object(a.a)(w,2),C=S[0],A=S[1],T=Object(b.f)({id:"google-map-script",googleMapsApiKey:"AIzaSyDt-oZ5eKw7KUb_zG0At9Hlq82SvW_q6ZY"}).isLoaded,P=Object(r.useState)(null),$=Object(a.a)(P,2),z=$[0],L=$[1];Object(r.useEffect)((function(){O&&L(O.Geometry.replace(/[A-Z'()']{1}/gm,"").trim().split(",").reduce((function(t,e){var n=e.split(" ");return[].concat(Object(d.a)(t),[{lat:1*n[1],lng:1*n[0]}])}),[]))}),[O]),Object(r.useEffect)((function(){z&&y.panTo(z[0])}),[z]);var N;return T&&e?Object(p.jsx)(o.e,{flex:1,w:"100%",overflow:"hidden",children:Object(p.jsxs)(b.a,{mapContainerStyle:j,zoom:15,onLoad:function(t){k(t),t.setCenter({lat:e,lng:n})},options:{gestureHandling:"greedy",zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},children:["/nearbybike"===g&&Object(p.jsx)(b.c,{position:{lat:e,lng:n},options:{draggable:!0},onDragEnd:function(t){return console.log(t.latLng.toJSON())}}),f&&(N=f,N&&Object(p.jsx)(b.d,{children:function(t){return N.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(b.c,{clusterer:t,position:{lat:e.StationPosition.PositionLat,lng:e.StationPosition.PositionLon},options:{icon:{url:"default"===h?i:c,labelOrigin:new window.google.maps.Point(20,19)},label:{text:"default"===h?e.AvailableRentBikes+"":e.AvailableReturnBikes+"",fontSize:"20px",color:"default"===h?"#000000":"#fed801"}},onClick:function(){A(e),console.log(C),y.panTo({lat:e.StationPosition.PositionLat,lng:e.StationPosition.PositionLon})}})},e.StationID)}))}})),C&&Object(p.jsx)(b.b,{position:{lat:C.StationPosition.PositionLat,lng:C.StationPosition.PositionLon},onCloseClick:function(){return A(null)},children:Object(p.jsxs)(o.e,{flexDirection:"column",gridGap:"20px",pr:"12px",pb:"12px",fontWeight:"700",children:[Object(p.jsx)(o.h,{children:C.StationName.Zh_tw}),Object(p.jsxs)(o.e,{justifyContent:"center",gridGap:2,children:[Object(p.jsxs)(o.e,{flexDirection:"column",background:"brand.yellow",color:"brand.black",borderRadius:"5px",p:2,children:[Object(p.jsx)(o.h,{children:"\u5269\u9918\u8eca\u8f1b"}),Object(p.jsx)(o.h,{children:C.AvailableRentBikes})]}),Object(p.jsxs)(o.e,{flexDirection:"column",background:"brand.black",color:"brand.yellow",borderRadius:"5px",p:2,children:[Object(p.jsx)(o.h,{children:"\u53ef\u505c\u8eca\u4f4d"}),Object(p.jsx)(o.h,{children:C.AvailableReturnBikes})]})]})]})}),Object(p.jsx)(b.e,{onLoad:function(t){console.log("polyline: ",t)},path:z,options:{strokeColor:"#000000",strokeOpacity:.6,strokeWeight:5,fillColor:"#000000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:3e4,zIndex:1}}),z&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.c,{position:{lat:z[0].lat,lng:z[0].lng},options:{icon:{url:l}}}),Object(p.jsx)(b.c,{position:{lat:z[z.length-1].lat,lng:z[z.length-1].lng},options:{icon:{url:s}}})]})]})}):Object(p.jsx)(p.Fragment,{})},O=Object(r.memo)(f)},131:function(t,e,n){"use strict";n.d(e,"d",(function(){return O})),n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return g}));var a=n(124),o=n.n(a),r=n(125),i=n(30),c=n(1),s=n(138),l=n.n(s),u=n(147),b=function(){var t=(new Date).toGMTString(),e=new u.a("SHA-1","TEXT");return e.setHMACKey("W3Xh3Nu_xQlCw7EY5CctQegleQ0","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="8d1f8b7eeb79421ba1ed2914848b717d", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}},d=l.a.create({headers:b(),baseURL:"https://ptx.transportdata.tw/MOTC/v2/Bike/"}),p=l.a.create({headers:b(),baseURL:"https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape"}),j=n(72),f=function(t){var e=Object(j.a)();return{successToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"success",duration:3e3,isClosable:!0})},warningToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"warning",duration:3e3,isClosable:!0})},infoToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"error",duration:3e3,isClosable:!0})},errorToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"error",duration:3e3,isClosable:!0})}}},O=function(){var t=Object(c.useState)(null),e=Object(i.a)(t,2),n=e[0],a=e[1],s=f("error").errorToast,l=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,i,c,l,u,b;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.option,r=e.city,i=e.lat,c=e.lng,l="nearby"===n?"Station/NearBy?$top=30&$spatialFilter=nearby(".concat(i,", ").concat(c,", 1000)&$format=JSON"):"Station/".concat(r,"?$top=30&$format=JSON"),t.prev=2,t.next=5,d.get(l);case 5:u=t.sent,b=u.data,a(b),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),s("\u6b0a\u9650\u5230\u671f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u5f8c\u518d\u8a66\u4e00\u6b21");case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return[n,l]},x=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],s=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,i,c,s,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.option,r=e.city,i=e.lat,c=e.lng,s="nearby"===n?"Availability/NearBy?$top=30&$spatialFilter=nearby(".concat(i,", ").concat(c,", 1000)&$format=JSON"):"Availability/".concat(r,"?$top=30&$format=JSON"),t.prev=2,t.next=5,d.get(s);case 5:l=t.sent,u=l.data,a(u),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return[n,s]},h=function(){var t=Object(c.useState)(null),e=Object(i.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(null),r=Object(i.a)(o,2),s=r[0],l=r[1],u=Object(c.useState)(null),b=Object(i.a)(u,2),d=b[0],p=b[1],j=function(t){var e=t.coords;a(e.latitude),l(e.longitude)},f=function(t){p(t.message)};return Object(c.useEffect)((function(){var t=navigator.geolocation,e=t.watchPosition(j,f);if(t)return function(){return t.clearWatch(e)};p("Geolocation is not supported")}),[]),[n,s,d]},g=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],s=f("error").errorToast,l=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,i,c,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.city,r=e.skip,i=r?"$skip=".concat(r):"","$top=30&$format=JSON",c="".concat(n,"?").concat(i,"&").concat("$top=30&$format=JSON"),t.prev=4,t.next=7,p.get(c);case 7:l=t.sent,u=l.data,a(u),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),s("\u6b0a\u9650\u5230\u671f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u5f8c\u518d\u8a66\u4e00\u6b21");case 15:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return[n,l]}},133:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n(44),o=n(64),r=n(66),i=n(31),c=n(8),s=n(129),l=n(148),u=n(60),b=n(128),d=n(6),p=function(t){var e=t.onHamburgerClick,n=t.children,p=t.routeName,j=Object(c.g)(),f=Object(c.f)().pathname;return Object(d.jsxs)(o.e,{position:"sticky",zIndex:"sticky",top:"0",bg:"brand.yellow",boxShadow:"sm",w:"100%",alignItems:"center",py:5,px:10,color:"white",minH:"80px",justifyContent:{base:"center",md:"space-between"},children:[Object(d.jsx)(l.a,{display:{base:"block",md:"none"},color:"brand.black",position:"absolute",left:"10px",h:10,w:10,onClick:function(){return j("/")}}),Object(d.jsx)(o.e,{alignSelf:"center",cursor:"pointer",onClick:function(){return j("/")},display:{base:"none",md:"block"},children:Object(d.jsx)(u.a,{})}),p&&Object(d.jsx)(o.g,Object(a.a)(Object(a.a)({},b.a),{},{maxW:{base:"250px",md:"500px"},size:"sm",color:"black",m:"auto",children:p})),n,"/nearbybike"!==f&&Object(d.jsx)(r.a,{variant:"default",marginLeft:"auto",boxShadow:"none",w:"40px",h:"40px",onClick:e,size:"sm",children:Object(d.jsx)(i.a,{as:s.c,w:8,h:8})})]})}},176:function(t,e,n){"use strict";n.r(e);var a=n(30),o=n(1),r=n(64),i=n(130),c=n(131),s=function(t,e,n){var a=t.concat(e).reduce((function(t,e){return t[e[n]]=Object.assign(t[e[n]]||{},e),t}),{});return Object.keys(a).map((function(t){return a[t]}))},l=n(133),u=n(44),b=n(66),d=n(31),p=n(171),j=n(129),f=n(6),O=function(t){var e=t.onClick,n=t.mapMode,a=t.rwdStyle;return Object(f.jsxs)(b.a,Object(u.a)(Object(u.a)({},a),{},{onClick:e,bg:"white",position:"relative",borderRadius:"999px",children:[Object(f.jsxs)(r.e,{letterSpacing:"15px",alignItems:"center",zIndex:3,gridGap:"10px",color:"default"===n?"brand.yellow":"brand.black",transition:"0.5s color ease",children:[Object(f.jsx)(d.a,{as:p.a,verticalAlign:"center",h:6,w:6}),Object(f.jsx)(r.h,{children:"\u79df\u8eca"})]}),Object(f.jsx)(r.b,{w:"50px",padding:"3px",h:"auto",bg:"brand.100",borderRadius:"20px",children:Object(f.jsx)(r.c,{w:"50%",h:"100%",borderRadius:"999px",bg:"brand.black",transition:"all 0.5s ease",position:"absolute",top:0,left:0,zIndex:2,transform:"default"===n?"translateX(0)":"translateX(100%)"})}),Object(f.jsxs)(r.e,{letterSpacing:"15px",alignItems:"center",transition:"0.5s color ease",color:"default"===n?"brand.black":"brand.yellow",zIndex:3,gridGap:"10px",children:[Object(f.jsx)(d.a,{as:j.b,verticalAlign:"center",h:6,w:6}),Object(f.jsx)(r.h,{children:"\u9084\u8eca"})]})]}))};e.default=function(){var t=Object(c.b)(),e=Object(a.a)(t,3),n=e[0],u=e[1],b=e[2],d=Object(c.d)(),p=Object(a.a)(d,2),j=p[0],x=p[1],h=Object(c.a)(),g=Object(a.a)(h,2),m=g[0],v=g[1],y=Object(o.useState)("default"),k=Object(a.a)(y,2),w=k[0],S=k[1];return Object(o.useEffect)((function(){n&&u&&(x({option:"nearby",lat:n,lng:u}),v({option:"nearby",lat:n,lng:u}))}),[n,u]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(r.e,{flexDirection:"column",h:"100vh",children:[Object(f.jsx)(l.a,{children:Object(f.jsx)(O,{onClick:function(){if("default"===w)return S("park");S("default")},mapMode:w})}),b?Object(f.jsx)(r.h,{children:b}):n&&Object(f.jsx)(i.a,{mode:w,lat:n,lng:u,nearbySpots:j&&m&&s(j,m,"StationID")})]})})}}}]);
//# sourceMappingURL=5.8fd35a9e.chunk.js.map