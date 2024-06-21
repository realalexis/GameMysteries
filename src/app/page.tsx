import Link from "next/link";
import { PostsCarousel } from "../component/carousel/PostsCarousel";
import {
  PostOverlayGridBanner,
  PostTagsLists,
  PostOverlayFourCol,
  PostMagnificOverlaySingle,
  PostMagnificOverlayTwo,
} from "../component/ui";
import postsData from "../data/posts/allPostsData.json";
import tagsData from "../data/tags/allTagsData.json";
import categoryData from "../data/categories/allCategoryData.json";
import Sidebar from "../component/sidebar";

export default function Home() {
  return (
    <main className="container mx-auto px-5 sm:px-0">
      {/* Banner Component */}
      <section>
        <PostsCarousel data={postsData} />
      </section>

      {/* Post Tags */}
      <section className="py-8">
        <PostTagsLists data={tagsData} />
      </section>

      {/* trending post */}
      <section className="py-10">
        <div className="font-work flex items-center justify-between mb-8">
          <h5 className="text-base-content text-2xl font-bold">
            Trending Post
          </h5>
          <Link
            href="#"
            className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
          >
            View All Post
          </Link>
        </div>
        <PostOverlayFourCol data={postsData} />
      </section>

      <section className="py-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
          {/*  Body Component */}
          <div className="col-span-12 lg:col-span-8">
            {/*  Post Magnific Overlay Single Component */}
            <div className="font-work flex items-center justify-between mb-8">
              <h5 className="text-base-content text-2xl font-bold">Hot Post</h5>
              <Link
                href="#"
                className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
              >
                View All Post
              </Link>
            </div>
            <PostMagnificOverlaySingle data={postsData} />

            {/*  Post Magnific Overlay Two Component */}
            <div className="font-work flex items-center justify-between mb-8 py-10">
              <h5 className="text-base-content text-2xl font-bold">
                Latest Post
              </h5>
              <Link
                href="#"
                className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm"
              >
                View All Post
              </Link>
            </div>
            <PostMagnificOverlayTwo data={postsData} />
          </div>
          {/*  Sidebar Component */}
          <Sidebar data={postsData} categoryData={categoryData} />
        </div>
      </section>
    </main>
  );
}
