import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import axios from "axios";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const BASE_URL = "https://landybackend.onrender.com";

export const fetcher = (url) => axios.get(`${url}`).then(res => res.data);
export const districts = [
    "Сүхбаатар",
    "Сонгинохайрхан",
    "Налайх",
    "Хан Уул",
    "Чингэлтэй",
    "Баянзүрх",
    "Баянгол",
  ];

