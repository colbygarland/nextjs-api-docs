interface ContentTitleProps {
  slug: string;
  children: string;
}

export const ContentTitle = (props: ContentTitleProps) => {
  const { slug, children } = props;
  return (
    <h3 className="text-2xl font-bold mb-4 leading-relaxed tracking-wide dark:text-gray-100">
      <a href={`#${slug}`}>{children}</a>
    </h3>
  );
};
