/* eslint no-use-before-define: 0 */ // --> OFF

<template>
  <div class="reportSearch">
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
        <b-navbar-nav class="position-absolute w-100">
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
          <SearchResultModal
            :data-products="dataProductSearch"
            :is-searching="isSearching"
          />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid>
      <b-row class="pt-5">
        <b-col
          v-for="rep in dataProducts"
          lg="2"
          md="4"
          sm="12"
          v-bind:key="rep.id"
        >
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            img-height="180"
            tag="article"
            class="mb-2"
            :title="rep.name"
          >
            <template #header>
              <b-col>
                <b-icon
                  icon="gear"
                  style="right: 0px; position: absolute; top: -8px"
                  v-b-modal.my-modal
                ></b-icon>
              </b-col>
            </template>

            <b-card-text></b-card-text>

            <b-button v-b-modal.my-modal>Add search tag</b-button>
          </b-card>
        </b-col>
      </b-row>
      <SettingsDialog />
    </b-container>
  </div>
</template>

<script lang="ts">
import SettingsDialog from "@/components/SettingsDialog.vue";
import { api } from "@/API";
import { IReport } from "@/interfaces";
import Vue from "vue";
import SearchResultModal from "@/components/SearchResultModal.vue";

interface IData {
  dataProducts: IReport[];
}

export default Vue.extend({
  components: { SearchResultModal, SettingsDialog },
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
  },
});
</script>
