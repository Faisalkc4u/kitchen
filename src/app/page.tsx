import { BannerSwiper } from "@/components/banner/banner-swiper";
import { BodyContent } from "@/layout/BodyContent";
import { PublicLayout } from "@/layout/PublicLayout";
import "./home.css";
import diamond from "@/assets/diamond.svg";
import gift from "@/assets/gift.svg";
import delivery from "@/assets/delivery.svg";
import returnIcon from "@/assets/return.svg";
export default function Home() {
  return (
    <PublicLayout>
      <BannerSwiper></BannerSwiper>
      <BodyContent className="">
        <div className="flex flex-wrap flex-row grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2 home-card-bg">
          <div className="home-card flex flex-row">
            <img src={diamond.src} alt="" />
            <div className="flex flex-col pl-3">
              <div className="heading">Great Value</div>
              <div className="sub-title">
                We offer competitive prices for over 1000 products
              </div>
            </div>
          </div>
          <div className="home-card flex flex-row">
            <img src={delivery.src} alt="" />
            <div className="flex flex-col pl-3">
              <div className="heading">Free Delivery</div>
              <div className="sub-title">
                Free shipping on products over 300 SAR
              </div>
            </div>
          </div>

          <div className="home-card flex flex-row">
            <img src={gift.src} alt="" />
            <div className="flex flex-col pl-3">
              <div className="heading">Shop with confidence</div>
              <div className="sub-title">
                Professional service and product warranty
              </div>
            </div>
          </div>
          <div className="home-card flex flex-row">
            <img src={returnIcon.src} alt="" />
            <div className="flex flex-col pl-3">
              <div className="heading">Easy to return or exchange</div>
              <div className="sub-title">Simply don't worry, return policy</div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row grid grid-cols-4 gap-3 mt-4 ">
          <div className="col-span-2">
            <img
              className="w-full "
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://i.pinimg.com/736x/93/7f/e0/937fe049bc0ac36bdc8e4f90260e56d7.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full "
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://i.pinimg.com/736x/62/c5/e2/62c5e2c1214e70538f0cee36af678719.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full "
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://i.pinimg.com/736x/3b/05/dd/3b05ddb1377326771793f2e1cefee8e5.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full "
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://i.pinimg.com/736x/fe/e3/53/fee353f1bc89167177b2ae64f3d9b19a.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full "
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://i.pinimg.com/736x/7d/bf/86/7dbf86ba0a528edb478a4e03438ece95.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <img
              className="w-full "
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://i.pinimg.com/originals/86/28/a1/8628a134dfd0fdf76388616aba3b0f07.gif"
              alt=""
            />
          </div>
        </div>
      </BodyContent>
    </PublicLayout>
  );
}
