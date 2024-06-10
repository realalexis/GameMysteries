import { PostsCarousel } from "../component/carousel/PostsCarousel";
import { PostOverlayGridBanner, PostTagsLists } from "../component/ui";
import postsData from "../data/posts/allPostsData.json";
import tagsData from "../data/tags/allTagsData.json";

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
    </main>
  );
}
