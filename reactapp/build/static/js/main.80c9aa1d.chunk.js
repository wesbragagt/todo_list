(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(t,e,n){t.exports=n(70)},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(32),c=n.n(r),l=n(17),i=n(6),d=n(7),s=n(9),u=n(8),p=n(10),m=n(13),h=n(11);function f(){return a.a.createElement("header",{style:b},a.a.createElement("h1",null,"TodoList"),a.a.createElement(m.b,{style:y,to:"/"},"Home")," ","|"," ",a.a.createElement(m.b,{style:y,to:"/about"},"About"))}var b={background:"#333",color:"#ffffff",textAlign:"center",padding:"10px"},y={color:"#ffffff",textDecoration:"none"},E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:g},"x")))}}]),e}(o.Component),g={background:"red",color:"white",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},j=E,v=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement("h3",null,a.a.createElement(j,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo}))})}}]),e}(o.Component),O=n(35),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(O.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);function x(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the Todo List app"))}n(49);var C=n(14),T=n.n(C),S=(n(69),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(f,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:t.addTodo}),a.a.createElement(v,{delTodo:t.delTodo,markComplete:t.markComplete,todos:t.state.todos}))}}),a.a.createElement(h.a,{path:"/about",component:x}))))}}]),e}(o.Component));c.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.80c9aa1d.chunk.js.map