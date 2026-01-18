// src/components/ui/ServiceIcon.jsx
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  Cloud,
  Shield,
  TrendingUp,
  Megaphone,
  Bot,
  Blocks,
  Database,
  Code,
  Cpu,
  Layout,
  Zap,
  HelpCircle
} from 'lucide-react';

const iconComponents = {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Cloud,
  Shield,
  TrendingUp,
  Megaphone,
  Bot,
  Blocks,
  Database,
  Code,
  Cpu,
  Layout,
  Zap
};

const ServiceIcon = ({ name, className = "w-6 h-6", ...props }) => {
  const IconComponent = iconComponents[name] || HelpCircle;
  return <IconComponent className={className} {...props} />;
};

export default ServiceIcon;