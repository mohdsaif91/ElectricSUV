import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Row } from 'react-bootstrap';

type ConnectComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    subHeading: Field<string>;
    rightImage: Field<string>;
    body: Field<string>;
    styleText1: Field<string>;
    styleText2: Field<string>;
    styleText3: Field<string>;
  };
};

const ConnectComponent = (props: ConnectComponentProps): JSX.Element => (
  <div className="connect-container">
    <Row>
      <Col lg="4" className="text-column">
        <span className="card-with-image-heading is-view">
          <Text field={props.fields.heading} />
        </span>

        <h1 className="h1">
          <span className="h1-text">
            <Text field={props.fields.styleText1} />
          </span>
          <span className="h1-text">
            <Text field={props.fields.styleText2} />
          </span>
          <span className="h1-text">
            <Text field={props.fields.styleText3} />
          </span>
        </h1>
        <div className="connect-body">
          <Text field={props.fields.body} />
        </div>
      </Col>
      <Col lg="8" className="right-image-container">
        <figure className="rellax">
          <img className="right-image" src={props.fields.rightImage.value} alt="Mahindra" />
        </figure>
      </Col>
    </Row>
  </div>
);

export default withDatasourceCheck()<ConnectComponentProps>(ConnectComponent);
