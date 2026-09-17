import { useEffect } from "react";

const SITE_TITLE = "Ali Tepe Vakfı";

// Sekme başlığını sayfaya göre günceller: "Haberler · Ali Tepe Vakfı"
const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title
            ? `${title} · ${SITE_TITLE}`
            : `${SITE_TITLE} · Çağdaş Eğitim ve Sağlık Vakfı`;
    }, [title]);
};

export default useDocumentTitle;
