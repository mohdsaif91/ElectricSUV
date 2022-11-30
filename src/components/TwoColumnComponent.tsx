import { Field, RichText, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

type TwoColumnComponentProps = ComponentProps & {
  fields: {
    id: Field<string>;
    heading: Field<string>;
    body: Field<string>;
    backgroundColor: Field<string>;
    fontColor: Field<string>;
  };
};

const TwoColumnComponent = (props: TwoColumnComponentProps): JSX.Element => {
  // console.log(props.fields.backgroundColur.value, "background color");
  useEffect(() => {
    Aos.init();
  }, [])
  // console.log(props.fields.fontColor.value, "font color");
  return (
  <div   className='container-fluid' style={{backgroundColor: props.fields.backgroundColor.value}}>
    <div className='container vh-100 d-flex' style={{ backgroundColor: props.fields.backgroundColor.value}} id={props.fields.id.value}>
    <div className="row " data-aos-delay='500' data-aos='fade-up' >
      <div className='col-md-6 d-flex align-items-start p-0 pt-5 mt-5'>
        <div className="d-flex align-items-start mt-5 ">
          <h1 className='twoColHead ' style={{color: props.fields.fontColor.value}}>
            <RichText field={props.fields.heading} />
          </h1>
        </div>
      </div>
      <div className='col-md-6 d-flex align-items-start p-0 pt-5 mt-5'>
        <div className="d-flex align-items-start mt-5 " style={{color: props.fields.fontColor.value}}>
          <RichText  field={props.fields.body} />
        </div>
      </div>
    </div>

  </div>
  </div>
)};

export default withDatasourceCheck()<TwoColumnComponentProps>(TwoColumnComponent);
