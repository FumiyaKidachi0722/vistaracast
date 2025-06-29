import type { LiveStream } from '@/domain/liveStream';
import type { LiveStreamRepository } from '@/domain/liveStreamRepository';
import { MockLiveStreamRepository } from '@/infrastructure/mockLiveStreamRepository';
import { LivepeerLiveStreamRepository } from '@/infrastructure/livepeerLiveStreamRepository';

export async function getLiveStream(
  id: string,
  repo: LiveStreamRepository = process.env.LIVEPEER_API_KEY
    ? new LivepeerLiveStreamRepository()
    : new MockLiveStreamRepository()
): Promise<LiveStream | null> {
  return repo.getById(id);
}
