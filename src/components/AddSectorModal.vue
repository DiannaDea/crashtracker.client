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
                {rules: [{ required: true, message: 'Please input device name here!' }]}
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
                { rules: [{ required: true, message: 'Please input service interval!' }]}
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
                {rules: [{ required: true, message: 'Please input device name here!' }]}
              ]"
            />
          </a-form-item>
          <!--    -->

          <!-- Descrition -->
          <a-form-item
          label="Description"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }">
            <a-textarea
              :rows="2"
              v-decorator="[
                'description'
              ]"/>
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
              :formatter="value => `${value || 200}°C`"
              :parser="value => value.replace('°C', '')"
              v-decorator="[
                'maxTemperature',
                { rules: [{ required: true, message: 'Please input service interval!' }]}
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
              :formatter="value => `${value || 20}°C`"
              :parser="value => value.replace('°C', '')"
              v-decorator="[
                'minTemperature',
                { rules: [{ required: true, message: 'Please input service interval!' }]}
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
                { rules: [{ required: true, message: 'Please input last service date!' }]}
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
              :formatter="value => `${value || 15}min`"
              :parser="value => value.replace('min', '')"
              :initialValue="15"
              v-decorator="[
                'maxTimeExcess',
                { rules: [{ required: true, message: 'Please input notify before service time!' }]}
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
    };
  },
  computed: {
    getModalStatus() {
      return this.modalVisible;
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleOkModal() {
      this.$emit('handleOkModal');
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
</style>
