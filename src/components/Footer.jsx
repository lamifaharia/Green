import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">

        <h2 className="text-3xl font-bold text-success mb-3">
          Green Organic Store
        </h2>

        <p className="text-base-content/70 mb-6">
          Fresh Organic Products For Healthy Living.
        </p>

        <div className="flex justify-center gap-4 mb-6">

          <button className="btn btn-circle btn-sm">
            <Facebook size={18} />
          </button>

          <button className="btn btn-circle btn-sm">
            <Instagram size={18} />
          </button>

          <button className="btn btn-circle btn-sm">
            <Twitter size={18} />
          </button>

        </div>

        <div className="divider"></div>

        <p className="text-sm text-base-content/60">
          Copyright © 2026 Green Organic Store. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;