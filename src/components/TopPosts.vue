<template>Top Posts: {{ count }}</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['count']),
  mounted() {
    this.increment();
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};
</script>
