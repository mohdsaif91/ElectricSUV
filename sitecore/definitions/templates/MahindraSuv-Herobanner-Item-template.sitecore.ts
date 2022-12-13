import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function StyleguideContentListItemTemplate(manifest: Manifest): void {
  manifest.addTemplate({
    name: 'MahindraSuv-Herobanner-Item-template',
    fields: [
      { name: 'mediaType', type: CommonFieldTypes.SingleLineText },
      { name: 'media', type: CommonFieldTypes.SingleLineText },
      { name: 'mediaMobile', type: CommonFieldTypes.SingleLineText },
      { name: 'mediaText', type: CommonFieldTypes.RichText },
      { name: 'url', type: CommonFieldTypes.SingleLineText },
      { name: 'buttonList', type: CommonFieldTypes.ContentList },
    ],
  });
}
