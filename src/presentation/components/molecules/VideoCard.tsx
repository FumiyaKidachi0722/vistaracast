import type { Video } from '@/domain/video';
import { Card } from '@/presentation/components/ui/card';

export interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="p-4">
      <h2 className="font-semibold text-lg">{video.title}</h2>
      <p className="text-sm text-muted-foreground">{video.description}</p>
    </Card>
  );
}
