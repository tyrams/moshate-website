import type { ServiceContentProps } from "@/src/components/cards/service/v1";

export const serviceDetailPageData: ServiceContentProps[] = [
  {
    slug: "/services/strategy-operating-model-design",
    title: "Strategy & Operating Model Design",
    description:
      "Turning Vision into Actionable Direction. We help leadership teams define clear strategic direction and design organisations capable of executing that strategy effectively.",
    sidebarDescription:
      "Turning Vision into Actionable Direction. We help leadership teams define clear strategic direction and design organisations capable of executing that strategy effectively.",
    introTitle: "Strategic Clarity Meets Organisational Capability",
    introParagraphs: [
      "We work with leadership teams to clarify where the organisation is going, define strategic priorities, and translate ambition into practical roadmaps with milestones, ownership, and measurable outcomes.",
      "Our approach combines strategic facilitation, organisational design, and operating model development to ensure that strategy is not only defined but executable across the business.",
    ],
    keyOfferings: [
      "Define strategic direction and translate vision into executable roadmaps with clear milestones",
      "Design organisational structures and operating models that enable effective strategy execution",
    ],
    deliveryFocus: [
      "Digital Business Strategy & Roadmapping",
      "Strategy Facilitation & Executive Alignment",
      "Organisational Design",
      "Target Operating Model (TOM) Design",
      "Business Model Innovation",
      "Design Thinking Workshops",
    ],
    imageSrc: "/assets/images/businessman-colleague-shaking-hands.jpg",
    imageAlt: "Strategy and operating model design",
  },
  {
    slug: "/services/strategy-design",
    title: "Strategy Design",
    description:
      "Building the digital-ready organisation through strategic technology enablement, modern architecture, and data-driven operating models.",
    sidebarDescription:
      "Building the Digital-Ready Organisation. We enable organisations to harness technology as a strategic asset — not just a support function. From digital strategy execution to modern architecture and data capabilities, we deliver solutions that enhance efficiency, agility, and service delivery.",
    introTitle: "Turning Strategy into Practical Digital Direction",
    introParagraphs: [
      "We help leadership teams translate ambition into executable plans by aligning business priorities, technology choices, and operating realities.",
      "Our work focuses on designing the structures, platforms, and data foundations needed for sustained transformation and better decision-making.",
    ],
    keyOfferings: [
      "Align technology choices with business priorities through digital strategy and modern architecture",
      "Build data foundations and modernise applications to drive transformation and better decisions",
    ],
    deliveryFocus: [
      "Digital Strategy Implementation",
      "Systems Integration",
      "Enterprise & Solution Architecture",
      "Data Analytics Design & Implementation",
      "Application Modernisation",
      "Digital Enablement Programmes",
    ],
    imageSrc:
      "/assets/images/black-businesswoman-shaking-hands-with-male-partner.jpg",
    imageAlt: "Strategy design and digital enablement",
  },
  {
    slug: "/services/digital-transformation",
    title: "Digital Transformation",
    description:
      "High-performance delivery capability for complex initiatives, with strong governance, agile execution, and measurable outcomes.",
    sidebarDescription:
      "High-Performance Delivery at Scale. We strengthen delivery capability through robust governance, structured methodologies, and experienced leadership to ensure initiatives are completed on time, within scope, and with intended benefits realised.",
    introTitle: "Delivery Excellence for Complex Programmes",
    introParagraphs: [
      "Successful organisations execute well. We help teams deliver with confidence by combining delivery discipline, stakeholder alignment, and clear reporting.",
      "We have particular strength in complex, multi-stakeholder environments and compliance-driven programmes where precision and pace both matter.",
    ],
    keyOfferings: [
      "Establish delivery capability and execute complex programmes with agile methodologies",
      "Implement governance structures and manage compliance-driven initiatives with precision",
    ],
    deliveryFocus: [
      "PMO Establishment & Operationalisation",
      "Programme & Project Delivery",
      "Agile Project Management",
      "Project & Portfolio Management Implementation",
      "Governance & Reporting Frameworks",
      "Compliance Projects (e.g., POPIA, Business Continuity)",
    ],
    imageSrc: "/assets/images/businessman-colleague-shaking-hands.jpg",
    imageAlt: "Digital transformation and delivery planning",
  },
  {
    slug: "/services/operational-excellence-change",
    title: "Operational Excellence & Change",
    description:
      "Process improvement and change adoption services designed to improve service delivery, performance, and organisational capability.",
    sidebarDescription:
      "Improving Performance from the Inside Out. We help organisations streamline operations, reduce inefficiencies, and strengthen capabilities to deliver consistent, high-quality outcomes.",
    introTitle: "Operational Change That Improves Performance",
    introParagraphs: [
      "We integrate process improvement with people, governance, and performance management so change is adopted and sustained, not just documented.",
      "Our approach helps leaders simplify the way work gets done while building the habits and controls required for long-term improvement.",
    ],
    keyOfferings: [
      "Streamline operations through process improvement, automation, and sustained change adoption",
      "Build performance management capabilities that drive continuous service delivery improvement",
    ],
    deliveryFocus: [
      "Business Process Redesign & Automation",
      "Change Management & Adoption",
      "Performance Management Frameworks",
      "Policy Development, Review & Implementation",
      "Service Delivery Improvement",
    ],
    imageSrc:
      "/assets/images/standard-quality-control-concept-m - Operational Excellence.jpg",
    imageAlt: "Operational excellence and continuous improvement",
  },
  {
    slug: "/services/specialist-resources-capacity-support",
    title: "Specialist Resources & Capacity Support",
    description:
      "Flexible access to experienced professionals who can integrate quickly and add immediate value across transformation and delivery teams.",
    sidebarDescription:
      "Access to Critical Skills On Demand. When internal capacity is constrained, we provide experienced professionals who integrate seamlessly into your teams and deliver immediate value.",
    introTitle: "Flexible Capacity, Delivered by Specialists",
    introParagraphs: [
      "Our talent network spans technology, project delivery, and business transformation disciplines, helping organisations flex capability without compromising quality.",
      "Whether you need short-term augmentation or longer engagement, we provide people who can contribute quickly, collaborate well, and support outcomes from day one.",
    ],
    keyOfferings: [
      "Access experienced delivery and business analysis professionals who integrate seamlessly",
      "Flex technical and transformation capability on demand without compromising quality",
    ],
    deliveryFocus: [
      "Project Managers & Programme Managers",
      "PMO Specialists",
      "Business Analysts",
      "ICT Specialists",
      "Transformation & Change Experts",
      "Short- to Long-Term Augmentation",
    ],
    imageSrc:
      "/assets/images/three-serious-partners-watching-presentation-digital-tablet.jpg",
    imageAlt: "Specialist resourcing and capacity support",
  },
];

export function getServiceDetailBySlug(slug: string) {
  return serviceDetailPageData.find(
    (service) => service.slug === `/services/${slug}`,
  );
}
