export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="container-page py-10 text-sm text-slate-600">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p>
            Mind A Lot Anonymous support that listens ,nudges 
            ,and grows with you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#download" className="hover:text-[#2f1f1a]">
              Download App
            </a>
            <a href="#partner" className="hover:text-[#2f1f1a]">
              Partner With Us
            </a>
            <a href="#privacy" className="hover:text-[#2f1f1a]">
              Privacy Policy
            </a>
            <a href="#accessibility" className="hover:text-[#2f1f1a]">
              Accessibility
            </a>
            <a href="/contact" className="hover:text-[#2f1f1a]">
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


