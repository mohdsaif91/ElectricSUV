import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
// import MediaComponent from './MediaComponent';

interface value {
  value: Field<string>;
}

interface mediaList {
  mediaList: {
    image: Field<value>;
    date: Field<string>;
    desc: Field<string>;
    url: Field<string>;
  };
}

type MediaRoomComponentProps = ComponentProps & {
  fields: {
    title: Field<string>;
    mediaList: mediaList[];
  };
};

const MediaRoomComponent = (props: MediaRoomComponentProps): JSX.Element => (
  <>
    <h2>{props.fields.title.value}</h2>
    <div className="container">
      <div className="row">
        {props.fields.mediaList.map((_media, index) => {
          // console.log(_media);
          return (
            // <div key={index} id="mediaItem" className="col-xs-1">
            //   <MediaComponent
            //     // image={_media.mediaList.image.value}
            //     date={_media.mediaList.date}
            //     desc={_media.mediaList.desc}
            //     url={_media.mediaList.url}
            //   />
            // </div>
            <></>
          );
        })}
      </div>
    </div>
  </>
);

export default withDatasourceCheck()<MediaRoomComponentProps>(MediaRoomComponent);
