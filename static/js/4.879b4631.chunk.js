(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[4],{101:function(e,t,a){"use strict";a.d(t,"c",(function(){return y})),a.d(t,"b",(function(){return D})),a.d(t,"a",(function(){return B}));var n=a(82),l=a.n(n),o=a(83),i=a(84),c=a.n(i),r=a(66),m={"Content-Type":"application/json"},s=function(e){return c.a.post("".concat(r.a,"/booking"),e,{headers:m})},d=function(e){return c.a.get("".concat(r.a,"/booking").concat(function(e){var t="";return e&&""!==e.email&&""!==e.identification_type&&""!==e.identification&&(t="?bookData.email=".concat(e.email,"&bookData.identification_type=").concat(e.identification_type,"&bookData.identification=").concat(e.identification)),t}(e)))},u=function(e){return c.a.delete("".concat(r.a,"/booking/").concat(e))},f=a(20),b=a(18),E={message:"",type:""};function p(e){return{type:b.c,payload:e}}function v(e){return{type:b.b,payload:e}}function N(e){return{type:b.d,payload:e}}function k(e){return{type:b.a,payload:e}}function g(e){return{type:f.b,payload:e}}function h(e){return{type:f.a,payload:e}}function y(e){return function(){var t=Object(o.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(!0)),t.next=3,s(e).then((function(e){return a(g(!1)),a(h(E)),a(p(e.data.id))})).catch((function(e){return a(g(!1)),a(h({type:"rooms-save-book",message:"Se ha presentado un error al guardar tu reserva. Por favor, intente nuevamente"})),a(p(-1))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function D(e){return function(){var t=Object(o.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(!0)),t.next=3,d(e).then((function(e){return a(g(!1)),a(h(E)),a(v(e.data))})).catch((function(e){return a(g(!1)),a(h({type:"books",message:"Se ha presentado un error al cargar las reservas. Por favor, intente nuevamente"})),a(v([]))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function B(e){return function(){var t=Object(o.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(!0)),a(N(e)),t.next=4,u(e).then((function(e){return a(g(!1)),a(h(E)),a(N(-1)),a(k(0))})).catch((function(e){return a(g(!1)),a(h({type:"books",message:"Se ha presentado un error al cancelar la reserva. Por favor, intente nuevamente"})),a(N(-1)),a(k(1))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},151:function(e,t,a){"use strict";a.r(t);var n=a(75),l=a(0),o=a(101),i=a(27),c=a(67),r=a(64),m=a(85),s=a(72),d=a(71),u={email:"",identification_type:"",identification:""},f=d.b().shape({email:d.c().email("Email no v\xe1lido").required("Necesitamos tu email"),identification_type:d.c().required("Necesitamos tu tipo de identificaci\xf3n"),identification:d.c().required("Necesitamos tu identificaci\xf3n")}),b=function(e){var t=e.onFindBooking;return l.createElement(l.Fragment,null,l.createElement("div",{"data-testid":"find-bookings",className:"card-rooms"},l.createElement("div",{className:"row"},l.createElement("div",{className:"card filter-area "},l.createElement("h4",{className:"mt-3"},"Encuentra tu reserva"),l.createElement("div",{className:"col"},l.createElement(s.c,{initialValues:u,validationSchema:f,onSubmit:function(e,a){a.resetForm;t({email:e.email,identification_type:e.identification_type,identification:e.identification})}},(function(e){var t=e.errors,a=e.touched;return l.createElement(s.b,{"data-testid":"form-find-bookings"},l.createElement("div",{className:"form-group row mb-3 mt-3"},l.createElement("div",{className:" col-12 col-md-4"},l.createElement("label",{htmlFor:"email",className:"col-12 col-form-label"},"Correo electr\xf3nico*"),l.createElement(s.a,{name:"email","data-testid":"form-bookings-email",type:"email",className:"form-control col-12",placeholder:"eje: joe@email.com"}),t.email&&a.email?l.createElement("small",{className:"text-danger"},t.email):null),l.createElement("div",{className:"col-12 col-md-4"},l.createElement("label",{className:"col-12 col-form-label",htmlFor:"identification_type"},"Tipo de identificaci\xf3n*"),l.createElement(s.a,{as:"select",className:" d-block w-100","data-testid":"form-bookings-identification_type","aria-label":".form-select",id:"identification_type",name:"identification_type"},l.createElement("option",{value:""},"Seleccione"),l.createElement("option",{value:"1"},"C\xe9dula de ciudadan\xeda"),l.createElement("option",{value:"2"},"C\xe9dula de extranjeria"),l.createElement("option",{value:"3"},"Nit"),l.createElement("option",{value:"4"},"Pasaporte")),t.identification_type&&a.identification_type?l.createElement("small",{className:"text-danger"},t.identification_type):null),l.createElement("div",{className:" col-12 col-md-4"},l.createElement("label",{className:"col-12 col-form-label",htmlFor:"identification"},"Identificaci\xf3n*"),l.createElement(s.a,{name:"identification",id:"identification",className:"form-control","data-testid":"form-bookings-identification",placeholder:"eje: 60830147"}),t.identification&&a.identification?l.createElement("small",{className:"text-danger"},t.identification):null)),l.createElement("div",{className:"row"},l.createElement("div",{className:"mt-4 text-center"},l.createElement(m.a,{type:"submit",className:"btn w-75","data-testid":"form-bookings-btn-submit"},"Buscar")),l.createElement("div",{className:"text-center mb-2 mt-1"},l.createElement(m.a,{className:"button-link","data-testid":"form-bookings-btn-reset",type:"reset"},"limpiar"))))})))))))},E=a(74),p=a(76),v=a(69),N=function(e){var t=e.listBookingsFinded,a=e.cancelBooking,n=e.isLoading,o=l.useState(void 0),i=Object(E.a)(o,2),c=i[0],r=i[1],m=function(e){r(e)};return l.createElement(l.Fragment,null,n&&l.createElement(v.a,null),l.createElement("div",{"data-testid":"list-bookings",className:"card-rooms"},l.createElement("div",{className:"row pt-5"},l.createElement("div",{className:"col"},t&&t.length>0?t.map((function(e,t){return l.createElement("div",{"data-testid":"card-information-bookigns",className:"card room-item",key:t},l.createElement("div",{className:"card-header book-item-header "},l.createElement("h3",null,e.roomData.hotel.name)),l.createElement("div",{className:"card-body"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12 col-md-6 col-lg-3"},l.createElement("h5",null,"A nombre de:"),l.createElement("span",null,e.bookData.name),l.createElement("h5",{className:"mt-2"},"Ingreso:"),l.createElement("span",null,e.bookData.fromDateBook)),l.createElement("div",{className:"col-12 col-md-6 col-lg-3"},l.createElement("h5",null,"Habitaci\xf3n:"),l.createElement("span",null,e.roomData.title),l.createElement("h5",{className:"mt-2"},"Salida:"),l.createElement("span",null,e.bookData.untilDateBook)),l.createElement("div",{className:"col-12 col-md-6 col-lg-3"},l.createElement("h5",null,"Valor:"),l.createElement("span",null,e.roomData.value),l.createElement("h5",{className:"mt-2"},"Camas:"),l.createElement("span",null,e.roomData.capacity)),l.createElement("div",{className:"col-12 col-md-6 col-lg-3"},l.createElement(k,{detailRoom:c}),l.createElement("button",{type:"button",className:"btn btn-primary btn-book w-100 mt-2","data-testid":"list-book-btn-detail","data-bs-toggle":"modal",id:"list-book-btn-detail","data-bs-target":"#modalDetailBook",onClick:function(){return m(e.roomData)}},l.createElement("i",{className:"fas fa-check ml-3"})," Detalles"),l.createElement("button",{type:"button",className:"btn btn-danger btn-book w-100 mt-3","data-testid":"list-book-btn-cancel",id:"list-book-btn-cancel","data-bs-toggle":"modal","data-bs-target":"#modalDeleteBook",onClick:function(){return m(e.roomData)}},l.createElement("i",{className:"fas fa-times ml-3"})," Cancelar"),l.createElement(g,{detailRoom:c,confirmDelete:function(){return e.id&&a(e.id)}})))))})):l.createElement("div",{className:"text-center"},l.createElement("h5",null,"No hay reservas para mostrar"))))))},k=function(e){var t=e.detailRoom;return l.createElement(l.Fragment,null,l.createElement("div",{className:"modal fade",id:"modalDetailBook","data-testid":"modal-detail-book","aria-labelledby":"modalDetailBookLabel"},l.createElement("div",{className:"modal-dialog modal-xl"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal-header"},l.createElement("h5",{className:"modal-title",id:"modalDetailBookLabel"},"Detalles de tu reserva"),l.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.createElement("div",{className:"modal-body"},t&&l.createElement(p.a,{data:t,selectedRoom:t.id}))))))},g=function(e){var t=e.detailRoom,a=e.confirmDelete,n=function(){$("#modalDeleteBook").modal("hide")};return l.createElement(l.Fragment,null,l.createElement("div",{className:"modal fade",id:"modalDeleteBook","data-testid":"modal-book-delete","aria-labelledby":"modalDeleteBookLabel"},l.createElement("div",{className:"modal-dialog modal-xl"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal-header"},l.createElement("h5",{className:"modal-title",id:"modalDeleteBookLabel"},"Eliminar reserva"),l.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.createElement("div",{className:"modal-body"},t&&l.createElement("h5",null,"\xbfEst\xe1 seguro de cancelar la reserva de ".concat(t.title," en ").concat(t.hotel.name,"?"))),l.createElement("div",{className:"modal-footer"},l.createElement("div",{className:"d-flex justify-content-between w-100"},l.createElement("button",{type:"button",className:"btn btn-secondary w-25","data-testid":"modal-book-delete-no","data-bs-dismiss":"modal"},"No"),l.createElement("button",{type:"button",className:"btn btn-danger w-25","data-testid":"modal-book-delete-cancel",onClick:function(){a(),n()}},"S\xed, cancelar")))))))},h=a(4);function y(){var e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n"]);return y=function(){return e},e}var D=a(5).a.div(y()),B=Object(i.b)((function(e){return{listBookingsFinded:e.bookings.listBookings,isLoading:e.main.isLoading,errorMessage:e.main.errorMessage}}),{findBooking:o.b,cancelBooking:o.a})((function(e){var t=e.findBooking,a=e.listBookingsFinded,n=e.cancelBooking,o=e.isLoading,i=e.errorMessage;return l.useEffect((function(){""!==i.message&&"books"===i.type&&r.b.error(i.message)}),[i]),l.createElement(D,{"data-testid":"book"},l.createElement(c.a,null),l.createElement(b,{onFindBooking:t}),l.createElement(N,{listBookingsFinded:a,cancelBooking:n,isLoading:o}))})),x=function(){return l.createElement(n.a,{title:"Reservar",description:"Consulte las reservaciones hechas"},l.createElement(B,null))};x.displayName="HomeMainPage";t.default=x},62:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t,a){if(t===a)return e.setDate(e.getDate()+1),e.toISOString().split("T")[0];var n=""!==t?new Date(t):e;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="http://find-hotels-json-server.herokuapp.com"},67:function(e,t,a){"use strict";var n=a(0),l=a(64);t.a=function(){return n.createElement("div",{"data-testid":"toast-error"},n.createElement(l.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))}},69:function(e,t,a){"use strict";var n=a(0),l=a(70),o=a.n(l);t.a=function(){return n.createElement(n.Fragment,null,n.createElement("div",{"data-testid":"view-spinner",className:"container-loader"},n.createElement("img",{"data-testid":"view-spinner-loader",src:o.a,alt:"loading",className:"img-loader"})))}},70:function(e,t,a){e.exports=a.p+"static/media/loading.890fa681.gif"},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),l=a(81),o=a(4);function i(){var e=Object(o.a)(["\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return i=function(){return e},e}var c=a(5).a.div(i()),r=function(e){var t=e.children,a=e.title,o=e.description;return n.createElement(n.Fragment,null,n.createElement(l.a,null,a&&n.createElement("title",null,"Find hotel | ",a),o&&n.createElement("meta",{name:"description",content:o})),n.createElement(c,{"data-testid":"layout"},t))}},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(74),l=a(62),o=a(72),i=a(0),c=a(71),r=function(e){var t=e.label,a=e.icon,n=e.value,l=e.valueText,o=void 0!==n&&!0===n;return i.createElement(i.Fragment,null,i.createElement("h6",{"data-testid":"custom-field",className:"font-weight-bold"},t," ",i.createElement("i",{className:"fas ".concat(a)})," :"," ",l&&""!==l?i.createElement("span",{"data-testid":"custom-field-value-text"},l):i.createElement("i",{className:"fas fa-".concat(o?"check":"times"),"data-testid":"custom-field-value-".concat(o?"true":"false")})))},m=a(16),s=function(e){var t=e.data,a=e.loadDetailRoom,n=e.selectedRoom,l=e.saveBookingRoom;return i.createElement("div",{"data-testid":"card-information",className:"card room-item"},i.createElement("div",{className:"card-header room-item-header "},i.createElement("h3",null,t.hotel.name),i.createElement("h4",null,t.hotel.score)),i.createElement("div",{className:"card-body"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col col-md-4"},i.createElement("img",{src:t.image,className:"img-fluid",alt:"hotel room",width:"260px",height:"180px"})),i.createElement("div",{className:"col col-md-8"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-12 col-lg-8"},i.createElement("h5",{className:"card-title"},t.title)),i.createElement("div",{className:"col-12 col-lg-4"},l&&n&&-1!==n?i.createElement(i.Fragment,null,i.createElement("button",{type:"button",className:"btn btn-primary btn-book w-100","data-testid":"form-detail-button-book","data-bs-toggle":"modal","data-bs-target":"#modalFormBook",id:"form-detail-button"},i.createElement("i",{className:"far fa-calendar-check ml-3"})," Reservar"),i.createElement(f,{saveBookingRoom:l,dataRoom:t})):a&&i.createElement(m.a,{to:"/rooms/detail"},i.createElement("button",{type:"button",id:"btn-select-detail",className:"btn btn-primary btn-book w-100","data-testid":"form-button-load-detail",onClick:function(){return a&&a(t.id)}},i.createElement("i",{className:"far fa-calendar-check ml-3"})," Seleccionar"))),i.createElement("div",{className:"col-12 col-md-12"},i.createElement("h4",null,i.createElement("i",{className:"far fa-money-bill-alt"})," ",t.value)),i.createElement("div",{className:"col-12 col-md-12 d-flex"},i.createElement(r,{label:"Inicio",icon:"fa-calendar-alt",valueText:t.available_from}),i.createElement(r,{label:"-  Fin",icon:"fa-calendar-alt",valueText:t.available_until}))),i.createElement("p",{className:"card-text"},t.description),n&&-1!==n&&i.createElement("div",{className:"mb-3","data-testid":"form-field-hotel-desc"},i.createElement("p",{className:"card-text"},t.hotel.description),i.createElement(r,{label:"Direcci\xf3n",icon:"fa-map-marked-alt",valueText:"".concat(t.hotel.address)})),i.createElement("div",{className:"row"},i.createElement("div",{className:"col col-md-6"},i.createElement(r,{label:"Camas",icon:"fa-bed",valueText:"".concat(t.capacity)}),i.createElement(r,{label:"Aire",icon:"fa-wind",value:"Y"===t.ac}),i.createElement(r,{label:"Wifi",icon:"fa-wifi",value:"Y"===t.wifi})),i.createElement("div",{className:"col col-md-6"},i.createElement(r,{label:"Parqueadero",icon:"fa-car",value:"Y"===t.parking}),i.createElement(r,{label:"Ba\xf1os",icon:"fa-restroom",value:!0}),n&&-1!==n&&i.createElement(b,{score:t.hotel.stars})))))))},d={name:"",email:"",identification_type:"",identification:"",fromDateBook:"",untilDateBook:""},u=c.b().shape({name:c.c().min(2,"Nombre muy corto").max(50,"Nombre muy largo").required("Nacesitamos tu nombre"),email:c.c().email("Email no v\xe1lido").required("Necesitamos tu email"),identification_type:c.c().required("Necesitamos tu tipo de identificaci\xf3n"),identification:c.c().required("Necesitamos tu identificaci\xf3n"),fromDateBook:c.c().required("Necesitamos tu fecha de ingreso"),untilDateBook:c.c().required("Necesitamos tu fecha de salida")}),f=function(e){var t=e.saveBookingRoom,a=e.dataRoom,c=function(){$("#modalFormBook").modal("hide")},r=new Date,m=r.toISOString().split("T")[0],s=i.useState(""),f=Object(n.a)(s,2),b=f[0],E=f[1],p=Object(l.a)(r,b,m);return i.createElement(i.Fragment,null,i.createElement("div",{"data-testid":"modal-form-book"},i.createElement("div",{className:"modal fade",id:"modalFormBook","aria-labelledby":"modalFormBookLabel","data-testid":"modal-book"},i.createElement("div",{className:"modal-dialog"},i.createElement("div",{className:"modal-content"},i.createElement("div",{className:"modal-header"},i.createElement("h5",{className:"modal-title",id:"modalFormBookLabel"},"Completa tu reserva"),i.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),i.createElement("div",{className:"modal-body"},i.createElement(o.c,{initialValues:d,validationSchema:u,onSubmit:function(e,n){var l=n.resetForm;t&&t({bookData:{name:e.name,email:e.email,identification_type:e.identification_type,identification:e.identification,fromDateBook:b,untilDateBook:e.untilDateBook},roomData:a}),c(),E(""),l()}},(function(e){var t=e.errors,n=e.touched,l=e.setFieldValue;return i.createElement(o.b,{"data-testid":"modal-book-form",id:"form-modal-book"},i.createElement("div",{className:"row mb-3"},i.createElement("div",{className:"col-12 col-md-6 "},i.createElement("label",{htmlFor:"name",className:"col-12 col-form-label"},"Nombre"),i.createElement(o.a,{name:"name",className:"form-control col-12",placeholder:"eje: Joe Doe","data-testid":"modal-book-form-name",id:"book-form-name"}),t.name&&n.name?i.createElement("small",{className:"text-danger"},t.name):null),i.createElement("div",{className:" col-12 col-md-6"},i.createElement("label",{htmlFor:"email",className:"col-12 col-form-label"},"Correo electr\xf3nico"),i.createElement(o.a,{name:"email",type:"email",className:"form-control col-12","data-testid":"modal-book-form-email",placeholder:"eje: joe@email.com",id:"book-form-email"}),t.email&&n.email?i.createElement("small",{className:"text-danger"},t.email):null)),i.createElement("div",{className:"row mb-3"},i.createElement("div",{className:"col-12 col-md-6 "},i.createElement("label",{htmlFor:"name",className:"col-12 col-form-label"},"Fecha de ingreso"),i.createElement(o.a,{className:"form-control","data-testid":"form-book-fromDate",type:"date",name:"fromDateBook",id:"fromDateBook",min:m,value:b,onChange:function(e){l("fromDateBook",e.target.value),E(e.target.value)}}),t.fromDateBook&&n.fromDateBook?i.createElement("small",{className:"text-danger"},t.fromDateBook):null),i.createElement("div",{className:" col-12 col-md-6"},i.createElement("label",{htmlFor:"email",className:"col-12 col-form-label"},"Fecha de salida"),i.createElement(o.a,{className:"form-control","data-testid":"form-book-untilDate",type:"date",name:"untilDateBook",id:"untilDateBook",min:p,max:a.available_until}),t.untilDateBook&&n.untilDateBook?i.createElement("small",{className:"text-danger"},t.untilDateBook):null)),i.createElement("div",{className:"row mb-2"},i.createElement("div",{className:"col-12 col-md-6 "},i.createElement("label",{className:"pr-2",htmlFor:"identification_type"},"Tipo de identificaci\xf3n"),i.createElement(o.a,{as:"select",className:" d-block w-100","aria-label":".form-select-sm example",name:"identification_type","data-testid":"modal-book-form-identification-type",id:"book-form-select"},i.createElement("option",{value:""},"Seleccione"),i.createElement("option",{value:"1"},"C\xe9dula de ciudadan\xeda"),i.createElement("option",{value:"2"},"C\xe9dula de extranjeria"),i.createElement("option",{value:"3"},"Nit"),i.createElement("option",{value:"4"},"Pasaporte")),t.identification_type&&n.identification_type?i.createElement("small",{className:"text-danger"},t.identification_type):null),i.createElement("div",{className:" col-12 col-md-6"},i.createElement("label",{className:"pr-2",htmlFor:"identification"},"Identificaci\xf3n"),i.createElement(o.a,{name:"identification",className:"form-control",placeholder:"eje: 60830147","data-testid":"modal-book-form-identification",id:"book-form-identification"}),t.identification&&n.identification?i.createElement("small",{className:"text-danger"},t.identification):null)),i.createElement("div",{className:"d-flex justify-content-between mt-3"},i.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal","data-testid":"modal-book-form-btn-cancel",id:"modal-form-btn-cancel"},"Cancelar"),i.createElement("button",{type:"submit",className:"btn btn-primary","data-testid":"modal-book-form-btn-submit",id:"modal-form-btn-submit"},"Finalizar")))}))))))))},b=function(e){var t=e.score,a=new Array(t);return a.fill("star",0),i.createElement(i.Fragment,null,i.createElement("div",{"data-testid":"star-score"},t&&a.map((function(e,t){return i.createElement("i",{key:t,className:"fas fa-star"})}))))}},85:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(4);function l(){var e=Object(n.a)(["\n  background: #ffea00;\n  border-radius: 10px;\n  color: #000;\n  height: auto;\n  font-weight: 700;\n  text-align: center;\n  &[disabled] {\n    opacity: 0.3;\n  }\n"]);return l=function(){return e},e}var o=a(5).a.button(l())}}]);
//# sourceMappingURL=4.879b4631.chunk.js.map