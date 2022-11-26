import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TechnologyComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const TechnologyComponent = (props: TechnologyComponentProps): JSX.Element => (
  <div>
    <p>TechnologyComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<TechnologyComponentProps>(TechnologyComponent);
