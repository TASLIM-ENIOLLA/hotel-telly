import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAchievementsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_achievements_sections';
  info: {
    displayName: 'Achievements Section';
  };
  attributes: {
    achievements: Schema.Attribute.Component<'element.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksContactSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'element.contacts', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    intro: Schema.Attribute.String;
  };
}

export interface BlocksMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media_sections';
  info: {
    displayName: 'Media Section';
  };
  attributes: {
    title: Schema.Attribute.Text;
    url: Schema.Attribute.String;
  };
}

export interface BlocksNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_newsletter_sections';
  info: {
    displayName: 'Newsletter Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksOffersSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_offers_sections';
  info: {
    displayName: 'Offers Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    offers: Schema.Attribute.Component<'element.button', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksRoomsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rooms_sections';
  info: {
    displayName: 'Rooms Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    roomCards: Schema.Attribute.Component<'element.room-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'element.card', true>;
  };
}

export interface BlocksWelcomeSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_welcome_sections';
  info: {
    displayName: 'Welcome Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementButton extends Struct.ComponentSchema {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    leftIconName: Schema.Attribute.String;
    rightIconName: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['xs', 'sm', 'lg', 'null']>;
    svg: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['default', 'ghost', 'outline', 'destructive', 'secondary']
    >;
  };
}

export interface ElementCard extends Struct.ComponentSchema {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementContacts extends Struct.ComponentSchema {
  collectionName: 'components_element_contacts';
  info: {
    displayName: 'Contacts';
  };
  attributes: {
    link: Schema.Attribute.Component<'element.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementLink extends Struct.ComponentSchema {
  collectionName: 'components_element_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementLogo extends Struct.ComponentSchema {
  collectionName: 'components_element_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementRoomCard extends Struct.ComponentSchema {
  collectionName: 'components_element_room_cards';
  info: {
    displayName: 'Room Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    logo: Schema.Attribute.Component<'element.logo', false>;
    navs: Schema.Attribute.Component<'element.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.achievements-section': BlocksAchievementsSection;
      'blocks.contact-section': BlocksContactSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.media-section': BlocksMediaSection;
      'blocks.newsletter-section': BlocksNewsletterSection;
      'blocks.offers-section': BlocksOffersSection;
      'blocks.rooms-section': BlocksRoomsSection;
      'blocks.testimonials-section': BlocksTestimonialsSection;
      'blocks.welcome-section': BlocksWelcomeSection;
      'element.button': ElementButton;
      'element.card': ElementCard;
      'element.contacts': ElementContacts;
      'element.link': ElementLink;
      'element.logo': ElementLogo;
      'element.room-card': ElementRoomCard;
      'layout.header': LayoutHeader;
    }
  }
}
