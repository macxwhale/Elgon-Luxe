import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, TreePine } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Lodge {
  name: string;
  location: string;
  description: string;
  image: string;
}

const ugandaLodges: Lodge[] = [
  {
    name: "Gorilla Forest Lodge",
    location: "Bwindi Impenetrable Forest, Uganda",
    description:
      "Sensationally situated on a hillside overlooking the jungle canopy, the newly revamped Gorilla Forest Lodge is the most beautiful and luxurious place to stay within Bwindi Impenetrable Forest National Park itself. It is also the best-located for gorilla trekking. Ten standalone villas are set apart in the forest, each with a private viewing deck from which you can watch monkeys, plus rare and wonderful birds and butterflies.",
    image: "/placeholder.svg",
  },
  {
    name: "Nkuringo Gorilla Lodge",
    location: "Bwindi, Uganda",
    description:
      "Nkuringo Gorilla Lodge, located in the park's southern section of Bwindi, provides superb accommodation and base for gorilla trekking in Uganda. The multi-award-winning eco-lodge offers mid-range to luxury forest escapes with multiple options for travellers, including private garden cottages, family villas, and luxury suites perched on a forested ridge with stunning 360 views of the Virunga Volcano Mountains.",
    image: "/placeholder.svg",
  },
  {
    name: "Mweya Safari Lodge",
    location: "Queen Elizabeth National Park, Uganda",
    description:
      "Mweya Safari Lodge offers visitors an unforgettable experience. Located on a peninsula within the heart of the Queen Elizabeth National Park, Mweya Safari Lodge is surrounded by the magical Rwenzori Mountains aptly described as the 'Mountains of the Moon'. To the east, lie the guardians of the birthplace of mankind, the Great Rift Valley hills.",
    image: "/placeholder.svg",
  },
  {
    name: "Lemala Wildwaters Lodge",
    location: "Jinja, Uganda",
    description:
      "Wildwaters Lodge lies on a unique private island mid-stream within the mighty River Nile in Uganda. It's in a sublime location and only reached by boat which makes it a very adventurous place to stay. It is uniquely perched on granite rocks with dramatic and exciting rapids roaring all around. Activities include heart-pounding white-water rafting or bungee jumping and gentler horse riding or fishing.",
    image: "/placeholder.svg",
  },
];

const tanzaniaLodges: Lodge[] = [
  {
    name: "Serengeti Pioneer Camp",
    location: "Serengeti, Tanzania",
    description:
      "Located in South Central Serengeti within the Moru Kopjes area, Serengeti Pioneer Camp is ideally situated to offer superlative access to the annual migration and the 'Big 5' with sweeping views overlooking Moru Kopjes, Lake Magadi and the endless plains. The camp captures the original essence of the mobile African safari.",
    image: "/placeholder.svg",
  },
  {
    name: "Namiri Plains",
    location: "Serengeti, Tanzania",
    description:
      "The luxury Namiri Plains is one of Africa's best locations for observing big cats. Located in the vast and remote grasslands of the eastern Serengeti, Namiri Plains provides a tranquil and secluded retreat within a wildlife-rich environment with high-quality, year-round game viewing and luxurious accommodations.",
    image: "/placeholder.svg",
  },
  {
    name: "Singita Sasakwa",
    location: "Serengeti, Tanzania",
    description:
      "Built in the style of a stately Edwardian manor house and featuring a light and airy atmosphere, Sasakwa offers panoramic views, a sense of immense freedom, and stillness. Striking the perfect balance between casual luxury and sophisticated elegance, the lodge features a grand entrance, wraparound verandas, silver candelabras and coveted antiques.",
    image: "/placeholder.svg",
  },
  {
    name: "&Beyond Lake Manyara Tree Lodge",
    location: "Lake Manyara, Tanzania",
    description:
      "A treetop retreat shaped by light, leaf and quiet discovery. Tucked into the upper branches of an ancient mahogany grove and embraced by the dramatic Rift Valley, this lodge offers a deeply immersive escape. Elevated on stilts, ten treehouse suites overlook dappled glades where elephants sometimes wander below.",
    image: "/placeholder.svg",
  },
  {
    name: "Meliá Ngorongoro Lodge",
    location: "Ngorongoro, Tanzania",
    description:
      "Designed with the utmost respect for the environment, this lodge enables you to sleep with the sounds of nature in the background, wake up admiring the Ngorongoro Crater, and enjoy a truly extraordinary safari experience. A 600-meter deep crater, more than 25,000 animals and 2.5 million years of history await.",
    image: "/placeholder.svg",
  },
  {
    name: "Sanctuary Ngorongoro Crater Camp",
    location: "Ngorongoro, Tanzania",
    description:
      "Close to the rim of the largest extinct volcano in the world, the simple meets the sublime. Just 10 impeccable tents give easy access to the great caldera that is home to thousands of animals, including all of the Big Five – among them, the largest of the remaining bull tusker elephants in Africa.",
    image: "/placeholder.svg",
  },
  {
    name: "Zanzibar White Sands",
    location: "Paje, Zanzibar",
    description:
      "A sanctuary of peace and harmony, an intimate and personalized luxury experience of Zanzibar, on the spectacular white sandy beachfront of Paje. The island of Zanzibar, known locally as Ugunja, is a beautiful and historically rich destination, at the crossroads of African and Arabic cultures.",
    image: "/placeholder.svg",
  },
  {
    name: "&Beyond Mnemba Island",
    location: "Mnemba Island, Zanzibar",
    description:
      "No shoes. No worries. Nowhere to be. Just the slow rhythm of island life, and the freedom to disappear into it. This is barefoot luxury where you'll feel like the only soul on earth. With only 12 Bandas, Mnemba Island feels entirely your own. Drift from bed to beach, with nothing between you and the ocean but white sand.",
    image: "/placeholder.svg",
  },
  {
    name: "SafiraBlu Villas",
    location: "Zanzibar",
    description:
      "The name SafiraBlu celebrates the sapphire waters of the Indian Ocean, where one shade of blue blends seamlessly into countless others: the connection between soul and sea, of one to many, and of self to nature. Escape the hustle and bustle of everyday life and enter a realm where relaxation is an art form.",
    image: "/placeholder.svg",
  },
];

