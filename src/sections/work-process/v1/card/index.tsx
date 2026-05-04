import { Button } from "@/src/components/button";
import { CustomLink } from "@/src/components/custom-link";
import { cn } from "@/src/utils/shadcn";

export interface WorkprocessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  count: string;
}

export function WorkprocessCard({
  icon,
  title,
  description,
  count,
  link,
}: WorkprocessCardProps) {
  return (
    <div className="group/work relative h-full whitespace-normal rounded-5 bg-accent-100 p-6 shadow-3 transition-all duration-400 hover:-translate-y-2 hover:bg-white hover:shadow-xl dark:bg-accent-700 dark:hover:bg-accent-800 lg:p-10">
      <div className="flex items-center gap-5">
        <div className="relative flex-none">
          <span className="absolute -top-3 inline-block h-16 w-16 rounded-full bg-primary transition-transform duration-400 group-hover/work:scale-110"></span>
          <span className="relative -left-3 top-3 z-1 block text-white transition-transform duration-400 group-hover/work:-translate-y-1">
            {icon}
          </span>
        </div>
        <h3 className="h3 text-accent-900 dark:text-white">{title}</h3>
      </div>
      <p className="mt-6">{description}</p>
      <div className="mt-7 pr-[120px]"></div>
      <span className="absolute -bottom-5 right-5 z-1 text-[68px] font-bold text-primary/10 dark:text-white/10">
        {count}
      </span>
    </div>
  );
}
