interface ContentDescriptionProps {
  children: any;
}

export const ContentDescription = (props: ContentDescriptionProps) => {
  const { children } = props;
  return <p className="text-md text-gray-500 dark:text-gray-100">{children}</p>;
};
