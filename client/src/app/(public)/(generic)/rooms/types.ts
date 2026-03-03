export type RoomCategoriesResponse = {
  data: Array<{
    id: number;
    cap: number;
    bed: string;
    name: string;
    size: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    documentId: string;
    publishedAt: string;
    images: Array<{
      id: number;
      url: string;
      documentId: string;
    }>;
    room_category: {
      id: number;
      name: string;
      code: string;
      createdAt: string;
      updatedAt: string;
      documentId: string;
      publishedAt: string;
    };
  }>;
  meta: {
    pagination: {
      page: number;
      total: number;
      pageSize: number;
      pageCount: number;
    };
  };
}