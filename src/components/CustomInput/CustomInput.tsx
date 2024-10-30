import { forwardRef } from 'react';

import { Input, TextArea } from './CustomInput.style';

interface SmallInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface LargeTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const SmallInput = forwardRef<HTMLInputElement, SmallInputProps>(
  ({ placeholder, value, onChange, ...props }, ref) => {
    return (
      <Input ref={ref} placeholder={placeholder} value={value} onChange={onChange} {...props} />
    );
  }
);

export const LargeTextArea = forwardRef<HTMLTextAreaElement, LargeTextAreaProps>(
  ({ placeholder, value, onChange, ...props }, ref) => {
    return (
      <TextArea ref={ref} placeholder={placeholder} value={value} onChange={onChange} {...props} />
    );
  }
);

SmallInput.displayName = 'SmallInput';
LargeTextArea.displayName = 'LargeTextArea';
