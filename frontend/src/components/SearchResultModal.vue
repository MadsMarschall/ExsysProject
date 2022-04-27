<template>
  <b-container
    fluid
    v-show="isSearching"
    class="position-absolute pt-0 mt-5"
    style="z-index: 20"
    ref="searchResultContainer"
  >
    <b-row align-h="center" class="w-100">
      <b-col lg="4" md="6" cols="12">
        <b-list-group>
          <b-list-group-item
            v-for="dp in dataProducts"
            v-bind:key="dp.id"
            href="#"
            class="flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="pt-2 pb-2">{{ dp.name }}</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <b-row class="w-100">
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
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IReport } from "@/interfaces";

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
