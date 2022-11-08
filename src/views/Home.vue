<script setup>
  import MappingTable from '@/components/MappingTable.vue'
  import CharBoxes from '@/components/CharBoxes.vue'
  const charAnsExampleMappings = { '!': 10, H: 3, I: 6, };
  const charExpExampleMappings = { H: "3 x 1", I: "2 + 4", '!': "5 + 5", };
  const exampleMessage = "hi!";
</script>

<template>
  <h1>Home</h1>
  <h2>How To Play</h2>
  <ol>
    <li class="play-step">
      <h3>Observe the key.</h3>
      <div class="mapping-table-section">
        <MappingTable :mappings="charAnsExampleMappings" />
      </div>
      <p>This table columns can be interpreted as follows:</p>
      <ul>
        <li>! is associated with 10</li>
        <li>H is associated with 3</li>
        <li>I is associated with 6</li>
      </ul>
    </li>
    <li class="play-step">
      <h3>Use the key to fill in the boxes.</h3>
      <div class="char-boxes-section">
        <CharBoxes 
          :mappings="charExpExampleMappings" 
          :message="exampleMessage" />
      </div>
      <p>The answer can be solved as follows:</p>
      <ul>
        <li>3 x 1 = 3, which maps to H, so the 1st box is H</li>
        <li>2 + 4 = 6, which maps to I, so the 2nd box is I</li>
        <li>5 + 5 = 10, which maps to !, so the 3rd box is !</li>
      </ul>
    </li>
    <li class="play-step">
      <h3>Enter the answer and hit Submit.</h3>
      <p>If your answer was correct, you will see a message indicating your
        success! Otherwise, use the hints to obtain the right answer. Try 
        entering "hi!" and hitting Submit above!</p>
    </li>
  </ol>
  <h2>Ready to Play?</h2>
  <h3>Click <router-link to="/play">here</router-link> if you're ready to start 
    playing, or <router-link to="/customize">here</router-link> if you want to 
    customize the game inputs!</h3>
</template>

<style scoped>
h1 {
  margin-bottom: 10px;
}

li.play-step {
  margin-top: 15px;
  margin-bottom: 30px;
}

li.play-step::marker {
  font-size: 17.55px
}
.mapping-table-section {
  margin-top: 10px;
}

.char-boxes-section {
  margin-top: 10px;
}
</style>