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
  <div className="container-fluid" style={{backgroundColor: 'black'}}>
    <div className='container p-0' id='footer' >
    <div className="d-flex align-items-center p-0 m-0 footertext" style={{height: '6rem'}}>
      <div className="p-0 m-0 mr-5 "><img src="logo.svg" width="130" height="20" alt="Mahindra"></img></div>
      <div className="p-0 m-0 ml-4"><a className='p-0 m-1' href='#' target={"_blank"}>Privacy Policy</a></div>
      <div className="p-0 m-0 "><a href='#' className='p-0 m-1 ml-3' target={"_blank"}>Terms of use</a ></div>
      <div className="p-0 m-0 "><p className='p-0 m-2 ml-3'>Copyright ©2022 Mahindra & Mahindra Ltd</p ></div>

      <div className="ml-auto">
        <div className="d-flex flex-row"> 
          <div className="p-2 mx-1"><a href='#' target='_blank'><TfiFacebook/></a></div>
          <div className="p-2 mx-1"><a href='#' target={'_blank'}><TfiTwitterAlt/></a></div>
          <div className="p-2 mx-1"><a href='#' target={'_blank'}><TbBrandInstagram/></a></div>
          <div className="p-2 mx-1"><a href='#' target={'_blank'}><TfiLinkedin/></a></div>
          <div className="p-2 mx-1"><a href='#' target={'_blank'}><BsYoutube /></a></div>        
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default withDatasourceCheck()<FooterComponentProps>(FooterComponent);
