(this.webpackJsonpbike=this.webpackJsonpbike||[]).push([[4],{126:function(e,t,n){"use strict";var a=n(73);t.a=function(e){var t=Object(a.a)();return{successToast:function(n){if(!t.isActive(e))return t({id:e,title:n,position:"bottom",status:"success",duration:3e3,isClosable:!0})},warningToast:function(n){if(!t.isActive(e))return t({id:e,title:n,position:"bottom",status:"warning",duration:3e3,isClosable:!0})},infoToast:function(n){if(!t.isActive(e))return t({id:e,title:n,position:"bottom",status:"error",duration:3e3,isClosable:!0})},errorToast:function(n){if(!t.isActive(e))return t({id:e,title:n,position:"bottom",status:"error",duration:3e3,isClosable:!0})}}}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxW:"100px"}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(30),o=n(64),r=n(1),c=n.p+"static/media/default.ca1990dc.svg",i=n.p+"static/media/flag.a2df00b5.svg",s=n.p+"static/media/crosshair.a8fe395c.svg",l=n(136),u=n(134),b=n(6),d={width:"100%",height:"100%"},p=function(e){var t=e.lat,n=e.lng,p=e.nearbySpots,j=e.routePath,f=e.mode,h=void 0===f?"default":f,O=Object(r.useState)(null),g=Object(a.a)(O,2),m=g[0],x=g[1],v=Object(l.e)({id:"google-map-script",googleMapsApiKey:"AIzaSyDt-oZ5eKw7KUb_zG0At9Hlq82SvW_q6ZY"}).isLoaded,y=Object(r.useState)(null),w=Object(a.a)(y,2),C=w[0],S=w[1];Object(r.useEffect)((function(){j&&S(j.Geometry.replace(/[A-Z'()']{1}/gm,"").trim().split(",").reduce((function(e,t){var n=t.split(" ");return[].concat(Object(u.a)(e),[{lat:1*n[1],lng:1*n[0]}])}),[]))}),[j]),Object(r.useEffect)((function(){C&&m.panTo(C[0])}),[C]);var k;return v&&t?Object(b.jsx)(o.e,{flex:1,w:"100%",overflow:"hidden",children:Object(b.jsxs)(l.a,{mapContainerStyle:d,zoom:15,onLoad:function(e){console.log(e),x(e),e.setCenter({lat:t,lng:n})},options:{gestureHandling:"greedy",zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1},children:[p&&(k=p,k&&k.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(l.c,{position:{lat:e.StationPosition.PositionLat,lng:e.StationPosition.PositionLon},options:{icon:{url:c}}})},e.StationID)}))),p&&function(e){return e&&e.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(l.b,{position:{lat:e.StationPosition.PositionLat,lng:e.StationPosition.PositionLon},options:{closeBoxURL:"",alignBottom:!0,pixelOffset:new window.google.maps.Size(-14.3,-12)},children:Object(b.jsx)(o.e,{transition:"all 0.5s ease",bg:"default"===h?"brand.yellow":"black",color:"default"===h?"black":"brand.yellow",justifyContent:"center",alignItems:"center",borderRadius:"100%",w:"28px",h:"28px",children:Object(b.jsx)(o.h,{fontWeight:"700",children:"default"===h?e.AvailableRentBikes:e.AvailableReturnBikes})})})},e.StationID)}))}(p),Object(b.jsx)(l.d,{onLoad:function(e){console.log("polyline: ",e)},path:C,options:{strokeColor:"#000000",strokeOpacity:.6,strokeWeight:5,fillColor:"#000000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:3e4,zIndex:1}}),C&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.c,{position:{lat:C[0].lat,lng:C[0].lng},options:{icon:{url:s}}}),Object(b.jsx)(l.c,{position:{lat:C[C.length-1].lat,lng:C[C.length-1].lng},options:{icon:{url:i}}})]})]})}):Object(b.jsx)(b.Fragment,{})},j=Object(r.memo)(p)},133:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return g}));var a=n(124),o=n.n(a),r=n(125),c=n(30),i=n(1),s=n(140),l=n.n(s),u=n(149),b=function(){var e=(new Date).toGMTString(),t=new u.a("SHA-1","TEXT");return t.setHMACKey("W3Xh3Nu_xQlCw7EY5CctQegleQ0","TEXT"),t.update("x-date: "+e),{Authorization:'hmac username="8d1f8b7eeb79421ba1ed2914848b717d", algorithm="hmac-sha1", headers="x-date", signature="'+t.getHMAC("B64")+'"',"X-Date":e}},d=l.a.create({headers:b(),baseURL:"https://ptx.transportdata.tw/MOTC/v2/Bike/"}),p=l.a.create({headers:b(),baseURL:"https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape"}),j=n(126),f=function(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(j.a)("error").errorToast,l=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,r,c,i,l,u,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.option,r=t.city,c=t.lat,i=t.lng,l="nearby"===n?"Station/NearBy?$top=30&$spatialFilter=nearby(".concat(c,", ").concat(i,", 1000)&$format=JSON"):"Station/".concat(r,"?$top=30&$format=JSON"),e.prev=2,e.next=5,d.get(l);case 5:u=e.sent,b=u.data,a(b),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),s("\u6b0a\u9650\u5230\u671f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u5f8c\u518d\u8a66\u4e00\u6b21");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return[n,l]},h=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,r,c,i,s,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.option,r=t.city,c=t.lat,i=t.lng,s="nearby"===n?"Availability/NearBy?$top=30&$spatialFilter=nearby(".concat(c,", ").concat(i,", 1000)&$format=JSON"):"Availability/".concat(r,"?$top=30&$format=JSON"),e.prev=2,e.next=5,d.get(s);case 5:l=e.sent,u=l.data,a(u),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return[n,s]},O=function(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)(null),r=Object(c.a)(o,2),s=r[0],l=r[1],u=Object(i.useState)(null),b=Object(c.a)(u,2),d=b[0],p=b[1],j=function(e){var t=e.coords;a(t.latitude),l(t.longitude)},f=function(e){p(e.message)};return Object(i.useEffect)((function(){var e=navigator.geolocation,t=e.watchPosition(j,f);if(e)return function(){return e.clearWatch(t)};p("Geolocation is not supported")}),[]),[n,s,d]},g=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(j.a)("error").errorToast,l=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,r,c,i,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.city,r=t.skip,c=r?"$skip=".concat(r):"","$top=30&$format=JSON",i="".concat(n,"?").concat(c,"&").concat("$top=30&$format=JSON"),e.prev=4,e.next=7,p.get(i);case 7:l=e.sent,u=l.data,a(u),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),s("\u6b0a\u9650\u5230\u671f\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u5f8c\u518d\u8a66\u4e00\u6b21");case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return[n,l]}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(44),o=n(64),r=n(66),c=n(31),i=n(8),s=n(130),l=n(131),u=n(60),b=n(129),d=n(6),p=function(e){var t=e.onHamburgerClick,n=e.children,p=e.routeName,j=Object(i.g)(),f=Object(i.f)().pathname;return Object(d.jsxs)(o.e,{position:"sticky",zIndex:"sticky",top:"0",bg:"brand.yellow",boxShadow:"sm",w:"100%",alignItems:"center",py:5,px:10,color:"white",minH:"80px",children:[Object(d.jsx)(l.a,{display:{base:"block",md:"none"},color:"brand.black",position:"absolute",left:"10px",h:10,w:10,onClick:function(){return j("/")}}),Object(d.jsx)(o.e,{alignSelf:"center",cursor:"pointer",onClick:function(){return j("/")},display:{base:"none",md:"block"},children:Object(d.jsx)(u.a,{})}),p&&Object(d.jsx)(o.g,Object(a.a)(Object(a.a)({},b.a),{},{maxW:{base:"250px",md:"500px"},size:"sm",color:"black",m:"auto",children:p})),n,"/nearbybike"!==f&&Object(d.jsx)(r.a,{variant:"default",marginLeft:"auto",boxShadow:"none",w:"40px",h:"40px",onClick:t,size:"sm",children:Object(d.jsx)(c.a,{as:s.c,w:8,h:8})})]})}},176:function(e,t,n){"use strict";n.r(t);var a=n(134),o=n(30),r=n(11),c=n(67),i=n(77),s=n(64),l=n(66),u=new Map([["\u8acb\u9078\u64c7\u57ce\u5e02",""],["\u53f0\u5317\u5e02","Taipei"],["\u65b0\u5317\u5e02","NewTaipei"],["\u6843\u5712\u5e02","Taoyuan"],["\u53f0\u4e2d\u5e02","Taichung"],["\u53f0\u5357\u5e02","Tainan"],["\u9ad8\u96c4\u5e02","Kaohsiung"],["\u57fa\u9686\u5e02","Keelung"],["\u65b0\u7af9\u7e23","HsinchuCounty"],["\u5f70\u5316\u7e23","ChanghuaCounty"],["\u5357\u6295\u7e23","NantouCounty"],["\u96f2\u6797\u7e23","YunlinCounty"],["\u5609\u7fa9\u7e23","ChiayiCounty"],["\u5609\u7fa9\u5e02","Chiayi"],["\u5c4f\u6771\u7e23","PingtungCounty"],["\u5b9c\u862d\u7e23","YilanCounty"],["\u82b1\u84ee\u7e23","HualienCounty"],["\u53f0\u6771\u7e23","TaitungCounty"],["\u91d1\u9580\u7e23","KinmenCounty"],["\u6f8e\u6e56\u7e23","PenghuCounty"],["\u82d7\u6817\u7e23","MiaoliCounty"]]),b=n(135),d=n(1),p=n(133),j=n(6),f=n(44),h=n(31),O=n(130),g=n(129),m=function(e){var t=e.spot,n=e.onClick,a=Object(d.useState)(),r=Object(o.a)(a,2),c=r[0],i=r[1];return Object(j.jsx)(s.a,{ratio:2.5,children:Object(j.jsxs)(s.e,{cursor:"pointer",borderRadius:"10px",overflow:"hidden",flexDirection:"column",justifyContent:"space-between !important",boxShadow:"lg",marginBottom:"40px",bg:c?"brand.black":"white",color:c?"brand.yellow":"brand.black",transition:"all 0.5s ease",p:2,onClick:n,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(j.jsx)(s.g,Object(f.a)(Object(f.a)({w:"100%"},g.a),{},{maxW:"100%",color:"brand.grey",textAlign:"start",size:{base:"sm",sm:"md"},children:t.RouteName})),Object(j.jsxs)(s.e,{justifyContent:"space-between",w:"100%",fontSize:"12px",children:[Object(j.jsxs)(s.e,{children:[Object(j.jsx)(s.h,{children:t.Direction}),Object(j.jsxs)(s.h,{children:[(t.CyclingLength/1e3).toFixed(2),"\u516c\u91cc"]})]}),Object(j.jsxs)(s.e,{children:[Object(j.jsx)(h.a,{as:O.a,alignSelf:"center"}),Object(j.jsxs)(s.h,Object(f.a)(Object(f.a)({},g.a),{},{children:[t.City,"\xa0",t.Town]}))]})]})]})},t.RouteName)},x=n(68),v=n(132);t.default=function(){var e=Object(p.b)(),t=Object(o.a)(e,2),n=t[0],f=t[1],h=Object(r.c)(),O=h.isOpen,g=h.onOpen,y=h.onClose,w=Object(d.useState)(""),C=Object(o.a)(w,2),S=C[0],k=C[1],N=Object(p.c)(),E=Object(o.a)(N,2),T=E[0],z=E[1],A=Object(d.useState)([]),P=Object(o.a)(A,2),_=P[0],H=P[1],L=Object(d.useState)(0),$=Object(o.a)(L,2),R=$[0],I=$[1],M=Object(d.useState)(null),B=Object(o.a)(M,2),D=B[0],W=B[1],F=Object(d.useState)(!0),J=Object(o.a)(F,2),K=J[0],G=J[1];Object(d.useEffect)((function(){""!==S&&(I(0),H([]),z({city:S,skip:0}))}),[S]),Object(d.useEffect)((function(){G(!(0===T.length)),H([].concat(Object(a.a)(_),Object(a.a)(T)))}),[T]),Object(d.useEffect)((function(){""!==S&&z({city:S,skip:R})}),[R]),Object(d.useEffect)((function(){console.log(D)}),[D]);var Y;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(x.a,{onDrawerOpen:O,onDrawerClose:y,children:[Object(j.jsx)(c.e,{bg:"brand.yellow",p:"25px",children:Object(j.jsx)(i.a,{bg:"brand.black",w:"150px",h:"36px",color:"brand.white",borderRadius:"100px",onChange:function(e){return k(e.currentTarget.value)},value:S,children:Object(a.a)(u).map((function(e){return Object(j.jsx)("option",{value:e[1],style:{backgroundColor:"black"},children:e[0]},e[1])}))})}),Object(j.jsx)(s.d,{}),Object(j.jsx)(c.b,{p:2,overflow:"hidden",children:Object(j.jsx)(s.i,{gridGap:3,children:Object(j.jsxs)(s.f,{p:5,w:"100%",borderRadius:"16px",bg:"brand.white",h:"70vh",overflowY:"scroll",templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},gridGap:5,children:[_.length>0?(Y=_,Y.map((function(e){return Object(j.jsx)(m,{spot:e,onClick:function(){y(),W(e)}},e.RouteName)}))):Object(j.jsx)(s.e,{py:5,children:"\u8acb\u9078\u64c7\u57ce\u5e02"}),Object(j.jsx)(l.a,{variant:"default",disabled:!K,onClick:function(){return I(R+30)},children:K?"\u8f09\u5165\u66f4\u591a":"\u5df2\u5230\u5e95\u90e8"})]})})})]}),Object(j.jsxs)(s.e,{flexDirection:"column",h:"100vh",alignItems:"center",children:[Object(j.jsx)(b.a,{onHamburgerClick:g,routeName:D&&D.RouteName||"\u8acb\u9078\u64c7\u8eca\u9053"}),n&&Object(j.jsx)(v.a,{lat:n,lng:f,nearbySpots:[],routePath:D})]})]})}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(72),o=n(5),r=n(25),c=n(2),i=n(26),s=n.n(i),l=n(1);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}var d=["children","placeholder","className"],p=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],j=["children"],f=Object(o.e)((function(e,t){var n=e.children,a=e.placeholder,r=e.className,i=b(e,d);return l.createElement(o.d.select,u({},i,{ref:t,className:Object(c.g)("chakra-select",r)}),a&&l.createElement("option",{value:""},a),n)}));c.b&&(f.displayName="SelectField");var h=Object(o.e)((function(e,t){var n=Object(o.h)("Select",e),i=Object(o.f)(e),d=i.rootProps,j=i.placeholder,h=i.icon,O=i.color,g=i.height,x=i.h,v=i.minH,y=i.minHeight,w=i.iconColor,C=i.iconSize;i.isFullWidth;var S=b(i,p),k=Object(c.L)(S,r.c),N=k[0],E=k[1],T=Object(a.b)(E),z={width:"100%",height:"fit-content",position:"relative",color:O},A=s()({paddingEnd:"2rem"},n.field,{_focus:{zIndex:"unset"}});return l.createElement(o.d.div,u({className:"chakra-select__wrapper",__css:z},N,d),l.createElement(f,u({ref:t,height:null!=x?x:g,minH:null!=v?v:y,placeholder:j},T,{__css:A}),e.children),l.createElement(m,u({"data-disabled":Object(c.h)(T.disabled)},(w||O)&&{color:w||O},{__css:n.icon},C&&{fontSize:C}),h))}));c.b&&(h.displayName="Select");var O=function(e){return l.createElement("svg",u({viewBox:"0 0 24 24"},e),l.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},g=Object(o.d)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),m=function(e){var t=e.children,n=void 0===t?l.createElement(O,null):t,a=b(e,j),o=l.cloneElement(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return l.createElement(g,u({},a,{className:"chakra-select__icon-wrapper"}),l.isValidElement(n)?o:null)};c.b&&(m.displayName="SelectIcon")}}]);
//# sourceMappingURL=4.97ec32da.chunk.js.map