<template>
    <div class="section-list">
        <app-search
            @send-value="sendValue"
        />
        <loading
            v-if="loadingVisible"
            :visible="loadingVisible"
        />
        <div class="section-list-content-card">
            <div v-if="pokemonsRows.length" class="section-list-content-pokemons">
                <items-pokemon
                    class="section-list-pokemons"
                    v-for="(item, index) in pokemonsRows"
                    :key="index"
                    :detail="item"
                    @send-favorite="sendFavorite(index)"
                    @view-modal="viewModalDetail(item)"
                />
            </div>
            <section class="section-list-not-found" v-else>
                <h3 class="section-list-not-found-title">Uh-oh!</h3>
                <p class="section-list-not-found-subtitle">You look lost on your journey!</p>
                <app-button
                    text="Go back home"
                    @send-button="goToHome"
                />
            </section>
        </div>
        <div class="section-list-footer">
            <app-button
                text="All"
                @send-button="goToAll"
            >
                <img src="../assets/icons/all-icon.svg" height="22" alt="icono todos">
            </app-button>
            <app-button
                class="ml-15"
                text="Favorite"
                @send-button="goToFavorite"
            >
                <img src="../assets/icons/start-icon.svg" height="22"  alt="icono favoritos">
            </app-button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import loading from '../components/loading.vue';
import itemsPokemon from '../components/items-pokemon.vue';
import { mapGetters } from 'vuex';

function created() {
    this.$store.dispatch('getListPok');
}

function pokemonsRows() {
    const listShowPage = this.$route.name === 'pokemon-favorites' ? this.favorites : this.list;
    if (this.textSearch.length) {
		const newList = listShowPage.filter(p =>
			p.name.toLowerCase().indexOf(this.textSearch.toLowerCase()) > -1);
		return newList;
	}
	return listShowPage;
}

function sendValue($event) {
    this.textSearch = $event.target.value;
}

function goToHome() {
    this.goTo('Home');
}

function goToAll() {
    this.goTo('pokemon-list')
}

function viewModalDetail(detail) {
    const name = this.$route.name === 'pokemon-favorites' ? 'detail-favorite' : 'detail-pokemon';
    this.goTo(name, { params: { name: detail.name }, query: { favorite: detail.favorite, } });
}

function goToFavorite() {
    this.goTo('pokemon-favorites');
}

function sendFavorite(index) {
    if (this.$route.name === 'pokemon-favorites') {
		this.$store.dispatch('getPokDeleteFavorite', index);
	} else {
		this.$store.dispatch('getPokFavorite', index);
	}
}

function changeRows(values) {
    if (this.$route.name === 'pokemon-favorites' && !values.length && !this.textSearch.length) {
		this.goToAll();
	}
}

function data() {
    return {
        loadingVisible: false,
        textSearch: '',
    };
}

export default {
    name: 'pokemon-list',
    data,
    created,
    computed: {
        ...mapGetters([
			'list',
            'favorites'
		]),
        pokemonsRows,
    },
    components: {
        itemsPokemon,
        loading,
    },
    methods: {
        goToAll,
        goToHome,
        goToFavorite,
        sendFavorite,
        sendValue,
        viewModalDetail,
    },
    watch: {
		pokemonsRows: changeRows,
	},
};
</script>

<style lang="scss" scoped>
.section-list {
    padding: 35px 30px;
    min-height: 100vh;

    &-content-card {
        margin-top: 40px;
        padding-bottom: 20px;
    }

    &-content-pokemons {
        margin-bottom: 80px;
    }

    &-footer {
       @include content-center;
       background-color: color(white);
       bottom: 0;
       box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
       left: 0;
       padding: 18px 30px;
       position: fixed;
       right: 0;
    }
    
    &-pokemons {
        margin-bottom: 10px;
    }

    &-not-found {
        @include content-center();
		flex-direction: column;
        color: color(gray);

        &-title {
            font-size: size(large36);
        }

        &-subtitle {
            font-size: size(medium20);
            margin-bottom: 36px;
        }
    }
}

.ml-15 {
    margin-left: 15px;
}
</style>