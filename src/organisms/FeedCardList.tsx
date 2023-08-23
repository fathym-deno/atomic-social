import { ComponentChildren, JSX } from "preact";
import { Action, ActionGroup, ActionProps, classSet } from "../src.deps.ts";
import { FeedCard, FeedCardProps } from "./FeedCard.tsx";

export interface FeedCardListProps extends JSX.HTMLAttributes<HTMLDivElement> {
  cards: ComponentChildren;
  loadMore?: ActionProps;
}

export function FeedCardList(props: FeedCardListProps): JSX.Element {
  const { cards, loadMore, ...rest } = props;

  return (
    <div {...rest}>
      {cards}

      {loadMore && (
        <div class="flex justify-center">
          <Action {...loadMore} />
        </div>
      )}
    </div>
  );
}
