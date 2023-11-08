import React from "react";

function Content({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="pb-2 text-lg font-medium underline underline-offset-4">
        {name}
      </h3>
      {children}
    </div>
  );
}

export default Content;
