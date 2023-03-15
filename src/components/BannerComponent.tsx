import { Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

import BCCSS from './BannerComponent.module.css';

type BannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: ImageField;
    title: Field<string>;
  };
};

const BannerComponent = (props: BannerComponentProps): JSX.Element => (
  <>
    <div className="separator is-inview" data-intersecting="0.13385812938213348">
      <section className="promo-panel no-pad-bottom no-pad-top" id="esuvs">
        <span className={BCCSS.wideTitle}>{props.fields.title.value}</span>
        <div className="relative-wrapper">
          <div className="background-image">
            <figure className={BCCSS.bannerImageContainer}>
              <img
                className={BCCSS.bannerImage}
                loading="lazy"
                src={props.fields.bannerImage.value?.src}
                alt="Group Hero Shot"
                width="1920"
                height="1333"
              ></img>
            </figure>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default withDatasourceCheck()<BannerComponentProps>(BannerComponent);
