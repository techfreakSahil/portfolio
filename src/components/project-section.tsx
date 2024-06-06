import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiShare1 } from "react-icons/ci";
interface ProjectSectionProps {
  key: number;
  title: string;
  description: string;
  url?: string;
}
export function ProjectSection({
  title,
  description,
  url,
}: ProjectSectionProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Card className="hover:bg-gray-200 dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-xl flex  items-center gap-2 text-gray-700 dark:text-gray-200 font-bold ">
            {title} {url && <CiShare1 size={20} />}
          </CardTitle>
          <CardDescription className="text-md text-gray-500 ">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
}
