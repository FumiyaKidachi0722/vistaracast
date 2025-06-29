import type { Video } from '@/domain/video';
import type { VideoRepository } from '@/domain/videoRepository';
import { MockVideoRepository } from '@/infrastructure/mockVideoRepository';
import { LivepeerVideoRepository } from '@/infrastructure/livepeerVideoRepository';

export async function getVideos(
  repo: VideoRepository = process.env.LIVEPEER_API_KEY
    ? new LivepeerVideoRepository()
    : new MockVideoRepository()
): Promise<Video[]> {
  return repo.list();
}
