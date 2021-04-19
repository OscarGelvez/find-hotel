(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[6],{137:function(e,t,a){"use strict";a.r(t);var n=a(62),l=a(0),c=a(61),o=a(24),i=a(87),r=function(e){var t=e.listRooms,a=e.selectedRoom,n=e.saveBookingRoom,c=t.filter((function(e){return e.id===a}))[0];return l.createElement(l.Fragment,null,l.createElement("div",{"data-testid":"room-detail-view",className:"card-rooms"},l.createElement("div",{className:"row pt-5"},l.createElement("div",{className:"col"},c?l.createElement(i.a,{key:a,data:c,selectedRoom:a,saveBookingRoom:n}):l.createElement("div",{className:"text-center"},l.createElement("h5",null,"No hay datos para mostrar"))))))},m=a(3);function s(){var e=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n"]);return s=function(){return e},e}var d=a(4).a.div(s()),u=Object(o.b)((function(e){return{listRooms:e.rooms.listRooms,selectedRoom:e.rooms.selectedRoomId}}),{saveBookingRoom:c.e})((function(e){var t=e.listRooms,a=e.selectedRoom,n=e.saveBookingRoom;return l.createElement(d,{"data-testid":"room-detail"},l.createElement(r,{listRooms:t,selectedRoom:a,saveBookingRoom:n}))})),f=function(){return l.createElement(n.a,{title:"Detalle de habitaci\xf3n",description:"Detalles de tu habitaci\xf3n"},l.createElement(u,null))};f.displayName="DetailRoomPage";t.default=f},61:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return f})),a.d(t,"e",(function(){return E})),a.d(t,"d",(function(){return v}));var n=a(70),l=a.n(n).a.create({baseURL:"https://find-hotels-json-server.herokuapp.com",timeout:3e4,headers:{"X-Custom-Header":"foobar"}}),c={"Content-Type":"application/json"},o=function(){return l.get("/rooms")},i=function(e){return l.get("/rooms".concat(function(e){var t="?";return e.fromDate&&(t="".concat(t,"available_from_lte=").concat(e.fromDate)),e.untilDate&&(t="".concat(""!==t?t+"&":"","available_until_gte=").concat(e.untilDate)),e.capacity&&(t="".concat(""!==t?t+"&":"","capacity=").concat(e.capacity)),t="".concat(""!==t?t+"&":"","ac=").concat(e.withAir&&!0===e.withAir?"Y":"N"),t="".concat(""!==t?t+"&":"","parking=").concat(e.withParking&&!0===e.withParking?"Y":"N")}(e)))},r=function(e){return l.post("/booking",e,{headers:c})},m=a(18);function s(e){return{type:m.b,payload:e}}function d(e){return{type:m.c,payload:e}}function u(){return function(e){o().then((function(t){return e(s(t.data))}))}}function f(e){return function(t){i(e).then((function(e){return t(s(e.data))}))}}function E(e){return function(t){r(e).then((function(e){return t((a=e.data.id,{type:m.a,payload:a}));var a}))}}function v(e){return function(e){return null}}},62:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),l=a(69),c=a(3);function o(){var e=Object(c.a)(["\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return o=function(){return e},e}var i=a(4).a.div(o()),r=function(e){var t=e.children,a=e.title,c=e.description;return n.createElement(n.Fragment,null,n.createElement(l.a,null,a&&n.createElement("title",null,"Find hotel | ",a),c&&n.createElement("meta",{name:"description",content:c})),n.createElement(i,{"data-testid":"layout"},t))}},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(67),l=a(0),c=a(65),o=function(e){var t=e.label,a=e.icon,n=e.value,c=e.valueText,o=void 0!==n&&!0===n;return l.createElement(l.Fragment,null,l.createElement("h6",{"data-testid":"custom-field",className:"font-weight-bold"},t," ",l.createElement("i",{className:"fas ".concat(a)})," :"," ",c&&""!==c?l.createElement("span",{"data-testid":"custom-field-value-text"},c):l.createElement("i",{className:"fas fa-".concat(o?"check":"times"),"data-testid":"custom-field-value-".concat(o?"true":"false")})))},i=a(15),r=function(e){var t=e.data,a=e.loadDetailRoom,n=e.selectedRoom,c=e.saveBookingRoom;return l.createElement("div",{"data-testid":"card-information",className:"card room-item"},l.createElement("div",{className:"card-header room-item-header "},l.createElement("h3",null,t.hotel.name),l.createElement("h4",null,t.hotel.score)),l.createElement("div",{className:"card-body"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col-md-4"},l.createElement("img",{src:t.image,className:"img-fluid",alt:"hotel room",width:"260px",height:"180px"})),l.createElement("div",{className:"col col-md-8"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12 col-lg-8"},l.createElement("h5",{className:"card-title"},t.title)),l.createElement("div",{className:"col-12 col-lg-4"},n&&-1!==n?l.createElement(l.Fragment,null,l.createElement(d,{saveBookingRoom:c,dataRoom:t})):l.createElement(i.a,{to:"/rooms/detail"},l.createElement("button",{type:"button",className:"btn btn-primary btn-book w-100","data-testid":"form-button-load-detail",onClick:function(){return a&&a(t.id)}},l.createElement("i",{className:"far fa-calendar-check ml-3"})," Seleccionar"))),l.createElement("div",{className:"col-12 col-md-12"},l.createElement("h4",null,l.createElement("i",{className:"far fa-money-bill-alt"})," ",t.value)),l.createElement("div",{className:"col-12 col-md-12 d-flex"},l.createElement(o,{label:"Inicio",icon:"fa-calendar-alt",valueText:t.available_from}),l.createElement(o,{label:"-  Fin",icon:"fa-calendar-alt",valueText:t.available_until}))),l.createElement("p",{className:"card-text"},t.description),n&&-1!==n&&l.createElement("div",{className:"mb-3","data-testid":"form-field-hotel-desc"},l.createElement("p",{className:"card-text"},t.hotel.description),l.createElement(o,{label:"Direcci\xf3n",icon:"fa-map-marked-alt",valueText:"".concat(t.hotel.address)})),l.createElement("div",{className:"row"},l.createElement("div",{className:"col col-md-6"},l.createElement(o,{label:"Camas",icon:"fa-bed",valueText:"".concat(t.capacity)}),l.createElement(o,{label:"Aire",icon:"fa-wind",value:"Y"===t.ac}),l.createElement(o,{label:"Wifi",icon:"fa-wifi",value:"Y"===t.wifi})),l.createElement("div",{className:"col col-md-6"},l.createElement(o,{label:"Parqueadero",icon:"fa-car",value:"Y"===t.parking}),l.createElement(o,{label:"Ba\xf1os",icon:"fa-restroom",value:!0}),n&&-1!==n&&l.createElement(u,{score:t.hotel.stars})))))))},m={name:"",email:"",identification_type:"",identification:""},s=c.b().shape({name:c.c().min(2,"Nombre muy corto").max(50,"Nombre muy largo").required("Nacesitamos tu nombre"),email:c.c().email("Email no v\xe1lido").required("Necesitamos tu email"),identification_type:c.c().required("Necesitamos tu tipo de identificaci\xf3n"),identification:c.c().required("Necesitamos tu identificaci\xf3n")}),d=function(e){var t=e.saveBookingRoom,a=e.dataRoom;return l.createElement(l.Fragment,null,l.createElement("div",{"data-testid":"modal-form-book"},l.createElement("button",{type:"button",className:"btn btn-primary btn-book w-100","data-bs-toggle":"modal","data-bs-target":"#modalFormBook"},l.createElement("i",{className:"far fa-calendar-check ml-3"})," Reservar"),l.createElement("div",{className:"modal fade",id:"modalFormBook","aria-labelledby":"modalFormBookLabel","aria-hidden":"true"},l.createElement("div",{className:"modal-dialog"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal-header"},l.createElement("h5",{className:"modal-title",id:"modalFormBookLabel"},"Completa tu reserva"),l.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.createElement("div",{className:"modal-body"},l.createElement(n.c,{initialValues:m,validationSchema:s,onSubmit:function(e,n){var l=n.resetForm;t&&t({bookData:{name:e.name,email:e.email,identification_type:e.identification_type,identification:e.identification},roomData:a}),l()}},(function(e){var t=e.errors,a=e.touched;return l.createElement(n.b,null,l.createElement("div",{className:"row mb-3"},l.createElement("div",{className:"col-12 col-md-6 "},l.createElement("label",{htmlFor:"name",className:"col-12 col-form-label"},"Nombre"),l.createElement(n.a,{name:"name",className:"form-control col-12",placeholder:"eje: Joe Doe"}),t.name&&a.name?l.createElement("small",{className:"text-danger"},t.name):null),l.createElement("div",{className:" col-12 col-md-6"},l.createElement("label",{htmlFor:"email",className:"col-12 col-form-label"},"Correo electr\xf3nico"),l.createElement(n.a,{name:"email",type:"email",className:"form-control col-12",placeholder:"eje: joe@email.com"}),t.email&&a.email?l.createElement("small",{className:"text-danger"},t.email):null)),l.createElement("div",{className:"row mb-2"},l.createElement("div",{className:"col-12 col-md-6 "},l.createElement("label",{className:"pr-2",htmlFor:"identification_type"},"Tipo de identificaci\xf3n"),l.createElement(n.a,{as:"select",className:" d-block w-100","aria-label":".form-select-sm example",id:"identification_type",name:"identification_type"},l.createElement("option",{value:""},"Seleccione"),l.createElement("option",{value:"1"},"C\xe9dula de ciudadan\xeda"),l.createElement("option",{value:"2"},"C\xe9dula de extranjeria"),l.createElement("option",{value:"3"},"Nit"),l.createElement("option",{value:"4"},"Pasaporte")),t.identification_type&&a.identification_type?l.createElement("small",{className:"text-danger"},t.identification_type):null),l.createElement("div",{className:" col-12 col-md-6"},l.createElement("label",{className:"pr-2",htmlFor:"identification"},"Identificaci\xf3n"),l.createElement(n.a,{name:"identification",className:"form-control",placeholder:"eje: 60830147"}),t.identification&&a.identification?l.createElement("small",{className:"text-danger"},t.identification):null)),l.createElement("div",{className:"d-flex justify-content-between mt-3"},l.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancelar"),l.createElement("button",{type:"submit",className:"btn btn-primary"},"Finalizar")))}))))))))},u=function(e){var t=e.score,a=new Array(t);return a.fill("star",0),l.createElement(l.Fragment,null,l.createElement("div",{"data-testid":"star-score"},t&&a.map((function(e,t){return l.createElement("i",{key:t,className:"fas fa-star"})}))))}}}]);
//# sourceMappingURL=6.78053d17.chunk.js.map