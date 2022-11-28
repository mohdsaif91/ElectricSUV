// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the GalleryComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function GalleryComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'GalleryComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'carImageListSlide', type: CommonFieldTypes.ContentList },
      { name: 'img1', type: CommonFieldTypes.SingleLineText },
      { name: 'img2', type: CommonFieldTypes.SingleLineText },
      { name: 'img3', type: CommonFieldTypes.SingleLineText },
      { name: 'img4', type: CommonFieldTypes.SingleLineText },
      { name: 'img5', type: CommonFieldTypes.SingleLineText },
      { name: 'img6', type: CommonFieldTypes.SingleLineText },
      { name: 'img7', type: CommonFieldTypes.SingleLineText },
      { name: 'img8', type: CommonFieldTypes.SingleLineText },
      { name: 'img9', type: CommonFieldTypes.SingleLineText },
      { name: 'img10', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
