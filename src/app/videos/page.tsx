import { getVideos } from '@/application/services/getVideos';
import { VideoList } from '@/presentation/components/organisms/VideoList';

export default async function VideosPage() {
  const videos = await getVideos();

  return <VideoList videos={videos} />;
}
