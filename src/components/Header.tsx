import React from 'react';

type HeaderProps = {
  heading: string,
  paragraph: string,
  href: string,
  linkParagraph: string
}

const Header : React.FunctionComponent <HeaderProps> = ({
    heading,
    paragraph,
    href,
                  linkParagraph,
}: HeaderProps) => (
  <div className="mb-10">
    <div className="flex justify-center">
      <i className=" fa-solid fa-mug-hot icon" />
    </div>
    <h2 className="heading">{heading}</h2>
    <p className="paragraphs-header">
      {paragraph}
      <a href={href} className="link">
        {linkParagraph}
      </a>
    </p>
  </div>
);

export default Header;
