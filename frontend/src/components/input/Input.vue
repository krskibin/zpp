<template>
    <el-col :span="10">
        <el-input
                placeholder="Please input"
                v-model="inputValue"
                clearable>
        </el-input>
    </el-col>
</template>

<script>
    export default {
        data() {
            return {
                inputValue: ''
            }
        }
    }
</script>