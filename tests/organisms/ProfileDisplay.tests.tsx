import {
  afterEach,
  assert,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";
import {
  ProfileDisplay,
  ProfileDisplayProps,
} from "../../src/organisms/ProfileDisplay.tsx";

describe("ProfileDisplay Tests", () => {
  describe("Render ProfileDisplay", () => {
    const profileDisplayProps: ProfileDisplayProps = {
      username: "JohnDoe",
      avatar: "https://example.com/avatar.jpg",
      abstract: "Software Engineer",
      information: [
        { Icon: <span>📞</span>, Details: "123-456-7890" },
        { Icon: <span>📧</span>, Details: "john.doe@example.com" },
      ],
      primaryAction: { label: "Follow", onClick: () => {} },
    };

    const html = render(<ProfileDisplay {...profileDisplayProps} />);

    console.log(html);

    it("should render the username", () => {
      assert(html.includes("JohnDoe"));
    });

    it("should render the avatar", () => {
      assert(html.includes("https://example.com/avatar.jpg"));
    });

    it("should render the abstract", () => {
      assert(html.includes("Software Engineer"));
    });

    it("should render the phone number", () => {
      assert(html.includes("123-456-7890"));
    });

    it("should render the email", () => {
      assert(html.includes("john.doe@example.com"));
    });

    it("should render the primary action button", () => {
      assert(html.includes("Follow"));
    });
  });
});
