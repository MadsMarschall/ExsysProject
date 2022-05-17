<template>
  <b-container v-if="dp" class="h-100 m-0 p-0" fluid>
    <BIGNavBar style="z-index: 100" />
    <div>
      <h2>{{ dp.name }}</h2>
      <iframe
        :src="dp.url"
        frameborder="0"
        allowFullScreen="true"
        class="centered-axis-x"
        style="width: 100%; height: 90vh; bottom: 0; z-index: 10"
      ></iframe>
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "@/API";
import { IReport } from "@/interfaces";
import BIGNavBar from "@/components/BIGNavBar.vue";

export default Vue.extend({
  name: "DataProduct",
  components: { BIGNavBar },
  data: function () {
    let id = parseInt(this.$route.params.id);
    let dp: IReport | null = null as unknown as IReport;
    return { id, dp };
  },
  watch: {
    "$route.params.id": {
      handler: function (newVal, oldVal) {
        this.getData(newVal);
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.getData(this.id);
  },
  methods: {
    getData: async function (id: number) {
      this.dp = (await api.getDataProductById(id)) as unknown as IReport;
      console.log(this.dp);
    },
  },
});
</script>

<style scoped lang="scss">
body {
  min-height: 100vh;
}
.centered-axis-x {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
