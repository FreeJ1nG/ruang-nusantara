import { FC, ReactNode, useEffect, useRef, useState } from "react";

type SelectProps = {
  label?: string | ReactNode;
  selected: any;
  setSelected: Function;
  options: { id: number; value: any }[];
  fit?: boolean | undefined;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

const Select: FC<SelectProps> = ({
  label,
  selected,
  setSelected,
  options,
  fit,
  rounded,
}) => {
  const selectedRef = useRef<HTMLButtonElement>(null);
  const selectionRef = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const roundedClassName = `${rounded === "sm" && "rounded-sm"} ${
    (rounded === "md" || rounded === undefined) && "rounded-md"
  } ${rounded === "lg" && "rounded-lg"} ${rounded === "xl" && "rounded-xl"} ${
    rounded === "2xl" && "rounded-2xl"
  } ${rounded === "3xl" && "rounded-3xl"}`;
  console.log(roundedClassName);

  useEffect(() => {
    const handler = (e: any) => {
      if (
        selectedRef.current &&
        !selectedRef.current.contains(e.target) &&
        selectionRef.current &&
        !selectionRef.current.contains(e.target)
      ) {
        setShowMore(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [selectedRef, selectionRef]);

  return (
    <div className="relative flex flex-col gap-y-2">
      <div className="z-80 flex flex-col gap-y-2">
        <div className="font-ubuntu">{label}</div>
        <button
          onClick={() => setShowMore(!showMore)}
          ref={selectedRef}
          className={`${
            fit ? "w-full" : "w-80"
          } ${roundedClassName} flex items-center justify-between bg-lightBrown px-5 py-2 text-left font-semibold text-white outline-none transition-all duration-300`}
        >
          {selected}
          <div
            className={`transition-all duration-200 ${
              showMore && "text-yellowText"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
      <div
        ref={selectionRef}
        className={`absolute top-full z-100 mt-2 ${fit ? "w-full" : "w-80"}`}
      >
        <div
          className={`${roundedClassName} w-full ${
            showMore ? "h-full" : "h-0"
          } flex flex-col overflow-hidden text-black transition-all duration-300`}
        >
          {options.map((option) => {
            return (
              <button
                key={option.id}
                onClick={() => {
                  setSelected(option.value);
                  setShowMore(false);
                }}
                className={`px-5 text-left ${
                  showMore ? "h-12 text-white" : "h-0 text-transparent"
                } flex items-center bg-lightBrown font-semibold transition-all duration-300 hover:bg-darkBrown`}
              >
                {option.value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;
