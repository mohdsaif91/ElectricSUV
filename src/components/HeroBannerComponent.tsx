import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeroBannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: Field<string>;
    buttonList: Field<string>;
  };
};

const HeroBannerComponent = (props: HeroBannerComponentProps): JSX.Element => (
  <div className='banner vw-100 vh-100' style={{backgroundImage: `url(${props.fields.bannerImage.value})`}} id="">
      <div className="btn-group bannergrid" role="group" aria-label="Basic example">
        <button className="mx-3">Know More</button>
      </div>
  </div>
);

export default withDatasourceCheck()<HeroBannerComponentProps>(HeroBannerComponent);
