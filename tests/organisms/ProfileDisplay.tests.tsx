import { h } from "preact";
import { render } from "@testing-library/preact";
import { ProfileDisplay, ProfileDisplayProps } from "../../src/organisms/ProfileDisplay";

describe("ProfileDisplay", () => {
  it("renders correctly", () => {
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

    const { container } = render(<ProfileDisplay {...profileDisplayProps} />);

    // Assert your expectations here
  });
});