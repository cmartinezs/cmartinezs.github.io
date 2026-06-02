import type { TechItem, StackGroup } from "@/types/tech.types";

export function filterTechsByGroup(items: TechItem[], group: StackGroup): TechItem[] {
  return items.filter((item) => item.groups.includes(group));
}

export function getGroupItemCount(items: TechItem[], group: StackGroup): number {
  return items.filter((item) => item.groups.includes(group)).length;
}
