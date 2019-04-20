<template>
  <div>
    <a-modal
      class="add-sector-modal"
      v-model="getModalStatus"
      @ok="handleOkModal"
      @cancel="handleCancelModal"
    >
      <a-row type="flex" justify="center">
        <a-col :span="4">
          <img class="sector-logo" :src="sectorIcon"/>
        </a-col>
      </a-row>
      <a-form
        :form="form"
        @submit="handleSubmit">
      <a-divider class="sector-modal-divider">Sector information</a-divider>
      <a-row :gutter="16">
        <a-col :span="12">
          <!-- Sector name -->
          <a-form-item
          label="Name"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input
              v-decorator="[
                'name',
                {rules: [{ required: true, message: 'Please input sector name here!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Number -->
          <a-form-item
          label="Number"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input-number
              :min="1"
              :initialValue="6"
              v-decorator="[
                'number',
                { rules: [{ required: true, message: 'Please input sector number!' }]}
              ]"/>
          </a-form-item>
          <!--    -->
        </a-col>

        <a-col :span="12">
          <!-- Sector location -->
          <a-form-item
          label="Location"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input
              v-decorator="[
                'location',
                {rules: [{ required: true, message: 'Please input sector location here!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->
        </a-col>
      </a-row>
      <a-divider class="sector-modal-divider">Sensor information</a-divider>
      <a-row>
        <a-col :span="9">
          <!-- Max temperature -->
          <a-form-item
          label="Max T"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input-number
              :min="1"
              :initilValue="this.maxTemperature"
              :formatter="value => `${value || this.maxTemperature}°C`"
              :parser="value => value.replace('°C', '')"
              v-decorator="[
                'maxTemperature',
                { rules: [{ required: true, message: 'Please input sensor max temperature!' }]}
              ]"/>
          </a-form-item>
          <!--    -->

          <!-- Min temperature -->
          <a-form-item
          label="Min T"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }">
            <a-input-number
              :min="1"
              :initilValue="this.minTemperature"
              :formatter="value => `${value || this.minTemperature}°C`"
              :parser="value => value.replace('°C', '')"
              v-decorator="[
                'minTemperature',
                { rules: [{ required: true, message: 'Please input sensor min temperature!' }]}
              ]"/>
          </a-form-item>
          <!--    -->
        </a-col>
        <a-col :span="15">
          <!-- Date setup -->
          <a-form-item
            label="Setup date"
            :label-col="{ span: 12 }"
            :wrapper-col="{ span: 12 }"
            placeholder="Select date">
            <a-date-picker
              v-decorator="[
                'trackerSetupDate',
                { rules: [{ required: true, message: 'Please input sensor setup date!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Time norm access -->
           <a-form-item
            label="Time norm access"
            :label-col="{ span: 12 }"
            :wrapper-col="{ span: 12 }">
            <a-input-number
              :min="1"
              :max="100"
              :initialValue="this.maxTimeExcess"
              :formatter="value => `${value || this.maxTimeExcess}min`"
              :parser="value => value.replace('min', '')"
              v-decorator="[
                'maxTimeExcess',
                { rules: [{ required: true, message: 'Please input sensor time nor access!' }]}
              ]"/>
          </a-form-item>
          <!--    -->
        </a-col>
      </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import moment from 'moment';
import { omit } from 'lodash';
import uuid1 from 'uuid/v1';
import SectorIcon from '../assets/sector.png';

export default {
  name: 'AddSectorModal',
  props: {
    modalVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sectorIcon: SectorIcon,
      trackerSetupDate: moment.now(),
      maxTemperature: 200,
      minTemperature: 20,
      maxTimeExcess: 15,
    };
  },
  computed: {
    getModalStatus: {
      set: function(n,o) {
        this.$emit('handleOkModal');
      },
      get: function () {
        return this.modalVisible;
      }
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleOkModal() {
      const modalFields = this.form.getFieldsValue();
      const sectorValues = {
        ...modalFields,
        uuid: uuid1(),
        trackerSetupDate: (modalFields.trackerSetupDate || this.trackerSetupDate).format('YYYY-MM-DD'),
        maxTemperature: modalFields.maxTemperature || this.maxTemperature,
        minTemperature: modalFields.minTemperature || this.minTemperature,
        maxTimeExcess: modalFields.maxTimeExcess || this.maxTemperature,
      };

      this.$emit('handleOkModal', sectorValues);
      this.form.resetFields();
    },
    handleCancelModal() {
      this.$emit('handleCancelModal');
    },
    handleSubmit() {

    },
  },
};
</script>

<style>
  .sector-logo {
    width: 70px;
    height: 70px;
  }
  .add-sector-modal .sector-modal-divider {
    margin-bottom: 35px;
  }
  .add-sector-modal .ant-form-item-label {
    align-items: left;
  }
</style>
