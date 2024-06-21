import Link from "next/link";
import React from "react";

type PageInfoProps = {
  path: string | undefined;
};
export const PageInfo = ({ path }: PageInfoProps) => {
  return (
    <div className="py-4 bg-base-100 text-center font-work">
      <h1 className="text-base-content text-3xl font-semibold">
        {path?.toUpperCase()}
      </h1>
      <div className="text-base breadcrumbs text-base-content/80 font-work mt-2 flex items-center justify-center">
        <ul>
          <li>
            <Link
              href={`/`}
              className="hover:text-primary transition hover:duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <span className="text-base-content/60 font-normal">{path}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
