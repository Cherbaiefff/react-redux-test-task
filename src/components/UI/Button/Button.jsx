import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export default function Button({
    onClick,
    type,
    className,
    children,
    ...props
}) {
    return (
        <button
            type={type}
            className={cn(className, styles.button)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
