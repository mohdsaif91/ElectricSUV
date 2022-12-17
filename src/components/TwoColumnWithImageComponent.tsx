import { withDatasourceCheck, Field, Text, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';

import TCWICCSS from './TwoColumnWithImageComponent.module.css';

interface TwoColumnWithImageComponentList {
  fields: {
    cardText: Field<string>;
    cardIcon: ImageField;
    cardImage: ImageField;
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
    <div className={`${TCWICCSS.mainContainer} container-fluid`}>
      <Container className={`${TCWICCSS.cardWithImageContainer}`}>
        <Row className={`${TCWICCSS.twoColumnWithImageHeading}`}>
          <Col>
            <span className={`${TCWICCSS.cardWithImageHeading} is-view`}>
              <Text field={props.fields.heading}></Text>
            </span>
          </Col>
        </Row>
        <Row className={`${TCWICCSS.contentContainer}`}>
          {props.fields.TwoColumnWithImageComponentItems.map(
            (m: TwoColumnWithImageComponentList, index) => (
              <Col lg="6" className={`${TCWICCSS.cardWithImage}`} key={index}>
                <div className={`${TCWICCSS.humanImage}`}>
                  <figure className={`${TCWICCSS.humanImageFigure}`}>
                    <img
                      className={`${TCWICCSS.cardImage}`}
                      src={m.fields.cardImage.value?.toString()}
                      alt="Mahindra"
                    />
                  </figure>
                </div>
                <div className={`${TCWICCSS.cardBody}`}>
                  <div className={`${TCWICCSS.cardIconContainer}`}>
                    <img
                      className={`${TCWICCSS.cardIcon}`}
                      src={m.fields.cardIcon.value?.toString()}
                      alt="Mahindra"
                    />
                  </div>
                  <span className={`${TCWICCSS.cardTtext}`}>
                    <Text field={m.fields.cardText} />
                  </span>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default withDatasourceCheck()<TwoColumnWIthImageProps>(TwoColumnWithImage);
