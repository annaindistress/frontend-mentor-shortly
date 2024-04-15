import BrandRecognition from "@/app/assets/brand-recognition.svg";
import DetailedRecords from "@/app/assets/detailed-records.svg";
import FullyCustomizable from "@/app/assets/fully-customizable.svg";

const statsInfo = [
  {
    title: "Brand recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: <BrandRecognition />,
  },
  {
    title: "Detailed records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: <DetailedRecords />,
  },
  {
    title: "Fully customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: <FullyCustomizable />,
  },
];

function Stats() {
  return (
    <section className="bg-slate-100 px-6 text-center">
      <div className="mx-auto max-w-[1110px] py-20 md:py-[120px]">
        <h2 className="title mb-4 text-secondary-300">Advanced Statistics</h2>
        <p className="mx-auto mb-[92px] max-w-[460px] text-base leading-7 tracking-[0.11px] md:mb-[100px] md:max-w-[540px] md:text-lg md:leading-8">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <ul className="relative grid gap-[90px] before:absolute before:left-[calc(50%-4px)] before:block before:h-full before:w-2 before:bg-primary-200 lg:grid-cols-3 lg:items-start lg:gap-[30px] lg:text-start lg:before:left-0 lg:before:top-[154px] lg:before:h-2 lg:before:w-full lg:[&>*:nth-child(3n+2)]:mt-[44px] lg:[&>*:nth-child(3n+3)]:mt-[88px]">
          {statsInfo.map((item) => {
            return (
              <li
                key={item.title}
                className="relative rounded bg-white px-8 pb-10"
              >
                <span
                  className="mx-auto mb-8 mt-[-44px] flex h-[88px] w-[88px] items-center justify-center rounded-full bg-secondary-200 lg:ms-0 lg:mt-[-41px]"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <h3 className="mb-3.5 text-[22px] font-bold capitalize leading-8 text-secondary-300">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[26px]">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Stats;
