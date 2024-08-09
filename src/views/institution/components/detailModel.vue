<script setup lang="ts">
import NORMAL_IMG from '@/assets/images/business/normal.png';
import MIDDLE_IMG from '@/assets/images/business/middle.png';
import HEIGHT_IMG from '@/assets/images/business/height.png';
import { alarmSingle, getDictionaryTypeSelector } from '@/api/institution/institution';
import { useMessage } from '@/hooks/useMessage';
const { createMessage, notification } = useMessage();
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
    gjDetailData: {
        type: Object,
        default: () => { }
    }
});
watch(
    () => props.isVisible,
    (value) => {
        openModal.value = value
        if (value) {
            getDictionaryTypeSelector("sbgjcl").then((res) => {
                radioList.value = res?.data?.list || []
                console.log(radioList.value, '====')
            });
        }

    },
);
const radioType = ref<any>();
const radioStyle = reactive({
    height: '30px',
    lineHeight: '30px',
    color: 'rgba(255, 255, 255, 0.6)'
});
const statusImgMap: {
    [key in number]: string;
} = {
    4: NORMAL_IMG,
    3: MIDDLE_IMG,
    2: HEIGHT_IMG,
};
const statusClass: {
    [key in number]: string;
} = {
    4: 'normal',
    3: 'middle',
    2: 'height',
};
const emits = defineEmits(['closeModel']);
const openModal = ref<boolean>(false)
const remark = ref<string>('')
const radioList = ref<any>([])
const handleSubmit = async () => {
    if (radioType.value) {
        let res = await alarmSingle({
            alarmId: props.gjDetailData.alarmId,
            wbResult: radioType.value,
            wbMark: remark.value
        })
        if(res.code == 200){
            createMessage.success('操作成功');
            openModal.value = false
            radioType.value = ''
            emits('closeModel', false)
        }else {
            createMessage.error(`${res.msg}`);
        }
    }

}
const handleClose = () => {
    radioType.value = ''
    emits('closeModel', false)
}
</script>
<template>
    <div>
        <BasicModal v-model:modalValue="openModal" :title="'告警详情'" @closed="handleClose">
            <div class="ml-34px mr-34px main-container">
                <div class="top-container">
                    <div class="flex mb-10px">
                        <img :src="statusImgMap[gjDetailData.status]" alt="" />
                        <span :class="statusClass[gjDetailData.status]">{{
                            gjDetailData.statusText
                        }}</span>
                    </div>
                    <div class="btn-container">
                        <span class="tip" @click="handleSubmit">确定</span>
                    </div>
                </div>
                <span class="title">{{ gjDetailData.content }}</span>
                <div class="tip-container">
                    <div class="bg"></div>
                    <div class="title">告警信息</div>
                </div>
                <div class="middle-container ml-4px mb-8px">
                    <span class="tip">告警时间：</span>
                    <span class="time ml-8px">{{ gjDetailData.date }}</span>
                </div>
                <div class="middle-container ml-4px mb-8px">
                    <span class="tip">告警场所：</span>
                    <span class="time ml-8px">{{ gjDetailData.subscribe }}</span>
                </div>
                <div class="middle-container ml-4px mb-8px">
                    <span class="tip">告警内容：</span>
                    <span class="time ml-8px">{{ gjDetailData.alarmName }}</span>
                </div>
                <div class="middle-container ml-4px mb-8px mt-4px">
                    <span class="icon">*</span>
                    <span class="tip">处理结果：</span>
                    <a-radio-group v-model:value="radioType">
                        <a-radio v-for="(item, index) in radioList" :key="index" :style="radioStyle"
                            :value="item.enCode">{{ item.fullName
                            }}</a-radio>
                    </a-radio-group>
                    <!-- <span class="icon">*</span>
                    <span class="tip">处理结果：</span>
                    <div class="mt-4px flex">
                        <div class="w-112px">
                            <input type="radio" name="type" value="1"/>
                            <span class="tip mr-10px ml-6px">有效告警</span>
                        </div>
                        <div class="w-112px">
                            <input type="radio" name="type" />
                            <span class="tip mr-10px ml-6px">误报</span>
                        </div>
                        <div class="w-112px">
                            <input type="radio" name="type" />
                            <span class="tip mr-10px ml-6px">测试</span>
                        </div>
                    </div> -->
                </div>
                <div class="flex middle-container ml-4px mb-8px mt-12px">
                    <span class="tip">备注：</span>
                    <textarea placeholder="请输入备注" v-model="remark" :rows="3" />
                </div>
            </div>
        </BasicModal>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/common.scss';
@import './styles/detailModel.scss';
</style>
