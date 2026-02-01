import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface AircraftSpec {
  label: string;
  value: string;
}

interface Aircraft {
  name: string;
  images: string[];
  description: string;
  specs: AircraftSpec[];
}

const bushPlanes: Aircraft[] = [
  {
    name: "Cessna 208 Caravan",
    images: [
      "/images/aircraft/c208-caravan-exterior.jpeg",
      "/images/aircraft/c208-caravan-interior.jpg",
    ],
    description:
      "Single engine non pressurized turbo prop. Mostly referred to as the African donkey, because of its capability to operate in dirty airstrips, high density altitudes and short field performance. The normal commuter Caravan takes up to 12 seats and the EXECUTIVE caravan takes up to 8 seats.",
    specs: [
      { label: "Range", value: "1,070 nm" },
      { label: "Speed", value: "140 kts/h" },
      { label: "Cabin Height", value: "4 ft 3in" },
      { label: "Cabin Width", value: "5 ft 2in" },
      { label: "Cabin Length", value: "16 ft 10in" },
    ],
  },
  {
    name: "King Air B200",
    images: [
      "/images/aircraft/king-air-b200-exterior.jpg",
      "/images/aircraft/king-air-b200-interior.jpg",
    ],
    description:
      "This is a TWIN ENGINE turbo prop pressurized aircraft. It's versatile in bush flying and power. Higher ceiling ensures smooth flight with balanced atmospheric pressure and oxygen levels.",
    specs: [
      { label: "Range", value: "1,400 nm" },
      { label: "Speed", value: "290 kts/h" },
      { label: "Seats", value: "8 pax" },
      { label: "Cabin Height", value: "4 ft 10in" },
      { label: "Cabin Width", value: "4 ft 10in" },
      { label: "Cabin Length", value: "16 ft 8in" },
    ],
  },
  {
    name: "Pilatus PC-12",
    images: [
      "/images/aircraft/pilatus-pc12-exterior.jpg",
      "/images/aircraft/pilatus-pc12-interior.jpg",
    ],
    description:
      "A popular single-engine Pressurized turboprop aircraft, known for its versatility, reliability, and performance. It's a popular choice for private charters, air ambulance services, and special missions due to its ability to operate from short and unpaved airstrips while offering a comfortable cabin.",
    specs: [
      { label: "Range", value: "1,700 nm" },
      { label: "Speed", value: "290 kts/h" },
      { label: "Seats", value: "8 pax" },
      { label: "Cabin Height", value: "4 ft 10in" },
      { label: "Cabin Width", value: "5 ft 0in" },
      { label: "Cabin Length", value: "16 ft 0in" },
    ],
  },
];

