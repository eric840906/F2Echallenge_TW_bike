(this.webpackJsonpbike=this.webpackJsonpbike||[]).push([[4],{125:function(t,e,n){"use strict";n.d(e,"d",(function(){return O})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return x}));var a=n(121),o=n.n(a),r=n(122),c=n(30),i=n(1),s=n(133),u=n.n(s),l=n(142),b=function(){var t=(new Date).toGMTString(),e=new l.a("SHA-1","TEXT");return e.setHMACKey("W3Xh3Nu_xQlCw7EY5CctQegleQ0","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="8d1f8b7eeb79421ba1ed2914848b717d", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}},f=u.a.create({headers:b(),baseURL:"https://ptx.transportdata.tw/MOTC/v2/Bike/"}),p=u.a.create({headers:b(),baseURL:"https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape"}),d=n(70),j=function(t){var e=Object(d.a)();return{successToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"success",duration:3e3,isClosable:!0})},warningToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"warning",duration:3e3,isClosable:!0})},infoToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"error",duration:3e3,isClosable:!0})},errorToast:function(n){if(!e.isActive(t))return e({id:t,title:n,position:"bottom",status:"error",duration:3e3,isClosable:!0})}}},O=function(){var t=Object(i.useState)([]),e=Object(c.a)(t,2),n=e[0],a=e[1],s=j("error").errorToast,u=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,c,i,u,l,b;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.option,r=e.city,c=e.lat,i=e.lng,u="nearby"===n?"Station/NearBy?$top=30&$spatialFilter=nearby(".concat(c,", ").concat(i,", 1000)&$format=JSON"):"Station/".concat(r,"?$top=30&$format=JSON"),t.prev=2,t.next=5,f.get(u);case 5:l=t.sent,b=l.data,a(b),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),s("\u6b0a\u9650\u5230\u671f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u5f8c\u518d\u8a66\u4e00\u6b21");case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return[n,u]},h=function(){var t=Object(i.useState)([]),e=Object(c.a)(t,2),n=e[0],a=e[1],s=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,c,i,s,u,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.option,r=e.city,c=e.lat,i=e.lng,s="nearby"===n?"Availability/NearBy?$top=30&$spatialFilter=nearby(".concat(c,", ").concat(i,", 1000)&$format=JSON"):"Availability/".concat(r,"?$top=30&$format=JSON"),t.prev=2,t.next=5,f.get(s);case 5:u=t.sent,l=u.data,a(l),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return[n,s]},g=function(){var t=Object(i.useState)(null),e=Object(c.a)(t,2),n=e[0],a=e[1],o=Object(i.useState)(null),r=Object(c.a)(o,2),s=r[0],u=r[1],l=Object(i.useState)(null),b=Object(c.a)(l,2),f=b[0],p=b[1],d=function(t){var e=t.coords;a(e.latitude),u(e.longitude)},j=function(t){p(t.message)};return Object(i.useEffect)((function(){var t=navigator.geolocation,e=t.watchPosition(d,j);if(t)return function(){return t.clearWatch(e)};p("Geolocation is not supported")}),[]),[n,s,f]},x=function(){var t=Object(i.useState)([]),e=Object(c.a)(t,2),n=e[0],a=e[1],s=j("error").errorToast,u=function(){var t=Object(r.a)(o.a.mark((function t(e){var n,r,c,i,u,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.city,r=e.skip,c=r?"$skip=".concat(r):"","$top=30&$format=JSON",i="".concat(n,"?").concat(c,"&").concat("$top=30&$format=JSON"),t.prev=4,t.next=7,p.get(i);case 7:u=t.sent,l=u.data,a(l),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),s("\u6b0a\u9650\u5230\u671f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u5f8c\u518d\u8a66\u4e00\u6b21");case 15:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return[n,u]}},126:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(30),o=n(62),r=n(1),c=n.p+"static/media/marker2.509bc30b.svg",i=n.p+"static/media/flag.a2df00b5.svg",s=n.p+"static/media/crosshair.a8fe395c.svg",u=n(129),l=n(127),b=n(6),f={width:"100%",height:"100%"},p=function(t){var e=t.lat,n=t.lng,p=t.nearbySpots,d=t.routePath,j=Object(r.useState)(null),O=Object(a.a)(j,2),h=O[0],g=O[1],x=Object(r.useState)(null),v=Object(a.a)(x,2),m=v[0],S=v[1],y=Object(u.e)({id:"google-map-script",googleMapsApiKey:"AIzaSyDt-oZ5eKw7KUb_zG0At9Hlq82SvW_q6ZY"}).isLoaded,k=Object(r.useState)(null),w=Object(a.a)(k,2),C=w[0],A=w[1];Object(r.useEffect)((function(){d&&A(d.Geometry.replace(/[A-Z'()']{1}/gm,"").trim().split(",").reduce((function(t,e){var n=e.split(" ");return[].concat(Object(l.a)(t),[{lat:1*n[1],lng:1*n[0]}])}),[]))}),[d]),Object(r.useEffect)((function(){C&&h.panTo(C[0])}),[C]);var $;return y&&e?Object(b.jsx)(o.c,{flex:1,w:"100%",overflow:"hidden",children:Object(b.jsxs)(u.a,{mapContainerStyle:f,zoom:15,onLoad:function(t){g(t),t.setCenter({lat:e,lng:n})},children:[p.length>0&&($=p,$.length>0&&$.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsx)(u.c,{position:{lat:t.StationPosition.PositionLat,lng:t.StationPosition.PositionLon},onClick:function(){S(t)},options:{icon:{url:c}}})},t.StationID)}))),m&&Object(b.jsx)(u.b,{position:{lat:m.StationPosition.PositionLat,lng:m.StationPosition.PositionLon},onCloseClick:function(t){S(null)},onLoad:function(){return console.log(123)},children:Object(b.jsxs)(o.c,{flexDirection:"column",bg:"brand.white",borderRadius:"6px",boxShadow:"xl",p:3,maxW:"300px",gridGap:1,children:[Object(b.jsx)(o.f,{fontWeight:"700",children:m.StationName.Zh_tw}),Object(b.jsxs)(o.f,{children:["\u5269\u9918\u8eca\u8f1b: ",m.AvailableRentBikes]}),Object(b.jsxs)(o.f,{children:["\u76ee\u524d\u7a7a\u4f4d: ",m.AvailableReturnBikes]})]})}),Object(b.jsx)(u.d,{onLoad:function(t){console.log("polyline: ",t)},path:C,options:{strokeColor:"#000000",strokeOpacity:.6,strokeWeight:5,fillColor:"#000000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:3e4,zIndex:1}}),C&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.c,{position:{lat:C[0].lat,lng:C[0].lng},options:{icon:{url:s}}}),Object(b.jsx)(u.c,{position:{lat:C[C.length-1].lat,lng:C[C.length-1].lng},options:{icon:{url:i}}})]})]})}):Object(b.jsx)(b.Fragment,{})},d=Object(r.memo)(p)},128:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(62),o=n(64),r=n(8),c=n(143),i=n(44),s=n(6),u=function(t){var e=t.onHamburgerClick,n=t.children,u=t.routeName,l=Object(r.g)();return Object(s.jsxs)(a.c,{position:"sticky",zIndex:"sticky",top:"0",bg:"brand.yellow",boxShadow:"sm",w:"100%",alignItems:"center",py:5,px:10,color:"white",gridGap:"5rem",minH:"80px",children:[Object(s.jsx)(a.c,{alignSelf:"center",cursor:"pointer",onClick:function(){return l("/")},display:{base:"none",md:"block"},children:Object(s.jsx)(i.a,{})}),u&&Object(s.jsx)(a.e,{size:"sm",color:"black",m:"auto",children:u}),n,Object(s.jsx)(o.a,{variant:"default",marginLeft:"auto",boxShadow:"none",w:"40px",h:"40px",onClick:e,onFocus:function(){return document.activeElement.blur()},size:"sm",children:Object(s.jsx)(c.a,{w:5,h:5})})]})}},171:function(t,e,n){"use strict";n.r(e);var a=n(30),o=n(1),r=n(62),c=n(126),i=n(125),s=function(t,e,n){var a=t.concat(e).reduce((function(t,e){return t[e[n]]=Object.assign(t[e[n]]||{},e),t}),{});return Object.keys(a).map((function(t){return a[t]}))},u=n(128),l=n(6);e.default=function(){var t=Object(i.b)(),e=Object(a.a)(t,3),n=e[0],b=e[1],f=e[2],p=Object(i.d)(),d=Object(a.a)(p,2),j=d[0],O=d[1],h=Object(i.a)(),g=Object(a.a)(h,2),x=g[0],v=g[1];return Object(o.useEffect)((function(){n&&b&&(O({option:"nearby",lat:n,lng:b}),v({option:"nearby",lat:n,lng:b}))}),[n,b]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.c,{flexDirection:"column",h:"100vh",children:[Object(l.jsx)(u.a,{}),f?Object(l.jsx)(r.f,{children:f}):n&&Object(l.jsx)(c.a,{lat:n,lng:b,nearbySpots:s(j,x,"StationID")})]})})}}}]);
//# sourceMappingURL=4.ea3de03d.chunk.js.map