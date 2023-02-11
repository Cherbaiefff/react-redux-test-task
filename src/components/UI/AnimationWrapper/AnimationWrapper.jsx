import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function AnimationWrapper({ delay, children }) {
    const styles = useSpring({
        from: { opacity: '0' },
        to: { opacity: '1' },
        config: { duration: '600' },
        delay: delay * 300,
    });
    return <animated.div style={styles}>{children}</animated.div>;
}
