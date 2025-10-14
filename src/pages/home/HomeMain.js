import React from 'react';
import Banner from "./Banner";


import ContactFormSection from '../../components/Common/ContactFormSection'; // 🔹 yeni ekledik

const HomeMain = () => {
	return (
		<React.Fragment>
			<Banner />
			
			
			
			{/* 🔹 Footer’dan hemen önce formu ekliyoruz */}
			<ContactFormSection />
		</React.Fragment>
	);
}

export default HomeMain;