import { LucideIcon } from "lucide-react";

interface FormInputProps {
  icon: LucideIcon;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput = ({ icon: Icon, type, placeholder, value, onChange, error }: FormInputProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center border border-gray-600 rounded-lg p-2 bg-gray-800">
        <Icon className="text-gray-400" size={18} />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none text-white flex-1 ml-2"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;