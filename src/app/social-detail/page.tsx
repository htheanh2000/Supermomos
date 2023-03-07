import Container from "@/components/container";
import Icon from "@/components/icon";
import Image from "next/image";
const SocialDetail = () => {
  const BASE_URL =
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner";

  return (
    <Container className="my-32">
      <div className="relative">
        <h1 className="text-heading text-white bg-purple w-fit py-1 px-3 max-w-2xl ">
          Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior
          Designer & Airfoil founder
        </h1>
        <div className="mt-8 flex items-center">
          <Icon size="lg" className="mr-2" name="calendar" />
          <p className="text-heading-3 mr-12">October 11, Wed</p>
          <Icon size="lg" className="mr-2" name="clock" />
          <p className="text-heading-3">7 PM</p>
        </div>
        <div className="mt-8 flex">
          <Icon className="mr-2" name="location" />
          <p>Chelsea Market (163 W 20nd Street). Manhattan, NYC</p>
        </div>
        <div className="mt-8 flex items-center">
          <Icon size="xs" className="mr-2" name="calendar" />
          <p className="mr-12">50 people</p>
          <Icon size="xs" className="mr-2" name="clock" />
          <p className="">$30</p>
        </div>
        <img
          loading="lazy"
          className="absolute -z-10 right-0 -top-10 cursor-pointer bg-contain w-[500px] rounded-tl-[32px] rounded-br-[32px] "
          src={`${BASE_URL}/banner_${1}.jpg`}
          alt="random image"
        />
        <p className="max-w-2xl mt-16">
          Calling all web3 founders and designers for an exciting night of
          exchanging ideas and making new friends! Come make friends with fellow
          designers and founders in web3. There will also be lots of insights to
          be gained through an intimate chat +Q&A with two giants in the
          industry: Phil Hedayatnia, Founder & CEO of Airfoil, a growth design
          studio that has designed and built products in web3, the creator
          economy, the future of work, and much more for 80+ startups since 2018
          Jihoon Suh, Senior Product Designer at Coinbase, who was previously
          Senior Product Designer for Messenger for Meta. This will be a curated
          group with limited spots, so do sign up early! Airfoil Studio is the
          design, branding, and engineering team helping web3 take flight. As
          one of crypto’s first large-scale design firms, our mission is to
          design a friendlier financial layer for the internet. We’re a team of
          85+ creatives, working from Airfoil’s hubs in Toronto, Singapore, and
          Seoul, who’ve worked on 100+ projects since 2018, including Solana
          Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs,
          Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and more.
          Learn more about Airfoil and our work at airfoil.studio.
        </p>
      </div>
    </Container>
  );
};

export default SocialDetail;
