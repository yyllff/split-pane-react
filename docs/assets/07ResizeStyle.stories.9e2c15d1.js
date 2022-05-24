var S=Object.defineProperty,m=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(t,e,n)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,i=(t,e)=>{for(var n in e||(e={}))y.call(e,n)&&l(t,n,e[n]);if(d)for(var n of d(e))g.call(e,n)&&l(t,n,e[n]);return t},a=(t,e)=>m(t,h(e));import{r as c}from"./index.50a503e4.js";import{S as u,P as z}from"./default.8b53349e.js";import{a as o,j as s}from"./jsx-runtime.67b5855d.js";var C={parameters:{storySource:{source:`import React, { useState } from 'react';
import { Button } from '@storybook/react/demo';
import SplitPane, { Pane } from '../src';
import '../src/themes/default.scss';

export default {
    title: 'Advanced',
};

export const FluidPanes = () => {
    const [sizes, setSizes] = useState<(number | string)[]>(['20%', 'auto']);
    const [sizes1, setSizes1] = useState<(number | string)[]>(['50%', 'auto']);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={{ height: 500 }}>
            <p>Support fluid pane</p>
            <SplitPane sizes={sizes} onChange={setSizes}>
                <Pane minSize={100} maxSize='40%'>
                    <div style={{ ...layoutCSS, background: '#ddd' }}>
                        Pane1
                        <p>
                            Try sliding the right axis
                        </p>
                    </div>                    
                </Pane>
                <SplitPane sizes={sizes1}  onChange={setSizes1}>
                    <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                        Pane2
                    </div>
                    <div style={{ ...layoutCSS, background: '#a1a5a9' }}>
                        Pane3
                    </div>                  
                </SplitPane>
            </SplitPane>
        </div>
    );
};
`,locationsMap:{"fluid-panes":{startLoc:{col:26,line:10},endLoc:{col:1,line:45},startBody:{col:26,line:10},endBody:{col:1,line:45}}}}},title:"Advanced"};const b=()=>{const[t,e]=c.exports.useState(["20%","auto"]),[n,p]=c.exports.useState(["50%","auto"]),r={height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return o("div",{style:{height:500},children:[s("p",{children:"Support fluid pane"}),o(u,{sizes:t,onChange:e,children:[s(z,{minSize:100,maxSize:"40%",children:o("div",{style:a(i({},r),{background:"#ddd"}),children:["Pane1",s("p",{children:"Try sliding the right axis"})]})}),o(u,{sizes:n,onChange:p,children:[s("div",{style:a(i({},r),{background:"#d5d7d9"}),children:"Pane2"}),s("div",{style:a(i({},r),{background:"#a1a5a9"}),children:"Pane3"})]})]})]})},k=["FluidPanes"];export{b as FluidPanes,k as __namedExportsOrder,C as default};
//# sourceMappingURL=07ResizeStyle.stories.9e2c15d1.js.map
