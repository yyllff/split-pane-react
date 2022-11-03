import{R as t,r as m}from"./index.92b7d655.js";import{g as h}from"./iframe.4f31b941.js";import{S as b}from"./default.af1d79c7.js";import{a as u,j as s}from"./jsx-runtime.f38f5005.js";var v=["children"],k=["children","href","target","rel"],E=["children","onClick"];function d(n,e){if(n==null)return{};var r=S(n,e),o,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(l=0;l<a.length;l++)o=a[l],!(e.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,o)||(r[o]=n[o]))}return r}function S(n,e){if(n==null)return{};var r={},o=Object.keys(n),l,a;for(a=0;a<o.length;a++)l=o[a],!(e.indexOf(l)>=0)&&(r[l]=n[l]);return r}function i(){return i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},i.apply(this,arguments)}var x=function(e){return t.createElement("article",i({},e,{style:{padding:15,lineHeight:1.4,fontFamily:'"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',backgroundColor:"#fff",color:"#000"}}))},w=function(e){var r=e.children,o=d(e,v);return t.createElement("h1",o,r)},z=function(e){return t.createElement("p",i({},e,{style:{opacity:.5}}))},c=function(e){return t.createElement("code",i({},e,{style:{fontSize:15,fontWeight:600,padding:"2px 5px",border:"1px solid #eae9e9",borderRadius:4,backgroundColor:"#f3f2f2",color:"#3a3a3a"}}))},C=function(e){var r=e.children,o=e.href,l=e.target,a=e.rel,y=d(e,k);return t.createElement("a",i({href:o},y,{target:l,rel:a,style:{color:"#1474f3",textDecoration:"none",borderBottom:"1px solid #1474f3",paddingBottom:2}}),r)},B=function(e){var r=e.children,o=e.onClick,l=d(e,E);return t.createElement("button",i({},l,{type:"button",onClick:o,style:{color:"#1474f3",textDecoration:"none",borderBottom:"1px solid #1474f3",paddingBottom:2,borderTop:"none",borderRight:"none",borderLeft:"none",backgroundColor:"transparent",padding:0,cursor:"pointer",font:"inherit"}}),r)},g=function(e){var r=e.showApp;return t.createElement(x,null,t.createElement(w,null,"Welcome to storybook"),t.createElement("p",null,"This is a UI component dev environment for your app."),t.createElement("p",null,"We've added some basic stories inside the ",t.createElement(c,null,"src/stories")," directory.",t.createElement("br",null),"A story is a single state of one or more UI components. You can have as many stories as you want.",t.createElement("br",null),"(Basically a story is like a visual test case.)"),t.createElement("p",null,"See these sample ",t.createElement(B,{onClick:r},"stories")," for a component called\xA0",t.createElement(c,null,"Button"),"."),t.createElement("p",null,"Just like that, you can add your own components as stories.",t.createElement("br",null),"You can also edit those components and see changes right away.",t.createElement("br",null),"(Try editing the ",t.createElement(c,null,"Button")," stories located at\xA0",t.createElement(c,null,"src/stories/1-Button.stories.js"),".)"),t.createElement("p",null,"Usually we create stories with smaller UI components in the app.",t.createElement("br",null),"Have a look at the\xA0",t.createElement(C,{href:"https://storybook.js.org/basics/writing-stories",target:"_blank",rel:"noopener noreferrer"},"Writing Stories"),"\xA0section in our documentation."),t.createElement(z,null,t.createElement("b",null,"NOTE:"),t.createElement("br",null),"Have a look at the ",t.createElement(c,null,".storybook/webpack.config.js")," to add webpack loaders and plugins you are using in this project."))};g.displayName="Welcome";var j=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),A=h(j),R={border:"1px solid #eee",borderRadius:3,backgroundColor:"#FFFFFF",cursor:"pointer",fontSize:15,padding:"3px 10px",margin:10},p=function(e){var r=e.children,o=e.onClick;return t.createElement("button",{onClick:o,style:R,type:"button"},r)};p.displayName="Button";p.defaultProps={onClick:function(){}};var O=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),P=h(O),f={Welcome:A.default,Button:P.default},T={parameters:{storySource:{source:`import React, { useState } from 'react';
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
`,locationsMap:{"allow-resize":{startLoc:{col:27,line:10},endLoc:{col:1,line:43},startBody:{col:27,line:10},endBody:{col:1,line:43}}}}},title:"Advanced"};const F=()=>{const[n,e]=m.exports.useState(["20%","auto"]),[r,o]=m.exports.useState(!0),l={height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return u("div",{style:{height:500},children:[s("p",{children:"Enable and disable resize"}),u("div",{children:[s(f.Button,{onClick:()=>o(!0),children:"allow resize"}),s(f.Button,{onClick:()=>o(!1),children:"not allow resize"})]}),u(b,{sizes:n,onChange:e,allowResize:r,children:[s("div",{style:{...l,background:"#ddd"},children:"Pane1"}),s("div",{style:{...l,background:"#d5d7d9"},children:"Pane2"})]})]})},L=["AllowResize"];export{F as AllowResize,L as __namedExportsOrder,T as default};
//# sourceMappingURL=06AllowResize.stories.ddb90bbb.js.map
