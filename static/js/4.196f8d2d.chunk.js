(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[4],{135:function(e,t,a){"use strict";a.r(t);var n=a(62),l=a(0),r=a(61),c=a(24);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){l=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(l)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=a(71),s=a(67),d=a(65),u={fromDate:"",untilDate:"",capacity:"",withAir:!1},f=d.b().shape({fromDate:d.c().notRequired(),untilDate:d.c().notRequired(),capacity:d.c().notRequired(),withAir:d.a().notRequired(),withParking:d.a().notRequired()}),E=function(e){var t=e.onSubmit,a=new Date,n=a.toISOString().split("T")[0],r=o(l.useState(""),2),c=r[0],i=r[1],d=function(){if(c===n)return a.setDate(a.getDate()+1),a.toISOString().split("T")[0];var e=""!==c?new Date(c):a;return e.setDate(e.getDate()+1),e.toISOString().split("T")[0]}();return l.createElement(l.Fragment,null,l.createElement("div",{"data-testid":"find-rooms",className:"card-rooms"},l.createElement("div",{className:"row"},l.createElement("div",{className:"card filter-area "},l.createElement("div",{className:"col"},l.createElement(s.c,{initialValues:u,validationSchema:f,onSubmit:function(e){t({fromDate:c,untilDate:e.untilDate,capacity:e.capacity,withAir:e.withAir,withParking:e.withParking})},onReset:function(e,t){t.resetForm;i("")}},l.createElement(s.b,{"data-testid":"form-find-rooms"},l.createElement("div",{className:"form-group row mb-3 mt-3"},l.createElement("label",{htmlFor:"fromDate",className:"col-12 col-sm-6 col-lg-2 col-form-label"},"Fecha de ingreso"),l.createElement("div",{className:"col-12 col-sm-6 col-lg-4"},l.createElement(s.a,{className:"form-control","data-testid":"form-fromDate",type:"date",name:"fromDate",id:"fromDate",min:n,value:c,onChange:function(e){i(e.target.value)}})),l.createElement("label",{htmlFor:"untilDate",className:"col-12  col-sm-6 col-lg-2 col-form-label"},"Fecha de salida"),l.createElement("div",{className:"col-12 col-sm-6 col-lg-4"},l.createElement(s.a,{className:"form-control","data-testid":"form-untilDate",type:"date",name:"untilDate",id:"untilDate",min:d}))),l.createElement("div",{className:"row mb-4"},l.createElement("div",{className:"d-flex col-12 col-sm-6 col-lg-4 text-center"},l.createElement("label",{className:"pr-2",htmlFor:"capacity"},"Personas"),l.createElement(s.a,{component:"select",className:" filter-select","data-testid":"form-capacity","aria-label":".form-select-sm example",id:"capacity",name:"capacity"},l.createElement("option",{value:""},"Seleccione"),l.createElement("option",{value:"1"},"1 adulto"),l.createElement("option",{value:"2"},"2 adultos"),l.createElement("option",{value:"3"},"3 adultos"),l.createElement("option",{value:"4"},"4 adultos"))),l.createElement("div",{className:"col-12 col-sm-6 col-lg-4 text-md-center "},l.createElement(s.a,{type:"checkbox",className:"m-2","data-testid":"form-withAir","aria-label":"Checkbox find room with air",name:"withAir",id:"withAir"}),l.createElement("label",{className:"cursor-pointer",htmlFor:"withAir"},"\xbfAire acondicionado?")),l.createElement("div",{className:"col-12 col-lg-4 mt-sm-2 mt-md-0"},l.createElement(s.a,{type:"checkbox",className:"m-2","data-testid":"form-withParking","aria-label":"Checkbox  find room with parking",name:"withParking",id:"withParking"}),l.createElement("label",{className:"cursor-pointer",htmlFor:"withParking"},"\xbfParqueadero?"))),l.createElement("div",{className:"text-center mt-5"},l.createElement(m.a,{className:" w-50","data-testid":"form-button-find",type:"submit"},"Encuentralo!")),l.createElement("div",{className:"text-center mb-4 mt-1"},l.createElement(m.a,{className:"button-link","data-testid":"form-button-reset",type:"reset"},"limpiar")))))))))},b=a(87),p=function(e){var t=e.listRooms,a=e.loadDetailRoom;return l.createElement(l.Fragment,null,l.createElement("div",{"data-testid":"list-rooms",className:"card-rooms"},l.createElement("div",{className:"row pt-5"},l.createElement("div",{className:"col"},t&&t.length>0&&t.map((function(e,t){return l.createElement(b.a,{key:t,data:e,loadDetailRoom:a})}))))))},v=a(3);function h(){var e=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n"]);return h=function(){return e},e}var N=a(4).a.div(h()),y=Object(c.b)((function(e){return{listRooms:e.rooms.listRooms}}),{listAvailableRooms:r.b,findRoomsFilter:r.a,loadDetailRoom:r.c})((function(e){var t=e.listRooms,a=e.listAvailableRooms,n=e.findRoomsFilter,r=e.loadDetailRoom;return Object(l.useEffect)((function(){t&&0===t.length&&a()}),[t,a]),l.createElement(N,{"data-testid":"room"},l.createElement(E,{onSubmit:n}),l.createElement(p,{listRooms:t,loadDetailRoom:r}))})),g=function(){return l.createElement(n.a,{title:"Habitaciones",description:"Encuentra tu habitaci\xf3n"},l.createElement(y,null))};g.displayName="HomeMainPage";t.default=g},61:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"e",(function(){return f})),a.d(t,"d",(function(){return E}));var n=a(70),l=a.n(n).a.create({baseURL:"url/produccion",timeout:3e4,headers:{"X-Custom-Header":"foobar"}}),r={"Content-Type":"application/json"},c=function(){return l.get("/rooms")},i=function(e){return l.get("/rooms".concat(function(e){var t="?";return e.fromDate&&(t="".concat(t,"available_from_lte=").concat(e.fromDate)),e.untilDate&&(t="".concat(""!==t?t+"&":"","available_until_gte=").concat(e.untilDate)),e.capacity&&(t="".concat(""!==t?t+"&":"","capacity=").concat(e.capacity)),t="".concat(""!==t?t+"&":"","ac=").concat(e.withAir&&!0===e.withAir?"Y":"N"),t="".concat(""!==t?t+"&":"","parking=").concat(e.withParking&&!0===e.withParking?"Y":"N")}(e)))},o=function(e){return l.post("/booking",e,{headers:r})},m=a(15);function s(e){return{type:m.d,payload:e}}function d(){return function(e){c().then((function(t){return e((a=t.data,{type:m.c,payload:a}));var a}))}}function u(e){return function(t){i(e).then((function(e){return t((a=e.data,{type:m.b,payload:a}));var a}))}}function f(e){return function(t){o(e).then((function(e){return t((a=e.data.id,{type:m.a,payload:a}));var a}))}}function E(e){return function(e){return null}}},62:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),l=a(69),r=a(3);function c(){var e=Object(r.a)(["\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return c=function(){return e},e}var i=a(4).a.div(c()),o=function(e){var t=e.children,a=e.title,r=e.description;return n.createElement(n.Fragment,null,n.createElement(l.a,null,a&&n.createElement("title",null,"Find hotel | ",a),r&&n.createElement("meta",{name:"description",content:r})),n.createElement(i,{"data-testid":"layout"},t))}},71:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(3);function l(){var e=Object(n.a)(["\n  background: #ffea00;\n  border-radius: 10px;\n  color: #000;\n  height: auto;\n  font-weight: 700;\n  text-align: center;\n  &[disabled] {\n    opacity: 0.3;\n  }\n"]);return l=function(){return e},e}var r=a(4).a.button(l())},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(67),l=a(0),r=a(65),c=function(e){var t=e.label,a=e.icon,n=e.value,r=e.valueText;return l.createElement("h6",{"data-testid":"custom-field",className:"font-weight-bold"},t," ",l.createElement("i",{className:"fas ".concat(a)})," :"," ",r&&""!==r?l.createElement("span",{"data-testid":"custom-field-value-text"},r):void 0!==n&&!0===n?l.createElement("i",{className:"fas fa-check","data-testid":"custom-field-value-true"}):l.createElement("i",{className:"fas fa-times","data-testid":"custom-field-value-false"}))},i=a(16),o=function(e){var t=e.data,a=e.loadDetailRoom,n=e.selectedRoom,r=e.saveBookingRoom;return l.createElement("div",{"data-testid":"card-information",className:"card room-item"},l.createElement("div",{className:"card-header room-item-header "},l.createElement("h3",null,t.hotel.name),l.createElement("h4",null,t.hotel.score)),l.createElement("div",{className:"card-body"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col-md-4"},l.createElement("img",{src:t.image,className:"img-fluid",alt:"hotel room",width:"260px",height:"180px"})),l.createElement("div",{className:"col col-md-8"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12 col-lg-8"},l.createElement("h5",{className:"card-title"},t.title)),l.createElement("div",{className:"col-12 col-lg-4"},n&&-1!==n?l.createElement(l.Fragment,null,l.createElement(d,{saveBookingRoom:r,dataRoom:t})):l.createElement(i.a,{to:"/rooms/detail"},l.createElement("button",{type:"button",className:"btn btn-primary btn-book w-100","data-testid":"form-button-load-detail",onClick:function(){return a&&a(t.id)}},l.createElement("i",{className:"far fa-calendar-check ml-3"})," Seleccionar"))),l.createElement("div",{className:"col-12 col-md-12"},l.createElement("h4",null,l.createElement("i",{className:"far fa-money-bill-alt"})," ",t.value)),l.createElement("div",{className:"col-12 col-md-12 d-flex"},l.createElement(c,{label:"Inicio",icon:"fa-calendar-alt",valueText:t.available_from}),l.createElement(c,{label:"-  Fin",icon:"fa-calendar-alt",valueText:t.available_until}))),l.createElement("p",{className:"card-text"},t.description),n&&-1!==n&&l.createElement("div",{className:"mb-3","data-testid":"form-field-hotel-desc"},l.createElement("p",{className:"card-text"},t.hotel.description),l.createElement(c,{label:"Direcci\xf3n",icon:"fa-map-marked-alt",valueText:"".concat(t.hotel.address)})),l.createElement("div",{className:"row"},l.createElement("div",{className:"col col-md-6"},l.createElement(c,{label:"Camas",icon:"fa-bed",valueText:"".concat(t.capacity)}),l.createElement(c,{label:"Aire",icon:"fa-wind",value:"Y"===t.ac}),l.createElement(c,{label:"Wifi",icon:"fa-wifi",value:"Y"===t.wifi})),l.createElement("div",{className:"col col-md-6"},l.createElement(c,{label:"Parqueadero",icon:"fa-car",value:"Y"===t.parking}),l.createElement(c,{label:"Ba\xf1os",icon:"fa-restroom",value:!0}),n&&-1!==n&&l.createElement(u,{score:t.hotel.stars})))))))},m={name:"",email:"",identification_type:"",identification:""},s=r.b().shape({name:r.c().min(2,"Nombre muy corto").max(50,"Nombre muy largo").required("Nacesitamos tu nombre"),email:r.c().email("Email no v\xe1lido").required("Necesitamos tu email"),identification_type:r.c().required("Necesitamos tu tipo de identificaci\xf3n"),identification:r.c().required("Necesitamos tu identificaci\xf3n")}),d=function(e){var t=e.saveBookingRoom,a=e.dataRoom;return l.createElement(l.Fragment,null,l.createElement("div",{"data-testid":"modal-form-book"},l.createElement("button",{type:"button",className:"btn btn-primary btn-book w-100","data-bs-toggle":"modal","data-bs-target":"#modalFormBook"},l.createElement("i",{className:"far fa-calendar-check ml-3"})," Reservar"),l.createElement("div",{className:"modal fade",id:"modalFormBook","aria-labelledby":"modalFormBookLabel","aria-hidden":"true"},l.createElement("div",{className:"modal-dialog"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal-header"},l.createElement("h5",{className:"modal-title",id:"modalFormBookLabel"},"Completa tu reserva"),l.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.createElement("div",{className:"modal-body"},l.createElement(n.c,{initialValues:m,validationSchema:s,onSubmit:function(e,n){var l=n.resetForm;t&&t({bookData:{name:e.name,email:e.email,identification_type:e.identification_type,identification:e.identification},roomData:a}),l()}},(function(e){var t=e.errors,a=e.touched;return l.createElement(n.b,null,l.createElement("div",{className:"row mb-3"},l.createElement("div",{className:"col-12 col-md-6 "},l.createElement("label",{htmlFor:"name",className:"col-12 col-form-label"},"Nombre"),l.createElement(n.a,{name:"name",className:"form-control col-12",placeholder:"eje: Joe Doe"}),t.name&&a.name?l.createElement("small",{className:"text-danger"},t.name):null),l.createElement("div",{className:" col-12 col-md-6"},l.createElement("label",{htmlFor:"email",className:"col-12 col-form-label"},"Correo electr\xf3nico"),l.createElement(n.a,{name:"email",type:"email",className:"form-control col-12",placeholder:"eje: joe@email.com"}),t.email&&a.email?l.createElement("small",{className:"text-danger"},t.email):null)),l.createElement("div",{className:"row mb-2"},l.createElement("div",{className:"col-12 col-md-6 "},l.createElement("label",{className:"pr-2",htmlFor:"identification_type"},"Tipo de identificaci\xf3n"),l.createElement(n.a,{as:"select",className:" d-block w-100","aria-label":".form-select-sm example",id:"identification_type",name:"identification_type"},l.createElement("option",{value:""},"Seleccione"),l.createElement("option",{value:"1"},"C\xe9dula de ciudadan\xeda"),l.createElement("option",{value:"2"},"C\xe9dula de extranjeria"),l.createElement("option",{value:"3"},"Nit"),l.createElement("option",{value:"4"},"Pasaporte")),t.identification_type&&a.identification_type?l.createElement("small",{className:"text-danger"},t.identification_type):null),l.createElement("div",{className:" col-12 col-md-6"},l.createElement("label",{className:"pr-2",htmlFor:"identification"},"Identificaci\xf3n"),l.createElement(n.a,{name:"identification",className:"form-control",placeholder:"eje: 60830147"}),t.identification&&a.identification?l.createElement("small",{className:"text-danger"},t.identification):null)),l.createElement("div",{className:"d-flex justify-content-between mt-3"},l.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancelar"),l.createElement("button",{type:"submit",className:"btn btn-primary"},"Finalizar")))}))))))))},u=function(e){var t=e.score,a=new Array(t);return a.fill("star",0),l.createElement(l.Fragment,null,l.createElement("div",{"data-testid":"star-score"},t&&a.map((function(e,t){return l.createElement("i",{key:t,className:"fas fa-star"})}))))}}}]);
//# sourceMappingURL=4.196f8d2d.chunk.js.map