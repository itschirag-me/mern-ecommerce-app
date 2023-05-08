type FilterType = {
  pageNumber: number;
  limit: number;
  field: string;
  sortOrder: "asc" | "desc";
};

export type FilterTypeQuery = {
  page?: string;
  limit?: string;
  field?: string;
  sortOrder?: "asc" | "desc";
};

export default FilterType;
