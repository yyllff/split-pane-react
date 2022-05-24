var y=Object.defineProperty,h=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(n,e,t)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,s=(n,e)=>{for(var t in e||(e={}))g.call(e,t)&&p(n,t,e[t]);if(d)for(var t of d(e))x.call(e,t)&&p(n,t,e[t]);return n},o=(n,e)=>h(n,z(e));import{r}from"./index.50a503e4.js";import{S as c}from"./default.8b53349e.js";import{a as l,j as i}from"./jsx-runtime.67b5855d.js";var b={parameters:{storySource:{source:`import React, { useState } from 'react';
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
`,locationsMap:{"complex-layout":{startLoc:{col:29,line:9},endLoc:{col:1,line:48},startBody:{col:29,line:9},endBody:{col:1,line:48}}}}},title:"Basic"};const k=()=>{const[n,e]=r.exports.useState([250,"auto"]),[t,u]=r.exports.useState([400,"auto"]),[S,m]=r.exports.useState([500,"auto"]),a={height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return l("div",{style:{height:500},children:[i("p",{children:"Split supports complex layouts"}),l(c,{split:"horizontal",sizes:n,onChange:e,children:[l(c,{sizes:t,onChange:u,children:[i("div",{style:o(s({},a),{background:"#ddd"}),children:"Top Pane1"}),i("div",{style:o(s({},a),{background:"#d5d7d9"}),children:"Top Pane2"})]}),l(c,{sizes:S,onChange:m,children:[i("div",{style:o(s({},a),{background:"#c0c3c6"}),children:"Bottom Pane1"}),i("div",{style:o(s({},a),{background:"#a1a5a9"}),children:"Bottom Pane2"})]})]})]})},B=["ComplexLayout"];export{k as ComplexLayout,B as __namedExportsOrder,b as default};
//# sourceMappingURL=03Complex.stories.2f00216e.js.map
