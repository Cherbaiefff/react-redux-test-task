import React, { useCallback } from 'react';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/user-cart';

import styles from './Cart.module.scss';

export default function Cart({ product }) {
    const { title, description, price, thumbnail } = product;
    const dispatch = useDispatch();

    const buyProductHandler = useCallback(() => {
        dispatch(addProduct({ ...product, quantity: 1 }));
    }, [product, dispatch]);

    return (
        <div className={styles.cart}>
            <img src={thumbnail} alt={title} />
            <div className={styles['cart-description']}>
                <div className={styles['cart-description__product']}>
                    {title}
                </div>
                <div className={styles['cart-description__price']}>
                    ${price}
                </div>
                <p className={styles['cart-description__text']}>
                    {description}
                </p>
            </div>
            <Button
                type="button"
                className={styles['cart__btn']}
                onClick={() => buyProductHandler(product)}
            >
                Buy Now!
            </Button>
        </div>
    );
}
