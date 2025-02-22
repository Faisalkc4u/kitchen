import Image from "next/image";
import "./product-card.css";

export default function ProductCard() {
  return (
    <div className={`product-card flex flex-col`}>
      <div className="product-card-image">
        <Image
          sizes="100vw"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
          width={900}
          height={900}
          src="https://i.pinimg.com/736x/7d/bf/86/7dbf86ba0a528edb478a4e03438ece95.jpg"
          alt=""
        />
      </div>
      <div className="product-card-body">
        <div className="product-span-card-title">Best Seller on KB</div>
        <div className="product-card-title">
          Golden letters Dallah 1 liter letters Dallah 1 liter
        </div>
        <div className="product-card-offer-info">Save 130 SAR (10%-)</div>
        <div className="product-card-price ">
          62000SAR
          <span>85000SAR</span>
        </div>
      </div>
    </div>
  );
}
