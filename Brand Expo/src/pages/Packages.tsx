import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Star, Zap, Shield, Rocket, Award } from "lucide-react";

const SPONSOR_PACKAGES = [
  {
    name: "Platinum Sponsor",
    price: "$500,000",
    icon: <Star className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-600/20",
    borderColor: "border-cyan-400",
    badge: "Title Sponsor",
    features: [
      "Title branding recognition (e.g. 'sponsor presents Brandexpo 2026')",
      "Largest premium booth (10x20)",
      "Logo on all marketing materials (banners, flyers, digital ads)",
      "On-stage recognition and speaking opportunity (Zip 103)",
      "Brand mentions throughout the event",
      "Opportunity for major brand activation (vehicle display, sampling, demos)",
      "Social media features before, during, and after the event",
      "Feature in press release & media interviews"
    ]
  },
  {
    name: "Gold Sponsor",
    price: "$250,000",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/20 to-orange-600/20",
    borderColor: "border-yellow-400/50",
    features: [
      "Prominent logo placement on event signage and digital promotions",
      "Standard booth space in a high-traffic area (Tent optional) 10x10",
      "On-stage brand mention",
      "Opportunity for product sampling or brand engagement activity",
      "Inclusive of post-event appreciation content"
    ]
  },
  {
    name: "Silver Sponsor",
    price: "$150,000",
    icon: <Shield className="w-8 h-8 text-gray-300" />,
    color: "from-gray-400/20 to-gray-600/20",
    borderColor: "border-gray-400/50",
    features: [
      "Logo placement on select event signage",
      "Booth and space (Tent)",
      "Brand mention during the event",
      "Permission to distribute promotional materials",
      "Social media mention"
    ]
  },
  {
    name: "Bronze Sponsor",
    price: "$75,000",
    icon: <Award className="w-8 h-8 text-orange-400" />,
    color: "from-orange-400/20 to-red-600/20",
    borderColor: "border-orange-400/50",
    features: [
      "Logo on sponsor board",
      "Brand acknowledgment by media post"
    ]
  }
];

const EXHIBITOR_PACKAGES = [
  {
    name: "Platinum Package",
    subtitle: "Brand Authority",
    price: "$85,000",
    icon: <Star className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-600/20",
    borderColor: "border-cyan-400",
    badge: "Prime Booth Location",
    features: [
      { label: "Exhibition Space", value: "10x20" },
      { label: "Interview", value: "10 minute premium brand interview (host)" },
      { label: "Furniture", value: "Five (5) chairs, Two (2) 6ft tables" },
      { label: "Branding", value: "All event promotional materials, Digital ads & banners, Event backdrops" },
      { label: "Media Exposure", value: "Multiple Instagram Stories & Posts, On-stage brand mention (opening or peak hour)" },
    ]
  },
  {
    name: "Gold Package",
    subtitle: "Growth Accelerator",
    price: "$75,000",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/20 to-orange-600/20",
    borderColor: "border-yellow-400/50",
    features: [
      { label: "Exhibition Space", value: "10x10" },
      { label: "Interview", value: "5-minute brand interview (host)" },
      { label: "Furniture", value: "Two (2) chairs, One (1) 6ft table" },
      { label: "Branding", value: "Event flyers, digital promotions" },
      { label: "Media Exposure", value: "Four (4) Instagram Story mentions" },
    ]
  },
  {
    name: "Silver Package",
    subtitle: "Brand Starter",
    price: "$55,000",
    icon: <Shield className="w-8 h-8 text-gray-300" />,
    color: "from-gray-400/20 to-gray-600/20",
    borderColor: "border-gray-400/50",
    features: [
      { label: "Exhibition Space", value: "10x10" },
      { label: "Interview", value: "-" },
      { label: "Furniture", value: "One (1) chair, One (1) 4ft table" },
      { label: "Branding", value: "Logo placement on event flyers" },
      { label: "Media Exposure", value: "One (1) Instagram Story mention" },
    ]
  }
];

const LAUNCHPAD = {
  name: "LaunchPad Package",
  subtitle: "Combo Package",
  description: "Designed to support upcoming entrepreneurs, creatives, and student-owned businesses by providing an affordable platform to showcase their talent and products. Offers valuable exposure, hands-on experience, and access to a diverse audience.",
  features: [
    { label: "Exhibition Space", value: "10x10 shared space (2 emerging entrepreneurs)" },
    { label: "Furniture", value: "One (2) 4ft table, One (2) chair" },
    { label: "Branding", value: "-" },
    { label: "Media Exposure", value: "Social media reposts, Post-event recap" },
  ],
  addons: [
    { label: "Extra table space", price: "$5,000" },
    { label: "Brand interview clip", price: "$5,000" },
    { label: "Additional social media post", price: "$3,000" },
  ]
};

