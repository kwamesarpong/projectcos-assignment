export function Header() {
    return (
      <header className="flex justify-center mb-6">
        <nav className="inline-flex rounded-full bg-muted p-1">
          <button className="px-3 py-1.5 text-sm font-medium rounded-full bg-background shadow">
            Ads
          </button>
          <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground">
            Emails
          </button>
          <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground">
            Landers
          </button>
        </nav>
      </header>
    );
  }