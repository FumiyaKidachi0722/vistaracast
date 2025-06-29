import { getVideo } from '../getVideo';

describe('getVideo', () => {
  it('returns a single video by id', async () => {
    const video = await getVideo('1');
    expect(video).not.toBeNull();
    expect(video?.id).toBe('1');
  });
});
