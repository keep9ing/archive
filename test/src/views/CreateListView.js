import ListView from './ListView.vue';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스컴포넌트 옵션 과 로직
    name,
    render(createElement) {
      return createElement(ListView);
    }
  }
}