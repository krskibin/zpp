<template>
    <div>
        <h1>Register</h1>
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
                        <el-button>Prześlij</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'vue-property-decorator';

    export default class UserRegister extends Vue {
        name = 'user-register';
    }
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
