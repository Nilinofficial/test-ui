import Chips from "@/components/chips/Chips";
import type { ColumnsType, TableProps } from "antd/es/table";
import { dashboardDataType } from "@/types";

const columnsDashboard: ColumnsType<dashboardDataType> = [
  {
    title: "Project",
    dataIndex: "projectName",
  },
  {
    title: "Fixable Issues",
    dataIndex: "fixableIssues",
    render: (fixableIssues, record:any) => (
      <Chips fixableIssues={fixableIssues} record={record} />
    ),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    ellipsis: true,
    render: (actions) => (
      <div className="">
        <button className="text-xs w-24 border p-2 rounded-md  md:w-auto">
          <p className="truncate">{actions}</p>
        </button>
      </div>
    ),
  },
];

const onChangeDashboard: TableProps<dashboardDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

export {  columnsDashboard, onChangeDashboard };
