import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ComponentProps } from 'lib/component-props';

type MediaComponentProps = {
  image: Field<string>;
  date: Field<string>;
  desc: Field<string>;
  url: Field<string>;
};

const MediaComponent = (props: MediaComponentProps): JSX.Element => (
  <>
    <div
      className="column aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="250"
    >
      <a href={props.url.value} target="_blank" rel="noreferrer">
        <div className="image">
          <figure className="figure">
            <img
              loading="lazy"
              sizes="(-webkit-min-device-pixel-ratio: 2) 150vw, (min-resolution: 192dpi) 150vw, 100vw"
              src={props.image.value}
              width="1280"
              height="720"
              alt={'Image'}
            />
          </figure>
        </div>
        <p className="date">{props.date.value}</p>
        <h3 className="h4">{props.desc.value}</h3>
      </a>
    </div>
  </>
);

export default MediaComponent;
