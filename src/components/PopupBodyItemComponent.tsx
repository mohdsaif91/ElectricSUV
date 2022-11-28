import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type PopupBodyItemComponentProps = ComponentProps & {
  fields: {
    header: Field<string>;
    body: Field<string>;
    image: Field<string>;
    imageAltText: Field<string>;
  };
};

const PopupBodyItemComponent = (props: PopupBodyItemComponentProps): JSX.Element => (
  <div>
    <div className="is-view">
      <Text field={props.fields.header}></Text>
    </div>
    <br></br>
    <div className="card-text">
      <Text field={props.fields.body} />
    </div>
    <div className="card-text">
      <img src={props.fields.image.value} alt={props.fields.imageAltText.value} />
    </div>
  </div>
);

export default withDatasourceCheck()<PopupBodyItemComponentProps>(PopupBodyItemComponent);
