import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "./utils/trpc";
import { Sidebar } from "./components/ui/sidebar";
import { MobileSidebar } from "./components/ui/sidebar";
import { Header } from "./components/ui/header";
import { ChevronDown, ChevronsUpDown, Link, Bookmark, CircleUser, Menu } from "lucide-react";
import { AdModal } from "./components/ui/modal";

import LogoImg from './assets/logo.svg';
import CanvaImg from './assets/canva.svg';
import FigmaImg from './assets/figma.svg';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    })
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState<any>(null);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="flex min-h-screen bg-background">
          <div className="hidden md:block">
            <Sidebar />
          </div>

          <MobileSidebar 
            isOpen={isMobileSidebarOpen} 
            onClose={() => setIsMobileSidebarOpen(false)} 
          />

          <div className="flex-1 p-6 md:ml-64">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-6 md:hidden">
                <div className="flex items-center gap-3">
                  <img src={LogoImg} alt="Logo" className="h-8 w-8" />
                  <h1 className="text-xl font-semibold">Creative OS</h1>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-1">
                    <CircleUser className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-1"
                    onClick={() => setIsMobileSidebarOpen(true)}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Desktop Header */}
              <div className="hidden md:block">
                <Header />
              </div>

              <div>
                <h1 className="mb-2 text-lg font-medium text-[#020617]">Ad Templates</h1>
              </div>

              <div className="w-screen -mx-6 px-6 md:w-auto md:mx-0 flex items-center justify-between gap-4 mb-6">
                <div className="overflow-x-auto flex-1 -mx-2 px-2">
                  <div className="flex gap-2 min-w-max">
                    <Categories />
                    
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full text-[#020617] border border-[#E2E8F0] hover:bg-muted/10 whitespace-nowrap">
                      <ChevronsUpDown className="mr-1 h-4 w-4 inline" />
                      More
                    </button>
                  </div>
                </div>
                <div className="relative flex-none">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-md text-[#020617] border border-[#E2E8F0] hover:bg-muted/10 whitespace-nowrap"
                  >
                    Recent
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Most Recent</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Most Popular</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Top Rated</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="columns-1 md:columns-3 gap-4">
                <Ads setShowModal={setShowModal} setSelectedAd={setSelectedAd} />
              </div>

              {showModal && selectedAd && (
                <AdModal 
                  selectedAd={selectedAd}
                  setShowModal={setShowModal}
                  setSelectedAd={setSelectedAd}
                />
              )}

          </div>
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

/* function TrpcDemo() {
  const greeting = trpc.greeting.useQuery({ name: "Candidate" });

  if (!greeting.data) return <div>Loading...</div>;

  return <div>{greeting.data}</div>;
} */

  function Ads({ setShowModal, setSelectedAd }: { 
    setShowModal: (show: boolean) => void,
    setSelectedAd: (ad: any) => void 
  }) {
  const ads = trpc.getAds.useQuery();
  return (
    <>
      {ads?.data?.map((ad) => (
        <div
          key={ad.id} 
          className="relative group overflow-hidden rounded-lg mb-4 break-inside-avoid cursor-pointer"
          onClick={() => {
            setSelectedAd(ad);
            setShowModal(true);
          }}
        >
          <img 
            src={ad.imageUrl} 
            alt={ad.title}
            className="w-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex justify-between w-full px-2 pt-2">
              <div className="flex gap-2">
                <button className="rounded-full bg-white/80 hover:bg-white text-gray-700 h-8 w-8">
                  <img src={CanvaImg} alt="Canva" className="h-full w-full" />
                </button>
                <button className="rounded-full bg-white/80 hover:bg-white text-gray-700 h-8 w-8">
                  <img src={FigmaImg} alt="Figma" className="h-full w-full" />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="h-8 w-8 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center">
                  <Bookmark className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center">
                  <Link className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <CircleUser className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-white font-medium capitalize">{ad.title}</h3>
                  <p className="text-white/80 text-sm capitalize">by {ad.author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function Categories() {
  const categories = trpc.getCategories.useQuery();
  return (
    <>
      {categories?.data?.map((category) => (
        <button 
          key={category.id}
          className="px-3 py-1.5 text-sm font-medium rounded-full text-[#020617] border border-[#E2E8F0] hover:bg-muted/10 whitespace-nowrap capitalize">
          {category.categoryName}
        </button>
      ))}
    </>
  );
}

export default App;
