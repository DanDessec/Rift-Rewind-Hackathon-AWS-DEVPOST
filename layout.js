import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Home, 
  TrendingUp, 
  Award, 
  Lightbulb, 
  Share2, 
  Settings,
  Menu,
  X,
  Sparkles
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: createPageUrl("Dashboard"), icon: Home },
  { title: "Performance Trends", url: createPageUrl("Trends"), icon: TrendingUp },
  { title: "Achievement Badges", url: createPageUrl("Badges"), icon: Award },
  { title: "AI Insights", url: createPageUrl("Insights"), icon: Lightbulb },
  { title: "Share Recap", url: createPageUrl("Recap"), icon: Share2 },
  { title: "Settings", url: createPageUrl("Settings"), icon: Settings },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const isLandingPage = location.pathname === createPageUrl("Landing");
  const isUploadPage = location.pathname === createPageUrl("Upload");

  if (isLandingPage || isUploadPage) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --primary-cyan: #0BC6E3;
          --primary-gold: #C89B3C;
          --dark-bg: #010A13;
          --card-bg: #1E2328;
          --hover-bg: #2A2F35;
        }
      `}</style>
      <div className="min-h-screen flex w-full" style={{ backgroundColor: 'var(--dark-bg)' }}>
        <Sidebar className="border-r" style={{ borderColor: 'rgba(11, 198, 227, 0.2)', backgroundColor: 'var(--card-bg)' }}>
          <SidebarHeader className="border-b p-4" style={{ borderColor: 'rgba(11, 198, 227, 0.2)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                   style={{ background: 'linear-gradient(135deg, var(--primary-cyan), var(--primary-gold))' }}>
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-white text-lg">League Insights</h2>
                <p className="text-xs" style={{ color: 'var(--primary-cyan)' }}>Rift Rewind</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-2">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider px-2 py-2"
                                 style={{ color: 'rgba(200, 155, 60, 0.7)' }}>
                Navigation
              </SidebarGroupLabel>
 
