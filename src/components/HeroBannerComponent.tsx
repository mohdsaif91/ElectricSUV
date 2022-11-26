import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeroBannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: Field<string>;
    buttonList: Field<string>;
  };
};

const HeroBannerComponent = (props: HeroBannerComponentProps): JSX.Element => (
  <div>
    <img src={props.fields.bannerImage.value} width="100%" height="100%" alt="Mahindra"></img>
  </div>
);

export default withDatasourceCheck()<HeroBannerComponentProps>(HeroBannerComponent);
