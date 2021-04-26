(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[5],{101:function(e,t,a){"use strict";a.d(t,"c",(function(){return y})),a.d(t,"b",(function(){return x})),a.d(t,"a",(function(){return D}));var n=a(82),o=a.n(n),l=a(83),r=a(84),c=a.n(r),i=a(66),m={"Content-Type":"application/json"},s=function(e){return c.a.post("".concat(i.a,"/booking"),e,{headers:m})},d=function(e){return c.a.get("".concat(i.a,"/booking").concat(function(e){var t="";return e&&""!==e.email&&""!==e.identification_type&&""!==e.identification&&(t="?bookData.email=".concat(e.email,"&bookData.identification_type=").concat(e.identification_type,"&bookData.identification=").concat(e.identification)),t}(e)))},u=function(e){return c.a.delete("".concat(i.a,"/booking/").concat(e))},f=a(20),b=a(18),p={message:"",type:""};function v(e){return{type:b.c,payload:e}}function E(e){return{type:b.b,payload:e}}function N(e){return{type:b.d,payload:e}}function k(e){return{type:b.a,payload:e}}function g(e){return{type:f.b,payload:e}}function h(e){return{type:f.a,payload:e}}function y(e){return function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(!0)),t.next=3,s(e).then((function(e){return a(g(!1)),a(h(p)),a(v(e.data.id))})).catch((function(e){return a(g(!1)),a(h({type:"rooms-save-book",message:"Se ha presentado un error al guardar tu reserva. Por favor, intente nuevamente"})),a(v(-1))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function x(e){return function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(!0)),t.next=3,d(e).then((function(e){return a(g(!1)),a(h(p)),a(E(e.data))})).catch((function(e){return a(g(!1)),a(h({type:"books",message:"Se ha presentado un error al cargar las reservas. Por favor, intente nuevamente"})),a(E([]))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function D(e){return function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(!0)),a(N(e)),t.next=4,u(e).then((function(e){return a(g(!1)),a(h(p)),a(N(-1)),a(k(0))})).catch((function(e){return a(g(!1)),a(h({type:"books",message:"Se ha presentado un error al cancelar la reserva. Por favor, intente nuevamente"})),a(N(-1)),a(k(1))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},152:function(e,t,a){"use strict";a.r(t);var n=a(75),o=a(0),l=a(101),r=a(27),c=a(67),i=a(64),m=a(76),s=a(16),d=a(69),u=function(e){var t=e.listRooms,a=e.selectedRoom,n=e.saveBookingRoom,l=e.isLoading,r=t.filter((function(e){return e.id===a}))[0];return o.createElement(o.Fragment,null,l&&o.createElement(d.a,null),o.createElement("div",{className:"card card-detail-screen"},o.createElement("div",{className:"mt-3 ml-3 text-center"},o.createElement("h3",null,"Detalle de habitaci\xf3n")),o.createElement("div",{"data-testid":"room-detail-view",className:"card-rooms"},o.createElement("div",{className:"row pt-5"},o.createElement("div",{className:"col"},r?o.createElement(m.a,{key:a,data:r,selectedRoom:a,saveBookingRoom:n}):o.createElement("div",{className:"text-center"},o.createElement("h5",null,"No hay datos para mostrar"))))),o.createElement("div",{className:"w-50 d-block p-4"},o.createElement(s.a,{to:"/rooms"},o.createElement("button",{type:"button",id:"btn-back-detail",className:"btn btn-secondary w-25 ml-4","data-testid":"btn-back-detail",onClick:function(){return null}},o.createElement("i",{className:"fas fa-arrow-left"})," Atras")))))},f=a(4);function b(){var e=Object(f.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n"]);return b=function(){return e},e}var p=a(5).a.div(b()),v=Object(r.b)((function(e){return{listRooms:e.rooms.listRooms,selectedRoom:e.rooms.selectedRoomId,isLoading:e.main.isLoading,errorMessage:e.main.errorMessage}}),{saveBookingRoom:l.c})((function(e){var t=e.listRooms,a=e.selectedRoom,n=e.saveBookingRoom,l=e.isLoading,r=e.errorMessage;return o.useEffect((function(){""!==r.message&&"rooms-save-book"===r.type&&i.b.error(r.message)}),[r]),o.createElement(p,{"data-testid":"room-detail"},o.createElement(c.a,null),o.createElement(u,{listRooms:t,selectedRoom:a,saveBookingRoom:n,isLoading:l}))})),E=function(){return o.createElement(n.a,{title:"Detalle de habitaci\xf3n",description:"Detalles de tu habitaci\xf3n"},o.createElement(v,null))};E.displayName="DetailRoomPage";t.default=E},62:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t,a){if(t===a)return e.setDate(e.getDate()+1),e.toISOString().split("T")[0];var n=""!==t?new Date(t):e;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="http://find-hotels-json-server.herokuapp.com"},67:function(e,t,a){"use strict";var n=a(0),o=a(64);t.a=function(){return n.createElement("div",{"data-testid":"toast-error"},n.createElement(o.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))}},69:function(e,t,a){"use strict";var n=a(0),o=a(70),l=a.n(o);t.a=function(){return n.createElement(n.Fragment,null,n.createElement("div",{"data-testid":"view-spinner",className:"container-loader"},n.createElement("img",{"data-testid":"view-spinner-loader",src:l.a,alt:"loading",className:"img-loader"})))}},70:function(e,t,a){e.exports=a.p+"static/media/loading.890fa681.gif"},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),o=a(81),l=a(4);function r(){var e=Object(l.a)(["\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return r=function(){return e},e}var c=a(5).a.div(r()),i=function(e){var t=e.children,a=e.title,l=e.description;return n.createElement(n.Fragment,null,n.createElement(o.a,null,a&&n.createElement("title",null,"Find hotel | ",a),l&&n.createElement("meta",{name:"description",content:l})),n.createElement(c,{"data-testid":"layout"},t))}},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(74),o=a(62),l=a(72),r=a(0),c=a(71),i=function(e){var t=e.label,a=e.icon,n=e.value,o=e.valueText,l=void 0!==n&&!0===n;return r.createElement(r.Fragment,null,r.createElement("h6",{"data-testid":"custom-field",className:"font-weight-bold"},t," ",r.createElement("i",{className:"fas ".concat(a)})," :"," ",o&&""!==o?r.createElement("span",{"data-testid":"custom-field-value-text"},o):r.createElement("i",{className:"fas fa-".concat(l?"check":"times"),"data-testid":"custom-field-value-".concat(l?"true":"false")})))},m=a(16),s=function(e){var t=e.data,a=e.loadDetailRoom,n=e.selectedRoom,o=e.saveBookingRoom;return r.createElement("div",{"data-testid":"card-information",className:"card room-item"},r.createElement("div",{className:"card-header room-item-header "},r.createElement("h3",null,t.hotel.name),r.createElement("h4",null,t.hotel.score)),r.createElement("div",{className:"card-body"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col-md-4"},r.createElement("img",{src:t.image,className:"img-fluid",alt:"hotel room",width:"260px",height:"180px"})),r.createElement("div",{className:"col col-md-8"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 col-lg-8"},r.createElement("h5",{className:"card-title"},t.title)),r.createElement("div",{className:"col-12 col-lg-4"},o&&n&&-1!==n?r.createElement(r.Fragment,null,r.createElement("button",{type:"button",className:"btn btn-primary btn-book w-100","data-testid":"form-detail-button-book","data-bs-toggle":"modal","data-bs-target":"#modalFormBook",id:"form-detail-button"},r.createElement("i",{className:"far fa-calendar-check ml-3"})," Reservar"),r.createElement(f,{saveBookingRoom:o,dataRoom:t})):a&&r.createElement(m.a,{to:"/rooms/detail"},r.createElement("button",{type:"button",id:"btn-select-detail",className:"btn btn-primary btn-book w-100","data-testid":"form-button-load-detail",onClick:function(){return a&&a(t.id)}},r.createElement("i",{className:"far fa-calendar-check ml-3"})," Seleccionar"))),r.createElement("div",{className:"col-12 col-md-12"},r.createElement("h4",null,r.createElement("i",{className:"far fa-money-bill-alt"})," ",t.value)),r.createElement("div",{className:"col-12 col-md-12 d-flex"},r.createElement(i,{label:"Inicio",icon:"fa-calendar-alt",valueText:t.available_from}),r.createElement(i,{label:"-  Fin",icon:"fa-calendar-alt",valueText:t.available_until}))),r.createElement("p",{className:"card-text"},t.description),n&&-1!==n&&r.createElement("div",{className:"mb-3","data-testid":"form-field-hotel-desc"},r.createElement("p",{className:"card-text"},t.hotel.description),r.createElement(i,{label:"Direcci\xf3n",icon:"fa-map-marked-alt",valueText:"".concat(t.hotel.address)})),r.createElement("div",{className:"row"},r.createElement("div",{className:"col col-md-6"},r.createElement(i,{label:"Camas",icon:"fa-bed",valueText:"".concat(t.capacity)}),r.createElement(i,{label:"Aire",icon:"fa-wind",value:"Y"===t.ac}),r.createElement(i,{label:"Wifi",icon:"fa-wifi",value:"Y"===t.wifi})),r.createElement("div",{className:"col col-md-6"},r.createElement(i,{label:"Parqueadero",icon:"fa-car",value:"Y"===t.parking}),r.createElement(i,{label:"Ba\xf1os",icon:"fa-restroom",value:!0}),n&&-1!==n&&r.createElement(b,{score:t.hotel.stars})))))))},d={name:"",email:"",identification_type:"",identification:"",fromDateBook:"",untilDateBook:""},u=c.b().shape({name:c.c().min(2,"Nombre muy corto").max(50,"Nombre muy largo").required("Nacesitamos tu nombre"),email:c.c().email("Email no v\xe1lido").required("Necesitamos tu email"),identification_type:c.c().required("Necesitamos tu tipo de identificaci\xf3n"),identification:c.c().required("Necesitamos tu identificaci\xf3n"),fromDateBook:c.c().required("Necesitamos tu fecha de ingreso"),untilDateBook:c.c().required("Necesitamos tu fecha de salida")}),f=function(e){var t=e.saveBookingRoom,a=e.dataRoom,c=function(){$("#modalFormBook").modal("hide")},i=new Date,m=i.toISOString().split("T")[0],s=r.useState(""),f=Object(n.a)(s,2),b=f[0],p=f[1],v=Object(o.a)(i,b,m);return r.createElement(r.Fragment,null,r.createElement("div",{"data-testid":"modal-form-book"},r.createElement("div",{className:"modal fade",id:"modalFormBook","aria-labelledby":"modalFormBookLabel","data-testid":"modal-book"},r.createElement("div",{className:"modal-dialog"},r.createElement("div",{className:"modal-content"},r.createElement("div",{className:"modal-header"},r.createElement("h5",{className:"modal-title",id:"modalFormBookLabel"},"Completa tu reserva"),r.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),r.createElement("div",{className:"modal-body"},r.createElement(l.c,{initialValues:d,validationSchema:u,onSubmit:function(e,n){var o=n.resetForm;t&&t({bookData:{name:e.name,email:e.email,identification_type:e.identification_type,identification:e.identification,fromDateBook:b,untilDateBook:e.untilDateBook},roomData:a}),c(),p(""),o()}},(function(e){var t=e.errors,n=e.touched,o=e.setFieldValue;return r.createElement(l.b,{"data-testid":"modal-book-form",id:"form-modal-book"},r.createElement("div",{className:"row mb-3"},r.createElement("div",{className:"col-12 col-md-6 "},r.createElement("label",{htmlFor:"name",className:"col-12 col-form-label"},"Nombre"),r.createElement(l.a,{name:"name",className:"form-control col-12",placeholder:"eje: Joe Doe","data-testid":"modal-book-form-name",id:"book-form-name"}),t.name&&n.name?r.createElement("small",{className:"text-danger"},t.name):null),r.createElement("div",{className:" col-12 col-md-6"},r.createElement("label",{htmlFor:"email",className:"col-12 col-form-label"},"Correo electr\xf3nico"),r.createElement(l.a,{name:"email",type:"email",className:"form-control col-12","data-testid":"modal-book-form-email",placeholder:"eje: joe@email.com",id:"book-form-email"}),t.email&&n.email?r.createElement("small",{className:"text-danger"},t.email):null)),r.createElement("div",{className:"row mb-3"},r.createElement("div",{className:"col-12 col-md-6 "},r.createElement("label",{htmlFor:"name",className:"col-12 col-form-label"},"Fecha de ingreso"),r.createElement(l.a,{className:"form-control","data-testid":"form-book-fromDate",type:"date",name:"fromDateBook",id:"fromDateBook",min:m,value:b,onChange:function(e){o("fromDateBook",e.target.value),p(e.target.value)}}),t.fromDateBook&&n.fromDateBook?r.createElement("small",{className:"text-danger"},t.fromDateBook):null),r.createElement("div",{className:" col-12 col-md-6"},r.createElement("label",{htmlFor:"email",className:"col-12 col-form-label"},"Fecha de salida"),r.createElement(l.a,{className:"form-control","data-testid":"form-book-untilDate",type:"date",name:"untilDateBook",id:"untilDateBook",min:v,max:a.available_until}),t.untilDateBook&&n.untilDateBook?r.createElement("small",{className:"text-danger"},t.untilDateBook):null)),r.createElement("div",{className:"row mb-2"},r.createElement("div",{className:"col-12 col-md-6 "},r.createElement("label",{className:"pr-2",htmlFor:"identification_type"},"Tipo de identificaci\xf3n"),r.createElement(l.a,{as:"select",className:" d-block w-100","aria-label":".form-select-sm example",name:"identification_type","data-testid":"modal-book-form-identification-type",id:"book-form-select"},r.createElement("option",{value:""},"Seleccione"),r.createElement("option",{value:"1"},"C\xe9dula de ciudadan\xeda"),r.createElement("option",{value:"2"},"C\xe9dula de extranjeria"),r.createElement("option",{value:"3"},"Nit"),r.createElement("option",{value:"4"},"Pasaporte")),t.identification_type&&n.identification_type?r.createElement("small",{className:"text-danger"},t.identification_type):null),r.createElement("div",{className:" col-12 col-md-6"},r.createElement("label",{className:"pr-2",htmlFor:"identification"},"Identificaci\xf3n"),r.createElement(l.a,{name:"identification",className:"form-control",placeholder:"eje: 60830147","data-testid":"modal-book-form-identification",id:"book-form-identification"}),t.identification&&n.identification?r.createElement("small",{className:"text-danger"},t.identification):null)),r.createElement("div",{className:"d-flex justify-content-between mt-3"},r.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal","data-testid":"modal-book-form-btn-cancel",id:"modal-form-btn-cancel"},"Cancelar"),r.createElement("button",{type:"submit",className:"btn btn-primary","data-testid":"modal-book-form-btn-submit",id:"modal-form-btn-submit"},"Finalizar")))}))))))))},b=function(e){var t=e.score,a=new Array(t);return a.fill("star",0),r.createElement(r.Fragment,null,r.createElement("div",{"data-testid":"star-score"},t&&a.map((function(e,t){return r.createElement("i",{key:t,className:"fas fa-star"})}))))}}}]);
//# sourceMappingURL=5.15a3ae20.chunk.js.map