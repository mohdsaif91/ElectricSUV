import { Field, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TwoColumnComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    body: Field<string>;
    backgroundColor: Field<string>;
    fontColor: Field<string>;
  };
};

const TwoColumnComponent = (props: TwoColumnComponentProps): JSX.Element => {
  // console.log(props.fields.backgroundColur.value, "background color");
  console.log(props.fields.fontColor.value, "font color");
  return (
  <div className='container-fluid' style={{backgroundColor: props.fields.backgroundColor.value}}>
    <div className='container vh-100 d-flex' style={{ backgroundColor: props.fields.backgroundColor.value}} id='brands'>
    <div className="row" >
      <div className='col-md-6 d-flex align-items-center'>
        <h1 className='twoColHead' style={{color: props.fields.fontColor.value}}>
          {props.fields.heading.value}
        </h1>
      </div>
      <div className='col-md-6 d-flex align-items-center'>
        <p style={{color: props.fields.fontColor.value}}> {props.fields.body.value}</p>
      </div>
    </div>

  </div>
  </div>
)};

export default withDatasourceCheck()<TwoColumnComponentProps>(TwoColumnComponent);
