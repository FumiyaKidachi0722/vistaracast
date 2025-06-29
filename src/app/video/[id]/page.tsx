import { notFound } from 'next/navigation';

import { getVideo } from '@/application/services/getVideo';

export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  const video = await getVideo(params.id);

  if (!video) {
    notFound();
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{video.title}</h1>
      <video src={video.url} controls className="w-full" />
      <p className="text-muted-foreground">{video.description}</p>
    </main>
  );
}
