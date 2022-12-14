import { Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useEffect, useState } from 'react';

import HeroBannerChildComponent from './HeroBanner/HeroBannerChildComponent';

import HBCCSS from './HeroBannerComponent.module.css';

interface buttonItems {
  fields: {
    label: Field<string>;
    url: Field<string>;
  };
}

interface bannerItems {
  fields: {
    mediaType: Field<string>;
    media: ImageField;
    mediaMobile: ImageField;
    mediaText: Field<string>;
    buttonList: buttonItems[];
  };
}

type HeroBannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: Field<string>;
    bannerImageMobile: Field<string>;
    bannerList: bannerItems[];
  };
};

const HeroBannerComponent = (props: HeroBannerComponentProps): JSX.Element => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (counter === props.fields.bannerList.length + 1) {
      setCounter(1);
    }
  }, [counter]);

  useEffect(() => {
    let counterTimer = setInterval(() => {
      setCounter((stateValue: number) => stateValue + 1);
    }, 4000);
    return () => {
      clearInterval(counterTimer);
    };
  }, []);

  return (
    <section>
      {props.fields.bannerList.map((m: bannerItems, index: number) => {
        return (
          <div
            key={index}
            className={`${index + 1 === counter ? 'display-block' : 'display-none'}`}
          >
            <HeroBannerChildComponent
              key={index}
              mediaType={m.fields.mediaType}
              media={m.fields.media}
              mediaMobile={m.fields.mediaMobile}
              mediaText={m.fields.mediaText}
              buttonItems={m.fields.buttonList}
            />
          </div>
        );
      })}
      <>
        <ul className={`${HBCCSS.tabMenu}`}>
          {props.fields.bannerList.map((m: bannerItems, index: number) => (
            <li
              key={index}
              onClick={() => setCounter(index + 1)}
              className={`${HBCCSS.heroTab} ${
                index + 1 === counter ? HBCCSS.heroActiveTab : HBCCSS.heroInActive
              }`}
            >
              {m.fields.mediaType.value}
            </li>
          ))}
        </ul>
      </>
    </section>
  );
};

export default withDatasourceCheck()<HeroBannerComponentProps>(HeroBannerComponent);
