import type { LiveStream } from '@/domain/liveStream';
import type { LiveStreamRepository } from '@/domain/liveStreamRepository';

const API_BASE = 'https://livepeer.studio/api';

export class LivepeerLiveStreamRepository implements LiveStreamRepository {
  private readonly apiKey = process.env.LIVEPEER_API_KEY;

  private async fetchFromLivepeer(path: string) {
    if (!this.apiKey) {
      throw new Error('LIVEPEER_API_KEY is not set');
    }

    const res = await fetch(`${API_BASE}${path}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Livepeer API error: ${res.status}`);
    }

    return res.json();
  }

  private toStream(stream: Record<string, unknown>): LiveStream {
    const data = stream as {
      id?: string;
      name?: string;
      isActive?: boolean;
      playbackUrl?: string;
    };
    return {
      id: data.id ?? '',
      title: data.name ?? 'Untitled',
      isLive: data.isActive ?? false,
      playbackUrl: data.playbackUrl ?? '',
    };
  }

  async list(): Promise<LiveStream[]> {
    const data = await this.fetchFromLivepeer('/stream');
    return Array.isArray(data) ? data.map(this.toStream) : [];
  }

  async getById(id: string): Promise<LiveStream | null> {
    const stream = await this.fetchFromLivepeer(`/stream/${id}`);
    if (!stream) return null;
    return this.toStream(stream);
  }
}
