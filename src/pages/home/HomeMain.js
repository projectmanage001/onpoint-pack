import React from 'react';
import Banner from "./Banner"
import ServicesOne from "./ServicesOne"




import Blog from './Blog';
import TestimonialsSection from './TestimonialsSection';
import FAQsection from './FAQsection';



const HomeMain = () => {
	return (
		<React.Fragment>
			<Banner />
			<ServicesOne />
			
			
			
			<FAQsection />
			<TestimonialsSection />
			 <Blog/>
		</React.Fragment>
	);
}

export default HomeMain;