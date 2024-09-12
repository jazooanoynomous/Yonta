import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { community, couponData} from "../../components/Datas";
import { useNavigate } from "react-router-dom";

import {  CouponTable, FlashSales, ManageOffers, } from "../../components/Tables";
import axios from "axios";
import { BASEURL } from "../../utils/constant";


function Coupons() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [coupons, setCoupons] = useState([]);
  const [offers,setOffers] = useState([])
  const fetchCouponsData = async () => {
    try {
      const response = await axios.get(`${BASEURL}coupon`, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
        },
      });
      const couponData = response.data.coupons;
      setCoupons(couponData);
     
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };
  useEffect(() => {
  fetchCouponsData();
}, []);
const fetchOffersData = async () => {
  try {
    const response = await axios.get(`${BASEURL}ecomDeal`, {
      headers: {
        VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
      },
    });
    const offerData = response.data.deals;
    setOffers(offerData);
   
  } catch (error) {
    console.error("Error fetching banner data:", error);
  }
};
useEffect(() => {
fetchOffersData();
}, []);

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
            data={coupons}
            used={false}            
          />
            <ManageOffers
              data={offers}
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
