import { Table, Space } from 'antd';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'English',
        dataIndex: 'english',
        key: 'english',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Russian',
        dataIndex: 'russian',
        key: 'russian',
    },
    {
        title: 'Transcription',
        dataIndex: 'transcription',
        key: 'transcription',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: text => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        english: 'cat',
        russian: 'кошка',
        transcription: '[cat]',
        category: 'животные',
    },
    {
        key: '2',
        english: 'dog',
        russian: 'собака',
        transcription: '[dog]',
        category: 'животные',
    },
    {
        key: '3',
        english: 'mouse',
        russian: 'мышь',
        transcription: '[mouse]',
        category: 'животные',
    },
];

function CardsTable(props) {
    return (
        <div className='cardsTable'>
            <Table columns={columns} dataSource={data} bordered />
        </div>
    );
}
export default CardsTable;