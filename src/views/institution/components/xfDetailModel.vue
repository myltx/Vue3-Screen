<script setup lang="ts">
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
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
            <div>1234</div>
        </BasicModal>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/common.scss';
@import './styles/xfDetailModel.scss';
</style>
