import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, Zap, Cpu, Share2 } from 'lucide-react';

const AmdPlatform = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">AMD <span className="text-primary italic">Platform</span></h1>
        <p className="text-muted-foreground">AMD 的数据处理在 I/O Die (IOD) 中。其核心概念为 UCLK、FCLK 以及 SoC 电压的平衡。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-mono uppercase text-primary tracking-widest">Power Domain</span>
            </div>
            <CardTitle className="text-xl">SoC 电压特性</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex justify-between items-center p-3 border border-border bg-secondary/50">
              <span className="font-bold">安全上限</span>
              <Badge variant="destructive" className="font-mono">1.3V MAX</Badge>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AMD 强制规定 SoC 电压不得超过 1.3V。UCLK 频率越高，SoC 电压需求越大。在异步模式下，UCLK 频率较低，通常 1.1V-1.2V 即可稳定。
            </p>
            <div className="pt-2">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Info className="h-3 w-3" /> 影响因素
              </h4>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>IMC 频率 (UCLK)</li>
                <li>CPU 温度 (特别是 IOD 自身发热)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-mono uppercase text-primary tracking-widest">Clock Domains</span>
            </div>
            <CardTitle className="text-xl">UCLK 频率模式</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-primary/20 bg-primary/5 rounded-sm">
                <p className="text-[10px] font-mono text-primary uppercase mb-1">同步模式</p>
                <p className="font-bold">UCLK = MCLK</p>
                <p className="text-[10px] text-muted-foreground mt-2 italic">性能最佳，对 SoC 电压要求高</p>
              </div>
              <div className="p-3 border border-border bg-secondary/30 rounded-sm">
                <p className="text-[10px] font-mono text-muted-foreground uppercase mb-1">异步模式</p>
                <p className="font-bold">UCLK = MCLK/2</p>
                <p className="text-[10px] text-muted-foreground mt-2 italic">适合 8000MT+ 极高频，SoC 压力小</p>
              </div>
            </div>
            <div className="p-3 bg-secondary/50 border border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">极限参考</p>
              <div className="flex justify-between text-sm font-mono">
                <span>普遍体质</span>
                <span className="text-primary font-bold">~3100 MHz</span>
              </div>
              <div className="flex justify-between text-sm font-mono mt-1">
                <span>日用极限</span>
                <span className="text-primary font-bold">~3400 MHz</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20 bg-primary/[0.01]">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Share2 className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-mono uppercase text-primary tracking-widest">Interconnect</span>
          </div>
          <CardTitle className="text-xl">Infinity Fabric (FCLK)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase border-b border-border pb-1">频率概念</h4>
              <p className="text-xs text-muted-foreground">FCLK 是连接 IOD 与 CCD 的总线频率。Zen4/Zen5 架构极限普遍在 2233MHz。</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase border-b border-border pb-1">VDDG 电压</h4>
              <p className="text-xs text-muted-foreground">控制 IF 总线两端 (CCD/IOD) 的信号收发器。同时拉高 IF 和内存频率时需要加压。</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase border-b border-border pb-1">架构差异</h4>
              <p className="text-xs text-muted-foreground">R5/R7 (单 CCD) 拥有一根 IF 总线；R9 (双 CCD) 拥有两根且强制频率同步。</p>
            </div>
          </div>

          <div className="p-4 bg-muted border border-border text-xs leading-relaxed">
            <span className="text-primary font-bold">PRO TIP:</span> AMD CPU 是多个计算核心 (CCX) 与 IOD 组装而成。同步模式下，IOD 自身发热会剧烈影响 IMC 稳定性，尤其是分频模式下的 PHY 表现。
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AmdPlatform;
