import React from "react";
import Link from "next/link";
import Image from "next/image";

type CategoryOverlayCardProps = {
  cardData?: {
    id: number;
    name: string;
    slug: string;
    count: number;
    link: string;
    featuredmedia: { sourceUrl: string; alt: string };
  };
};

export const CategoryOverlayCard = ({ cardData }: CategoryOverlayCardProps) => {
  return (
    <div className="card relative font-work">
      {/* Card Image */}
      <figure>
        <Image
          src={
            cardData?.featuredmedia?.sourceUrl ||
            "https://placehold.it/1216x450"
          }
          alt={cardData?.featuredmedia?.alt || "category-thumb"}
          className="rounded-xl"
          width={1216}
          height={450}
        />
      </figure>
      <div className="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12 z-20">
        <h3>
          <Link legacyBehavior href={cardData?.link || "#"}>
            <a className="text-neutral-content line-clam-3 font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500">
              {cardData?.name || `Default Category Name`}
            </a>
          </Link>
        </h3>
        <p className=" text-xs md:text-base">{cardData?.count} posts</p>
      </div>

      {/*  overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
    </div>
  );
};
