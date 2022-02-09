<template>
    <div
    class="loading"
    :class="[{ 'modal': visible }]">
        <div class="circle-loader">
            <img src="../assets/images/pokebola.svg" alt="pokebola">
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    props: {
        visible: {
			types: Boolean,
			default: false,
		},
    },
};
</script>

<style lang="scss" scoped>
.loading {
    background-color: color(background);
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: calc(100vh - 197px);


    &.modal {
        height: 100%;
    }
}

.circle-loader {
    animation: loader-spin 2s infinite linear;
    border-radius: 50%;
    display: inline-block;
    height: 110x;
    margin-bottom: 10px;
    position: relative;
    vertical-align: top;
    width: 110px;
}

@keyframes loader-spin {
    0% {
        transform: scale(0.95);
    }
    5% {
        transform: scale(1.1);
    }
    39% {
        transform: scale(0.85);
    }
    45% {
        transform: scale(1);
    }
    60% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(0.9);
    }
}
</style>