// News API
export type createNewBody = {
  c_news_id: string | number;
  title: string;
  description: string;
  author: string;
};

export type updateNewBody = {
  c_news_id: string | number;
  title: string;
  description: string;
  author: string;
};

// Token
export type token = string;
