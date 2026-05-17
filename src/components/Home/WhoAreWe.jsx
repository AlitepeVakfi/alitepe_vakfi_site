const WhoAreWe = () => {
  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row gap-5 my-24">
        <div className="flex-1">
          <img
            src="https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/logo.webp"
            className="shadow-2xl shadow-primary/20 ring-8 ring-primary/10 max-sm:ms-6 sm:mx-auto h-[250px] lg:h-[400px] w-auto object-cover rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <h6 className="max-sm:mt-6 text-3xl lg:text-4xl font-semibold text-gradient-br from-foreground to-foreground/40">
            Biz Kimiz?
          </h6>
          <p className="mt-6 lg:text-lg">
            Ali Tepe Vakfı, toplumsal dayanışmayı güçlendirmek, eğitime ve bilime katkı sağlamak, gençlerin potansiyellerini ortaya çıkarabilecekleri fırsatlar sunmak amacıyla kurulmuş bir sivil toplum kuruluşudur.
            <br /><br />
            Kurucumuz Ali Tepe'nin "insana yatırım, geleceğe yatırımdır" anlayışından ilham alarak; eğitim, kültür, teknoloji, çevre ve sosyal yardım alanlarında kalıcı değerler üretmeyi hedefliyoruz.
            <br /><br />
            Vakfımız, imkân eşitsizliklerini azaltmayı, gençlerin nitelikli eğitime ulaşmasını kolaylaştırmayı ve sürdürülebilir projelerle toplumun her kesimine fayda sağlamayı amaçlar. Burs programlarımız, sosyal sorumluluk projelerimiz ve gönüllülük faaliyetlerimizle, ülkemizin yarınlarına umut olacak bireylerin yanında yer alıyoruz.
            <br /><br />
            Ali Tepe Vakfı olarak biz, sadece bugüne değil; geleceğe, gelişime ve iyiliğe yatırım yapıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
