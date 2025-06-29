import Link from 'next/link';

import { getVideos } from '@/application/services/getVideos';
import { VideoList } from '@/presentation/components/organisms/VideoList';
import { Button } from '@/presentation/components/ui/button';

export default async function Home() {
  const videos = await getVideos();

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">VistaraCast</h1>
        <p className="text-muted-foreground">
          Latest videos from the community
        </p>
      </header>

      <VideoList videos={videos} />

      <div className="flex justify-center">
        <Button asChild>
          <Link href="/videos">Browse all videos</Link>
        </Button>
      </div>
    </main>
  );
}
