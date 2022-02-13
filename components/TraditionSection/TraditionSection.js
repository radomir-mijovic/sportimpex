import React from 'react';
import {TraditionSectionStyled} from "./TraditionSectionStyled";
import {MainBlackH2, MainH2} from "../../styles/GlobalStyles";
import Image from "next/image";

const TraditionSection = () => {
    return (
        <TraditionSectionStyled>
            <div className="header">
                <MainH2>
                    iskustvo
                </MainH2>
                <MainBlackH2>
                    tradicija duga preko <br/> 20 godina
                </MainBlackH2>
            </div>
            <div className="tradition-card">
                <div className="text">
                    <h2>
                        NAMEŠTAJ PO MERI
                    </h2>
                    <p>
                        Dozvolite našem timu da Vam
                        pomogne u planiranju i izradi
                        školskog i predškolskog nameštaja po Vašoj želji.
                        Bilo da imate sopstvenu zamisao ili Vam je potrebna pomoć i
                        sugestija našeg stručnog tima, posedujemo kapacitete, znanje
                        i iskustvo da ideju pretvorimo u gotov proizvod. Napravićemo
                        za Vas nameštaj koji se savršeno uklapa u Vaše školske i predškolske ustanove, modernog
                        dizajna i besprekornog kvaliteta. Potrebna je samo Vaša odluka,
                        ostalo je naša briga.
                    </p>
                    <div className="red-line"/>
                </div>
                <Image
                    width='800'
                    height='450'
                    quality='100'
                    objectFit='cover'
                    src='/images/Man-building-custom-furniture.jpg'
                    alt='image'/>
                <Image
                    width='800'
                    height='450'
                    quality='100'
                    objectFit='cover'
                    src='/images/packaging.jpg'
                    alt='image'/>
                <div className="text">
                    <h2>
                        KRATAK ROK ISPORUKE
                    </h2>
                    <p>
                        Kratak rok isporuke je jedna od naših najvećih prednosti.
                        Zahvaljujući tome što se Sport-impex fabrika nalazi u Srbiji,
                        u mogućnosti smo da proizvod isporučimo u veoma kratkom roku.
                    </p>
                    <div className="red-line"/>
                </div>
                <div className="text">
                    <h2>
                        ZADOVOLJNI KLIJENTI
                    </h2>
                    <p>
                        Sport-impex osluškuje i prati potrebe svojih zadovoljnih kupaca,
                        trudeći se da im izađe u susret u svim potrebama i željama.
                        Poverenje koje su nam klijenti poverili negujemo i opravdavamo iz dana u dan.
                        Ponosni smo što sa klijentima održavamo dugotrajni odnos poverenja
                        i fokusiranosti na rezultat.
                    </p>
                    <div className="red-line"/>
                </div>
                <Image
                    width='800'
                    height='450'
                    quality='100'
                    objectFit='cover'
                    src='/images/customer_satisfaction.jpg'
                    alt='image'/>
            </div>
        </TraditionSectionStyled>
    );
};

export default TraditionSection;