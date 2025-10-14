import React from 'react';
import CtaSection from '../../components/Common/CtaSection';
import bannerbg from '../../assets/images/resources/cta-one-bg-img.jpg';
import shapeImageUrl from '../../assets/images/shapes/cta-one-shape-1.png';
import ContactMainImg from '../../assets/images/resources/contact-two-img-1.jpg';

const ContactMain = () => {
    return (
        <React.Fragment>
            {/*Contact One Start*/}
            <section className="contact-one">
                <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Kontaktieren Sie uns</span>
                    </div>
                    <h2 className="section-title__title">Nehmen Sie Kontakt mit uns auf</h2>
                </div>
                <div className="contact-one__inner">
                    <ul className="contact-one__contact-list list-unstyled">
                    <li>
                        <div className="icon">
                        <span className="icon-call" />
                        </div>
                        <div className="content">
                        <h3>Lets Talk us</h3>
                        <p>
                            Phone number: <a href="tel:+49 1577 1677034">+49 1577 1677034</a>
                        </p>
                        <p>
                            
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <span className="icon-location location-icon" />
                        </div>
                        <div className="content">
                        <h3>Address</h3>
                        <p>
                            Zeppelinstraße 75, 13583 Berlin
                            <br /> 
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <span className="icon-envolop email-icon" />
                        </div>
                        <div className="content">
                        <h3>Send us email</h3>
                        <p>
                            <a href="mailto:moebeltaxiumzug@gmail.com">
                            moebeltaxiumzug@gmail.com
                            </a>
                        </p>
                        <p>
                            
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </section>
            {/*Contact One End*/}
            {/*Contact Two Start*/}
            <section className="contact-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                        <div className="contact-two__left">
                            <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">Kontakt</span>
                            </div>
                            <h2 className="section-title__title">Kontaktieren Sie uns hier</h2>
                            </div>
                            <form
                            className="contact-form-validated contact-two__form"
                            action="assets/inc/sendemail.php"
                            method="post"
                            noValidate="novalidate"
                            >
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                <div className="contact-two__input-box">
                                    <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                <div className="contact-two__input-box">
                                    <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                <div className="contact-two__input-box">
                                    <input
                                    type="text"
                                    name="text"
                                    placeholder="Subject"
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-xl-12">
                                <div className="contact-two__input-box text-message-box">
                                    <textarea
                                    name="message"
                                    placeholder="Message"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className=" col-xl-12">
                                <div className="contact-two__btn-box">
                                    <button type="submit" className="thm-btn contact-two__btn">
                                    Jetzt einreichen
                                    <span />
                                    </button>
                                </div>
                                </div>
                            </div>
                            </form>
                            <div className="result" />
                        </div>
                        </div>
                        <div className="col-xl-5">
                        <div className="contact-two__right">
                            <div className="contact-two__img">
                            <img src={ContactMainImg} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Contact Two End*/}
            {/*Google Map Start*/}
            <section className="google-map-one google-map-two">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.895904438589!2d13.184738577094033!3d52.53743827203902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85d8c7d7b3ddf%3A0x1d4e5de3e7e35b9!2sZeppelinstra%C3%9Fe%2075%2C%2013583%20Berlin%2C%20Almanya!5e0!3m2!1str!2str!4v1728307899827!5m2!1str!2str"
                    className="google-map__one"
                    allowFullScreen=""
                    title="Google Map showing Costco Wholesale location"
                />
            </section>
            {/*Google Map End*/}

            {/*cta-section */}
            <CtaSection
            breadcrumbsImg={bannerbg}
            shapeImageUrl={shapeImageUrl}
            title="Need any help? contact us!"
            text="Need help?"
            phoneNumber="(307) 555-0133"
            />
            {/*cta-section end */}
        </React.Fragment>
    );
}

export default ContactMain;