const businessJets: Aircraft[] = [
  {
    name: "Cessna Citation Excel C560",
    images: [
      "/images/aircraft/citation-excel-c560-exterior.jpg",
      "/images/aircraft/citation-excel-c560-interior.jpg",
    ],
    description:
      "The Cessna Citation Excel 560 is a popular business jet known for its mid-cabin comfort and light-jet operating flexibility. It's a versatile aircraft, capable of operating from shorter runways while offering a stand-up cabin, making it a popular choice for various missions.",
    specs: [
      { label: "Range", value: "1,850 nm" },
      { label: "Speed", value: "433 kts/h" },
      { label: "Seats", value: "7 pax" },
      { label: "Cabin Height", value: "5 ft 7in" },
      { label: "Cabin Width", value: "5 ft 5in" },
      { label: "Cabin Length", value: "18 ft 5in" },
    ],
  },
  {
    name: "Pilatus PC-24",
    images: ["/placeholder.svg"],
    description:
      'Pilatus bills the PC-24 as the "Super Versatile Jet" in recognition of its above average performance on short and unpaved runways. The short take-off and landing performance matches that of an advanced turboprop, giving it the capability of operation on both paved and unimproved surfaces, allowing it access to as many as 21,000 airports worldwide.',
    specs: [
      { label: "Range", value: "2,040 nm" },
      { label: "Speed", value: "440 kts/h" },
      { label: "Seats", value: "10 pax" },
      { label: "Cabin Height", value: "5 ft 1in" },
      { label: "Cabin Width", value: "5 ft 7in" },
      { label: "Cabin Length", value: "23 ft 0in" },
    ],
  },
  {
    name: "Challenger 3500",
    images: [
      "/images/aircraft/challenger-3500-exterior.jpg",
      "/images/aircraft/challenger-3500-interior.jpg",
    ],
    description:
      "The Bombardier Challenger 3500 is a cutting-edge super-midsize business jet featuring the most technologically advanced cabin in its class, introducing productivity-enhancing features such as the industry's first voice-controlled cabin and the revolutionary Nuage seat. It offers outstanding field performance and steep-approach capabilities.",
    specs: [
      { label: "Range", value: "3,400 nm" },
      { label: "Speed", value: "460 kts/h" },
      { label: "Seats", value: "10 pax" },
      { label: "Cabin Height", value: "6 ft 0in" },
      { label: "Cabin Width", value: "7 ft 2in" },
      { label: "Cabin Length", value: "25 ft 2in" },
    ],
  },
  {
    name: "Bombardier Challenger 650",
    images: [
      "/images/aircraft/challenger-650-exterior.jpg",
      "/images/aircraft/challenger-650-interior.jpg",
    ],
    description:
      "The Bombardier Challenger 650 is a business jet known for its transcontinental range and luxurious, spacious cabin. It's a popular choice for private and executive travel, offering a blend of performance, comfort, and advanced technology.",
    specs: [
      { label: "Range", value: "4,000 nm" },
      { label: "Speed", value: "541 kts/h" },
      { label: "Seats", value: "10 pax" },
      { label: "Cabin Height", value: "6 ft 0in" },
      { label: "Cabin Width", value: "7 ft 1in" },
      { label: "Cabin Length", value: "25 ft 7in" },
    ],
  },
  {
    name: "Bombardier Global 7500",
    images: [
      "/images/aircraft/global-7500-exterior.jpg",
      "/images/aircraft/global-7500-interior.jpg",
    ],
    description:
      "The Bombardier Global 7500 is a long-range business jet known for its speed, range, and luxurious cabin. It can operate in and out of shorter runways than many other aircraft in its class, providing access to a wider range of airports. A top-of-the-line business jet combining exceptional performance with luxury.",
    specs: [
      { label: "Range", value: "7,700 nm" },
      { label: "Speed", value: "567 kts/h" },
      { label: "Seats", value: "19 pax" },
      { label: "Cabin Height", value: "6 ft 2in" },
      { label: "Cabin Width", value: "8 ft 0in" },
      { label: "Cabin Length", value: "54 ft 5in" },
    ],
  },
  {
    name: "Bombardier Global 6500",
    images: [
      "/images/aircraft/global-6500-exterior.jpg",
      "/images/aircraft/global-6500-interior.jpeg",
    ],
    description:
      "The Bombardier Global 6500 is an ultra-long-range business jet known for its spacious cabin, advanced technology, and impressive performance capabilities. It offers a luxurious travel experience with a range of features designed for comfort and efficiency.",
    specs: [
      { label: "Range", value: "6,600 nm" },
      { label: "Speed", value: "516 kts/h" },
      { label: "Seats", value: "17 pax" },
      { label: "Cabin Height", value: "6 ft 2in" },
      { label: "Cabin Width", value: "7 ft 11in" },
      { label: "Cabin Length", value: "40 ft 9in" },
    ],
  },
  {
    name: "Bombardier Global 5500",
    images: [
      "/images/aircraft/global-5500-exterior.jpg",
      "/images/aircraft/global-5500-interior.jpg",
    ],
    description:
      "The Bombardier Global 5500 is an ultra-long-range business jet known for its spacious cabin, advanced technology, and impressive performance. It combines long-range capability with a comfortable and technologically advanced cabin.",
    specs: [
      { label: "Range", value: "5,900 nm" },
      { label: "Speed", value: "516 kts/h" },
      { label: "Seats", value: "16 pax" },
      { label: "Cabin Height", value: "6 ft 2in" },
      { label: "Cabin Width", value: "7 ft 11in" },
      { label: "Cabin Length", value: "40 ft 9in" },
    ],
  },
  {
    name: "Bombardier Global Express",
    images: [
      "/images/aircraft/global-express-exterior.jpg",
      "/images/aircraft/global-express-interior.jpeg",
    ],
    description:
      "Bombardier Global Express is a popular choice for those seeking a high-performance, long-range business jet with a focus on comfort and luxury. It was designed for luxury travel, with cabin configurations offering a variety of seating and living spaces.",
    specs: [
      { label: "Range", value: "6,226 nm" },
      { label: "Speed", value: "488 kts/h" },
      { label: "Seats", value: "19 pax" },
      { label: "Cabin Height", value: "6 ft 3in" },
      { label: "Cabin Width", value: "8 ft 2in" },
      { label: "Cabin Length", value: "48 ft 4in" },
    ],
  },
  {
    name: "Gulfstream G600",
    images: [
      "/images/aircraft/gulfstream-g600-exterior.jpg",
      "/images/aircraft/gulfstream-g600-interior.jpg",
    ],
    description:
      "The Gulfstream G600 boasts a remarkable combination of speed and range, spacious cabin and a new level of comfort. The aircraft features up to four living areas, allowing for a flexible configuration that suits your needs—be it for work, dining, entertainment, or rest.",
    specs: [
      { label: "Range", value: "6,600 nm" },
      { label: "Speed", value: "513 kts/h" },
      { label: "Seats", value: "19 pax" },
      { label: "Cabin Height", value: "6 ft 2in" },
      { label: "Cabin Width", value: "7 ft 7in" },
      { label: "Cabin Length", value: "45 ft 2in" },
    ],
  },
  {
    name: "Gulfstream G500",
    images: [
      "/images/aircraft/gulfstream-g500-exterior.jpg",
      "/images/aircraft/gulfstream-g500-interior.jpg",
    ],
    description:
      "The Gulfstream G500 is a long-range business jet known for its performance and advanced technology. It features a spacious cabin with three living areas, advanced avionics, and powerful engines. The aircraft offers a high level of comfort with reclining seats, a full galley, and a private lavatory.",
    specs: [
      { label: "Range", value: "5,300 nm" },
      { label: "Speed", value: "488 kts/h" },
      { label: "Seats", value: "19 pax" },
      { label: "Cabin Height", value: "7 ft 7in" },
      { label: "Cabin Width", value: "6 ft 2in" },
      { label: "Cabin Length", value: "41 ft 6in" },
    ],
  },
  {
    name: "Gulfstream G400",
    images: [
      "/images/aircraft/gulfstream-g400-exterior.jpg",
      "/images/aircraft/gulfstream-g400-interior.jpg",
    ],
    description:
      "The Gulfstream G400 is designed for long-range flights. The cabin is designed for comfort and flexibility, with customizable floor plans and a large forward galley. It offers a blend of performance, comfort, and technology, making it suitable for various mission profiles.",
    specs: [
      { label: "Range", value: "4,200 nm" },
      { label: "Speed", value: "470 kts/h" },
      { label: "Seats", value: "12 pax" },
      { label: "Cabin Height", value: "6 ft 2in" },
      { label: "Cabin Width", value: "7 ft 7in" },
      { label: "Cabin Length", value: "42 ft 5in" },
    ],
  },
];

