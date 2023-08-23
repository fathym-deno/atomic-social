import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";
import { FeedCard, FeedCardProps } from "../../src/organisms/FeedCard.tsx";

describe("FeedCard Tests", () => {
  describe("Render FeedCard", () => {
    const feedCardProps: FeedCardProps = {
      username: "Test Author",
      timestamp: "2022-01-01",
      avatar: "https://github.com/mcgear.png",
      children: <h1>Hey</h1>,
    };

    const html = render(<FeedCard {...feedCardProps} />);

    console.log(html);

    it("should render the avatar", () => {
      assert(html.includes("https://github.com/mcgear.png"));
    });

    it("should render the author", () => {
      assert(html.includes("Test Author"));
    });

    it("should render the date", () => {
      assert(html.includes("2022-01-01"));
    });

    it("should render the children", () => {
      assert(html.includes("<h1>Hey</h1>"));
    });
  });
});
