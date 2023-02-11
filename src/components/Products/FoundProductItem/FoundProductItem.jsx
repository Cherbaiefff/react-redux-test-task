import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/user-cart';
import Button from '../../UI/Button';

import styles from './FoundProductItem.module.scss';

export default function FoundProductItem({ product }) {
    const dispatch = useDispatch();

    const buyProductHandler = () => {
        dispatch(addProduct({ ...product, quantity: 1 }));
    };

    const { title, thumbnail, price } = product;
    return (
        <li className={styles['found-product-item']}>
            <img src={thumbnail} alt={title} />
            <div className={styles['found-product-item__info']}>
                <div className={styles['found-product-item__title']}>
                    {title}
                </div>
                <div className={styles['found-product-item__price']}>
                    ${price}
                </div>
            </div>
            <Button
                className={styles['found-product-item__btn']}
                onClick={buyProductHandler}
            >
                Buy Now!
            </Button>
        </li>
    );
}
