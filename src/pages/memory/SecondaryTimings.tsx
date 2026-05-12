import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Layers, Thermometer, Clock, Info } from 'lucide-react';

const SecondaryTimings = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <h1 className="text-3xl font-black tracking-tighter uppercase">副时序 <span className="text-primary italic">Secondary Timings</span></h1>
        <p className="text-muted-foreground">包含 tRFC, tREFI, tWR, tWTR, tRRD, tRTP, tFAW, tCWL。副时序直接影响内存的实际带宽和游戏帧数。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" /> tRRDl (Row to Row Delay Long)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground">一般为颗粒密度的整数倍。越接近极限频率，tRRDl 越影响耐温且不随电压缩放。</p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-mono text-[10px]">频率 (MT/s)</TableHead>
                    <TableHead className="font-mono text-[10px]">海力士 3GM tRRDl</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  <TableRow><TableCell>4800-6400</TableCell><TableCell className="font-mono">8 (理论 6)</TableCell></TableRow>
                  <TableRow><TableCell>6600-8200</TableCell><TableCell className="font-mono text-primary font-bold">9</TableCell></TableRow>
                  <TableRow><TableCell>8400-10000</TableCell><TableCell className="font-mono text-primary font-bold">12</TableCell></TableRow>
                  <TableRow><TableCell>10200-11800</TableCell><TableCell className="font-mono text-primary font-bold">15</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> tRFC (Refresh Cycle Time)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="text-muted-foreground">决定刷新周期。计算公式: tRFC 延迟 = tRFC * 2000 / 频率 (ns)。</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 border border-border bg-secondary/50">
                <p className="text-[10px] text-muted-foreground uppercase">海力士 2GA</p>
                <p className="font-mono font-bold">120ns</p>
              </div>
              <div className="p-2 border border-border bg-secondary/50">
                <p className="text-[10px] text-muted-foreground uppercase">海力士 3GM</p>
                <p className="font-mono font-bold">160ns</p>
              </div>
              <div className="p-2 border border-border bg-secondary/50">
                <p className="text-[10px] text-muted-foreground uppercase">美光 C9BLJ</p>
                <p className="font-mono font-bold">280ns</p>
              </div>
              <div className="p-2 border border-border bg-secondary/50">
                <p className="text-[10px] text-muted-foreground uppercase">海力士 CJR</p>
                <p className="font-mono font-bold">260ns</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-accent/20 bg-accent/[0.01]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-accent" /> tREFI (Refresh Interval)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <p className="text-muted-foreground">控制数据刷新间隔。tREFI 越高，带宽越高延迟越低，但耐温显著下降。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-bold border-b border-border pb-1">Intel DDR5</h4>
              <p className="font-mono text-primary text-lg">262,143 MAX</p>
              <p className="text-[10px] text-muted-foreground">由于上限极高，基本不会受 tRFC 性能影响。</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold border-b border-border pb-1">AMD DDR5</h4>
              <p className="font-mono text-accent text-lg">65,535 MAX</p>
              <p className="text-[10px] text-muted-foreground">上限受限，选择低 tRFC 颗粒会有更好性能。</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-muted border border-border text-xs">
            <span className="font-bold uppercase text-primary">性能准则:</span> 建议保持 <span className="font-mono font-bold">tREFI / tRFC &gt; 100</span> 以确保最佳带宽。
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border border-border bg-secondary/20">
          <h4 className="text-xs font-bold text-primary uppercase mb-1 font-mono">tWRRD (tWTR)</h4>
          <p className="text-[10px] text-muted-foreground leading-relaxed">Intel 由 tWRRD 控制，AMD 直接控制。海力士 3G 在 AMD 下 tWTRl 随频率 14-24 缩放。</p>
        </div>
        <div className="p-4 border border-border bg-secondary/20">
          <h4 className="text-xs font-bold text-primary uppercase mb-1 font-mono">tWR</h4>
          <p className="text-[10px] text-muted-foreground leading-relaxed">压低可提升带宽。AMD 强制最低 48，Intel 视主板而定可压得更低。</p>
        </div>
        <div className="p-4 border border-border bg-secondary/20">
          <h4 className="text-xs font-bold text-primary uppercase mb-1 font-mono">tRRDs / tFAW / tRTP</h4>
          <p className="text-[10px] text-muted-foreground leading-relaxed">通常固定为极限值 (4/16/12)，尚未见不能稳定运行极限值的颗粒。</p>
        </div>
      </div>
    </div>
  );
};

export default SecondaryTimings;
