import { BadgeCheck, Headset, Rocket, TrendingUp } from "lucide-react";

type WhyChooseUsItem = {
  title: string;
  description: string;
  icon: "badge-check" | "rocket" | "trending-up" | "headset";
  wrapperClassName?: string;
};

type WhyChooseUsProps = {
  titleClassName?: string;
  items?: WhyChooseUsItem[];
};

const defaultItems: WhyChooseUsItem[] = [
  {
    title: "Proven Expertise",
    description: "Over a decade of experience delivering high-performance digital solutions.",
    icon: "badge-check",
  },
  {
    title: "Fast Delivery",
    description: "Streamlined processes to launch your projects on time, every time.",
    icon: "rocket",
    wrapperClassName:
      "before:bg-gray-light relative before:absolute before:top-0 before:-left-6 before:hidden before:h-full before:w-px lg:pt-14 lg:before:block",
  },
  {
    title: "Scalable Approach",
    description: "Solutions designed to grow with your team, customers, and goals.",
    icon: "trending-up",
    wrapperClassName:
      "before:bg-gray-light relative before:absolute before:top-0 before:-left-6 before:hidden before:h-full before:w-px lg:pt-6 lg:before:block",
  },
  {
    title: "Dedicated Support",
    description: "Get reliable support - from onboarding to long-term growth.",
    icon: "headset",
    wrapperClassName:
      "before:bg-gray-light relative before:absolute before:top-0 before:-left-6 before:hidden before:h-full before:w-px lg:pt-14 lg:before:block",
  },
];

export function WhyChooseUs({ titleClassName = "text-center", items = defaultItems }: WhyChooseUsProps) {
  const iconMap = {
    "badge-check": <BadgeCheck className="size-6" />,
    rocket: <Rocket className="size-6" />,
    "trending-up": <TrendingUp className="size-6" />,
    headset: <Headset className="size-6" />,
  } as const;

  return (
    <div className="py-14 lg:py-16">
      <div className="container">
        <div className={`section-heading border-gray-light flex flex-col items-center pb-4 sm:text-left lg:border-b xl:flex-row xl:justify-between xl:gap-5 xl:text-left ${titleClassName}`}>
          <h2>Why businesses choose us</h2>
          <p className="text-center sm:max-w-125 xl:mt-0! xl:text-left">
            We help companies streamline operations, elevate brand presence, and grow faster with
            trusted technology and design.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 pt-6 sm:grid-cols-2 lg:grid-cols-4 xl:pt-12">
          {items.map((item) => (
            <div key={item.title} className={`group space-y-3 ${item.wrapperClassName ?? ""}`.trim()}>
              <div className="border-primary/20 bg-primary/5 group-hover:bg-primary text-primary grid size-10 place-content-center rounded-lg border transition group-hover:text-white">
                {iconMap[item.icon]}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
