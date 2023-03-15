import { useEffect, useState } from 'react';
import {
  Text,
  Field,
  withDatasourceCheck,
  RichText,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Row } from 'react-bootstrap';

import CCCSS from './ConnectComponent.module.css';
import Image from 'next/image';
import { imgLoader } from 'src/util/util';

type ConnectComponentProps = ComponentProps & {
  fields: {
    sectionHeading: Field<string>;
    heading: Field<string>;
    rightImage: ImageField;
    body: Field<string>;
  };
};

let oldScrollY = 0;

const ConnectComponent = (props: ConnectComponentProps): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);
  const [render, setRender] = useState(false);
  let refNumber = 0;

  useEffect(() => {
    return () => {
      setRender(false);
    };
  }, []);

  const handleScroll = () => {
    const connectElement = document.querySelector('#connect');
    const connectElementPosition: any = connectElement?.getBoundingClientRect();

    if (connectElementPosition.top < window.innerHeight && connectElementPosition.bottom >= 0) {
      if (!render) {
        setRender(true);
      }
    }

    if (window.scrollY > oldScrollY) {
      if (16 > refNumber) {
        refNumber++;
        setScrollY(refNumber);
      }
    } else {
      if (refNumber > -18) {
        refNumber--;
        setScrollY(refNumber);
      }
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="connect">
      <div className={CCCSS.connectContainer}>
        <Row className={CCCSS.connectRow}>
          <Col lg="5" sm="12" md="6" className={CCCSS.textColumn}>
            <span className={`${CCCSS.connectHeading} is-view`}>
              <Text field={props.fields.sectionHeading} />
            </span>
            <h1 className={CCCSS.h1}>
              <span className={`${CCCSS.h1Ttext} ${render ? 'typingDemo' : ''}`}>
                <RichText field={props.fields.heading} />
              </span>
            </h1>
            <div className={CCCSS.connectBody}>
              <Text field={props.fields.body} />
            </div>
          </Col>
          <Col lg="7" md="6" sm="12" className={CCCSS.rightImageContainer}>
            <figure className={`${CCCSS.connectFigure} ${CCCSS.rellax}`}>
              <Image
                loader={imgLoader}
                style={{ transform: `translate3d(0px, ${scrollY}%, 0px)` }}
                className={CCCSS.rightImage}
                src={props.fields.rightImage.value?.src || ''}
                alt="Mahindra"
                height={100}
                width={760}
              />
              {/* <img
                style={{ transform: `translate3d(0px, ${scrollY}%, 0px)` }}
                className={CCCSS.rightImage}
                src={props.fields.rightImage.value?.src || ''}
                alt="Mahindra"
              /> */}
            </figure>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<ConnectComponentProps>(ConnectComponent);
