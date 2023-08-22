import { ComponentChildren, JSX } from "preact";
import { Action, ActionGroup, ActionProps, MenuButton, MenuButtonProps } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.tsx";

export interface ProfileDisplayProps extends JSX.HTMLAttributes<HTMLDivElement> {
  username: string;
  avatar: string;
  abstract: string;
  information: { Icon: ComponentChildren; Details: string }[];
  primaryAction: JSX.Element;
  actions?: ActionProps[] | ComponentChildren;
}

export function ProfileDisplay(props: ProfileDisplayProps): JSX.Element {
  const actions = Array.isArray(props.actions) ? props.actions : undefined;

  return (
    <div class={classSet(props, "bg-white rounded-lg shadow-md p-4")}>
      <div class="flex items-center">
        <img
          src={props.avatar}
          class="w-10 h-10 rounded-full mr-2"
          alt={props.username}
        />
        <div class="flex flex-col">
          <span class="font-bold">{props.username}</span>
          <span class="text-gray-500 text-sm">{props.abstract}</span>
        </div>
      </div>

      <div class="mt-4">
        {props.information.map((info, index) => (
          <div class="flex items-center mb-2" key={index}>
            {info.Icon}
            <span class="ml-2">{info.Details}</span>
          </div>
        ))}
      </div>

      <div class="flex justify-center mt-4">
        <ActionGroup class="flex-grow flex justify-center">
          <>
            {!actions && props.actions}
            {actions &&
              actions.map((action, index) => (
                <Action key={index} {...action} />
              ))}
          </>
        </ActionGroup>
      </div>

      <div class="mt-4">
        <MenuButton
          toggleChildren={<Action {...props.primaryAction} />}
          menuStyle={MenuButtonStyleTypes.Popover}
        >
          {actions &&
            actions.map((action, index) => (
              <Action key={index} {...action} />
            ))}
        </MenuButton>
      </div>
    </div>
  );
}
