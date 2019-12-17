<template>
    <div>
        <a-row :gutter="16">
            <a-col class="gutter-row" :span="24">
                <a-button type="primary add-btn" @click="showDrawer">Add Package</a-button>

                <a-card title="Order List By Price" class="table-card">
                    <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data">
                        <span slot="status" slot-scope="status">
                            <a-tag class="status-btn">Action</a-tag>
                        </span>
                        <span slot="action" slot-scope="text, record">
                            <i class="far fa-edit icon-style"></i>
                            <i class="far fa-trash-alt icon-style"></i>
                        </span>
                    </a-table>
                </a-card>
            </a-col>
        </a-row>
        <a-drawer title="Add Order" :width="400" @close="onClose" :visible="visible">
            <a-form :form="form" layout="vertical" hideRequiredMark>
                <a-form-item label="Customer Name" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                    <a-input />
                </a-form-item>
                <a-form-item label="Customer Email" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                    <a-input />
                </a-form-item>
                <a-form-item label="Image ID" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                    <a-input />
                </a-form-item>
                <a-form-item label="Size">
                    <a-radio-group @change="onChange" v-model="value">
                        <a-radio :value="1">Web</a-radio>
                        <a-radio :value="2">Small</a-radio>
                        <a-radio :value="3">Medium</a-radio>
                        <a-radio :value="4">Large</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="Duraton" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                    <a-input />
                </a-form-item>
                <a-form-item label="Price ($)" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                    <a-input />
                </a-form-item>
            </a-form>
            <a-row :gutter="16">
                <a-col class="gutter-row text-right" :span="24">
                    <a-button type="primary">Send</a-button>
                </a-col>
            </a-row>
        </a-drawer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { Button } from 'ant-design-vue';

    Vue.use(Button);

    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Image Size',
            dataIndex: 'imageSize',
        },
        {
            title: 'No of Downloads',
            dataIndex: 'downloads',
        },
        {
            title: 'MRP',
            dataIndex: 'mrp',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            scopedSlots: { customRender: 'status' },
        },
        {
            title: 'Action',
            dataIndex: 'action',
            scopedSlots: { customRender: 'action' }
        },
    ];

    const data = [
        {
            key: '1',
            no: '20',
            name: '4K and HD Video',
            imageSize: 'Small, Medium, Large',
            downloads: '100, 100, 100',
            mrp: '7900.00, 14900.00, 26900.00',
            price: '4999.00, 8900.00, 14900.00',
            duration: '365',
            status: 'Active',
        },
        {
            key: '1',
            no: '19',
            name: 'Medium A4 Size Pack',
            imageSize: '25 images',
            downloads: '25, 25, 25',
            mrp: '3726, 2450, 4900',
            price: '1863, 2450, 4900',
            duration: '365',
            status: 'Active',
        },
        {
            key: '1',
            no: '18',
            name: 'Digital Media Pack',
            imageSize: '25 images',
            downloads: '25, 50, 100',
            mrp: '725, 2450, 4900',
            price: '485, 2450, 4900',
            duration: '365',
            status: 'Active',
        },
    ];

    export default {
        data() {
            return {
                value: 1,
                formItemLayout,
                form: this.$form.createForm(this),
                visible: false,
                data,
                columns,
                selectedRowKeys: [], // Check here to configure the default column
            };
        },
        computed: {
            rowSelection() {
                const { selectedRowKeys } = this;
                return {
                    selectedRowKeys,
                    onChange: this.onSelectChange,
                    hideDefaultSelections: true,
                    selections: [
                        {
                            key: 'all-data',
                            text: 'Select All Data',
                            onSelect: () => {
                                this.selectedRowKeys = [...Array(46).keys()]; // 0...45
                            },
                        },
                        {
                            key: 'odd',
                            text: 'Select Odd Row',
                            onSelect: changableRowKeys => {
                                let newSelectedRowKeys = [];
                                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                                    if (index % 2 !== 0) {
                                        return false;
                                    }
                                    return true;
                                });
                                this.selectedRowKeys = newSelectedRowKeys;
                            },
                        },
                        {
                            key: 'even',
                            text: 'Select Even Row',
                            onSelect: changableRowKeys => {
                                let newSelectedRowKeys = [];
                                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                                    if (index % 2 !== 0) {
                                        return true;
                                    }
                                    return false;
                                });
                                this.selectedRowKeys = newSelectedRowKeys;
                            },
                        },
                    ],
                    onSelection: this.onSelection,
                };
            },
        },
        methods: {
            onSelectChange(selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys;
            },
            showDrawer() {
                this.visible = true;
            },
            onClose() {
                this.visible = false;
            },
            onChange(e) {
                console.log('radio checked', e.target.value);
            },
        },
    };
</script>