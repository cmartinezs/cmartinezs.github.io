"use client";

import { create } from "zustand";
import type { StackGroup, StackCategory } from "@/types/tech.types";
import { stackCategories } from "@/data/techStack.data";

interface StackShowcaseState {
  activeIndex: number;
  activeCategory: StackCategory;
  setActiveIndex: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  goFirst: () => void;
  goLast: () => void;
}

export const useStackShowcaseStore = create<StackShowcaseState>((set, get) => ({
  activeIndex: 0,
  activeCategory: stackCategories[0]!,

  setActiveIndex: (index: number) =>
    set({ activeIndex: index, activeCategory: stackCategories[index]! }),

  goNext: () => {
    const next = (get().activeIndex + 1) % stackCategories.length;
    set({ activeIndex: next, activeCategory: stackCategories[next]! });
  },

  goPrev: () => {
    const prev = (get().activeIndex - 1 + stackCategories.length) % stackCategories.length;
    set({ activeIndex: prev, activeCategory: stackCategories[prev]! });
  },

  goFirst: () => set({ activeIndex: 0, activeCategory: stackCategories[0]! }),

  goLast: () => {
    const last = stackCategories.length - 1;
    set({ activeIndex: last, activeCategory: stackCategories[last]! });
  },
}));

export function getActiveGroup(activeCategory: StackCategory): StackGroup {
  return activeCategory.id;
}
