import {
  afterEach,
  assert,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";
import { PostWithFeed, PostWithFeedProps } from "../../src/organisms/PostWithFeed.tsx";

describe("PostWithFeed Tests", () => {
  describe("Render PostWithFeed", () => {
    const postWithFeedProps: PostWithFeedProps = {
      feedCardListProps: {
        cards: [
          {
            username: "Test Author 1",
            timestamp: "2022-01-01",
            avatar: "https://github.com/mcgear.png",
            children: <h1>Hey 1</h1>,
          },
          {
            username: "Test Author 2",
            timestamp: "2022-01-02",
            avatar: "https://github.com/mcgear.png",
            children: <h1>Hey 2</h1>,
          },
        ],
      },
      postFormProps: {
        onSubmit: () => {},
        avatar: "https://github.com/mcgear.png",
      },
    };

    const html = render(<PostWithFeed {...postWithFeedProps} />);

    console.log(html);

    it("should render the first card's avatar", () => {
      assert(html.includes("https://github.com/mcgear.png"));
    });

    it("should render the first card's author", () => {
      assert(html.includes("Test Author 1"));
    });

    it("should render the first card's date", () => {
      assert(html.includes("2022-01-01"));
    });

    it("should render the first card's children", () => {
      assert(html.includes("<h1>Hey 1</h1>"));
    });

    it("should render the second card's avatar", () => {
      assert(html.includes("https://github.com/mcgear.png"));
    });

    it("should render the second card's author", () => {
      assert(html.includes("Test Author 2"));
    });

    it("should render the second card's date", () => {
      assert(html.includes("2022-01-02"));
    });

    it("should render the second card's children", () => {
      assert(html.includes("<h1>Hey 2</h1>"));
    });
  });
});
