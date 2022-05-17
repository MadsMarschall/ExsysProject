<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-navbar-nav style="z-index: 10">
          <b-nav-item href="#">
            <b-icon icon="bar-chart-fill"></b-icon>
            Reports
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon icon="folder"></b-icon>
            Reports
          </b-nav-item>
          <b-nav-item href="#">
            <b-icon icon="layers-fill"></b-icon>
            Apps
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="centered-axis-x">
        <b-nav-form class="ml-auto mr-auto">
          <b-input-group>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="searchTerm"
            ></b-form-input>
          </b-input-group>
        </b-nav-form>
        <div class="fixed-top" style="top: 3em; left: 0">
          <SearchResultModal
            :data-products="dataProductSearch"
            :is-searching="isSearching"
            v-show="isSearching"
            class="centered-axis-x"
            style="width: 80vw; z-index: 200"
          />
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang="ts">
import SearchResultModal from "@/components/SearchResultModal.vue";
import { IReport } from "@/interfaces";
import { api } from "@/API";
import Vue from "vue";

export default Vue.extend({
  name: "BIGNavBar",
  components: { SearchResultModal },
  data: () => {
    let dataProducts = new Array<IReport>();
    let searchTerm = "";
    let dataProductSearch = new Array<IReport>();
    let isSearching = false;
    return { dataProducts, searchTerm, dataProductSearch, isSearching };
  },
  watch: {
    searchTerm: {
      handler: async function (newVal, oldVal) {
        if (newVal.length < 1) {
          this.isSearching = false;
          return;
        }
        this.isSearching = true;
        this.dataProductSearch = await api.getDataProductByTagSearch(newVal);
      },
    },
  },
  async mounted(): Promise<void> {
    this.dataProducts = await api.getAllDataProducts();
  },
  methods: {
    searchDataProduct: api.getDataProductByTagSearch,
    setSearchingStatus: function (isSearching: boolean) {
      console.log("test");
      this.isSearching = isSearching;
    },
  },
});
</script>

<style lang="scss">
.centered-axis-x {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
}
</style>
