<template>
	<section id="room-types">
		<h1>Room Types</h1>
		<div class="rooms-container">
			<room />
			<room />
		</div>
	</section>
</template>

<script>
import Room from './Room.vue';

export default {
	components: {
		Room,
	},
	name: 'RoomTypes',
};
</script>

<style lang="scss">
#room-types {
	width: 95%;
	margin: 11rem auto 0;
}

#room-types > h1 {
	font-size: 3rem;
	text-align: center;
	font-weight: 200;
}

.rooms-container {
	display: flex;
	justify-content: space-between;
	/* flex-wrap: wrap; */
}
</style>
