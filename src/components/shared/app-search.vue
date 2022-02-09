<template>
    <div class="app-search">
        <img
        src="../../assets/icons/search-icon.svg"
        alt="icono buscar"
        height="18">
        <input
        class="app-search-text"
        placeholder="Search..."
        type="text"
        @input="$emit('send-value', $event)"
        >
    </div>
</template>

<script>
export default {
    name: 'app-search',
};
</script>

<style lang="scss" scoped>
.app-search {
    @include align-center;
    background-color: color(white);
    border-radius: 5px;
    margin: 0 auto;
    max-width: 570px;
    padding: 16px 15px;

    &-text {
        color: color(gray);
        font-size: size(medium16);
        margin-left: 10px;
        outline: none;
    }
}
</style>