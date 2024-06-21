import React from "react";
import Link from "next/link";
import { link } from "fs";

type SidebarCategoryProps = {
  data?: Array<{
    id?: number;
    name?: string;
    slug?: string;
    count?: number;
    link: string;
    featuredmedia?: { sourceUrl: string; alt: string };
  }>;
};

export const SidebarCategory = ({ data }: SidebarCategoryProps) => {
  const categoryData = data && data?.length > 0 ? data : dummyData;

  return (
    <div className="rounded-xl border border-base-content border-opacity-10 p-8">
      <h4 className="text-xl font-semibold leading-6 text-base-content">
        Category
      </h4>
      <div className="pt-6">
        {categoryData?.map((item, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between last:border-none border-b border-base-content border-opacity-10 py-3.5"
          >
            <Link
              href={item?.link}
              className="text-base font-medium text-base-content text-opacity-70 capitalize hover:text-primary transition ease-in-out duration-300"
            >
              {item?.name}
            </Link>
            <span className="px-2 py-1 rounded-md bg-primary bg-opacity-5 text-primary text-xs font-medium">
              {item?.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const dummyData = [
  {
    name: "Technology",
    link: "/category/technology",
    count: 50,
  },
  {
    name: "Easter eggs",
    link: "/category/easter-eggs",
    count: 34,
  },
  {
    name: "Bugs",
    link: "/category/bugs",
    count: 12,
  },
  {
    name: "Gaming",
    link: "/category/gaming",
    count: 36,
  },
  {
    name: "Software Development",
    link: "/category/software-development",
    count: 91,
  },
  {
    name: "Internet Culture",
    link: "/category/internet-culture",
    count: 47,
  },
];
