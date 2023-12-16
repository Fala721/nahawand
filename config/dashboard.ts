import { DashboardConfig } from "@/types"
import { Icons } from "@/components/icons";
export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: 'الصفحه الرئيسية',
      href: "/homepage",
      icon: Icons.home,
    },
    {
      title: 'النوتات المفضلة',
      href: "#",
      icon: "billing",
    },
    {
      title: 'نوتاتي',
      href: "/homepage/sheets",
      icon: Icons.star,
    },
  ],
}

