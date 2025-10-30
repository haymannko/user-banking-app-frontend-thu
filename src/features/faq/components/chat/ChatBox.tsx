import { cn } from "@/lib/utils";

type ChatBoxProps = {
  text: string;
  time: string;
  isSender?: boolean;
};

function ChatBox({ text, time, isSender = false }: ChatBoxProps) {
  return (
    <div
      className={cn("w-full flex", isSender ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "space-x-3 w-2/3 my-3",
          isSender ? "flex justify-end col-start-2" : "flex justify-start"
        )}
      >
        <div
          className={cn(
            "border p-3 w-fit max-w-full rounded-lg rounded-b-lg",
            isSender
              ? "bg-primary border-primary text-white rounded-r-none"
              : "border-primary text-primary rounded-l-none"
          )}
        >
          <div className="flex items-end gap-2 flex-wrap">
            <p className="text-sm break-words">{text}</p>
            <span
              className={cn(
                "text-xs whitespace-nowrap",
                isSender ? "text-white/80" : "text-gray-500"
              )}
            >
              {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
