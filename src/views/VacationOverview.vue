<template><div></div></template>

<script>
export default {
  data() {
    return {
      vacations: [
        {
          id: "1",
          name: "Südafrika",
          fromDate: "05.02.2020",
          toDate: "08.02.2020",
          pictureURL:
            "https://images.unsplash.com/photo-1582129631380-fba8edcb5da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        },
        { id: "2", name: "test2" },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#vacationList {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  .v-card {
    margin: 1em;
  }
}
</style>
