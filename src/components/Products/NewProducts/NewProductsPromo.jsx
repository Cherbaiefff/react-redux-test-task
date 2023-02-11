import React from 'react';
import AnimationWrapper from '../../UI/AnimationWrapper';
import Cart from '../../UI/Cart';
import CartsWrapper from '../../UI/CartsWrapper';

import styles from './NewProductsPromo.module.scss';

export default function NewProductsPromo({ promoProducts }) {
    return (
        <div className={styles['new-products-promo']}>
            <h1>New Products! Don't waste your time, buy it now</h1>
            <CartsWrapper>
                {promoProducts.map((product, idx) => {
                    return (
                        <AnimationWrapper delay={idx} key={product.id}>
                            <Cart product={product} key={product.id} />
                        </AnimationWrapper>
                    );
                })}
            </CartsWrapper>
        </div>
    );
}
