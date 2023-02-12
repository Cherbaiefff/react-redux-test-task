import React from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import PurchaseModal from '../PurchaseModal';
import SuccessModal from '../SuccessModal';

export default function ModalWrapper() {
    const userData = useSelector((state) => state.userCart);
    return createPortal(
        <>
            {userData.isPurchaseModalOpen && <PurchaseModal />}
            {userData.isBought && <SuccessModal />}
        </>,
        document.getElementById('modal')
    );
}
