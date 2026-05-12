import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar, MobileNav } from './components/layouts/Navigation';
import { Toaster } from '@/components/ui/sonner';

// Placeholder components for initial routing
const Overview = React.lazy(() => import('./pages/Overview'));
const IntelPlatform = React.lazy(() => import('./pages/imc/IntelPlatform'));
const AmdPlatform = React.lazy(() => import('./pages/imc/AmdPlatform'));
const SignalTransmission = React.lazy(() => import('./pages/imc/SignalTransmission'));
const BottleneckAnalysis = React.lazy(() => import('./pages/BottleneckAnalysis'));
const FrequencyKnowledge = React.lazy(() => import('./pages/memory/FrequencyKnowledge'));
const MainTimings = React.lazy(() => import('./pages/memory/MainTimings'));
const SecondaryTimings = React.lazy(() => import('./pages/memory/SecondaryTimings'));
const EfficiencyTimings = React.lazy(() => import('./pages/memory/EfficiencyTimings'));
const DoubleSidedTimings = React.lazy(() => import('./pages/memory/DoubleSidedTimings'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const Loading = () => (
  <div className="flex h-full w-full items-center justify-center bg-background min-h-[400px]">
    <div className="flex flex-col items-center gap-4">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Initialising Core...</span>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full bg-background font-sans selection:bg-primary/20 selection:text-primary">
        <Sidebar />
        <div className="flex-1 min-w-0 flex flex-col">
          <MobileNav />
          <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/imc/intel" element={<IntelPlatform />} />
                <Route path="/imc/amd" element={<AmdPlatform />} />
                <Route path="/imc/signal" element={<SignalTransmission />} />
                <Route path="/bottleneck" element={<BottleneckAnalysis />} />
                <Route path="/memory/frequency" element={<FrequencyKnowledge />} />
                <Route path="/memory/timings/main" element={<MainTimings />} />
                <Route path="/memory/timings/secondary" element={<SecondaryTimings />} />
                <Route path="/memory/timings/efficiency" element={<EfficiencyTimings />} />
                <Route path="/memory/timings/double-sided" element={<DoubleSidedTimings />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </Suspense>
          </main>
          <footer className="px-6 py-8 border-t border-border mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                XCP INTERNAL TRAINING MATERIAL // NO UNAUTHORIZED DISTRIBUTION
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                &copy; 2026 XCP TECH LABS
              </span>
            </div>
          </footer>
        </div>
        <Toaster theme="dark" position="bottom-right" closeButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
