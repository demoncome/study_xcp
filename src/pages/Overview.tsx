import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Zap, Activity, Database, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModuleCard = ({ title, desc, icon: Icon, href, status }: { title: string, desc: string, icon: any, href: string, status?: string }) => (
  <Link to={href} className="group">
    <Card className="h-full transition-all duration-200 hover:border-primary hover:bg-primary/[0.02] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon size={80} strokeWidth={1} />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div className="p-2 bg-secondary border border-border group-hover:border-primary/50 transition-colors">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          {status && <Badge variant="outline" className="text-[10px] uppercase font-mono border-primary/30 text-primary">{status}</Badge>}
        </div>
        <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {desc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
          ACCESS MODULE <ChevronRight className="h-3 w-3 ml-1" />
        </div>
      </CardContent>
    </Card>
  </Link>
);

const Overview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Knowledge Base Initialized</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase">
          内存超频 <span className="text-primary italic">基本原理</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          本资料是对目前内存超频理论的系统性总结。涵盖 CPU 内存控制器（IMC）端和内存端两个核心部分，旨在建立一套完整的方法论。
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ModuleCard 
          title="IMC 核心架构" 
          desc="现代 CPU 无论是 Intel 还是 AMD，其 IMC 均可归为：数据处理部分与信号传输部分。深入了解 SA 电压与 SoC 电压的底层逻辑。"
          icon={Cpu}
          href="/imc/intel"
          status="Hardware"
        />
        <ModuleCard 
          title="瓶颈分析方法论" 
          desc="基于“房间搭积木”模型，识别 SA 瓶颈与 PHY 瓶颈。理解为何更好的内存不一定能突破频率极限。"
          icon={Activity}
          href="/bottleneck"
          status="Analytical"
        />
        <ModuleCard 
          title="内存颗粒极限" 
          desc="DDR4/DDR5 主流颗粒（海力士 3GM/2GA、三星 B-die 等）的物理极限频率及特性分析。"
          icon={Database}
          href="/memory/frequency"
          status="Material"
        />
        <ModuleCard 
          title="时序逻辑详解" 
          desc="主时序、副时序与效能时序的分类与作用。掌握核心时序随频率线性缩放的底层规律。"
          icon={Zap}
          href="/memory/timings/main"
          status="Technical"
        />
      </section>

      <section className="p-8 border border-border bg-secondary/30 relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] shrink-0">核心理论框架</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-2xl font-black font-mono text-foreground/50">01</span>
              <h3 className="font-bold text-lg text-foreground uppercase">数据处理 (SA/SoC)</h3>
              <p className="text-sm text-muted-foreground">处理计算核心与 IMC 之间的数据交换，决定“房间的高度”。</p>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-black font-mono text-foreground/50">02</span>
              <h3 className="font-bold text-lg text-foreground uppercase">信号传输 (PHY)</h3>
              <p className="text-sm text-muted-foreground">人眼视力、空气质量与告示牌亮度的综合体，决定“积木的堆叠”。</p>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-black font-mono text-foreground/50">03</span>
              <h3 className="font-bold text-lg text-foreground uppercase">耐温性 (Thermal)</h3>
              <p className="text-sm text-muted-foreground">电压、时序与频率之间的终极博弈点，决定了理论转化为稳定的可能。</p>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[80px] -ml-32 -mb-32" />
      </section>
    </div>
  );
};

export default Overview;
