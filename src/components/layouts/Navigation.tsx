import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navItems } from '@/routes';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const SidebarItem = ({ item, depth = 0, onClose }: { item: any, depth?: number, onClose?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;
  
  if (!hasChildren) {
    return (
      <NavLink
        to={item.href}
        onClick={onClose}
        className={({ isActive }) => cn(
          "flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors border-l-2",
          isActive 
            ? "text-primary border-primary bg-primary/5" 
            : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary",
          depth > 0 && "pl-12"
        )}
      >
        {item.icon && <item.icon className="h-4 w-4" />}
        {item.title}
      </NavLink>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between px-4 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary border-l-2 border-transparent",
          isOpen && "text-foreground"
        )}
      >
        <div className="flex items-center gap-3">
          {item.icon && <item.icon className="h-4 w-4" />}
          {item.title}
        </div>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="flex flex-col">
          {item.children.map((child: any) => (
            <SidebarItem key={child.title} item={child} depth={depth + 1} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col w-64 border-r border-border h-screen sticky top-0 bg-background overflow-y-auto">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-primary tracking-tighter">XCP OVERCLOCK</h1>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Knowledge Base v1.0</p>
      </div>
      <nav className="flex-1 py-4">
        {navItems.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </nav>
      <div className="p-4 border-t border-border mt-auto">
        <div className="p-3 bg-secondary/50 border border-border">
          <p className="text-[10px] text-muted-foreground uppercase mb-1">System Status</p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-foreground">STABLE // 1.45V</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center justify-between px-6 py-4 border-b border-border bg-background sticky top-0 z-50">
      <h1 className="text-lg font-bold text-primary tracking-tighter">XCP OC</h1>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-background w-72">
          <div className="p-6 border-b border-border">
            <h1 className="text-xl font-bold text-primary tracking-tighter">XCP OVERCLOCK</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Knowledge Base v1.0</p>
          </div>
          <nav className="py-4">
            {navItems.map((item) => (
              <SidebarItem key={item.title} item={item} onClose={() => setOpen(false)} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
