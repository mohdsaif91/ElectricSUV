import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ConnectComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const ConnectComponent = (props: ConnectComponentProps): JSX.Element => (
  <div>
    <p>ConnectComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<ConnectComponentProps>(ConnectComponent);
