<template>
    <div class="items-pokemon">
      <span
      @click="$emit('view-modal', detail)"
      class="items-pokemon-name">
            {{ detail.name }}
      </span>
      <button
      class="button-star"
      @click="$emit('send-favorite')"
      >
       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M9.81981 0.765294L7.13459 6.45365L1.12675 7.36877C0.0493653 7.53204 -0.38241 8.91975 0.398897 9.71458L4.74543 14.1398L3.7174 20.391C3.53235 21.5209 4.67141 22.3673 5.62543 21.8389L11 18.8873L16.3746 21.8389C17.3286 22.363 18.4677 21.5209 18.2826 20.391L17.2546 14.1398L21.6011 9.71458C22.3824 8.91975 21.9506 7.53204 20.8733 7.36877L14.8654 6.45365L12.1802 0.765294C11.6991 -0.248643 10.305 -0.261532 9.81981 0.765294Z"
            :fill="detail.favorite ? '#ECA539' : '#BFBFBF'"/>
        </svg>

      </button>
    </div>
</template>

<script>
export default {
    name: 'items-pokemon',
    props: {
		detail: {
			types: Object,
			default: () => {},
		},
	},
};
</script>

<style lang="scss" scoped>
.items-pokemon {
    @include content-between();
    background-color: color(white);
    border-radius: 5px;
    color: color(gray);
    margin: 0 auto;
    padding: 8px 10px 8px 20px;

    @media (min-width: 970px) {
      max-width: 570px;
    }

    &-name {
        cursor: pointer;
        font-size: size(medium22);
        text-transform: capitalize;
    }
}
</style>