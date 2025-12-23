import { Play, Youtube } from "lucide-react";

// Replace with your actual YouTube video ID (the part after v= in the URL)
const YOUTUBE_VIDEO_ID = "YOUR_VIDEO_ID";
const VIDEO_TITLE = "My Brand Video";

const VideoSection = () => {
  return (
    <section id="videos" className="py-24 md:py-32 relative bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block font-mono text-sm text-primary mb-4">
              // brand video
            </span>
            <h2 className="section-heading">Watch & Learn</h2>
          </div>

          {/* Video Player */}
          <div className="glass-card glow-border overflow-hidden rounded-xl">
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title={VIDEO_TITLE}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-8 text-center">
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
