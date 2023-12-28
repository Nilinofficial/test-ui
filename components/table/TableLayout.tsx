import { Table } from "antd";

interface TableType {
  columns: any;
  data: any[];
  onChange: any;
}

function TableLayout({ columns, data, onChange }: any) {
  return (
    <div className="flex items-center justify-center px-5 max-w-full ">
      <Table
        scroll={{ x: true }}
        className="border-l border-t border-r  w-full rounded-md "
        style={{ zIndex: 1 }}
        pagination={false}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="key"
      />
    </div>
  );
}

export default TableLayout;
