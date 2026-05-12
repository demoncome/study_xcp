import { 
  Cpu, 
  Zap, 
  Activity, 
  Database, 
  Layout, 
  Settings, 
  HardDrive,
  Info,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export const navItems = [
  {
    title: '概览',
    href: '/',
    icon: Info
  },
  {
    title: 'IMC 部分',
    icon: Cpu,
    children: [
      {
        title: 'Intel 平台',
        href: '/imc/intel'
      },
      {
        title: 'AMD 平台',
        href: '/imc/amd'
      },
      {
        title: '信号传输',
        href: '/imc/signal'
      }
    ]
  },
  {
    title: '瓶颈分析',
    href: '/bottleneck',
    icon: Activity
  },
  {
    title: '内存部分',
    icon: Database,
    children: [
      {
        title: '频率知识',
        href: '/memory/frequency'
      },
      {
        title: '主时序',
        href: '/memory/timings/main'
      },
      {
        title: '副时序',
        href: '/memory/timings/secondary'
      },
      {
        title: '效能时序',
        href: '/memory/timings/efficiency'
      },
      {
        title: '双面时序',
        href: '/memory/timings/double-sided'
      }
    ]
  }
];
