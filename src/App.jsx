import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Products />
            <Footer />
        </div>
    );
};

export default App;
