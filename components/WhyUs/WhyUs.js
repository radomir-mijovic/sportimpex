import React from 'react';
import {WhyUsStyled} from "./WhyUsStyled";
import {SectionContainerStyled} from "../SectionContainer/SectionContainerStyled";
import {MainBlackH2, MainH2} from "../../styles/GlobalStyles";

const WhyUs = () => {
    return (
        <SectionContainerStyled background={'#F7F6F6'}>
            <WhyUsStyled>
                <MainH2>
                    Zašto mi
                </MainH2>
                <div className="section-header-text">
                    <p>
                        <span className='red-dash'>- </span>
                        Činimo škole i vrtiće srećnim mestima.
                        {/*<span className='red-dash'> -</span>*/}
                    </p>
                    <p>
                        <span className='red-dash'>- </span>
                        Štedimo Vaše vreme i novac.
                        {/*<span className='red-dash'> -</span>*/}
                    </p>
                    <p>
                        <span className='red-dash'>- </span>
                        Za udobnost koju najmlađi zaslužuju.
                        {/*<span className='red-dash'> -</span>*/}
                    </p>
                    <p>
                        <span className='red-dash'>- </span>
                        Kvalitet ne mora da bude skup.
                        {/*<span className='red-dash'> -</span>*/}
                    </p>
                </div>
                <MainBlackH2>
                    O nama
                </MainBlackH2>
                <div className="section-text">
                    <p>
                        Sport-impex ima sve što je Vašoj školskoj ili predškolskoj ustanovi potrebno.
                        Sa tradicijom dugom preko 20 godina, i spostvenim proizvodnim programom, postali smo
                        specijalizovani za kompletno unutrašnje i spoljašnje opremanje školskih
                        i predškolskih ustanova.
                        Naša firma poseduje kompletne proizvodne kapacitete za proizvodnju školskog i
                        predškolskog nameštaja kao i proizvodnju sportske opreme i rekvizita za sportske dvorane
                        i igrališta, što nam omogućava da budemo vrlo konkurentni sa cenama i rokovima isporuke.
                        Proizvodni pogon se nalazi u Ostružnici u Kosmajskoj 10, dok se kancelarije i izložbeni salon
                        nalaze na Banovom brdu u Požeškoj 148a.
                        <br/><br/>
                        Naš predškolski program obuhvata dečiji i kancelarijski nameštaj, kuhinjski inventar i opremu
                        za vešeraj, unutrašnje igraonice i didaktička sredstva,
                        kao i raznovrsni program spoljnih igrališta za decu.
                        <br/>
                        Naš školski program obuhvata školski i kancelarijski nameštaj,
                        sve vrste nastavnih sredstava, audio vizuelnu opremu,
                        kao i kompletnu sportsku opremu i rekvizite za školske sale.
                    </p>
                </div>
            </WhyUsStyled>
        </SectionContainerStyled>
    );
};

export default WhyUs;