import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useState,
} from "react";
import ArrowIcon from "../../assets/icons/arrow_drop_down.svg?react";
import useOutsideClick from "../../hooks/common/useOutsideClick";

interface DropdownProps<T> {
  placeholder?: string;
  options: DropdownOption<T>[];
  onChange?: (value: T) => void;
  defaultValue?: T;
}

export default function Dropdown<T>({
  options,
  onChange,
  placeholder,
  defaultValue,
}: DropdownProps<T>) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(
    defaultValue !== undefined  
      ? options.findIndex((option) => option.value === defaultValue)
      : -1
  );

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  const handleChange = useCallback(
    (index: number) => {
      setSelected(index);
      onChange?.(options[index].value);
      close();
    },
    [close, onChange, options]
  );

  return (
    <DropdownContext.Provider
      value={{
        opened,
        open,
        close,
        options,
        selected,
        onChange: handleChange,
      }}
    >
      <div className="relative inline-block text-left">
        <DropdownButton placeholder={placeholder} />
        <DropdownMenu />
      </div>
    </DropdownContext.Provider>
  );
}

type DropdownOption<T> = {
  label: ReactNode;
  value: T;
};

interface DropdownContextType<T = unknown> {
  opened: boolean;
  open: () => void;
  close: () => void;
  options: DropdownOption<T>[];
  selected: number;
  onChange: (index: number) => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);
function DropdownButton({ placeholder = "select" }: { placeholder?: string }) {
  const { open, options, selected } = useContext(DropdownContext)!;
  return (
    <button
      onClick={open}
      className="relative text-left border-gray-300 border-1 rounded-10 min-w-197 p-14 pr-36"
    >
      {selected >= 0 ? options[selected].label : placeholder ?? ""}
      <span className="absolute transform -translate-y-1/2 top-1/2 right-12 ">
        <ArrowIcon />
      </span>
    </button>
  );
}
function DropdownMenu() {
  const { close, opened, options, onChange } = useContext(DropdownContext)!;
  const containerRef = useOutsideClick(close);
  return opened ? (
    <div
      className="absolute left-0 z-10 flex flex-col bg-white border border-gray-300 top-62 rounded-10 min-w-197"
      ref={containerRef as RefObject<HTMLDivElement>}
    >
      {options.map((option, index) => (
        <DropdownMenuItems
          key={`${option.value}`}
          label={option.label}
          onSelect={() => onChange(index)}
        />
      ))}
    </div>
  ) : null;
}

function DropdownMenuItems({
  label,
  onSelect,
}: {
  label: ReactNode;
  onSelect: () => void;
}) {
  return (
    <button
      className="text-left border-gray-300 p-14 border-b-1 last:border-b-0"
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
