import { useEffect, useState } from "react";

import { Post, PostQuery } from "../models";
import { API } from "./instance";

export const useGetPosts = (ids?: number[], names?: string[]): PostQuery => {
  const [posts, setPosts] = useState<Post[] | undefined>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await API.get<Post[]>("/posts");
        if (ids) {
          data = data.filter(({ id }) => ids.includes(id));
        }
        if (names) {
          data = data.filter(({ name }) => names.includes(name));
        }
        setPosts(data);
      } catch (error) {
        setError(error);
      }
    })();

    return () => {
      setPosts(undefined);
      setError(undefined);
    };
  }, [ids, names]);

  return {
    data: posts,
    error,
    loading: posts === undefined && error === undefined,
  } as PostQuery;
};
