import React from 'react';

type HeaderProps = {
  heading: string,
  paragraph: string,
  href: string,
  linkParagraph: string
}

const Header = ({
    heading,
    paragraph,
    href,
                  linkParagraph,
}: HeaderProps) => (
  <div className="mb-10">
    <div className="flex justify-center">
      <i className="fa-solid fa-mug-hot text-[56px] text-indigo-600 justify-center" />
    </div>
    <h2 className="mt-3 text-center text-3xl tracking-tight font-bold text-gray-900">{heading}</h2>
    <p className="mt-2 text-center text-sm text-gray-600">
      {paragraph}
      <a href={href} className="font-medium text-indigo-600 hover:text-indigo-500 ml-2">
        {linkParagraph}
      </a>
    </p>
  </div>
);

export default Header;
