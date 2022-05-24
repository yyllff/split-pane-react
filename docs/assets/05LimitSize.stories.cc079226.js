var l=Object.defineProperty,c=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var d=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&d(t,n,e[n]);if(r)for(var n of r(e))S.call(e,n)&&d(t,n,e[n]);return t},o=(t,e)=>c(t,m(e));import{r as u}from"./index.50a503e4.js";import{S as h,P as z}from"./default.8b53349e.js";import{a as s,j as i}from"./jsx-runtime.67b5855d.js";var v={parameters:{storySource:{source:`import React, { useState } from 'react';
import { Button } from '@storybook/react/demo';
import SplitPane, { Pane } from '../src';
import '../src/themes/default.scss';

export default {
    title: 'Advanced',
};

export const MinSizeAndMaxSize = () => {
    const [sizes, setSizes] = useState<(number | string)[]>(['30%', 'auto']);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={{ height: 500 }}>
            <p>Set the minimum and maximum values of pane1 through the pane component</p>
            <SplitPane sizes={sizes} onChange={setSizes}>
                <Pane minSize={100} maxSize='50%'>
                    <div style={{ ...layoutCSS, background: '#ddd' }}>
                        <p>Pane1</p>
                        <p>minSize: 100px</p>
                        <p>maxSize: 50%</p>
                    </div>                    
                </Pane>
                <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                    Pane2
                </div>
            </SplitPane>
        </div>
    );
};
`,locationsMap:{"min-size-and-max-size":{startLoc:{col:33,line:10},endLoc:{col:1,line:38},startBody:{col:33,line:10},endBody:{col:1,line:38}}}}},title:"Advanced"};const P=()=>{const[t,e]=u.exports.useState(["30%","auto"]),n={height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return s("div",{style:{height:500},children:[i("p",{children:"Set the minimum and maximum values of pane1 through the pane component"}),s(h,{sizes:t,onChange:e,children:[i(z,{minSize:100,maxSize:"50%",children:s("div",{style:o(a({},n),{background:"#ddd"}),children:[i("p",{children:"Pane1"}),i("p",{children:"minSize: 100px"}),i("p",{children:"maxSize: 50%"})]})}),i("div",{style:o(a({},n),{background:"#d5d7d9"}),children:"Pane2"})]})]})},C=["MinSizeAndMaxSize"];export{P as MinSizeAndMaxSize,C as __namedExportsOrder,v as default};
//# sourceMappingURL=05LimitSize.stories.cc079226.js.map
