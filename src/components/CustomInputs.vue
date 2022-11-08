<script>
export default {
  methods: {
    submitCustomInputs(inputs) {
      this.$router.push({ name: 'Play', state: { inputs } });
    },
  },
}
</script>

<template>
  <FormKit
    type="form"
    id="custom-inputs"
    submit-label="Submit"
    @submit="submitCustomInputs"
    #default="{ value }"
  >
    <div id="message-section">
      <FormKit
        type="textarea"
        name="message"
        label="Secret Messsage"
        rows="10"
        placeholder="Hello world!"
        validation="required"
        validation-visibility="submit"
        :validation-messages="{
          required: 'Please enter a message!',
        }"
      />
      <!-- TODO: add generate random message button -->
    </div>
    <div id="operations-section">
      <p>Select at least one operation:</p>
      <!-- TODO: ensure that at least one is checked -->
      <div id="operation-checkboxes">
        <FormKit
          type="checkbox"
          :value="false"
          name="use_add"
          label="Addition"
        />
        <div class="upper-bound" v-if="value.use_add">
          <FormKit
            :value="50"
            type="range"
            name="add_upper"
            :label="`Upper bound: ${value.add_upper}`"
            :min="value.message ? Math.ceil(Math.sqrt(value.message.length)) : 1"
            max="100"
          />
        </div>
        <FormKit
          type="checkbox"
          :value="false"
          name="use_mult"
          label="Multiplication"
        />
        <div class="upper-bound" v-if="value.use_mult">
          <FormKit
            :value="50"
            type="range"
            name="mult_upper"
            :label="`Upper bound: ${value.mult_upper}`"
            :min="value.message ? Math.ceil(Math.sqrt(value.message.length)) : 1"
            max="100"
            :sections-schema="{
              prefix: 1,
            }"
          />
        </div>
        
      </div>
    </div>
    <!-- <pre wrap>{{ value }}</pre> -->
  </FormKit>
</template>

<style scoped>
#message-section {
  margin-bottom: 20px;
}

#operations-section {
  margin-bottom: 30px;
}

#operations-section > p {
  margin-bottom: 10px;
}
</style>