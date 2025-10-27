import React, { type PropsWithChildren } from "react";

export type ButtonProps = {
  className?: string;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ ...props }) => {
  return (
    <button className="p-3 rounded border-solid border bg-red-500" {...props} />
  );
};

export { Button };
