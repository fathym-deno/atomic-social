import { ComponentChildren, JSX } from "preact";
import { FeedCard, FeedCardProps } from "./FeedCard.tsx";
import { PostForm, PostFormProps } from "./PostForm.tsx";

export interface PostWithFeedProps extends JSX.HTMLAttributes<HTMLDivElement> {
  feedCardProps: FeedCardProps;
  postFormProps: PostFormProps;
}

export function PostWithFeed(props: PostWithFeedProps): JSX.Element {
  const { feedCardProps, postFormProps, ...divProps } = props;

  return (
    <div {...divProps}>
      <PostForm {...postFormProps} />
      <FeedCard {...feedCardProps} />
    </div>
  );
}
