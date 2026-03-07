import { cn } from "@/src/utils/shadcn";
import Image from "next/image";

const commonClasses = cn("pointer-events-none absolute z-1");

export function Shapes() {
  return (
    <>
      {/* Bottom lines  */}
      <div
        className={cn(commonClasses, "bottom-0 left-0 right-0 w-full h-auto")}
        data-aos="fade-up"
        data-aos-delay="450"
      >
        <Image
          src="/assets/images/hero/shape-5.png"
          alt="hero bottom shape"
          width={1920}
          height={319}
          className="w-full h-auto"
        />
      </div>
    </>
  );
}
