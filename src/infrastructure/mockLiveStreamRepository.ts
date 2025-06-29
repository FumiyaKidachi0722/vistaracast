import type { LiveStream } from '@/domain/liveStream';
import type { LiveStreamRepository as ILiveStreamRepository } from '@/domain/liveStreamRepository';

const mockLiveStreams: LiveStream[] = [
  {
    id: 'live1',
    title: 'Live Coding Session',
    isLive: true,
    playbackUrl: 'https://example.com/live1.m3u8',
  },
  {
    id: 'live2',
    title: 'Music Concert',
    isLive: false,
    playbackUrl: 'https://example.com/live2.m3u8',
  },
];

export class MockLiveStreamRepository implements ILiveStreamRepository {
  async list(): Promise<LiveStream[]> {
    return mockLiveStreams;
  }

  async getById(id: string): Promise<LiveStream | null> {
    return mockLiveStreams.find((s) => s.id === id) ?? null;
  }
}
