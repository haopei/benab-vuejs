<template lang="html">
  <div class="volunteers-list">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-xs-6 col-md-3 col-lg-2" v-for="vol in volunteers">
          <volunteer
            :name="vol.name"
            :image="vol.image"
            :role="vol.role"
            :key="vol.name"
            class="volunteer-item"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Volunteer from './VolunteerItem.vue';
export default {
  props: {
    volunteers: {
      type: Array,
      required: true
    }
  },
  components: {
    Volunteer
  }
}
</script>

<style lang="scss">

.volunteer-item {
  margin-bottom: 14px
}

</style>
