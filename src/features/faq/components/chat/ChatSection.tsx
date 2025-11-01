import React, { useEffect, useRef, useState } from "react";
import ChatNav from "./ChatNav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { scrollToBottom } from "@/lib/helper/common";
import ChatBox from "./ChatBox";
import { ISOTimeFormat } from "@/lib/helper/dateFormat";
import ChatInput from "./ChatInput";

type ChatBotMessage = {
  type: "bot" | "user";
  message: string;
  time: Date;
};

function ChatSection() {
  const [messages, setMessages] = useState<ChatBotMessage[]>([]);
  const scrollContentRef = useRef(null);

  //   const { generate, isPending, isError } = useGenerate(setMessages);

  const sendMessage = (msg: string) => {
    const payLoad = {
      type: "user",
      message: msg,
      time: new Date(),
    };

    setMessages((prev: any) => {
      const newMsg = [...prev, payLoad];

      return newMsg;
    });

    // generate(msg);
  };

  useEffect(() => {
    scrollToBottom(scrollContentRef.current, true);
  }, [messages]);
  return (
    <div
      key="chat-window"
      className=" bg-white h-full shadow-xl rounded-lg border overflow-hidden flex flex-col"
    >
      <ChatNav data={{ name: "FAQ", logo: "" }} />
      <ScrollArea className="h-full max-h-[35vh]">
        <div
          ref={scrollContentRef}
          className="px-4 py-5 flex flex-col justify-end"
        >
          {/* {messages.length > 0 && (
                  <DateDivider label={ISODateFormat(new Date())} />
                )} */}
          <div className="flex flex-col w-full">
            <ChatBox
              text="👋 Hello! I’m your Banking Assistant. How can I help you today?"
              time={ISOTimeFormat(new Date())}
            />
            {messages.map((msg, i) =>
              msg.type === "user" ? (
                <ChatBox
                  key={i}
                  text={msg.message}
                  time={ISOTimeFormat(new Date())}
                  isSender
                />
              ) : (
                <ChatBox
                  key={i}
                  text={msg.message}
                  time={ISOTimeFormat(new Date())}
                />
              )
            )}
          </div>
          {/* {isPending && (
                  <motion.div
                    className="flex items-center gap-2 text-sm text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-t-2 border-gray-400 border-t-transparent animate-spin"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 1,
                      }}
                    />
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Hold on, bro...
                    </motion.span>
                  </motion.div>
                )} */}
          {/* {isError && <div className="text-red-500">Error occur</div>} */}
        </div>
      </ScrollArea>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatSection;
