import { UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/external-link";
import { IconArrowRight } from "@/components/ui/icons";
import { useEffect, useState } from "react";

const exampleMessages = [
  {
    heading: "Explain technical concepts",
    message: `What is a "serverless function"?`,
  },
  {
    heading: "Summarize an article",
    message: "Summarize the following article for a 2nd grader: ",
  },
  {
    heading: "Draft an email",
    message: `Draft an email to my boss about the following: `,
  },
];

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, "setInput">) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 5 && hour <= 12) {
      setGreeting(`Good Morning`);
    } else if (hour >= 12 && hour < 17) {
      setGreeting(`Good Afternoon`);
    } else if (hour >= 17 && hour < 21) {
      setGreeting(`Good Evening`);
    } else {
      setGreeting(`Good night`);
    }
  }, []);
  return (
    <div className="mx-auto max-w-2xl px-4">
      {/* <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Beautifully designed components <br className="hidden sm:inline" />
        built with Radix UI and Tailwind CSS.
      </h1> */}

      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-1 place-items-center justify-center text-center text-2xl font-bold text-white md:text-3xl">
          {greeting} 👋
        </h1>
        <h1 className="font-semibol mb-2 justify-center text-center text-lg">
          Welcome to Zybernetix AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Introducing the newest and smartest way to chat - a mobile app powered
          by the advanced GPT-3 technology &nbsp;
          <ExternalLink href="https://w3dev.us">W3DEV</ExternalLink>
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
