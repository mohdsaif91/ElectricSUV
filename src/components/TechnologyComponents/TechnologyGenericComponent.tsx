import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Col, Row } from 'react-bootstrap';

type platformProps = {
  flag: boolean;
  closeIcon: string;
  onClose: any;
  title: Field<string>;
  platformMainTitle: Field<string>;
  platformText1: Field<string>;
  imgWithDec1Title: Field<string>;
  imgWithDec1Dec: Field<string>;
  imgWithDec1Img: string;
  imgWithDec2Title: Field<string>;
  imgWithDec2Dec: Field<string>;
  imgWithDec2Img: string;
  imgWithDec3Title: Field<string>;
  imgWithDec3Dec: Field<string>;
  imgWithDec3Img: string;
  imgWithDec4Title: Field<string>;
  imgWithDec4Dec: Field<string>;
  imgWithDec4Img: string;
};

const TechnologyGenericComponent = (props: platformProps): JSX.Element => {
  return (
    <div className={`platform-container technology-transition ${props.flag ? '' : 'is-hidden'}`}>
      <img
        className="close-icon"
        src={props.closeIcon}
        onClick={() => props.onClose()}
        alt="close"
      />
      <Row>
        <Col>
          <span className="card-with-image-heading is-view">
            <Text field={props.title}></Text>
          </span>
        </Col>
      </Row>
      <h3 className="platform-main-title">
        <Text field={props.platformMainTitle}></Text>
      </h3>
      <div className="platform-text-1">
        <Text field={props.platformText1}></Text>
      </div>
      <div className="img-with-dec">
        <div className="image-with-dec-title h4">
          <Text field={props.imgWithDec1Title}></Text>
        </div>
        <div className="image-with-dec-dec">
          <Text field={props.imgWithDec1Dec}></Text>
        </div>
        <figure className="platform-figure">
          <img className="dec-img" src={props.imgWithDec1Img} alt="Mahindra" />
        </figure>
      </div>
      <div className="img-with-dec">
        <div className="image-with-dec-title h4">
          <Text field={props.imgWithDec2Title}></Text>
        </div>
        <div className="image-with-dec-dec">
          <Text field={props.imgWithDec2Dec}></Text>
        </div>
        <figure className="platform-figure">
          <img className="dec-img" src={props.imgWithDec2Img} alt="Mahindra" />
        </figure>
      </div>
      <div className="img-with-dec">
        <div className="image-with-dec-title h4">
          <Text field={props.imgWithDec3Title}></Text>
        </div>
        <div className="image-with-dec-dec">
          <Text field={props.imgWithDec3Dec}></Text>
        </div>
        <figure className="platform-figure">
          <img className="dec-img" src={props.imgWithDec3Img} alt="Mahindra" />
        </figure>
      </div>
      <div className="img-with-dec">
        <div className="image-with-dec-title h4">
          <Text field={props.imgWithDec4Title}></Text>
        </div>
        <div className="image-with-dec-dec">
          <Text field={props.imgWithDec4Dec}></Text>
        </div>
        <figure className="platform-figure">
          <img className="dec-img" src={props.imgWithDec4Img} alt="Mahindra" />
        </figure>
      </div>
    </div>
  );
};

export default TechnologyGenericComponent;
