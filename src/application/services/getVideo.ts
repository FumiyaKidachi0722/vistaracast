import type { Video } from '@/domain/video';
import type { VideoRepository } from '@/domain/videoRepository';
import { MockVideoRepository } from '@/infrastructure/mockVideoRepository';

export async function getVideo(
  id: string,
  repo: VideoRepository = new MockVideoRepository()
): Promise<Video | null> {
  return repo.getById(id);
}
