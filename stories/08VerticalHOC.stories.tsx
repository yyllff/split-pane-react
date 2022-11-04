/*
 * @Description: 
 * @Author: wangchao
 * @Date: 2022-11-04 13:34:15
 */
/*
 * @Description: 
 * @Author: wangchao
 * @Date: 2022-11-03 18:18:21
 */
import React, { useState } from 'react';
import { Button } from '@storybook/react/demo';
import SplitPane, { Pane } from '../src';
import '../src/themes/default.scss';

export default {
    title: 'Basic',
};

export const BasicVerticalHOC = () => {
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
  const MyPane = ({children}) => (<Pane minSize={400} maxSize={800}>{children}</Pane>);
    return (
        <div style={{ height: 500 }}>
            <p>Split used to drag and drop to modify panel size</p>
            <SplitPane
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes)}
            >
                <MyPane style={{ background: '#abc' }}>Foo</MyPane>
                <div style={{ ...layoutCSS, background: '#ddd' }}>
                    pane1
                </div>

            </SplitPane>
        </div>
    );
};
