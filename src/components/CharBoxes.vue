<script>
export default {
  props: {
    mappings: Object,
    message: String,
  },
  methods: {
    checkAnswers(inputs) {
      console.log(inputs);
      alert("Congrats, you got the right answer!");
    },
  },
}
</script>

<template> 
  <FormKit
    type="form"
    id="custom-inputs"
    submit-label="Submit"
    @submit="checkAnswers"
    #default="{ value }"
    incomplete-message="That's not quite correct, try again!"
  > 
    <!-- TODO: option to toggle on/off hints -->
    <div class="ans-boxes">
      <div class="ans-box" v-for="(char, i) in message">
        <FormKit v-if="char != ' '"
          type="text"
          :name="`${char.toUpperCase()}-${i}`"
          :label="mappings[char.toUpperCase()]"
          :validation="[['required'], ['is', char, char.toUpperCase()]]"
          validation-visibility="submit"
          :validation-messages="{
            required: 'Fill out!',
            is: `Hint: ${char.toUpperCase()}`,
          }"
        />
      </div>
    </div>
    <!-- <pre wrap>{{ value }}</pre> -->
  </FormKit>
</template>

<style scoped>
/* TODO: figure out spacing for longer phrases */
.ans-boxes {
  display: flex;
  margin-bottom: 10px;
}

.ans-boxes .ans-box {
  width: 70px;
}
</style>