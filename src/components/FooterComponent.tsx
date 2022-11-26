import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const FooterComponent = (props: FooterComponentProps): JSX.Element => (
  <div>
    <img src="logo.svg" width="100" height="50" alt="Mahindra"></img>
  </div>
);

export default withDatasourceCheck()<FooterComponentProps>(FooterComponent);
