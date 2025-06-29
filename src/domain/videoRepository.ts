export interface VideoRepository {
  list(): Promise<import('./video').Video[]>;
}
