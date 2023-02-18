import React from 'react';

import styles from './ProductsError.module.scss';

export default function ProductsError() {
    return (
        <div className={styles['products-error']}>
            <h2>Sorry, No Products Found... =(</h2>
        </div>
    );
}
