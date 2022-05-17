<template>
  <b-list-group>
    <b-list-group-item
      v-for="dp in dataProducts"
      v-bind:key="dp.id"
      href="#"
      :to="'/dataproducts/' + dp.id"
    >
      <div class="d-flex justify-content-between">
        <h5 class="pt-2 pb-2">{{ dp.name }}</h5>
        <small class="text-muted">Owner: Donald A. Schön</small>
      </div>
      <b-row>
        <b-col align="left">
          <p class="font-italic float-left">Tags:</p>
          <b-button
            v-for="(tag, index) in dp.tags"
            v-bind:key="index"
            size="sm"
            href="#"
            class="m-1 float-left"
            style="max-height: 30px"
            ><p class="text-light font-italic">{{ tag }}</p>
          </b-button>
        </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IReport } from "@/interfaces";
import { mixin as clickaway } from "vue-clickaway";

export default Vue.extend({
  props: {
    dataProducts: {
      type: Array as PropType<IReport[]>,
      required: true,
    },
    isSearching: {
      type: Boolean,
      required: true,
    },
  },
  data: function () {
    return {};
  },
  mixins: [clickaway],
  watch: {
    dataProducts: {
      handler: function (newVal: IReport[]) {
        console.log("hello", newVal);
      },
      deep: true,
    },
    isSearching: {
      handler: function (newVal: IReport[]) {
        console.log("hello", newVal);
      },
      deep: true,
    },
  },
});
</script>
