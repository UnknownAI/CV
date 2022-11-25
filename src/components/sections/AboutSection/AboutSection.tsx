import React from 'react';
import styles from './AboutSection.module.scss';
import classNames from 'classnames'
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {

    return (
        <section className={classNames("section", styles.about)}>
            <div className='section-wrapper'>
                <div className={styles.aboutContentWrapper} >
                    <motion.h2
                        initial={{ x: -90, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="section-title">
                        <span>Things</span>
                        <span>About Me</span>
                    </motion.h2>
                    <div className="section-content">
                        <div className={styles.list}>
                            <p> <span>&#10022;</span> 3 years background working on web application</p>
                            <p> <span>&#10022;</span> can-do attidute person</p>
                            <p> <span>&#10022;</span> MA in Computer Software Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1>
                Things about me
            </h1>
            <div className="pharagraph">
                I’ve been working as a <span className="text text--blue">Front-end developer</span> for  about <span class="text text--underline-blue">3 years</span>
                <span className="text text--blue"> ✱ </span>
                and last year I got a <span className="text text--green">Master's degree in Software Engineering ✎ </span>
                I have the challenging and interesting experiences over the years working as a software developer and I'm really into improving my skills every day and building something useful
                <span className="text text--light"> ☯ </span>
                The projects I worked on were different, but have more
                <span className="text text--red"> experience in E-commerce projects ✽ </span>
            </div> */}
            {/* <div class="experience">
                <div class="experience-list">
                    <div class="item" id="study">
                        <div class="icon">
                            <img src={workIcon} />
                        </div>
                        <div class="info">
                            <p class="years">2015-2020</p>
                            <p class="position">
                                <span>Master Degree, Software Engineering,</span>
                                <span>National Aviation University</span>
                            </p>
                        </div>
                    </div>
                    <div class="item" id="work">
                        <div class="icon">
                            <img src={studyIcon} />
                        </div>
                        <div class="info">
                            <p class="years">06/2019-06/2021</p>
                            <p class="position">
                                <span>Front-End Developer,</span>
                                <span>WebbyLab</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );

}

export default AboutSection;