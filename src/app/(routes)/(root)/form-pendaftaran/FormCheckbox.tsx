import { CheckCircle } from "lucide-react";

interface FormCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormCheckbox = ({ checked, onChange, error }: FormCheckboxProps) => {
  return (
    <div className="mb-4">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only"
          />
          <div className="w-5 h-5 flex items-center justify-center border border-gray-600 rounded-md bg-gray-800">
            {checked && <CheckCircle className="w-4 h-4 text-blue-500" />}
          </div>
        </div>
        <span className="text-sm ml-2">
          Saya menyetujui bahwa data yang diberikan akan digunakan untuk
          keperluan pendataan komunitas.
        </span>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormCheckbox;