import type { Metadata } from "next";
import ServicesView from "@/components/freelance/ServicesView";

export const metadata: Metadata = {
  title: "Hire Me — Abhishek Nagaraja",
  description: "Freelance consulting and product development services",
};

export default function FreelancePage() {
  return <ServicesView />;
}
