import { ComponentChildren, JSX } from "preact";
import { Action, ActionGroup, ActionProps, classSet } from "../src.deps.ts";

export interface FeedCardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title: ComponentChildren;
  avatar: string | ComponentChildren;
  subtitle: ComponentChildren;
  children: ComponentChildren;
  actions?: ActionProps[] | ComponentChildren;
}

export function FeedCard(props: FeedCardProps): JSX.Element {
  const actions = Array.isArray(props.actions) ? props.actions : undefined;
  return (
    <div class={classSet(props, "bg-white rounded-lg shadow-md p-4")}>
      <div class="flex items-center">
        {typeof props.avatar === 'string' ?
          <img
            src={props.avatar}
            class="w-10 h-10 rounded-full mr-2"
            alt={props.title as string}
          /> : props.avatar
        }
        <div class="flex flex-col">
          <div class="font-bold">{props.title}</div>
          <div class="text-gray-500 text-sm">{props.subtitle}</div>
        </div>
      </div>
      {props.children}
      <div class="flex justify-center align-middle mt-4">
        <ActionGroup class="flex-grow flex justify-center align-middle">
          <>
            {!actions && props.actions}
            {actions &&
              actions.map((action, index) => (
                <Action
                  key={index}
                  {...action}
                />
              ))}
          </>
        </ActionGroup>
      </div>
    </div>
  );
}
