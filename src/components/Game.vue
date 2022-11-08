<script setup>
import MappingTable from '@/components/MappingTable.vue'
import CharBoxes from '@/components/CharBoxes.vue'

import { createMappingsData } from '@/lib/mappings.js'
import { generateRandomData } from '@/lib/randomData.js'

let inputsData = history.state.inputs ? history.state.inputs : generateRandomData();

// console.log(inputsData);
var charMappings = createMappingsData(inputsData);
var message = inputsData.message;
console.log(charMappings);

</script>

<template>
  <div id="game">
    <h1>Crack the Code!</h1>
    <p>Fill out the boxes and use the key to help you crack the code. If you 
      think you have the right answer, click Submit!</p>
    <div class="mapping-table-section">
      <MappingTable :mappings="charMappings.char_ans_mappings" />
    </div>
    <div class="char-boxes-section">
      <CharBoxes 
        :mappings="charMappings.char_exp_mappings" 
        :message="message" />
    </div>
  </div>
</template>

<style>
.mapping-table-section {
  margin-top: 20px;
  margin-bottom: 20px;
}

.char-boxes-sectionn {
  margin-bottom: 30px;
}
</style>