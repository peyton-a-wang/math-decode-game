<script>
export default {
  methods: {
    async submit(data) {
      try {
        await apiCall(data)
      } catch (inputErrors) {
        this.$formkit.setErrors(
          'custom-inputs', 
          ['There was an error'], 
          inputErrors
        )
      }
    },
  },
}

function apiCall(data) {
  return new Promise((_, reject) => {
    setTimeout(
      () =>
        reject({
          message: 'Sorry!',
        }),
      1000
    )
  })
}
</script>

<template>
  <FormKit
    type="form"
    id="custom-inputs"
    submit-label="Submit"
    @submit="submit"
    :actions="false"
    #default="{ value }"
  >
    <FormKit
      type="textarea"
      name="message"
      label="Secret Messsage"
      rows="10"
      placeholder="Enter a custom message or generate one below."
      validation="required"
    />
    
    <FormKit
      type="checkbox"
      :value="false"
      name="use_add"
      label="Use Addition?"
    />
    <div class="double" v-if="value.use_add">
      <FormKit
        preserve
        type="number"
        name="add_lower"
        label="Lower Range"
      />
      <FormKit
        preserve
        type="number"
        name="add_upper"
        label="Upper Range"
      />
    </div>

    <FormKit
      type="checkbox"
      :value="false"
      name="use_mult"
      label="Use Multiplication?"
    />
    <div class="double" v-if="value.use_mult">
      <FormKit
        preserve
        type="number"
        name="mult_lower"
        label="Lower Range"
      />
      <FormKit
        preserve
        type="number"
        name="mult_upper"
        label="Upper Range"
      />
    </div>

    <button @click.stop.prevent="submit()">Button</button>
    <FormKit
      type="submit"
      label="Submit"
    />
    
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>
.double {
  display: flex;
}
.double > .formkit-outer {
  width: 70px;
  margin-right: 20px
}
</style>