import React, { useState } from "react";
import Layout from "../../Layout";
import { community, couponData} from "../../components/Datas";
import { useNavigate } from "react-router-dom";

import {  CouponTable, FlashSales, ManageOffers, } from "../../components/Tables";


function Coupons() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal


  return (
    <Layout>
        <h1 className="text-xl font-semibold">Coupons & Offers</h1>
       
      
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className=" rounded-xl"
      >
        <div className="mt-8 w-full overflow-x-scroll">
          <CouponTable
            data={couponData}
            used={false}            
          />
            <ManageOffers
              data={couponData}
              used={false}            
            />
          <FlashSales
            data={couponData}
            used={false}            
          />
        </div>
      </div>

    </Layout>
  );
}

export default Coupons;
