<template>
    <div :class="[`layout is-flex`, {
        'dark-mode': dark_mode
    }]">
        <!--
            Ini bagian menu atau nav bottom saat di mobile
        -->
        <div @click="isProfile = true" class="menu has-shadow is-flex">
            <div class="menu-content my-auto">
                <a @click="isMenu = 'chat'" :class="[`link`, {
                    'is-active': isMenu == 'chat'
                }]" title="Chats">
                    <message-icon/>
                </a>
                <a @click="isMenu = 'group'" :class="[`link`, {
                    'is-active': isMenu == 'group'
                }]" title="Groups">
                    <group-icon/>
                </a>
                <a @click="clickDarkMode()" class="link is-hidden-desktop" title="Dark/Light Mode">
                    <month-icon v-if="dark_mode"/>
                    <sun-icon v-else/>
                </a>
                <a @click="isMenu = 'profile'" :class="[`link is-hidden-desktop`, {
                    'is-active': isMenu == 'profile'
                }]">
                    <figure class="is-34x34">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/48x48.png" alt="profile">
                    </figure>
                </a>
            </div>
            <div class="menu-content is-hidden-desktop-only">
                <a @click="clickDarkMode()" class="link" title="Dark/Light Mode">
                    <month-icon v-if="dark_mode"/>
                    <sun-icon v-else/>
                </a>
                <a @click="isMenu = 'profile'" :class="[`link`, {
                    'is-active': isMenu == 'profile'
                }]">
                    <figure class="is-34x34">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/48x48.png" alt="profile">
                    </figure>
                </a>
            </div>
        </div>

        <!-- 
            Berikut isi tampilan pengguna atau group
         -->
        <div @click="isProfile = true" class="sidebar is-flex has-background-white has-shadow">
            <header class="sidebar-header">
                <h1 class="title">Laratalk</h1>
                <br>
                <div class="control">
                    <input type="search" class="input" placeholder="Cari">
                    <div class="icon">
                        <search-icon/>
                    </div>
                </div>
            </header>
            <div class="sidebar-content scroll">
                <profile v-if="isMenu == 'profile'"/>
                <chat-list v-else-if="isMenu == 'chat'"/>
            </div>
        </div>

        <!-- 
            Tampilan obrolan baik pengguna atau group
         -->
        <div class="chats is-flex">
            <div class="chat-header has-shadow">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="">
                        </figure>
                    </div>
                    <div class="media-content has-text-dark">
                        <strong>Febri Hidayan</strong>
                        <p>Mengetik...</p>
                    </div>
                    <div class="media-right is-flex">
                        <a @click="isProfile = false" class="link" title="profil">
                            <user-icon/>
                        </a>
                        <a class="link" title="profil">
                            <more-fill-icon/>
                        </a>
                    </div>
                </article>
            </div>
            <div @click="isProfile = true" class="chat-content scroll">
                <div v-for="index in 10" :key="index">
                    <div class="chat-message right">
                        <div class="message-content">
                            <div class="message-image">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="">
                            </div>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div class="chat-message message">
                        <div class="message-content">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-footer">
                <form>
                    <div class="control">
                        <input type="text" class="input" placeholder="Ketikan sesuai disini...">
                    </div>
                </form>
            </div>

            <!-- 
                Tampilan profil pengguna atau group
             -->
            <div :class="[`chat-profile`, {
                'is-hidden': isProfile
            }]">
                <profile/>
            </div>
        </div>
    </div>
</template>

<script>
import ChatList from './components/ChatList'
import Profile from './components/Profile'
import {
    GroupIcon,
    MessageIcon,
    MonthIcon,
    MoreFillIcon,
    SearchIcon,
    // SettingIcon,
    SunIcon,
    UserIcon
} from './components/Icons'

export default {
    components: {
        ChatList,
        Profile,
        // Icons
        GroupIcon,
        MessageIcon,
        MonthIcon,
        MoreFillIcon,
        SearchIcon,
        // SettingIcon,
        SunIcon,
        UserIcon
    },

    data() {
        return {
            dark_mode: false,
            isProfile: true,
            isMenu: 'chat'
        }
    },

    methods: {
        clickDarkMode() {
            this.dark_mode = !this.dark_mode
        }
    }
}
</script>