(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(17),s=a.n(c),i=a(8),u=a(3),o=a(4),l=a(6),h=a(5),m=a(0),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleInputChange=function(t){var a=t.currentTarget.value;e.setState({query:a})},e.handleOnSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleOnSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.input,onChange:this.handleInputChange})]})})}}]),a}(n.Component),b=function(e){var t=e.smallSize,a=e.alt,n=e.largeSize;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:t,alt:a,"data-large":n,className:"ImageGalleryItem-image"})})},j=function(e){var t=e.images;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(m.jsx)(b,{smallSize:e.webformatURL,alt:e.tags,largeSize:e.largeImageURL},e.id)}))})},p=a(18),d=a.n(p),f=function(e){var t=e.searchQuery,a=void 0===t?"cat":t,n=e.currentPage,r=void 0===n?1:n;return d.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("20763996-832cb39490986f382e23fb6d5","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},y=(a(42),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",isLoading:!1,currentPage:1},e.onChangeInput=function(t){e.setState({searchQuery:t,currentPage:1,images:[]})},e.getImages=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),f(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(e){return"".concat(e)}))},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.getImages()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{onSubmit:this.onChangeInput}),Object(m.jsx)(j,{images:this.state.images})]})}}]),a}(n.Component));s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2cc6e0d9.chunk.js.map