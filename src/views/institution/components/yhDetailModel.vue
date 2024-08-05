<script setup lang="ts">
const openModal = ref<boolean>(true)
const radioType = ref<any>()
const remark = ref<string>('')
const handleSubmit = () => {

}
</script>
<template>
    <div>
        <BasicModal v-model:modalValue="openModal" :title="'隐患记录详情'">
            <div class="ml-16px mr-34px main-container flex">
                <div class="left-container w-50%">
                    <div class="flex">
                        <img src="@/assets/images/institution/yhxq.png" alt="" width="47px" height="46px">
                        <span class="category">待整改</span>
                    </div>
                    <div class="mt-16px">
                        <span class="detail">【隐患描述】地上随处可见的烟头，还有些未</span>
                    </div>
                    <div class="tip-container mt-20px">
                        <div class="bg"></div>
                        <div class="title">隐患信息</div>
                    </div>
                    <div class="middle-container ml-4px mb-8px">
                        <span class="tip">上报时间：</span>
                        <span class="time ml-8px">2023-11-02 16:42:45</span>
                    </div>
                    <div class="middle-container ml-4px mb-8px">
                        <span class="tip">隐患地点：</span>
                        <span class="time ml-8px">老人活动室</span>
                    </div>
                    <div class="middle-container ml-4px mb-8px">
                        <span class="tip">上报人：</span>
                        <span class="time ml-8px">张三</span>
                    </div>
                    <div class="middle-container ml-4px mb-8px">
                        <span class="tip">附件：</span>
                    </div>
                </div>
                <div class="left-container w-50%">
                    <div class="flex ml-30px">
                        <div class="tip-container">
                            <div class="bg"></div>
                            <div class="title">隐患整改时间线</div>
                        </div>
                    </div>
                    <div>
                        <span class="times ml-28px">2024.01.01 12:15:27</span>
                        <div class="main mt-4px ml-20px">
                            <div class="title mt-8px ml-8px">上报隐患</div>
                            <span class="person mt-4px ml-8px">上报人：</span>
                            <span class="name">张三</span>
                        </div>
                    </div>
                </div>
                <!-- <div>
                </div>
                <div class="right-container">

                </div> -->
                <!-- <span class="title">设备：11号智能烟感设备</span> -->

                <!-- <div class="middle-container ml-4px mb-8px mt-4px">
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
                    </div>
                </div> -->
                <!-- <div class="flex middle-container ml-4px mb-8px mt-12px">
                    <span class="tip">备注：</span>
                    <textarea placeholder="请输入备注" v-model="remark" :rows="3" />
                </div> -->
            </div>
        </BasicModal>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/common.scss';
@import './styles/yhDetailModel.scss';
</style>
