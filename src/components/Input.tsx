import React, { FormEvent } from 'react';

type InputProps = {
  value: string;
  onChange: (e: FormEvent) => any
  onBlur?: (e: FormEvent) => any
  type: string,
  id: string,
  placeholder: string,
  error?: string
  className: string
}

const Input = ({
                 value,
                 onChange,
                 onBlur,
                 type,
                 id,
                 placeholder,
                 error,
                 className,
               }: InputProps) => (
                 <div className="mb-6">
                   <input
                     onChange={onChange}
                     onBlur={onBlur}
                     value={value}
                     className={className}
                     type={type}
                     id={id}
                     placeholder={placeholder}
                   />
                   {error && (
                   <div className="text-red-600">{error}</div>
      )}
                 </div>
);

export default Input;
