(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r,o,i,a,c,s,p,u=t(0),l=t.n(u),d=t(13),x=t.n(d),h=t(4),f=t.n(h),b=t(5),m=t(6),g=t(2),j=t(12),O=t(3),v={black:"#15171A",white:"#FFFFFF",primary:"#0666EB",acccent:"#E950A4",error:"#F54C3E",warning:"#23A423",success:"#F7930D",grey35:"#525C66",grey50:"#828B94",grey80:"#C0C6CC",grey90:"#DFE2E6",grey95:"#EDEEF0",grey100:"#F6F7F8"},y={radius:{sm:"7px",md:"13px",lg:"25px"},color:{black:"#333",grey30:"#525C66",grey50:"#828B94",grey80:"#C0C6CC",grey90:"#EDEEF0",grey95:"#F3F3F4",grey100:"whitesmoke",white:"white",primary:"#0666EB",accent:"#F7930D"},breakpoints:{}},w="'Work Sans', -apple-system, Roboto, Helvetica, Arial, sans-serif",k="'Work Sans', -apple-system, Roboto, Helvetica, Arial, sans-serif",C={fontFamily:w,fontWeight:500,fontSize:"17px",lineHeight:"24px",letterSpacing:"0"},z={text:{default:C,primary:C,secondary:{fontFamily:w,fontWeight:400,fontSize:"15px",lineHeight:"20px",letterSpacing:"-0.02em"},helper:{fontFamily:w,fontWeight:400,fontSize:"12px",lineHeight:"16px",letterSpacing:"-0.02em"}},header:{h1:Object(O.a)(r||(r=Object(g.a)(["\n            font-family: ",";\n            font-weight: 800;\n            font-size: 35px;\n            line-height: 44px;\n\n            letter-spacing: -0.025em;\n\n            @media (min-width: 399px) {\n                font-size: 43px;\n                line-height: 52px;\n            }\n            @media (min-width: 1920px) {\n                font-size: 47px;\n                line-height: 62px;\n            }\n        "])),k),h2:Object(O.a)(o||(o=Object(g.a)(["\n            font-family: ",";\n            font-weight: 600;\n            font-size: 35px;\n            line-height: 44px;\n            letter-spacing: -0.025em;\n\n            @media (max-width: 399px) {\n                /* Mobile - HIGH */\n                font-size: 29px;\n                line-height: 38px;\n            }\n\n            @media (min-width: 1920px) {\n                /* XLarge desktop - MED */\n                font-size: 41px;\n                line-height: 54px;\n            }\n        "])),k),h3:Object(O.a)(i||(i=Object(g.a)(["\n            font-family: ",";\n            font-weight: 600;\n            font-size: 29px;\n            line-height: 38px;\n            letter-spacing: -0.025em;\n\n            @media (max-width: 399px) {\n                /* Mobile - HIGH */\n                font-size: 26px;\n                line-height: 33px;\n            }\n            @media (min-width: 1920px) {\n                /* XLarge desktop - MED */\n                font-size: 33px;\n                line-height: 42px;\n            }\n        "])),k),h4:Object(O.a)(a||(a=Object(g.a)(["\n            font-family: ",";\n            font-weight: 600;\n            font-size: 21px;\n            line-height: 28px;\n            letter-spacing: -0.025em;\n            @media (max-width: 399px) {\n                /* Mobile - HIGH */\n                font-size: 19px;\n                line-height: 24px;\n            }\n            @media (min-width: 1920px) {\n                /* XLarge desktop - MED */\n                font-size: 23px;\n                line-height: 30px;\n            }\n        "])),k),h5:Object(O.a)(c||(c=Object(g.a)(["\n            font-family: ",";\n            font-weight: 500;\n            font-size: 14px;\n            line-height: 20px;\n            letter-spacing: 0.04em;\n            text-transform: uppercase;\n        "])),k)}},F=t(1),E=Object(O.b)((function(n){return Object(F.jsx)("input",Object(j.a)(Object(j.a)({},n),{},{className:n.className}))}))(s||(s=Object(g.a)(["\n    ",";\n    display: block;\n    width: ",";\n    height: ",";\n    background-color: ",";\n    border-radius: ",";\n    min-height: 48px;\n    padding: 0 12px;\n    border: none;\n    outline: none;\n    transition: all 0.15s ease-in;\n    ::placeholder {\n        color: ",";\n    }\n    :focus {\n        background-color: white;\n    }\n"])),z.text.primary,(function(n){return n.w||"100%"}),(function(n){return n.h||"40px"}),y.color.grey90,y.radius.md,v.grey50),S=function(n){var e=Object(u.useState)(""),t=Object(m.a)(e,2),r=t[0],o=t[1],i=function(){var e=Object(b.a)(f.a.mark((function e(t){var i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===r){e.next=13;break}return e.prev=2,i={description:r},e.next=6,fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 6:o(""),n.getTodos(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(F.jsx)("div",{children:Object(F.jsx)("form",{onSubmit:i,children:Object(F.jsx)(E,{type:"text",enterKeyHint:"done",value:r,placeholder:"What's on?",style:{marginBottom:8},onChange:function(n){return o(n.target.value)},autoFocus:!0})})})},T=t(7),D={e0:{default:"0 0 0 rgba(0,0,0,0.0)",hover:"0 0 0 rgba(0,0,0,0.0)"},e100:{default:"0 1px 2px rgba(0,0,0,0.15)",hover:"0 3px 5px rgba(0,0,0,0.1)"},e300:{default:"0 3px 9px rgba(0,0,0,0.15)",hover:"0 3px 9px rgba(0,0,0,0.15)"},e600:{default:"0 23px 31px rgba(0,0,0,0.1)",hover:"0 23px 31px rgba(0,0,0,0.1)"}};var H,M,P,A,B,N,W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"e100",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(O.a)(p||(p=Object(g.a)(["\n        box-shadow: ",";\n        transition: box-shadow 150ms cubic-bezier(0.25, 0.75, 0.5, 1);\n    "])),e?D[n].hover:D[n].default)},L=[];L.xs=function(n){return Object(O.a)(H||(H=Object(g.a)(["\n        @media (min-width: 320px) {\n            ","\n        }\n    "])),n)},L.sm=function(n){return Object(O.a)(M||(M=Object(g.a)(["\n        @media (min-width: 400px) {\n            ","\n        }\n    "])),n)},L.md=function(n){return Object(O.a)(P||(P=Object(g.a)(["\n        @media (min-width: 1024px) {\n            ","\n        }\n    "])),n)},L.lg=function(n){return Object(O.a)(A||(A=Object(g.a)(["\n        @media (min-width: 1280px) {\n            ","\n        }\n    "])),n)},L.xl=function(n){return Object(O.a)(B||(B=Object(g.a)(["\n        @media (min-width: 1440px) {\n            ","\n        }\n    "])),n)},L.xxl=function(n){return Object(O.a)(N||(N=Object(g.a)(["\n        @media (min-width: 1920px) {\n            ","\n        }\n    "])),n)};var G=L,I={status:{toDo:"todo",planned:"planned",inProgress:"inProgress",completed:"completed"}},J={};J.getAll=Object(b.a)(f.a.mark((function n(){var e,t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/todos");case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),J.delete=function(){var n=Object(b.a)(f.a.mark((function n(e){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/todos/".concat(e.id),{method:"DELETE"});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0.message);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}(),J.updateStatus=function(){var n=Object(b.a)(f.a.mark((function n(e){var t,r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="todo"===e.status?"completed":"todo",n.prev=1,r={status:t},n.next=5,fetch("/api/todos/".concat(e.id,"/update-status"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();var X,R,K,U,Y,q,Q,V,Z,$,_,nn,en,tn=J,rn={xxxs:8,xxs:12,xs:16,sm:20,md:24,lg:40,xl:56,xxl:96,xxxl:160},on=v.black,an=rn.md,cn=Object(O.b)((function(n){return Object(F.jsx)(T.a.span,{className:"material-icons "+n.className,onClick:n.onClick,children:n.name})}))(X||(X=Object(g.a)(["\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    ms-user-select: none;\n    user-select: none;\n    color: ",";\n    font-size: ","px;\n    transition: 'all 0.15s ease-in';\n    :hover {\n        color: ","\n    }\n"])),(function(n){return n.color||on}),(function(n){return n.size?rn[n.size]:an}),(function(n){return n.hoverColor})),sn=O.b.div(R||(R=Object(g.a)(["\n    display: block;\n    width: 20px;\n    height: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: ",";\n"])),(function(n){return n.m&&n.m})),pn=Object(O.b)(T.a.div)(K||(K=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 5px;\n    border: 3px solid ",";\n"])),v.grey95),un=function(n){return Object(F.jsx)(sn,{m:n.m,onClick:function(e){return function(e){e.stopPropagation(),n.onClick?n.onClick(e):alert("Pass onCheck function to Checkbox")}(e)},children:Object(F.jsx)(pn,{children:n.isChecked&&Object(F.jsx)(cn,{name:"check",size:"xs",color:v.white})})})},ln=Object(O.b)(T.a.div)(U||(U=Object(g.a)(["\n    display: flex;\n    cursor: pointer;\n    ",";\n    background: ",";\n    border-radius: ",";\n    padding: 12px 12px;\n    margin-bottom: 8px;\n    vertical-align: top;\n    z-index: 1;\n    ","\n"])),z.text.primary,(function(n){return n.isCompleted?v.grey100:v.white}),y.radius.md,G.md(Object(O.a)(Y||(Y=Object(g.a)(["\n        :hover {\n            z-index: 2;\n            ","\n        }\n    "])),(function(n){return n.isCompleted?W("e100"):W("e600")})))),dn=Object(O.b)(cn)(q||(q=Object(g.a)(["\n    cursor: pointer;\n    width: 20px;\n    height: 20px;\n    margin: auto 0 auto auto;\n    ","\n"])),G.md(Object(O.a)(Q||(Q=Object(g.a)(["\n        :hover {\n            color: ",";\n        }\n    "])),v.error))),xn=O.b.span(V||(V=Object(g.a)(["\n    flexGrow: 1;\n    ","\n"])),(function(n){return n.isCompleted&&{textDecoration:"line-through",color:v.grey80}})),hn=function(n){var e=Object(u.useState)(!1),t=Object(m.a)(e,2),r=t[0],o=t[1],i=n.todo.status===I.status.completed;return Object(F.jsxs)(ln,{isCompleted:i,onClick:function(n){console.log("handle Todo Click")},onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:[Object(F.jsx)(un,{isChecked:i,m:"2px 10px 2px 0",isParentHovered:r,onClick:function(e){return function(e){e.stopPropagation(),n.onCheck?n.onCheck():console.log("You forgot to pass onClick from Todo to Todo Check")}(e)}}),Object(F.jsx)(xn,{isCompleted:i,children:n.todo.description}),Object(F.jsx)(dn,{name:"delete",size:"sm",color:v.grey90,onClick:function(e){return function(e){e.stopPropagation(),n.onDelete()}(e)}})]})},fn=O.b.div(Z||(Z=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),bn=function(n){var e=n.todos;Object(u.useEffect)((function(){n.getTodos()}),[]);var t=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tn.updateStatus(t);case 2:n.getTodos();case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),r=e.map((function(e){return Object(F.jsx)(hn,{todo:e,onDelete:function(){return function(e){tn.delete(e),n.getTodos()}(e)},onCheck:function(){return t(e)}},e.id)}));return Object(F.jsx)(fn,{children:r})},mn={default:Object(O.a)($||($=Object(g.a)(["\n        padding: ",";\n\n        @media (max-width: 640px) {\n            padding: 32px;\n        }\n\n        @media (max-width: 400px) {\n            padding: 24px 16px;\n        }\n    "])),(function(n){return n.p?n.p:"40px"})),main:Object(O.a)(_||(_=Object(g.a)(["\n        max-width: 480px;\n        padding: ",";\n    "])),(function(n){return n.p?n.p:"0"}))},gn=O.b.div(nn||(nn=Object(g.a)(["\n    display: block;\n    width: auto;\n    margin: 0 auto;\n    background: ",";\n    ","\n"])),(function(n){return n.bc}),(function(n){return"main"===n.variant?mn.main:mn.default})),jn=O.b.h1(en||(en=Object(g.a)(["\n    ",";\n    color: ",";\n    margin: 0;\n    padding-bottom: 40px;\n    @media (max-width: 640px) {\n        padding-bottom: 16px;\n    }\n"])),(function(n){return n.variant?z.header[n.variant]:z.header.h1}),(function(n){return n.color})),On=function(){var n=Object(u.useState)([]),e=Object(m.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(b.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tn.getAll();case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(F.jsxs)(gn,{children:[Object(F.jsx)(jn,{color:v.grey35,children:"Todo"}),Object(F.jsxs)(gn,{variant:"main",children:[Object(F.jsx)(S,{getTodos:function(){return o()}}),Object(F.jsx)(bn,{getTodos:function(){return o()},todos:t})]})]})};t(25);x.a.render(Object(F.jsx)(l.a.StrictMode,{children:Object(F.jsx)(On,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c94f59d4.chunk.js.map