<template>
  <div>
    <a-divider>
      <h2>Step 1: Create new device</h2>
    </a-divider>
    <div class="device-form-container">
      <a-form
        :form="form"
        @submit="handleSubmit">
      <a-row :gutter="64" type="flex" justify="center">
        <a-col :span="10">
          <!-- Name -->
          <a-form-item
          label="Name"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-input
              placeholder="Type your name here"
              v-decorator="[
                'name',
                {rules: [{ required: true, message: 'Please input device name here!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Device type -->
          <a-form-item
            label="Type"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-select
              placeholder="Select a option and change input text above"
              v-decorator="[
                'type',
                {rules: [{ required: true, message: 'Please select device type!' }]}
              ]">
                <a-select-option value="fridge">fridge</a-select-option>
                <a-select-option value="oven">oven</a-select-option>
            </a-select>
          </a-form-item>
          <!--    -->

          <!-- Model -->
          <a-form-item
            label="Model"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-input
              placeholder="Type device model here"
              v-decorator="[
                'model',
                {rules: [{ required: true, message: 'Please input device model!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Description -->
          <a-form-item
            label="Description"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }">
            <a-textarea
              placeholder="Type device description here" :rows="4"
              v-decorator="[
                'description'
              ]"/>
          </a-form-item>
          <!--    -->
        </a-col>
        <a-col :span="10">
          <!-- Service interval (hours)-->
          <a-form-item
            label="Service interval (h)"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input-number
              class="form-extra-fields"
              size='large'
              :min="1"
              :initialValue="30"
              :formatter="value => `${value || 30}h`"
              :parser="value => value.replace('h', '')"
              v-decorator="['serviceInterval']"/>
          </a-form-item>
          <!--    -->

          <!-- Notify before service (percent of serviceInterval) -->
          <a-form-item
            label="Notify before service (%)"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input-number
              class="form-extra-fields"
              size='large'
              :min="1"
              :max="100"
              :formatter="value => `${value || 15}%`"
              :parser="value => value.replace('%', '')"
              :initialValue="15"
              v-decorator="['notifyBeforeService']"/>
          </a-form-item>
          <!--    -->

          <!-- Date last service -->
          <a-form-item
            label="Date last service"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            placeholder="Select date">
            <a-date-picker
              :initialValue="defaultDate"
              class="form-extra-fields-data"
              v-decorator="['dateLastService']"
            />
          </a-form-item>
          <!--    -->

          <!-- <a-form-item :wrapper-col="{ span: 4 }">
            <a-button type="primary">+ ADD DEVICE</a-button>
          </a-form-item> -->
        </a-col>
      </a-row>
    </a-form>
    <a-divider/>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

const now = moment();

export default {
  name: 'AddDeviceForm',
  data() {
    return {
      defaultDate: now,
    };
  },
  methods: {
    handleSubmit() {

    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
};
</script>

<style>
  .ant-form-item-label {
    text-align: left;
  }
  .form-extra-fields {
    display: flex;
    flex-direction: row;
  }
  .form-extra-fields-data {
    display: flex;
  }
</style>
