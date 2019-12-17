<template>
    <div>
        <a-row :gutter="16">
            <a-col class="gutter-row" :span="24">
                <a-button type="primary add-btn" @click="showDrawer">Add Order</a-button>

                <a-card title="Order List By Price" class="dash-card table-card">
                    <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" />
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
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }

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