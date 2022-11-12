<script setup lang="ts" name="OpenIssuesIndex">
import BasePage from '@/components/BasePage.vue'
import CreateIssue from '@/components/CreateIssue.vue'
</script>

<template>
  <BasePage title="Open Issues">
    <b-container fluid class="m-0 p-0">
      <b-row>
        <b-col cols="8">
          <div>hello</div>
        </b-col>
        <b-col cols="4">
          <CreateIssue />
        </b-col>
      </b-row>
    </b-container>
  </BasePage>
</template>
