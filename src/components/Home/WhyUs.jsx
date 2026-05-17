import { FaUsers } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="container">
      <h6 className="text-center mb-16 text-4xl font-semibold text-gradient-br from-foreground to-foreground/40">
        Neden Biz?
      </h6>
      <div className="col-center gap-4">
        <div className="flex flex-col xls:flex-row gap-4 p-6 rounded-2xl inset-shadow-sm inset-shadow-primary/20 border border-primary/20 w-full sm:w-[600px]">
          <div className="size-16 bg-gradient-to-br flex-center rounded-full from-primary/20 to-primary/30">
            <FaUsers size={30} />
          </div>
          <div className="flex-1 col-start gap-3">
            <h6 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              dignissimos veniam architecto quos nihil autem voluptatem sapiente
              et quod alias!
            </p>
          </div>
        </div>
        <div className="flex flex-col xls:flex-row-reverse gap-4 p-6 rounded-2xl inset-shadow-sm inset-shadow-secondary/20 border border-secondary/20 w-full sm:w-[600px]">
          <div className="size-16 bg-gradient-to-br flex-center rounded-full from-secondary/20 to-secondary/30">
            <FaUsers size={30} />
          </div>
          <div className="flex-1 col-start gap-3">
            <h6 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              dignissimos veniam architecto quos nihil autem voluptatem sapiente
              et quod alias!
            </p>
          </div>
        </div>
        <div className="flex flex-col xls:flex-row gap-4 p-6 rounded-2xl inset-shadow-sm inset-shadow-third/20 border border-third/20 w-full sm:w-[600px]">
          <div className="size-16 bg-gradient-to-br flex-center rounded-full from-third/20 to-third/30">
            <FaUsers size={30} />
          </div>
          <div className="flex-1 col-start gap-3">
            <h6 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              dignissimos veniam architecto quos nihil autem voluptatem sapiente
              et quod alias!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
