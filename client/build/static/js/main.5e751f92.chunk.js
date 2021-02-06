(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var i,r,a,o,c,s,l,p,d,u,x,h=t(0),m=t.n(h),f=t(13),b=t.n(f),g=t(4),j=t.n(g),y=t(6),O=t(5),v=t(2),w=t(3),k=(t(24),{radius:{sm:"7px",md:"13px",lg:"25px"},color:{black:"#333",grey30:"#525C66",grey50:"#828B94",grey80:"#C0C6CC",grey90:"#EDEEF0",grey95:"#F3F3F4",grey100:"whitesmoke",white:"white",primary:"#0666EB",accent:"#F7930D"},breakpoints:{}}),F="-apple-system, Roboto, Helvetica, Arial, sans-serif",z="-apple-system, Roboto, Helvetica, Arial, sans-serif",E={fontFamily:F,fontWeight:400,fontSize:"17px",lineHeight:"24px",letterSpacing:"0"},S={text:{default:E,primary:E,secondary:{fontFamily:F,fontWeight:400,fontSize:"15px",lineHeight:"20px",letterSpacing:"-0.02em"},helper:{fontFamily:F,fontWeight:400,fontSize:"12px",lineHeight:"16px",letterSpacing:"-0.02em"}},header:{h1:Object(w.a)(i||(i=Object(v.a)(["\n            font-family: ",";\n            font-weight: 700;\n            font-size: 43px;\n            line-height: 52px;\n            letter-spacing: -0.025em;\n\n            @media (min-width: 1920px) {\n                /* XLarge desktop - MED */\n                font-size: 47px;\n                line-height: 62px;\n            }\n            @media (max-width: 399px) {\n                /* Mobile - HIGH */\n                font-size: 35px;\n                line-height: 44px;\n            }\n        "])),z),h2:Object(w.a)(r||(r=Object(v.a)(["\n            font-family: ",";\n            font-weight: 600;\n            font-size: 35px;\n            line-height: 44px;\n            letter-spacing: -0.025em;\n\n            @media (min-width: 1920px) {\n                /* XLarge desktop - MED */\n                font-size: 41px;\n                line-height: 54px;\n            }\n            @media (max-width: 399px) {\n                /* Mobile - HIGH */\n                font-size: 29px;\n                line-height: 38px;\n            }\n        "])),z),h3:Object(w.a)(a||(a=Object(v.a)(["\n            font-family: ",";\n            font-weight: 600;\n            font-size: 29px;\n            line-height: 38px;\n            letter-spacing: -0.025em;\n\n            @media (min-width: 1920px) {\n                /* XLarge desktop - MED */\n                font-size: 33px;\n                line-height: 42px;\n            }\n            @media (max-width: 399px) {\n                /* Mobile - HIGH */\n                font-size: 26px;\n                line-height: 33px;\n            }\n        "])),z),h4:Object(w.a)(o||(o=Object(v.a)(["\n            font-family: ",";\n            font-weight: 600;\n            font-size: 21px;\n            line-height: 28px;\n            letter-spacing: -0.025em;\n            @media (min-width: 1920px) {\n                /* XLarge desktop - MED */\n                font-size: 23px;\n                line-height: 30px;\n            }\n            @media (max-width: 399px) {\n                /* Mobile - HIGH */\n                font-size: 19px;\n                line-height: 24px;\n            }\n        "])),z),h5:Object(w.a)(c||(c=Object(v.a)(["\n            font-family: ",";\n            font-weight: 500;\n            font-size: 14px;\n            line-height: 20px;\n            letter-spacing: 0.04em;\n            text-transform: uppercase;\n        "])),z)}},C=w.b.input(s||(s=Object(v.a)(["\n    ",";\n    display: block;\n    width: ",";\n    height: ",";\n    background-color: ",";\n    border-radius: ",";\n    min-height: 48px;\n    padding: 0 12px;\n    border: none;\n    outline: none;\n    transition: all 0.15s ease-in;\n    ::placeholder {\n        color: ",";\n    }\n    :focus {\n        background-color: white;\n    }\n"])),S.text.primary,(function(e){return e.w||"100%"}),(function(e){return e.h||"40px"}),k.color.grey90,k.radius.md,k.color.grey),D=t(1),H=function(){var e=Object(h.useState)(""),n=Object(O.a)(e,2),t=n[0],i=n[1],r=function(){var e=Object(y.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""===t){e.next=13;break}return e.prev=2,r={description:t},e.next=6,fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 6:i(""),window.location="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(D.jsx)("div",{children:Object(D.jsx)("form",{onSubmit:r,children:Object(D.jsx)(C,{type:"text",value:t,placeholder:"What's on?",autoFocus:!0,style:{marginBottom:8},onChange:function(e){return i(e.target.value)}})})})},M=t(8),L=t(17),B=t(18),W={black:"#15171A",white:"#FFFFFF",primary:"#0666EB",acccent:"#E950A4",error:"#F54C3E",warning:"#23A423",success:"#F7930D",grey35:"#525C66",grey50:"#828B94",grey80:"#C0C6CC",grey90:"#DFE2E6",grey95:"#EDEEF0",grey100:"#F6F7F8"},A={curve:{default:"cubic-bezier(.25,.75,.5,1)"},duration:{default:"300ms",sm:"100ms",md:"300ms",lg:"600ms"}},I={xxxs:8,xxs:12,xs:16,sm:20,md:24,lg:40,xl:56,xxl:96,xxxl:160},T=W.black,G=I.md,N=function(e){var n=Object(L.a)(Object(M.a)({WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none",color:e.color||T,fontSize:I[e.size]||G,transition:"color "+A.duration.sm+" "+A.curve.cubic},"transition","all 0.15s ease-in"),e.style);return Object(D.jsx)(B.a.span,{className:"material-icons",style:n,children:e.name})},U=Object(w.b)((function(e){var n=Object(h.useState)(!1),t=Object(O.a)(n,2),i=t[0],r=t[1];return Object(D.jsxs)("div",{className:e.className,style:{display:"flex"},onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:[Object(D.jsx)(N,{name:e.completed?"check_box":"check_box_outline_blank",size:"sm",color:W.grey90,style:{padding:"2px 8px 2px 0"}}),Object(D.jsx)("span",{children:e.todo.description}),Object(D.jsx)(N,{name:"delete",size:"sm",color:W.grey90,style:{cursor:"pointer",marginLeft:"auto",padding:"2px 0",opacity:i?1:0},onClick:function(){return console.log("Delete")}})]})}))(l||(l=Object(v.a)(["\n    display: flex;\n    \n    cursor: pointer;\n    width: ",";\n    ",";\n    background-color: white;\n    border-radius: ",";\n    padding: 12px 12px;\n    margin-bottom: 8px;\n    vertical-align: top;\n"])),(function(e){return e.w||"100%"}),S.text.primary,k.radius.md),X=function(){var e=Object(h.useState)([]),n=Object(O.a)(e,2),t=n[0],i=n[1],r=function(){var e=Object(y.a)(j.a.mark((function e(){var n,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/todos");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,i(t.reverse()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(h.useEffect)((function(){r()}),[]);var a=function(){var e=Object(y.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/todos/".concat(n),{method:"DELETE"});case 3:i(t.filter((function(e){return e.id!==n}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),o=t.map((function(e){return Object(D.jsx)(U,{todo:e,onDeleteClick:function(){return a(e.id)}},e.id)}));return Object(D.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:o})},_={default:Object(w.a)(p||(p=Object(v.a)(["\n        padding: ",";\n\n        @media (max-width: 640px) {\n            padding: 32px;\n        }\n\n        @media (max-width: 400px) {\n            padding: 24px 16px;\n        }\n    "])),(function(e){return e.p?e.p:"40px"})),main:Object(w.a)(d||(d=Object(v.a)(["\n        max-width: 480px;\n        padding: ",";\n    "])),(function(e){return e.p?e.p:"0"}))},J=w.b.div(u||(u=Object(v.a)(["\n    display: block;\n    width: auto;\n    margin: 0 auto;\n    background: ",";\n    ","\n"])),(function(e){return e.bc}),(function(e){return"main"===e.variant?_.main:_.default})),R=w.b.h1(x||(x=Object(v.a)(["\n    ",";\n    color: ",";\n    margin: 0;\n    padding-bottom: 40px;\n    @media (max-width: 640px) {\n        padding-bottom: 16px;\n    }\n"])),(function(e){return e.variant?S.header[e.variant]:S.header.h2}),(function(e){return e.color}));var K=function(){return Object(D.jsx)(h.Fragment,{children:Object(D.jsxs)(J,{children:[Object(D.jsx)(R,{color:W.grey35,children:"Todo"}),Object(D.jsxs)(J,{variant:"main",children:[Object(D.jsx)(H,{}),Object(D.jsx)(X,{})]})]})})};t(35);b.a.render(Object(D.jsx)(m.a.StrictMode,{children:Object(D.jsx)(K,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5e751f92.chunk.js.map