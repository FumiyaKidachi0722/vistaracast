import { getVideos } from '../getVideos';

describe('getVideos', () => {
  it('returns a list of videos', async () => {
    const videos = await getVideos();
    expect(videos.length).toBeGreaterThan(0);
  });
});
