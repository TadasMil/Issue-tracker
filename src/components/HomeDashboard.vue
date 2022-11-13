<script setup lang="ts" name="HomeDashboard">
import HomeDashboardWidget from './HomeDashboardWidget.vue'

import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const widgets = computed(() => [
  {
    title: 'Open Issues',
    value: store.getters['issues/openIssues'].length || 0,
    color: 'info',
  },
  {
    title: 'Completed Issues',
    value: store.getters['issues/completedIssues'].length || 0,
    color: 'success',
  },
  {
    title: 'Trashed Issues',
    value: store.getters['issues/trashedIssues'].length || 0,
    color: 'danger',
  },
])
</script>

<template>
  <b-card
    title="Dashboard"
    text-variant="muted"
    title-tag="h2"
    class="shadow-sm border-0"
  >
    <b-card-body class="px-0">
      <b-container fluid>
        <b-row>
          <b-col
            v-for="widget in widgets"
            :key="widget.title"
            class="col-12 col-md-4 mb-3"
          >
            <HomeDashboardWidget v-bind="widget" class="h-100" />
          </b-col>
        </b-row>
      </b-container>
    </b-card-body>
  </b-card>
</template>
