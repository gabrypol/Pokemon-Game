(window["webpackJsonppokemon-game"]=window["webpackJsonppokemon-game"]||[]).push([[0],[,,,,,,,,,function(e,a,n){e.exports=n(18)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(7),i=n.n(c),o=(n(14),n(8)),s=n(1),p=n(2),m=n(4),l=n(3),d=n(5),u=(n(15),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((this.props.id+"").padStart(3,"0"),".png");return r.a.createElement("div",{className:"Card"},r.a.createElement("h1",{className:"Card-title"}," ",this.props.name," "),r.a.createElement("div",{className:"Card-image"},r.a.createElement("img",{src:e,alt:this.props.name})),r.a.createElement("div",{className:"Card-data"}," Type: ",this.props.type," "),r.a.createElement("div",{className:"Card-data"}," Experience: ",this.props.exp," "))}}]),a}(t.Component)),h=(n(16),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"CardDeck-winner"}," Winning Hand! "):r.a.createElement("h1",{className:"CardDeck-loser"}," Losing Hand! "),r.a.createElement("div",{className:"CardDeck"},e,r.a.createElement("h4",{className:"CardDeck-exp"}," Total Experience: ",this.props.exp," "),r.a.createElement("div",{className:"CardDeck-cards"},this.props.pokemon.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,type:e.type,exp:e.base_experience,key:e.id})}))))}}]),a}(t.Component)),b=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){for(var e=[],a=Object(o.a)(this.props.pokemon);e.length<a.length;){var n=Math.floor(Math.random()*a.length),t=a.splice(n,1)[0];e.push(t)}var c=e.reduce((function(e,a){return e+a.base_experience}),0),i=a.reduce((function(e,a){return e+a.base_experience}),0);return r.a.createElement("div",null,r.a.createElement(h,{pokemon:e,exp:c,isWinner:c>i}),r.a.createElement(h,{pokemon:a,exp:i,isWinner:c<i}))}}]),a}(t.Component);b.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var f=b;n(17);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Refresh the browser to play!"),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f581882c.chunk.js.map