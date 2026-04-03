import React from "react";
import { LucideIcon } from "lucide-react";

export type ToolCategory = 
  | "image" 
  | "pdf" 
  | "text" 
  | "developer" 
  | "calculator" 
  | "generator" 
  | "seo" 
  | "unit" 
  | "converter"
  | "misc";

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: LucideIcon;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  seoTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  content?: {
    whatIsIt: string;
    howItWorks: string;
    keyFeatures: string[];
    benefits: string[];
    whenToUse: string;
  };
  badge?: string;
}

export interface CategoryInfo {
  id: ToolCategory;
  name: string;
  icon: LucideIcon;
  color: string;
}
