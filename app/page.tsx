// Components from CapablityListing
import CapablityListingItem from "@/public/src/components/CapablityListing/CapablityListingItem";

// Component from CaraouselList
import CarouselList from "@/public/src/components/CaraouselList/CarouselList";

// Components from HeroSection
import HeroSection from "@/public/src/components/HeroSection/HeroSection";

// Core Component
import Button from "@/public/src/components/core/Button";

// Footer Component
import Footer from "@/public/src/components/footer/Footer";

export default function Home() {
  const CapablityListingConfig = [
    {
      icon: "invoice_digitilaztion",
      title: "Invoice Digitization ",
      description: "Automate all formats of invoices received across any channel into a centralized repository in a single format to reduce error & increase team efficiency"
    },
    {
      icon: "invoice_process",
      title: "Invoice Processing  ",
      description: "Automate invoice capturing, invoice exchange with vendors & approval workflows. Centralized vendor portal for tracking all PO’s"
    },
    {
      icon: "centralized_access",
      title: "Centralized access and collaboration ",
      description: "Collaboration, interaction and documentation is centered at each invoice level making approval workflows efficient, seamless and audit ready"
    },
    {
      icon: "advanced",
      title: "Advanced & Quick customizable workflows  ",
      description: "Advanced AI that adapts to AP processes unique to your organization within the shortest amount of time"
    },
    {
      icon: "invoice_matching",
      title: "Invoice Matching  ",
      description: "Effortless 2 and 3 way matching with easy to understand ‘reason’ coding for users increasing efficiency & protect against fraud and duplication"
    },
    {
      icon: "vendor_management",
      title: "Integrated Vendor Management  ",
      description: "Manage vendor onboarding, documentation and payment from one place"
    },
    {
      icon: "supply_chain",
      title: "Strengthen treasury & your supply chain",
      description: "Increase treasury income through early payments via dynamic discounting. Earn more from each spend via KredX’s AP card program"
    },
    {
      icon: "audit_ready",
      title: "Audit ready ",
      description: "One-click access to all conversations and notes at each invoice level. Data available on cloud archived after 7 years for full audit trail wherever required."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between">
      <HeroSection />
      <div className="w-96 text-center text-teal-600 text-6xl my-4 font-semibold font-['Inter']">KredX AP Automation Capabilities</div>
      <div className="grid grid-cols-4 gap-5 p-5 px-9">
        {CapablityListingConfig.map((item, index) => (
          <CapablityListingItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Button buttonLabel="Request Demo" className="items-center" />
      <div className="w-96 text-center p-5 text-teal-600 text-6xl font-semibold font-['Inter'] mb-8 my-4">The KredX CMS Advantage</div>

      <CarouselList />
      <Footer />
    </main >
  )
}
