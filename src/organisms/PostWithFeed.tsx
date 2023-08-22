import { ComponentChildren, JSX } from "preact";
import { FeedCardList, FeedCardListProps } from "./FeedCardList.tsx";
import { PostForm, PostFormProps } from "./PostForm.tsx";
import { classSet } from "../src.deps.ts";

export interface PostWithFeedProps extends JSX.HTMLAttributes<HTMLDivElement> {
  feedCardListProps: FeedCardListProps;
  postFormProps: PostFormProps;
}

export function PostWithFeed(props: PostWithFeedProps): JSX.Element {
  const { feedCardListProps, postFormProps, ...divProps } = props;

  return (
    <div {...divProps} class={classSet(props, "flex", "flex-col")}>
      <PostForm {...postFormProps} />
      <FeedCardList {...feedCardListProps} />
    </div>
  );
}
