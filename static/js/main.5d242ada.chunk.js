(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"aerodactyl",image:"./images/aerodactyl.png",cicked:!1},{id:2,name:"arcanine",image:"./images/arcanine.png",cicked:!1},{id:3,name:"blastoise",image:"./images/blastoise.png",cicked:!1},{id:4,name:"charizard",image:"./images/charizard.png",cicked:!1},{id:5,name:"dragonite",image:"./images/dragonite.png",cicked:!1},{id:6,name:"gengar",image:"./images/gengar.png",cicked:!1},{id:7,name:"golduck",image:"./images/golduck.png",cicked:!1},{id:8,name:"gyarados",image:"./images/gyarados.png",cicked:!1},{id:9,name:"kabutops",image:"./images/kabutops.png",cicked:!1},{id:10,name:"lapras",image:"./images/lapras.png",cicked:!1},{id:11,name:"magneton",image:"./images/magneton.png",cicked:!1},{id:12,name:"mew",image:"./images/mew.png",cicked:!1},{id:13,name:"ninetails",image:"./images/ninetails.png",cicked:!1},{id:14,name:"onyx",image:"./images/onyx.png",cicked:!1},{id:15,name:"pidgeot",image:"./images/pidgeot.png",cicked:!1}]},,,,,,,,function(e,a,n){e.exports=n(20)},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),c=n(3),s=n.n(c),o=(n(15),n(4)),r=n(5),l=n(7),m=n(6),d=n(8);var g=function(e){return i.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var u=function(e){return i.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var h=function(e){var a=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return i.a.createElement("div",{className:a},e.children)},f=(n(16),function(e){return i.a.createElement("div",{id:e.name,onClick:function(){return e.handleClick(e.id)},className:"card grow"},i.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}))}),k=(n(17),{height:"100%",display:"flex",flex:1,flexWrap:"wrap",justifyContent:"space-around",alignContent:"flex-start",overflow:"auto"});var p=function(e){var a=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return i.a.createElement("div",{style:k,className:a},e.children)},v=(n(18),function(e){return i.a.createElement("nav",{className:"navbar navbar-light bg-light h-auto"},i.a.createElement("div",{className:"row w-100"},i.a.createElement("div",{className:"col-4"},i.a.createElement("h1",{className:"navbar-brand"},"Clicky Game: Pokemon Edition")),i.a.createElement("div",{className:"col-6 float-right"},i.a.createElement("h4",{id:"score"},"Current Score: ",e.score,"Wins: ",e.wins,"Losses: ",e.losses," "))))}),w=n(1);var E=function(e){function a(){var e,n;Object(o.a)(this,a);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={pokemon:w,score:0,wins:0,losses:0,clicked:[],message:""},n.handleShuffle=function(){var e=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),t=[e[n],e[a]];e[a]=t[0],e[n]=t[1]}return e}(w);n.setState({pokemon:e})},n.handleClick=function(e){if(console.log(e),-1===n.state.clicked.indexOf(e))n.setState({clicked:n.state.clicked.concat(e)},function(){console.log("Added to array "+this.state.clicked),this.handleIncrement()});else{console.log("Already in the array "+n.state.clicked);var a=n.state.losses;n.setState({losses:a+1}),console.log("Score: "+n.state.losses),n.handleReset()}},n.handleIncrement=function(){if(n.state.clicked.length===w.length){console.log("You win!");var e=n.state.wins;n.setState({wins:e+1,message:"You Win!"}),n.handleReset()}else{var a=n.state.score;n.setState({score:a+1,message:"Great Choice!"},function(){console.log("Score: "+this.state.score)})}n.handleShuffle()},n.handleReset=function(){n.setState({score:0,message:"You Lose. Sad Sad Day.",clicked:[]}),n.handleShuffle()},n}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(v,{score:this.state.score,wins:this.state.wins,losses:this.state.losses,message:this.state.message}),i.a.createElement(g,{fluid:"-fluid"},i.a.createElement(u,null,i.a.createElement(h,{size:"10",id:"titleCol"},i.a.createElement("h5",{className:"text-center"},"Don't click the same card twice and you win!"),i.a.createElement("h5",{className:"text-center"}," ",this.state.message," "))),i.a.createElement(u,null,i.a.createElement(p,{size:"10"},this.state.pokemon.map(function(a){return i.a.createElement(f,{key:a.id,id:a.id,name:a.name,image:a.image,handleClick:e.handleClick})})))))}}]),a}(t.Component);var y=function(){return i.a.createElement(E,null)};n(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.5d242ada.chunk.js.map