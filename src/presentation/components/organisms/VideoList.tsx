import type { Video } from '@/domain/video';
import { VideoCard } from '@/presentation/components/molecules/VideoCard';

export interface VideoListProps {
  videos: Video[];
}

export function VideoList({ videos }: VideoListProps) {
  return (
    <div className="grid gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
