import React from 'react';
import styles from './SkillsSection.module.scss';
import classNames from 'classnames';
import { motion } from "framer-motion";


const SKILLS_DATA = [
    'JavaScript', 'HTML', 'CSS', 'LESS/SCSS', 'CSS-Modules', 'React', 'Next.js', 'Redux', 'redux-saga', 'webpack', 'Node.js', 'express.js', 'git', 'React Bootstrap', 'Antd'
]
const SkillsSection: React.FC = () => {


    return (
        <section className={classNames("section", styles.skills)}>
            <div className='section-wrapper'>
                <div className={styles.skillsContentWrapper}>
                    <motion.h2
                        initial={{ x: -90, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={classNames("section-title", styles.title)}>
                        <span>Things</span>
                        <span>I Know</span>
                    </motion.h2>
                    <div className="section-content">
                        <ul className={styles.list}>
                            {SKILLS_DATA.map(item => <li key={item} className={styles.listItem}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    );

}

export default SkillsSection;