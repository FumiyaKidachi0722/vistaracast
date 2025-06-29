import { notFound } from 'next/navigation';

import { getLiveStream } from '@/application/services/getLiveStream';

export default async function LiveStreamPage({
  params,
}: {
  params: { id: string };
}) {
  const stream = await getLiveStream(params.id);

  if (!stream) {
    notFound();
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{stream.title}</h1>
      <video src={stream.playbackUrl} controls autoPlay className="w-full" />
      <p className="text-muted-foreground">
        {stream.isLive ? 'Live now' : 'Offline'}
      </p>
    </main>
  );
}
