export interface Post {
  id: number;
  name: string;
  email: string;
  address: string;
}

export type PostQuery =
  | {
      data: Post[];
      loading: false;
      error?: any;
    }
  | {
      data: undefined;
      loading: true;
      error: undefined;
    };
