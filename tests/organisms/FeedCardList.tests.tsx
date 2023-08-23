import {
  afterEach,
  assert,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";
import {
  FeedCardList,
  FeedCardListProps,
} from "../../src/organisms/FeedCardList.tsx";

describe("FeedCardList Tests", () => {
  describe("Render FeedCardList", () => {
    const feedCardListProps: FeedCardListProps = {
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
    };

    const html = render(<FeedCardList {...feedCardListProps} />);

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
