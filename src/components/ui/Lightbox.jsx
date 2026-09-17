import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import { cn } from "../../libs/utils";

// Tam ekran fotoğraf görüntüleyici: ok tuşları, Esc, kaydırma (dokunmatik) ve küçük resim şeridi.
const Lightbox = ({ images, index, onIndexChange, onClose, title }) => {
  const count = images.length;
  const closeButtonRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const touchStartX = useRef(null);

  const showRelative = (offset) => onIndexChange((index + offset + count) % count);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") onIndexChange((index + 1) % count);
      else if (event.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, count, onClose, onIndexChange]);

  useEffect(() => {
    thumbnailsRef.current
      ?.querySelector(`[data-index="${index}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });

    // Komşu fotoğrafları önceden yükle, geçişler beklemesiz olsun
    for (const offset of [-1, 1]) {
      const image = new Image();
      image.src = images[(index + offset + count) % count];
    }
  }, [index, images, count]);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 50) showRelative(delta < 0 ? 1 : -1);
  };

  const stop = (event) => event.stopPropagation();

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} – fotoğraf galerisi`}
      className="animate-fade-in fixed inset-0 z-[100] flex flex-col bg-brand-950/95 text-white backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <p className="text-sm text-white/60 tabular-nums">
          <span className="font-semibold text-white">{index + 1}</span> / {count}
        </p>
        <p className="hidden min-w-0 truncate text-sm text-white/60 sm:block">{title}</p>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Galeriyi kapat"
          className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
        >
          <LuX className="size-5" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20"
        onClick={onClose}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title} – fotoğraf ${index + 1}`}
          onClick={stop}
          className="animate-fade-in max-h-full max-w-full rounded-lg object-contain shadow-2xl"
        />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                stop(event);
                showRelative(-1);
              }}
              aria-label="Önceki fotoğraf"
              className="absolute left-2 grid size-12 cursor-pointer place-items-center rounded-full bg-brand-950/40 ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/20 sm:left-6"
            >
              <LuChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                stop(event);
                showRelative(1);
              }}
              aria-label="Sonraki fotoğraf"
              className="absolute right-2 grid size-12 cursor-pointer place-items-center rounded-full bg-brand-950/40 ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/20 sm:right-6"
            >
              <LuChevronRight className="size-6" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div ref={thumbnailsRef} className="overflow-x-auto [scrollbar-width:none]">
          <div className="mx-auto flex w-max gap-2 px-4 py-4">
            {images.map((src, thumbIndex) => (
              <button
                key={src}
                type="button"
                data-index={thumbIndex}
                onClick={() => onIndexChange(thumbIndex)}
                aria-label={`Fotoğraf ${thumbIndex + 1}`}
                aria-current={thumbIndex === index ? "true" : undefined}
                className={cn(
                  "h-14 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg transition-[opacity,box-shadow] duration-300",
                  thumbIndex === index
                    ? "opacity-100 ring-2 ring-accent-300"
                    : "opacity-40 hover:opacity-80",
                )}
              >
                <img src={src} alt="" loading="lazy" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
};

export default Lightbox;
