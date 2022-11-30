// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the TechnologyComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function TechnologyComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'TechnologyComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'graphicImage', type: CommonFieldTypes.SingleLineText },
      { name: 'subheading', type: CommonFieldTypes.SingleLineText },
      { name: 'body', type: CommonFieldTypes.MultiLineText },
      { name: 'bodyimg', type: CommonFieldTypes.SingleLineText },
      { name: 'closeIcon', type: CommonFieldTypes.SingleLineText },
      { name: 'platFormTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'platformMainTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'platformText1', type: CommonFieldTypes.MultiLineText },
      { name: 'imgWithDec1Title', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec1Dec', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec1Img', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec2Title', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec2Dec', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec2Img', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec3Title', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec3Dec', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec3Img', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec4Title', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec4Dec', type: CommonFieldTypes.SingleLineText },
      { name: 'imgWithDec4Img', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiMainTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiText1', type: CommonFieldTypes.MultiLineText },
      { name: 'hmiImgWithDec1Title', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec1Dec', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec1Img', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec2Title', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec2Dec', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec2Img', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec3Title', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec3Dec', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec3Img', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec4Title', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec4Dec', type: CommonFieldTypes.SingleLineText },
      { name: 'hmiImgWithDec4Img', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
