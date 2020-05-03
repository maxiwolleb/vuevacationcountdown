<template>
  <div>
    <h1>Vacation Overview</h1>
    <div id="vacationList" v-for="vacation in vacations" :key="vacation.id">
      <router-link
        class="link"
        :to="{ name: 'VacationShow', params: { id: vacation.id } }"
      >
        Vacation {{ vacation.id }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vacations: [
        { id: "1", name: "test" },
        { id: "2", name: "test2" }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#vacationList {
  .link {
    color: #008000;
  }
}
</style>
