(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(68)},35:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),i=a.n(r),s=(a(35),a(7)),o=a(8),m=a(10),l=a(9),u=a(11),d=a(13),h=a(6),f=a(27),p=a.n(f),v={getImages:function(){return p.a.get("api/images")}};a(55),a(56),a(57),a(58),a(59);function g(){return c.a.createElement("div",null,c.a.createElement("div",{className:"left"},c.a.createElement("h1",null,"404"),c.a.createElement("h2",null,"Return ",c.a.createElement(d.b,{to:"/"},"home")," to avenge the fallen.")),c.a.createElement("div",{className:"black"}),c.a.createElement("div",{className:"right"},c.a.createElement("img",{id:"full",src:"https://i.imgur.com/vFEudrqg.jpg"})))}var E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("img",{src:this.props.url,alt:this.props.name})}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={itemClass:"item"},a.changeTopRow=function(){for(var e=document.getElementsByClassName(a.state.itemClass)[0];e;)"DIV"===e.tagName&&e.classList.remove("hover"),e=e.nextSibling;a.card.classList.add("hover")},a.changeBottomRow=function(){for(var e=document.getElementsByClassName(a.state.itemClass)[9];e;)"DIV"===e.tagName&&e.classList.remove("hover"),e=e.nextSibling;a.card.classList.add("hover")},a.handleHover=function(){switch(a.card.id){case"item1":case"item2":case"item3":case"item4":case"item5":case"item6":case"item7":case"item8":case"item9":a.changeTopRow();break;case"item10":case"item11":case"item12":case"item13":case"item14":case"item15":case"item16":case"item17":case"item18":a.changeBottomRow()}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){"item1"===this.card.id&&this.card.classList.add("hover"),"item18"===this.card.id&&this.card.classList.add("hover")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{ref:function(t){e.card=t},className:this.state.itemClass,onMouseEnter:this.handleHover,id:this.props.id},c.a.createElement(E,{name:this.props.name,url:this.props.url}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={arr1:[],arr2:[]},a.getImages=function(){v.getImages().then(function(e){var t=e.data.slice(0,9),n=e.data.slice(9,18);a.setState({arr1:t,arr2:n})})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getImages()}},{key:"render",value:function(){var e=this,t=1,a=10;return c.a.createElement(d.a,null,c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",render:function(){return[c.a.createElement("div",{className:"container"},e.state.arr1.map(function(e){return c.a.createElement(b,{name:e.name,url:e.url,id:"item".concat(t++)})})),c.a.createElement("div",{className:"container"},e.state.arr2.map(function(e){return c.a.createElement(b,{name:e.name,url:e.url,id:"item".concat(a++)})}))]}}),c.a.createElement(h.a,{component:g})))}}]),t}(n.Component);i.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a91c8926.chunk.js.map