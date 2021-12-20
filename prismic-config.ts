import Prismic from "@prismicio/client";

const apiEndpoint = process.env.API_ENDPOINT || "";
const accessToken = process.env.ACCESS_TOKEN;

export const linkResolver = (doc) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  return "/";
};

export const PrismicClient = Prismic.client(apiEndpoint, { accessToken });
