export type CommonDataType = { id: number; label: string };

export type CommonDataState = {
  data: CommonDataType[];
  loading: boolean;
  error: { message: string } | null;
};
