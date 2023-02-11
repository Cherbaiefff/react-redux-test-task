import React from 'react';
import Container from './components/UI/Container';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer/Footer';

import { useSelector } from 'react-redux';

import SuccessModal from './components/UI/SuccessModal';
import PurchaseModal from './components/UI/PurchaseModal';

const App = () => {
    const userData = useSelector((state) => state.userCart);

    return (
        <div className="App">
            <Header />
            <Container>
                {userData.isPurchaseModalOpen && <PurchaseModal />}
                {userData.isBought && <SuccessModal />}
                <Products />
            </Container>
            <Footer />
        </div>
    );
};

export default App;
