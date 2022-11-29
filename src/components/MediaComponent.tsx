import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ComponentProps } from 'lib/component-props';

type MediaComponentProps = {
  image: Field<string>;
  date: Field<string>;
  desc: Field<string>;
  url: Field<string>;
};

const MediaComponent = (props: MediaComponentProps): JSX.Element => (
  <div
    className="media-column aos-init aos-animate"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out-cubic"
    data-aos-delay="250"
  >
    <div className="image-container">
      <figure className="media-figure">
        <img
          className="main-img"
          loading="lazy"
          sizes="(-webkit-min-device-pixel-ratio: 2) 150vw, (min-resolution: 192dpi) 150vw, 100vw"
          src={props.image.value}
          alt={'Image'}
        />
      </figure>
    </div>
    <p className="media-date">{props.date.value}</p>
    <h3 className="media-dec">{props.desc.value}</h3>
  </div>
);

export default MediaComponent;
