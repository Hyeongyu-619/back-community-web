export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; // 공개 게시글, 비밀 게시글
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
