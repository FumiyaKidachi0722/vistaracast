import type { Video } from '@/domain/video';
import type { VideoRepository as IVideoRepository } from '@/domain/videoRepository';

const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Sample Video 1',
    description: 'This is a sample video.',
    url: 'https://example.com/video1.mp4',
  },
  {
    id: '2',
    title: 'Sample Video 2',
    description: 'Another sample video.',
    url: 'https://example.com/video2.mp4',
  },
];

export class MockVideoRepository implements IVideoRepository {
  async list(): Promise<Video[]> {
    return mockVideos;
  }
}
