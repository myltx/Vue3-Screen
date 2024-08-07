<script setup lang="ts">
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
    xfDetailData: {
        type: Object,
        default: () => { }
    }
});
watch(
    () => props.isVisible,
    (value) => {
        openModal.value = value
    },
);
const emits = defineEmits(['closeModel']);
const openModal = ref<boolean>(false)
const radioType = ref<any>()
const remark = ref<string>('')
const handleSubmit = () => {

}
const handleClose = () => {
    emits('closeModel', false)
}
</script>
<template>
    <div>
        <BasicModal v-model:modalValue="openModal" :title="'消防安全培训详情'" @closed="handleClose">
            <div class="ml-38px mr-38px main-container">
                <div :class="['catagory', xfDetailData.type == '消防培训' ? 'active' : '']">
                    <span>{{ xfDetailData.type }}</span>
                </div>
                <div class="title ml-8px">{{ xfDetailData.name }}</div>
                <div class="mt-20px detail-container">
                    <div>
                        <span class="tip">时间：</span>
                        <span class="time ml-8px">{{ xfDetailData.date }}</span>
                    </div>
                    <div class="mt-8px">
                        <span class="tip">地点：</span>
                        <span class="time ml-8px">{{ xfDetailData?.address }}</span>
                    </div>
                    <div class="mt-8px flex">
                        <span class="fj">附件：</span>
                        <div class="flex img-container">
                            <img v-for="(item,index) in xfDetailData.file" :key="index" :src="item.url" alt="" class="img">
                        </div>
                    </div>
                </div>
            </div>
        </BasicModal>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/common.scss';
@import './styles/xfDetailModel.scss';
</style>
