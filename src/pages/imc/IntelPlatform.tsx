import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Info, Zap, Thermometer, Cpu } from 'lucide-react';

const IntelPlatform = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">Intel <span className="text-primary italic">Platform</span></h1>
        <p className="text-muted-foreground">英特尔平台的数据处理部分集中在 System Agent (SA) 模块内。核心在于理解 SA 电压、IMC 频率与 NGU 总线的协同作用。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-mono uppercase text-primary tracking-widest">Voltage Source</span>
            </div>
            <CardTitle className="text-xl">SA 电压来源</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="p-4 border-l-2 border-primary bg-primary/5 space-y-2">
              <h4 className="font-bold">14 代以前 (Classic)</h4>
              <p className="text-muted-foreground">由主板 1.8V AUX 分压打进 CPU，HWinfo 读取的是 SA VID。BIOS 更改的是请求电压，实际电压受主板影响小，高负载不掉压。</p>
            </div>
            <div className="p-4 border-l-2 border-accent bg-accent/5 space-y-2">
              <h4 className="font-bold">Ultra 200 平台 (Next-Gen)</h4>
              <p className="text-muted-foreground">独立供电给压。实际电压受主板供电水平影响显著，高负载易掉压。监控软件读取的是实际电压值。</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Info className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-mono uppercase text-primary tracking-widest">Key Factors</span>
            </div>
            <CardTitle className="text-xl">SA 电压决定因素</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full border border-primary flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-mono">01</div>
              <div>
                <p className="font-bold text-sm">IMC 频率</p>
                <p className="text-xs text-muted-foreground">频率越高，SA 电压需求越大。DDR5 需求显著高于 DDR4。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full border border-primary flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-mono">02</div>
              <div>
                <p className="font-bold text-sm">CPU 温度</p>
                <p className="text-xs text-muted-foreground">温度升高，SA 需求显著提升。风冷稳定性通常弱于水冷。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full border border-primary flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-mono">03</div>
              <div>
                <p className="font-bold text-sm">PHY 质量</p>
                <p className="text-xs text-muted-foreground">影响电压宽容度。质量越好，允许给定的 SA 电压范围越广。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-mono uppercase text-primary tracking-widest">IMC Evolution</span>
          </div>
          <CardTitle className="text-xl">IMC 频率极限与 Gear 分频</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="font-mono text-[10px] uppercase">代次 / 架构</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase">Gear 模式</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase">日用极限 (MHz)</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase">说明</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold">8 / 9 / 10 代</TableCell>
                  <TableCell>同步</TableCell>
                  <TableCell className="text-primary font-mono font-bold">2500</TableCell>
                  <TableCell className="text-xs text-muted-foreground">IMC 始终与实际频率相同</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">11 代 (RKL)</TableCell>
                  <TableCell>Gear 1 / 2</TableCell>
                  <TableCell className="text-primary font-mono font-bold">1933</TableCell>
                  <TableCell className="text-xs text-muted-foreground">引入分频机制</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">12 代 (ADL)</TableCell>
                  <TableCell>Gear 1 / 2</TableCell>
                  <TableCell className="text-primary font-mono font-bold">2150</TableCell>
                  <TableCell className="text-xs text-muted-foreground">IMC 质量大幅提升</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">13 / 14 代 (RPL)</TableCell>
                  <TableCell>Gear 1 / 2</TableCell>
                  <TableCell className="text-primary font-mono font-bold">2350</TableCell>
                  <TableCell className="text-xs text-muted-foreground">Gear 2 日用主流</TableCell>
                </TableRow>
                <TableRow className="bg-primary/5">
                  <TableCell className="font-bold">Ultra 200 (LNL)</TableCell>
                  <TableCell>Gear 2 / 4</TableCell>
                  <TableCell className="text-primary font-mono font-bold">2366</TableCell>
                  <TableCell className="text-xs text-muted-foreground">引入 NGU 概念，四通道 IMC</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-primary/20 bg-primary/[0.01]">
          <CardHeader>
            <CardTitle className="text-lg">NGU (Next Gen Uncore)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>Ultra 200 系列核心特性。拉高 NGU 频率可显著提升内存带宽及 SA 电压需求。</p>
            <p className="font-mono text-xs text-primary">极限倍频: 30-35x</p>
            <div className="text-[10px] text-muted-foreground mt-4 leading-tight italic">
              * 实际上是四通道内存控制器，单独控制 DDR5 的四个 32bit 子通道。
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-accent/20 bg-accent/[0.01]">
          <CardHeader>
            <CardTitle className="text-lg">D2D (Die to Die)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>负责连接计算核心与数据处理部分的总线。由 VNNAON 电压控制。</p>
            <p className="font-mono text-xs text-accent">极限倍频: 40x</p>
            <div className="text-[10px] text-muted-foreground mt-4 leading-tight italic">
              * 随着内存有效频率提高，D2D 耐受频率会逐渐降低。
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IntelPlatform;
