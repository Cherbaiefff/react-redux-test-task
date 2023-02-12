import React from 'react';
import cn from 'classnames';
import styles from './ButtonModalClose.module.scss';

export default function ButtonModalClose({ className, onClick }) {
    return (
        <div className={styles.wrapper}>
            <a
                href="#"
                className={cn(className, styles['close-button'])}
                onClick={onClick}
            >
                <div className={styles.in}>
                    <div className={styles['close-button-block']}></div>
                    <div className={styles['close-button-block']}></div>
                </div>
                <div className={styles.out}>
                    <div className={styles['close-button-block']}></div>
                    <div className={styles['close-button-block']}></div>
                </div>
            </a>
        </div>
    );
}
