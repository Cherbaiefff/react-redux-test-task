import React, { useMemo } from 'react';
import CartsWrapper from '../UI/CartsWrapper';
import Cart from '../UI/Cart';
import Loader from '../UI/Loader';
import NewProducts from './NewProducts';
import SearchField from './SearchField';
import { useGetProductsQuery } from '../../services/products-service';
import AnimationWrapper from '../UI/AnimationWrapper';

export default function Products() {
    const { data, isLoading } = useGetProductsQuery();

    const promoProducts = useMemo(() => {
        if (!data?.products) return [];
        const shuffled = [...data.products]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        return shuffled;
    }, [data]);

    return (
        <main>
            {isLoading && <Loader />}
            <NewProducts promoProducts={promoProducts} />
            <SearchField />
            <CartsWrapper>
                {data?.products &&
                    data.products.map((product, idx) => {
                        return (
                            <AnimationWrapper delay={idx} key={product.id}>
                                <Cart product={product} />
                            </AnimationWrapper>
                        );
                    })}
            </CartsWrapper>
        </main>
    );
}
