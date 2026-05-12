import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Database, Zap, Thermometer, Info } from 'lucide-react';

const FrequencyKnowledge = () => {
  const ddr4Chips = [
    { name: '海力士 CJR', limit: '4200 MT/s', feature: '主流/体质一般' },
    { name: '三星 5WB (B-die) 单面', limit: '4800 MT/s', feature: '低延迟/超频利器' },
    { name: '三星 5WB (B-die) 双面', limit: '4533 MT/s', feature: '密度高/频率稍低' },
    { name: '美光 C9BLJ', limit: '5600 MT/s', feature: 'DDR4 极限频率之王' },
  ];

  const ddr5Chips = [
    { name: '海力士 2GM', limit: '7600 MT/s', feature: '初代主流颗粒' },
    { name: '海力士 2GA', limit: '9200 MT/s', feature: '极高频/性能优异' },
    { name: '海力士 3GM', limit: '10000+ MT/s', feature: '目前地表最强' },
    { name: '美光 / 长鑫', limit: '7600 MT/s', feature: '兼容性良好' },
    { name: '南亚', limit: '7200 MT/s', feature: '入门级 DDR5' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">频率知识 <span className="text-primary italic">Frequency</span></h1>
        <p className="text-muted-foreground">内存频率极限定义：在 CPU PHY 和主板布线均具备充足余量的理想环境下，内存颗粒因自身物理体质耗尽而达到的最高临界频率。</p>
      </header>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold uppercase tracking-tight">DDR5 颗粒频率极限表</h2>
        </div>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="font-mono text-[10px] uppercase">颗粒型号</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase">频率上限 (MT/s)</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase">特性描述</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ddr5Chips.map((chip) => (
                  <TableRow key={chip.name} className="hover:bg-primary/5 transition-colors">
                    <TableCell className="font-bold">{chip.name}</TableCell>
                    <TableCell className="font-mono text-primary font-bold">{chip.limit}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{chip.feature}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-bold uppercase tracking-tight">DDR4 颗粒频率极限表</h2>
        </div>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="font-mono text-[10px] uppercase">颗粒型号</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase">频率上限 (MT/s)</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase">特性描述</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ddr4Chips.map((chip) => (
                  <TableRow key={chip.name} className="hover:bg-accent/5 transition-colors">
                    <TableCell className="font-bold">{chip.name}</TableCell>
                    <TableCell className="font-mono text-accent font-bold">{chip.limit}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{chip.feature}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <div className="p-6 border border-border bg-secondary/30 rounded-sm">
        <div className="flex gap-4 items-start">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-bold text-sm uppercase italic">注意：非规律时序放宽</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              海力士 2GA 在 9200 以后可以进行非规律的时序放宽获得 10000+ 的频率。同样颗粒体质不同，上限可能存在 400+ MT/s 的巨大差距。
              主板厂商的兼容性优化也会显著影响内存信号质量和最终上限。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequencyKnowledge;
