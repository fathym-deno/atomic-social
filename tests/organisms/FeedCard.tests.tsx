import { afterEach, assert, assertEquals, beforeEach, describe, it, render } from "../test.deps.ts";
import { FeedCard } from "../../src/organisms/FeedCard.tsx";

describe("FeedCard Tests", () => {
  describe("Render FeedCard", () => {
    const feedCardProps = {
      title: "Test Title",
      content: "Test Content",
      author: "Test Author",
      date: "2022-01-01",
    };

    const html = render(<FeedCard {...feedCardProps} />);

    it("should render the title", () => {
      assert(html.includes("Test Title"));
    });

    it("should render the content", () => {
      assert(html.includes("Test Content"));
    });

    it("should render the author", () => {
      assert(html.includes("Test Author"));
    });

    it("should render the date", () => {
      assert(html.includes("2022-01-01"));
    });
  });
});