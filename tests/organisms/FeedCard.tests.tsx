import { assert, describe, it, render } from "../test.deps.ts";
import { FeedCard, FeedCardProps } from "../../src/organisms/FeedCard.tsx";

describe("FeedCard Tests", () => {
  describe("Render FeedCard", () => {
    const feedCardProps: FeedCardProps = {
      title: <h2>Test Author</h2>,
      subtitle: <p>2022-01-01</p>,
      avatar: "https://github.com/mcgear.png",
      children: <h1>Hey</h1>,
    };

    const html = render(<FeedCard {...feedCardProps} />);

    console.log(html);

    it("should render the avatar", () => {
      assert(html.includes("https://github.com/mcgear.png"));
    });

    it("should render the title", () => {
      assert(html.includes("<h2>Test Author</h2>"));
    });

    it("should render the subtitle", () => {
      assert(html.includes("<p>2022-01-01</p>"));
    });

    it("should render the children", () => {
      assert(html.includes("<h1>Hey</h1>"));
    });
  });
});
