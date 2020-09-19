<template>
    <article v-for="index in 10" :key="index" :class="[`media ml is-cursor is-flex`, {
        'is-active': index == 4 ? true : false
    }]">
        <div class="media-left">
            <figure class="image is-48x48">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="">
            </figure>
        </div>
        <div class="media-content has-text-dark">
            <strong>Febri Hidayan</strong>
            <p>Anda: Saya juga belum...</p>
        </div>
        <div class="media-right"></div>
    </article>
</template>