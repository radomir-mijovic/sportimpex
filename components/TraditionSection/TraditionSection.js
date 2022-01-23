import React from 'react';
import {TraditionSectionStyled} from "./TraditionSectionStyled";
import {MainH1, MainH2} from "../../styles/GlobalStyles";
import Image from "next/image";
import {motion} from "framer-motion";

const TraditionSection = () => {
    return (
        <TraditionSectionStyled>
            <div className="header">
                <MainH2>
                    iskustvo
                </MainH2>
                <MainH1>
                    tradicija duga preko <br/> 20 godina
                </MainH1>
            </div>
            <div className="tradition-card">
                <div className="text">
                    <h1>
                        NAMEŠTAJ PO MERI
                    </h1>
                    <p>
                        Dozvolite našem timu da Vam
                        pomogne u planiranju i izradi
                        školskog nameštaja po Vašoj želji.
                        Bilo da imate sopstvenu zamisao ili Vam je potrebna pomoć i
                        sugestija našeg stručnog tima, posedujemo kapacitete, znanje
                        i iskustvo da ideju pretvorimo u gotov proizvod. Napravićemo
                        za Vas nameštaj koji se savršeno uklapa u Vaš prostor, modernog
                        je dizajna i besprekornog kvalita. Potrebna je samo Vaša odluka
                        , ostalo je naša briga.
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
                    <h1>
                        KRATAK ROK ISPORUKE
                    </h1>
                    <p>
                        Kratak rok isporuke je jedna od naših najvećih prednosti.
                        Zahvaljujući tome što se Sportimpex fabrika nalazi u Srbiji,
                        u mogućnosti smo da proizvod isporučimo u veoma kratkom roku.
                    </p>
                    <div className="red-line"/>
                </div>
                <div className="text">
                    <h1>
                        ZADOVOLJNI KLIJENTI
                    </h1>
                    <p>
                        Sportimpex osluškuje i prati potrebe svojih zadovoljnih kupaca,
                        trudeći se da im izađe u susret u svim potrebama i željama.
                        Poverenje koje su nam klijenti poverili negujemo i opravdavamo iz dana u dan.
                        Ponosni smo što sa klijentima održavamo dugotrajni odnos poverenja i fokusiranosti na rezultat.
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