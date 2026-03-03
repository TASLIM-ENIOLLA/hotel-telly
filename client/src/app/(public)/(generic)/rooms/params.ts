export const roomCategoriesParams = {
  populate: {
    images: {
      fields: ["url"]
    },
    room_category: {
      populate: {
        fields: ["name", "code"]
      }
    }
  }
}