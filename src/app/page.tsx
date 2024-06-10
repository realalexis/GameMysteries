import { PostOverlayGridBanner } from "../component/ui/organism/postLayout/PostOverlayGridBanner";
import postsData from "../data/posts/allPostsData.json";

export default function Home() {
  return (
    <main className="container mx-auto px-5 sm:px-0">
      {/* Banner Component */}
      <section>
        <PostOverlayGridBanner data={postsData} />
      </section>
    </main>
  );
}
