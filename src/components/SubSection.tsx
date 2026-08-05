import type { ReactNode } from "react";

interface SubSectionProps {
  title: string;
  children: ReactNode;
}

function SubSection({ title, children }: SubSectionProps) {
  return (
    <div className="sub-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default SubSection;
