import { withDatasourceCheck, Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';

interface TwoColumnWithImageComponentList {
  fields: {
    cardText: Field<string>;
    cardIcon: Field<string>;
    cardImage: Field<string>;
  };
}

type TwoColumnWIthImageProps = ComponentProps & {
  fields: {
    TwoColumnWithImageComponentItems: TwoColumnWithImageComponentList[];
    backgroundColor: Field<string>;
    heading: Field<string>;
  };
};

const TwoColumnWithImage = (props: TwoColumnWIthImageProps): JSX.Element => {
  return (
    <Container className="card-with-image-container">
      <Row>
        <Col>
          <span className="card-with-image-heading is-view">
            <Text field={props.fields.heading}></Text>
          </span>
        </Col>
      </Row>
      <Row className="content-container">
        {props.fields.TwoColumnWithImageComponentItems.map(
          (m: TwoColumnWithImageComponentList, index) => (
            <Col lg="6" className="card-with-image" key={index}>
              <div className="human-image">
                <figure className="human-image-figure">
                  <img className="card-image" src={m.fields.cardImage.value} alt="Mahindra" />
                </figure>
              </div>
              <div className="card-body">
                <div className="card-icon-container">
                  <img className="card-icon" src={m.fields.cardIcon.value} alt="Mahindra" />
                </div>
                <span className="card-text">
                  <Text field={m.fields.cardText} />
                </span>
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default withDatasourceCheck()<TwoColumnWIthImageProps>(TwoColumnWithImage);
