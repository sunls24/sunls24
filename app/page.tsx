import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRightFromCircle, Github } from "lucide-react";
import config from "./config.json";

export default function Home() {
  return (
    <main className="mx-auto w-[90%] max-w-3xl pt-10">
      <div className="mb-6 flex flex-col items-center border-b pb-4 sm:flex-row sm:items-end">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/icon.jpg" />
          <AvatarFallback>LS</AvatarFallback>
        </Avatar>
        <span className="text-xl font-medium sm:ml-6">
          Keep It Simple, Stupid.
        </span>
        <div className="flex-1" />
        <a
          target="_blank"
          href={config.github}
          className="flex items-end rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Github strokeWidth={1.8} size={20} />
          <span className="ml-1 leading-none underline underline-offset-2">
            sunls24
          </span>
        </a>
      </div>
      <div className="mb-6">
        <h3 className="pb-2 text-lg font-medium">Projects</h3>
        {config.projects.map((value, index) => {
          return (
            <div key={index} className="group w-fit">
              <a
                target="_blank"
                href={`${config.github}/${value.name}`}
                className="mt-4 flex w-fit items-end leading-none underline underline-offset-4 transition-transform group-hover:-translate-y-0.5"
              >
                {value.name}
                <ArrowUpRightFromCircle
                  size={14}
                  strokeWidth={2.3}
                  className="ml-1"
                />
              </a>
              <div className="mt-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {value.desc}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-6">
        <h3 className="pb-2 text-lg font-medium">About me</h3>
        <blockquote className="mt-4 whitespace-break-spaces border-l-4 pl-4 text-muted-foreground">
          {config.about}
        </blockquote>
      </div>
    </main>
  );
}
