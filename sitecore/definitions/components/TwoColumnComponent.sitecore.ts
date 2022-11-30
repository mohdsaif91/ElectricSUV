// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the TwoColumnComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function TwoColumnComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'TwoColumnComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'id', type: CommonFieldTypes.SingleLineText },
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'body', type: CommonFieldTypes.RichText },
      { name: 'backgroundColor', type: CommonFieldTypes.SingleLineText },
      { name: 'fontColor', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
