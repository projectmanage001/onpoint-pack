import React, { useEffect, useState } from 'react';
import HomeMain from './HomeMain';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import BackToTop from '../../components/elements/BackToTop';
import bannerbg from '../../assets/images/backgrounds/page-header-bg.jpg';
import CtaSection from '../../components/Common/CtaSection';
import shapeImageUrl from '../../assets/images/shapes/cta-one-shape-1.png';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <Header />
            <HomeMain />
            
            {/*cta-section */}
            <CtaSection
            className="cta-one" // Custom class name
            breadcrumbsImg={bannerbg}
            shapeImageUrl={shapeImageUrl}
            title="Brauchen Sie Hilfe? Kontaktieren Sie uns!"
            text="Brauchen Sie Hilfe?"
            phoneNumber="+49 1577 1677034"
            />
            {/*cta-section end */}
            <BackToTop scroll={isVisible} />
            <Footer />
        </React.Fragment>
    );
}

export default Home;
