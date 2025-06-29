import type { LiveStream } from '@/domain/liveStream';
import type { LiveStreamRepository } from '@/domain/liveStreamRepository';
import { MockLiveStreamRepository } from '@/infrastructure/mockLiveStreamRepository';

export async function getLiveStreams(
  repo: LiveStreamRepository = new MockLiveStreamRepository()
): Promise<LiveStream[]> {
  return repo.list();
}
