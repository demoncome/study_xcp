import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Home, Layers, ArrowUpRight } from 'lucide-react';

const BottleneckAnalysis = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">瓶颈分析 <span className="text-primary italic">Bottleneck</span></h1>
        <p className="text-muted-foreground">将瓶颈分为两种：SA 瓶颈 (IMC 极限) 与 PHY 瓶颈 (信号极限)。理解“房间搭积木”的深层含义。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <Home className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold uppercase tracking-tight">SA 瓶颈 // 房间高度</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SA 瓶颈由你“房间”的高度决定。即你的 IMC 频率是有极限的，即使 SA 电压再高也无法突破。这就像在房间里搭积木不可能超过天花板。
          </p>
          <div className="p-4 bg-secondary border-l-4 border-primary">
            <h4 className="text-xs font-mono uppercase mb-2">架构极限值参考 (MHz)</h4>
            <div className="space-y-1 font-mono text-sm">
              <div className="flex justify-between"><span>Intel 12th</span> <span className="text-primary">2133</span></div>
              <div className="flex justify-between"><span>Intel 13-14th</span> <span className="text-primary">2250</span></div>
              <div className="flex justify-between"><span>Ultra 200</span> <span className="text-primary">2366</span></div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <Layers className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-bold uppercase tracking-tight">PHY 瓶颈 // 积木堆叠</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            手中三块“积木”（CPU PHY、主板布线、内存体质）能搭多高，系统就能跑多快。任一组件接近极限，都会剧烈放大另外两个的体质需求。
          </p>
          <div className="p-4 bg-secondary border-l-4 border-accent">
            <h4 className="text-xs font-mono uppercase mb-2">信号链条组件</h4>
            <ul className="text-xs space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><div className="h-1 w-1 bg-accent rounded-full" /> CPU PHY 控制 (VDD2/VDDQ/SoC)</li>
              <li className="flex items-center gap-2"><div className="h-1 w-1 bg-accent rounded-full" /> 主板布线优化与插槽布局</li>
              <li className="flex items-center gap-2"><div className="h-1 w-1 bg-accent rounded-full" /> 内存颗粒物理体质与耐温性</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] text-center">典型场景图例 // Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              id: "01",
              title: "主板瓶颈释放",
              content: "某 14 代 CPU 在四槽主板只能跑 8000，换了双槽主板（主板 PHY 补强）后，直接跑满 IMC 极限 8800。",
              type: "PHY Upgrade"
            },
            {
              id: "02",
              title: "内存体质增强",
              content: "某 14 代 CPU 在双槽板使用 Hynix 2GA 稳定 8200，换用 Hynix 3GM（内存体质增强）后可跑 8600。",
              type: "Memory Upgrade"
            },
            {
              id: "03",
              title: "无法逾越的天花板",
              content: "在 IMC 频率受限的情况下，即使换用更好的内存或更好的主板，也无法突破频率上限（例如 8266MT/s）。",
              type: "SA Bound"
            },
            {
              id: "04",
              title: "平台综合提升",
              content: "某 Hynix 3GM 内存，在 Z790 只能跑 8200，但在 Z890 得益于 CPU PHY 和主板 PHY 的双重提升，可以跑到 9000。",
              type: "Platform Evolution"
            }
          ].map((caseItem) => (
            <Card key={caseItem.id} className="relative group overflow-hidden hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 p-2 opacity-5 font-black text-4xl italic">{caseItem.id}</div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-[8px] border-primary/30 text-primary uppercase font-mono">{caseItem.type}</Badge>
                </div>
                <CardTitle className="text-lg">{caseItem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground leading-normal">{caseItem.content}</p>
                <div className="mt-4 flex items-center text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  DIAGNOSTIC COMPLETE <ArrowUpRight className="h-3 w-3 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="p-6 border border-primary/20 bg-primary/5 rounded-sm">
        <div className="flex gap-4 items-start">
          <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-bold text-sm uppercase">放大效应 // The Amplifier Effect</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              内存、主板、CPU PHY 无论其中哪一个接近体质极限，都会<span className="text-primary font-bold">剧烈放大</span>另外两个的体质需求。
              例如在 Z790 四槽跑 8000+ 时，由于主板瓶颈，内存电压与 VDD2 需求会显著高于双槽平台。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleneckAnalysis;
