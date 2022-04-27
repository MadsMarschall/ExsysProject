<template>
  <b-modal id="my-modal" modal-title="Change report" size="lg">
    <template #modal-title>Customize</template>
    <b-tabs content-class="mt-3">
      <b-tab title="Settings"><p>I'm the first tab</p></b-tab>
      <b-tab title="Tags" active
        ><label for="tags-separators"
          >Enter tags separated by space, comma or semicolon</label
        >
        <b-form-tags
          input-id="tags-separators"
          v-model="value"
          separator=" ,;"
          placeholder="Enter new tags separated by space, comma or semicolon"
          no-add-on-enter
        ></b-form-tags>
        <p class="mt-2">Value: {{ value }}</p></b-tab
      >
      <b-tab title="Thumbnail"><p>I'm the second tab</p></b-tab>
      <b-tab title="Owner"><p>I'm the second tab</p></b-tab>
      <b-tab title="File"><p>I'm the second tab</p></b-tab>
      <b-tab title="Refresh"><p>I'm the second tab</p></b-tab>
    </b-tabs>
  </b-modal>
</template>

<script lang="ts">
export default {
  name: "SettingsDialog",
  data: () => {
    return {
      value: null,
    };
  },
};
</script>
