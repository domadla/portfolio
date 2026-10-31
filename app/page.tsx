import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Hero } from "@/components/portfolio/hero";
import { SelectedWork } from "@/components/portfolio/selected-work";
import { PortfolioSidebar } from "@/components/portfolio/sidebar";
import { Badge } from "@/components/ui/badge";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { portfolio } from "@/content/portfolio";
import type { CSSProperties } from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <SidebarProvider style={{ "--sidebar-width": "14rem" } as CSSProperties}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PortfolioSidebar />
      <SidebarInset id="main" className={styles.main}>
        <div className={styles.content}>
          <header className="flex min-h-16 items-center justify-between gap-4 border-b border-border py-3">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground">
                THE PERSONAL INDEX
              </span>
            </div>
          </header>
          <Hero />
          <About />
          <SelectedWork />
          <Contact />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
