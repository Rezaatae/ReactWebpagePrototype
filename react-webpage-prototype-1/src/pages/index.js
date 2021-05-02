import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Footer from '../components/Footer'
import { homeObject1 } from '../components/Section1/Data'
import { homeObject2 } from '../components/Section2/Data'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Section1 {...homeObject1} />
            <Section2 {...homeObject2} />
            <Footer />
        </>
    );
};

export default Home;
