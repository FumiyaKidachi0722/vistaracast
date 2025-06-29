import type { LiveStream } from './liveStream';

export interface LiveStreamRepository {
  list(): Promise<LiveStream[]>;
  getById(id: string): Promise<LiveStream | null>;
}
