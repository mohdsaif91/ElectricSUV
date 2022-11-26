import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';

type TwoColumnComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    body: Field<string>;
    backgroundColor: Field<string>;
  };
};

const TwoColumnComponent = (props: TwoColumnComponentProps): JSX.Element => (
  <Container className={`${props.fields.backgroundColor.value}`} fluid>
    <Row>
      <Col>
        <h2>
          <Text field={props.fields.heading}></Text>
        </h2>
      </Col>
      <Col>
        <Text field={props.fields.body}></Text>
      </Col>
    </Row>
  </Container>
);

export default withDatasourceCheck()<TwoColumnComponentProps>(TwoColumnComponent);
