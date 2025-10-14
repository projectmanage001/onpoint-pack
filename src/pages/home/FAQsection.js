import React, { useState } from 'react';

const faqData = [
    {
        key: 1,
        question: "Wie kann ich meinen Umzug verfolgen?",
        answer: "Sie können uns direkt kontaktieren, um Ihren Umzugsstatus zu erfahren. Unser Team informiert Sie jederzeit über den aktuellen Stand."
    },
    {
        key: 2,
        question: "Wie lange dauert ein durchschnittlicher Umzug?",
        answer: "Die Dauer hängt von der Entfernung und dem Umfang ab, aber in der Regel können wir lokale Umzüge innerhalb eines Tages abschließen."
    },
    {
        key: 3,
        question: "Bieten Sie auch kurzfristige Termine an?",
        answer: "Ja! Wir versuchen immer, auch kurzfristige Umzüge flexibel zu ermöglichen – rufen Sie uns einfach an."
    }
];

function FAQsection() {
    const [isActive, setIsActive] = useState({ status: false, key: 1 });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false });
        } else {
            setIsActive({ status: true, key });
        }
    };

    return (
        <section className="faq-one">
            <div className="faq-one__bg-color" />
            <div className="container">
                <div className="row">
                    
                    {/* Sol Taraf - Sıkça Sorulan Sorular */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">FAQ</span>
                                </div>
                                <h2 className="section-title__title">
                                    Häufig gestellte <br /> Fragen
                                </h2>
                            </div>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                {faqData.map((item) => (
                                    <div
                                        className={isActive.key === item.key ? "accrodion active" : "accrodion"}
                                        onClick={() => handleToggle(item.key)}
                                        key={item.key}
                                    >
                                        <div className="accrodion-title">
                                            <h4>{item.question}</h4>
                                        </div>
                                        <div className={isActive.key === item.key ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                        <div className="faq-page__count"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf - Form kaldırıldı, yüksekliği koruyan boş alan */}
                    <div className="col-xl-6 col-lg-6">
                        <div
                            className="faq-one__right"
                            style={{
                                minHeight: "100%",
                                height: "600px",          // Arka plan yüksekliği
                                backgroundColor: "transparent",
                            }}
                        >
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FAQsection;