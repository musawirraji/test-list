import { Fragment, Key, ReactNode } from "react";

interface GridProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className?: string;
  itemKey?: (item: T, index: number) => Key;
}

export const Grid = <T,>({
  items,
  renderItem,
  className = "",
  itemKey = (_, index) => index,
}: GridProps<T>) => {
  return (
    <div
      className={`p-10 grid sm:grid-cols-twoCols lg:grid-cols-threeCols xl:grid-cols-fourCols gap-6 justify-center items-stretch w-full ${className}`}
    >
      {items.map((item, index) => (
        <Fragment key={itemKey(item, index)}>{renderItem(item)}</Fragment>
      ))}
    </div>
  );
};
