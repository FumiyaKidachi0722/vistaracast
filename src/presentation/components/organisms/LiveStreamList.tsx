import type { LiveStream } from '@/domain/liveStream';
import { LiveStreamCard } from '@/presentation/components/molecules/LiveStreamCard';

export interface LiveStreamListProps {
  streams: LiveStream[];
}

export function LiveStreamList({ streams }: LiveStreamListProps) {
  return (
    <div className="grid gap-4 p-4">
      {streams.map((stream) => (
        <LiveStreamCard key={stream.id} stream={stream} />
      ))}
    </div>
  );
}
