import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

interface buttonItems {
  fields: {
    label:Field<string>;
    url:Field<string>;
  };
}

type HeroBannerComponentProps = ComponentProps & {
  fields: {
    bannerImage: Field<string>;
    buttonList: buttonItems[];
  };
};

const HeroBannerComponent = (props: HeroBannerComponentProps): JSX.Element => {
  return (
  <div className='banner vw-100 vh-100' style={{backgroundImage: `url(${props.fields.bannerImage.value})`}} id="">
      <section >
        <div className="btn-group bannergrid" role="group" aria-label="Basic example">
          {
            props.fields.buttonList.map((item, index)=> {
              return <button className="mx-3" key={index}>{item.fields.label.value}</button>
            })
          }
        </div>
      </section>
  </div>
)};

export default withDatasourceCheck()<HeroBannerComponentProps>(HeroBannerComponent);
