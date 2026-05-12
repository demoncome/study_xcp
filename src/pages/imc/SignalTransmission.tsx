import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Wind, Lightbulb, Box } from 'lucide-react';

const SignalTransmission = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">信号传输 <span className="text-primary italic">Signal</span></h1>
        <p className="text-muted-foreground">信号传输部分是 CPU PHY、主板布线以及内存条的综合体。三者关系如同“夜晚看告示牌”。</p>
      </header>

      <section className="relative py-12 border-y border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="relative flex flex-col items-center gap-8">
          <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em]">积木模型 // Building Blocks</h2>
          
          <div className="flex flex-col items-center w-full max-w-md gap-1">
            {/* Memory Block */}
            <div className="w-full h-16 bg-primary/20 border-2 border-primary flex items-center justify-center group hover:bg-primary/30 transition-all cursor-help relative">
              <span className="font-mono text-xs font-black uppercase tracking-tighter">Memory Stick // 告示牌亮度</span>
              <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity w-48 p-2 bg-secondary border border-border text-[10px] z-10">
                内存颗粒物理体质与耐温性。耐温越高，信号强度越强。
              </div>
            </div>
            {/* MB Block */}
            <div className="w-full h-12 bg-white/5 border-2 border-white/20 flex items-center justify-center group hover:border-white/40 transition-all cursor-help relative">
              <span className="font-mono text-xs font-black uppercase tracking-tighter text-muted-foreground">MB Routing // 空气质量</span>
              <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity w-48 p-2 bg-secondary border border-border text-[10px] z-10">
                主板布线、板材质量、插槽数量。双槽通常优于四槽。
              </div>
            </div>
            {/* CPU PHY Block */}
            <div className="w-full h-20 bg-accent/20 border-2 border-accent flex items-center justify-center group hover:bg-accent/30 transition-all cursor-help relative">
              <span className="font-mono text-xs font-black uppercase tracking-tighter">CPU PHY // 人眼视力</span>
              <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity w-48 p-2 bg-secondary border border-border text-[10px] z-10">
                CPU 内部信号收发能力。受 VDD2/VDDQ (Intel) 或 VDDIO/VDDP (AMD) 控制。
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-mono text-center max-w-lg">
            积木堆得越高（信号传输越好），能实现的超频稳定频率就越高。脱离三者中的任何一个谈频率都是没有意义的。
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Box className="h-4 w-4 text-primary" /> CPU PHY 控制电压
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono border-b border-border pb-1">
                <span className="text-primary uppercase">Intel Platform</span>
                <span className="text-muted-foreground italic">12-14th & Ultra</span>
              </div>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>VDDQ (1.4V Max): CPU 内部电压。</li>
                <li>VDD2 (1.45V-1.5V Max): CPU 外部电压，受主板供电影响。</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono border-b border-border pb-1">
                <span className="text-accent uppercase">AMD Platform</span>
                <span className="text-muted-foreground italic">Zen4 & Zen5</span>
              </div>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>VDDIO (1.5V Max): PHY 主要控制电压。</li>
                <li>VDDP (1.15V Max): 由 VDDIO 分压而来，高频 8000+ 或 4 根内存时需拉高。</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Share2 className="h-4 w-4 text-primary" /> 主板插槽与信号
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 border border-border text-center">
                <p className="text-[10px] uppercase font-mono text-muted-foreground">ATX 双槽</p>
                <p className="text-xs font-bold">右槽信号强</p>
              </div>
              <div className="p-2 border border-border text-center">
                <p className="text-[10px] uppercase font-mono text-muted-foreground">ATX 四槽</p>
                <p className="text-xs font-bold">左二插槽强</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              * Ultra 平台架构变化：不再是每个插槽独立控制，而是所有插槽的上下两部分由 IMC 独立控制。因此不用过于在意插槽强度差异。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Share2 = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
);

export default SignalTransmission;
