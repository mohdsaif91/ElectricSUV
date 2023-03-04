import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

import MCCSS from './MediaRoomComponent.module.css';

type MediaComponentProps = {
  image: ImageField;
  date: Field<string>;
  desc: Field<string>;
  url: Field<string>;
};

const MediaComponent = (props: MediaComponentProps): JSX.Element => (
  <a
    href={`${props.url.value}`}
    className={`${MCCSS.mediaColumn} aos-init aos-animate`}
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out-cubic"
    data-aos-delay="250"
  >
    <div className={MCCSS.imageContainer}>
      <figure className={MCCSS.mediaFigure}>
        <img
          className={MCCSS.mainImg}
          loading="lazy"
          sizes="(-webkit-min-device-pixel-ratio: 2) 150vw, (min-resolution: 192dpi) 150vw, 100vw"
          src={props.image.value?.src}
          alt={'Image'}
        />
      </figure>
    </div>
    <p className={MCCSS.mediaDate}>{props.date.value}</p>
    <h3 className={MCCSS.mediaDec}>{props.desc.value}</h3>
  </a>
);

export default MediaComponent;
