import { Text, Field, RichText, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { imgLoader } from 'src/util/util';

import TGCCSS from './TechnologyGenericComponent.module.css';

interface platformImageItem {
  fields: {
    imgWithTitle: Field<string>;
    imgWithDec: Field<string>;
    imgWithDecImg: ImageField;
  };
}

type platformProps = {
  flag: boolean;
  closeIcon: string;
  onClose: any;
  title: Field<string>;
  platformMainTitle: Field<string>;
  platformText1: Field<string>;
  descritpion: Field<string>;
  listItem: any;
};

const TechnologyGenericComponent = (props: platformProps): JSX.Element => {
  return (
    <div
      className={`${TGCCSS.platformContainer} ${TGCCSS.technologyTransition} ${
        props.flag ? '' : 'is-hidden'
      }`}
    >
      <div className={TGCCSS.iconParent}>
        <Image
          loader={imgLoader}
          className={TGCCSS.closeIcon}
          src={props.closeIcon}
          onClick={() => props.onClose()}
          alt="close"
          height={90}
          width={90}
        />
      </div>
      {/* <img
        className={TGCCSS.closeIcon}
        src={props.closeIcon}
        onClick={() => props.onClose()}
        alt="close"
      /> */}
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="card-with-image-heading heading is-view">
            <span className={`${TGCCSS.isView}`}>
              <Text field={props.title}></Text>
            </span>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <h3 className={TGCCSS.platformMainTitle}>
            <Text field={props.platformMainTitle}></Text>
          </h3>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <div className={`${TGCCSS.technologyDescritpion}`}>
            <RichText field={props.descritpion} />
          </div>
        </Col>
      </Row>
      <div className={TGCCSS.platformText1}>
        <Text field={props.platformText1}></Text>
      </div>
      {props.listItem.map((m: platformImageItem, index: number) => (
        <div className="img-with-dec" key={index}>
          <div className={`${TGCCSS.imageWithDecTitle} h4`}>
            <Text field={m.fields.imgWithTitle}></Text>
          </div>
          <div className={TGCCSS.imageWithDecDec}>
            <Text field={m.fields.imgWithDec}></Text>
          </div>
          <figure className={TGCCSS.platformFigure}>
            <Image
              className={TGCCSS.decImg}
              src={m.fields.imgWithDecImg.value?.src || ''}
              alt="Mahindra"
              height={600}
              width={800}
            />
            {/* <img className={TGCCSS.decImg} src={m.fields.imgWithDecImg.value?.src} alt="Mahindra" /> */}
          </figure>
        </div>
      ))}
    </div>
  );
};

export default TechnologyGenericComponent;
