import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import {
  PageInfo,
  CategoryGridThreeCol,
  CategoryOverlayCard,
  PostGridThreeCol,
} from "../../../component/ui";

// json data
import allCategoryData from "../../../data/categories/allCategoryData.json";
import allPostsData from "../../../data/posts/allPostsData.json";

export const metadata: Metadata = {
  title: "Category Three Column",
  description: "Category Three Column",
};

type CategoryProps = { params?: { slug: string } };

export default function Category({ params }: CategoryProps) {
  const categoryData =
    params?.slug === "all-categories"
      ? allCategoryData
      : allPostsData.filter((post) =>
          post.category.some((category) => category.slug === params?.slug)
        );

  return (
    <main className="container mx-auto px-5 md:px-0">
      {/* PageInfo Component */}
      <PageInfo path={params?.slug} />
      {/* page banner or postcard overlay Component */}
      <section className="mt-12">
        {categoryData
          ?.slice(0, 1)
          .map(
            (item: any, index: number) =>
              params?.slug === "all-categories" && (
                <CategoryOverlayCard cardData={item} key={index} />
              )
          )}
      </section>
      <div className="mt-12">
        {/* all post - category  card in a 3 grid basis component */}
        {params?.slug === "all-categories" ? (
          <CategoryGridThreeCol data={categoryData} />
        ) : (
          <PostGridThreeCol data={categoryData} />
        )}
        <div className="flex items-center justify-center mt-8">
          <Link
            href="/blog"
            className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
          >
            View All Post
          </Link>
        </div>
      </div>
      {/* advertisement Component */}
    </main>
  );
}
