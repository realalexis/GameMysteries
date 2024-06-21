import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dateFormate } from "../../utils/helper.utils";

type PostOverlayCardProps = {
  cardData?: {
    id: number;
    title: string;
    slug: string;
    featuredmedia: { sourceUrl: string; alt: string };
    author: string;
    authorId: number;
    category: any;
    publishTime: string;
    avatar: string;
    content: string;
  };
};

export const PostOverlayCard = ({ cardData }: PostOverlayCardProps) => {
  return (
    <div className="card relative font-work">
      {/* Card Image */}
      <figure>
        <Image
          src={
            cardData?.featuredmedia?.sourceUrl ||
            "https://placehold.it/1216x450"
          }
          alt={cardData?.featuredmedia?.alt || "post-thumb"}
          className="rounded-xl"
          width={1216}
          height={450}
        />
      </figure>
      <div className="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12 z-20">
        {cardData?.category
          ?.slice(0, 3)
          ?.map((categoryData: any, index: number) => (
            <Link href={`/category/right-sidebar`} key={index}>
              <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4">
                {categoryData?.name}
              </div>
            </Link>
          ))}
        <h3>
          <a
            href="/single-post"
            className="text-neutral-content line-clam-3 font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500"
          >
            {cardData?.title ||
              `The Impact of Technology on the Workplace: How Technology is Changing`}
          </a>
        </h3>
        <div className="mt-3 md:mt-6 flex items-center gap-5 text-neutral-content">
          <div className=" flex items-center gap-3">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <Image
                  src={cardData?.avatar || "https://placehold.it/100x100"}
                  alt="author"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <h5>
              <a
                href="/author"
                className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
              >
                {cardData?.author || "unknown"}
              </a>
            </h5>
          </div>
          <p className=" text-xs md:text-base">
            {dateFormate(cardData?.publishTime)}
          </p>
        </div>
      </div>

      {/*  overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
    </div>
  );
};
