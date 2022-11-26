import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type YouTubeComponentProps = ComponentProps & {
  fields: {
    embedId: Field<string>;
  };
};

const YouTubeComponent = (props: YouTubeComponentProps): JSX.Element => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${props.fields.embedId.value}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default withDatasourceCheck()<YouTubeComponentProps>(YouTubeComponent);
