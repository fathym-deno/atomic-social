import { classSet, ComponentChildren, JSX } from "../../src.deps.ts";
import { Action, ActionProps } from "../../atoms/_exports.tsx";
export interface PostFormProps extends JSX.HTMLAttributes<HTMLFormElement> {
  avatar: string;
}
export function PostForm(props: PostFormProps): JSX.Element {
  return (
    <form
      {...props}
      class={classSet(props, "bg-white rounded-lg shadow-md p-4")}
    >
      <div class="flex items-center">
        <img
          src={props.avatar}
          class="w-10 h-10 rounded-full mr-2"
          alt="User Avatar"
        />
        <textarea
          class="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your post..."
        >
        </textarea>
        <div class="flex justify-end">
          <Action
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Post
          </Action>
        </div>
      </div>
    </form>
  );
}