import { Play, Youtube } from "lucide-react";
import { useState } from "react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  youtubeId: string;
}

// Replace these with your actual YouTube video IDs and details
const videos: Video[] = [
  {
    id: "1",
    title: "Introduction to Cloud Engineering",
    thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_1/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_1",
  },
  {
    id: "2",
    title: "DevOps Best Practices",
    thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_2/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_2",
  },
  {
    id: "3",
    title: "Building with React & TypeScript",
    thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_3/maxresdefault.jpg",
    youtubeId: "YOUR_VIDEO_ID_3",
  },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-24 md:py-32 relative bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-sm text-primary mb-4">
              // brand videos
            </span>
            <h2 className="section-heading">Watch & Learn</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore my YouTube content on cloud engineering, DevOps, and modern web development.
            </p>
          </div>

          {/* Featured Video */}
          {activeVideo ? (
            <div className="mb-12">
              <div className="relative aspect-video rounded-xl overflow-hidden glass-card glow-border">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to all videos
              </button>
            </div>
          ) : null}

          {/* Video Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${activeVideo ? 'opacity-50' : ''}`}>
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="glass-card glow-border overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveVideo(video.youtubeId)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/40 group-hover:bg-background/20 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://youtube.com/@cloudwithstephen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] text-white font-medium hover:bg-[#CC0000] transition-colors duration-300"
            >
              <Youtube className="w-5 h-5" />
              Subscribe to My Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
