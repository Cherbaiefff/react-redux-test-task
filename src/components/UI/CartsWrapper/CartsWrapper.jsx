import React from 'react';

import styles from './CartsWrapper.module.scss';

export default function CartsWrapper({ children }) {
    return <div className={styles['carts-wrapper']}>{children}</div>;
}
