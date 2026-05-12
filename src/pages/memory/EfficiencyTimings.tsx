import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Activity, Zap, TrendingUp, Info } from 'lucide-react';

const EfficiencyTimings = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">效能时序 <span className="text-primary italic">Efficiency</span></h1>
        <p className="text-muted-foreground">效能时序包含 tRDRD, tWRWR, tWRRD, tRDWR。决定了内存在相同频率下的“流转效率”和实际带宽。</p>
      </header>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold uppercase tracking-tight">tRDRDsg 缩放规律</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">海力士 3GM 缩放表 (Intel vs AMD)</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="font-mono text-[10px]">频率 (MT/s)</TableHead>
                  <TableHead className="font-mono text-[10px]">tRDRDsg (Intel)</TableHead>
                  <TableHead className="font-mono text-[10px]">tRDRDscl (AMD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs font-mono">
                <TableRow><TableCell>4800 - 5800</TableCell><TableCell>10</TableCell><TableCell>2</TableCell></TableRow>
                <TableRow><TableCell>6000 - 7000</TableCell><TableCell>12</TableCell><TableCell>4</TableCell></TableRow>
                <TableRow><TableCell>7200 - 8200</TableCell><TableCell className="text-primary font-bold">14</TableCell><TableCell className="text-primary font-bold">6</TableCell></TableRow>
                <TableRow><TableCell>8400 - 9400</TableCell><TableCell className="text-primary font-bold">16</TableCell><TableCell className="text-primary font-bold">8</TableCell></TableRow>
                <TableRow><TableCell>9600 - 10600</TableCell><TableCell className="text-primary font-bold">18</TableCell><TableCell className="text-primary font-bold">10</TableCell></TableRow>
              </TableBody>
            </Table>
            <div className="p-4 bg-muted/50 border-t border-border text-[10px] space-y-1">
              <p>• 对应关系: <span className="text-primary font-bold">tRDRDsg = tRDRDscl + 8</span></p>
              <p>• Intel tRDRDdg 恒为 8，AMD tRDRDsc 恒为 1</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-primary/20 bg-primary/[0.01]">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" /> tWRWRsg 效能最佳值
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground text-xs">取决于 IMC 特性。海力士/长鑫不随频率缩放，需寻找 IMC 能效平衡点。</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 border border-border">
                <span className="font-bold">Intel 12-14th</span>
                <Badge variant="outline" className="font-mono">12 - 16</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border border-border">
                <span className="font-bold">Intel Ultra 200</span>
                <Badge variant="outline" className="font-mono">22 - 28 (or 56)</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border border-border">
                <span className="font-bold">AMD Platform</span>
                <Badge variant="outline" className="font-mono">4 - 8 (scl)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-lg">美光颗粒特例</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground text-xs">美光颗粒 tWRWRsg 会随频率线性缩放。延迟（tWRWRsg*2000/频率）不能低于 7.5ns。</p>
            <div className="p-3 bg-accent/5 border border-accent/20 font-mono text-[10px] space-y-1">
              <div className="flex justify-between"><span>6400 MT/s</span> <span>24</span></div>
              <div className="flex justify-between"><span>7000 MT/s</span> <span>27</span></div>
              <div className="flex justify-between"><span>7600 MT/s</span> <span>29</span></div>
            </div>
            <p className="text-[10px] text-muted-foreground italic">
              * 由于 tWRWRsg 数值较高，美光颗粒同频率带宽显著低于海力士。
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="p-6 border border-border bg-secondary/30 rounded-sm">
        <div className="flex gap-4 items-start">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-bold text-sm uppercase">tRDWR 随频率缩放</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Intel 12-14 代 DDR5 在 20 左右。Ultra 200 平台强制为奇数 (19, 21, 23)。AMD 海力士可压到 15。
              压低 tRDWR 可以小幅度提升带宽，且对耐温没有显著影响。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyTimings;
