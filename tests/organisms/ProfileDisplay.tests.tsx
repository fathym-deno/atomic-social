import {
  afterEach,
  assert,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";
import { ProfileDisplay, ProfileDisplayProps } from "../../src/organisms/ProfileDisplay.tsx";

describe("ProfileDisplay Tests", () => {
  describe("Render ProfileDisplay", () => {
    const profileDisplayProps: ProfileDisplayProps = {
      username: "Test User",
      avatar: "https://github.com/testuser.png"
    };

    const html = render(<ProfileDisplay {...profileDisplayProps} />);

    console.log(html);

    it("should render the avatar", () => {
      assert(html.includes("https://github.com/testuser.png"));
    });

    it("should render the username", () => {
      assert(html.includes("Test User"));
    });
  });
});
