"use client";

import { ArrowDown, ArrowUpRight, Asterisk, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { portfolio } from "@/content/portfolio";

const navigation = [
  { label: "About", href: "#about", number: "01" },
  { label: "Selected work", href: "#work", number: "02" },
  { label: "Contact", href: "#contact", number: "03" },
];

export function PortfolioSidebar() {
  const { setOpenMobile } = useSidebar();
  const closeMobileMenu = () => setOpenMobile(false);

  return (
    <Sidebar aria-label="Portfolio navigation">
      <SidebarHeader className="flex-row items-center justify-between px-6 pt-8 pb-7">
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 text-3xl font-semibold tracking-tighter"
          aria-label={`${portfolio.name.join(" ")} home`}
        >
          <Asterisk
            className="size-8 text-primary"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span>
            {portfolio.initials}
            <span className="text-primary">.</span>
          </span>
        </a>
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          onClick={closeMobileMenu}
          aria-label="Close navigation"
        >
          <X aria-hidden="true" />
        </Button>
      </SidebarHeader>
      <SidebarContent className="gap-5 px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <nav aria-label="Main navigation">
              <SidebarMenu className="gap-2">
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      render={<a href={item.href} />}
                      onClick={closeMobileMenu}
                      className="h-11 text-sm"
                    >
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className="top-3 font-mono text-[10px] text-muted-foreground">
                      {item.number}
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-[9px] tracking-[0.15em]">
            Selected work
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {portfolio.projects.map((project) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton
                    render={<a href={`#${project.id}`} />}
                    size="sm"
                    onClick={closeMobileMenu}
                    className="justify-between"
                  >
                    <span>{project.name}</span>
                    <ArrowUpRight
                      className="text-muted-foreground"
                      aria-hidden="true"
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-[9px] tracking-[0.15em]">
            Elsewhere
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {portfolio.socials.map((social) => (
                <SidebarMenuItem key={social.label}>
                  {social.href ? (
                    <SidebarMenuButton
                      render={
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      size="sm"
                      className="justify-between"
                    >
                      <span>{social.label}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </SidebarMenuButton>
                  ) : (
                    <div className="flex h-8 items-center justify-between px-3 text-xs text-muted-foreground">
                      <span>{social.label}</span>
                      <Badge variant="secondary" className="text-[8px]">
                        Soon
                      </Badge>
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<a href={portfolio.resumeUrl ?? "#background"} />}
                  size="sm"
                  onClick={closeMobileMenu}
                  className="justify-between"
                >
                  <span>{portfolio.resumeUrl ? "Résumé" : "Background"}</span>
                  <ArrowDown aria-hidden="true" />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="gap-5 px-6 py-7">
      </SidebarFooter>
    </Sidebar>
  );
}
