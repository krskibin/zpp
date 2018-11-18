<template>
    <div>
        <h1>Login</h1>
        <el-row>
            <el-col :offset="8" :span="8">
                <el-form class="demo-dynamic">
                    <el-form-item
                            prop="email"
                            label="Email"
                    >
                        <el-input></el-input>
                    </el-form-item>

                    <el-form-item
                            prop="password"
                            label="Hasło"
                    >
                        <el-input type="password"></el-input>
                    </el-form-item>


                    <el-form-item>
                        <el-button>Zaloguj się</el-button>
                        <el-button @click="handleSelect('register')">Zarejestruj</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'user-login',
        methods: {
            handleSelect(name) {
                this.$router.push(name);
            },
        },
    };
</script>

<style lang="scss">
    input:focus {
        border: solid 2px #f9d3a7 !important;
    }

    button {
        background-color: #f9d3a7 !important;
        &:focus, &:hover {
            color: black !important;
        }
    }
</style>
