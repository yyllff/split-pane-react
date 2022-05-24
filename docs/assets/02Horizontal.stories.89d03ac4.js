var d=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var r=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,o=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&r(e,t,n[t]);if(a)for(var t of a(n))z.call(n,t)&&r(e,t,n[t]);return e},s=(e,n)=>p(e,h(n));import{r as S}from"./index.50a503e4.js";import{S as m}from"./default.8b53349e.js";import{a as l,j as i}from"./jsx-runtime.67b5855d.js";var x={parameters:{storySource:{source:`import React, { useState } from 'react';
import { Button } from '@storybook/react/demo';
import SplitPane, { Pane } from '../src';
import '../src/themes/default.scss';

export default {
    title: 'Basic',
};

export const BasicHorizontal = () => {
    const [sizes, setSizes] = useState<(number | string)[]>([
        100,
        200,
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
            <p>Set size ='horizontal ', switch to horizontal panel</p>
            <SplitPane
                split='horizontal'
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes)}
            >
                <div style={{ ...layoutCSS, background: '#ddd' }}>
                    pane1
                </div>
                <div style={{ ...layoutCSS, background: '#c0c3c6' }}>
                    pane2
                </div>
            </SplitPane>
        </div>
    );
};
`,locationsMap:{"basic-horizontal":{startLoc:{col:31,line:10},endLoc:{col:1,line:41},startBody:{col:31,line:10},endBody:{col:1,line:41}}}}},title:"Basic"};const B=()=>{const[e,n]=S.exports.useState([100,200,"auto"]),t={height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return l("div",{style:{height:500},children:[i("p",{children:"Set size ='horizontal ', switch to horizontal panel"}),l(m,{split:"horizontal",sizes:e,onChange:c=>n(c),children:[i("div",{style:s(o({},t),{background:"#ddd"}),children:"pane1"}),i("div",{style:s(o({},t),{background:"#c0c3c6"}),children:"pane2"})]})]})},C=["BasicHorizontal"];export{B as BasicHorizontal,C as __namedExportsOrder,x as default};
//# sourceMappingURL=02Horizontal.stories.89d03ac4.js.map
