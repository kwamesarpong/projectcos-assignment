import { X, FolderPlus, Link, CircleUser } from "lucide-react";
import moment from "moment";

interface Ad {
  id: string;
  imageUrl: string;
  title: string;
  author?: string;
  createdAt: string;
}

interface AdModalProps {
  selectedAd: Ad;
  setShowModal: (show: boolean) => void;
  setSelectedAd: (ad: Ad | null) => void;
}

export function AdModal({ selectedAd, setShowModal, setSelectedAd }: AdModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div className="bg-white rounded-t-lg w-full h-[90vh] md:h-[90vh] overflow-hidden">
        <div className="h-full flex flex-col md:grid md:grid-cols-10">
          <div className="w-[calc(100%-1rem)] md:w-full md:col-span-7 bg-[#F1F5F9] py-6 m-2 rounded-[6px]">
            <img
              src={selectedAd.imageUrl}
              alt={selectedAd.title}
              className="w-[calc(100%-2rem)] md:w-1/2 h-[300px] md:h-[600px] mx-auto object-contain" 
            />
          </div>

          <div className="w-full md:col-span-3 p-6 overflow-y-auto">
            <div className="flex justify-end items-start mb-4">
                <button 
                onClick={() => {
                    setShowModal(false);
                    setSelectedAd(null);
                }}
                className="p-1 hover:bg-gray-100 rounded-full"
                >
                <X className="h-6 w-6" />
                </button>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  <CircleUser className="h-8 w-8 text-red-400" />
                </div>
                <div className="flex-1">
                    <h3 className="font-medium">{selectedAd.title}</h3>
                    <p className="text-sm text-gray-500">by {selectedAd.author || 'Creative OS'}</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg border border-[#E2E8F0]">
                    <FolderPlus className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg border border-[#E2E8F0]">
                    <Link className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
                </div>

                <h2 className="text-xl font-normal">{selectedAd.title} Ad Template</h2>

                <div className="flex flex-col gap-2 text-sm text-gray-500">
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2">
                    <span>Posted on {moment(selectedAd.createdAt).format('MMM D, YYYY')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>204 users</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    <span>318 saves</span>
                    </div>
                </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                <button className="px-4 py-2 bg-[#F1F5F9] text-[#0F172A] rounded-[6px] hover:bg-[#E2E8F0] flex items-center justify-center gap-2">
                    Copy with Figma
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="10" r="2.5" fill="#1ABCFE"/>
                    <path d="M8 17.5C9.38071 17.5 10.5 16.3807 10.5 15V12.5H8C6.61929 12.5 5.5 13.6193 5.5 15C5.5 16.3807 6.61929 17.5 8 17.5Z" fill="#0ACF83"/>
                    <path d="M5.5 10C5.5 11.3807 6.61929 12.5 8 12.5H10.5V7.5H8C6.61929 7.5 5.5 8.61929 5.5 10Z" fill="#A259FF"/>
                    <path d="M5.5 5C5.5 6.38071 6.61929 7.5 8 7.5H10.5V2.5H8C6.61929 2.5 5.5 3.61929 5.5 5Z" fill="#F24E1E"/>
                    <path d="M15.5 5C15.5 3.61929 14.3807 2.5 13 2.5L10.5 2.5L10.5 7.5L13 7.5C14.3807 7.5 15.5 6.38071 15.5 5Z" fill="#FF7262"/>
                    </svg>
                </button>
                <button className="px-4 py-2 bg-[#F1F5F9] text-[#0F172A] rounded-[6px] hover:bg-[#E2E8F0] flex items-center justify-center gap-2">
                    Edit with Canva
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_190_2648)"/>
                    <path d="M13.1345 11.8408C13.0643 11.8408 13.0025 11.9034 12.9382 12.0399C12.2123 13.5925 10.9585 14.6911 9.50759 14.6911C7.82994 14.6911 6.79102 13.0937 6.79102 10.8869C6.79102 7.14887 8.76563 4.98759 10.5 4.98759C11.3104 4.98759 11.8054 5.52479 11.8054 6.37967C11.8054 7.39427 11.2589 7.93147 11.2589 8.2893C11.2589 8.44993 11.3536 8.54719 11.5414 8.54719C12.2961 8.54719 13.1818 7.63253 13.1818 6.3404C13.1818 5.08753 12.148 4.16663 10.4137 4.16663C7.54737 4.16663 5 6.96951 5 10.8477C5 13.8496 6.6252 15.8333 9.13281 15.8333C11.7944 15.8333 13.3333 13.0402 13.3333 12.1336C13.3333 11.9328 13.236 11.8408 13.1345 11.8408Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_190_2648" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0.08" stop-color="#02C3CC"/>
                    <stop offset="0.8" stop-color="#7929EB"/>
                    <stop offset="1" stop-color="#4A4EF0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </button>
                </div>

                <div>
                <div className="flex flex-col md:flex-row items-start md:items-center">
                    <span className="text-sm text-[#020617] mb-2 md:mb-0 md:mr-auto">Tags</span>
                    <div className="flex flex-wrap items-center gap-2">
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full text-[#020617] border border-[#E2E8F0] hover:bg-muted/10 whitespace-nowrap">
                        Product Showcase
                    </button>
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full text-[#020617] border border-[#E2E8F0] hover:bg-muted/10 whitespace-nowrap">
                        Minimal
                    </button>
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full text-[#020617] border border-[#E2E8F0] hover:bg-muted/10 whitespace-nowrap">
                        Instagram
                    </button>
                    </div>
                </div>
                </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}