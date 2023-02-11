import React from 'react';
import Container from '../UI/Container';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles['footer-content']}>
                    <p className={styles.rights}>
                        Copyright © 2023 by a company.
                    </p>
                    <p className={styles['made-by']}>
                        Powered by blah, blah, blah
                    </p>
                </div>
            </Container>
        </footer>
    );
}
