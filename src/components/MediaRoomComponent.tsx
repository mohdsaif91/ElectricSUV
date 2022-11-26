import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MediaRoomComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const MediaRoomComponent = (props: MediaRoomComponentProps): JSX.Element => (
  <div>
    <p>MediaRoomComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<MediaRoomComponentProps>(MediaRoomComponent);
