import { useEffect, useState } from 'react';
import { Field, RichText, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Aos from 'aos';

import 'aos/dist/aos.css';
// import './TwoColumnComponent.module.css';

type TwoColumnComponentProps = ComponentProps & {
  fields: {
    id: Field<string>;
    heading: Field<string>;
    body: Field<string>;
    backgroundColor: Field<string>;
    fontColor: Field<string>;
    mobileHeading: Field<string>;
  };
};

const TwoColumnComponent = (props: TwoColumnComponentProps): JSX.Element => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    Aos.init();
    if (typeof window !== 'undefined') {
      setMobile(window.innerWidth < window.innerHeight);
    }
  }, []);

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: props.fields.backgroundColor.value }}
    >
      <div className="container vh100 d-flex">
        <section id={props.fields.id.value}>
          <div className="row" data-aos-delay="500" data-aos="fade-up">
            <div className="brands-heading col-md-6 d-flex align-items-start">
              <div className="d-flex align-items-start">
                <h1 className="twoColHead" style={{ color: props.fields.fontColor.value }}>
                  <RichText field={mobile ? props.fields.mobileHeading : props.fields.heading} />
                </h1>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-start two-col-descriptionCol">
              <div
                className="d-flex align-items-start heading-alignment"
                style={{ color: props.fields.fontColor.value }}
              >
                <RichText field={props.fields.body} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<TwoColumnComponentProps>(TwoColumnComponent);
