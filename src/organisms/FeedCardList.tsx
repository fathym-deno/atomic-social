import { Action, ActionProps, ComponentChildren, JSX } from "../src.deps.ts";

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
