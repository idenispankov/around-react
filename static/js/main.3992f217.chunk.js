(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),s=n(7),c=n.n(s),i=(n(6),n(10)),l=n(2),u=n.p+"static/media/header__logo.4e8e0a1d.svg";function d(e){var t=e.logo;return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:t,alt:"Around US logo"})})}var b=Object(r.createContext)();function m(e){var t=e.card,n=e.onCardClick,o=e.onCardLike,s=e.onCardDelete,c=Object(r.useContext)(b),i=t.owner._id===c._id,l=t.likes.some((function(e){return e._id===c._id}));return Object(a.jsxs)("li",{className:"card",children:[i&&Object(a.jsx)("button",{className:"card__delete-button","aria-label":"Delete button",type:"reset",onClick:function(){s(t)}}),Object(a.jsx)("img",{className:"card__image",alt:t.name,src:t.link,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"card__group",children:[Object(a.jsx)("h2",{className:"card__text",children:t.name}),Object(a.jsxs)("div",{className:"card__like-container",children:[Object(a.jsx)("button",{className:"card__like-button ".concat(l?"card__like-button_active":null),"aria-label":"Like button",type:"button",onClick:function(){o(t)}}),Object(a.jsx)("p",{className:"card__like-button-count",children:t.likes.length})]})]})]})}function j(e){var t=e.cards,n=e.onEditAvatar,o=e.onEditProfile,s=e.onAddPlace,c=e.onCardClick,i=e.onLikeClick,l=e.onDeleteClick,u=Object(r.useContext)(b);return Object(a.jsxs)("main",{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("button",{className:"profile__avatar-edit",onClick:n,children:Object(a.jsx)("img",{className:"profile__avatar",src:u.avatar,alt:"profile avatar"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__text",children:u.name}),Object(a.jsx)("button",{className:"profile__edit-button",onClick:o,"aria-label":"Edit Avatar",type:"button"}),Object(a.jsx)("p",{className:"profile__paragraph",children:u.about})]}),Object(a.jsx)("button",{className:"profile__add-button",onClick:s,"aria-label":"Add button",type:"button"})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__list",children:t.map((function(e){return Object(a.jsx)(m,{card:e,currentUserId:u._id,onCardClick:c,onCardLike:i,onCardDelete:l},e._id)}))})})]})}function f(e){var t=e.footerText;return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:t})})}function h(e){var t=e.selectedCard,n=e.onClose;return Object(a.jsx)("div",{className:"modal modal_type_image ".concat(t?"modal_is-open":null),children:Object(a.jsxs)("figure",{className:"modal__figure",children:[Object(a.jsx)("button",{className:"form__close-button form__close-button_type-image",onClick:n,"aria-label":"Close button",type:"button"}),Object(a.jsx)("img",{className:"modal__image",src:t?t.link:null,alt:t?t.name:null}),Object(a.jsx)("figcaption",{className:"modal__image-title",children:t?t.name:null})]})})}var p=n(8),_=n(9),O=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(p.a)(this,e),this._baseUrl=n,this._headers=a}return Object(_.a)(e,[{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"setUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"addCard",value:function(e){return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"updateLikes",value:function(e,t){var n="DELETE";return t&&(n="PUT"),fetch(this._baseUrl+"/cards/likes/"+e,{method:n,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-6",headers:{authorization:"7de1d63b-0ba0-4390-89a7-2fe6bdf9eada","Content-Type":"application/json"}}),v=n.p+"static/media/avatar_type_dark.46e6bf6d.jpg";function x(e){return Object(a.jsx)("div",{className:"modal modal_type_".concat(e.modalName," ").concat(e.isOpen&&"modal_is-open"),children:Object(a.jsxs)("form",{action:"#",className:"form form_".concat(e.formType),onSubmit:e.onSubmit,children:[Object(a.jsx)("h3",{className:"form__title",children:e.formTitle}),e.children,Object(a.jsx)("button",{className:"form__button form__button_type_save",type:"submit",children:e.submitText}),Object(a.jsx)("button",{className:"form__close-button",onClick:e.onClose,"aria-label":"Close button",type:"reset"})]})})}function C(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:e.type,placeholder:e.placeholder,className:"form__input form__input_".concat(e.inputType),name:e.name,description:e.description,minLength:e.min,maxLength:e.max,onChange:e.handleChange,value:e.value,required:!0}),Object(a.jsx)("span",{id:e.errorType,className:"form__error"})]})}function g(e){var t=Object(r.useContext)(b),n=Object(r.useState)(""),o=Object(l.a)(n,2),s=o[0],c=o[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),d=u[0],m=u[1];return Object(r.useEffect)((function(){c(t.name),m(t.about)}),[t]),Object(a.jsxs)(x,{modalName:"edit_profile",formType:"type_profile",formTitle:"Edit profile",submitText:e.submitStatus?"Saving...":"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:d}),e.setSubmitStatus(!0)},children:[Object(a.jsx)(C,{type:"text",name:"profile",placeholder:"Name",inputType:"type_name",min:"2",max:"40",id:"profile-name-error",handleChange:function(e){c(e.target.value)},value:s}),Object(a.jsx)(C,{type:"text",name:"about",placeholder:"About me",inputType:"type_about",min:"2",max:"200",id:"profile-about-error",handleChange:function(e){m(e.target.value)},value:d})]})}function k(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],c=Object(r.useContext)(b);return Object(r.useEffect)((function(){s(c.avatar)}),[c]),Object(a.jsx)(x,{modalName:"type_avatar",formType:"type_avatar",formTitle:"Edit Change Profile Picture",submitText:e.submitStatus?"Saving...":"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:o}),e.setSubmitStatus(!0)},children:Object(a.jsx)(C,{type:"url",name:"avatar",placeholder:"Image Link",inputType:"type_avatar",id:"avatar-url-error",handleChange:function(e){s(e.target.value)},value:o})})}var y=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],c=Object(r.useState)(""),i=Object(l.a)(c,2),u=i[0],d=i[1];return Object(a.jsxs)(x,{modalName:"type_add-card",formType:"type_profile",formTitle:"New Place",submitText:e.submitStatus?"Creating...":"Create",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:o,link:u}),e.setSubmitStatus(!0),s(""),d("")},children:[Object(a.jsx)(C,{type:"text",placeholder:"Title",inputType:"card-title",name:"title",id:"card-title-error",handleChange:function(e){s(e.target.value)},value:o}),Object(a.jsx)(C,{type:"url",placeholder:"Image Link",inputType:"card-url",name:"url",id:"card-url-error",handleChange:function(e){d(e.target.value)},value:u})]})};var S=function(e){return Object(a.jsx)(x,{modalName:"type_delete-card",formType:"type_profile",formTitle:"Are you sure?",submitText:e.submitStatus?"Deleting...":"Yes",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.deleteCard),e.setSubmitStatus(!0)},card:e.deleteCard})};function N(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],s=Object(r.useState)(!1),c=Object(l.a)(s,2),m=c[0],p=c[1],_=Object(r.useState)(!1),x=Object(l.a)(_,2),C=x[0],N=x[1],T=Object(r.useState)(!1),E=Object(l.a)(T,2),U=E[0],P=E[1],L=Object(r.useState)(null),A=Object(l.a)(L,2),D=A[0],I=A[1],w=Object(r.useState)(!1),F=Object(l.a)(w,2),J=F[0],B=F[1],H=Object(r.useState)(null),q=Object(l.a)(H,2),z=q[0],M=q[1],Y=Object(r.useState)({name:"",about:"",avatar:v}),G=Object(l.a)(Y,2),K=G[0],Q=G[1],R=Object(r.useState)([]),V=Object(l.a)(R,2),W=V[0],X=V[1];function Z(e){o(!1),p(!1),N(!1),P(!1),I(null),B(!1),te(!1)}function $(e){"Escape"===e.key&&Z()}function ee(e){e.target.classList.contains("modal")&&Z()}function te(e){e?document.addEventListener("keyup",$):document.removeEventListener("keyup",$),e?document.addEventListener("click",ee):document.removeEventListener("click",ee)}function ne(e){O.removeCard(e._id).then((function(){var t=W.filter((function(t){return t._id!==e._id}));X(t),Z()})).catch((function(e){return console.log(e)}))}return Object(r.useEffect)((function(){Promise.all([O.getUserInfo(),O.getCardList({})]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];Q(n),X(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsx)(b.Provider,{value:K,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsxs)("div",{className:"page__container",children:[Object(a.jsx)(d,{logo:u}),Object(a.jsx)(j,{onEditAvatar:function(){o(!0)},onEditProfile:function(){p(!0),te(!0)},onAddPlace:function(){N(!0),te(!0)},onDeleteClick:function(e){M(e),P(!0),te(!0)},onCardClick:function(e){I(e),te(!0)},cards:W,onDeleteCard:ne,onLikeClick:function(e){var t=e.likes.some((function(e){return e._id===K._id}));O.updateLikes(e._id,!t).then((function(t){var n=W.map((function(n){return n._id===e._id?t:n}));X(n)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(f,{footerText:"\xa9 2020 Around The U.S."})]}),Object(a.jsx)(g,{isOpen:m,onClose:Z,onUpdateUser:function(e){O.setUserInfo(e).then((function(e){Q(e),Z()})).catch((function(e){return console.log(e)}))},submitStatus:J,setSubmitStatus:B}),Object(a.jsx)(k,{isOpen:n,onClose:Z,onUpdateAvatar:function(e){O.setUserAvatar(e).then((function(e){Q(e),Z()})).catch((function(e){return console.log(e)}))},submitStatus:J,setSubmitStatus:B}),Object(a.jsx)(y,{isOpen:C,onClose:Z,onAddPlace:function(e){O.addCard({name:e.name,link:e.link}).then((function(e){X([e].concat(Object(i.a)(W))),Z()})).catch((function(e){return console.log(e)}))},submitStatus:J,setSubmitStatus:B}),Object(a.jsx)(S,{isOpen:U,onClose:Z,onDeleteCard:ne,submitStatus:J,setSubmitStatus:B,deleteCard:z}),Object(a.jsx)(h,{onClose:Z,selectedCard:D})]})})}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),T()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.3992f217.chunk.js.map