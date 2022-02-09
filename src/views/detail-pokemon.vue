<template>
    <div class="modal-pokemon">
        <div class="modal-pokemon-modal">
            <div class="modal-pokemon-background">
                <button class="modal-pokemon-button" @click="closeModal">
                    <img src="../assets/icons/close-icon.svg" alt="icono cerrar">
                </button>
                <img
                :src="detail.image"
                width="160"
                alt="imagen pokemon">
            </div>
            <div class="modal-pokemon-content">
                <div>
                    <p class="modal-pokemon-text capitalize">
                        <span class="modal-pokemon-text-bold">Name:</span> {{ detail ? detail.name : ''}}
                    </p>
                    <p class="modal-pokemon-text capitalize">
                        <span class="modal-pokemon-text-bold">Weight:</span> {{ detail ? detail.weight : ''}}
                    </p>
                    <p class="modal-pokemon-text capitalizet">
                        <span class="modal-pokemon-text-bold">Height:</span> {{ detail ? detail.height : ''}}
                    </p>
                    <p class="modal-pokemon-text capitalize">
                        <span class="modal-pokemon-text-bold">Types:</span> {{ detail ? detail.typesString : ''}}
                    </p>
                </div>
            </div>
            <div class="modal-pokemon-footer">
                <div>
                    <app-button
                        @send-button="shareAction"
                        text="Share to my friends"
                    />
                </div>
                <button
                class="button-star ml-16"
                >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M9.81981 0.765294L7.13459 6.45365L1.12675 7.36877C0.0493653 7.53204 -0.38241 8.91975 0.398897 9.71458L4.74543 14.1398L3.7174 20.391C3.53235 21.5209 4.67141 22.3673 5.62543 21.8389L11 18.8873L16.3746 21.8389C17.3286 22.363 18.4677 21.5209 18.2826 20.391L17.2546 14.1398L21.6011 9.71458C22.3824 8.91975 21.9506 7.53204 20.8733 7.36877L14.8654 6.45365L12.1802 0.765294C11.6991 -0.248643 10.305 -0.261532 9.81981 0.765294Z"
                        :fill="detail.favorite ?  '#ECA539' : '#BFBFBF'"/>
                    </svg>

                </button>
            </div>
            <div>
                <input id="input-shared" type="text" hidden>
				<span class="detail__text-copied" v-if="showCopied">Copied!</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

function created() {
    const detail = {
		name: this.name,
		favorite: this.$route.query.favorite,
	}
	this.$store.dispatch('getDetailPok', detail);
}

function closeModal() {
    this.$router.go(-1);
}

function shareAction() {
    const cb = document.getElementById('input-shared');
    cb.value = `Name: ${this.detail.name}, Characteristics: ${this.detail.statsString}`;
    cb.style.display = 'block';
    cb.select();
	document.execCommand('copy');
    cb.style.display = 'none';
    this.showCopied = true;
    setTimeout(() => {
      	this.showCopied = false;
    }, 3000);
}

function data() {
    return {
        showCopied: false,
    };
}

export default {
    name: 'detail-pokemon',
    created,
    data,
    computed: {
        ...mapGetters([
			'detail',
		]),
    },
    methods: {
        closeModal,
        shareAction,
    },
    props: {
		name: String,
	},
};
</script>

<style lang="scss" scoped>
.modal-pokemon {
    @include content-center();
    background-color: rgba(0, 0, 0, 0.6);
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;

    &-modal {
        background-color: color(white);
        border-radius: 5px;
        height: 100%;
		max-height: 506px;
		max-width: 315px;
		width: 100%;
    }

    &-background {
        background-image: url('../assets/images/paisaje.svg');
        background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 220px;
		position: relative;
    }

    &-content {
       padding: 10px 30px;
       text-align: left;
    }

    &-text {
        border-bottom: 1px solid color(border-gray);
        padding: 10px 0;

        &-bold {
            font-weight: 700;
        }
    }

    &-button {
        background: transparent;
        cursor: pointer;
        position: absolute;
		right: 20px;
		top: 20px;
    }

    &-footer {
        @include content-center;
        margin-top: 20px;
    }
}

.ml-16 {
    margin-left: 16px;
}
</style>