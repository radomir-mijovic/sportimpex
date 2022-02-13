import React, {useState} from 'react';
import {WorkProgressBarStyled} from "./WorkProgressBarStyled";
import {SectionContainerStyled} from "../SectionContainer/SectionContainerStyled";
import {BiHomeSmile} from 'react-icons/bi'
import {FaSchool} from "react-icons/fa";
import {motion} from "framer-motion";
import CountUp from "react-countup";
import {MainBlackH2, MainH1, MainH2} from "../../styles/GlobalStyles";
import {GiShakingHands} from "react-icons/gi";
import Image from "next/image";

const WorkProgressBar = () => {
    const [isVisibleHands, setIsVisibleHands] = useState(false)
    const [isVisibleHome, setIsVisibleHome] = useState(false)
    const [isVisibleSchool, setIsVisibleSchool] = useState(false)
    const [isVisiblePeople, setIsVisiblePeople] = useState(false)

    return (
        <SectionContainerStyled>
            <WorkProgressBarStyled>
                <motion.div
                    onViewportEnter={() => setIsVisibleHands(true)}
                    className="card">
                    <Image
                        width={40}
                        height={40}
                        src={'/icons/company-logo.svg'}
                        alt='logo'/>
                    <MainBlackH2>
                        {isVisibleHands &&
                        <CountUp
                            start={10}
                            end={20}
                            duration={3}
                            useEasing={true}/>}+
                    </MainBlackH2>
                    <MainH2>Godina iskustva</MainH2>
                </motion.div>
                <motion.div
                    onViewportEnter={() => setIsVisibleHome(true)}
                    className="card">
                    <BiHomeSmile/>
                    <MainBlackH2>
                        {isVisibleHome &&
                        <CountUp
                            start={160}
                            end={200}
                            duration={3}
                            useEasing={true}/>}+
                    </MainBlackH2>
                    <MainH2>Projekata</MainH2>
                </motion.div>
                <motion.div
                    onViewportEnter={() => setIsVisibleSchool(true)}
                    className="card">
                    <FaSchool/>
                    <MainBlackH2>
                        {isVisibleSchool &&
                        <CountUp
                            start={40}
                            end={100}
                            duration={3}
                            useEasing={true}/>}+
                    </MainBlackH2>
                    <MainH2>Opremljenih ustanova</MainH2>
                </motion.div>
                <motion.div
                    onViewportEnter={() => setIsVisiblePeople(true)}
                    className="card">
                    <GiShakingHands/>
                    <MainBlackH2>
                        {isVisiblePeople &&
                        <CountUp
                            start={410}
                            end={500}
                            duration={3}
                            useEasing={true}/>}+
                    </MainBlackH2>
                    <MainH2>Zadovoljnih klijenata</MainH2>
                </motion.div>
            </WorkProgressBarStyled>
        </SectionContainerStyled>
    );
};

export default WorkProgressBar;