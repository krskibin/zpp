<template>
    <div id="app">
    <router-view/>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    body {
        margin: 0;
        height: 100%;
        width: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #1E90FF;
            }
        }
    }
    .leftMenu {
        background-color: white;
        position: absolute;
        border-right: solid 1px #979797;
        height: 100%;
        padding: 25px;
        top: 0;
        left: 0;
    }
    .leftMenu {
        .material-icons {
            display: block;
            font-size: 30px;
            color: var(--brown-grey);
            margin-bottom: 20px;
        }
        :last-child {
            bottom: 70px;
            position: absolute;
        }
    }

</style>