import { 
    ChevronDown, 
    Shell,
    Store,
    PanelLeftClose,
    PanelsTopLeft,
    Grid3X3,
    Zap,
    Star,
    Cog,
    CircleHelp,
    Slack,
    CircleUser,
    X
  } from "lucide-react";
  import { useState } from "react";
  import { cn } from "@/lib/utils";
  
  export function Sidebar() {
    return (
      <aside className="fixed left-0 top-0 z-30 flex h-full w-64 flex-col border-r bg-[#F8FAFC]">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CircleUser className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium text-[#020617]">Michael Kossner</span>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            <PanelLeftClose className="h-4 w-4" />
          </button>
        </div>
        
        <nav className="flex flex-col flex-1 px-4">
          <div className="space-y-1">
            <NavItem icon={<PanelsTopLeft className="h-5 w-5" />} title="Templates" active />
            <NavItem icon={<Shell className="h-5 w-5" />} title="Inspiration" />
            <NavItem icon={<Store className="h-5 w-5" />} title="Brands" />
          </div>
  
          <div className="mt-8 pt-5 border-t">
            <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground text-[#64748B]">Collections</h3>
            <div className="space-y-1">
              <NavItem icon={<Grid3X3 className="h-5 w-5" />} title="Curated Collections" />
              <DropdownNavItem 
                icon={<Zap className="h-5 w-5" />} 
                title="Live Collections"
                items={[
                  "Hidden Gems",
                  "Evergreen Ads",
                  "Testing Lab"
                ]}
              />
              <DropdownNavItem 
                icon={<Star className="h-5 w-5" />} 
                title="My Collections"
                items={[
                  "All Saved",
                  "Spring Campaign 2024",
                  "Requested Templates",
                  <div className="flex justify-between items-center">
                    <span>New Collection</span>
                    <span>+</span>
                  </div>
                ]}
              />
            </div>
          </div>
  
          <div className="mt-auto pb-4">
            <div className="pt-4">
              <NavItem icon={<Cog className="h-5 w-5 text-[#64748B]" />} title="Settings" />
              <NavItem icon={<CircleHelp className="h-5 w-5 text-[#64748B]" />} title="Help and Feedback" />
              <NavItem icon={<Slack className="h-5 w-5 text-[#64748B]" />} title="Join Creative OS Slack!" />
            </div>
          </div>
        </nav>
      </aside>
    );
  };

  export function MobileSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />
        )}
        
        {/* Sidebar */}
        <aside className={cn(
          "fixed top-0 left-0 z-50 w-[90%] h-full bg-[#F8FAFC] transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CircleUser className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-[#020617]">Michael Kossner</span>
            </div>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-88px)]">
            <nav className="flex flex-col flex-1 px-4">
              {/* Copy the same nav content from the desktop Sidebar */}
              <div className="space-y-1">
                <NavItem icon={<PanelsTopLeft className="h-5 w-5" />} title="Templates" active />
                <NavItem icon={<Shell className="h-5 w-5" />} title="Inspiration" />
                <NavItem icon={<Store className="h-5 w-5" />} title="Brands" />
              </div>
  
              <div className="mt-8 pt-5 border-t">
                <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground text-[#64748B]">Collections</h3>
                <div className="space-y-1">
                  <NavItem icon={<Grid3X3 className="h-5 w-5" />} title="Curated Collections" />
                  <DropdownNavItem 
                    icon={<Zap className="h-5 w-5" />} 
                    title="Live Collections"
                    items={[
                      "Hidden Gems",
                      "Evergreen Ads",
                      "Testing Lab"
                    ]}
                  />
                  <DropdownNavItem 
                    icon={<Star className="h-5 w-5" />} 
                    title="My Collections"
                    items={[
                      "All Saved",
                      "Spring Campaign 2024",
                      "Requested Templates",
                      <div className="flex justify-between items-center">
                        <span>New Collection</span>
                        <span>+</span>
                      </div>
                    ]}
                  />
                </div>
              </div>
  
              <div className="mt-auto pb-4">
                <div className="pt-4">
                  <NavItem icon={<Cog className="h-5 w-5 text-[#64748B]" />} title="Settings" />
                  <NavItem icon={<CircleHelp className="h-5 w-5 text-[#64748B]" />} title="Help and Feedback" />
                  <NavItem icon={<Slack className="h-5 w-5 text-[#64748B]" />} title="Join Creative OS Slack!" />
                </div>
              </div>
            </nav>
          </div>
        </aside>
      </>
    );
  };

  function NavItem({ icon, title, active = false }: { 
    icon: React.ReactNode; 
    title: string; 
    active?: boolean;
  }) {
    return (
      <div
        className={cn(
          "flex cursor-pointer items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors",
          active 
            ? "bg-[#0F172A] text-white"
            : "text-[#020617] hover:bg-secondary/50"
        )}
      >
        {icon}
        <span>{title}</span>
      </div>
    );
  };
  
  function DropdownNavItem({ 
    icon, 
    title, 
    items 
  }: { 
    icon: React.ReactNode; 
    title: string; 
    items: React.ReactNode[];
  }) {
    const [isOpen, setIsOpen] = useState(true);
  
    return (
      <div className="space-y-1">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary/50 text-[#020617]"
          )}
        >
          <div className="flex items-center space-x-3">
            {icon}
            <span>{title}</span>
          </div>
          <ChevronDown 
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )} 
          />
        </div>
        
        {isOpen && (
          <div className="ml-9 space-y-1">
            {items.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary/50 text-[#475569]"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };