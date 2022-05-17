<template>
  <b-modal
    id="my-modal"
    modal-title="Change report"
    size="lg"
    @ok="addNewTags(DataProductSelected.id, tags)"
  >
    <template #modal-title>Customize</template>
    <b-tabs content-class="mt-3">
      <b-tab title="Settings"><p>I'm the first tab</p></b-tab>
      <b-tab title="Tags" active
        ><label for="tags-separators"
          >Enter tags separated by space, comma or semicolon</label
        >
        <b-form-tags
          input-id="tags-separators"
          v-model="tags"
          separator=" ,;"
          placeholder="Enter new tags separated by space, comma or semicolon"
          no-add-on-enter
        ></b-form-tags>
      </b-tab>
      <b-tab title="Thumbnail"><p>I'm the second tab</p></b-tab>
      <b-tab title="Owner"><p>I'm the second tab</p></b-tab>
      <b-tab title="File"><p>I'm the second tab</p></b-tab>
      <b-tab title="Refresh"><p>I'm the second tab</p></b-tab>
    </b-tabs>
  </b-modal>
</template>

<script lang="ts">
import { IReport } from "@/interfaces";
import Vue, { PropType } from "vue";
import { api } from "@/API";

export default Vue.extend({
  props: {
    DataProductSelected: {
      type: Object as PropType<IReport>,
      required: true,
    },
  },
  name: "SettingsDialog",
  data: () => {
    let dp = new Array<IReport>();
    let tags: string[] | undefined;
    return {
      dp,
      tags,
    };
  },
  mounted: function () {
    this.tags = this.DataProductSelected.tags;
  },
  methods: {
    addNewTags: (id: number, tags: string[]) => {
      api.addTagsToDataProduct(id, tags);
    },
  },
});
</script>
