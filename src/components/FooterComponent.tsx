import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import {TfiFacebook, TfiTwitterAlt, TfiLinkedin}  from 'react-icons/tfi';
import { TbBrandInstagram} from 'react-icons/tb';
import { BsYoutube } from 'react-icons/bs';
import Link from 'next/link';
import { NavLink } from 'react-bootstrap';


type FooterComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const FooterComponent = (props: FooterComponentProps): JSX.Element => (
  <div className="container-fluid " style={{backgroundColor: 'black'}}>
    <div className='container footertext ' id='footer' >
      <div className='row p-0 pt-4 pb-4'>
        <div className="col-md-2 d-flex align-items-center p-0" ><img src="logo.svg" width="130" height="20" alt="Mahindra"></img></div>
        <div className='col-md-2 p-0 d-flex align-items-center'>
          <a href='#' className='' target={"_blank"}>Privacy Policy</a>
          <a href='#' className='p-2' target={"_blank"}>Terms of use</a >
        </div>
        <div className='col-md-5 p-0'>
          <p className='p-0 pt-3'>Copyright ©2022 Mahindra & Mahindra Ltd</p >
        </div>
      

        <div className='col-md-3 d-flex align-items-center justify-content-end' >
          <div className='d-flex justify-content-end'>
            <div className="mx-2"><a href='https://www.facebook.com/mahindrabornelectric/' target='_blank'><TfiFacebook/></a></div>
            <div className="mx-2"><a href='https://twitter.com/born_electric/' target={'_blank'}><TfiTwitterAlt/></a></div>
            <div className="mx-2"><a href='#' target={'_blank'}><TbBrandInstagram/></a></div>
            <div className="mx-2"><a href='#' target={'_blank'}><TfiLinkedin/></a></div>
            <div className="mx-2"><a href='#' target={'_blank'}><BsYoutube /></a></div>
          </div>
        </div>
      </div> 
    </div>
  </div>
);

export default withDatasourceCheck()<FooterComponentProps>(FooterComponent);
