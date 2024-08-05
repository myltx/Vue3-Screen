<script setup lang="ts">
const openModal = ref<boolean>(true)
const radioType = ref<any>()
const remark = ref<string>('')
const handleSubmit = () => {

}
</script>
<template>
    <div>
        <BasicModal v-model:modalValue="openModal" :title="'告警详情'">
            <div class="ml-34px mr-34px main-container">
                <div class="top-container">
                    <div class="flex">
                        <img src="@/assets/images/institution/gjxq.png" alt="">
                        <span class="category">普通告警</span>
                    </div>
                    <div class="btn-container">
                        <span class="tip" @click="handleSubmit">确定</span>
                    </div>
                </div>
                <span class="title">设备：11号智能烟感设备</span>
                <div class="tip-container">
                    <div class="bg"></div>
                    <div class="title">告警信息</div>
                </div>
                <div class="middle-container ml-4px mb-8px">
                    <span class="tip">告警时间：</span>
                    <span class="time ml-8px">2023-11-02 16:42:45</span>
                </div>
                <div class="middle-container ml-4px mb-8px">
                    <span class="tip">告警场所：</span>
                    <span class="time ml-8px">托养一区/一层101活动室</span>
                </div>
                <div class="middle-container ml-4px mb-8px">
                    <span class="tip">告警内容：</span>
                    <span class="time ml-8px">回南天、雨季到来等引发机房天花板、墙体、</span>
                </div>
                <div class="middle-container ml-4px mb-8px mt-4px">
                    <span class="icon">*</span>
                    <span class="tip">处理结果：</span>
                    <div class="mt-4px flex">
                        <div class="w-112px">
                            <input type="radio" name="type" />
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

                        <!-- <input type="radio" name="type" />
                        <span class="tip mr-10px">误报</span>
                        <input type="radio" name="type" />
                        <span class="tip mr-10px">测试</span> -->
                        <!-- <a-radio-group name="radioGroup" v-model:value="radioType">
                            <a-radio value="1">有效告警</a-radio>
                            <a-radio value="2">误报</a-radio>
                            <a-radio value="3">测试</a-radio>
                        </a-radio-group> -->
                    </div>
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
