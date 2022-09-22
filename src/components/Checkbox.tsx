import React, { FormEvent } from 'react';

type CheckboxProps = {
  onChange: (e: FormEvent) => any,
  check: boolean,
}

const Checkbox : React.FunctionComponent <CheckboxProps> = ({
    onChange,
    check,
}: CheckboxProps) => (
  <div className="flex items-center">
    <input
      id="remember-me"
      name="remember-me"
      type="checkbox"
      className="checkbox-input"
      onChange={onChange}
      defaultChecked={check}
    />
    <label htmlFor="remember-me" className="paragraphs"> Remember me </label>
  </div>
);

export default Checkbox;
