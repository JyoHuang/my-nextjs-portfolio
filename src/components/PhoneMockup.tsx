"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LayoutDashboard, CheckCircle2, Search, ArrowRight, Activity, Wallet, User } from "lucide-react";

export default function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movements
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  // Map mouse x/y (-0.5 to 0.5) to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[650px] flex items-center justify-center [perspective:1400px] transform-gpu"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[300px] h-[600px] xl:w-[320px] xl:h-[650px] rounded-[3.5rem] border-[10px] border-[#1a1a1b] bg-[#1a1a1b] shadow-2xl cursor-grab active:cursor-grabbing will-change-transform"
      >
        {/* Phone frame glare (left edge highlight) */}
        <div className="absolute top-0 left-0 w-full h-full rounded-[3rem] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2)] pointer-events-none z-50"></div>

        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-[60] flex items-center justify-between px-3 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          <div className="w-2 h-2 rounded-full bg-zinc-800/80 mr-1" />
          <div className="w-3 h-3 rounded-full bg-indigo-900 border border-indigo-500/30 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white opacity-80" />
          </div>
        </div>

        {/* Screen Background */}
        <div className="relative w-full h-full bg-[#f8fafc] rounded-[2.8rem] overflow-hidden flex flex-col pt-12 text-[#1e293b] font-sans shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]">
          
          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 mb-1">Welcome back,</p>
              <h3 className="text-xl font-bold tracking-tight">Joey H.</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User size={20} />
            </div>
          </div>

          {/* Quick Actions / Search */}
          <div className="px-6 mb-6">
            <div className="w-full bg-white h-12 rounded-2xl flex items-center px-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100">
              <Search size={18} className="text-slate-400 mr-3" />
              <span className="text-slate-400 text-sm">Pay, transfer, request...</span>
            </div>
          </div>

          {/* Main Card */}
          <div className="px-6 mb-6">
            <div className="w-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-5 text-white shadow-lg shadow-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <p className="text-blue-100 text-sm font-medium mb-1">Total Balance</p>
              <h2 className="text-3xl font-bold tracking-tight mb-4">$12,450.00</h2>
              <div className="flex items-center gap-3">
                <button className="flex-1 bg-white/20 hover:bg-white/30 transition-colors py-2 rounded-xl text-sm font-medium backdrop-blur-md">
                  Transfer
                </button>
                <button className="flex-1 bg-white/20 hover:bg-white/30 transition-colors py-2 rounded-xl text-sm font-medium backdrop-blur-md">
                  Add Money
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity List */}
          <div className="px-6 flex-1 bg-white rounded-t-[2.5rem] shadow-[0_-4px_24px_rgba(0,0,0,0.03)] pt-6 pb-20 border-t border-slate-100">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold text-lg">Recent</h4>
              <span className="text-blue-600 text-sm font-semibold">See all</span>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Coffee Shop", time: "Today, 8:43 AM", amount: "-$4.50", icon: Wallet, color: "bg-orange-100 text-orange-600" },
                { name: "Salary Deposit", time: "Yesterday, 3:00 PM", amount: "+$3,240.00", icon: CheckCircle2, color: "bg-emerald-100 text-emerald-600", amountColor: "text-emerald-600" },
                { name: "Netflix Subscription", time: "May 12, 10:00 AM", amount: "-$15.99", icon: Activity, color: "bg-red-100 text-red-600" },
                { name: "Grocery Store", time: "May 10, 6:30 PM", amount: "-$84.20", icon: LayoutDashboard, color: "bg-indigo-100 text-indigo-600" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[15px]">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.time}</p>
                    </div>
                  </div>
                  <p className={`font-semibold ${item.amountColor || "text-slate-800"}`}>{item.amount}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full pointer-events-none" />
        </div>

        {/* Hardware Buttons (Simulated 3D Extrusions) */}
        {/* Volume Up */}
        <div className="absolute top-36 -left-[14px] w-[5px] h-12 bg-zinc-800 rounded-l-sm" style={{ transform: "translateZ(-1px)" }} />
        {/* Volume Down */}
        <div className="absolute top-52 -left-[14px] w-[5px] h-12 bg-zinc-800 rounded-l-sm" style={{ transform: "translateZ(-1px)" }} />
        {/* Power Button */}
        <div className="absolute top-44 -right-[14px] w-[5px] h-16 bg-zinc-800 rounded-r-sm" style={{ transform: "translateZ(-1px)" }} />
      </motion.div>
    </div>
  );
}
