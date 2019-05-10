(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e){e.exports=["fantasy","thriller","drama","mystery","horror","satire","computers"]},2:function(e,t,a){e.exports={list:"bookList_list__132Ob",img:"bookList_img__3GcGW",listItem:"bookList_listItem__3D8oM",title:"bookList_title__1Pr2M"}},23:function(e,t,a){e.exports=a(68)},3:function(e,t,a){e.exports={wrapper:"booksApi_wrapper__3_rq2",form:"booksApi_form__3ZXQF",button:"booksApi_button__3cE3b",spinner:"booksApi_spinner__23qiY"}},4:function(e,t,a){e.exports={label:"searchBar_label__27_Bu",span:"searchBar_span__2IQ_s",input:"searchBar_input__Qj_z-"}},5:function(e,t,a){e.exports={select:"optionsBar_select__3y33Q"}},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),s=a(14),c=a(15),i=a(16),u=a(21),m=a(17),p=a(22),f=a(18),h=a.n(f),_=a(19),b=a(4),g=a.n(b),v=function(e){var t=e.value,a=e.onChange,n=e.name;return r.a.createElement("label",{className:g.a.label,htmlFor:"bookName"},r.a.createElement("span",{className:g.a.span},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0443\u044e \u0442\u0435\u043c\u0443"),r.a.createElement("input",{className:g.a.input,id:"bookName",name:n,value:t,onChange:a,type:"text"}))},E=a(5),d=a.n(E),k=function(e){var t=e.genres,a=e.onChange,n=e.name,l=e.value;return r.a.createElement("select",{className:d.a.select,name:n,value:l,onChange:a},r.a.createElement("option",{className:d.a.option,value:"",defaultValue:!0,disabled:!0},"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0436\u0430\u043d\u0440"),t.map(function(e){return r.a.createElement("option",{className:d.a.option,key:e,value:e},e)}))},N=a(20),y=a.n(N),I=function(e,t){return y.a.get("".concat("https://www.googleapis.com/books/v1/volumes?q="+e,"+subject:").concat(t,"&key=AIzaSyD9d2j89zZl7mCsN2AnjfkYS9g28hWRcYE"))},w=a(2),S=a.n(w),C=function(e){var t=e.articles;return r.a.createElement("ul",{className:S.a.list},t.map(function(e){return r.a.createElement("li",{className:S.a.listItem,key:e.id},r.a.createElement("img",{className:S.a.img,src:e.volumeInfo.imageLinks.thumbnail,alt:"Book"}),r.a.createElement("h2",{className:S.a.title},e.volumeInfo.title),r.a.createElement("p",{className:S.a.descr},e.volumeInfo.description),e.volumeInfo.authors&&r.a.createElement("p",{className:StyleSheet.author},"\u0410\u0432\u0442\u043e\u0440/a: ",e.volumeInfo.authors.map(function(e){return e})),r.a.createElement("p",{className:S.a.publisher},"\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c: ",e.volumeInfo.publisher),r.a.createElement("p",null,"\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f: ",e.volumeInfo.publishedDate),r.a.createElement("p",null,"\u041a-\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446: ",e.volumeInfo.pageCount),r.a.createElement("p",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0439 \u0440\u0435\u0439\u0442\u0438\u043d\u0433:"," ","NOT_MATURE"===e.volumeInfo.maturityRating?"\u0411\u0435\u0437 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u044b\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439":"18+"))}))},j=function(e){var t=e.text;return r.a.createElement("p",null,t)},x=a(3),B=a.n(x),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!1,title:"",genre:"",error:null},a.onHandleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.fetchBooks=function(e,t){a.setState({isLoading:!0}),I(e,t).then(function(e){var t=e.data;return a.setState({articles:t.items})}).catch(function(e){return a.setState({error:e})}).finally(function(){return a.setState({isLoading:!1})})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.genre;a.fetchBooks(n,r),a.reset()},a.reset=function(){a.setState({title:"",genre:"",articles:[],error:null})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.genre,n=e.articles,l=e.isLoading,o=e.error;return r.a.createElement("div",{className:B.a.wrapper},r.a.createElement("form",{className:B.a.form,onSubmit:this.handleSubmit},r.a.createElement(v,{name:"title",value:t,onChange:this.onHandleChange}),r.a.createElement(k,{name:"genre",value:a,onChange:this.onHandleChange,genres:_}),r.a.createElement("button",{className:B.a.button,type:"submit"},"\u041f\u043e\u0438\u0441\u043a")),l&&r.a.createElement("div",{className:B.a.spinner},r.a.createElement(h.a,{name:"circle"})),n.length>0&&r.a.createElement(C,{articles:n}),o&&r.a.createElement(j,{text:o.message}))}}]),t}(n.Component),A=function(){return r.a.createElement(L,null)};o.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.375fe705.chunk.js.map