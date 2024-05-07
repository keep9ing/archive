<template>
  <div>
    <v-app>
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" sm="4">
            <v-sheet> One of three columns </v-sheet>
          </v-col>
        </v-row>
        <v-btn outlined depressed rounded @click="save()">저장</v-btn>
        <v-btn outlined depressed rounded @click="close()">닫기</v-btn>
        <v-simple-table>
          <tbody>
            <tr>
              1
              <td>
                <v-select
                  :items="items"
                  density="comfortable"
                  label="지역"
                ></v-select>
              </td>
            </tr>

            <tr>
              <v-radio-group v-model="radioValue">
                <v-radio label="무료" value="n"></v-radio>
                <v-radio label="유료" value="y"></v-radio>
              </v-radio-group>
              <td>
                <v-text-field outlined solo flat hide-details></v-text-field>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: '',
      radioValue: '',
      items: ['California', 'Colorado', 'Florida'],
    };
  },
};
</script>

<style></style>
