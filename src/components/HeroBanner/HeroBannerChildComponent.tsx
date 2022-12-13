import { Field, RichText, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';

import HBCCSS from '../HeroBannerComponent.module.css';

interface value {
  value: Field<string>;
}

type Props = {
  mediaType: Field<string>;
  media: ImageField;
  mediaMobile: ImageField;
  mediaText: Field<string>;
};

const HeroBannerChildComponent = (props: Props) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobile(window.innerWidth < window.innerHeight);
    }
  }, []);

  return (
    <>
      {props.mediaType.value === 'image' ? (
        <div
          className={`${HBCCSS.vh100} ${HBCCSS.banner} vw-100 `}
          style={{
            backgroundImage: `url(${mobile ? props.mediaMobile.value : props.media.value})`,
          }}
        >
          <div className={`${HBCCSS.bannergrid} btn-group`} role="group" aria-label="Basic example">
            {/* {props.fields.buttonList.map((item, index) => {
              return (
                <button className="mx-3" key={index}>
                  {item.fields.label.value}
                </button>
              );
            })} */}
          </div>
        </div>
      ) : (
        <div className={`${HBCCSS.videoContainer}`}>
          <video
            preload="auto"
            loop={true}
            autoPlay={true}
            width="100%"
            muted={true}
            className="html-video"
          >
            <source src={`${props.media.value}`} type="video/webm" />
            <div>JACK</div>
          </video>
          <div className={`${HBCCSS.videoContainerItems}`}>
            <div className={`${HBCCSS.richTextContainer}`}>
              <div className={`${HBCCSS.richTextBodyWrapper}`}>
                <RichText field={props.mediaText} />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </>
  );
};

export default HeroBannerChildComponent;
