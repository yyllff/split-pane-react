import React, { PropsWithChildren } from 'react';

interface HTMLElementProps {
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    role?: string;
}

export interface IPaneConfigs {
    maxSize?: number | string;
    minSize?: number | string;
}

export default function Pane({
    children,
    style,
    className,
    role,
    title,
}: PropsWithChildren<HTMLElementProps & IPaneConfigs>) {
    return (
        <div role={role} title={title} className={className} style={style}>
            {children}
        </div>
    );
}
