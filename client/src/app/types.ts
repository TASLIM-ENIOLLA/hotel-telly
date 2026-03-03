export type CMSImage = {
  id: number;
  url: string;
  documentId: string;
}

export type CMSLink = {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}