<template>
  <div class="help">
    <table
      class="help__table"
      cellspacing="0"
      cellpadding="0">
      <tbody
        v-for="(table, tableIndex) in tables"
        :key="tableIndex">
        <tr>
          <th
            v-for="(val, n) in dealerValues"
            :key="n"
            class="help__cell--head"
            scope="col">
            {{ val.toString().replace('11', 'A') }}
          </th>
        </tr>

        <tr
          v-for="(group, groupIndex) in table"
          :key="groupIndex">
          <th
            scope="row"
            class="help__cell--head">
            {{ group.name }}
          </th>

          <td
            v-for="(dealtCards, index) in group.dealer"
            :key="index"
            :class="`help__cell--${dealtCards.action.toLowerCase()}`"
            class="help__cell">
            {{ dealtCards.action[0] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name : 'Help',

    props : {
      tables : {
        type    : Array,
        default : () => [[{
          values : [],
          dealer : [{
            value  : 0,
            action : ''
          }]
        }]]
      }
    },

    data() {
      return {
        dealerValues : []
      };
    },

    mounted() {
      this.dealerValues = this.tables[0][0].dealer.reduce((acc, elem) => {
        acc.push(elem.value);

        return acc;
      }, ['/']);
    }
  };
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.help {
  position         : absolute;
  top              : 0;
  left             : 50vw;
  width            : 300px;
  padding          : 20px;
  background-color : white;
  border           : 1px solid grey;
  transform        : translateX(-50%);

  &__table {
    border : none;
  }

  &__cell {
    width            : $cell-width;
    background-color : rgba(255, 255, 255, .8);

    &--head {
      white-space: nowrap;
    }

    &--partager {
      background-color : $split;
    }

    &--tirer {
      background-color : $hit;
    }

    &--doubler {
      background-color : $double;
    }

    &--rester {
      background-color : $stay;
    }
  }
}
</style>
