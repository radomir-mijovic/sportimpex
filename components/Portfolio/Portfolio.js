import React from 'react';
import {PortfolioStyled} from "./PortfolioStyled";
import {SectionContainerStyled} from "../SectionContainer/SectionContainerStyled";
import Image from "next/image";
import {MainH1, MainH2} from "../../styles/GlobalStyles";

const Portfolio = () => {
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
                <div className="card card-1">
                    <Image
                        height='300'
                        width='500'
                        layout='fill'
                        objectFit='cover'
                        src='/images/school-furniture.jpg'
                        alt='school furniture'/>
                </div>
                <div className="card card-2">
                    <Image
                        height='300'
                        width='500'
                        layout='fill'
                        objectFit='cover'
                        src='/images/preschool-furniture.jpg'
                        alt='preschool furniture'/>
                </div>
                <div className="card card-3">
                    <Image
                        height='300'
                        width='500'
                        layout='fill'
                        objectFit='cover'
                        src='/images/office-furniture.jpg'
                        alt='office furniture'/>
                </div>
                <div className="card card-4">
                    <Image
                        height='300'
                        width='500'
                        layout='fill'
                        objectFit='cover'
                        src='/images/chemistry-classroom.jpg'
                        alt='chemistry furniture'/>
                </div>
                <div className="card card-5">
                    <Image
                        height='300'
                        width='500'
                        layout='fill'
                        objectFit='cover'
                        src='/images/garden-furniture.jpg'
                        alt='garden furniture'/>
                </div>
                <div className="card card-6">
                    <Image
                        height='300'
                        width='500'
                        layout='fill'
                        objectFit='cover'
                        src='/images/sport-furniture.jpg'
                        alt='sport furniture'/>
                </div>
                <div className="card card-7">
                    <Image
                        height='300'
                        width='500'
                        layout='fill'
                        objectFit='cover'
                        src='/images/kids-playground1.jpg'
                        alt='chemistry furniture'/>
                </div>
            </PortfolioStyled>
        </SectionContainerStyled>
    );
};

export default Portfolio;