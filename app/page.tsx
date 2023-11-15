import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRightFromCircle, Github } from "lucide-react";
import projects from "./projects.json";

const githubURL = "https://github.com/sunls24";

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
          href={githubURL}
          className="flex items-end rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Github strokeWidth={1.8} size={20} />
          <span className="ml-1 leading-none underline underline-offset-2">
            sunls24
          </span>
        </a>
      </div>
      <div>
        <h3 className="pb-2 text-lg font-medium">Projects</h3>
        {projects.map((value, index) => {
          return (
            <div key={index}>
              <a
                target="_blank"
                href={`${githubURL}/${value.name}`}
                className="mt-4 flex w-fit items-end leading-none underline underline-offset-4 transition-all hover:font-semibold"
              >
                {value.name}
                <ArrowUpRightFromCircle
                  size={14}
                  strokeWidth={2.3}
                  className="ml-1"
                />
              </a>
              <div className="mt-2 text-sm text-muted-foreground">
                {value.desc}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
