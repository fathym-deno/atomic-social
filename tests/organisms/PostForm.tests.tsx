import {
  afterEach,
  assert,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";
import { PostForm, PostFormProps } from "../../src/organisms/PostForm.tsx";

describe("PostForm Tests", () => {
  describe("Render PostForm", () => {
    const postFormProps: PostFormProps = {
      onSubmit: () => {},
      avatar: "https://example.com/avatar.png",
    };

    const html = render(<PostForm {...postFormProps} />);

    console.log(html);

    it("should render the form", () => {
      assert(html.includes("<form"));
    });

    it("should render the input field", () => {
      assert(html.includes("<textarea"));
    });

    it("should render the submit button", () => {
      assert(html.includes("<button"));
    });
  });
});
