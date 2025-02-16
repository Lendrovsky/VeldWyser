"use client";

import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
  svg?: JSX.Element;
}

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Multiplatform Support",
    description: `We support iOS, Android, and web platforms, ensuring seamless access and consistent performance across all your devices while prioritizing the protection of your data. 
      Enjoy offline features that allow you to stay productive even without an internet connection.`,
    type: "image",
    path: "/images/multiplatform.png",
    format: "image/png",
    svg: (
      <Image
      src="/images/icons/multiplatform.png"
      alt="Custom Icon"
      width={56}
      height={56}
    />
    ),
  },
  {
    title: "Data & Artificial Intelligence",
    description:
      `By using A.I. and remote sensing to predict changes and offer management sollutions we give you the tools to act in time. With the use of the data we collect,
      we improve the predictions over time.`,
      type: "image",
      path: "/images/smartfarm.webp",
      format: "image/webp",
      svg: (
        <Image
        src="/images/icons/data.png"
        alt="Custom Icon"
        width={56}
        height={56}
      />
      ),
  },
  {
    title: "Calculate LSU's",
    description:
      `We assist you with dividing your farm into camps. Subsequently, we carefully calculate the amount of animals the camps can support. 
      In doing so, over time the condition of the veld will improve which increases the carrying capacity of your veld. 
      This will eventually lead to more animals or fatter animals per ha.`,
      type: "image",
      path: "/images/runderen1.png",
      format: "image/png",
      svg: (
        <Image
        src="/images/icons/grazing cow.png"
        alt="Custom Icon"
        width={56}
        height={56}
      />
      ),
  },
  {
    title: "Historical records",
    description:
      `By creating a database of all data that is collected, we give you unprecedented insights into your farm. Not just into the LSU's per hectare,
      but also into the climate change on your farm, the weather patterns and erosion. The historical records contain the results of the monitoring as well, which gives you the 
      information needed to track developments in this regard.`,
      type: "image",
      path: "/images/farmer2.webp",
      format: "image/webp",
      svg: (
        <Image
        src="/images/icons/history.png"
        alt="Custom Icon"
        width={56}
        height={56}
      />
      ),
  },
  {
    title: "Monitoring",
    description:
      `Monitoring can be a time intensive occupation. With Veld Wyser this is in the past! We help you identify alien and invasive species, we help you keep track of the types of grasses on your property. 
      In doing so, you get an unprecedented level of insight into your farm.`,
      type: "image",
      path: "/images/monitoringfoto.png",
      format: "image/png",
      svg: (
        <Image
        src="/images/icons/monitoring.png"
        alt="Custom Icon"
        width={56}
        height={56}
      />
      ),
  },
  {
    title: "Become More Resilient",
    description:
      "Climate change back in the past already had a significant influence on the state of the veld. What the future will bring is uncertain, yet with a veld in good condition you have the best preparation.",
      type: "image",
      path: "/images/veld.jpg",
      format: "image/jpg",
      svg: (
        <Image
        src="/images/icons/climate.png"
        alt="Custom Icon"
        width={56}
        height={56}
      />
      ),
  },
  {
    title: "Administration",
    description:
      "Reducing the time it takes to fill out administration forms, such as G.O.P., because all information is available in the app. You choose which data you share to whom.",
      type: "image",
      path: "/images/farmer.webp",
      format: "image/webp",
      svg: (
        <Image
        src="/images/icons/legislation.png"
        alt="Custom Icon"
        width={56}
        height={56}
      />
      ),
  },
  {
    title: "Community",
    description:
      "Join the community and exchange ideas on veld management, debate future initiatives for updates and see how you compare to your neighbours.",
      type: "image",
      path: "/images/communitychristian.jpg",
      format: "image/jpg",
      svg: (
        <Image
        src="/images/icons/community.png"
        alt="Custom Icon"
        width={56}
        height={56}
      />
      ),
  },
] as Feature[];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
<span className={`duration-100 ${isOpen ? "text-custom-gold-1" : ""}`}>
        {svg}
      </span>
      <span
        className={`flex-1 text-base-content ${
          isOpen ? "text-custom-gold-2 font-semibold" : ""
        }`}
      >
        <h3 className="inline">{title}</h3>
      </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[46rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features"
    >
      <div className="px-8">
          <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24 text-[#0a1a1a]">
          Become wiser with the insights of
          <span className="bg-[#9e7f4d] text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
          Veld Wyser
          </span>
        </h2>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
