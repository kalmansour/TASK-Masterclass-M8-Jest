import renderer from "react-test-renderer";

import { PostQuery } from "../models";
import { useGetPosts } from "../services";
import PostList from "./PostList";

jest.mock("../services/posts");

test("renders posts", () => {
    const query: PostQuery = {
      data: [
        {
        id: 1,
        name: "Satheesh",
        email: "Sat@mail.com",
        address: "South street"
      },
      {
        id: 2,
        name: "John",
        email: "john@mail.com",
        address: "North street"
      },
    ],
      loading:false,
    };
  
    const hook = useGetPosts as jest.Mock;
    hook.mockReturnValue(query);

    const tree = renderer.create(<PostList/>).toJSON();
    expect(tree).toMatchSnapshot();

});

