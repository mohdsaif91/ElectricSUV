import { useState } from 'react';
import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

interface imageList {
  value: string[];
}

type GalleryComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    carImageListSlide: imageList;
    img1: Field<string>;
    img2: Field<string>;
    img3: Field<string>;
    img4: Field<string>;
    img5: Field<string>;
    img6: Field<string>;
    img7: Field<string>;
    img8: Field<string>;
    img9: Field<string>;
    img10: Field<string>;
  };
};

const GalleryComponent = (props: GalleryComponentProps): JSX.Element => {
  const [slideImage, setSlideImage] = useState(0);

  const changeImage = (index: number) => {
    setSlideImage(index);
  };
  return (
    <Container fluid className="gallery-container" >
      <section id='gallery'>
      <Row >
        <Col>
          <span className="gallery-text">
            <Text field={props.fields.heading} />
          </span>
        </Col>
        <Col lg="12">
          <div className="scroll-container">
            <div className="scroll-left"></div>
            <div className="scroll-right"></div>
            <div className="image-conatiner-main">
              <Carousel
                activeIndex={slideImage}
                onSlid={() => console.log('change')}
                onSelect={(selectedIndex) => setSlideImage(selectedIndex)}
              >
                <Carousel.Item>
                  <img className="car-img" src={props.fields.img1.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img2.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img3.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img4.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img5.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img6.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img7.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img8.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img9.value} alt="Mahindra" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={props.fields.img10.value} alt="Mahindra" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Col>
        <Col lg="12">
          <div className="all-image-container">
            {/* {props.fields.carImageListSlide.value.map((m: any) => {
            console.log(m);
            return <div></div>;
          })} */}
            <div className="image-container-5">
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(0)}
                  src={props.fields.img1.value}
                  alt="Mahindra"
                />
              </div>
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(1)}
                  src={props.fields.img2.value}
                  alt="Mahindra"
                />
              </div>
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(2)}
                  src={props.fields.img3.value}
                  alt="Mahindra"
                />
              </div>
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(3)}
                  src={props.fields.img4.value}
                  alt="Mahindra"
                />
              </div>
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(4)}
                  src={props.fields.img5.value}
                  alt="Mahindra"
                />
              </div>
            </div>
            <div className="image-container-5">
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(5)}
                  src={props.fields.img6.value}
                  alt="Mahindra"
                />
              </div>
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(6)}
                  src={props.fields.img7.value}
                  alt="Mahindra"
                />
              </div>
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(7)}
                  src={props.fields.img8.value}
                  alt="Mahindra"
                />
              </div>
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(8)}
                  src={props.fields.img9.value}
                  alt="Mahindra"
                />
              </div>
              <div className="image-continer">
                <img
                  className="car-img"
                  onClick={() => changeImage(9)}
                  src={props.fields.img10.value}
                  alt="Mahindra"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </section>
    </Container>
  );
};

export default withDatasourceCheck()<GalleryComponentProps>(GalleryComponent);
