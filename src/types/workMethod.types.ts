export interface WorkPrinciple {
  id: string;
  icon: string;
  title: string;
  description: string;
  evidence?: string;
}

export interface WorkMethodContent {
  principles: WorkPrinciple[];
}
