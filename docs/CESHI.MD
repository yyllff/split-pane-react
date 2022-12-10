## 使用样例

```js
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

## 属性

** SplitPane **

|    Property    |    Description   |   Type     |  Default     |
| -------------- | ---------------- | :--------: | :----------: |
| split    | 布局方式，支持水平和竖直两种. | 'vertical' \|'horizontal' |'vertical' |
| sizes | 每个面板尺寸，因为是受控组件模式，所以该属性必传| (string \| number)[] |[] |
| resizerSize | 指定滑轴的尺寸（宽度） | number |4 |
| allowResize | 面板尺寸是否支持调整，设置为false后，滑轴将不能滑动 | boolean |true |
| className | 自定义className | string |void |
| sashRender | 自定义滑轴样式函数 | (index: number, active: boolean) => void |void |
| performanceMode | 开启高性能模式，将实时更新尺寸改为滑动完成后更新，避免页面频繁重排 | boolean | false |
| onChange | 尺寸改变时的回调函数 | (sizes: number[]) => void |void |
| onDragStart | 拖拽开始时的回调函数 | () => void |void |
| onDragEnd | 拖拽结束时的回调函数| () => void |void |

** Pane **

|    Property    |    Description   |  Type  | Default |
| ------------------ | ---------------- | :--------: | ------------------ |
| className | 面板 className | string | void |
| minSize | 限制面板的最小尺寸 | string \| number | void |
| maxSize | 限制面板的最大尺寸 | string\|number | void |

## themes

可以通过sashRender参数，定制需要的主题:

- 默认的主题是参考的vscode主题
- 同时也内置了一套sublime风格的主题
- 自定义 [主题demos](https://codesandbox.io/s/split-pane-themes-xmsqtt).


## License

**[split-pane-react](https://github.com/yyllff/split-pane-react)** 使用 [MIT](LICENSE)许可.

> PS: 如果您有任何使用问题，可以提一个issue，我将尽快修复。这个组件会长期维护，同样的，如果你有什么好的想法，也欢迎提merge。如果这个组件对你有帮助，请留下你的Star，以便于需要它的开发者更容易搜索到它。
