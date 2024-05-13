<template>
  <div>
    <v-app>
      <v-container>
        <v-btn outlined depressed rounded @click="save()">저장</v-btn>
        <v-btn outlined depressed rounded @click="close()">닫기</v-btn>
        <v-table>
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
            <!-- <v-radio-group v-model="radioValue">
              <v-radio label="무료" value="n"></v-radio>
              <v-radio label="유료" value="y"></v-radio>
            </v-radio-group> -->
            <td>
              <v-text-field outlined solo flat hide-details>{{}}</v-text-field>
            </td>
          </tr>
        </v-table>

        <v-text-field v-model="search" single-line></v-text-field>
        <v-data-table
          :items-per-page="10"
          :search="search"
          :items="list"
          :item-key="index"
          :headers="headers"
          @click:row="item => goDetail(item.id)"
        >
          <template v-slot:no-data>
            <v-alert :value="true" color="error" icon="warning">
              Sorry, nothing to display here
            </v-alert>
          </template>

          <template v-slot:detail-page>
            <Page-Detail></Page-Detail>
          </template>
        </v-data-table>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import PageDetail from './PageDetail.vue';
import test from '@/api/test';

export default {
  components: {
    PageDetail,
  },
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
        // { text: 'body', value: 'body' },
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

    // test
    //   .getEmoji('emoji')
    //   .then(response => console.log('getEmoji', response.data))
    //   .catch(error => console.log(error));
  },
  methods: {
    goDetail(id) {
      this.$router.push(`/page1/${id}`);
    },
  },
};
</script>

<style></style>
