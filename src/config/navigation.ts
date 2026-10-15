import { BookOpen, Timer, Wrench, Map as MapIcon } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guides", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "timers", path: "/timers", icon: Timer, isContentType: true },
  { key: "tools", path: "/tools", icon: Wrench, isContentType: true },
  { key: "reference", path: "/reference", icon: MapIcon, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
