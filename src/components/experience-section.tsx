import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons";
import { CiShare1 } from "react-icons/ci";
type Experience = {
  company: {
    name: string;
    icon: IconType;
  };
  role: {
    title: string;
    icon: IconType;
  };
  description: {
    work: string[];
    icon: IconType;
  };
  duration: {
    time: string;
    icon: IconType;
  };
};

interface ExperienceProps {
  experience: Experience;
}
export function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <Card className="hover:bg-gray-200 dark:hover:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2 text-gray-700 dark:text-gray-200 font-bold">
          {experience.company.name}
          <experience.company.icon size={18} />
        </CardTitle>
        <CardDescription className="text-md text-gray-500 flex items-center gap-2">
          <experience.role.icon size={18} />
          {experience.role.title} - {experience.duration.time}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-gray-700 dark:text-gray-200">
        <ul className="space-y-1">
          {experience.description.work.map((point, idx) => (
            <li className="flex justify-center items-center gap-2" key={idx}>
              <experience.description.icon size={20} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
