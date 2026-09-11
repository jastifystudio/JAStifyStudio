import './easyStepsCard.css';
import step1image from '../../assets/images/step-1-color-cards.avif'

function EasyStepsCard(props) {

    const data = props?.data;

    return (
        <div data-component="easystepcard">
            <div className="card-cnt">
                <img className="card-logo" src={data?.image}></img>
                <p className="card-content">{data?.content}</p>
            </div>
        </div>
    );

}

export default EasyStepsCard;
