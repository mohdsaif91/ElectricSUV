import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useEffect, useState } from 'react';

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
    <div
      className="banner vw-100 vh100"
      style={{
        backgroundImage: `url(${
          mobile ? props.fields.bannerImageMobile.value : props.fields.bannerImage.value
        })`,
      }}
      id=""
    >
      <section>
        <div className="btn-group bannergrid" role="group" aria-label="Basic example">
          {props.fields.buttonList.map((item, index) => {
            return (
              <button className="mx-3" key={index}>
                {item.fields.label.value}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default withDatasourceCheck()<HeroBannerComponentProps>(HeroBannerComponent);
