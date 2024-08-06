<script setup lang="ts">
import dayjs from 'dayjs';
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
    yhDetailData: {
        type: Object,
        default: () => { },
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
const rectificationProgressType: {
    [key in number]: string;
} = {
    1: '上报隐患',
    2: '推送点位负责人',
    3: '指派其他人员',
    4: '待验收',
    5: '已整改'
};
const handleSubmit = () => {

}
const handleClose = () => {
    emits('closeModel', false)
}
</script>
<template>
    <div>
        <BasicModal v-model:modalValue="openModal" :title="'隐患记录详情'" @closed="handleClose">
            <div class="ml-16px mr-34px main-container flex">
                <div class="left-container w-50%">
                    <div class="flex">
                        <img src="@/assets/images/institution/yhxq.png" alt="" width="47px" height="46px">
                        <span class="category">{{ yhDetailData?.dangerStatus == 0 ? '待整改' : yhDetailData?.dangerStatus
                            == 1 ? '待验收' : '已整改' }}</span>
                    </div>
                    <div class="mt-16px">
                        <span class="detail">【隐患描述】{{ yhDetailData?.sffFireDangerDTO?.dangerRemark }}</span>
                    </div>
                    <div class="tip-container mt-20px">
                        <div class="bg"></div>
                        <div class="title">隐患信息</div>
                    </div>
                    <div class="middle-container ml-4px mb-8px">
                        <span class="tip">上报时间：</span>
                        <span class="time ml-8px">
                            {{ dayjs(yhDetailData?.sffFireDangerAssignDTOS[0]['generationTime']).format('YYYY-MM-DDHH:mm:ss')}}
                        </span>
                    </div>
                    <div class="middle-container ml-4px mb-8px">
                        <span class="tip">隐患地点：</span>
                        <span class="time ml-8px">{{ yhDetailData?.sffFireDangerDTO?.dangerRemark }}</span>
                    </div>
                    <div class="middle-container ml-4px mb-8px">
                        <span class="tip">上报人：</span>
                        <span class="time ml-8px">张三</span>
                    </div>
                    <div class="middle-container ml-4px mb-8px">
                        <span class="tip">附件：</span>
                    </div>
                </div>
                <div class="right-container w-48% ml-5px">
                    <div class="flex ml-30px">
                        <div class="tip-container">
                            <div class="bg"></div>
                            <div class="title">隐患整改时间线</div>
                        </div>
                    </div>
                    <div class="h-98px" v-for="(item, index) in yhDetailData?.sffFireDangerAssignDTOS" :key="index">
                        <span class="times ml-28px">{{ dayjs(item['generationTime']).format('YYYY-MM-DD HH:mm:ss')
                            }}</span>
                        <div class="main mt-4px ml-20px">
                            <div class="title mt-8px ml-8px">{{ rectificationProgressType[item.rectificationProgress] }}
                            </div>
                            <span class="person mt-4px ml-8px">上报人：</span>
                            <span class="name">张三</span>
                        </div>
                        <div class="mb-12px"></div>
                    </div>

                    <!-- <div class="h-98px">
                        <span class="times ml-28px">2024.01.01 12:15:27</span>
                        <div class="main mt-4px ml-20px">
                            <div class="title mt-8px ml-8px">上报隐患</div>
                            <span class="person mt-4px ml-8px">上报人：</span>
                            <span class="name">张三</span>
                        </div>
                        <div class="mb-12px"></div>
                    </div> -->
                    <!-- <div class="h-98px">
                        <span class="times ml-28px">2024.01.01 12:15:27</span>
                        <div class="main mt-4px ml-20px">
                            <div class="title mt-8px ml-8px">上报隐患</div>
                            <span class="person mt-4px ml-8px">上报人：</span>
                            <span class="name">张三</span>
                        </div>
                        <div class="mb-12px"></div>
                    </div> -->
                </div>
            </div>
        </BasicModal>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/common.scss';
@import './styles/yhDetailModel.scss';
</style>
