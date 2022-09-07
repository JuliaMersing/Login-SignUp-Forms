import React, { FormEvent } from 'react';

type CheckboxProps = {
  onChange: (e: FormEvent) => any,
  check: boolean,
}

const Checkbox = ({
    onChange,
    check,
}: CheckboxProps) => (
  <div className="flex items-center">
    <input
      id="remember-me"
      name="remember-me"
      type="checkbox"
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      onChange={onChange}
      defaultChecked={check}
    />
    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
  </div>
);

export default Checkbox;
