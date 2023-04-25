import React from "react";

import "./style.css";

const Contact = () => (
    <section id="contact">
        <h2 className="contact__title">Kontakt</h2>
        <div className="contact__info">
            <div className="contact__block">
                <img className="contact__icon" src="https://i.postimg.cc/R0cK6JYq/pngegg_(3).png" alt="Phone icon" />
                <p>Telefon: <a href="tel:+48-792-399-753">+48 792 399 753</a></p>
            </div>
            <div className="contact__block">
                <img className="contact__icon" src="https://i.postimg.cc/KcKqjJNY/pngegg-6.png" alt="E-mail icon" />
                <p>E-mail: <a href="mailto:method.kontakt@gmail.com">method.kontakt@gmail.com</a></p>
            </div>
            <div className="contact__block">
                <img className="contact__icon" src="https://i.postimg.cc/VLkNX0J5/pngegg-9.png" alt="Facebook icon" />
                <a href="https://www.facebook.com/profile.php?id=100086322962115">Facebook</a>
            </div>
            <div className="contact__block">
                <img className="contact__icon" src="https://i.postimg.cc/C5Kcs4yc/pngegg-5.png" alt="Instagram icon" />
                <a href="https://www.instagram.com/methodstudioarchitektury/">Instagram</a>
            </div>
            <div className="contact__block">
                <img className="contact__icon" src="https://i.postimg.cc/bwq9xTQk/pngegg-7.png" alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/barbara-mroczek-93b50724b/">LinkedIn</a>
            </div>
        </div>
    </section>
);

export default Contact;