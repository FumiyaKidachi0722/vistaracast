import { getLiveStreams } from '../getLiveStreams';

describe('getLiveStreams', () => {
  it('returns a list of live streams', async () => {
    const streams = await getLiveStreams();
    expect(streams.length).toBeGreaterThan(0);
  });
});
