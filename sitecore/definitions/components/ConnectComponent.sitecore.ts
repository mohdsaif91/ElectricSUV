// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ConnectComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ConnectComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'ConnectComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'subHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'rightImage', type: CommonFieldTypes.SingleLineText },
      { name: 'body', type: CommonFieldTypes.MultiLineText },
      { name: 'styleText1', type: CommonFieldTypes.SingleLineText },
      { name: 'styleText2', type: CommonFieldTypes.SingleLineText },
      { name: 'styleText3', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
