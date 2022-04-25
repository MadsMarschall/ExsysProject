/* eslint no-use-before-define: 0 */ // --> OFF

<template>
  <div class="reportSearch">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
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
    </b-navbar>
    <b-container fluid>
      <b-row class="pt-5">
        <b-col v-for="rep in reports" v-bind:key="rep.id" lg="2" md="4" sm="12">
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
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

            <b-card-text> </b-card-text>

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

export default {
  components: { SettingsDialog },
  data() {
    return {
      reports: [
        { name: "test", id: 1 },
        { name: "test", id: 2 },
        { name: "test", id: 3 },
        { name: "test", id: 4 },
      ],
    };
  },
};
</script>
