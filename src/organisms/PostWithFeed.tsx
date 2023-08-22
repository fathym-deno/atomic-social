import { ComponentChildren, JSX } from "preact";
import { FeedCardList, FeedCardListProps } from "./FeedCardList";
import { PostForm, PostFormProps } from "./PostForm.tsx";

export interface PostWithFeedProps extends JSX.HTMLAttributes<HTMLDivElement> {
  feedCardListProps: FeedCardListProps;
  postFormProps: PostFormProps;
}

export function PostWithFeed(props: PostWithFeedProps): JSX.Element {
  const { feedCardListProps, postFormProps, ...divProps } = props;

  return (
    <div {...divProps} class={classSet("flex", "flex-col")}>
      <PostForm {...postFormProps} />
      <FeedCardList {...feedCardListProps} />
    </div>
  );
}