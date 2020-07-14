import React from 'react';
import { ParticlePanel, TwelveSegments, HowPanel, PriceConfig,Blog, Career, ContactForm, FooterText, Footer } from '../components';

const Home = () => {
    return (
        <div>
        <ParticlePanel />
        <TwelveSegments />
        <HowPanel />
        <PriceConfig />
        <Blog></Blog>
        <Career></Career>
        <ContactForm></ContactForm>
        <FooterText></FooterText>
        <Footer></Footer>
        {
        //<Rellax speed={-3} className="block1"></Rellax>
        // <Rellax speed={-4} className="block2"></Rellax>
        // <Rellax speed={-4} className="block3"></Rellax>
      }
    </div>
    );
}

export default Home;
