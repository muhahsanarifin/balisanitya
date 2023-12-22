import { Input } from "react-rainbow-components";

type BoxProps = {
  type: string;
  placeholder: string;
  name: string;
  className: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Box: React.FC<BoxProps> = ({
  type,
  placeholder,
  name,
  className,
  value,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

type SearchPRops = {
  label?: string;
  placeholder: string;
  className: string;
  name: string;
  labelAlignment?: string;
  value: string;
  hideLable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<SearchPRops> = ({
  label,
  placeholder,
  className = "rainbow-p-around_medium",
  name,
  labelAlignment,
  onChange,
  hideLable,
  value,
}) => {
  return (
    <Input
      name={name}
      label={label}
      placeholder={placeholder}
      type="search"
      className={className}
      labelAlignment={labelAlignment}
      onChange={onChange}
      hideLable={hideLable}
      value={value}
    />
  );
};

type EditProps = {
  label?: string;
  placeholder?: string;
  className: string;
  name: string;
  labelAlignment?: string;
  value: string;
  hideLable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean
};

export const Edit: React.FC<EditProps> = ({
  label,
  placeholder,
  className = "rainbow-p-around_medium",
  name,
  labelAlignment,
  onChange,
  hideLable,
  value,
  required,
}) => {
  return (
    <Input
      name={name}
      label={label}
      placeholder={placeholder}
      type="search"
      className={className}
      labelAlignment={labelAlignment}
      onChange={onChange}
      hideLable={hideLable}
      value={value}
      required={required}
    />
  );
};
