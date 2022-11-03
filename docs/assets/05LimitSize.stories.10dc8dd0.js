import{r as a}from"./index.92b7d655.js";import{S as o,P as s}from"./default.af1d79c7.js";import{a as n,j as e}from"./jsx-runtime.f38f5005.js";var m={parameters:{storySource:{source:`import React, { useState } from 'react';\r
import { Button } from '@storybook/react/demo';\r
import SplitPane, { Pane } from '../src';\r
import '../src/themes/default.scss';\r
\r
export default {\r
    title: 'Advanced',\r
};\r
\r
export const MinSizeAndMaxSize = () => {\r
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
            <p>Set the minimum and maximum values of pane1 through the pane component</p>\r
            <SplitPane sizes={sizes} onChange={setSizes}>\r
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
`,locationsMap:{"min-size-and-max-size":{startLoc:{col:33,line:10},endLoc:{col:1,line:38},startBody:{col:33,line:10},endBody:{col:1,line:38}}}}},title:"Advanced"};const p=()=>{const[t,i]=a.exports.useState(["30%","auto"]),r={height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return n("div",{style:{height:500},children:[e("p",{children:"Set the minimum and maximum values of pane1 through the pane component"}),n(o,{sizes:t,onChange:i,children:[e(s,{minSize:100,maxSize:"50%",children:n("div",{style:{...r,background:"#ddd"},children:[e("p",{children:"Pane1"}),e("p",{children:"minSize: 100px"}),e("p",{children:"maxSize: 50%"})]})}),e("div",{style:{...r,background:"#d5d7d9"},children:"Pane2"})]})]})},S=["MinSizeAndMaxSize"];export{p as MinSizeAndMaxSize,S as __namedExportsOrder,m as default};
//# sourceMappingURL=05LimitSize.stories.10dc8dd0.js.map
