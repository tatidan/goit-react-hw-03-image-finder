(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),c=a(7),r=a.n(c),s=(a(22),a(3)),l=a(4),i=a(6),u=a(5),h=a(17),d=a.n(h),p=a(0),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={ApiURL:"https://pixabay.com/api/",ApiKEY:"22378811-a58ebb6e61fd3d97b045a8b50",page:1,keyWord:"sea",photos:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.ApiURL,n=t.ApiKEY,o=t.keyWord,c=t.page,r="".concat(a,"?q=").concat(o,"=").concat(c,"&key=").concat(n,"&image_type=photo&orientation=horizontal&per_page=12");console.log(r),d.a.get(r).then((function(t){var a=t.data;e.setState({photos:a.hits}),console.log(e.state.photos)}))}},{key:"render",value:function(){var e=this.state.photos;return console.log(e),Object(p.jsxs)("ul",{className:"ImageGallery",children:[e.map((function(e){return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{src:e.webformatURL,id:e.id,alt:e.tags,className:"ImageGalleryItem-image"})})})),";"]})}}]),a}(n.Component),m=document.querySelector("#modal-root"),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"escape"===t.code&&(console.log("ESC, close modal"),e.props.onClose())},e.handleBackdropClick=function(t){console.log("click onto backdrop"),t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("will unmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{alt:""})})}),m)}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={keyWord:"",page:1},e.handleChange=function(t){e.setState({keyWord:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.keyWord),e.setState({keyWord:e.state.keyWord})},e.reset=function(){e.setState({keyWord:"",page:1})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onSubmit=function(e){console.log(e),console.log(e.target)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.showModal;return Object(p.jsxs)("div",{className:"App",children:[e&&Object(p.jsx)(j,{onClose:this.toggleModal}),Object(p.jsx)(g,{onSubmit:this.onSubmit}),Object(p.jsx)(b,{})]})}}]),a}(n.Component);r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.182c6b13.chunk.js.map