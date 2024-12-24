// DB와 소통에 중심으로 코드를 작성하는 곳

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// postFindMany실행
export const postFindMany = async () => prisma.film_post.findMany({});
export const postFindOne = async (post_id) => prisma.film_post.findUnique({
  where: {
    post_id
  }
});
export const postCreateOne = async (post) =>  prisma.film_post.create({
  data: post
});
export const postUpdateOne = async (id, post) =>  prisma.film_post.update({
  where: {
    post_id: id
  },
  data: post
});
export const postDeleteOne = async (post_id) => prisma.film_post.delete({
  where: {
    post_id
  }
});