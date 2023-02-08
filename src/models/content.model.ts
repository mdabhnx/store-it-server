import { Content } from "../mongo/schema/content.schema";

export const createNewContent = async (payload) => {
  const contentCreation = new Content({
    content: payload,
  });

  await contentCreation.save();

  return contentCreation;
};
