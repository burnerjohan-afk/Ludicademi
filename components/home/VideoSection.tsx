import VideoPlayer from '@/components/VideoPlayer';

interface VideoSectionProps {
  videoSrc: string;
  posterSrc?: string;
  title?: string;
  description?: string;
  playLabel: string;
}

export default function VideoSection({
  videoSrc,
  posterSrc,
  title,
  description,
  playLabel,
}: VideoSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4 text-spacing-tight">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-neutral-gray leading-relaxed">{description}</p>
            )}
          </div>
        )}

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <VideoPlayer videoSrc={videoSrc} posterSrc={posterSrc} playLabel={playLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
