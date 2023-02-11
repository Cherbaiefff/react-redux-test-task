import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePurchaseModal } from '../../../store/user-cart';
import ButtonModalClose from '../ButtonModalClose/ButtonModalClose';
import PurchaseModalForm from '../PurchaseModalForm';

import styles from './PurhaseModal.module.scss';

export default function PurchaseModal() {
    const userData = useSelector((state) => state.userCart);
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(togglePurchaseModal());
    };

    return (
        <>
            <div className={styles.darkBG} onClick={closeModalHandler} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <ButtonModalClose
                        className={styles['modal-close-btn']}
                        onClick={closeModalHandler}
                    />
                    <div className={styles['chosen-products']}>
                        <span className={styles['chosen-products__text']}>
                            You want to buy:
                        </span>
                        <ul>
                            {userData.chosenProducts.map((product) => {
                                return (
                                    <li key={product.id}>
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                        />
                                        <div
                                            className={
                                                styles['chosen-products__title']
                                            }
                                        >
                                            {product.title}
                                        </div>
                                        <div
                                            className={
                                                styles[
                                                    'chosen-products__amount'
                                                ]
                                            }
                                        >
                                            x<span>{product.quantity}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <PurchaseModalForm
                        classNames={[
                            styles['modal-form'],
                            styles['modal-submit'],
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
