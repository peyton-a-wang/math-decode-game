<script>
export default {
  props: {
    mappings: Object,
  }
}
</script>

<template>
  <table border="2">
    <thead>
      <tr>
        <th v-for="char in Object.keys(mappings)">
          {{ char }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="val in Object.values(mappings)">
          {{ val }}
        </td>
      </tr>
    </tbody>
  </table>
</template>