import { WorkprocessCardProps } from "./card";
import { workprocessSectionData } from "@/data/work-process/v1";
import { WorkCardsCaraousl } from "./cards-carousel";

export interface WorkprocessSectionProps {
  texts: string[];
  cards: WorkprocessCardProps[];
}

export function WorkprocessSection() {
  const { texts, cards } = workprocessSectionData;
  return (
    <section className="section-padding-primary overflow-hidden bg-white !pt-0 dark:bg-accent-950">
      <WorkCardsCaraousl cards={cards} />
    </section>
  );
}
