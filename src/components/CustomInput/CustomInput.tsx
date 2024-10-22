import { Input, TextArea } from './CustomInput.style';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const SmallInput = ({ placeholder, value, onChange }: InputProps) => {
  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
};

export const LargeTextArea = ({ placeholder, value, onChange }: InputProps) => {
  return <TextArea placeholder={placeholder} value={value} onChange={onChange} />;
};
