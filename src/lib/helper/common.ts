import axios from "axios";

export const throwError = (error: any) => {
  if (axios.isAxiosError(error)) {
    throw new Error(error.response?.data?.message || error.message);
  }

  throw new Error(String(error));
};

export const scrollToBottom = (
  container: HTMLElement | null,
  smooth = false
) => {
  if (container?.children.length) {
    const lastElement = container?.lastChild as HTMLElement;

    lastElement?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "end",
      inline: "nearest",
    });
  }
};
