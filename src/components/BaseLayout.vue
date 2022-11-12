<script lang="ts" setup name="BaseLayout">
import BaseSidebar from '@/components/BaseSidebar.vue'
</script>

<template>
  <b-container fluid>
    <b-row>
      <b-col class="col-sm-auto p-0">
        <BaseSidebar />
      </b-col>

      <b-col class="col-sm p-3 min-vh-100">
        <slot />
      </b-col>
    </b-row>
  </b-container>
</template>
