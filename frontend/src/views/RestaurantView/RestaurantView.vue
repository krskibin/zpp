<template>
    <div>
        <el-row>
            <el-col :span="24"><h1 class="centerText">Nazwa restauracji</h1></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><h3 class="centerText">rodzaj kuchni</h3></el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <Stars class="centerText"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="centerText">
                <el-button>
                    Dodaj opinię
                </el-button>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="10" :offset="3">
                <h2>Opis restauracji:</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="18" :offset="3">
                <h3>OPIS</h3>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="10" :offset="3">
                <h2>Dodatkowe informacje</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="18" :offset="3">
                <p>Dania wegetariańskie:</p>
                <p>Dania wegańskie:</p>
                <p>Dostępna toaleta:</p>
                <p>Dozwolone psy:</p>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24"><h1 class="centerText">Opinie o lokalu</h1></el-col>
        </el-row>

        <el-row class="rowOpinions">
            <el-col :span="6" :offset="3">
                <Opinion/>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import Stars from "@/components/stars/Stars.vue";
    import Opinion from "../../components/opinion/Opinion";

    @Component({
        components: {
            Stars,
            Opinion
        },
    })
    export default class RestaurantView extends Vue {
    }
</script>

<style lang="scss">
    .centerText {
        text-align: center;
    }

    .rowOpinions {
        margin: 10px 0 10px 0;
        :nth-child(2) {
            margin-left: 10px;
            margin-right: 10px;
        }
    }
</style>