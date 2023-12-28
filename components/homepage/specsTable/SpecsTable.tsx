import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "./specsTable.css";
import Link from "next/link";



const FeatureStatusIndicator = ({ status }: { status: boolean }) => (
  <div className="w-full flex justify-center">
    {status ? (
      <CheckIcon className="w-6 h-6 self-center text-green-700" />
    ) : (
      <XMarkIcon className="w-6 h-6 self-center text-red-700" />
    )}
  </div>
);

interface RowType {
  key: React.Key;
  name: string;
  advanced: any;
  enterprise: any;
  basic: any;
}

const data: RowType[] = [
  {
    key: "1",
    name: "Real time reconnaissance",
    basic: true,
    advanced: true,
    enterprise: true,
  },
  {
    key: "2",
    name: "Continuous Security Testing",
    basic: false,
    advanced: true,
    enterprise: true,
  },
  {
    key: "3",
    name: "Reapid reaction to emerging vulnarabilities",
    basic: true,
    advanced: true,
    enterprise: true,
  },
  {
    key: "4",
    name: "Real time reconnaissance",
    basic: false,
    advanced: true,
    enterprise: true,
  },
  {
    key: "5",
    name: "Real time reconnaissance",
    basic: false,
    advanced: false,
    enterprise: true,
  },
  {
    key: "6",
    name: "Price",
    basic: "SGD 50",
    advanced: "SGD 100",
    enterprise: "SGD 200",
  },
  {
    key: "7",
    name: "",
    basic: "BUY",
    advanced: "BUY",
    enterprise: "BUY",
  },
];

export const SpecsTable = () => {
  const columns: ColumnsType<RowType> = [
    {
      title: "",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
      className: "w-1/4  text-lg",
    },
    {
      title: "Basic",

      dataIndex: "basic",
      key: "basic",
      align: "center",
      className: "border-l-1 border border-r-0 border-t-0 border-b-0",
      render: (basic: any, record: RowType) => {
        if (record.key === "7") {
          return (
            <div>
              {basic === "BUY" ? (
                <Link
                  href={{
                    pathname: "/login",
                    query: `plan=Z001`,
                  }}>
                  <button className="bg-[#e21f36] p-2 px-8 rounded-full text-lg text-white">
                    Buy
                  </button>
                </Link>
              ) : (
                <span>{basic}</span>
              )}
            </div>
          );
        } else if (record.key === "6") {
          return (
            <div className="font-bold ">
              <span>{basic}</span>
            </div>
          );
        } else {
          return (
            <div>
              <FeatureStatusIndicator status={basic} />
            </div>
          );
        }
      },
    },
    {
      title: "Advanced",

      dataIndex: "advanced",
      key: "advanced",
      align: "center",
      className: "border-l-1 border border-r-0 border-t-0 border-b-0",
      render: (advanced: any, record: RowType) => {
        if (record.key === "7") {
          return (
            <div>


              {advanced === "BUY" ? (

<Link
href={{
  pathname: "/login",
  query: `plan=Z002`,
}}>
                <button className="bg-[#e21f36] p-2 px-8 rounded-full text-lg text-white">
                  Buy
                </button>

                </Link>
              ) : (
                <span>{advanced}</span>
              )}
            </div>
          );
        } else if (record.key === "6") {
          return (
            <div className="font-bold ">
              <span>{advanced}</span>
            </div>
          );
        } else {
          return (
            <div>
              <FeatureStatusIndicator status={advanced} />
            </div>
          );
        }
      },
    },
    {
      title: "Enterprise",
      dataIndex: "enterprise",
      key: "enterprise",
      align: "center",
      className: "border-l-1 border border-r-0 border-t-0 border-b-0",
      render: (enterprise: any, record: RowType) => {
        if (record.key === "7") {
          return (
            <div>
              {enterprise === "BUY" ? (
                <Link
                href={{
                  pathname: "/login",
                  query: `plan=Z003`,
                }}>
                <button className="bg-[#e21f36] text-lg text-white p-2 px-8 rounded-full">
                  Buy
                </button>
                </Link>
              ) : (
                <span>{enterprise}</span>
              )}
            </div>
          );
        } else if (record.key === "6") {
          return (
            <div className="font-bold ">
              <span>{enterprise}</span>
            </div>
          );
        } else {
          return (
            <div>
              <FeatureStatusIndicator status={enterprise} />
            </div>
          );
        }
      },
    },
  ];

  return (
    <div>
      <Table
        scroll={{ x: true }}
        columns={columns}
        dataSource={data}
        pagination={false}
        className="border-2 rounded-md"
      />
    </div>
  );
};
