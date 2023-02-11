import React, { useEffect, useState } from 'react';

import Button from '../Button';
import { purchaseProduct } from '../../../store/user-cart';
import { useDispatch } from 'react-redux';

export default function PurchaseModalForm({ classNames }) {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const userInputHandler = (event) => {
        if (event.target.name === 'name') {
            setUserName(event.target.value);
        } else {
            setUserEmail(event.target.value);
        }
    };

    const [modalForm, modalSubmit] = classNames;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(purchaseProduct());
    };

    return (
        <form className={modalForm} onSubmit={submitHandler}>
            <p>Enter data below to place the order</p>
            <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={userInputHandler}
                required
                pattern="[A-Za-z]{1,15}"
                title="Username should only contain letters. You've got 26 letters in alphabet, use them!"
            />
            <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={userInputHandler}
                required
            />
            <Button className={modalSubmit} type="submit">
                Place the order
            </Button>
        </form>
    );
}
