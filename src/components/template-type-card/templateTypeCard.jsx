import './templateTypeCard.css';
import logo from '../../assets/images/logo.png'


function TemplateTypeCard(props) {

    const data = props?.data;

    return (
        <div data-component="templatetypecard">
            <div className="template-card-cnt">
                <img className="template-card-logo" src={data.image }></img>
                <h3 className="template-card-heading">{data.name}</h3>
                <p className="template-card-content">{data.content}</p>
            </div>
        </div>
    )

}

export default TemplateTypeCard;