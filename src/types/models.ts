import { ModelIcon } from "@/components/model-icon";
import { providers } from "@/config/models";
import { ComponentProps } from "react";
import { TToolKey } from "./tools";

export type TProvider = (typeof providers)[number];

export const models = [
  "gpt-4o-mini",
  "gpt-4o",
  "gpt-4",
  "gpt-4-turbo",
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-0125",
  "claude-3-opus-20240229",
  "claude-3-sonnet-20240229",
  "claude-3-5-sonnet-20240620",
  "claude-3-haiku-20240307",
  "gemini-pro",
  "gemini-1.5-flash-latest",
  "gemini-1.5-pro-latest",
  "phi3:latest",
] as const;

export type TModelKey = (typeof models)[number] | string;

export type TModelItem = {
  name: string;
  key: TModelKey;
  isNew?: boolean;
  isFree?: boolean;
  isSignUpRequired?: boolean;
  icon: ComponentProps<typeof ModelIcon>["type"];
  vision?: boolean;
  tokens: number;
  plugins: TToolKey[];
  provider: TProvider;
  maxOutputTokens: number;
};