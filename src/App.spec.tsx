import { render, screen } from "@testing-library/react";

import App from "./App";
import { PostQuery } from "./models";
import { useGetPosts } from "./services/posts";
jest.mock("./services/posts");

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

  render(<App />);

  const posts = screen.getAllByText(/john/i);
  expect(posts.length).toBe(2);
  posts.forEach((post) => {
    expect(post).toBeInTheDocument();
  });
});
