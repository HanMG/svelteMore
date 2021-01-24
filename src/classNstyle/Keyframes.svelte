<div class="box"></div>

<style>
    :global(body) {
        padding: 60px;
    }
    .box {
        width: 100px;
        height: 100px;
        background: tomato;
        border-radius: 10px;
        animation: zoom .8s infinite alternate;
    }

    /* keyframe 일반 */
    /* @keyframes zoom { */
    /* keyframe의 전역화 -global- */
    @keyframes -global-zoom {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.5);
        }
    }
</style>