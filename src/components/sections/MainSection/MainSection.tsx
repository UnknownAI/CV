import React, { useRef } from 'react';
import iconBcg from '../../../img/icon.png';

import styles from './MainSection.module.scss';
import classNames from 'classnames';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

const MainSection: React.FC = () => {

    return (
        <section className={classNames("section", styles.main)} id="main">
            <div className={classNames("section-wrapper", styles.mainWrapper)}>
                <div className={styles.contactButtonRow}>
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0, delay: 0 }}
                        className={styles.contactButton}>
                        <span>contact me</span>
                    </motion.div>
                </div>
                <div className={styles.mainContentWrapper}>
                    <motion.div
                        initial={{ x: -90, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={styles.mainTitle}>
                        <div>
                            <p>Hi there!</p>
                            <p>My name is <span className='text text--purple'>Agniya</span></p>
                            <p>I'm a <span className="text text--purple">Front-end</span> Developer</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -130, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={styles.mainIcon}>
                        <div className={styles.mainIconWrapper}>
                            <img src={iconBcg} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );

}

export default MainSection;