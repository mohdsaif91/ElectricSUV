import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

import TechnologyGenericComponent from './TechnologyComponents/TechnologyGenericComponent';

type TechnologyComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    graphicImage: Field<string>;
    subheading: Field<string>;
    body: Field<string>;
    bodyimg: Field<string>;
    closeIcon: Field<string>;
    platFormTitle: Field<string>;
    platformMainTitle: Field<string>;
    platformText1: Field<string>;
    imgWithDec1Title: Field<string>;
    imgWithDec1Dec: Field<string>;
    imgWithDec1Img: Field<string>;
    imgWithDec2Title: Field<string>;
    imgWithDec2Dec: Field<string>;
    imgWithDec2Img: Field<string>;
    imgWithDec3Title: Field<string>;
    imgWithDec3Dec: Field<string>;
    imgWithDec3Img: Field<string>;
    imgWithDec4Title: Field<string>;
    imgWithDec4Dec: Field<string>;
    imgWithDec4Img: Field<string>;
    hmiTitle: Field<string>;
    hmiMainTitle: Field<string>;
    hmiText1: Field<string>;
    hmiImgWithDec1Title: Field<string>;
    hmiImgWithDec1Dec: Field<string>;
    hmiImgWithDec1Img: Field<string>;
    hmiImgWithDec2Title: Field<string>;
    hmiImgWithDec2Dec: Field<string>;
    hmiImgWithDec2Img: Field<string>;
    hmiImgWithDec3Title: Field<string>;
    hmiImgWithDec3Dec: Field<string>;
    hmiImgWithDec3Img: Field<string>;
    hmiImgWithDec4Title: Field<string>;
    hmiImgWithDec4Dec: Field<string>;
    hmiImgWithDec4Img: Field<string>;
  };
};

const TechnologyComponent = (props: TechnologyComponentProps): JSX.Element => {
  const [techDrawer, setTechDrawer] = useState({ platform: false, hmi: false });

  return (
    <Container fluid className="technology-container">
      {/* {techDrawer.platform && ( */}
      <TechnologyGenericComponent
        flag={techDrawer.platform}
        closeIcon={props.fields.closeIcon.value}
        onClose={() => setTechDrawer({ ...techDrawer, platform: false })}
        title={props.fields.platFormTitle}
        platformMainTitle={props.fields.platformMainTitle}
        platformText1={props.fields.platformText1}
        imgWithDec1Title={props.fields.hmiImgWithDec1Title}
        imgWithDec1Dec={props.fields.imgWithDec1Dec}
        imgWithDec1Img={props.fields.imgWithDec1Img.value}
        imgWithDec2Title={props.fields.imgWithDec2Title}
        imgWithDec2Dec={props.fields.imgWithDec2Dec}
        imgWithDec2Img={props.fields.imgWithDec2Img.value}
        imgWithDec3Title={props.fields.imgWithDec3Title}
        imgWithDec3Dec={props.fields.imgWithDec3Dec}
        imgWithDec3Img={props.fields.imgWithDec3Img.value}
        imgWithDec4Title={props.fields.imgWithDec4Title}
        imgWithDec4Dec={props.fields.imgWithDec4Dec}
        imgWithDec4Img={props.fields.imgWithDec4Img.value}
      />
      {/* )} */}
      {techDrawer.hmi && (
        <TechnologyGenericComponent
          flag={techDrawer.hmi}
          closeIcon={props.fields.closeIcon.value}
          onClose={() => setTechDrawer({ ...techDrawer, hmi: false })}
          title={props.fields.hmiTitle}
          platformMainTitle={props.fields.hmiMainTitle}
          platformText1={props.fields.hmiText1}
          imgWithDec1Title={props.fields.hmiImgWithDec1Title}
          imgWithDec1Dec={props.fields.hmiImgWithDec1Dec}
          imgWithDec1Img={props.fields.hmiImgWithDec1Img.value}
          imgWithDec2Title={props.fields.hmiImgWithDec2Title}
          imgWithDec2Dec={props.fields.hmiImgWithDec2Dec}
          imgWithDec2Img={props.fields.hmiImgWithDec2Img.value}
          imgWithDec3Title={props.fields.hmiImgWithDec3Title}
          imgWithDec3Dec={props.fields.hmiImgWithDec3Dec}
          imgWithDec3Img={props.fields.hmiImgWithDec3Img.value}
          imgWithDec4Title={props.fields.hmiImgWithDec4Title}
          imgWithDec4Dec={props.fields.hmiImgWithDec4Dec}
          imgWithDec4Img={props.fields.hmiImgWithDec4Img.value}
        />
      )}
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
            <button
              className="tech-btn"
              onClick={() => setTechDrawer({ ...techDrawer, platform: !techDrawer.platform })}
            >
              Platform
            </button>
            <button
              className="tech-btn"
              onClick={() => setTechDrawer({ ...techDrawer, hmi: !techDrawer.hmi })}
            >
              HMI
            </button>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default withDatasourceCheck()<TechnologyComponentProps>(TechnologyComponent);
