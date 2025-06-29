import Link from 'next/link';

import type { LiveStream } from '@/domain/liveStream';
import { Card } from '@/presentation/components/ui/card';

export interface LiveStreamCardProps {
  stream: LiveStream;
}

export function LiveStreamCard({ stream }: LiveStreamCardProps) {
  return (
    <Card className="p-4">
      <Link href={`/live/${stream.id}`} className="space-y-1 block">
        <h2 className="font-semibold text-lg">{stream.title}</h2>
        <p className="text-sm text-muted-foreground">
          {stream.isLive ? 'Live now' : 'Offline'}
        </p>
      </Link>
    </Card>
  );
}
