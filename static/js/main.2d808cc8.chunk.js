(this["webpackJsonpreact-movie-database"]=this["webpackJsonpreact-movie-database"]||[]).push([[0],{30:function(e,n,t){e.exports=t(43)},35:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(24),o=t.n(i),c=(t(35),t(2)),l=t(9),u=t(1),s=t(3),p=t(8),d=t.n(p),m=t(13),g=t(14),v=t(15),h=t(17),f=t(16);function b(){var e=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    position: relative;\n"]);return b=function(){return e},e}function x(){var e=Object(c.a)(["\n    position: relative;\n    width: 100%;\n    :hover {\n        /* z-index: 2; */\n        /* > img {\n      z-index: 3;\n    } */\n        > div {\n            opacity: 1;\n        }\n    }\n"]);return x=function(){return e},e}function w(){var e=Object(c.a)(["\n    position: absolute;\n    padding: 20px;\n    box-sizing: border-box;\n    text-align: center;\n    display: block;\n    background: rgba(255, 239, 217, 0.8);\n    height: 100%;\n    width: 100%;\n    text-align: left;\n    transition: opacity 0.3s ease-in-out;\n    overflow: scroll;\n    top: 0;\n    opacity: 0;\n    > h1,\n    > p {\n        color: black;\n    }\n    > h1 {\n        margin: 0;\n    }\n    > a {\n        display: inline-block;\n        background: coral;\n        border-radius: 5px;\n        padding: 5px 10px;\n    }\n"]);return w=function(){return e},e}var y=function(e){var n=e.movie;return r.a.createElement(k,null,r.a.createElement(P,{src:"".concat("http://image.tmdb.org/t/p/original").concat(n.poster_path),alt:n.title}),r.a.createElement(E,null,r.a.createElement("h1",null,n.title),r.a.createElement("p",null,"".concat(n.overview)),r.a.createElement(l.b,{to:"/".concat(n.id)},"Learn More")))},E=s.a.div(w()),k=s.a.div(x()),P=s.a.img(b());function j(){var e=Object(c.a)(["\n    width: 100%;\n    > a {\n        width: 100%;\n        height: 100%;\n\n        > img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        }\n    }\n"]);return j=function(){return e},e}var O=function(e){var n=e.movie;return r.a.createElement(_,null,r.a.createElement(l.b,{key:n.id,to:"/".concat(n.id)},r.a.createElement("img",{src:"".concat("http://image.tmdb.org/t/p/w154").concat(n.poster_path),alt:n.title})))},_=s.a.div(j());function M(){var e=Object(c.a)(["\n    background-color: transparent;\n    margin: 0 10px;\n    font-size: 16px;\n    margin-bottom: 20px;\n    transition: all 0.3s ease-in-out;\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 2px 6px;\n    :hover {\n        cursor: pointer;\n        color: coral;\n        border-color: coral;\n    }\n"]);return M=function(){return e},e}function S(){var e=Object(c.a)(["\n    width: 90%;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-gap: 20px;\n"]);return S=function(){return e},e}function C(){var e=Object(c.a)(["\n    width: 90%;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 20px;\n    margin-bottom: 20px;\n"]);return C=function(){return e},e}var U=function(e){Object(h.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={nowPlayingMovies:[],nowPlayingPage:1,popularMovies:[]},e.changePage=function(e){"next"===e?this.state.nowPlayingPage<5?this.setState((function(e){return{nowPlayingPage:e.nowPlayingPage+1}})):5===this.state.nowPlayingPage&&this.setState({nowPlayingPage:1}):"prev"===e&&(this.state.nowPlayingPage>1?this.setState((function(e){return{nowPlayingPage:e.nowPlayingPage-1}})):1===this.state.nowPlayingPage&&this.setState({nowPlayingPage:5}))},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var n,t,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.nowPlayingPage,e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e223c8dda88d58c4a35436bfed991d9d&language=en-US&region=US&sort_by=release_date.desc&include_adult=false&page=".concat(n));case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.next=10,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e223c8dda88d58c4a35436bfed991d9d");case 10:return r=e.sent,e.next=13,r.json();case 13:i=e.sent,this.setState({nowPlayingMovies:a.results,popularMovies:i.results}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(1);case 19:case"end":return e.stop()}}),e,this,[[1,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(m.a)(d.a.mark((function e(){var n,t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.nowPlayingPage,e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e223c8dda88d58c4a35436bfed991d9d&language=en-US&region=US&sort_by=release_date.desc&include_adult=false&page=".concat(n));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,this.setState({nowPlayingMovies:a.results}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,n=this.state,t=n.nowPlayingMovies,a=n.nowPlayingPage,i=n.popularMovies;return r.a.createElement("div",null,r.a.createElement("h1",null,"New Movies"),r.a.createElement(z,null,t.map((function(e){return r.a.createElement(y,{key:e.id,movie:e})}))),r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){return e.changePage("prev")}},"Prev"),r.a.createElement("span",null,"Page ".concat(a," of 5")),r.a.createElement(N,{onClick:function(){return e.changePage("next")}},"Next")),r.a.createElement("h1",null,"Popular Movies"),r.a.createElement(D,null,i.map((function(e){return r.a.createElement(O,{key:e.id,movie:e})}))))}}]),t}(a.Component),z=s.a.div(C()),D=s.a.div(S()),N=s.a.button(M());function A(){var e=Object(c.a)(["\n    position: relative;\n    ::before {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 5px;\n        top: -5px;\n        background: #a00;\n    }\n    &:after {\n        content: '';\n        position: absolute;\n        width: ","%;\n        height: 5px;\n        top: -5px;\n        left: 0;\n        background: #2bc400;\n        box-shadow: 0px 0px 5px #2bc400;\n    }\n"]);return A=function(){return e},e}function B(){var e=Object(c.a)(["\n    background: #222;\n    text-align: left;\n    padding: 0 10%;\n    display: flex;\n    box-shadow: 0 -15px 15px 0px black;\n    > div {\n        margin-left: 20px;\n    }\n    > img {\n        position: relative;\n        top: -5rem;\n    }\n"]);return B=function(){return e},e}function J(){var e=Object(c.a)(["\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    width: 80%;\n    grid-gap: calc(100% / 10);\n"]);return J=function(){return e},e}function R(){var e=Object(c.a)(["\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    width: 80%;\n    grid-gap: calc(100% / 10);\n    img {\n        height: 214px;\n        display: block;\n    }\n"]);return R=function(){return e},e}function W(){var e=Object(c.a)(["\n    position: relative;\n"]);return W=function(){return e},e}function I(){var e=Object(c.a)(["\n    width: 100vw;\n    height: 50vh;\n    background: url(",") no-repeat top/cover;\n"]);return I=function(){return e},e}var L="http://image.tmdb.org/t/p/w154",T=function(e){Object(h.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={movie:{},movieCast:[],similarMovies:[]},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var n,t,a,r,i,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match,e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(n.params.id,"?api_key=e223c8dda88d58c4a35436bfed991d9d&language=en-US"));case 4:return t=e.sent,e.next=7,fetch("https://api.themoviedb.org/3/movie/".concat(n.params.id,"/credits?api_key=e223c8dda88d58c4a35436bfed991d9d&language=en-US"));case 7:return a=e.sent,e.next=10,fetch("https://api.themoviedb.org/3/movie/".concat(n.params.id,"/similar?api_key=e223c8dda88d58c4a35436bfed991d9d&language=en-US"));case 10:return r=e.sent,e.next=13,t.json();case 13:return i=e.sent,e.next=16,a.json();case 16:return o=(o=e.sent).cast.slice(0,6),e.next=20,r.json();case 20:c=(c=e.sent).results.slice(0,6),this.setState({movie:i,movieCast:o,similarMovies:c}),e.next=27;break;case 25:e.prev=25,e.t0=e.catch(1);case 27:case"end":return e.stop()}}),e,this,[[1,25]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.movie,t=e.movieCast,a=e.similarMovies;return r.a.createElement($,null,r.a.createElement(V,{backdrop:"".concat("http://image.tmdb.org/t/p/original").concat(n.backdrop_path)}),r.a.createElement(G,null,r.a.createElement("img",{src:"".concat(L).concat(n.poster_path),alt:""}),r.a.createElement("div",null,r.a.createElement("h1",null,n.title),r.a.createElement(H,{rating:n.vote_average},10*n.vote_average,"% Viewer Rating"),r.a.createElement("h3",null,n.release_date),r.a.createElement("p",null,n.overview))),r.a.createElement("h2",null,"Cast"),r.a.createElement(q,null,t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:"".concat(L).concat(e.profile_path),alt:e.name}),r.a.createElement("span",null,e.character),r.a.createElement("br",null),r.a.createElement("span",null,"Played by:"),r.a.createElement("br",null),r.a.createElement("span",null,e.name))}))),a.length>0?r.a.createElement("h2",null,"Related movies"):r.a.createElement("h2",null,"No similar movies found"),r.a.createElement(F,null,a.map((function(e){return r.a.createElement(O,{key:e.id,movie:e})}))))}}]),t}(a.Component),V=s.a.div(I(),(function(e){return e.backdrop})),$=s.a.div(W()),q=s.a.div(R()),F=s.a.div(J()),G=s.a.div(B()),H=s.a.span(A(),(function(e){return 10*e.rating}));function K(){var e=Object(c.a)(["\n    font-size: 32px;\n    background-color: #111;\n    padding: 40px;\n    > a {\n        border: 4px solid white;\n        padding: 10px 20px;\n        border-radius: 5px;\n    }\n"]);return K=function(){return e},e}var Q=function(){return r.a.createElement(l.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(X,null,r.a.createElement(l.b,{to:"/"},"The Movie Database")),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:U}),r.a.createElement(u.a,{path:"/:id",render:function(e){return r.a.createElement(T,Object.assign({key:Date.now()},e))}}))))},X=s.a.header(K());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.2d808cc8.chunk.js.map