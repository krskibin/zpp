<template>
    <div class="newRestaurant">
        <el-row :gutter="20">
            Nazwa użytkownika:
        </el-row>
        <el-row :gutter="500">
            <Input/>
        </el-row>
        <el-row :gutter="20">
            Dodatkowe:
        </el-row>
        <el-row :gutter="500">
            <Input/>
        </el-row>

        <el-row :gutter="20">
            Jedzenie:
        </el-row>
        <el-row :gutter="500">
            <Stars/>
        </el-row>
        <el-row :gutter="20">
            Całokształt:
        </el-row>
        <el-row :gutter="500">
            <Stars/>
        </el-row>
        <el-button>Dodaj</el-button>
    </div>

</template>

<script>
    import 'element-ui/lib/theme-chalk/index.css'
    import {Component, Vue} from 'vue-property-decorator';
    import Input from '../../components/input/Input';
    import Stars from '../../components/stars/Stars';

    @Component({
        components: {
            Input,
            Stars
        },
    })
    export default class NewOpinion extends Vue {
    }
</script>