import { PaperAirplaneIcon, StarIcon } from "@heroicons/react/outline";

import { FC } from "react";

interface Transport {
    kind: "transport";
    mode: "plane" | "car";
    fromPos: string;
    toPos: string;
}

interface Location {
    kind: "location";
    name: string;
}

interface ItineraryTimelineProps {
    itinerary: (Transport | Location)[];
}

export const ItineraryTimelineSection: FC<ItineraryTimelineProps> = ({
    itinerary,
}) => {
    return (
        <div className="my-4">
            {itinerary.map((e, i) => {
                switch (e.kind) {
                    case "transport":
                        return (
                            <div className="flex flex-row items-center">
                                <div className="mx-4 flex flex-col items-center">
                                    <div className="h-3 w-0.5 bg-slate-400" />
                                    <PaperAirplaneIcon className="w-6 rotate-90 transform py-1" />
                                    <div className="h-3 w-0.5 bg-slate-400" />
                                </div>
                                <div className="">
                                    {e.mode} from {e.fromPos} to {e.toPos}
                                </div>
                            </div>
                        );
                    case "location":
                        return (
                            <div className="flex flex-row items-center">
                                <div className="mx-4 flex flex-col items-center">
                                    <div className="h-3 w-0.5 bg-slate-400" />
                                    <StarIcon className="w-6 py-1" />
                                    <div className="h-3 w-0.5 bg-slate-400" />
                                </div>
                                <div className="">{e.name}</div>
                            </div>
                        );
                }
            })}
        </div>
    );
};

interface Activity {
    kind: "activity";
    stars: "☆☆☆☆☆" | "★☆☆☆☆" | "★★☆☆☆" | "★★★☆☆" | "★★★★☆" | "★★★★★";
    address: string;
    title: string;
    desc: string;
    img: string;
}

interface ItineraryDetailProps {
    itinerary: (Transport | Activity)[];
}

export const ItineraryDetailSection: FC<ItineraryDetailProps> = ({
    itinerary,
}) => {
    const EventCard: FC<{ event: Transport | Activity }> = ({ event }) => {
        switch (event.kind) {
            case "activity":
                let { title, desc, address, stars, img } = event;
                return (
                    <div className="w-full max-w-4xl">
                        <div className="ml-16 h-3 w-0.5 bg-slate-400" />
                        <div className="w-full rounded-xl bg-white p-8 drop-shadow-xl">
                            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                                <div className="text-md w-24 text-center">
                                    <span className="font-bold text-black">
                                        10:30
                                    </span>
                                    <br />
                                    <span className="text-slate-500">
                                        11:30
                                    </span>
                                </div>
                                <img
                                    src={img}
                                    className="h-48 rounded object-cover md:aspect-[4/3]"
                                />
                                <div className="flex flex-col">
                                    <div>
                                        <span className="inline text-xl font-bold">
                                            {title}
                                        </span>
                                        {", "}
                                        <span className="inline text-lg text-slate-500">
                                            {address}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-lg">{stars}</span>{" "}
                                        3.1, Attraction
                                    </div>

                                    <div className="mt-4">{desc}</div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-16 h-3 w-0.5 bg-slate-400" />
                    </div>
                );
            case "transport":
                let { mode, fromPos, toPos } = event;
                return (
                    <div className="w-full max-w-4xl">
                        <div className="ml-16 h-3 w-0.5 bg-slate-400" />
                        <div className="ml-10 flex flex-row items-center space-x-4">
                            <div className="bg-green-200 rounded-full p-3 drop-shadow-lg">
                                <PaperAirplaneIcon className="w-6 rotate-90 transform" />
                            </div>
                            <div>travel from {fromPos} to {toPos}</div>
                        </div>
                        <div className="ml-16 h-3 w-0.5 bg-slate-400" />
                    </div>
                );
        }
    };

return (
    <div className="mx-4 flex flex-col items-center">
        {itinerary.map((event) => (
            <EventCard event={event} />
        ))}
    </div>
);
};

export const TripSummaryPage: FC = () => {
    let itineraryTimeline: (Transport | Location)[] = [
        { kind: "location", name: "Ubud, Bali" },
        {
            kind: "transport",
            mode: "plane",
            fromPos: "Ubud",
            toPos: "Seminyak",
        },
        { kind: "location", name: "Seminyak, Bali" },
        {
            kind: "transport",
            mode: "car",
            fromPos: "Seminyak",
            toPos: "Nusa Dua",
        },
        { kind: "location", name: "Nusa Dua, Bali" },
        { kind: "location", name: "Otto, Bali" },
    ];

    let itineraryDetail: (Transport | Activity)[] = [
        {
            kind: "activity",
            stars: "★★★☆☆",
            title: "Jalan Malioboro",
            address: "Yogyakarta,\xa0Indonesia",
            desc: "Head to Taman Sari to view royal buildings and pleasure gardens designed for regal relaxation. Built under the command of Sultan Hamengkubuwono I as a house of rest and entertainment for the royal family",
            img: "https://images.unsplash.com/photo-1543874768-af0b9c4090d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        },
        {
            kind: "transport",
            mode: "plane",
            fromPos: "Ubud",
            toPos: "Seminyak",
        },
        {
            kind: "transport",
            mode: "car",
            fromPos: "Seminyak",
            toPos: "Nusa Dua",
        },
    ];

    return (
        <div className="container mx-auto">
            <ItineraryTimelineSection itinerary={itineraryTimeline} />
            <ItineraryDetailSection itinerary={itineraryDetail} />
        </div>
    );
};

export default TripSummaryPage;