const rwandaLodges: Lodge[] = [
  {
    name: "One&Only Gorilla's Nest",
    location: "Volcanoes National Park, Rwanda",
    description:
      "Surrounded by swaying eucalyptus trees, One&Only Gorilla's Nest awakens a wild spirit of adventure. A place that encourages you to gaze into the mirror through eye-opening encounters with majestic mountain gorillas, our exceptional resort on the edge of Volcanoes National Park reveals the captivating secrets of Rwanda.",
    image: "/placeholder.svg",
  },
  {
    name: "Singita Kwitonda Lodge",
    location: "Volcanoes National Park, Rwanda",
    description:
      "Set right on the edge of Volcanoes National Park in Rwanda, where more than a third of the world's remaining mountain gorillas find refuge, Kwitonda's unrivalled position puts life changing gorilla trekking experiences within easy reach. Each of the eleven luxurious suites features a private heated plunge pool and breathtaking volcano views.",
    image: "/placeholder.svg",
  },
  {
    name: "Wilderness Sabyinyo",
    location: "Volcanoes National Park, Rwanda",
    description:
      "In the foothills of the mist-shrouded Virunga Massif nestles beautiful Sabyinyo. Here, the true spirit of conservation and rehabilitation can be felt everywhere: in our community-inspired luxurious lodge, our bountiful organic gardens, and of course, the star attraction: Volcanoes National Park's beloved mountain gorillas.",
    image: "/placeholder.svg",
  },
  {
    name: "Hemingways Retreat Kigali",
    location: "Kigali, Rwanda",
    description:
      "Nestled in the leafy Kiyovu neighbourhood, Hemingways Retreat Kigali is Rwanda's first eco-conscious luxury boutique hotel, a serene base for exploring the city's vibrant markets, cultural landmarks, and moving memorials. With just 20 individually styled rooms and suites, it offers an atmosphere of quiet elegance.",
    image: "/placeholder.svg",
  },
];

const zambiaLodges: Lodge[] = [
  {
    name: "Royal Livingstone by Anantara",
    location: "Victoria Falls, Zambia",
    description:
      "The Royal Livingstone is located on the Zambian side of the Zambezi River in Mosi-oa-Tunya National Park, with free unlimited access to Victoria Falls. Bask in graceful safari style only steps from one of the Seven Natural Wonders of the World. Wake up to the sight of zebras wandering the hotel grounds.",
    image: "/placeholder.svg",
  },
  {
    name: "Royal Chundu",
    location: "Zambezi River, Zambia",
    description:
      "An authentic Zambian experience that uplifts both traveller & community. Zambia's first and only Relais & Châteaux property, Royal Chundu encompasses two lodges, River Lodge and Island Lodge, both with views of the Zambezi. 10 exclusive River Lodge suites are set among the trees as nests of seclusion and peace.",
    image: "/placeholder.svg",
  },
  {
    name: "Matetsi Victoria Falls",
    location: "Victoria Falls, Zimbabwe",
    description:
      "The ultimate safari experience and idyllic accommodation retreat from which to visit the largest waterfall on planet Earth. Highly acclaimed for exquisite distinctly African contemporary interiors, Matetsi Victoria Falls features polished earth finishes, lustrous hand-beaten local copper detailing, and seamless flows between interior and exterior living spaces.",
    image: "/placeholder.svg",
  },
];

