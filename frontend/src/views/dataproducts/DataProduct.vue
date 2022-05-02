<template>
  <div v-if="dp" class="h-100">
    <h1>{{ dp.name }}</h1>
    <iframe
      src="https://app.powerbi.com/view?r=eyJrIjoiYzlkNGM5MzAtYzI1Zi00NWEzLThlNzYtM2YxNWZiYThiMjhkIiwidCI6ImYxMzU0ZTYyLTczNDItNGNmYS04OGNlLWFiZjc2ODU0MjJkYSIsImMiOjh9&pageName=ReportSection"
      frameborder="0"
      allowFullScreen="true"
      class="vh-100 vw-100"
    ></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "@/API";
import { IReport } from "@/interfaces";

export default Vue.extend({
  name: "DataProduct",
  data: function () {
    let id = parseInt(this.$route.params.id);
    let dp: IReport | null = null;
    return { id, dp };
  },
  created() {
    (async () => {
      this.dp = await api.getDataProductById(this.id);
    })();
  },
});
</script>

<style scoped lang="scss">
body {
  min-height: 100vh;
}
</style>
