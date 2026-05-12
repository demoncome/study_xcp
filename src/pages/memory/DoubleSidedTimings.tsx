import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Zap, Info, ShieldCheck } from 'lucide-react';

const DoubleSidedTimings = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">双面时序 <span className="text-primary italic">Double-Sided</span></h1>
        <p className="text-muted-foreground">适用于双面内存条，或在四槽主板上插满四根单面内存的情况。双面时序控制不同 Rank 之间的数据交换效率。</p>
      </header>

      <section className="p-8 border-2 border-primary/20 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Layers size={120} />
        </div>
        <div className="relative z-10 space-y-4 max-w-2xl">
          <h2 className="text-2xl font-black uppercase">Rank 效率优势</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            由于数据在两个 Rank 颗粒之间频繁交换，双面内存的实际流转效率通常高于单面内存。这意味着在相同频率下，双面内存会有更稳定的游戏最低帧（1% Low FPS）表现，且理论带宽上限显著更高。
          </p>
          <div className="flex gap-2">
            <Badge className="bg-primary text-primary-foreground">High Bandwidth</Badge>
            <Badge variant="outline" className="border-primary text-primary">Superior Stability</Badge>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" /> Intel 平台双面参 (dr / dd)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground text-xs">主要调节 tRDRD, tWRWR, tWRRD 的 dr 和 dd 子项。</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-border bg-secondary/50">
                <p className="text-[10px] text-muted-foreground uppercase font-mono">DDR4 建议起步</p>
                <p className="text-xl font-bold font-mono">8</p>
              </div>
              <div className="p-3 border border-border bg-secondary/50">
                <p className="text-[10px] text-muted-foreground uppercase font-mono">DDR5 建议起步</p>
                <p className="text-xl font-bold font-mono">16</p>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground italic">
              * tRDWR dr/dd 建议与 sg/dg 保持同步即可。这些数值越低，双面内存相对于单面的带宽优势就越明显。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" /> AMD 平台双面参 (sd / dd)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground text-xs">主要调节 tRDRD 与 tWRWR 的 sd 和 dd 子项。</p>
            <div className="p-3 border border-border bg-secondary/50">
              <p className="text-[10px] text-muted-foreground uppercase font-mono">通用起步值</p>
              <p className="text-xl font-bold font-mono text-accent">8</p>
              <div className="mt-2 text-[10px] space-y-1">
                <p>• 同步模式 (6400): 可尝试压到 <span className="font-bold">6</span></p>
                <p>• 异步模式 (高频): 往往稳定于 <span className="font-bold">8</span></p>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground italic leading-tight">
              * 双面时序主要取决于 CPU PHY 与主板的优化水平，受内存颗粒体质影响较小。
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="p-6 border border-border bg-secondary/30 rounded-sm">
        <div className="flex gap-4 items-start">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-bold text-sm uppercase">插槽与 Rank 的等价性</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              在主流四槽主板上，插满四根单面内存条在逻辑层面与使用两根双面内存条是等效的。上述双面时序规则同样适用于四根单面插满的配置。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleSidedTimings;
