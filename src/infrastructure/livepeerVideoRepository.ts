import type { Video } from '@/domain/video';
import type { VideoRepository } from '@/domain/videoRepository';

const API_BASE = 'https://livepeer.studio/api';

export class LivepeerVideoRepository implements VideoRepository {
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

  private toVideo(asset: Record<string, unknown>): Video {
    const data = asset as {
      id?: string;
      name?: string;
      playbackUrl?: string;
      downloadUrl?: string;
      meta?: { description?: string };
    };
    return {
      id: data.id ?? '',
      title: data.name ?? 'Untitled',
      description: data.meta?.description ?? '',
      url: data.playbackUrl ?? data.downloadUrl ?? '',
    };
  }

  async list(): Promise<Video[]> {
    const data = await this.fetchFromLivepeer('/asset');
    return Array.isArray(data) ? data.map(this.toVideo) : [];
  }

  async getById(id: string): Promise<Video | null> {
    const asset = await this.fetchFromLivepeer(`/asset/${id}`);
    if (!asset) return null;
    return this.toVideo(asset);
  }
}
