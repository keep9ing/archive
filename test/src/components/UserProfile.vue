<template>
  <div>
    <div class="user-container">
      <div>User
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <slot name="username">
          <!-- 상위컴포넌트에서 정의할 영역 -->
        </slot>
   
        <div class="time">
          <!-- time: {{ info.created }} -->
          <slot name="time">
            <!-- 상위컴포넌트에서 정의할 영역 -->
          </slot>
          <slot name="karma">
            <!-- 상위컴포넌트에서 정의할 영역 -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>