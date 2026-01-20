export default function StoryCard({ story }) {
  return (
    <div
      className="
        relative
        w-24 h-40
        sm:w-28 sm:h-44
        md:w-32 md:h-48
        rounded-xl overflow-hidden
        flex-shrink-0
        cursor-pointer
      "
    >
      <img
        src={story.image}
        alt={story.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <p className="absolute bottom-2 left-2 text-white text-xs sm:text-sm font-medium">
        {story.name}
      </p>
    </div>
  );
}
