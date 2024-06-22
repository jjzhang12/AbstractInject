
export interface DataSubscription {
  id: string;
}
export interface RuntimeDataService {
  createSubscription: () => Promise<DataSubscription>;
}

export abstract class RuntimeData implements RuntimeDataService {
  createSubscription!: () => Promise<DataSubscription>;  
}