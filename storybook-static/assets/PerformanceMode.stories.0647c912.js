import{r as a}from"./index.92b7d655.js";import{S as i,P as c}from"./default.af1d79c7.js";import{a as r,j as e}from"./jsx-runtime.f38f5005.js";var m={parameters:{storySource:{source:`import React, { useState } from 'react';\r
import { Button } from '@storybook/react/demo';\r
import SplitPane, { Pane } from '../src';\r
import '../src/themes/default.scss';\r
\r
export default {\r
    title: 'Advanced',\r
};\r
\r
export const PerformacnceMode = () => {\r
    const [sizes, setSizes] = useState<(number | string)[]>(['30%', 'auto']);\r
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
            <p>High performance mode can be enabled through performanceMode</p>\r
            <SplitPane \r
                sizes={sizes}\r
                performanceMode\r
                onChange={setSizes}\r
            >\r
                <Pane minSize={100} maxSize='50%'>\r
                    <div style={{ ...layoutCSS, background: '#ddd' }}>\r
                        <p>Pane1</p>\r
                        <p>minSize: 100px</p>\r
                        <p>maxSize: 50%</p>\r
                    </div>\r
                </Pane>\r
                <div style={{ ...layoutCSS, background: '#d5d7d9' }}>\r
                    Pane2\r
                </div>\r
            </SplitPane>\r
        </div>\r
    );\r
};\r
`,locationsMap:{"performacnce-mode":{startLoc:{col:32,line:10},endLoc:{col:1,line:42},startBody:{col:32,line:10},endBody:{col:1,line:42}}}}},title:"Advanced"};const p=()=>{const[t,o]=a.exports.useState(["30%","auto"]),n={height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return r("div",{style:{height:500},children:[e("p",{children:"High performance mode can be enabled through performanceMode"}),r(i,{sizes:t,performanceMode:!0,onChange:o,children:[e(c,{minSize:100,maxSize:"50%",children:r("div",{style:{...n,background:"#ddd"},children:[e("p",{children:"Pane1"}),e("p",{children:"minSize: 100px"}),e("p",{children:"maxSize: 50%"})]})}),e("div",{style:{...n,background:"#d5d7d9"},children:"Pane2"})]})]})},u=["PerformacnceMode"];export{p as PerformacnceMode,u as __namedExportsOrder,m as default};
//# sourceMappingURL=PerformanceMode.stories.0647c912.js.map
