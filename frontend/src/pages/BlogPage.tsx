import { Search } from "lucide-react";
import { useState } from "react";

const posts = [
  { id: 1, title: "From \"Hey\" to \"We\": Insights from Our State of Modern Dating Report", date: "9 Mar 2026", author: "Eden Ezion", excerpt: "Since the launch of Viber Dating on Valentine's Day 2025, we've seen a thriving global community where real people make meaningful connections.", tag: "News" },
  { id: 2, title: "What's New on Viber", date: "2 Dec 2025", author: "Eden Ezion", excerpt: "Ever wish you could wave a magic wand and move your entire Viber life to a new phone?", tag: "News" },
  { id: 3, title: "Why Viber Pay Is the Best Way to Send Money to Friends and Family", date: "3 Nov 2025", author: "Viber Pay Team", excerpt: "Staying close to the people you love shouldn't stop at messages. Whether you're sending a quick thank you...", tag: "Viber Pay" },
  { id: 4, title: "Sending Money Home: How Viber Pay Connects You Abroad", date: "4 Sep 2025", author: "Viber Pay Team", excerpt: "Living away from family and friends can be tough. Whether you've moved abroad for work, study, or adventure.", tag: "Viber Pay" },
  { id: 5, title: "New Sticker Packs for Every Mood", date: "15 Aug 2025", author: "Creative Team", excerpt: "Express yourself with our latest collection of animated stickers designed for every conversation.", tag: "Features" },
  { id: 6, title: "Community Spotlight: Top Growing Communities This Month", date: "1 Aug 2025", author: "Community Team", excerpt: "Discover the fastest-growing communities on Viber and find your next favorite group to join.", tag: "Communities" },
];

const tags = ["All", "News", "Viber Pay", "Features", "Communities"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = posts.filter((p) => {
    const matchTag = activeTag === "All" || p.tag === activeTag;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Latest Posts</h1>

          {/* Search */}
          <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-2.5 mb-6 max-w-md">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-full outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="space-y-8">
            {filtered.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium">{post.tag}</span>
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="mt-3 border-b border-border" />
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="text-muted-foreground text-center py-10">No posts found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
