"use client";

import { galleryCategories } from "./galleryData";

interface Props {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  photoCount: number;
}

export default function GalleryCategoryFilter({
  activeCategory,
  onSelectCategory,
  photoCount,
}: Props) {
  return (
    <div className="w-full flex flex-col items-center py-8 px-6">
      <nav
        aria-label="Gallery category filter"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-full bg-[var(--background-secondary)] border border-[var(--border)] shadow-sm"
      >
        {galleryCategories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[var(--primary)] text-white shadow-md scale-102"
                  : "bg-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)]/40"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </nav>

      <p className="mt-4 text-xs font-sans text-[var(--foreground-muted)] uppercase tracking-widest">
        Showing {photoCount} curated {photoCount === 1 ? "moment" : "moments"}
      </p>
    </div>
  );
}
