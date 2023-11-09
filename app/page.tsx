import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl pt-10">
      <div className="flex justify-center sm:justify-start">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/icon.jpg" />
          <AvatarFallback>LS</AvatarFallback>
        </Avatar>
      </div>
    </main>
  );
}
