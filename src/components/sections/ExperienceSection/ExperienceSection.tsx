import React from 'react';
import styles from './ExperienceSection.module.scss';
import icon1 from '../../../img/price.svg';
import icon2 from '../../../img/health.svg';
import icon3 from '../../../img/arrow.svg';
import classNames from 'classnames';
import { motion } from "framer-motion";

const DATA = [
    {
        icon: icon1,
        label: 'e-commerse'
    },
    {
        icon: icon2,
        label: 'health-care'
    },
    {
        icon: icon3,
        label: 'cms'
    }
]

const ExperienceSection: React.FC = () => {
    return (
        <section className={classNames("section", styles.experience)}>
            <div className='section-wrapper'>
                <div className={styles.experienceWrapper}>
                    <motion.h2
                        initial={{ x: -90, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={classNames("section-title", styles.title)}>
                        <span>Things</span>
                        <span>I Worked With</span>
                    </motion.h2>
                    <div className={classNames("section-content", styles.experienceList)}>
                        {
                            DATA.map((item, index) =>
                                <motion.div
                                    initial={{ y: -90 * index + 1, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    key={item.label}
                                    className={classNames(styles.experienceListItem)}>
                                    <span>{item.label}</span>
                                    <img src={item.icon} />
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );

}

export default ExperienceSection;