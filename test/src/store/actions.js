import { 
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
 } from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
    return fetchNewsList()
      .then(response => {
        console.log(response.data);
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_JOBS(context) {
    return fetchJobsList()
    return fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data)
      })
      .catch(error => console.log(error))
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
    return fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => console.log(error))
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error => console.log(error));
  },
  // #2 실행
  FETCH_LIST({ commit }, pageName) {
    // # 호출
    return fetchList(pageName)
      .then(({ data }) => {
        // #4
        console.log(4);
        commit('SET_LIST', data)
      })
      .catch(error => console.log(error));
  },
}