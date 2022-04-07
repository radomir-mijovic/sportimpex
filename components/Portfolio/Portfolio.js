import React, {useState} from 'react';
import {PortfolioStyled} from "./PortfolioStyled";
import {SectionContainerStyled} from "../SectionContainer/SectionContainerStyled";
import Image from "next/image";
import {MainBlackH2, MainH2} from "../../styles/GlobalStyles";
import {motion} from "framer-motion";
import {HiArrowRight} from "react-icons/hi";
import {useRouter} from "next/router";

const Portfolio = () => {
    const router = useRouter()

    return (
        <SectionContainerStyled>
            <div className="header">
                <MainH2>
                    portfolio
                </MainH2>
                <MainBlackH2>
                    po čemu smo <br/> poznati
                </MainBlackH2>
            </div>
            <PortfolioStyled>
                <motion.div
                    layoutId={1}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1, transition: {duration: 1}}}
                    viewport={{once: true}}
                    className="card card-1">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        src='/images/school-furniture2.jpg'
                        alt='opremanje skola'/>
                    <motion.h4
                        onClick={() => router.push('/gallery')}
                        transition={{duration: .2}}
                        whileTap={{scale: .9}}>
                        <span>Opremanje Škola .01</span>
                        <HiArrowRight/>
                    </motion.h4>
                </motion.div>
                <motion.div
                    layoutId={2}
                    initial={{opacity: 0, x: '20%'}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                    viewport={{once: true}}
                    className="card card-2">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/preschool-furniture2.JPG'
                        alt='opremanje vrtica'/>
                    <motion.h4
                        onClick={() => router.push('/gallery')}
                        transition={{duration: .2}}
                        whileTap={{scale: .9}}>
                        <span>Opremanje VrtiĆa</span>
                        <HiArrowRight/>
                    </motion.h4>
                </motion.div>
                <motion.div
                    layoutId={3}
                    initial={{opacity: 0, x: '-20%'}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                    viewport={{once: true}}
                    className="card card-3">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/office-furniture.jpg'
                        alt='office furniture'/>
                    <motion.h4
                        onClick={() => router.push('/gallery')}
                        transition={{duration: .2}}
                        whileTap={{scale: .9}}>
                        <span>kancelarije i zborinice</span>
                        <HiArrowRight/>
                    </motion.h4>
                </motion.div>
                <motion.div
                    layoutId={4}
                    initial={{x: '-20%', opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {duration: 1}}}
                    viewport={{once: true}}
                    className="card card-4">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/chemistry-classroom2.jpg'
                        alt='chemistry furniture'/>
                    <motion.h4
                        onClick={() => router.push('/gallery')}
                        transition={{duration: .2}}
                        whileTap={{scale: .9}}>
                        <span>kabineti za fiziku i hemiju</span>
                        <HiArrowRight/>
                    </motion.h4>
                </motion.div>
                <motion.div
                    layoutId={5}
                    initial={{x: '-20%', opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {duration: 1}}}
                    viewport={{once: true}}
                    className="card card-5">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/garden-furniture2.jpg'
                        alt='garden furniture'/>
                    <motion.h4
                        onClick={() => router.push('/gallery')}
                        transition={{duration: .2}}
                        whileTap={{scale: .9}}>
                        <span>dvoriŠni mobilijar</span>
                        <HiArrowRight/>
                    </motion.h4>
                </motion.div>
                <motion.div
                    layoutId={6}
                    initial={{opacity: 0, y: '20%'}}
                    whileInView={{opacity: 1, y: 0, transition: {duration: 1}}}
                    viewport={{once: true}}
                    className="card card-6">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/sport-furniture2.jpg'
                        alt='sport furniture'/>
                    <motion.h4
                        onClick={() => router.push('/gallery')}
                        transition={{duration: .2}}
                        whileTap={{scale: .9}}>
                        <span>sportska oprema i rekviziti</span>
                        <HiArrowRight/>
                    </motion.h4>
                </motion.div>
                <motion.div
                    layoutId={7}
                    initial={{opacity: 0, x: '20%'}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                    viewport={{once: true}}
                    className="card card-7">
                    <Image
                        layout='fill'
                        objectFit='cover'
                        quality='100'
                        src='/images/kids-playground1.jpg'
                        alt='chemistry furniture'/>
                    <motion.h4
                        onClick={() => router.push('/gallery')}
                        transition={{duration: .2}}
                        whileTap={{scale: .9}}>
                        <span>Dečija igrališta</span>
                        <HiArrowRight/>
                    </motion.h4>
                </motion.div>
            </PortfolioStyled>
        </SectionContainerStyled>
    );
};

export default Portfolio;