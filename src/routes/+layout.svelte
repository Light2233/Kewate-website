<script lang="ts">
    import "../app.css";
</script>


<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js" integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js" integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=" crossorigin="anonymous"></script>
		<script>
			SmoothScroll({
			// Время скролла 400 = 0.4 секунды
			animationTime : 800,
			// Размер шага в пикселях
			stepSize : 50,

			// Дополнительные настройки:

			// Ускорение
			accelerationDelta : 40,
			// Максимальное ускорение
			accelerationMax : 120,

			// Поддержка клавиатуры
			keyboardSupport : true,
			// Шаг скролла стрелками на клавиатуре в пикселях
			arrowScroll : 50,

			// Pulse (less tweakable)
			// ratio of "tail" to "acceleration"
			pulseAlgorithm : true,
			pulseScale : 7,
			pulseNormalize : 7,

			// Поддержка тачпада
			touchpadSupport : true,
			})
		</script>
</svelte:head>
<slot />