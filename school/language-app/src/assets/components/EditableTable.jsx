import React, { useState, useEffect } from 'react';
import { observer, inject } from "mobx-react";
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import 'antd/dist/antd.css';
import '../../App.css'

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

function EditableTable({ wordsStore }) {
    const [form] = Form.useForm();
    const [data, setData] = useState(wordsStore.words);
    const [editingKey, setEditingKey] = useState('');
    const [deletingKey, setDeletingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    useEffect(() => {
        wordsStore.loadData();
    }, []);

    const edit = (record) => {
        form.setFieldsValue({
            english: '',
            russian: '',
            transcription: '',
            category: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = form.validateFields();
            const index = wordsStore.words.findIndex((item) => key === item.key);

            const item = wordsStore.words[index];
            wordsStore.words.splice(index, 1, { ...item, ...row });
            wordsStore.loadData();
            setEditingKey('');
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    if (!wordsStore.isLoaded) {
        return "...";
    }

    const handleDelete = (key) => {
        setDeletingKey(key);
        wordsStore.remove(key);
        setDeletingKey('');
    };

    const handleAdd = () => {
        form.setFieldsValue({
            english: '',
            russian: '',
            transcription: '',
            tags: '',
        });

        const row = form.validateFields();
        row.key = data.length + 1;

        wordsStore.add(row);
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
            title: 'category',
            dataIndex: 'category',
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

            <Button type='dashed' onClick={handleAdd}>Add word</Button>
        </Form>
    );
};

export default inject(["wordsStore"])(observer(EditableTable));