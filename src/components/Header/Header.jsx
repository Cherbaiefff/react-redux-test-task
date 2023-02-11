import React, { useMemo } from 'react';
import Container from '../UI/Container';
import { useDispatch, useSelector } from 'react-redux';
import { togglePurchaseModal } from '../../store/user-cart';

import iconBasket from '../../images/icon-basket.svg';
import styles from './Header.module.scss';

export default function Header() {
    const userProducts = useSelector((state) => state.userCart);
    const productsCount = useMemo(
        () =>
            userProducts.chosenProducts.reduce((acc, product) => {
                const count = acc + product.quantity;
                return count;
            }, 0),
        [userProducts.chosenProducts]
    );
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles['header-content']}>
                    <p className={styles['header-description']}>
                        Different products =/
                    </p>
                    {userProducts.chosenProducts.length !== 0 && (
                        <div className={styles['basket-container']}>
                            <img
                                className={styles['basket-image']}
                                src={iconBasket}
                                alt="icon basket"
                                width="28"
                                height="28"
                                onClick={() => dispatch(togglePurchaseModal())}
                            />
                            <div className={styles['basket-count']}>
                                {productsCount}
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </header>
    );
}
