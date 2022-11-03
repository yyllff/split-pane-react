import{r as t}from"./index.92b7d655.js";import{S as s,P as l}from"./default.af1d79c7.js";import{a as n,j as e}from"./jsx-runtime.f38f5005.js";var S={parameters:{storySource:{source:`import React, { useState } from 'react';\r
import { Button } from '@storybook/react/demo';\r
import SplitPane, { Pane } from '../src';\r
import '../src/themes/default.scss';\r
\r
export default {\r
    title: 'Advanced',\r
};\r
\r
export const FluidPanes = () => {\r
    const [sizes, setSizes] = useState<(number | string)[]>(['20%', 'auto']);\r
    const [sizes1, setSizes1] = useState<(number | string)[]>(['50%', 'auto']);\r
\r
    const layoutCSS = {\r
        height: '100%',\r
        display: 'flex',\r
        flexDirection: 'column',\r
        alignItems: 'center',\r
        justifyContent: 'center',\r
    };\r
\r
    return (\r
        <div style={{ height: 500 }}>\r
            <p>Support fluid pane</p>\r
            <SplitPane sizes={sizes} onChange={setSizes}>\r
                <Pane minSize={100} maxSize='40%'>\r
                    <div style={{ ...layoutCSS, background: '#ddd' }}>\r
                        Pane1\r
                        <p>\r
                            Try sliding the right axis\r
                        </p>\r
                    </div>\r
                </Pane>\r
                <SplitPane sizes={sizes1}  onChange={setSizes1}>\r
                    <div style={{ ...layoutCSS, background: '#d5d7d9' }}>\r
                        Pane2\r
                    </div>\r
                    <div style={{ ...layoutCSS, background: '#a1a5a9' }}>\r
                        Pane3\r
                    </div>                  \r
                </SplitPane>\r
            </SplitPane>\r
        </div>\r
    );\r
};\r
`,locationsMap:{"fluid-panes":{startLoc:{col:26,line:10},endLoc:{col:1,line:45},startBody:{col:26,line:10},endBody:{col:1,line:45}}}}},title:"Advanced"};const m=()=>{const[i,a]=t.exports.useState(["20%","auto"]),[o,d]=t.exports.useState(["50%","auto"]),r={height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return n("div",{style:{height:500},children:[e("p",{children:"Support fluid pane"}),n(s,{sizes:i,onChange:a,children:[e(l,{minSize:100,maxSize:"40%",children:n("div",{style:{...r,background:"#ddd"},children:["Pane1",e("p",{children:"Try sliding the right axis"})]})}),n(s,{sizes:o,onChange:d,children:[e("div",{style:{...r,background:"#d5d7d9"},children:"Pane2"}),e("div",{style:{...r,background:"#a1a5a9"},children:"Pane3"})]})]})]})},h=["FluidPanes"];export{m as FluidPanes,h as __namedExportsOrder,S as default};
//# sourceMappingURL=07ResizeStyle.stories.9b3b66f4.js.map
