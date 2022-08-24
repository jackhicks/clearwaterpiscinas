import './../Header/menu.css';
export interface AnimatedTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  first: string;
  second: string;
}

export const AnimatedTitle = ({
  title,
  first,
  second,
  className,
}: AnimatedTitleProps) => {
  return (
    <p className="group">
      {title === '' ? (
        <>
          <span
            className={`${className} group-hover:translate-y-[0.10rem] transition-transform cursor-pointer inline-block`}
          >
            {first}
          </span>
          <span
            className={`${className} group-hover:-translate-y-[0.10rem] transition-transform cursor-pointer inline-block`}
          >
            {second}
          </span>
        </>
      ) : (
        <span
          className={`${className} transition-transform cursor-pointer inline-block`}
        >
          {title}
        </span>
      )}
    </p>
  );
};
