import type { CMSImage, CMSLink } from "@/app/types";

export type PageResponse = {
  data: {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    documentId: string;
    description: string;
    publishedAt: string;
    heroSection: {
      id: number;
      cta: CMSLink;
      image: CMSImage;
      intro: string;
      heading: string;
      description: string;
    };
    welcomeSection: {
      cta: CMSLink;
      id: number;
      title: string;
      description: string;
    };
    offersSection: {
      id: number;
      cta: CMSLink;
      title: string;
      image: CMSImage;
      description: string;
      offers: Array<{
        id: number;
        text: string;
        svg: CMSImage;
        size: string | null;
        variant: string | null;
        leftIconName: string | null;
        rightIconName: string | null;
      }>;
    };
    achievementsSections: {
      id: number;
      title: string;
      description: string;
      achievements: Array<{
        id: number;
        title: string;
        description: string;
      }>;
    };
    roomsSection: {
      cta: CMSLink;
      id: number;
      title: string;
      roomCards: Array<{
        id: number;
        image: CMSImage;
        title: string;
      }>;
    };
    testimonialsSection: {
      id: number;
      testimonials: Array<{
        id: number;
        title: string;
        description: string;
      }>;
    };
    contactSection: {
      id: number;
      title: string;
      description: string;
      contacts: Array<{
        id: number;
        link: CMSLink;
        title: string;
      }>;
    };
    newsletterSection: {
      id: number;
      title: string;
      description: string;
    };
    mediaSection: {
      id: number;
      url: string;
      title: string;
    };
  };
}