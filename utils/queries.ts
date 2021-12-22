import { PrismicClient } from "../prismic-config";
import Prismic from "@prismicio/client";

// Order by last publication date from most recent to oldest
const articlesOrderings = "[document.first_publication_date desc]";

export const fetchCategoriesWithExploreMore = async (
    articlesLimit: number | null = null
  ) => {
    return PrismicClient.query(
      Prismic.Predicates.at("document.type", "category")
    ).then(async (response) => {
      const results = await Promise.all(
        response.results.map(async (item) => {
          const articles = await fetchArticlesByCategory(item.id, articlesLimit);
          return { ...item, articles };
        })
      );
      const data = { ...response, results: results };
      return data;
    });

   export const fetchArticlesByCategory = (categoryId: string, limit: number | null) => {
        return PrismicClient.query(
          [
            Prismic.Predicates.at("document.type", "article"),
            Prismic.Predicates.at("my.article.category", categoryId),
          ],
          limit
            ? {
                orderings: articlesOrderings,
                pageSize: limit,
              }
            : {
                orderings: articlesOrderings,
              }
        );
      };