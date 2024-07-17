import {
  Action,
  ActionGroup,
  ActionProps,
  classSet,
  ComponentChildren,
  JSX,
  MenuButton,
  MenuButtonStyleTypes,
} from "../src.deps.ts";

export interface ProfileDisplayProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  username: string;
  avatar: string;
  abstract: string;
  information: { Icon: ComponentChildren; Details: string }[];
  primaryAction: ActionProps;
  actions?: ActionProps[] | ComponentChildren;
}

export function ProfileDisplay(props: ProfileDisplayProps): JSX.Element {
  const actions = Array.isArray(props.actions) ? props.actions : undefined;

  return (
    <div class={classSet(["-:bg-white -:rounded-lg -:shadow-md -:p-4"], props)}>
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
          <div class="flex items-center mb-2 flex-wrap" key={index}>
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
                <Action
                  key={index}
                  {...action}
                />
              ))}
          </>
        </ActionGroup>
      </div>

      <div class="mt-4 flex flex-col md:flex-row">
        <MenuButton toggleChildren="…" menuStyle={MenuButtonStyleTypes.Popover}>
          {!actions && props.actions}
          {actions &&
            actions.map((action, index) => <Action key={index} {...action} />)}
        </MenuButton>

        <Action class="ml-2" {...props.primaryAction} />
      </div>
    </div>
  );
}
