/* eslint no-use-before-define: 0 */ // --> OFF

<template>
  <div class="reportSearch">
    <BIGNavBar />
    <b-container fluid>
      <b-row class="pt-5">
        <b-col
          v-for="rep in dataProducts"
          lg="3"
          md="6"
          sm="12"
          v-bind:key="rep.id"
        >
          <router-link :to="'/dataproducts/' + rep.id">
            <b-card
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              img-height="180"
              tag="article"
              class="mb-4"
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
            </b-card>
          </router-link>
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
import BIGNavBar from "@/components/BIGNavBar.vue";

interface IData {
  dataProducts: IReport[];
}

export default Vue.extend({
  components: { BIGNavBar, SettingsDialog },
  data: () => {
    let dataProducts = new Array<IReport>();
    return { dataProducts };
  },
  async mounted(): Promise<void> {
    this.dataProducts = await api.getAllDataProducts();
  },
  methods: {
    searchDataProduct: api.getDataProductByTagSearch,
  },
});
</script>
