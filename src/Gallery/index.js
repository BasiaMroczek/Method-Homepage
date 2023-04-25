import React, { useState } from "react";
import "./style.css";

const images = [
    {
        id: 1,
        src: "https://i.postimg.cc/ZnS3W0rq/photo-output-5.jpg",
        alt: "example 1",
    },
    {
        id: 2,
        src: "https://i.postimg.cc/ZKLPyPsz/photo-output-1.jpg",
        alt: "example 2",
    },
    {
        id: 3,
        src: "https://i.postimg.cc/W13ZFBJ0/photo-output-4.jpg",
        alt: "example 3",
    },
    {
        id: 4,
        src: "https://i.postimg.cc/k52WZ0J7/photo-output-3.jpg",
        alt: "example 4",
    },
    {
        id: 5,
        src: "https://i.postimg.cc/3xJXjyz4/photo-output-2.jpg",
        alt: "example 5",
    },
    {
        id: 6,
        src: "https://i.postimg.cc/N0ZRwdFm/photo-output.jpg",
        alt: "example 6",
    },
    {
        id: 7,
        src: "https://i.postimg.cc/L8CWdYVY/scianatv.jpg",
        alt: "example 7",
    },
    {
        id: 8,
        src: "https://i.postimg.cc/x1PhTpyZ/Kuchnia2.jpg",
        alt: "example 8",
    },
    {
        id: 9,
        src: "https://i.postimg.cc/YSqV4NdC/Kuchnia.jpg",
        alt: "example 9",
    },
    {
        id: 10,
        src: "https://i.postimg.cc/NfXBRCVM/Kuchnia23082022-1.jpg",
        alt: "example 10",
    },
    {
        id: 11,
        src: "https://i.postimg.cc/sfq3QCTq/Kuchnia23082022-2.jpg",
        alt: "example 11",
    },
    {
        id: 12,
        src: "https://i.postimg.cc/8zVD4BQb/Kuchnia23082022-3.jpg",
        alt: "example 12",
    },
    {
        id: 13,
        src: "https://i.postimg.cc/FRC5t8Wj/Salon2309.jpg",
        alt: "example 13",
    },
    {
        id: 14,
        src: "https://i.postimg.cc/J7gVpwB8/azienka-parter-1.jpg",
        alt: "example 14",
    },
    {
        id: 15,
        src: "https://i.postimg.cc/KvMXV9nM/azienka-parter-2.jpg",
        alt: "example 15",
    },
    {
        id: 16,
        src: "https://i.postimg.cc/q7hyF8Wb/112.jpg",
        alt: "example 16",
    },
    {
        id: 17,
        src: "https://i.postimg.cc/Dy6r4fqg/112A.jpg",
        alt: "example 17",
    },
    {
        id: 18,
        src: "https://i.postimg.cc/1zk8Wkyj/Legnicka-1.jpg",
        alt: "example 18",
    },
    {
        id: 19,
        src: "https://i.postimg.cc/7h0P5h7H/Legnicka-2.jpg",
        alt: "example 19",
    },
    {
        id: 20,
        src: "https://i.postimg.cc/qRtvdjvC/Legnicka-3.jpg",
        alt: "example 20",
    },
    {
        id: 21,
        src: "https://i.postimg.cc/k5YgZkqm/Legnicka-4.jpg",
        alt: "example 21",
    },
    {
        id: 22,
        src: "https://i.postimg.cc/50ZN9LXK/Legnicka-5.jpg",
        alt: "example 22",
    },
    {
        id: 23,
        src: "https://i.postimg.cc/br6Krw2s/IMG-1484.jpg",
        alt: "example 23",
    },
    {
        id: 24,
        src: "https://i.postimg.cc/q7fWzYgX/IMG-1486.jpg",
        alt: "example 24",
    },
    {
        id: 25,
        src: "https://i.postimg.cc/Yqs5wjHP/IMG-1494.jpg",
        alt: "example 25",
    },
    {
        id: 26,
        src: "https://i.postimg.cc/KvwHHV7S/IMG-1496.jpg",
        alt: "example 26",
    },
    {
        id: 27,
        src: "https://i.postimg.cc/J0d2mY9X/IMG-1500.jpg",
        alt: "example 27",
    },
    {
        id: 28,
        src: "https://i.postimg.cc/BZMWMMw4/IMG-1502.jpg",
        alt: "example 28",
    },
    {
        id: 29,
        src: "https://i.postimg.cc/cLtV1Z1L/IMG-1527.jpg",
        alt: "example 29",
    },
    {
        id: 30,
        src: "https://i.postimg.cc/c4HpjwVY/IMG-1531.jpg",
        alt: "example 30",
    },
    {
        id: 31,
        src: "https://i.postimg.cc/CKc3SqPy/Sikorskiego1.jpg",
        alt: "example 31",
    },
    {
        id: 32,
        src: "https://i.postimg.cc/63TD3pg8/Sikorskiego2.jpg",
        alt: "example 32 ",
    },
    {
        id: 33,
        src: "https://i.postimg.cc/RhCFDfDW/10.jpg",
        alt: "example 33",
    },
    {
        id: 34,
        src: "https://i.postimg.cc/NFNMqM3p/11.jpg",
        alt: "example 34 ",
    },
    {
        id: 35,
        src: "https://i.postimg.cc/RCGqnsWK/12.jpg",
        alt: "example 35",
    },
    {
        id: 36,
        src: "https://i.postimg.cc/CL15CG8t/2.jpg",
        alt: "example 36 ",
    },
    {
        id: 37,
        src: "https://i.postimg.cc/nzGr2T08/5.jpg",
        alt: "example 37",
    },
    {
        id: 38,
        src: "https://i.postimg.cc/LsXhDjGh/Dom-Prywatny-Stodo-a-1.jpg",
        alt: "example 38 ",
    },
    {
        id: 39,
        src: "https://i.postimg.cc/wBGMG7d2/Dom-Prywatny-Stodo-a-2.jpg",
        alt: "example 39 ",
    },
    {
        id: 40,
        src: "https://i.postimg.cc/mD1kfBLs/Dom-Prywatny-Stodo-a-3.jpg",
        alt: "example 40 ",
    },
    {
        id: 41,
        src: "https://i.postimg.cc/brXJqWr2/Dom-Prywatny-Stodo-a-4.jpg",
        alt: "example 41 ",
    },
    {
        id: 42,
        src: "https://i.postimg.cc/GtkptKTg/Kuchnia-granat.jpg",
        alt: "example 42 ",
    },
    {
        id: 43,
        src: "https://i.postimg.cc/BQ06yrRr/kuchnia-granat-2.jpg",
        alt: "example 43 ",
    },
    {
        id: 44,
        src: "https://i.postimg.cc/T2m1tdNj/kuchnia-granat-3.jpg",
        alt: "example 44 ",
    },
    {
        id: 45,
        src: "https://i.postimg.cc/59hVk8Qj/Kuchnia-1a.jpg",
        alt: "example 45 ",
    },
    {
        id: 46,
        src: "https://i.postimg.cc/P54nxc38/azienka-1-Ciemna.jpg",
        alt: "example 46 ",
    },
    {
        id: 47,
        src: "https://i.postimg.cc/fTYN4kYC/azienka-3-Ciemna.jpg",
        alt: "example 47 ",
    },
    {
        id: 48,
        src: "https://i.postimg.cc/G20tBBKH/Ksi-cia-Witolda1.jpg",
        alt: "example 48 ",
    },
    {
        id: 49,
        src: "https://i.postimg.cc/8z5jxgsP/Ksi-cia-Witolda2.jpg",
        alt: "example 49 ",
    },
    {
        id: 50,
        src: "https://i.postimg.cc/1zV450pk/Ksi-cia-Witolda3.jpg",
        alt: "example 50 ",
    },
    {
        id: 51,
        src: "https://i.postimg.cc/vZNcs267/Ksi-cia-Witolda4.jpg",
        alt: "example 51 ",
    },
    {
        id: 52,
        src: "https://i.postimg.cc/hPmSS2R9/Sypialnia-1.jpg",
        alt: "example 52 ",
    },
    {
        id: 53,
        src: "https://i.postimg.cc/Y2ZrKJZr/Sypialnia-2.jpg",
        alt: "example 53 ",
    },
    {
        id: 54,
        src: "https://i.postimg.cc/rm2HNNPL/azienka-Ciemna.jpg",
        alt: "example 54 ",
    },
    {
        id: 56,
        src: "https://i.postimg.cc/0NggVwWP/T-czowa-2.jpg",
        alt: "example 56 ",
    },
    {
        id: 57,
        src: "https://i.postimg.cc/FK0M8H8c/T-czowa-3.jpg",
        alt: "example 57 ",
    },
    {
        id: 58,
        src: "https://i.postimg.cc/d1BzQSqV/T-czowa-4.jpg",
        alt: "example 58 ",
    },
    {
        id: 59,
        src: "https://i.postimg.cc/P5Dffh0f/Komuny-paryskiej.jpg",
        alt: "example 59 ",
    },
    {
        id: 60,
        src: "https://i.postimg.cc/FKQr78Qy/Komuny-paryskiej-1.jpg",
        alt: "example 60 ",
    },
    {
        id: 62,
        src: "https://i.postimg.cc/m2J2GhX6/Komuny-paryskiej-2.jpg",
        alt: "example 62 ",
    },

];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const handleImgClick = (id) => {
        const selected = images.find((img) => img.id === id);
        setSelectedImg(selected);
    };

    return (
        <main>
            <div className="gallery__title" id="gallery">
                <h1>Realizacje</h1>
            </div>
            <div className="gallery__container">
                {images.map((img) => (
                    <img
                        key={img.id}
                        className="gallery__thumbnail"
                        src={img.src}
                        alt={img.alt}
                        onClick={() => handleImgClick(img.id)}
                    />
                ))}

                {selectedImg && (
                    <div className="gallery__modal">
                        <img
                            className="gallery__modal-img"
                            src={selectedImg.src}
                            alt={selectedImg.alt}
                        />
                        <button
                            className="gallery__modal-close"
                            onClick={() => setSelectedImg(null)}
                        >
                            Zamknij
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Gallery;