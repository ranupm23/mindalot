export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="container-page py-10 text-sm text-slate-600">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p>
            Mind A Lot – Anonymous support that listens, nudges, and grows with you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#download" className="hover:text-slate-900">
              Download App
            </a>
            <a href="#partner" className="hover:text-slate-900">
              Partner With Us
            </a>
            <a href="#privacy" className="hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#accessibility" className="hover:text-slate-900">
              Accessibility
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Mind A Lot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


