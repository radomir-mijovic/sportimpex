import React, {useState} from 'react';
import {PortfolioStyled} from "./PortfolioStyled";
import {SectionContainerStyled} from "../SectionContainer/SectionContainerStyled";
import Image from "next/image";
import {MainH1, MainH2} from "../../styles/GlobalStyles";
import {motion} from "framer-motion";

const Portfolio = () => {
    const [isId, setIsId] = useState(null)

    return (
        <SectionContainerStyled>
            <div className="header">
                <MainH2>
                    porfolio
                </MainH2>
                <MainH1>
                    po čemu smo poznati
                </MainH1>
            </div>
            <PortfolioStyled>
                <motion.div
                    layoutId={1}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1, transition: {duration: 1}}}
                    onHoverStart={() => setIsId(1)}
                    onHoverEnd={() => setIsId(null)}
                    viewport={{ once: true }}
                    className="card card-1">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        src='/images/school-furniture.jpg'
                        alt='school furniture'/>
                    <div className={isId === 1 ? 'red-line' : undefined}>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: .95}}
                            transition={{duration: .3}}
                            className={isId === 1 ? 'card-h1' : undefined}>
                            skolski namestaj .01
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    layoutId={2}
                    initial={{opacity: 0, x: '20%'}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                    onHoverStart={() => setIsId(2)}
                    onHoverEnd={() => setIsId(null)}
                    viewport={{ once: true }}
                    className="card card-2">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/preschool-furniture.jpg'
                        alt='preschool furniture'/>
                    <div className={isId === 2 ? 'red-line' : 'hidden'}>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: .95}}
                            transition={{duration: .3}}
                            className={isId === 2 ? 'card-h1' : 'hidden'}>
                            predskolski namestaj .02
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    layoutId={3}
                    initial={{opacity: 0, x: '-20%'}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                    onHoverStart={() => setIsId(3)}
                    onHoverEnd={() => setIsId(null)}
                    viewport={{ once: true }}
                    className="card card-3">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/office-furniture.jpg'
                        alt='office furniture'/>
                    <div className=""/>
                    <div className={isId === 3 ? 'red-line' : undefined}/>
                </motion.div>
                <motion.div
                    layoutId={4}
                    initial={{x: '-20%', opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {duration: 1}}}
                    onHoverStart={() => setIsId(4)}
                    onHoverEnd={() => setIsId(null)}
                    viewport={{ once: true }}
                    className="card card-4">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/chemistry-classroom.jpg'
                        alt='chemistry furniture'/>
                    <div className={isId === 4 ? 'red-line' : undefined}/>
                </motion.div>
                <motion.div
                    layoutId={5}
                    initial={{x: '-20%', opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {duration: 1}}}
                    onHoverStart={() => setIsId(5)}
                    onHoverEnd={() => setIsId(null)}
                    viewport={{ once: true }}
                    className="card card-5">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/garden-furniture.jpg'
                        alt='garden furniture'/>
                    <div className={isId === 5 ? 'red-line' : undefined}/>
                </motion.div>
                <motion.div
                    layoutId={6}
                    initial={{opacity: 0, y: '20%'}}
                    whileInView={{opacity: 1, y: 0, transition: {duration: 1}}}
                    onHoverStart={() => setIsId(6)}
                    onHoverEnd={() => setIsId(null)}
                    viewport={{ once: true }}
                    className="card card-6">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/sport-furniture.jpg'
                        alt='sport furniture'/>
                    <div className={isId === 6 ? 'red-line' : undefined}/>
                </motion.div>
                <motion.div
                    layoutId={7}
                    initial={{opacity: 0, x: '20%'}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                    onHoverStart={() => setIsId(7)}
                    onHoverEnd={() => setIsId(null)}
                    viewport={{ once: true }}
                    className="card card-7">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/kids-playground1.jpg'
                        alt='chemistry furniture'/>
                    <div className={isId === 7 ? 'red-line' : undefined}/>
                </motion.div>
            </PortfolioStyled>
        </SectionContainerStyled>
    );
};

export default Portfolio;