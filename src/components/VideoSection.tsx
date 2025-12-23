import { motion } from "framer-motion";
import { Play, Youtube, ExternalLink } from "lucide-react";
import { useState } from "react";

// Just paste your full YouTube URL here - it will extract the video ID automatically
const YOUTUBE_URL = "https://youtu.be/D_KSR3S6W8I?si=KmI42d5-ugQUuByF";
const VIDEO_TITLE = "My Brand Video";
const CHANNEL_URL = "https://youtube.com/@cloudwithstephen";

// Extract video ID from various YouTube URL formats
const getYouTubeId = (url: string): string => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return url;
};

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(YOUTUBE_URL);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section id="videos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block font-mono text-sm text-primary mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              ▶ Featured Video
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="gradient-text">Watch</span> & Learn
            </h2>
          </motion.div>

          {/* Video Player */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-2xl">
              <div className="relative aspect-video">
                {!isPlaying ? (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={thumbnailUrl}
                      alt={VIDEO_TITLE}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (
                          e.target as HTMLImageElement
                        ).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex items-center justify-center">
                      <motion.button
                        onClick={() => setIsPlaying(true)}
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Pulse rings */}
                        <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                        <span className="absolute -inset-4 rounded-full bg-primary/20 animate-pulse" />

                        {/* Play button */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                          <Play
                            className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1"
                            fill="currentColor"
                          />
                        </div>
                      </motion.button>
                    </div>

                    {/* Video Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        {VIDEO_TITLE}
                      </h3>
                    </div>
                  </>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={VIDEO_TITLE}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] text-white font-medium shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Youtube className="w-5 h-5" />
              Subscribe
            </motion.a>

            <motion.a
              href={`https://youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 text-foreground font-medium border border-border hover:bg-secondary transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Watch on YouTube
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
