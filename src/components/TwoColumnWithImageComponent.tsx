import { withDatasourceCheck, Field, Text, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

import { imgLoader } from 'src/util/util';

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
  // {
  //   src, width, quality;
  // }
  // const imgLoader = (data: any) => {
  //   return `${data.src}?w=${data.width}&q=${data.quality || 75}`;
  // };
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
              <Col lg="6" md={6} sm={12} className={`${TCWICCSS.cardWithImage}`} key={index}>
                <div className={`${TCWICCSS.humanImage}`}>
                  <figure className={`${TCWICCSS.humanImageFigure}`}>
                    <Image
                      loader={imgLoader}
                      className={`${TCWICCSS.cardImage}`}
                      src={m.fields.cardImage.value?.src || ''}
                      width={600}
                      height={500}
                      alt="Mahindra"
                    />
                    {/* <img
                      className={`${TCWICCSS.cardImage}`}
                      src={m.fields.cardImage.value?.src}
                      alt="Mahindra"
                    /> */}
                  </figure>
                </div>
                <div className={`${TCWICCSS.cardBody}`}>
                  <div className={`${TCWICCSS.cardIconContainer}`}>
                    <div className={TCWICCSS.imgParent}>
                      <Image
                        loader={imgLoader}
                        className={`${TCWICCSS.cardIcon}`}
                        src={m.fields.cardIcon.value?.src || ''}
                        alt="Mahindra"
                        height={90}
                        width={150}
                        objectFit="contain"
                      />
                    </div>
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
