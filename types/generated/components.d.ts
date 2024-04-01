import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomAccordion extends Schema.Component {
  collectionName: 'components_custom_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'filter';
  };
  attributes: {
    title1: Attribute.String;
    text1: Attribute.RichText;
    title2: Attribute.String;
    text2: Attribute.RichText;
    title3: Attribute.String;
    text3: Attribute.RichText;
  };
}

export interface CustomSlider extends Schema.Component {
  collectionName: 'components_custom_sliders';
  info: {
    displayName: 'Slider';
    icon: 'picture';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface CustomTabContent extends Schema.Component {
  collectionName: 'components_custom_tab_contents';
  info: {
    displayName: 'TabContent';
    icon: 'filter';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface CustomTab extends Schema.Component {
  collectionName: 'components_custom_tabs';
  info: {
    displayName: 'Tab';
    icon: 'filter';
  };
  attributes: {
    tab_content: Attribute.Component<'custom.tab-content', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom.accordion': CustomAccordion;
      'custom.slider': CustomSlider;
      'custom.tab-content': CustomTabContent;
      'custom.tab': CustomTab;
    }
  }
}