export default function Packages() {
  const [activeTab, setActiveTab] = useState<"sponsor" | "exhibitor">("sponsor");
  const [isDiscountActive, setIsDiscountActive] = useState(false);

  useEffect(() => {
    // Check if current date is before March 10, 2026
    const currentDate = new Date();
    const discountEndDate = new Date('2026-03-10T23:59:59');
    setIsDiscountActive(currentDate <= discountEndDate);
  }, []);

  return (
    <div className="relative z-10 flex-grow flex flex-col items-center container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Event <span className="text-cyan-400">Packages</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">Choose the perfect tier to showcase your brand at the 2026 Brand Expo.</p>
          
          {/* Tabs */}
          <div className="flex sm:inline-flex flex-col sm:flex-row bg-[#020817]/80 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-full p-1.5 mb-8 w-full sm:w-auto mx-auto gap-2 sm:gap-0">
            <button
              onClick={() => setActiveTab("sponsor")}
              className={`w-full sm:w-auto px-8 py-3 rounded-xl sm:rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "sponsor" 
                  ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sponsor Packages
            </button>
            <button
              onClick={() => setActiveTab("exhibitor")}
              className={`w-full sm:w-auto px-8 py-3 rounded-xl sm:rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "exhibitor" 
                  ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Exhibitor Packages
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "sponsor" ? (
            <motion.div
              key="sponsor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16"
            >
              {SPONSOR_PACKAGES.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative bg-[#020817]/80 backdrop-blur-xl border ${pkg.borderColor} rounded-3xl overflow-hidden flex flex-col`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-30 pointer-events-none`} />
                  
                  {pkg.badge && (
                    <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-6 border-b border-white/10 relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                        {pkg.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">{pkg.name}</h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-3xl font-black text-white">{pkg.price}</span>
                      <span className="text-gray-400 ml-2 text-sm">JMD</span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow relative z-10 bg-white/[0.02]">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Key Benefits</h4>
                    <ul className="space-y-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="block text-white text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="exhibitor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main Exhibitor Packages Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {EXHIBITOR_PACKAGES.map((pkg, idx) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative bg-[#020817]/80 backdrop-blur-xl border ${pkg.borderColor} rounded-3xl overflow-hidden flex flex-col`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-30 pointer-events-none`} />
                    
                    {pkg.badge && (
                      <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                        {pkg.badge}
                      </div>
                    )}

                    <div className="p-8 border-b border-white/10 relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                          {pkg.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                          <p className="text-sm text-gray-400 uppercase tracking-wider">{pkg.subtitle}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <span className="text-4xl font-black text-white">{pkg.price}</span>
                        <span className="text-gray-400 ml-2">JMD</span>
                      </div>
                    </div>

                    <div className="p-8 flex-grow relative z-10 bg-white/[0.02]">
                      <ul className="space-y-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="block text-sm text-gray-400 font-medium mb-1">{feature.label}</span>
                              <span className="block text-white text-sm leading-relaxed">{feature.value}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* LaunchPad Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-cyan-500/30 rounded-3xl p-8 md:p-12 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-4 bg-cyan-500/20 rounded-2xl border border-cyan-500/30">
                        <Rocket className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{LAUNCHPAD.name}</h3>
                        <p className="text-cyan-400 font-medium uppercase tracking-wider">{LAUNCHPAD.subtitle}</p>
                      </div>
                    </div>
                    <div className="mb-6 flex flex-col items-start">
                      <div className="flex items-baseline space-x-3">
                        <span className="text-5xl font-black text-white">
                          {isDiscountActive ? "$10,000" : "$15,000"}
                        </span>
                        <span className="text-gray-400 text-lg">JMD</span>
                      </div>
                      {isDiscountActive && (
                        <div className="mt-2 inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                          <span className="text-xs font-bold uppercase tracking-wider">Early Bird Discount Active</span>
                          <span className="text-xs line-through opacity-70">$15,000</span>
                        </div>
                      )}
                      {isDiscountActive && (
                        <p className="text-xs text-gray-400 mt-2 italic">Discount valid until March 10, 2026</p>
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      {LAUNCHPAD.description}
                    </p>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Optional Add-ons</h4>
                      <ul className="space-y-3">
                        {LAUNCHPAD.addons.map((addon, i) => (
                          <li key={i} className="flex justify-between items-center text-sm">
                            <span className="text-gray-300">{addon.label}</span>
                            <span className="text-cyan-400 font-bold">{addon.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#020817]/50 rounded-3xl p-8 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-6">Package Details</h4>
                    <ul className="space-y-6">
                      {LAUNCHPAD.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-4">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-blue-400" />
                          </div>
                          <div>
                            <span className="block text-sm text-gray-400 font-medium mb-1">{feature.label}</span>
                            <span className="block text-white leading-relaxed">{feature.value}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
