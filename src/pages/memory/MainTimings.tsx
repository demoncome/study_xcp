import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Thermometer, Zap, Info } from 'lucide-react';

const MainTimings = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">主时序 <span className="text-primary italic">Primary Timings</span></h1>
        <p className="text-muted-foreground">主时序包含 tCL, tRCDrd, tRCDwr, tRP, tRAS, tRC。它们是内存的“门面”，虽然对性能影响逐渐减小，但与耐温性息息相关。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" /> tCL (CAS Latency)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground">与整个信号传输体系（CPU PHY、主板、内存体质）强相关。也是唯一一个能通过增加内存电压而压低的时序。</p>
            <div className="p-3 bg-primary/5 border border-primary/20 font-mono text-[10px]">
              tCL 延迟计算: tCL * 2000 / 频率 (ns)
            </div>
            <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
              <li>信号越好，相同电压下 tCL 越低</li>
              <li>海力士 3GM 一般可做到 8.2ns</li>
              <li>2GA 一般可做到 8ns</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-accent" /> tRCDrd
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground">与信号体系弱相关，不能通过增加电压来压低。tRCDrd 越低，内存耐温极限越低。</p>
            <div className="p-3 bg-accent/5 border border-accent/20 text-xs italic">
              tRCDrd 的耐温与 tCL 的耐温相互独立。
            </div>
            <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
              <li>随频率呈规律线性缩放</li>
              <li>是寻找频率与耐温平衡点的核心</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold uppercase tracking-tight">海力士 3GM 线性缩放表 (tRCDrd)</h2>
        </div>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="font-mono text-[10px]">tRCDrd</TableHead>
                  <TableHead className="font-mono text-[10px]">对应频率范围 (MT/s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { rcd: '41', freq: '7000 - 7267' },
                  { rcd: '43', freq: '7333 - 7600' },
                  { rcd: '45', freq: '7667 - 7933' },
                  { rcd: '47', freq: '8000 - 8267' },
                  { rcd: '49', freq: '8333 - 8600' },
                  { rcd: '51', freq: '8667 - 8933' },
                  { rcd: '53', freq: '9000 - 9267' },
                ].map((row) => (
                  <TableRow key={row.rcd}>
                    <TableCell className="font-mono font-bold text-primary">{row.rcd}</TableCell>
                    <TableCell className="font-mono">{row.freq}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-4 text-[10px] text-muted-foreground italic border-t border-border">
              * 越接近右侧频率极限，越容易出现 tRCDrd 瓶颈导致的报错。
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'tRCDwr', desc: '可压极低(如 8)，提升带宽，对耐温无影响。' },
          { label: 'tRP / tRAS', desc: '对效能和耐温无显著影响，通常设为等同 tRCDrd。' },
          { label: 'tRC', desc: 'AMD 可压低与 tRAS 一致，双面平台可显著提升带宽。' },
        ].map((item) => (
          <div key={item.label} className="p-4 border border-border bg-secondary/20">
            <h4 className="text-xs font-bold text-primary uppercase mb-1 font-mono">{item.label}</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTimings;
