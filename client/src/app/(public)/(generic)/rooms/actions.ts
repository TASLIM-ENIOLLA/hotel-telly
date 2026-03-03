"use server";

import { stringify } from "qs";
import { cms } from "@/lib/axios";

import { roomCategoriesParams } from "./params";
import { RoomCategoriesResponse } from "./types";
import { rooms } from "../home/$explore/props";

export async function getRoomCategories() {
  const params = stringify(roomCategoriesParams);
  const response = await cms.get<RoomCategoriesResponse>(`/rooms?${params}`);

  return {
    meta: response.data.meta,
    data: response.data.data.reduce((accumulator: any, data, _, array) => {
      const categoryExists = accumulator.find((category: typeof data["room_category"]) => {
        return category.id === data.room_category.id;
      });

      if (!categoryExists) {
        const categoryRooms = array.filter((room: typeof data) => {
          return room.room_category.id === data.room_category.id;
        });

        return [
          ...accumulator, {
            ...data.room_category,
            noOfRooms: categoryRooms.length,
            imagesOfRooms: categoryRooms.reduce((accumulator: string[], room: typeof data) => {
              if (room.images.length > 0) {
                return room.images.reduce((accumulator: string[], image: typeof room.images[number]) => {
                  if (accumulator.includes(image.url)) {
                    return accumulator;
                  }

                  return [
                    ...accumulator,
                    image.url
                  ];
                }, []);
              }

              return accumulator;
            }, []),
            avgPrice: categoryRooms.reduce((acc: any, room: typeof data) => {
              return acc + room.price;
            }, 0) / categoryRooms.length,
          },
        ];
      }

      return accumulator;
    }, []),
  }
}

// Check if the category exists in accumulator array
// If not exists, include object with category data and averages into accumulator array
// If exists, skip category as averages are already included