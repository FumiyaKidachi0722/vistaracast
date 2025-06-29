import type { Video } from './video';

export interface VideoRepository {
  list(): Promise<Video[]>;
  getById(id: string): Promise<Video | null>;
}
