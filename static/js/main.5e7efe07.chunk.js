(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(21),i=n.n(r),s=(n(29),n(16)),o=n(2),u=n(3),l=n(14),j=n(5),d=n(4),b=(n(30),n(6)),h=n(0),p=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("p",{className:"centraliza",children:"Carregando..."})}}]),n}(c.a.Component),f=p,m=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.loading,n=t.nome,a=t.habilit,c=t.user,r=n.length<2;return Object(h.jsx)("main",{className:"login",children:e?Object(h.jsx)(f,{}):Object(h.jsxs)("form",{"data-testid":"page-login",className:"login1",children:[Object(h.jsx)("label",{htmlFor:"login-name-input",children:Object(h.jsx)("input",{type:"text","data-testid":"login-name-input",placeholder:"Nome",className:"sem",onChange:a,id:"input"})}),Object(h.jsx)("button",{"data-testid":"login-submit-button",type:"submit",className:"sem",disabled:r,onClick:c,children:"Entrar"})]})})}}]),n}(c.a.Component),O=m,v=n(8),x=n.n(v),k=n(12),g=n(13),N=function(){var t=Object(k.a)(x.a.mark((function t(e){var n,a,c,r,i,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a);case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,i=r.results,s=i.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=N,w="user",I=function(t){return localStorage.setItem(w,JSON.stringify(t))},S=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},C=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(w));null===e&&(e={}),S(e)(t)}))},P=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={nome:"",loading:!0,foto:"https://www.kdulima.com/static/media/node.8683d89cf78ffae3d1f7.png"},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;C().then((function(e){var n=e.name;t.setState({nome:n,loading:!1,foto:"https://www.kdulima.com/static/media/node.8683d89cf78ffae3d1f7.png",ab:"header-user-name"})}))}},{key:"render",value:function(){var t=this.state,e=t.nome,n=t.loading,a=t.foto,c=t.ab;return Object(h.jsxs)("header",{"data-testid":"header-component",className:"cabecalho linha",children:[Object(h.jsx)(g.b,{to:"/search","data-testid":"link-to-search",children:"Pesquisa"}),Object(h.jsx)(g.b,{to:"/favorites","data-testid":"link-to-favorites",children:"Favoritas"}),Object(h.jsx)(g.b,{to:"/profile","data-testid":"link-to-profile",children:"Perfil"}),Object(h.jsx)("div",{children:n?Object(h.jsx)(f,{className:"centraliza"}):Object(h.jsxs)("div",{className:"cabecalho",children:[Object(h.jsx)("h1",{"data-testid":c,className:"branco",children:e}),Object(h.jsx)("img",{src:a,alt:"foto",className:"foto"})]})})]})}}]),n}(c.a.Component),D=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={nome:"",input:"",button:!0,data:[]},t.habilit=t.habilit.bind(Object(l.a)(t)),t.user=t.user.bind(Object(l.a)(t)),t}return Object(u.a)(n,[{key:"habilit",value:function(t){var e=t.target.value;e.length>1?this.setState({button:!1,nome:e,input:e}):this.setState({button:!0,input:e})}},{key:"user",value:function(t){var e=this;t.preventDefault();var n=this.state.nome;this.setState((function(){return{}}),Object(k.a)(x.a.mark((function t(){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n);case 2:a=t.sent,e.setState({data:a,input:""});case 4:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var t=this.state,e=t.button,n=t.nome,a=t.data,c=t.input;return Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(P,{}),Object(h.jsxs)("form",{"data-testid":"page-search",className:"centraliza",children:[Object(h.jsx)("input",{type:"text","data-testid":"search-artist-input",onChange:this.habilit,value:c}),Object(h.jsx)("button",{type:"submit","data-testid":"search-artist-button",disabled:e,onClick:this.user,children:"Pesquisar"}),Object(h.jsxs)("form",{children:[e?Object(h.jsx)("p",{}):Object(h.jsx)("h1",{children:"Resultado de \xe1lbuns de:  ".concat(n)}),Object(h.jsx)("div",{className:"dividi",children:a.map((function(t){return Object(h.jsx)("div",{className:"album",children:Object(h.jsxs)(g.b,{to:"/album/".concat(t.collectionId),"data-testid":"link-to-album-".concat(t.collectionId),children:[Object(h.jsx)("p",{children:t.artistName}),Object(h.jsx)("p",{children:t.artistId}),Object(h.jsx)("p",{children:t.collectionId}),Object(h.jsx)("p",{children:t.collectionName}),Object(h.jsx)("p",{children:t.collectionPrice}),Object(h.jsx)("img",{src:t.artworkUrl100,alt:t.artistName}),Object(h.jsx)("p",{children:t.releaseDate}),Object(h.jsx)("p",{children:t.trackCount})]})},t.artistId)}))}),a.length?Object(h.jsx)("p",{}):Object(h.jsx)("h1",{children:"Nenhum \xe1lbum foi encontrado"})]})]})]})}}]),n}(c.a.Component),J=function(){var t=Object(k.a)(x.a.mark((function t(e){var n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=J,U=n(24),F="favorite_songs";JSON.parse(localStorage.getItem(F))||localStorage.setItem(F,JSON.stringify([]));var z=function(){return JSON.parse(localStorage.getItem(F))},K=function(t){return localStorage.setItem(F,JSON.stringify(t))},T=function(t){return function(e){setTimeout((function(){e(t)}),500)}},q=function(t){return new Promise((function(e){if(t){var n=z();K([].concat(Object(U.a)(n),[t]))}T("OK")(e)}))},A=function(t){return new Promise((function(e){var n=z();K(n.filter((function(e){return e.trackId!==t.trackId}))),T("OK")(e)}))},E=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).favorito=Object(k.a)(x.a.mark((function e(){var n,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.element,e.next=3,new Promise((function(t){var e=z();T(e)(t)}));case 3:return a=e.sent,c=!!a&&a.some((function(t){return t.trackId===n.trackId})),t.setState({favo:c}),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),t.favOn=function(){var e=Object(k.a)(x.a.mark((function e(n){var a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.element,c=n?A:q,t.setState({loading:!0}),e.next=5,c(a);case 5:t.setState({loading:!1,favo:!n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={favo:!1,loading:!1},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.favorito()}},{key:"render",value:function(){var t=this,e=this.props.element,n=this.state,a=n.favo;return n.loading?Object(h.jsx)(f,{}):Object(h.jsxs)("label",{htmlFor:"favorite-checkbox-".concat(e.trackId),"data-testid":"checkbox-music-".concat(e.trackId),className:"vermelho",children:["Favorita",Object(h.jsx)("input",{type:"checkbox",name:"favorite",id:"favorite-checkbox-".concat(e.trackId),checked:a,onChange:function(){t.favOn(a)}})]})}}]),n}(c.a.Component),R=E,B=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.Preview;return Object(h.jsx)("div",{className:"album1",children:t.map((function(t){return Object(h.jsxs)("div",{className:"album2",children:[Object(h.jsx)("p",{className:"branco",children:t.trackName}),Object(h.jsxs)("div",{className:"checkMusic",children:[Object(h.jsxs)("audio",{"data-testid":"audio-component",src:t.previewUrl,controls:!0,children:[Object(h.jsx)("track",{kind:"captions",className:"vermelho"}),"O seu navegador n\xe3o suporta o elemento audio."]}),Object(h.jsx)(R,{element:t})]})]},t.trackId)}))})}}]),n}(c.a.Component),_=B,G=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={Preview:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id,n=function(){var n=Object(k.a)(x.a.mark((function n(){var a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M(e);case 2:a=n.sent,t.setState({Preview:a});case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}},{key:"render",value:function(){var t=this.state.Preview,e=[];return t.length>0&&(e=[t[0]]),Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{}),Object(h.jsxs)("div",{"data-testid":"page-album",className:"personaliza",children:[Object(h.jsx)("div",{className:"album1",children:e.map((function(t){return Object(h.jsxs)("div",{className:"Informacao",children:[Object(h.jsx)("img",{src:t.artworkUrl100,alt:t.artistName}),Object(h.jsx)("p",{"data-testid":"album-name",children:t.collectionName}),Object(h.jsx)("p",{"data-testid":"artist-name",children:t.artistName})]},t.artistId)}))}),Object(h.jsx)(_,{Preview:t.slice(1)})]})]})}}]),n}(c.a.Component),H=G,L=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{"data-testid":"page-favorites",children:[Object(h.jsx)(P,{}),Object(h.jsx)("p",{children:"tock"})]})}}]),n}(c.a.Component),Q=L,V=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(h.jsx)(P,{}),Object(h.jsx)("p",{children:"oii"})]})}}]),n}(c.a.Component),W=V,X=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{"data-testid":"page-not-found",children:[Object(h.jsx)(P,{}),Object(h.jsx)("p",{children:"NotFound"})]})}}]),n}(c.a.Component),Y=X,Z=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={nome:"",foto:"https://www.kdulima.com/static/media/node.8683d89cf78ffae3d1f7.png"},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;C().then((function(e){var n=e.name;t.setState({nome:n,foto:"https://www.kdulima.com/static/media/node.8683d89cf78ffae3d1f7.png"})}))}},{key:"render",value:function(){var t=this.state,e=t.nome,n=t.foto;return Object(h.jsxs)("div",{"data-testid":"page-profile",lassName:"profile",children:[Object(h.jsx)(P,{}),Object(h.jsx)("p",{children:e}),Object(h.jsx)("img",{src:n,alt:"foto",className:"foto"})]})}}]),n}(c.a.Component),$=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={loading:!1,login:!1,nome:"",button:!1},t.habilit=t.habilit.bind(Object(l.a)(t)),t.user=t.user.bind(Object(l.a)(t)),t}return Object(u.a)(n,[{key:"habilit",value:function(t){var e=t.target.value;e.length>2?this.setState({button:!1,nome:e}):this.setState({button:!0,nome:""})}},{key:"user",value:function(t){var e=this;t.preventDefault();var n=this.state.nome;this.setState((function(){return{loading:!0}}),(function(){return fetch(function(t){return new Promise((function(e){I(Object(s.a)(Object(s.a)({},{name:"",email:"",image:"",description:""}),t)),S("OK")(e)}))}({name:n})).then((function(){return e.setState({login:!0,loading:!1})}))}))}},{key:"render",value:function(){var t=this.state.login;return Object(h.jsx)("div",{className:"pricipal",children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{exact:!0,path:"/",children:t?Object(h.jsx)(b.a,{to:"/search"}):Object(h.jsx)(O,Object(s.a)(Object(s.a)({},this.state),{},{habilit:this.habilit,user:this.user}))}),Object(h.jsx)(b.b,{exact:!0,path:"/",component:O}),Object(h.jsx)(b.b,{path:"/search",component:D}),Object(h.jsx)(b.b,{path:"/album/:id",component:H}),Object(h.jsx)(b.b,{path:"/favorites",component:Q}),Object(h.jsx)(b.b,{exact:!0,path:"/profile",component:Z}),Object(h.jsx)(b.b,{path:"/profile/edit",component:W}),Object(h.jsx)(b.b,{path:"*",component:Y})]})})}}]),n}(c.a.Component);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g.a,{children:Object(h.jsx)($,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5e7efe07.chunk.js.map