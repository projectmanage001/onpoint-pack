// import Swiper core and required modules
import { Link } from 'react-router-dom';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bgImg1 from "../../assets/images/backgrounds/slider-1-1.jpg";
import bgImg2 from "../../assets/images/backgrounds/slider-1-2.jpg";
import bgImg3 from "../../assets/images/backgrounds/slider-1-3.jpg";
import BannerTitleIcon from "../../assets/images/icon/main-slider-sub-title-icon.png"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

function Banner() {
    return (
        <>
        {/* banner-one */}
        <section className="main-slider">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: `url(${bgImg1})` }}
                />
                <div className="main-slider__shape-1" />
                <div className="main-slider__shape-2" />
                <div className="main-slider__shape-3" />
                <div className="main-slider__shape-4" />
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                            <img
                              src={BannerTitleIcon}
                              alt=""
                            />
                          </div>
                          <p className="main-slider__sub-title">Bester Versand</p>
                        </div>
                        <h2 className="main-slider__title">
                          Zuverlässige <span>Reaktionsschnelle </span> <br /> Logistik
                        </h2>
                        <p className="main-slider__text">
                          We have been operating for over a decade, providing top-notch
                          services to <br /> our clients and building a strong track record in
                          the industry.
                        </p>
                        <div className="main-slider__btn-and-call-box">
                          <div className="main-slider__btn-box">
                            <Link
  to="/contact"
  className="main-menu__btn"
  style={{
    backgroundColor: "#ffcc00",
    color: "#111",
    fontWeight: 600,
    borderRadius: 8,
  }}
>
  Jetzt Kontakt
</Link>
                          </div>
                          <div className="main-slider__call">
                            <div className="main-slider__call-icon">
                              <span className="icon-phone" />
                            </div>
                            <div className="main-slider__call-number">
                              <p>Brauchen Sie Hilfe?</p>
                              <h5>
                                <Link to="tel:+49 1577 1677034">+49 1577 1677034</Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: `url(${bgImg2})` }}
                />
                <div className="main-slider__shape-1" />
                <div className="main-slider__shape-2" />
                <div className="main-slider__shape-3" />
                <div className="main-slider__shape-4" />
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                            <img
                              src={BannerTitleIcon}
                              alt=""
                            />
                          </div>
                          <p className="main-slider__sub-title">Bester Versand</p>
                        </div>
                        <h2 className="main-slider__title">
                          Zuverlässige <span>Reaktionsschnelle </span> <br /> Logistik
                        </h2>
                        <p className="main-slider__text">
                          We have been operating for over a decade, providing top-notch
                          services to <br /> our clients and building a strong track record in
                          the industry.
                        </p>
                        <div className="main-slider__btn-and-call-box">
                          <div className="main-slider__btn-box">
                            <Link
  to="/contact"
  className="main-menu__btn"
  style={{
    backgroundColor: "#ffcc00",
    color: "#111",
    fontWeight: 600,
    borderRadius: 8,
  }}
>
  Jetzt Kontakt
</Link>
                          </div>
                          <div className="main-slider__call">
                            <div className="main-slider__call-icon">
                              <span className="icon-phone" />
                            </div>
                            <div className="main-slider__call-number">
                              <p>Brauchen Sie Hilfe?</p>
                              <h5>
                                <Link to="tel:+49 1577 1677034">+49 1577 1677034</Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: `url(${bgImg3})` }}
                />
                <div className="main-slider__shape-1" />
                <div className="main-slider__shape-2" />
                <div className="main-slider__shape-3" />
                <div className="main-slider__shape-4" />
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                            <img
                              src={BannerTitleIcon}
                              alt=""
                            />
                          </div>
                          <p className="main-slider__sub-title">Bester Versand</p>
                        </div>
                        <h2 className="main-slider__title">
                          
Zuverlässige <span>Reaktionsschnelle </span> <br /> Logistik
                        </h2>
                        <p className="main-slider__text">
                          We have been operating for over a decade, providing top-notch
                          services to <br /> our clients and building a strong track record in
                          the industry.
                        </p>
                        <div className="main-slider__btn-and-call-box">
                          <div className="main-slider__btn-box">
                            <Link
  to="/contact"
  className="main-menu__btn"
  style={{
    backgroundColor: "#ffcc00",
    color: "#111",
    fontWeight: 600,
    borderRadius: 8,
  }}
>
  Jetzt Kontakt
</Link>
                          </div>
                          <div className="main-slider__call">
                            <div className="main-slider__call-icon">
                              <span className="icon-phone" />
                            </div>
                            <div className="main-slider__call-number">
                              <p>Brauchen Sie Hilfe?</p>
                              <h5>
                                <Link to="tel:+49 1577 1677034">+49 1577 1677034</Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="swiper-pagination" id="main-slider-pagination" />

        </section>
        {/* banner-one */}
      </>
    );
}

export default Banner;
