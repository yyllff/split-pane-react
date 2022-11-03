import{r as o}from"./index.92b7d655.js";import{S as r}from"./default.af1d79c7.js";import{a as n,j as e}from"./jsx-runtime.f38f5005.js";var p={parameters:{storySource:{source:`import React, { useState } from 'react';
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
`,locationsMap:{"basic-vertical":{startLoc:{col:29,line:10},endLoc:{col:1,line:43},startBody:{col:29,line:10},endBody:{col:1,line:43}}}}},title:"Basic"};const u=()=>{const[s,a]=o.exports.useState([100,200,"auto"]),t={height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return n("div",{style:{height:500},children:[e("p",{children:"Split used to drag and drop to modify panel size"}),n(r,{sizes:s,onChange:i=>a(i),children:[e("div",{style:{...t,background:"#ddd"},children:"pane1"}),e("div",{style:{...t,background:"#d5d7d9"},children:"pane2"}),e("div",{style:{...t,background:"#a1a5a9"},children:"pane2"})]})]})},S=["BasicVertical"];export{u as BasicVertical,S as __namedExportsOrder,p as default};
//# sourceMappingURL=01Vertical.stories.1d79cc10.js.map
