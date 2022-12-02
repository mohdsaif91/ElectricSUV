import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Col, Row } from 'react-bootstrap';

interface platformImageItem {
  fields: {
    imgWithTitle: Field<string>;
    imgWithDec: Field<string>;
    imgWithDecImg: Field<string>;
  };
}

type platformProps = {
  flag: boolean;
  closeIcon: string;
  onClose: any;
  title: Field<string>;
  platformMainTitle: Field<string>;
  platformText1: Field<string>;
  listItem: platformImageItem[];
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
      {props.listItem.map((m: platformImageItem) => (
        <div className="img-with-dec">
          <div className="image-with-dec-title h4">
            <Text field={m.fields.imgWithTitle}></Text>
          </div>
          <div className="image-with-dec-dec">
            <Text field={m.fields.imgWithDec}></Text>
          </div>
          <figure className="platform-figure">
            <img className="dec-img" src={m.fields.imgWithDecImg.value} alt="Mahindra" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default TechnologyGenericComponent;
