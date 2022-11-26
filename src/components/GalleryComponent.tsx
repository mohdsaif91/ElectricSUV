import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type GalleryComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const GalleryComponent = (props: GalleryComponentProps): JSX.Element => (
  <div>
    <p>GalleryComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<GalleryComponentProps>(GalleryComponent);
