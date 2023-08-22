import { ComponentChildren, JSX } from "preact";
import { useState } from "preact/hooks";
import { Action, classSet } from "../src.deps.ts";

export interface PostFormProps extends JSX.HTMLAttributes<HTMLFormElement> {
  avatar: string;
  value?: string;
}

export function PostForm(props: PostFormProps): JSX.Element {
  const [inputValue, setInputValue] = useState(props.value || "");

  const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const maxLength = 400;

    if (value.length > maxLength) {
      input.value = value.slice(0, maxLength);
    }

    setInputValue(value);
  };

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
          onInput={handleInput}
          maxLength={400}
          value={inputValue}
        >
        </textarea>
        <div class="flex justify-end ml-2">
          <Action
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Post
          </Action>
        </div>
      </div>
      <div class="text-gray-500 text-right mt-2">
        <span>{400 - inputValue.length}</span> characters remaining
      </div>
    </form>
  );
}
