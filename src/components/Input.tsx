import React from 'react';

type InputProps = {
  label: string,
  placeholder: string,
  type: string,
  id: string,
}

const Input = ({
  label,
    placeholder,
    type,
    id,
    }: InputProps) => (
      <div>
        <label htmlFor="email-address" className="sr-only">{label}</label>
        <input id={id} type={type} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={placeholder} />
      </div>
    );

export default Input;
