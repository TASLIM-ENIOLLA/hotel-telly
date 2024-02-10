"use server";

export async function getRoomTypes() {
  try {
    const req = await fetch(`${process.env.BASE_URL}/api/client/rooms/types`, {
      cache: "no-cache"
    });
    const res = await req.json();

    return res.data;
  }
  catch(error) {
    return [];
  }
}