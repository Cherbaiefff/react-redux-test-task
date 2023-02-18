import React, { useState, useRef, useEffect } from 'react';
import { useLazyGetSpecificProductQuery } from '../../../services/products-service';
import FoundProductItem from '../FoundProductItem';
import Popper from '../../UI/Popper';

import styles from './SearchField.module.scss';

export const SearchField = () => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [hiddenProductList, setHiddenProductList] = useState(false);
    const [getSpecificProduct, { data, isLoading }] =
        useLazyGetSpecificProductQuery();

    useEffect(() => {
        const getProducts = setTimeout(() => {
            getSpecificProduct(inputValue);
        }, 700);

        return () => clearInterval(getProducts);
    }, [inputValue, getSpecificProduct]);

    const toggleSearchList = () => {
        setHiddenProductList(!hiddenProductList);
    };

    const handleEsc = (e) => {
        if (e.keyCode === 27 || e.key === 'Escape') {
            e.target.blur();
            toggleSearchList();
        }
    };

    const searchHandler = (e) => {
        setInputValue(e.target.value);
    };

    const focusHandler = (e) => {
        setHiddenProductList(true);
        if (data?.products?.length) return;
        getSpecificProduct(e.target.value);
    };

    return (
        <div className={styles['search-field']}>
            <div className={styles['search-field-box']}>
                <div className={styles['search-field__input-container']}>
                    <input
                        ref={inputRef}
                        className={styles['search-field__input']}
                        onChange={searchHandler}
                        onFocus={focusHandler}
                        onKeyDown={handleEsc}
                    />
                    {isLoading && <div className={styles['loader']}></div>}
                </div>

                <Popper
                    target={inputRef}
                    isOpen={hiddenProductList}
                    onClose={toggleSearchList}
                    outsideClickListener
                >
                    {!isLoading && (
                        <ul className={styles['search-field__data-result']}>
                            {data?.products?.length ? (
                                data.products.map((product) => {
                                    return (
                                        <FoundProductItem
                                            product={product}
                                            key={product.id}
                                        />
                                    );
                                })
                            ) : (
                                <li
                                    className={
                                        styles['search-field__not-found']
                                    }
                                >
                                    Product not found
                                </li>
                            )}
                        </ul>
                    )}
                </Popper>
            </div>
        </div>
    );
};

export default SearchField;
