import { FixableIssue, dashboardDataType } from "@/types";
import { Space, Tag } from "antd";
import Link from "next/link";

interface ChipsProps {
  fixableIssues: FixableIssue[];
  record: dashboardDataType[];
}

function Chips({ fixableIssues, record }: ChipsProps) {
  const recordArr = Object.values(record);
  console.log(recordArr);

  return (
    <Space size={[0, 4]} wrap>
      {fixableIssues.map((fixableIssue, index) => (
        <div key={index}>
          <Link href={`/projects/${recordArr[1]}`}>
            
            <Tag
              className="rounded-none mx-px  cursor-pointer"
              color={`${
                fixableIssue.value > 0
                  ? `${colors[index].colorValue}`
                  : "#e7e7e7"
              }`}>
              {fixableIssue.value}
            </Tag>

            <Tag
              className="rounded-none cursor-pointer"
              color={`${
                fixableIssue.value > 0
                  ? `${colors[index].colorSituation}`
                  : "#88879e"
              }`}>
              {fixableIssue.situation}
            </Tag>
          </Link>
        </div>
      ))}
    </Space>
  );
}

export default Chips;

const colors = [
  {
    id: 1,
    colorValue: "#dfa89d",
    colorSituation: "#ab1a19",
  },
  {
    id: 2,
    colorValue: "#e8b9a6",
    colorSituation: "#ce5019",
  },
  {
    id: 3,
    colorValue: "#eccab2",
    colorSituation: "#d68000",
  },
  {
    id: 4,
    colorValue: "#e7e7e7",
    colorSituation: "#88879e",
  },
];
