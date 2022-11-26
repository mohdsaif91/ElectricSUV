import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';

type GalleryComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const GalleryComponent = (props: GalleryComponentProps): JSX.Element => (
  <Container fluid className="gallery-container">
    <Row>
      <Col>
        <span className="gallery-text">
          <Text field={props.fields.heading} />
        </span>
      </Col>
    </Row>
  </Container>
);

export default withDatasourceCheck()<GalleryComponentProps>(GalleryComponent);
