import { Input, TextArea } from './CustomInput.style';

interface SmallInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface LargeTextAreaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const SmallInput = ({ placeholder, value, onChange }: SmallInputProps) => {
  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
};

export const LargeTextArea = ({ placeholder, value, onChange }: LargeTextAreaProps) => {
  return <TextArea placeholder={placeholder} value={value} onChange={onChange} />;
};
