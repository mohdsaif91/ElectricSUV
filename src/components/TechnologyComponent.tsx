import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';

type TechnologyComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    graphicImage: Field<string>;
    subheading: Field<string>;
    body: Field<string>;
    bodyimg: Field<string>;
  };
};

const TechnologyComponent = (props: TechnologyComponentProps): JSX.Element => (
  <Container fluid className="technology-container">
    <div className="graphic-body-container">
      <img className="graphic-body-img" src={props.fields.bodyimg.value} alt="Mahindra" />
    </div>
    <Container className="technology-content">
      <Row>
        <Col lg="12">
          <span className="card-with-image-heading is-view heading">
            <Text field={props.fields.heading}></Text>
          </span>
        </Col>
        <div className="graphic-title">
          <img className="graphic-image" src={props.fields.graphicImage.value} alt="Mahindra" />
        </div>
        <Col className="graphic-sub-heading">
          <Text field={props.fields.subheading}></Text>
        </Col>
        <div className="graphic-body">
          <Text field={props.fields.body} />
        </div>
        <div className="btn-container">
          <button className="tech-btn">Platform</button>
          <button className="tech-btn">HMI</button>
        </div>
      </Row>
    </Container>
  </Container>
);

export default withDatasourceCheck()<TechnologyComponentProps>(TechnologyComponent);
