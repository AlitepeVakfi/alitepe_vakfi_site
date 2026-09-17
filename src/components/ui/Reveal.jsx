import { useEffect, useRef, useState } from "react";
import { cn } from "../../libs/utils";

// İçeriği ekrana girdiğinde yumuşakça belirtir. Hareket azaltma tercihi
// açık olan kullanıcılarda animasyon CSS tarafında kapatılıyor.
const Reveal = ({ as = "div", delay = 0, className, style, children, ...props }) => {
  const Tag = as;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
