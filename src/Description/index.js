import React from "react";
import "./style.css";

const Description = () => (
    <div>
        <div className="description__title" id="offer">
            <h1>Moje specjalizacje</h1>
        </div>
        <div className="description__items">
            <div className="description__block">
                <p>Projekty indywidualne dla Klienta prywatnego</p>
                <img className="description__picture" src="https://i.postimg.cc/8zVD4BQb/Kuchnia23082022-3.jpg" alt="DescriptionImage" />
            </div>
            <div className="description__block">
                <p>Projekty kompleksowe dla Klienta inwestycyjnego</p>
                <img className="description__picture" src="https://i.postimg.cc/Yqs5wjHP/IMG_1494.jpg" alt="DescriptionImage" />
            </div>
        </div>
        <div className="description__content">
            <p>Wnętrze, które spełnia Twoje oczekiwania.</p>
            <p>Jednym z głównych zadań mojej pracowni, jest projektowanie i aranżacja wnętrz prywatnych.
                Swoją wiedzą i doświadczeniem mogę po pierwsze - pomóc Ci zobaczyć Twój własny projekt, lub zaproponować własne rozwiązania. Po drugie -
                zaplanować każdy szczegół począwszy od wizualizacji, przez projekt i rysunki techniczne, listę materiałów i produktów, aż do pomocy w wykonaniu
                realizacji przedsięwzięcia. Dzięki dokumentacji, którą ode mnie otrzymasz, znasz każdy krok etapu wykańczania swoich wnętrz, nie angażując absolutnie
                swojego czasu i energii.</p>
            <p>Architektura dla Ciebie, lub inwestycyjnie.</p>
            <p>Nie od dziś wiemy, że to co sprawdzi się w Twoim "M", niekoniecznie będzie dobre
                dla nieruchomości na wynajem. Te rządzą się swoimi prawami, a inwestycja z definicji musi się opłacać. Na przestrzeni lat opracowałam idealny wzór,
                którego wynikiem jest wynajęcie nieruchomości w zaledwie kilka dni (czasem godzin), przy kosztach, które nie rujnują Twojego portfela. Pomogę Ci więc urządzić
                mieszkanie inwestycyjne analizując dokładnie i szczegółowo Twój budżet, oszczędzając przy tym Twój cenny czas, jednocześnie dostarczając na rynek bardzo dobry
                produkt o pełnej funkcjonalności.</p>
            <p>Wiedza = sukces!</p>
            <p>Doświadczenie, wiedza i umiejętności, to coś co dostajesz ode mnie w pakiecie podejmując współpracę.</p>
            <p>Dla mnie najważniejszy jest klient, czyli TY! Dobra przestrzeń to jedynie skutek uboczny owocnej współpracy.</p>
        </div>
    </div>
);

export default Description;