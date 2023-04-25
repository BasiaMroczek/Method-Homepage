import React from "react";
import "./style.css";

const Header = () => (
    <div className="card__container">
        <div className="card__image">
            <img className="card__imageMain"
                src="https://i.postimg.cc/CLd8PC15/Method-Homepage-Image.jpg"
                alt="example"
            />
        </div>
        <div className="card__text" id="about">
            <h2>Witaj!</h2>
            <p>METHOD - Studio Architektury Wnętrz, to miejsce, w którym zaprojektuję Twoją przestrzeń całkowicie od postaw, lub odświeżę tą, którą już masz.
                Projekt, który stworzymy, oparty będzie na Twoich marzeniach, planach, stylu życia, lecz przede wszystkim dopasowany do Twoich potrzeb i możliwości.</p>
            <p>Razem stworzymy kompleksowy projekt, a ode mnie otrzymasz pełną dokumentację, dzięki której, zaoszczędzisz maksymalnie swój czas, pieniądze oraz nerwy,
                które często zostają nadszarpnięte przy tak odpowiedzialnym przedsięwzięciu.</p>
            <p>Zapraszam do zapoznania się z moją ofertą!</p>
        </div>
    </div>
);

export default Header