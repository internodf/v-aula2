<template>
    <div class="row form-group">
        <div class="rotulo" :class="labelClass">
            <router-link v-if="routeName" :to="{name: this.routeName, params: { id: this.routeId }}" title="Editar" active-class="btn btn-primary btn-xs">
                {{ label }}&nbsp;<i class="fa fa-pencil-square-o" aria-hidden="true"></i>                
            </router-link>
            <span v-else>
                {{ label }}
            </span>
        </div>
        <div v-if="contentArray" :class="contentClass">
            <ul class="lista">
                <li class="lista-item" v-for="obj in contentArray" :key="obj.codigo">
                    {{ obj.codigo }} - {{ obj.nome }}
                </li>
            </ul>
        </div>
        <div v-else :class="contentClass">{{ content }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                required: true,
            },
            content: {
                required: false,
            },
            contentArray: {
                required: false,
                type: Array
            },
            labelSize: {
                required: false,
                type: Number
            },
            routeName: {
                required: false
            },
            routeId: {
                required: false
            }
        },
        data() {
            return {
                labelClass: 'col-sm-3',
                contentClass: 'col-sm-9'
            }
        },
        created() {
            if (this.labelSize) {
                if (this.labelSize > 0 && this.labelSize < 12) {
                    this.labelClass = 'col-sm-' + this.labelSize;
                    this.contentClass = 'col-sm-' + (12 - this.labelSize);
                }
            }
        }

    }
</script>

<style scoped>
    .rotulo {
        font-weight: bold;
        text-align: right
    }

    .lista {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>