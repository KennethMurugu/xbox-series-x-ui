<template>
  <div class="dashboard">
    <div class="nav">
      <div class="user-profile-info" tabindex="1">
        <img src="@/assets/img/user-avatar.png" alt="" class="user-avatar" />
        <div class="profile-details">
          <p class="name">KenDotKim</p>
          <p class="email extra-details">kennethmurugu@gmail.com</p>
        </div>
      </div>

      <div class="system-info" tabindex="2">
        <fa-icon icon="microphone" class="fa-lg"></fa-icon>
        <fa-icon icon="battery-full" class="fa-lg"></fa-icon>
        <p class="time">{{ timeNow }}</p>
      </div>
    </div>

    <HomeRow />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import dayjs from "dayjs";
import HomeRow from "@/components/dashboard/HomeRow.vue";

@Component({
  components: { HomeRow },
})
export default class Dashboard extends Vue {
  // @Prop(String) readonly prop1!:String
  timeNow = dayjs().format("HH:MM A");
  mounted() {
    setInterval(() => {
      this.timeNow = dayjs().format("HH:MM A");
    }, 1000 * 30);
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  min-height: 100vh;

  color: #fff;
  padding: 3.5rem 5rem;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;
}
.user-profile-info {
  display: grid;
  grid-template-columns: 45px auto;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0.1rem;
  border-radius: 3px;

  .user-avatar {
    width: 100%;
  }
  .profile-details {
    font-size: 1rem;
    .extra-details {
      font-size: 0.9em;
    }
  }
}

.system-info {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.1rem;
  border-radius: 3px;

  .time {
    font-weight: bold;
  }
}
</style>