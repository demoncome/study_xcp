import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileQuestion, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in zoom-in duration-300">
      <div className="relative">
        <div className="text-[120px] font-black text-primary/10 select-none">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FileQuestion size={64} className="text-primary animate-bounce" />
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Signal Lost // 信号丢失</h2>
        <p className="text-muted-foreground text-sm max-w-xs">
          请求的页面地址未能在当前知识库拓扑结构中定位。请检查 URL 或返回主控界面。
        </p>
      </div>

      <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
        <Link to="/" className="flex items-center gap-2">
          <Home size={16} />
          返回控制台
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
