import { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import { getStories } from "../services/posts";
import { normalizeStory } from "../utils/normalize";

const CURRENT_USER_ID = 1;

interface UIStory {
  id: number;
  name: string;
  image: string;
  isCreate?: boolean;
}

export default function Stories() {
  const [stories, setStories] = useState<UIStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await getStories(CURRENT_USER_ID);
        const normalized = res.data.map(normalizeStory);
        setStories(normalized);
      } catch (err) {
        console.error("Failed to load stories", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading || stories.length === 0) return null;

  return (
    <section className="w-full">
      <div className="bg-white rounded-xl shadow p-3 sm:p-4 mb-4 mx-auto">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {stories.map((story) => (
            <div key={story.id} className="snap-start">
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
