<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar";
import { useLogtoUser } from "#imports";

import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-vue-next";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

const user = useLogtoUser();
// This is sample data.
const data = {
  user: {
    name: user?.username || "User",
    email: user?.email || "user@example.com",
    avatar: user?.avatar || "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Portfolio",
      logo: GalleryVerticalEnd,
      plan: "Pro",
    },
  ],
  navMain: [
    {
      title: "Profile",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Tableau de bord",
          url: "/admin",
        },
        {
          title: "Profile",
          url: "/admin/profile",
        },
      ],
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
