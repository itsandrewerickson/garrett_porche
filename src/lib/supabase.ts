import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for our database
export interface Ticket {
  id: string;
  created_at: string;
  status: "pending" | "analyzing" | "completed";
  contact_email: string;
  contact_name: string;
  contact_phone?: string;
  vehicle_info: {
    year: number;
    model: string;
    vin?: string;
  };
  symptom_log: string;
  error_codes?: string;
  media_urls: string[];
  stripe_session_id?: string;
  guaranteed_by: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
  status: "active" | "unsubscribed";
}

export interface Profile {
  id: string;
  user_id: string;
  subscription_status: "active" | "past_due" | "canceled" | "none";
  stripe_customer_id?: string;
  created_at: string;
}
