export interface TableDataColumnModel {
  headers: TableColumn[];
  filters: TableFilter[];
  rowPerPage: number[];
}

export interface TableColumn {
  field: string;
  header: string;
}

export interface TableFilter {
  field: string;
  order: number;
}
