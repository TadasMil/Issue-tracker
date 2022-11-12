<script setup lang="ts" name="HomeDashboard">
import HomeDashboardWidget from './HomeDashboardWidget.vue'

const widgets = [
  {
    title: 'Open Issues',
    value: 123,
    color: 'info',
  },
  {
    title: 'Completed Issues',
    value: 123,
    color: 'success',
  },
  {
    title: 'Trashed Issues',
    value: 123,
    color: 'danger',
  },
]
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
