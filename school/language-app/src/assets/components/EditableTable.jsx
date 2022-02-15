import React, { useState, useContext } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import 'antd/dist/antd.css';
import '../../App.css'
import { WordsContext } from './WordsContext';
import { useEffect } from 'react';

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                        border: '1px solid rgb(239, 239, 239)',
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

function EditableTable() {
    const { words, fillWords, deleteWord, addWord, editWord } = useContext(WordsContext);

    const [form] = Form.useForm();
    const [data, setData] = useState(words);
    const [editingKey, setEditingKey] = useState('');
    const [deletingKey, setDeletingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    useEffect(() => fillWords(), []);

    const edit = (record) => {
        form.setFieldsValue({
            english: '',
            russian: '',
            transcription: '',
            tags: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            editWord(row);
            setEditingKey('');
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const handleDelete = (key) => {
        setDeletingKey(key);
        deleteWord(key);
        setDeletingKey('');
    };

    const handleAdd = async () => {
        const newKey = data.length + 1;
        form.setFieldsValue({
            english: '',
            russian: '',
            transcription: '',
            tags: '',
        });
        const row = await form.validateFields();
        row.key = newKey;
        addWord(row);
    };

    const columns = [
        {
            title: 'english',
            dataIndex: 'english',
            width: '20%',
            editable: true,
            render: text => <a>{text}</a>,
        },
        {
            title: 'russian',
            dataIndex: 'russian',
            width: '20%',
            editable: true,
        },
        {
            title: 'transcription',
            dataIndex: 'transcription',
            width: '20%',
            editable: true,
        },
        {
            title: 'tags',
            dataIndex: 'tags',
            width: '20%',
            editable: true,
        },
        {
            title: 'actions',
            dataIndex: 'actions',
            render: (_, record) => {
                const editable = isEditing(record);
                const deleteShowDisabled = (editingKey !== '');
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <span>
                        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}
                            style={{
                                marginRight: 8,
                            }}>
                            Edit
                        </Typography.Link>
                        <Popconfirm title="Sure to delete?" disabled={deleteShowDisabled}
                            onConfirm={() => handleDelete(record.key)}>
                            <a style={{ color: deleteShowDisabled && 'rgba(0, 0, 0, 0.25)' }}>
                                Delete</a>
                        </Popconfirm>
                    </span>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
            <Button type='dashed' onClick={handleAdd}>Add new word</Button>
        </Form>
    );
};

export default EditableTable;