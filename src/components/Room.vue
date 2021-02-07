<template>
	<div class="room-container">
		<div class="room-image">
			<img src="../assets/images/room1.jpg" alt="" />
		</div>
		<div class="room-content">
			<h2 class="room-header">Room Type One</h2>
			<div class="room-details">
				<p>PRICE: $70</p>
				<p>PERSON: 2</p>
			</div>
			<div class="room-content_description-container">
				<p class="description">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum is simply dummy text of the printing and
					typesetting industry.
				</p>
				<button>View Galery</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Room',
};
</script>

<style lang="scss">
.room-container {
	position: relative;
	padding-right: 10px;
	width: 475px;
	margin-left: 177px;
	/* height: 25rem; */
	background: #fff;
}

.room-image {
	position: absolute;
	left: -10px;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 57%;

	& img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
}

.room-header {
	font-size: 22px;
	margin-top: 25px;
}

.room-details {
	margin: 2rem;
	border-left: 1px solid blue;
	padding-left: 15px;
	font-size: 16px;
	font-weight: 200;
}

.room-content {
	height: 100%;
	margin-left: 143px;
	@include flex(column, flex-start, flex-start);
}

.description {
	font-size: 16px;
	font-weight: 200;
	margin-bottom: 1.6rem;
	max-height: 93px;
	/* overflow-y: auto; */
}
</style>