const botswanaLodges: Lodge[] = [
  {
    name: "Xigera Safari Lodge",
    location: "Okavango Delta, Botswana",
    description:
      "The story of Xigera is one of renewal, reverence, and return. Born from legacy and shaped by vision, this is not just a safari lodge, it is a handcrafted love letter to the Okavango Delta: to its wildlife, its people, and its future. Here, nothing is scripted. Everything is felt.",
    image: "/placeholder.svg",
  },
  {
    name: "Eagle Island Lodge by Belmond",
    location: "Okavango Delta, Botswana",
    description:
      "Discover your explorer's spirit at Eagle Island Lodge, in the very heart of the Okavango Delta. Limitless floodplains, pristine waterways and abundant food attract elephants, buffalo, antelope and other large herds. Eagle Island Lodge redefines the age-old art of safari living – on land, water and from the air.",
    image: "/placeholder.svg",
  },
  {
    name: "Chief's Camp",
    location: "Okavango Delta, Botswana",
    description:
      "This intimate, handcrafted camp is set on the extravagantly beautiful Chief's Island amid the vast watery splendor of the Okavango Delta. Chief's Camp is quite literally surrounded by what may well be the richest concentration of animals in Botswana, year-round.",
    image: "/placeholder.svg",
  },
  {
    name: "Savute Elephant Lodge",
    location: "Chobe Desert, Botswana",
    description:
      "Situated in a remote corner of the Chobe Desert, various animal clans congregate at the Savute. Safari lovers are enamoured by the region's geology, along with the high concentrations of majestic elephants and lions in the area. Our eco-conscious and ideally located oasis.",
    image: "/placeholder.svg",
  },
  {
    name: "Ghoha Hills Savuti Lodge",
    location: "Chobe National Park, Botswana",
    description:
      "Ghoha Hills Savuti Lodge aims to provide discerning travellers with a unique, first class safari experience in an eco-friendly environment. The lodge lies on the ledges of Ghoha Hills in the Savuti area of the Chobe National Park, supporting the mission of the Global Alliance of National Parks.",
    image: "/placeholder.svg",
  },
];

const southAfricaLodges: Lodge[] = [
  {
    name: "The Silo Hotel",
    location: "Cape Town, South Africa",
    description:
      "The Silo Hotel is a sanctuary in the city celebrating art, style, and design. This architectural masterpiece towers above the V&A Waterfront defined by its shimmering pillowed-glass windows which offer panoramic views stretching from Table Mountain to the Table Bay harbour.",
    image: "/placeholder.svg",
  },
  {
    name: "Ellerman House",
    location: "Cape Town, South Africa",
    description:
      "More than a luxurious escape set in a breathtaking location, this enchanting property is a home away from home. Each of the 13 individually-styled rooms exudes comfort and sophistication, featuring exquisite decor and eye-catching South African art.",
    image: "/placeholder.svg",
  },
  {
    name: "The Twelve Apostles Hotel & Spa",
    location: "Cape Town, South Africa",
    description:
      "Poised above the Atlantic Ocean in the shadow of South Africa's most famous mountain range, The Twelve Apostles Hotel and Spa offers an exquisite retreat at the tip of the African continent. The only property located on the spectacular coastal road linking Cape Town and Camps Bay.",
    image: "/placeholder.svg",
  },
  {
    name: "Lion Sands River Lodge",
    location: "Kruger, South Africa",
    description:
      "Situated on the lush banks of the Sabie River, Lion Sands River Lodge is the pulsating heart of Lion Sands Game Reserve. Here, modern charm blends with traditional luxury, creating a profoundly connected safari experience in one of Africa's premier wildlife settings.",
    image: "/placeholder.svg",
  },
  {
    name: "Royal Malewane",
    location: "Kruger, South Africa",
    description:
      "Experience the wild heart of the African bush in comfort, style and seclusion at Royal Malewane. Encounter the wonders of the Greater Kruger ecosystem under the expert guidance of an award-winning safari team. Enjoy luxurious surroundings and magnificent hospitality.",
    image: "/placeholder.svg",
  },
  {
    name: "Thornybush Game Lodge",
    location: "Greater Kruger, South Africa",
    description:
      "One of the most well-known and oldest lodges in the safari industry, Thornybush Game Lodge was one of the first commercial camps in South Africa. Private and stylish, each one of Game Lodge's 16 luxury suites comes with everything you may need.",
    image: "/placeholder.svg",
  },
  {
    name: "Singita Boulders Lodge",
    location: "Sabi Sands, South Africa",
    description:
      "Echoing the organic forms of the ancient rocks scattered along the banks of the Sand River, Boulders was moulded around and by the elements. An open, warm and grounding space, it anchors while allowing you to embrace the wilderness all around you.",
    image: "/placeholder.svg",
  },
  {
    name: "Sabi Sabi Earth Lodge",
    location: "Sabi Sands, South Africa",
    description:
      "A masterpiece of organic design, architecture and dramatic minimalism, Earth Lodge seamlessly integrates with nature. This living gallery of the senses is a must for those who appreciate the art of luxuriating among the animals of the African continent.",
    image: "/placeholder.svg",
  },
];

