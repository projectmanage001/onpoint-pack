import React, { useEffect, useState } from 'react';
import BackToTop from '../../components/elements/BackToTop';
import Header from '../../components/Layout/Header';
import navImg1 from '../../assets/images/resources/logo-1.png';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/backgrounds/page-header-bg.jpg';
import BlogMain from './BlogMain';
import CtaSection from '../../components/Common/CtaSection';
import shapeImageUrl from '../../assets/images/shapes/cta-one-shape-1.png';

// Breadcrumbs Background Image

const Blog = () => {
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
            <Header
                navImg={navImg1}
                parentMenu='blog'
                activeMenu="/blog"
            />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Blog"
                pageName="Blog"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}
            <BlogMain/>
            {/*cta-section */}
            <CtaSection
            className="cta-one cta-two" // Custom class name
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

export default Blog;