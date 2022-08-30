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
  <div>
    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
    <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">{heading}</h2>
    <p className="mt-2 text-center text-sm text-gray-600">
      {paragraph}
      <a href={href} className="font-medium text-indigo-600 hover:text-indigo-500">
        {linkParagraph}
      </a>
    </p>
  </div>
);

export default Header;
