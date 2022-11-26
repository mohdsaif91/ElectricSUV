import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MediaComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const MediaComponent = (props: MediaComponentProps): JSX.Element => (
  <div>
    <p>MediaComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<MediaComponentProps>(MediaComponent);
