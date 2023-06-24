export const Role = {
  SYSTEM: 'system',
  USER: 'user',
  ASSISTANT: 'assistant',
} as const;

export type RoleType = (typeof Role)[keyof typeof Role];

export type Message = {
  content: string;
  role: RoleType;
};

export type SendMessageRequest = {
  message: string;
  messages: Message[];
};

export type Choice = {
  finish_reason: string;
  index: number;
  message: Message;
};

export type SendMessageResponse = {
  choices: Choice[];
};
