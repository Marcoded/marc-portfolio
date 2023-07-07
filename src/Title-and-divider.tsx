type TitleAndDividerProps = {
  number: number;
  title: string;
};

const TitleAndDivider = ({number, title}: TitleAndDividerProps) => {
  return (
    <div className="flex items-center space-x-10">
      <h1 className="text-lg font-bold text-base-content">
        <span className="text-primary">{number}.</span> {title}
      </h1>
      <hr className="border-t border-gray-500 flex-grow" />
    </div>
  );
};

export default TitleAndDivider;
