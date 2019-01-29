<template>
  <div class="history">
    <h3 class="history__title">{{title}}</h3>
    <div class="history__content">
      <div v-for="historyRowUnitCountEle in historyRowUnitCount"
           class="history__content__row">
        <div class="history__content__row__ele">
          <h4>{{historyData[historyRowUnitCountEle].date}}</h4>
          <p v-html="historyData[historyRowUnitCountEle].content"></p>
        </div>
        <div v-if="historyRowUnitCountEle+1<historyData.length"
             class="history__content__row__ele">
          <h4>{{historyData[historyRowUnitCountEle+1].date}}</h4>
          <p v-html="historyData[historyRowUnitCountEle+1].content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['historyData', 'title'],
  computed: {
    historyRowUnitCount: function () {
      let historyRowUnitCount = [];
      for (let i = 0; i < this.historyData.length; i++) {
        if ((i % 2) === 0) {
          historyRowUnitCount.push(i);
        }
      }
      return historyRowUnitCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.history {
  margin-top: 30px;
  &__title {
    border-bottom: thin solid;
    font-size: 1.7rem;
    line-height: 1.1;
  }
  &__content {
    margin-top: 15px;
    &__row {
      @media (min-width: 768px) {
        background-image: url("../assets/listBackgroundImage.jpg");
        background-size: cover;
        border-left: thin solid #666666;
        display: flex;
        margin-top: 7px;
        padding: 15px 0;
      }
      &__ele {
        background-image: url("../assets/listBackgroundImage.jpg");
        background-size: cover;
        border-left: thin solid #666666;
        margin-top: 7px;
        padding: 15px 0 15px 1.5%;
        @media (min-width: 768px) {
          background-image: initial;
          border-left: none;
          box-sizing: border-box;
          flex-basis: 50%;
          margin-top: 0;
          padding: 0 0 0 3%;
        }
        h4 {
          border-bottom: dotted thin;
          line-height: 1.2;
        }
        p {
          line-height: 2;
        }
      }
    }
  }
}
</style>
