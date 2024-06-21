import Link from "next/link";
import Image from "next/image";

type CategoryCardProps = {
  cardData: {
    id: number;
    name: string;
    slug: string;
    count: number;
    link: string;
    featuredmedia: { sourceUrl: string; alt: string };
  };
};

export const CategoryCard = ({ cardData }: CategoryCardProps) => {
  return (
    <div className="card w-fit p-4 border border-base-content/10 rounded-xl font-work flex flex-col ">
      <Link legacyBehavior href={cardData?.link}>
        <figure className="w-full">
          <Image
            src={
              cardData?.featuredmedia?.sourceUrl ||
              "https://placehold.it/360x240"
            }
            alt={cardData?.featuredmedia?.alt || "category-thumb"}
            className="rounded-xl w-full"
            width={360}
            height={240}
          />
        </figure>
      </Link>
      <div className="card-body py-6 px-2 font-medium">
        <h3>
          <Link
            href={cardData?.link}
            className="text-base-content line-clam-3 hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2 font-work"
          >
            {cardData?.name}
          </Link>
        </h3>
        <p className="text-base font-work">{cardData?.count} posts</p>
      </div>
    </div>
  );
};
