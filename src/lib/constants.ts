import {
  Activity,
  BarChart3,
  Bell,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Cloud,
  FileClock,
  Globe2,
  History,
  Languages,
  LayoutDashboard,
  LogIn,
  MessageSquareWarning,
  QrCode,
  Smartphone,
  Timer,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Problems", href: "#problems" },
  { label: "Solution", href: "#solution" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export const problemItems = [
  { title: "Patients repeatedly ask reception.", icon: MessageSquareWarning },
  { title: "Waiting rooms become crowded.", icon: Users },
  { title: "Doctors manually call every patient.", icon: Bell },
  { title: "No visibility of waiting time.", icon: Timer },
  { title: "Missed patient turns.", icon: CalendarClock },
];

export const solutionItems = [
  { title: "Live Queue Tracking", description: "Patients see their current token status in real time.", icon: Activity },
  { title: "Digital Token Booking", description: "Book a token before arriving and reduce front-desk friction.", icon: ClipboardList },
  { title: "QR Based Check-in", description: "Share a clinic QR that opens the booking flow instantly.", icon: QrCode },
  { title: "Instant Token Updates", description: "Keep everyone informed when the queue moves.", icon: Bell },
  { title: "Patient Visit History", description: "Store simple visit records for faster repeat visits.", icon: History },
  { title: "Multi-language Support", description: "Built for English and Gujarati patient experiences.", icon: Languages },
];

export const featureItems = [
  { title: "Live Queue", icon: Activity },
  { title: "QR Sharing", icon: QrCode },
  { title: "OTP Login", icon: LogIn },
  { title: "Patient History", icon: FileClock },
  { title: "Queue Dashboard", icon: LayoutDashboard },
  { title: "Token Analytics", icon: BarChart3 },
  { title: "Business Profile", icon: Building2 },
  { title: "Multi-language", icon: Globe2 },
  { title: "Responsive Web App", icon: Smartphone },
  { title: "Cloud Hosted", icon: Cloud },
];

export const comparisonRows = [
  ["Manual Tokens", "Digital Tokens"],
  ["Ask Reception", "Live Queue"],
  ["Paper Register", "Digital History"],
  ["Crowded Waiting Area", "Better Flow"],
  ["No Insights", "Analytics Dashboard"],
];

export const screenItems = ["Patient Home", "Book Token", "Live Queue", "Doctor Dashboard", "Analytics", "Patient History"];

export const faqs = [
  {
    question: "How does Flexza work?",
    answer: "Clinics share a link or QR code, patients verify their mobile number, book a digital token, and track the live queue from their phone.",
  },
  {
    question: "Is there any mobile app?",
    answer: "Flexza is a responsive web app, so patients and clinics can use it from any modern browser without installing an app.",
  },
  {
    question: "Can patients book from home?",
    answer: "Yes. Clinics can allow patients to book a token before arriving and follow the queue remotely.",
  },
  {
    question: "Can I use my own clinic domain?",
    answer: "Custom domains can be supported for clinics that want a branded booking experience.",
  },
  {
    question: "Does it support Gujarati?",
    answer: "Yes. Flexza is designed with English and Gujarati support in mind using the Anek font family.",
  },
  {
    question: "How long does setup take?",
    answer: "Most clinics can be onboarded quickly after collecting basic business details, queue rules, and staff access requirements.",
  },
];

export const trustedLogos = ["Aarogya Care", "Nova Clinic", "Smile Studio", "Urban Wellness", "CarePoint"];

export const benefitGroups = [
  {
    title: "Patients",
    items: ["Less waiting", "Live queue tracking", "Book again easily", "Visit history", "Mobile friendly"],
  },
  {
    title: "Clinics",
    items: [
      "Better queue management",
      "Reduced reception workload",
      "Digital records",
      "Improved patient experience",
      "Higher operational efficiency",
    ],
  },
];

export const footerGroups = [
  { title: "Product", links: ["Features", "Pricing (Coming Soon)", "FAQ"] },
  { title: "Company", links: ["About", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms"] },
  { title: "Social", links: ["LinkedIn", "Instagram"] },
];

export const CheckIcon = CheckCircle2;
