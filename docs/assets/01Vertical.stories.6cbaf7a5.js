var c=Object.defineProperty,p=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var r=(n,e,t)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,s=(n,e)=>{for(var t in e||(e={}))S.call(e,t)&&r(n,t,e[t]);if(o)for(var t of o(e))y.call(e,t)&&r(n,t,e[t]);return n},a=(n,e)=>p(n,u(e));import{r as m}from"./index.50a503e4.js";import{S as g}from"./default.8b53349e.js";import{a as d,j as i}from"./jsx-runtime.67b5855d.js";var b={parameters:{storySource:{source:`import React, { useState } from 'react';
import { Button } from '@storybook/react/demo';
import SplitPane, { Pane } from '../src';
import '../src/themes/default.scss';

export default {
    title: 'Basic',
};

export const BasicVertical = () => {
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
            <p>Split used to drag and drop to modify panel size</p>
            <SplitPane
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes)}
            >
                <div style={{ ...layoutCSS, background: '#ddd' }}>
                    pane1
                </div>
                <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                    pane2
                </div>
                <div style={{ ...layoutCSS, background: '#a1a5a9' }}>
                    pane2
                </div>
            </SplitPane>
        </div>
    );
};
`,locationsMap:{"basic-vertical":{startLoc:{col:29,line:10},endLoc:{col:1,line:43},startBody:{col:29,line:10},endBody:{col:1,line:43}}}}},title:"Basic"};const x=()=>{const[n,e]=m.exports.useState([100,200,"auto"]),t={height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return d("div",{style:{height:500},children:[i("p",{children:"Split used to drag and drop to modify panel size"}),d(g,{sizes:n,onChange:l=>e(l),children:[i("div",{style:a(s({},t),{background:"#ddd"}),children:"pane1"}),i("div",{style:a(s({},t),{background:"#d5d7d9"}),children:"pane2"}),i("div",{style:a(s({},t),{background:"#a1a5a9"}),children:"pane2"})]})]})},C=["BasicVertical"];export{x as BasicVertical,C as __namedExportsOrder,b as default};
//# sourceMappingURL=01Vertical.stories.6cbaf7a5.js.map
