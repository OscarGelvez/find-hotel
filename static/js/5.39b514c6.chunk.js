(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[5],{136:function(e,t,n){"use strict";n.r(t);var a=n(62),i=n(0),c=n(61),r=n(24),o=n(71),l=n(67),m=n(65),d={email:"",identification_type:"",identification:""},u=m.b().shape({email:m.c().email("Email no v\xe1lido").required("Necesitamos tu email"),identification_type:m.c().required("Necesitamos tu tipo de identificaci\xf3n"),identification:m.c().required("Necesitamos tu identificaci\xf3n")}),s=function(e){var t=e.onFindBooking;return i.createElement(i.Fragment,null,i.createElement("div",{"data-testid":"find-rooms",className:"card-rooms"},i.createElement("div",{className:"row"},i.createElement("div",{className:"card filter-area "},i.createElement("div",{className:"col"},i.createElement(l.c,{initialValues:d,validationSchema:u,onSubmit:function(e,n){var a=n.resetForm;t({email:e.email,identification_type:e.identification_type,identification:e.identification}),a()}},(function(e){var t=e.errors,n=e.touched;return i.createElement(l.b,{"data-testid":"form-find-rooms"},i.createElement("div",{className:"form-group row mb-3 mt-3"},i.createElement("div",{className:" col-12 col-md-4"},i.createElement("label",{htmlFor:"email",className:"col-12 col-form-label"},"Correo electr\xf3nico*"),i.createElement(l.a,{name:"email",type:"email",className:"form-control col-12",placeholder:"eje: joe@email.com"}),t.email&&n.email?i.createElement("small",{className:"text-danger"},t.email):null),i.createElement("div",{className:"col-12 col-md-4"},i.createElement("label",{className:"col-12 col-form-label",htmlFor:"identification_type"},"Tipo de identificaci\xf3n*"),i.createElement(l.a,{as:"select",className:" d-block w-100","aria-label":".form-select",id:"identification_type",name:"identification_type"},i.createElement("option",{value:""},"Seleccione"),i.createElement("option",{value:"1"},"C\xe9dula de ciudadan\xeda"),i.createElement("option",{value:"2"},"C\xe9dula de extranjeria"),i.createElement("option",{value:"3"},"Nit"),i.createElement("option",{value:"4"},"Pasaporte")),t.identification_type&&n.identification_type?i.createElement("small",{className:"text-danger"},t.identification_type):null),i.createElement("div",{className:" col-12 col-md-4"},i.createElement("label",{className:"col-12 col-form-label",htmlFor:"identification"},"Identificaci\xf3n*"),i.createElement(l.a,{name:"identification",className:"form-control",placeholder:"eje: 60830147"}),t.identification&&n.identification?i.createElement("small",{className:"text-danger"},t.identification):null)),i.createElement("div",{className:"row text-center"},i.createElement(o.a,{type:"submit",className:"btn "},"Buscar")))})))))))},f=n(3);function p(){var e=Object(f.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n"]);return p=function(){return e},e}var v=n(4).a.div(p()),E=Object(r.b)((function(e){return{listRooms:e.rooms.listRooms,selectedRoom:e.rooms.selectedRoomId}}),{onFindBooking:c.d})((function(e){var t=e.onFindBooking;return i.createElement(v,{"data-testid":"room"},i.createElement(s,{onFindBooking:t}))})),b=function(){return i.createElement(a.a,{title:"Reservar",description:"Consulte las reservaciones hechas"},i.createElement(E,null))};b.displayName="HomeMainPage";t.default=b},61:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return p}));var a=n(70),i=n.n(a).a.create({baseURL:"https://find-hotels-json-server.herokuapp.com",timeout:3e4,headers:{"X-Custom-Header":"foobar"}}),c={"Content-Type":"application/json"},r=function(){return i.get("/rooms")},o=function(e){return i.get("/rooms".concat(function(e){var t="?";return e.fromDate&&(t="".concat(t,"available_from_lte=").concat(e.fromDate)),e.untilDate&&(t="".concat(""!==t?t+"&":"","available_until_gte=").concat(e.untilDate)),e.capacity&&(t="".concat(""!==t?t+"&":"","capacity=").concat(e.capacity)),t="".concat(""!==t?t+"&":"","ac=").concat(e.withAir&&!0===e.withAir?"Y":"N"),t="".concat(""!==t?t+"&":"","parking=").concat(e.withParking&&!0===e.withParking?"Y":"N")}(e)))},l=function(e){return i.post("/booking",e,{headers:c})},m=n(15);function d(e){return{type:m.d,payload:e}}function u(){return function(e){r().then((function(t){return e((n=t.data,{type:m.c,payload:n}));var n}))}}function s(e){return function(t){o(e).then((function(e){return t((n=e.data,{type:m.b,payload:n}));var n}))}}function f(e){return function(t){l(e).then((function(e){return t((n=e.data.id,{type:m.a,payload:n}));var n}))}}function p(e){return function(e){return null}}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),i=n(69),c=n(3);function r(){var e=Object(c.a)(["\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return r=function(){return e},e}var o=n(4).a.div(r()),l=function(e){var t=e.children,n=e.title,c=e.description;return a.createElement(a.Fragment,null,a.createElement(i.a,null,n&&a.createElement("title",null,"Find hotel | ",n),c&&a.createElement("meta",{name:"description",content:c})),a.createElement(o,{"data-testid":"layout"},t))}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(3);function i(){var e=Object(a.a)(["\n  background: #ffea00;\n  border-radius: 10px;\n  color: #000;\n  height: auto;\n  font-weight: 700;\n  text-align: center;\n  &[disabled] {\n    opacity: 0.3;\n  }\n"]);return i=function(){return e},e}var c=n(4).a.button(i())}}]);
//# sourceMappingURL=5.39b514c6.chunk.js.map