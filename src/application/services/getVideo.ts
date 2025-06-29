import type { Video } from '@/domain/video';
import type { VideoRepository } from '@/domain/videoRepository';
import { MockVideoRepository } from '@/infrastructure/mockVideoRepository';
import { LivepeerVideoRepository } from '@/infrastructure/livepeerVideoRepository';

export async function getVideo(
  id: string,
  repo: VideoRepository = process.env.LIVEPEER_API_KEY
    ? new LivepeerVideoRepository()
    : new MockVideoRepository()
): Promise<Video | null> {
  return repo.getById(id);
}
