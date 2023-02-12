import React, { useMemo } from 'react';
import Container from '../UI/Container';
import Loader from '../UI/Loader';
import NewProducts from './NewProducts';
import SearchField from './SearchField';
import CartsWrapper from '../UI/CartsWrapper';
import Cart from '../UI/Cart';
import AnimationWrapper from '../UI/AnimationWrapper';

import { useGetProductsQuery } from '../../services/products-service';

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
            <Container>
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
            </Container>
        </main>
    );
}
