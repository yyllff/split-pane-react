import{r as s}from"./index.92b7d655.js";import{S as o}from"./default.af1d79c7.js";import{a as n,j as e}from"./jsx-runtime.f38f5005.js";var m={parameters:{storySource:{source:`import React, { useState } from 'react';
import SplitPane from '../src';
import '../src/themes/default.scss';

export default {
    title: 'Basic',
};

export const ComplexLayout = () => {
    const [sizes, setSizes] = useState<(number | string)[]>([250, 'auto']);
    const [sizes1, setSizes1] = useState<(number | string)[]>([400, 'auto']);
    const [sizes2, setSizes2] = useState<(number | string)[]>([500, 'auto']);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={{ height: 500 }}>
            <p>Split supports complex layouts</p>
            <SplitPane
                split="horizontal"
                sizes={sizes}
                onChange={setSizes}
            >
                <SplitPane sizes={sizes1} onChange={setSizes1}>
                    <div style={{ ...layoutCSS, background: '#ddd' }}>
                        Top Pane1
                    </div>
                    <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                        Top Pane2
                    </div>
                </SplitPane>
                <SplitPane sizes={sizes2} onChange={setSizes2}>
                    <div style={{ ...layoutCSS, background: '#c0c3c6' }}>
                        Bottom Pane1
                    </div>
                    <div style={{ ...layoutCSS, background: '#a1a5a9' }}>
                        Bottom Pane2
                    </div>
                </SplitPane>
            </SplitPane>
        </div>
    );
};
`,locationsMap:{"complex-layout":{startLoc:{col:29,line:9},endLoc:{col:1,line:48},startBody:{col:29,line:9},endBody:{col:1,line:48}}}}},title:"Basic"};const y=()=>{const[i,a]=s.exports.useState([250,"auto"]),[l,r]=s.exports.useState([400,"auto"]),[c,d]=s.exports.useState([500,"auto"]),t={height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return n("div",{style:{height:500},children:[e("p",{children:"Split supports complex layouts"}),n(o,{split:"horizontal",sizes:i,onChange:a,children:[n(o,{sizes:l,onChange:r,children:[e("div",{style:{...t,background:"#ddd"},children:"Top Pane1"}),e("div",{style:{...t,background:"#d5d7d9"},children:"Top Pane2"})]}),n(o,{sizes:c,onChange:d,children:[e("div",{style:{...t,background:"#c0c3c6"},children:"Bottom Pane1"}),e("div",{style:{...t,background:"#a1a5a9"},children:"Bottom Pane2"})]})]})]})},h=["ComplexLayout"];export{y as ComplexLayout,h as __namedExportsOrder,m as default};
//# sourceMappingURL=03Complex.stories.a5410c5d.js.map
