import Link from 'next/link';

import type { Video } from '@/domain/video';
import { Card } from '@/presentation/components/ui/card';

export interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="p-4">
      <Link href={`/video/${video.id}`} className="space-y-1 block">
        <h2 className="font-semibold text-lg">{video.title}</h2>
        <p className="text-sm text-muted-foreground">{video.description}</p>
      </Link>
    </Card>
  );
}
