import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useEffect, useState } from 'react';

import HBCCSS from './HeroBannerComponent.module.css';

interface buttonItems {
  fields: {
    label: Field<string>;
    url: Field<string>;
  };
}

type HeroBannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: Field<string>;
    bannerImageMobile: Field<string>;
    buttonList: buttonItems[];
  };
};

const HeroBannerComponent = (props: HeroBannerComponentProps): JSX.Element => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobile(window.innerWidth < window.innerHeight);
    }
  }, []);

  return (
    <section>
      <div
        className={`${HBCCSS.vh100} ${HBCCSS.banner} vw-100 `}
        style={{
          backgroundImage: `url(${
            mobile ? props.fields.bannerImageMobile.value : props.fields.bannerImage.value
          })`,
        }}
      >
        <div className={`${HBCCSS.bannergrid} btn-group`} role="group" aria-label="Basic example">
          {props.fields.buttonList.map((item, index) => {
            return (
              <button className="mx-3" key={index}>
                {item.fields.label.value}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<HeroBannerComponentProps>(HeroBannerComponent);
