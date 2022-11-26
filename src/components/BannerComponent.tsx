import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type BannerComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const BannerComponent = (props: BannerComponentProps): JSX.Element => (
  <div>
    <p>BannerComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<BannerComponentProps>(BannerComponent);
