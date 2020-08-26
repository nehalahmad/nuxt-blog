import Vue from "vue";

import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import PostList from "@/components/Posts/PostList";
import AdminPostForm from "@/components/Admin/AdminPostForm";

Vue.component("appButton", AppButton);
Vue.component("appControlInput", AppControlInput);
Vue.component("appPostList", PostList);
Vue.component("appAdminPostForm", AdminPostForm);
