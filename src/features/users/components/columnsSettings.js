import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import '../../.././components/styles.css'
const getColumnSettings = () => [
    {
        title: 'Name',
        dataIndex: 'name',
        sortDirections: ['descend', 'ascend'],key: 'name',
        width: '20%',
        sorter: (a, b) => a.name.localeCompare(b.name),
  
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',

    },
    {
        title:'Actions',
        dataIndex:'actions',
        render:(record)=>{
            return(
                <>
            
            <EyeOutlined
            //   onClick={() => showModal(record)}
              className={"eyeOutline"}
            />
            
            <EditOutlined
              className="editOutlined-css"
              onClick={(e) => {
                // e.preventDefault();
                // props.handleData(record);
                // navigate("/edit");
              }}
            />
            
            <DeleteOutlined
              onClick={() => {
                // onDeleteStudent(record);
              }}
              className="deleteOutlined-css"
            />
          </>
            )
        }
    }
    
];

export default getColumnSettings