import{r as i}from"./index.92b7d655.js";import{S as o}from"./default.af1d79c7.js";import{a as t,j as e}from"./jsx-runtime.f38f5005.js";var u={parameters:{storySource:{source:`import React, { useState } from 'react';
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
`,locationsMap:{"percentage-size":{startLoc:{col:30,line:10},endLoc:{col:1,line:43},startBody:{col:30,line:10},endBody:{col:1,line:43}}}}},title:"Basic"};const p=()=>{const[s,a]=i.exports.useState(["20%","30%","auto"]),n={height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return t("div",{style:{height:500},children:[e("p",{children:"Size value support percentage"}),t(o,{sizes:s,onChange:r=>a(r),children:[e("div",{style:{...n,background:"#ddd"},children:"Pane1"}),e("div",{style:{...n,background:"#d5d7d9"},children:"Pane2"}),e("div",{style:{...n,background:"#a1a5a9"},children:"Pane3"})]})]})},S=["PercentageSize"];export{p as PercentageSize,S as __namedExportsOrder,u as default};
//# sourceMappingURL=04Percentage.stories.724eac39.js.map
