import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonModalClose from '../ButtonModalClose';

import successImg from '../../../images/success.svg';
import { closeSuccessModal } from '../../../store/user-cart';

import styles from './SuccessModal.module.scss';

export default function SuccessModal() {
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeSuccessModal());
    };

    return (
        <div className={styles.darkBG}>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <ButtonModalClose
                        className={styles['modal-close-btn']}
                        onClick={closeModalHandler}
                    />
                    <img
                        className={styles['modal-success-img']}
                        src={successImg}
                        alt="success-img"
                    />
                    <p>
                        Greetings, You've just bought something you don't really
                        need
                    </p>
                </div>
            </div>
        </div>
    );
}
