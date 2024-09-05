import React, { useState } from "react";
import { Button, MenuSelect } from "./Form";
import { BiDotsHorizontalRounded, BiPlus } from "react-icons/bi";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./progressBar";
import { FaEdit } from "react-icons/fa";
import CouponsPopup from "./Modals/couponsPopup";
import { discountTypes } from "./Datas";

const thclass = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
const tdclass = "text-start text-sm py-4 px-2 whitespace-nowrap";

export function Transactiontable({ data, action, functions }) {
  const DropDown1 = [
    {
      title: "Edit",
      icon: FiEdit,
      onClick: (data) => {
        functions.edit(data.id);
      },
    },
    {
      title: "View",
      icon: FiEye,
      onClick: (data) => {
        functions.preview(data.id);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>#</th>
          <th className={thclass}>Patient</th>
          <th className={thclass}>Date</th>
          <th className={thclass}>Status</th>
          <th className={thclass}>
            Amout <span className="text-xs font-light">(Tsh)</span>
          </th>
          <th className={thclass}>Method</th>
          {action && <th className={thclass}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>{index + 1}</td>
            <td className={tdclass}>
              <div className="flex gap-4 items-center">
                <span className="w-12">
                  <img
                    src={item.user.image}
                    alt={item.user.title}
                    className="w-full h-12 rounded-full object-cover border border-border"
                  />
                </span>

                <div>
                  <h4 className="text-sm font-medium">{item.user.title}</h4>
                  <p className="text-xs mt-1 text-textGray">
                    {item.user.phone}
                  </p>
                </div>
              </div>
            </td>
            <td className={tdclass}>{item.date}</td>
            <td className={tdclass}>
              <span
                className={`py-1 px-4 ${
                  item.status === "Paid"
                    ? "bg-subMain text-subMain"
                    : item.status === "Pending"
                    ? "bg-orange-500 text-orange-500"
                    : item.status === "Cancel" && "bg-red-600 text-red-600"
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.status}
              </span>
            </td>
            <td className={`${tdclass} font-semibold`}>{item.amount}</td>
            <td className={tdclass}>{item.method}</td>
            {action && (
              <td className={tdclass}>
                <MenuSelect datas={DropDown1} item={item}>
                  <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                    <BiDotsHorizontalRounded />
                  </div>
                </MenuSelect>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// invoice table
export function InvoiceTable({ data }) {
  const navigate = useNavigate();
  const DropDown1 = [
    {
      title: "Edit",
      icon: FiEdit,
      onClick: (item) => {
        navigate(`/invoices/edit/${item.id}`);
      },
    },
    {
      title: "View",
      icon: FiEye,
      onClick: (item) => {
        navigate(`/invoices/preview/${item.id}`);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Invoice ID</th>
          <th className={thclass}>Patient</th>
          <th className={thclass}>Created Date</th>
          <th className={thclass}>Due Date</th>
          <th className={thclass}>
            Amout <span className="text-xs font-light">(Tsh)</span>
          </th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>#{item?.id}</td>
            <td className={tdclass}>
              <div className="flex gap-4 items-center">
                <span className="w-12">
                  <img
                    src={item?.to?.image}
                    alt={item?.to?.title}
                    className="w-full h-12 rounded-full object-cover border border-border"
                  />
                </span>
                <div>
                  <h4 className="text-sm font-medium">{item?.to?.title}</h4>
                  <p className="text-xs mt-1 text-textGray">
                    {item?.to?.email}
                  </p>
                </div>
              </div>
            </td>
            <td className={tdclass}>{item?.createdDate}</td>
            <td className={tdclass}>{item?.dueDate}</td>
            <td className={`${tdclass} font-semibold`}>{item?.total}</td>
            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// prescription table
export function MedicineTable({ data, onEdit }) {
  const DropDown1 = [
    {
      title: "Edit",
      icon: FiEdit,
      onClick: (item) => {
        onEdit(item);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Name</th>
          <th className={thclass}>
            Price <span className="text-xs font-light">(Tsh)</span>
          </th>
          <th className={thclass}>Status</th>
          <th className={thclass}>InStock</th>
          <th className={thclass}>Measure</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>
              <h4 className="text-sm font-medium">{item?.name}</h4>
            </td>
            <td className={`${tdclass} font-semibold`}>{item?.price}</td>
            <td className={tdclass}>
              <span
                className={`text-xs font-medium ${
                  item?.status === "Out of stock"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {item?.status}
              </span>
            </td>
            <td className={tdclass}>{item?.stock}</td>
            <td className={tdclass}>{item?.measure}</td>
            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// service table
export function ServiceTable({ data, onEdit }) {
  const DropDown1 = [
    {
      title: "Edit",
      icon: FiEdit,
      onClick: (item) => {
        onEdit(item);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Name</th>
          <th className={thclass}>Created At</th>
          <th className={thclass}>
            Price <span className="text-xs font-light">(Tsh)</span>
          </th>
          <th className={thclass}>Status</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>
              <h4 className="text-sm font-medium">{item?.name}</h4>
            </td>
            <td className={tdclass}>{item?.date}</td>
            <td className={`${tdclass} font-semibold`}>{item?.price}</td>
            <td className={tdclass}>
              <span
                className={`text-xs font-medium ${
                  !item?.status ? "text-red-600" : "text-green-600"
                }`}
              >
                {!item?.status ? "Disabled" : "Enabled"}
              </span>
            </td>
            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// patient table
export function PatientTable({ data, functions, used }) {
  const DropDown1 = !used
    ? [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
        {
          title: "Delete",
          icon: RiDeleteBin6Line,
          onClick: () => {
            toast.error("This feature is not available yet");
          },
        },
      ]
    : [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
      ];
  const thclasse = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
  const tdclasse = "text-start text-xs py-4 px-2 whitespace-nowrap";
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclasse}>Name</th>
          <th className={thclasse}>Email</th>
          <th className={thclasse}>Phone Number</th>
          <th className={thclasse}>Gender</th>
          <th className={thclasse}>Plan</th>
          <th className={thclasse}>Status</th>
          <th className={thclasse}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclasse}>
              <div className="flex gap-4 items-center">
                <span className="w-12">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-12 rounded-full object-cover border border-border"
                  />
                </span>
                <div>
                  <h4 className="text-sm font-medium">{item.title}</h4>
                </div>
              </div>
            </td>
            <td className={tdclasse}>{item.email}</td>
            <td className={tdclasse}>{item.phone}</td>
            <td className={tdclasse}>
              <span
                className={`py-1 px-4 ${
                  item.gender === "Male"
                    ? "bg-green text-bluetext"
                    : "bg-red text-pinktext"
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.gender}
              </span>
            </td>
            <td className={tdclasse}>{item.Plan}</td>
            <td className={tdclasse}>
              <span
                className={`py-1 px-4 ${
                  item.status === "Active" ? "text-textgreen" : " text-textred"
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.status}
              </span>
            </td>
            <td className={tdclasse}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function AgilityTable({ data }) {
  return (
    <div className=" p-6 rounded-lg ">
      <h2 className="text-xl font-semibold mb-4">Community Progress</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-4 h-[60px]">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-4">Sr no.</th>
              <th className="px-4">Name</th>
              <th className="px-4">Levels</th>
              <th className="px-4">Progress</th>
              <th className="px-4">Achievements</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="bg-white relative h-[60px]">
                <td className="py-4 px-4 text-sm rounded-l-lg">{index + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm">{item.level}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <ProgressBar progress={item.progress} />
                    <span className="text-[12px] text-textred ml-2">
                      {item.progress}%
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 rounded-r-lg">
                  <div className="flex gap-1">
                    {item.achievements.map((achieve, i) => (
                      <span key={i} className="h-[26px] w-[29px]">
                        {achieve}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export function CouponTable({ data, functions, used }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const DropDown1 = !used
    ? [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
        {
          title: "Delete",
          icon: RiDeleteBin6Line,
          onClick: () => {
            toast.error("This feature is not available yet");
          },
        },
      ]
    : [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
      ];

  return (
    <div className="p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Coupon</h2>
        <Button
          Icon={BiPlus}
          label="Add New"
          onClick={openModal}
          className="text-white"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-[10px] border-separate border-spacing-y-4 px-4 h-[60px]">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-4">Discount Code</th>
              <th className="px-4">Discount Description</th>
              <th className="px-4">Coupon Type</th>
              <th className="px-4">Use Limit</th>
              <th className="px-4">Last Modified</th>
              <th className="px-4">Status</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="bg-backgroundgray relative h-[60px]">
                <td className="py-4 px-4 text-sm rounded-l-lg">
                  {item.discountCode}
                </td>
                <td className="py-4 px-4 text-sm">
                  {item.discountDescription}
                </td>
                <td className="py-4 px-4 text-sm">{item.couponType}</td>
                <td className="py-4 px-4 text-sm">{item.useLimit}</td>
                <td className="py-4 px-4 text-sm">{item.lastModified}</td>
                <td className="py-4 px-4 text-sm">
                  <span
                    className={`py-1 px-4 ${
                      item.status === "Active"
                        ? "text-textgreen"
                        : " text-textred"
                    } bg-opacity-10 text-xs rounded-xl`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4 rounded-r-lg">
                  <MenuSelect datas={DropDown1} item={item}>
                    <div className="  text-main text-xl py-2 px-4 ">
                      <BiDotsHorizontalRounded />
                    </div>
                  </MenuSelect>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <CouponsPopup
          discountTypes={discountTypes} // Pass the discountTypes data to the modal
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export function ManageOffers({ data, functions, used }) {
  const DropDown1 = !used
    ? [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
        {
          title: "Delete",
          icon: RiDeleteBin6Line,
          onClick: () => {
            toast.error("This feature is not available yet");
          },
        },
      ]
    : [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
      ];

  return (
    <div className="p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Offers</h2>
        <Button
          Icon={BiPlus}
          label="Add New"
          // onClick={openModal}
          className="text-white"
        />
      </div>
      <div className="overflow-x-auto bg-white py-2  px-8 rounded-[10px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-4 text-tableheadtext">
            Yonta Deals
          </h2>

          <button
            className="flex items-center justify-center bg-[#1782AF] rounded-[6px] w-[56.01px] h-[24px] p-[7px_10px]"
            // onClick={onEdit}
          >
            <FaEdit className="w-[10.01px] h-[10px] text-white mr-2" />
            <span className="text-[10px] font-normal leading-[100%] tracking-[-0.01em] text-white">
              Edit
            </span>
          </button>
        </div>

        <table className="w-full bg-backgroundgray border-separate border-spacing-y-4 px-4 h-[60px] rounded-[10px]">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-4">Product</th>
              <th className="px-4">Weight</th>
              <th className="px-4">Flavour</th>
              <th className="px-4">Expiry</th>
              <th className="px-4">Stock</th>
              <th className="px-4">MRP</th>
              <th className="px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="bg-white  relative h-[60px]">
                <td className="py-4 px-4 text-sm rounded-l-lg">
                  {item.discountCode}
                </td>
                <td className="py-4 px-4 text-sm">
                  {item.discountDescription}
                </td>
                <td className="py-4 px-4 text-sm">{item.couponType}</td>
                <td className="py-4 px-4 text-sm">{item.useLimit}</td>
                <td className="py-4 px-4 text-sm">{item.lastModified}</td>
                <td className="py-4 px-4 text-sm">
                  <span
                    className={`py-1 px-4 ${
                      item.status === "Active"
                        ? "text-textgreen"
                        : " text-textred"
                    } bg-opacity-10 text-xs rounded-xl`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4 rounded-r-lg">
                  <MenuSelect datas={DropDown1} item={item}>
                    <div className="  text-main text-xl py-2 px-4 ">
                      <BiDotsHorizontalRounded />
                    </div>
                  </MenuSelect>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export function FlashSales({ data, functions, used }) {
  const DropDown1 = !used
    ? [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
        {
          title: "Delete",
          icon: RiDeleteBin6Line,
          onClick: () => {
            toast.error("This feature is not available yet");
          },
        },
      ]
    : [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
      ];

  return (
    <div className="p-6 rounded-lg">
      <div className="overflow-x-auto bg-white py-2  px-8 rounded-[10px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-4 text-tableheadtext">
            Flash Sales
          </h2>

          <button
            className="flex items-center justify-center bg-[#1782AF] rounded-[6px] w-[56.01px] h-[24px] p-[7px_10px]"
            // onClick={onEdit}
          >
            <FaEdit className="w-[10.01px] h-[10px] text-white mr-2" />
            <span className="text-[10px] font-normal leading-[100%] tracking-[-0.01em] text-white">
              Edit
            </span>
          </button>
        </div>

        <table className="w-full bg-backgroundgray border-separate border-spacing-y-4 px-4 h-[60px] rounded-[10px]">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-4">Product</th>
              <th className="px-4">Weight</th>
              <th className="px-4">Flavour</th>
              <th className="px-4">Expiry</th>
              <th className="px-4">Stock</th>
              <th className="px-4">MRP</th>
              <th className="px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="bg-white  relative h-[60px]">
                <td className="py-4 px-4 text-sm rounded-l-lg">
                  {item.discountCode}
                </td>
                <td className="py-4 px-4 text-sm">
                  {item.discountDescription}
                </td>
                <td className="py-4 px-4 text-sm">{item.couponType}</td>
                <td className="py-4 px-4 text-sm">{item.useLimit}</td>
                <td className="py-4 px-4 text-sm">{item.lastModified}</td>
                <td className="py-4 px-4 text-sm">
                  <span
                    className={`py-1 px-4 ${
                      item.status === "Active"
                        ? "text-textgreen"
                        : " text-textred"
                    } bg-opacity-10 text-xs rounded-xl`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4 rounded-r-lg">
                  <MenuSelect datas={DropDown1} item={item}>
                    <div className="  text-main text-xl py-2 px-4 ">
                      <BiDotsHorizontalRounded />
                    </div>
                  </MenuSelect>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function NotificationTable({ data, functions, used }) {
  const DropDown1 = !used
    ? [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
        {
          title: "Delete",
          icon: RiDeleteBin6Line,
          onClick: () => {
            toast.error("This feature is not available yet");
          },
        },
      ]
    : [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
      ];

  return (
    <div className="p-6 rounded-lg">
      <>
        <table className="w-full  border-separate border-spacing-y-4 px-4 h-[60px] rounded-[10px]">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-4">Date From</th>
              <th className="px-4">Date To</th>
              <th className="px-4">Selection</th>
              <th className="px-4">Frequency</th>
              <th className="px-4">Link</th>
              <th className="px-4">Notifications center</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white relative h-[60px]">
                <td className="py-4 px-4 text-sm rounded-l-lg">
                  {item.dateFrom}
                </td>
                <td className="py-4 px-4 text-sm">{item.dateTo}</td>
                <td className="py-4 px-4 text-sm">{item.section}</td>
                <td className="py-4 px-4 text-sm">{item.frequency}</td>
                <td className="py-4 px-4 text-sm">
                  <a href={item.link} className="text-blue-500 hover:underline">
                    {item.link}
                  </a>
                </td>
                <td className="py-4 px-4 text-sm">{item.content}</td>
                <td className="py-4 px-4 rounded-r-lg">
                  <MenuSelect datas={DropDown1} item={item}>
                    <div className="text-main text-xl py-2 px-4">
                      <BiDotsHorizontalRounded />
                    </div>
                  </MenuSelect>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export function ExpertTable({ data, functions }) {
  const thclasse = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
  const tdclasse = "text-start text-xs py-4 px-2 whitespace-nowrap";

  return (
    <table className="table-auto w-full">
      <thead className="rounded-md">
        <tr>
          <th
            className={`relative ${thclasse}`}
            style={{ width: "1061px", height: "19px" }}
          >
            <span className="flex items-center gap-1 pr-1">Name</span>
          </th>
          <th
            className={`relative ${thclasse}`}
            style={{ width: "82px", height: "19px" }}
          >
            <span className="flex items-center gap-1">Description</span>
          </th>
          <th
            className={`relative ${thclasse}`}
            style={{ width: "60px", height: "19px" }}
          >
            <span className="flex items-center gap-1">Edit/Save</span>
          </th>
          <th
            className={`relative ${thclasse}`}
            style={{ width: "102px", height: "19px" }}
          >
            <span className="flex items-center gap-1">Delete/Cancel</span>
          </th>
        </tr>
      </thead>
      <tbody className="space-y-2.5">
        {data.map((item) => (
          <tr
            key={item.id}
            className="  bg-white h-[60px] mb-[10px] rounded-xl "
          >
            <td
              className={tdclasse}
              style={{ width: "1103px", marginBottom: "10px" }}
            >
              <div className="flex gap-4 items-center">
                <span className="w-12">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-12 rounded-full object-cover border  border-gray-300"
                  />
                </span>
                <div>
                  <h4 className="text-sm font-medium">{item.name}</h4>
                </div>
              </div>
            </td>
            <td className={tdclasse}>
              <p className="text-xs text-gray-700">{item.description}</p>
            </td>
            <td className={tdclasse}>
              <button
                onClick={() => functions.edit(item.id)}
                className="bg-blue-500 text-white bg-blue px-2 py-1 rounded hover:bg-blue-600 flex items-center justify-center"
              >
                <FiEdit />
                Edit
              </button>
            </td>
            <td className={tdclasse}>
              <button
                onClick={() => functions.delete(item.id)}
                className="bg-red-500 text-white bg-red px-2 py-1 rounded hover:bg-red-600 flex items-center justify-center"
              >
                <FiTrash2 />
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// appointment table
export function AppointmentTable({ data, functions, doctor }) {
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Date</th>
          <th className={thclass}>{doctor ? "Patient" : "Doctor"}</th>
          <th className={thclass}>Status</th>
          <th className={thclass}>Time</th>
          <th className={thclass}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>
              <p className="text-xs">{item.date}</p>
            </td>
            <td className={tdclass}>
              <h4 className="text-xs font-medium">
                {doctor ? item.user.title : item.doctor.title}
              </h4>
              <p className="text-xs mt-1 text-textGray">
                {doctor ? item.user.phone : item.doctor.phone}
              </p>
            </td>
            <td className={tdclass}>
              <span
                className={`py-1  px-4 ${
                  item.status === "Approved"
                    ? "bg-subMain text-subMain"
                    : item.status === "Pending"
                    ? "bg-orange-500 text-orange-500"
                    : item.status === "Cancel" && "bg-red-600 text-red-600"
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.status}
              </span>
            </td>
            <td className={tdclass}>
              <p className="text-xs">{`${item.from} - ${item.to}`}</p>
            </td>

            <td className={tdclass}>
              <button
                onClick={() => functions.preview(item)}
                className="text-sm flex-colo bg-white text-subMain border rounded-md w-10 h-10"
              >
                <FiEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// payment table
export function PaymentTable({ data, functions, doctor }) {
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Date</th>
          <th className={thclass}>{doctor ? "Patient" : "Doctor"}</th>
          <th className={thclass}>Status</th>
          <th className={thclass}>Amount</th>
          <th className={thclass}>Method</th>
          <th className={thclass}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>
              <p className="text-xs">{item.date}</p>
            </td>
            <td className={tdclass}>
              <h4 className="text-xs font-medium">
                {doctor ? item.user.title : item.doctor.title}
              </h4>
              <p className="text-xs mt-1 text-textGray">
                {doctor ? item.user.phone : item.doctor.phone}
              </p>
            </td>
            <td className={tdclass}>
              <span
                className={`py-1  px-4 ${
                  item.status === "Paid"
                    ? "bg-subMain text-subMain"
                    : item.status === "Pending"
                    ? "bg-orange-500 text-orange-500"
                    : item.status === "Cancel" && "bg-red-600 text-red-600"
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.status}
              </span>
            </td>
            <td className={tdclass}>
              <p className="text-xs font-semibold">{`$${item.amount}`}</p>
            </td>
            <td className={tdclass}>
              <p className="text-xs">{item.method}</p>
            </td>

            <td className={tdclass}>
              <button
                onClick={() => functions.preview(item.id)}
                className="text-sm flex-colo bg-white text-subMain border rounded-md w-10 h-10"
              >
                <FiEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// invoice used table
export function InvoiceUsedTable({ data, functions }) {
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Invoice ID</th>
          <th className={thclass}>Create Date</th>
          <th className={thclass}>Due Date</th>
          <th className={thclass}>Amount</th>
          <th className={thclass}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>
              <p className="text-xs">#{item.id}</p>
            </td>
            <td className={tdclass}>
              <p className="text-xs">{item.createdDate}</p>
            </td>
            <td className={tdclass}>
              <p className="text-xs">{item.dueDate}</p>
            </td>

            <td className={tdclass}>
              <p className="text-xs font-semibold">{`$${item.total}`}</p>
            </td>

            <td className={tdclass}>
              <button
                onClick={() => functions.preview(item.id)}
                className="text-sm flex-colo bg-white text-subMain border rounded-md w-10 h-10"
              >
                <FiEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// invoice table
export function InvoiceProductsTable({ data, functions, button }) {
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Item</th>
          <th className={thclass}>
            Item Price
            <span className="text-xs font-light ml-1">(Tsh)</span>
          </th>
          <th className={thclass}>Quantity</th>
          <th className={thclass}>
            Amout
            <span className="text-xs font-light ml-1">(Tsh)</span>
          </th>
          {button && <th className={thclass}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={`${tdclass}  font-medium`}>{item.name}</td>
            <td className={`${tdclass} text-xs`}>{item.price}</td>
            <td className={tdclass}>{item.id}</td>
            <td className={tdclass}>{item.price * item.id}</td>
            {button && (
              <td className={tdclass}>
                <button
                  onClick={() => functions.deleteItem(item.id)}
                  className="bg-red-600 bg-opacity-5 text-red-600 rounded-lg border border-red-100 py-3 px-4 text-sm"
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// medicine Dosage table

export function MedicineDosageTable({ data, functions, button }) {
  const thclasse = "text-start text-xs font-medium py-3 px-2 whitespace-nowrap";
  const tdclasse = "text-start text-xs py-4 px-2 whitespace-nowrap";
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclasse}>Item</th>
          <th className={thclasse}>
            Item Price
            <span className="text-xs font-light ml-1">(Tsh)</span>
          </th>
          <th className={thclasse}>Dosage</th>
          <th className={thclasse}>Instraction</th>
          <th className={thclasse}>Quantity</th>
          <th className={thclasse}>
            Amout
            <span className="text-xs font-light ml-1">(Tsh)</span>
          </th>
          {button && <th className={thclasse}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclasse}>{item.name}</td>
            <td className={tdclasse}>{item.price}</td>
            <td className={tdclasse}>{item.id} - M/A/E</td>
            <td className={tdclasse}>{item.instraction}</td>
            <td className={tdclasse}>{item.id}</td>
            <td className={tdclasse}>{item.price * item.id}</td>
            {button && (
              <td className={tdclasse}>
                <button
                  onClick={() => functions.delete(item.id)}
                  className="bg-red-600 bg-opacity-5 text-red-600 rounded-lg border border-red-100 py-3 px-4 text-sm"
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
