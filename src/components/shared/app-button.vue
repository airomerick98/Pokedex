<template>
    <div>
        <button
        class="app-button"
        @click="$emit('send-button')">
            <slot></slot>
            <span class="app-button-text">
                {{ text }}
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'app-button',
    props: {
        text: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
.app-button {
    @include content-center;
    background-color: color(primary);
    border-radius: 60px;
    color: color(white);
    cursor: pointer;
    height: 44px;
    max-width: 275px;
	min-width: 150px;
    width: auto;


    &-text {
        font-size: 18px;
        font-weight: weight(w700);
    }
}
</style>