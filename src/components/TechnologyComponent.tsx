import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

import TechnologyGenericComponent from './TechnologyComponents/TechnologyGenericComponent';

interface listItem {
  fields: {
    imgWithTitle: Field<string>;
    imgWithDec: Field<string>;
    imgWithDecImg: Field<string>;
  };
}

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
    platformList: listItem[];
    hmiTitle: Field<string>;
    hmiMainTitle: Field<string>;
    hmiText1: Field<string>;
    hmiList: listItem[];
  };
};

const TechnologyComponent = (props: TechnologyComponentProps): JSX.Element => {
  const [techDrawer, setTechDrawer] = useState({ platform: false, hmi: false });

  return (
    <Container fluid className="technology-container">
      {techDrawer.platform && (
        <TechnologyGenericComponent
          flag={techDrawer.platform}
          closeIcon={props.fields.closeIcon.value}
          onClose={() => setTechDrawer({ ...techDrawer, platform: false })}
          title={props.fields.platFormTitle}
          platformMainTitle={props.fields.platformMainTitle}
          platformText1={props.fields.platformText1}
          listItem={props.fields.platformList}
        />
      )}
      {techDrawer.hmi && (
        <TechnologyGenericComponent
          flag={techDrawer.hmi}
          closeIcon={props.fields.closeIcon.value}
          onClose={() => setTechDrawer({ ...techDrawer, hmi: false })}
          title={props.fields.hmiTitle}
          platformMainTitle={props.fields.hmiMainTitle}
          platformText1={props.fields.hmiText1}
          listItem={props.fields.hmiList}
        />
      )}
      <div className="graphic-body-container">
        <img className="graphic-body-img" src={props.fields.bodyimg.value} alt="Mahindra" />
      </div>
      <section id="technology">
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
      </section>
    </Container>
  );
};

export default withDatasourceCheck()<TechnologyComponentProps>(TechnologyComponent);
