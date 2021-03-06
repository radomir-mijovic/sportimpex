import React from 'react';
import {WhyUsStyled} from "./WhyUsStyled";
import {SectionContainerStyled} from "../SectionContainer/SectionContainerStyled";
import {MainBlackH2, MainH2} from "../../styles/GlobalStyles";
import {BiHappy} from "react-icons/bi";
import {GiSandsOfTime, GiReceiveMoney, GiSofa} from "react-icons/gi";

const WhyUs = () => {
    return (
        <SectionContainerStyled background={'#F7F6F6'}>
            <WhyUsStyled>
                <MainH2>
                    Zašto mi
                </MainH2>
                <div className="section-header-text">
                    <p>
                        <BiHappy/>
                        Činimo škole i vrtiće srećnim mestima.
                    </p>
                    <p>
                        <GiSandsOfTime/>
                        Štedimo Vaše vreme i novac.
                    </p>
                    <p>
                        <GiSofa/>
                        Za udobnost koju najmlađi zaslužuju.
                    </p>
                    <p>
                        <GiReceiveMoney/>
                        Kvalitet ne mora da bude skup.
                    </p>
                </div>
                <MainBlackH2>
                    O nama
                </MainBlackH2>
                <div className="section-text">
                    <p>
                        Sportimpex doo je preduzeće osnovano 1990 godine.
                        Sportimpex ima sve što je Vašoj školskoj ili predškolskoj ustanovi potrebno.
                        Sa tradicijom dugom preko 20 godina, i spostvenim proizvodnim programom, postali smo
                        specijalizovani za kompletno unutrašnje i spoljašnje opremanje školskih
                        i predškolskih ustanova.U ovoj oblasti Sportimpex doo je lider u regionu.
                        Takođe vršimo izvoz opreme u Bosnu i Hercegovinu, Makedoniju i Crnu Goru.
                        Naša firma poseduje kompletne proizvodne kapacitete za proizvodnju školskog i
                        predškolskog nameštaja kao i proizvodnju sportske opreme i rekvizita za sportske dvorane
                        i igrališta, što nam omogućava da budemo vrlo konkurentni sa cenama i rokovima isporuke.
                        Proizvodni pogon se nalazi u Ostružnici u Kosmajskoj 10, dok se kancelarije i izložbeni salon
                        nalaze na Banovom brdu u Požeškoj 148a.
                    </p>
                    <h3>
                        Opremanje vrtića
                    </h3>
                    <p>
                        - Naš predškolski program obuhvata dečiji i kancelarijski nameštaj, kuhinjski inventar i opremu
                        za vešeraj, unutrašnje igraonice i didaktička sredstva,
                        kao i raznovrsni program spoljnih igrališta za decu.
                    </p>
                    <h3>
                        Opremanje škola
                    </h3>
                    <p> - Naš školski program obuhvata školski i kancelarijski nameštaj,
                        sve vrste nastavnih sredstava, audio vizuelnu opremu,
                        kao i kompletnu sportsku opremu i rekvizite za školske sale.
                    </p>
                </div>
            </WhyUsStyled>
        </SectionContainerStyled>
    );
};

export default WhyUs;