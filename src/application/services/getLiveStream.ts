import type { LiveStream } from '@/domain/liveStream';
import type { LiveStreamRepository } from '@/domain/liveStreamRepository';
import { MockLiveStreamRepository } from '@/infrastructure/mockLiveStreamRepository';

export async function getLiveStream(
  id: string,
  repo: LiveStreamRepository = new MockLiveStreamRepository()
): Promise<LiveStream | null> {
  return repo.getById(id);
}
