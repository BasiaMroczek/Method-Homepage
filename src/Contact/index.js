import React from "react";

import "./style.css";

const Contact = () => (
    <section className="contact" id="contact">
        <h2 className="contact__title">Kontakt</h2>
        <div className="contact__items">
            <div className="contact__block">
                <img className="contact__icon" src="https://i.postimg.cc/R0cK6JYq/pngegg_(3).png" alt="Phone icon" />
                <p>Telefon: <a className="contact__data" href="tel:+48-792-399-753">+48 792 399 753</a></p>
            </div>
            <div className="contact__block">
                <img className="contact__icon" src="https://i.postimg.cc/KcKqjJNY/pngegg-6.png" alt="E-mail icon" />
                <p>E-mail: <a className="contact__data" href="mailto:method.kontakt@gmail.com">method.kontakt@gmail.com</a></p>
            </div>
            <div className="social__media"> 
                <p>Zajrzyj w wolnej chwili na moje social media! </p>
                <a href="https://www.facebook.com/profile.php?id=100086322962115"><img className="contact__icon--social"
                    src="https://i.postimg.cc/VLkNX0J5/pngegg-9.png"
                    alt="Facebook" /></a>
                <a href="https://www.instagram.com/methodstudioarchitektury/"><img className="contact__icon--social"
                    src="https://i.postimg.cc/C5Kcs4yc/pngegg-5.png"
                    alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/barbara-mroczek-93b50724b/"><img className="contact__icon--social"
                    src="https://i.postimg.cc/bwq9xTQk/pngegg-7.png"
                    alt="LinkedIn" /></a>
            </div>
        </div>
    </section>
);

export default Contact;