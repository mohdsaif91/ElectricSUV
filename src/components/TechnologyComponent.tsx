import { useEffect, useState } from 'react';
import { Text, Field, withDatasourceCheck, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';

import TechnologyGenericComponent from './TechnologyComponents/TechnologyGenericComponent';

import TGCCSS from './TechnologyComponent.module.css';

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
    graphicImage: ImageField;
    subheading: Field<string>;
    body: Field<string>;
    bodyimg: ImageField;
    tabletbodyimg: ImageField;
    closeIcon: ImageField;
    platFormTitle: Field<string>;
    platformMainTitle: Field<string>;
    platformText1: Field<string>;
    platformDescription: Field<string>;
    platformList: listItem[];
    hmiTitle: Field<string>;
    hmiMainTitle: Field<string>;
    hmiText1: Field<string>;
    hmiDescription: Field<string>;
    hmiList: listItem[];
  };
};

const TechnologyComponent = (props: TechnologyComponentProps): JSX.Element => {
  const [techDrawer, setTechDrawer] = useState({ platform: false, hmi: false });
  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTablet(window.innerWidth >= 700);
    }
  }, []);

  return (
    <section id="technology">
      <Container fluid className={TGCCSS.technologyContainer}>
        {techDrawer.platform && (
          <TechnologyGenericComponent
            flag={techDrawer.platform}
            closeIcon={props.fields.closeIcon.value?.src || ''}
            onClose={() => setTechDrawer({ ...techDrawer, platform: false })}
            title={props.fields.platFormTitle}
            platformMainTitle={props.fields.platformMainTitle}
            platformText1={props.fields.platformText1}
            descritpion={props.fields.platformDescription}
            listItem={props.fields.platformList || []}
          />
        )}
        {techDrawer.hmi && (
          <TechnologyGenericComponent
            flag={techDrawer.hmi}
            closeIcon={props.fields.closeIcon.value?.src || ''}
            onClose={() => setTechDrawer({ ...techDrawer, hmi: false })}
            title={props.fields.hmiTitle}
            platformMainTitle={props.fields.hmiMainTitle}
            platformText1={props.fields.hmiText1}
            descritpion={props.fields.hmiDescription}
            listItem={props.fields.hmiList || []}
          />
        )}
        <div className={TGCCSS.technologyRow}>
          <Col lg={12} md={12} sm={12} className={TGCCSS.graphicBodyContainer}>
            <img
              className={TGCCSS.graphicBodyImg}
              src={tablet ? props.fields.tabletbodyimg.value?.src : props.fields.bodyimg.value?.src}
              alt="Mahindra"
            />
          </Col>
        </div>

        <Container className={TGCCSS.technologyContent}>
          <Row className={TGCCSS.technologyRow}>
            <Col lg="12">
              <span className={`cardWithImageHeading is-view ${TGCCSS.heading}`}>
                <Text field={props.fields.heading}></Text>
              </span>
            </Col>
            <div className="graphic-title">
              <img
                className={TGCCSS.graphicImage}
                src={props.fields.graphicImage.value?.src}
                alt="Mahindra"
              />
            </div>
            <Col className={TGCCSS.graphicSubHeading}>
              <Text field={props.fields.subheading}></Text>
            </Col>
            <div className={TGCCSS.graphicBody}>
              <Text field={props.fields.body} />
            </div>
            <div className={TGCCSS.btnContainer}>
              <button
                className={TGCCSS.techBtn}
                onClick={() => setTechDrawer({ ...techDrawer, platform: !techDrawer.platform })}
              >
                Platform
              </button>
              <button
                className={TGCCSS.techBtn}
                onClick={() => setTechDrawer({ ...techDrawer, hmi: !techDrawer.hmi })}
              >
                HMI
              </button>
            </div>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default withDatasourceCheck()<TechnologyComponentProps>(TechnologyComponent);
