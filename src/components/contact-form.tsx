import { Card, CardDescription } from "@/components/ui/card";
import { my_details } from "@/constants/data";
export function ContactForm() {
  return (
    <Card className="p-5">
      <CardDescription className="text-sm text-gray-500">
        Best way to reach me is through:
        <a
          href={`mailto:${my_details.email}`}
          className="ml-1 underline hover:text-black dark:hover:text-gray-300"
        >
          gm6504@myamu.ac.in
        </a>
      </CardDescription>
    </Card>
  );
}
