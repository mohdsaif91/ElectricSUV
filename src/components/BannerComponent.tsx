import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type BannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: Field<string>;
    title: Field<string>;
  };
};

const BannerComponent = (props: BannerComponentProps): JSX.Element => (
  <>
    <div className="separator is-inview"  data-intersecting="0.13385812938213348" id='esuvs'>
      <section className="promo-panel no-pad-bottom no-pad-top">
        <span className="wide-title">{props.fields.title.value}</span>
        <div className="relative-wrapper">
          <div className="background-image">
            <figure >
              <img
                loading="lazy"
                src={props.fields.bannerImage.value}
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
