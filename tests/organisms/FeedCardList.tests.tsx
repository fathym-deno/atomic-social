import { assert, describe, it, render } from "../test.deps.ts";
import {
  FeedCardList,
  FeedCardListProps,
} from "../../src/organisms/FeedCardList.tsx";
import { FeedCard } from "../../mod.ts";

describe("FeedCardList Tests", () => {
  describe("Render FeedCardList", () => {
    const feedCardListProps: FeedCardListProps = {
      cards: (
        <>
          <FeedCard
            {...{
              title: <h2>Test Author 1</h2>,
              subtitle: <p>2022-01-01</p>,
              avatar: "https://github.com/mcgear.png",
              children: <h1>Hey 1</h1>,
            }}
          />

          <FeedCard
            {...{
              title: <h2>Test Author 2</h2>,
              subtitle: <p>2022-01-02</p>,
              avatar: "https://github.com/mcgear.png",
              children: <h1>Hey 2</h1>,
            }}
          />
        </>
      ),
    };

    const html = render(<FeedCardList {...feedCardListProps} />);

    console.log(html);

    it("should render the first card's avatar", () => {
      assert(html.includes("https://github.com/mcgear.png"));
    });

    it("should render the first card's title", () => {
      assert(html.includes("<h2>Test Author 1</h2>"));
    });

    it("should render the first card's subtitle", () => {
      assert(html.includes("<p>2022-01-01</p>"));
    });

    it("should render the first card's children", () => {
      assert(html.includes("<h1>Hey 1</h1>"));
    });

    it("should render the second card's avatar", () => {
      assert(html.includes("https://github.com/mcgear.png"));
    });

    it("should render the second card's title", () => {
      assert(html.includes("<h2>Test Author 2</h2>"));
    });

    it("should render the second card's subtitle", () => {
      assert(html.includes("<p>2022-01-02</p>"));
    });

    it("should render the second card's children", () => {
      assert(html.includes("<h1>Hey 2</h1>"));
    });
  });
});
