import { Component, FC, ReactNode, useContext } from "react";

import Button from "$components/Button/Button";
import { Carousel } from "react-responsive-carousel";
import { DESTINATIONS } from "$constants/pages/destinations/constants";
import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import LocationButton from "./LocationButton";
import { useRouter } from "next/router";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const indo = useContext(IndoContext);

  return (
    <div className="relative flex flex-col gap-y-12 py-20 px-5 md:py-40 md:px-14 lg:px-20 xl:py-60">
      <div className="absolute top-10 right-0">
        <div className="relative hidden md:block md:h-[225px] md:w-[450px] lg:h-[300px] lg:w-[600px]">
          <Image src="/megamendung4.png" alt="MegaMendung" layout="fill" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="relative hidden h-[150px] w-[300px] md:block md:h-[225px] md:w-[450px] lg:h-[300px] lg:w-[600px]">
          <Image src="/megamendung3.png" alt="MegaMendung" layout="fill" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 md:gap-y-5">
        <h1 className="text-center font-ubuntu text-lg font-medium tracking-wide md:text-left xl:text-xl">
          {indo ? "JELAJAHI" : "EXPLORE"}
        </h1>
        <div className="flex flex-col items-center justify-between gap-y-2 md:flex-row">
          <h1 className="text-center font-sanspro text-3xl font-bold sm:text-4xl md:text-left lg:text-5xl">
            {indo ? "Destinasi" : "Destinations"}
          </h1>
          <Button
            label={indo ? "Lihat semua destinasi" : "View all destinations"}
            type="secondary"
            width={250}
            height={35}
            onClick={() => router.push("/destinations")}
          />
        </div>
        <h1 className="text-center font-ubuntu text-3xl font-bold sm:text-4xl md:text-left md:text-5xl"></h1>
      </div>
      {children}
    </div>
  );
};

const DestinationsCard: FC = () => {
  const router = useRouter();
  class ExternalControlledCarousel extends Component<
    {},
    { currentSlide: number; autoPlay: boolean }
  > {
    constructor(props: any) {
      super(props);

      this.state = {
        currentSlide: 0,
        autoPlay: false,
      };
    }

    change = (new_id: number) => {
      this.setState((state) => ({
        currentSlide: new_id,
      }));
    };

    next = () => {
      this.setState((state) => ({
        currentSlide: state.currentSlide + 1,
      }));
    };

    prev = () => {
      this.setState((state) => ({
        currentSlide: state.currentSlide - 1,
      }));
    };

    updateCurrentSlide = (index: number) => {
      const { currentSlide } = this.state;

      if (currentSlide !== index) {
        this.setState({
          currentSlide: index,
        });
      }
    };

    render() {
      const Card: FC<{
        id: number;
        title: string;
        description: string;
        imageSrc: string;
      }> = ({ id, title, description, imageSrc }) => {
        return (
          <button
            onClick={() => router.push(`/destinations/${id}`)}
            className="relative h-[600px] w-[300px] sm:w-[400px]"
          >
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              className="rounded-xl"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 rounded-xl bg-black/10" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end gap-y-5 p-10 text-white">
              <div className="text-left text-3xl font-bold drop-shadow-xl">
                {title}
              </div>
              <div className="text-left text-sm tracking-widest drop-shadow-xl">
                {description}
              </div>
              <div className="h-8" />
            </div>
          </button>
        );
      };

      return (
        <div className="flex flex-col items-center justify-center gap-y-10 lg:flex-row lg:justify-between">
          <div className="relative">
            <Carousel
              className="w-[300px] sm:w-[400px]"
              showArrows={false}
              showStatus={false}
              infiniteLoop={true}
              showIndicators={false}
              showThumbs={false}
              selectedItem={this.state.currentSlide}
              onChange={this.updateCurrentSlide}
              {...this.props}
            >
              {DESTINATIONS.map((destination) => (
                <Card key={destination.id} {...destination} />
              ))}
            </Carousel>
            <div className="absolute bottom-8 right-8 flex flex-row justify-end gap-x-5">
              <button
                onClick={this.prev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={this.next}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex min-w-[350px] max-w-[350px] justify-center overflow-auto px-10 sm:min-w-full sm:max-w-full lg:min-w-[calc(100%-400px)] lg:max-w-[calc(100%-400px)]">
            <div className="overflow-x-auto 2xl:overflow-x-hidden">
              <div className="relative h-[450px] min-w-[1200px] max-w-[1200px] text-sm">
                <Image src="/trips/map.png" alt="Map" layout="fill" />
                <div className="absolute bottom-[74px] left-[375px] drop-shadow-xl">
                  {/* Bromo */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[0]}
                  />
                </div>
                <div className="absolute top-0 left-[50px] drop-shadow-xl">
                  {/* Lake Toba */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[1]}
                  />
                </div>
                <div className="absolute bottom-[100px] left-[300px] drop-shadow-xl">
                  {/* Thousand Islands */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[2]}
                  />
                </div>
                <div className="absolute bottom-[112px] left-[213px] drop-shadow-xl">
                  {/* Tanjung Lesung */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[3]}
                  />
                </div>
                <div className="absolute bottom-[62px] right-[580px] drop-shadow-xl">
                  {/* Mandalika */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[4]}
                  />
                </div>
                <div className="absolute bottom-[64px] right-[470px] drop-shadow-xl">
                  {/* Labuan Bajo */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[5]}
                  />
                </div>
                <div className="absolute top-0 right-[282px] drop-shadow-xl">
                  {/* Morotai */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[6]}
                  />
                </div>
                <div className="absolute bottom-[140px] right-[380px] drop-shadow-xl">
                  {/* Wakatobi */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[7]}
                  />
                </div>
                <div className="absolute top-[136px] left-[256px] drop-shadow-xl">
                  {/* Tanjung Kelayang */}
                  <LocationButton
                    chosen={this.state.currentSlide}
                    setChosen={this.change}
                    destination={DESTINATIONS[8]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <Container>
      <ExternalControlledCarousel />
    </Container>
  );
};

export default DestinationsCard;
