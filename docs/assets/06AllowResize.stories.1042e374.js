var S=Object.defineProperty,x=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(t,e,n)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))z.call(e,n)&&g(t,n,e[n]);if(h)for(var n of h(e))C.call(e,n)&&g(t,n,e[n]);return t},d=(t,e)=>x(t,w(e));import{R as o,r as y}from"./index.50a503e4.js";import{g as v}from"./iframe.30cd1fd9.js";import{S as B}from"./default.8b53349e.js";import{a as p,j as s}from"./jsx-runtime.67b5855d.js";var j=["children"],A=["children","href","target","rel"],R=["children","onClick"];function m(t,e){if(t==null)return{};var n=O(t,e),r,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)r=a[l],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function O(t,e){if(t==null)return{};var n={},r=Object.keys(t),l,a;for(a=0;a<r.length;a++)l=r[a],!(e.indexOf(l)>=0)&&(n[l]=t[l]);return n}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}var P=function(e){return o.createElement("article",i({},e,{style:{padding:15,lineHeight:1.4,fontFamily:'"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',backgroundColor:"#fff",color:"#000"}}))},_=function(e){var n=e.children,r=m(e,j);return o.createElement("h1",r,n)},W=function(e){return o.createElement("p",i({},e,{style:{opacity:.5}}))},c=function(e){return o.createElement("code",i({},e,{style:{fontSize:15,fontWeight:600,padding:"2px 5px",border:"1px solid #eae9e9",borderRadius:4,backgroundColor:"#f3f2f2",color:"#3a3a3a"}}))},I=function(e){var n=e.children,r=e.href,l=e.target,a=e.rel,E=m(e,A);return o.createElement("a",i({href:r},E,{target:l,rel:a,style:{color:"#1474f3",textDecoration:"none",borderBottom:"1px solid #1474f3",paddingBottom:2}}),n)},N=function(e){var n=e.children,r=e.onClick,l=m(e,R);return o.createElement("button",i({},l,{type:"button",onClick:r,style:{color:"#1474f3",textDecoration:"none",borderBottom:"1px solid #1474f3",paddingBottom:2,borderTop:"none",borderRight:"none",borderLeft:"none",backgroundColor:"transparent",padding:0,cursor:"pointer",font:"inherit"}}),n)},k=function(e){var n=e.showApp;return o.createElement(P,null,o.createElement(_,null,"Welcome to storybook"),o.createElement("p",null,"This is a UI component dev environment for your app."),o.createElement("p",null,"We've added some basic stories inside the ",o.createElement(c,null,"src/stories")," directory.",o.createElement("br",null),"A story is a single state of one or more UI components. You can have as many stories as you want.",o.createElement("br",null),"(Basically a story is like a visual test case.)"),o.createElement("p",null,"See these sample ",o.createElement(N,{onClick:n},"stories")," for a component called\xA0",o.createElement(c,null,"Button"),"."),o.createElement("p",null,"Just like that, you can add your own components as stories.",o.createElement("br",null),"You can also edit those components and see changes right away.",o.createElement("br",null),"(Try editing the ",o.createElement(c,null,"Button")," stories located at\xA0",o.createElement(c,null,"src/stories/1-Button.stories.js"),".)"),o.createElement("p",null,"Usually we create stories with smaller UI components in the app.",o.createElement("br",null),"Have a look at the\xA0",o.createElement(I,{href:"https://storybook.js.org/basics/writing-stories",target:"_blank",rel:"noopener noreferrer"},"Writing Stories"),"\xA0section in our documentation."),o.createElement(W,null,o.createElement("b",null,"NOTE:"),o.createElement("br",null),"Have a look at the ",o.createElement(c,null,".storybook/webpack.config.js")," to add webpack loaders and plugins you are using in this project."))};k.displayName="Welcome";var T=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),F=v(T),L={border:"1px solid #eee",borderRadius:3,backgroundColor:"#FFFFFF",cursor:"pointer",fontSize:15,padding:"3px 10px",margin:10},f=function(e){var n=e.children,r=e.onClick;return o.createElement("button",{onClick:r,style:L,type:"button"},n)};f.displayName="Button";f.defaultProps={onClick:function(){}};var $=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),H=v($),b={Welcome:F.default,Button:H.default},J={parameters:{storySource:{source:`import React, { useState } from 'react';
import { Button } from '@storybook/react/demo';
import SplitPane, { Pane } from '../src';
import '../src/themes/default.scss';

export default {
    title: 'Advanced',
};

export const AllowResize = () => {
    const [sizes, setSizes] = useState<(number | string)[]>(['20%', 'auto']);
    const [allowResize, setAllowResize] = useState(true); 

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={{ height: 500 }}>
            <p>Enable and disable resize</p>
            <div>
                <Button onClick={() => setAllowResize(true)}>allow resize</Button>
                <Button onClick={() => setAllowResize(false)}>not allow resize</Button>
            </div>
            <SplitPane 
                sizes={sizes} 
                onChange={setSizes}
                allowResize={allowResize}
            >
                <div style={{ ...layoutCSS, background: '#ddd' }}>
                    Pane1
                </div>               
                <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                    Pane2
                </div>
            </SplitPane>
        </div>
    );
};
`,locationsMap:{"allow-resize":{startLoc:{col:27,line:10},endLoc:{col:1,line:43},startBody:{col:27,line:10},endBody:{col:1,line:43}}}}},title:"Advanced"};const G=()=>{const[t,e]=y.exports.useState(["20%","auto"]),[n,r]=y.exports.useState(!0),l={height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return p("div",{style:{height:500},children:[s("p",{children:"Enable and disable resize"}),p("div",{children:[s(b.Button,{onClick:()=>r(!0),children:"allow resize"}),s(b.Button,{onClick:()=>r(!1),children:"not allow resize"})]}),p(B,{sizes:t,onChange:e,allowResize:n,children:[s("div",{style:d(u({},l),{background:"#ddd"}),children:"Pane1"}),s("div",{style:d(u({},l),{background:"#d5d7d9"}),children:"Pane2"})]})]})},K=["AllowResize"];export{G as AllowResize,K as __namedExportsOrder,J as default};
//# sourceMappingURL=06AllowResize.stories.1042e374.js.map
