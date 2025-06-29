import type { Video } from '@/domain/video';
import type { VideoRepository } from '@/domain/videoRepository';
import { MockVideoRepository } from '@/infrastructure/mockVideoRepository';

export async function getVideos(
  repo: VideoRepository = new MockVideoRepository()
): Promise<Video[]> {
  return repo.list();
}
