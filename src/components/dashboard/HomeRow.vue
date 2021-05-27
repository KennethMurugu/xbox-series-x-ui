<template>
  <div class="home-row">
    <div class="main-row">
      <div class="square-tile main-tile" tabindex="3"></div>
      <div class="tiles-list">
        <div class="square-tile" tabindex="4"></div>
        <div class="square-tile" tabindex="5"></div>
        <div class="square-tile" tabindex="6"></div>
        <div class="square-tile" tabindex="7"></div>
        <div class="square-tile" tabindex="8"></div>
        <div class="square-tile" tabindex="9"></div>
      </div>
    </div>

    <div class="secondary-row">
      <div class="rectangle-tile main-tile" tabindex="11"></div>
      <div class="tiles-list">
        <div class="rectangle-tile" tabindex="12"></div>
        <div class="rectangle-tile" tabindex="13"></div>
        <div class="rectangle-tile" tabindex="14"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class HomeRow extends Vue {
  // @Prop(String) readonly prop1!:String
}
</script>

<style lang="scss" scoped>
$square-tile-width: 130px;
$square-main-tile-width: $square-tile-width * 2.105;

$rectangle-tile-width: $square-tile-width * 2;
$rectangle-tile-height: $rectangle-tile-width * 0.5;
$rectangle-main-tile-width: $square-main-tile-width;
$rectangle-main-tile-height: $rectangle-tile-height;

.main-row {
  display: grid;
  grid-template-columns: $square-main-tile-width auto;
  column-gap: 3rem;
  align-items: flex-end;
  margin-bottom: 3rem;
  .tiles-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, $square-tile-width);
    gap: 0.75rem;
    align-items: flex-start;
    justify-content: space-between;
  }
}

.square-tile {
  width: $square-tile-width;
  height: $square-tile-width;
  background-color: maroon;
  border: 1px solid green;
  border-radius: 3px;

  &.main-tile {
    width: $square-main-tile-width;
    height: $square-main-tile-width;
  }
}

.secondary-row {
  display: grid;
  grid-template-columns: $rectangle-main-tile-width auto;
  column-gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3rem;
  .tiles-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, $rectangle-tile-width);
    gap: 2rem;
    align-items: flex-start;
    // justify-content: space-between;
  }
}
.rectangle-tile {
  width: $rectangle-tile-width;
  height: $rectangle-tile-height;
  background-color: purple;
  border: 1px solid green;
  border-radius: 3px;

  &.main-tile {
    width: $rectangle-main-tile-width;
    height: $rectangle-main-tile-height;
  }
}
</style>