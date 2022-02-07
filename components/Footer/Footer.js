import React from 'react';
import {FooterStyled} from "./FooterStyled";
import Image from "next/image";
import {FiTwitter, FiInstagram, FiFacebook} from "react-icons/fi";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {GoLocation} from "react-icons/go";

const Footer = () => {
    return (
        <FooterStyled>
            <div className="header">
                <div className="social">
                    <FiInstagram/>
                    <FiFacebook/>
                    <FiTwitter/>
                </div>
                <Image
                    height={70}
                    width={90}
                    src='/sportimpex_logo.svg'/>
            </div>
            <div className="contact">
                <div className="contact-link">
                    <AiOutlineMail/>
                    <h2>Mail</h2>
                    <h3>office@sportimpex.co.rs</h3>
                </div>
                <div className="contact-link">
                    <AiOutlinePhone/>
                    <h2>Pozovite nas</h2>
                    <h3>+381 11 755 33 73</h3>
                </div>
                <div className="contact-link">
                    <GoLocation/>
                    <h2>Gde se nalazimo</h2>
                    <h3>Požeška 148/A 11030 Beograd, Srbija</h3>
                </div>
            </div>
            <div className="rights">
                <h3>© 2022 Sportimpex. Sva prava zaštićena. </h3>
            </div>
        </FooterStyled>
    );
};

export default Footer;