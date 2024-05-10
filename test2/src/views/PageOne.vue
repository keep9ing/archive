<template>
  <div>
    <v-app>
      <v-container>
        <v-btn outlined depressed rounded @click="save()">저장</v-btn>
        <v-btn outlined depressed rounded @click="close()">닫기</v-btn>
        <v-text-field v-model="search" single-line></v-text-field>
        <v-data-table
          :items-per-page="5"
          :search="search"
          :items="list"
          :headers="headers"
        >
          <tbody>
            <tr>
              <td v-for="(item, index) of list" :key="index">
                {{ item.id }} , {{ item.title }}
              </td>
            </tr>
            <tr>
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
        </v-data-table>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import test from '@/api/test';

export default {
  data() {
    return {
      search: '',
      selectedItem: '',
      radioValue: '',
      items: ['California', 'Colorado', 'Florida'],
      list: [],
      headers: [
        { text: 'id', value: 'id' },
        { text: 'title', value: 'title' },
        { text: 'body', value: 'body' },
      ],
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
        console.log('getAritcles...', response);
        this.list = response.data;
        console.log(this.list);
      })
      .catch(error => console.log(error));

    test
      .postArticle('id', 'title', 'body')
      .then(response => console.log('postArticle', response))
      .catch(error => console.log(error));

    test
      .getEmoji('emoji')
      .then(response => console.log('getEmoji', response))
      .catch(error => console.log(error));
  },
};
</script>

<style></style>
