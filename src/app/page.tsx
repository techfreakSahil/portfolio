import { AboutMe } from "@/components/about-me";
import { MainSection } from "@/components/main-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen gap-5 flex-col py-6 xl:px-[180px]">
      <div className="top-0 sticky z-40">
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row sm:mx-10 lg:mx-0 my-10 space-x-0 lg:space-x-10 space-y-10 lg:space-y-0">
        <div className="h-fit static xl:sticky top-24 z-30">
          <AboutMe />
        </div>
        <div className="min-w-[65%]">
          <MainSection />
        </div>
      </div>
      <footer className="flex justify-center items-center">
        <p className="text-sm sm:text-md text-gray-600">
          Built by Md Sahil Khan• With TypeScript, Next.js, Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
