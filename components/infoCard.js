export default function InfoCard({ header, title, mainText }) {
  return (
    <div className="lg:w-[30%] lg:h-[150px] sm:w-full shadow-md rounded-md">
      <div className="w-full h-full flex flex-col items-center p-5">
        <p className="mb-3 text-gray-500 font-bold">{header}</p>
        <p className="text-5xl font-bold mb-3 text-primary">{mainText}</p>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  );
}
