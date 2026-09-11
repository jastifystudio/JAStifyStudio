import { useRef } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Slider from '../../components/slider/slider';
import EasyStepsCard from '../../components/easy-steps-card/easyStepsCard';
import step1image from '../../assets/images/step-1-color-cards.avif'
import step2image from '../../assets/images/step-2-skillspost.avif'
import step3image from '../../assets/images/step-3-files.avif'
import FeatureCard from '../../components/feature-card/featureCard';
import Footer from '../../components/footer/footer';


function Home() {

    const stepsCard = [
        { image: step1image, content: "Pick an industry-tested template crafted to pass ATS filters and capture recruiter attention." },
        { image: step2image, content: "Fill in your skills, professional experience, and education using our intuitive, guided editor." },
        { image: step3image, content: "Instantly export your tailored resume in high-resolution, print-ready PDF format with one click." },
    ]
    
    const featuresCard = [
        { 
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80", 
            heading: "ATS-Optimized", 
            content: "Designed to navigate through Applicant Tracking Systems (ATS) smoothly and land on hiring managers' desks." 
        },
        { 
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80", 
            heading: "Instant Live Preview", 
            content: "Watch your changes update in real time as you adjust typography, color accents, and section order." 
        },
        { 
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", 
            heading: "Pixel-Perfect Export", 
            content: "Generate flawless, clean vector PDFs that maintain sharp typography and accurate alignments across all devices." 
        },
        { 
            image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80", 
            heading: "Tailored Customization", 
            content: "Adapt layout margins, headers, and section hierarchies effortlessly to showcase your unique career journey." 
        },
    ];

    return (
        <div data-component="home">
            <div className='main-cnt'>
                <Header />
                <Slider />

                <h2 className="heading">Build Your Winning Resume in <span style={{ color: '#ff3d3c' }}> 3 Easy Steps</span></h2>
                <div className='steps-card-cnt'>
                    {stepsCard.map((item, index) => (
                        <EasyStepsCard key={index} data={item} />
                    ))}
                </div>

                <h2 className="heading">Features</h2>
                <div className='steps-card-cnt'>
                    {featuresCard.map((item, index) => (
                        <FeatureCard key={index} data={item} />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Home