const countries = [
  { id: "uganda", label: "Uganda", lodges: ugandaLodges },
  { id: "tanzania", label: "Tanzania", lodges: tanzaniaLodges },
  { id: "rwanda", label: "Rwanda", lodges: rwandaLodges },
  { id: "zambia", label: "Zambia & Zimbabwe", lodges: zambiaLodges },
  { id: "botswana", label: "Botswana", lodges: botswanaLodges },
  { id: "south-africa", label: "South Africa", lodges: southAfricaLodges },
];

const LodgeCard = ({ lodge }: { lodge: Lodge }) => (
  <div className="group bg-card rounded-sm overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300">
    <div className="aspect-[4/3] overflow-hidden relative">
      <img
        src={lodge.image}
        alt={lodge.name}
        className="w-full h-full object-cover image-hover group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
        <TreePine className="h-3 w-3" />
        Lodge
      </div>
    </div>

    <div className="p-6">
      <h3 className="font-serif text-xl font-medium text-foreground mb-2">
        {lodge.name}
      </h3>

      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
        <MapPin className="h-4 w-4 text-gold" />
        <span>{lodge.location}</span>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
        {lodge.description}
      </p>

      <Button
        asChild
        variant="outline"
        className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background font-medium uppercase tracking-wider text-xs"
      >
        <Link to="/about#enquiry">Enquire</Link>
      </Button>
    </div>
  </div>
);

const CampsLodges = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/safari.jpg"
        imageAlt="Safari landscape with acacia trees"
        title="Camps & Lodges"
        subtitle="Exceptional safari accommodations across East and Southern Africa"
        overlayOpacity="medium"
        minHeight="min-h-[60vh]"
      />

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Where Luxury Meets Wilderness
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              From intimate bush camps to world-renowned lodges, we curate
              accommodations that offer the perfect blend of comfort, authenticity,
              and unparalleled wildlife access. Each property is handpicked for its
              exceptional service, location, and commitment to conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Lodges by Country */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Featured Accommodations
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of premier safari camps and lodges across Africa
            </p>
          </div>

          <Tabs defaultValue="uganda" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-10 bg-transparent h-auto">
              {countries.map((country) => (
                <TabsTrigger
                  key={country.id}
                  value={country.id}
                  className="data-[state=active]:bg-gold data-[state=active]:text-charcoal bg-background/50 font-semibold uppercase tracking-wider text-xs px-4 py-2"
                >
                  {country.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {countries.map((country) => (
              <TabsContent key={country.id} value={country.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {country.lodges.map((lodge) => (
                    <LodgeCard key={lodge.name} lodge={lodge} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Why Book Through Elgon Luxe?
              </h2>
              <div className="w-20 h-0.5 bg-gold mb-8" />

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Insider Access
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Priority bookings and exclusive rates at Africa's most
                      sought-after properties.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Expert Guidance
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Our team has personally visited each property to ensure it
                      meets our standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Seamless Integration
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Combine lodges with charter flights and custom itineraries
                      for a complete experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Conservation Focus
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      We partner with camps committed to wildlife conservation
                      and community development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/safari.jpg"
                alt="Safari landscape"
                className="w-full h-[400px] object-cover rounded-sm shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ivory mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-ivory/70 max-w-2xl mx-auto mb-8">
            Let us help you find the perfect camp or lodge for your African
            adventure. Our team will match you with properties that suit your
            style and safari goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold-light font-semibold uppercase tracking-wider px-10"
          >
            <Link to="/about#enquiry">Enquire Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CampsLodges;
