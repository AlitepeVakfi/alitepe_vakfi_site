import { useState } from "react";
import { cn } from "../../libs/utils";

// Yüzün yuvarlak çerçevede duracağı nokta (yatay ortada, dikeyde biraz yukarıda)
const TARGET_X = 0.5;
const TARGET_Y = 0.42;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

// Tek eksen için hesap. overflow: görselin cover ile yerleşince çerçeveden kaç kat taştığı,
// focus: yüzün fotoğraftaki yeri (0–1), zoom: yakınlaştırma oranı.
// Dönen position → object-position, offset → büyütülmüş görselin çerçeveye göre kayması.
const frameAxis = (overflow, focus, target, zoom) => {
  const position = overflow > 1 ? clamp((focus * overflow - target) / (overflow - 1), 0, 1) : 0.5;
  const facePoint = (1 - overflow) * position + focus * overflow;
  const offset = clamp(zoom * facePoint - target, 0, zoom - 1);
  return { position, offset };
};

// Farklı boyut ve kadrajdaki fotoğraflarda yüzü yuvarlak çerçevenin ortasına getirir.
//   focus: yüzün fotoğraftaki yeri [yatay %, dikey %]
//   zoom : yüz küçük kalıyorsa yakınlaştırma (1 = yok)
const Portrait = ({ src, alt, focus = [50, 35], zoom = 1, className }) => {
  const [ratio, setRatio] = useState(null);

  let style;
  if (ratio) {
    const x = frameAxis(Math.max(ratio, 1), focus[0] / 100, TARGET_X, zoom);
    const y = frameAxis(Math.max(1 / ratio, 1), focus[1] / 100, TARGET_Y, zoom);
    style = {
      width: `${zoom * 100}%`,
      height: `${zoom * 100}%`,
      left: `${-x.offset * 100}%`,
      top: `${-y.offset * 100}%`,
      objectPosition: `${x.position * 100}% ${y.position * 100}%`,
    };
  }

  return (
    <div className={cn("relative shrink-0 overflow-hidden rounded-full bg-brand-100", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={(event) =>
          setRatio(event.currentTarget.naturalWidth / event.currentTarget.naturalHeight)
        }
        className={cn(
          "absolute inset-0 size-full max-w-none object-cover transition-opacity duration-500",
          ratio ? "opacity-100" : "opacity-0",
        )}
        style={style}
      />
    </div>
  );
};

export default Portrait;
