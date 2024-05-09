<template>
  <div>
    <v-app>
      <v-container>
        <v-row v-for="(item, index) of list" :key="index">
          <v-col cols="12">
            <!-- <v-sheet> One of three columns </v-sheet> -->
            {{ item.id }}
          </v-col>
          <v-col cols="12" sm="4">
            {{ item.title }}
          </v-col>
        </v-row>
        <v-btn outlined depressed rounded @click="save()">저장</v-btn>
        <v-btn outlined depressed rounded @click="close()">닫기</v-btn>
        <v-table density="compact">
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
        </v-table>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import test from '@/api/test';

export default {
  data() {
    return {
      selectedItem: '',
      radioValue: '',
      items: ['California', 'Colorado', 'Florida'],
      list: [],
    };
  },
  created() {
    test
      .getArticle(1)
      .then(response => console.log('getAritcle', response))
      .catch(error => console.log(error));

    test
      .getArticles(0)
      .then(response => {
        console.log('getAritcles', response);
        this.list = response.data;
        console.log(this.list);
      })
      .catch(error => console.log(error));

    test
      .postArticle('id', 'title', 'body')
      .then(response => console.log('postArticle', response))
      .catch(error => console.log(error));
  },
};
</script>

<style></style>
