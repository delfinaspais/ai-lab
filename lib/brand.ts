import {
  CalendarSearch,
  FileText,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

export const brandName = "AI Lab";

export type FeatureKey = "summarization" | "extraction" | "chat";

export type Feature = {
  key: FeatureKey;
  href: string;
  icon: LucideIcon;
  accent: string;
};

export const features: Feature[] = [
  {
    key: "summarization",
    href: "/summarization",
    icon: FileText,
    accent: "from-violet-500 to-purple-600",
  },
  {
    key: "extraction",
    href: "/extraction",
    icon: CalendarSearch,
    accent: "from-indigo-500 to-blue-600",
  },
  {
    key: "chat",
    href: "/chat",
    icon: MessageSquare,
    accent: "from-fuchsia-500 to-pink-600",
  },
];
