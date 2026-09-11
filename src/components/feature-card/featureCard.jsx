import './featureCard.css';

function FeatureCard(props) {

    const data = props?.data;

    return (
        <div data-component="featurecard">
        <div className="feature-card-cnt">
            <img className="feature-card-logo" src={data.image}></img>
            <h3 className="feature-card-heading">{data.heading}</h3>
            <span className="feature-card-content">{data.content}</span>
        </div>
        </div>
    )

}

export default FeatureCard;