import { CategoryCard } from "../../molecules/card/CategoryCard";

type CategoryGridThreeColProps = {
  data?: Array<{
    id?: number;
    name?: string;
    slug?: string;
    count?: number;
    link?: string;
    featuredmedia?: { sourceUrl: string; alt: string };
  }>;
};

export const CategoryGridThreeCol = ({ data }: CategoryGridThreeColProps) => {
  const categoryData =
    data && data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryData?.slice(0, 9)?.map((item: any, index: number) => (
          <CategoryCard cardData={item} key={index} />
        ))}
      </div>
    </div>
  );
};
