import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { my_details } from "@/utils/data";
import { File, GithubIcon, LinkedinIcon } from "lucide-react";
export function AboutMe() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-lg text-gray-700 text-center sm:text-left dark:text-gray-200 font-bold ">
          {my_details.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-center sm:text-left text-gray-500 ">
        <p>{my_details.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row xl:flex-col  gap-2 w-full">
        <a href={my_details.github_url} target="_blank" className="w-full">
          <Button
            variant={"outline"}
            size={"sm"}
            className="w-full flex justify-center items-center gap-1 rounded-3xl"
          >
            <GithubIcon size={15} />
            <div className=" inline-block md:hidden xl:inline-block">
              GitHub
            </div>
          </Button>
        </a>
        <a href={my_details.resume_url} target="_blank" className="w-full">
          <Button
            variant={"outline"}
            size={"sm"}
            className="w-full rounded-3xl flex justify-center items-center gap-1"
          >
            <File size={15} />
            <div className="inline-block md:hidden xl:inline-block">Resume</div>
          </Button>
        </a>
        <a href={my_details.linkedin_url} className="w-full" target="_blank">
          <Button
            variant={"outline"}
            size={"sm"}
            className="w-full rounded-3xl flex justify-center items-center gap-1"
          >
            <LinkedinIcon size={15} />{" "}
            <div className="inline-block md:hidden xl:inline-block">
              LinkedIn
            </div>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
