import React, { useMemo, useState } from "react";
import { Button, MenuSelect } from "./Form";
import { BiDotsHorizontalRounded, BiPlus } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import {
  FiChevronLeft,
  FiChevronRight,
  FiEdit,
  FiEye,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./progressBar";
import { FaEdit } from "react-icons/fa";
import CouponsPopup from "./Modals/couponsPopup";
import { discountTypes } from "./Datas";
const thclass = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
const tdclass = "text-start text-sm py-4 px-2 whitespace-nowrap";

// export function Transactiontable({ data, action, functions }) {

export function Transactiontable({ data, action, functions, isTrue }) {
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

  const thclass = "px-4 py-2"; // Example className for th elements
  const tdclass = "px-4 py-2"; // Example className for td elements

  return (
    <>
      <table className="table-auto">
        <thead className="bg-dry rounded-md overflow-hidden">
          <tr>
            <th className={thclass}>{isTrue ? "Order ID" : "#"}</th>
            <th className={thclass}>{isTrue ? "Item" : "Patient"}</th>
            <th className={thclass}>{isTrue ? "Customer Name" : "Date"}</th>
            <th className={thclass}>{isTrue ? "Payment Info" : "Status"}</th>
            {isTrue ? (
              <th className={thclass}>Price</th>
            ) : (
              <th className={thclass}>
                Amount <span className="text-xs font-light">(Tsh)</span>
              </th>
            )}
            <th className={thclass}>{isTrue ? "Status" : "Method"}</th>
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
      <div className=" w-full flex justify-center mt-5">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
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
    <>
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
      <div className=" w-full flex justify-center mt-5">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
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
    <>
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
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
    <>
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
    flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
      justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
      justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
      justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// patient table
export function UsersTable({ data, functions, used }) {
  const DropDown1 = !used
    ? [
        {
          title: "View",
          icon: FiEye,
          onClick: (item) => {
            functions.preview(item.id);
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
          onClick: (item) => {
            functions.preview(item.id);
          },
        },
      ];

  const thclasse = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
  const tdclasse = "text-start text-xs py-4 px-2 whitespace-nowrap";

  return (
    <>
      <table className="table-auto w-full">
        <thead className="bg-dry rounded-md overflow-hidden">
          <tr>
            <th className={thclasse}>Name</th>
            <th className={thclasse}>Email</th>
            <th className={thclasse}>Phone Number</th>
            <th className={thclasse}>Gender</th>
            <th className={thclasse}>Main Goal</th>
            <th className={thclasse}>Status</th>
            <th className={thclasse}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-border hover:bg-greyed transitions"
            >
              <td className={tdclasse}>
                <div className="flex gap-4 items-center">
                  <span className="w-12">
                    <img
                      src={item.profilePic || "default-avatar.png"} // Handle null profilePic
                      alt={`${item.firstName} ${item.lastName}`}
                      className="w-full h-12 rounded-full object-cover border border-border"
                    />
                  </span>
                  <div>
                    <h4 className="text-sm font-medium">
                      {item.firstName} {item.lastName}
                    </h4>
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
              <td className={tdclasse}>{item.mainGoal}</td>
              <td className={tdclasse}>
                <span
                  className={`py-1 px-4 ${
                    item.status === "Active" ? "text-textgreen" : "text-textred"
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
    flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
      justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
      justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
      justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
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
        <div className=" w-full flex justify-center">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
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
        <div className=" w-full flex justify-center">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
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
        <div className=" w-full flex justify-center">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
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
        <div className=" w-full flex justify-center">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
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
                  <a href={item.link} className="text-blue hover:underline">
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
        <div className=" w-full flex justify-center">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export function VendorProductListTable({ data, functions, used }) {
  return (
    <div className="p-6 rounded-lg">
      <>
        <table className="w-full  border-separate border-spacing-y-4 px-4 h-[60px] rounded-[10px]">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-4">Item</th>
              <th className="px-4">Weight</th>

              <th className="px-4">Flavour</th>
              <th className="px-4">Expiry Date</th>
              <th className="px-4">Stock</th>
              <th className="px-4">MRP</th>
              <th className="px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-backgroundgray relative h-[60px]">
                <td className="py-4 px-4 text-sm rounded-l-lg flex mt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-2xl bg-white mr-3 p-2"
                  />
                  {item.item}
                </td>
                <td className="py-4 px-4 text-sm">{item.weight}</td>
                <td className="py-4 px-4 text-sm">{item.flavour}</td>

                <td className="py-4 px-4 text-sm">{item.expiryDate}</td>
                <td className="py-4 px-4 text-sm">{item.stock}</td>
                <td className="py-4 px-4 text-sm">{item.mrp}</td>

                <td className="py-4 px-4 text-sm">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" w-full flex justify-center">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export function VendorListTable({ data, functions, used }) {
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
              <th className="px-4">BusinessName</th>
              <th className="px-4">BusinessType</th>
              <th className="px-4">Product</th>
              <th className="px-4">TotalOrders</th>
              <th className="px-4">RevenueGenerated</th>
              <th className="px-4">JoinedDate</th>
              <th className="px-4">Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-backgroundgray relative h-[60px]">
                <td className="py-4 px-4 text-sm rounded-l-lg">
                  {item.BusinessName}
                </td>
                <td className="py-4 px-4 text-sm">{item.BusinessType}</td>
                <td className="py-4 px-4 text-sm">{item.Product}</td>
                <td className="py-4 px-4 text-sm">{item.TotalOrders}</td>
                <td className="py-4 px-4 text-sm">{item.RevenueGenerated}</td>
                <td className="py-4 px-4 text-sm">{item.JoinedDate}</td>
                <td className="py-4 px-4 text-sm">{item.Location}</td>

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
        <div className=" w-full flex justify-center mt-5">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export function VendorTable({ data, functions, used }) {
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
              <th className="px-4">BusinessName</th>
              <th className="px-4">BusinessType</th>
              <th className="px-4">Product</th>
              <th className="px-4">TotalOrders</th>
              <th className="px-4">RevenueGenerated</th>
              <th className="px-4">UnitSold</th>
              <th className="px-4">Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-backgroundgray relative h-[60px]">
                <td className="py-4 px-4 text-sm rounded-l-lg">
                  {item.BusinessName}
                </td>
                <td className="py-4 px-4 text-sm">{item.BusinessType}</td>
                <td className="py-4 px-4 text-sm">{item.Product}</td>
                <td className="py-4 px-4 text-sm">{item.TotalOrders}</td>
                <td className="py-4 px-4 text-sm">{item.RevenueGenerated}</td>
                <td className="py-4 px-4 text-sm">{item.UnitSold}</td>
                <td className="py-4 px-4 text-sm">{item.Location}</td>

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
        <div className=" w-full flex justify-center">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export function AppointmentsTable({ data, functions, used }) {
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
    <div className="p-6 rounded-lg bg-white">
      <table className="w-full border-separate border-spacing-y-4 px-4 h-[60px] rounded-[10px]">
        <thead>
          <tr className="text-left text-[12px] text-greytext">
            <th className="px-4">User Name</th>
            <th className="px-4">Appointment ID</th>
            <th className="px-4">Phone Number</th>
            <th className="px-4">Slot</th>
            <th className="px-4">Time</th>
            <th className="px-4">Appointment</th>
            <th className="px-4">Price</th>
            <th className="px-4">Yonta</th>
            <th className="px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-backgroundgray relative h-[60px]">
              <div className="flex gap-4 items-center">
                <span className="w-12">
                  <img
                    src={item.profilePic || "/images/hero.png"} // Handle null profilePic
                    alt={`${item.Username}`}
                    className="w-full h-12 rounded-full object-cover border border-border"
                  />
                </span>
                <div>
                  <h4 className="text-sm font-medium">{item.Username}</h4>
                </div>
              </div>
              <td className="py-4 px-4 text-sm rounded-l-lg">
                {item.AppointmentID}
              </td>
              <td className="py-4 px-4 text-sm">{item.PhoneNumber}</td>
              <td className="py-4 px-4 text-sm">{item.Slot}</td>
              <td className="py-4 px-4 text-sm">{item.Time}</td>
              <td className="py-4 px-4 text-sm">{item.Appointment}</td>
              <td className="py-4 px-4 text-sm">{item.Price}</td>
              <td className="py-4 px-4 text-sm">{item.Yonta}</td>
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExpertTable({ data, functions }) {
  const navigate = useNavigate();

  const thclass = "px-4 text-left text-sm font-medium text-gray-500";
  const tdclass = "py-4 px-4 text-sm text-gray-700";

  return (
    <div className="p-6 rounded-lg">
      <table className="w-full border-separate border-spacing-y-4 px-4 bg-white ">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            <th className={thclass} style={{ width: "200px" }}>
              Name
            </th>
            <th className={thclass} style={{ width: "150px" }}>
              Phone number
            </th>
            <th className={thclass} style={{ width: "150px" }}>
              Category
            </th>
            <th className={thclass} style={{ width: "100px" }}>
              Ratings
            </th>
            <th className={thclass} style={{ width: "100px" }}>
              Slot Price
            </th>
            <th className={thclass} style={{ width: "200px" }}>
              Location
            </th>
            <th className={thclass} style={{ width: "150px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="bg-backgroundgray rounded-[14px] h-[60px] hover:bg-gray-50 cursor-pointer"
              onClick={() =>
                navigate("/expert-profile", { state: { expert: item } })
              } // Navigate on row click
            >
              <td className={tdclass}>
                <div className="flex items-center">
                  <img
                    src={item.profilePicture}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300 mr-3"
                  />
                  <span className="font-medium">{item.name}</span>
                </div>
              </td>
              <td className={tdclass}>{item.mobileNumber}</td>
              <td className={tdclass}>{item.category}</td>
              <td className={tdclass}>{item.rating.toFixed(1)}</td>
              <td className={tdclass}>${item.slotPrice}</td>
              <td className={tdclass}>{item.location}</td>
              <td
                className={
                  tdclass + " flex items-center justify-center space-x-2"
                }
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    functions.edit(item.id);
                  }}
                  className="bg-blue text-white px-2 py-1 rounded hover:bg-blue flex items-center"
                >
                  <FiEdit className="mr-1" />
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    functions.delete(item.id);
                  }}
                  className="bg-red text-white px-2 py-1 rounded hover:bg-red flex items-center"
                >
                  <FiTrash2 className="mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// appointment table
export function AppointmentTable({ data, functions, doctor }) {
  return (
    <>
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
    flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
      justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
      justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
      justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// payment table
export function PaymentTable({ data, functions, doctor }) {
  return (
    <>
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// invoice used table
export function InvoiceUsedTable({ data, functions }) {
  return (
    <>
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
    flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
      justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
      justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
      justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// invoice table
export function InvoiceProductsTable({ data, functions, button }) {
  return (
    <>
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// medicine Dosage table

export function MedicineDosageTable({ data, functions, button }) {
  const thclasse = "text-start text-xs font-medium py-3 px-2 whitespace-nowrap";
  const tdclasse = "text-start text-xs py-4 px-2 whitespace-nowrap";
  return (
    <>
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
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function OrderTable({ data, functions }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const thClass = "px-4 py-2 text-left text-sm font-medium text-gray-500";
  const tdClass = "py-4 px-4 text-sm text-gray-700";
  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        (item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.orderID.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (statusFilter === "All" || item.status === statusFilter)
    );
  }, [data, searchTerm, statusFilter]);

  const pageCount = Math.ceil(filteredData.length / entriesPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const statusColors = {
    Processing: "text-red",
    Shipping: "text-bluetext",
    Delivered: "text-green",
  };
  const handleRowClick = (order) => {
    navigate("/orderdetail", { state: { orderData: order } });
  };

  return (
    <div className="p-6 rounded-lg bg-white shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Orders</h2>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search order..."
              className="pl-10 h-[38px] pr-4 py-2 border bg-backgroundgray rounded-md focus:ring-blue "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-backgroundgray h-[38px] border-backgroundgray text-[12px] text-textGray rounded-md px-2 py-1 text-sm"
          >
            <option value="All">All Statuses</option>
            <option value="Processing">Processing</option>
            <option value="Shipping">Shipping</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      <div className="p-2">
        <span className="ml-2 text-sm pr-2 text-greytext">Show </span>
        <select
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          className="border bg-backgroundgray text-greytext rounded-md px-2 py-1 text-sm"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <span className="ml-2 text-sm text-greytext">entries </span>
      </div>

      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-[12px]">
            <th className={thClass}>Order ID</th>
            <th className={thClass}>Item</th>
            <th className={thClass}>Customer Name</th>
            <th className={thClass}>Date</th>
            <th className={thClass}>Payment Info</th>
            <th className={thClass}>Price</th>
            <th className={thClass}>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={index}
              className="bg-backgroundgray rounded-[14px] hover:bg-gray-50 cursor-pointer"
              onClick={() => handleRowClick(item)}
            >
              <td className={tdClass}>{item.orderID}</td>
              <td className={tdClass}>
                <div className="flex items-center">
                  <img
                    src={item.itemImage}
                    alt={item.itemName}
                    className="w-10 h-10 mr-3 bg-white rounded-[4px] object-cover"
                  />
                  <span>{item.itemName}</span>
                </div>
              </td>
              <td className={tdClass}>{item.customerName}</td>
              <td className={tdClass}>{item.date}</td>
              <td className={tdClass}>{item.paymentInfo}</td>
              <td className={tdClass}>₹ {item.price}</td>
              <td className={`${tdClass} ${statusColors[item.status]}`}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" w-full flex justify-center">
        <div
          className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
        >
          <p className="text-black text-sm font-semibold">
            Showing 1 to 5 of 45,365 enteries
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <p className="text-blue text-lg">
              <FaAngleLeft />
            </p>
            <p className="flex space-x-2 items-center justify-center">
              <p
                className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
              >
                1
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                2
              </p>
              <p
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
              >
                33
              </p>
            </p>
            <p className="text-blue text-lg">
              <FaAngleRight />
            </p>
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col items-center mt-4">
        <div className="text-sm text-gray-600 mb-2">
          Showing {(currentPage - 1) * entriesPerPage + 1} to{" "}
          {Math.min(currentPage * entriesPerPage, filteredData.length)} of{" "}
          {filteredData.length} entries
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="mr-2 p-1 border rounded-[45px] disabled:opacity-50"
          >
            <FiChevronLeft />
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`mx-1 px-3 py-1 border rounded-[45px] ${
                currentPage === page ? "bg-blue text-white" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageCount))
            }
            disabled={currentPage === pageCount}
            className="ml-2 p-1 border rounded-[45px] disabled:opacity-50"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export function OrderDetails({ data }) {
  console.log("OrderDetails - data:", data); // Log data for debugging

  const thClass = "px-4 py-2 text-left text-sm font-medium text-gray-500";
  const tdClass = "py-4 px-4 text-sm text-gray-700";

  // Default values if attributes are not presentco
  const itemImage = data?.itemImage;
  const itemName = data?.itemName;
  const trackingID = data?.orderID || "0"; // Adjusted to use 'orderID' for Tracking ID
  const quantity = data?.quantity || "1";
  const price = data?.price || "0";

  const calculateTotal = () => {
    return price * quantity, 0;
  };

  return (
    <div className="p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[12px]">
              <th className={thClass}>Item</th>
              <th className={thClass}>Tracking ID</th>
              <th className={thClass}>Quantity</th>
              <th className={thClass}>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-backgroundgray hover:bg-gray-50 cursor-pointer rounded-[14px]">
              <td className={tdClass}>
                <div className="flex items-center">
                  <img
                    src={itemImage}
                    alt={itemName}
                    className="w-10 h-10 mr-3 bg-white rounded-[4px] object-cover"
                  />
                  <span>{itemName}</span>
                </div>
              </td>
              <td className={tdClass}>{trackingID}</td>
              <td className={tdClass}>{quantity}</td>
              <td className={tdClass}>₹ {price}</td>
            </tr>
          </tbody>
        </table>
        <div className=" w-full flex justify-center">
          <div
            className="w-[250px] mb-20
      flex flex-col items-start justify-center gap-4"
          >
            <p className="text-black text-sm font-semibold">
              Showing 1 to 5 of 45,365 enteries
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <p className="text-blue text-lg">
                <FaAngleLeft />
              </p>
              <p className="flex space-x-2 items-center justify-center">
                <p
                  className="w-9 h-9 rounded-full border bg-blue border-gray-500 flex items-center
        justify-center"
                >
                  1
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  2
                </p>
                <p
                  className="w-9 h-9 rounded-full border border-gray-500 flex items-center
        justify-center"
                >
                  33
                </p>
              </p>
              <p className="text-blue text-lg">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 border  border-buttonblue text-blacktext rounded-md hover:bg-blue"
        >
          Print Invoice
        </button>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">
          Total: ₹ {calculateTotal().toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">Payment Status: COD</p>
      </div>
    </div>
  );
}