const AircraftCard = ({ aircraft }: { aircraft: Aircraft }) => {
  const hasMultipleImages = aircraft.images.length > 1;

  return (
    <Card className="overflow-hidden bg-card border-border/50 hover:shadow-elevated transition-shadow duration-300">
      <div className="aspect-[16/10] overflow-hidden relative">
        {hasMultipleImages ? (
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full -ml-0">
              {aircraft.images.map((image, index) => (
                <CarouselItem key={index} className="h-full pl-0">
                  <img
                    src={image}
                    alt={`${aircraft.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-8 w-8 bg-background/80 hover:bg-background border-none" />
            <CarouselNext className="right-2 h-8 w-8 bg-background/80 hover:bg-background border-none" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {aircraft.images.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-background/60"
                />
              ))}
            </div>
          </Carousel>
        ) : (
          <img
            src={aircraft.images[0]}
            alt={aircraft.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-medium text-foreground mb-3">
          {aircraft.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {aircraft.description}
        </p>
        <div className="border-t border-border/50 pt-4">
          <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
            General Specs
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {aircraft.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{spec.label}:</span>
                <span className="text-foreground font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const FeaturedAircraft = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Featured Aircraft
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse fleet of aircraft, from versatile bush planes
            for remote destinations to luxurious long-range business jets for
            intercontinental travel.
          </p>
        </div>

        <Tabs defaultValue="bush-planes" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 bg-background/50">
            <TabsTrigger
              value="bush-planes"
              className="data-[state=active]:bg-gold data-[state=active]:text-charcoal font-semibold uppercase tracking-wider text-sm"
            >
              Bush Planes
            </TabsTrigger>
            <TabsTrigger
              value="business-jets"
              className="data-[state=active]:bg-gold data-[state=active]:text-charcoal font-semibold uppercase tracking-wider text-sm"
            >
              Business Jets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bush-planes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bushPlanes.map((aircraft) => (
                <AircraftCard key={aircraft.name} aircraft={aircraft} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business-jets">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessJets.map((aircraft) => (
                <AircraftCard key={aircraft.name} aircraft={aircraft} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
