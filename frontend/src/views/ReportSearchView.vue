/* eslint no-use-before-define: 0 */ // --> OFF

<template>
  <div class="reportSearch">
    <BIGNavBar />
    <b-container fluid style="max-width: 100vw">
      <b-row class="pt-5">
        <b-col
          v-for="rep in dataProducts"
          lg="3"
          md="6"
          sm="12"
          v-bind:key="rep.id"
        >
          <router-link
            :to="'/dataproducts/' + rep.id"
            class="text-decoration-none"
          >
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
                  <b-link>
                    <b-icon
                      icon="people"
                      style="
                        right: 0px;
                        position: absolute;
                        top: -8px;
                        margin-right: 20px;
                      "
                      v-b-modal.my-modal
                    ></b-icon>
                  </b-link>
                  <b-link @click="settingsClicked(rep.id)">
                    <b-icon
                      icon="gear"
                      style="right: 0px; position: absolute; top: -8px"
                      v-b-modal.my-modal
                    ></b-icon>
                  </b-link>
                </b-col>
              </template>

              <b-card-text></b-card-text>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
      <SettingsDialog
        v-if="currentSettings"
        :data-product-selected="currentSettings"
      />
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
    let currentSettings: IReport | undefined;
    return { dataProducts, currentSettings };
  },
  async mounted(): Promise<void> {
    this.dataProducts = await api.getAllDataProducts();
  },
  methods: {
    searchDataProduct: api.getDataProductByTagSearch,
    setSettingsDialogData: function (id: number) {
      this.currentSettings = this.dataProducts.find((e) => id == e.id);
    },
    settingsClicked: function (id: number) {
      this.setSettingsDialogData(id);
      this.$bvModal.show("my-modal");
    },
  },
});
</script>
