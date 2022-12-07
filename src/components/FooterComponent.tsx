import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { BsYoutube } from 'react-icons/bs';
import { TbBrandInstagram } from 'react-icons/tb';
import { TfiFacebook, TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi';

interface footerItem {
  fields: {
    label: Field<string>;
    url: Field<string>;
  };
}

type FooterComponentProps = ComponentProps & {
  fields: {
    copyright: Field<string>;
    footList: footerItem[];
  };
};

const FooterComponent = (props: FooterComponentProps): JSX.Element => {
  return (
    <div
      className="container-fluid footer-container no-padding"
      style={{ backgroundColor: 'black' }}
    >
      <div className="footertext " id="footer">
        <div className="row p-0 pt-4 pb-4">
          <div className="col-md-2 d-flex align-items-center p-0">
            <img src="logo.svg" width="130" height="20" alt="Mahindra"></img>
          </div>
          <div className="col-md-2 p-0 d-flex align-items-center">
            {props.fields.footList.map((item, index) => {
              return (
                <a href={item.fields.url.value} key={index} className="mx-1" target={'_blank'}>
                  {item.fields.label.value}
                </a>
              );
            })}
          </div>
          <div className="col-md-5 p-0">
            <p className="p-0 pt-3">{props.fields.copyright.value}</p>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-end">
            <div className="d-flex justify-content-end">
              <div className="mx-2">
                <a href="https://www.facebook.com/mahindrabornelectric/" target="_blank">
                  <TfiFacebook />
                </a>
              </div>
              <div className="mx-2">
                <a href="https://twitter.com/born_electric/" target={'_blank'}>
                  <TfiTwitterAlt />
                </a>
              </div>
              <div className="mx-2">
                <a href="#" target={'_blank'}>
                  <TbBrandInstagram />
                </a>
              </div>
              <div className="mx-2">
                <a href="#" target={'_blank'}>
                  <TfiLinkedin />
                </a>
              </div>
              <div className="mx-2">
                <a href="#" target={'_blank'}>
                  <BsYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<FooterComponentProps>(FooterComponent);
