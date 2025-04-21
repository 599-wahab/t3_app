
import "server-only"
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from"../server/db/schema";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}