import DashboardSkeleton from "@/app/ui/skeletons";

// 因为dashboard页面经过suspense组件改造，所以这个loading组件其实不会使用到
export default function Loading() {
  return <DashboardSkeleton />;
}
