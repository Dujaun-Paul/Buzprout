import {
  Globe,
  Truck,
  Heart,
  Sparkles,
  UtensilsCrossed,
  ShoppingBag,
  Building2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const INDUSTRIES: Industry[] = [
  { id: "tourism", label: "Tourism & Hospitality", icon: Globe },
  { id: "logistics", label: "Logistics & Courier", icon: Truck },
  { id: "healthcare", label: "Healthcare", icon: Heart },
  { id: "beauty", label: "Beauty & Wellness", icon: Sparkles },
  { id: "restaurants", label: "Restaurants & Food", icon: UtensilsCrossed },
  { id: "retail", label: "Retail & E-commerce", icon: ShoppingBag },
  { id: "professional", label: "Professional Services", icon: Building2 },
  { id: "startups", label: "Startups & SMEs", icon: Rocket },
];
