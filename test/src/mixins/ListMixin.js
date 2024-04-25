import bus from '../utils/bus.js'

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  mounted() {
    bus.$emit('end:spinner');
  },
    
  // // ---> route/index.js 로 이동
  // created() {
  //   bus.$emit('start:spinner');
  //   // #1
  //   this.$store.dispatch('FETCH_LIST', this.$route.name)
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
}