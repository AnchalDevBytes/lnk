export interface AnalyticsInterface {
    status : number,
    message: string,
    totalClicks: number,
    analytics: AnalyticsDataType[];
}

export type AnalyticsDataType = {
    id: number;
    urlId: number;
    timestamp: Date;
  };