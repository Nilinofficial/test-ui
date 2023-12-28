import { reportDataType } from "@/types";
import type { ColumnsType, TableProps } from "antd/es/table";

export const columnsReport: ColumnsType<reportDataType> = [
  {
    title: "",
    dataIndex: "issueType",
    sortDirections: ["ascend", "descend"],
    key: "issueType",
    ellipsis: true,
    sorter: (a, b) => {
      const sortOrder = ["C", "H", "M", "L"];
      return sortOrder.indexOf(a.issueType) - sortOrder.indexOf(b.issueType);
    },
    render: (issueType) => {
      const colorInfo = colors.find((item) => item.issueStage === issueType);
      const backgroundColor = colorInfo ? colorInfo.colorValue : "";

      return (
        <div className=" flex items-center ">
          <p
            style={{
              backgroundColor,
              color: "white",
              paddingLeft: "4px",
              paddingRight: "4px",
            }}>
            {issueType}
          </p>
        </div>
      );
    },
  },
  {
    title: "SCORE",
    dataIndex: "score",
    sorter: {
      compare: (a, b) => a.score - b.score,
      multiple: 3,
    },
  },
  {
    title: "ISSUE",
    dataIndex: "issue",
    render: (issue) => (
      <div style={{ color: "#3366CC", cursor: "pointer" }}> {issue} </div>
    ),
  },
  {
    title: "CVE",
    dataIndex: "cve",
  },
  {
    title: "CWE",
    dataIndex: "cwe",
    render: (cwe) => (
      <div style={{ color: "#3366CC", cursor: "pointer" }}> {cwe} </div>
    ),
  },
  {
    title: "PROJECT",
    dataIndex: "project",
    render: (project) => (
      <div style={{ color: "#3366CC", cursor: "pointer" }}> {project} </div>
    ),
  },
  {
    title: "EXPLOIT MATURITY",
    dataIndex: "exploitMaturity",
  },
  {
    title: "AUTO FIXABLE",
    dataIndex: "autoFixable",
  },
  {
    title: "INTRODUCED",
    dataIndex: "introduced",
    sorter: {
      compare: (a, b) => a.introduced - b.introduced,
      multiple: 1,
    },
  },
  {
    title: "SNYK PRODUCT",
    dataIndex: "matterbayProduct",
    sorter: {
      compare: (a, b) => a.matterbayProduct - b.matterbayProduct,
      multiple: 1,
    },
  },
];

export const onChangeReport: TableProps<reportDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const colors = [
  {
    id: 1,
    issueStage: "C",
    colorValue: "#c1481d",
  },
  {
    id: 2,
    issueStage: "H",
    colorValue: "#ce5019",
  },
  {
    id: 3,
    issueStage: "M",
    colorValue: "#d68000",
  },
  {
    id: 4,
    issueStage: "L",
    colorValue: "#88879e",
  },
];
