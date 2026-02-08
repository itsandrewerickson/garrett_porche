import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function calculateSLA(): { message: string; deadline: Date } {
  const now = new Date();
  const pstOffset = -8; // PST is UTC-8
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const pstTime = new Date(utc + 3600000 * pstOffset);

  const hours = pstTime.getHours();
  const isBusinessHours = hours >= 8 && hours < 16; // 8 AM - 4 PM

  if (isBusinessHours) {
    // Within business hours: current time + 3 hours
    const deadline = new Date(pstTime.getTime() + 3 * 60 * 60 * 1000);

    // If deadline goes past 4 PM, set to 11 AM tomorrow
    if (deadline.getHours() >= 16) {
      deadline.setDate(deadline.getDate() + 1);
      deadline.setHours(11, 0, 0, 0);
      return {
        message: `Report guaranteed by 11:00 AM tomorrow`,
        deadline,
      };
    }

    const formattedTime = deadline.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return {
      message: `Report guaranteed by ${formattedTime} today`,
      deadline,
    };
  } else {
    // Outside business hours: 11 AM next business day
    const deadline = new Date(pstTime);
    deadline.setDate(deadline.getDate() + 1);
    deadline.setHours(11, 0, 0, 0);

    return {
      message: `Shop closed. Priority report guaranteed by 11:00 AM tomorrow`,
      deadline,
    };
  }
}

export const PORSCHE_MODELS = [
  "911",
  "718 Cayman",
  "718 Boxster",
  "Cayenne",
  "Macan",
  "Panamera",
  "Taycan",
] as const;

export type PorscheModel = (typeof PORSCHE_MODELS)[number];
