function goTo(name, options) {
	this.$router.push({ name, ...options });
}

const mixin = {
	methods: {
		goTo,
	},
};

export default mixin;