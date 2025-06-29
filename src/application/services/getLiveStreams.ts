import type { LiveStream } from '@/domain/liveStream';
import type { LiveStreamRepository } from '@/domain/liveStreamRepository';
import { MockLiveStreamRepository } from '@/infrastructure/mockLiveStreamRepository';
import { LivepeerLiveStreamRepository } from '@/infrastructure/livepeerLiveStreamRepository';

export async function getLiveStreams(
  repo: LiveStreamRepository = process.env.LIVEPEER_API_KEY
    ? new LivepeerLiveStreamRepository()
    : new MockLiveStreamRepository()
): Promise<LiveStream[]> {
  return repo.list();
}
