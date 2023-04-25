import React from "react";
import "./style.css";

const About = () => (
    <div className="about__container">
        <div>
            <img className="about__image"
                src="https://i.postimg.cc/TPxjJ6Zt/IMG-4599-1-kopia.jpg"
                alt="example"
            />
        </div>
        <div className="about__content">
            <h2>Kilka słów o mnie</h2>
            <p><i>Nazywam się Barbara Mroczek i jestem Inżynierem Architektem</i></p>
            <p>Ukończyłam Wydział Budownictwa i Architektury w Szczecinie, na kierunku Architektura i Urbanistyka.
                Moje doświadczenie pracy w różnych dziedzinach tej branży, zaowocowało otwarciem własnej pracowni projektowej, w
                której spełniam się tworząc aranżacje wnętrz dla klientów prywatnych oraz inwestycyjnych.</p>
            <p>Podczas swojej drogi miałam okazję projektować zabudowę
                jednorodzinną mieszkaniową całkowicie od podstaw, zabudowę wielomieszkaniową, kompletować dokumentację niezbędną do otrzymania pozwolenia na budowę,
                adaptować gotowe projekty oraz sprzedawać i wynajmować nieruchomości. Dziś jestem w tym miejscu, aby projektować to, co jest nam na co dzień najbliższe -
                nasze wnętrza. To z nimi mamy styczność w każdej minucie naszego życia.</p>
            <p>Cieszę się, że moja pasja
                jest również moją pracą oraz sposobem na życie. Dzięki temu wspaniałemu połączeniu, jestem tu dziś dla Ciebie, byśmy
                razem stworzyli przestrzeń, którą pokochasz.</p>
        </div>
    </div >


);

export default About