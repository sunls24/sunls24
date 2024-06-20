import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Github, Minus } from "lucide-react";
import Content from "@/components/content";
import Icon from "@/components/icon";
import { config } from "@/lib/config";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="mx-auto w-[90%] max-w-3xl pt-10">
      <div className="mb-6 flex flex-col items-center border-b pb-4 sm:flex-row sm:items-end">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/icon.jpg" />
          <AvatarFallback>shuai</AvatarFallback>
        </Avatar>
        <span className="text-xl font-medium sm:ml-6">
          Keep It Simple, Stupid.
        </span>
        <div className="flex-1" />
        <a
          target="_blank"
          href={config.github}
          className="group flex items-end rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Github strokeWidth={1.8} size={20} />
          <span className="ml-1 leading-none underline-offset-2 group-hover:underline">
            sunls24
          </span>
        </a>
      </div>
      <Content name="Projects">
        {config.projects.map((value, index) => {
          return (
            <div key={index} className="group w-fit">
              <a
                target="_blank"
                href={value.link}
                className="mt-4 flex w-fit items-end leading-none underline-offset-4 transition-transform group-hover:-translate-y-0.5 group-hover:underline"
              >
                <Icon name={value.icon} size={16} className="mr-1" />
                {value.name}
                <ExternalLink
                  size={15}
                  className="ml-10 opacity-0 transition duration-300 group-hover:block group-hover:-translate-x-8 group-hover:opacity-100"
                />
              </a>
              <div className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {value.desc}
              </div>
            </div>
          );
        })}
      </Content>
      <Content name="Links">
        {config.links.map((value, index) => {
          return (
            <div key={index} className="group mt-3 flex w-fit items-center">
              <a
                target="_blank"
                href={value.link}
                className="flex w-fit min-w-[82px] items-end leading-none underline-offset-4 transition-transform group-hover:-translate-y-0.5 group-hover:underline"
              >
                <Icon name={value.icon} size={16} className="mr-2" />
                {value.name}
              </a>
              <Minus size={20} className="mx-1" strokeWidth={1.6} />
              <div className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {value.desc}
              </div>
            </div>
          );
        })}
      </Content>
      <Content name="About me">
        <blockquote className="mt-4 whitespace-break-spaces border-l-4 pl-3 text-sm leading-6 text-muted-foreground">
          {config.about.replace(/atob\(([^)]+)\)/g, (_, p1) =>
            atob(p1.replace(/['"]+/g, "")),
          )}
        </blockquote>
      </Content>
      <Footer />
    </main>
  );
}
