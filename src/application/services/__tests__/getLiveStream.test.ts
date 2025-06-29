import { getLiveStream } from '../getLiveStream';

describe('getLiveStream', () => {
  it('returns a single live stream by id', async () => {
    const stream = await getLiveStream('live1');
    expect(stream).not.toBeNull();
    expect(stream?.id).toBe('live1');
  });
});
