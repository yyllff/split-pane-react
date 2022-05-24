var l=Object.defineProperty,u=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var o=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))S.call(e,n)&&o(t,n,e[n]);if(i)for(var n of i(e))g.call(e,n)&&o(t,n,e[n]);return t},a=(t,e)=>u(t,p(e));import{r as y}from"./index.50a503e4.js";import{S as m}from"./default.8b53349e.js";import{a as c,j as r}from"./jsx-runtime.67b5855d.js";var f={parameters:{storySource:{source:`import React, { useState } from 'react';
import { Button } from '@storybook/react/demo';
import SplitPane, { Pane } from '../src';
import '../src/themes/default.scss';

export default {
    title: 'Basic',
};

export const PercentageSize = () => {
    const [sizes, setSizes] = useState<(number | string)[]>([
        '20%',
        '30%',
        'auto',
    ]);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={{ height: 500 }}>
            <p>Size value support percentage</p>
            <SplitPane
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes)}
            >
                <div style={{ ...layoutCSS, background: '#ddd' }}>
                    Pane1
                </div>
                <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                    Pane2
                </div>
                <div style={{ ...layoutCSS, background: '#a1a5a9' }}>
                    Pane3
                </div>
            </SplitPane>
        </div>
    );
};
`,locationsMap:{"percentage-size":{startLoc:{col:30,line:10},endLoc:{col:1,line:43},startBody:{col:30,line:10},endBody:{col:1,line:43}}}}},title:"Basic"};const x=()=>{const[t,e]=y.exports.useState(["20%","30%","auto"]),n={height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return c("div",{style:{height:500},children:[r("p",{children:"Size value support percentage"}),c(m,{sizes:t,onChange:d=>e(d),children:[r("div",{style:a(s({},n),{background:"#ddd"}),children:"Pane1"}),r("div",{style:a(s({},n),{background:"#d5d7d9"}),children:"Pane2"}),r("div",{style:a(s({},n),{background:"#a1a5a9"}),children:"Pane3"})]})]})},C=["PercentageSize"];export{x as PercentageSize,C as __namedExportsOrder,f as default};
//# sourceMappingURL=04Percentage.stories.8e8f7b25.js.map
