import { useState } from 'react';
import { Text, Field, withDatasourceCheck, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

import { imgLoader } from 'src/util/util';

import GCCSS from './GalleryComponent.module.css';

interface galleryItemList {
  fields: {
    galleryImage: ImageField;
  };
}

type GalleryComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    previousIcon: ImageField;
    nextIcon: ImageField;
    carImageListSlide: galleryItemList[];
  };
};

const GalleryComponent = (props: GalleryComponentProps): JSX.Element => {
  const [slideImage, setSlideImage] = useState(0);

  const changeImage = (index: number) => {
    setSlideImage(index);
  };

  return (
    <Container fluid className={GCCSS.galleryContainer}>
      <section id="gallery">
        <Row className={GCCSS.galleryRow}>
          <Col>
            <span className={GCCSS.galleryText}>
              <Text field={props.fields.heading} />
            </span>
          </Col>
          <Col lg="12">
            <div className={GCCSS.scrollContainer}>
              <div className="scroll-left"></div>
              <div className="scroll-right"></div>
              <div className="image-conatiner-main">
                <Carousel
                  activeIndex={slideImage}
                  onSlid={(d) => setSlideImage(d)}
                  onSelect={(selectedIndex) => setSlideImage(selectedIndex)}
                >
                  {props.fields.carImageListSlide.map((m: galleryItemList, index: number) => (
                    <Carousel.Item key={index}>
                      <Image
                        loader={imgLoader}
                        className={GCCSS.carImg}
                        src={m.fields.galleryImage.value?.src || ''}
                        alt="Mahindra"
                        width={1500}
                        height={700}
                      />
                      {/* <img
                        className={GCCSS.carImg}
                        src={m.fields.galleryImage.value?.src}
                        alt="Mahindra"
                      /> */}
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </Col>
          <Col lg="12" className={GCCSS.allImageContainerArrow}>
            <div className={`${GCCSS.galleryBtnContainer}`}>
              <Image
                className="c-p"
                onClick={() => {
                  if (slideImage > 0) {
                    setSlideImage(slideImage - 1);
                  }
                }}
                src={props.fields.previousIcon.value?.src || ''}
                alt="Mahindra"
                loader={imgLoader}
                width={80}
                height={90}
              />
              {/* <img
                className="c-p"
                onClick={() => {
                  if (slideImage > 0) {
                    setSlideImage(slideImage - 1);
                  }
                }}
                src={props.fields.previousIcon.value?.src}
                alt="Mahindra"
              /> */}
              <Image
                loader={imgLoader}
                className="c-p"
                onClick={() => {
                  if (props.fields.carImageListSlide.length - 1 > slideImage) {
                    setSlideImage(slideImage + 1);
                  }
                }}
                src={props.fields.nextIcon.value?.src || ''}
                alt="Mahindra"
                width={80}
                height={90}
              />
              {/* <img
                className="c-p"
                onClick={() => {
                  if (props.fields.carImageListSlide.length - 1 > slideImage) {
                    setSlideImage(slideImage + 1);
                  }
                }}
                src={props.fields.nextIcon.value?.src}
                alt="Mahindra"
              /> */}
            </div>
          </Col>
          <Col lg="12" className={GCCSS.allImageContainerMain}>
            <div className={GCCSS.allImageContainer}>
              {props.fields.carImageListSlide.map((m: galleryItemList, index: number) => {
                return (
                  <Image
                    key={index}
                    loader={imgLoader}
                    className={GCCSS.carImg}
                    onClick={() => changeImage(index)}
                    src={m.fields.galleryImage.value?.src || ''}
                    alt="Mahindra"
                    width={250}
                    height={200}
                  />
                  // <img
                  //   key={index}
                  //   className={GCCSS.carImg}
                  //   onClick={() => changeImage(index)}
                  //   src={m.fields.galleryImage.value?.src}
                  //   alt="Mahindra"
                  // />
                );
              })}
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default withDatasourceCheck()<GalleryComponentProps>(GalleryComponent);
