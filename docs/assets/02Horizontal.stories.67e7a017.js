import{r as a}from"./index.92b7d655.js";import{S as r}from"./default.af1d79c7.js";import{a as e,j as n}from"./jsx-runtime.f38f5005.js";var p={parameters:{storySource:{source:`import React, { useState } from 'react';
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
`,locationsMap:{"basic-horizontal":{startLoc:{col:31,line:10},endLoc:{col:1,line:41},startBody:{col:31,line:10},endBody:{col:1,line:41}}}}},title:"Basic"};const h=()=>{const[o,s]=a.exports.useState([100,200,"auto"]),t={height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return e("div",{style:{height:500},children:[n("p",{children:"Set size ='horizontal ', switch to horizontal panel"}),e(r,{split:"horizontal",sizes:o,onChange:i=>s(i),children:[n("div",{style:{...t,background:"#ddd"},children:"pane1"}),n("div",{style:{...t,background:"#c0c3c6"},children:"pane2"})]})]})},u=["BasicHorizontal"];export{h as BasicHorizontal,u as __namedExportsOrder,p as default};
//# sourceMappingURL=02Horizontal.stories.67e7a017.js.map
