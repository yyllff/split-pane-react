# split-pane-react
> 拆分面板组件，基于 [React.js](http://reactjs.org).查看 [实时demo](https://yyllff.github.io/split-pane-react/). 不同 [主题demo](https://codesandbox.io/s/split-pane-themes-xmsqtt).

## 特征

- **简单的api** 并且支持多面板.
- 支持 **横向&竖向布局** 和 **流体布局**.
- 使用 **受控组件** 模式, 使用灵活方便.
- 支持 **React16.8** 到 **React18**版本，因为使用了React Hooks.
- 支持方便灵活的 **滑轴定制**.


## 安装

````sh
# use npm
npm install split-pane-react

# or if you use yarn
yarn add split-pane-react
````

## 使用样例

```jsx
import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';

function style (color) {
  return {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color
  };
}

function App () {
  const [sizes, setSizes] = useState([100, '30%', 'auto']);

  return (
    <div style={{ height: 500 }}>
      <SplitPane
        split='vertical'
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane minSize={50} maxSize='50%'>
          <div style={style('#ddd')}>
            pane1
          </div>
        </Pane>
        <div style={style('#ccc')}>
          pane2
        </div>
        <div style={style('#eee')}>
          pane3
        </div>
      </SplitPane>
    </div>
  );
};
```
