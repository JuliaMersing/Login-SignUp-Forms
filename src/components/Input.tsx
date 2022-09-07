import React, { FormEvent } from 'react';

type InputProps = {
  label: string,
  id: string,
  type: string,
  value: string,
  placeholder: string,
  onChange: (e: FormEvent) => any,
  onBlur?: (e: FormEvent) => any,
  error?: string
}

const Input = ({
label,
    id,
    type,
    value,
    placeholder,
    onChange,
    onBlur,
    error,
    }: InputProps) => (
      <div>
        <label htmlFor="email-address" className="sr-only">{label}</label>
        <input
          id={id}
          type={type}
          value={value}
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && (
        <div className="text-red-600">{error}</div>
        )}
      </div>
    );

export default Input;
