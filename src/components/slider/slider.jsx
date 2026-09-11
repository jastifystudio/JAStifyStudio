import { useNavigate } from 'react-router-dom';
import './slider.css';
import sliderImage from '../../assets/images/homepage-hero.avif';
import sliderImage1 from '../../assets/images/cactus-animation.svg';

function Slider() {
    const navigate = useNavigate();

    const onCreateResume = () => {
        navigate('/resumeStudio');
    };

    return (
        <div data-component="slider">
            <div className="main-cnt">
                {/* Visual Illustration */}
                <div className="slider-left-cnt">
                    <div className="hero-art-wrapper">
                        <img className="hero-main-img" src={sliderImage} alt="Resume Illustration" />
                        <img className="wave-cactus-sway" src={sliderImage1} alt="Animated Accent" />
                    </div>
                </div>

                {/* Text & Action */}
                <div className="slider-right-cnt">
                    <h1 className="slider-heading">
                        <span style={{ color: '#ff3d3c', marginRight:'2px' }}>JAS</span>tify Studio
                        <br />
                        Smart Resume Builder
                    </h1>
                    <p className="slider-content">
                        Create your perfect resume from any device with our free AI Resume Builder. Access content suggestions, ATS-friendly templates, & expert tips to get hired fast.
                    </p>
                    <button className="slider-button" onClick={onCreateResume}>
                        Build my resume today
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;