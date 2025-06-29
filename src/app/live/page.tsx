import { getLiveStreams } from '@/application/services/getLiveStreams';
import { LiveStreamList } from '@/presentation/components/organisms/LiveStreamList';

export default async function LivePage() {
  const streams = await getLiveStreams();

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Live Streams</h1>
      </header>

      <LiveStreamList streams={streams} />
    </main>
  );
}
