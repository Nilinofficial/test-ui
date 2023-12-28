import { Table } from "antd";
import {
  columnsDashboard,
  onChangeDashboard,
} from "@/utils/tableData/dashboardData";
import { dashboardData } from "@/utils/constants";
import { useAppSelector } from "@/store/hooks";

function DashboardTable() {


  return (
    <div className="pl-5 pr-5 ">
      <Table
        className="border-l border-t border-r "
        pagination={false}
        columns={columnsDashboard}
        dataSource={dashboardData}
        onChange={onChangeDashboard}
        rowKey="id"
      />
    </div>
  );
}

export default DashboardTable;
